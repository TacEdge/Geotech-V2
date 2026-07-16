/* ============================================================================
   TACEDGE Geotech V2 — screenshot harness (dev-only, never deployed)
   ----------------------------------------------------------------------------
   Serves prototype/ on a local port and captures a full-page screenshot of
   index.html and every screen in prototype/screens/, at two viewports, into an
   output directory. It also snapshots the Configurable Engine export JSON.

   The output is the visual baseline the refactor is diffed against. Run once
   before any change (writes ./baseline), then again after each stage
   (--out current) and diff with compare.js.

   Usage:
     node shots.js                 # writes ./baseline
     node shots.js --out current   # writes ./current

   Playwright resolves from the environment install; the Chromium binary is
   found under PLAYWRIGHT_BROWSERS_PATH so no browser download is needed.
   ========================================================================== */
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', 'prototype');
const PORT = 8123;

/* Two viewports: desktop PM chrome and field/mobile chrome. deviceScaleFactor
   is pinned to 1 so runs are deterministic and comparable. */
const VIEWPORTS = [
  { tag: 'desktop', width: 1440, height: 900 },
  { tag: 'mobile',  width: 390,  height: 844 }
];

function outDir() {
  const i = process.argv.indexOf('--out');
  const name = i > -1 && process.argv[i + 1] ? process.argv[i + 1] : 'baseline';
  return path.resolve(__dirname, name);
}

/* Resolve Playwright's chromium from the environment install (matched to the
   pre-downloaded browser), falling back to the known global module path. */
function loadChromium() {
  for (const p of ['playwright', '/opt/node22/lib/node_modules/playwright']) {
    try { return require(p).chromium; } catch (_) {}
  }
  throw new Error('Playwright not found. Run: npm install');
}

/* Find the chrome executable under PLAYWRIGHT_BROWSERS_PATH (or the default). */
function chromeExecutable() {
  const base = process.env.PLAYWRIGHT_BROWSERS_PATH || '/opt/pw-browsers';
  try {
    const dir = fs.readdirSync(base).find(d => /^chromium-\d+$/.test(d));
    if (dir) {
      const exe = path.join(base, dir, 'chrome-linux', 'chrome');
      if (fs.existsSync(exe)) return exe;
    }
  } catch (_) {}
  return undefined; // let Playwright resolve it itself
}

const MIME = {
  '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript',
  '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2', '.woff': 'font/woff', '.webmanifest': 'application/manifest+json'
};

function startServer() {
  return new Promise(resolve => {
    const srv = http.createServer((req, res) => {
      let p = decodeURIComponent(req.url.split('?')[0]);
      if (p === '/') p = '/index.html';
      const fp = path.join(ROOT, p);
      if (!fp.startsWith(ROOT)) { res.writeHead(403); return res.end('forbidden'); }
      fs.readFile(fp, (err, data) => {
        if (err) { res.writeHead(404); return res.end('not found'); }
        res.writeHead(200, { 'Content-Type': MIME[path.extname(fp)] || 'application/octet-stream' });
        res.end(data);
      });
    });
    srv.listen(PORT, () => resolve(srv));
  });
}

function pages() {
  // Share one source of truth with the app: read the screen manifest. Fall back
  // to globbing the screens dir if the manifest is missing.
  const list = [{ id: 'index', url: 'index.html' }];
  const manifestPath = path.join(ROOT, 'config', 'screens.js');
  try {
    // The manifest is JS (window.TE_SCREENS = [...]), not JSON: eval it safely.
    const raw = fs.readFileSync(manifestPath, 'utf8');
    const win = {};
    new Function('window', raw)(win);
    const arr = win.TE_SCREENS || [];
    if (!arr.length) throw new Error('empty manifest');
    for (const s of arr) list.push({ id: s.id, url: s.path });
    return list;
  } catch (_) {
    const screens = fs.readdirSync(path.join(ROOT, 'screens'))
      .filter(f => f.endsWith('.html')).sort();
    return list.concat(screens.map(f => ({ id: f.replace(/\.html$/, ''), url: 'screens/' + f })));
  }
}

(async () => {
  const out = outDir();
  fs.mkdirSync(out, { recursive: true });
  const chromium = loadChromium();
  const srv = await startServer();
  const browser = await chromium.launch({ executablePath: chromeExecutable() });

  const list = pages();
  console.log(`Capturing ${list.length} pages x ${VIEWPORTS.length} viewports = ${list.length * VIEWPORTS.length} images -> ${path.basename(out)}/`);

  // Optional: capture with a specific project active (writes te.project into
  // sessionStorage before each page loads), so a non-default work type can be
  // shot into its own output dir. e.g. --project cashmere-ridge --out piling.
  const pIdx = process.argv.indexOf('--project');
  const activeProjectId = pIdx > -1 ? process.argv[pIdx + 1] : null;

  let failures = 0;
  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
      reducedMotion: 'reduce'
    });
    if (activeProjectId) {
      await ctx.addInitScript(pid => {
        try { sessionStorage.setItem('te.project', pid); } catch (_) {}
      }, activeProjectId);
    }
    for (const pg of list) {
      const page = await ctx.newPage();
      const errs = [];
      page.on('pageerror', e => errs.push(e.message));
      try {
        await page.goto(`http://127.0.0.1:${PORT}/${pg.url}`, { waitUntil: 'networkidle', timeout: 30000 });
        await page.evaluate(() => document.fonts && document.fonts.ready).catch(() => {});
        await page.waitForTimeout(150);
        await page.screenshot({ path: path.join(out, `${pg.id}.${vp.tag}.png`), fullPage: true });
        if (errs.length) console.log(`  ! ${pg.id}.${vp.tag}: pageerror ${JSON.stringify(errs)}`);
      } catch (e) {
        failures++;
        console.log(`  x ${pg.id}.${vp.tag}: ${e.message}`);
      }
      await page.close();
    }
    await ctx.close();
  }

  /* Snapshot the Configurable Engine serialised export (the window.TE seam). */
  try {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    if (activeProjectId) {
      await ctx.addInitScript(pid => {
        try { sessionStorage.setItem('te.project', pid); } catch (_) {}
      }, activeProjectId);
    }
    const page = await ctx.newPage();
    await page.goto(`http://127.0.0.1:${PORT}/screens/platform.html`, { waitUntil: 'networkidle', timeout: 30000 });
    const json = await page.evaluate(async () => {
      try { const m = await import('/config/projects.js'); return m.serialise(); } catch (_) { return null; }
    });
    if (json) { fs.writeFileSync(path.join(out, 'export.json'), json); console.log('  export.json captured'); }
    else console.log('  ! export.json: window.TE.serialise() unavailable');
    await ctx.close();
  } catch (e) { console.log('  x export.json: ' + e.message); }

  await browser.close();
  srv.close();
  console.log(failures ? `Done with ${failures} failure(s).` : 'Done. All pages captured.');
  process.exit(failures ? 1 : 0);
})();
