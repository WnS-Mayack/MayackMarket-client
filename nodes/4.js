import * as server from '../entries/pages/my/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/my/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/my/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.02ab02d9.js","_app/immutable/chunks/scheduler.a8c18826.js","_app/immutable/chunks/index.f70754c7.js","_app/immutable/chunks/PostSkeleton.58afb9bc.js","_app/immutable/chunks/navigation.cd8ed6fa.js","_app/immutable/chunks/singletons.dfe177b9.js","_app/immutable/chunks/stores.ef095af0.js","_app/immutable/chunks/Modal.33b9a361.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/forms.68f9f3d4.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/Avatar.68ec2227.js","_app/immutable/chunks/axios.28bc18a3.js"];
export const stylesheets = ["_app/immutable/assets/4.18150d10.css","_app/immutable/assets/PostSkeleton.49774b2a.css","_app/immutable/assets/Modal.843bbf42.css","_app/immutable/assets/Avatar.86c8d3dc.css"];
export const fonts = [];
