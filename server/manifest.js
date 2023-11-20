const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","logo.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.1347b4e8.js","app":"_app/immutable/entry/app.a4777754.js","imports":["_app/immutable/entry/start.1347b4e8.js","_app/immutable/chunks/scheduler.a8c18826.js","_app/immutable/chunks/singletons.3a2bae30.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.a4777754.js","_app/immutable/chunks/scheduler.a8c18826.js","_app/immutable/chunks/index.f70754c7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-757a01b9.js')),
			__memo(() => import('./chunks/1-f896d7f9.js')),
			__memo(() => import('./chunks/2-0a539e2f.js')),
			__memo(() => import('./chunks/3-d22b0e41.js')),
			__memo(() => import('./chunks/4-18c5d193.js')),
			__memo(() => import('./chunks/5-a9a679b6.js')),
			__memo(() => import('./chunks/6-d610b886.js')),
			__memo(() => import('./chunks/7-563a1955.js')),
			__memo(() => import('./chunks/8-39873915.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/my",
				pattern: /^\/my\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/post/[slug]",
				pattern: /^\/post\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/signIn",
				pattern: /^\/signIn\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/signUp",
				pattern: /^\/signUp\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/write",
				pattern: /^\/write\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
