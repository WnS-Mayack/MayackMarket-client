import * as server from '../entries/pages/post/_slug_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/post/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/post/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.bc4aaed6.js","_app/immutable/chunks/scheduler.a8c18826.js","_app/immutable/chunks/index.f70754c7.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/Avatar.68ec2227.js","_app/immutable/chunks/Modal.33b9a361.js","_app/immutable/chunks/axios.28bc18a3.js"];
export const stylesheets = ["_app/immutable/assets/5.731565bb.css","_app/immutable/assets/Avatar.86c8d3dc.css","_app/immutable/assets/Modal.843bbf42.css"];
export const fonts = [];
