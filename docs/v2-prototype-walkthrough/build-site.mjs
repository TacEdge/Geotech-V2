// Builds the static V2 Prototype Walkthrough site into site/. Writes only inside
// docs/v2-prototype-walkthrough/. Reads data/screens.json (generated) + screenshots in public/.
import fs from 'fs';
const DOCS = '/home/user/Geotech-V2/docs/v2-prototype-walkthrough';
const OUT = DOCS + '/site';
const SHOT = '../../../public/v2-prototype-walkthrough/screenshots/';
const screens = JSON.parse(fs.readFileSync(DOCS + '/data/screens.json', 'utf8'));
const byId = Object.fromEntries(screens.map(s => [s.id, s]));

const esc = (s) => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const fidClass = f => f.startsWith('HIGH')?'hi':f.startsWith('MEDIUM')?'med':'con';
const intClass = i => ({FUNCTIONAL:'fun',SIMULATED:'sim',STATIC:'sta',PARTIAL:'par',BROKEN:'broken','NOT REPRESENTED':'notrep',CONTRADICTED:'contra'}[i]||'sim');
const pill = (cls,txt) => `<span class="pill ${cls}">${esc(txt)}</span>`;
const fidPill = s => pill(fidClass(s.fidelity), s.fidelity);
const intPill = s => pill(intClass(s.interaction), s.interaction);

// screenshot figure
function shot(id, caption, extra=''){
  const s = byId[id]; if(!s) return '';
  const field = s.chrome==='field';
  const file = `${id}__${s.chrome}.png`;
  return `<figure class="shot ${field?'field':''} ${extra}">
    <img src="${SHOT}${file}" alt="${esc(s.name)} — ${esc(s.surface)}" loading="lazy">
    <figcaption><span class="t">${esc(s.name)}</span> <span class="mono">${esc(s.route)}</span> ${fidPill(s)} ${intPill(s)} ${caption?'· '+esc(caption):''}</figcaption>
  </figure>`;
}
const shotRow = (ids) => `<div class="shot-row">${ids.map(id=>shot(id)).join('')}</div>`;

function metaBlock(rows){
  return `<div class="meta">${rows.map(([k,v])=>`<div class="r"><span class="k">${esc(k)}</span><span class="v">${v}</span></div>`).join('')}</div>`;
}
function flow(steps){
  return `<div class="flow">${steps.map((st,i)=>`${i>0?'<span class="arr">&rarr;</span>':''}<div class="step"><span class="a">${esc(st[0])}</span><span class="t">${esc(st[1])}</span><span class="d">${esc(st[2])}</span></div>`).join('')}</div>`;
}

// ---------- authored narrative sections ----------
const NAV = [
  ['group','Orientation'],
  ['index','00','Read First'],
  ['01-executive-summary','01','Visual Executive Summary'],
  ['02-prototype-map','02','Prototype Map'],
  ['group','The product spine'],
  ['03-spine','03','Configure · Capture · Confirm'],
  ['04-pm-walkthrough','04','Project Manager'],
  ['05-operator-walkthrough','05','Operator'],
  ['06-qa-confirm','06','QA & Confirmation'],
  ['07-engineer','07','Engineer & Client'],
  ['08-work-types','08','Work-Type Model'],
  ['group','Reference'],
  ['09-screen-atlas','09','Screen Atlas'],
  ['10-status-register','10','Prototype Status Register'],
  ['11-gaps','11','Gaps & Contradictions'],
  ['12-scoping-questions','12','Scoping Questions'],
  ['13-appendices','13','Appendices'],
  ['print','—','Print (A4 landscape)'],
];

const NOTICE = `<div class="callout"><span class="k">What is authoritative</span>The V2 Product Definition is authoritative for product intent. The prototype is a visual and interactive interpretation of that intent. Visual polish does not imply product, technical or delivery certainty.</div>`;

const sections = {};

sections['index'] = { num:'00', title:'Read First', body: `
<p class="lead">This walkthrough interprets the current TACEDGE Ground Engineering V2 prototype for the incoming Interim Development Technical Lead. It exists so you can understand the prototype quickly, without reverse-engineering the navigation, the intended workflow, the role boundaries or the state model on your own.</p>
${NOTICE}
${metaBlock([
  ['Purpose','Interpret the current V2 prototype for the incoming Technical Lead'],
  ['Audience','Interim Development Technical Lead; founders; scoping sprint'],
  ['Prototype baseline','<span class="mono">claude/tacedge-v2-prototype-polish-4ny12f @ 2101478</span>'],
  ['Inspection date','17 July 2026'],
  ['Runtime status','Served from a disposable read-only copy; all 52 routes returned 200'],
  ['Prototype data','Local mock / sample only (Benmore + catalogue jobs). No database, no live data'],
  ['This document','Prototype interpretation &amp; walkthrough — not a redesign, spec, or backlog'],
])}
<h3>Status classifications</h3>
<p>Each screen carries a <strong>fidelity</strong> label and an <strong>interaction</strong> label. A screen may hold both, e.g. ${pill('hi','HIGH-FIDELITY')} ${pill('sim','SIMULATED')}.</p>
<div class="tbl-wrap"><table><thead><tr><th>Fidelity</th><th>Meaning</th></tr></thead><tbody>
<tr><td>${pill('hi','HIGH-FIDELITY')}</td><td>Visually mature; closely represents intended product behaviour.</td></tr>
<tr><td>${pill('med','MEDIUM-FIDELITY')}</td><td>Communicates structure and workflow; details or interactions incomplete.</td></tr>
<tr><td>${pill('con','CONCEPTUAL')}</td><td>Illustrates intent; not an implementation-ready specification.</td></tr>
</tbody></table></div>
<div class="tbl-wrap"><table><thead><tr><th>Interaction</th><th>Meaning</th></tr></thead><tbody>
<tr><td>${pill('fun','FUNCTIONAL')}</td><td>The interaction works in the current prototype (mostly navigation).</td></tr>
<tr><td>${pill('sim','SIMULATED')}</td><td>Changes local prototype state or uses mock behaviour; not production functionality.</td></tr>
<tr><td>${pill('sta','STATIC')}</td><td>Illustrative surface with little or no working interaction (e.g. printable reports).</td></tr>
<tr><td>${pill('par','PARTIAL')}</td><td>Some intended behaviour exists but the flow cannot be completed.</td></tr>
<tr><td>${pill('contra','CONTRADICTED')}</td><td>Prototype materially differs from a fixed Product Definition decision.</td></tr>
<tr><td>${pill('notrep','NOT REPRESENTED')}</td><td>The Product Definition specifies it, but it does not appear in the prototype.</td></tr>
</tbody></table></div>
<h3>How to navigate</h3>
<ul>
<li><strong>Sections 01–02</strong> give the fast orientation: the promise, the users, the spine, and the map.</li>
<li><strong>Sections 03–07</strong> follow the product spine and each role in order, with screenshots.</li>
<li><strong>Section 08</strong> explains the work-type model and what the prototype actually demonstrates.</li>
<li><strong>Sections 09–13</strong> are reference: the full Screen Atlas, the Status Register, gaps, scoping questions and appendices.</li>
</ul>
<h3>How to run + print</h3>
${metaBlock([
  ['Live prototype','<span class="mono">https://tacedge.github.io/Geotech-V2/</span>'],
  ['Run this site','<span class="mono">cd /home/user/Geotech-V2 &amp;&amp; python3 -m http.server 8080</span> → open <span class="mono">/docs/v2-prototype-walkthrough/site/</span>'],
  ['Rebuild','<span class="mono">node docs/v2-prototype-walkthrough/build-site.mjs</span>'],
  ['Print / PDF','Open <span class="mono">/print</span> and use the browser&rsquo;s Print → Save as PDF (A4 landscape)'],
])}
<h3>What is open to challenge</h3>
<p>Everything the prototype <em>illustrates</em> about interaction and data is open to challenge; it is a clickable demonstration, not an implementation. What is <em>not</em> open to challenge here is the written product intent in the Product Definition — where the prototype and the Definition differ, this document records the difference rather than choosing one (see <a href="11-gaps.html">Section 11</a>).</p>
`};

sections['01-executive-summary'] = { num:'01', title:'Visual Executive Summary', body: `
<p class="lead">TACEDGE Ground Engineering is a field-operations capture-and-trust system for frontline ground-engineering delivery. It carries one connected record from the operator who does the work to the engineer who must rely on it.</p>
<div class="callout"><span class="k">The product model</span><strong>Configure. Capture. Confirm.</strong> The PM configures the job once and front-loads the decisions; the operator captures ground truth with minimal decision load; the PM confirms the submitted record. Only the confirmed record is released outward. Release is the outcome of Confirm, not a fourth stage.</div>
<h3>The operator → PM → engineer chain</h3>
${flow([
  ['Operator','Capture','Records field reality on mobile, offline-first'],
  ['PM','Confirm','Reviews, resolves exceptions, confirms the record'],
  ['Engineer','Rely','Sees only confirmed work, read-only, glance-first'],
])}
<h3>Primary users</h3>
<div class="cards">
<div class="card"><span class="rl">Primary adoption condition</span><h4>Operator</h4><p>Captures at the point of work. The make-or-break adopter; the field surface is the most mature part of the prototype.</p></div>
<div class="card"><span class="rl">Single decision authority</span><h4>Project Manager</h4><p>Front-loads setup, monitors live status, confirms records, controls outward release.</p></div>
<div class="card"><span class="rl">External read tier</span><h4>Engineer (client)</h4><p>Relies on the confirmed record. Read-only, confirmed-only, curated.</p></div>
</div>
<h3>Representative surfaces</h3>
${shotRow(['field-home','qa-queue'])}
${shotRow(['status-board','engineer-view'])}
<h3>What the prototype demonstrates well</h3>
<ul>
<li>The <strong>field capture surface</strong> (anchoring: drill, grout, test) is high-fidelity and coherent.</li>
<li>The <strong>QA queue</strong> shows a compiled work-item record with requirements, evidence and reopen/approve controls.</li>
<li>The <strong>Configure spine</strong> (projects → work types → templates → work plan → publish) reads as one continuous setup.</li>
<li>The <strong>engineer view</strong> demonstrates confirmed-only, read-only visibility.</li>
<li>The <strong>configurable engine</strong> idea is shown across six work types with per-type capture screens.</li>
</ul>
<h3>What remains incomplete</h3>
<ul>
<li><strong>Offline / sync</strong> — the load-bearing product condition — is asserted with Live/Offline chips only; the sync and conflict model is not represented.</li>
<li><strong>State model</strong> — work phase, review state, testing flag and freshness are not cleanly separated in the UI.</li>
<li>Interactions are <strong>simulated</strong> throughout; nothing persists and there is no backend.</li>
<li>Scope: the prototype implements capture screens for <strong>all six work types</strong>, beyond the Product Definition&rsquo;s V2 proof pair of anchoring + piling.</li>
</ul>
<h3>The most important scoping questions</h3>
<ol>
<li>What is the <strong>offline capture + sync + conflict model</strong>? (Largest technical risk.)</li>
<li>How is the <strong>review-state machine</strong> (submit → confirm → reopen) implemented, with operator edit-lock and confirmed-only-outward enforcement?</li>
<li>What is the runtime shape of a <strong>work-type configuration</strong>, and is V2 scoped to anchoring + piling or all six?</li>
</ol>
<p>See <a href="12-scoping-questions.html">Section 12</a> for the full set.</p>
`};

sections['02-prototype-map'] = { num:'02', title:'Prototype Map', body: `
<p class="lead">The prototype is a dependency-free, multi-page static site. Every screen is declared in one manifest (<span class="mono">prototype/config/screens.js</span>) with a stage (Configure / Capture / Confirm), a chrome (PM desktop / field mobile / report) and, for capture screens, a work type. Navigation is via a launcher and in-screen links; there is no SPA router.</p>
${metaBlock([
  ['Total routes','52 screens + launcher'],
  ['PM (desktop)','17 screens'],
  ['Operator (field)','26 screens'],
  ['Engineer','1 screen'],
  ['Reports (print)','8 documents'],
  ['Chrome split','<span class="mono">pm</span> (office) · <span class="mono">field</span> (mobile) · <span class="mono">none</span> (report)'],
])}
<h3>PM surfaces (Configure → monitor → Confirm)</h3>
<div class="cards">${screens.filter(s=>s.role==='Project Manager').map(s=>`<div class="card"><span class="rl">${esc(s.spine)}</span><h4>${esc(s.name)}</h4><p>${esc(s.desc)}</p><div class="pills">${fidPill(s)} ${intPill(s)}</div></div>`).join('')}</div>
<h3>Operator surfaces (field / mobile)</h3>
<div class="cards">${screens.filter(s=>s.role==='Operator').map(s=>`<div class="card"><span class="rl">${esc(s.workType||'shared')}</span><h4>${esc(s.name)}</h4><p>${esc(s.desc)}</p><div class="pills">${fidPill(s)} ${intPill(s)}</div></div>`).join('')}</div>
<h3>Engineer + output surfaces</h3>
<div class="cards">${screens.filter(s=>s.role==='Engineer (client)'||s.role==='Output (report)').map(s=>`<div class="card"><span class="rl">${esc(s.role)}</span><h4>${esc(s.name)}</h4><p>${esc(s.desc||'Printable report document.')}</p><div class="pills">${fidPill(s)} ${intPill(s)}</div></div>`).join('')}</div>
<h3>Role boundaries + handoffs</h3>
${flow([
  ['PM · office','Configure','Project, work types, templates, work plan, publish'],
  ['Operator · field','Capture','Sign-on, locate, record, submit for QA'],
  ['PM · office','Confirm','QA queue: review, reopen or confirm'],
  ['Engineer · read-only','Rely','Confirmed records, reporting, closeout'],
])}
<div class="callout"><span class="k">Two status surfaces, one truth</span>The <strong>Status Board</strong> renders work items schematically by zone; the <strong>Spatial Map</strong> renders the same items located on a site image. Both are intended to read the same work-phase state (the prototype shows them as separate mock views).</div>
`};

sections['03-spine'] = { num:'03', title:'Configure · Capture · Confirm', body: `
<p class="lead">The walkthrough is organised around the V2 operating spine. The prototype maps to it directly through the manifest <span class="mono">stage</span> field.</p>
${flow([
  ['PM','Configure','Front-load every decision into setup'],
  ['Operator','Capture','Record what physically varies + what is observed'],
  ['PM','Confirm','Review, resolve, confirm — release is the outcome'],
])}

<h3>Configure — the PM front-loads decisions</h3>
${metaBlock([['Primary actor','Project Manager'],['Main screens','Projects · Work Types · Layout · Work Item Template · Testing Standards · Evidence &amp; QA · Work Plan · Safety &amp; Risk · Team &amp; Publish'],['Inputs','Client + scope info, specifications, drawings'],['Outputs','A preset project the field inherits'],['Prototype status',`${pill('hi','HIGH-FIDELITY')} ${pill('sim','SIMULATED')}`]])}
${shotRow(['projects','work-types'])}
${shotRow(['work-item-design','work-plan'])}
<p><strong>Product decision.</strong> A work type is a completion-criteria configuration on one spine — not a separate product. <strong>Prototype limitation.</strong> Nothing persists; specifications and templates are illustrative. <strong>Technical question.</strong> What is the runtime shape of a work-type declaration, and how do templates compose from specifications?</p>

<h3>Capture — the operator records ground truth</h3>
${metaBlock([['Primary actor','Operator'],['Main screens','Field Home · Crew Sign-On · Drill / Grout / Test · Daily Activity · Incident · Spatial Map (field)'],['Inputs','Planned work item + PM presets'],['Outputs','A submitted stage record'],['Prototype status',`${pill('hi','HIGH-FIDELITY')} ${pill('sim','SIMULATED')}`]])}
${shotRow(['field-home','crew-sign-on'])}
${shotRow(['drill-log','grout-log'])}
<p><strong>Product decision.</strong> The operator primarily confirms and records what varies; records may be saved progressively and submitted for QA at an appropriate point. <strong>Prototype limitation.</strong> Save/submit change local state only; offline behaviour is asserted via chips. <strong>Technical question.</strong> Progressive save + submit-for-QA transition + offline write and resync.</p>

<h3>Confirm — the PM reviews and confirms; release follows</h3>
${metaBlock([['Primary actor','Project Manager'],['Main screens','QA Queue · Reporting · Closeout · (Engineer View is the outward result)'],['Inputs','Submitted stage records'],['Outputs','A confirmed record; released reporting'],['Prototype status',`${pill('hi','HIGH-FIDELITY')} ${pill('sim','SIMULATED')}`]])}
${shotRow(['qa-queue','reporting'])}
<div class="callout"><span class="k">Release is the outcome of Confirm</span>Only the confirmed record is released outward to the engineer, client or contract. Reporting and closeout are assembled from the live confirmed record. Release is not a separate operational stage.</div>
<p><strong>Prototype limitation.</strong> The submit → confirm → reopen transitions are shown as states but are not wired as a working state machine. <strong>Technical question.</strong> Review-state machine + operator edit-lock + confirmed-only-outward enforcement (load-bearing — see <a href="06-qa-confirm.html">Section 06</a>).</p>

<h3>The four signals — kept distinct</h3>
<p>The Product Definition keeps four signals separate. The prototype shows chips (Live/Offline, Ready/Provisional) but does not cleanly separate all four; this is a modelling question to resolve.</p>
<div class="tbl-wrap"><table><thead><tr><th>Signal</th><th>What it answers</th><th>In the prototype</th></tr></thead><tbody>
<tr><td>Work phase</td><td>Where the physical work is (Planned → Active → Complete)</td><td>${pill('par','PARTIAL')} shown on board/map</td></tr>
<tr><td>Review state</td><td>Whether the record is trusted (In progress → Submitted → Confirmed → Re-opened)</td><td>${pill('par','PARTIAL')} shown in QA queue</td></tr>
<tr><td>Testing flag</td><td>Whether the item is load-tested (independent boolean)</td><td>${pill('con','CONCEPTUAL')} implied only</td></tr>
<tr><td>Freshness</td><td>How current the shown status is (Fresh / Ageing / Stale)</td><td>${pill('con','CONCEPTUAL')} Live/Offline chip only</td></tr>
</tbody></table></div>
`};

// PM walkthrough
sections['04-pm-walkthrough'] = { num:'04', title:'Project Manager Walkthrough', body: `
${metaBlock([['Workflow ID','WF-PM'],['Primary actor','Project Manager'],['Supporting actors','Operator (inherits setup), Engineer (receives release)'],['Starting screen','Projects'],['End state','Confirmed records released; closeout assembled'],['Related PD IDs','SET, DSN, PLAN, SAF, PMV, QA, RPT, CLO'],['Prototype fidelity',`${pill('hi','HIGH-FIDELITY')} ${pill('sim','SIMULATED')}`]])}
<h3>A · Workflow at a glance</h3>
${flow([['PM','Open / create project','Projects'],['PM','Configure job','Work types → templates → plan'],['PM','Publish to field','Team &amp; Publish'],['PM','Monitor','Overview / Status Board / Spatial Map'],['PM','Confirm','QA Queue'],['PM','Release','Reporting → Closeout']])}
<h3>B · Step-by-step</h3>
<p>The prototype presents the PM setup as a continuous Configure spine. Key steps, each with its route and status:</p>
${shot('projects','Open or create a project; the project shell carries client + engineer.')}
${shot('work-types','Declare which work types this project runs — the configurable-engine idea.')}
${shot('layout','Define zones / work areas that group the plan and the board.')}
${shot('work-item-design','Build reusable Work Item Templates from specifications.')}
${shot('testing-standards','Set acceptance criteria once, applied at confirm.')}
${shot('evidence-qa','Define the evidence that makes a record confirmable.')}
${shot('work-plan','Place and commit work items by zone; AI plan-import is conceptual.')}
${shot('safety-risk-controls','Gate field sign-on with JSA / SWMS.')}
${shot('team-publish','Assign roles and publish the configured workflow to the crew.')}
${shot('overview','Monitor: what needs the PM&rsquo;s attention.')}
${shot('status-board','Project status at a glance, by zone.')}
${shot('spatial-map','Every work item located on the site image.')}
<h3>C · Outcome</h3>
<p>The workflow produces a preset project the field inherits, a live status picture, and — after QA — confirmed records assembled into reporting and closeout. The PM owns the record during QA and owns the release decision. In the prototype the flow is navigable and visually complete but not runnable end-to-end (no persistence).</p>
<h3>D · Scoping relevance</h3>
<ol><li>How is project + work-item identity stored, and how is derived project status computed and refreshed?</li><li>Plan-import (PDF → planned items) data flow with human approval.</li><li>How does &ldquo;publish to field&rdquo; commit a configuration the operator inherits offline?</li></ol>
`};

sections['05-operator-walkthrough'] = { num:'05', title:'Operator Walkthrough', body: `
${metaBlock([['Workflow ID','WF-OP'],['Primary actor','Operator'],['Supporting actors','Supervisor (sign-on, daily sheet), PM (receives submission)'],['Starting screen','Field Home'],['End state','Stage record submitted for QA'],['Related PD IDs','SOS, DRL, GRT, TST, DAS, INC, SAF, SPM'],['Prototype fidelity',`${pill('hi','HIGH-FIDELITY')} ${pill('sim','SIMULATED')}`]])}
<div class="callout"><span class="k">Core operator principle</span>The operator should primarily confirm and record what physically varies and what they observe. Project-design decisions are front-loaded into setup. The field surface is built for gloves, sun and poor connectivity.</div>
<h3>A · Workflow at a glance</h3>
${flow([['Operator','Sign on','Crew Sign-On'],['Operator','Locate','Spatial Map (field)'],['Operator','Capture','Drill → Grout → Test'],['Operator','Declare','Incident / redrill where needed'],['Operator','Submit','For QA']])}
<h3>B · Step-by-step (anchoring path)</h3>
<div class="shot-row">
${shot('field-home','The operator&rsquo;s day at a glance; sign-on gate.')}
${shot('crew-sign-on','Individual, attributable sign-on and clearance.')}
${shot('spatial-map-operator','Locate and identify the exact work item.')}
${shot('drill-log','Record the actual drilling — depth, lithology, observations.')}
${shot('grout-log','Count bags; the system computes grout variance.')}
${shot('anchor-test','AI proposes from the test sheet photo; the operator verifies and commits.')}
${shot('incident','Photo-first incident / near-miss, available offline anytime.')}
${shot('daily-activity','Daily Activity Sheet: default day, edit the exceptions.')}
${shot('safety-docs','Read and acknowledge the active JSA / SWMS.')}
</div>
<h3>C · Outcome</h3>
<p>Each capture produces a stage record owned by the operator while In progress, then submitted to the PM for QA. Ownership passes to the PM on submission. In the prototype, capture screens are the most mature area; save and submit change local state only.</p>
<h3>D · Where the prototype tests the principle</h3>
<p>The <strong>Anchor Test</strong> screen embodies &ldquo;AI proposes, a human approves, then it commits&rdquo;. The <strong>Grout Log</strong> embodies &ldquo;calculate the variance; declare the judgement call&rdquo;. No screen was found that pushes project-design decisions onto the operator, which is consistent with the principle. The chief weakness is that <strong>offline behaviour is asserted, not demonstrated</strong>.</p>
<h3>E · Scoping relevance</h3>
<ol><li>Offline-first capture + resync + conflict policy (largest risk).</li><li>Progressive save + submit-for-QA state transition + ownership handover.</li><li>AI extraction → human-verify → commit contract for the test record.</li></ol>
`};

sections['06-qa-confirm'] = { num:'06', title:'QA & Confirmation', body: `
<div class="callout alert"><span class="k">Load-bearing section</span>Confirmation is the trust spine of the whole system. Work phase and review state are separate; only confirmed records are released outward; re-open removes a record from outward visibility until re-confirmed. These behaviours are illustrated in the prototype but are not wired as a working state machine.</div>
${metaBlock([['Workflow ID','WF-QA'],['Primary actor','Project Manager'],['Starting screen','QA Queue'],['End state','Record confirmed (or re-opened)'],['Related PD IDs','QA-1..3, ALT-1/2, ENG'],['Prototype fidelity',`${pill('hi','HIGH-FIDELITY')} ${pill('sim','SIMULATED')}`]])}
<h3>A · The review-state machine (intended)</h3>
${flow([['Operator','In progress','Save at any stage'],['Operator','Submitted','Ownership → PM, operator locked'],['PM','Confirmed','Engineer-visible, emit-eligible'],['PM','Re-opened','Withdrawn until re-confirmed']])}
<h3>B · What the QA Queue shows</h3>
${shot('qa-queue','Compiled record B17: design vs actual depth, variance, requirements 5/5, evidence, reopen/approve.')}
<p>The prototype QA queue is high-fidelity: a filterable list (Ready / Needs attention / Approved / Reopened), a compiled work-item record with design-vs-actual, a computed variance, a requirements checklist, evidence thumbnails, operator notes, and two controls — <strong>Reopen with reason</strong> and <strong>Approve record</strong>. This is the clearest illustration of the Confirm stage in the prototype.</p>
<h3>C · What is illustrated vs missing</h3>
<div class="tbl-wrap"><table><thead><tr><th>Behaviour</th><th>Prototype</th><th>Note</th></tr></thead><tbody>
<tr><td>Compiled drill / grout / test record</td><td>${pill('hi','HIGH-FIDELITY')}</td><td>Shown for anchoring (B-series).</td></tr>
<tr><td>Requirements + evidence gate</td><td>${pill('hi','HIGH-FIDELITY')} ${pill('sim','SIMULATED')}</td><td>5/5 shown; not wired to Evidence &amp; QA setup.</td></tr>
<tr><td>Variance (computed) vs exception (declared)</td><td>${pill('par','PARTIAL')}</td><td>Variance shown; declared-exception path thin.</td></tr>
<tr><td>Operator edit-lock on submission</td><td>${pill('notrep','NOT REPRESENTED')}</td><td>No lock behaviour demonstrable.</td></tr>
<tr><td>Confirm → engineer visibility</td><td>${pill('sim','SIMULATED')}</td><td>Engineer View is a separate mock, not gated by a live confirm.</td></tr>
<tr><td>Re-open removes from outward view</td><td>${pill('notrep','NOT REPRESENTED')}</td><td>Re-open control exists; withdrawal effect not shown.</td></tr>
</tbody></table></div>
<h3>D · Scoping relevance</h3>
<ol><li>Implement the review-state machine with a single-owner rule per state.</li><li>Confirmed-only-outward enforcement + re-open withdrawal + re-confirmation + audit trail.</li><li>Bind the Evidence &amp; QA requirements to the confirm gate.</li></ol>
`};

sections['07-engineer'] = { num:'07', title:'Engineer & Client Walkthrough', body: `
${metaBlock([['Workflow ID','WF-ENG'],['Primary actor','Engineer (client)'],['Starting screen','Engineer View'],['End state','Trusted, read-only picture of confirmed work'],['Related PD IDs','ENG-1..4, RPT, CLO'],['Prototype fidelity',`${pill('hi','HIGH-FIDELITY')} ${pill('sim','SIMULATED')}`]])}
${shot('engineer-view','Confirmed, released work only; read-only chrome; curated exceptions.')}
<h3>What the engineer can + cannot see</h3>
<div class="tbl-wrap"><table><thead><tr><th>Can see</th><th>Cannot see</th></tr></thead><tbody>
<tr><td>Confirmed work items + the status board</td><td>In-progress or submitted (unconfirmed) work</td></tr>
<tr><td>Confirmed detail + testing results</td><td>Internal QA queue, operator notes not released</td></tr>
<tr><td>Exceptions the PM has released</td><td>Contractor-performance issues under review</td></tr>
<tr><td>Progressive reporting + closeout package</td><td>Any edit control — the view is read-only</td></tr>
</tbody></table></div>
<div class="callout"><span class="k">What makes the record trustworthy</span>Confirmed-only-outward: the engineer never sees unreviewed work. Provenance and confirmation are shown, not assumed. The PM curates exposure by the source of an issue — ground reality tends toward the client; contractor performance is resolved first.</div>
<h3>Prototype limitations</h3>
<p>The Engineer View is a high-fidelity mock of the read-only surface, but it is a standalone screen rather than a live projection of confirmed state — confirming a record in the QA queue does not currently drive what this view shows. Read-only enforcement is visual, not a permission boundary.</p>
<h3>Scoping relevance</h3>
<ol><li>Confirmed-only projection + curated-exception selection.</li><li>Read-only permission boundary + client identity / access.</li><li>Progressive reporting + closeout assembled from the live confirmed record.</li></ol>
`};

sections['08-work-types'] = { num:'08', title:'Work-Type Model', body: `
<p class="lead">A work type is configuration on one fixed operational spine. It declares required stages, required fields, completion criteria and a report format — the runtime renders from that configuration, not from bespoke code per type.</p>
<div class="callout"><span class="k">The V2 proof pair</span>Anchoring and piling are the V2 proof pair. Piling demonstrates that a <em>different done line</em> (a valid pile finishes at drilled) can operate on the same spine. The remaining catalogue — drilling, shotcrete, rockfall protection, drainage — should be reachable through configuration rather than duplicated workflow.</div>
<h3>What the Product Definition specifies vs what the prototype demonstrates</h3>
<div class="callout warn"><span class="k">Key discrepancy</span>The Product Definition fixes V2 depth at <strong>anchoring + piling</strong>, with the other four types onboarding as configuration. The prototype goes further: it ships <strong>capture screens for all six work types</strong>. This is the prototype running ahead of the written V2 scope — a scope decision to resolve, not a defect (see <a href="11-gaps.html">Section 11</a>).</div>
<div class="tbl-wrap"><table><thead><tr><th>Work type</th><th>PD V2 status</th><th>Prototype capture screens</th><th>Fidelity</th></tr></thead><tbody>
${[
  ['Anchoring','Proof pair (deep)','Drill Log · Grout Log · Anchor Test','HIGH-FIDELITY'],
  ['Piling / retaining','Proof pair (2nd done-line)','Install / Torque Log · Verticality &amp; Cut-off','MEDIUM-FIDELITY'],
  ['Drilling','Roadmap (config)','Borehole Log · Core Photos · Sample Register','MEDIUM-FIDELITY'],
  ['Shotcrete','Roadmap (config)','Substrate · Application · Thickness Check','MEDIUM-FIDELITY'],
  ['Rockfall protection','Roadmap (config)','Pin · Pull Test · Panel · Inspection Checklist','MEDIUM-FIDELITY'],
  ['Drainage','Roadmap (config)','Pipe Install · Flow Test · Backfill Inspection','MEDIUM-FIDELITY'],
].map(r=>`<tr><td><strong>${r[0]}</strong></td><td>${r[1]}</td><td>${r[2]}</td><td>${pill(fidClass(r[3]),r[3])}</td></tr>`).join('')}
</tbody></table></div>
<h3>The configurable engine, as the prototype frames it</h3>
${shotRow(['platform','module-preview'])}
<p>The <strong>Configurable Engine</strong> explainer and the <strong>Module Preview</strong> present the one-spine-many-types idea. What the prototype does <em>not</em> demonstrate is the actual configuration mechanism — how a work type&rsquo;s required stages, fields and completion criteria are declared and read at runtime. That is the central work-type scoping question.</p>
`};

// ---------- generated: 09 Screen Atlas ----------
function atlasSheet(s){
  const field = s.chrome==='field';
  const file = `${s.id}__${s.chrome}.png`;
  return `<div class="atlas-sheet" id="atlas-${s.id}">
    <div class="hd"><div><span class="id">${esc(s.id)} · ${esc(s.route)}</span><h4>${esc(s.name)}</h4></div>
      <div class="pills">${pill('role',s.role)} ${fidPill(s)} ${intPill(s)}</div></div>
    <div class="body">
      <div class="pic ${field?'field':''}"><img src="${SHOT}${file}" alt="${esc(s.name)}" loading="lazy"></div>
      <div class="info"><dl>
        <dt>Surface</dt><dd>${esc(s.surface)}</dd>
        <dt>Spine</dt><dd>${esc(s.spine)}</dd>
        ${s.workType?`<dt>Work type</dt><dd>${esc(s.workType)}</dd>`:''}
        <dt>Purpose</dt><dd>${esc(s.desc||'—')}</dd>
        <dt>PD refs</dt><dd class="mono">${esc(s.pdRefs.join(' ')||'—')}</dd>
        <dt>Limitations</dt><dd>${esc(s.limitations||'—')}</dd>
        <dt>Open question</dt><dd>${esc(s.openQuestion||'—')}</dd>
        <dt>Source</dt><dd class="mono">prototype/${esc(s.route)}</dd>
      </dl></div>
    </div></div>`;
}
const atlasOrder = ['Project Manager','Operator','Engineer (client)','Output (report)'];
sections['09-screen-atlas'] = { num:'09', title:'Screen Atlas', body: `
<p class="lead">One sheet per prototype screen — every route in the manifest is accounted for (${screens.length} screens). Each sheet carries the screenshot, purpose, Product Definition references, fidelity + interaction status, known limitations and the open question it raises.</p>
${atlasOrder.map(role=>`<h3>${esc(role)} surfaces</h3>${screens.filter(s=>s.role===role).map(atlasSheet).join('')}`).join('')}
`};

// ---------- generated: 10 Status Register ----------
sections['10-status-register'] = { num:'10', title:'Prototype Status Register', body: `
<p class="lead">High-level status across all major product areas. Prototype polish is not implementation readiness; interaction is simulated throughout unless noted.</p>
<div class="tbl-wrap"><table><thead><tr><th>Product area</th><th>Main screen</th><th>Fidelity</th><th>Interaction</th><th>Certainty</th><th>Recommended scoping attention</th></tr></thead><tbody>
${[
 ['Project setup','projects / configure','Fixed product decision','Setup persistence + project identity'],
 ['Work-type config','work-types / platform','Directionally stable','Runtime config shape; V2 scope 2 vs 6'],
 ['Work Item Template','work-item-design','Directionally stable','Template ← specification composition'],
 ['Work Plan / spatial','work-plan / spatial-map','Directionally stable','Image-relative positioning + plan-import'],
 ['Field capture (anchoring)','drill/grout/anchor-test','Fixed product decision','Offline write + progressive save'],
 ['Field capture (other types)','per-type screens','Prototype ahead of PD','Confirm V2 scope; config vs bespoke'],
 ['Safety / sign-on','crew-sign-on / safety','Fixed product decision','Attributable auth session + gate'],
 ['QA & confirm','qa-queue','Fixed product decision','Review-state machine (load-bearing)'],
 ['Reporting / release','reporting','Directionally stable','Confirmed-only-outward enforcement'],
 ['Closeout','closeout','Directionally stable','Package from live confirmed record'],
 ['Engineer view','engineer-view','Fixed product decision','Confirmed-only projection + read-only boundary'],
 ['Offline / sync','field chips only','Product definition complete, prototype incomplete','Largest technical risk — model + conflict policy'],
 ['State model (4 signals)','board / qa-queue','Interaction unresolved','Separate work-phase / review / testing / freshness'],
 ['Coordination seams','not a screen','Fixed product decision','Geolocation, org tier, addressable project (data model)'],
].map(r=>{
  const areaScreens = screens.filter(s=>r[1].split(' / ').some(p=>s.id.includes(p.split('/')[0].trim())||s.name.toLowerCase().includes(p.split(' ')[0].toLowerCase())));
  const f = areaScreens[0] ? fidPill(areaScreens[0]) : pill('con','CONCEPTUAL');
  const i = areaScreens[0] ? intPill(areaScreens[0]) : pill('notrep','NOT REPRESENTED');
  return `<tr><td><strong>${esc(r[0])}</strong></td><td class="mono">${esc(r[1])}</td><td>${f}</td><td>${i}</td><td>${esc(r[2])}</td><td>${esc(r[3])}</td></tr>`;
}).join('')}
</tbody></table></div>
<p class="lead" style="margin-top:18px">Fidelity distribution across all ${screens.length} screens:</p>
<div class="cards">
<div class="card"><h4>${screens.filter(s=>s.fidelity.startsWith('HIGH')).length} ${pill('hi','HIGH-FIDELITY')}</h4><p>Visually mature, close to intended behaviour.</p></div>
<div class="card"><h4>${screens.filter(s=>s.fidelity.startsWith('MEDIUM')).length} ${pill('med','MEDIUM-FIDELITY')}</h4><p>Structure + workflow clear; details incomplete.</p></div>
<div class="card"><h4>${screens.filter(s=>s.fidelity.startsWith('CONCEPTUAL')).length} ${pill('con','CONCEPTUAL')}</h4><p>Illustrative only.</p></div>
</div>
`};

sections['11-gaps'] = { num:'11', title:'Gaps & Contradictions', body: `
<p class="lead">Where the prototype and the Product Definition differ, the difference is stated, not resolved. Each item is classified so the Technical Lead and founders can route it correctly.</p>
<div class="tbl-wrap"><table><thead><tr><th>Item</th><th>Type</th><th>Detail</th></tr></thead><tbody>
${[
 ['Work-type scope (6 vs 2)','${contra}','Prototype ships capture for all six types; PD fixes V2 depth at anchoring + piling. Founder decision required.'],
 ['Screen count (52 vs 22)','${contra}','Prototype has 52 routes; PD Page Definition Sheets define 22. Reconcile the canonical set.'],
 ['Offline / sync not represented','Product-definition capability, prototype gap','The load-bearing offline + sync + conflict model is asserted via chips only. Technical question.'],
 ['State model not separated','Workflow gap','Work phase, review state, testing flag, freshness are not cleanly separate in the UI.'],
 ['Operator edit-lock on submit','Workflow gap','Submission → PM ownership + operator lock is not demonstrable.'],
 ['Re-open withdrawal effect','Workflow gap','Re-open control exists; the withdraw-from-outward-view effect is not shown.'],
 ['Confirm → engineer projection','Workflow gap','Engineer View is a standalone mock, not driven by a live confirm.'],
 ['Evidence gate not wired','Workflow gap','Evidence &amp; QA setup is not bound to the confirm requirements checklist.'],
 ['AI plan-import','Product-definition capability, prototype gap','Plan-import (PDF → planned items) is conceptual only.'],
 ['Coordination seams','Product-definition gap (by design)','Geolocation / org tier / addressable project are data-model seams, not screens.'],
 ['&ldquo;Team &amp; Publish&rdquo; not in PDS','Prototype ahead of PD','Roles + publish surface exists in the prototype but is not a numbered Page Definition Sheet.'],
 ['Terminology','Consistent','&ldquo;Work Item Template&rdquo;, &ldquo;Groundline Civil&rdquo;, TACEDGE casing all align with the current PD; no stale &ldquo;Rock Control&rdquo; / mixed-case found.'],
].map(r=>{const t=r[1].replace('${contra}','<span class="pill contra">CONTRADICTED</span>');return `<tr><td><strong>${r[0]}</strong></td><td>${t}</td><td>${r[2]}</td></tr>`;}).join('')}
</tbody></table></div>
<div class="callout"><span class="k">Not fabricated</span>No missing interaction has been invented to make a principle appear implemented. Where a behaviour is absent it is marked NOT REPRESENTED or the relevant gap, not shown as working.</div>
`};

sections['12-scoping-questions'] = { num:'12', title:'V2 Technical Scoping Questions', body: `
<p class="lead">A curated set of questions the prototype raises, grouped to help the Technical Lead focus the 30-hour scoping sprint. These are not answered here unless the Product Definition or prototype clearly resolves them.</p>
${[
 ['Offline &amp; sync','What is the offline-first capture model, the two payload classes (record vs media), and the conflict policy? This is the single largest technical risk and is not represented in the prototype.'],
 ['Review-state implementation','How is the submit → confirm → reopen machine implemented, with a single-owner rule per state, operator edit-lock, and audit trail?'],
 ['Confirmed-only-outward','How is outward visibility gated so only confirmed records reach the engineer/contract, and re-open withdraws them until re-confirmed?'],
 ['Work-type configuration','What is the runtime shape of a work-type declaration (required stages, fields, completion criteria, report format)? Is V2 scoped to anchoring + piling or all six?'],
 ['Work-item identity','System identifier vs human reference (e.g. B17): how is identity assigned, and what keys off it externally?'],
 ['Data model','Entities (project, zone, work type, work item, stage record, finding, evidence) and the invariants — how are they persisted?'],
 ['Spatial model','Image-relative positioning of work items; the geolocation coordination-readiness seam.'],
 ['AI-assisted workflows','Plan-import (PDF → planned items) and test-record extraction: the propose → human-approve → commit contract.'],
 ['Findings &amp; computation','Where are system-computed variances (depth, grout) calculated vs operator-declared exceptions?'],
 ['Permissions','Role → permission model; how &ldquo;publish to field&rdquo; and read-only engineer access are enforced.'],
 ['Reporting &amp; closeout','Per-type report formats; assembling reporting/closeout from the live confirmed record.'],
 ['Files &amp; evidence','Evidence model (polymorphic parent, provenance), thumbnails, offline media sync.'],
 ['Application architecture','The V2 stack: the prototype is dependency-free static HTML; V2 needs a real application + data layer. Migration from the legacy V1 codebase.'],
 ['Deployment','Hosting, environments, build + release for a real application (prototype deploys to GitHub Pages).'],
 ['Security','Auth provider, attributable sign-on sessions, credential handling.'],
].map((g,i)=>`<h3>${String(i+1).padStart(2,'0')} · ${g[0]}</h3><p>${g[1]}</p>`).join('')}
`};

sections['13-appendices'] = { num:'13', title:'Appendices', body: `
<p class="lead">Supporting registers and baselines. The CSV registers are machine-readable and live under <span class="mono">docs/v2-prototype-walkthrough/evidence/</span>.</p>
<h3>Registers</h3>
<div class="cards">
${[
 ['V2_Prototype_Inspection_Notes.md','Repository baseline + boundary statement + method'],
 ['V2_Product_Definition_Traceability.csv','PD requirement → prototype route → status'],
 ['V2_Prototype_Route_and_Screen_Inventory.csv','Every route: role, surface, fidelity, interaction, PD refs'],
 ['V2_Prototype_Screenshot_Capture_Plan.csv','Planned captures per screen'],
 ['V2_Prototype_Screenshot_Register.csv','Every screenshot: filename, viewport, redaction, PD refs'],
].map(r=>`<div class="card"><span class="rl">evidence/</span><h4 class="mono" style="font-size:12px">${esc(r[0])}</h4><p>${esc(r[1])}</p></div>`).join('')}
</div>
<h3>Full route inventory</h3>
<div class="tbl-wrap"><table><thead><tr><th>ID</th><th>Screen</th><th>Route</th><th>Role</th><th>Spine</th><th>Fidelity</th><th>Interaction</th><th>PD refs</th></tr></thead><tbody>
${screens.map(s=>`<tr><td class="mono">${esc(s.id)}</td><td>${esc(s.name)}</td><td class="mono">${esc(s.route)}</td><td>${esc(s.role)}</td><td>${esc(s.spine)}</td><td>${fidPill(s)}</td><td>${intPill(s)}</td><td class="mono" style="font-size:10px">${esc(s.pdRefs.join(' '))}</td></tr>`).join('')}
</tbody></table></div>
<h3>Repository + runtime baseline</h3>
${metaBlock([
  ['Repository','<span class="mono">tacedge/geotech-v2</span> @ <span class="mono">2101478</span>'],
  ['Prototype','Dependency-free static HTML/CSS/JS; 52 routes; no backend/DB'],
  ['Runtime','Served from a disposable read-only copy; all routes 200'],
  ['Data','Mock/sample only; no PII or credentials; no redaction required'],
  ['Boundary','Walkthrough confined to docs/, public/, working/ v2-prototype-walkthrough; prototype/ unchanged'],
])}
`};

// ---------- shell + page render ----------
function navHtml(active){
  return NAV.map(item=>{
    if(item[0]==='group') return `<div class="grp">${esc(item[1])}</div>`;
    const [id,n,t]=item; const href = id==='index'?'index.html':id+'.html';
    return `<a href="${href}" class="${id===active?'on':''}"><span class="n">${esc(n)}</span>${esc(t)}</a>`;
  }).join('');
}
function pageNav(id){
  const ids = NAV.filter(i=>i[0]!=='group').map(i=>i[0]);
  const i = ids.indexOf(id); const prev=ids[i-1], next=ids[i+1];
  const href=x=>x==='index'?'index.html':x+'.html';
  const label=x=>{const it=NAV.find(z=>z[0]===x);return it?it[1]+' · '+it[2]:x;};
  return `<div class="pagenav">${prev?`<a href="${href(prev)}">← ${esc(label(prev))}</a>`:'<span></span>'}${next?`<a href="${href(next)}">${esc(label(next))} →</a>`:'<span></span>'}</div>`;
}
function page(id, sec){
  return `<!doctype html><html lang="en-NZ"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(sec.num)} · ${esc(sec.title)} — TACEDGE V2 Prototype Walkthrough</title>
<link rel="stylesheet" href="assets/site.css"></head><body>
<div class="shell">
<nav class="nav noprint"><div class="brand"><img src="assets/tacedge-logo.png" alt="TACEDGE"></div><div class="kick">V2 Prototype Walkthrough</div>${navHtml(id)}</nav>
<main class="main"><div class="wrap">
<div class="masthead"><span class="classified">Internal · Prototype interpretation</span><p class="eyebrow">TACEDGE Ground Engineering V2 · Prototype Walkthrough</p><h1>${esc(sec.num)} · ${esc(sec.title)}</h1><p>${id==='index'?'A structured, visual explanation of the current V2 prototype for the incoming Technical Lead.':'Configure · Capture · Confirm — the current prototype, interpreted against the V2 Product Definition.'}</p></div>
<div class="sec first">${sec.body}</div>
${pageNav(id)}
<div class="foot"><span>Internal · TACEDGE Ground Engineering V2 · Prototype Walkthrough</span><span>Shared clarity for ground-engineering delivery.</span></div>
</div></main></div></body></html>`;
}

// TOC one-line descriptions
const TOC_DESC = {
  'index':'Purpose, baseline, runtime status, status classifications and how to navigate',
  '01-executive-summary':'The promise, the users, the spine, what the prototype demonstrates and what remains open',
  '02-prototype-map':'Every surface by role; primary navigation, handoffs and role boundaries',
  '03-spine':'The operating spine and the four separate state signals',
  '04-pm-walkthrough':'Setup, monitor, confirm and release — step by step with screenshots',
  '05-operator-walkthrough':'The field capture journey on the anchoring path',
  '06-qa-confirm':'The review-state machine and confirmed-only-outward (load-bearing)',
  '07-engineer':'Confirmed-only, read-only, curated engineer visibility',
  '08-work-types':'One spine, six work types; the anchoring + piling proof pair',
  '09-screen-atlas':'One sheet per prototype screen (52), with status and PD references',
  '10-status-register':'Fidelity and interaction status across all product areas',
  '11-gaps':'Where the prototype and the Product Definition differ',
  '12-scoping-questions':'Curated questions to focus the 30-hour scoping sprint',
  '13-appendices':'Registers, full route inventory and repository baseline',
};

function coverBlock(){
  const chips = NAV.filter(i=>i[0]!=='group'&&i[0]!=='print').map(i=>`<span>${esc(i[1])} · ${esc(i[2])}</span>`).join('');
  return `<div class="sec cover first"><div class="cover-page"><div class="cover-inner">
    <p class="ki">TACEDGE &nbsp;·&nbsp; Ground Engineering V2</p>
    <span class="cls">Internal · Prototype interpretation</span>
    <h1>Prototype Walkthrough</h1>
    <p class="sub">A visual interpretation of the current V2 prototype</p>
    <p class="lede">A structured, visual explanation of the current V2 prototype for the incoming Interim Development Technical Lead: the navigation, the intended product workflow, the purpose of each major screen, the role boundaries, the state transitions, what is directionally fixed and what remains open. Organised around Configure &middot; Capture &middot; Confirm.</p>
    <div class="cover-set">${chips}</div>
    <div class="cover-meta">
      <div>STATUS<b>v1.0 · Prototype interpretation</b></div>
      <div>CLASS<b>Internal</b></div>
      <div>PREPARED FOR<b>Interim Development Technical Lead</b></div>
      <div>PROTOTYPE BASELINE<b>tacedge/geotech-v2 @ 2101478</b></div>
      <div>INSPECTION DATE<b>17 July 2026</b></div>
      <div>PRODUCT MODEL<b>Configure · Capture · Confirm</b></div>
    </div>
  </div></div></div>`;
}
function contentsBlock(){
  const items = NAV.filter(i=>i[0]!=='group'&&i[0]!=='print').map(i=>{
    const [id,n,t]=i;
    return `<li><span class="n">${esc(n)}</span><a href="#sec-${id}">${esc(t)}</a><span class="d">${esc(TOC_DESC[id]||'')}</span></li>`;
  }).join('');
  return `<div class="sec contents"><h2><span class="n">—</span>Contents</h2>
    <p class="lead">Fourteen sections, from fast orientation to a full reference atlas. Each section begins on a new page in this document.</p>
    <ul class="toc-list">${items}</ul>
    <div class="foot" style="margin-top:22px"><span>Internal · TACEDGE Ground Engineering V2</span><span>Shared clarity for ground-engineering delivery.</span></div>
  </div>`;
}

// print page: cover + contents + everything, no nav
function printPage(){
  const order = NAV.filter(i=>i[0]!=='group' && i[0]!=='print').map(i=>i[0]);
  const body = order.map((id)=>{const s=sections[id];return `<div class="sec" id="sec-${id}"><h2><span class="n">${esc(s.num)}</span>${esc(s.title)}</h2>${s.body}</div>`;}).join('');
  return `<!doctype html><html lang="en-NZ"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>TACEDGE V2 Prototype Walkthrough</title><link rel="stylesheet" href="assets/site.css"></head><body>
<main class="main"><div class="wrap">
${coverBlock()}
${contentsBlock()}
${body}
<div class="foot"><span>Internal · TACEDGE Ground Engineering V2 · Prototype Walkthrough</span><span>Shared clarity for ground-engineering delivery.</span></div>
</div></main></body></html>`;
}

// write pages
let n=0;
for(const item of NAV){
  if(item[0]==='group'||item[0]==='print') continue;
  const id=item[0]; const sec=sections[id];
  // give each page its section num/title
  fs.writeFileSync(`${OUT}/${id==='index'?'index':id}.html`, page(id, sec)); n++;
}
fs.writeFileSync(`${OUT}/print.html`, printPage());
console.log('pages written:', n+1, '(incl print)');
