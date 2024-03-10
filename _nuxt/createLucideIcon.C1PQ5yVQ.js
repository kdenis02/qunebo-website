import{u as m,y as w,z as c}from"./entry.BOvoyHbd.js";function g(e,s){const{title:t,titleTemplate:r,...l}=e;return m({title:t,titleTemplate:r,_flatMeta:l},{...s,transform(a){const n=w({...a._flatMeta});return delete a._flatMeta,{...a,meta:n}}})}/**
 * @license lucide-vue-next v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),k=(e,s)=>({size:t,strokeWidth:r=2,absoluteStrokeWidth:l,color:a,class:n,...i},{attrs:d,slots:u})=>c("svg",{...o,width:t||o.width,height:t||o.height,stroke:a||o.stroke,"stroke-width":l?Number(r)*24/Number(t):r,...d,class:["lucide",`lucide-${f(e)}`],...i},[...s.map(h=>c(...h)),...u.default?[u.default()]:[]]);export{k as c,g as u};
