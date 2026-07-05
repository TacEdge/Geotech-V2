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
    status: 'configured',
    geometry: 'point',
    unit: 'each',
    confirmationBasis: 'per_item',
    description: 'Investigation and production holes where the drill record is the deliverable.',
    templates: ['Cored investigation', 'Open hole', 'Instrumentation'],
    exampleTemplate: {
      name: 'Cored investigation · HQ3',
      rows: [
        ['Template', 'Cored investigation · HQ3'],
        ['Design depth', '25.0 m'],
        ['Core size', 'HQ3 · 63.5 mm'],
        ['Run length', '1.5 m'],
        ['Logging', 'RQD and recovery per run']
      ]
    },
    presets: [
      ['Flush', 'Water or polymer'],
      ['Core boxes', '1.0 m rows, labelled'],
      ['Sampling', 'SPT at 1.5 m intervals'],
      ['Photos', 'Per box, wet and dry'],
      ['QA rule', 'Recovery ≥ 95% per run']
    ],
    modules: [
      ['Borehole Log', 'lithology, RQD, recovery'],
      ['Core Photos', 'per box, wet and dry'],
      ['Sample Register', 'depth, type, custody'],
      ['Water / Flush Log', 'strikes, losses, returns']
    ],
    matrixChips: ['Borehole Log', 'Core Photos', 'Samples', 'Flush Log']
  },

  shotcrete: {
    label: 'Shotcrete',
    icon: 'spray',
    status: 'configured',
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
    matrixChips: ['Substrate', 'Batch', 'Application', 'Thickness']
  },

  rockfall: {
    label: 'Rockfall protection',
    icon: 'mesh',
    status: 'configured',
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
    matrixChips: ['Pin Install', 'Pull Test', 'Panel Install', 'Inspection']
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
    status: 'configured',
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
