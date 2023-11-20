import * as server from '../entries/pages/write/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/write/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/write/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.fb698166.js","_app/immutable/chunks/scheduler.a8c18826.js","_app/immutable/chunks/index.f70754c7.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/index.3578fc18.js","_app/immutable/chunks/forms.34d201fd.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.5df0ac8f.js","_app/immutable/chunks/navigation.b34138aa.js","_app/immutable/chunks/Modal.33b9a361.js"];
export const stylesheets = ["_app/immutable/assets/8.f8c0ee74.css","_app/immutable/assets/Modal.843bbf42.css"];
export const fonts = [];
