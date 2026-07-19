# TACEDGE Ground Engineering V2 — Prototype Walkthrough

A dependency-free static documentation site that interprets the current V2 prototype
for the incoming Interim Development Technical Lead. It is confined to three
directories and treats `prototype/` as a strictly read-only evidence source.

## Layout

```
docs/v2-prototype-walkthrough/
  build-data.mjs          # reads prototype/config/screens.js -> data/screens.json + evidence CSVs
  build-traceability.mjs  # writes the PD -> prototype traceability register
  build-site.mjs          # renders site/ from data/screens.json + authored content
  data/                   # screens.json (enriched), _manifest.json (raw)
  evidence/               # inspection notes + CSV registers
  site/                   # the generated site (00-13 + print) + assets (css, fonts, logo)
public/v2-prototype-walkthrough/screenshots/   # sanitised full-page screenshots
working/v2-prototype-walkthrough/              # gitignored raw working files
```

## Build

```bash
node docs/v2-prototype-walkthrough/build-data.mjs          # regenerate data + registers
node docs/v2-prototype-walkthrough/build-traceability.mjs  # regenerate PD traceability
node docs/v2-prototype-walkthrough/build-site.mjs          # regenerate the site
```

Screenshots are re-captured by serving a disposable copy of `prototype/` and running
the capture step (see the inspection notes). They are committed under
`public/v2-prototype-walkthrough/screenshots/`; the site references them relatively.

## Run locally

```bash
cd /home/user/Geotech-V2 && python3 -m http.server 8080
# open http://localhost:8080/docs/v2-prototype-walkthrough/site/
```

- Walkthrough home: `/docs/v2-prototype-walkthrough/site/index.html`
- Print route (A4 landscape): `/docs/v2-prototype-walkthrough/site/print.html`
  Print / Save as PDF from the browser.

## Boundaries

The prototype application (`prototype/`) is never modified. All output lives in the
three directories above. See `evidence/V2_Prototype_Inspection_Notes.md` for the
repository-boundary statement and baseline.
