# TacEdge Ground Engineering — Prototype

A dependency-free, static, multi-page HTML/CSS/JS clickable prototype for the
TacEdge Ground Engineering field-and-office workflow, presented around a worked example:
Spillway Anchoring at Benmore Dam. It installs as a PWA and deploys to GitHub
Pages.

## What actually deploys

**Only `prototype/` is deployed.** The GitHub Actions workflow
(`.github/workflows/deploy-pages.yml`) uploads `./prototype` on every push to
`main`. Nothing else in the repo reaches the live site.

- `prototype/index.html` — the launcher; its cards render from the manifest.
- `prototype/screens/` — the screens (one HTML document each; thin — no inline
  fonts, no local palette, headers mounted from the manifest).
- `prototype/styles/` — the design system: `fonts.css` (self-hosted woff2),
  `tokens.css` (the single `:root`), `base.css` (reset + the global `[hidden]`
  fix), `components.css` (shared primitives).
- `prototype/fonts/` — the woff2 faces (one shared set, fetched lazily).
- `prototype/config/` — the single sources of truth: `screens.js` (manifest:
  every screen's id/title/stage/chrome/path, header markup, and launcher card),
  `workTypes.js` (the six-type catalogue), `project.js` (the Benmore job record
  + `serialise()` export seam).
- `prototype/components/` — `header.js` (mounts a screen's header from the
  manifest).
- `prototype/data/mock/` — sample records (`anchoring.js`); the one deeply
  populated work type.
- `prototype/js/` — shared scripts: `versioner.js` (cache-busting), `build.js`
  (CI-stamped build id), `standalone.js` (PWA nav), `render.js` (render helpers).
- `prototype/assets/icons/` + `prototype/manifest.json` — PWA icons + manifest.

`review-pack/` holds the walkthrough deliverables (PDF/DOCX). `CODEBASE_AUDIT.md`
is a review document. `tools/` is the dev-only test harness (below). None of
these deploy.

## Running locally

Most screens open directly in a browser via `file://`. **Screens that load ES
modules do not** — `screens/platform.html` (imports `config/workTypes.js`),
`screens/work-item-design.html` (imports `data/mock/anchoring.js`), and any
screen mounting its header — because browsers block module fetches over
`file://` (CORS). They fail silently: the page renders but module-driven content
stays empty. Serve over HTTP instead (below).

Serve the folder over HTTP instead:

```bash
cd prototype
python3 -m http.server 8000
# then open http://localhost:8000/index.html
```

## Deploying

Push to `main`. The workflow builds and publishes automatically. Cache-busting
is handled by a build stamp: an inline link-versioner appends `?v=<build>` to
internal links so clients never load a stale screen.

## Dev test harness (`tools/`)

A Playwright screenshot harness used to guard the refactor. It never enters the
deploy artefact and has its own `package.json`.

```bash
cd tools
npm install                 # Playwright + pixelmatch + pngjs (dev only)
node shots.js               # capture the baseline  -> tools/baseline/
node shots.js --out current # capture the current state -> tools/current/
node compare.js baseline current   # pixel-diff, writes tools/diffs/ for changes
```

`shots.js` captures `index.html` and every screen at 1440x900 and 390x844, plus
the Configurable Engine export JSON (`export.json`). Baselines and diffs are
gitignored; regenerate them from a clean checkout before starting work.

## Conventions

- NZ / British spelling (stabilise, colour, metre).
- No em dashes in copy; use commas, colons or full stops.
- Two type voices: desktop (Play / Be Vietnam Pro / JetBrains Mono) and field
  (IBM Plex, via `body.field`).
