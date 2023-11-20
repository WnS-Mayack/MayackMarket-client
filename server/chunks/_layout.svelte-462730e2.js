import { c as create_ssr_component, b as subscribe, d as add_attribute } from './ssr-91264a9a.js';
import { p as page } from './stores-ff84b475.js';

const css = {
  code: "header.svelte-1xcrgt3{position:relative;display:flex;align-items:center;justify-content:space-between}.head-logo.svelte-1xcrgt3{display:flex;align-items:center;gap:1rem;&:hover {\n			text-decoration: none;\n		}}.head-name.svelte-1xcrgt3{font-size:1.8rem;font-weight:800}.head-image.svelte-1xcrgt3{width:50px;height:50px}.head-nav-list.svelte-1xcrgt3{list-style:none;display:flex;gap:2rem}footer.svelte-1xcrgt3{position:relative;display:flex;justify-content:center;font-weight:700}",
  map: null
};
let src = "/logo.png";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<header class="svelte-1xcrgt3"><a href="/" class="head-logo svelte-1xcrgt3"><img${add_attribute("src", src, 0)} alt="logo" class="head-image svelte-1xcrgt3"> <span class="head-name svelte-1xcrgt3" data-svelte-h="svelte-pj1f25">MaYackMarket</span></a> <nav class="head-nav"><ul class="head-nav-list svelte-1xcrgt3">${$page.data.user ? `<li data-svelte-h="svelte-hrzyju"><a href="/my">마이페이지</a></li> <li data-svelte-h="svelte-j7y8cm"><a href="/alram">알림확인</a></li> <li data-svelte-h="svelte-j7grq7"><a href="/chat">채팅</a></li>` : `<li data-svelte-h="svelte-fi0em6"><a href="/signIn">로그인</a></li>`}</ul></nav></header> <main>${slots.default ? slots.default({}) : ``}</main> <footer class="svelte-1xcrgt3" data-svelte-h="svelte-1p44aqe">created by I&#39;m_younique</footer>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-462730e2.js.map
