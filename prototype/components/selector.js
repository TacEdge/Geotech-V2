/* ============================================================================
   TacEdge Ground Engineering · Config-driven record selector
   ----------------------------------------------------------------------------
   The horizontal chip row that lets a field screen page between its records
   (a pile, a pin, a panel, a spray lot). Every capture screen renders the same
   markup: a strip of .ps buttons, each a primary label (.pn) over a secondary
   line (.pz), with the first selected. This was hand-repeated in eight screens;
   it now lives here.

   renderSelector(el, items, opts) fills el and wires the taps.
     items : [{ primary, secondary, cls? }]   cls adds a state class e.g. 'fail'
     opts  : { onSelect(index) }              called when a chip is tapped

   The caller keeps its own render(index) for the rest of the screen, including
   the .sel toggle, exactly as before; this only owns the chip markup and taps.
   ========================================================================== */
function esc(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function renderSelector(el, items, opts) {
  if (!el) return;
  opts = opts || {};
  el.innerHTML = (items || []).map(function (it, i) {
    return '<button class="ps' + (i === 0 ? ' sel' : '') + (it.cls ? ' ' + it.cls : '') +
      '" data-i="' + i + '"><span class="pn">' + esc(it.primary) + '</span>' +
      '<span class="pz">' + esc(it.secondary) + '</span></button>';
  }).join('');
  el.querySelectorAll('.ps').forEach(function (b) {
    b.addEventListener('click', function () { if (opts.onSelect) opts.onSelect(+b.dataset.i); });
  });
}
