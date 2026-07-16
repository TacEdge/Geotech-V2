/* ============================================================================
   TACEDGE Ground Engineering · Report shell (runtime half)
   ----------------------------------------------------------------------------
   The shared behaviour for engineer-facing report screens: fit each A4 .page
   to the viewport width (never magnifying past 1:1) so the print document is
   readable on a phone without horizontal scroll. Pairs with styles/report.css,
   which carries the print-document chrome. Report screens load both and hand-
   write only their own ident band, table and sign-off content.

   Load once per report: <script defer src="../components/report-shell.js">.
   ========================================================================== */
(function () {
  function fit() {
    var ps = document.querySelectorAll('.page');
    if (!ps.length) return;
    var vw = document.documentElement.clientWidth;
    ps.forEach(function (p) { p.style.zoom = ''; });
    var pw = ps[0].getBoundingClientRect().width;
    var z = Math.min(1, (vw - 6) / pw);
    ps.forEach(function (p) { p.style.zoom = z; });
  }
  window.addEventListener('resize', fit);
  if (document.readyState !== 'loading') fit();
  else document.addEventListener('DOMContentLoaded', fit);
  window.addEventListener('load', fit);
})();
