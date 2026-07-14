/* ============================================================================
   Shotcrete sample records (Quarry Face · DRAFT).
   ----------------------------------------------------------------------------
   Mesh-reinforced structural shotcrete (S1, area, per-lot where a lot is a
   spray shift). This pack carries the temporal QA story: deferred 28-day core
   strength and a substrate hold point before spraying.

   Dates are stored as integer day-offsets and rendered as RELATIVE phrases
   ("Sprayed 12 days ago", "Day 12 of 28 · due in 16 days"). Relative phrasing
   keeps the narrative fresh whenever it is viewed and, because the offsets are
   constants, keeps the harness stable (no absolute-date digit drift). agoPhrase
   now lives in ./dates.js (drilling is its second consumer) and is re-exported
   here so every shotcrete screen still reaches it via pack.agoPhrase.

   All records are fictional and flagged draft until WSP validation.
   ========================================================================== */
export { agoPhrase } from './dates.js';

export const draft = true;

export const engineerSource = { name: 'Quarry Face design set', rev: 'Rev A · 20 Jun 2026' };

/* Spray lots (shifts). Each carries batch dockets, one test panel and the
   28-day core clock. day7 / day28 are the strength results as they arrive. */
export const lots = [
  {
    id: 'SL-01', zone: 'Bench 1', members: ['SC-01', 'SC-02', 'SC-03', 'SC-04', 'SC-05'],
    sprayedDaysAgo: 35, state: 'confirmed',
    day7: { mpa: 41.0, ago: 28, note: 'indicative' },
    day28: { mpa: 43.5, ago: 7, pass: true },
    clock: 'Cured · 28-day result in',
    certificate: 'CERT-SL01', panelsSprayed: 5, testPanel: 'TP-01'
  },
  {
    id: 'SL-02', zone: 'Bench 1 · Bench 2', members: ['SC-06', 'SC-07', 'SC-08', 'SC-09', 'SC-10'],
    sprayedDaysAgo: 12, state: 'pending_results',
    day7: { mpa: 31.0, ago: 5, note: 'indicative pass' },
    day28: { pending: true, dueInDays: 16, dayN: 12, dayTotal: 28 },
    clock: 'Day 12 of 28 · result due in 16 days',
    certificate: null, panelsSprayed: 5, testPanel: 'TP-02'
  },
  {
    id: 'SL-03', zone: 'Bench 2', members: ['SC-11', 'SC-12', 'SC-13', 'SC-14', 'SC-15'],
    sprayedDaysAgo: null, state: 'held',
    day7: null, day28: null,
    clock: 'Held at substrate · not yet sprayed',
    certificate: null, panelsSprayed: 0, testPanel: null,
    substrateConfirmed: 3, substrateAwaiting: 2
  }
];

/* Substrate inspections (the hold point). SL-01 historic; SL-03 shows three
   panels witnessed and cleared, two still awaiting - the hold blocking spray. */
export const substrateRecords = [
  {
    panel: 'SC-01', lot: 'SL-01', zone: 'Bench 1',
    items: [
      { label: 'Surface scaled and cleaned', ok: true },
      { label: 'Drainage strips fixed', ok: true },
      { label: 'SE62 mesh fixed · 50 mm cover', ok: true },
      { label: 'Anchors and standoffs checked', ok: true }
    ],
    witnessedBy: 'Tim R.', witnessedDaysAgo: 36, photo: true, state: 'cleared'
  },
  {
    panel: 'SC-11', lot: 'SL-03', zone: 'Bench 2',
    items: [
      { label: 'Surface scaled and cleaned', ok: true },
      { label: 'Drainage strips fixed', ok: true },
      { label: 'SE62 mesh fixed · 50 mm cover', ok: true },
      { label: 'Anchors and standoffs checked', ok: true }
    ],
    witnessedBy: 'Tim R.', witnessedDaysAgo: 1, photo: true, state: 'cleared'
  },
  {
    panel: 'SC-12', lot: 'SL-03', zone: 'Bench 2',
    items: [
      { label: 'Surface scaled and cleaned', ok: true },
      { label: 'Drainage strips fixed', ok: true },
      { label: 'SE62 mesh fixed · 50 mm cover', ok: true },
      { label: 'Anchors and standoffs checked', ok: true }
    ],
    witnessedBy: 'Tim R.', witnessedDaysAgo: 1, photo: true, state: 'cleared'
  },
  {
    panel: 'SC-13', lot: 'SL-03', zone: 'Bench 2',
    items: [
      { label: 'Surface scaled and cleaned', ok: true },
      { label: 'Drainage strips fixed', ok: true },
      { label: 'SE62 mesh fixed · 50 mm cover', ok: true },
      { label: 'Anchors and standoffs checked', ok: true }
    ],
    witnessedBy: 'Tim R.', witnessedDaysAgo: 0, photo: true, state: 'cleared'
  },
  {
    panel: 'SC-14', lot: 'SL-03', zone: 'Bench 2',
    items: [
      { label: 'Surface scaled and cleaned', ok: true },
      { label: 'Drainage strips fixed', ok: false },
      { label: 'SE62 mesh fixed · 50 mm cover', ok: false },
      { label: 'Anchors and standoffs checked', ok: false }
    ],
    witnessedBy: null, witnessedDaysAgo: null, photo: false, state: 'awaiting'
  },
  {
    panel: 'SC-15', lot: 'SL-03', zone: 'Bench 2',
    items: [
      { label: 'Surface scaled and cleaned', ok: false },
      { label: 'Drainage strips fixed', ok: false },
      { label: 'SE62 mesh fixed · 50 mm cover', ok: false },
      { label: 'Anchors and standoffs checked', ok: false }
    ],
    witnessedBy: null, witnessedDaysAgo: null, photo: false, state: 'awaiting'
  }
];

/* Nozzleman tickets referenced by the application records and the register. */
export const nozzlemen = [
  { name: 'J. Neho', ticket: 'NZQA-SC-4471', expiry: 'valid to Mar 2027' },
  { name: 'A. Ropata', ticket: 'NZQA-SC-4488', expiry: 'valid to Sep 2026' }
];

/* Application records, one per sprayed lot: batch dockets, layers, nozzleman,
   weather, area and the test panel cast that shift. */
export const applicationRecords = [
  {
    lot: 'SL-01', zone: 'Bench 1', sprayedDaysAgo: 35, state: 'complete',
    dockets: [
      { no: 'BD-1041', m3: 3.2, mix: '40MPa-10' },
      { no: 'BD-1042', m3: 3.0, mix: '40MPa-10' },
      { no: 'BD-1043', m3: 2.6, mix: '40MPa-10' }
    ],
    delivered_m3: 8.8, theoretical_m3: 6.2, allowance: '×1.40 rebound',
    layers: '2 passes', nozzleman: 'J. Neho', weather: 'Dry · 14°C',
    areaCovered: '134 m²', testPanel: 'TP-01'
  },
  {
    lot: 'SL-02', zone: 'Bench 1 · Bench 2', sprayedDaysAgo: 12, state: 'complete',
    dockets: [
      { no: 'BD-1102', m3: 3.1, mix: '40MPa-10' },
      { no: 'BD-1103', m3: 3.3, mix: '40MPa-10' },
      { no: 'BD-1104', m3: 2.9, mix: '40MPa-10' }
    ],
    delivered_m3: 9.3, theoretical_m3: 6.6, allowance: '×1.40 rebound',
    layers: '2 passes', nozzleman: 'A. Ropata', weather: 'Overcast · 11°C',
    areaCovered: '141 m²', testPanel: 'TP-02'
  }
];

/* Thickness checks (five probe readings per panel; mean ≥ 100 mm, min ≥ 75 mm).
   SC-08 failed the minimum at 68 mm, was ground and re-sprayed, then passed. */
function tc(panel, lot, readings, state, extra) {
  var mean = Math.round(readings.reduce(function (a, b) { return a + b; }, 0) / readings.length * 10) / 10;
  var min = Math.min.apply(null, readings);
  var rec = { panel: panel, lot: lot, readings: readings, mean_mm: mean, min_mm: min,
    pass: mean >= 100 && min >= 75, state: state };
  if (extra) for (var k in extra) rec[k] = extra[k];
  return rec;
}
export const thicknessChecks = [
  tc('SC-01', 'SL-01', [108, 102, 115, 99, 104], 'confirmed'),
  tc('SC-02', 'SL-01', [101, 110, 98, 106, 112], 'confirmed'),
  tc('SC-03', 'SL-01', [116, 104, 100, 109, 103], 'confirmed'),
  tc('SC-04', 'SL-01', [99, 105, 101, 112, 107], 'confirmed'),
  tc('SC-05', 'SL-01', [110, 102, 108, 100, 104], 'confirmed'),
  tc('SC-06', 'SL-02', [104, 111, 98, 106, 101], 'submitted'),
  tc('SC-07', 'SL-02', [112, 103, 107, 100, 109], 'submitted'),
  tc('SC-08', 'SL-02', [88, 68, 79, 82, 91], 'reopened', {
    note: 'grind and re-spray', failedReading: 68,
    resprayReadings: [104, 101, 98, 107, 100], resprayState: 'submitted', resprayDaysAgo: 2
  }),
  tc('SC-09', 'SL-02', [101, 99, 106, 103, 110], 'submitted'),
  tc('SC-10', 'SL-02', [107, 100, 104, 98, 112], 'submitted')
];

/* Lab strength certificates, one per lot as the 28-day result is released. */
export const certificates = [
  { ref: 'CERT-SL01', lot: 'SL-01', item: '28-day core · 43.5 MPa', batch: 'BD-1041–43', status: 'On file' }
];

/* The plotted site plan behind this project's panel polygons (added in 3.3). */
export const spatialCanvas = '../assets/maps/quarry-face.svg';

/* ======================= Lifecycle wiring (Stage 3.3) ======================= */

export const spatialItems = [
  {"id":"SC-01","zone":"Bench 1","phase":"complete","label":"01","geometry":"area","points":[[80,205],[216,205],[216,440],[80,440]]},
  {"id":"SC-02","zone":"Bench 1","phase":"complete","label":"02","geometry":"area","points":[[222,205],[358,205],[358,440],[222,440]]},
  {"id":"SC-03","zone":"Bench 1","phase":"complete","label":"03","geometry":"area","points":[[364,205],[500,205],[500,440],[364,440]]},
  {"id":"SC-04","zone":"Bench 1","phase":"complete","label":"04","geometry":"area","points":[[506,205],[642,205],[642,440],[506,440]]},
  {"id":"SC-05","zone":"Bench 1","phase":"complete","label":"05","geometry":"area","points":[[648,205],[784,205],[784,440],[648,440]]},
  {"id":"SC-06","zone":"Bench 1","phase":"active","label":"06","geometry":"area","points":[[790,205],[926,205],[926,440],[790,440]]},
  {"id":"SC-07","zone":"Bench 1","phase":"active","label":"07","geometry":"area","points":[[932,205],[1068,205],[1068,440],[932,440]]},
  {"id":"SC-08","zone":"Bench 1","phase":"active","label":"08","geometry":"area","points":[[1074,205],[1194,205],[1194,440],[1074,440]]},
  {"id":"SC-09","zone":"Bench 2","phase":"active","label":"09","geometry":"area","points":[[120,520],[264,520],[264,755],[120,755]]},
  {"id":"SC-10","zone":"Bench 2","phase":"active","label":"10","geometry":"area","points":[[270,520],[414,520],[414,755],[270,755]]},
  {"id":"SC-11","zone":"Bench 2","phase":"planned","label":"11","geometry":"area","points":[[420,520],[564,520],[564,755],[420,755]]},
  {"id":"SC-12","zone":"Bench 2","phase":"planned","label":"12","geometry":"area","points":[[570,520],[714,520],[714,755],[570,755]]},
  {"id":"SC-13","zone":"Bench 2","phase":"planned","label":"13","geometry":"area","points":[[720,520],[864,520],[864,755],[720,755]]},
  {"id":"SC-14","zone":"Bench 2","phase":"planned","label":"14","geometry":"area","points":[[870,520],[1014,520],[1014,755],[870,755]]},
  {"id":"SC-15","zone":"Bench 2","phase":"planned","label":"15","geometry":"area","points":[[1020,520],[1154,520],[1154,755],[1020,755]]}
];

export const boardAnchors = {
  "SC-01": {"id":"SC-01","zone":"Bench 1","phase":"complete","phaseName":"Confirmed","work":"Shotcrete · SL-01","design":"28 m²","actual":"sprayed","variance":"—","varBad":false,"updated":"recently","by":"J. Neho","crew":"Spray crew","review":"Confirmed","reason":"","findings":"","gidx":1},
  "SC-02": {"id":"SC-02","zone":"Bench 1","phase":"complete","phaseName":"Confirmed","work":"Shotcrete · SL-01","design":"24 m²","actual":"sprayed","variance":"—","varBad":false,"updated":"recently","by":"J. Neho","crew":"Spray crew","review":"Confirmed","reason":"","findings":"","gidx":2},
  "SC-03": {"id":"SC-03","zone":"Bench 1","phase":"complete","phaseName":"Confirmed","work":"Shotcrete · SL-01","design":"32 m²","actual":"sprayed","variance":"—","varBad":false,"updated":"recently","by":"J. Neho","crew":"Spray crew","review":"Confirmed","reason":"","findings":"","gidx":3},
  "SC-04": {"id":"SC-04","zone":"Bench 1","phase":"complete","phaseName":"Confirmed","work":"Shotcrete · SL-01","design":"20 m²","actual":"sprayed","variance":"—","varBad":false,"updated":"recently","by":"J. Neho","crew":"Spray crew","review":"Confirmed","reason":"","findings":"","gidx":4},
  "SC-05": {"id":"SC-05","zone":"Bench 1","phase":"complete","phaseName":"Confirmed","work":"Shotcrete · SL-01","design":"30 m²","actual":"sprayed","variance":"—","varBad":false,"updated":"recently","by":"J. Neho","crew":"Spray crew","review":"Confirmed","reason":"","findings":"","gidx":5},
  "SC-06": {"id":"SC-06","zone":"Bench 1","phase":"active","phaseName":"Sprayed","work":"Shotcrete · SL-02","design":"26 m²","actual":"sprayed","variance":"—","varBad":false,"updated":"recently","by":"J. Neho","crew":"Spray crew","review":"Submitted for QA","reason":"","findings":"","gidx":6},
  "SC-07": {"id":"SC-07","zone":"Bench 1","phase":"active","phaseName":"Sprayed","work":"Shotcrete · SL-02","design":"34 m²","actual":"sprayed","variance":"—","varBad":false,"updated":"recently","by":"J. Neho","crew":"Spray crew","review":"Submitted for QA","reason":"","findings":"","gidx":7},
  "SC-08": {"id":"SC-08","zone":"Bench 1","phase":"active","phaseName":"Sprayed","work":"Shotcrete · SL-02","design":"22 m²","actual":"sprayed","variance":"—","varBad":true,"updated":"recently","by":"J. Neho","crew":"Spray crew","review":"Submitted for QA","reason":"Thickness 68 mm below 75 mm","findings":"Min 68 mm below 75 mm|Ground and re-sprayed","gidx":8},
  "SC-09": {"id":"SC-09","zone":"Bench 2","phase":"active","phaseName":"Sprayed","work":"Shotcrete · SL-02","design":"30 m²","actual":"sprayed","variance":"—","varBad":false,"updated":"recently","by":"J. Neho","crew":"Spray crew","review":"Submitted for QA","reason":"","findings":"","gidx":9},
  "SC-10": {"id":"SC-10","zone":"Bench 2","phase":"active","phaseName":"Sprayed","work":"Shotcrete · SL-02","design":"25 m²","actual":"sprayed","variance":"—","varBad":false,"updated":"recently","by":"J. Neho","crew":"Spray crew","review":"Submitted for QA","reason":"","findings":"","gidx":10},
  "SC-11": {"id":"SC-11","zone":"Bench 2","phase":"planned","phaseName":"Held","work":"Shotcrete · SL-03","design":"33 m²","actual":"—","variance":"—","varBad":false,"updated":"—","by":"—","crew":"Spray crew","review":"Held at substrate","reason":"","findings":"","gidx":11},
  "SC-12": {"id":"SC-12","zone":"Bench 2","phase":"planned","phaseName":"Held","work":"Shotcrete · SL-03","design":"21 m²","actual":"—","variance":"—","varBad":false,"updated":"—","by":"—","crew":"Spray crew","review":"Held at substrate","reason":"","findings":"","gidx":12},
  "SC-13": {"id":"SC-13","zone":"Bench 2","phase":"planned","phaseName":"Held","work":"Shotcrete · SL-03","design":"29 m²","actual":"—","variance":"—","varBad":false,"updated":"—","by":"—","crew":"Spray crew","review":"Held at substrate","reason":"","findings":"","gidx":13},
  "SC-14": {"id":"SC-14","zone":"Bench 2","phase":"planned","phaseName":"Held","work":"Shotcrete · SL-03","design":"27 m²","actual":"—","variance":"—","varBad":false,"updated":"—","by":"—","crew":"Spray crew","review":"Held at substrate","reason":"","findings":"","gidx":14},
  "SC-15": {"id":"SC-15","zone":"Bench 2","phase":"planned","phaseName":"Held","work":"Shotcrete · SL-03","design":"23 m²","actual":"—","variance":"—","varBad":false,"updated":"—","by":"—","crew":"Spray crew","review":"Held at substrate","reason":"","findings":"","gidx":15}
};

export const boardZones = [
  { name: "Bench 1", pct: 63, count: "8 panels · 5 confirmed", ids: ["SC-01","SC-02","SC-03","SC-04","SC-05","SC-06","SC-07","SC-08"] },
  { name: "Bench 2", pct: 0, count: "7 panels · 0 confirmed", ids: ["SC-09","SC-10","SC-11","SC-12","SC-13","SC-14","SC-15"] }
];


/* --- Work Item Template (one deep template, S1) ----------------------------- */
export const designSheets = [
  {
    code: 'S1', colour: '#6e8b3d', name: 'Mesh reinforced', summary: 'Area · per spray lot',
    badgeClass: 'inuse', badge: 'In use', type: 'Structural shotcrete',
    inUse: 'In use by 15 panels', engineerSource: 'Quarry Face design set · Rev A · 20 Jun 2026',
    params: [
      { k: 'Geometry', v: 'Area · polygon' },
      { k: 'Unit', v: 'm² · per spray lot' },
      { k: 'Confirmation', v: 'Per lot (a spray shift)' },
      { k: 'Thickness', v: '100 mm · min 75 mm' }
    ],
    construction: {
      tendon: 'SE62 mesh · 50 mm cover', barSpec: '40 MPa · 10 mm aggregate',
      hole: '—', grout: 'Sprayed concrete · 2 passes', drill: 'Substrate hold point before spray',
      notes: 'Mesh-reinforced structural shotcrete. A lot is a spray shift: shared dockets, one test panel, one 28-day core clock.'
    },
    testRegime: 'Thickness 100/75 mm · 28-day core ≥ 40 MPa',
    material: [
      { k: 'Mix', v: '40 MPa sprayed' },
      { k: 'Unit', v: 'm³ delivered' },
      { k: 'Theoretical', v: '0.10 m³ per m²' },
      { k: 'Allowance', v: '×1.40 rebound' }
    ],
    usedInPlan: [
      { colour: '#6e8b3d', zone: 'Bench 1', rng: 'SC-01–SC-08 · ', count: '8 panels' },
      { colour: '#2f9089', zone: 'Bench 2', rng: 'SC-09–SC-15 · ', count: '7 panels' }
    ]
  }
];
export const materialPresets = [
  { value: '1.4', label: 'Sprayed · rebound (×1.40)', sel: true },
  { value: '1.25', label: 'Sprayed · low rebound (×1.25)', sel: false },
  { value: 'custom', label: 'Custom…', sel: false }
];

/* --- Testing Standards (typed rules in plain language) -------------------- */
export const testingStandards = [
  {
    code: 'TS-S1', colour: '#6e8b3d', badge: 'Active', badgeClass: 'inuse',
    name: 'Shotcrete thickness & strength', summary: 'Thickness 100/75 mm · 28-day core',
    type: 'Acceptance', usedBy: 'Used by 1 design', governing: 'TS-S1',
    criteria: [
      { name: 'Mean thickness', val: '≥ 100 mm', cond: 'Five probe readings' },
      { name: 'Minimum thickness', val: '≥ 75 mm', cond: 'No single reading below' },
      { name: '28-day core', val: '≥ 40 MPa', cond: 'Deferred · result in ~28 days' },
      { name: 'Batch traceability', val: 'Dockets + ticket', cond: 'Per lot' }
    ],
    appliesMeta: '1 design · 15 panels · 3 spray lots',
    appliesTo: [
      { colour: '#6e8b3d', code: 'S1', name: 'Mesh reinforced', zone: 'Bench 1 · Bench 2', count: '15 panels' }
    ]
  },
  {
    code: 'TS-HOLD', colour: '#cf8e2c', badge: 'Hold point', badgeClass: 'draft',
    name: 'Substrate hold point', summary: 'Signed off before spraying',
    type: 'Hold point', usedBy: 'Used by 1 design', governing: 'TS-HOLD',
    criteria: [
      { name: 'Surface prep', val: 'Scaled + cleaned', cond: 'Before spray' },
      { name: 'Drainage + mesh', val: 'Fixed', cond: 'SE62 · 50 mm cover' },
      { name: 'Witness', val: 'Name + date recorded', cond: 'Recorded on site, not an approval flow' },
      { name: 'Sequence', val: 'Substrate → spray → thickness', cond: 'In order' }
    ],
    appliesMeta: 'Hold point · every panel',
    appliesTo: [
      { colour: '#cf8e2c', code: 'S1', name: 'Mesh reinforced', zone: 'All benches', count: '15 panels' }
    ]
  }
];

/* --- Evidence & QA -------------------------------------------------------- */
export const evidenceRequirements = [
  {
    code: 'EV-S1', colour: '#6e7d5c', icon: '<rect x="3" y="6" width="14" height="10" rx="2"/><circle cx="10" cy="11" r="2.6"/><path d="M7 6l1.1-2h3.8L13 6"/>',
    name: 'Substrate photo', badge: 'Required', badgeClass: 'req',
    summary: 'Photo · Blocks spray', type: 'Photo', status: 'Blocks spray',
    spec: 'A photo of the prepared substrate before spraying, per panel.',
    criteria: [ { k: 'Minimum', v: '1 photo per panel' }, { k: 'Subject', v: 'Prepared face + mesh' }, { k: 'When', v: 'Before spray' }, { k: 'Gate', v: 'Substrate hold point' } ],
    appliesTo: [ { k: 'Designs', cls: 'k-design', v: 'S1 · Mesh reinforced' }, { k: 'Operations', cls: 'k-work', v: 'Substrate' }, { k: 'Zones (optional)', cls: 'k-design', v: 'All benches' } ],
    reason: 'The substrate photo backs the witness hold before concrete covers the face.'
  },
  {
    code: 'EV-S2', colour: '#6e8b3d', icon: '<path d="M7 3h7l4 4v13H7z"/><path d="M14 3v4h4"/><path d="M10 12h5M10 15h5"/>',
    name: 'Batch dockets', badge: 'Required', badgeClass: 'req',
    summary: 'Record · Blocks confirmation', type: 'Record', status: 'Blocks confirmation',
    spec: 'The delivery dockets for the shift, traceable to the lot and its test panel.',
    criteria: [ { k: 'Minimum', v: 'All dockets' }, { k: 'Trace', v: 'Docket → lot → panels' }, { k: 'With', v: 'Nozzleman ticket' }, { k: 'When', v: 'At spray' } ],
    appliesTo: [ { k: 'Designs', cls: 'k-design', v: 'S1 · Mesh reinforced' }, { k: 'Operations', cls: 'k-work', v: 'Application' }, { k: 'Zones (optional)', cls: 'k-design', v: 'All lots' } ],
    reason: 'Batch traceability is part of the acceptance basis for each lot.'
  },
  {
    code: 'EV-S3', colour: '#6e8b3d', icon: '<path d="M12 3 19 6v5c0 5-3 7.6-7 9-4-1.4-7-4-7-9V6z"/><path d="M9 12l2 2 4-4"/>',
    name: 'Lab strength certificate', badge: 'Required', badgeClass: 'req',
    summary: 'Record · Deferred · Blocks confirmation', type: 'Record', status: 'Deferred · blocks confirmation',
    spec: 'The 28-day core strength certificate for the lot. Recorded when it arrives; no automated import.',
    criteria: [ { k: 'Minimum', v: '1 cert per lot' }, { k: 'Result', v: '≥ 40 MPa at 28 days' }, { k: 'Timing', v: 'Deferred ~28 days' }, { k: 'When', v: 'On release' } ],
    appliesTo: [ { k: 'Designs', cls: 'k-design', v: 'S1 · Mesh reinforced' }, { k: 'Operations', cls: 'k-work', v: 'Test panel' }, { k: 'Zones (optional)', cls: 'k-design', v: 'All lots' } ],
    reason: 'The 28-day core is the strength acceptance; the lot stays pending until it is on file.'
  }
];
export const evidenceFoot = '3 requirements defined · 3 block confirmation · one deferred to 28 days';

/* --- Safety & Risk -------------------------------------------------------- */
export const safetyDocs = [
  {
    code: 'JSA-1', colour: '#112411', icon: '<path d="M10 2.5 4 5v4.5c0 3.6 2.6 6.6 6 8 3.4-1.4 6-4.4 6-8V5z"/><path d="M7.5 10l1.8 1.8L13 8"/>',
    name: 'JSA · Quarry face shotcrete', listBadge: { cls: 'active', text: 'Active' },
    type: 'JSA', status: 'Governs all spray and access works', badge: { cls: 'active', text: 'Active' },
    srcmeta: 'Uploaded 22 Jun 2026 · Tim R. · PDF · 1.1 MB',
    scope: [ { sk: 'Work types', cls: 'k-work', v: 'All spray + access' }, { sk: 'Zones', cls: 'k-design', v: 'Bench 1 · Bench 2' } ],
    gate: [ { state: 'on', html: '<b>Active.</b> No one sprays until they have signed on and acknowledged this JSA.' }, { state: 'on', html: '<b>Today:</b> 0 of 4 crew signed on so far.' } ]
  },
  {
    code: 'SWMS-1', colour: '#6e7d5c', icon: '<path d="M10 2.5 4 5v4.5c0 3.6 2.6 6.6 6 8 3.4-1.4 6-4.4 6-8V5z"/><path d="M7.5 10l1.8 1.8L13 8"/>',
    name: 'SWMS · Dust & rebound control', listBadge: null,
    type: 'SWMS', status: 'Governs spraying and rebound', badge: { cls: 'active', text: 'Active' },
    srcmeta: 'Uploaded 22 Jun 2026 · Tim R. · PDF · 0.7 MB',
    scope: [ { sk: 'Work types', cls: 'k-work', v: 'Spraying' }, { sk: 'Zones', cls: 'k-design', v: 'Bench 1 · Bench 2' } ],
    gate: [ { state: 'on', html: '<b>Active.</b> Acknowledged at sign-on alongside the JSA before spraying.' }, { state: 'on', html: '<b>Today:</b> 0 of 4 crew signed on so far.' } ]
  }
];
export const safetyFoot = '2 safety documents active · scoped · sign-on gate wired';

/* --- Work Plan ------------------------------------------------------------ */
export const planZones = [
  { key: 'sl01', label: 'SL-01 · Bench 1', colour: '#6e8b3d', design: 'S1 · confirmed', count: 5 },
  { key: 'sl02', label: 'SL-02 · Bench 1·2', colour: '#2f9089', design: 'S1 · pending 28-day', count: 5 },
  { key: 'sl03', label: 'SL-03 · Bench 2', colour: '#cf8e2c', design: 'S1 · held at substrate', count: 5 }
];
export const planSummary = {
  source: 'quarry_face_plan.pdf', total: 15, zones: 3, unresolved: 0,
  bannerTitle: 'AI proposal from quarry_face_plan.pdf',
  bannerSub: '15 panels · 3 spray lots · 0 unresolved',
  summaryTotal: '/ 15', summarySub: '3 spray lots · substrate before spray',
  footText: '15 panels proposed · grouped in 3 spray lots · 0 unresolved',
  commitText: '15 of 15 panels committed', defaultPin: 1,
  sequenceNote: 'Sequence · substrate is signed off, then the lot is sprayed, then thickness is checked.'
};

/* --- Overview ------------------------------------------------------------- */
var IC_LAYOUT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 10h16M10 4v16"/></svg>';
var IC_DESIGN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 20 7.5v9L12 21 4 16.5v-9z"/><path d="M4 7.5 12 12l8-4.5"/><path d="M12 12v9"/></svg>';
var IC_PLAN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 9.5h16"/><path d="M8 3v4M16 3v4"/></svg>';
var IC_SHIELD = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 19 6v5c0 5-3 7.6-7 9-4-1.4-7-4-7-9V6z"/><path d="M9 12l2 2 4-4"/></svg>';
var IC_FOLDER = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8a2 2 0 0 1 2-2h3.4l1.6 1.8H18a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><circle cx="13" cy="13" r="2.3"/></svg>';
var IC_SHIELD2 = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 19 6v5c0 5-3 7.6-7 9-4-1.4-7-4-7-9V6z"/><path d="M12 8.4v4"/><path d="M12 15.2v.01"/></svg>';
var IC_DOC = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/><path d="M10 12h6M10 15.5h6"/></svg>';
export const overview = {
  metrics: {
    pct: 33, done: 5, total: 15,
    confirmedLine: 'SL-01 confirmed · SL-02 pending 28-day · SL-03 held',
    active: 5, awaitingQA: 5, issues: 1,
    statusPill: 'In delivery', targetDate: '12 Sep 2026'
  },
  alerts: [
    { id: 'SC-08', title: 'Thickness 68 mm · re-sprayed', zone: 'Bench 1', tagCls: 'action', tagText: 'Re-check', href: 'qa-queue.html' }
  ],
  qaChips: ['SL-01', 'SL-02', 'SC-08'],
  qaFoot: 'SL-01 confirmed; SL-02 pending 28-day cores; SL-03 held at substrate.',
  setupCards: [
    { href: 'layout.html', nm: 'Layout', mt: '2 benches', icon: IC_LAYOUT },
    { href: 'work-item-design.html', nm: 'Work item design', mt: '1 template', icon: IC_DESIGN },
    { href: 'work-plan.html', nm: 'Work plan', mt: '15 placed', icon: IC_PLAN },
    { href: 'testing-standards.html', nm: 'Testing standards', mt: 'Configured', icon: IC_SHIELD },
    { href: 'evidence-qa.html', nm: 'Evidence & QA', mt: 'Configured', icon: IC_FOLDER },
    { href: 'safety-risk-controls.html', nm: 'Safety & risk', mt: '2 active', icon: IC_SHIELD2 },
    { href: 'reference-documents.html', nm: 'Reference documents', mt: '7 documents', icon: IC_DOC }
  ]
};

/* --- Status Board --------------------------------------------------------- */
export const boardPhaseLabels = { complete: 'CONFIRMED', issue: 'RE-SPRAYED', active: 'SPRAYED', onhold: 'FOR QA', planned: 'HELD' };
export const boardStatus = { pct: 33, confirmed: 5, total: 15, drilled: 5, qa: 5, issues: 1 };
export const boardAttention = [
  { id: 'SC-08', text: 'Thickness 68 mm · re-sprayed', zone: 'Bench 1' }
];

/* --- QA Queue (temporal story: confirmed / pending_results / held) -------- */
export const qaQueue = {
  total: 3,
  readyCount: 1,
  attnCount: 2,
  items: [
    {
      id: 'SL-01', state: 'ready', zone: 'Bench 1', by: 'J. Neho', ago: 'sprayed 35 days ago',
      ev: 5, evTotal: 5, pill: 'Lot confirmable', result: '28-day 43.5 MPa · pass',
      metrics: [ { k: 'Panels', v: '5 / 5' }, { k: '28-day core', v: '43.5 MPa' }, { k: 'Certificate', v: 'On file' } ]
    },
    {
      id: 'SL-02', state: 'pending', zone: 'Bench 1 · Bench 2', by: 'A. Ropata', ago: 'sprayed 12 days ago',
      ev: 4, evTotal: 5, pill: 'Pending results', progress: 'Day 12 of 28 · result due in 16 days', result: '7-day 31 MPa indicative',
      metrics: [ { k: 'Panels', v: '5 / 5' }, { k: '7-day core', v: '31 MPa' }, { k: '28-day core', v: 'pending' } ],
      noteText: 'Day 12 of 28. The 28-day core result is recorded when it arrives; SC-08 was re-sprayed after a thin reading.'
    },
    {
      id: 'SL-03', state: 'attn', zone: 'Bench 2', by: 'Tim R.', ago: 'not yet sprayed',
      ev: 3, evTotal: 5, pill: 'Held at substrate', gap: 'Substrate not cleared', result: '3 of 5 panels witnessed',
      metrics: [ { k: 'Substrate cleared', v: '3 / 5' }, { k: 'Sprayed', v: '0 / 5' }, { k: 'Hold', v: 'Substrate' } ],
      noteText: 'Two panels are awaiting substrate sign-off. Spraying is held until the substrate hold point is cleared.'
    }
  ]
};

/* --- Closeout (shotcrete conditions incl deferred results) ---------------- */
export const closeout = {
  itemLabel: 'lots', items: 3, blocking: 3, days: '—', progressPct: 40,
  readyBig: 'Not ready', readySub: '3 checks still blocking closeout',
  checks: [
    { state: 'ok', name: 'SL-01 confirmed · 28-day in', detail: '28-day core 43.5 MPa · certificate on file', v: 'Done' },
    { state: 'blk', name: 'All lots confirmed incl 28-day results', detail: 'SL-02 pending 28-day (Day 12 of 28)', act: 'Open QA Queue', go: 'qa' },
    { state: 'blk', name: 'Substrate holds cleared and sprayed', detail: 'SL-03 held · 2 panels awaiting substrate', act: 'Open QA Queue', go: 'qa' },
    { state: 'blk', name: 'Batch traceability complete', detail: 'Dockets on file for SL-01/02 · SL-03 not sprayed', act: 'Confirm handover', go: 'rpt' },
    { state: 'ok', name: 'No open incidents', detail: 'None reported', v: 'Clear' },
    { state: 'ok', name: 'Daily sheets submitted', detail: '35 of 35 days submitted', v: 'Done' }
  ],
  summary: [ { k: 'Lots', v: '3', small: 'of 3' }, { k: 'Released', v: '1' }, { k: 'Pending', v: '1', small: '28-day' }, { k: 'Held', v: '1', small: 'substrate' } ],
  afterReport: 'Shotcrete register', afterReportMeta: '15 panels · 3 lots'
};
