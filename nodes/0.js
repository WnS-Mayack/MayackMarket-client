import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.dedc5518.js","_app/immutable/chunks/scheduler.a8c18826.js","_app/immutable/chunks/index.f70754c7.js","_app/immutable/chunks/stores.ef095af0.js","_app/immutable/chunks/singletons.dfe177b9.js"];
export const stylesheets = ["_app/immutable/assets/0.2d9e9a68.css"];
export const fonts = [];
