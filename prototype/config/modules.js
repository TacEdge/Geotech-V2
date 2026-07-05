/* ============================================================================
   TacEdge Geotech V2.0 · Capture-module registry
   ----------------------------------------------------------------------------
   The global catalogue of field capture modules. Work-type templates reference
   these by id; the manifest and index use them to decide which capture cards a
   work type loads. Formalises what the Configurable Engine page already claims.

   screen: the field screen that implements the module, or null where the module
   is configured but not yet built (the future catalogue). sharedBy: the work
   types that load this module.
   ========================================================================== */
export const MODULES = {
  // --- Built (anchoring) -----------------------------------------------------
  drill_log: {
    id: 'drill_log', name: 'Drill Log', screen: 'screens/drill-log.html',
    summary: 'depth, lithology, flush', sharedBy: ['anchoring', 'drainage']
  },
  grout_log: {
    id: 'grout_log', name: 'Grout Log', screen: 'screens/grout-log.html',
    summary: 'bags, variance, photos', sharedBy: ['anchoring']
  },
  anchor_test: {
    id: 'anchor_test', name: 'Anchor Test Record', screen: 'screens/anchor-test.html',
    summary: 'test results, photos', sharedBy: ['anchoring']
  },
  evidence: {
    id: 'evidence', name: 'Evidence & Photos', screen: 'screens/incident.html',
    summary: 'general site evidence', sharedBy: ['anchoring', 'drilling', 'shotcrete', 'rockfall', 'drainage', 'piling']
  },

  // --- Configured, not yet built (screen: null) ------------------------------
  torque_log: {
    id: 'torque_log', name: 'Install / Torque Log', screen: 'screens/torque-log.html',
    summary: 'torque vs depth', sharedBy: ['piling']
  },
  verticality_cutoff: {
    id: 'verticality_cutoff', name: 'Verticality & Cut-off Record', screen: 'screens/verticality-cutoff.html',
    summary: 'two-axis verticality, cut-off, cap detail', sharedBy: ['piling']
  },
  panel_install: {
    id: 'panel_install', name: 'Panel Install Record', screen: null,
    summary: 'laps, lacing, fixings', sharedBy: ['rockfall']
  },
  pull_test: {
    id: 'pull_test', name: 'Pull Test Record', screen: null,
    summary: 'load, hold, result', sharedBy: ['rockfall']
  },
  substrate_inspection: {
    id: 'substrate_inspection', name: 'Substrate Inspection', screen: null,
    summary: 'prep, drainage, mesh fixing', sharedBy: ['shotcrete']
  },
  application_record: {
    id: 'application_record', name: 'Application Record', screen: null,
    summary: 'area, layers, nozzleman', sharedBy: ['shotcrete']
  },
  thickness_check: {
    id: 'thickness_check', name: 'Thickness Check', screen: null,
    summary: 'pins, probes, cores', sharedBy: ['shotcrete']
  },
  borehole_log: {
    id: 'borehole_log', name: 'Borehole Log', screen: null,
    summary: 'lithology, RQD, recovery', sharedBy: ['drilling']
  },
  core_photos: {
    id: 'core_photos', name: 'Core Photos', screen: null,
    summary: 'per box, wet and dry', sharedBy: ['drilling']
  },
  pipe_install: {
    id: 'pipe_install', name: 'Pipe Install Record', screen: null,
    summary: 'lengths, joints, photos', sharedBy: ['drainage']
  },
  flow_test: {
    id: 'flow_test', name: 'Flow Test Record', screen: null,
    summary: 'L/min, date, weather', sharedBy: ['drainage']
  },
  inspection_checklist: {
    id: 'inspection_checklist', name: 'Inspection Checklist', screen: null,
    summary: 'closeout walkdown', sharedBy: ['rockfall']
  }
};
