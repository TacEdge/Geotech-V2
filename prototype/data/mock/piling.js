/* ============================================================================
   TACEDGE Ground Engineering · Piling content pack (mock, draft)
   ----------------------------------------------------------------------------
   Field-module records for the Cashmere Ridge screw-piling demo. Stage 1.1
   ships the capture-side data: two filled Torque Log records (torque-vs-depth
   series), one Verticality & Cut-off record, and the pending item that seeds
   the QA-queue story. The setup-screen content (testing standards, evidence,
   design sheets, safety, plan, dashboards) is added when the lifecycle is
   wired in Stage 1.3.

   draft:true until the owner validates the pack (cleared in Stage 1.4). No
   screen consumes this yet, so nothing renders from it.
   ========================================================================== */

export const draft = true;

/* Two installed piles, each with a torque-vs-depth series. Sustained target is
   8 kNm at >= 4.0 m (see the piling work type's typed rules). */
export const torqueLogs = [
  {
    pile: 'SP-01',
    zone: 'Upper Bench',
    template: 'Screw pile · SP1',
    operator: 'S. Kela',
    crew: 'Team 1',
    date: '3 Jul 2026',
    rig: 'Excavator-mounted head · calibrated 1 Jul',
    series: [
      { depth: 1.0, torque: 2.9 },
      { depth: 2.0, torque: 4.2 },
      { depth: 3.0, torque: 5.6 },
      { depth: 4.0, torque: 7.1 },
      { depth: 5.0, torque: 7.9 },
      { depth: 6.0, torque: 8.2 },
      { depth: 7.0, torque: 8.4 },
      { depth: 8.0, torque: 8.6 },
      { depth: 9.0, torque: 8.7 },
      { depth: 10.0, torque: 8.9 },
      { depth: 11.0, torque: 9.1 },
      { depth: 12.1, torque: 9.2 }
    ],
    finalDepth: '12.1 m',
    finalTorque: '9.2 kNm',
    sustainedFrom: '4.1 m',
    result: 'Pass',
    note: 'Sustained torque reached above 4.0 m; founded at 12.1 m.'
  },
  {
    pile: 'SP-02',
    zone: 'Upper Bench',
    template: 'Screw pile · SP1',
    operator: 'S. Kela',
    crew: 'Team 1',
    date: '3 Jul 2026',
    rig: 'Excavator-mounted head · calibrated 1 Jul',
    series: [
      { depth: 1.0, torque: 3.0 },
      { depth: 2.0, torque: 4.5 },
      { depth: 3.0, torque: 5.9 },
      { depth: 4.0, torque: 7.4 },
      { depth: 5.0, torque: 8.0 },
      { depth: 6.0, torque: 8.1 },
      { depth: 7.0, torque: 8.2 },
      { depth: 8.0, torque: 8.3 },
      { depth: 9.0, torque: 8.4 },
      { depth: 10.0, torque: 8.5 },
      { depth: 11.0, torque: 8.5 },
      { depth: 12.3, torque: 8.6 }
    ],
    finalDepth: '12.3 m',
    finalTorque: '8.6 kNm',
    sustainedFrom: '4.6 m',
    result: 'Pass',
    note: 'Slightly deeper founding to reach sustained torque; within tolerance.'
  }
];

/* One verticality & cut-off record (two-axis tilt, cut-off level, cap detail). */
export const verticalityRecords = [
  {
    pile: 'SP-01',
    zone: 'Upper Bench',
    axisX: '0.8°',
    axisY: '1.1°',
    resultant: '1.4°',
    tolerance: '≤ 2°',
    verticalityResult: 'Pass',
    cutoffLevel: '+6 mm',
    cutoffTolerance: '± 10 mm',
    cutoffResult: 'Pass',
    cap: '150 × 150 × 12 mm plate · 4 × M20',
    by: 'S. Kela',
    date: '3 Jul 2026',
    note: 'Within tolerance on both axes; cut-off trimmed to +6 mm.'
  }
];

/* The item left pending for the QA-queue story (torque short of target). Matches
   project item SP-05 in config/projects.js. */
export const pendingItem = {
  pile: 'SP-05',
  zone: 'Upper Bench',
  reason: 'Torque below target',
  detail: 'Final sustained torque 7.8 kNm, below the 8 kNm target; awaiting PM decision (accept, monitor, or re-install).',
  state: 'pending'
};

/* ============================================================================
   Setup-screen content (wired in Stage 1.3). Mirrors the anchoring pack shapes
   so the Stage 0.3 screens render piling content when Cashmere Ridge is active.
   Fictional placeholder content, flagged draft for owner review.
   ========================================================================== */

/* --- Testing Standards ---------------------------------------------------- */
export const testingStandards = [
  {
    code: 'TS-P1', colour: '#6e8b3d', badge: 'Active', badgeClass: 'inuse',
    name: 'Screw pile installation torque test', summary: 'Sustained torque · all piles',
    type: 'Installation test', usedBy: 'Used by 1 design', governing: 'TS-P1',
    criteria: [
      { name: 'Sustained torque', val: '≥ 8 kNm', cond: 'Held over final 0.5 m' },
      { name: 'Minimum depth', val: '≥ 4.0 m', cond: 'Before target torque counts' },
      { name: 'Verticality', val: '≤ 2°', cond: 'Two-axis, at cut-off' },
      { name: 'Cut-off tolerance', val: '± 10 mm', cond: 'To design level' }
    ],
    appliesMeta: '1 design · 12 planned piles',
    appliesTo: [
      { colour: '#6e8b3d', code: 'SP1', name: 'Standard screw pile', zone: 'Upper Bench', count: '9 piles' },
      { colour: '#2f9089', code: 'SP2', name: 'Deep screw pile', zone: 'Upper Bench', count: '3 piles' }
    ]
  },
  {
    code: 'TS-P2', colour: '#2f9089', badge: 'Draft', badgeClass: 'draft',
    name: 'Proof load test (witness)', summary: 'Proof 1.5× WL · sampled',
    type: 'Proof test', usedBy: 'Used by 1 design', governing: 'TS-P2',
    criteria: [
      { name: 'Proof load', val: '1.5 × working load', cond: 'Applied and held' },
      { name: 'Load hold', val: '15 minutes', cond: 'At proof load' },
      { name: 'Creep · final cycle', val: '≤ 1.0 mm', cond: 'Measured 1–15 min' },
      { name: 'Sampling', val: '1 in 10 piles', cond: 'Engineer-witnessed' }
    ],
    appliesMeta: '1 design · sampled piles',
    appliesTo: [
      { colour: '#6e8b3d', code: 'SP1', name: 'Standard screw pile', zone: 'Upper Bench', count: 'sampled' }
    ]
  }
];

/* --- Evidence & QA -------------------------------------------------------- */
export const evidenceRequirements = [
  {
    code: 'EV-P1', colour: '#6e7d5c', icon: '<path d="M12 3v4M4.2 8l3.4 2M16.4 14l3.4 2"/><circle cx="10" cy="10" r="2.6"/>',
    name: 'Founding torque log', badge: 'Required', badgeClass: 'req',
    summary: 'Record · Blocks confirmation', type: 'Record', status: 'Blocks confirmation',
    spec: 'A complete torque-vs-depth log to founding, showing sustained target torque reached at or below the minimum depth.',
    criteria: [
      { k: 'Minimum', v: 'Full series to founding' },
      { k: 'Target', v: '≥ 8 kNm sustained' },
      { k: 'Depth', v: 'Target met at ≥ 4.0 m' },
      { k: 'When', v: 'At installation' }
    ],
    appliesTo: [
      { k: 'Designs', cls: 'k-design', v: 'All screw pile designs' },
      { k: 'Operations', cls: 'k-work', v: 'Installation' },
      { k: 'Zones (optional)', cls: 'k-design', v: 'All zones' }
    ],
    reason: 'The torque log is the primary proof of founding for a screw pile.'
  },
  {
    code: 'EV-P2', colour: '#6e8b3d', icon: '<path d="M12 3v18M12 3l4 5M12 3l-4 5"/>',
    name: 'Verticality & cut-off record', badge: 'Required', badgeClass: 'req',
    summary: 'Record · Blocks confirmation', type: 'Record', status: 'Blocks confirmation',
    spec: 'Two-axis verticality at cut-off and the cut-off level against design, with cap detail.',
    criteria: [
      { k: 'Verticality', v: '≤ 2° resultant' },
      { k: 'Cut-off', v: '± 10 mm to level' },
      { k: 'Cap', v: 'Detail recorded' },
      { k: 'When', v: 'After trim' }
    ],
    appliesTo: [
      { k: 'Designs', cls: 'k-design', v: 'All screw pile designs' },
      { k: 'Operations', cls: 'k-work', v: 'Cut-off' },
      { k: 'Zones (optional)', cls: 'k-design', v: 'All zones' }
    ],
    reason: 'Verticality and cut-off govern how the cap and structure bear on the pile.'
  },
  {
    code: 'EV-P3', colour: '#6e8b3d', icon: '<rect x="3" y="6" width="14" height="10" rx="2"/><circle cx="10" cy="11" r="2.6"/><path d="M7 6l1.1-2h3.8L13 6"/>',
    name: 'Founding photo', badge: 'Required', badgeClass: 'req',
    summary: 'Photo · Blocks confirmation', type: 'Photo', status: 'Blocks confirmation',
    spec: 'A clear photo of the installed pile at founding, before cut-off trimming.',
    criteria: [
      { k: 'Minimum', v: '1 photo' },
      { k: 'Subject', v: 'Pile head at founding' },
      { k: 'Capture', v: 'Geotagged on device' },
      { k: 'When', v: 'Before trim' }
    ],
    appliesTo: [
      { k: 'Designs', cls: 'k-design', v: 'All screw pile designs' },
      { k: 'Operations', cls: 'k-work', v: 'Installation' },
      { k: 'Zones (optional)', cls: 'k-design', v: 'All zones' }
    ],
    reason: 'Photographic record of founding before it is trimmed and capped.'
  },
  {
    code: 'EV-P4', colour: '#cf8e2c', icon: '<rect x="3" y="6" width="14" height="10" rx="2"/><circle cx="10" cy="11" r="2.6"/><path d="M7 6l1.1-2h3.8L13 6"/>',
    name: 'Cut-off photo', badge: 'Advisory', badgeClass: 'cond',
    summary: 'Photo · Advisory', type: 'Photo', status: 'Advisory',
    spec: 'A photo of the trimmed cut-off and cap plate. Advisory, does not block confirmation.',
    criteria: [
      { k: 'Minimum', v: '1 photo' },
      { k: 'Subject', v: 'Cut-off and cap' },
      { k: 'When', v: 'After trim' }
    ],
    appliesTo: [
      { k: 'Designs', cls: 'k-design', v: 'All screw pile designs' },
      { k: 'Operations', cls: 'k-work', v: 'Cut-off' }
    ],
    reason: 'Helpful for the record; not a confirmation gate.'
  }
];
export const evidenceFoot = '4 requirements defined · 3 block confirmation · ready for Safety & Risk';

/* --- Work Item Template ----------------------------------------------------- */
export const designSheets = [
  {
    code: 'SP1', colour: '#6e8b3d', name: 'Standard screw pile', summary: '12.0 m · 8 kNm',
    badgeClass: 'inuse', badge: 'In use', type: 'Screw pile',
    inUse: 'In use by 9 piles', engineerSource: 'Cashmere Ridge design set · Rev C · 18 Jun 2026',
    params: [
      { k: 'Design depth', v: '12.0 m' },
      { k: 'Target torque', v: '8 kNm sustained' },
      { k: 'Working load', v: '450 kN' },
      { k: 'Verticality', v: '≤ 2°' }
    ],
    construction: {
      tendon: '76 mm shaft · 300 mm helix', barSpec: 'Grade 350 · galvanised',
      hole: 'Displacement', grout: 'Structural grout, self-drilling', drill: 'Excavator head',
      notes: 'Standard screw pile for Upper Bench retention.'
    },
    testRegime: 'Installation torque + proof load',
    material: [
      { k: 'Material', v: '25 kg bags · structural grout' },
      { k: 'Theoretical usage', v: '95 L per pile' },
      { k: 'Wastage allowance', v: '×3.0' },
      { k: 'Over-allowance result', v: '> ×4.0 flagged for QA' }
    ],
    usedInPlan: [
      { colour: '#6e8b3d', zone: 'Upper Bench', rng: 'SP-01–SP-09 · ', count: '9 piles' }
    ]
  },
  {
    code: 'SP2', colour: '#2f9089', name: 'Deep screw pile', summary: '13.0 m · 8 kNm',
    badgeClass: 'draft', badge: 'Draft', type: 'Screw pile',
    inUse: 'In use by 3 piles', engineerSource: 'Cashmere Ridge design set · Rev C · 18 Jun 2026',
    params: [
      { k: 'Design depth', v: '13.0 m' },
      { k: 'Target torque', v: '8 kNm sustained' },
      { k: 'Working load', v: '480 kN' },
      { k: 'Verticality', v: '≤ 2°' }
    ],
    construction: {
      tendon: '76 mm shaft · 300 mm helix', barSpec: 'Grade 350 · galvanised',
      hole: 'Displacement', grout: 'Structural grout, self-drilling', drill: 'Excavator head',
      notes: 'Deeper variant for the lower corner of the bench.'
    },
    testRegime: 'Installation torque + proof load',
    material: [
      { k: 'Material', v: '25 kg bags · structural grout' },
      { k: 'Theoretical usage', v: '104 L per pile' },
      { k: 'Wastage allowance', v: '×3.0' },
      { k: 'Over-allowance result', v: '> ×4.0 flagged for QA' }
    ],
    usedInPlan: [
      { colour: '#2f9089', zone: 'Upper Bench', rng: 'SP-10–SP-12 · ', count: '3 piles' }
    ]
  }
];
export const materialPresets = [
  { value: '3.0', label: 'Self-drilling screw pile (200–400%)', sel: true },
  { value: '1.5', label: 'Pumped grout, cased (×1.50)', sel: false },
  { value: '1.35', label: 'Bagged grout (×1.35)', sel: false },
  { value: 'custom', label: 'Custom…', sel: false }
];

/* --- Safety & Risk -------------------------------------------------------- */
export const safetyDocs = [
  {
    code: 'JSA-P1', colour: '#112411',
    icon: '<path d="M10 2.5 4 5v4.5c0 3.6 2.6 6.6 6 8 3.4-1.4 6-4.4 6-8V5z"/><path d="M7.5 10l1.8 1.8L13 8"/>',
    name: 'JSA · Screw piling works', listBadge: { cls: 'active', text: 'Active' },
    type: 'JSA', status: 'Governs all installation', badge: { cls: 'active', text: 'Active' },
    srcmeta: 'Uploaded 20 Jun 2026 · Tim R. · PDF · 1.1 MB',
    scope: [
      { sk: 'Work types', cls: 'k-work', v: 'All screw piling' },
      { sk: 'Zones', cls: 'k-design', v: 'Upper Bench' }
    ],
    gate: [
      { state: 'on', html: '<b>Active.</b> No one installs until they have signed on and acknowledged this JSA.' },
      { state: 'on', html: '<b>Today:</b> 0 of 4 crew signed on so far.' }
    ]
  },
  {
    code: 'SWMS-P1', colour: '#6e7d5c',
    icon: '<path d="M10 2.5 4 5v4.5c0 3.6 2.6 6.6 6 8 3.4-1.4 6-4.4 6-8V5z"/><path d="M7.5 10l1.8 1.8L13 8"/>',
    name: 'SWMS · Excavator & lifting', listBadge: null,
    type: 'SWMS', status: 'Governs plant & lifting', badge: { cls: 'active', text: 'Active' },
    srcmeta: 'Uploaded 20 Jun 2026 · Tim R. · PDF · 0.8 MB',
    scope: [
      { sk: 'Work types', cls: 'k-work', v: 'Excavator & lifting' },
      { sk: 'Zones', cls: 'k-design', v: 'Upper Bench' }
    ],
    gate: [
      { state: 'on', html: '<b>Active.</b> Acknowledged at sign-on alongside the JSA before plant work.' },
      { state: 'on', html: '<b>Today:</b> 0 of 4 crew signed on so far.' }
    ]
  }
];
export const safetyFoot = '2 safety documents active · scoped · sign-on gate wired';

/* --- Work Plan ------------------------------------------------------------ */
/* Pin cx/cy position the 12 piles on the plan canvas (viewBox 1280x853). */
export const planPins = {
  '1': { id: 'SP-01', zone: 'Upper Bench', zcol: '#6e8b3d', design: 'SP1', dname: 'Standard screw pile', test: 'Torque 8 kNm · proof 1.5×', e: '244,120.4', n: '5,178,240.1', cx: 300, cy: 300 },
  '2': { id: 'SP-02', zone: 'Upper Bench', zcol: '#6e8b3d', design: 'SP1', dname: 'Standard screw pile', test: 'Torque 8 kNm · proof 1.5×', e: '244,124.1', n: '5,178,240.3', cx: 440, cy: 300 },
  '3': { id: 'SP-03', zone: 'Upper Bench', zcol: '#6e8b3d', design: 'SP1', dname: 'Standard screw pile', test: 'Torque 8 kNm · proof 1.5×', e: '244,127.8', n: '5,178,240.5', cx: 580, cy: 300 },
  '4': { id: 'SP-04', zone: 'Upper Bench', zcol: '#6e8b3d', design: 'SP1', dname: 'Standard screw pile', test: 'Torque 8 kNm · proof 1.5×', e: '244,131.5', n: '5,178,240.7', cx: 720, cy: 300 },
  '5': { id: 'SP-05', zone: 'Upper Bench', zcol: '#6e8b3d', design: 'SP1', dname: 'Standard screw pile', test: 'Torque 8 kNm · proof 1.5×', e: '244,135.2', n: '5,178,240.9', cx: 860, cy: 300 },
  '6': { id: 'SP-06', zone: 'Upper Bench', zcol: '#6e8b3d', design: 'SP1', dname: 'Standard screw pile', test: 'Torque 8 kNm · proof 1.5×', e: '244,120.4', n: '5,178,236.1', cx: 300, cy: 430 },
  '7': { id: 'SP-07', zone: 'Upper Bench', zcol: '#6e8b3d', design: 'SP1', dname: 'Standard screw pile', test: 'Torque 8 kNm · proof 1.5×', e: '244,124.1', n: '5,178,236.3', cx: 440, cy: 430 },
  '8': { id: 'SP-08', zone: 'Upper Bench', zcol: '#6e8b3d', design: 'SP1', dname: 'Standard screw pile', test: 'Torque 8 kNm · proof 1.5×', e: '244,127.8', n: '5,178,236.5', cx: 580, cy: 430 },
  '9': { id: 'SP-09', zone: 'Upper Bench', zcol: '#6e8b3d', design: 'SP1', dname: 'Standard screw pile', test: 'Torque 8 kNm · proof 1.5×', e: '244,131.5', n: '5,178,236.7', cx: 720, cy: 430 },
  '10': { id: 'SP-10', zone: 'Upper Bench', zcol: '#2f9089', design: 'SP2', dname: 'Deep screw pile', test: 'Torque 8 kNm · proof 1.5×', e: '244,135.2', n: '5,178,236.9', cx: 860, cy: 430 },
  '11': { id: 'SP-11', zone: 'Upper Bench', zcol: '#2f9089', design: 'SP2', dname: 'Deep screw pile', test: 'Torque 8 kNm · proof 1.5×', e: '244,124.1', n: '5,178,232.3', cx: 440, cy: 560 },
  '12': { id: 'SP-12', zone: 'Upper Bench', zcol: '#2f9089', design: 'SP2', dname: 'Deep screw pile', test: 'Torque 8 kNm · proof 1.5×', e: '244,127.8', n: '5,178,232.5', cx: 580, cy: 560 }
};
export const planZones = [
  { key: 'upper', label: 'Upper Bench', colour: '#6e8b3d', design: 'SP1 · SP2', count: 12 }
];
export const planSummary = {
  source: 'cashmere_ridge_plan.pdf', total: 12, zones: 1, unresolved: 0,
  bannerTitle: 'AI proposal from cashmere_ridge_plan.pdf',
  bannerSub: '12 piles · 1 zone · 0 unresolved',
  summaryTotal: '/ 12',
  summarySub: '1 zone · all designs assigned',
  footText: '12 piles proposed · all designs assigned · 0 unresolved',
  commitText: '12 of 12 piles committed',
  defaultPin: 1
};

/* --- Overview ------------------------------------------------------------- */
var ICON_LAYOUT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 10h16M10 4v16"/></svg>';
var ICON_DESIGN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 20 7.5v9L12 21 4 16.5v-9z"/><path d="M4 7.5 12 12l8-4.5"/><path d="M12 12v9"/></svg>';
var ICON_PLAN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 9.5h16"/><path d="M8 3v4M16 3v4"/></svg>';
var ICON_SHIELD = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 19 6v5c0 5-3 7.6-7 9-4-1.4-7-4-7-9V6z"/><path d="M9 12l2 2 4-4"/></svg>';
var ICON_FOLDER = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8a2 2 0 0 1 2-2h3.4l1.6 1.8H18a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><circle cx="13" cy="13" r="2.3"/></svg>';
var ICON_SHIELD2 = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 19 6v5c0 5-3 7.6-7 9-4-1.4-7-4-7-9V6z"/><path d="M12 8.4v4"/><path d="M12 15.2v.01"/></svg>';
var ICON_DOC = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/><path d="M10 12h6M10 15.5h6"/></svg>';
export const overview = {
  metrics: {
    pct: 25, done: 3, total: 12,
    confirmedLine: '3 of 12 piles confirmed',
    active: 3, awaitingQA: 2, issues: 1,
    statusPill: 'In delivery', targetDate: '22 Aug 2026'
  },
  alerts: [
    { id: 'SP-05', title: 'Torque below target', zone: 'Upper Bench', tagCls: 'action', tagText: 'Action required', href: 'qa-queue.html' }
  ],
  qaChips: ['SP-04', 'SP-06'],
  qaFoot: '2 piles submitted, ready to confirm or reopen.',
  setupCards: [
    { href: 'layout.html', nm: 'Layout', mt: '1 zone', icon: ICON_LAYOUT },
    { href: 'work-item-design.html', nm: 'Work item design', mt: '2 designs', icon: ICON_DESIGN },
    { href: 'work-plan.html', nm: 'Work plan', mt: '12 placed', icon: ICON_PLAN },
    { href: 'testing-standards.html', nm: 'Testing standards', mt: 'Configured', icon: ICON_SHIELD },
    { href: 'evidence-qa.html', nm: 'Evidence & QA', mt: 'Configured', icon: ICON_FOLDER },
    { href: 'safety-risk-controls.html', nm: 'Safety & risk', mt: '2 active', icon: ICON_SHIELD2 },
    { href: 'reference-documents.html', nm: 'Reference documents', mt: '18 documents', icon: ICON_DOC }
  ]
};

/* --- Status Board --------------------------------------------------------- */
/* Piling phase vocabulary; the status board reads this and falls back to the
   anchoring labels when a pack does not define it (so Benmore is unchanged). */
export const boardPhaseLabels = { complete: 'PROOFED', issue: 'RE-INSTALL', active: 'INSTALLED', onhold: 'FOR PROOF', planned: 'PLANNED' };
function pileRec(n, phase, phaseName, work, design, actual, variance, varBad, updated, by, crew, review, reason, findings) {
  return { id: 'SP-' + (n < 10 ? '0' + n : n), zone: 'Upper Bench', phase: phase, phaseName: phaseName, work: work,
    design: design, actual: actual, variance: variance, varBad: varBad, updated: updated, by: by, crew: crew,
    review: review, reason: reason, findings: findings, gidx: n };
}
export const boardAnchors = {
  'SP-01': pileRec(1, 'complete', 'Proofed', 'Proofed', '12.0 m', '12.1 m', '+0.1 m', false, '2 days ago', 'S. Kela', 'Team 1', 'Confirmed', '', ''),
  'SP-02': pileRec(2, 'complete', 'Proofed', 'Proofed', '12.0 m', '12.3 m', '+0.3 m', false, '2 days ago', 'S. Kela', 'Team 1', 'Confirmed', '', ''),
  'SP-03': pileRec(3, 'complete', 'Proofed', 'Proofed', '12.0 m', '11.8 m', '-0.2 m', false, '2 days ago', 'S. Kela', 'Team 1', 'Confirmed', '', ''),
  'SP-04': pileRec(4, 'active', 'Installed', 'Installation', '12.0 m', '12.2 m', '+0.2 m', false, '4 hrs ago', 'J. Neho', 'Team 1', 'Submitted for QA', '', ''),
  'SP-05': pileRec(5, 'issue', 'Requires-Reinstall', 'Installation', '12.0 m', '12.0 m', '0.0 m', true, '3 hrs ago', 'J. Neho', 'Team 1', 'Submitted for QA', 'Torque Below Target', 'Torque 7.8 kNm below 8 kNm|Awaiting PM decision'),
  'SP-06': pileRec(6, 'active', 'Installed', 'Installation', '12.0 m', '12.4 m', '+0.4 m', false, '4 hrs ago', 'J. Neho', 'Team 1', 'Submitted for QA', '', ''),
  'SP-07': pileRec(7, 'planned', 'Planned', 'Scheduled', '12.5 m', '—', '—', false, '—', '—', 'Team 1', 'Not started', '', ''),
  'SP-08': pileRec(8, 'planned', 'Planned', 'Scheduled', '12.5 m', '—', '—', false, '—', '—', 'Team 1', 'Not started', '', ''),
  'SP-09': pileRec(9, 'planned', 'Planned', 'Scheduled', '12.5 m', '—', '—', false, '—', '—', 'Team 1', 'Not started', '', ''),
  'SP-10': pileRec(10, 'planned', 'Planned', 'Scheduled', '13.0 m', '—', '—', false, '—', '—', 'Team 2', 'Not started', '', ''),
  'SP-11': pileRec(11, 'planned', 'Planned', 'Scheduled', '13.0 m', '—', '—', false, '—', '—', 'Team 2', 'Not started', '', ''),
  'SP-12': pileRec(12, 'planned', 'Planned', 'Scheduled', '13.0 m', '—', '—', false, '—', '—', 'Team 2', 'Not started', '', '')
};
export const boardZones = [
  { name: 'Upper Bench', pct: 25, count: '12 piles · 3 proofed', ids: ['SP-01', 'SP-02', 'SP-03', 'SP-04', 'SP-05', 'SP-06', 'SP-07', 'SP-08', 'SP-09', 'SP-10', 'SP-11', 'SP-12'] }
];
export const boardStatus = { pct: 25, confirmed: 3, total: 12, drilled: 3, qa: 2, issues: 1 };
export const boardAttention = [
  { id: 'SP-05', text: 'Torque below target', zone: 'Upper Bench' }
];

/* Engineer source shown on Testing Standards + Work Item Template. */
export const engineerSource = { name: 'Cashmere Ridge design set', rev: 'Rev C · 18 Jun 2026' };

/* --- Closeout (piling conditions) ----------------------------------------- */
export const closeout = {
  itemLabel: 'piles',
  items: 12,
  blocking: 3,
  days: '—',
  progressPct: 78,
  readyBig: 'Not ready',
  readySub: '3 checks still blocking closeout',
  checks: [
    { state: 'ok', name: 'All piles installed', detail: '12 of 12 set, proofed and capped', v: 'Done' },
    { state: 'blk', name: 'All records confirmed', detail: '2 piles awaiting QA confirmation', act: 'Open QA Queue', go: 'qa' },
    { state: 'blk', name: 'Torque exceptions resolved', detail: 'SP-05 torque below target, awaiting PM decision', act: 'Open QA Queue', go: 'qa' },
    { state: 'blk', name: 'Handover documentation delivered', detail: 'Pile register not yet confirmed issued to client', act: 'Confirm handover', go: 'rpt' },
    { state: 'ok', name: 'No open incidents', detail: '1 reported · closed', v: 'Clear' },
    { state: 'ok', name: 'Daily sheets submitted', detail: '18 of 18 days submitted', v: 'Done' }
  ],
  summary: [
    { k: 'Piles', v: '12', small: 'of 12' },
    { k: 'Released', v: '3' },
    { k: 'Flagged', v: '1', small: 'open' },
    { k: 'Duration', v: '18', small: 'days' }
  ],
  afterReport: 'Pile register',
  afterReportMeta: '12 piles'
};

/* --- QA Queue ------------------------------------------------------------- */
export const qaQueue = {
  total: 3,
  readyCount: 2,
  attnCount: 1,
  items: [
    { id: 'SP-04', state: 'ready', zone: 'Upper Bench', by: 'J. Neho', ago: '4h ago', ev: 5, evTotal: 5, depth: '12.2 m', torque: '8.9 kNm', vert: '1.6°', result: 'Meets target', pill: 'Ready' },
    { id: 'SP-06', state: 'ready', zone: 'Upper Bench', by: 'J. Neho', ago: '4h ago', ev: 5, evTotal: 5, depth: '12.4 m', torque: '9.0 kNm', vert: '1.2°', result: 'Meets target', pill: 'Ready' },
    { id: 'SP-05', state: 'attn', zone: 'Upper Bench', by: 'J. Neho', ago: '3h ago', ev: 4, evTotal: 5, depth: '12.0 m', torque: '7.8 kNm', vert: '1.9°', result: 'Below 8 kNm target', pill: 'Torque below target', gap: 'Torque below target' }
  ]
};

/* Spatial Map canvas for this work type (site plan behind the plotted points). */
export const spatialCanvas = '../assets/maps/cashmere-ridge.svg';
