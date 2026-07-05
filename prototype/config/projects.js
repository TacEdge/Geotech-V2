/* ============================================================================
   TacEdge Geotech V2.0 · Project registry + export seam
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
    workType: 'anchoring',
    zones: ['Spillway Face', 'Stilling Basin', 'Left Abutment', 'Crest Gallery'],
    items: [
      { id: 'B01', zone: 'Spillway Face', grid: 'A1', depthDesign: 17.5, depthFinal: 17.42, materialUsed: 46, variance: 1.21, test: 'Pass', state: 'approved' },
      { id: 'B08', zone: 'Spillway Face', grid: 'B2', depthDesign: 16.8, depthFinal: 16.72, materialUsed: 44, variance: 1.16, test: 'Pass', state: 'approved' },
      { id: 'B11', zone: 'Spillway Face', grid: 'E2', depthDesign: 17.5, depthFinal: null, materialUsed: null, variance: null, test: null, state: 'flagged', flag: 'missing photo' },
      { id: 'B12', zone: 'Spillway Face', grid: 'F2', depthDesign: 12.0, depthFinal: 12.4, materialUsed: 47, variance: 1.24, test: null, state: 'provisional' },
      { id: 'B17', zone: 'Spillway Face', grid: 'D3', depthDesign: 17.5, depthFinal: 17.63, materialUsed: 47, variance: 1.24, test: 'Pass', state: 'provisional' }
    ]
  },

  // Existing second project (rock bolts) referenced in the platform footer.
  // Anchoring work type, rock-bolt template. Dormant until a screen renders it.
  aviemore: {
    id: 'AVI-RB-2026',
    name: 'Aviemore Dam · Rock Bolting',
    client: 'Meridian Energy',
    contractor: 'Rock Control',
    engineer: 'WSP',
    workType: 'anchoring',
    zones: ['Tailrace Face', 'Right Abutment'],
    items: [
      { id: 'RB01', zone: 'Tailrace Face', grid: 'A1', depthDesign: 6.0, depthFinal: 6.02, materialUsed: 2, variance: 1.0, test: 'Pass', state: 'approved' },
      { id: 'RB05', zone: 'Tailrace Face', grid: 'C2', depthDesign: 6.0, depthFinal: 5.98, materialUsed: 2, variance: 1.0, test: 'Pass', state: 'approved' },
      { id: 'RB09', zone: 'Right Abutment', grid: 'D1', depthDesign: 4.5, depthFinal: null, materialUsed: null, variance: null, test: null, state: 'provisional' }
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

/** The active (or named) project's work-type configuration. */
export function workType(projectId) {
  var p = (projectId && PROJECTS[projectId]) || activeProject();
  return WORK_TYPES[p.workType];
}

/** Serialise a project as the export seam. No argument = the active project. */
export function serialise(projectId) {
  var p = (projectId && PROJECTS[projectId]) || activeProject();
  return JSON.stringify(
    {
      job: p,
      workType: WORK_TYPES[p.workType],
      exportedAt: '2026-06-27',
      schema: 'tacedge.geotech.job/v2'
    },
    null,
    2
  );
}
