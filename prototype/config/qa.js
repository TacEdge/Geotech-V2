/* ============================================================================
   TacEdge Ground Engineering · QA vocabulary (typed data, no engine)
   ----------------------------------------------------------------------------
   Named constants so screens and config share one vocabulary for record states
   and rule kinds. This is data only: there is no rule engine here, just the
   enumerations that config and the QA screens agree on.
   ========================================================================== */

/* Lifecycle a captured record moves through. 'pending_results' is the lane for
   work types with deferred acceptance (e.g. shotcrete 28-day cores). */
export const QA_STATES = ['draft', 'submitted', 'pending_results', 'confirmed', 'reopened'];

/* Kinds of acceptance rule a template can declare (typed data, not executable). */
export const RULE_TYPES = ['threshold', 'completeness', 'sequence', 'deferred_result', 'witness_hold'];
