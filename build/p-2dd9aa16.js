let t=!1,e=!1;const n={},l=t=>"object"==(t=typeof t)||"function"===t;function o(t){var e,n,l;return null!==(l=null===(n=null===(e=t.head)||void 0===e?void 0:e.querySelector('meta[name="csp-nonce"]'))||void 0===n?void 0:n.getAttribute("content"))&&void 0!==l?l:void 0}const s=(t,e,...n)=>{let o=null,s=!1,i=!1;const u=[],a=e=>{for(let n=0;n<e.length;n++)o=e[n],Array.isArray(o)?a(o):null!=o&&"boolean"!=typeof o&&((s="function"!=typeof t&&!l(o))&&(o+=""),s&&i?u[u.length-1].t+=o:u.push(s?c(null,o):o),i=s)};if(a(n),e){const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter((e=>t[e])).join(" "))}if("function"==typeof t)return t(null===e?{}:e,u,r);const f=c(t,null);return f.l=e,u.length>0&&(f.o=u),f},c=(t,e)=>({i:0,u:t,t:e,h:null,o:null,l:null}),i={},r={forEach:(t,e)=>t.map(u).forEach(e),map:(t,e)=>t.map(u).map(e).map(a)},u=t=>({vattrs:t.l,vchildren:t.o,vkey:t.p,vname:t.m,vtag:t.u,vtext:t.t}),a=t=>{if("function"==typeof t.vtag){const e=Object.assign({},t.vattrs);return t.vkey&&(e.key=t.vkey),t.vname&&(e.name=t.vname),s(t.vtag,e,...t.vchildren||[])}const e=c(t.vtag,t.vtext);return e.l=t.vattrs,e.o=t.vchildren,e.p=t.vkey,e.m=t.vname,e},f=(t,e,n)=>{const l=(t=>z(t).$)(t);return{emit:t=>d(l,e,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:t})}},d=(t,e,n)=>{const l=tt.ce(e,n);return t.dispatchEvent(l),l},h=new WeakMap,p=t=>"sc-"+t.v,y=(t,e,n,o,s,c)=>{if(n!==o){let i=I(t,e),r=e.toLowerCase();if("class"===e){const e=t.classList,l=$(n),s=$(o);e.remove(...l.filter((t=>t&&!s.includes(t)))),e.add(...s.filter((t=>t&&!l.includes(t))))}else if("ref"===e)o&&o(t);else if(i||"o"!==e[0]||"n"!==e[1]){const r=l(o);if((i||r&&null!==o)&&!s)try{if(t.tagName.includes("-"))t[e]=o;else{const l=null==o?"":o;"list"===e?i=!1:null!=n&&t[e]==l||(t[e]=l)}}catch(t){}null==o||!1===o?!1===o&&""!==t.getAttribute(e)||t.removeAttribute(e):(!i||4&c||s)&&!r&&t.setAttribute(e,o=!0===o?"":o)}else e="-"===e[2]?e.slice(3):I(Y,r)?r.slice(2):r[2]+e.slice(3),n&&tt.rel(t,e,n,!1),o&&tt.ael(t,e,o,!1)}},m=/\s/,$=t=>t?t.split(m):[],v=(t,e,l,o)=>{const s=11===e.h.nodeType&&e.h.host?e.h.host:e.h,c=t&&t.l||n,i=e.l||n;for(o in c)o in i||y(s,o,c[o],void 0,l,e.i);for(o in i)y(s,o,c[o],i[o],l,e.i)},b=(e,n,l)=>{const o=n.o[l];let s,c,i=0;if(null!==o.t)s=o.h=Z.createTextNode(o.t);else{if(t||(t="svg"===o.u),s=o.h=Z.createElementNS(t?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",o.u),t&&"foreignObject"===o.u&&(t=!1),v(null,o,t),o.o)for(i=0;i<o.o.length;++i)c=b(e,o,i),c&&s.appendChild(c);"svg"===o.u?t=!1:"foreignObject"===s.tagName&&(t=!0)}return s},w=(t,e,n,l,o,s)=>{let c,i=t;for(;o<=s;++o)l[o]&&(c=b(null,n,o),c&&(l[o].h=c,i.insertBefore(c,e)))},g=(t,e,n,l,o)=>{for(;e<=n;++e)(l=t[e])&&(o=l.h,O(l),o.remove())},j=(t,e)=>t.u===e.u,S=(e,n)=>{const l=n.h=e.h,o=e.o,s=n.o,c=n.u,i=n.t;null===i?(t="svg"===c||"foreignObject"!==c&&t,v(e,n,t),null!==o&&null!==s?((t,e,n,l)=>{let o,s=0,c=0,i=e.length-1,r=e[0],u=e[i],a=l.length-1,f=l[0],d=l[a];for(;s<=i&&c<=a;)null==r?r=e[++s]:null==u?u=e[--i]:null==f?f=l[++c]:null==d?d=l[--a]:j(r,f)?(S(r,f),r=e[++s],f=l[++c]):j(u,d)?(S(u,d),u=e[--i],d=l[--a]):j(r,d)?(S(r,d),t.insertBefore(r.h,u.h.nextSibling),r=e[++s],d=l[--a]):j(u,f)?(S(u,f),t.insertBefore(u.h,r.h),u=e[--i],f=l[++c]):(o=b(e&&e[c],n,c),f=l[++c],o&&r.h.parentNode.insertBefore(o,r.h));s>i?w(t,null==l[a+1]?null:l[a+1].h,n,l,c,a):c>a&&g(e,s,i)})(l,o,n,s):null!==s?(null!==e.t&&(l.textContent=""),w(l,null,n,s,0,s.length-1)):null!==o&&g(o,0,o.length-1),t&&"svg"===c&&(t=!1)):e.t!==i&&(l.data=i)},O=t=>{t.l&&t.l.ref&&t.l.ref(null),t.o&&t.o.map(O)},k=(t,e)=>{e&&!t.g&&e["s-p"]&&e["s-p"].push(new Promise((e=>t.g=e)))},M=(t,e)=>{if(t.i|=16,!(4&t.i))return k(t,t.j),ut((()=>C(t,e)));t.i|=512},C=(t,e)=>{const n=t.S;let l;return e&&(t.i|=256,t.O&&(t.O.map((([t,e])=>F(n,t,e))),t.O=null),l=F(n,"componentWillLoad")),N(l,(()=>x(t,n,e)))},x=async(t,e,n)=>{const l=t.$,s=l["s-rc"];n&&(t=>{const e=t.k;((t,e)=>{var n;let l=p(e);const s=X.get(l);if(t=11===t.nodeType?t:Z,s)if("string"==typeof s){let e,c=h.get(t=t.head||t);if(c||h.set(t,c=new Set),!c.has(l)){{e=Z.createElement("style"),e.innerHTML=s;const l=null!==(n=tt.M)&&void 0!==n?n:o(Z);null!=l&&e.setAttribute("nonce",l),t.insertBefore(e,t.querySelector("link"))}c&&c.add(l)}}else t.adoptedStyleSheets.includes(s)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,s])})(t.$.getRootNode(),e)})(t);E(t,e),s&&(s.map((t=>t())),l["s-rc"]=void 0);{const e=l["s-p"],n=()=>L(t);0===e.length?n():(Promise.all(e).then(n),t.i|=4,e.length=0)}},E=(t,e)=>{try{e=e.render(),t.i&=-17,t.i|=2,((t,e)=>{const n=t.$,l=t.C||c(null,null),o=(t=>t&&t.u===i)(e)?e:s(null,null,e);o.u=null,o.i|=4,t.C=o,o.h=l.h=n,S(l,o)})(t,e)}catch(e){J(e,t.$)}return null},L=t=>{const e=t.$,n=t.S,l=t.j;64&t.i||(t.i|=64,T(e),F(n,"componentDidLoad"),t.L(e),l||P()),t.g&&(t.g(),t.g=void 0),512&t.i&&rt((()=>M(t,!1))),t.i&=-517},P=()=>{T(Z.documentElement),rt((()=>d(Y,"appload",{detail:{namespace:"aegon-video-widget"}})))},F=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(t){J(t)}},N=(t,e)=>t&&t.then?t.then(e):e(),T=t=>t.classList.add("hydrated"),W=(t,e,n)=>{if(e.P){t.watchers&&(e.F=t.watchers);const o=Object.entries(e.P),s=t.prototype;if(o.map((([t,[o]])=>{(31&o||2&n&&32&o)&&Object.defineProperty(s,t,{get(){return((t,e)=>z(this).N.get(e))(0,t)},set(n){((t,e,n,o)=>{const s=z(t),c=s.$,i=s.N.get(e),r=s.i,u=s.S;if(n=((t,e)=>null==t||l(t)?t:2&e?parseFloat(t):t)(n,o.P[e][0]),(!(8&r)||void 0===i)&&n!==i&&(!Number.isNaN(i)||!Number.isNaN(n))&&(s.N.set(e,n),u)){if(o.F&&128&r){const t=o.F[e];t&&t.map((t=>{try{u[t](n,i,e)}catch(t){J(t,c)}}))}2==(18&r)&&M(s,!1)}})(this,t,n,e)},configurable:!0,enumerable:!0})})),1&n){const e=new Map;s.attributeChangedCallback=function(t,n,l){tt.jmp((()=>{const n=e.get(t);if(this.hasOwnProperty(n))l=this[n],delete this[n];else if(s.hasOwnProperty(n)&&"number"==typeof this[n]&&this[n]==l)return;this[n]=(null!==l||"boolean"!=typeof this[n])&&l}))},t.observedAttributes=o.filter((([t,e])=>15&e[0])).map((([t,n])=>{const l=n[1]||t;return e.set(l,t),l}))}}return t},A=(t,e={})=>{var n;const l=[],s=e.exclude||[],c=Y.customElements,i=Z.head,r=i.querySelector("meta[charset]"),u=Z.createElement("style"),a=[];let f,d=!0;Object.assign(tt,e),tt.T=new URL(e.resourcesUrl||"./",Z.baseURI).href,t.map((t=>{t[1].map((e=>{const n={i:e[0],v:e[1],P:e[2],W:e[3]};n.P=e[2],n.W=e[3],n.F={};const o=n.v,i=class extends HTMLElement{constructor(t){super(t),G(t=this,n)}connectedCallback(){f&&(clearTimeout(f),f=null),d?a.push(this):tt.jmp((()=>(t=>{if(0==(1&tt.i)){const e=z(t),n=e.k,l=()=>{};if(1&e.i)U(t,e,n.W);else{e.i|=1;{let n=t;for(;n=n.parentNode||n.host;)if(n["s-p"]){k(e,e.j=n);break}}n.P&&Object.entries(n.P).map((([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}})),(async(t,e,n,l,o)=>{if(0==(32&e.i)){{if(e.i|=32,(o=Q(n)).then){const t=()=>{};o=await o,t()}o.isProxied||(n.F=o.watchers,W(o,n,2),o.isProxied=!0);const t=()=>{};e.i|=8;try{new o(e)}catch(t){J(t)}e.i&=-9,e.i|=128,t()}if(o.style){let t=o.style;const e=p(n);if(!X.has(e)){const l=()=>{};((t,e,n)=>{let l=X.get(t);nt&&n?(l=l||new CSSStyleSheet,"string"==typeof l?l=e:l.replaceSync(e)):l=e,X.set(t,l)})(e,t,!!(1&n.i)),l()}}}const s=e.j,c=()=>M(e,!0);s&&s["s-rc"]?s["s-rc"].push(c):c()})(0,e,n)}l()}})(this)))}disconnectedCallback(){tt.jmp((()=>(()=>{if(0==(1&tt.i)){const t=z(this),e=t.S;t.A&&(t.A.map((t=>t())),t.A=void 0),F(e,"disconnectedCallback")}})()))}componentOnReady(){return z(this).R}};n.U=t[0],s.includes(o)||c.get(o)||(l.push(o),c.define(o,W(i,n,1)))}))}));{u.innerHTML=l+"{visibility:hidden}.hydrated{visibility:inherit}",u.setAttribute("data-styles","");const t=null!==(n=tt.M)&&void 0!==n?n:o(Z);null!=t&&u.setAttribute("nonce",t),i.insertBefore(u,r?r.nextSibling:i.firstChild)}d=!1,a.length?a.map((t=>t.connectedCallback())):tt.jmp((()=>f=setTimeout(P,30)))},R=(t,e)=>e,U=(t,e,n)=>{n&&n.map((([n,l,o])=>{const s=D(t,n),c=q(e,o),i=H(n);tt.ael(s,l,c,i),(e.A=e.A||[]).push((()=>tt.rel(s,l,c,i)))}))},q=(t,e)=>n=>{try{256&t.i?t.S[e](n):(t.O=t.O||[]).push([e,n])}catch(t){J(t)}},D=(t,e)=>8&e?Y:t,H=t=>0!=(2&t),V=t=>tt.M=t,_=new WeakMap,z=t=>_.get(t),B=(t,e)=>_.set(e.S=t,e),G=(t,e)=>{const n={i:0,$:t,k:e,N:new Map};return n.R=new Promise((t=>n.L=t)),t["s-p"]=[],t["s-rc"]=[],U(t,n,e.W),_.set(t,n)},I=(t,e)=>e in t,J=(t,e)=>(0,console.error)(t,e),K=new Map,Q=t=>{const e=t.v.replace(/-/g,"_"),n=t.U,l=K.get(n);return l?l[e]:import(`./${n}.entry.js`).then((t=>(K.set(n,t),t[e])),J)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},X=new Map,Y="undefined"!=typeof window?window:{},Z=Y.document||{head:{}},tt={i:0,T:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l),ce:(t,e)=>new CustomEvent(t,e)},et=t=>Promise.resolve(t),nt=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(t){}return!1})(),lt=[],ot=[],st=(t,n)=>l=>{t.push(l),e||(e=!0,n&&4&tt.i?rt(it):tt.raf(it))},ct=t=>{for(let e=0;e<t.length;e++)try{t[e](performance.now())}catch(t){J(t)}t.length=0},it=()=>{ct(lt),ct(ot),(e=lt.length>0)&&tt.raf(it)},rt=t=>et().then(t),ut=st(ot,!0);export{R as F,A as b,f as c,s as h,et as p,B as r,V as s}