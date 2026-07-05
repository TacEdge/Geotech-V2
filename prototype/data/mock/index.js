/* ============================================================================
   TacEdge Geotech V2.0 · Mock-data pack registry
   ----------------------------------------------------------------------------
   Maps a work-type key to its content pack. Setup screens render the active
   project's work-type pack. Anchoring is the one deeply populated pack; other
   work types are added here as their content lands (e.g. piling.js in Phase 1).
   ========================================================================== */
import * as anchoring from './anchoring.js';
import * as piling from './piling.js';

export const PACKS = { anchoring: anchoring, piling: piling };

/** The content pack for a work-type key, or null if none is populated yet. */
export function packFor(workTypeKey) {
  return PACKS[workTypeKey] || null;
}
