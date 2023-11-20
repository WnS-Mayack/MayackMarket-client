const load = async ({ locals }) => {
  return {
    user: locals.user || null
  };
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-462730e2.js')).default;
const server_id = "src/routes/+layout.server.ts";
const imports = ["_app/immutable/nodes/0.8516fff0.js","_app/immutable/chunks/scheduler.a8c18826.js","_app/immutable/chunks/index.f70754c7.js","_app/immutable/chunks/stores.e595959b.js","_app/immutable/chunks/singletons.3a2bae30.js"];
const stylesheets = ["_app/immutable/assets/0.2d9e9a68.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=0-757a01b9.js.map
