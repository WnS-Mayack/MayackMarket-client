import { c as create_ssr_component, f as each, d as add_attribute, e as escape, v as validate_component, i as is_promise, n as noop } from "../../chunks/ssr.js";
import { l as locations } from "../../chunks/index2.js";
import { P as PostSkeleton, a as PostList } from "../../chunks/PostSkeleton.js";
const SearchForm_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".searchForm-wrapper.svelte-auscno{display:flex;flex-direction:column;gap:0.5rem;margin:1rem 0}.search-container.svelte-auscno{display:flex;gap:0.5rem;align-items:center}label.svelte-auscno{min-width:4rem}select.svelte-auscno,input.svelte-auscno{width:100%;border:1px solid #e0e0e0;padding:8px;border-radius:50px;display:block;margin:auto;font-size:1rem;background-size:20px;padding-left:12px}",
  map: null
};
const SearchForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { searchData } = $$props;
  if ($$props.searchData === void 0 && $$bindings.searchData && searchData !== void 0)
    $$bindings.searchData(searchData);
  $$result.css.add(css$1);
  return `<section class="searchForm-wrapper svelte-auscno"><div class="search-container svelte-auscno"><label for="location" class="svelte-auscno" data-svelte-h="svelte-1ktry9y">지역</label> <select name="location" class="svelte-auscno">${each(locations, (location) => {
    return `<option${add_attribute("value", location, 0)}>${escape(location)}</option>`;
  })}</select></div> <div class="search-container svelte-auscno"><label for="serachText" class="svelte-auscno" data-svelte-h="svelte-1gnsfd0">검색어</label> <input type="text" name="searchText" placeholder="검색어 입력" class="svelte-auscno"${add_attribute("value", searchData.searchText, 0)}></div> <div class="search-container svelte-auscno"><label for="price" class="svelte-auscno" data-svelte-h="svelte-1vmno48">가격</label> <input type="number" name="minPrice" placeholder="최소 가격" class="svelte-auscno"${add_attribute("value", searchData.minPrice, 0)}> <span data-svelte-h="svelte-12uwiag">~</span> <input type="number" name="maxPrice" placeholder="최대 가격" class="svelte-auscno"${add_attribute("value", searchData.maxPrice, 0)}></div> <button class="mini-btn" data-svelte-h="svelte-1wifx5l">검색하기</button> </section>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".main-wrapper.svelte-11q1c5c{display:flex;flex-direction:column;gap:0.5rem;align-items:center;margin:2rem 0}.main-header.svelte-11q1c5c{width:-webkit-fill-available;display:flex;align-items:center;justify-content:space-evenly}.post-grid.svelte-11q1c5c{display:grid;align-self:flex-start;grid-template-columns:1fr 1fr 1fr 1fr;gap:1rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let searchData = data.searchData;
  let searchPromise;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="main-wrapper svelte-11q1c5c"><div class="main-header svelte-11q1c5c">${validate_component(SearchForm, "SearchForm").$$render($$result, { searchData }, {}, {})} ${data.user ? `<button class="custom-btn" data-svelte-h="svelte-1skenkd">판매글 쓰기</button>` : ``}</div> ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` ${validate_component(PostSkeleton, "PostSkeleton").$$render($$result, {}, {}, {})} `;
    }
    return function(searchResults) {
      return ` ${searchResults instanceof Array && searchResults.length > 0 ? `<section class="post-grid svelte-11q1c5c">${each(searchResults, (searchResult) => {
        return `${validate_component(PostList, "PostList").$$render($$result, { searchResult }, {}, {})}`;
      })}</section>` : `<h2 data-svelte-h="svelte-14rqt0n">검색결과 없음</h2>`} `;
    }(__value);
  }(searchPromise)} </div>`;
});
export {
  Page as default
};
