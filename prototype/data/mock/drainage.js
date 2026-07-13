/* ============================================================================
   Drainage sample records (Terrace Slip Drainage · DRAFT).
   ----------------------------------------------------------------------------
   Two templates, two QA philosophies, paired on purpose:

     HD1 · horizontal drilled drains. As-built length and inclination are
     genuine construction THRESHOLDS: outside tolerance reopens the run. Flow at
     completion is a FINDING, never a pass mark: a dry drain (0 L/min) recorded
     is complete and confirmable. DR-04 (dry, confirmed) sits beside DR-08
     (short of length, reopened) so one queue teaches both.

     TD1 · collector trench. Carries the before-backfill witness hold, recorded
     as a field in the shotcrete idiom, never an approval flow.

   Flow is recorded at completion only. There is no ongoing flow monitoring:
   that is roadmap, not product.

   Dates are integer day-offsets rendered via agoPhrase. All content is
   placeholder, flagged draft until Groundline Civil validation.
   ========================================================================== */
export { agoPhrase } from './dates.js';

export const draft = true;

export const engineerSource = { name: 'Terrace Slip drainage design', rev: 'Draft · for validation' };

/* A horizontal drain run. asbuilt_length_m / inclination_deg are checked
   against design (thresholds that reopen). flow_L_min is a recorded finding;
   flowState 'dry' means zero flow was recorded, which is complete, not failed. */
function drain(id, collar, design_length, asbuilt_length, design_incl, asbuilt_incl, flow, state, note) {
  return {
    id: id, zone: 'Slip Face', collar: collar, template: 'HD1',
    design_length_m: design_length, asbuilt_length_m: asbuilt_length,
    design_inclination_deg: design_incl, inclination_deg: asbuilt_incl,
    flow_L_min: flow, flowState: flow == null ? null : (flow === 0 ? 'dry' : 'flowing'),
    collar_photo: state === 'complete', pipeLengths: asbuilt_length == null ? null : Math.ceil(asbuilt_length / 6),
    state: state, note: note || ''
  };
}

export const drains = [
  drain('DR-01', 'Upper Bench', 30.0, 30.2, 5.0, 5.3, 12.0, 'complete'),
  drain('DR-02', 'Upper Bench', 28.0, 27.8, 5.0, 4.6, 3.5, 'complete'),
  drain('DR-03', 'Upper Bench', 32.0, 32.3, 5.0, 5.2, 0.8, 'complete'),
  drain('DR-04', 'Upper Bench', 26.0, 26.1, 5.0, 4.8, 0.0, 'complete'),          // dry at completion, recorded, confirmed
  drain('DR-05', 'Upper Bench', 30.0, 29.7, 5.0, 5.0, 6.2, 'complete'),
  drain('DR-06', 'Upper Bench', 24.0, 24.2, 5.0, 5.4, 1.5, 'complete'),
  drain('DR-07', 'Lower Bench', 28.0, 28.1, 5.0, 4.7, 9.0, 'complete'),
  drain('DR-08', 'Lower Bench', 30.0, 27.9, 5.0, 5.0, null, 'reopened', 'obstruction at 27.9 m · re-drill or record variance'), // short of design, threshold failure
  drain('DR-09', 'Lower Bench', 30.0, 30.0, 5.0, 5.1, null, 'in_progress'),      // drilled, flow test pending
  drain('DR-10', 'Lower Bench', 28.0, null, 5.0, null, null, 'planned'),
  drain('DR-11', 'Lower Bench', 32.0, null, 5.0, null, null, 'planned'),
  drain('DR-12', 'Lower Bench', 26.0, null, 5.0, null, null, 'planned')
];

/* Days-ago offsets and pipe/joint notes for the completed drains, keyed by id. */
export const drainDetail = {
  'DR-01': { installedDaysAgo: 20, flowTestedDaysAgo: 19, weather: 'Dry · 13°C', joints: 5, collarGrout: 'Class G · 1.0 m' },
  'DR-02': { installedDaysAgo: 19, flowTestedDaysAgo: 18, weather: 'Dry · 12°C', joints: 5, collarGrout: 'Class G · 1.0 m' },
  'DR-03': { installedDaysAgo: 18, flowTestedDaysAgo: 17, weather: 'Overcast · 11°C', joints: 6, collarGrout: 'Class G · 1.0 m', strike: 'Damp seam at 14 m' },
  'DR-04': { installedDaysAgo: 16, flowTestedDaysAgo: 15, weather: 'Dry · 14°C', joints: 5, collarGrout: 'Class G · 1.0 m' },
  'DR-05': { installedDaysAgo: 14, flowTestedDaysAgo: 13, weather: 'Showers · 10°C', joints: 5, collarGrout: 'Class G · 1.0 m' },
  'DR-06': { installedDaysAgo: 12, flowTestedDaysAgo: 11, weather: 'Dry · 12°C', joints: 4, collarGrout: 'Class G · 1.0 m' },
  'DR-07': { installedDaysAgo: 9, flowTestedDaysAgo: 8, weather: 'Dry · 13°C', joints: 5, collarGrout: 'Class G · 1.0 m', strike: 'Flowing seam at 22 m' },
  'DR-08': { installedDaysAgo: 3, flowTestedDaysAgo: null, weather: 'Dry · 12°C', joints: 5, collarGrout: 'not yet placed' },
  'DR-09': { installedDaysAgo: 1, flowTestedDaysAgo: null, weather: 'Dry · 11°C', joints: 5, collarGrout: 'Class G · 1.0 m' }
};

/* Collector trench runs (TD1). The before-backfill inspection is a witnessed
   hold recorded as a field. TD-01 is inspected, witnessed and backfilled;
   TD-02 is held at the inspection, awaiting witness. */
function trenchLayers(allOk) {
  return [
    { label: 'Trench excavated to design and fall', ok: true },
    { label: 'Geotextile laid to sides and base', ok: true },
    { label: 'Bedding aggregate placed', ok: allOk },
    { label: '110 mm slotted pipe laid to fall', ok: allOk },
    { label: 'Surround aggregate and wrap complete', ok: allOk }
  ];
}
export const collectorRuns = [
  {
    id: 'TD-01', zone: 'Toe', template: 'TD1', design_length_m: 60.0, asbuilt_length_m: 60.4,
    layers: trenchLayers(true), layer_photos: true, material_certs: true,
    witnessedBy: 'S. Kela', witnessedDaysAgo: 7, backfilled: true, backfilledDaysAgo: 6,
    state: 'complete'
  },
  {
    id: 'TD-02', zone: 'Toe', template: 'TD1', design_length_m: 48.0, asbuilt_length_m: 48.2,
    layers: trenchLayers(false), layer_photos: true, material_certs: false,
    witnessedBy: null, witnessedDaysAgo: null, backfilled: false, backfilledDaysAgo: null,
    state: 'held'
  }
];

/* The outfall the collector runs fall to. A single reference point, recorded
   with a photo on completion. */
export const outfall = { id: 'OUT-1', zone: 'Toe', x: 980, y: 735, photo: true, note: 'Discharges to existing swale' };

/* ======================= Lifecycle wiring (Stage 5.3) ======================= */

export const spatialCanvas = '../assets/maps/terrace-slip.svg';

/* Drains and collector runs are LINES; the outfall is a point. phase drives the
   line/point colour: complete = confirmed, issue = reopened (DR-08), active =
   installing, onhold = held (TD-02), planned = not started. */
export const spatialItems = [
  { id: 'DR-01', zone: 'Slip Face', phase: 'complete', label: '01', geometry: 'line', points: [[200,300],[560,380]] },
  { id: 'DR-02', zone: 'Slip Face', phase: 'complete', label: '02', geometry: 'line', points: [[200,300],[600,420]] },
  { id: 'DR-03', zone: 'Slip Face', phase: 'complete', label: '03', geometry: 'line', points: [[200,300],[620,460]] },
  { id: 'DR-04', zone: 'Slip Face', phase: 'complete', label: '04', geometry: 'line', points: [[200,300],[600,500]] },
  { id: 'DR-05', zone: 'Slip Face', phase: 'complete', label: '05', geometry: 'line', points: [[200,300],[560,540]] },
  { id: 'DR-06', zone: 'Slip Face', phase: 'complete', label: '06', geometry: 'line', points: [[200,300],[500,560]] },
  { id: 'DR-07', zone: 'Slip Face', phase: 'complete', label: '07', geometry: 'line', points: [[220,560],[580,470]] },
  { id: 'DR-08', zone: 'Slip Face', phase: 'issue', label: '08', geometry: 'line', points: [[220,560],[520,500]] },
  { id: 'DR-09', zone: 'Slip Face', phase: 'active', label: '09', geometry: 'line', points: [[220,560],[620,560]] },
  { id: 'DR-10', zone: 'Slip Face', phase: 'planned', label: '10', geometry: 'line', points: [[220,560],[600,600]] },
  { id: 'DR-11', zone: 'Slip Face', phase: 'planned', label: '11', geometry: 'line', points: [[220,560],[560,630]] },
  { id: 'DR-12', zone: 'Slip Face', phase: 'planned', label: '12', geometry: 'line', points: [[220,560],[500,650]] },
  { id: 'TD-01', zone: 'Toe', phase: 'complete', label: 'T1', geometry: 'line', points: [[300,715],[900,720]] },
  { id: 'TD-02', zone: 'Toe', phase: 'onhold', label: 'T2', geometry: 'line', points: [[300,760],[820,758]] },
  { id: 'OUT-1', zone: 'Toe', phase: 'complete', label: 'OUT', geometry: 'point', x: 940, y: 735 }
];

function ba(id, zone, phase, phaseName, work, design, actual, review, reason) {
  return { id: id, zone: zone, phase: phase, phaseName: phaseName, work: work, design: design, actual: actual, variance: '—', varBad: phase === 'issue', updated: phase === 'planned' ? '—' : 'recently', by: phase === 'planned' ? '—' : 'S. Kela', crew: 'Drain crew', review: review, reason: reason || '', findings: '', gidx: 0 };
}
export const boardAnchors = {
  'DR-01': ba('DR-01', 'Slip Face', 'complete', 'Confirmed', 'Drainage · HD1', '30.0 m', '12.0 L/min', 'Confirmed'),
  'DR-02': ba('DR-02', 'Slip Face', 'complete', 'Confirmed', 'Drainage · HD1', '28.0 m', '3.5 L/min', 'Confirmed'),
  'DR-03': ba('DR-03', 'Slip Face', 'complete', 'Confirmed', 'Drainage · HD1', '32.0 m', '0.8 L/min', 'Confirmed'),
  'DR-04': ba('DR-04', 'Slip Face', 'complete', 'Confirmed', 'Drainage · HD1', '26.0 m', 'Dry · recorded', 'Confirmed'),
  'DR-05': ba('DR-05', 'Slip Face', 'complete', 'Confirmed', 'Drainage · HD1', '30.0 m', '6.2 L/min', 'Confirmed'),
  'DR-06': ba('DR-06', 'Slip Face', 'complete', 'Confirmed', 'Drainage · HD1', '24.0 m', '1.5 L/min', 'Confirmed'),
  'DR-07': ba('DR-07', 'Slip Face', 'complete', 'Confirmed', 'Drainage · HD1', '28.0 m', '9.0 L/min', 'Confirmed'),
  'DR-08': ba('DR-08', 'Slip Face', 'issue', 'Reopened', 'Drainage · HD1', '30.0 m', '27.9 m as-built', 'Reopened · length', 'As-built 27.9 m vs 30.0 ± 0.5 m'),
  'DR-09': ba('DR-09', 'Slip Face', 'active', 'Installing', 'Drainage · HD1', '30.0 m', 'flow test pending', 'Installed · flow pending'),
  'DR-10': ba('DR-10', 'Slip Face', 'planned', 'Planned', 'Drainage · HD1', '28.0 m', '—', 'Planned'),
  'DR-11': ba('DR-11', 'Slip Face', 'planned', 'Planned', 'Drainage · HD1', '32.0 m', '—', 'Planned'),
  'DR-12': ba('DR-12', 'Slip Face', 'planned', 'Planned', 'Drainage · HD1', '26.0 m', '—', 'Planned'),
  'TD-01': ba('TD-01', 'Toe', 'complete', 'Confirmed', 'Drainage · TD1', '60.0 m', 'Inspected, backfilled', 'Confirmed'),
  'TD-02': ba('TD-02', 'Toe', 'onhold', 'Held', 'Drainage · TD1', '48.0 m', 'awaiting inspection', 'Held at inspection'),
  'OUT-1': ba('OUT-1', 'Toe', 'complete', 'Recorded', 'Drainage · outfall', '—', 'Photo on file', 'Recorded')
};

export const boardZones = [
  { name: 'Slip Face', pct: 58, count: '12 drains · 7 confirmed', ids: ['DR-01','DR-02','DR-03','DR-04','DR-05','DR-06','DR-07','DR-08','DR-09','DR-10','DR-11','DR-12'] },
  { name: 'Toe', pct: 50, count: '2 runs · 1 confirmed', ids: ['TD-01','TD-02','OUT-1'] }
];

/* --- Work Item Template (two templates, HD1 and TD1) ------------------------ */
export const designSheets = [
  {
    code: 'HD1', colour: '#3f7d86', name: 'Horizontal drains', summary: 'Line · per drain run',
    badgeClass: 'inuse', badge: 'In use', type: 'Drilled drainage',
    inUse: 'In use by 12 drains', engineerSource: 'Terrace Slip drainage design · Draft',
    params: [
      { k: 'Geometry', v: 'Line · drain run' },
      { k: 'Unit', v: 'm · per run' },
      { k: 'Confirmation', v: 'Per run' },
      { k: 'Length', v: '30.0 m · ± 0.5 m' }
    ],
    construction: {
      tendon: '—', barSpec: '40 mm slotted PVC · 6 m lengths', hole: 'Drilled to design length and inclination',
      grout: 'Class G grout collar · top 1.0 m', drill: 'Inclination +5° · flow recorded at collar',
      notes: 'Two QA philosophies: as-built length and inclination are thresholds that reopen work; flow at completion is a finding, zero permitted.'
    },
    testRegime: 'Length ± 0.5 m · inclination ± 1.0° · flow recorded (zero permitted)',
    material: [
      { k: 'Pipe', v: '40 mm slotted PVC' },
      { k: 'Lengths', v: '6 m' },
      { k: 'Collar', v: 'Class G grout · 1.0 m' },
      { k: 'Flow', v: 'Recorded at collar' }
    ],
    usedInPlan: [
      { colour: '#3f7d86', zone: 'Upper Bench', rng: 'DR-01–DR-06 · ', count: '6 drains' },
      { colour: '#3f7d86', zone: 'Lower Bench', rng: 'DR-07–DR-12 · ', count: '6 drains' }
    ]
  },
  {
    code: 'TD1', colour: '#7a8a6b', name: 'Collector trench', summary: 'Line · per trench run',
    badgeClass: 'draft', badge: 'In use', type: 'Trenched drainage',
    inUse: 'In use by 2 runs', engineerSource: 'Terrace Slip drainage design · Draft',
    params: [
      { k: 'Geometry', v: 'Line · trench run' },
      { k: 'Unit', v: 'm · per run' },
      { k: 'Confirmation', v: 'Per run' },
      { k: 'Hold point', v: 'Before backfill' }
    ],
    construction: {
      tendon: '—', barSpec: '110 mm slotted pipe', hole: 'Excavated to design and fall',
      grout: 'Geotextile-wrapped aggregate', drill: 'Inspected and witnessed before backfill',
      notes: 'Collector trench along the toe to the outfall. The before-backfill inspection is a witnessed hold, recorded as a field.'
    },
    testRegime: 'Before-backfill witness hold · layer photos and material certs',
    material: [
      { k: 'Pipe', v: '110 mm slotted' },
      { k: 'Surround', v: 'Geotextile-wrapped aggregate' },
      { k: 'Fall', v: 'To outfall' },
      { k: 'Certs', v: 'Aggregate and geotextile' }
    ],
    usedInPlan: [
      { colour: '#7a8a6b', zone: 'Toe', rng: 'TD-01–TD-02 · ', count: '2 runs' }
    ]
  }
];
export const materialPresets = [
  { value: 'pvc40', label: 'Pipe · 40 mm slotted PVC', sel: true },
  { value: 'pvc110', label: 'Pipe · 110 mm slotted', sel: false },
  { value: 'custom', label: 'Custom…', sel: false }
];

/* --- Testing Standards (both QA philosophies, in plain language) ---------- */
export const testingStandards = [
  {
    code: 'TS-TOL', colour: '#3f7d86', badge: 'Threshold', badgeClass: 'inuse',
    name: 'As-built tolerances', summary: 'Outside tolerance reopens the run. These are genuine construction thresholds.',
    type: 'Threshold', usedBy: 'Governs HD1 drains', governing: 'TS-TOL',
    criteria: [
      { name: 'As-built length', val: 'within ± 0.5 m', cond: 'Of design length' },
      { name: 'Inclination', val: 'within ± 1.0°', cond: 'Of design inclination' },
      { name: 'Outside tolerance', val: 'Reopened', cond: 'Re-drill or record variance' },
      { name: 'Confirmation', val: 'Per run', cond: 'Once within tolerance' }
    ],
    appliesMeta: '1 template · 12 drains',
    appliesTo: [ { colour: '#3f7d86', code: 'HD1', name: 'Horizontal drains', zone: 'Slip Face', count: '12 drains' } ]
  },
  {
    code: 'TS-FLOW', colour: '#6e8b3d', badge: 'Finding', badgeClass: 'draft',
    name: 'Flow is a finding', summary: 'Flow is recorded at completion, zero permitted. A dry drain is complete, never a failure.',
    type: 'Finding', usedBy: 'Governs HD1 drains', governing: 'TS-FLOW',
    criteria: [
      { name: 'Flow', val: 'Recorded in L/min', cond: 'At the collar, on completion' },
      { name: 'Zero flow', val: 'Valid result', cond: 'A dry drain is complete' },
      { name: 'Monitoring', val: 'Not in scope', cond: 'Recorded once, not monitored' },
      { name: 'Collar photo', val: 'Recorded', cond: 'With the flow' }
    ],
    appliesMeta: 'Finding · every drain',
    appliesTo: [ { colour: '#6e8b3d', code: 'HD1', name: 'Horizontal drains', zone: 'Slip Face', count: '12 drains' } ]
  },
  {
    code: 'TS-HOLD', colour: '#7a8a6b', badge: 'Hold point', badgeClass: 'draft',
    name: 'Before-backfill hold', summary: 'Inspected and witnessed before backfill, recorded as a field.',
    type: 'Hold point', usedBy: 'Governs TD1 runs', governing: 'TS-HOLD',
    criteria: [
      { name: 'Layers', val: 'Checked', cond: 'Geotextile, aggregate, pipe, surround' },
      { name: 'Witness', val: 'Name + date recorded', cond: 'Recorded on site, not an approval flow' },
      { name: 'Certs', val: 'On file', cond: 'Aggregate and geotextile' },
      { name: 'Backfill', val: 'Held', cond: 'Until the trench is signed off' }
    ],
    appliesMeta: 'Hold point · every trench run',
    appliesTo: [ { colour: '#7a8a6b', code: 'TD1', name: 'Collector trench', zone: 'Toe', count: '2 runs' } ]
  }
];

/* --- Evidence & QA -------------------------------------------------------- */
export const evidenceRequirements = [
  {
    code: 'EV-H1', colour: '#6e7d5c', icon: '<rect x="3" y="6" width="14" height="10" rx="2"/><circle cx="10" cy="11" r="2.6"/><path d="M7 6l1.1-2h3.8L13 6"/>',
    name: 'Collar and outfall photos', badge: 'Required', badgeClass: 'req',
    summary: 'Photo · Blocks confirmation', type: 'Photo', status: 'Blocks confirmation',
    spec: 'A collar photo per drain and an outfall photo, recorded with the flow.',
    criteria: [ { k: 'Minimum', v: '1 collar photo per drain' }, { k: 'Outfall', v: '1 photo' }, { k: 'With', v: 'Flow at completion' }, { k: 'When', v: 'On flow test' } ],
    appliesTo: [ { k: 'Designs', cls: 'k-design', v: 'HD1 · Horizontal drains' }, { k: 'Operations', cls: 'k-work', v: 'Flow test' }, { k: 'Zones (optional)', cls: 'k-design', v: 'Slip Face' } ],
    reason: 'The collar photo backs the flow record; flow is a finding, the photo is completeness.'
  },
  {
    code: 'EV-T1', colour: '#6e7d5c', icon: '<rect x="3" y="6" width="14" height="10" rx="2"/><circle cx="10" cy="11" r="2.6"/><path d="M7 6l1.1-2h3.8L13 6"/>',
    name: 'Layer photos before backfill', badge: 'Required', badgeClass: 'req',
    summary: 'Photo · Blocks backfill', type: 'Photo', status: 'Blocks backfill',
    spec: 'Photos of the trench layers before backfill, per collector run.',
    criteria: [ { k: 'Minimum', v: '2 layer photos per run' }, { k: 'Subject', v: 'Geotextile, bedding, pipe' }, { k: 'When', v: 'Before backfill' }, { k: 'Gate', v: 'Backfill hold' } ],
    appliesTo: [ { k: 'Designs', cls: 'k-design', v: 'TD1 · Collector trench' }, { k: 'Operations', cls: 'k-work', v: 'Backfill inspection' }, { k: 'Zones (optional)', cls: 'k-design', v: 'Toe' } ],
    reason: 'The layer photos back the before-backfill hold once the trench is covered.'
  },
  {
    code: 'EV-T2', colour: '#6e8b3d', icon: '<path d="M7 3h7l4 4v13H7z"/><path d="M14 3v4h4"/><path d="M10 12h5M10 15h5"/>',
    name: 'Aggregate and geotextile certs', badge: 'Required', badgeClass: 'req',
    summary: 'Record · Blocks confirmation', type: 'Record', status: 'Blocks confirmation',
    spec: 'Material certificates for the aggregate and geotextile, per collector run.',
    criteria: [ { k: 'Minimum', v: '1 cert set per run' }, { k: 'Materials', v: 'Aggregate, geotextile' }, { k: 'Trace', v: 'Batch to run' }, { k: 'When', v: 'On delivery' } ],
    appliesTo: [ { k: 'Designs', cls: 'k-design', v: 'TD1 · Collector trench' }, { k: 'Operations', cls: 'k-work', v: 'Materials' }, { k: 'Zones (optional)', cls: 'k-design', v: 'Toe' } ],
    reason: 'Material traceability is part of the acceptance basis for each trench run.'
  }
];
export const evidenceFoot = 'Two philosophies · as-built tolerances reopen work, flow is a finding (zero permitted)';

/* --- Safety & Risk -------------------------------------------------------- */
export const safetyDocs = [
  {
    code: 'JSA-1', colour: '#2b4721', icon: '<path d="M10 2.5 4 5v4.5c0 3.6 2.6 6.6 6 8 3.4-1.4 6-4.4 6-8V5z"/><path d="M7.5 10l1.8 1.8L13 8"/>',
    name: 'JSA · Drainage works', listBadge: { cls: 'active', text: 'Active' },
    type: 'JSA', status: 'Governs drilling, trenching and access', badge: { cls: 'active', text: 'Active' },
    srcmeta: 'Uploaded · Groundline Civil · PDF · 1.0 MB',
    scope: [ { sk: 'Work types', cls: 'k-work', v: 'Drilling + trenching' }, { sk: 'Zones', cls: 'k-design', v: 'Slip Face · Toe' } ],
    gate: [ { state: 'on', html: '<b>Active.</b> No one drills or excavates until they have signed on and acknowledged this JSA.' }, { state: 'on', html: '<b>Today:</b> 0 of 3 crew signed on so far.' } ]
  },
  {
    code: 'SWMS-1', colour: '#6e7d5c', icon: '<path d="M10 2.5 4 5v4.5c0 3.6 2.6 6.6 6 8 3.4-1.4 6-4.4 6-8V5z"/><path d="M7.5 10l1.8 1.8L13 8"/>',
    name: 'SWMS · Trench support & spoil', listBadge: null,
    type: 'SWMS', status: 'Governs open trench and spoil', badge: { cls: 'active', text: 'Active' },
    srcmeta: 'Uploaded · Groundline Civil · PDF · 0.6 MB',
    scope: [ { sk: 'Work types', cls: 'k-work', v: 'Trenching' }, { sk: 'Zones', cls: 'k-design', v: 'Toe' } ],
    gate: [ { state: 'on', html: '<b>Active.</b> Acknowledged at sign-on alongside the JSA before trenching.' }, { state: 'on', html: '<b>Today:</b> 0 of 3 crew signed on so far.' } ]
  }
];
export const safetyFoot = '2 safety documents active · scoped · sign-on gate wired';

/* --- Work Plan (drains and runs by template, with metres progress) -------- */
export const planZones = [
  { key: 'dr01', colour: '#3f7d86', label: 'DR-01 · HD1', design: 'Confirmed · 12.0 L/min', progress: { drilled: '30.2', design: '30.0', unit: 'm' }, count: 1 },
  { key: 'dr04', colour: '#3f7d86', label: 'DR-04 · HD1', design: 'Confirmed · dry', progress: { drilled: '26.1', design: '26.0', unit: 'm' }, count: 1 },
  { key: 'dr07', colour: '#3f7d86', label: 'DR-07 · HD1', design: 'Confirmed · 9.0 L/min', progress: { drilled: '28.1', design: '28.0', unit: 'm' }, count: 1 },
  { key: 'dr08', colour: '#c05a48', label: 'DR-08 · HD1', design: 'Reopened · length short', progress: { drilled: '27.9', design: '30.0', unit: 'm' }, count: 1 },
  { key: 'dr09', colour: '#c79a3c', label: 'DR-09 · HD1', design: 'Installing · flow pending', progress: { drilled: '30.0', design: '30.0', unit: 'm' }, count: 1 },
  { key: 'drpl', colour: '#7a8270', label: 'DR-10 to DR-12 · HD1', design: 'Planned', progress: { drilled: '0.0', design: '86.0', unit: 'm' }, count: 3 },
  { key: 'td01', colour: '#7a8a6b', label: 'TD-01 · TD1', design: 'Confirmed · backfilled', progress: { drilled: '60.4', design: '60.0', unit: 'm' }, count: 1 },
  { key: 'td02', colour: '#c79a3c', label: 'TD-02 · TD1', design: 'Held · before-backfill inspection', progress: { drilled: '48.2', design: '48.0', unit: 'm' }, count: 1 }
];
export const planSummary = {
  source: 'terrace_slip_brief.pdf', total: 14, zones: 2, unresolved: 0,
  bannerTitle: 'AI proposal from terrace_slip_brief.pdf',
  bannerSub: '12 drains · 2 collector runs · 0 unresolved',
  summaryTotal: '/ 14', summarySub: '2 templates · confirmed per run',
  footText: '14 runs proposed · 7 drains confirmed · TD-01 backfilled · TD-02 held',
  commitText: '14 of 14 runs committed', defaultPin: null,
  sequenceNote: 'Two philosophies · as-built tolerances reopen work (DR-08), flow is a finding (DR-04 dry). TD-02 is held at the before-backfill inspection.'
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
    pct: 57, done: 8, total: 14,
    confirmedLine: '7 drains confirmed · DR-08 reopened · TD-01 backfilled · TD-02 held',
    active: 1, awaitingQA: 2, issues: 1,
    statusPill: 'In delivery', targetDate: 'draft programme'
  },
  alerts: [
    { id: 'DR-08', title: 'As-built 27.9 m · outside ± 0.5 m', zone: 'Slip Face', tagCls: 'action', tagText: 'Reopened', href: 'qa-queue.html' },
    { id: 'TD-02', title: 'Held at before-backfill inspection', zone: 'Toe', tagCls: 'hold', tagText: 'Hold', href: 'qa-queue.html' }
  ],
  qaChips: ['DR-04', 'DR-08', 'TD-01', 'TD-02'],
  qaFoot: '7 drains confirmed (DR-04 dry, recorded); DR-08 reopened for length; TD-02 held at the before-backfill inspection.',
  setupCards: [
    { href: 'layout.html', nm: 'Layout', mt: '2 zones', icon: IC_LAYOUT },
    { href: 'work-item-design.html', nm: 'Work item design', mt: '2 templates', icon: IC_DESIGN },
    { href: 'work-plan.html', nm: 'Work plan', mt: '14 runs', icon: IC_PLAN },
    { href: 'testing-standards.html', nm: 'Testing standards', mt: 'Tolerances + flow', icon: IC_SHIELD },
    { href: 'evidence-qa.html', nm: 'Evidence & QA', mt: 'Photos + certs', icon: IC_FOLDER },
    { href: 'safety-risk-controls.html', nm: 'Safety & risk', mt: '2 active', icon: IC_SHIELD2 },
    { href: 'reference-documents.html', nm: 'Reference documents', mt: '7 documents', icon: IC_DOC }
  ]
};

/* --- Status Board --------------------------------------------------------- */
export const boardPhaseLabels = { complete: 'CONFIRMED', issue: 'REOPENED', active: 'INSTALLING', onhold: 'HELD', planned: 'PLANNED' };
export const boardStatus = { pct: 57, confirmed: 8, total: 14, drilled: 9, qa: 2, issues: 1 };
export const boardAttention = [
  { id: 'DR-08', text: 'As-built 27.9 m · outside ± 0.5 m · re-drill or record variance', zone: 'Slip Face' },
  { id: 'TD-02', text: 'Held at before-backfill inspection · awaiting witness', zone: 'Toe' }
];

/* --- QA Queue (per run; tolerances reopen, flow is a finding) ------------- */
export const qaQueue = {
  total: 6,
  readyCount: 4,
  attnCount: 2,
  items: [
    {
      id: 'DR-01', state: 'ready', zone: 'Slip Face · Upper Bench', by: 'S. Kela', ago: 'flow tested 19 days ago',
      ev: 2, evTotal: 2, pill: 'Drain confirmable', result: '12.0 L/min · length within ± 0.5 m',
      metrics: [ { k: 'As-built length', v: '30.2 m' }, { k: 'Inclination', v: '+5.3°' }, { k: 'Flow', v: '12.0 L/min' } ]
    },
    {
      id: 'DR-04', state: 'ready', zone: 'Slip Face · Upper Bench', by: 'S. Kela', ago: 'flow tested 15 days ago',
      ev: 2, evTotal: 2, pill: 'Drain confirmable', result: 'Dry at completion · recorded',
      metrics: [ { k: 'As-built length', v: '26.1 m' }, { k: 'Inclination', v: '+4.8°' }, { k: 'Flow', v: '0.0 L/min · dry' } ],
      noteText: 'A dry drain is a valid, complete outcome. Zero flow is recorded as the finding, not a failure; the drain confirms.'
    },
    {
      id: 'DR-07', state: 'ready', zone: 'Slip Face · Lower Bench', by: 'S. Kela', ago: 'flow tested 8 days ago',
      ev: 2, evTotal: 2, pill: 'Drain confirmable', result: '9.0 L/min · length within ± 0.5 m',
      metrics: [ { k: 'As-built length', v: '28.1 m' }, { k: 'Inclination', v: '+4.7°' }, { k: 'Flow', v: '9.0 L/min' } ]
    },
    {
      id: 'TD-01', state: 'ready', zone: 'Toe', by: 'S. Kela', ago: 'inspected 7 days ago',
      ev: 2, evTotal: 2, pill: 'Run confirmable', result: 'Inspected, witnessed, backfilled',
      metrics: [ { k: 'Layers', v: '5 / 5' }, { k: 'Witness', v: 'S. Kela' }, { k: 'Certs', v: 'On file' } ]
    },
    {
      id: 'DR-08', state: 'attn', zone: 'Slip Face · Lower Bench', by: 'S. Kela', ago: 'installed 3 days ago',
      ev: 1, evTotal: 2, pill: 'Length outside tolerance', gap: 'As-built 27.9 m vs 30.0 ± 0.5 m', result: 'obstruction at 27.9 m',
      metrics: [ { k: 'As-built length', v: '27.9 m', cls: 'warn' }, { k: 'Design', v: '30.0 m' }, { k: 'Flow', v: 'not tested' } ],
      noteText: 'As-built length is 2.1 m short of design, outside ± 0.5 m. Re-drill to length or record an approved variance, then flow test. This is a construction threshold, not a flow result.'
    },
    {
      id: 'TD-02', state: 'attn', zone: 'Toe', by: 'S. Kela', ago: 'awaiting inspection',
      ev: 1, evTotal: 2, pill: 'Held at inspection', gap: 'Before-backfill not witnessed', result: '2 of 5 layers checked',
      metrics: [ { k: 'Layers', v: '2 / 5' }, { k: 'Witness', v: 'awaiting' }, { k: 'Backfill', v: 'held' } ],
      noteText: 'The before-backfill inspection is a hold point. Backfill is held until the trench is inspected and witnessed on site.'
    }
  ]
};

/* --- Closeout ------------------------------------------------------------- */
export const closeout = {
  itemLabel: 'runs', items: 14, blocking: 4, days: '—', progressPct: 45,
  readyBig: 'Not ready', readySub: '4 checks still blocking closeout',
  checks: [
    { state: 'ok', name: 'Confirmed drains flow-recorded', detail: '7 drains confirmed · DR-04 recorded dry', v: 'Done' },
    { state: 'blk', name: 'All drains flow-recorded and confirmed', detail: 'DR-08 reopened for length · DR-09 flow pending · DR-10 to DR-12 planned', act: 'Open QA Queue', go: 'qa' },
    { state: 'blk', name: 'Trench inspections complete', detail: 'TD-02 held at before-backfill inspection', act: 'Open QA Queue', go: 'qa' },
    { state: 'blk', name: 'Material certificates compiled', detail: 'TD-01 certs on file · TD-02 pending', act: 'Confirm handover', go: 'rpt' },
    { state: 'blk', name: 'Register released, outfall photo on file', detail: 'Outfall photo recorded · register is draft', act: 'Open register', go: 'rpt' },
    { state: 'ok', name: 'No open incidents', detail: 'None reported', v: 'Clear' }
  ],
  summary: [ { k: 'Runs', v: '14', small: 'of 14' }, { k: 'Confirmed', v: '8' }, { k: 'Reopened', v: '1', small: 'DR-08' }, { k: 'Held', v: '1', small: 'TD-02' } ],
  afterReport: 'Drainage register', afterReportMeta: '12 drains · 2 collector runs · outfall'
};
