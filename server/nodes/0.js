import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.e31aab59.js","_app/immutable/chunks/scheduler.a8c18826.js","_app/immutable/chunks/index.f70754c7.js","_app/immutable/chunks/stores.8c6af96d.js","_app/immutable/chunks/singletons.5df0ac8f.js"];
export const stylesheets = ["_app/immutable/assets/0.2d9e9a68.css"];
export const fonts = [];
