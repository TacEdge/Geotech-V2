/* ============================================================================
   Link versioner — cache-busting for internal navigation.
   ----------------------------------------------------------------------------
   On click, appends ?v=<build> to internal .html links so a fresh deploy is
   never served stale. The build id comes from window.__TE_BUILD (stamped into
   js/build.js by the deploy workflow), falling back to the --build CSS token
   so local serving still works without a stamped build.
   ========================================================================== */
(function () {
  try {
    var b = (window.__TE_BUILD || '').toString().replace(/[\s"']/g, '');
    if (!b) {
      b = getComputedStyle(document.documentElement)
        .getPropertyValue('--build')
        .replace(/[\s"']/g, '');
    }
    if (!b) return;
    document.addEventListener(
      'click',
      function (e) {
        var a = e.target.closest && e.target.closest('a');
        if (!a) return;
        var h = a.getAttribute('href');
        if (!h) return;
        if (/^(https?:|#|mailto:|tel:)/i.test(h)) return;
        if (!/\.html($|[?#])/i.test(h)) return;
        if (/[?&]v=/.test(h)) return;
        a.setAttribute('href', h + (h.indexOf('?') < 0 ? '?' : '&') + 'v=' + b);
      },
      true
    );
  } catch (_) {}
})();
