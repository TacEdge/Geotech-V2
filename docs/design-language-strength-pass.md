# Design-language strength pass — TACEDGE Ground Engineering V2

**Goal.** Make the prototype feel strong, assured, tactile, operational, calm and
durable — a precision field instrument rather than a consumer lifestyle app —
**without** changing product scope, routes, navigation, roles, workflow logic,
record states, data, terminology, the Configure · Capture · Confirm model, or any
prototype behaviour. This is a visual and interaction-design refinement only.

**The one rule.** Only things that can actually be clicked, tapped or selected
get the subtle tactile *pillow* treatment. They lift *forward* from the surface
(a raised face), never a directional drop shadow thrown down-and-to-one-side.
Static information — value panels, progress bars, data tables, status badges,
metadata, read-only design panels, section headers, empty states — stays **flat**
with crisp borders and clear hierarchy. Depth is never the *only* signal of
interactivity; every control also carries a real border, a pointer cursor and a
label/icon.

---

## 1. Baseline

| | |
|---|---|
| Branch | `claude/tacedge-v2-prototype-polish-4ny12f` |
| Baseline SHA | `27ea95a897d4b27579120fd9284658176bf25e9a` (working tree clean at start) |
| Build stamp | `--build: '2026-06-27.35'` (tokens.css) |
| Stack | Dependency-free static HTML/CSS/JS; config-driven (`prototype/config/screens.js`, 52 screens); one HTML doc per screen with its own inline `<style>`. |

Unrelated in-flight work (walkthrough, handover, contract, product definition)
was **not** touched.

## 2. Styling architecture (as found)

- **`prototype/styles/tokens.css`** — a single `:root`, linked *after* each
  screen's inline `<style>` so its token values win the cascade. Holds the brand
  palette, type system, type scale, radius scale, spacing scale and a calm
  elevation set (`--shadow-sm/md/lg`). **No interactive/tactile tokens existed.**
- **`prototype/styles/components.css`** — shared `te-` primitives (`.te-btn`,
  `.te-btn-primary/ghost`, `.te-pill`, `.te-pagehead`) plus link normalisations
  and a global reduced-motion rule.
- **`prototype/styles/capture.css`** — the shared field-capture shell:
  `.pilesel .ps` (item chips), `.card` (record card), `.dock .btn` (submit),
  `.photos .ph`, `.witness`.
- **`prototype/styles/base.css`** — reset + `[hidden]` guard.
- Each screen additionally defines bespoke control classes in its own inline
  `<style>` (e.g. drill/grout `.qc`, `.lq`, `.vad`, `.btn.prim`; work-types
  `.wt-card`; qa-queue `.qchip`, `.q-item`, `.da-p/.da-o`; status-board `.sel`,
  `.btn-primary/.btn-ghost`).

## 3. Where interactive and static were indistinguishable (the problem)

- Controls and information cards shared the same flat white face + hairline
  border (`--card` + `--line`/`--line-2`), so a *button* and a *data panel* read
  identically. Nothing "invited the thumb."
- Primary buttons were a flat green fill with a colour-only hover; secondary
  buttons a flat bordered box. No resting elevation, no pressed feedback beyond
  a colour swap on a couple of screens.
- The not-ready submit used a muted grey-green fill that read as *disabled* but
  had no shared disabled grammar.
- Focus used a low-contrast olive outline on several screens.
- Some selectable chips leaned on pale sage/ochre washes (consumer-pastel)
  rather than a strong, planted control face.

## 4. The central interaction grammar (added)

New token block in **`tokens.css`** (see `INTERACTIVE CONTROL GRAMMAR`):

| Token | Role |
|---|---|
| `--ctl-surface`, `--ctl-surface-bottom` | resting light control face (warm off-white, subtle convex gradient) |
| `--ctl-border` | crisp 1px control perimeter (edges before shadows) |
| `--ctl-highlight` | faint upper-inner highlight |
| `--ctl-shade` | faint lower-edge shade |
| `--ctl-shadow` | front-facing soft lift that hugs the control |
| `--ctl-shadow-pressed` | light inset shadow for the pressed state |
| `--ctl-primary-surface`, `-bottom`, `-border`, `-highlight`, `-label` | deep-green primary control |
| `--ctl-selected-surface`, `--ctl-selected-border` | selected fill + colour-independent edge |
| `--ctl-disabled-surface`, `-border`, `-label` | flat, reduced-contrast disabled |
| `--structural-border`, `--r-structural` | crisp borders / planted radii for static panels |
| `--r-control` | control corner radius (reduced rounding) |
| `--focus-ring`, `--focus-ring-color` | high-contrast ring *outside* the border |
| `--touch-target` | 48px gloved-tap floor |
| `--motion-dur`, `--motion-ease` | shared control motion |

The pillow is composed from three subtle layers — `inset 0 1px 0 highlight`,
`inset 0 -1.5px 0 shade`, and the soft front-facing `--ctl-shadow` — over a
1px border. It is deliberately shallow (1–2px offsets, 5–10% opacities): assured,
not inflated; tactile, not neumorphic or glossy.

### Six control states
1. **Resting light** — warm off-white face, 1px border, symmetrical front-facing lift, faint top-inner highlight + faint lower-edge shade, no directional drop shadow.
2. **Resting primary** — deep TACEDGE green, darker perimeter, subtle inner highlight, near-white label, same front-facing lift.
3. **Selected** — semantic fill (green or sage-tint) + a colour-*independent* inset edge (and, where present, a check), so state survives in greyscale.
4. **Pressed** — sinks ~1px, loses the lift, gains a light inset shadow, darkens slightly.
5. **Disabled** — flat, no lift, reduced contrast, `not-allowed`.
6. **Focus** — 2.5px high-contrast forest ring *outside* the border (`outline`, not shadow-only).

Shared home for the grammar: the `.pillow` / `.pillow.is-primary` /
`.is-selected` / `:active` / `:disabled` / `:focus-visible` set and the tactile
`.te-btn` family in **`components.css`**; the field primitives `.pilesel .ps`
and `.dock .btn` in **`capture.css`** (and `.card` made explicitly flat via
`--structural-border`).

## 5. Proof set (implemented + validated before prototype-wide propagation)

| Screen | Route | Chrome | Pillowed (controls) | Kept flat (information) |
|---|---|---|---|---|
| Operator Drill Capture | `drill-log.html` | field | +1.0 m / +0.1 m / Undo, lithology chips, View details, submit dock, sheet material/photo/use-current, curlith | depth hero + value, progress bar, lithology empty-states, lithology log, Design read-only panel, signed strip, phase badge |
| Operator Grout Capture | `grout-log.html` | field | +1 bag / +0.5 bag / Undo / Edit bags, View anchor details, submit dock, sheet controls | bags-used panel, usage/allowance figures, injection-pressure panel, grout-stage list, Design panel |
| Configurable Engine (Work Types) | `work-types.html` | pm | six selectable work-type cards (+ selected state) | detail panel, template tags, status badges, capture-module rows |
| QA / Confirmation | `qa-queue.html` | pm | filter chips, record list cards, **Approve record** (primary) + **Reopen with reason** | requirements card, evidence card, data columns, status pills, tabs |
| PM operational (Status Board) | `status-board.html` | pm | Zone/State filters, Open Drill Log (primary) + View Evidence | 54-tile status matrix (data), zone progress bars, Selected-Anchor info panel |

Before/after screenshots: `docs/design-language-strength-shots/` (field 390×844,
desktop 1440×900, deviceScaleFactor 2). Register:
`docs/design-language-strength-register.csv`.

## 6. Deliberate exceptions / judgement calls

- **Status-board tiles stay flat.** The 54-tile matrix is *data* (state colour is
  meaningful) that happens to be selectable. Per "operational density — don't
  lift everything," tiles remain flat cells; the strong selected ring is the
  interaction cue. Pillow is reserved for the unambiguous controls (filters,
  side-panel actions).
- **Lithology chips neutralised to a uniform warm face.** The old pale
  tint/ochre/sage washes read as consumer colour-coding; material identity is
  already carried by the label and the log swatch. This matches the field
  benchmark and strengthens the instrument feel. No data removed.
- **Selected lithology/bag chip = deep-green fill** (was a light outline) to make
  the current selection decisive; fill-vs-outline is a greyscale-safe cue.
- **Compact controls keep a pill radius** (View details, filter chips, lithology
  chips) — pills are retained only for compact status/selection, per the brief.

## 7. Risks & mitigations

- *Token cascade* — new tokens live in the single `:root` that wins the cascade;
  they are additive and referenced by name, so no existing rule changes value
  unexpectedly.
- *Behaviour untouched* — only CSS `background`/`border`/`box-shadow`/
  `transition`/`:active`/`:focus-visible` were edited. No markup, JS, route,
  data, copy or state logic changed. All `data-*` hooks and IDs preserved.
- *Reduced motion* — the existing global `prefers-reduced-motion` rule already
  neutralises the added transitions.
- *Contrast* — focus upgraded from olive to forest; disabled uses muted-ink on a
  light face (not white-on-grey).

## 8. Next (Phase 3, after sign-off)

Propagate the same grammar prototype-wide using the shared `.pillow`/`.te-btn`
classes and the per-screen control patterns catalogued above, screen by screen,
re-checking each against the register columns (interactive/static, mobile,
desktop, accessibility).
