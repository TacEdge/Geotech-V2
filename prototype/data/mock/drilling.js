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
