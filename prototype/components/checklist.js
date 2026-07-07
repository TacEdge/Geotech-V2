/* ============================================================================
   TacEdge Ground Engineering · Config-driven checklist
   ----------------------------------------------------------------------------
   A walkdown checklist rendered from a config-supplied item list. Each item is
   { label, ok }. Rows are tickable on the device (display only) and keyboard
   operable (space / enter). First used by the rockfall lot inspection; the
   shotcrete substrate inspection is the second consumer, so it lives here.

   renderChecklist(el, items) fills el with the rows and wires the toggles.
   ========================================================================== */
var CHK_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>';

function esc(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function renderChecklist(el, items, opts) {
  if (!el) return;
  opts = opts || {};
  var icon = opts.icon || CHK_ICON;
  el.innerHTML = (items || []).map(function (it) {
    return '<li class="' + (it.ok ? 'on' : '') + '" tabindex="0" role="checkbox" aria-checked="' + (it.ok ? 'true' : 'false') + '">' +
      '<span class="box">' + icon + '</span><span class="lbl">' + esc(it.label) + '</span></li>';
  }).join('');
  el.querySelectorAll('li').forEach(function (li) {
    function toggle() { var on = li.classList.toggle('on'); li.setAttribute('aria-checked', on ? 'true' : 'false'); }
    li.addEventListener('click', toggle);
    li.addEventListener('keydown', function (e) { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggle(); } });
  });
}
