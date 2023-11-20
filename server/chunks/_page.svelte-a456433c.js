import { c as create_ssr_component, b as subscribe, e as escape, v as validate_component, d as add_attribute, f as each, i as is_promise, n as noop } from './ssr-91264a9a.js';
import { p as page } from './stores-ff84b475.js';
import { A as Avatar } from './Avatar-49eeec57.js';
import { P as PostSkeleton, a as PostList } from './PostSkeleton-ce0fa947.js';

const css = {
  code: '@charset "UTF-8";.my-page-wrapper.svelte-5wo8n1.svelte-5wo8n1.svelte-5wo8n1{display:flex;gap:1rem;margin-top:2rem}.user-profile-wrapper.svelte-5wo8n1.svelte-5wo8n1.svelte-5wo8n1{display:flex;flex-direction:column;min-width:15rem;max-width:20rem;gap:1rem;align-items:center}.user-profile.svelte-5wo8n1.svelte-5wo8n1.svelte-5wo8n1{display:flex;align-items:center;gap:1rem}.user-profile.svelte-5wo8n1>.svelte-5wo8n1.svelte-5wo8n1:nth-child(1){display:flex;flex-direction:column;gap:0.5rem;align-items:center}.user-profile.svelte-5wo8n1>.svelte-5wo8n1:nth-child(1)>.svelte-5wo8n1:nth-child(1){font-size:1.5rem;font-weight:700}.keywords-wrapper.svelte-5wo8n1>.svelte-5wo8n1.svelte-5wo8n1:nth-child(1){display:flex;gap:1rem}.keywords-wrapper.svelte-5wo8n1>.svelte-5wo8n1.svelte-5wo8n1:nth-child(2){margin-top:1rem}input.svelte-5wo8n1.svelte-5wo8n1.svelte-5wo8n1{width:60%;border:1px solid #e0e0e0;padding:8px;border-radius:50px;display:block;margin:auto;font-size:1rem;background-size:20px;padding-left:12px}.my-post-wrapper.svelte-5wo8n1.svelte-5wo8n1.svelte-5wo8n1{display:flex;flex-direction:column;gap:2rem}.keywords-list.svelte-5wo8n1.svelte-5wo8n1.svelte-5wo8n1{margin-top:0.5rem;display:flex;gap:0.5rem;flex-wrap:wrap}.keywords-list.svelte-5wo8n1 div.svelte-5wo8n1.svelte-5wo8n1{background-color:orange;color:black;font-weight:600;border-radius:16px;padding:8px}.keywords-list.svelte-5wo8n1 div.svelte-5wo8n1.svelte-5wo8n1::before{content:"#"}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const user = $page.data.user;
  ({ account: user.userId });
  let keywordValue = "";
  let keywordList = [];
  let sellItemPromise;
  let likeItemPromise;
  let buyItemPromise;
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="my-page-wrapper svelte-5wo8n1"><div class="user-profile-wrapper svelte-5wo8n1"><div class="user-profile svelte-5wo8n1"><div class="svelte-5wo8n1"><span class="svelte-5wo8n1">${escape(user.nickname)}</span> <span class="svelte-5wo8n1">활동지역 : ${escape(user.location)}</span></div> ${validate_component(Avatar, "Avatar").$$render(
    $$result,
    {
      imgString: `http://168.188.123.234:8080${user.img}`,
      size: 50
    },
    {},
    {}
  )}</div> <div class="keywords-wrapper svelte-5wo8n1"><div class="svelte-5wo8n1"><input type="text" placeholder="관심키워드 추가" class="svelte-5wo8n1"${add_attribute("value", keywordValue, 0)}> <button class="mini-btn" data-svelte-h="svelte-1t1ckk7">추가</button></div> <div class="svelte-5wo8n1"><span data-svelte-h="svelte-dh8fw0">관심키워드 목록</span> <div class="keywords-list svelte-5wo8n1">${each(keywordList, (keyword) => {
    return `<div class="svelte-5wo8n1">${escape(keyword)}</div>`;
  })}</div></div></div> <form method="POST" action="?/signOut" data-svelte-h="svelte-15towop"><button class="custom-btn">로그아웃</button></form></div> <div class="my-post-wrapper svelte-5wo8n1"><div class="my-post"><h2 data-svelte-h="svelte-1yz7zfj">[관심내역]</h2> ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` ${validate_component(PostSkeleton, "PostSkeleton").$$render($$result, {}, {}, {})} `;
    }
    return function(likeItemResults) {
      return ` ${likeItemResults instanceof Array && likeItemResults.length > 0 ? `${each(likeItemResults, (likeItemResult) => {
        return `${validate_component(PostList, "PostList").$$render($$result, { searchResult: likeItemResult }, {}, {})}`;
      })}` : `<h2 data-svelte-h="svelte-13reprh">좋아요 목록 없음</h2>`} `;
    }(__value);
  }(likeItemPromise)}</div> <div class="my-post"><h2 data-svelte-h="svelte-1ue24uf">[판매내역]</h2> ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` ${validate_component(PostSkeleton, "PostSkeleton").$$render($$result, {}, {}, {})} `;
    }
    return function(sellItemResults) {
      return ` ${sellItemResults instanceof Array && sellItemResults.length > 0 ? `${each(sellItemResults, (sellItemResult) => {
        return `${validate_component(PostList, "PostList").$$render($$result, { searchResult: sellItemResult }, {}, {})}`;
      })}` : `<h2 data-svelte-h="svelte-81siyi">판매 목록 없음</h2>`} `;
    }(__value);
  }(sellItemPromise)}</div> <div class="my-post"><h2 data-svelte-h="svelte-1ogvo8z">[구매내역]</h2> ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` ${validate_component(PostSkeleton, "PostSkeleton").$$render($$result, {}, {}, {})} `;
    }
    return function(buyItemResults) {
      return ` ${buyItemResults instanceof Array && buyItemResults.length > 0 ? `${each(buyItemResults, (buyItemResult) => {
        return `${validate_component(PostList, "PostList").$$render($$result, { searchResult: buyItemResult }, {}, {})}`;
      })}` : `<h2 data-svelte-h="svelte-17dcxse">구매 목록 없음</h2>`} `;
    }(__value);
  }(buyItemPromise)}</div></div> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a456433c.js.map
