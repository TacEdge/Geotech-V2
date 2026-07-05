/* Build id for cache-busting. Overwritten in CI by the deploy workflow with the
   short commit SHA. This committed value is the local/dev fallback. */
window.__TE_BUILD = window.__TE_BUILD || 'dev';
