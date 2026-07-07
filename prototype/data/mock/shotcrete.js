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
   is exported so every screen phrases an offset the same way.

   All records are fictional and flagged draft until WSP validation.
   ========================================================================== */
export const draft = true;

export const engineerSource = { name: 'Quarry Face design set', rev: 'Rev A · 20 Jun 2026' };

/** Relative phrase for a whole-day offset in the past. */
export function agoPhrase(days) {
  if (days == null) return 'not yet';
  if (days === 0) return 'today';
  if (days === 1) return 'yesterday';
  return days + ' days ago';
}

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
