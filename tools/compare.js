/* ============================================================================
   TACEDGE Geotech V2 — screenshot diff (dev-only, never deployed)
   ----------------------------------------------------------------------------
   Pixel-diffs two shot directories produced by shots.js and prints a per-image
   changed-pixel percentage. Writes a diff image into ./diffs for anything above
   the threshold, and reports size mismatches (which read as a full change).

   Usage:
     node compare.js baseline current
     node compare.js baseline current --threshold 0.1
   ========================================================================== */
const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');
const pixelmatch = require('pixelmatch');

const [,, aName = 'baseline', bName = 'current'] = process.argv;
const A = path.resolve(__dirname, aName);
const B = path.resolve(__dirname, bName);
const ti = process.argv.indexOf('--threshold');
const THRESHOLD = ti > -1 ? parseFloat(process.argv[ti + 1]) : 0.1; // percent
const DIFFS = path.resolve(__dirname, 'diffs');

if (!fs.existsSync(A) || !fs.existsSync(B)) {
  console.error(`Missing directory: ${!fs.existsSync(A) ? A : B}`);
  process.exit(2);
}
fs.mkdirSync(DIFFS, { recursive: true });

const images = fs.readdirSync(A).filter(f => f.endsWith('.png')).sort();
let worst = 0, changed = 0, missing = 0;
const rows = [];

for (const name of images) {
  const bp = path.join(B, name);
  if (!fs.existsSync(bp)) { missing++; rows.push([name, 'MISSING in ' + bName, '']); continue; }
  const a = PNG.sync.read(fs.readFileSync(path.join(A, name)));
  const b = PNG.sync.read(fs.readFileSync(bp));
  if (a.width !== b.width || a.height !== b.height) {
    changed++; worst = 100;
    rows.push([name, 'SIZE', `${a.width}x${a.height} -> ${b.width}x${b.height}`]);
    continue;
  }
  const diff = new PNG({ width: a.width, height: a.height });
  const n = pixelmatch(a.data, b.data, diff.data, a.width, a.height, { threshold: 0.1 });
  const pct = (n / (a.width * a.height)) * 100;
  worst = Math.max(worst, pct);
  if (pct > THRESHOLD) {
    changed++;
    fs.writeFileSync(path.join(DIFFS, name), PNG.sync.write(diff));
    rows.push([name, pct.toFixed(3) + '%', 'diff written']);
  }
}

console.log(`\nCompared ${images.length} images  (${aName} vs ${bName}, threshold ${THRESHOLD}%)`);
if (rows.length) {
  console.log('Changes:');
  for (const [n, pct, note] of rows) console.log(`  ${n.padEnd(44)} ${String(pct).padEnd(28)} ${note}`);
} else {
  console.log('No image over threshold. Visually stable.');
}
console.log(`\nworst=${worst.toFixed(3)}%  over-threshold=${changed}  missing=${missing}`);
process.exit(changed || missing ? 1 : 0);
