import{s as j,q as H,n as I}from"./scheduler.a8c18826.js";import{S as N,i as O,g as u,m as M,s as V,h as v,j as y,n as q,f as m,c as B,x as P,l as S,k,a as U,y as n,B as W,o as T}from"./index.f70754c7.js";function z(t){let s,e,l,r,h,i,a,b,f,c,p="확인",g,w;return{c(){s=u("div"),e=u("div"),l=u("h3"),r=M(t[0]),h=V(),i=u("p"),a=M(t[1]),b=V(),f=u("div"),c=u("button"),c.textContent=p,this.h()},l(d){s=v(d,"DIV",{class:!0});var o=y(s);e=v(o,"DIV",{class:!0});var _=y(e);l=v(_,"H3",{style:!0});var C=y(l);r=q(C,t[0]),C.forEach(m),h=B(_),i=v(_,"P",{});var E=y(i);a=q(E,t[1]),E.forEach(m),b=B(_),f=v(_,"DIV",{class:!0});var D=y(f);c=v(D,"BUTTON",{class:!0,"data-svelte-h":!0}),P(c)!=="svelte-ydtymr"&&(c.textContent=p),D.forEach(m),_.forEach(m),o.forEach(m),this.h()},h(){S(l,"color",t[2]==="success"?"green":"red"),k(c,"class","mini-btn svelte-hh8wkd"),k(f,"class","btn-wrapper svelte-hh8wkd"),k(e,"class","modalContainer svelte-hh8wkd"),k(s,"class","modalWrapper svelte-hh8wkd")},m(d,o){U(d,s,o),n(s,e),n(e,l),n(l,r),n(e,h),n(e,i),n(i,a),n(e,b),n(e,f),n(f,c),g||(w=W(c,"click",function(){H(t[3])&&t[3].apply(this,arguments)}),g=!0)},p(d,[o]){t=d,o&1&&T(r,t[0]),o&4&&S(l,"color",t[2]==="success"?"green":"red"),o&2&&T(a,t[1])},i:I,o:I,d(d){d&&m(s),g=!1,w()}}}function A(t,s,e){let{title:l}=s,{content:r}=s,{type:h}=s,{callback:i}=s;return t.$$set=a=>{"title"in a&&e(0,l=a.title),"content"in a&&e(1,r=a.content),"type"in a&&e(2,h=a.type),"callback"in a&&e(3,i=a.callback)},[l,r,h,i]}class J extends N{constructor(s){super(),O(this,s,A,z,j,{title:0,content:1,type:2,callback:3})}}export{J as M};