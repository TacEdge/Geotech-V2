/* ============================================================================
   Screen manifest - the single source of truth for the screen list, the
   launcher/index cards, navigation, and each screen's header. Add a screen
   here; index and the harness read from this list. Header markup is stored
   with the shared contour SVGs tokenised as {{CONTOUR:key}} (expanded by
   components/header.js) so the large artwork is defined once, not per screen.
   ========================================================================== */
window.TE_SCREENS = [
  {
    "id": "anchor-test",
    "title": "Anchor Test Record",
    "stage": "capture",
    "chrome": "field",
    "path": "screens/anchor-test.html",
    "header": "<header class=\"bar\">\n      {{CONTOUR:field}}\n      <a class=\"iconbtn\" href=\"../index.html\" aria-label=\"Back to home\" title=\"Back to home\"><svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15 18l-6-6 6-6\"/></svg></a>\n      <div class=\"ctx\"><span class=\"p\">Benmore · Spillway Anchoring</span><span class=\"z\">Rock Control · today</span></div>\n      <div class=\"right\"><span class=\"fresh\"><span class=\"d\"></span>Live</span>\n        <span class=\"av\">SK</span>\n      </div>\n    </header>"
  },
  {
    "id": "closeout",
    "title": "Project Closeout",
    "stage": "confirm",
    "chrome": "pm",
    "path": "screens/closeout.html",
    "header": "<header class=\"topbar\">\n  {{CONTOUR:desktop}}\n  <a class=\"burger\" href=\"../index.html\" aria-label=\"All screens\" title=\"All screens\"><span></span><span></span><span></span></a>\n  <div class=\"brand\"><span class=\"wordmark\">TACEDGE</span><span class=\"vert\"></span><span class=\"tag\">Geotech</span></div>\n  <div class=\"proj\">\n    <span class=\"name\">Benmore Dam – Spillway Anchoring</span>\n    <span class=\"meta\">Rock Control · Meridian Energy · WSP engineer</span>\n  </div>\n  <div class=\"right\">\n    <span class=\"sync\"><span class=\"dot\"></span>Synced 2 min ago</span>\n    <span class=\"who\"><span class=\"av\">TR</span>Tim R · PM <span class=\"car\">&#9662;</span></span>\n  </div>\n</header>"
  },
  {
    "id": "crew-sign-on",
    "title": "Crew Sign-On",
    "stage": "capture",
    "chrome": "field",
    "path": "screens/crew-sign-on.html",
    "header": "<header class=\"bar\">\n      {{CONTOUR:field}}\n      <a class=\"iconbtn\" href=\"../index.html\" aria-label=\"Back to home\" title=\"Back to home\"><svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15 18l-6-6 6-6\"/></svg></a>\n      <div class=\"ctx\"><span class=\"p\">Benmore • Spillway Anchoring</span><span class=\"z\">Rock Control • Today</span></div>\n      <div class=\"right\"><span class=\"fresh\"><span class=\"d\"></span>Live</span>\n        <span class=\"av\">SK</span>\n      </div>\n    </header>"
  },
  {
    "id": "daily-activity",
    "title": "Daily Activity Sheet",
    "stage": "capture",
    "chrome": "field",
    "path": "screens/daily-activity.html",
    "header": "<header class=\"bar\">\n      {{CONTOUR:field}}\n      <a class=\"iconbtn\" href=\"../index.html\" aria-label=\"Back to home\" title=\"Back to home\"><svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15 18l-6-6 6-6\"/></svg></a>\n      <div class=\"ctx\"><span class=\"p\">Benmore • Spillway Anchoring</span><span class=\"z\">Rock Control • today</span></div>\n      <div class=\"right\"><span class=\"fresh\"><span class=\"d\"></span>Live</span>\n        <span class=\"av\">SK</span>\n      </div>\n    </header>"
  },
  {
    "id": "drill-log",
    "title": "Drill Log",
    "stage": "capture",
    "chrome": "field",
    "path": "screens/drill-log.html",
    "header": "<header class=\"bar\">\n      {{CONTOUR:field}}\n      <a class=\"iconbtn\" href=\"../index.html\" aria-label=\"Back to home\" title=\"Back to home\"><svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15 18l-6-6 6-6\"/></svg></a>\n      <div class=\"ctx\"><span class=\"p\">Benmore • Spillway Anchoring</span><span class=\"z\">Rock Control • Today</span></div>\n      <div class=\"right\"><span class=\"fresh\"><span class=\"d\"></span>Live</span>\n        <span class=\"av\">SK</span>\n      </div>\n    </header>"
  },
  {
    "id": "engineer-view",
    "title": "Engineer View",
    "stage": "confirm",
    "chrome": "pm",
    "path": "screens/engineer-view.html",
    "header": "<header class=\"topbar\">\n  {{CONTOUR:engineer}}\n  <div class=\"brand\"><span class=\"wordmark\">TACEDGE</span><span class=\"vert\"></span><span class=\"tag\">Geotech</span></div>\n  <div class=\"proj\"><span class=\"name\">Benmore Dam – Spillway Anchoring</span><span class=\"meta\">Released by Rock Control · Meridian Energy</span></div>\n  <div class=\"right\">\n    <span class=\"ro-pill\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3.5\" y=\"9\" width=\"13\" height=\"8\" rx=\"2\"/><path d=\"M6.5 9V6.5a3.5 3.5 0 0 1 7 0V9\"/></svg> Read-only</span>\n    <span class=\"who\"><span class=\"av\">NH</span><span><span class=\"nm\">N. Hayes</span> · <span class=\"role\">WSP · Engineer</span></span></span>\n  </div>\n</header>"
  },
  {
    "id": "evidence-qa",
    "title": "Evidence & QA Requirements",
    "stage": "configure",
    "chrome": "pm",
    "path": "screens/evidence-qa.html",
    "header": "<header class=\"topbar\">\n  {{CONTOUR:desktop}}\n  <a class=\"burger\" href=\"../index.html\" aria-label=\"All screens\" title=\"All screens\"><span></span><span></span><span></span></a>\n  <div class=\"brand\"><span class=\"wordmark\">TACEDGE</span><span class=\"vert\"></span><span class=\"tag\">Geotech</span></div>\n  <div class=\"proj\"><span class=\"name\">Benmore Dam – Spillway Anchoring</span><span class=\"meta\">Rock Control · Meridian Energy · WSP engineer · Setup</span></div>\n  <div class=\"right\"><span class=\"sync\"><span class=\"dot\"></span>Synced 2 min ago</span><span class=\"who\"><span class=\"av\">TR</span>Tim R · PM <span class=\"car\">&#9662;</span></span></div>\n</header>"
  },
  {
    "id": "grout-log",
    "title": "Grout Log",
    "stage": "capture",
    "chrome": "field",
    "path": "screens/grout-log.html",
    "header": "<header class=\"bar\">\n      {{CONTOUR:field}}\n      <a class=\"iconbtn\" href=\"../index.html\" aria-label=\"Back to home\" title=\"Back to home\"><svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15 18l-6-6 6-6\"/></svg></a>\n      <div class=\"ctx\"><span class=\"p\">Benmore • Spillway Anchoring</span><span class=\"z\">Rock Control • today</span></div>\n      <div class=\"right\"><span class=\"fresh\"><span class=\"d\"></span>Live</span>\n        <span class=\"av\">SK</span>\n      </div>\n    </header>"
  },
  {
    "id": "incident",
    "title": "Incident / Near-Miss",
    "stage": "capture",
    "chrome": "field",
    "path": "screens/incident.html",
    "header": "<header class=\"bar\">\n      {{CONTOUR:field}}\n      <a class=\"iconbtn\" href=\"../index.html\" aria-label=\"Back to home\" title=\"Back to home\"><svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15 18l-6-6 6-6\"/></svg></a>\n      <div class=\"ctx\"><span class=\"p\">Benmore · Spillway Anchoring</span><span class=\"z\">Rock Control · today</span></div>\n      <div class=\"right\"><span class=\"fresh\"><span class=\"d\"></span>Offline</span>\n        <span class=\"av\">SK</span>\n      </div>\n    </header>"
  },
  {
    "id": "layout",
    "title": "Layout",
    "stage": "configure",
    "chrome": "pm",
    "path": "screens/layout.html",
    "header": "<header class=\"topbar\">\n  {{CONTOUR:desktop}}\n  <a class=\"burger\" href=\"../index.html\" aria-label=\"All screens\" title=\"All screens\"><span></span><span></span><span></span></a>\n  <div class=\"brand\"><span class=\"wordmark\">TACEDGE</span><span class=\"vert\"></span><span class=\"tag\">Geotech</span></div>\n  <div class=\"proj\"><span class=\"name\">Benmore Dam – Spillway Anchoring</span><span class=\"meta\">Rock Control · Meridian Energy · WSP engineer · Setup</span></div>\n  <div class=\"right\"><span class=\"sync\"><span class=\"dot\"></span>Synced 2 min ago</span><span class=\"who\"><span class=\"av\">TR</span>Tim R · PM <span class=\"car\">&#9662;</span></span></div>\n</header>"
  },
  {
    "id": "module-preview",
    "title": "Module Preview",
    "stage": null,
    "chrome": "field",
    "path": "screens/module-preview.html",
    "header": "<header class=\"topbar\">\n    <a class=\"back\" href=\"platform.html\" aria-label=\"Back to Configurable Engine\">\n      <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M19 12H5M11 4l-8 8 8 8\"/></svg>\n    </a>\n    <span class=\"ttl\">Piling / retaining</span>\n    <span class=\"badge\">Module preview</span>\n  </header>"
  },
  {
    "id": "overview",
    "title": "Overview",
    "stage": "capture",
    "chrome": "pm",
    "path": "screens/overview.html",
    "header": "<header class=\"topbar\">\n  {{CONTOUR:desktop}}\n  <a class=\"burger\" href=\"../index.html\" aria-label=\"All screens\" title=\"All screens\"><span></span><span></span><span></span></a>\n  <div class=\"brand\"><span class=\"wordmark\">TACEDGE</span><span class=\"vert\"></span><span class=\"tag\">Geotech</span></div>\n  <div class=\"proj\"><span class=\"name\">Benmore Dam – Spillway Anchoring</span><span class=\"meta\">Rock Control · Meridian Energy · WSP engineer</span></div>\n  <div class=\"right\"><span class=\"sync\"><span class=\"dot\"></span>Synced 2 min ago</span><span class=\"who\"><span class=\"av\">TR</span>Tim R · PM <span class=\"car\">&#9662;</span></span></div>\n</header>"
  },
  {
    "id": "platform",
    "title": "Configurable Engine",
    "stage": "configure",
    "chrome": "pm",
    "path": "screens/platform.html",
    "header": "<header class=\"topbar\">\n    <a class=\"burger\" href=\"../index.html\" aria-label=\"All screens\" title=\"All screens\"><span></span><span></span><span></span></a>\n    <span class=\"wordmark\">TACEDGE</span>\n    <span class=\"vert\"></span>\n    <span class=\"tag\">Geotech</span>\n    <div class=\"org\"><span class=\"on\">Rock Control</span><span class=\"om\">Geotechnical contractor</span></div>\n    <div class=\"right\"><span class=\"who\"><span class=\"av\">TR</span>Tim R · PM</span></div>\n  </header>"
  },
  {
    "id": "projects",
    "title": "Projects",
    "stage": "configure",
    "chrome": "pm",
    "path": "screens/projects.html",
    "header": "<header class=\"topbar\">\n    <a class=\"burger\" href=\"../index.html\" aria-label=\"All screens\" title=\"All screens\"><span></span><span></span><span></span></a>\n    <span class=\"wordmark\">TACEDGE</span>\n    <span class=\"vert\"></span>\n    <span class=\"tag\">Geotech</span>\n    <div class=\"org\"><span class=\"on\">Rock Control</span><span class=\"om\">Geotechnical contractor</span></div>\n    <div class=\"right\"><span class=\"who\"><span class=\"av\">TR</span>Tim R · PM</span></div>\n  </header>"
  },
  {
    "id": "qa-queue",
    "title": "QA Queue",
    "stage": "confirm",
    "chrome": "pm",
    "path": "screens/qa-queue.html",
    "header": "<header class=\"topbar\">\n  {{CONTOUR:desktop}}\n  <a class=\"burger\" href=\"../index.html\" aria-label=\"All screens\" title=\"All screens\"><span></span><span></span><span></span></a>\n  <div class=\"brand\"><span class=\"wordmark\">TACEDGE</span><span class=\"vert\"></span><span class=\"tag\">Geotech</span></div>\n  <div class=\"proj\"><span class=\"name\">Benmore Dam – Spillway Anchoring</span><span class=\"meta\">Rock Control · Meridian Energy · WSP engineer</span></div>\n  <div class=\"right\"><span class=\"sync\"><span class=\"dot\"></span>Synced 2 min ago</span><span class=\"who\"><span class=\"av\">TR</span>Tim R · PM <span class=\"car\">&#9662;</span></span></div>\n</header>"
  },
  {
    "id": "reference-documents-operator",
    "title": "Reference Documents · Field",
    "stage": "capture",
    "chrome": "field",
    "path": "screens/reference-documents-operator.html",
    "header": "<header class=\"bar\">\n      {{CONTOUR:field}}\n      <a class=\"iconbtn\" href=\"../index.html\" aria-label=\"Back to home\" title=\"Back to home\"><svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15 18l-6-6 6-6\"/></svg></a>\n      <div class=\"ctx\"><span class=\"p\">Benmore · Spillway Anchoring</span><span class=\"z\">Rock Control · today</span></div>\n      <div class=\"right\"><span class=\"fresh\"><span class=\"d\"></span>Live</span>\n        <span class=\"av\">SK</span>\n      </div>\n    </header>"
  },
  {
    "id": "reference-documents",
    "title": "Reference Documents",
    "stage": "capture",
    "chrome": "pm",
    "path": "screens/reference-documents.html",
    "header": "<header class=\"topbar\">\n  <a class=\"back\" href=\"overview.html\" aria-label=\"Back to Project Home\"><svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15 18l-6-6 6-6\"/></svg></a>\n  <div class=\"ctx\"><span class=\"p\">Benmore Dam · Spillway Anchoring</span><span class=\"z\">Rock Control · Meridian Energy</span></div>\n  <div class=\"sp\"></div>\n  <span class=\"sync\"><span class=\"dot\"></span>Synced 2 min ago</span>\n  <span class=\"who\"><span class=\"av\">TR</span>Tim R · PM</span>\n</header>"
  },
  {
    "id": "report-anchor-test",
    "title": "Anchor Test Report",
    "stage": null,
    "chrome": "none",
    "path": "screens/report-anchor-test.html"
  },
  {
    "id": "report-drill-summary",
    "title": "Drill Summary Report",
    "stage": null,
    "chrome": "none",
    "path": "screens/report-drill-summary.html"
  },
  {
    "id": "reporting",
    "title": "Reporting",
    "stage": "confirm",
    "chrome": "pm",
    "path": "screens/reporting.html",
    "header": "<header class=\"topbar\">\n  {{CONTOUR:desktop}}\n  <a class=\"burger\" href=\"../index.html\" aria-label=\"All screens\" title=\"All screens\"><span></span><span></span><span></span></a>\n  <div class=\"brand\"><span class=\"wordmark\">TACEDGE</span><span class=\"vert\"></span><span class=\"tag\">Geotech</span></div>\n  <div class=\"proj\"><span class=\"name\">Benmore Dam – Spillway Anchoring</span><span class=\"meta\">Rock Control · Meridian Energy · WSP engineer</span></div>\n  <div class=\"right\"><span class=\"sync\"><span class=\"dot\"></span>Synced 2 min ago</span><span class=\"who\"><span class=\"av\">TR</span>Tim R · PM <span class=\"car\">&#9662;</span></span></div>\n</header>"
  },
  {
    "id": "safety-docs",
    "title": "Safety Docs",
    "stage": "capture",
    "chrome": "field",
    "path": "screens/safety-docs.html",
    "header": "<header class=\"bar\">\n      {{CONTOUR:field}}\n      <a class=\"iconbtn\" href=\"../index.html\" aria-label=\"Back to home\" title=\"Back to home\"><svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15 18l-6-6 6-6\"/></svg></a>\n      <div class=\"ctx\"><span class=\"p\">Benmore • Spillway Anchoring</span><span class=\"z\">Rock Control • today</span></div>\n      <div class=\"right\"><button class=\"iconbtn\" id=\"fnavBtn\" aria-label=\"Switch screen\" title=\"Switch screen\"><svg width=\"21\" height=\"21\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.9\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3.5\" y=\"3.5\" width=\"7\" height=\"7\" rx=\"1.7\"/><rect x=\"13.5\" y=\"3.5\" width=\"7\" height=\"7\" rx=\"1.7\"/><rect x=\"3.5\" y=\"13.5\" width=\"7\" height=\"7\" rx=\"1.7\"/><rect x=\"13.5\" y=\"13.5\" width=\"7\" height=\"7\" rx=\"1.7\"/></svg></button>\n        <a class=\"iconbtn\" href=\"incident.html\" aria-label=\"Report incident or near-miss\" title=\"Report incident / near-miss\"><svg width=\"21\" height=\"21\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"/><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\"/><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"/></svg></a>\n        <span class=\"fresh\"><span class=\"d\"></span>Live</span>\n        <span class=\"av\">SK</span>\n      </div>\n    </header>"
  },
  {
    "id": "safety-risk-controls",
    "title": "Safety & Risk Controls",
    "stage": "configure",
    "chrome": "pm",
    "path": "screens/safety-risk-controls.html",
    "header": "<header class=\"topbar\">\n  {{CONTOUR:desktop}}\n  <a class=\"burger\" href=\"../index.html\" aria-label=\"All screens\" title=\"All screens\"><span></span><span></span><span></span></a>\n  <div class=\"brand\"><span class=\"wordmark\">TACEDGE</span><span class=\"vert\"></span><span class=\"tag\">Geotech</span></div>\n  <div class=\"proj\"><span class=\"name\">Benmore Dam – Spillway Anchoring</span><span class=\"meta\">Rock Control · Meridian Energy · WSP engineer · Setup</span></div>\n  <div class=\"right\"><span class=\"sync\"><span class=\"dot\"></span>Synced 2 min ago</span><span class=\"who\"><span class=\"av\">TR</span>Tim R · PM <span class=\"car\">&#9662;</span></span></div>\n</header>"
  },
  {
    "id": "spatial-map-operator",
    "title": "Spatial Map · Field",
    "stage": "capture",
    "chrome": "field",
    "path": "screens/spatial-map-operator.html",
    "header": "<header class=\"bar\">\n      {{CONTOUR:spmap}}\n      <a class=\"iconbtn\" href=\"../index.html\" aria-label=\"Back\">\n        <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12.5 4 6.5 10l6 6\"/></svg>\n      </a>\n      <div class=\"ctx\">\n        <div class=\"p\">Benmore · Spillway Anchoring</div>\n        <div class=\"z\">Rock Control · Today</div>\n      </div>\n      <div class=\"right\"><span class=\"fresh\"><span class=\"dot\"></span>Live</span>\n        <span class=\"av\">SK</span>\n      </div>\n    </header>"
  },
  {
    "id": "spatial-map",
    "title": "Spatial Map",
    "stage": "capture",
    "chrome": "pm",
    "path": "screens/spatial-map.html",
    "header": "<header class=\"topbar\">\n  {{CONTOUR:desktop}}\n  <a class=\"burger\" href=\"../index.html\" aria-label=\"All screens\" title=\"All screens\"><span></span><span></span><span></span></a>\n  <div class=\"brand\"><span class=\"wordmark\">TACEDGE</span><span class=\"vert\"></span><span class=\"tag\">Geotech</span></div>\n  <div class=\"proj\"><span class=\"name\">Benmore Dam – Spillway Anchoring</span><span class=\"meta\">Rock Control · Meridian Energy · WSP engineer</span></div>\n  <div class=\"right\"><span class=\"sync\"><span class=\"dot\"></span>Synced 2 min ago</span><span class=\"who\"><span class=\"av\">TR</span>Tim R · PM <span class=\"car\">&#9662;</span></span></div>\n</header>"
  },
  {
    "id": "status-board",
    "title": "Status Board",
    "stage": "capture",
    "chrome": "pm",
    "path": "screens/status-board.html",
    "header": "<header class=\"topbar\">\n  {{CONTOUR:desktop}}\n  <a class=\"burger\" href=\"../index.html\" aria-label=\"All screens\" title=\"All screens\"><span></span><span></span><span></span></a>\n  <div class=\"brand\"><span class=\"wordmark\">TACEDGE</span><span class=\"vert\"></span><span class=\"tag\">Geotech</span></div>\n  <div class=\"proj\">\n    <span class=\"name\">Benmore Dam – Spillway Anchoring</span>\n    <span class=\"meta\">Rock Control · Meridian Energy · WSP engineer</span>\n  </div>\n  <div class=\"right\">\n    <span class=\"sync\"><span class=\"dot\"></span>Synced 2 min ago</span>\n    <span class=\"who\"><span class=\"av\">TR</span>Tim R · PM <span class=\"car\">&#9662;</span></span>\n  </div>\n</header>"
  },
  {
    "id": "testing-standards",
    "title": "Testing Standards",
    "stage": "configure",
    "chrome": "pm",
    "path": "screens/testing-standards.html",
    "header": "<header class=\"topbar\">\n  {{CONTOUR:desktop}}\n  <a class=\"burger\" href=\"../index.html\" aria-label=\"All screens\" title=\"All screens\"><span></span><span></span><span></span></a>\n  <div class=\"brand\"><span class=\"wordmark\">TACEDGE</span><span class=\"vert\"></span><span class=\"tag\">Geotech</span></div>\n  <div class=\"proj\"><span class=\"name\">Benmore Dam – Spillway Anchoring</span><span class=\"meta\">Rock Control · Meridian Energy · WSP engineer · Setup</span></div>\n  <div class=\"right\"><span class=\"sync\"><span class=\"dot\"></span>Synced 2 min ago</span><span class=\"who\"><span class=\"av\">TR</span>Tim R · PM <span class=\"car\">&#9662;</span></span></div>\n</header>"
  },
  {
    "id": "work-item-design",
    "title": "Work Item Design",
    "stage": "configure",
    "chrome": "pm",
    "path": "screens/work-item-design.html",
    "header": "<header class=\"topbar\">\n  {{CONTOUR:desktop}}\n  <a class=\"burger\" href=\"../index.html\" aria-label=\"All screens\" title=\"All screens\"><span></span><span></span><span></span></a>\n  <div class=\"brand\"><span class=\"wordmark\">TACEDGE</span><span class=\"vert\"></span><span class=\"tag\">Geotech</span></div>\n  <div class=\"proj\"><span class=\"name\">Benmore Dam – Spillway Anchoring</span><span class=\"meta\">Rock Control · Meridian Energy · WSP engineer · Setup</span></div>\n  <div class=\"right\"><span class=\"sync\"><span class=\"dot\"></span>Synced 2 min ago</span><span class=\"who\"><span class=\"av\">TR</span>Tim R · PM <span class=\"car\">&#9662;</span></span></div>\n</header>"
  },
  {
    "id": "work-plan",
    "title": "Work Plan",
    "stage": "configure",
    "chrome": "pm",
    "path": "screens/work-plan.html",
    "header": "<header class=\"topbar\">\n  {{CONTOUR:desktop}}\n  <a class=\"burger\" href=\"../index.html\" aria-label=\"All screens\" title=\"All screens\"><span></span><span></span><span></span></a>\n  <div class=\"brand\"><span class=\"wordmark\">TACEDGE</span><span class=\"vert\"></span><span class=\"tag\">Geotech</span></div>\n  <div class=\"proj\"><span class=\"name\">Benmore Dam – Spillway Anchoring</span><span class=\"meta\">Rock Control · Meridian Energy · WSP engineer · Setup</span></div>\n  <div class=\"right\"><span class=\"sync\"><span class=\"dot\"></span>Synced 2 min ago</span><span class=\"who\"><span class=\"av\">TR</span>Tim R · PM <span class=\"car\">&#9662;</span></span></div>\n</header>"
  }
];
