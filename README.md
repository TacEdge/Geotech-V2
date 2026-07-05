# TacEdge Geotech V2.0 — Prototype

A dependency-free, static, multi-page HTML/CSS/JS clickable prototype for the
TacEdge Geotech field-and-office workflow, presented around a worked example:
Spillway Anchoring at Benmore Dam. It installs as a PWA and deploys to GitHub
Pages.

## What actually deploys

**Only `prototype/` is deployed.** The GitHub Actions workflow
(`.github/workflows/deploy-pages.yml`) uploads `./prototype` on every push to
`main`. Nothing else in the repo reaches the live site.

- `prototype/index.html` — the launcher / walkthrough map.
- `prototype/screens/` — the screens (one self-contained HTML document each).
- `prototype/assets/` — shared stylesheet, work-type data, PWA icons.
- `prototype/js/` — page-specific and shared scripts.
- `prototype/manifest.json` — PWA manifest.

`review-pack/` holds the walkthrough deliverables (PDF/DOCX). `CODEBASE_AUDIT.md`
is a review document. `tools/` is the dev-only test harness (below). None of
these deploy.

## Running locally

Most screens open directly in a browser via `file://`. **The Configurable
Engine page (`screens/platform.html`) does not** — it loads an ES module
(`js/worktypes.js`), and browsers block module fetches over `file://` (CORS).
It fails silently: the page renders but the work-type sections stay empty.

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
