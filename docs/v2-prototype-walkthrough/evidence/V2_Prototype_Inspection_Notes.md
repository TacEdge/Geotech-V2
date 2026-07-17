# V2 Prototype — Inspection Notes

## Repository-boundary statement

`docs/v2-prototype-walkthrough/`, `public/v2-prototype-walkthrough/` and
`working/v2-prototype-walkthrough/` are the only writable locations for this work.
The TACEDGE Ground Engineering V2 prototype (`prototype/`) was inspected as a strictly
read-only source. No intentional changes were made to the V2 prototype application
(`prototype/`) or to any unrelated source file. All generated walkthrough files,
registers, screenshots and diagrams live inside the three directories above.

> Note on repository arrangement: the incoming brief assumed two separate
> repositories (a read-only V2 repo and a separate writable documentation repo).
> In this environment only one repository exists (`tacedge/geotech-v2`). On the
> product owner's written instruction, the walkthrough is created inside that same
> repository, isolated to the three directories named above, with `prototype/`
> treated as the strictly read-only evidence source. Isolation is by directory,
> not by repository.

---

## Writable output — `tacedge/geotech-v2` (this repository)

| Field | Value |
|---|---|
| Repository path | `/home/user/Geotech-V2` |
| Branch | `claude/tacedge-v2-prototype-polish-4ny12f` |
| Commit SHA at start | `2101478a1646e6a46ccf9a351eb0644c39f53d40` |
| Working-tree state at start | Clean (0 modified files) |
| Walkthrough source dir | `docs/v2-prototype-walkthrough/` |
| Public assets dir | `public/v2-prototype-walkthrough/` |
| Working (gitignored) dir | `working/v2-prototype-walkthrough/` |
| Documentation framework | Dependency-free static site (matches the repo's own ethos; a Node build script renders static HTML from JSON data + shared templates, reusing the Product Definition brand system). No Astro/Vite/React, no npm dependency tree — chosen deliberately to mirror the prototype's dependency-free static architecture and to avoid a build toolchain the repo does not otherwise use. |
| Dev command | `python3 -m http.server` in the site output dir (or open `index.html`); rebuild with `node docs/v2-prototype-walkthrough/build.mjs` |
| Build command | `node docs/v2-prototype-walkthrough/build.mjs` (emits static HTML) |
| Print route | `/print` (single A4-landscape print page) |

## Read-only source — the V2 prototype (`prototype/`)

| Field | Value |
|---|---|
| Repository path | `/home/user/Geotech-V2` (directory `prototype/`) |
| Branch / Commit | `claude/tacedge-v2-prototype-polish-4ny12f` @ `2101478` |
| Inspection date | 2026-07-17 |
| Framework | Dependency-free, static, multi-page HTML/CSS/JS. No SPA router, no build step. |
| Package manager | None. No `package.json` in `prototype/` or at repo root. |
| Dev / serve command | Any static file server over `prototype/` (e.g. `python3 -m http.server`). Entry point `prototype/index.html` (the launcher). |
| Existing routes | 52 screens declared in `prototype/config/screens.js` (`window.TE_SCREENS`), plus `index.html` launcher. Each screen is one static HTML document under `prototype/screens/`. |
| Existing environments | GitHub Pages. `.github/workflows/deploy-pages.yml` uploads `./prototype` on push to `main`. Live at `https://tacedge.github.io/Geotech-V2/`. |
| Prototype successfully run? | Yes — served from a disposable copy outside both directory boundaries for screenshot capture (see Runtime baseline). |
| Data type | Local mock / sample only. `prototype/config/projects.js` (Benmore + other job records), `prototype/config/workTypes.js` (six-type catalogue), `prototype/data/mock/*.js` (per-work-type sample records). No database, no live data, no API, no credentials. |

## Architecture summary (read-only observation)

- **Config-driven.** `config/screens.js` is the single manifest for the screen
  list, launcher cards, navigation and each screen's header. `config/workTypes.js`
  is the six-type catalogue; `config/projects.js` holds the worked-example job
  records; `config/modules.js` maps shared capture modules; `config/qa.js` holds
  QA-queue data. `data/mock/*.js` holds per-work-type sample records (anchoring is
  the deeply populated one).
- **Two chromes.** `chrome: 'pm'` screens are desktop office surfaces; `chrome:
  'field'` screens are the operator mobile surface (`body.field`); `chrome: 'none'`
  are printable report documents.
- **Four manifest stages.** `configure`, `capture`, `confirm`, plus a `platform`
  explainer and `null`-stage report/preview documents. These map to the product
  spine Configure -> Capture -> Confirm.
- **Worked example.** Anchoring at Benmore Dam (Spillway Anchoring) is the primary
  narrative; piling, rockfall, shotcrete, drilling and drainage appear as the wider
  six-type catalogue with their own capture screens.

## Runtime baseline

- A disposable copy of `prototype/` was taken to
  `/tmp/.../scratchpad/proto-run/` (outside the repository) and served read-only
  for screenshot capture. The repository's `prototype/` was never served in-place
  in a way that could write to it, and no prototype file was modified.
- Runtime observations (which interactions are functional vs simulated vs static)
  are recorded per screen in the Route and Screen Inventory and the Prototype
  Status Register. Where behaviour could not be established from safe inspection it
  is marked UNVERIFIED rather than guessed.

## Evidence method

1. Written V2 Product Definition (authored branded package, this repository's
   history) — authoritative for product intent.
2. The safely-served prototype — authoritative for current visual/interactive
   behaviour.
3. `prototype/` routes, screens, components and config.
4. `prototype/data/mock` fixtures and `config/*`.
5. Repo `README.md`.
6. Code comments and naming.
7. Inference only where multiple consistent prototype signals agree — flagged as
   inference in the notes.

Where the prototype and Product Definition differ, the difference is stated, not
silently resolved: the Product Definition is treated as authoritative for product
intent, the prototype as authoritative for what is currently illustrated. All such
differences are recorded in the Prototype Status Register and the Gaps &
Contradictions section.
