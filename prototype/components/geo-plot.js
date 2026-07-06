/* ============================================================================
   TacEdge Geotech V2.0 · Geometry plotter (shared, classic global)
   ----------------------------------------------------------------------------
   One code path for plotting work items onto a spatial canvas, driven by the
   item's template geometry. Every project (anchoring points, piling points,
   rockfall mixed points + polygons) renders through GEO.plot, so a new work
   type contributes coordinate data, not a new render path.

   Each item: { id, zone, phase, label, geometry, sel }
     · geometry 'point' → { x, y }          the pin idiom (dot, ring, label)
     · geometry 'area'  → { points:[[x,y]] } status-filled polygon + centroid

   Phase drives colour via the shared pin/area phase classes in the styles.
   GEO.plot(items, opts) returns an SVG markup string; the caller sets innerHTML.
   opts.point / opts.area override the default emitters so a screen can keep
   its own pin idiom (the operator map draws pins differently from the PM map)
   while sharing the geometry routing and the polygon/centroid logic for areas.
   GEO.esc is exposed so custom emitters escape identically.
   Loaded as a classic script so both classic and module callers can use it.
   ========================================================================== */
(function (root) {
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function point(it) {
    var cls = 'pin p-' + it.phase + (it.sel ? ' sel' : '');
    return '<g class="' + cls + '" data-id="' + esc(it.id) + '" data-zone="' + esc(it.zone) +
      '" data-phase="' + it.phase + '" transform="translate(' + it.x + ',' + it.y + ')">' +
      '<circle class="pback" r="17"/><circle class="ring" r="20"/><circle class="pdot" r="13.5"/>' +
      '<text class="plab" y="33">' + esc(it.label) + '</text></g>';
  }

  function area(it) {
    var pts = it.points || [];
    var d = pts.map(function (p) { return p[0] + ',' + p[1]; }).join(' ');
    var cx = 0, cy = 0;
    pts.forEach(function (p) { cx += +p[0]; cy += +p[1]; });
    if (pts.length) { cx /= pts.length; cy /= pts.length; }
    var cls = 'area a-' + it.phase + (it.sel ? ' sel' : '');
    return '<g class="' + cls + '" data-id="' + esc(it.id) + '" data-zone="' + esc(it.zone) +
      '" data-phase="' + it.phase + '">' +
      '<polygon class="afill" points="' + d + '"/><polygon class="aline" points="' + d + '"/>' +
      '<text class="alab" x="' + cx + '" y="' + cy + '">' + esc(it.label) + '</text></g>';
  }

  root.GEO = {
    esc: esc,
    plot: function (items, opts) {
      opts = opts || {};
      var pt = opts.point || point, ar = opts.area || area;
      return (items || []).map(function (it) {
        return it.geometry === 'area' ? ar(it) : pt(it);
      }).join('');
    }
  };
})(typeof window !== 'undefined' ? window : this);
