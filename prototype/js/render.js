/* ============================================================================
   TacEdge Geotech V2.0 · tiny render helpers (shared, dependency-free).
   Just enough to inject config/mock data into a screen. No state library.
   ========================================================================== */
export function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
export function fmt(n, dp) {
  if (n == null || isNaN(n)) return '';
  return Number(n).toFixed(dp == null ? 2 : dp);
}
export function get(obj, path) {
  return path.split('.').reduce(function (o, k) {
    return o == null ? o : o[k];
  }, obj);
}
export function mount(el, html) {
  if (el) el.innerHTML = html;
}
/* Fill every [data-te] element's text from a dotted path into the context. */
export function hydrate(ctx, root) {
  (root || document).querySelectorAll('[data-te]').forEach(function (el) {
    var v = get(ctx, el.getAttribute('data-te'));
    if (v != null) el.textContent = v;
  });
}
