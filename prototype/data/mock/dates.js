/* ============================================================================
   TacEdge Geotech V2.0 · Relative-date phrasing
   ----------------------------------------------------------------------------
   Mock dates are stored as integer day-offsets, not absolute dates, and
   rendered as relative phrases ("Sprayed 12 days ago", "Backfilled today").
   Relative phrasing keeps a temporal narrative fresh whenever it is viewed
   and, because the offsets are constants, keeps the screenshot harness stable
   (no absolute-date digit drift). First used by the shotcrete pack; the
   drilling pack is the second consumer, so the helper lives here.
   ========================================================================== */

/** Relative phrase for a whole-day offset in the past. */
export function agoPhrase(days) {
  if (days == null) return 'not yet';
  if (days === 0) return 'today';
  if (days === 1) return 'yesterday';
  return days + ' days ago';
}
