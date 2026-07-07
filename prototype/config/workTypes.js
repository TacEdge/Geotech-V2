/* ============================================================================
   TacEdge Geotech V2.0 · Work-type catalogue (single source of truth)
   ----------------------------------------------------------------------------
   Single source of truth for the Configurable Engine page. Every label,
   template, preset, capture module and matrix chip rendered below the work-type
   selector comes from this object. The page holds no hardcoded work-type
   strings: selecting a work type re-renders from here.

   Merged from the former js/worktypes.js (the six-type UI catalogue) and
   assets/work-types.js (per-type operational fields: item nouns, fieldScreens,
   material, wastage, spec, design). Anchoring absorbs the old 'anchor' profile,
   piling the old 'screwPile' profile. The Benmore job record lives in
   config/projects.js, which reads this catalogue.
   ========================================================================== */
export const WORK_TYPES = {
  anchoring: {
    label: 'Anchoring',
    icon: 'anchor',
    status: 'live',
    geometry: 'point',
    unit: 'each',
    confirmationBasis: 'per_item',
    description: 'Anchors, bolts and nails that stabilise ground and structures.',
    templates: ['Ground anchors', 'Rock bolts', 'Soil nails'],
    exampleTemplate: {
      name: 'Ground anchor · B-series',
      rows: [
        ['Template', 'Ground anchor · B-series'],
        ['Design depth', '17.5 m'],
        ['Working load', '600 kN'],
        ['Bond length', '12.0 m'],
        ['Test regime', 'Proof 1.25× WL · 3 cycles']
      ]
    },
    presets: [
      ['Grout', 'Class G cement grout'],
      ['Unit', '25 kg bags'],
      ['Theoretical', '38 L per anchor'],
      ['Allowance', '×1.35'],
      ['QA rule', 'Variance ≤ 10%']
    ],
    modules: [
      ['Drill Log', 'depth, lithology, flush'],
      ['Grout Log', 'bags, variance, photos'],
      ['Anchor Test Record', 'test results, photos'],
      ['Evidence & Photos', 'general site evidence']
    ],
    matrixChips: ['Drill Log', 'Grout Log', 'Test Record', 'Evidence'],
    item: { singular: 'anchor', plural: 'anchors', idPrefix: 'B' },
    fieldScreens: [
      {
        core: 'Crew Sign-On',
        label: 'Crew Sign-On',
        note: 'JSA + fitness, identical for every work type'
      },
      { core: 'Drill Log', label: 'Drill Log', note: 'depth + lithology, in three taps' },
      {
        core: 'Material Log',
        label: 'Grout Log',
        note: 'bags + auto variance vs the setup preset'
      },
      {
        core: 'Test Record',
        label: 'Anchor Test',
        note: 'photo first, provisional until a PM approves'
      }
    ],
    material: { name: 'Class G cement grout', unit: '25 kg bags', theoretical: '38 L per anchor' },
    wastage: {
      label: 'Bagged grout, rotary-drilled',
      factor: 1.35,
      display: '×1.35',
      flagAt: '> ×1.35'
    },
    spec: { name: 'WSP anchor schedule', rev: 'Rev B · 12 May 2026' },
    design: { depth: '17.5 m', load: '600 kN', testRegime: 'Proof 1.25× WL · 3 cycles' }
  },

  drilling: {
    label: 'Drilling',
    icon: 'drill',
    status: 'live',
    geometry: 'point',
    unit: 'm',
    confirmationBasis: 'per_run',
    description: 'Investigation and production holes where the drill record is the deliverable.',
    templates: ['Cored investigation', 'Open hole', 'Instrumentation'],
    exampleTemplate: {
      name: 'Cored investigation · HQ3',
      rows: [
        ['Template', 'Cored investigation · HQ3'],
        ['Core size', 'HQ3 · 63.5 mm'],
        ['Run length', '1.5 m'],
        ['Sampling', 'SPT at 1.5 m in soils'],
        ['Logging', 'Recovery, RQD, lithology per run']
      ]
    },
    presets: [
      ['Flush', 'Water or polymer'],
      ['Core boxes', '1.0 m rows, labelled'],
      ['Sampling', 'SPT at 1.5 m intervals'],
      ['Photos', 'Per box, wet and dry'],
      ['QA rule', 'Every run fully logged']
    ],
    modules: [
      ['Borehole Log', 'lithology, RQD, recovery'],
      ['Core Photos', 'per box, wet and dry'],
      ['Sample Register', 'depth, type, custody'],
      ['Water Observations', 'strikes, rest levels']
    ],
    matrixChips: ['Borehole Log', 'Core Photos', 'Samples', 'Water'],
    // One deep template. Confirmation is per run: each 1.5 m core run is logged
    // and confirmed on its own, and runs roll up under their hole. Open hole and
    // instrumentation stay configured examples only. QA confirms the RECORD,
    // never the ground: the rules are completeness and custody only. Low
    // recovery or RQD is a finding, not a failure.
    workItemTemplates: [
      {
        code: 'HQ3',
        name: 'Cored investigation',
        geometry: 'point',
        unit: 'm',
        confirmationBasis: 'per_run',
        runIs: 'core run',
        item: { singular: 'hole', plural: 'holes', idPrefix: 'BH' },
        runItem: { singular: 'run', plural: 'runs', idPrefix: 'R' },
        spec: [
          ['Core size', 'HQ3 · 63.5 mm'],
          ['Run length', '1.5 m'],
          ['SPT', '1.5 m intervals in soils'],
          ['Core boxes', '1.0 m rows, labelled'],
          ['Photos', 'Per box, wet and dry']
        ],
        moduleIds: ['borehole_log', 'core_photos', 'sample_register', 'evidence'],
        rules: [
          { type: 'completeness', scope: 'run', fields: ['from', 'to', 'recovery_pct', 'rqd_pct', 'lithology'], label: 'Every run logged · from, to, recovery, RQD, lithology' },
          { type: 'completeness', scope: 'box', fields: ['photo_wet', 'photo_dry'], label: 'Each core box photographed wet and dry' },
          { type: 'completeness', scope: 'sample', fields: ['depth', 'type', 'sample_id', 'dispatch_docket'], label: 'Every sample has depth, type, ID and dispatch docket' },
          { type: 'sequence', order: ['borehole_log', 'core_photos', 'sample_register'], note: 'Logged and photographed before dispatch', label: 'Logged and photographed before dispatch' }
        ]
      }
    ],
    evidenceRequirements: [
      { kind: 'photo', scope: 'per box', label: 'Core box photo, wet and dry' },
      { kind: 'record', scope: 'per sample batch', label: 'Dispatch docket' },
      { kind: 'photo', scope: 'per hole', label: 'Completion photo at collar' }
    ],
    moduleIds: ['borehole_log', 'core_photos', 'sample_register', 'evidence'],
    item: { singular: 'hole', plural: 'holes', idPrefix: 'BH' },
    runItem: { singular: 'run', plural: 'runs', idPrefix: 'R' },
    // Union of the typed rules; completeness and custody only, no thresholds.
    rules: [
      { type: 'completeness', scope: 'run', fields: ['from', 'to', 'recovery_pct', 'rqd_pct', 'lithology'], label: 'Every run logged · from, to, recovery, RQD, lithology' },
      { type: 'completeness', scope: 'box', fields: ['photo_wet', 'photo_dry'], label: 'Each core box photographed wet and dry' },
      { type: 'completeness', scope: 'sample', fields: ['depth', 'type', 'sample_id', 'dispatch_docket'], label: 'Every sample has depth, type, ID and dispatch docket' },
      { type: 'sequence', order: ['borehole_log', 'core_photos', 'sample_register'], note: 'Logged and photographed before dispatch', label: 'Logged and photographed before dispatch' }
    ]
  },

  shotcrete: {
    label: 'Shotcrete',
    icon: 'spray',
    status: 'live',
    geometry: 'area',
    unit: 'm2',
    confirmationBasis: 'per_lot',
    description: 'Sprayed concrete support, from substrate prep to strength results.',
    templates: ['Mesh reinforced', 'Fibre reinforced', 'Sealing coat'],
    exampleTemplate: {
      name: 'Mesh reinforced · S1',
      rows: [
        ['Template', 'Mesh reinforced · S1'],
        ['Design thickness', '100 mm · min 75 mm'],
        ['Mix', '40 MPa · 10 mm aggregate'],
        ['Reinforcement', 'SE62 mesh · 50 mm cover'],
        ['Test panels', '1 per shift']
      ]
    },
    presets: [
      ['Mix', '40 MPa sprayed'],
      ['Unit', 'm³ delivered'],
      ['Theoretical', '0.10 m³ per m²'],
      ['Allowance', '×1.40 rebound'],
      ['QA rule', '28-day cores ≥ 40 MPa']
    ],
    modules: [
      ['Substrate Inspection', 'prep, drainage, mesh fixing'],
      ['Batch Record', 'dockets, mix, slump'],
      ['Application Record', 'area, layers, nozzleman'],
      ['Thickness Check', 'pins, probes, cores']
    ],
    matrixChips: ['Substrate', 'Batch', 'Application', 'Thickness'],
    // One deep template. A lot is a spray shift: the panels sprayed in one
    // shift share batch dockets and one test panel, and the lot carries the
    // 28-day core clock. Fibre reinforced and sealing coat stay examples only.
    workItemTemplates: [
      {
        code: 'S1',
        name: 'Mesh reinforced',
        geometry: 'area',
        unit: 'm2',
        confirmationBasis: 'per_lot',
        lotIs: 'spray shift',
        item: { singular: 'panel', plural: 'panels', idPrefix: 'SC' },
        lotItem: { singular: 'spray lot', plural: 'spray lots', idPrefix: 'SL' },
        spec: [
          ['Design thickness', '100 mm · min 75 mm'],
          ['Mix', '40 MPa · 10 mm aggregate'],
          ['Reinforcement', 'SE62 mesh · 50 mm cover'],
          ['Test panel', '1 per shift']
        ],
        moduleIds: ['substrate_inspection', 'application_record', 'thickness_check', 'evidence'],
        rules: [
          { type: 'witness_hold', module: 'substrate_inspection', note: 'Substrate signed off before spraying', label: 'Substrate signed off before spraying (hold point)' },
          { type: 'sequence', order: ['substrate_inspection', 'application_record', 'thickness_check'], label: 'Substrate, then spray, then thickness, in order' },
          { type: 'threshold', field: 'thickness_mean_mm', op: '>=', value: 100, unit: 'mm', label: 'Mean thickness ≥ 100 mm' },
          { type: 'threshold', field: 'thickness_min_mm', op: '>=', value: 75, unit: 'mm', label: 'Minimum thickness ≥ 75 mm' },
          { type: 'deferred_result', test: 'core_28d', op: '>=', value_MPa: 40, days: 28, label: '28-day core strength ≥ 40 MPa' },
          { type: 'completeness', fields: ['dockets', 'nozzleman_ticket'], label: 'Batch dockets and nozzleman ticket recorded' }
        ]
      }
    ],
    evidenceRequirements: [
      { kind: 'photo', scope: 'per panel', label: 'Photo of substrate before spray' },
      { kind: 'record', scope: 'per lot', label: 'Batch dockets' },
      { kind: 'certificate', scope: 'per lot', label: 'Lab strength certificate' }
    ],
    moduleIds: ['substrate_inspection', 'application_record', 'thickness_check', 'evidence'],
    item: { singular: 'panel', plural: 'panels', idPrefix: 'SC' },
    lotItem: { singular: 'spray lot', plural: 'spray lots', idPrefix: 'SL' },
    // Union of the typed acceptance rules; module screens filter this by field.
    rules: [
      { type: 'witness_hold', module: 'substrate_inspection', note: 'Substrate signed off before spraying', label: 'Substrate signed off before spraying (hold point)' },
      { type: 'sequence', order: ['substrate_inspection', 'application_record', 'thickness_check'], label: 'Substrate, then spray, then thickness, in order' },
      { type: 'threshold', field: 'thickness_mean_mm', op: '>=', value: 100, unit: 'mm', label: 'Mean thickness ≥ 100 mm' },
      { type: 'threshold', field: 'thickness_min_mm', op: '>=', value: 75, unit: 'mm', label: 'Minimum thickness ≥ 75 mm' },
      { type: 'deferred_result', test: 'core_28d', op: '>=', value_MPa: 40, days: 28, label: '28-day core strength ≥ 40 MPa' },
      { type: 'completeness', fields: ['dockets', 'nozzleman_ticket'], label: 'Batch dockets and nozzleman ticket recorded' }
    ]
  },

  rockfall: {
    label: 'Rockfall protection',
    icon: 'mesh',
    status: 'live',
    geometry: 'area',  // panels area + pins point; mix noted per template
    unit: 'm2',
    confirmationBasis: 'per_lot',
    description: 'Mesh, fences and scaling that manage rockfall hazard.',
    templates: ['Drapery mesh', 'Catch fence', 'Scaling'],
    exampleTemplate: {
      name: 'Drapery mesh · DM1',
      rows: [
        ['Template', 'Drapery mesh · DM1'],
        ['Mesh', 'High tensile · 3.5 m roll'],
        ['Top anchors', 'Grouted pins at 3.0 m centres'],
        ['Pin proof load', '50 kN'],
        ['Overlap', '≥ 300 mm, laced']
      ]
    },
    presets: [
      ['Pins', '25 mm bar · 3.0 m'],
      ['Grout', 'Class G cement grout'],
      ['Fixings', 'Shackles, serials recorded'],
      ['Certification', 'System components traceable'],
      ['QA rule', 'Pull test ≥ 50 kN, no creep']
    ],
    modules: [
      ['Pin Install Record', 'depth, grout, photos'],
      ['Pull Test Record', 'load, hold, result'],
      ['Panel Install Record', 'laps, lacing, fixings'],
      ['Inspection Checklist', 'closeout walkdown']
    ],
    matrixChips: ['Pin Install', 'Pull Test', 'Panel Install', 'Inspection'],
    // First mixed-geometry work type: two template-complete work-item designs
    // with their own geometry, unit and confirmation basis. Catch fence and
    // scaling stay configured examples only (names in the templates list).
    workItemTemplates: [
      {
        code: 'DM1',
        name: 'Drapery mesh',
        geometry: 'area',
        unit: 'm2',
        confirmationBasis: 'per_lot',
        item: { singular: 'panel', plural: 'panels', idPrefix: 'MP' },
        spec: [
          ['Mesh', 'High-tensile steel · 3.5 m roll'],
          ['Overlap', '≥ 300 mm, laced'],
          ['Fixings', 'Shackles, serials recorded']
        ],
        moduleIds: ['panel_install', 'inspection_checklist', 'evidence'],
        rules: [
          { type: 'threshold', field: 'overlap_mm', op: '>=', value: 300, unit: 'mm', label: 'Mesh overlap ≥ 300 mm, laced' },
          { type: 'completeness', fields: ['serials'], label: 'Fixing shackle serials recorded' },
          { type: 'sequence', requires: 'CP1 pins confirmed before lot confirmation', label: 'CP1 pins confirmed before a lot can be confirmed' }
        ]
      },
      {
        code: 'CP1',
        name: 'Crest pins',
        geometry: 'point',
        unit: 'each',
        confirmationBasis: 'per_item',
        item: { singular: 'pin', plural: 'pins', idPrefix: 'PN' },
        spec: [
          ['Bar', '25 mm bar · 3.0 m'],
          ['Grout', 'Class G cement grout'],
          ['Spacing', '3.0 m centres'],
          ['Proof load', '50 kN · 5 min hold']
        ],
        moduleIds: ['pin_install', 'pull_test', 'evidence'],
        rules: [
          { type: 'threshold', field: 'pull_load_kN', op: '>=', value: 50, unit: 'kN', label: 'Pull test ≥ 50 kN, 5 min hold, no creep' },
          { type: 'completeness', fields: ['depth', 'grout_batch'], label: 'Depth and grout batch recorded' }
        ]
      }
    ],
    evidenceRequirements: [
      { kind: 'photo', scope: 'per panel', label: 'Photo per mesh panel' },
      { kind: 'photo', scope: 'per pin', label: 'Photo per crest pin' },
      { kind: 'certificate', scope: 'per mesh batch', label: 'Component certificate per mesh batch' }
    ],
    // Union of module ids across both templates (config/modules.js ids).
    moduleIds: ['pin_install', 'pull_test', 'panel_install', 'inspection_checklist', 'evidence'],
    item: { singular: 'panel', plural: 'panels', idPrefix: 'MP' },
    // Union of the typed acceptance rules; per-template detail lives in
    // workItemTemplates. Module screens filter this list by field.
    rules: [
      { type: 'threshold', field: 'overlap_mm', op: '>=', value: 300, unit: 'mm', label: 'Mesh overlap ≥ 300 mm, laced' },
      { type: 'completeness', fields: ['serials'], label: 'Fixing shackle serials recorded' },
      { type: 'sequence', requires: 'CP1 pins confirmed before lot confirmation', label: 'CP1 pins confirmed before a lot can be confirmed' },
      { type: 'threshold', field: 'pull_load_kN', op: '>=', value: 50, unit: 'kN', label: 'Pull test ≥ 50 kN, 5 min hold, no creep' },
      { type: 'completeness', fields: ['depth', 'grout_batch'], label: 'Depth and grout batch recorded' }
    ]
  },

  drainage: {
    label: 'Drainage',
    icon: 'drop',
    status: 'configured',
    geometry: 'line',
    unit: 'm',
    confirmationBasis: 'per_run',
    description: 'Drilled and trenched drains that control groundwater.',
    templates: ['Horizontal drains', 'Trench drains', 'Weep holes'],
    exampleTemplate: {
      name: 'Horizontal drain · HD1',
      rows: [
        ['Template', 'Horizontal drain · HD1'],
        ['Design length', '30.0 m'],
        ['Inclination', '+5°'],
        ['Screen', '40 mm slotted PVC'],
        ['Acceptance', 'Flow recorded at collar']
      ]
    },
    presets: [
      ['Pipe', '40 mm slotted PVC · 6 m lengths'],
      ['Collar', 'Class G grout · top 1.0 m'],
      ['Flow unit', 'L/min at collar'],
      ['Evidence', 'Photo at collar and outfall'],
      ['QA rule', 'As-built length ± 0.5 m']
    ],
    modules: [
      ['Drill Log', 'depth, inclination, strikes'],
      ['Pipe Install Record', 'lengths, joints, photos'],
      ['Flow Test Record', 'L/min, date, weather'],
      ['Evidence & Photos', 'collar and outfall']
    ],
    matrixChips: ['Drill Log', 'Pipe Install', 'Flow Test', 'Photos']
  },

  piling: {
    label: 'Piling / retaining',
    icon: 'piles',
    status: 'live',
    geometry: 'point',
    unit: 'each',
    confirmationBasis: 'per_item',
    description: 'Piles and retaining structures from installation to proof.',
    templates: ['Screw piles', 'Bored piles', 'Pole retaining'],
    exampleTemplate: {
      name: 'Screw pile · SP1',
      rows: [
        ['Template', 'Screw pile · SP1'],
        ['Shaft', '76 mm · helix 300 mm'],
        ['Min depth', '4.0 m'],
        ['Target torque', '8 kNm sustained'],
        ['Verticality', '≤ 2°']
      ]
    },
    presets: [
      ['Pile', 'Grade 350 steel · galvanised'],
      ['Unit', 'each'],
      ['Torque check', 'Calibrated head · daily'],
      ['Cut-off', '± 10 mm to level'],
      ['QA rule', 'Torque ≥ 8 kNm at ≥ 4.0 m']
    ],
    modules: [
      ['Install / Torque Log', 'torque vs depth'],
      ['Verticality Check', 'two axes'],
      ['Cut-off Record', 'level, cap detail'],
      ['Evidence & Photos', 'founding and cut-off']
    ],
    matrixChips: ['Torque Log', 'Verticality', 'Cut-off', 'Photos'],
    item: { singular: 'pile', plural: 'piles', idPrefix: 'SP' },
    fieldScreens: [
      {
        core: 'Crew Sign-On',
        label: 'Crew Sign-On',
        note: 'JSA + fitness, identical for every work type'
      },
      { core: 'Drill Log', label: 'Install Log', note: 'depth + torque, in three taps' },
      {
        core: 'Material Log',
        label: 'Grout Log',
        note: 'structural grout + auto variance vs the setup preset'
      },
      {
        core: 'Test Record',
        label: 'Pile Test',
        note: 'photo first, provisional until a PM approves'
      }
    ],
    material: {
      name: 'Structural grout, self-drilling',
      unit: '25 kg bags',
      theoretical: '95 L per pile'
    },
    wastage: {
      label: 'Self-drilling, high overbreak',
      factor: 3.0,
      display: '×2.0 to ×4.0',
      range: '200 to 400%',
      flagAt: '> ×4.0'
    },
    spec: { name: 'Screw pile design set', rev: 'Rev C · 18 Jun 2026' },
    design: { depth: '12.0 m', load: '450 kN', testRegime: 'Installation torque + proof load' },
    // Capture modules this work type loads, by config/modules.js id.
    moduleIds: ['torque_log', 'verticality_cutoff', 'evidence'],
    // Acceptance criteria as typed rule objects (kinds from config/qa.js RULE_TYPES).
    // Data only: there is no rule engine. The QA screens read these to describe
    // what a record must satisfy before it can be confirmed.
    rules: [
      {
        type: 'threshold', field: 'torque', op: '>=', value: 8, unit: 'kNm',
        qualifier: { field: 'depth', op: '>=', value: 4.0, unit: 'm' },
        label: 'Torque ≥ 8 kNm sustained at ≥ 4.0 m depth'
      },
      {
        type: 'threshold', field: 'verticality', op: '<=', value: 2, unit: '°',
        label: 'Verticality ≤ 2° from vertical'
      },
      {
        type: 'threshold', field: 'cutoff', op: 'tolerance', value: 10, unit: 'mm',
        label: 'Cut-off within ± 10 mm to design level'
      }
    ]
  }
};
