

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.d7ccd134.js","_app/immutable/chunks/scheduler.a8c18826.js","_app/immutable/chunks/index.f70754c7.js","_app/immutable/chunks/stores.ef095af0.js","_app/immutable/chunks/singletons.dfe177b9.js"];
export const stylesheets = [];
export const fonts = [];
