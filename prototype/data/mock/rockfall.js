/* ============================================================================
   Rockfall protection sample records (Coastal Corridor · DRAFT).
   ----------------------------------------------------------------------------
   Drapery mesh (DM1, area, per-lot) plus crest pins (CP1, point, per-item).
   Field capture records for the module screens and the QA lot rollup. The
   deeper setup-screen content (design sheets, testing standards, dashboards)
   lands with the lifecycle wiring; this pack carries the records the QA story
   needs, including one deliberately failed pull test.

   All records are fictional and flagged draft until SteepWorks validation.
   ========================================================================== */
export const draft = true;

export const engineerSource = { name: 'Coastal Corridor design set', rev: 'Rev C · 18 Jun 2026' };

/* Crest pin installs (CP1). Two records captured so far. */
export const pinInstalls = [
  {
    pin: 'PN-01', zone: 'Batter A', depth: 3.0, grout_batch: 'CG-1141',
    grout_volume: '18 L', bar_serial: 'HD25-4471', photos: 2,
    by: 'S. Kela', date: '2 Jul 2026', state: 'submitted'
  },
  {
    pin: 'PN-02', zone: 'Batter A', depth: 3.1, grout_batch: 'CG-1141',
    grout_volume: '19 L', bar_serial: 'HD25-4472', photos: 2,
    by: 'S. Kela', date: '2 Jul 2026', state: 'submitted'
  }
];

/* Pull tests (CP1 · proof load ≥ 50 kN, 5 min hold). Three records; PN-05
   held only 42 kN and is reopened for re-drill and re-grout. */
export const pullTests = [
  {
    pin: 'PN-01', zone: 'Batter A', target_kN: 50, held_kN: 58, hold_min: 5,
    creep: '0.4 mm', result: 'Pass', note: '', by: 'S. Kela', date: '3 Jul 2026',
    state: 'confirmed'
  },
  {
    pin: 'PN-03', zone: 'Batter A', target_kN: 50, held_kN: 61, hold_min: 5,
    creep: '0.3 mm', result: 'Pass', note: '', by: 'S. Kela', date: '3 Jul 2026',
    state: 'confirmed'
  },
  {
    pin: 'PN-05', zone: 'Batter A', target_kN: 50, held_kN: 42, hold_min: 5,
    creep: '2.1 mm', result: 'Fail', note: 're-drill and re-grout',
    by: 'S. Kela', date: '3 Jul 2026', state: 'reopened'
  }
];

/* Panel installs (DM1). One record captured, with fixing shackle serials. */
export const panelInstalls = [
  {
    panel: 'MP-02', lot: 'Lot A', zone: 'Batter A', area: '34 m²',
    overlap_mm: 325, lacing: 'Continuous · 3 mm lacing wire',
    fixings: ['SHK-8801', 'SHK-8802', 'SHK-8803', 'SHK-8804'],
    photos: 3, by: 'S. Kela', date: '3 Jul 2026', state: 'submitted'
  }
];

/* Lot inspection checklist (DM1 closeout walkdown). One record for Lot A. */
export const inspections = [
  {
    lot: 'Lot A', zone: 'Batter A',
    items: [
      { label: 'Mesh continuous across the face', ok: true },
      { label: 'Overlaps ≥ 300 mm and laced', ok: true },
      { label: 'Fixing shackles torqued, serials recorded', ok: true },
      { label: 'Crest pins confirmed (CP1)', ok: true },
      { label: 'Toe secured to bund', ok: true }
    ],
    by: 'Tim R.', date: '3 Jul 2026', state: 'submitted'
  }
];

/* Lot rollup for the QA queue: Lot A confirmable (panels installed and linked
   pins confirmed), Lot B pending. Display state only, no rule engine. */
export const lots = [
  {
    id: 'Lot A', zone: 'Batter A', members: ['MP-01', 'MP-02', 'MP-03', 'MP-04'],
    pins: ['PN-01', 'PN-02', 'PN-03', 'PN-04', 'PN-05', 'PN-06', 'PN-07', 'PN-08'],
    panelsInstalled: 4, pinsConfirmed: 6, state: 'confirmable',
    note: 'All panels installed · linked pins confirmed (PN-05 reopened, re-drilled)'
  },
  {
    id: 'Lot B', zone: 'Batter B', members: ['MP-05', 'MP-06', 'MP-07', 'MP-08'],
    pins: ['PN-09', 'PN-10', 'PN-11', 'PN-12', 'PN-13', 'PN-14', 'PN-15', 'PN-16'],
    panelsInstalled: 2, pinsConfirmed: 0, state: 'pending',
    note: 'Panels part-installed · crest pins not yet confirmed'
  }
];

/* Component certificates (per mesh batch) for the rockfall register. */
export const componentCerts = [
  { ref: 'MESH-B2611', item: 'High-tensile drapery mesh · 3.5 m roll', batch: 'B2611', lots: 'Lot A', status: 'On file' },
  { ref: 'MESH-B2612', item: 'High-tensile drapery mesh · 3.5 m roll', batch: 'B2612', lots: 'Lot B', status: 'On file' },
  { ref: 'SHK-88', item: 'Galvanised fixing shackles', batch: 'SHK-88', lots: 'Lot A · Lot B', status: 'On file' }
];

/* The plotted site plan behind this project's mixed point + area work items. */
export const spatialCanvas = '../assets/maps/coastal-corridor.svg';

/* ======================= Lifecycle wiring (Stage 2.4) ======================= */

export const planPins = {
  '1': {"id":"PN-01","zone":"Batter A","zcol":"#6e8b3d","design":"CP1","dname":"Crest pins","test":"Proof 50 kN · 5 min hold","e":"1571.0","n":"5412330.0","cx":120,"cy":185},
  '2': {"id":"PN-02","zone":"Batter A","zcol":"#6e8b3d","design":"CP1","dname":"Crest pins","test":"Proof 50 kN · 5 min hold","e":"1572.0","n":"5412334.0","cx":185,"cy":185},
  '3': {"id":"PN-03","zone":"Batter A","zcol":"#6e8b3d","design":"CP1","dname":"Crest pins","test":"Proof 50 kN · 5 min hold","e":"1573.0","n":"5412338.0","cx":250,"cy":185},
  '4': {"id":"PN-04","zone":"Batter A","zcol":"#6e8b3d","design":"CP1","dname":"Crest pins","test":"Proof 50 kN · 5 min hold","e":"1574.0","n":"5412342.0","cx":315,"cy":185},
  '5': {"id":"PN-05","zone":"Batter A","zcol":"#6e8b3d","design":"CP1","dname":"Crest pins","test":"Proof 50 kN · 5 min hold","e":"1575.0","n":"5412346.0","cx":380,"cy":185},
  '6': {"id":"PN-06","zone":"Batter A","zcol":"#6e8b3d","design":"CP1","dname":"Crest pins","test":"Proof 50 kN · 5 min hold","e":"1576.0","n":"5412350.0","cx":445,"cy":185},
  '7': {"id":"PN-07","zone":"Batter A","zcol":"#6e8b3d","design":"CP1","dname":"Crest pins","test":"Proof 50 kN · 5 min hold","e":"1577.0","n":"5412354.0","cx":510,"cy":185},
  '8': {"id":"PN-08","zone":"Batter A","zcol":"#6e8b3d","design":"CP1","dname":"Crest pins","test":"Proof 50 kN · 5 min hold","e":"1578.0","n":"5412358.0","cx":575,"cy":185},
  '9': {"id":"PN-09","zone":"Batter B","zcol":"#2f9089","design":"CP1","dname":"Crest pins","test":"Proof 50 kN · 5 min hold","e":"1579.0","n":"5412362.0","cx":705,"cy":185},
  '10': {"id":"PN-10","zone":"Batter B","zcol":"#2f9089","design":"CP1","dname":"Crest pins","test":"Proof 50 kN · 5 min hold","e":"1580.0","n":"5412366.0","cx":770,"cy":185},
  '11': {"id":"PN-11","zone":"Batter B","zcol":"#2f9089","design":"CP1","dname":"Crest pins","test":"Proof 50 kN · 5 min hold","e":"1581.0","n":"5412370.0","cx":835,"cy":185},
  '12': {"id":"PN-12","zone":"Batter B","zcol":"#2f9089","design":"CP1","dname":"Crest pins","test":"Proof 50 kN · 5 min hold","e":"1582.0","n":"5412374.0","cx":900,"cy":185},
  '13': {"id":"PN-13","zone":"Batter B","zcol":"#2f9089","design":"CP1","dname":"Crest pins","test":"Proof 50 kN · 5 min hold","e":"1583.0","n":"5412378.0","cx":965,"cy":185},
  '14': {"id":"PN-14","zone":"Batter B","zcol":"#2f9089","design":"CP1","dname":"Crest pins","test":"Proof 50 kN · 5 min hold","e":"1584.0","n":"5412382.0","cx":1030,"cy":185},
  '15': {"id":"PN-15","zone":"Batter B","zcol":"#2f9089","design":"CP1","dname":"Crest pins","test":"Proof 50 kN · 5 min hold","e":"1585.0","n":"5412386.0","cx":1095,"cy":185},
  '16': {"id":"PN-16","zone":"Batter B","zcol":"#2f9089","design":"CP1","dname":"Crest pins","test":"Proof 50 kN · 5 min hold","e":"1586.0","n":"5412390.0","cx":1160,"cy":185}
};

export const spatialItems = [
  {"id":"MP-01","zone":"Batter A","phase":"complete","label":"01","geometry":"area","points":[[90,208],[217,208],[217,592],[90,592]]},
  {"id":"MP-02","zone":"Batter A","phase":"complete","label":"02","geometry":"area","points":[[217,208],[344,208],[344,592],[217,592]]},
  {"id":"MP-03","zone":"Batter A","phase":"complete","label":"03","geometry":"area","points":[[344,208],[471,208],[471,592],[344,592]]},
  {"id":"MP-04","zone":"Batter A","phase":"complete","label":"04","geometry":"area","points":[[471,208],[598,208],[598,592],[471,592]]},
  {"id":"MP-05","zone":"Batter B","phase":"active","label":"05","geometry":"area","points":[[650,208],[780,208],[780,592],[650,592]]},
  {"id":"MP-06","zone":"Batter B","phase":"active","label":"06","geometry":"area","points":[[780,208],[910,208],[910,592],[780,592]]},
  {"id":"MP-07","zone":"Batter B","phase":"planned","label":"07","geometry":"area","points":[[910,208],[1040,208],[1040,592],[910,592]]},
  {"id":"MP-08","zone":"Batter B","phase":"planned","label":"08","geometry":"area","points":[[1040,208],[1170,208],[1170,592],[1040,592]]},
  {"id":"PN-01","zone":"Batter A","phase":"complete","label":"01","geometry":"point","x":120,"y":185},
  {"id":"PN-02","zone":"Batter A","phase":"complete","label":"02","geometry":"point","x":185,"y":185},
  {"id":"PN-03","zone":"Batter A","phase":"complete","label":"03","geometry":"point","x":250,"y":185},
  {"id":"PN-04","zone":"Batter A","phase":"complete","label":"04","geometry":"point","x":315,"y":185},
  {"id":"PN-05","zone":"Batter A","phase":"issue","label":"05","geometry":"point","x":380,"y":185},
  {"id":"PN-06","zone":"Batter A","phase":"complete","label":"06","geometry":"point","x":445,"y":185},
  {"id":"PN-07","zone":"Batter A","phase":"active","label":"07","geometry":"point","x":510,"y":185},
  {"id":"PN-08","zone":"Batter A","phase":"active","label":"08","geometry":"point","x":575,"y":185},
  {"id":"PN-09","zone":"Batter B","phase":"active","label":"09","geometry":"point","x":705,"y":185},
  {"id":"PN-10","zone":"Batter B","phase":"active","label":"10","geometry":"point","x":770,"y":185},
  {"id":"PN-11","zone":"Batter B","phase":"planned","label":"11","geometry":"point","x":835,"y":185},
  {"id":"PN-12","zone":"Batter B","phase":"planned","label":"12","geometry":"point","x":900,"y":185},
  {"id":"PN-13","zone":"Batter B","phase":"planned","label":"13","geometry":"point","x":965,"y":185},
  {"id":"PN-14","zone":"Batter B","phase":"planned","label":"14","geometry":"point","x":1030,"y":185},
  {"id":"PN-15","zone":"Batter B","phase":"planned","label":"15","geometry":"point","x":1095,"y":185},
  {"id":"PN-16","zone":"Batter B","phase":"planned","label":"16","geometry":"point","x":1160,"y":185}
];

export const boardAnchors = {
  "MP-01": {"id":"MP-01","zone":"Batter A","phase":"complete","phaseName":"Confirmed","work":"Drapery mesh · Lot A","design":"30 m²","actual":"330 mm lap","variance":"—","varBad":false,"updated":"today","by":"S. Kela","crew":"Team 1","review":"Confirmed","reason":"","findings":"","gidx":1},
  "MP-02": {"id":"MP-02","zone":"Batter A","phase":"complete","phaseName":"Confirmed","work":"Drapery mesh · Lot A","design":"34 m²","actual":"325 mm lap","variance":"—","varBad":false,"updated":"today","by":"S. Kela","crew":"Team 1","review":"Confirmed","reason":"","findings":"","gidx":2},
  "MP-03": {"id":"MP-03","zone":"Batter A","phase":"complete","phaseName":"Confirmed","work":"Drapery mesh · Lot A","design":"28 m²","actual":"338 mm lap","variance":"—","varBad":false,"updated":"today","by":"S. Kela","crew":"Team 1","review":"Confirmed","reason":"","findings":"","gidx":3},
  "MP-04": {"id":"MP-04","zone":"Batter A","phase":"complete","phaseName":"Confirmed","work":"Drapery mesh · Lot A","design":"36 m²","actual":"320 mm lap","variance":"—","varBad":false,"updated":"today","by":"S. Kela","crew":"Team 1","review":"Confirmed","reason":"","findings":"","gidx":4},
  "MP-05": {"id":"MP-05","zone":"Batter B","phase":"active","phaseName":"Installed","work":"Drapery mesh · Lot B","design":"32 m²","actual":"315 mm lap","variance":"—","varBad":false,"updated":"today","by":"S. Kela","crew":"Team 1","review":"Submitted for QA","reason":"","findings":"","gidx":5},
  "MP-06": {"id":"MP-06","zone":"Batter B","phase":"active","phaseName":"Installed","work":"Drapery mesh · Lot B","design":"38 m²","actual":"322 mm lap","variance":"—","varBad":false,"updated":"today","by":"S. Kela","crew":"Team 1","review":"Submitted for QA","reason":"","findings":"","gidx":6},
  "MP-07": {"id":"MP-07","zone":"Batter B","phase":"planned","phaseName":"Planned","work":"Drapery mesh · Lot B","design":"26 m²","actual":"—","variance":"—","varBad":false,"updated":"—","by":"—","crew":"Team 1","review":"Not started","reason":"","findings":"","gidx":7},
  "MP-08": {"id":"MP-08","zone":"Batter B","phase":"planned","phaseName":"Planned","work":"Drapery mesh · Lot B","design":"40 m²","actual":"—","variance":"—","varBad":false,"updated":"—","by":"—","crew":"Team 1","review":"Not started","reason":"","findings":"","gidx":8},
  "PN-01": {"id":"PN-01","zone":"Batter A","phase":"complete","phaseName":"Confirmed","work":"Crest pin","design":"3.0 m","actual":"3.0 m","variance":"—","varBad":false,"updated":"today","by":"S. Kela","crew":"Team 1","review":"Confirmed","reason":"","findings":"","gidx":9},
  "PN-02": {"id":"PN-02","zone":"Batter A","phase":"complete","phaseName":"Confirmed","work":"Crest pin","design":"3.0 m","actual":"3.1 m","variance":"—","varBad":false,"updated":"today","by":"S. Kela","crew":"Team 1","review":"Confirmed","reason":"","findings":"","gidx":10},
  "PN-03": {"id":"PN-03","zone":"Batter A","phase":"complete","phaseName":"Confirmed","work":"Crest pin","design":"3.0 m","actual":"2.9 m","variance":"—","varBad":false,"updated":"today","by":"S. Kela","crew":"Team 1","review":"Confirmed","reason":"","findings":"","gidx":11},
  "PN-04": {"id":"PN-04","zone":"Batter A","phase":"complete","phaseName":"Confirmed","work":"Crest pin","design":"3.0 m","actual":"3.0 m","variance":"—","varBad":false,"updated":"today","by":"S. Kela","crew":"Team 1","review":"Confirmed","reason":"","findings":"","gidx":12},
  "PN-05": {"id":"PN-05","zone":"Batter A","phase":"issue","phaseName":"Reopened","work":"Crest pin","design":"3.0 m","actual":"3.0 m","variance":"—","varBad":true,"updated":"today","by":"S. Kela","crew":"Team 1","review":"Reopened","reason":"Pull test 42 kN below 50 kN","findings":"Held 42 kN below 50 kN target|Re-drill and re-grout","gidx":13},
  "PN-06": {"id":"PN-06","zone":"Batter A","phase":"complete","phaseName":"Confirmed","work":"Crest pin","design":"3.0 m","actual":"3.0 m","variance":"—","varBad":false,"updated":"today","by":"S. Kela","crew":"Team 1","review":"Confirmed","reason":"","findings":"","gidx":14},
  "PN-07": {"id":"PN-07","zone":"Batter A","phase":"active","phaseName":"Installed","work":"Crest pin","design":"3.0 m","actual":"3.0 m","variance":"—","varBad":false,"updated":"today","by":"S. Kela","crew":"Team 1","review":"Submitted for QA","reason":"","findings":"","gidx":15},
  "PN-08": {"id":"PN-08","zone":"Batter A","phase":"active","phaseName":"Installed","work":"Crest pin","design":"3.0 m","actual":"3.1 m","variance":"—","varBad":false,"updated":"today","by":"S. Kela","crew":"Team 1","review":"Submitted for QA","reason":"","findings":"","gidx":16},
  "PN-09": {"id":"PN-09","zone":"Batter B","phase":"active","phaseName":"Installed","work":"Crest pin","design":"3.0 m","actual":"3.0 m","variance":"—","varBad":false,"updated":"today","by":"S. Kela","crew":"Team 1","review":"Submitted for QA","reason":"","findings":"","gidx":17},
  "PN-10": {"id":"PN-10","zone":"Batter B","phase":"active","phaseName":"Installed","work":"Crest pin","design":"3.0 m","actual":"3.0 m","variance":"—","varBad":false,"updated":"today","by":"S. Kela","crew":"Team 1","review":"Submitted for QA","reason":"","findings":"","gidx":18},
  "PN-11": {"id":"PN-11","zone":"Batter B","phase":"planned","phaseName":"Planned","work":"Crest pin","design":"3.0 m","actual":"—","variance":"—","varBad":false,"updated":"—","by":"—","crew":"Team 1","review":"Not started","reason":"","findings":"","gidx":19},
  "PN-12": {"id":"PN-12","zone":"Batter B","phase":"planned","phaseName":"Planned","work":"Crest pin","design":"3.0 m","actual":"—","variance":"—","varBad":false,"updated":"—","by":"—","crew":"Team 1","review":"Not started","reason":"","findings":"","gidx":20},
  "PN-13": {"id":"PN-13","zone":"Batter B","phase":"planned","phaseName":"Planned","work":"Crest pin","design":"3.0 m","actual":"—","variance":"—","varBad":false,"updated":"—","by":"—","crew":"Team 1","review":"Not started","reason":"","findings":"","gidx":21},
  "PN-14": {"id":"PN-14","zone":"Batter B","phase":"planned","phaseName":"Planned","work":"Crest pin","design":"3.0 m","actual":"—","variance":"—","varBad":false,"updated":"—","by":"—","crew":"Team 1","review":"Not started","reason":"","findings":"","gidx":22},
  "PN-15": {"id":"PN-15","zone":"Batter B","phase":"planned","phaseName":"Planned","work":"Crest pin","design":"3.0 m","actual":"—","variance":"—","varBad":false,"updated":"—","by":"—","crew":"Team 1","review":"Not started","reason":"","findings":"","gidx":23},
  "PN-16": {"id":"PN-16","zone":"Batter B","phase":"planned","phaseName":"Planned","work":"Crest pin","design":"3.0 m","actual":"—","variance":"—","varBad":false,"updated":"—","by":"—","crew":"Team 1","review":"Not started","reason":"","findings":"","gidx":24}
};

export const boardZones = [
  { name: "Batter A", pct: 75, count: "12 items · 9 confirmed", ids: ["MP-01","MP-02","MP-03","MP-04","PN-01","PN-02","PN-03","PN-04","PN-05","PN-06","PN-07","PN-08"] },
  { name: "Batter B", pct: 0, count: "12 items · 0 confirmed", ids: ["MP-05","MP-06","MP-07","MP-08","PN-09","PN-10","PN-11","PN-12","PN-13","PN-14","PN-15","PN-16"] }
];


/* --- Work Item Design (two templates: DM1 area, CP1 point) ----------------- */
export const designSheets = [
  {
    code: 'DM1', colour: '#6e8b3d', name: 'Drapery mesh', summary: 'Area · per lot',
    badgeClass: 'inuse', badge: 'In use', type: 'Drapery mesh',
    inUse: 'In use by 8 panels', engineerSource: 'Coastal Corridor design set · Rev C · 18 Jun 2026',
    params: [
      { k: 'Geometry', v: 'Area · polygon' },
      { k: 'Unit', v: 'm² · per lot' },
      { k: 'Confirmation', v: 'Per lot' },
      { k: 'Overlap', v: '≥ 300 mm laced' }
    ],
    construction: {
      tendon: 'High-tensile steel mesh · 3.5 m roll', barSpec: 'Galvanised shackles, serials recorded',
      hole: '—', grout: '—', drill: 'Draped from crest',
      notes: 'Mesh draped over the batter, laced at overlaps and anchored to the crest pins. Panels confirm together as a lot.'
    },
    testRegime: 'Overlap ≥ 300 mm · fixing serials · lot inspection',
    material: [
      { k: 'Material', v: 'High-tensile mesh · 3.5 m roll' },
      { k: 'Overlap', v: '≥ 300 mm, laced' },
      { k: 'Fixings', v: 'Shackles · serials recorded' },
      { k: 'Certification', v: 'Certificate per mesh batch' }
    ],
    usedInPlan: [
      { colour: '#6e8b3d', zone: 'Lot A · Batter A', rng: 'MP-01–MP-04 · ', count: '4 panels' },
      { colour: '#2f9089', zone: 'Lot B · Batter B', rng: 'MP-05–MP-08 · ', count: '4 panels' }
    ]
  },
  {
    code: 'CP1', colour: '#cf8e2c', name: 'Crest pins', summary: 'Point · per item',
    badgeClass: 'inuse', badge: 'In use', type: 'Crest pin',
    inUse: 'In use by 16 pins', engineerSource: 'Coastal Corridor design set · Rev C · 18 Jun 2026',
    params: [
      { k: 'Geometry', v: 'Point' },
      { k: 'Unit', v: 'each' },
      { k: 'Confirmation', v: 'Per item' },
      { k: 'Proof load', v: '50 kN · 5 min hold' }
    ],
    construction: {
      tendon: '25 mm bar · 3.0 m', barSpec: 'Grade 500 · galvanised',
      hole: 'Drilled · grouted', grout: 'Class G cement grout', drill: '3.0 m centres',
      notes: 'Grouted crest pins anchor the top of the mesh. Each pin proof tested to 50 kN before its lot can confirm.'
    },
    testRegime: 'Pull test ≥ 50 kN · 5 min hold · no creep',
    material: [
      { k: 'Material', v: '25 mm bar · Class G grout' },
      { k: 'Spacing', v: '3.0 m centres' },
      { k: 'Proof load', v: '50 kN · 5 min hold' },
      { k: 'Certification', v: 'Grout batch recorded' }
    ],
    usedInPlan: [
      { colour: '#6e8b3d', zone: 'Batter A', rng: 'PN-01–PN-08 · ', count: '8 pins' },
      { colour: '#2f9089', zone: 'Batter B', rng: 'PN-09–PN-16 · ', count: '8 pins' }
    ]
  }
];
export const materialPresets = [
  { value: '1.0', label: 'Mesh · measured per m² (×1.0)', sel: true },
  { value: '1.1', label: 'Mesh with lap wastage (×1.1)', sel: false },
  { value: 'custom', label: 'Custom…', sel: false }
];

/* --- Testing Standards (typed rules as standards) -------------------------- */
export const testingStandards = [
  {
    code: 'TS-CP1', colour: '#cf8e2c', badge: 'Active', badgeClass: 'inuse',
    name: 'Crest pin proof load test', summary: 'Pull ≥ 50 kN · all pins',
    type: 'Proof test', usedBy: 'Used by 1 design', governing: 'TS-CP1',
    criteria: [
      { name: 'Proof load', val: '≥ 50 kN', cond: 'Applied and held' },
      { name: 'Load hold', val: '5 minutes', cond: 'At proof load' },
      { name: 'Creep', val: 'No creep', cond: 'Over the hold' },
      { name: 'Sampling', val: 'Every pin', cond: 'Before its lot confirms' }
    ],
    appliesMeta: '1 design · 16 crest pins',
    appliesTo: [
      { colour: '#cf8e2c', code: 'CP1', name: 'Crest pins', zone: 'Batter A · Batter B', count: '16 pins' }
    ]
  },
  {
    code: 'TS-DM1', colour: '#6e8b3d', badge: 'Active', badgeClass: 'inuse',
    name: 'Drapery mesh overlap & lacing', summary: 'Overlap ≥ 300 mm · per lot',
    type: 'Installation test', usedBy: 'Used by 1 design', governing: 'TS-DM1',
    criteria: [
      { name: 'Mesh overlap', val: '≥ 300 mm', cond: 'At every seam' },
      { name: 'Lacing', val: 'Continuous', cond: '3 mm lacing wire' },
      { name: 'Fixing serials', val: 'Recorded', cond: 'Every shackle' },
      { name: 'Sequence', val: 'Pins first', cond: 'CP1 confirmed before lot' }
    ],
    appliesMeta: '1 design · 8 panels · 2 lots',
    appliesTo: [
      { colour: '#6e8b3d', code: 'DM1', name: 'Drapery mesh', zone: 'Lot A · Lot B', count: '8 panels' }
    ]
  }
];

/* --- Evidence & QA -------------------------------------------------------- */
export const evidenceRequirements = [
  {
    code: 'EV-R1', colour: '#6e7d5c', icon: '<rect x="3" y="6" width="14" height="10" rx="2"/><circle cx="10" cy="11" r="2.6"/><path d="M7 6l1.1-2h3.8L13 6"/>',
    name: 'Pin photo', badge: 'Required', badgeClass: 'req',
    summary: 'Photo · Blocks confirmation', type: 'Photo', status: 'Blocks confirmation',
    spec: 'A clear photo of every crest pin head and grout collar at install.',
    criteria: [
      { k: 'Minimum', v: '1 photo per pin' },
      { k: 'Subject', v: 'Pin head + grout collar' },
      { k: 'Capture', v: 'Geotagged on device' },
      { k: 'When', v: 'At install' }
    ],
    appliesTo: [
      { k: 'Designs', cls: 'k-design', v: 'CP1 · Crest pins' },
      { k: 'Operations', cls: 'k-work', v: 'Pin install' },
      { k: 'Zones (optional)', cls: 'k-design', v: 'All zones' }
    ],
    reason: 'Photographic record of every pin before the mesh covers it.'
  },
  {
    code: 'EV-R2', colour: '#6e8b3d', icon: '<rect x="3" y="6" width="14" height="10" rx="2"/><circle cx="10" cy="11" r="2.6"/><path d="M7 6l1.1-2h3.8L13 6"/>',
    name: 'Panel photo', badge: 'Required', badgeClass: 'req',
    summary: 'Photo · Blocks confirmation', type: 'Photo', status: 'Blocks confirmation',
    spec: 'A photo of every installed mesh panel showing the face and the laced overlaps.',
    criteria: [
      { k: 'Minimum', v: '1 photo per panel' },
      { k: 'Subject', v: 'Panel face + overlap lacing' },
      { k: 'Capture', v: 'Geotagged on device' },
      { k: 'When', v: 'At install' }
    ],
    appliesTo: [
      { k: 'Designs', cls: 'k-design', v: 'DM1 · Drapery mesh' },
      { k: 'Operations', cls: 'k-work', v: 'Panel install' },
      { k: 'Zones (optional)', cls: 'k-design', v: 'All zones' }
    ],
    reason: 'Photographic record of each panel and its overlaps.'
  },
  {
    code: 'EV-R3', colour: '#6e8b3d', icon: '<path d="M7 3h7l4 4v13H7z"/><path d="M14 3v4h4"/><path d="M10 12h5M10 15h5"/>',
    name: 'Component certificate', badge: 'Required', badgeClass: 'req',
    summary: 'Record · Blocks confirmation', type: 'Record', status: 'Blocks confirmation',
    spec: 'A material certificate per mesh batch, traceable to the panels it supplied.',
    criteria: [
      { k: 'Minimum', v: '1 cert per batch' },
      { k: 'Trace', v: 'Batch → lot → panels' },
      { k: 'Item', v: 'Mesh + fixing serials' },
      { k: 'When', v: 'Before lot confirms' }
    ],
    appliesTo: [
      { k: 'Designs', cls: 'k-design', v: 'DM1 · Drapery mesh' },
      { k: 'Operations', cls: 'k-work', v: 'Supply' },
      { k: 'Zones (optional)', cls: 'k-design', v: 'All lots' }
    ],
    reason: 'Component traceability is the acceptance basis for the mesh system.'
  }
];
export const evidenceFoot = '3 requirements defined · 3 block confirmation · ready for Safety & Risk';

/* --- Safety & Risk -------------------------------------------------------- */
export const safetyDocs = [
  {
    code: 'JSA-1', colour: '#2b4721',
    icon: '<path d="M10 2.5 4 5v4.5c0 3.6 2.6 6.6 6 8 3.4-1.4 6-4.4 6-8V5z"/><path d="M7.5 10l1.8 1.8L13 8"/>',
    name: 'JSA · Coastal batter rockfall works', listBadge: { cls: 'active', text: 'Active' },
    type: 'JSA', status: 'Governs all rope-access and crest works',
    badge: { cls: 'active', text: 'Active' }, srcmeta: 'Uploaded 30 Jun 2026 · Tim R. · PDF · 1.2 MB',
    scope: [
      { sk: 'Work types', cls: 'k-work', v: 'All rope-access + crest works' },
      { sk: 'Zones', cls: 'k-design', v: 'Batter A · Batter B' }
    ],
    gate: [
      { state: 'on', html: '<b>Active.</b> No one starts on the batter until they have signed on and acknowledged this JSA.' },
      { state: 'on', html: '<b>Today:</b> 0 of 5 crew signed on so far.' }
    ]
  },
  {
    code: 'SWMS-1', colour: '#6e7d5c',
    icon: '<path d="M10 2.5 4 5v4.5c0 3.6 2.6 6.6 6 8 3.4-1.4 6-4.4 6-8V5z"/><path d="M7.5 10l1.8 1.8L13 8"/>',
    name: 'SWMS · Mesh handling & lacing', listBadge: null,
    type: 'SWMS', status: 'Governs mesh drape and lacing',
    badge: { cls: 'active', text: 'Active' }, srcmeta: 'Uploaded 30 Jun 2026 · Tim R. · PDF · 0.8 MB',
    scope: [
      { sk: 'Work types', cls: 'k-work', v: 'Mesh drape + lacing' },
      { sk: 'Zones', cls: 'k-design', v: 'Batter A · Batter B' }
    ],
    gate: [
      { state: 'on', html: '<b>Active.</b> Acknowledged at sign-on alongside the JSA before mesh handling.' },
      { state: 'on', html: '<b>Today:</b> 0 of 5 crew signed on so far.' }
    ]
  }
];
export const safetyFoot = '2 safety documents active · scoped · sign-on gate wired';

/* --- Work Plan ------------------------------------------------------------ */
export const planZones = [
  { key: 'lotA', label: 'Lot A · Batter A', colour: '#6e8b3d', design: 'DM1 + CP1', count: 12 },
  { key: 'lotB', label: 'Lot B · Batter B', colour: '#2f9089', design: 'DM1 + CP1', count: 12 }
];
export const planSummary = {
  source: 'coastal_corridor_plan.pdf', total: 24, zones: 2, unresolved: 0,
  bannerTitle: 'AI proposal from coastal_corridor_plan.pdf',
  bannerSub: '8 panels · 16 pins · 2 lots · 0 unresolved',
  summaryTotal: '/ 24',
  summarySub: '2 lots · pins before panels',
  footText: '8 panels + 16 pins proposed · pins before panel lots · 0 unresolved',
  commitText: '24 of 24 items committed',
  defaultPin: 1,
  sequenceNote: 'Sequence · CP1 crest pins are confirmed before a DM1 panel lot can be confirmed.'
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
    pct: 25, done: 6, total: 24,
    confirmedLine: 'Lot A confirmable · 6 of 16 pins confirmed',
    active: 4, awaitingQA: 3, issues: 1,
    statusPill: 'In delivery', targetDate: '29 Aug 2026'
  },
  alerts: [
    { id: 'PN-05', title: 'Pull test failed · 42 kN', zone: 'Batter A', tagCls: 'action', tagText: 'Re-drill', href: 'qa-queue.html' }
  ],
  qaChips: ['Lot A', 'PN-01', 'PN-02'],
  qaFoot: 'Lot A ready to confirm; Lot B pending crest pins.',
  setupCards: [
    { href: 'layout.html', nm: 'Layout', mt: '2 batters', icon: IC_LAYOUT },
    { href: 'work-item-design.html', nm: 'Work item design', mt: '2 templates', icon: IC_DESIGN },
    { href: 'work-plan.html', nm: 'Work plan', mt: '24 placed', icon: IC_PLAN },
    { href: 'testing-standards.html', nm: 'Testing standards', mt: 'Configured', icon: IC_SHIELD },
    { href: 'evidence-qa.html', nm: 'Evidence & QA', mt: 'Configured', icon: IC_FOLDER },
    { href: 'safety-risk-controls.html', nm: 'Safety & risk', mt: '2 active', icon: IC_SHIELD2 },
    { href: 'reference-documents.html', nm: 'Reference documents', mt: '9 documents', icon: IC_DOC }
  ]
};

/* --- Status Board --------------------------------------------------------- */
export const boardPhaseLabels = { complete: 'CONFIRMED', issue: 'REOPENED', active: 'INSTALLED', onhold: 'FOR QA', planned: 'PLANNED' };
export const boardStatus = { pct: 25, confirmed: 6, total: 24, drilled: 4, qa: 3, issues: 1 };
export const boardAttention = [
  { id: 'PN-05', text: 'Pull test failed · 42 kN', zone: 'Batter A' }
];

/* --- QA Queue (lot rollup + reopened pull test) --------------------------- */
export const qaQueue = {
  total: 3,
  readyCount: 1,
  attnCount: 2,
  items: [
    {
      id: 'Lot A', state: 'ready', zone: 'Batter A · Drapery mesh', by: 'S. Kela', ago: 'today',
      ev: 5, evTotal: 5, pill: 'Lot confirmable', result: 'Panels installed · pins confirmed',
      metrics: [ { k: 'Panels installed', v: '4 / 4' }, { k: 'Crest pins confirmed', v: '6 / 8' }, { k: 'Overlaps', v: '≥ 300 mm' } ]
    },
    {
      id: 'Lot B', state: 'attn', zone: 'Batter B · Drapery mesh', by: 'S. Kela', ago: 'today',
      ev: 2, evTotal: 5, pill: 'Lot pending', gap: 'Crest pins not confirmed', result: 'Pins pending',
      metrics: [ { k: 'Panels installed', v: '2 / 4' }, { k: 'Crest pins confirmed', v: '0 / 8' }, { k: 'Overlaps', v: 'part' } ],
      noteText: 'Crest pins for this lot are not yet confirmed. The lot cannot confirm until CP1 pins pass.'
    },
    {
      id: 'PN-05', state: 'attn', zone: 'Batter A · Crest pin', by: 'S. Kela', ago: 'today',
      ev: 4, evTotal: 5, pill: 'Pull test failed', gap: 'Held 42 kN', result: 'Below 50 kN target',
      metrics: [ { k: 'Held load', v: '42 kN', cls: 'warn' }, { k: 'Target', v: '50 kN' }, { k: 'Creep', v: '2.1 mm' } ],
      noteText: 'Pull test held only 42 kN against the 50 kN target. Re-drill and re-grout, then re-test.'
    }
  ]
};

/* --- Closeout (rockfall conditions) --------------------------------------- */
export const closeout = {
  itemLabel: 'lots',
  items: 2,
  blocking: 3,
  days: '—',
  progressPct: 55,
  readyBig: 'Not ready',
  readySub: '3 checks still blocking closeout',
  checks: [
    { state: 'blk', name: 'All crest pins confirmed', detail: '6 of 16 pins confirmed · PN-05 reopened', act: 'Open QA Queue', go: 'qa' },
    { state: 'blk', name: 'All lots confirmed', detail: 'Lot A confirmable · Lot B pending pins', act: 'Open QA Queue', go: 'qa' },
    { state: 'blk', name: 'Component certificates compiled', detail: '3 mesh-batch certs on file · not yet released', act: 'Confirm handover', go: 'rpt' },
    { state: 'ok', name: 'Register prepared', detail: 'Panel + pin register drafted', v: 'Draft' },
    { state: 'ok', name: 'No open incidents', detail: 'None reported', v: 'Clear' },
    { state: 'ok', name: 'Daily sheets submitted', detail: '9 of 9 days submitted', v: 'Done' }
  ],
  summary: [
    { k: 'Lots', v: '2', small: 'of 2' },
    { k: 'Released', v: '0' },
    { k: 'Flagged', v: '1', small: 'open' },
    { k: 'Duration', v: '9', small: 'days' }
  ],
  afterReport: 'Rockfall register',
  afterReportMeta: '8 panels · 16 pins'
};
