import{ac as D,aK as b,ag as x,ci as _,r as o,d1 as T,j as e,d2 as j,d3 as k,aD as F,d4 as L,d5 as M,d6 as R,d7 as E,a as p,aN as N}from"./sanity-665e3482.js";const W=(t,n)=>({title:p("em",{children:["No schema found for type ",e("code",{children:n})]}),subtitle:p("em",{children:["Document: ",e("code",{children:t})]}),media:()=>e(N,{})});function B(t){const{layout:n,value:a}=t;return e(k,{...W(a._id,a._type),layout:n})}function P(t,n,a){return t===!1?!1:t||n&&n.icon||a||!1}function U(t){const{icon:n,id:a,layout:i="default",pressed:g,schemaType:s,selected:r,title:u,value:c}=t,v=D(),d=b(),{ChildLink:l}=x(),m=_(a),f=!!(s&&s.name&&v.get(s.name)),[y,h]=o.useState(!1),I=o.useMemo(()=>c&&T(c)?!s||!f?e(B,{value:c}):e(j,{documentPreviewStore:d,icon:P(n,s,R),layout:i,schemaType:s,value:c,presence:m}):e(k,{status:e(F,{muted:!0,children:e(L,{})}),icon:P(n,s,E),layout:i,title:u}),[d,f,n,i,s,u,c,m]),C=o.useMemo(()=>function(w){return e(l,{...w,childId:a})},[l,a]),S=o.useCallback(()=>h(!0),[]);return o.useEffect(()=>h(!1),[r]),e(M,{__unstable_focusRing:!0,as:C,"data-as":"a","data-ui":"PaneItem",padding:2,radius:2,onClick:S,pressed:g,selected:r||y,tone:"inherit",children:I})}export{U as P};