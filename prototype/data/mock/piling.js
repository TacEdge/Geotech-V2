/* ============================================================================
   TacEdge Geotech V2.0 · Piling content pack (mock, draft)
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
