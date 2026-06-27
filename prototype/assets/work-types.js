/* ============================================================================
   TacEdge Geotech V2.0 — Work-type configuration + job data
   ----------------------------------------------------------------------------
   SINGLE SOURCE OF TRUTH for a job. Two things live here, deliberately kept
   separate from any screen's presentation:

     1) WORK_TYPES — the ONLY place work-type differences are defined. The four
        operator screens, the QA/reporting pipeline and the setup steps are all
        SHARED. A new work type is a new entry here, not a new screen.

     2) JOB — one job's data in a clean, serialisable shape. Screens read from
        this; nothing is scraped back out of the DOM. TE.serialise() returns the
        whole job as JSON, so a future export to Excel or an external PM / asset
        system is additive (read this object) and needs no UI scraping.

   No connectors are built here (Batch D is architecture only). This module has
   no dependencies and holds no presentation.
   ========================================================================== */
window.TE = (function () {

  /* ---- Work-type definitions: labels, materials, wastage presets, spec ----
     Everything that differs between an anchoring crew and a piling crew is a
     value in here. Screens never branch on work type; they read these fields. */
  var WORK_TYPES = {
    anchor: {
      key: 'anchor', label: 'Ground anchoring', accent: '#2b4721',
      item: { singular: 'anchor', plural: 'anchors', idPrefix: 'B' },
      /* the four SHARED operator screens; only the captured noun/label changes */
      fieldScreens: [
        { core: 'Crew Sign-On', label: 'Crew Sign-On', note: 'JSA + fitness, identical for every work type' },
        { core: 'Drill Log',    label: 'Drill Log',     note: 'depth + lithology, in three taps' },
        { core: 'Material Log', label: 'Grout Log',     note: 'bags + auto variance vs the setup preset' },
        { core: 'Test Record',  label: 'Anchor Test',   note: 'photo first, provisional until a PM approves' }
      ],
      material: { name: 'Class G cement grout', unit: '25 kg bags', theoretical: '38 L per anchor' },
      wastage: { label: 'Bagged grout, rotary-drilled', factor: 1.35, display: '×1.35', flagAt: '> ×1.35' },
      spec: { name: 'WSP anchor schedule', rev: 'Rev B · 12 May 2026' },
      design: { depth: '17.5 m', load: '600 kN', testRegime: 'Proof 1.25× WL · 3 cycles' }
    },
    rockBolt: {
      key: 'rockBolt', label: 'Rock bolting', accent: '#6e7d5c',
      item: { singular: 'bolt', plural: 'bolts', idPrefix: 'RB' },
      fieldScreens: [
        { core: 'Crew Sign-On', label: 'Crew Sign-On', note: 'JSA + fitness, identical for every work type' },
        { core: 'Drill Log',    label: 'Drill Log',     note: 'depth + lithology, in three taps' },
        { core: 'Material Log', label: 'Resin Log',     note: 'capsules + auto variance vs the setup preset' },
        { core: 'Test Record',  label: 'Bolt Test',     note: 'photo first, provisional until a PM approves' }
      ],
      material: { name: 'Resin capsules', unit: '1.2 m cartridges', theoretical: '2 cartridges per bolt' },
      wastage: { label: 'Resin cartridge, percussive-drilled', factor: 1.15, display: '×1.15', flagAt: '> ×1.15' },
      spec: { name: 'Aviemore bolting schedule', rev: 'Rev A · 3 Jun 2026' },
      design: { depth: '6.0 m', load: '250 kN', testRegime: 'Pull test 1.5× WL' }
    },
    screwPile: {
      key: 'screwPile', label: 'Screw piling', accent: '#b07d2b',
      item: { singular: 'pile', plural: 'piles', idPrefix: 'SP' },
      fieldScreens: [
        { core: 'Crew Sign-On', label: 'Crew Sign-On', note: 'JSA + fitness, identical for every work type' },
        { core: 'Drill Log',    label: 'Install Log',   note: 'depth + torque, in three taps' },
        { core: 'Material Log', label: 'Grout Log',     note: 'structural grout + auto variance vs the setup preset' },
        { core: 'Test Record',  label: 'Pile Test',     note: 'photo first, provisional until a PM approves' }
      ],
      /* the self-drilling extreme: very high overbreak allowance, preset-driven */
      material: { name: 'Structural grout, self-drilling', unit: '25 kg bags', theoretical: '95 L per pile' },
      wastage: { label: 'Self-drilling, high overbreak', factor: 3.0, display: '×2.0 to ×4.0', range: '200 to 400%', flagAt: '> ×4.0' },
      spec: { name: 'Screw pile design set', rev: 'Rev C · 18 Jun 2026' },
      design: { depth: '12.0 m', load: '450 kN', testRegime: 'Installation torque + proof load' }
    }
  };

  /* ---- One job's data: the single source of truth screens read from ----
     A handful of captured items; in the real product this is the whole job. */
  var JOB = {
    id: 'BEN-SPW-2026',
    name: 'Benmore Dam · Spillway Anchoring',
    client: 'Meridian Energy',
    contractor: 'Rock Control',
    engineer: 'WSP',
    workType: 'anchor',
    zones: ['Spillway Face', 'Stilling Basin', 'Left Abutment', 'Crest Gallery'],
    items: [
      { id: 'B01', zone: 'Spillway Face', grid: 'A1', depthDesign: 17.5, depthFinal: 17.42, materialUsed: 46, variance: 1.21, test: 'Pass', state: 'approved' },
      { id: 'B08', zone: 'Spillway Face', grid: 'B2', depthDesign: 16.8, depthFinal: 16.72, materialUsed: 44, variance: 1.16, test: 'Pass', state: 'approved' },
      { id: 'B11', zone: 'Spillway Face', grid: 'E2', depthDesign: 17.5, depthFinal: null, materialUsed: null, variance: null, test: null, state: 'flagged', flag: 'missing photo' },
      { id: 'B12', zone: 'Spillway Face', grid: 'F2', depthDesign: 12.0, depthFinal: 12.4, materialUsed: 47, variance: 1.24, test: null, state: 'provisional' },
      { id: 'B17', zone: 'Spillway Face', grid: 'D3', depthDesign: 17.5, depthFinal: 17.63, materialUsed: 47, variance: 1.24, test: 'Pass', state: 'provisional' }
    ]
  };

  function config(wt) { return WORK_TYPES[wt || JOB.workType]; }
  function setWorkType(k) { if (WORK_TYPES[k]) JOB.workType = k; return config(); }

  /* Serialise the entire job from ONE place. No DOM scraping. This is the seam
     a future Excel / PM-system export reads from. */
  function serialise() {
    return JSON.stringify({
      job: JOB,
      workType: config(),
      exportedAt: '2026-06-27',
      schema: 'tacedge.geotech.job/v2'
    }, null, 2);
  }

  return {
    WORK_TYPES: WORK_TYPES,
    JOB: JOB,
    config: config,
    setWorkType: setWorkType,
    serialise: serialise
  };
})();
