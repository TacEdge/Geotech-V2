/* ============================================================================
   Screen manifest - the single source of truth for the screen list, the
   launcher/index cards, navigation, and each screen's header. Add a screen
   here; index and the harness read from this list. Header markup is stored
   with the shared contour SVGs tokenised as {{CONTOUR:key}} (expanded by
   components/header.js) so the large artwork is defined once, not per screen.
   ========================================================================== */
window.TE_SCREENS = [
  {
    id: 'projects',
    title: 'Projects',
    stage: 'configure',
    chrome: 'pm',
    path: 'screens/projects.html',
    header:
      '<header class="topbar">\n    <a class="burger" href="../index.html" aria-label="All screens" title="All screens"><span></span><span></span><span></span></a>\n    <span class="wordmark">TACEDGE</span>\n    <span class="vert"></span>\n    <span class="tag">Geotech</span>\n    <div class="org"><span class="on">Rock Control</span><span class="om">Geotechnical contractor</span></div>\n    <div class="right"><span class="who"><span class="av">TR</span>Tim R · PM</span></div>\n  </header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/></svg>',
    cardTitle: 'Projects',
    desc: 'Pick or create a project.'
  },
  {
    id: 'platform',
    title: 'Configurable Engine',
    stage: 'configure',
    chrome: 'pm',
    path: 'screens/platform.html',
    header:
      '<header class="topbar">\n    <a class="burger" href="../index.html" aria-label="All screens" title="All screens"><span></span><span></span><span></span></a>\n    <span class="wordmark">TACEDGE</span>\n    <span class="vert"></span>\n    <span class="tag">Geotech</span>\n    <div class="org"><span class="on">Rock Control</span><span class="om">Geotechnical contractor</span></div>\n    <div class="right"><span class="who"><span class="av">TR</span>Tim R · PM</span></div>\n  </header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/></svg>',
    cardTitle: 'Configurable Engine',
    desc: 'One core, multiple geotech work types.'
  },
  {
    id: 'layout',
    title: 'Layout',
    stage: 'configure',
    chrome: 'pm',
    path: 'screens/layout.html',
    header:
      '<header class="topbar">\n  {{CONTOUR:desktop}}\n  <a class="burger" href="../index.html" aria-label="All screens" title="All screens"><span></span><span></span><span></span></a>\n  <div class="brand"><span class="wordmark">TACEDGE</span><span class="vert"></span><span class="tag">Geotech</span></div>\n  <div class="proj"><span class="name">Benmore Dam – Spillway Anchoring</span><span class="meta">Rock Control · Meridian Energy · WSP engineer · Setup</span></div>\n  <div class="right"><span class="sync"><span class="dot"></span>Synced 2 min ago</span><span class="who"><span class="av">TR</span>Tim R · PM <span class="car">&#9662;</span></span></div>\n</header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>',
    cardTitle: 'Layout',
    desc: 'Define zones and locations.'
  },
  {
    id: 'work-item-design',
    title: 'Work Item Design',
    stage: 'configure',
    chrome: 'pm',
    path: 'screens/work-item-design.html',
    header:
      '<header class="topbar">\n  {{CONTOUR:desktop}}\n  <a class="burger" href="../index.html" aria-label="All screens" title="All screens"><span></span><span></span><span></span></a>\n  <div class="brand"><span class="wordmark">TACEDGE</span><span class="vert"></span><span class="tag">Geotech</span></div>\n  <div class="proj"><span class="name">Benmore Dam – Spillway Anchoring</span><span class="meta">Rock Control · Meridian Energy · WSP engineer · Setup</span></div>\n  <div class="right"><span class="sync"><span class="dot"></span>Synced 2 min ago</span><span class="who"><span class="av">TR</span>Tim R · PM <span class="car">&#9662;</span></span></div>\n</header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20l4-1 10-10-3-3L5 16z"/><path d="M14 6l3 3"/></svg>',
    cardTitle: 'Work Item Design',
    desc: 'Set reusable anchor designs.'
  },
  {
    id: 'work-plan',
    title: 'Work Plan',
    stage: 'configure',
    chrome: 'pm',
    path: 'screens/work-plan.html',
    header:
      '<header class="topbar">\n  {{CONTOUR:desktop}}\n  <a class="burger" href="../index.html" aria-label="All screens" title="All screens"><span></span><span></span><span></span></a>\n  <div class="brand"><span class="wordmark">TACEDGE</span><span class="vert"></span><span class="tag">Geotech</span></div>\n  <div class="proj"><span class="name">Benmore Dam – Spillway Anchoring</span><span class="meta">Rock Control · Meridian Energy · WSP engineer · Setup</span></div>\n  <div class="right"><span class="sync"><span class="dot"></span>Synced 2 min ago</span><span class="who"><span class="av">TR</span>Tim R · PM <span class="car">&#9662;</span></span></div>\n</header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 9h16M8 3v4M16 3v4"/></svg>',
    cardTitle: 'Work Plan',
    desc: 'Plan and commit the work.'
  },
  {
    id: 'testing-standards',
    title: 'Testing Standards',
    stage: 'configure',
    chrome: 'pm',
    path: 'screens/testing-standards.html',
    header:
      '<header class="topbar">\n  {{CONTOUR:desktop}}\n  <a class="burger" href="../index.html" aria-label="All screens" title="All screens"><span></span><span></span><span></span></a>\n  <div class="brand"><span class="wordmark">TACEDGE</span><span class="vert"></span><span class="tag">Geotech</span></div>\n  <div class="proj"><span class="name">Benmore Dam – Spillway Anchoring</span><span class="meta">Rock Control · Meridian Energy · WSP engineer · Setup</span></div>\n  <div class="right"><span class="sync"><span class="dot"></span>Synced 2 min ago</span><span class="who"><span class="av">TR</span>Tim R · PM <span class="car">&#9662;</span></span></div>\n</header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8.5 12l2.5 2.5 4.5-5"/></svg>',
    cardTitle: 'Testing Standards',
    desc: 'Set pass criteria once.'
  },
  {
    id: 'evidence-qa',
    title: 'Evidence & QA Requirements',
    stage: 'configure',
    chrome: 'pm',
    path: 'screens/evidence-qa.html',
    header:
      '<header class="topbar">\n  {{CONTOUR:desktop}}\n  <a class="burger" href="../index.html" aria-label="All screens" title="All screens"><span></span><span></span><span></span></a>\n  <div class="brand"><span class="wordmark">TACEDGE</span><span class="vert"></span><span class="tag">Geotech</span></div>\n  <div class="proj"><span class="name">Benmore Dam – Spillway Anchoring</span><span class="meta">Rock Control · Meridian Energy · WSP engineer · Setup</span></div>\n  <div class="right"><span class="sync"><span class="dot"></span>Synced 2 min ago</span><span class="who"><span class="av">TR</span>Tim R · PM <span class="car">&#9662;</span></span></div>\n</header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v5c0 4-3 7-7 8-4-1-7-4-7-8V6z"/><path d="M9 12l2 2 4-4"/></svg>',
    cardTitle: 'Evidence &amp; QA Requirements',
    desc: 'Define what makes a record confirmable.'
  },
  {
    id: 'safety-risk-controls',
    title: 'Safety & Risk Controls',
    stage: 'configure',
    chrome: 'pm',
    path: 'screens/safety-risk-controls.html',
    header:
      '<header class="topbar">\n  {{CONTOUR:desktop}}\n  <a class="burger" href="../index.html" aria-label="All screens" title="All screens"><span></span><span></span><span></span></a>\n  <div class="brand"><span class="wordmark">TACEDGE</span><span class="vert"></span><span class="tag">Geotech</span></div>\n  <div class="proj"><span class="name">Benmore Dam – Spillway Anchoring</span><span class="meta">Rock Control · Meridian Energy · WSP engineer · Setup</span></div>\n  <div class="right"><span class="sync"><span class="dot"></span>Synced 2 min ago</span><span class="who"><span class="av">TR</span>Tim R · PM <span class="car">&#9662;</span></span></div>\n</header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4a6 6 0 016 6v2H6v-2a6 6 0 016-6z"/><path d="M4 16h16M4 14v2M20 14v2"/></svg>',
    cardTitle: 'Safety &amp; Risk Controls',
    desc: 'Gate sign-on with JSA/SWMS.'
  },
  {
    id: 'overview',
    title: 'Overview',
    stage: 'capture',
    chrome: 'pm',
    path: 'screens/overview.html',
    header:
      '<header class="topbar">\n  {{CONTOUR:desktop}}\n  <a class="burger" href="../index.html" aria-label="All screens" title="All screens"><span></span><span></span><span></span></a>\n  <div class="brand"><span class="wordmark">TACEDGE</span><span class="vert"></span><span class="tag">Geotech</span></div>\n  <div class="proj"><span class="name">Benmore Dam – Spillway Anchoring</span><span class="meta">Rock Control · Meridian Energy · WSP engineer</span></div>\n  <div class="right"><span class="sync"><span class="dot"></span>Synced 2 min ago</span><span class="who"><span class="av">TR</span>Tim R · PM <span class="car">&#9662;</span></span></div>\n</header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>',
    cardTitle: 'Overview',
    desc: "What needs the PM's attention."
  },
  {
    id: 'status-board',
    title: 'Status Board',
    stage: 'capture',
    chrome: 'pm',
    path: 'screens/status-board.html',
    header:
      '<header class="topbar">\n  {{CONTOUR:desktop}}\n  <a class="burger" href="../index.html" aria-label="All screens" title="All screens"><span></span><span></span><span></span></a>\n  <div class="brand"><span class="wordmark">TACEDGE</span><span class="vert"></span><span class="tag">Geotech</span></div>\n  <div class="proj">\n    <span class="name">Benmore Dam – Spillway Anchoring</span>\n    <span class="meta">Rock Control · Meridian Energy · WSP engineer</span>\n  </div>\n  <div class="right">\n    <span class="sync"><span class="dot"></span>Synced 2 min ago</span>\n    <span class="who"><span class="av">TR</span>Tim R · PM <span class="car">&#9662;</span></span>\n  </div>\n</header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="4" height="16" rx="1"/><rect x="10" y="4" width="4" height="11" rx="1"/><rect x="17" y="4" width="4" height="14" rx="1"/></svg>',
    cardTitle: 'Status Board',
    desc: 'Project status at a glance.'
  },
  {
    id: 'spatial-map',
    title: 'Spatial Map',
    stage: 'capture',
    chrome: 'pm',
    path: 'screens/spatial-map.html',
    header:
      '<header class="topbar">\n  {{CONTOUR:desktop}}\n  <a class="burger" href="../index.html" aria-label="All screens" title="All screens"><span></span><span></span><span></span></a>\n  <div class="brand"><span class="wordmark">TACEDGE</span><span class="vert"></span><span class="tag">Geotech</span></div>\n  <div class="proj"><span class="name">Benmore Dam – Spillway Anchoring</span><span class="meta">Rock Control · Meridian Energy · WSP engineer</span></div>\n  <div class="right"><span class="sync"><span class="dot"></span>Synced 2 min ago</span><span class="who"><span class="av">TR</span>Tim R · PM <span class="car">&#9662;</span></span></div>\n</header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 11-8 11s-8-5-8-11a8 8 0 0116 0z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    cardTitle: 'Spatial Map',
    desc: 'Every anchor on the site.'
  },
  {
    id: 'reference-documents',
    title: 'Reference Documents',
    stage: 'capture',
    chrome: 'pm',
    path: 'screens/reference-documents.html',
    header:
      '<header class="topbar">\n  <a class="back" href="overview.html" aria-label="Back to Project Home"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></a>\n  <div class="ctx"><span class="p">Benmore Dam · Spillway Anchoring</span><span class="z">Rock Control · Meridian Energy</span></div>\n  <div class="sp"></div>\n  <span class="sync"><span class="dot"></span>Synced 2 min ago</span>\n  <span class="who"><span class="av">TR</span>Tim R · PM</span>\n</header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5a2 2 0 012-2h13v18H6a2 2 0 01-2-2z"/><path d="M4 5v14"/></svg>',
    cardTitle: 'Reference Documents',
    desc: 'Approved project library.'
  },
  {
    id: 'crew-sign-on',
    title: 'Crew Sign-On',
    stage: 'capture',
    chrome: 'field',
    path: 'screens/crew-sign-on.html',
    header:
      '<header class="bar">\n      {{CONTOUR:field}}\n      <a class="iconbtn" href="../index.html" aria-label="Back to home" title="Back to home"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></a>\n      <div class="ctx"><span class="p">Benmore • Spillway Anchoring</span><span class="z">Rock Control • Today</span></div>\n      <div class="right"><span class="fresh"><span class="d"></span>Live</span>\n        <span class="av">SK</span>\n      </div>\n    </header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5"/><path d="M15.5 12.5l2 2 4-4"/></svg>',
    cardTitle: 'Crew Sign-On',
    desc: 'Individual sign-on and clearance.'
  },
  {
    id: 'drill-log',
    title: 'Drill Log',
    stage: 'capture',
    chrome: 'field',
    path: 'screens/drill-log.html',
    moduleId: 'drill_log',
    workTypes: ['anchoring', 'drainage'],
    header:
      '<header class="bar">\n      {{CONTOUR:field}}\n      <a class="iconbtn" href="../index.html" aria-label="Back to home" title="Back to home"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></a>\n      <div class="ctx"><span class="p">Benmore • Spillway Anchoring</span><span class="z">Rock Control • Today</span></div>\n      <div class="right"><span class="fresh"><span class="d"></span>Live</span>\n        <span class="av">SK</span>\n      </div>\n    </header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v10M8 9l4 4 4-4"/><rect x="7" y="16" width="10" height="4" rx="1"/></svg>',
    cardTitle: 'Drill Log',
    desc: 'Capture the actual drilling record.'
  },
  {
    id: 'grout-log',
    title: 'Grout Log',
    stage: 'capture',
    chrome: 'field',
    path: 'screens/grout-log.html',
    moduleId: 'grout_log',
    workTypes: ['anchoring'],
    header:
      '<header class="bar">\n      {{CONTOUR:field}}\n      <a class="iconbtn" href="../index.html" aria-label="Back to home" title="Back to home"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></a>\n      <div class="ctx"><span class="p">Benmore • Spillway Anchoring</span><span class="z">Rock Control • today</span></div>\n      <div class="right"><span class="fresh"><span class="d"></span>Live</span>\n        <span class="av">SK</span>\n      </div>\n    </header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3s6 7 6 11a6 6 0 01-12 0c0-4 6-11 6-11z"/></svg>',
    cardTitle: 'Grout Log',
    desc: 'Count bags; system computes variance.'
  },
  {
    id: 'anchor-test',
    title: 'Anchor Test Record',
    stage: 'capture',
    chrome: 'field',
    path: 'screens/anchor-test.html',
    moduleId: 'anchor_test',
    workTypes: ['anchoring'],
    header:
      '<header class="bar">\n      {{CONTOUR:field}}\n      <a class="iconbtn" href="../index.html" aria-label="Back to home" title="Back to home"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></a>\n      <div class="ctx"><span class="p">Benmore · Spillway Anchoring</span><span class="z">Rock Control · today</span></div>\n      <div class="right"><span class="fresh"><span class="d"></span>Live</span>\n        <span class="av">SK</span>\n      </div>\n    </header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2"/><path d="M12 7v13M5 12a7 7 0 0014 0M4 12H3M21 12h-2"/></svg>',
    cardTitle: 'Anchor Test Record',
    desc: 'AI proposes; operator verifies and commits.'
  },
  {
    id: 'incident',
    title: 'Incident / Near-Miss',
    stage: 'capture',
    chrome: 'field',
    path: 'screens/incident.html',
    moduleId: 'evidence',
    header:
      '<header class="bar">\n      {{CONTOUR:field}}\n      <a class="iconbtn" href="../index.html" aria-label="Back to home" title="Back to home"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></a>\n      <div class="ctx"><span class="p">Benmore · Spillway Anchoring</span><span class="z">Rock Control · today</span></div>\n      <div class="right"><span class="fresh"><span class="d"></span>Offline</span>\n        <span class="av">SK</span>\n      </div>\n    </header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4l9 16H3z"/><path d="M12 10v4M12 17v.01"/></svg>',
    cardTitle: 'Incident / Near-Miss',
    desc: 'Photo-first report, available anytime.'
  },
  {
    id: 'torque-log',
    title: 'Install / Torque Log',
    stage: 'capture',
    chrome: 'field',
    path: 'screens/torque-log.html',
    moduleId: 'torque_log',
    workTypes: ['piling'],
    header:
      '<header class="bar">\n      {{CONTOUR:field}}\n      <a class="iconbtn" href="../index.html" aria-label="Back to home" title="Back to home"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></a>\n      <div class="ctx"><span class="p">Cashmere Ridge · Screw Piling</span><span class="z">Rock Control · today</span></div>\n      <div class="right"><span class="fresh"><span class="d"></span>Live</span>\n        <span class="av">SK</span>\n      </div>\n    </header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 21v-3M4.2 8l3.4 2M16.4 14l3.4 2M4.2 16l3.4-2M16.4 10l3.4-2"/><circle cx="12" cy="12" r="3"/></svg>',
    cardTitle: 'Install / Torque Log',
    desc: 'Torque vs depth to founding.'
  },
  {
    id: 'verticality-cutoff',
    title: 'Verticality & Cut-off',
    stage: 'capture',
    chrome: 'field',
    path: 'screens/verticality-cutoff.html',
    moduleId: 'verticality_cutoff',
    workTypes: ['piling'],
    header:
      '<header class="bar">\n      {{CONTOUR:field}}\n      <a class="iconbtn" href="../index.html" aria-label="Back to home" title="Back to home"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></a>\n      <div class="ctx"><span class="p">Cashmere Ridge · Screw Piling</span><span class="z">Rock Control · today</span></div>\n      <div class="right"><span class="fresh"><span class="d"></span>Live</span>\n        <span class="av">SK</span>\n      </div>\n    </header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M12 3l4 5M12 3l-4 5"/><path d="M5 21h14"/></svg>',
    cardTitle: 'Verticality & Cut-off',
    desc: 'Two-axis tilt, cut-off and cap.'
  },
  {
    id: 'pin-install',
    title: 'Pin Install Record',
    stage: 'capture',
    chrome: 'field',
    path: 'screens/pin-install.html',
    moduleId: 'pin_install',
    workTypes: ['rockfall'],
    header:
      '<header class="bar">\n      {{CONTOUR:field}}\n      <a class="iconbtn" href="../index.html" aria-label="Back to home" title="Back to home"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></a>\n      <div class="ctx"><span class="p">Coastal Corridor · Rockfall</span><span class="z">Rock Control · today</span></div>\n      <div class="right"><span class="fresh"><span class="d"></span>Live</span>\n        <span class="av">SK</span>\n      </div>\n    </header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v11"/><path d="M8 8l4-4 4 4"/><rect x="7" y="16" width="10" height="4" rx="1"/></svg>',
    cardTitle: 'Pin Install Record',
    desc: 'Crest pin depth, grout, serial.'
  },
  {
    id: 'pull-test',
    title: 'Pull Test Record',
    stage: 'capture',
    chrome: 'field',
    path: 'screens/pull-test.html',
    moduleId: 'pull_test',
    workTypes: ['rockfall'],
    header:
      '<header class="bar">\n      {{CONTOUR:field}}\n      <a class="iconbtn" href="../index.html" aria-label="Back to home" title="Back to home"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></a>\n      <div class="ctx"><span class="p">Coastal Corridor · Rockfall</span><span class="z">Rock Control · today</span></div>\n      <div class="right"><span class="fresh"><span class="d"></span>Live</span>\n        <span class="av">SK</span>\n      </div>\n    </header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21V8"/><path d="M8 12l4-4 4 4"/><path d="M5 4h14"/></svg>',
    cardTitle: 'Pull Test Record',
    desc: 'Proof load, hold, result.'
  },
  {
    id: 'panel-install',
    title: 'Panel Install Record',
    stage: 'capture',
    chrome: 'field',
    path: 'screens/panel-install.html',
    moduleId: 'panel_install',
    workTypes: ['rockfall'],
    header:
      '<header class="bar">\n      {{CONTOUR:field}}\n      <a class="iconbtn" href="../index.html" aria-label="Back to home" title="Back to home"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></a>\n      <div class="ctx"><span class="p">Coastal Corridor · Rockfall</span><span class="z">Rock Control · today</span></div>\n      <div class="right"><span class="fresh"><span class="d"></span>Live</span>\n        <span class="av">SK</span>\n      </div>\n    </header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>',
    cardTitle: 'Panel Install Record',
    desc: 'Overlaps, serials, lot link.'
  },
  {
    id: 'inspection-checklist',
    title: 'Inspection Checklist',
    stage: 'capture',
    chrome: 'field',
    path: 'screens/inspection-checklist.html',
    moduleId: 'inspection_checklist',
    workTypes: ['rockfall'],
    header:
      '<header class="bar">\n      {{CONTOUR:field}}\n      <a class="iconbtn" href="../index.html" aria-label="Back to home" title="Back to home"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></a>\n      <div class="ctx"><span class="p">Coastal Corridor · Rockfall</span><span class="z">Rock Control · today</span></div>\n      <div class="right"><span class="fresh"><span class="d"></span>Live</span>\n        <span class="av">SK</span>\n      </div>\n    </header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M9 8l1.4 1.4L13 6.5"/><path d="M9 14l1.4 1.4L13 12.5"/></svg>',
    cardTitle: 'Inspection Checklist',
    desc: 'Lot closeout walkdown.'
  },
  {
    id: 'substrate-inspection',
    title: 'Substrate Inspection',
    stage: 'capture',
    chrome: 'field',
    path: 'screens/substrate-inspection.html',
    moduleId: 'substrate_inspection',
    workTypes: ['shotcrete'],
    header:
      '<header class="bar">\n      {{CONTOUR:field}}\n      <a class="iconbtn" href="../index.html" aria-label="Back to home" title="Back to home"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></a>\n      <div class="ctx"><span class="p">Quarry Face · Shotcrete</span><span class="z">Rock Control · today</span></div>\n      <div class="right"><span class="fresh"><span class="d"></span>Live</span>\n        <span class="av">JN</span>\n      </div>\n    </header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 18h16M4 18l3-9 5 3 4-6 4 12"/><circle cx="7" cy="9" r="1"/></svg>',
    cardTitle: 'Substrate Inspection',
    desc: 'Prep, mesh, witness hold.'
  },
  {
    id: 'application-record',
    title: 'Application Record',
    stage: 'capture',
    chrome: 'field',
    path: 'screens/application-record.html',
    moduleId: 'application_record',
    workTypes: ['shotcrete'],
    header:
      '<header class="bar">\n      {{CONTOUR:field}}\n      <a class="iconbtn" href="../index.html" aria-label="Back to home" title="Back to home"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></a>\n      <div class="ctx"><span class="p">Quarry Face · Shotcrete</span><span class="z">Rock Control · today</span></div>\n      <div class="right"><span class="fresh"><span class="d"></span>Live</span>\n        <span class="av">JN</span>\n      </div>\n    </header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/><path d="M10 12h5M10 15.5h5"/></svg>',
    cardTitle: 'Application Record',
    desc: 'Dockets, nozzleman, test panel.'
  },
  {
    id: 'thickness-check',
    title: 'Thickness Check',
    stage: 'capture',
    chrome: 'field',
    path: 'screens/thickness-check.html',
    moduleId: 'thickness_check',
    workTypes: ['shotcrete'],
    header:
      '<header class="bar">\n      {{CONTOUR:field}}\n      <a class="iconbtn" href="../index.html" aria-label="Back to home" title="Back to home"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></a>\n      <div class="ctx"><span class="p">Quarry Face · Shotcrete</span><span class="z">Rock Control · today</span></div>\n      <div class="right"><span class="fresh"><span class="d"></span>Live</span>\n        <span class="av">JN</span>\n      </div>\n    </header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M4 12h16M4 17h16"/><path d="M8 4v16"/></svg>',
    cardTitle: 'Thickness Check',
    desc: 'Probe readings vs 100 / 75 mm.'
  },
  {
    id: 'borehole-log',
    title: 'Borehole Log',
    stage: 'capture',
    chrome: 'field',
    path: 'screens/borehole-log.html',
    moduleId: 'borehole_log',
    workTypes: ['drilling'],
    header:
      '<header class="bar">\n      {{CONTOUR:field}}\n      <a class="iconbtn" href="../index.html" aria-label="Back to home" title="Back to home"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></a>\n      <div class="ctx"><span class="p">Slip Site · Drilling</span><span class="z">Rock Control · today</span></div>\n      <div class="right"><span class="fresh"><span class="d"></span>Live</span>\n        <span class="av">PR</span>\n      </div>\n    </header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v10"/><path d="M8 9l4 4 4-4"/><rect x="7" y="16" width="10" height="4" rx="1"/></svg>',
    cardTitle: 'Borehole Log',
    desc: 'Soils, SPT, runs, water.'
  },
  {
    id: 'core-photos',
    title: 'Core Photos',
    stage: 'capture',
    chrome: 'field',
    path: 'screens/core-photos.html',
    moduleId: 'core_photos',
    workTypes: ['drilling'],
    header:
      '<header class="bar">\n      {{CONTOUR:field}}\n      <a class="iconbtn" href="../index.html" aria-label="Back to home" title="Back to home"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></a>\n      <div class="ctx"><span class="p">Slip Site · Drilling</span><span class="z">Rock Control · today</span></div>\n      <div class="right"><span class="fresh"><span class="d"></span>Live</span>\n        <span class="av">PR</span>\n      </div>\n    </header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="14" rx="2"/><circle cx="12" cy="13" r="3.5"/><path d="M8 6l1.5-2h5L16 6"/></svg>',
    cardTitle: 'Core Photos',
    desc: 'Box register, wet and dry.'
  },
  {
    id: 'sample-register',
    title: 'Sample Register',
    stage: 'capture',
    chrome: 'field',
    path: 'screens/sample-register.html',
    moduleId: 'sample_register',
    workTypes: ['drilling'],
    header:
      '<header class="bar">\n      {{CONTOUR:field}}\n      <a class="iconbtn" href="../index.html" aria-label="Back to home" title="Back to home"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></a>\n      <div class="ctx"><span class="p">Slip Site · Drilling</span><span class="z">Rock Control · today</span></div>\n      <div class="right"><span class="fresh"><span class="d"></span>Live</span>\n        <span class="av">PR</span>\n      </div>\n    </header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2h6l4 4v14a2 2 0 0 1-2 2H8V4a2 2 0 0 1 2-2z"/><path d="M14 2v5h5"/><path d="M6 8v13a2 2 0 0 0 2 2h9"/></svg>',
    cardTitle: 'Sample Register',
    desc: 'Depth, type, custody.'
  },
  {
    id: 'pipe-install',
    title: 'Pipe Install',
    stage: 'capture',
    chrome: 'field',
    path: 'screens/pipe-install.html',
    moduleId: 'pipe_install',
    workTypes: ['drainage'],
    header:
      '<header class="bar">\n      {{CONTOUR:field}}\n      <a class="iconbtn" href="../index.html" aria-label="Back to home" title="Back to home"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></a>\n      <div class="ctx"><span class="p">Terrace Slip · Drainage</span><span class="z">Rock Control · today</span></div>\n      <div class="right"><span class="fresh"><span class="d"></span>Live</span>\n        <span class="av">SK</span>\n      </div>\n    </header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h13a3 3 0 0 0 3-3V6"/><path d="M3 9v6"/><circle cx="19" cy="6" r="2"/></svg>',
    cardTitle: 'Pipe Install',
    desc: 'Length, inclination, pipe, collar.'
  },
  {
    id: 'flow-test',
    title: 'Flow Test',
    stage: 'capture',
    chrome: 'field',
    path: 'screens/flow-test.html',
    moduleId: 'flow_test',
    workTypes: ['drainage'],
    header:
      '<header class="bar">\n      {{CONTOUR:field}}\n      <a class="iconbtn" href="../index.html" aria-label="Back to home" title="Back to home"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></a>\n      <div class="ctx"><span class="p">Terrace Slip · Drainage</span><span class="z">Rock Control · today</span></div>\n      <div class="right"><span class="fresh"><span class="d"></span>Live</span>\n        <span class="av">SK</span>\n      </div>\n    </header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z"/></svg>',
    cardTitle: 'Flow Test',
    desc: 'L/min at collar, zero permitted.'
  },
  {
    id: 'backfill-inspection',
    title: 'Backfill Inspection',
    stage: 'capture',
    chrome: 'field',
    path: 'screens/backfill-inspection.html',
    moduleId: 'backfill_inspection',
    workTypes: ['drainage'],
    header:
      '<header class="bar">\n      {{CONTOUR:field}}\n      <a class="iconbtn" href="../index.html" aria-label="Back to home" title="Back to home"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></a>\n      <div class="ctx"><span class="p">Terrace Slip · Drainage</span><span class="z">Rock Control · today</span></div>\n      <div class="right"><span class="fresh"><span class="d"></span>Live</span>\n        <span class="av">SK</span>\n      </div>\n    </header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 18h16M4 18v-6l8-5 8 5v6M9 18v-4h6v4"/></svg>',
    cardTitle: 'Backfill Inspection',
    desc: 'Layers, before-backfill hold.'
  },
  {
    id: 'daily-activity',
    title: 'Daily Activity Sheet',
    stage: 'capture',
    chrome: 'field',
    path: 'screens/daily-activity.html',
    header:
      '<header class="bar">\n      {{CONTOUR:field}}\n      <a class="iconbtn" href="../index.html" aria-label="Back to home" title="Back to home"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></a>\n      <div class="ctx"><span class="p">Benmore • Spillway Anchoring</span><span class="z">Rock Control • today</span></div>\n      <div class="right"><span class="fresh"><span class="d"></span>Live</span>\n        <span class="av">SK</span>\n      </div>\n    </header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 3h6v3H9z"/><path d="M9 11h6M9 15h4"/></svg>',
    cardTitle: 'Daily Activity Sheet',
    desc: 'Default day; edit exceptions.'
  },
  {
    id: 'spatial-map-operator',
    title: 'Spatial Map · Field',
    stage: 'capture',
    chrome: 'field',
    path: 'screens/spatial-map-operator.html',
    header:
      '<header class="bar">\n      {{CONTOUR:spmap}}\n      <a class="iconbtn" href="../index.html" aria-label="Back">\n        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 4 6.5 10l6 6"/></svg>\n      </a>\n      <div class="ctx">\n        <div class="p">Benmore · Spillway Anchoring</div>\n        <div class="z">Rock Control · Today</div>\n      </div>\n      <div class="right"><span class="fresh"><span class="dot"></span>Live</span>\n        <span class="av">SK</span>\n      </div>\n    </header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 11-8 11s-8-5-8-11a8 8 0 0116 0z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    cardTitle: 'Spatial Map · Field',
    desc: 'Identify anchors and continue work.'
  },
  {
    id: 'safety-docs',
    title: 'Safety Docs',
    stage: 'capture',
    chrome: 'field',
    path: 'screens/safety-docs.html',
    header:
      '<header class="bar">\n      {{CONTOUR:field}}\n      <a class="iconbtn" href="../index.html" aria-label="Back to home" title="Back to home"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></a>\n      <div class="ctx"><span class="p">Benmore • Spillway Anchoring</span><span class="z">Rock Control • today</span></div>\n      <div class="right"><button class="iconbtn" id="fnavBtn" aria-label="Switch screen" title="Switch screen"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="7" height="7" rx="1.7"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.7"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.7"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.7"/></svg></button>\n        <a class="iconbtn" href="incident.html" aria-label="Report incident or near-miss" title="Report incident / near-miss"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></a>\n        <span class="fresh"><span class="d"></span>Live</span>\n        <span class="av">SK</span>\n      </div>\n    </header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v5c0 4-3 7-7 8-4-1-7-4-7-8V6z"/><path d="M9 12l2 2 4-4"/></svg>',
    cardTitle: 'Safety Docs',
    desc: 'Read and acknowledge active JSA/SWMS.'
  },
  {
    id: 'reference-documents-operator',
    title: 'Reference Documents · Field',
    stage: 'capture',
    chrome: 'field',
    path: 'screens/reference-documents-operator.html',
    header:
      '<header class="bar">\n      {{CONTOUR:field}}\n      <a class="iconbtn" href="../index.html" aria-label="Back to home" title="Back to home"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></a>\n      <div class="ctx"><span class="p">Benmore · Spillway Anchoring</span><span class="z">Rock Control · today</span></div>\n      <div class="right"><span class="fresh"><span class="d"></span>Live</span>\n        <span class="av">SK</span>\n      </div>\n    </header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5a2 2 0 012-2h13v18H6a2 2 0 01-2-2z"/><path d="M4 5v14"/></svg>',
    cardTitle: 'Reference Documents · Field',
    desc: 'Read-only/offline library for crews.'
  },
  {
    id: 'qa-queue',
    title: 'QA Queue',
    stage: 'confirm',
    chrome: 'pm',
    path: 'screens/qa-queue.html',
    header:
      '<header class="topbar">\n  {{CONTOUR:desktop}}\n  <a class="burger" href="../index.html" aria-label="All screens" title="All screens"><span></span><span></span><span></span></a>\n  <div class="brand"><span class="wordmark">TACEDGE</span><span class="vert"></span><span class="tag">Geotech</span></div>\n  <div class="proj"><span class="name">Benmore Dam – Spillway Anchoring</span><span class="meta">Rock Control · Meridian Energy · WSP engineer</span></div>\n  <div class="right"><span class="sync"><span class="dot"></span>Synced 2 min ago</span><span class="who"><span class="av">TR</span>Tim R · PM <span class="car">&#9662;</span></span></div>\n</header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8.5 12l2.5 2.5 4.5-5"/></svg>',
    cardTitle: 'QA Queue',
    desc: 'Confirm a record, or reopen with a reason.'
  },
  {
    id: 'reporting',
    title: 'Reporting',
    stage: 'confirm',
    chrome: 'pm',
    path: 'screens/reporting.html',
    header:
      '<header class="topbar">\n  {{CONTOUR:desktop}}\n  <a class="burger" href="../index.html" aria-label="All screens" title="All screens"><span></span><span></span><span></span></a>\n  <div class="brand"><span class="wordmark">TACEDGE</span><span class="vert"></span><span class="tag">Geotech</span></div>\n  <div class="proj"><span class="name">Benmore Dam – Spillway Anchoring</span><span class="meta">Rock Control · Meridian Energy · WSP engineer</span></div>\n  <div class="right"><span class="sync"><span class="dot"></span>Synced 2 min ago</span><span class="who"><span class="av">TR</span>Tim R · PM <span class="car">&#9662;</span></span></div>\n</header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/><path d="M10 15v2M13 13v4M16 15v2"/></svg>',
    cardTitle: 'Reporting',
    desc: 'Assemble and release confirmed work.'
  },
  {
    id: 'closeout',
    title: 'Project Closeout',
    stage: 'confirm',
    chrome: 'pm',
    path: 'screens/closeout.html',
    header:
      '<header class="topbar">\n  {{CONTOUR:desktop}}\n  <a class="burger" href="../index.html" aria-label="All screens" title="All screens"><span></span><span></span><span></span></a>\n  <div class="brand"><span class="wordmark">TACEDGE</span><span class="vert"></span><span class="tag">Geotech</span></div>\n  <div class="proj">\n    <span class="name">Benmore Dam – Spillway Anchoring</span>\n    <span class="meta">Rock Control · Meridian Energy · WSP engineer</span>\n  </div>\n  <div class="right">\n    <span class="sync"><span class="dot"></span>Synced 2 min ago</span>\n    <span class="who"><span class="av">TR</span>Tim R · PM <span class="car">&#9662;</span></span>\n  </div>\n</header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="4" rx="1"/><path d="M5 8v11a1 1 0 001 1h12a1 1 0 001-1V8"/><path d="M10 12h4"/></svg>',
    cardTitle: 'Project Closeout',
    desc: 'Final checks before archive.'
  },
  {
    id: 'engineer-view',
    title: 'Engineer View',
    stage: 'confirm',
    chrome: 'pm',
    path: 'screens/engineer-view.html',
    header:
      '<header class="topbar">\n  {{CONTOUR:engineer}}\n  <div class="brand"><span class="wordmark">TACEDGE</span><span class="vert"></span><span class="tag">Geotech</span></div>\n  <div class="proj"><span class="name">Benmore Dam – Spillway Anchoring</span><span class="meta">Released by Rock Control · Meridian Energy</span></div>\n  <div class="right">\n    <span class="ro-pill"><svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="9" width="13" height="8" rx="2"/><path d="M6.5 9V6.5a3.5 3.5 0 0 1 7 0V9"/></svg> Read-only</span>\n    <span class="who"><span class="av">NH</span><span><span class="nm">N. Hayes</span> · <span class="role">WSP · Engineer</span></span></span>\n  </div>\n</header>',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="5"/><path d="M9 13l-1 8 4-2 4 2-1-8"/></svg>',
    cardTitle: 'Engineer View',
    desc: 'Confirmed, released work only.'
  },
  {
    id: 'report-anchor-test',
    title: 'Anchor Test Report',
    stage: null,
    chrome: 'none',
    path: 'screens/report-anchor-test.html'
  },
  {
    id: 'report-drill-summary',
    title: 'Drill Summary Report',
    stage: null,
    chrome: 'none',
    path: 'screens/report-drill-summary.html'
  },
  {
    id: 'report-pile-register',
    title: 'Pile Register Report',
    stage: null,
    chrome: 'none',
    path: 'screens/report-pile-register.html',
    workTypes: ['piling']
  },
  {
    id: 'report-rockfall-register',
    title: 'Rockfall Register Report',
    stage: null,
    chrome: 'none',
    path: 'screens/report-rockfall-register.html',
    workTypes: ['rockfall']
  },
  {
    id: 'report-shotcrete-register',
    title: 'Shotcrete Register Report',
    stage: null,
    chrome: 'none',
    path: 'screens/report-shotcrete-register.html',
    workTypes: ['shotcrete']
  },
  {
    id: 'report-borehole-log',
    title: 'Borehole Log Report',
    stage: null,
    chrome: 'none',
    path: 'screens/report-borehole-log.html',
    workTypes: ['drilling']
  },
  {
    id: 'report-drilling-schedule',
    title: 'Drilling Schedule Report',
    stage: null,
    chrome: 'none',
    path: 'screens/report-drilling-schedule.html',
    workTypes: ['drilling']
  },
  {
    id: 'report-drainage-register',
    title: 'Drainage Register Report',
    stage: null,
    chrome: 'none',
    path: 'screens/report-drainage-register.html',
    workTypes: ['drainage']
  },
  {
    id: 'module-preview',
    title: 'Module Preview',
    stage: null,
    chrome: 'field',
    path: 'screens/module-preview.html',
    header:
      '<header class="topbar">\n    <a class="back" href="platform.html" aria-label="Back to Configurable Engine">\n      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 4l-8 8 8 8"/></svg>\n    </a>\n    <span class="ttl">Piling / retaining</span>\n    <span class="badge">Module preview</span>\n  </header>'
  }
];
