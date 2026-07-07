/* ============================================================================
   Drilling sample records (Slip Site Investigation · DRAFT).
   ----------------------------------------------------------------------------
   Investigation drilling where the borehole log IS the deliverable. Cored
   investigation (HQ3), point geometry, confirmed per core run. This pack
   carries the report-as-deliverable story: per-hole log sheets plus a
   schedule, not a project register.

   RULE: QA confirms the RECORD, never the ground. A low-recovery or low-RQD
   run passes QA once it is fully logged; poor ground is a finding, not a
   failure. The only visible-failure case here is BH-02 R3, reopened because
   a RECORD field (RQD) is missing, not because the ground is poor.

   Dates are integer day-offsets rendered as relative phrases (agoPhrase), so
   the narrative stays fresh and the screenshot harness stays stable.

   ALL geology is placeholder. Every lithology description, SPT value and water
   observation is flagged validate:true for the Rock Control driller review.
   ========================================================================== */
export { agoPhrase } from './dates.js';

export const draft = true;

export const engineerSource = { name: 'Slip Site ground investigation brief', rev: 'Draft · for validation' };

/* A logged core run. recovery_pct and rqd_pct are RECORDED findings, never a
   pass/fail threshold. A reopened run is missing a record field, not poor
   ground. Geology is placeholder (validate:true). */
function run(id, from, to, recovery, rqd, lithology, comment, state) {
  return {
    id: id, from: from, to: to,
    recovery_pct: recovery, rqd_pct: rqd,
    lithology: lithology, comment: comment || '',
    state: state || 'confirmed', validate: true
  };
}

export const holes = [
  {
    id: 'BH-01', zone: 'Upper Slip', state: 'complete',
    rig: 'Rig 2 · track', driller: 'J. Mako', logger: 'P. Rewa',
    method: 'HQ3 triple tube', casing: 'HW to 6.4 m',
    designDepth: 22.5, drilled: 22.5, startedDaysAgo: 21, completedDaysAgo: 14,
    soils: [
      { from: 0.0, to: 1.5, desc: 'FILL · silty GRAVEL, brown', validate: true },
      { from: 1.5, to: 4.0, desc: 'Firm clayey SILT, grey', validate: true },
      { from: 4.0, to: 6.4, desc: 'Dense silty SAND', validate: true }
    ],
    spts: [
      { depth: 1.5, blows: '3, 4 / 5, 6', n: 7, validate: true },
      { depth: 3.0, blows: '4, 6 / 8, 10', n: 12, validate: true },
      { depth: 4.5, blows: 'refusal', n: null, note: 'refusal on gravel', validate: true }
    ],
    water: [
      { type: 'Strike', depth: 4.8, note: 'first strike while drilling', validate: true },
      { type: 'Rest', depth: 3.9, note: 'rose overnight', validate: true }
    ],
    runs: [
      run('R1', 6.4, 7.9, 96, 72, 'Slightly weathered GREYWACKE'),
      run('R2', 7.9, 9.4, 98, 80, 'Slightly weathered GREYWACKE'),
      run('R3', 9.4, 10.9, 94, 66, 'Slightly weathered GREYWACKE'),
      run('R4', 10.9, 12.4, 78, 45, 'Moderately weathered GREYWACKE', 'crushed zone 11.3 to 11.6 m'),
      run('R5', 12.4, 13.9, 100, 85, 'Slightly weathered GREYWACKE'),
      run('R6', 13.9, 15.4, 97, 78, 'Slightly weathered GREYWACKE'),
      run('R7', 15.4, 16.9, 95, 70, 'Slightly weathered GREYWACKE'),
      run('R8', 16.9, 18.4, 99, 88, 'Fresh GREYWACKE'),
      run('R9', 18.4, 19.9, 96, 82, 'Fresh GREYWACKE'),
      run('R10', 19.9, 21.4, 98, 84, 'Fresh GREYWACKE'),
      run('R11', 21.4, 22.5, 92, 60, 'Fresh GREYWACKE, close jointed')
    ],
    boxes: [
      { no: 'B1', from: 6.4, to: 10.0, photo_wet: true, photo_dry: true, label: true },
      { no: 'B2', from: 10.0, to: 14.0, photo_wet: true, photo_dry: true, label: true },
      { no: 'B3', from: 14.0, to: 18.5, photo_wet: true, photo_dry: true, label: true },
      { no: 'B4', from: 18.5, to: 22.5, photo_wet: true, photo_dry: true, label: true }
    ],
    samples: [
      { depth: 1.5, type: 'SPT', sample_id: 'S1', dispatch_docket: 'DK-4471', dispatchedDaysAgo: 13 },
      { depth: 3.0, type: 'SPT', sample_id: 'S2', dispatch_docket: 'DK-4471', dispatchedDaysAgo: 13 },
      { depth: 5.5, type: 'Bulk', sample_id: 'S3', dispatch_docket: 'DK-4471', dispatchedDaysAgo: 13 },
      { depth: 11.5, type: 'Core', sample_id: 'S4', dispatch_docket: 'DK-4472', dispatchedDaysAgo: 9 },
      { depth: 17.0, type: 'Core', sample_id: 'S5', dispatch_docket: 'DK-4472', dispatchedDaysAgo: 9 }
    ],
    completion: { method: 'Grout backfill', reinstated: true, backfilledDaysAgo: 14, note: 'collar reinstated' },
    logReleased: true
  },

  {
    id: 'BH-02', zone: 'Upper Slip', state: 'in_progress',
    rig: 'Rig 2 · track', driller: 'J. Mako', logger: 'P. Rewa',
    method: 'HQ3 triple tube', casing: 'HW to 5.5 m',
    designDepth: 22.5, drilled: 14.2, startedDaysAgo: 4, completedDaysAgo: null,
    soils: [
      { from: 0.0, to: 2.0, desc: 'FILL · silty GRAVEL', validate: true },
      { from: 2.0, to: 5.5, desc: 'Firm to stiff clayey SILT', validate: true }
    ],
    spts: [
      { depth: 1.5, blows: '2, 3 / 4, 5', n: 6, validate: true },
      { depth: 3.0, blows: '5, 7 / 9, 11', n: 14, validate: true }
    ],
    water: [
      { type: 'Strike', depth: 5.2, note: 'while drilling', validate: true }
    ],
    runs: [
      run('R1', 5.5, 7.0, 95, 62, 'Moderately weathered GREYWACKE'),
      run('R2', 7.0, 8.5, 97, 70, 'Moderately weathered GREYWACKE'),
      run('R3', 8.5, 10.0, 90, null, 'Moderately weathered GREYWACKE', 'RQD missing · re-log from box B2', 'reopened'),
      run('R4', 10.0, 11.5, 96, 74, 'Slightly weathered GREYWACKE'),
      run('R5', 11.5, 13.0, 98, 80, 'Slightly weathered GREYWACKE'),
      run('R6', 13.0, 14.2, 93, 58, 'Slightly weathered GREYWACKE')
    ],
    boxes: [
      { no: 'B1', from: 5.5, to: 9.0, photo_wet: true, photo_dry: true, label: true },
      { no: 'B2', from: 9.0, to: 12.5, photo_wet: true, photo_dry: false, label: true },
      { no: 'B3', from: 12.5, to: 14.2, photo_wet: false, photo_dry: false, label: false }
    ],
    samples: [
      { depth: 1.5, type: 'SPT', sample_id: 'S1', dispatch_docket: 'DK-4488', dispatchedDaysAgo: 2 },
      { depth: 3.0, type: 'SPT', sample_id: 'S2', dispatch_docket: 'DK-4488', dispatchedDaysAgo: 2 }
    ],
    completion: null,
    logReleased: false
  },

  {
    id: 'BH-03', zone: 'Upper Slip', state: 'set_up',
    rig: 'Rig 1 · skid', driller: 'T. Rangi', logger: 'P. Rewa',
    method: 'HQ3 triple tube', casing: 'not yet set',
    designDepth: 18.0, drilled: 0, startedDaysAgo: null, completedDaysAgo: null,
    soils: [], spts: [], water: [], runs: [], boxes: [], samples: [],
    completion: null, logReleased: false, note: 'Rig set up on hole, not yet started'
  },

  {
    id: 'BH-04', zone: 'Upper Slip', state: 'complete',
    rig: 'Rig 1 · skid', driller: 'T. Rangi', logger: 'P. Rewa',
    method: 'HQ3 triple tube', casing: 'HW to 5.0 m',
    designDepth: 15.0, drilled: 15.0, startedDaysAgo: 18, completedDaysAgo: 12,
    soils: [
      { from: 0.0, to: 2.5, desc: 'FILL · clayey GRAVEL', validate: true },
      { from: 2.5, to: 5.0, desc: 'Stiff CLAY, brown', validate: true }
    ],
    spts: [
      { depth: 1.5, blows: '4, 5 / 6, 7', n: 9, validate: true },
      { depth: 3.0, blows: '6, 8 / 10, 12', n: 16, validate: true }
    ],
    water: [ { type: 'Strike', depth: 6.1, note: 'while drilling', validate: true } ],
    runs: [
      run('R1', 5.0, 6.5, 97, 68, 'Moderately weathered GREYWACKE'),
      run('R2', 6.5, 8.0, 99, 82, 'Slightly weathered GREYWACKE'),
      run('R3', 8.0, 9.5, 95, 74, 'Slightly weathered GREYWACKE'),
      run('R4', 9.5, 11.0, 100, 90, 'Fresh GREYWACKE'),
      run('R5', 11.0, 12.5, 96, 78, 'Fresh GREYWACKE'),
      run('R6', 12.5, 15.0, 94, 71, 'Fresh GREYWACKE')
    ],
    boxes: [
      { no: 'B1', from: 5.0, to: 8.5, photo_wet: true, photo_dry: true, label: true },
      { no: 'B2', from: 8.5, to: 12.0, photo_wet: true, photo_dry: true, label: true },
      { no: 'B3', from: 12.0, to: 15.0, photo_wet: true, photo_dry: true, label: true }
    ],
    samples: [
      { depth: 1.5, type: 'SPT', sample_id: 'S1', dispatch_docket: 'DK-4460', dispatchedDaysAgo: 11 },
      { depth: 4.0, type: 'Bulk', sample_id: 'S2', dispatch_docket: 'DK-4460', dispatchedDaysAgo: 11 },
      { depth: 10.0, type: 'Core', sample_id: 'S3', dispatch_docket: 'DK-4460', dispatchedDaysAgo: 11 }
    ],
    completion: { method: 'Grout backfill', reinstated: true, backfilledDaysAgo: 12, note: 'collar reinstated' },
    logReleased: true
  },

  {
    id: 'BH-05', zone: 'Lower Terrace', state: 'complete',
    rig: 'Rig 2 · track', driller: 'J. Mako', logger: 'P. Rewa',
    method: 'HQ3 triple tube', casing: 'HW to 7.0 m',
    designDepth: 20.0, drilled: 20.0, startedDaysAgo: 16, completedDaysAgo: 9,
    soils: [
      { from: 0.0, to: 3.0, desc: 'ALLUVIUM · sandy GRAVEL', validate: true },
      { from: 3.0, to: 7.0, desc: 'Loose to medium dense SAND', validate: true }
    ],
    spts: [
      { depth: 1.5, blows: '2, 2 / 3, 3', n: 5, validate: true },
      { depth: 3.0, blows: '3, 4 / 5, 6', n: 8, validate: true },
      { depth: 4.5, blows: '5, 6 / 7, 8', n: 11, validate: true }
    ],
    water: [
      { type: 'Strike', depth: 2.4, note: 'shallow water table', validate: true },
      { type: 'Rest', depth: 2.0, note: 'stable', validate: true }
    ],
    runs: [
      run('R1', 7.0, 8.5, 93, 55, 'Moderately weathered GREYWACKE'),
      run('R2', 8.5, 10.0, 96, 68, 'Slightly weathered GREYWACKE'),
      run('R3', 10.0, 11.5, 98, 79, 'Slightly weathered GREYWACKE'),
      run('R4', 11.5, 13.0, 95, 72, 'Slightly weathered GREYWACKE'),
      run('R5', 13.0, 14.5, 99, 86, 'Fresh GREYWACKE'),
      run('R6', 14.5, 16.0, 97, 80, 'Fresh GREYWACKE'),
      run('R7', 16.0, 17.5, 96, 76, 'Fresh GREYWACKE'),
      run('R8', 17.5, 20.0, 94, 64, 'Fresh GREYWACKE, close jointed')
    ],
    boxes: [
      { no: 'B1', from: 7.0, to: 10.5, photo_wet: true, photo_dry: true, label: true },
      { no: 'B2', from: 10.5, to: 14.0, photo_wet: true, photo_dry: true, label: true },
      { no: 'B3', from: 14.0, to: 17.5, photo_wet: true, photo_dry: true, label: true },
      { no: 'B4', from: 17.5, to: 20.0, photo_wet: true, photo_dry: true, label: true }
    ],
    samples: [
      { depth: 1.5, type: 'SPT', sample_id: 'S1', dispatch_docket: 'DK-4455', dispatchedDaysAgo: 8 },
      { depth: 3.0, type: 'SPT', sample_id: 'S2', dispatch_docket: 'DK-4455', dispatchedDaysAgo: 8 },
      { depth: 6.0, type: 'Tube', sample_id: 'S3', dispatch_docket: 'DK-4455', dispatchedDaysAgo: 8 },
      { depth: 12.0, type: 'Core', sample_id: 'S4', dispatch_docket: 'DK-4456', dispatchedDaysAgo: 6 }
    ],
    completion: { method: 'Grout backfill', reinstated: true, backfilledDaysAgo: 9, note: 'collar reinstated' },
    logReleased: true
  },

  {
    id: 'BH-06', zone: 'Lower Terrace', state: 'planned',
    rig: '—', driller: '—', logger: '—', method: 'HQ3 triple tube', casing: '—',
    designDepth: 25.0, drilled: 0, startedDaysAgo: null, completedDaysAgo: null,
    soils: [], spts: [], water: [], runs: [], boxes: [], samples: [],
    completion: null, logReleased: false
  },
  {
    id: 'BH-07', zone: 'Lower Terrace', state: 'planned',
    rig: '—', driller: '—', logger: '—', method: 'HQ3 triple tube', casing: '—',
    designDepth: 12.0, drilled: 0, startedDaysAgo: null, completedDaysAgo: null,
    soils: [], spts: [], water: [], runs: [], boxes: [], samples: [],
    completion: null, logReleased: false
  },
  {
    id: 'BH-08', zone: 'Lower Terrace', state: 'planned',
    rig: '—', driller: '—', logger: '—', method: 'HQ3 triple tube', casing: '—',
    designDepth: 16.0, drilled: 0, startedDaysAgo: null, completedDaysAgo: null,
    soils: [], spts: [], water: [], runs: [], boxes: [], samples: [],
    completion: null, logReleased: false
  }
];

/* ======================= Lifecycle wiring (Stage 4.3) ======================= */

export const spatialCanvas = '../assets/maps/slip-site.svg';

/* Boreholes are points. phase drives the board and spatial colour: complete =
   log released, active = logging, onhold = rig set up, planned = not started. */
export const spatialItems = [
  { id: 'BH-01', zone: 'Upper Slip', phase: 'complete', label: '01', geometry: 'point', x: 300, y: 245 },
  { id: 'BH-02', zone: 'Upper Slip', phase: 'active', label: '02', geometry: 'point', x: 520, y: 250 },
  { id: 'BH-03', zone: 'Upper Slip', phase: 'onhold', label: '03', geometry: 'point', x: 745, y: 250 },
  { id: 'BH-04', zone: 'Upper Slip', phase: 'complete', label: '04', geometry: 'point', x: 960, y: 300 },
  { id: 'BH-05', zone: 'Lower Terrace', phase: 'complete', label: '05', geometry: 'point', x: 300, y: 600 },
  { id: 'BH-06', zone: 'Lower Terrace', phase: 'planned', label: '06', geometry: 'point', x: 520, y: 605 },
  { id: 'BH-07', zone: 'Lower Terrace', phase: 'planned', label: '07', geometry: 'point', x: 745, y: 600 },
  { id: 'BH-08', zone: 'Lower Terrace', phase: 'planned', label: '08', geometry: 'point', x: 960, y: 610 }
];

export const boardAnchors = {
  'BH-01': { id: 'BH-01', zone: 'Upper Slip', phase: 'complete', phaseName: 'Released', work: 'Drilling · HQ3', design: '22.5 m', actual: '22.5 m drilled', variance: '—', varBad: false, updated: '14 days ago', by: 'P. Rewa', crew: 'Rig 2', review: 'Log released', reason: '', findings: '', gidx: 1 },
  'BH-02': { id: 'BH-02', zone: 'Upper Slip', phase: 'active', phaseName: 'Logging', work: 'Drilling · HQ3', design: '22.5 m', actual: '14.2 m drilled', variance: '—', varBad: true, updated: 'today', by: 'P. Rewa', crew: 'Rig 2', review: 'Logging · R3 reopened', reason: 'RQD not recorded on R3', findings: 'R3 RQD field empty|Re-log from box B2', gidx: 2 },
  'BH-03': { id: 'BH-03', zone: 'Upper Slip', phase: 'onhold', phaseName: 'Set up', work: 'Drilling · HQ3', design: '18.0 m', actual: 'not started', variance: '—', varBad: false, updated: 'today', by: 'T. Rangi', crew: 'Rig 1', review: 'Rig set up', reason: '', findings: '', gidx: 3 },
  'BH-04': { id: 'BH-04', zone: 'Upper Slip', phase: 'complete', phaseName: 'Released', work: 'Drilling · HQ3', design: '15.0 m', actual: '15.0 m drilled', variance: '—', varBad: false, updated: '12 days ago', by: 'P. Rewa', crew: 'Rig 1', review: 'Log released', reason: '', findings: '', gidx: 4 },
  'BH-05': { id: 'BH-05', zone: 'Lower Terrace', phase: 'complete', phaseName: 'Released', work: 'Drilling · HQ3', design: '20.0 m', actual: '20.0 m drilled', variance: '—', varBad: false, updated: '9 days ago', by: 'P. Rewa', crew: 'Rig 2', review: 'Log released', reason: '', findings: '', gidx: 5 },
  'BH-06': { id: 'BH-06', zone: 'Lower Terrace', phase: 'planned', phaseName: 'Planned', work: 'Drilling · HQ3', design: '25.0 m', actual: '—', variance: '—', varBad: false, updated: '—', by: '—', crew: '—', review: 'Planned', reason: '', findings: '', gidx: 6 },
  'BH-07': { id: 'BH-07', zone: 'Lower Terrace', phase: 'planned', phaseName: 'Planned', work: 'Drilling · HQ3', design: '12.0 m', actual: '—', variance: '—', varBad: false, updated: '—', by: '—', crew: '—', review: 'Planned', reason: '', findings: '', gidx: 7 },
  'BH-08': { id: 'BH-08', zone: 'Lower Terrace', phase: 'planned', phaseName: 'Planned', work: 'Drilling · HQ3', design: '16.0 m', actual: '—', variance: '—', varBad: false, updated: '—', by: '—', crew: '—', review: 'Planned', reason: '', findings: '', gidx: 8 }
};

export const boardZones = [
  { name: 'Upper Slip', pct: 50, count: '4 holes · 2 released', ids: ['BH-01', 'BH-02', 'BH-03', 'BH-04'] },
  { name: 'Lower Terrace', pct: 25, count: '4 holes · 1 released', ids: ['BH-05', 'BH-06', 'BH-07', 'BH-08'] }
];

/* --- Work Item Design (one deep template, HQ3) ---------------------------- */
export const designSheets = [
  {
    code: 'HQ3', colour: '#5b7a8c', name: 'Cored investigation', summary: 'Point · per core run',
    badgeClass: 'inuse', badge: 'In use', type: 'Investigation drilling',
    inUse: 'In use by 8 boreholes', engineerSource: 'Slip Site investigation brief · Draft',
    params: [
      { k: 'Geometry', v: 'Point · borehole' },
      { k: 'Unit', v: 'm · per core run' },
      { k: 'Confirmation', v: 'Per run (each 1.5 m)' },
      { k: 'Core size', v: 'HQ3 · 63.5 mm' }
    ],
    construction: {
      tendon: '—', barSpec: 'HQ3 triple tube · 63.5 mm core', hole: 'HW casing through soils',
      grout: 'Grout backfill on completion', drill: '1.5 m runs · SPT at 1.5 m in soils',
      notes: 'The borehole log is the deliverable. Each run is logged and confirmed on its own; recovery and RQD are recorded findings, not pass or fail.'
    },
    testRegime: 'Completeness and custody only · no ground thresholds',
    material: [
      { k: 'Flush', v: 'Water or polymer' },
      { k: 'Core boxes', v: '1.0 m rows, labelled' },
      { k: 'Sampling', v: 'SPT at 1.5 m intervals' },
      { k: 'Photos', v: 'Per box, wet and dry' }
    ],
    usedInPlan: [
      { colour: '#5b7a8c', zone: 'Upper Slip', rng: 'BH-01–BH-04 · ', count: '4 holes' },
      { colour: '#7a8a6b', zone: 'Lower Terrace', rng: 'BH-05–BH-08 · ', count: '4 holes' }
    ]
  }
];
export const materialPresets = [
  { value: 'water', label: 'Flush · water', sel: true },
  { value: 'polymer', label: 'Flush · polymer', sel: false },
  { value: 'custom', label: 'Custom…', sel: false }
];

/* --- Testing Standards (completeness and custody, in plain language) ------ */
export const testingStandards = [
  {
    code: 'TS-QA', colour: '#5b7a8c', badge: 'Basis', badgeClass: 'inuse',
    name: 'QA basis · record completeness', summary: 'QA confirms the record. Ground conditions are findings, not failures.',
    type: 'Basis', usedBy: 'Governs every run', governing: 'TS-QA',
    criteria: [
      { name: 'Run logged', val: 'From, to, recovery, RQD, lithology', cond: 'Every core run' },
      { name: 'Low recovery', val: 'Recorded, not failed', cond: 'A 78% run passes once logged' },
      { name: 'Reopen reason', val: 'Missing record field only', cond: 'Never the ground' },
      { name: 'Confirmation', val: 'Per run', cond: 'Rolls up under the hole' }
    ],
    appliesMeta: '1 template · 8 holes · logged per run',
    appliesTo: [
      { colour: '#5b7a8c', code: 'HQ3', name: 'Cored investigation', zone: 'Upper Slip · Lower Terrace', count: '8 holes' }
    ]
  },
  {
    code: 'TS-SEQ', colour: '#7a8a6b', badge: 'Sequence', badgeClass: 'draft',
    name: 'Log, photograph, dispatch', summary: 'Logged and photographed before dispatch',
    type: 'Sequence', usedBy: 'Governs custody', governing: 'TS-SEQ',
    criteria: [
      { name: 'Borehole log', val: 'Runs logged', cond: 'First' },
      { name: 'Core photos', val: 'Wet and dry per box', cond: 'Then' },
      { name: 'Sample register', val: 'Docket per sample', cond: 'Before dispatch' },
      { name: 'Order', val: 'Log → photo → dispatch', cond: 'In order' }
    ],
    appliesMeta: 'Custody · every sample',
    appliesTo: [
      { colour: '#7a8a6b', code: 'HQ3', name: 'Cored investigation', zone: 'All holes', count: '8 holes' }
    ]
  }
];

/* --- Evidence & QA -------------------------------------------------------- */
export const evidenceRequirements = [
  {
    code: 'EV-D1', colour: '#6e7d5c', icon: '<rect x="3" y="6" width="14" height="10" rx="2"/><circle cx="10" cy="11" r="2.6"/><path d="M7 6l1.1-2h3.8L13 6"/>',
    name: 'Core box photos', badge: 'Required', badgeClass: 'req',
    summary: 'Photo · Blocks dispatch', type: 'Photo', status: 'Blocks dispatch',
    spec: 'A wet and a dry photo of every core box, labelled with hole and depth.',
    criteria: [ { k: 'Minimum', v: '2 photos per box' }, { k: 'Subject', v: 'Wet and dry core' }, { k: 'Label', v: 'Hole and depth' }, { k: 'When', v: 'Before dispatch' } ],
    appliesTo: [ { k: 'Designs', cls: 'k-design', v: 'HQ3 · Cored investigation' }, { k: 'Operations', cls: 'k-work', v: 'Core photos' }, { k: 'Zones (optional)', cls: 'k-design', v: 'All holes' } ],
    reason: 'The core photo record backs the log; it is completeness, not a judgement on the ground.'
  },
  {
    code: 'EV-D2', colour: '#6e8b3d', icon: '<path d="M7 3h7l4 4v13H7z"/><path d="M14 3v4h4"/><path d="M10 12h5M10 15h5"/>',
    name: 'Dispatch docket', badge: 'Required', badgeClass: 'req',
    summary: 'Record · Custody', type: 'Record', status: 'Custody chain',
    spec: 'A dispatch docket per sample batch, tying each sample to its hole and depth.',
    criteria: [ { k: 'Minimum', v: '1 docket per batch' }, { k: 'Trace', v: 'Sample → hole → depth' }, { k: 'With', v: 'Dispatch date' }, { k: 'When', v: 'At dispatch' } ],
    appliesTo: [ { k: 'Designs', cls: 'k-design', v: 'HQ3 · Cored investigation' }, { k: 'Operations', cls: 'k-work', v: 'Sample register' }, { k: 'Zones (optional)', cls: 'k-design', v: 'All holes' } ],
    reason: 'Sample custody is the chain from the hole to the laboratory.'
  },
  {
    code: 'EV-D3', colour: '#6e7d5c', icon: '<rect x="3" y="6" width="14" height="10" rx="2"/><circle cx="10" cy="11" r="2.6"/><path d="M7 6l1.1-2h3.8L13 6"/>',
    name: 'Completion photo', badge: 'Required', badgeClass: 'req',
    summary: 'Photo · Closeout', type: 'Photo', status: 'Blocks closeout',
    spec: 'A completion photo at the collar once the hole is backfilled and reinstated.',
    criteria: [ { k: 'Minimum', v: '1 photo per hole' }, { k: 'Subject', v: 'Reinstated collar' }, { k: 'When', v: 'On completion' }, { k: 'Gate', v: 'Closeout' } ],
    appliesTo: [ { k: 'Designs', cls: 'k-design', v: 'HQ3 · Cored investigation' }, { k: 'Operations', cls: 'k-work', v: 'Completion' }, { k: 'Zones (optional)', cls: 'k-design', v: 'All holes' } ],
    reason: 'The completion photo records reinstatement for the closeout gate.'
  }
];
export const evidenceFoot = 'Completeness and custody only · QA confirms the record, ground conditions are findings not failures';

/* --- Safety & Risk -------------------------------------------------------- */
export const safetyDocs = [
  {
    code: 'JSA-1', colour: '#2b4721', icon: '<path d="M10 2.5 4 5v4.5c0 3.6 2.6 6.6 6 8 3.4-1.4 6-4.4 6-8V5z"/><path d="M7.5 10l1.8 1.8L13 8"/>',
    name: 'JSA · Investigation drilling', listBadge: { cls: 'active', text: 'Active' },
    type: 'JSA', status: 'Governs all drilling and coring', badge: { cls: 'active', text: 'Active' },
    srcmeta: 'Uploaded · Rock Control · PDF · 1.0 MB',
    scope: [ { sk: 'Work types', cls: 'k-work', v: 'Drilling + coring' }, { sk: 'Zones', cls: 'k-design', v: 'Upper Slip · Lower Terrace' } ],
    gate: [ { state: 'on', html: '<b>Active.</b> No one drills until they have signed on and acknowledged this JSA.' }, { state: 'on', html: '<b>Today:</b> 0 of 3 crew signed on so far.' } ]
  },
  {
    code: 'SWMS-1', colour: '#6e7d5c', icon: '<path d="M10 2.5 4 5v4.5c0 3.6 2.6 6.6 6 8 3.4-1.4 6-4.4 6-8V5z"/><path d="M7.5 10l1.8 1.8L13 8"/>',
    name: 'SWMS · Rig setup & spoil', listBadge: null,
    type: 'SWMS', status: 'Governs rig moves and spoil', badge: { cls: 'active', text: 'Active' },
    srcmeta: 'Uploaded · Rock Control · PDF · 0.6 MB',
    scope: [ { sk: 'Work types', cls: 'k-work', v: 'Rig setup' }, { sk: 'Zones', cls: 'k-design', v: 'Upper Slip · Lower Terrace' } ],
    gate: [ { state: 'on', html: '<b>Active.</b> Acknowledged at sign-on alongside the JSA before drilling.' }, { state: 'on', html: '<b>Today:</b> 0 of 3 crew signed on so far.' } ]
  }
];
export const safetyFoot = '2 safety documents active · scoped · sign-on gate wired';

/* --- Work Plan (holes with metres-drilled progress, grouped by zone) ------ */
export const planZones = [
  { key: 'bh01', colour: '#5b7a8c', label: 'BH-01 · Upper Slip', design: 'Cored HQ3 · released', progress: { drilled: '22.5', design: '22.5', unit: 'm' }, count: 1 },
  { key: 'bh02', colour: '#c79a3c', label: 'BH-02 · Upper Slip', design: 'Logging · R3 reopened', progress: { drilled: '14.2', design: '22.5', unit: 'm' }, count: 1 },
  { key: 'bh03', colour: '#7a8270', label: 'BH-03 · Upper Slip', design: 'Rig set up', progress: { drilled: '0.0', design: '18.0', unit: 'm' }, count: 1 },
  { key: 'bh04', colour: '#5b7a8c', label: 'BH-04 · Upper Slip', design: 'Cored HQ3 · released', progress: { drilled: '15.0', design: '15.0', unit: 'm' }, count: 1 },
  { key: 'bh05', colour: '#5b7a8c', label: 'BH-05 · Lower Terrace', design: 'Cored HQ3 · released', progress: { drilled: '20.0', design: '20.0', unit: 'm' }, count: 1 },
  { key: 'bh06', colour: '#7a8270', label: 'BH-06 · Lower Terrace', design: 'Planned', progress: { drilled: '0.0', design: '25.0', unit: 'm' }, count: 1 },
  { key: 'bh07', colour: '#7a8270', label: 'BH-07 · Lower Terrace', design: 'Planned', progress: { drilled: '0.0', design: '12.0', unit: 'm' }, count: 1 },
  { key: 'bh08', colour: '#7a8270', label: 'BH-08 · Lower Terrace', design: 'Planned', progress: { drilled: '0.0', design: '16.0', unit: 'm' }, count: 1 }
];
export const planSummary = {
  source: 'slip_site_brief.pdf', total: 8, zones: 2, unresolved: 0,
  bannerTitle: 'AI proposal from slip_site_brief.pdf',
  bannerSub: '8 boreholes · 2 zones · 0 unresolved',
  summaryTotal: '/ 8', summarySub: '2 zones · logged per run',
  footText: '8 boreholes proposed · 71.7 of 151.0 m drilled · 0 unresolved',
  commitText: '8 of 8 boreholes committed', defaultPin: null,
  sequenceNote: 'Metres drilled against design depth. Confirmation is per core run.'
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
    pct: 47, done: 3, total: 8,
    confirmedLine: '3 logs released · BH-02 logging · 3 holes planned',
    active: 1, awaitingQA: 1, issues: 1,
    statusPill: 'In delivery', targetDate: 'draft programme'
  },
  alerts: [
    { id: 'BH-02 · R3', title: 'RQD not recorded · re-log from box B2', zone: 'Upper Slip', tagCls: 'action', tagText: 'Re-log', href: 'qa-queue.html' }
  ],
  qaChips: ['BH-01', 'BH-04', 'BH-05', 'BH-02'],
  qaFoot: 'BH-01, BH-04 and BH-05 logs released; BH-02 has one run reopened for a missing RQD field.',
  setupCards: [
    { href: 'layout.html', nm: 'Layout', mt: '2 zones', icon: IC_LAYOUT },
    { href: 'work-item-design.html', nm: 'Work item design', mt: '1 template', icon: IC_DESIGN },
    { href: 'work-plan.html', nm: 'Work plan', mt: '8 holes', icon: IC_PLAN },
    { href: 'testing-standards.html', nm: 'Testing standards', mt: 'Completeness', icon: IC_SHIELD },
    { href: 'evidence-qa.html', nm: 'Evidence & QA', mt: 'Custody', icon: IC_FOLDER },
    { href: 'safety-risk-controls.html', nm: 'Safety & risk', mt: '2 active', icon: IC_SHIELD2 },
    { href: 'reference-documents.html', nm: 'Reference documents', mt: '7 documents', icon: IC_DOC }
  ]
};

/* --- Status Board --------------------------------------------------------- */
export const boardPhaseLabels = { complete: 'RELEASED', issue: 'RE-LOG', active: 'LOGGING', onhold: 'SET UP', planned: 'PLANNED' };
export const boardStatus = { pct: 47, confirmed: 3, total: 8, drilled: 4, qa: 1, issues: 1 };
export const boardAttention = [
  { id: 'BH-02 · R3', text: 'RQD not recorded · re-log from box B2', zone: 'Upper Slip' }
];

/* --- QA Queue (per-run rows and hole rollups; QA confirms the record) ----- */
export const qaQueue = {
  total: 4,
  readyCount: 3,
  attnCount: 1,
  items: [
    {
      id: 'BH-01', state: 'ready', zone: 'Upper Slip', by: 'P. Rewa', ago: 'logged 14 days ago',
      ev: 4, evTotal: 4, pill: 'Log confirmable', result: '11 runs · 4 boxes · 5 samples',
      metrics: [ { k: 'Runs logged', v: '11 / 11' }, { k: 'Core boxes', v: '4 / 4' }, { k: 'Completion', v: 'Backfilled' } ],
      noteText: 'Every run is logged and the hole is backfilled. The log is ready to confirm. Recovery and RQD are recorded findings, not pass or fail.'
    },
    {
      id: 'BH-04', state: 'ready', zone: 'Upper Slip', by: 'P. Rewa', ago: 'logged 12 days ago',
      ev: 3, evTotal: 3, pill: 'Log confirmable', result: '6 runs · 3 boxes · 3 samples',
      metrics: [ { k: 'Runs logged', v: '6 / 6' }, { k: 'Core boxes', v: '3 / 3' }, { k: 'Completion', v: 'Backfilled' } ]
    },
    {
      id: 'BH-05', state: 'ready', zone: 'Lower Terrace', by: 'P. Rewa', ago: 'logged 9 days ago',
      ev: 4, evTotal: 4, pill: 'Log confirmable', result: '8 runs · 4 boxes · 4 samples',
      metrics: [ { k: 'Runs logged', v: '8 / 8' }, { k: 'Core boxes', v: '4 / 4' }, { k: 'Completion', v: 'Backfilled' } ]
    },
    {
      id: 'BH-02 · R3', state: 'attn', zone: 'Upper Slip · run', by: 'P. Rewa', ago: 'logged 2 days ago',
      ev: 4, evTotal: 5, pill: 'RQD not recorded', gap: 'RQD not recorded', result: 'recovery recorded, RQD field empty',
      metrics: [ { k: 'Recovery', v: '90 %' }, { k: 'RQD', v: 'not recorded', cls: 'warn' }, { k: 'Depth', v: '8.5–10.0 m' } ],
      noteText: 'The run is reopened because the RQD field is empty, not because of the ground. Re-log RQD from box B2 to complete the record.'
    }
  ]
};

/* --- Closeout (drilling conditions: logs released, samples dispatched) ---- */
export const closeout = {
  itemLabel: 'holes', items: 8, blocking: 4, days: '—', progressPct: 40,
  readyBig: 'Not ready', readySub: '4 checks still blocking closeout',
  checks: [
    { state: 'ok', name: 'Logs released for completed holes', detail: 'BH-01, BH-04, BH-05 logs released', v: 'Done' },
    { state: 'blk', name: 'All holes drilled and logged', detail: 'BH-02 logging · BH-03 set up · BH-06/07/08 planned', act: 'Open Work Plan', go: 'plan' },
    { state: 'blk', name: 'All runs logged and confirmed', detail: 'BH-02 R3 reopened for a missing RQD field', act: 'Open QA Queue', go: 'qa' },
    { state: 'blk', name: 'All samples dispatched with custody', detail: 'Dockets on file for BH-01/04/05 · others pending', act: 'Confirm handover', go: 'rpt' },
    { state: 'blk', name: 'Reinstatement recorded', detail: '3 of 8 collars reinstated', act: 'Open Work Plan', go: 'plan' },
    { state: 'ok', name: 'No open incidents', detail: 'None reported', v: 'Clear' }
  ],
  summary: [ { k: 'Holes', v: '8', small: 'of 8' }, { k: 'Released', v: '3' }, { k: 'Logging', v: '1', small: 'BH-02' }, { k: 'Planned', v: '3' } ],
  afterReport: 'Drilling schedule', afterReportMeta: '8 holes · per-hole log sheets'
};
