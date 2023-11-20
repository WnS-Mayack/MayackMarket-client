const load = async ({ locals }) => {
  const searchData = {
    searchText: "",
    location: "서울",
    minPrice: null,
    maxPrice: null
  };
  if (locals.user) {
    searchData.location = locals.user.location;
  }
  return { searchData };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-c75ade04.js')).default;
const server_id = "src/routes/+page.server.ts";
const imports = ["_app/immutable/nodes/2.c89b014f.js","_app/immutable/chunks/scheduler.a8c18826.js","_app/immutable/chunks/index.f70754c7.js","_app/immutable/chunks/PostSkeleton.3e744f70.js","_app/immutable/chunks/navigation.e6d5941f.js","_app/immutable/chunks/singletons.3a2bae30.js","_app/immutable/chunks/stores.e595959b.js","_app/immutable/chunks/Modal.33b9a361.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/index.3578fc18.js","_app/immutable/chunks/axios.28bc18a3.js"];
const stylesheets = ["_app/immutable/assets/2.0b1273da.css","_app/immutable/assets/PostSkeleton.49774b2a.css","_app/immutable/assets/Modal.843bbf42.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-0a539e2f.js.map
