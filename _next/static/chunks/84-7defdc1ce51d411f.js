(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[84],{931:function(t,e,n){"use strict";n.r(e),n.d(e,{PlasmicDataSourceContextProvider:function(){return u},useCurrentUser:function(){return a},usePlasmicDataSourceContext:function(){return i}});var r=n(67294),o=r.createContext(void 0);function i(){return r.useContext(o)}function a(){var t,e=i();return null!=(t=null==e?void 0:e.user)?t:{isLoggedIn:!1}}var u=o.Provider},68030:function(t,e,n){"use strict";n.r(e),n.d(e,{DataContext:function(){return L},DataCtxReader:function(){return G},DataProvider:function(){return V},GlobalActionsContext:function(){return I},GlobalActionsProvider:function(){return H},PageParamsProvider:function(){return A},PlasmicCanvasContext:function(){return y},PlasmicCanvasHost:function(){return E},applySelector:function(){return S},mkMetaName:function(){return k},mkMetaValue:function(){return O},registerComponent:function(){return W},registerGlobalContext:function(){return J},registerToken:function(){return K},registerTrait:function(){return $},repeatedElement:function(){return B},unstable_registerFetcher:function(){return N},useDataEnv:function(){return F},useGlobalActions:function(){return q},usePlasmicCanvasContext:function(){return b},useSelector:function(){return D},useSelectors:function(){return j}});var r,o,i,a,u=n(72705),c=n(67294),s=n(73935),l=function(t,e){return(l=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},f=function(){return(f=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};null==globalThis.__PlasmicHostVersion&&(globalThis.__PlasmicHostVersion="2");var d=[],h=new function(t){var e=this;this.value=t,this.set=function(t){e.value=t,d.forEach(function(t){return t()})},this.get=function(){return e.value}}(null);function v(){return new URLSearchParams(location.hash.replace(/^#/,"?"))}function p(){return function(t,e){if(void 0===e&&(e=""),null!=t)return t;throw e=("string"==typeof e?e:e())||"",Error("Value must not be undefined or null".concat(e?"- ".concat(e):""))}(v().get("origin"),"Missing information from Plasmic window.")}var m=0;function g(t){m++,h.set(t)}var y=c.createContext(!1),b=function(){return c.useContext(y)};function w(){var t,e,n,r=!!window.parent,o=!!(null===(e=location.hash)||void 0===e?void 0:e.match(/\bcanvas=true\b/)),i=!!(null===(n=location.hash)||void 0===n?void 0:n.match(/\blive=true\b/))||!r,a=r&&!document.querySelector("#plasmic-studio-tag")&&!o&&!i,u=(t=(0,c.useState)(0)[1],(0,c.useCallback)(function(){t(function(t){return t+1})},[]));c.useLayoutEffect(function(){return d.push(u),function(){var t=d.indexOf(u);t>=0&&d.splice(t,1)}},[u]),c.useEffect(function(){if(a&&r&&window.parent!==window){var t,e,n,o;t=document.createElement("script"),e=p(),o=(n=v()).has("studioHash")?n.get("studioHash"):new URL(location.href).searchParams.get("studio-hash"),t.src="".concat(e,"/static/js/studio").concat(o?".".concat(o,".js"):".js"),document.body.appendChild(t)}},[a,r]),c.useEffect(function(){if(!a&&!document.querySelector("#getlibs")&&i){var t=document.createElement("script");t.id="getlibs",t.src=p()+"/static/js/getlibs.js",t.async=!1,t.onload=function(){var t,e;null===(e=(t=window).__GetlibsReadyResolver)||void 0===e||e.call(t)},document.head.append(t)}},[a]);var l=c.useState(function(){return R()}),f=l[0],g=l[1];if(c.useEffect(function(){if(o){var t=function(){g(R())};return window.addEventListener("hashchange",t),function(){return window.removeEventListener("hashchange",t)}}},[o]),!r)return null;if(o||i){var b=document.querySelector("#plasmic-app.__wab_user-body");return b||((b=document.createElement("div")).id="plasmic-app",b.classList.add("__wab_user-body"),document.body.appendChild(b)),s.createPortal(c.createElement(_,{key:"".concat(m)},c.createElement(y.Provider,{value:f},h.get())),b,"plasmic-app")}return a&&window.parent===window?c.createElement("iframe",{src:"https://docs.plasmic.app/app-content/app-host-ready#appHostUrl=".concat(encodeURIComponent(location.href)),style:{width:"100vw",height:"100vh",border:"none",position:"fixed",top:0,left:0,zIndex:99999999}}):null}var E=function(t){var e=t.enableWebpackHmr,n=c.useState(null),r=n[0],o=n[1];return c.useEffect(function(){o(c.createElement(w,null))},[]),c.createElement(c.Fragment,null,!e&&c.createElement(C,null),r)},x=[];function P(t){return x.push(t),function(){var e=x.indexOf(t);e>=0&&x.splice(e,1)}}var _=function(t){function e(e){var n=t.call(this,e)||this;return n.state={},n}return!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}l(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.getDerivedStateFromError=function(t){return{error:t}},e.prototype.componentDidCatch=function(t){x.forEach(function(e){return e(t)})},e.prototype.render=function(){return this.state.error?c.createElement("div",null,"Error: ","".concat(this.state.error.message)):c.createElement(c.Fragment,null,this.props.children)},e}(c.Component);function C(){return null}function R(){var t,e=window.location.hash;if(e&&e.length>0){var n=new URLSearchParams(e.substring(1));if("true"===n.get("canvas")){var r=n.get("globalVariants");return{componentName:null!==(t=n.get("componentName"))&&void 0!==t?t:null,globalVariants:r?JSON.parse(r):{},interactive:"true"===n.get("interactive")}}}return!1}var T=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t},L=(0,c.createContext)(void 0);function k(t){return"__plasmic_meta_".concat(t)}function O(t){return t}function S(t,e){if(e){for(var n=t,r=0,o=e.split(".");r<o.length;r++){var i=o[r];n=null==n?void 0:n[i]}return n}}function D(t){return S(F(),t)}function j(t){void 0===t&&(t={});var e=F();return Object.fromEntries(Object.entries(t).filter(function(t){var e=t[0],n=t[1];return!!e&&!!n}).map(function(t){return T(t[0],S(e,t[1]))}))}function F(){return(0,c.useContext)(L)}function V(t){var e,n,r=t.name,o=t.data,i=t.hidden,a=t.label,u=t.children,s=null!==(n=F())&&void 0!==n?n:{};return r?c.createElement(L.Provider,{value:f(f({},s),((e={})[r]=o,e[k(r)]={hidden:i,label:a},e))},u):c.createElement(c.Fragment,null,u)}function A(t){var e=t.children,n=t.params,r=t.query,o=F()||{};return c.createElement(V,{name:"params",data:f(f({},o.params),void 0===n?{}:n),label:"Page URL path params"},c.createElement(V,{name:"query",data:f(f({},o.query),void 0===r?{}:r),label:"Page URL query params"},e))}function G(t){return(0,t.children)(F())}var M=globalThis;function N(t,e){M.__PlasmicFetcherRegistry.push({fetcher:t,meta:e})}M.__PlasmicFetcherRegistry=[];var I=c.createContext(void 0);function H(t){var e=t.contextName,n=t.children,r=t.actions,o=c.useMemo(function(){return Object.fromEntries(Object.entries(r).map(function(t){var n=t[0],r=t[1];return["".concat(e,".").concat(n),r]}))},[e,r]);return c.createElement(I.Provider,{value:o},n)}function q(){var t;return null!==(t=c.useContext(I))&&void 0!==t?t:{}}var U=globalThis;function W(t,e){U.__PlasmicComponentRegistry.some(function(n){return n.component===t&&n.meta.name===e.name})||U.__PlasmicComponentRegistry.push({component:t,meta:e})}null==U.__PlasmicComponentRegistry&&(U.__PlasmicComponentRegistry=[]);var Q=globalThis;function J(t,e){Q.__PlasmicContextRegistry.some(function(n){return n.component===t&&n.meta.name===e.name})||Q.__PlasmicContextRegistry.push({component:t,meta:e})}null==Q.__PlasmicContextRegistry&&(Q.__PlasmicContextRegistry=[]);var z=globalThis;function K(t){z.__PlasmicTokenRegistry.push(t)}null==z.__PlasmicTokenRegistry&&(z.__PlasmicTokenRegistry=[]);var Y=globalThis;function $(t,e){Y.__PlasmicTraitRegistry.push({trait:t,meta:e})}function B(t,e){return X(t,e)}null==Y.__PlasmicTraitRegistry&&(Y.__PlasmicTraitRegistry=[]);var X=function(t,e){return Array.isArray(e)?e.map(function(e){return X(t,e)}):e&&(0,c.isValidElement)(e)&&"string"!=typeof e?(0,c.cloneElement)(e):e},Z=globalThis,tt=null!==(a=null===(i=null==Z?void 0:Z.__Sub)||void 0===i?void 0:i.setRepeatedElementFn)&&void 0!==a?a:function(t){X=t},te=Object.freeze({__proto__:null,PlasmicCanvasContext:y,PlasmicCanvasHost:E,usePlasmicCanvasContext:b,unstable_registerFetcher:N,registerComponent:W,registerGlobalContext:J,registerToken:K,registerTrait:$,repeatedElement:B,DataContext:L,mkMetaName:k,mkMetaValue:O,applySelector:S,useSelector:D,useSelectors:j,useDataEnv:F,DataProvider:V,PageParamsProvider:A,DataCtxReader:G,GlobalActionsContext:I,GlobalActionsProvider:H,useGlobalActions:q}),tn=globalThis;null==tn.__Sub&&(tn.__Sub=f({React:r||(r=n.t(c,2)),ReactDOM:o||(o=n.t(s,2)),PlasmicQuery:u,hostModule:te,hostVersion:"1.0.134",hostUtils:{setPlasmicRootNode:g,registerRenderErrorListener:P,setRepeatedElementFn:tt},setPlasmicRootNode:g,registerRenderErrorListener:P,setRepeatedElementFn:tt},te))},72705:function(t,e,n){"use strict";n.r(e),n.d(e,{PlasmicPrepassContext:function(){return tu},PlasmicQueryDataProvider:function(){return ti},addLoadingStateListener:function(){return tf},useMutablePlasmicQueryData:function(){return to},usePlasmicDataConfig:function(){return tc},usePlasmicQueryData:function(){return tr},wrapLoadingFetcher:function(){return td}});var r,o,i=n(67294);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function a(t,e,n,r){return new(n||(n=Promise))(function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function u(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):((e=t.value)instanceof n?e:new n(function(t){t(e)})).then(a,u)}c((r=r.apply(t,e||[])).next())})}function u(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}var c=function(){},s=c(),l=Object,f=function(t){return t===s},d=function(t){return"function"==typeof t},h=function(t,e){return l.assign({},t,e)},v="undefined",p=function(){return typeof window!=v},m=new WeakMap,g=0,y=function(t){var e,n,r=typeof t,o=t&&t.constructor,i=o==Date;if(l(t)!==t||i||o==RegExp)e=i?t.toJSON():"symbol"==r?t.toString():"string"==r?JSON.stringify(t):""+t;else{if(e=m.get(t))return e;if(e=++g+"~",m.set(t,e),o==Array){for(n=0,e="@";n<t.length;n++)e+=y(t[n])+",";m.set(t,e)}if(o==l){e="#";for(var a=l.keys(t).sort();!f(n=a.pop());)f(t[n])||(e+=n+":"+y(t[n])+",");m.set(t,e)}}return e},b=!0,w=p(),E=typeof document!=v,x=w&&window.addEventListener?window.addEventListener.bind(window):c,P=E?document.addEventListener.bind(document):c,_=w&&window.removeEventListener?window.removeEventListener.bind(window):c,C=E?document.removeEventListener.bind(document):c,R={initFocus:function(t){return P("visibilitychange",t),x("focus",t),function(){C("visibilitychange",t),_("focus",t)}},initReconnect:function(t){var e=function(){b=!0,t()},n=function(){b=!1};return x("online",e),x("offline",n),function(){_("online",e),_("offline",n)}}},T=!p()||"Deno"in window,L=T?i.useEffect:i.useLayoutEffect,k="undefined"!=typeof navigator&&navigator.connection,O=!T&&k&&(["slow-2g","2g"].includes(k.effectiveType)||k.saveData),S=function(t){if(d(t))try{t=t()}catch(e){t=""}var e=[].concat(t),n=(t="string"==typeof t?t:(Array.isArray(t)?t.length:t)?y(t):"")?"$swr$"+t:"";return[t,e,n]},D=new WeakMap,j=function(t,e,n,r,o,i,a){void 0===a&&(a=!0);var u=D.get(t),c=u[0],s=u[1],l=u[3],f=c[e],d=s[e];if(a&&d)for(var h=0;h<d.length;++h)d[h](n,r,o);return i&&(delete l[e],f&&f[0])?f[0](2).then(function(){return t.get(e)}):t.get(e)},F=0,V=function(){return++F},A=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return a(void 0,void 0,void 0,function(){var e,n,r,o,i,a,c,l,v,p,m,g,y,b,w,E,x,P,_,C;return u(this,function(u){switch(u.label){case 0:if(e=t[0],n=t[1],r=t[2],a=!!f((i="boolean"==typeof(o=t[3])?{revalidate:o}:o||{}).populateCache)||i.populateCache,c=!1!==i.revalidate,l=!1!==i.rollbackOnError,v=i.optimisticData,m=(p=S(n))[0],g=p[2],!m)return[2];if(y=D.get(e)[2],t.length<3)return[2,j(e,m,e.get(m),s,s,c,!0)];if(b=r,E=V(),y[m]=[E,0],x=!f(v),P=e.get(m),x&&(_=d(v)?v(P):v,e.set(m,_),j(e,m,_)),d(b))try{b=b(e.get(m))}catch(t){w=t}if(!(b&&d(b.then)))return[3,2];return[4,b.catch(function(t){w=t})];case 1:if(b=u.sent(),E!==y[m][0]){if(w)throw w;return[2,b]}w&&x&&l&&(a=!0,b=P,e.set(m,P)),u.label=2;case 2:return a&&(w||(d(a)&&(b=a(b,P)),e.set(m,b)),e.set(g,h(e.get(g),{error:w}))),y[m][1]=V(),[4,j(e,m,b,w,s,c,!!a)];case 3:if(C=u.sent(),w)throw w;return[2,a?C:b]}})})},G=function(t,e){for(var n in t)t[n][0]&&t[n][0](e)},M=function(t,e){if(!D.has(t)){var n=h(R,e),r={},o=A.bind(s,t),i=c;if(D.set(t,[r,{},{},{},o]),!T){var a=n.initFocus(setTimeout.bind(s,G.bind(s,r,0))),u=n.initReconnect(setTimeout.bind(s,G.bind(s,r,1)));i=function(){a&&a(),u&&u(),D.delete(t)}}return[t,o,i]}return[t,D.get(t)[4]]},N=M(new Map),I=N[0],H=h({onLoadingSlow:c,onSuccess:c,onError:c,onErrorRetry:function(t,e,n,r,o){var i=n.errorRetryCount,a=o.retryCount,u=~~((Math.random()+.5)*(1<<(a<8?a:8)))*n.errorRetryInterval;(f(i)||!(a>i))&&setTimeout(r,u,o)},onDiscarded:c,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:O?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:O?5e3:3e3,compare:function(t,e){return y(t)==y(e)},isPaused:function(){return!1},cache:I,mutate:N[1],fallback:{}},{isOnline:function(){return b},isVisible:function(){var t=E&&document.visibilityState;return f(t)||"hidden"!==t}}),q=function(t,e){var n=h(t,e);if(e){var r=t.use,o=t.fallback,i=e.use,a=e.fallback;r&&i&&(n.use=r.concat(i)),o&&a&&(n.fallback=h(o,a))}return n},U=(0,i.createContext)({}),W=function(t,e){var n=(0,i.useState)({})[1],r=(0,i.useRef)(t),o=(0,i.useRef)({data:!1,error:!1,isValidating:!1}),a=(0,i.useCallback)(function(t){var i=!1,a=r.current;for(var u in t){var c=u;a[c]!==t[c]&&(a[c]=t[c],o.current[c]&&(i=!0))}i&&!e.current&&n({})},[]);return L(function(){r.current=t}),[r,o.current,a]},Q=function(){return h(H,(0,i.useContext)(U))},J=function(t,e,n){var r=e[t]||(e[t]=[]);return r.push(n),function(){var t=r.indexOf(n);t>=0&&(r[t]=r[r.length-1],r.pop())}},z={dedupe:!0},K=l.defineProperty(function(t){var e=t.value,n=q((0,i.useContext)(U),e),r=e&&e.provider,o=(0,i.useState)(function(){return r?M(r(n.cache||I),e):s})[0];return o&&(n.cache=o[0],n.mutate=o[1]),L(function(){return o?o[2]:s},[]),(0,i.createElement)(U.Provider,h(t,{value:n}))},"default",{value:H}),Y=(r=function(t,e,n){var r=n.cache,o=n.compare,c=n.fallbackData,l=n.suspense,m=n.revalidateOnMount,g=n.refreshInterval,y=n.refreshWhenHidden,b=n.refreshWhenOffline,w=D.get(r),E=w[0],x=w[1],P=w[2],_=w[3],C=S(t),R=C[0],k=C[1],O=C[2],F=(0,i.useRef)(!1),G=(0,i.useRef)(!1),M=(0,i.useRef)(R),N=(0,i.useRef)(e),I=(0,i.useRef)(n),H=function(){return I.current},q=function(){return H().isVisible()&&H().isOnline()},U=function(t){return r.set(O,h(r.get(O),t))},Q=r.get(R),K=f(c)?n.fallback[R]:c,Y=f(Q)?K:Q,$=r.get(O)||{},B=$.error,X=!F.current,Z=function(){return X&&!f(m)?m:!H().isPaused()&&(l?!f(Y)&&n.revalidateIfStale:f(Y)||n.revalidateIfStale)},tt=!!R&&!!e&&(!!$.isValidating||X&&Z()),te=W({data:Y,error:B,isValidating:tt},G),tn=te[0],tr=te[1],to=te[2],ti=(0,i.useCallback)(function(t){return a(void 0,void 0,void 0,function(){var e,i,a,c,l,h,v,p,m,g,y,b,w;return u(this,function(u){switch(u.label){case 0:if(e=N.current,!R||!e||G.current||H().isPaused())return[2,!1];c=!0,l=t||{},h=!_[R]||!l.dedupe,v=function(){return!G.current&&R===M.current&&F.current},p=function(){var t=_[R];t&&t[1]===a&&delete _[R]},m={isValidating:!1},g=function(){U({isValidating:!1}),v()&&to(m)},U({isValidating:!0}),to({isValidating:!0}),u.label=1;case 1:return u.trys.push([1,3,,4]),h&&(j(r,R,tn.current.data,tn.current.error,!0),n.loadingTimeout&&!r.get(R)&&setTimeout(function(){c&&v()&&H().onLoadingSlow(R,n)},n.loadingTimeout),_[R]=[e.apply(void 0,k),V()]),i=(w=_[R])[0],a=w[1],[4,i];case 2:if(i=u.sent(),h&&setTimeout(p,n.dedupingInterval),!_[R]||_[R][1]!==a)return h&&v()&&H().onDiscarded(R),[2,!1];if(U({error:s}),m.error=s,!f(y=P[R])&&(a<=y[0]||a<=y[1]||0===y[1]))return g(),h&&v()&&H().onDiscarded(R),[2,!1];return o(tn.current.data,i)?m.data=tn.current.data:m.data=i,o(r.get(R),i)||r.set(R,i),h&&v()&&H().onSuccess(i,R,n),[3,4];case 3:return b=u.sent(),p(),!H().isPaused()&&(U({error:b}),m.error=b,h&&v()&&(H().onError(b,R,n),("boolean"==typeof n.shouldRetryOnError&&n.shouldRetryOnError||d(n.shouldRetryOnError)&&n.shouldRetryOnError(b))&&q()&&H().onErrorRetry(b,R,n,ti,{retryCount:(l.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return c=!1,g(),v()&&h&&j(r,R,m.data,m.error,!1),[2,!0]}})})},[R]),ta=(0,i.useCallback)(A.bind(s,r,function(){return M.current}),[]);if(L(function(){N.current=e,I.current=n}),L(function(){if(R){var t=R!==M.current,e=ti.bind(s,z),n=0,r=J(R,x,function(t,e,n){to(h({error:e,isValidating:n},o(tn.current.data,t)?s:{data:t}))}),i=J(R,E,function(t){if(0==t){var r=Date.now();H().revalidateOnFocus&&r>n&&q()&&(n=r+H().focusThrottleInterval,e())}else if(1==t)H().revalidateOnReconnect&&q()&&e();else if(2==t)return ti()});return G.current=!1,M.current=R,F.current=!0,t&&to({data:Y,error:B,isValidating:tt}),Z()&&(f(Y)||T?e():p()&&typeof window.requestAnimationFrame!=v?window.requestAnimationFrame(e):setTimeout(e,1)),function(){G.current=!0,r(),i()}}},[R,ti]),L(function(){var t;function e(){var e=d(g)?g(Y):g;e&&-1!==t&&(t=setTimeout(n,e))}function n(){!tn.current.error&&(y||H().isVisible())&&(b||H().isOnline())?ti(z).then(e):e()}return e(),function(){t&&(clearTimeout(t),t=-1)}},[g,y,b,ti]),(0,i.useDebugValue)(Y),l&&f(Y)&&R)throw N.current=e,I.current=n,G.current=!1,f(B)?ti(z):B;return{mutate:ta,get data(){return tr.data=!0,Y},get error(){return tr.error=!0,B},get isValidating(){return tr.isValidating=!0,tt}}},function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=Q(),o=d(t[1])?[t[0],t[1],t[2]||{}]:[t[0],null,(null===t[1]?t[2]:t[1])||{}],i=o[0],a=o[1],u=q(n,o[2]),c=r,s=u.use;if(s)for(var l=s.length;l-- >0;)c=s[l](c);return c(i,a||u.fetcher,u)});function $(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){n(t);return}u.done?e(c):Promise.resolve(c).then(r,o)}function B(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var i=t.apply(e,n);function a(t){$(i,r,o,a,u,"next",t)}function u(t){$(i,r,o,a,u,"throw",t)}a(void 0)})}}function X(){return(X=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var Z=(function(t){var e=function(t){var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function s(t,n,r,o){var i,a,u=Object.create((n&&n.prototype instanceof p?n:p).prototype),c=new R(o||[]);return u._invoke=(i=c,a=f,function(n,o){if(a===d)throw Error("Generator is already running");if(a===h){if("throw"===n)throw o;return L()}for(i.method=n,i.arg=o;;){var u=i.delegate;if(u){var c=function t(n,r){var o=n.iterator[r.method];if(o===e){if(r.delegate=null,"throw"===r.method){if(n.iterator.return&&(r.method="return",r.arg=e,t(n,r),"throw"===r.method))return v;r.method="throw",r.arg=TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(o,n.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[n.resultName]=a.value,r.next=n.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=TypeError("iterator result is not an object"),r.delegate=null,v)}(u,i);if(c){if(c===v)continue;return c}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(a===f)throw a=h,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);a=d;var s=l(t,r,i);if("normal"===s.type){if(a=i.done?h:"suspendedYield",s.arg===v)continue;return{value:s.arg,done:i.done}}"throw"===s.type&&(a=h,i.method="throw",i.arg=s.arg)}}),u}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",d="executing",h="completed",v={};function p(){}function m(){}function g(){}var y={};c(y,i,function(){return this});var b=Object.getPrototypeOf,w=b&&b(b(T([])));w&&w!==n&&r.call(w,i)&&(y=w);var E=g.prototype=p.prototype=Object.create(y);function x(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function P(t,e){var n;this._invoke=function(o,i){function a(){return new e(function(n,a){!function n(o,i,a,u){var c=l(t[o],t,i);if("throw"===c.type)u(c.arg);else{var s=c.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,a,u)},function(t){n("throw",t,a,u)}):e.resolve(f).then(function(t){s.value=t,a(s)},function(t){return n("throw",t,a,u)})}}(o,i,n,a)})}return n=n?n.then(a,a):a()}}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function T(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:L}}function L(){return{value:e,done:!0}}return m.prototype=g,c(E,"constructor",g),c(g,"constructor",m),m.displayName=c(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},x(P.prototype),c(P.prototype,a,function(){return this}),t.AsyncIterator=P,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new P(s(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then(function(t){return t.done?t.value:a.next()})},x(E),c(E,u,"Generator"),c(E,i,function(){return this}),c(E,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=T,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return u.type="throw",u.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else if(s){if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return(a.type=t,a.arg=e,i)?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:T(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}(o={exports:{}},o.exports),o.exports),tt=void 0,te=function(){if(tt){var t=tt,e=t.cache,n=t.mutate;Array.from(e.keys()).forEach(function(t){n(t)})}};function tn(){return{revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1}}function tr(t,e){var n=i.useContext(ta),r=tn();n&&(r.suspense=!0);var o=Q();i.useEffect(function(){tt=o},[o]);var a=Y(t,i.useMemo(function(){return td(e)},[e]),r);return void 0!==a.data?{data:a.data}:a.error?{error:a.error}:{isLoading:!0}}function to(t,e,n){var r=i.useContext(ta),o=X({},tn(),n);r&&(o.suspense=!0);var a=Q();i.useEffect(function(){tt=a},[a]);var u=i.useState(!1),c=u[0],s=u[1],l=Y(t,i.useCallback(B(Z.mark(function t(){var n=arguments;return Z.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s(!0),t.prev=1,t.next=4,td(e).apply(void 0,n);case 4:return t.abrupt("return",t.sent);case 5:return t.prev=5,s(!1),t.finish(5);case 8:case"end":return t.stop()}},t,null,[[1,,5,8]])})),[e]),o),f=l.isValidating,d=l.mutate,h=l.data,v=l.error;return i.useMemo(function(){return X({isValidating:f,mutate:d,isLoading:void 0===h&&void 0===v||c},void 0!==h?{data:h}:{},void 0!==v?{error:v}:{})},[f,d,h,v,c])}function ti(t){var e=t.children,n=t.suspense,r=t.prefetchedCache;return i.useContext(ta)?i.createElement(i.Fragment,null,e):i.createElement(K,{value:{fallback:null!=r?r:{},suspense:n}},e)}var ta=i.createContext(!1);function tu(t){var e=t.cache,n=t.children;return i.createElement(ta.Provider,{value:!0},i.createElement(K,{value:{provider:function(){return e},suspense:!0,fallback:{}}},n))}function tc(){return Q()}var ts=0,tl=[];function tf(t,e){return tl.push(t),null!=e&&e.immediate&&t(ts>0),function(){tl.splice(tl.indexOf(t),1)}}function td(t){return B(Z.mark(function e(){var n,r=arguments;return Z.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:var o;if(0===ts&&tl.forEach(function(t){return t(!0)}),ts+=1,e.prev=2,!((o=n=t.apply(void 0,r))&&"object"==typeof o&&"then"in o&&"function"==typeof o.then)){e.next=10;break}return e.next=7,n;case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=n;case 11:return e.abrupt("return",e.t0);case 12:return e.prev=12,0==(ts-=1)&&tl.forEach(function(t){return t(!1)}),e.finish(12);case 16:case"end":return e.stop()}},e,null,[[2,,12,16]])}))}if("undefined"!=typeof window){var th=window,tv=th.__SWRMutateAllKeys;th.__SWRMutateAllKeys=function(){te(),"function"==typeof tv&&tv()}}},30020:function(t,e,n){"use strict";n.r(e),n.d(e,{DataContext:function(){return r.DataContext},DataCtxReader:function(){return r.DataCtxReader},DataProvider:function(){return r.DataProvider},GlobalActionsContext:function(){return r.GlobalActionsContext},GlobalActionsProvider:function(){return r.GlobalActionsProvider},PageParamsProvider:function(){return r.PageParamsProvider},PlasmicCanvasContext:function(){return r.PlasmicCanvasContext},PlasmicCanvasHost:function(){return r.PlasmicCanvasHost},applySelector:function(){return r.applySelector},mkMetaName:function(){return r.mkMetaName},mkMetaValue:function(){return r.mkMetaValue},registerComponent:function(){return r.registerComponent},registerGlobalContext:function(){return r.registerGlobalContext},registerToken:function(){return r.registerToken},registerTrait:function(){return r.registerTrait},repeatedElement:function(){return r.repeatedElement},unstable_registerFetcher:function(){return r.unstable_registerFetcher},useDataEnv:function(){return r.useDataEnv},useGlobalActions:function(){return r.useGlobalActions},usePlasmicCanvasContext:function(){return r.usePlasmicCanvasContext},useSelector:function(){return r.useSelector},useSelectors:function(){return r.useSelectors}});var r=n(68030)},9008:function(t,e,n){t.exports=n(42636)},11163:function(t,e,n){t.exports=n(96885)},34155:function(t){var e,n,r,o=t.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function u(t){if(e===setTimeout)return setTimeout(t,0);if((e===i||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:i}catch(t){e=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(t){n=a}}();var c=[],s=!1,l=-1;function f(){s&&r&&(s=!1,r.length?c=r.concat(c):l=-1,c.length&&d())}function d(){if(!s){var t=u(f);s=!0;for(var e=c.length;e;){for(r=c,c=[];++l<e;)r&&r[l].run();l=-1,e=c.length}r=null,s=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function v(){}o.nextTick=function(t){var e=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new h(t,e)),1!==c.length||s||u(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(t){return[]},o.binding=function(t){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}}]);