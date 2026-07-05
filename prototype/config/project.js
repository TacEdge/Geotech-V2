/* ============================================================================
   TacEdge Geotech V2.0 · Project record + export seam
   ----------------------------------------------------------------------------
   One project's data in a clean, serialisable shape. Screens read from this;
   nothing is scraped from the DOM. serialise() returns the whole job as JSON,
   so a future export to Excel or an external system reads this one seam.

   Migrated from the former assets/work-types.js JOB object. workType now keys
   into the unified config/workTypes.js catalogue (renamed 'anchor' -> the
   'anchoring' work type).
   ========================================================================== */
import { WORK_TYPES } from './workTypes.js';

export const PROJECT = {
  id: 'BEN-SPW-2026',
  name: 'Benmore Dam · Spillway Anchoring',
  client: 'Meridian Energy',
  contractor: 'Rock Control',
  engineer: 'WSP',
  workType: 'anchoring',
  zones: ['Spillway Face', 'Stilling Basin', 'Left Abutment', 'Crest Gallery'],
  items: [
    {
      id: 'B01',
      zone: 'Spillway Face',
      grid: 'A1',
      depthDesign: 17.5,
      depthFinal: 17.42,
      materialUsed: 46,
      variance: 1.21,
      test: 'Pass',
      state: 'approved'
    },
    {
      id: 'B08',
      zone: 'Spillway Face',
      grid: 'B2',
      depthDesign: 16.8,
      depthFinal: 16.72,
      materialUsed: 44,
      variance: 1.16,
      test: 'Pass',
      state: 'approved'
    },
    {
      id: 'B11',
      zone: 'Spillway Face',
      grid: 'E2',
      depthDesign: 17.5,
      depthFinal: null,
      materialUsed: null,
      variance: null,
      test: null,
      state: 'flagged',
      flag: 'missing photo'
    },
    {
      id: 'B12',
      zone: 'Spillway Face',
      grid: 'F2',
      depthDesign: 12.0,
      depthFinal: 12.4,
      materialUsed: 47,
      variance: 1.24,
      test: null,
      state: 'provisional'
    },
    {
      id: 'B17',
      zone: 'Spillway Face',
      grid: 'D3',
      depthDesign: 17.5,
      depthFinal: 17.63,
      materialUsed: 47,
      variance: 1.24,
      test: 'Pass',
      state: 'provisional'
    }
  ]
};

/** The active work type's full configuration. */
export function workType() {
  return WORK_TYPES[PROJECT.workType];
}

/** Serialise the whole job from one place. No DOM scraping. */
export function serialise() {
  return JSON.stringify(
    {
      job: PROJECT,
      workType: workType(),
      exportedAt: '2026-06-27',
      schema: 'tacedge.geotech.job/v2'
    },
    null,
    2
  );
}
