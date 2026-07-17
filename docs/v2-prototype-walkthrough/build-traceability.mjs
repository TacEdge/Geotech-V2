// Product Definition -> prototype traceability register. Writes inside docs/v2-prototype-walkthrough/ only.
import fs from 'fs';
const EV = '/home/user/Geotech-V2/docs/v2-prototype-walkthrough/evidence';

// [Definition ID, Artefact, Requirement/decision, User, Prototype route, Prototype status, Scoping implication]
const T = [
  // --- Product Brief: intent, users, DoD ---
  ['DoD-1','Product Brief','Cold PM sets up + runs a project untrained','PM','screens/projects.html + configure set','MEDIUM-FIDELITY · SIMULATED','Setup flow exists; not runnable end-to-end (no persistence).'],
  ['DoD-2','Product Brief','Operator replaces paper logbooks on the ground','Operator','screens/drill-log.html + field set','HIGH-FIDELITY · SIMULATED','Field capture is the strongest area; validate offline write.'],
  ['DoD-3','Product Brief','Field capture populates the PM live view','PM','screens/overview.html, status-board.html','HIGH-FIDELITY · SIMULATED','Live linkage is mocked; real-time sync is a scoping question.'],
  ['DoD-4','Product Brief','Offline: full shift, no signal, no loss on resync','Operator','field set (Live/Offline chips)','CONCEPTUAL','Offline is asserted via chips only; the load-bearing sync model is NOT represented.'],
  ['DoD-5','Product Brief','Reporting reaches engineer clean + trusted','PM/Engineer','screens/reporting.html, engineer-view.html','HIGH-FIDELITY · SIMULATED','Confirmed-only-outward shown; release mechanism is simulated.'],
  ['DoD-6','Product Brief','Anchoring + piling on one configurable spine','PM','platform.html, work-types.html, torque-log.html','HIGH-FIDELITY · SIMULATED','Prototype exceeds this: all six types have capture screens (see contradictions).'],
  ['Users','Product Brief','Operator is the primary adoption condition','Operator','field-home.html','HIGH-FIDELITY · SIMULATED','Field surface is prioritised, consistent with the PD.'],
  // --- Configure ---
  ['SET-1','Backlog','Create a new project (container + code)','PM','screens/projects.html','HIGH-FIDELITY · SIMULATED','Project identity + Open/Closed lifecycle storage.'],
  ['SET-2','Backlog','Define zones (row direction)','PM','screens/layout.html','HIGH-FIDELITY · SIMULATED','Zone + numbering model.'],
  ['SET-3','Backlog','Upload JSA/SWMS at setup','PM','screens/safety-risk-controls.html','HIGH-FIDELITY · SIMULATED','Safety gate binding to sign-on.'],
  ['SPEC-1..4','Backlog','Specifications: drill methods, grout, mixes, lithology','PM','work-item-design.html','MEDIUM-FIDELITY · SIMULATED','Where specs live + versioning.'],
  ['DSN-1..3','Backlog','Work Item Template assembled from specs','PM','screens/work-item-design.html','HIGH-FIDELITY · SIMULATED','Template composition at runtime.'],
  ['PLAN-1..3','Backlog','Work Plan: place designs as planned items by zone','PM','screens/work-plan.html','HIGH-FIDELITY · SIMULATED','Plan-import (AI) + human approval flow.'],
  ['PDS-STD','PDS','Testing Standards / acceptance criteria','PM','screens/testing-standards.html','HIGH-FIDELITY · SIMULATED','Threshold config + enforcement at confirm.'],
  ['PDS-QAR','PDS','Evidence & QA Requirements','PM','screens/evidence-qa.html','HIGH-FIDELITY · SIMULATED','Evidence rule authoring + gate wiring.'],
  ['PLAT-2/3/4/5','Backlog','Work type = configuration on one spine','PM','platform.html, work-types.html','HIGH-FIDELITY · STATIC','Runtime shape of a work-type declaration.'],
  ['(roles §06)','Func. Arch','Roles + publish to field','PM','screens/team-publish.html','MEDIUM-FIDELITY · SIMULATED','Role -> permission model; not a numbered PDS.'],
  // --- Capture ---
  ['SOS-1..4','Backlog','Crew sign-on, individual + attributable','Operator','screens/crew-sign-on.html','HIGH-FIDELITY · SIMULATED','Attributable per-person auth session.'],
  ['DRL-1..6','Backlog','Drill log capture (depth, lithology, obs)','Operator','screens/drill-log.html','HIGH-FIDELITY · SIMULATED','Progressive save + submit-for-QA transition + offline write.'],
  ['GRT-1..9','Backlog','Grout log; bag-count -> derived volume + variance','Operator','screens/grout-log.html','HIGH-FIDELITY · SIMULATED','System-computed grout variance location.'],
  ['TST-1..4','Backlog','Anchor test; AI proposes, human verifies + commits','Operator','screens/anchor-test.html','HIGH-FIDELITY · SIMULATED','AI-extract -> human-approve -> commit contract.'],
  ['INC-1..3','Backlog','Incident/near-miss, standalone, offline, PM alert','Operator','screens/incident.html','HIGH-FIDELITY · SIMULATED','Offline standalone capture + immediate alert path.'],
  ['DAS-1..6','Backlog','Daily Activity Sheet; default day, exceptions, totals','Supervisor/Operator','screens/daily-activity.html','HIGH-FIDELITY · SIMULATED','Auto-totals + edit trail for payment-facing records.'],
  ['PIL-1..3','Backlog','Piling capture (torque, verticality, cut-off)','Operator','torque-log.html, verticality-cutoff.html','MEDIUM-FIDELITY · SIMULATED','Piling done-line (drill-only) proving the spine on a 2nd type.'],
  ['SPM-1..5','Backlog','Spatial map; locate work items on site image','PM/Operator','spatial-map.html, spatial-map-operator.html','HIGH-FIDELITY · SIMULATED','Image-relative positioning + geolocation seam.'],
  ['SAF-1','Backlog','Read + acknowledge active JSA/SWMS','Operator','screens/safety-docs.html','HIGH-FIDELITY · SIMULATED','Acknowledgement attribution + version currency.'],
  ['DOC-1..3','Backlog','Reference docs; offline project folder','PM/Operator','reference-documents.html + operator','HIGH-FIDELITY · SIMULATED','Offline availability + provenance.'],
  // --- Confirm ---
  ['QA-1..3','Backlog','QA queue; compiled record, confirm or reopen','PM','screens/qa-queue.html','HIGH-FIDELITY · SIMULATED','Review-state machine + operator edit-lock (load-bearing).'],
  ['ALT-1/2','Backlog','Alerts; variances (computed) + exceptions (declared)','PM','qa-queue.html, overview.html','HIGH-FIDELITY · SIMULATED','Variance computation vs declared exception separation.'],
  ['RPT-1..5','Backlog','Reporting; assemble + release confirmed work','PM','screens/reporting.html + report-*','HIGH-FIDELITY · SIMULATED/STATIC','Confirmed-only-outward release + curated exposure.'],
  ['CLO-1..3','Backlog','Project closeout; package from live record','PM','screens/closeout.html','HIGH-FIDELITY · SIMULATED','Closeout assembled from confirmed record.'],
  ['ENG-1..4','Backlog','Engineer view; confirmed-only, read-only, curated','Engineer','screens/engineer-view.html','HIGH-FIDELITY · SIMULATED','Confirmed-only visibility + read-only enforcement.'],
  ['PMV-1..6','Backlog','PM monitoring surfaces (overview/board)','PM','overview.html, status-board.html','HIGH-FIDELITY · SIMULATED','Derived project-status rollup + refresh.'],
  // --- Models / decisions ---
  ['State model','Tech/Data Arch','Work phase, review state, testing flag, freshness are 4 separate signals','all','status-board.html, qa-queue.html','PARTIAL','Prototype shows chips (Live/Offline/Ready/Provisional) but does not cleanly separate all four; verify model.'],
  ['Confirmed-only-outward','Func. Arch','Only confirmed records reach the engineer/contract','PM/Engineer','engineer-view.html, reporting.html','HIGH-FIDELITY · SIMULATED','Gate is illustrated; enforcement is a scoping question.'],
  ['Re-open','Func. Arch','Re-open is the universal hand-back; removes from outward view','PM','qa-queue.html','HIGH-FIDELITY · SIMULATED','Re-open transition + re-confirmation not fully wired.'],
  ['ODC-1 / ARCH-1..4','Tech/Data Arch','Coordination-readiness seams (geolocation, org tier, addressable project, status)','system','(not a screen)','NOT REPRESENTED','Seams are data-model conditions; not visible in the prototype by design.'],
  ['Offline/sync §09','Tech/Data Arch','Offline-first capture, two payload classes, conflict policy','Operator','field set','NOT REPRESENTED','The single largest technical risk; only asserted via chips. Priority scoping area.'],
  ['Work-type scope','Product Brief','V2 proves the spine on anchoring + piling; other four onboard as config','PM','all field capture screens','CONTRADICTED','Prototype implements capture screens for ALL SIX types; PD fixes V2 depth at anchoring+piling. Record + resolve scope.'],
  ['Screen count','PDS','PD defines "twenty-two screens"','all','52 prototype screens','CONTRADICTED','Prototype has 52 routes; PD PDS defines 22. Reconcile the canonical screen set.'],
];

const csv = (v)=>{v=(v==null?'':String(v));return /[",\n]/.test(v)?'"'+v.replace(/"/g,'""')+'"':v;};
const header=['Definition ID','Artefact','Requirement or decision','User','Related prototype route','Prototype status','Scoping implication'];
fs.writeFileSync(EV+'/V2_Product_Definition_Traceability.csv',
  [header.join(',')].concat(T.map(r=>r.map(csv).join(','))).join('\n')+'\n');
console.log('traceability rows:', T.length);
