/* ============================================================================
   Standalone navigation — keeps an installed PWA inside the app.
   ----------------------------------------------------------------------------
   In iOS standalone mode a normal link would break out to Safari. This keeps
   same-host, same-tab navigation within the installed shell.
   ========================================================================== */
(function () {
  if (window.navigator.standalone) {
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest("a");
      if (a && a.getAttribute("href") && a.target !== "_blank" && a.host === location.host) {
        e.preventDefault();
        location.href = a.href;
      }
    }, true);
  }
})();
