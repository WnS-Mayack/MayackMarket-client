import { r as redirect } from './index-0087e825.js';

const load = async ({ locals }) => {
  if (!locals.user) {
    throw redirect(301, "/");
  }
};
const actions = {
  signOut: async ({ cookies }) => {
    cookies.set("account", "", {
      path: "/",
      expires: /* @__PURE__ */ new Date(0)
    });
    throw redirect(303, "/");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-a456433c.js')).default;
const server_id = "src/routes/my/+page.server.ts";
const imports = ["_app/immutable/nodes/4.aa89feb0.js","_app/immutable/chunks/scheduler.a8c18826.js","_app/immutable/chunks/index.f70754c7.js","_app/immutable/chunks/PostSkeleton.3e744f70.js","_app/immutable/chunks/navigation.e6d5941f.js","_app/immutable/chunks/singletons.3a2bae30.js","_app/immutable/chunks/stores.e595959b.js","_app/immutable/chunks/Modal.33b9a361.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/forms.7cf6fc01.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/Avatar.68ec2227.js","_app/immutable/chunks/axios.28bc18a3.js"];
const stylesheets = ["_app/immutable/assets/4.18150d10.css","_app/immutable/assets/PostSkeleton.49774b2a.css","_app/immutable/assets/Modal.843bbf42.css","_app/immutable/assets/Avatar.86c8d3dc.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=4-18c5d193.js.map
