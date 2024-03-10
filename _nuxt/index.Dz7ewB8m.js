import{_ as i,o as c,c as d,p as b,f as I,a as n,k as p,l as y,m as $,n as r,q as m,w as g,s as M,T as w,b as _,t as k,v as B,d as L,i as P,e as V,h as C,x as D}from"./entry.BOvoyHbd.js";import{c as l,u as H}from"./createLucideIcon.C1PQ5yVQ.js";/**
 * @license lucide-vue-next v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=l("DrillIcon",[["path",{d:"M14 9c0 .6-.4 1-1 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9c.6 0 1 .4 1 1Z",key:"b6nnkj"}],["path",{d:"M18 6h4",key:"66u95g"}],["path",{d:"M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3",key:"105ega"}],["path",{d:"m5 10-2 8",key:"xt2lic"}],["path",{d:"M12 10v3c0 .6-.4 1-1 1H8",key:"mwpjnk"}],["path",{d:"m7 18 2-8",key:"1bzku2"}],["path",{d:"M5 22c-1.7 0-3-1.3-3-3 0-.6.4-1 1-1h7c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1Z",key:"117add"}]]);/**
 * @license lucide-vue-next v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=l("HammerIcon",[["path",{d:"m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9",key:"eefl8a"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"b7pghm"}]]);/**
 * @license lucide-vue-next v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=l("Paintbrush2Icon",[["path",{d:"M14 19.9V16h3a2 2 0 0 0 2-2v-2H5v2c0 1.1.9 2 2 2h3v3.9a2 2 0 1 0 4 0Z",key:"1c8kta"}],["path",{d:"M6 12V2h12v10",key:"1esbnf"}],["path",{d:"M14 2v4",key:"qmzblu"}],["path",{d:"M10 2v2",key:"7u0qdc"}]]);/**
 * @license lucide-vue-next v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=l("PickaxeIcon",[["path",{d:"M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912",key:"we99rg"}],["path",{d:"M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393",key:"1w6hck"}],["path",{d:"M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z",key:"15hgfx"}],["path",{d:"M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319",key:"452b4h"}]]);/**
 * @license lucide-vue-next v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=l("WrenchIcon",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]),N={},T=o=>(b("data-v-f6433051"),o=o(),I(),o),j={class:"logo-box"},U=T(()=>n("div",{class:"logo-box__wrapper"},[n("h1",{class:"logo-box__header"}," QUNEBO "),n("div",{class:"logo-box__subtext"}," For a greener and more sustainable AI future. ")],-1)),W=[U];function F(o,t){return c(),d("div",j,W)}const Q=i(N,[["render",F],["__scopeId","data-v-f6433051"]]),Z=window.setInterval,E={__name:"IconCarousel",setup(o){const t=p(["Drill","Hammer","Wrench","Pickaxe","Paintbrush2"]);let e=p(0),a=p(t.value[0]),s;y(()=>{s=Z(()=>{e.value=e.value<t.value.length-1?e.value+1:0,a.value=t.value[e.value]},2e3)}),$(()=>{clearInterval(s)});const u=r(()=>{switch(a.value){case"Drill":return S;case"Hammer":return A;case"Wrench":return v;case"Pickaxe":return z;case"Paintbrush2":return q;default:return v}});return(f,h)=>(c(),m(w,{name:"fade"},{default:g(()=>[(c(),m(M(u.value),{size:"72","stroke-width":"0.5",class:"icon-carousel__icon"}))]),_:1}))}},R=i(E,[["__scopeId","data-v-e7f7562a"]]),O={},G={class:"main-page"},J={class:"main-page__under-construction"},K={class:"main-page__under-construction-icons"},X={class:"main-page__under-construction-text"};function Y(o,t){const e=Q,a=R;return c(),d("div",G,[_(e,{class:"main-page__logo-box"}),n("div",J,[n("div",K,[_(a)]),n("div",X,k(o.$t("under-construction")),1)])])}const ee=i(O,[["render",Y],["__scopeId","data-v-6d28c25a"]]),te={class:"footer"},ae={__name:"FooterBox",setup(o){const t=B(),e=r(()=>`${t.path}${/\/$/.test(t.path)?"":"/"}impressum`);return(a,s)=>{const u=V;return c(),d("footer",te,[_(u,{to:P(e)},{default:g(()=>[L(k(a.$t("impressum")),1)]),_:1},8,["to"])])}}},oe=i(ae,[["__scopeId","data-v-858735b8"]]),ne={class:"content-wrapper"},ce={__name:"index",setup(o){const t=D(),e=C();r(()=>e.locale.value);const a=r(()=>t.public.description[e.locale.value]),s=r(()=>e.locale.value==="de"?`Qunebo's Logo und Slogan: ${a}`:`Qunebos Logo and Slogan: ${a}`);return H({ogUrl:"https://qunebo.ai",ogTitle:t.public.appTitle,ogDescription:a,ogImageUrl:"https://qunebo.ai/logo.png",ogImageAlt:s,twitterCard:"summary_large_image"}),(u,f)=>{const h=ee,x=oe;return c(),d("div",ne,[n("main",null,[_(h)]),_(x)])}}},_e=i(ce,[["__scopeId","data-v-60925587"]]);export{_e as default};
