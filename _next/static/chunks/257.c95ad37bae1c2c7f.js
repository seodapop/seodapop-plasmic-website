"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[257],{95862:function(e,t,n){n.d(t,{O:function(){return f}});var i=n(85893),r=n(40168),l=n(42930),u=n(11636),s=n(67294),o=n(32932),c=n(11090);n(57557),n(66996),n(933);let d=(e,t)=>({title:(0,i.jsxs)("em",{children:["No schema found for type ",(0,i.jsx)("code",{children:t})]}),subtitle:(0,i.jsxs)("em",{children:["Document: ",(0,i.jsx)("code",{children:e})]}),media:()=>(0,i.jsx)(r.foC,{})});function a(e){let{layout:t,value:n}=e;return(0,i.jsx)(o.ogX,{...d(n._id,n._type),layout:t})}function m(e,t,n){return!1!==e&&(e||t&&t.icon||n||!1)}function f(e){let{icon:t,id:n,layout:d="default",pressed:f,schemaType:p,selected:h,title:x,value:g}=e,j=(0,o.I_y)(),y=(0,o.rq_)(),{ChildLink:v}=(0,c.RL)(),b=(0,o.Dqo)(n),_=!!(p&&p.name&&j.get(p.name)),[k,C]=(0,s.useState)(!1),T=(0,s.useMemo)(()=>g&&(0,l.Si)(g)?p&&_?(0,i.jsx)(c.iJ,{documentPreviewStore:y,icon:m(t,p,r.$lS),layout:d,schemaType:p,value:g,presence:b}):(0,i.jsx)(a,{value:g}):(0,i.jsx)(o.ogX,{status:(0,i.jsx)(u.xv,{muted:!0,children:(0,i.jsx)(r.XCv,{})}),icon:m(t,p,r.ROc),layout:d,title:x}),[y,_,t,d,p,x,g,b]),w=(0,s.useMemo)(()=>function(e){return(0,i.jsx)(v,{...e,childId:n})},[v,n]),M=(0,s.useCallback)(()=>C(!0),[]);return(0,s.useEffect)(()=>C(!1),[h]),(0,i.jsx)(o.oUE,{__unstable_focusRing:!0,as:w,"data-as":"a","data-ui":"PaneItem",padding:2,radius:2,onClick:M,pressed:f,selected:h||k,tone:"inherit",children:T})}},63257:function(e,t,n){n.r(t),n.d(t,{default:function(){return H}});var i=n(85893),r=n(67294),l=n(11636),u=n(38993),s=n.n(u),o=n(18446),c=n.n(o),d=n(40168);n(933);var a=n(11090),m=n(2044),f=n(66996),p=n(42930),h=n(32932),x=n(95862);n(57557),n(81763),n(47037),n(28440);var g=n(82649),j=n(23071),y=n(32817),v=n(69243),b=n(22401),_=n(29127),k=n(53741),C=n(40148),T=n(30218),w=n(34978),M=n(65583),D=n(46297),R=n(83505),W=n(98430),L=n(79878),X=n(74727),$=n(48902),I=n(56542),O=n(94975),S=n(69590),E=n.n(S);let q={by:[{field:"_updatedAt",direction:"desc"}]},z={};function B(e,t){return e._id?(0,h.vsM)(e._id):"item-".concat(t)}let N=/\b_type\s*==\s*(['"].*?['"]|\$.*?(?:\s|$))|\B(['"].*?['"]|\$.*?(?:\s|$))\s*==\s*_type\b/;function P(e){let{childItemId:t,error:n,filterIsSimpleTypeContraint:u,fullList:s,isActive:o,isLoading:c,items:f,layout:p,onListChange:g,onRetry:j,showIcons:y}=e,v=(0,h.I_y)(),{collapsed:b}=(0,a.Cc)(),{collapsed:_,index:k}=(0,a.ec)(),[C,T]=(0,r.useState)(!1);(0,r.useEffect)(()=>{if(_)return;let e=setTimeout(()=>{T(!0)},0);return()=>{clearTimeout(e)}},[_]);let w=(0,r.useCallback)(e=>{let n=(0,h.vsM)(e._id),r=t===n;return(0,i.jsx)(x.O,{icon:!1!==y&&void 0,id:n,pressed:!o&&r,selected:o&&r,layout:p,schemaType:v.get(e._type),value:e})},[t,o,p,v,y]),M=(0,r.useMemo)(()=>{if(!C)return null;if(n)return(0,i.jsx)(l.kC,{align:"center",direction:"column",height:"fill",justify:"center",children:(0,i.jsx)(l.W2,{width:1,children:(0,i.jsxs)(l.Kq,{paddingX:4,paddingY:5,space:4,children:[(0,i.jsx)(l.X6,{as:"h3",children:"Could not fetch list items"}),(0,i.jsxs)(l.xv,{as:"p",children:["Error: ",(0,i.jsx)("code",{children:n.message})]}),j&&(0,i.jsx)(l.xu,{children:(0,i.jsx)(l.zx,{icon:d.bnu,onClick:j,text:"Retry",tone:"primary"})})]})})});if(null===f)return(0,i.jsx)(l.kC,{align:"center",direction:"column",height:"fill",justify:"center",children:(0,i.jsx)(m.Delay,{ms:300,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.$j,{muted:!0}),(0,i.jsx)(l.xu,{marginTop:3,children:(0,i.jsx)(l.xv,{align:"center",muted:!0,size:1,children:"Loading documents…"})})]})})});if(!c&&0===f.length)return(0,i.jsx)(l.kC,{align:"center",direction:"column",height:"fill",justify:"center",children:(0,i.jsx)(l.W2,{width:1,children:(0,i.jsx)(l.xu,{paddingX:4,paddingY:5,children:(0,i.jsx)(l.xv,{align:"center",muted:!0,size:2,children:u?"No documents of this type":"No matching documents"})})})});let e=s&&2e3===f.length;return(0,i.jsxs)(l.xu,{padding:2,children:[f.length>0&&(0,i.jsx)(l.CP,{gap:1,getItemKey:B,items:f,renderItem:w,onChange:g},"".concat(k,"-").concat(_)),c&&(0,i.jsx)(l.Zb,{borderTop:!0,marginTop:1,paddingX:3,paddingY:4,children:(0,i.jsx)(l.xv,{align:"center",muted:!0,size:1,children:"Loading…"})}),e&&(0,i.jsx)(l.Zb,{marginTop:1,paddingX:3,paddingY:4,radius:2,tone:"transparent",children:(0,i.jsxs)(l.xv,{align:"center",muted:!0,size:1,children:["Displaying a maximum of ",2e3," documents"]})})]})},[n,u,s,g,c,f,j,w,C,_,k]);return(0,i.jsx)(a.Bh,{overflow:b?void 0:"auto",children:M})}let Y=(0,r.memo)(e=>{let{index:t,initialValueTemplates:n=[],menuItems:u=[],menuItemGroups:s=[],setLayout:o,setSortOrder:c,title:f}=e,{features:p}=(0,m.useDeskTool)(),h=(0,r.useMemo)(()=>({setLayout:e=>{let{layout:t}=e;o(t)},setSortOrder:e=>{c(e)}}),[o,c]);return(0,i.jsx)(a.hX,{backButton:p.backButton&&t>0&&(0,i.jsx)(l.zx,{as:a.hb,"data-as":"a",icon:d.Y4O,mode:"bleed"}),title:f,actions:(0,i.jsx)(a.cp,{initialValueTemplateItems:n,actionHandlers:h,menuItemGroups:s,menuItems:u})})});Y.displayName="DocumentListPaneHeader";let K={result:null,error:!1},U=e=>({result:{documents:e},loading:!1,error:!1}),F=e=>({result:null,loading:!1,error:e}),V=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new g.x,i=n.next.bind(n),r=e.pipe((0,_.U)(e=>({client:e.client,query:e.query,params:e.params})),(0,k.x)(E()),(0,C._)(1),(0,T.x)()),l=r.pipe((0,w.w)(e=>{let n=(0,h.OPK)(e.client,e.query,e.params,t).pipe((0,_.U)(U),(0,M.B)());return(0,j.T)((0,y.of)({loading:!0}).pipe((0,D.g)(400),(0,R.R)(n)),n)}));return l.pipe((0,W.O)(K),(0,L.K)((e,t)=>(0,v.z)((0,y.of)(F(e)),(0,j.T)((0,b.R)(window,"online"),n).pipe((0,X.q)(1),(0,$.j)(t)))),(0,I.R)((e,t)=>({...e,...t,onRetry:i})))},Z=[],A=e=>{let{menuItems:t,sortOrderRaw:n,layout:i}=e;return null==t?void 0:t.map(e=>{var t,r,l,u;return(null==(t=e.params)?void 0:t.layout)?{...e,selected:i===(null==(r=e.params)?void 0:r.layout)}:(null==(l=null==e?void 0:e.params)?void 0:l.by)?{...e,selected:c()(null==n?void 0:n.by,(null==(u=null==e?void 0:e.params)?void 0:u.by)||Z)}:{...e,selected:!1}})},H=(0,r.memo)(function(e){let{childItemId:t,index:n,isActive:l,isSelected:u,pane:o,paneKey:c}=e,d=(0,h.I_y)(),{name:x}=(0,h.Lky)(),{defaultLayout:g="default",displayOptions:j,initialValueTemplates:v=Z,menuItems:b,menuItemGroups:_,options:k,title:C}=o,{apiVersion:T,defaultOrdering:w=Z,filter:M}=k,D=function(e){let t=(0,r.useRef)(e);return s()(t.current,e)||(t.current=e),t.current}(k.params||z),R=o.source,W=(0,r.useMemo)(()=>(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(N);if(!n)return null;let i=(n[1]||n[2]).trim().replace(/^["']|["']$/g,"");if("$"===i[0]){let e=i.slice(1),n=t[e];return"string"==typeof n?n:null}return i})(M,D),[M,D]),L=(null==j?void 0:j.showIcons)!==!1,[X,$]=(0,m.useDeskToolSetting)(W,"layout",g),I=(0,r.useMemo)(()=>(null==w?void 0:w.length)>0?{by:w}:q,[w]),[S,E]=(0,m.useDeskToolSetting)(W,"sortOrder",I),B=W&&S?function(e,t){let n=e.by.map(e=>{if(e.mapWith)return e;let n=function(e,t){let n=f.mL(t),i=e;for(let e of n){if(!i)return;if("string"==typeof e){i=function(e,t){if(!("fields"in e))return;let n=e.fields.find(e=>e.name===t);return n?n.type:void 0}(i,e);continue}let t=(0,p.Fd)(e)||(0,p.dw)(e);if(!t||"array"!==i.jsonType)return;let[n,r]=i.of||[];if(r||!n)return;if(!(0,p.dD)(n)){i=n;continue}let[l,u]=n.to||[];if(u||!l)return;i=l}return i}(t,e.field);return n?!function(e,t){let n=e.type;for(;n;){if(n.name===t||!n.type&&n.jsonType===t)return!0;n=n.type}return!1}(n,"datetime")?"string"===n.jsonType?{...e,mapWith:"lower"}:e:{...e,mapWith:"dateTime"}:e});return n.every((t,n)=>t===e.by[n])?e:{...e,by:n}}(S,d.get(W)):S,K=(0,h.BoV)(B),U=/^_type\s*==\s*['"$]\w+['"]?\s*$/.test(M.trim()),{error:F,fullList:H,handleListChange:J,isLoading:G,items:Q,onRetry:ee}=function(e){var t;let{apiVersion:n,filter:i,params:l,sortOrder:u}=e,s=(0,h.m85)(h.Dr7),[o,c]=(0,r.useState)(!1),d=(0,r.useRef)(o),[a,m]=(0,r.useState)(null),f=(null==a?void 0:a.error)||null,p=(null==a?void 0:a.loading)||null===a,x=null==a?void 0:a.onRetry,g=null==(t=null==a?void 0:a.result)?void 0:t.documents,j=(0,r.useMemo)(()=>g?(0,h.RgL)(g).map(e=>{let t=e.draft||e.published;return{...t,hasPublished:!!e.published,hasDraft:!!e.draft}}):null,[g]),v=(0,r.useMemo)(()=>{let e=null==u?void 0:u.extendedProjection,t=["_id","_type"],n=t.join(","),r=(null==u?void 0:u.by)||[],l=o?2e3:100,s=r.length>0?r:q.by,c=s.map(e=>[e.mapWith?"".concat(e.mapWith,"(").concat(e.field,")"):e.field,(e.direction||"").toLowerCase()].map(e=>e.trim()).filter(Boolean).join(" ")).join(",");if(e){let r=t.concat(e).join(",");return["*[".concat(i,"] {").concat(r,"}"),"order(".concat(c,") [0...").concat(l,"]"),"{".concat(n,"}")].join("|")}return"*[".concat(i,"]|order(").concat(c,")[0...").concat(l,"]{").concat(n,"}")},[i,o,u]),b=(0,r.useCallback)(e=>{let{toIndex:t}=e;p||d.current||!(t>=50)||(c(!0),d.current=!0)},[p]);return(0,r.useEffect)(()=>{m(e=>e?{...e,loading:!0}:null);let e=V((0,y.of)({client:s,query:v,params:l}),{apiVersion:n,tag:"desk.document-list"}).pipe((0,O.h)(o?e=>!!e.result:()=>!0)),t=e.subscribe(m);return()=>t.unsubscribe()},[n,s,o,v,l]),(0,r.useEffect)(()=>{m(null),c(!1),d.current=!1},[i,l,u,n]),{error:f,fullList:o,handleListChange:b,isLoading:p,items:j,onRetry:x}}({filter:M,params:D,sortOrder:K,apiVersion:T}),et=(0,r.useMemo)(()=>A({menuItems:b,sortOrderRaw:S,layout:X}),[X,b,S]);return(0,i.jsx)(h.cWh,{name:R||x,children:(0,i.jsxs)(a.X6,{currentMaxWidth:350,id:c,maxWidth:640,minWidth:320,selected:u,children:[a.Oo,(0,i.jsx)(Y,{index:n,initialValueTemplates:v,menuItems:et,menuItemGroups:_,setLayout:$,setSortOrder:E,title:C}),(0,i.jsx)(P,{childItemId:t,error:F,filterIsSimpleTypeContraint:U,fullList:H,isActive:l,isLoading:G,items:Q,layout:X,onListChange:J,onRetry:ee,showIcons:L})]})})})}}]);