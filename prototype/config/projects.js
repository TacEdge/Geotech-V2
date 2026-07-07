/* ============================================================================
   TacEdge Ground Engineering · Project registry + export seam
   ----------------------------------------------------------------------------
   The projects the prototype can walk through. The active project is chosen on
   the Projects screen (a sessionStorage write, then normal navigation) and read
   back by activeProject(), which falls back to Benmore so every existing URL
   renders identically when no project has been selected.

   Records are mock. serialise(projectId) is the export seam; with no argument it
   serialises the active project, byte-compatible with the former single-project
   export for Benmore.
   ========================================================================== */
import { WORK_TYPES } from './workTypes.js';

export const PROJECTS = {
  benmore: {
    id: 'BEN-SPW-2026',
    name: 'Benmore Dam · Spillway Anchoring',
    client: 'Meridian Energy',
    contractor: 'Rock Control',
    engineer: 'WSP',
    workTypes: ['anchoring'],
    zones: ['Spillway Face', 'Stilling Basin', 'Left Abutment', 'Crest Gallery'],
    items: [
      { id: 'B01', zone: 'Spillway Face', grid: 'A1', depthDesign: 17.5, depthFinal: 17.42, materialUsed: 46, variance: 1.21, test: 'Pass', state: 'approved' },
      { id: 'B08', zone: 'Spillway Face', grid: 'B2', depthDesign: 16.8, depthFinal: 16.72, materialUsed: 44, variance: 1.16, test: 'Pass', state: 'approved' },
      { id: 'B11', zone: 'Spillway Face', grid: 'E2', depthDesign: 17.5, depthFinal: null, materialUsed: null, variance: null, test: null, state: 'flagged', flag: 'missing photo' },
      { id: 'B12', zone: 'Spillway Face', grid: 'F2', depthDesign: 12.0, depthFinal: 12.4, materialUsed: 47, variance: 1.24, test: null, state: 'provisional' },
      { id: 'B17', zone: 'Spillway Face', grid: 'D3', depthDesign: 17.5, depthFinal: 17.63, materialUsed: 47, variance: 1.24, test: 'Pass', state: 'provisional' }
    ]
  },

  // Phase 1 · Piling vertical demo. Fictional project; client/engineer are
  // placeholders for the owner to confirm. draft:true until the content pack is
  // validated (removed in Stage 1.4). Piling work type, screw-pile template.
  'cashmere-ridge': {
    id: 'CR-SP-2026',
    name: 'Cashmere Ridge Retention',
    client: 'TBC · owner to confirm',
    contractor: 'Rock Control',
    engineer: 'TBC · owner to confirm',
    workTypes: ['piling'],
    draft: true,
    zones: ['Upper Bench'],
    items: [
      { id: 'SP-01', zone: 'Upper Bench', grid: 'A1', depthDesign: 12.0, torqueDesign: 8, depthFinal: 12.1, torqueFinal: 9.2, variance: 0.8, test: 'Pass', state: 'approved' },
      { id: 'SP-02', zone: 'Upper Bench', grid: 'A2', depthDesign: 12.0, torqueDesign: 8, depthFinal: 12.3, torqueFinal: 8.6, variance: 2.5, test: 'Pass', state: 'approved' },
      { id: 'SP-03', zone: 'Upper Bench', grid: 'A3', depthDesign: 12.0, torqueDesign: 8, depthFinal: 11.8, torqueFinal: 8.1, variance: 1.7, test: 'Pass', state: 'approved' },
      { id: 'SP-04', zone: 'Upper Bench', grid: 'B1', depthDesign: 12.0, torqueDesign: 8, depthFinal: 12.2, torqueFinal: 8.9, variance: 1.7, test: null, state: 'provisional' },
      { id: 'SP-05', zone: 'Upper Bench', grid: 'B2', depthDesign: 12.0, torqueDesign: 8, depthFinal: 12.0, torqueFinal: 7.8, variance: 0.0, test: null, state: 'pending', flag: 'torque below target' },
      { id: 'SP-06', zone: 'Upper Bench', grid: 'B3', depthDesign: 12.0, torqueDesign: 8, depthFinal: 12.4, torqueFinal: 9.0, variance: 3.3, test: null, state: 'provisional' },
      { id: 'SP-07', zone: 'Upper Bench', grid: 'C1', depthDesign: 12.5, torqueDesign: 8, depthFinal: null, torqueFinal: null, variance: null, test: null, state: 'planned' },
      { id: 'SP-08', zone: 'Upper Bench', grid: 'C2', depthDesign: 12.5, torqueDesign: 8, depthFinal: null, torqueFinal: null, variance: null, test: null, state: 'planned' },
      { id: 'SP-09', zone: 'Upper Bench', grid: 'C3', depthDesign: 12.5, torqueDesign: 8, depthFinal: null, torqueFinal: null, variance: null, test: null, state: 'planned' },
      { id: 'SP-10', zone: 'Upper Bench', grid: 'D1', depthDesign: 13.0, torqueDesign: 8, depthFinal: null, torqueFinal: null, variance: null, test: null, state: 'planned' },
      { id: 'SP-11', zone: 'Upper Bench', grid: 'D2', depthDesign: 13.0, torqueDesign: 8, depthFinal: null, torqueFinal: null, variance: null, test: null, state: 'planned' },
      { id: 'SP-12', zone: 'Upper Bench', grid: 'D3', depthDesign: 13.0, torqueDesign: 8, depthFinal: null, torqueFinal: null, variance: null, test: null, state: 'planned' }
    ]
  },

  // Coastal Corridor Rockfall · first mixed-geometry project (mesh panels +
  // crest pins) and first per-lot confirmation. Client and engineer are
  // notional pending owner confirmation; draft:true until the pack is validated.
  'coastal-corridor': {
    id: 'CC-RF-2026',
    name: 'Coastal Corridor Rockfall',
    client: 'Kaimoana District Council',
    contractor: 'Rock Control',
    engineer: 'Aurora Geotechnical',
    workTypes: ['rockfall'],
    draft: true,
    zones: ['Batter A', 'Batter B'],
    lots: [
      { id: 'Lot A', zone: 'Batter A', members: ['MP-01', 'MP-02', 'MP-03', 'MP-04'], state: 'confirmable' },
      { id: 'Lot B', zone: 'Batter B', members: ['MP-05', 'MP-06', 'MP-07', 'MP-08'], state: 'pending' }
    ],
    items: [
      { id: "MP-01", zone: "Batter A", template: "DM1", geometry: "area", lot: "Lot A", area: 30, overlapDesign: 300, overlapFinal: 330, points: [[90,208],[217,208],[217,592],[90,592]], state: "approved" },
      { id: "MP-02", zone: "Batter A", template: "DM1", geometry: "area", lot: "Lot A", area: 34, overlapDesign: 300, overlapFinal: 325, points: [[217,208],[344,208],[344,592],[217,592]], state: "approved" },
      { id: "MP-03", zone: "Batter A", template: "DM1", geometry: "area", lot: "Lot A", area: 28, overlapDesign: 300, overlapFinal: 338, points: [[344,208],[471,208],[471,592],[344,592]], state: "approved" },
      { id: "MP-04", zone: "Batter A", template: "DM1", geometry: "area", lot: "Lot A", area: 36, overlapDesign: 300, overlapFinal: 320, points: [[471,208],[598,208],[598,592],[471,592]], state: "approved" },
      { id: "MP-05", zone: "Batter B", template: "DM1", geometry: "area", lot: "Lot B", area: 32, overlapDesign: 300, overlapFinal: 315, points: [[650,208],[780,208],[780,592],[650,592]], state: "provisional" },
      { id: "MP-06", zone: "Batter B", template: "DM1", geometry: "area", lot: "Lot B", area: 38, overlapDesign: 300, overlapFinal: 322, points: [[780,208],[910,208],[910,592],[780,592]], state: "provisional" },
      { id: "MP-07", zone: "Batter B", template: "DM1", geometry: "area", lot: "Lot B", area: 26, overlapDesign: 300, overlapFinal: null, points: [[910,208],[1040,208],[1040,592],[910,592]], state: "planned" },
      { id: "MP-08", zone: "Batter B", template: "DM1", geometry: "area", lot: "Lot B", area: 40, overlapDesign: 300, overlapFinal: null, points: [[1040,208],[1170,208],[1170,592],[1040,592]], state: "planned" },
      { id: "PN-01", zone: "Batter A", template: "CP1", geometry: "point", x: 120, y: 185, depthDesign: 3, pullDesign: 50, depthFinal: 3, pullFinal: 58, state: "approved" },
      { id: "PN-02", zone: "Batter A", template: "CP1", geometry: "point", x: 185, y: 185, depthDesign: 3, pullDesign: 50, depthFinal: 3.1, pullFinal: 55, state: "approved" },
      { id: "PN-03", zone: "Batter A", template: "CP1", geometry: "point", x: 250, y: 185, depthDesign: 3, pullDesign: 50, depthFinal: 2.9, pullFinal: 61, state: "approved" },
      { id: "PN-04", zone: "Batter A", template: "CP1", geometry: "point", x: 315, y: 185, depthDesign: 3, pullDesign: 50, depthFinal: 3, pullFinal: 54, state: "approved" },
      { id: "PN-05", zone: "Batter A", template: "CP1", geometry: "point", x: 380, y: 185, depthDesign: 3, pullDesign: 50, depthFinal: 3, pullFinal: 42, state: "reopened", flag: "re-drill and re-grout" },
      { id: "PN-06", zone: "Batter A", template: "CP1", geometry: "point", x: 445, y: 185, depthDesign: 3, pullDesign: 50, depthFinal: 3, pullFinal: 57, state: "approved" },
      { id: "PN-07", zone: "Batter A", template: "CP1", geometry: "point", x: 510, y: 185, depthDesign: 3, pullDesign: 50, depthFinal: 3, pullFinal: null, state: "provisional" },
      { id: "PN-08", zone: "Batter A", template: "CP1", geometry: "point", x: 575, y: 185, depthDesign: 3, pullDesign: 50, depthFinal: 3.1, pullFinal: null, state: "provisional" },
      { id: "PN-09", zone: "Batter B", template: "CP1", geometry: "point", x: 705, y: 185, depthDesign: 3, pullDesign: 50, depthFinal: 3, pullFinal: null, state: "provisional" },
      { id: "PN-10", zone: "Batter B", template: "CP1", geometry: "point", x: 770, y: 185, depthDesign: 3, pullDesign: 50, depthFinal: 3, pullFinal: null, state: "provisional" },
      { id: "PN-11", zone: "Batter B", template: "CP1", geometry: "point", x: 835, y: 185, depthDesign: 3, pullDesign: 50, depthFinal: null, pullFinal: null, state: "planned" },
      { id: "PN-12", zone: "Batter B", template: "CP1", geometry: "point", x: 900, y: 185, depthDesign: 3, pullDesign: 50, depthFinal: null, pullFinal: null, state: "planned" },
      { id: "PN-13", zone: "Batter B", template: "CP1", geometry: "point", x: 965, y: 185, depthDesign: 3, pullDesign: 50, depthFinal: null, pullFinal: null, state: "planned" },
      { id: "PN-14", zone: "Batter B", template: "CP1", geometry: "point", x: 1030, y: 185, depthDesign: 3, pullDesign: 50, depthFinal: null, pullFinal: null, state: "planned" },
      { id: "PN-15", zone: "Batter B", template: "CP1", geometry: "point", x: 1095, y: 185, depthDesign: 3, pullDesign: 50, depthFinal: null, pullFinal: null, state: "planned" },
      { id: "PN-16", zone: "Batter B", template: "CP1", geometry: "point", x: 1160, y: 185, depthDesign: 3, pullDesign: 50, depthFinal: null, pullFinal: null, state: "planned" }
    ]
  },

  // Quarry Face Stabilisation · shotcrete. First deferred-QA project: a lot is
  // a spray shift carrying the 28-day core clock, and a substrate hold point
  // gates spraying. Client and engineer are notional; draft:true until WSP.
  'quarry-face': {
    id: 'QF-SC-2026',
    name: 'Quarry Face Stabilisation',
    client: 'Southern Aggregates',
    contractor: 'Rock Control',
    engineer: 'WSP',
    workTypes: ['shotcrete'],
    draft: true,
    zones: ['Bench 1', 'Bench 2'],
    lots: [
      { id: 'SL-01', zone: 'Bench 1', members: ['SC-01', 'SC-02', 'SC-03', 'SC-04', 'SC-05'], state: 'confirmed', sprayedDaysAgo: 35 },
      { id: 'SL-02', zone: 'Bench 1 · Bench 2', members: ['SC-06', 'SC-07', 'SC-08', 'SC-09', 'SC-10'], state: 'pending_results', sprayedDaysAgo: 12 },
      { id: 'SL-03', zone: 'Bench 2', members: ['SC-11', 'SC-12', 'SC-13', 'SC-14', 'SC-15'], state: 'held', sprayedDaysAgo: null }
    ],
    items: [
      { id: "SC-01", zone: "Bench 1", template: "S1", geometry: "area", lot: "SL-01", area: 28, points: [[80,205],[216,205],[216,440],[80,440]], state: "approved" },
      { id: "SC-02", zone: "Bench 1", template: "S1", geometry: "area", lot: "SL-01", area: 24, points: [[222,205],[358,205],[358,440],[222,440]], state: "approved" },
      { id: "SC-03", zone: "Bench 1", template: "S1", geometry: "area", lot: "SL-01", area: 32, points: [[364,205],[500,205],[500,440],[364,440]], state: "approved" },
      { id: "SC-04", zone: "Bench 1", template: "S1", geometry: "area", lot: "SL-01", area: 20, points: [[506,205],[642,205],[642,440],[506,440]], state: "approved" },
      { id: "SC-05", zone: "Bench 1", template: "S1", geometry: "area", lot: "SL-01", area: 30, points: [[648,205],[784,205],[784,440],[648,440]], state: "approved" },
      { id: "SC-06", zone: "Bench 1", template: "S1", geometry: "area", lot: "SL-02", area: 26, points: [[790,205],[926,205],[926,440],[790,440]], state: "provisional" },
      { id: "SC-07", zone: "Bench 1", template: "S1", geometry: "area", lot: "SL-02", area: 34, points: [[932,205],[1068,205],[1068,440],[932,440]], state: "provisional" },
      { id: "SC-08", zone: "Bench 1", template: "S1", geometry: "area", lot: "SL-02", area: 22, points: [[1074,205],[1194,205],[1194,440],[1074,440]], state: "provisional" },
      { id: "SC-09", zone: "Bench 2", template: "S1", geometry: "area", lot: "SL-02", area: 30, points: [[120,520],[264,520],[264,755],[120,755]], state: "provisional" },
      { id: "SC-10", zone: "Bench 2", template: "S1", geometry: "area", lot: "SL-02", area: 25, points: [[270,520],[414,520],[414,755],[270,755]], state: "provisional" },
      { id: "SC-11", zone: "Bench 2", template: "S1", geometry: "area", lot: "SL-03", area: 33, points: [[420,520],[564,520],[564,755],[420,755]], state: "planned" },
      { id: "SC-12", zone: "Bench 2", template: "S1", geometry: "area", lot: "SL-03", area: 21, points: [[570,520],[714,520],[714,755],[570,755]], state: "planned" },
      { id: "SC-13", zone: "Bench 2", template: "S1", geometry: "area", lot: "SL-03", area: 29, points: [[720,520],[864,520],[864,755],[720,755]], state: "planned" },
      { id: "SC-14", zone: "Bench 2", template: "S1", geometry: "area", lot: "SL-03", area: 27, points: [[870,520],[1014,520],[1014,755],[870,755]], state: "planned" },
      { id: "SC-15", zone: "Bench 2", template: "S1", geometry: "area", lot: "SL-03", area: 23, points: [[1020,520],[1154,520],[1154,755],[1020,755]], state: "planned" }
    ]
  },

  // Slip Site Investigation · drilling. First report-as-deliverable project:
  // the borehole log IS the product, confirmed per core run. Client and
  // engineer are fictional placeholders; geology is placeholder throughout.
  // draft:true until the Rock Control driller validates the pack.
  'slip-site': {
    id: 'SSI-DR-2026',
    name: 'Slip Site Investigation',
    client: 'Alpine District Council',
    contractor: 'Rock Control',
    engineer: 'Southern Geotechnical',
    workTypes: ['drilling'],
    draft: true,
    zones: ['Upper Slip', 'Lower Terrace'],
    items: [
      { id: 'BH-01', zone: 'Upper Slip', template: 'HQ3', geometry: 'point', x: 300, y: 245, depthDesign: 22.5, depthDrilled: 22.5, state: 'approved' },
      { id: 'BH-02', zone: 'Upper Slip', template: 'HQ3', geometry: 'point', x: 520, y: 250, depthDesign: 22.5, depthDrilled: 14.2, state: 'provisional' },
      { id: 'BH-03', zone: 'Upper Slip', template: 'HQ3', geometry: 'point', x: 745, y: 250, depthDesign: 18.0, depthDrilled: 0, state: 'planned' },
      { id: 'BH-04', zone: 'Upper Slip', template: 'HQ3', geometry: 'point', x: 960, y: 300, depthDesign: 15.0, depthDrilled: 15.0, state: 'approved' },
      { id: 'BH-05', zone: 'Lower Terrace', template: 'HQ3', geometry: 'point', x: 300, y: 600, depthDesign: 20.0, depthDrilled: 20.0, state: 'approved' },
      { id: 'BH-06', zone: 'Lower Terrace', template: 'HQ3', geometry: 'point', x: 520, y: 605, depthDesign: 25.0, depthDrilled: 0, state: 'planned' },
      { id: 'BH-07', zone: 'Lower Terrace', template: 'HQ3', geometry: 'point', x: 745, y: 600, depthDesign: 12.0, depthDrilled: 0, state: 'planned' },
      { id: 'BH-08', zone: 'Lower Terrace', template: 'HQ3', geometry: 'point', x: 960, y: 610, depthDesign: 16.0, depthDrilled: 0, state: 'planned' }
    ]
  },

  // Terrace Slip Drainage · drainage. The final work type: linear geometry,
  // two templates (horizontal drilled drains HD1, collector trench TD1), and
  // the two QA philosophies (thresholds reopen, flow is a finding). Client and
  // engineer are fictional placeholders; draft:true until Rock Control
  // validation.
  'terrace-slip': {
    id: 'TSD-DR-2026',
    name: 'Terrace Slip Drainage',
    client: 'Alpine District Council',
    contractor: 'Rock Control',
    engineer: 'Southern Geotechnical',
    workTypes: ['drainage'],
    draft: true,
    zones: ['Slip Face', 'Toe'],
    items: [
      { id: 'DR-01', zone: 'Slip Face', template: 'HD1', geometry: 'line', points: [[200,300],[560,380]], state: 'approved' },
      { id: 'DR-02', zone: 'Slip Face', template: 'HD1', geometry: 'line', points: [[200,300],[600,420]], state: 'approved' },
      { id: 'DR-03', zone: 'Slip Face', template: 'HD1', geometry: 'line', points: [[200,300],[620,460]], state: 'approved' },
      { id: 'DR-04', zone: 'Slip Face', template: 'HD1', geometry: 'line', points: [[200,300],[600,500]], state: 'approved' },
      { id: 'DR-05', zone: 'Slip Face', template: 'HD1', geometry: 'line', points: [[200,300],[560,540]], state: 'approved' },
      { id: 'DR-06', zone: 'Slip Face', template: 'HD1', geometry: 'line', points: [[200,300],[500,560]], state: 'approved' },
      { id: 'DR-07', zone: 'Slip Face', template: 'HD1', geometry: 'line', points: [[220,560],[580,470]], state: 'approved' },
      { id: 'DR-08', zone: 'Slip Face', template: 'HD1', geometry: 'line', points: [[220,560],[520,500]], state: 'reopened' },
      { id: 'DR-09', zone: 'Slip Face', template: 'HD1', geometry: 'line', points: [[220,560],[620,560]], state: 'provisional' },
      { id: 'DR-10', zone: 'Slip Face', template: 'HD1', geometry: 'line', points: [[220,560],[600,600]], state: 'planned' },
      { id: 'DR-11', zone: 'Slip Face', template: 'HD1', geometry: 'line', points: [[220,560],[560,630]], state: 'planned' },
      { id: 'DR-12', zone: 'Slip Face', template: 'HD1', geometry: 'line', points: [[220,560],[500,650]], state: 'planned' },
      { id: 'TD-01', zone: 'Toe', template: 'TD1', geometry: 'line', points: [[300,715],[900,720]], state: 'approved' },
      { id: 'TD-02', zone: 'Toe', template: 'TD1', geometry: 'line', points: [[300,760],[820,758]], state: 'onhold' }
    ]
  }
};

/** The active project (sessionStorage['te.project']), falling back to Benmore. */
export function activeProject() {
  try {
    var id = window.sessionStorage && sessionStorage.getItem('te.project');
    if (id && PROJECTS[id]) return PROJECTS[id];
  } catch (_) {}
  return PROJECTS.benmore;
}

/** A project's primary work-type key (workTypes[0]). Compat seam after the
    workType -> workTypes[] migration: every project is single-typed today, so
    the primary type is the only type. Use this or intersect workTypes[] rather
    than reading a bare .workType, which no longer exists. */
export function primaryType(projectId) {
  var p = (projectId && PROJECTS[projectId]) || activeProject();
  return p.workTypes && p.workTypes[0];
}

/** The active (or named) project's primary work-type configuration. */
export function workType(projectId) {
  var p = (projectId && PROJECTS[projectId]) || activeProject();
  return WORK_TYPES[p.workTypes[0]];
}

/** Serialise a project as the export seam. No argument = the active project. */
export function serialise(projectId) {
  var p = (projectId && PROJECTS[projectId]) || activeProject();
  return JSON.stringify(
    {
      job: p,
      workType: WORK_TYPES[p.workTypes[0]],
      exportedAt: '2026-06-27',
      schema: 'tacedge.geotech.job/v2'
    },
    null,
    2
  );
}
