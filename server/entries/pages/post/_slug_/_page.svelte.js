import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component, f as each } from "../../../../chunks/ssr.js";
import { A as Avatar } from "../../../../chunks/Avatar.js";
/* empty css                                                      */const SendIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="none" viewBox="0 0 24 24" stroke="currentColor"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="round" stroke-linejoin="round" class="${"feather feather-send " + escape(customClass, true)}"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`;
});
function formatDateString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${year}.${month}.${day} ${hours}:${minutes}`;
}
const Comments_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".comment-wrapper.svelte-eq5744.svelte-eq5744.svelte-eq5744{padding:1rem 0.5rem}.comment-wrapper.svelte-eq5744>.svelte-eq5744.svelte-eq5744:nth-child(1){display:flex;justify-content:space-between;align-items:center}.comment-wrapper.svelte-eq5744>.svelte-eq5744:nth-child(1)>.svelte-eq5744:nth-child(1){display:flex;gap:0.5rem;align-items:center}.comment-wrapper.svelte-eq5744>.svelte-eq5744.svelte-eq5744:nth-child(2){margin-top:1rem}",
  map: null
};
const Comments = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { comment } = $$props;
  if ($$props.comment === void 0 && $$bindings.comment && comment !== void 0)
    $$bindings.comment(comment);
  $$result.css.add(css$1);
  return `<div class="comment-wrapper svelte-eq5744"><div class="svelte-eq5744"><div class="svelte-eq5744">${validate_component(Avatar, "Avatar").$$render(
    $$result,
    {
      imgString: `http://168.188.123.234:8080${comment.author.profileImgPath}`,
      size: 24
    },
    {},
    {}
  )} <span>${escape(comment.author.nickname)}</span></div> <span class="svelte-eq5744">${escape(formatDateString(new Date(comment.modifyAt)))}</span></div> <div class="svelte-eq5744"><span class="svelte-eq5744">${escape(comment.content)}</span></div> </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '@charset "UTF-8";.post-detail-wrapper.svelte-wmrkd6.svelte-wmrkd6{display:flex;width:80%;margin-top:2rem;margin-left:auto;margin-right:auto;gap:2rem}.post-container.svelte-wmrkd6.svelte-wmrkd6{display:flex;width:50%;flex-direction:column;gap:1rem}.img-container.svelte-wmrkd6.svelte-wmrkd6{width:20rem;height:18rem;text-align:center}.user-info.svelte-wmrkd6.svelte-wmrkd6{display:flex;justify-content:space-between;align-items:center}.seller-div.svelte-wmrkd6.svelte-wmrkd6{display:flex;gap:0.5rem;align-items:center}.post-detail.svelte-wmrkd6.svelte-wmrkd6{display:flex;flex-direction:column;gap:1rem}.post-detail.svelte-wmrkd6>.svelte-wmrkd6:nth-child(1){display:flex;justify-content:space-between;align-items:center}.comment-container.svelte-wmrkd6.svelte-wmrkd6{position:relative;width:50%;display:flex;flex-direction:column}.comment-container.svelte-wmrkd6>.svelte-wmrkd6:nth-child(1){display:flex;flex-direction:column;height:90%;overflow-y:scroll}.comment-container.svelte-wmrkd6>.svelte-wmrkd6:nth-child(2){position:absolute;bottom:0;width:100%}.comment-container.svelte-wmrkd6>:nth-child(2) input.svelte-wmrkd6{width:100%;border:1px solid #e0e0e0;padding:8px;border-radius:50px;display:block;margin:auto;font-size:1rem;background-size:20px;padding-left:12px}.comment-container.svelte-wmrkd6>:nth-child(2) .send-icon.svelte-wmrkd6{background:inherit;border:none;box-shadow:none;border-radius:0;padding:0;overflow:visible;cursor:pointer;position:absolute;top:6px;right:0}.sellModal.svelte-wmrkd6.svelte-wmrkd6{position:fixed;top:0;bottom:0;left:0;right:0;z-index:100;background:rgba(0, 0, 0, 0.7)}.sellmodalContainer.svelte-wmrkd6.svelte-wmrkd6{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:white;padding:1rem;border-radius:16px;min-width:16rem;max-height:70vh;overflow-y:scroll}.buyer-wrapper.svelte-wmrkd6.svelte-wmrkd6{display:flex;flex-direction:column;gap:0.5rem}.buyer.svelte-wmrkd6.svelte-wmrkd6{display:flex;justify-content:space-between;align-items:center}.buyer.svelte-wmrkd6>.svelte-wmrkd6:nth-child(1){display:flex;align-items:center;gap:0.5rem}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { postId, userId, title, description, imagePath, price, likeCount, seenCount, comments, itemStatus, isSeller, sellerNickname, sellerImg } = data;
  let commentValue = "";
  let commentsList = comments;
  let likes = likeCount;
  let item_status = itemStatus;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="post-detail-wrapper svelte-wmrkd6"><section class="post-container svelte-wmrkd6"><div class="img-container svelte-wmrkd6"><img${add_attribute("src", `http://168.188.123.234:8080${imagePath}`, 0)} alt="게시글 이미지"></div> <div class="user-info svelte-wmrkd6"><div class="seller-div svelte-wmrkd6">${validate_component(Avatar, "Avatar").$$render(
    $$result,
    {
      imgString: `http://168.188.123.234:8080${sellerImg}`,
      size: 24
    },
    {},
    {}
  )} ${escape(sellerNickname)}</div> <div>${item_status === "SOLD_OUT" ? `<span data-svelte-h="svelte-19soi72">판매완료</span>` : `${isSeller ? `<button class="mini-btn" data-svelte-h="svelte-oy67je">판매하기</button>` : `<button class="mini-btn" data-svelte-h="svelte-10tibna">관심</button> <button class="mini-btn" data-svelte-h="svelte-1szd1j2">구매하기</button>`}`}</div></div> <div class="post-detail svelte-wmrkd6"><div class="svelte-wmrkd6"><span class="post-title">${escape(title)}</span> <div><span>조회: ${escape(seenCount)}</span> <span>관심: ${escape(likes)}</span></div></div> <div class="post-price svelte-wmrkd6">${escape(price.toLocaleString())}</div> <div class="svelte-wmrkd6">${escape(description)}</div></div></section> <section class="comment-container svelte-wmrkd6"><div class="commnet-wrapper svelte-wmrkd6">${commentsList.length > 0 ? `${each(commentsList, (comment) => {
    return `${validate_component(Comments, "Comments").$$render($$result, { comment }, {}, {})}`;
  })}` : ``}</div> <div class="input-wrapper svelte-wmrkd6"><input type="text" placeholder="댓글을 입력해주세요" class="svelte-wmrkd6"${add_attribute("value", commentValue, 0)}> <button class="send-icon svelte-wmrkd6">${validate_component(SendIcon, "SendIcon").$$render($$result, { size: "24" }, {}, {})}</button></div></section></div> ${``} ${``}`;
});
export {
  Page as default
};
