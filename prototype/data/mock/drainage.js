/* ============================================================================
   Drainage sample records (Terrace Slip Drainage · DRAFT).
   ----------------------------------------------------------------------------
   Two templates, two QA philosophies, paired on purpose:

     HD1 · horizontal drilled drains. As-built length and inclination are
     genuine construction THRESHOLDS: outside tolerance reopens the run. Flow at
     completion is a FINDING, never a pass mark: a dry drain (0 L/min) recorded
     is complete and confirmable. DR-04 (dry, confirmed) sits beside DR-08
     (short of length, reopened) so one queue teaches both.

     TD1 · collector trench. Carries the before-backfill witness hold, recorded
     as a field in the shotcrete idiom, never an approval flow.

   Flow is recorded at completion only. There is no ongoing flow monitoring:
   that is roadmap, not product.

   Dates are integer day-offsets rendered via agoPhrase. All content is
   placeholder, flagged draft until Rock Control validation.
   ========================================================================== */
export { agoPhrase } from './dates.js';

export const draft = true;

export const engineerSource = { name: 'Terrace Slip drainage design', rev: 'Draft · for validation' };

/* A horizontal drain run. asbuilt_length_m / inclination_deg are checked
   against design (thresholds that reopen). flow_L_min is a recorded finding;
   flowState 'dry' means zero flow was recorded, which is complete, not failed. */
function drain(id, collar, design_length, asbuilt_length, design_incl, asbuilt_incl, flow, state, note) {
  return {
    id: id, zone: 'Slip Face', collar: collar, template: 'HD1',
    design_length_m: design_length, asbuilt_length_m: asbuilt_length,
    design_inclination_deg: design_incl, inclination_deg: asbuilt_incl,
    flow_L_min: flow, flowState: flow == null ? null : (flow === 0 ? 'dry' : 'flowing'),
    collar_photo: state === 'complete', pipeLengths: asbuilt_length == null ? null : Math.ceil(asbuilt_length / 6),
    state: state, note: note || ''
  };
}

export const drains = [
  drain('DR-01', 'Upper Bench', 30.0, 30.2, 5.0, 5.3, 12.0, 'complete'),
  drain('DR-02', 'Upper Bench', 28.0, 27.8, 5.0, 4.6, 3.5, 'complete'),
  drain('DR-03', 'Upper Bench', 32.0, 32.3, 5.0, 5.2, 0.8, 'complete'),
  drain('DR-04', 'Upper Bench', 26.0, 26.1, 5.0, 4.8, 0.0, 'complete'),          // dry at completion, recorded, confirmed
  drain('DR-05', 'Upper Bench', 30.0, 29.7, 5.0, 5.0, 6.2, 'complete'),
  drain('DR-06', 'Upper Bench', 24.0, 24.2, 5.0, 5.4, 1.5, 'complete'),
  drain('DR-07', 'Lower Bench', 28.0, 28.1, 5.0, 4.7, 9.0, 'complete'),
  drain('DR-08', 'Lower Bench', 30.0, 27.9, 5.0, 5.0, null, 'reopened', 'obstruction at 27.9 m · re-drill or record variance'), // short of design, threshold failure
  drain('DR-09', 'Lower Bench', 30.0, 30.0, 5.0, 5.1, null, 'in_progress'),      // drilled, flow test pending
  drain('DR-10', 'Lower Bench', 28.0, null, 5.0, null, null, 'planned'),
  drain('DR-11', 'Lower Bench', 32.0, null, 5.0, null, null, 'planned'),
  drain('DR-12', 'Lower Bench', 26.0, null, 5.0, null, null, 'planned')
];

/* Days-ago offsets and pipe/joint notes for the completed drains, keyed by id. */
export const drainDetail = {
  'DR-01': { installedDaysAgo: 20, flowTestedDaysAgo: 19, weather: 'Dry · 13°C', joints: 5, collarGrout: 'Class G · 1.0 m' },
  'DR-02': { installedDaysAgo: 19, flowTestedDaysAgo: 18, weather: 'Dry · 12°C', joints: 5, collarGrout: 'Class G · 1.0 m' },
  'DR-03': { installedDaysAgo: 18, flowTestedDaysAgo: 17, weather: 'Overcast · 11°C', joints: 6, collarGrout: 'Class G · 1.0 m', strike: 'Damp seam at 14 m' },
  'DR-04': { installedDaysAgo: 16, flowTestedDaysAgo: 15, weather: 'Dry · 14°C', joints: 5, collarGrout: 'Class G · 1.0 m' },
  'DR-05': { installedDaysAgo: 14, flowTestedDaysAgo: 13, weather: 'Showers · 10°C', joints: 5, collarGrout: 'Class G · 1.0 m' },
  'DR-06': { installedDaysAgo: 12, flowTestedDaysAgo: 11, weather: 'Dry · 12°C', joints: 4, collarGrout: 'Class G · 1.0 m' },
  'DR-07': { installedDaysAgo: 9, flowTestedDaysAgo: 8, weather: 'Dry · 13°C', joints: 5, collarGrout: 'Class G · 1.0 m', strike: 'Flowing seam at 22 m' },
  'DR-08': { installedDaysAgo: 3, flowTestedDaysAgo: null, weather: 'Dry · 12°C', joints: 5, collarGrout: 'not yet placed' },
  'DR-09': { installedDaysAgo: 1, flowTestedDaysAgo: null, weather: 'Dry · 11°C', joints: 5, collarGrout: 'Class G · 1.0 m' }
};

/* Collector trench runs (TD1). The before-backfill inspection is a witnessed
   hold recorded as a field. TD-01 is inspected, witnessed and backfilled;
   TD-02 is held at the inspection, awaiting witness. */
function trenchLayers(allOk) {
  return [
    { label: 'Trench excavated to design and fall', ok: true },
    { label: 'Geotextile laid to sides and base', ok: true },
    { label: 'Bedding aggregate placed', ok: allOk },
    { label: '110 mm slotted pipe laid to fall', ok: allOk },
    { label: 'Surround aggregate and wrap complete', ok: allOk }
  ];
}
export const collectorRuns = [
  {
    id: 'TD-01', zone: 'Toe', template: 'TD1', design_length_m: 60.0, asbuilt_length_m: 60.4,
    layers: trenchLayers(true), layer_photos: true, material_certs: true,
    witnessedBy: 'S. Kela', witnessedDaysAgo: 7, backfilled: true, backfilledDaysAgo: 6,
    state: 'complete'
  },
  {
    id: 'TD-02', zone: 'Toe', template: 'TD1', design_length_m: 48.0, asbuilt_length_m: 48.2,
    layers: trenchLayers(false), layer_photos: true, material_certs: false,
    witnessedBy: null, witnessedDaysAgo: null, backfilled: false, backfilledDaysAgo: null,
    state: 'held'
  }
];

/* The outfall the collector runs fall to. A single reference point, recorded
   with a photo on completion. */
export const outfall = { id: 'OUT-1', zone: 'Toe', x: 980, y: 735, photo: true, note: 'Discharges to existing swale' };
