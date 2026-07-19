// Generates the enriched screen dataset + evidence registers for the V2 Prototype Walkthrough.
// Reads the read-only prototype manifest; writes ONLY inside docs/v2-prototype-walkthrough/.
import fs from 'fs';
const REPO = '/home/user/Geotech-V2';
const DOCS = REPO + '/docs/v2-prototype-walkthrough';
const EV = DOCS + '/evidence';
fs.mkdirSync(EV, { recursive: true });

// --- load manifest (read-only) ---
const src = fs.readFileSync(REPO + '/prototype/config/screens.js', 'utf8');
const window = {}; new Function('window', src)(window);
const manifest = window.TE_SCREENS;

// --- role/surface from chrome + stage ---
const roleOf = (s) => {
  if (s.id === 'engineer-view') return 'Engineer (client)';
  if (s.chrome === 'field') return 'Operator';
  if (s.chrome === 'none') return 'Output (report)';
  return 'Project Manager';
};
const surfaceOf = (s) => {
  if (s.chrome === 'field') return 'Field / mobile';
  if (s.chrome === 'none') return 'Printable report';
  if (s.id === 'engineer-view') return 'Engineer / read-only';
  return 'Office / desktop';
};
const spineOf = (s) => {
  if (s.stage === 'platform') return 'Platform';
  if (s.stage === 'configure') return 'Configure';
  if (s.stage === 'capture') return 'Capture';
  if (s.stage === 'confirm') return s.id === 'engineer-view' ? 'Confirm (outward)' : 'Confirm';
  return 'Output';
};

// --- enrichment, keyed by id: [fidelity, interaction, pdRefs, limitations, openQuestion] ---
// Fidelity assessed from captured screenshots; interaction defaults to SIMULATED for a clickable
// prototype (local/mock state, no backend) unless navigation-only (FUNCTIONAL) or a static report (STATIC).
const F_HI='HIGH-FIDELITY', F_MED='MEDIUM-FIDELITY', F_CON='CONCEPTUAL';
const I_SIM='SIMULATED', I_STA='STATIC', I_FUN='FUNCTIONAL', I_PAR='PARTIAL';
const E = {
  projects:        [F_HI, I_SIM, ['SET-1','PLAT-7/11'], 'Project list + create is illustrative; no persistence.', 'How is project identity + Open/Closed lifecycle stored?'],
  platform:        [F_HI, I_STA, ['PLAT-2/3/4/5'], 'Explainer surface, not an editable config screen.', 'Is the work-type config object authored in-product or in code?'],
  'work-types':    [F_HI, I_SIM, ['PLAT-2','SET'], 'Selecting a type re-renders a preview; no saved state.', 'What is the runtime shape of a work-type declaration?'],
  layout:          [F_HI, I_SIM, ['SET-2'], 'Zones/areas editing is simulated.', 'Zone + row-direction model and its effect on numbering.'],
  'work-item-design':[F_HI, I_SIM, ['DSN-1','DSN-2','DSN-3'], 'Template builder is illustrative; specs not persisted.', 'How do templates compose from specifications at runtime?'],
  'testing-standards':[F_HI, I_SIM, ['TST','PDS-STD'], 'Acceptance criteria shown, not enforced.', 'Where do acceptance thresholds live and how are they versioned?'],
  'evidence-qa':   [F_HI, I_SIM, ['PDS-QAR'], 'Evidence rules shown; not wired to the QA gate.', 'How are evidence requirements authored and enforced at confirm?'],
  'work-plan':     [F_HI, I_SIM, ['PLAN-1','PLAN-2','PLAN-3','PDS-PLN'], 'Placement/commit is simulated; AI plan-import conceptual.', 'Plan-import (PDF -> planned items) data flow and human approval.'],
  'safety-risk-controls':[F_HI, I_SIM, ['SAF-1','SOS','PDS-SRC'], 'JSA/SWMS gating shown; upload is illustrative.', 'How does the safety gate bind to field sign-on?'],
  'team-publish':  [F_MED, I_SIM, ['(roles/authorisation §06)'], 'Roles table + publish-to-field; not in a numbered PDS.', 'Role -> permission model and what "publish" commits.'],
  overview:        [F_HI, I_SIM, ['PDS-OVW','PMV-1..6','PLAT-7'], 'Alerts/pulse are mock rollups.', 'Derived project status computation + refresh trigger.'],
  'status-board':  [F_HI, I_SIM, ['PDS-BRD','SPM'], 'Zone grid renders mock state; filtering simulated.', 'Board reads which state dimensions, and how are they derived?'],
  'spatial-map':   [F_HI, I_SIM, ['PDS-SPM','SPM-1','SPM-2','SPM-3','SPM-4','SPM-5'], 'Pins on an uploaded image; positions are mock.', 'Image-relative positioning + coordination-readiness geolocation seam.'],
  'reference-documents':[F_HI, I_SIM, ['DOC-1','DOC-2','DOC-3','PDS-DOC'], 'Offline library shown; upload/offline is illustrative.', 'Offline availability + provenance of reference docs.'],
  'field-home':    [F_HI, I_SIM, ['(operator entry)'], 'Operator day view; sign-on gate simulated.', 'Not a numbered PDS — how does the operator home relate to the PDS set?'],
  'crew-sign-on':  [F_HI, I_SIM, ['SOS-1','SOS-2','SOS-3','SOS-4','PDS-SON'], 'Individual sign-on gate; attribution simulated.', 'Attributable per-person sign-on via authenticated session.'],
  'drill-log':     [F_HI, I_SIM, ['DRL-1','DRL-2','DRL-3','DRL-4','DRL-5','DRL-6','PDS-DRL'], 'Anchoring drill capture; save/submit simulated.', 'Progressive save + submit-for-QA state transition and offline write.'],
  'grout-log':     [F_HI, I_SIM, ['GRT-1','GRT-3','GRT-9','PDS-GRT'], 'Bag-count -> volume variance shown; computation illustrative.', 'Grout variance computation (bags x mix vs expected) location.'],
  'anchor-test':   [F_HI, I_SIM, ['TST-1','TST-2','TST-3','TST-4','PDS-TST'], 'AI-proposes-from-photo shown; extraction simulated.', 'AI extraction + human-verify-then-commit contract.'],
  incident:        [F_HI, I_SIM, ['INC-1','INC-2','INC-3','PDS-INC'], 'Photo-first standalone report; offline shown.', 'Offline standalone capture + immediate PM alert path.'],
  'torque-log':    [F_MED, I_SIM, ['PIL-1','PIL-2','PIL-3','PDS-PIL'], 'Piling proof-pair capture; less deeply populated than anchoring.', 'Piling done-line (drill-only) proving the spine on a second type.'],
  'verticality-cutoff':[F_MED, I_SIM, ['PIL','PDS-PIL'], 'Piling secondary capture; illustrative.', 'Which piling stages are required for completion?'],
  'pin-install':   [F_MED, I_SIM, ['(rockfall — roadmap)'], 'Rockfall capture present in prototype but beyond PD V2 proof pair.', 'Prototype is BROADER than the PD V2 scope (see contradictions).'],
  'pull-test':     [F_MED, I_SIM, ['(rockfall — roadmap)'], 'Rockfall proof-load capture; beyond PD V2 depth.', 'Confirm scope: is rockfall a V2 type or roadmap config?'],
  'panel-install': [F_MED, I_SIM, ['(rockfall — roadmap)'], 'Rockfall panel capture; beyond PD V2 depth.', 'Same as above.'],
  'inspection-checklist':[F_MED, I_SIM, ['(rockfall — roadmap)'], 'Rockfall lot closeout; beyond PD V2 depth.', 'Same as above.'],
  'substrate-inspection':[F_MED, I_SIM, ['(shotcrete — roadmap)'], 'Shotcrete witness-hold capture; beyond PD V2 depth.', 'Witness/hold-point model on the shared spine.'],
  'application-record':[F_MED, I_SIM, ['(shotcrete — roadmap)'], 'Shotcrete application capture; beyond PD V2 depth.', 'Same as above.'],
  'thickness-check':[F_MED, I_SIM, ['(shotcrete — roadmap)'], 'Shotcrete thickness vs threshold; beyond PD V2 depth.', 'Threshold-rule config on the shared spine.'],
  'borehole-log':  [F_MED, I_SIM, ['(drilling — roadmap)'], 'Drilling investigation capture; beyond PD V2 depth.', 'Drilling (non-discrete-element) shape vs the spine.'],
  'core-photos':   [F_MED, I_SIM, ['(drilling — roadmap)'], 'Drilling core box register; beyond PD V2 depth.', 'Per-box photo evidence model.'],
  'sample-register':[F_MED, I_SIM, ['(drilling — roadmap)'], 'Drilling sample custody; beyond PD V2 depth.', 'Chain-of-custody data model.'],
  'pipe-install':  [F_MED, I_SIM, ['(drainage — roadmap)'], 'Drainage pipe capture; beyond PD V2 depth.', 'Drainage type on the shared spine.'],
  'flow-test':     [F_MED, I_SIM, ['(drainage — roadmap)'], 'Drainage flow capture; beyond PD V2 depth.', 'Same as above.'],
  'backfill-inspection':[F_MED, I_SIM, ['(drainage — roadmap)'], 'Drainage backfill hold; beyond PD V2 depth.', 'Same as above.'],
  'daily-activity':[F_HI, I_SIM, ['DAS-1','DAS-5','DAS-6','PDS-DAS'], 'Default-day sheet with exception edits; auto-totals illustrative.', 'Resourcing totals + edit trail for payment-facing records.'],
  'spatial-map-operator':[F_HI, I_SIM, ['PDS-SPM','SPM-5'], 'Operator locate-and-continue variant of the map.', 'Tap-to-select into capture from the located map.'],
  'safety-docs':   [F_HI, I_SIM, ['SAF-1','PDS-SAF'], 'Read-and-acknowledge active JSA/SWMS.', 'Acknowledgement attribution + version currency.'],
  'reference-documents-operator':[F_HI, I_SIM, ['DOC','PDS-DOC'], 'Field read-only/offline library.', 'Offline availability guarantee.'],
  'qa-queue':      [F_HI, I_SIM, ['QA-1','QA-2','QA-3','ALT-1','ALT-2','PDS-QAQ'], 'Compiled record, requirements, reopen/approve shown; transitions simulated.', 'Review-state machine (submit/confirm/reopen) + operator edit-lock.'],
  reporting:       [F_HI, I_SIM, ['RPT-1','RPT-2','RPT-3','RPT-4','RPT-5','PDS-RPT'], 'Assemble + release confirmed work; export illustrative.', 'Confirmed-only-outward release + curated client exposure.'],
  closeout:        [F_HI, I_SIM, ['CLO-1','CLO-2','CLO-3','PDS-CLO'], 'Final checks before archive; assembly illustrative.', 'Closeout package assembled from the live confirmed record.'],
  'engineer-view': [F_HI, I_SIM, ['ENG-1','ENG-2','ENG-3','ENG-4','PDS-ENG'], 'Confirmed-only read-only engineer surface.', 'Confirmed-only visibility + curated exceptions + read-only enforcement.'],
  'report-anchor-test':[F_HI, I_STA, ['RPT-5','TST'], 'Static printable anchor-test report.', 'Per-type report format binding.'],
  'report-drill-summary':[F_HI, I_STA, ['RPT-5','DRL'], 'Static printable drill summary.', 'Same as above.'],
  'report-pile-register':[F_MED, I_STA, ['RPT-5','PIL'], 'Static printable pile register.', 'Same as above.'],
  'report-rockfall-register':[F_MED, I_STA, ['(rockfall — roadmap)'], 'Static report beyond PD V2 depth.', 'Scope of rockfall in V2.'],
  'report-shotcrete-register':[F_MED, I_STA, ['(shotcrete — roadmap)'], 'Static report beyond PD V2 depth.', 'Scope of shotcrete in V2.'],
  'report-borehole-log':[F_MED, I_STA, ['(drilling — roadmap)'], 'Static report beyond PD V2 depth.', 'Scope of drilling in V2.'],
  'report-drilling-schedule':[F_MED, I_STA, ['(drilling — roadmap)'], 'Static report beyond PD V2 depth.', 'Scope of drilling in V2.'],
  'report-drainage-register':[F_MED, I_STA, ['(drainage — roadmap)'], 'Static report beyond PD V2 depth.', 'Scope of drainage in V2.'],
  'module-preview':[F_CON, I_STA, ['PLAT'], 'Generic module preview reached from the explainer.', 'Illustrates the configurable-engine idea only.'],
};

const workTypeOf = (s) => (s.workTypes && s.workTypes.length) ? s.workTypes.join('+') : '';
const rows = manifest.map((s) => {
  const e = E[s.id] || [F_MED, I_SIM, [], '', ''];
  const shot = `${s.id}__${s.chrome}.png`;
  return {
    id: s.id, name: s.title, route: s.path, role: roleOf(s), surface: surfaceOf(s),
    spine: spineOf(s), stage: s.stage || 'output', chrome: s.chrome, group: s.group || '',
    workType: workTypeOf(s), moduleId: s.moduleId || '',
    fidelity: e[0], interaction: e[1], state: 'active',
    pdRefs: e[2], limitations: e[3], openQuestion: e[4],
    cardTitle: s.cardTitle || s.title, desc: s.desc || '',
    screenshot: `screenshots/${shot}`,
    viewport: s.chrome === 'field' ? '390x844' : s.chrome === 'none' ? '1240' : '1440x900',
  };
});

fs.writeFileSync(DOCS + '/data/screens.json', JSON.stringify(rows, null, 2));

// --- CSV helpers ---
const csv = (v) => { v = (v == null ? '' : String(v)); return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; };
const writeCsv = (file, header, records) => {
  const out = [header.join(',')].concat(records.map(r => r.map(csv).join(','))).join('\n') + '\n';
  fs.writeFileSync(file, out);
};

// Route + Screen Inventory
writeCsv(EV + '/V2_Prototype_Route_and_Screen_Inventory.csv',
  ['Screen ID','Screen name','Route','User role','Surface','Spine stage','Fidelity','Interaction status','Active/dormant/superseded','Source file','Related PD IDs','Screenshot','Known limitations','Notes'],
  rows.map(r => [r.id, r.name, r.route, r.role, r.surface, r.spine, r.fidelity, r.interaction, r.state,
    'prototype/' + r.route, r.pdRefs.join(' '), r.screenshot, r.limitations, r.desc]));

// Screenshot Capture Plan
writeCsv(EV + '/V2_Prototype_Screenshot_Capture_Plan.csv',
  ['Screenshot ID','Walkthrough section','Screen ID','Screen name','Route','User role','Viewport','Prototype state required','PD references','Fidelity','Interaction','Capture status','Notes'],
  rows.map(r => [r.id + '-' + r.chrome, atlasSection(r), r.id, r.name, r.route, r.role, r.viewport,
    'Existing mock/sample data (Benmore + catalogue jobs)', r.pdRefs.join(' '), r.fidelity, r.interaction, 'CAPTURED', 'Full-page capture']));

// Screenshot Register
writeCsv(EV + '/V2_Prototype_Screenshot_Register.csv',
  ['Screenshot ID','Filename','Section','Screen ID','Screen name','Route','User role','Viewport','Capture date','Prototype data type','Fidelity','Interaction status','Redaction performed','PD references','Notes'],
  rows.map(r => [r.id + '-' + r.chrome, r.id + '__' + r.chrome + '.png', atlasSection(r), r.id, r.name, r.route, r.role, r.viewport,
    '2026-07-17', 'Mock/sample', r.fidelity, r.interaction, 'None required (mock data, no PII/credentials)', r.pdRefs.join(' '), '']));

function atlasSection(r){
  if (r.spine.startsWith('Configure')) return '04 PM / Configure';
  if (r.role === 'Operator') return '05 Operator / Capture';
  if (r.spine.startsWith('Confirm')) return r.role === 'Engineer (client)' ? '07 Engineer' : '06 QA & Confirm';
  if (r.role === 'Output (report)') return '08 Work-type / reports';
  return '02 Prototype Map';
}

console.log('screens.json rows:', rows.length);
console.log('fidelity:', JSON.stringify(rows.reduce((a,r)=>((a[r.fidelity]=(a[r.fidelity]||0)+1),a),{})));
console.log('roles:', JSON.stringify(rows.reduce((a,r)=>((a[r.role]=(a[r.role]||0)+1),a),{})));
console.log('wrote 3 CSV registers to evidence/');
