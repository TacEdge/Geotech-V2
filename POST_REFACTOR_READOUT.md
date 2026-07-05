# TacEdge Geotech V2 — Post-Refactor Readout

**Purpose:** a factual snapshot of the codebase *after* the five-stage refactor, for an independent senior review (Fable 5). Companion to `CODEBASE_AUDIT.md` (the pre-refactor audit) and the refactor strategy/master-prompt that drove the work.

**State at readout**
- Branch: `claude/tacedge-v2-prototype-polish-4ny12f`
- HEAD: `1e0bdab` (Stage 5 published)
- Live: `https://tacedge.github.io/Geotech-V2/` (case-sensitive), deployed from `main`, workflow green.
- Every stage was one or more commits, screenshot-verified, deployed, and reported before the next.

---

## 1. What this is now

A **dependency-free, static, multi-page HTML/CSS/JS clickable prototype** (PWA, GitHub Pages). Same product and visual design as before the refactor — **the rendered output is pixel-identical** to the pre-refactor baseline on all 58 screenshots. What changed is entirely structural: the wholesale duplication the audit flagged has been consolidated to single sources of truth, and the screens are now thin.

No framework, no bundler, no build step, **zero runtime dependencies**. The only tooling is a dev-only screenshot harness quarantined in `tools/`.

---

## 2. Repository structure

```
/
├── .github/workflows/deploy-pages.yml   Deploy prototype/ to Pages; stamps build SHA
├── .gitignore  .prettierrc  .prettierignore
├── README.md                            How it deploys, the ES-module gotcha, harness usage
├── CODEBASE_AUDIT.md                    Pre-refactor audit (reference)
├── POST_REFACTOR_READOUT.md             This file
├── review-pack/                         Walkthrough deliverables (PDF/DOCX) — not code
├── tools/                               DEV-ONLY harness (never deployed)
│   ├── package.json                     Playwright + pixelmatch + pngjs (devDeps only)
│   ├── shots.js                         Screenshot every page (from the manifest) x2 viewports
│   └── compare.js                       Pixel-diff two runs; writes diffs over 0.1%
└── prototype/                           ★ THE DEPLOYED ARTEFACT (3.9 MB)
    ├── index.html                       Launcher; cards render from the manifest
    ├── manifest.json                    PWA manifest
    ├── styles/                          Design system (≈370 lines total)
    │   ├── fonts.css                    One @font-face set → ../fonts/*.woff2 (121 lines)
    │   ├── tokens.css                   The single :root (palette/scale/etc.) (101)
    │   ├── base.css                     Reset + global [hidden] fix (14)
    │   └── components.css               Shared .te-* primitives + reduced-motion (136)
    ├── fonts/                           16 self-hosted woff2 (356 KB, lazy-fetched)
    ├── config/                          SINGLE SOURCES OF TRUTH
    │   ├── screens.js                   Manifest: id/title/stage/chrome/path + header + card (332)
    │   ├── workTypes.js                 Six-type catalogue (268)
    │   └── project.js                   Benmore job record + serialise() export seam (99)
    ├── components/
    │   └── header.js                    Mounts a screen's header from the manifest (32)
    ├── data/mock/
    │   └── anchoring.js                 Anchoring sample records (five design profiles) (46)
    ├── js/                              Shared scripts (all classic, tiny)
    │   ├── versioner.js                 Cache-busting link rewriter (33)
    │   ├── build.js                     window.__TE_BUILD, CI-stamped with the SHA (3)
    │   ├── standalone.js                PWA same-host navigation (21)
    │   └── render.js                    esc/fmt/get/mount/hydrate helpers (29)
    ├── screens/                         28 screen documents (thin)
    └── assets/icons/                    PWA icons
```

**Sizes:** `prototype/` 3.9 MB (was 9.8 MB). `fonts/` 356 KB. The shared foundation (`styles/` + `config/` + `components/` + `js/` + `data/`) is ≈1,235 lines total. `screens/` is 3.4 MB — see §9 (inline SVG maps).

---

## 3. Anatomy of a screen (the new contract)

Every screen is now a thin document. Head:
```html
<head>
  <link rel="stylesheet" href="../styles/fonts.css">
  <link rel="stylesheet" href="../styles/tokens.css">
  <link rel="stylesheet" href="../styles/base.css">
  <link rel="stylesheet" href="../styles/components.css">
  <style> /* screen-specific layout only; no fonts, no :root palette */ </style>
  <script src="../config/screens.js"></script>   <!-- manifest -->
  <script src="../components/header.js"></script> <!-- header renderer -->
</head>
```
Body header:
```html
<header></header>
<script>TE_HEADER.fill('drill-log')</script>   <!-- synchronous mount, no layout shift -->
...
<script defer src="../js/build.js"></script>
<script defer src="../js/versioner.js"></script>
<script defer src="../js/standalone.js"></script>
```
So a screen contributes only its unique body markup + screen-specific layout CSS. Fonts, palette, header, nav, and boilerplate scripts all come from shared files. Screens that render config/mock data add a small `<script type="module">` that imports from `config/` or `data/` (e.g. `work-item-design`, `platform`).

---

## 4. The manifest (`config/screens.js`) — the keystone

`window.TE_SCREENS` is an array of 28 entries. Per entry:
```js
{ id, title, stage: 'configure'|'capture'|'confirm'|null,
  chrome: 'pm'|'field'|'none', path,
  header: '<header ...>{{CONTOUR:desktop}}...</header>',   // 26 screens; contour SVGs tokenised
  icon, cardTitle, desc }                                   // 25 index screens
```
It is read by three consumers, all sharing one source of truth:
1. **`components/header.js`** — expands `{{CONTOUR:key}}` tokens and mounts the header.
2. **`index.html`** — renders the Configure/Capture/Confirm card grids (Capture auto-splits PM-oversight vs Operator-capture by the `chrome` field).
3. **`tools/shots.js`** — derives its page list, so harness and app can never disagree about what exists.

Adding a screen is a single manifest edit; it then appears on the index, in the harness, and mounts its header.

**Design choice to review:** headers are stored as near-verbatim HTML in the manifest with only the four shared contour SVGs tokenised. This guarantees byte-exact reproduction (0.000% diff) and de-duplicates the large artwork, but the smaller shared structure (brand block, burger) is repeated across manifest entries rather than templated. It was a deliberate correctness-over-DRY trade; a template-per-chrome refactor is possible later.

---

## 5. Data model (`config/workTypes.js` + `config/project.js`)

The two pre-refactor data files (`assets/work-types.js` global + `js/worktypes.js` ES module) were merged into one catalogue:
- **`workTypes.js`** — `export const WORK_TYPES` with six types: `anchoring, drilling, shotcrete, rockfall, drainage, piling`. Each carries the UI fields (label, icon, status, description, templates, exampleTemplate, presets, modules, matrixChips). `anchoring` and `piling` additionally carry the absorbed operational fields (item, fieldScreens, material, wastage, spec, design) from the old model.
- **`project.js`** — `export const PROJECT` (the Benmore job: id, name, client, contractor, engineer, workType, zones, items) + `serialise()` (the export seam) + `workType()`.
- Consumed by `platform.html` (the Configurable Engine page). The export button downloads `serialise()`.

**Export reconciliation (documented, intentional):** vs the Stage 0 export baseline there are **12 differences**, all from unifying the models — `job.workType 'anchor'→'anchoring'`; `workType.key`/`.accent` removed; `label 'Ground anchoring'→'Anchoring'`; UI fields added. Job data, `item`/`material`/`wastage`/`spec`/`design`, `exportedAt`, `schema` are byte-identical.

---

## 6. Styling system (`styles/`)

- **`tokens.css`** — the one `:root` (palette, type scale, radius, spacing, elevation, geometry, `--build`) plus the `body.field` type-voice override. Every screen's local `:root` was deleted; screen-unique tokens (e.g. `--paper`, `--amber`, `--cream-deep`, `--page`) were preserved on the few screens that had them.
- **`fonts.css`** — one `@font-face` set for all 16 faces (Play, Be Vietnam Pro, JetBrains Mono, IBM Plex Sans/Mono), referencing self-hosted `../fonts/*.woff2`. The woff2 were **decoded byte-for-byte from the base64 previously inlined in every screen**, so rendering is identical; faces are fetched lazily per glyph.
- **`base.css`** — reset + the global `[hidden] { display: none !important; }` that ends the audit's recurring `[hidden]`-vs-`display` bug class.
- **`components.css`** — the `.te-*` primitives + reduced-motion. (Adoption of these primitives across screens is still low — future opportunity, deliberately not chased.)

The former `assets/tacedge.css` was split into these and retired.

---

## 7. Scripts & cache-busting

- Two boilerplate scripts (versioner, standalone), previously copy-pasted into ~28 files, are now `js/versioner.js` and `js/standalone.js`, linked with `defer`.
- **Cache-busting is automated:** `deploy-pages.yml` stamps the short commit SHA into `js/build.js` before upload; `versioner.js` reads `window.__TE_BUILD` (falls back to the `--build` token for local serving). The manual `--build` bump ritual is gone.

---

## 8. Verification harness & method (`tools/`)

- **`shots.js`** — serves `prototype/` locally, screenshots `index` + all 28 screens at 1440×900 and 390×844 (full-page, `deviceScaleFactor:1`, reduced-motion, `document.fonts.ready` awaited), and snapshots the export JSON.
- **`compare.js`** — pixelmatch diff of two runs; flags any image over 0.1% and writes diff PNGs.
- **Method:** a 58-image + export baseline was captured at Stage 0 *before any change*. Every subsequent stage was diffed against it. **Result across all five stages: `worst = 0.000%`, over-threshold 0.** A final all-pages console/network sweep shows **0 pageerrors, 0 4xx**.
- Baselines/diffs are gitignored (regenerate from a clean checkout); the harness code is committed.

---

## 9. Known limitations / open items (suggested review focus)

These were surfaced and agreed during the refactor; they are the natural things for Fable 5 to weigh:

1. **`prototype/` is 3.9 MB, not <1 MB.** Fonts were fully de-duplicated, but four screens still carry large **inline SVG map artwork** — `qa-queue` 644 KB, `work-plan` 472 KB, `spatial-map-operator` 472 KB, `spatial-map` 456 KB, `layout` 444 KB. Deliberately left in scope terms; a candidate future stage (externalise/share the map SVGs) but it's content/component work with real regression risk.
2. **`grep -ri benmore prototype/screens/` is not zero (19 hits).** By agreed scope. Remaining refs are **legitimate content** (`work-plan`'s `benmore_plan.pdf` source filename; the `projects` multi-project selector list) or **out-of-scope screens** (`layout`, `reporting`, `engineer-view`, `daily-activity`, `platform`, `report-*`). Active-project identity *is* config-driven (headers come from the manifest).
3. **De-hardcoding was scoped to "identity + the Construction card."** The 5×-duplicated Construction card in `work-item-design` is now one template from `data/mock/anchoring.js`. Broader work-type parameterisation of the setup/PM screens (Testing Standards, Evidence & QA, etc.) was intentionally *not* done — much of their "anchor" content is legitimate field-facing domain data the brief says to keep, and only anchoring is deep-populated.
4. **Operator/field screen internals were not restructured.** They received the mechanical swaps only (fonts, tokens, header partial), per the "operator screens are sacred" constraint. Their body markup and interaction JS are unchanged.
5. **Header manifest storage is verbatim-with-tokenised-contours** (see §4) — correctness-first, not maximally DRY.
6. **No lint/CI test gate.** The screenshot harness is the proportionate safety net for a prototype; there is a Prettier config for `styles/`/`config/`/`js/`/`components/` but no enforced pipeline.
7. **`index.html`'s own launcher header stays inline** (it's the hub's chrome, not a screen header) — a deliberate exception to the header unification.
8. **ES-module local-serve gotcha:** screens importing modules (`platform`, `work-item-design`, header mounting) require an HTTP origin; `file://` fails silently. Documented in the README.

---

## 10. Before → after (against the audit's headline findings)

| Audit finding (pre) | After the refactor |
|---|---|
| Fonts inlined as base64 in all 29 docs (~6 MB dup) | One `fonts.css` + 16 self-hosted woff2 (356 KB), lazy-fetched |
| `:root` palette re-declared in 29 docs | One `tokens.css`; local `:root` deleted (screen-unique tokens kept) |
| `.te-*` primitives built but unused; `tacedge.css` linked after inline | Split into tokens/base/components; `tacedge.css` retired |
| Header/nav markup copied across 18 screens | 26 headers mount from one manifest via `header.js` |
| Boilerplate scripts copied across 27–28 files | `versioner.js` + `standalone.js`, linked once |
| Two divergent work-type data models, both platform-only | One `workTypes.js` + `project.js`; export reconciled |
| WID "Construction" card pasted 5× | One template from `data/mock/anchoring.js` |
| `index.html` a hand-maintained 26-link hub | Cards render from the manifest |
| Manual `--build` cache-busting foot-gun | Automated SHA stamp in CI |
| Three copies of the app + 5.6 MB `Archive.zip` | Deleted (preserved in git history) |
| No safety net (no lint/test/build) | Screenshot regression harness; 0.000% diff every stage |
| Zero runtime dependencies (a strength) | Preserved — still a raw `./prototype` upload |

---

## 11. How to verify this independently

```bash
# run the app
cd prototype && python3 -m http.server 8000   # open http://localhost:8000/

# run the regression harness
cd tools && npm install
node shots.js                 # baseline  -> tools/baseline/
node shots.js --out current   # after any change
node compare.js baseline current

# confirm single sources of truth
grep -rl '@font-face' prototype/screens        # -> (none)
grep -rl 'tacedge.css' prototype/screens       # -> (none)
grep -c '"id"\|id:' prototype/config/screens.js
```

The git history on the feature branch is one-commit-per-stage (Stage 0 → Stage 5) with a stage report in each message, so the review can walk the change stage by stage.
