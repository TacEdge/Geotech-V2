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
