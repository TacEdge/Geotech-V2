/* ============================================================================
   Header renderer. Mounts each screen's header from the manifest, expanding
   the tokenised contour artwork. Called synchronously right after the header
   placeholder so there is no post-paint layout shift.
   ========================================================================== */
window.TE_HEADER = (function () {
  var CONTOURS = {
    desktop:
      '<svg class="contour" viewBox="0 0 1400 64" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">\n    <g fill="none" stroke="#f3efe6" stroke-width="1">\n      <path d="M850,-20 C 980 34, 1040 12, 1180 74 C 1260 104, 1330 44, 1480 84"/>\n      <path d="M960,-40 C 1070 12, 1140 -6, 1270 56 C 1350 88, 1400 28, 1520 64"/>\n      <path d="M1030,-50 C 1130 2, 1200 -16, 1330 48 C 1410 80, 1450 20, 1560 54"/>\n    </g>\n  </svg>',
    field:
      '<svg class="contour" viewBox="0 0 480 60" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">\n        <g fill="none" stroke="#f3efe6" stroke-width="1">\n          <path d="M300,-18 C 360 30, 392 10, 462 66 C 502 92, 540 40, 612 76"/>\n          <path d="M348,-34 C 408 12, 440 -4, 510 52 C 552 80, 590 26, 660 60"/>\n          <path d="M384,-44 C 444 6, 476 -12, 546 46 C 588 74, 622 22, 700 52"/>\n        </g>\n      </svg>',
    engineer:
      '<svg class="contour" viewBox="0 0 1400 64" preserveAspectRatio="xMaxYMid slice" aria-hidden="true"><g fill="none" stroke="#f3efe6" stroke-width="1"><path d="M850,-20 C 980 34, 1040 12, 1180 74 C 1260 104, 1330 44, 1480 84"/><path d="M960,-40 C 1070 12, 1140 -6, 1270 56 C 1350 88, 1400 28, 1520 64"/></g></svg>',
    spmap:
      '<svg class="contour" viewBox="0 0 480 60" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">\n        <g fill="none" stroke="#f7f5ec" stroke-width="1">\n          <path d="M270,-10 C 350 22, 400 8, 470 44 C 520 64, 560 28, 610 52"/>\n          <path d="M330,-24 C 410 8, 450 -4, 520 34"/>\n          <path d="M370,-32 C 450 0, 490 -10, 560 30"/>\n        </g>\n      </svg>'
  };
  function byId(id) {
    var list = window.TE_SCREENS || [];
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
  }
  /* Header project context for non-default projects. The manifest header markup
     carries the default (Benmore) project text; when another project is active
     we swap the project name/meta so every screen's chrome matches the walk-
     through. Benmore has no entry here, so its headers are untouched. */
  var PROJECT_HEADERS = {
    'cashmere-ridge': {
      name: 'Cashmere Ridge · Screw Piling',
      meta: 'Groundline Civil · client TBC · engineer TBC',
      short: 'Cashmere Ridge • Screw Piling',
      zone: 'Groundline Civil • today'
    },
    'coastal-corridor': {
      name: 'Coastal Corridor · Rockfall',
      meta: 'Groundline Civil · Kaimoana District Council · Aurora Geotechnical',
      short: 'Coastal Corridor · Rockfall',
      zone: 'Groundline Civil • today'
    },
    'quarry-face': {
      name: 'Quarry Face · Shotcrete',
      meta: 'Groundline Civil · Southern Aggregates · WSP engineer',
      short: 'Quarry Face · Shotcrete',
      zone: 'Groundline Civil • today'
    },
    'slip-site': {
      name: 'Slip Site · Drilling',
      meta: 'Groundline Civil · Alpine District Council · Southern Geotechnical',
      short: 'Slip Site · Drilling',
      zone: 'Groundline Civil • today'
    },
    'terrace-slip': {
      name: 'Terrace Slip · Drainage',
      meta: 'Groundline Civil · Alpine District Council · Southern Geotechnical',
      short: 'Terrace Slip · Drainage',
      zone: 'Groundline Civil • today'
    }
  };
  function activeHeader() {
    try {
      var id = window.sessionStorage && sessionStorage.getItem('te.project');
      return id ? PROJECT_HEADERS[id] : null;
    } catch (_) { return null; }
  }
  function swap(root, sel, v) {
    var e = root.querySelector(sel);
    if (e && v != null) e.textContent = v;
  }
  function fill(id) {
    var s = byId(id);
    if (!s || !s.header) return;
    var html = s.header.replace(/\{\{CONTOUR:(\w+)\}\}/g, function (_, k) {
      return CONTOURS[k] || '';
    });
    var ph = document.currentScript && document.currentScript.previousElementSibling;
    if (!ph) return;
    var ah = activeHeader();
    if (ah) {
      // Apply the project override off-DOM, then inject the finished header.
      var tmp = document.createElement('div');
      tmp.innerHTML = html;
      swap(tmp, '.proj .name', ah.name);
      swap(tmp, '.proj .meta', ah.meta);
      swap(tmp, '.ctx .p', ah.short);
      swap(tmp, '.ctx .z', ah.zone);
      html = tmp.innerHTML;
    }
    ph.outerHTML = html;
  }
  return { fill: fill };
})();
