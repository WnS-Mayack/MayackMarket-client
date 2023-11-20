import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.8dc74027.js","_app/immutable/chunks/scheduler.a8c18826.js","_app/immutable/chunks/index.f70754c7.js","_app/immutable/chunks/PostSkeleton.2902ee43.js","_app/immutable/chunks/navigation.31ae56e4.js","_app/immutable/chunks/singletons.68c86d5e.js","_app/immutable/chunks/stores.c0324ca6.js","_app/immutable/chunks/Modal.33b9a361.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/index.3578fc18.js","_app/immutable/chunks/axios.28bc18a3.js"];
export const stylesheets = ["_app/immutable/assets/2.0b1273da.css","_app/immutable/assets/PostSkeleton.49774b2a.css","_app/immutable/assets/Modal.843bbf42.css"];
export const fonts = [];
