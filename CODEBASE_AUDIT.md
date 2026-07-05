# TacEdge Geotech V2.0 — Codebase Audit

**Audience:** a senior AI model that will design and execute a refactor plan.
**Author's stance:** senior frontend architect, review-only. No files were changed to produce this report.
**Date of audit:** 2026-07-04
**Commit at audit:** `4d5adff` (Configurable Engine: live work-type reconfiguration)

> This is an honest, direct assessment of a prototype built quickly. The work is genuinely good *as a pitch artifact* — visually coherent, thoughtfully copywritten, and it deploys. The problems below are structural, not cosmetic, and they are the normal cost of moving fast. The goal is to make the next version scalable without killing the momentum that made this one convincing.

---

## 1. Executive Summary

### What this currently is
A **high-fidelity, clickable, multi-page prototype** for a geotechnical field-and-office workflow product (TacEdge Geotech V2.0), presented around a single worked example: *Spillway Anchoring at Benmore Dam*. It is a walkthrough demo for a client pitch, installable as a PWA, deployed to GitHub Pages. It is **not** an application: there is no backend, no persistence, no real data layer, and almost no shared runtime.

### Technology stack (as observed)
- **Hand-authored static HTML** — one self-contained `.html` document per screen (28 screens + a launcher).
- **Vanilla CSS** — one shared token/primitive stylesheet (`prototype/assets/tacedge.css`, 132 lines) plus a large per-screen inline `<style>` block in every file.
- **Vanilla JS** — per-screen inline `<script>` blocks (3–4 per screen) for interaction; two data modules for the "Configurable Engine" page only.
- **Fonts** — Play / Be Vietnam Pro / JetBrains Mono (desktop voice) and IBM Plex Sans/Mono (field voice), **inlined as base64 `@font-face` in every screen** (7–9 faces each).
- **PWA** — `manifest.json` + icon set + standalone-mode redirect script.
- **Deploy** — GitHub Actions (`deploy-pages.yml`) uploads `./prototype` on push to `main`. Cache-busting via a manual `--build` token read by an inline "link-versioner" script.
- **No framework, no bundler, no package manager, no tests, no linter.** There is no `package.json`, `README`, or `.gitignore` anywhere in the repo.

### Maturity classification
**A throwaway prototype dressed in scalable-prototype ambitions.**
- *Ambition signals (real):* a shared design-token system, a genuinely config-driven page (`platform.html`), a build-stamp cache-busting scheme, a PWA manifest, two deliberate typographic "voices", disciplined copy standards (NZ spelling, no em-dashes).
- *Throwaway reality:* 29 documents each re-embed ~266 KB of identical base64 fonts and a full `:root` palette; the domain ("anchor", "Benmore") is hardcoded into all 27 content screens; two competing work-type data models exist; the shared UI primitives that *were* built are used in ~0 screens.

The result: it **looks** like a scalable system and **behaves** like 29 hand-copied HTML files. The gap between those two facts is the whole refactor.

### Biggest architectural risks
1. **Change amplification.** Any global change (a font, a header, a nav item, a token) must be applied by hand across up to 29 files. This is the single most expensive property of the codebase.
2. **Two divergent sources of truth for work types.** `assets/work-types.js` (3 types: `anchor`/`rockBolt`/`screwPile`, `window.TE` global) and `js/worktypes.js` (6 types: `anchoring`/`drilling`/…, ES module) model the same domain with different keys, shapes, and naming. Both are consumed only by `platform.html`.
3. **The "configurable" story is real on exactly one page.** Every other screen hardcodes anchoring content. The pitch claims configurability the code does not yet deliver outside `platform.html`.
4. **Hand-synced navigation.** `index.html` is a 26-link hub and 18 screens carry duplicated header/nav markup. These drift silently.
5. **Zero automated safety net.** No lint, no tests, no HTML validation, no build step — every change is verified by eye. Regressions are invisible until someone looks at the right screen.
6. **~7–8 MB of dead weight in the repo** (three copies of the screens + a 5.6 MB `Archive.zip`), obscuring what is actually live.

---

## 2. Repository Structure

```
/                                   REPO ROOT
├── .github/workflows/deploy-pages.yml   Deploy prototype/ to GitHub Pages
├── 01 DRL Drill Log PDS-DRL.html        ┐ 21 old screens, PDS-* naming
├── 02 CSO Crew Sign On PDS-CSO.html     │ (superseded version, NOT deployed)
│   … (19 more) …                        │  → DEAD WEIGHT
├── 21 ENG Engineer View PDS-ENG.html    ┘
├── Archive.zip                          5.6 MB opaque archive → DEAD WEIGHT
├── original-screens/                    21 files, BYTE-IDENTICAL to root → DEAD WEIGHT
├── review-pack/                         .docx + .pdf walkthrough (9.5 MB, deliverables)
└── prototype/                           ★ THE LIVE APP (only this deploys)
    ├── index.html                       Hand-maintained launcher hub (26 links, 3 stages)
    ├── manifest.json                    PWA manifest
    ├── assets/
    │   ├── tacedge.css                  Shared tokens + (mostly unused) .te-* primitives
    │   ├── work-types.js                DATA MODEL A: window.TE, 3 work types + Benmore JOB
    │   └── icons/                       7 PWA icons (svg + png)
    ├── js/
    │   └── worktypes.js                 DATA MODEL B: ES module, 6 work types
    └── screens/                         28 self-contained screens (each ~260–892 KB)
```

### What each major area does
- **`prototype/index.html`** — the entry point and demo map. Three-stage layout (Configure / Capture / Confirm & release) with ~25 cards linking into `screens/`. Every link target is hand-listed here.
- **`prototype/assets/tacedge.css`** — the *intended* shared foundation: brand palette, type scale, radius/spacing/elevation tokens, two type voices, and a set of `.te-*` cross-screen primitives (button, pill, page-head, link). It is linked *after* each screen's inline styles so its tokens win the cascade. This file is the healthiest part of the codebase.
- **`prototype/assets/work-types.js`** — `window.TE`: work-type definitions (anchor/rockBolt/screwPile), a single Benmore `JOB` record, and `serialise()`. Framed as the "one job record" export seam. Consumed only by `platform.html`.
- **`prototype/js/worktypes.js`** — the newer ES-module catalogue of six work types used to drive the Configurable Engine page's live reconfiguration. Consumed only by `platform.html`.
- **`prototype/screens/*.html`** — 28 screens. Each is a complete HTML document: inline fonts, inline `:root`, inline component CSS, inline markup, inline JS. Two sub-families: **desktop/PM screens** (`.topbar` + burger nav) and **operator/field screens** (field-styled header, IBM Plex via `body.field`). Two `report-*` screens are deep-linked from `engineer-view.html`; `module-preview.html` is deep-linked from `platform.html`.

### Redundant / duplicated / misplaced
| Item | Status | Evidence |
|---|---|---|
| Root `01…21 *.html` (21 files) | **Dead** — superseded, not deployed | 529-line drill log vs live 657-line one; only `prototype/` deploys |
| `original-screens/` (21 files) | **Dead** — byte-identical to root | `diff -q` returns identical |
| `Archive.zip` (5.6 MB) | **Dead / unknown** — opaque, unused | Not referenced by anything |
| `review-pack/` (9.5 MB) | Deliverable, not code | Fine to keep, but heavy in-repo |
| `assets/work-types.js` vs `js/worktypes.js` | **Overlapping** data models | Same domain, different schema; both platform-only |
| Inline base64 fonts (×29) | **Massively duplicated** | 7–9 `@font-face` per file; ~266 KB/file |
| Header/nav markup (×18) + boilerplate scripts (×27–28) | **Duplicated** | See §5 |

---

## 3. UI Architecture

### Organisation
- **Multi-page, one-document-per-screen.** There is no application shell, no layout component, no client-side router. Each screen is independently authored and navigated to via a plain `<a href>`.
- **Two implicit "layouts"** exist by convention, not by code: a desktop PM chrome (`.topbar`, `.burger`, `.org`, `.who`) and an operator field chrome (dark header, big touch targets, `body.field` type voice). Neither is factored out; both are re-typed per screen.

### Reuse vs duplication
Almost everything is **duplicated, not reused**:
- **Headers/nav:** `.topbar` markup appears in 18 screens; the burger nav in 14; the `TACEDGE` wordmark block in 18. There is no partial or include mechanism, so every header is a copy.
- **Cards / tables / forms / pills / buttons:** re-implemented per screen with screen-local class families (`.pf-*` on platform, `.pcard`/`.card` on index and projects, `.kv-row`/`kk`/`kvv` on work-item-design, bespoke tables in qa-queue, etc.). The same *visual* card is expressed by different class names on different screens.
- **The shared primitives that exist are unused:** `.te-btn` → **0** files, `.te-link` → **0**, `.te-pill` → **1**, `.te-pagehead` → **3**. The team built a component vocabulary and then didn't adopt it — a strong signal that "copy the last screen" was faster than "learn the system".

### Inconsistency hotspots
- **Two header systems** with no shared base.
- **N bespoke card systems** that look alike but share no CSS.
- **Status/pill idioms** re-expressed per screen (saved-pill, `.te-pill.is-*`, inline pill spans) rather than one badge component.
- **Work Item Design** repeats an identical "Construction" key/value card **5 times** with only value edits — copy-paste at the block level.

### Hardcoded design decisions
- Every screen re-declares the full `:root` palette locally (29 files) *and* links the canonical tokens on top. The shared file exists precisely to end an earlier palette drift ("was split #f3efe6/#f7f5ec"), but the local blocks were never removed.
- Many one-off pixel values (`14.5px`, `266px`, ad-hoc paddings) live inline rather than referencing the spacing/type scale that already exists in tokens.
- Icons are inline SVG paths, re-pasted wherever needed (e.g. the same map-pin/anchor/drill glyphs recur across index, platform, and screens).

---

## 4. Data and Configuration

### Where assumptions currently live
- **The project is hardcoded.** "Benmore" appears in **27** screens; "anchor/anchoring" in **27**. Zones, work items, designs, plans, testing standards, and QA evidence are written directly into markup as static content, not rendered from data.
- **Only `platform.html` is data-driven.** It renders its work-type selector, panel, config cards, and capture matrix from a config object. Every other screen is static HTML.
- **Two config modules, both platform-only:**
  - `assets/work-types.js` — `window.TE.WORK_TYPES` with `anchor` / `rockBolt` / `screwPile`; each entry carries `item` nouns, `fieldScreens`, `material`, `wastage`, `spec`, `design`. Also holds the single Benmore `JOB` record and `serialise()`.
  - `js/worktypes.js` — `WORK_TYPES` with `anchoring` / `drilling` / `shotcrete` / `rockfall` / `drainage` / `piling`; each carries `label`, `icon`, `status`, `description`, `templates`, `exampleTemplate`, `presets`, `modules`, `matrixChips`.

  These are **not** reconciled: different keys (`anchor` vs `anchoring`), different field names (`material`/`wastage` vs `presets`), different module lists, different runtime contracts (global vs ES module). They tell overlapping but non-identical stories about the same six work types.

### Is the domain hardcoded? — Yes, almost entirely.
| Concern | State |
|---|---|
| Work types | Config-driven **only on platform.html**; hardcoded (anchoring) everywhere else |
| Work items / designs | Hardcoded markup (e.g. 5 anchor variants typed by hand in Work Item Design) |
| Plans | Hardcoded (map + list markup) |
| Testing standards | Hardcoded criteria table |
| Forms (operator capture) | Hardcoded fields; no work-type awareness |
| QA evidence | Hardcoded requirement sheet |
| Project identity | Hardcoded "Benmore Dam · Spillway Anchoring" |

### What must change to genuinely support six configurable work types
(anchoring, drilling, shotcrete, rockfall protection, drainage, piling/retaining)
1. **Unify to one work-type schema** (delete one of the two files; migrate the survivor to cover both the "engine demo" fields *and* the "job/export" fields). Pick the ES-module version as the base — it already models all six.
2. **Lift a project into data:** a `project` record (name, client, contractor, engineer, zones, active work type) that screens read, replacing hardcoded "Benmore".
3. **Parameterise the capture screens:** Drill/Grout/Test/Daily/etc. must render their labels, captured nouns, units, presets, and which modules appear from the selected work type's `modules`/`presets`/`exampleTemplate`, instead of hardcoding anchor language.
4. **Data-drive the setup screens:** Work Item Design, Work Plan, Testing Standards, Evidence & QA, Safety & Risk should read templates/criteria/requirements from config per work type.
5. **Generate navigation** (`index.html` and per-screen headers) from a single screen manifest so adding a work type or screen doesn't mean editing 20 files.
6. **Mock-data layer** keyed by work type so each of the six has believable sample records for the walkthrough.

---

## 5. Component and Styling Review

### Duplicated "components" (all copy-paste, no shared source)
- **Fonts:** 7–9 base64 `@font-face` in **all 29** documents. This is ~95% of every file's bytes (≈266 KB before the first `</style>` in a typical screen) and the dominant reason `prototype/` is **9.8 MB**.
- **`:root` token blocks:** re-declared in **29** files.
- **Header/nav:** ~18 copies.
- **Boilerplate scripts:** the `--build` link-versioner in **27** files; the `navigator.standalone` redirect in **28**.
- **Block-level content:** e.g. the Work Item Design "Construction" card ×5.

### Repeated CSS / classes
Each screen ships a self-contained component CSS block. The *same* patterns (card, key/value row, pill, section label, primary button, table header) are re-authored with screen-local names. There is no `components.css`; `tacedge.css` stops at tokens + four barely-used primitives.

### Inconsistencies
- **Spacing/type:** a real scale exists in tokens, but screens frequently hardcode off-scale values.
- **Colour:** well-tokenised *in intent*, but the duplicated local `:root` blocks are a latent drift risk — a future edit to one file's palette silently diverges.
- **Buttons/badges:** at least three button idioms (`.te-btn`, `.newbtn`/`.start`, `.exbtn`, `.pf-exb`) and several pill idioms coexist.
- **Cards:** `.card`, `.pcard`, `.pf-card`, `.cfg-card`, `.mx-col` are all "a bordered white rounded box with a shadow" with different implementations.

### Opportunities
- **Finish the token job:** delete local `:root` blocks; keep one canonical set.
- **Single font stylesheet:** move `@font-face` to self-hosted `.woff2` files referenced by one `fonts.css` (or one shared `<link>`), cutting the repo by roughly an order of magnitude and making a font change a one-file edit.
- **Promote real shared components** into a `components.css` (+ optional tiny render helpers): `header`, `nav`, `card`, `table`, `pill/badge`, `form-row`, `button`. Then adopt them (the `.te-*` set proves the vocabulary; it just needs to be used).
- **Layout primitives:** `stack`, `cluster`, `grid`, `page` utilities to replace ad-hoc fl/grid declarations.

---

## 6. State and Interaction Review

### How it works today
- **Navigation:** plain anchor links. A click-time script rewrites internal `.html` links to append `?v=<build>` for cache-busting; a second script forces same-host navigation in PWA standalone mode. Both are copy-pasted into every screen. There is no router and no shared history/state.
- **Selection / filters / forms / status:** handled by per-screen inline JS (3–4 `<script>` blocks each). State generally lives **in the DOM** (classes toggled, `[hidden]` flipped, `textContent` read back) rather than in a model.
- **`platform.html`** is the one screen with a clean render-from-config loop (select → re-render sections). It is the template for where the rest should go.

### Brittle / confusing
- **DOM-as-state:** several screens read values back out of the DOM or toggle visibility with `[hidden]` — and `[hidden]` is repeatedly overridden by explicit `display:` rules (a documented, recurring gotcha requiring `.class[hidden]{display:none}` patches). This is fragile and will keep recurring.
- **Hand-synced nav:** `index.html` (26 links) and 18 headers must be manually kept consistent with the file set.
- **Cache-busting depends on a manual `--build` bump.** Forget it, and users get stale screens; there's no automation guaranteeing it.
- **No shared event/render layer:** each screen reinvents its interaction scaffolding.

### Where it breaks as complexity grows
- Six work types × ~20 screens with hardcoded content is a combinatorial authoring burden the current "copy a screen" workflow cannot absorb.
- Any cross-cutting UI change (header, token, font, nav) already costs N edits; N is only going up.
- DOM-state screens will accrue more `[hidden]`/`display` conflicts and selector coupling.

---

## 7. Code Quality Review

- **Repetition:** the defining quality issue — fonts, tokens, headers, scripts, and content blocks are duplicated at scale.
- **Long files:** driven by inlined fonts and inlined content. `qa-queue.html` is 892 KB / 809 lines of logic+markup; `work-plan.html`, `spatial-map.html`, `layout.html` each exceed 690 KB. The *unique* payload per screen is only a few KB.
- **Naming:** screen-local prefixes (`.pf-`, `.kv-`, `.pcard`, `.mx-`) are internally reasonable but **inconsistent across screens** — no shared naming convention.
- **Separation of concerns:** essentially none per screen — content, style, behaviour, and (on platform) data all share one document. The only clean seams are `tacedge.css` (styling) and the two work-type modules (data).
- **Dead code:** root `*.html` (21), `original-screens/` (21), `Archive.zip` (5.6 MB). Roughly half the repo by file count and the bulk of its non-font weight.
- **Comments — where they help:** `tacedge.css` and `work-types.js` are genuinely well-documented (they explain *why*: the palette-unification rationale, the "one job record / export seam" intent). Keep this.
- **Comments — over/under:** screens are sparsely commented, but they're mostly declarative markup where comments add little; the bigger issue is that clearer *structure* (shared components) would remove the need for comments entirely. The data files occasionally over-narrate, but that's a minor, forgivable excess.

---

## 8. Build, Dependency and Tooling Review

- **Dependencies:** none. No `package.json`, no third-party runtime deps. **This is a genuine strength** — zero supply-chain surface, nothing to install, opens in any browser.
- **Build:** none. Deploy is a raw upload of `./prototype` via `deploy-pages.yml` (push to `main` or manual dispatch). Cache-busting is a manual `--build` token + inline rewriter.
- **Linting / formatting / testing:** **absent.** No ESLint/Prettier/Stylelint, no HTML validation, no unit/visual tests, no CI checks beyond deploy. All verification is manual/visual.
- **Setup / process risks:**
  - **Change amplification** (again) — the practical tooling risk: nothing catches a header/token/nav divergence.
  - **ES-module trap for reviewers:** `js/worktypes.js` uses `export`, so `platform.html` only works over `http(s)` — opening it via `file://` silently fails (CORS on module fetch). Anyone reviewing locally must run a static server; this isn't documented (there's no README).
  - **Manual cache-busting** is a foot-gun without automation.
  - **No `.gitignore`** — `Archive.zip` and OS cruft can accumulate.
  - **Repo weight** (~15 MB incl. archives/review-pack) slows clones and obscures the live surface.

---

## 9. Recommended Target Architecture

Keep the stack philosophy (static, dependency-free, GitHub-Pages-deployable) but stop duplicating. Introduce a light build **only if** the team accepts it; a no-build version is viable with shared stylesheets + partials injected at runtime. Suggested layout:

```
prototype/
├── index.html                     Thin shell; nav generated from config/screens.js
├── manifest.json
├── styles/
│   ├── tokens.css                 Single :root (palette, type, spacing, radius, elevation)
│   ├── fonts.css                  ONE set of @font-face → self-hosted .woff2 (not base64)
│   ├── base.css                   Reset + layout primitives (page/stack/cluster/grid)
│   └── components.css             header, nav, card, table, pill/badge, button, form-row
├── fonts/                         *.woff2 (referenced once, cached by the browser)
├── components/                    Reusable markup (partials or a tiny render lib)
│   ├── header.js / header.html    One PM header + one field header, parameterised
│   ├── nav.js
│   ├── card.js  table.js  pill.js  button.js  form-row.js
├── config/
│   ├── workTypes.js               ★ ONE unified schema for all six work types
│   ├── project.js                 The active project record (replaces hardcoded Benmore)
│   └── screens.js                 Screen manifest → drives index + nav + link-versioning
├── data/
│   └── mock/                      Sample records per work type (drill/grout/test/daily/…)
├── pages/                         Thin screens: compose primitives + inject config/data
│   ├── configure/ …               (layout, work-item-design, work-plan, testing-standards, …)
│   ├── capture/ …                 (crew-sign-on, drill-log, grout-log, anchor-test, …)
│   └── confirm/ …                 (qa-queue, reporting, closeout, engineer-view)
├── js/
│   ├── versioner.js               The --build link rewriter (one copy, linked)
│   ├── standalone.js              PWA same-host redirect (one copy, linked)
│   ├── render.js                  Shared render/escape/format helpers
│   └── state.js                   Minimal per-page state helpers (out of the DOM)
└── assets/icons/
```

Guiding principles:
- **One source of truth** for tokens, fonts, each component, work types, project, and the screen list.
- **Screens become thin:** structure + "inject this data", not 260 KB of self-contained everything.
- **Config drives everything** that differs by work type; components drive everything that looks the same.
- **Preserve** the two type voices, the `--build` cache-busting concept, the PWA, and the copy standards — these are assets, not debt.

---

## 10. Refactor Plan (staged, safe → ambitious)

Each stage should be independently shippable and screenshot-verified before the next. Do the *actively-changing, most-polished* operator screens **last**.

### Stage 1 — Safe cleanup (no visual change)
- Delete dead weight: root `*.html` (21), `original-screens/` (21), `Archive.zip`. Confirm with the owner these aren't the client's canonical source first (see §11).
- Add `README.md` (how to run: static server required for ES modules; how to deploy; `--build` bump ritual) and `.gitignore`.
- Extract the two boilerplate scripts (`versioner.js`, `standalone.js`) to `js/` and link them; remove the inline copies.
- **Acceptance:** identical rendered output on every screen; repo shrinks sharply; deploy still green.

### Stage 2 — Shared layout & styling foundation
- Self-host fonts as `.woff2`; create `fonts.css`; remove all inline base64 `@font-face`.
- Split `tacedge.css` into `tokens.css` / `base.css` / `components.css`; delete every screen's local `:root` block.
- **Acceptance:** pixel-diff each screen (expect near-zero); `prototype/` drops from ~9.8 MB toward <1 MB.

### Stage 3 — Component extraction
- Build and adopt shared `header`, `nav`, `card`, `table`, `pill/badge`, `button`, `form-row`. Retire `.pf-*`/`.pcard`/`.kv-*` duplicates screen by screen.
- Generate `index.html` links and per-screen headers from `config/screens.js`.
- **Acceptance:** one edit changes a component everywhere; nav can't drift from the file set.

### Stage 4 — Configurable work-type engine
- Merge `assets/work-types.js` + `js/worktypes.js` into one `config/workTypes.js` covering all six; keep the `serialise()`/export seam.
- Introduce `config/project.js` and `data/mock/`; parameterise capture and setup screens to render from the selected work type (labels, nouns, units, presets, modules, templates, criteria).
- **Acceptance:** switching work type reconfigures *the whole walkthrough*, not just `platform.html`; all six have believable sample data.

### Stage 5 — QA, tests, build checks, polish
- Add Stylelint + Prettier + an HTML validator; wire a CI check on PRs.
- Add a tiny visual/regression pass (Playwright screenshots per screen — the pattern is already in use this session).
- Automate the `--build` bump in the deploy workflow.
- Final consistency sweep (spacing/type scale adoption, `[hidden]` conflicts removed by moving state out of the DOM).
- **Acceptance:** green CI gate; a font/token/nav change is a one-file edit verified automatically.

---

## 11. Risks and Cautions (do **not** refactor these yet)

- **Don't delete `Archive.zip` / `original-screens/` / root `*.html` until ownership is confirmed.** They're almost certainly dead, but they may be the client's or team's canonical export/source of record. Verify, then delete in Stage 1.
- **Don't rip out inline fonts before the self-hosted font pipeline is proven** on one screen end-to-end (including the GitHub Pages MIME/caching path). A half-done font migration breaks *every* screen at once.
- **Don't unify the two data models mid-pitch without a screenshot regression baseline.** They diverge in keys and shape; a careless merge can silently change platform.html's copy or export payload.
- **Don't introduce a framework or heavy bundler** that breaks "open the file in a browser" simplicity or the raw `./prototype` upload deploy. The dependency-free property is worth protecting; prefer shared stylesheets + partials + a *tiny* render helper over React/Vite unless the team explicitly wants an app.
- **Refactor the operator/field capture screens last.** They are the most recently polished and highest-fidelity (recent commit history is almost entirely operator-screen redesigns). They carry the most pitch value and the most regression risk.
- **Preserve the `--build` cache-busting and PWA behaviour** throughout — losing either produces "my changes didn't publish" symptoms that have already cost time this project.
- **Keep momentum:** stages 1–3 are pure hygiene with near-zero visual risk and should land first; the ambitious Stage 4 engine work should wait until the shared foundation makes it cheap, not before.

---

### One-paragraph handoff for the refactor model
This is a dependency-free, static, multi-page HTML prototype whose good ideas (design tokens, a config-driven page, two type voices, PWA, cache-busting, strong copy standards) are undermined by wholesale duplication: 29 documents each re-inline ~266 KB of identical fonts and a full palette, headers/nav/scripts are copy-pasted across ~18–28 files, the domain is hardcoded ("anchor"/"Benmore") in all 27 content screens, and two competing work-type schemas exist but are used on only one page. The shared UI primitives were built and then not adopted. Refactor by consolidating to single sources of truth (tokens, fonts, components, one work-type config, one screen manifest), making screens thin data-injected compositions, and doing it in safe hygiene stages first — leaving the recently-polished operator screens and the two data models for last, behind screenshot regression checks, without breaking the zero-build deploy.
