/* 
MZ React Round Slider v1.0.3
https://github.com/mzusin/react-round-slider
MIT License      
Copyright (c) 2023-present, Miriam Zusin          
*/
var xt=Object.defineProperty,vt=Object.defineProperties;var At=Object.getOwnPropertyDescriptors;var ke=Object.getOwnPropertySymbols;var It=Object.prototype.hasOwnProperty,St=Object.prototype.propertyIsEnumerable;var Re=(e,t,r)=>t in e?xt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,K=(e,t)=>{for(var r in t||(t={}))It.call(t,r)&&Re(e,r,t[r]);if(ke)for(var r of ke(t))St.call(t,r)&&Re(e,r,t[r]);return e},_e=(e,t)=>vt(e,At(t));import{useEffect as ge,useRef as Dt,useState as me}from"react";var Ct=Math.pow,w=(e,t=1/0)=>{if(t===1/0)return e;t<0&&(t=0);let r=Ct(10,t);return Math.round(e*r)/r},D=(e,t)=>(e%t+t)%t,R=(e,t,r,o,n)=>(n-o)*(e-t)/(r-t)+o;var Le=e=>!isNaN(parseFloat(e))&&isFinite(e);var we=(e,t=1/0)=>{let r=e*(180/Math.PI);return w(r,t)},_=(e,t=1/0)=>{let r=e*(Math.PI/180);return w(r,t)};var Oe=(e,t,r=1/0)=>{let o=[];for(let n=0;n<e.length;n++)o.push(w(e[n]-t[n],r));return o},ye=(e,t,r=1/0)=>Oe(e,t,r);var Tt=(e,t,r=1/0)=>{let o=[];for(let n=0;n<e.length;n++)o.push(w(e[n]*t,r));return o},ee=(e,t,r=1/0)=>Tt(e,t,r);var Ne=(e,t=1/0)=>{let r=0;for(let o=0;o<e.length;o++)r+=e[o]*e[o];return w(Math.sqrt(r),t)};var te=(e,t,r=1/0)=>{let o=Oe(e,t);return Ne(o,r)};var Et=(e,t=1/0)=>{let r=Ne(e),o=[];for(let n=0;n<e.length;n++)o.push(r===0?0:w(e[n]/r,t));return o},Be=(e,t=1/0)=>Et(e,t);var L=(e,t,r)=>(t=t%Math.PI*2,[e[0]+Math.cos(t)*r,e[1]+Math.sin(t)*r]);var Fe=()=>Math.random().toString(36).substring(2)+new Date().getTime().toString(36);var ne=e=>{let t=e.duration!==void 0?e.duration:1/0,r,o,n,s,a=!1,l,c=()=>{r=void 0,n=void 0,s=void 0,a=!1,o!==void 0&&window.cancelAnimationFrame(o)},g=()=>{c(),u()},m=()=>{a=!1},h=()=>{a=!0},p=k=>{r===void 0&&(r=k),n=k-r,a&&s!==k&&typeof e.callback=="function"&&e.callback(A()),n<=t?(s=k,o=window.requestAnimationFrame(p)):c()},i=(k,E)=>{g(),typeof e.resizeCallback=="function"&&e.resizeCallback(k,E)},u=()=>{r=void 0,n=void 0,s=void 0,a=!0,e.restartOnResize&&window.ResizeObserver&&l===void 0?(l=new ResizeObserver(i),l.observe(document.body,{box:"border-box"})):o=window.requestAnimationFrame(p)},x=()=>n,d=()=>a,b=()=>r,T=()=>{if(!(t===1/0||n===void 0))return n*100/t},P=()=>l,A=()=>({start:u,stop:c,pause:m,resume:h,restart:g,isAnimating:d,getElapsedTime:x,getStartTime:b,getPercent:T,getResizeObserver:P});return A()};var Ue=(e,t,r,o,n,s)=>{let a=t+r*2,l=Math.max(0,o*2-a),c=e*2+a+l,[g,m]=Mt(e,o,t,r);return{cx:g,cy:m,radius:e,size:c,thickness:t,border:r,startAngleDeg:n,endAngleDeg:s}},Mt=(e,t,r,o)=>{let n=Pt(e,t,r,o),s=w(n/2,2);return[s,s]},Pt=(e,t,r,o)=>{let n=r+o*2,s=Math.max(0,t*2-n);return e*2+n+s};var He="#efefef";var Ve="#444444";var W="#163a86",pe="#000",be="#a8a8a8";var De="#000",xe="#5daed2",$e="#97b0bb",ze="#000";var Ge="#efefef",Xe="#000";var f=(e,t)=>Le(e)?Number(e):t,I=(e,t)=>e==null?t:e,O=(e,t)=>e==null?t:e;var U=(e,t,r)=>(e>t&&(t+=360),r>=e&&r<=t||r+360>=e&&r+360<=t),Z=(e,t)=>{t<e&&(t+=360);let r=t-e,o=D(r,360);return o===0&&r>0?360:o},qe=(e,t,r)=>{e>t&&(t+=360);let o=2*Math.PI*r,n=t-e,s=-(e/360)*o,a=n/360*o,l=o-a;return{strokeDasharray:[a,l].join(" "),strokeOffset:s}};var V=(e,t,r,o,n,s,a)=>{let{left:l,top:c}=e.getBoundingClientRect(),g=[t-l,r-c],m=ye(g,[o,n]),h=Math.atan2(m[1]/a,m[0]/s);return h<0&&(h+=2*Math.PI),we(h)},q=(e,t,r,o)=>{o<r&&(o+=360),t<r&&(t+=360);let n=R(t,r,o,e.min,e.max);if(e.data.length>0){let s=Math.round(n);n=e.data[s]}else n=w(n,e.round);return n},kt=(e,t,r,o)=>{let n;if(o<r&&(o+=360),e.data.length>0){let s=e.data.findIndex(a=>a===t);n=s===-1?0:s}else n=typeof t!="number"?e.min:t;return D(R(n,e.min,e.max,r,o),360)},Rt=(e,t)=>{if(!e||!e.pointers||e.pointers.length<0||!t){let o=D(f(e.pathStartAngle,0),360),n=I(e.pointerBgColor,W),s=I(e.pointerBgColorSelected,pe),a=I(e.pointerBgColorDisabled,be),l=I(e.pointerBgColorHover,s);return[{id:"0",index:0,radius:f(e.pointerRadius,10),angleDeg:o,prevAngleDeg:o,bgColor:n,bgColorSelected:s,bgColorDisabled:a,bgColorHover:l,border:f(e.pointerBorder,0),borderColor:I(e.pointerBorderColor,De),disabled:!!e.disabled}]}let r=[];for(let o=0;o<e.pointers.length;o++){let n=e.pointers[o],s=n.radius!==void 0?n.radius:f(e.pointerRadius,10),a=n.bgColor?n.bgColor:I(e.pointerBgColor,W),l=n.bgColorSelected?n.bgColorSelected:I(e.pointerBgColorSelected,pe),c=n.bgColorDisabled?n.bgColorDisabled:I(e.pointerBgColorDisabled,be),g=n.bgColorHover?n.bgColorHover:I(e.pointerBgColorHover,l),m=n.border?n.border:f(e.pointerBorder,0),h=n.borderColor?n.borderColor:I(e.pointerBorderColor,De),p=n.disabled!==void 0?n.disabled:O(e.disabled,!1),i=f(e.pathStartAngle,0),u=f(e.pathEndAngle,360),x=kt(t,n.value,i,u),d=ve(x,t.stepAngleDeg,i,u);t.isClosedShape&&D(d,360)===D(u,360)&&(d=i),r.push({id:o.toString(),index:o,radius:s,angleDeg:d,prevAngleDeg:d,bgColor:a,bgColorSelected:l,bgColorDisabled:c,bgColorHover:g,border:m,borderColor:h,disabled:p,ariaLabel:n.ariaLabel})}return r},We=(e,t)=>{let r=Rt(e,t);return{pointers:r,maxRadius:_t(r)}},_t=e=>{if(e.length<=0)return 0;let t=-1/0;for(let r of e)t=Math.max(t,Math.max(0,r.radius+r.border/2));return t},re=(e,t,r,o,n)=>{if(!e||e.length<=0)return null;if(e.length===1)return e[0];let s=R(_(t),0,Math.PI*2,0,Math.PI),a=L([r,o],s,n),l,c=null,g=e.filter(m=>!m.disabled);for(let m of g){let h=R(_(m.angleDeg),0,Math.PI*2,0,Math.PI),p=L([r,o],h,n),i=te(a,p);(l===void 0||i<l)&&(l=i,c=m)}return K({},c)},oe=(e,t,r,o,n,s)=>{let a=R(_(r),0,Math.PI*2,0,Math.PI),l=L([o,n],a,s),c=R(_(e),0,Math.PI*2,0,Math.PI),g=L([o,n],c,s),m=R(_(t),0,Math.PI*2,0,Math.PI),h=L([o,n],m,s),p=te(l,g),i=te(l,h);return p<=i?e:t},Ze=(e,t)=>{if(!e||e.length<=0)return null;let r,o,n=null,s=null;for(let a of e){let l=Z(t,a.angleDeg);(r===void 0||l<r)&&(n=a,r=l),(o===void 0||l>o)&&(s=a,o=l)}return n===null||s===null?null:[n,s]},ve=(e,t,r,o)=>D(e,360)===D(r,360)||D(e,360)===D(o,360)?e:t===0?0:Math.round(e/t)*t;import{useEffect as se,useState as ae,useRef as Lt,useCallback as wt}from"react";var J={outline:"none"};import{Fragment as Bt,jsx as Ae,jsxs as Nt}from"react/jsx-runtime";var Ot=(e,t,r,o,n,s,a)=>e.disabled?n:a?s:e.id===t?o:r,yt=e=>{let t=Lt(null),{pointer:r,svg:o,$svg:n,data:s,settings:a,setPointer:l,selectedPointerId:c}=e,{radius:g,angleDeg:m,bgColor:h,bgColorSelected:p,bgColorDisabled:i,bgColorHover:u,border:x,borderColor:d}=e.pointer,{cx:b,cy:T}=o,[P,A]=ae(null),[k,E]=ae(""),[H,y]=ae(W),[M,S]=ae(!1);se(()=>{y(Ot(r,c,h,p,i,u,M))},[r,c,h,p,i,u,M]),se(()=>{let v=q(s,r.angleDeg,o.startAngleDeg,o.endAngleDeg);E(v===void 0?"":v.toString())},[s,r.angleDeg,o.startAngleDeg,o.endAngleDeg]),se(()=>{let v=R(_(m),0,Math.PI*2,0,Math.PI),G=L([b,T],v,o.radius);A(G)},[m,b,T,o.radius]);let C=wt(v=>{if(!n||a.disabled||r.disabled)return;let G=v.type.indexOf("mouse")!==-1?v.clientX:v.touches[0].clientX,j=v.type.indexOf("mouse")!==-1?v.clientY:v.touches[0].clientY,B=V(n,G,j,o.cx,o.cy,o.radius,o.radius),Y;U(o.startAngleDeg,o.endAngleDeg,B)?Y=B:Y=oe(o.startAngleDeg,o.endAngleDeg,r.angleDeg,o.cx,o.cy,o.radius),l(r,Y)},[n,r,l,o.cx,o.cy,o.endAngleDeg,o.radius,o.startAngleDeg,a.disabled]),z=()=>{window.removeEventListener("mousemove",C),window.removeEventListener("mouseup",C)},F=v=>{a.disabled||r.disabled||(C(v),window.addEventListener("mousemove",C),window.addEventListener("mouseup",z))},N=v=>{if(!(a.disabled||r.disabled||a.keyboardDisabled))switch(v.key){case"ArrowLeft":{v.preventDefault(),l(r,r.angleDeg+s.arrowStepAngleDeg);break}case"ArrowRight":{v.preventDefault(),l(r,r.angleDeg-s.arrowStepAngleDeg);break}case"ArrowUp":{v.preventDefault(),l(r,r.angleDeg-s.arrowStepAngleDeg);break}case"ArrowDown":{v.preventDefault(),l(r,r.angleDeg+s.arrowStepAngleDeg);break}}};se(()=>{let v=t.current,G=B=>{a.disabled||r.disabled||(B.preventDefault(),B.stopPropagation(),C(B))},j=B=>{if(a.disabled||r.disabled||a.mousewheelDisabled||document.activeElement!==v)return;B.stopPropagation(),B.preventDefault();let Y=B.deltaY<0,he;Y?he=r.angleDeg+s.arrowStepAngleDeg:he=r.angleDeg-s.arrowStepAngleDeg,l(r,he)};return v==null||v.addEventListener("touchmove",G,{passive:!1}),document.addEventListener("wheel",j,{passive:!1}),()=>{v==null||v.removeEventListener("touchmove",G),document.removeEventListener("wheel",j)}},[P,C,s.arrowStepAngleDeg,r,l,a.disabled,a.mousewheelDisabled]);let de=()=>{S(!0)},fe=()=>{S(!1)};return Ae(Bt,{children:P&&Nt("g",{ref:t,transform:`translate(${P[0]-g/2}, ${P[1]-g/2})`,role:"slider","aria-disabled":r.disabled?!0:void 0,"aria-valuenow":r.angleDeg,"aria-valuetext":k,"aria-label":r.ariaLabel,"data-type":"pointer",className:`mz-round-slider-pointer ${r.disabled?"mz-round-slider-pointer-disabled":""}`,"data-angle":r.angleDeg,"data-id":r.id,"data-index":r.index,onMouseDown:F,onKeyDown:N,onMouseOver:de,onMouseOut:fe,tabIndex:0,cursor:r.disabled?"default":"pointer",style:J,children:[!a.pointerSVG&&Ae("circle",{cx:g/2,cy:g/2,r:g,fill:H,strokeWidth:x,stroke:d,style:{transition:"0.3s fill"}}),a.pointerSVG&&Ae("g",{children:a.pointerSVG})]})})},Qe=yt;import{Fragment as Ut,jsx as Je}from"react/jsx-runtime";var Ft=e=>{let{pointers:t,settings:r,svg:o,$svg:n,data:s,setPointer:a,selectedPointerId:l}=e;return Je(Ut,{children:t.pointers.map(c=>Je(Qe,{pointer:c,svg:o,settings:r,$svg:n,data:s,setPointer:a,selectedPointerId:l},c.id))})},je=Ft;var tt=e=>{let t=f(e.min,0),r=f(e.max,100),o=f(e.step,1),n=f(e.arrowStep,1),s=f(e.round,0),a=e.data||[];if(a.length>0){let p=a.findIndex(u=>u===t),i=a.findIndex(u=>u===r);t=p===-1?0:p,r=i===-1?a.length:i}else t>r&&(t=r+100);let l=f(e.pathStartAngle,0),c=f(e.pathEndAngle,360),g=D(l,360)===D(c,360),m=o*(c-l)/(r-t),h=n*(c-l)/(r-t);return{min:t,max:r,round:s,data:a,stepAngleDeg:m,arrowStepAngleDeg:h,isClosedShape:g}};import{useCallback as Gt,useEffect as Ie,useRef as le,useState as ue}from"react";var nt=(e,t,r,o,n,s)=>{if(!e.pointers||e.pointers.length<=0)return null;let a={radius:t,cx:r,cy:o,startAngleDeg:n,endAngleDeg:n,strokeDasharray:[0,0],strokeOffset:0};e.pointers.length===1?(a.startAngleDeg=n,a.endAngleDeg=e.pointers[0].angleDeg):(a.startAngleDeg=e.pointers[0].angleDeg,a.endAngleDeg=e.pointers[e.pointers.length-1].angleDeg);let l=Z(n,s);a.startAngleDeg>a.endAngleDeg&&(a.endAngleDeg+=360);let c=Z(a.startAngleDeg,a.endAngleDeg);c>l&&(c=360-c,[a.startAngleDeg,a.endAngleDeg]=[a.endAngleDeg,a.startAngleDeg]);let m=2*Math.PI*t,h=-(a.startAngleDeg/360)*m,p=c/360*m,i=m-p;return a.strokeDasharray=[p,i],a.strokeOffset=h,a};var ie=(e,t,r,o)=>{let n=e.getPercent();n<0&&(n=0),n>100&&(n=100);let s=t%360,a=r%360;if(s<o&&(s+=360),a<o&&(a+=360),a>s){let c=(a-s+360)%360;return D(t+n*c/100,360)}else{let c=(s-a+360)%360;return D(t-n*c/100,360)}};import{Fragment as Yt,jsx as rt}from"react/jsx-runtime";var Xt=(e,t,r,o,n)=>{if(e)return I(t,$e);let s=I(r,xe);return o?I(n,s):s},qt=e=>{let{settings:t,pointers:r,$svg:o,svg:n,data:s,setPointer:a}=e,[l,c]=ue(null),[g,m]=ue(null),[h,p]=ue(xe),[i,u]=ue(!1),x=le(),d=le(null),b=le(0),T=le(0);Ie(()=>{p(Xt(t.disabled,t.connectionBgColorDisabled,t.connectionBgColor,i,t.connectionBgColorHover))},[t.disabled,t.connectionBgColorDisabled,t.connectionBgColor,t.connectionBgColorHover,i]),Ie(()=>{c(nt(r,n.radius,n.cx,n.cy,n.startAngleDeg,n.endAngleDeg))},[r,n.radius,n.cx,n.cy,n.startAngleDeg,n.endAngleDeg]);let P=M=>{if(!o||t.disabled||g&&g.isAnimating())return;let S=V(o,M.clientX,M.clientY,n.cx,n.cy,n.radius,n.radius),C=re(r.pointers,S,n.cx,n.cy,n.radius);C&&(t.animateOnClick?(d.current=C,b.current=C.angleDeg,T.current=S,g==null||g.start()):a(C,S))},A=Gt(M=>{if(!o||t.disabled||!t.rangeDragging)return;let S=Ze(r.pointers,n.startAngleDeg);if(!S)return;let[C,z]=S,F=V(o,M.clientX,M.clientY,n.cx,n.cy,n.radius,n.radius);if(x.current===void 0){x.current=F;return}let N=F-x.current;N===0||Math.abs(N)<s.stepAngleDeg||(a(C,D(C.angleDeg+N,360)),a(z,D(z.angleDeg+N,360)),x.current=F)},[o,n.cx,n.cy,n.radius,s.stepAngleDeg,r.pointers,a,t.disabled,t.rangeDragging,n.startAngleDeg]),k=()=>{window.removeEventListener("mousemove",A),window.removeEventListener("mouseup",A),x.current=void 0},E=M=>{!t.rangeDragging||t.disabled||r.pointers.length<=1||(A(M),window.addEventListener("mousemove",A),window.addEventListener("mouseup",k))};Ie(()=>{if(g&&g.stop(),!t.animateOnClick){m(null);return}let M=ne({callback:S=>{if(!d.current)return;let C=ie(S,b.current,T.current,n.startAngleDeg);a(d.current,C)},duration:f(t.animationDuration,200)});m(M)},[t.animateOnClick,t.animationDuration]);let H=()=>{u(!0)},y=()=>{u(!1)};return rt(Yt,{children:!O(t.hideConnection,!1)&&l&&rt("circle",{"data-type":"connection",className:"mz-round-slider-connection",cx:l.cx,cy:l.cy,r:l.radius,strokeDasharray:l.strokeDasharray.join(" "),strokeDashoffset:l.strokeOffset,stroke:h,strokeWidth:n.thickness+1,fill:"none",shapeRendering:"geometricPrecision",strokeLinecap:"round",cursor:t.disabled?"default":"pointer",onClick:P,onMouseDown:E,onMouseOver:H,onMouseOut:y,style:{transition:"0.2s stroke"}})})},ot=qt;import{useEffect as Wt,useState as Zt}from"react";import{Fragment as Jt,jsx as st}from"react/jsx-runtime";var Qt=e=>{let{settings:t,pointers:r,svg:o,data:n}=e,{cx:s,cy:a}=o,[l,c]=Zt("");Wt(()=>{let m=r.pointers.map(i=>q(n,i.angleDeg,o.startAngleDeg,o.endAngleDeg));m.sort((i,u)=>i.toString().localeCompare(u.toString(),"en",{numeric:!0}));let h=m.map(i=>`${t.textPrefix||""}${i}${t.textSuffix||""}`),p=I(t.textBetween," ");c(h.join(p))},[n,r.pointers,o.startAngleDeg,o.endAngleDeg,t.textPrefix,t.textSuffix,t.textBetween]);let g=O(t.hideText,!1);return st(Jt,{children:!g&&st("text",{"data-type":"text",className:"mz-round-slider-text",x:s+f(t.textOffsetX,0),y:a+f(t.textOffsetY,0),fill:I(t.textColor,ze),fontSize:f(t.textFontSize,16),fontFamily:t.textFontFamily,style:{userSelect:"none",whiteSpace:"pre"},textAnchor:"middle",children:l})})},at=Qt;import{useEffect as ut,useState as ct,Fragment as sn}from"react";var it=(e,t)=>{let r=f(e.ticksCount,0);r||(t.data&&t.data.length>0?r=t.data.length:r=t.max);let o=f(e.ticksHeight,10);return{ticksCount:r,enableTicks:O(e.enableTicks,!1),ticksWidth:f(e.ticksWidth,3),ticksHeight:o,longerTicksHeight:f(e.longerTicksHeight,o*2),ticksDistanceToPanel:f(e.ticksDistanceToPanel,0),tickValuesDistance:f(e.tickValuesDistance,15),ticksColor:I(e.ticksColor,Ge),tickValuesColor:I(e.tickValuesColor,Xe),tickValuesFontSize:f(e.tickValuesFontSize,12),ticksGroupSize:f(e.ticksGroupSize,10),longerTickValuesOnly:O(e.longerTickValuesOnly,!0),showTickValues:O(e.showTickValues,!0)}},lt=(e,t,r,o,n,s)=>{let a=[],l=Math.abs(o-r),c=t===0?0:l/t,g=t;s.isClosedShape||g++;for(let m=0;m<g;m++){let h=r+m*c,p=R(_(h),0,Math.PI*2,0,Math.PI),[i,u]=L([n.cx,n.cy],p,n.radius),x=e.ticksGroupSize!==void 0&&m%e.ticksGroupSize===0,d=e.ticksHeight;x&&(d=e.longerTicksHeight);let b=Be([n.cx-i,n.cy-u]),T=ee(b,d),P=ee(b,e.ticksDistanceToPanel+n.thickness/2);i+=P[0],u+=P[1];let A=i+T[0],k=u+T[1],E;if(e.showTickValues&&(!e.longerTickValuesOnly||e.longerTickValuesOnly&&(x||e.ticksGroupSize===void 0))){let S=R(m,0,t,s.min,s.max);if(s.data.length>0){let C=Math.round(S);S=s.data[C]}else S=w(S,s.round);E=(S!=null?S:"").toString()}let H=0,y=0,M=E!==void 0;if(M){let S=f(d+e.tickValuesDistance,d*1.5),C=ee(b,S);H=i+C[0],y=u+C[1]}a.push({x:i,y:u,x1:A,y1:k,textX:H,textY:y,isLonger:x,tickValue:E,showText:M})}return a};import{Fragment as ln,jsx as Ce,jsxs as gt}from"react/jsx-runtime";var an=e=>{let{settings:t,svg:r,data:o}=e,[n,s]=ct(null),[a,l]=ct([]);return ut(()=>{s(it(t,o))},[t,o]),ut(()=>{if(!n)return;let c=r.endAngleDeg;c<r.startAngleDeg&&(c+=360),l(lt(n,n.ticksCount,r.startAngleDeg,c,r,o))},[o,r,n]),Ce(ln,{children:n&&n.enableTicks&&Ce("g",{children:a.map((c,g)=>{let{x:m,y:h,x1:p,y1:i,textX:u,textY:x,showText:d}=c;return gt(sn,{children:[Ce("line",{x1:m,y1:h,x2:p,y2:i,strokeWidth:n.ticksWidth,stroke:n.ticksColor,"data-type":"tick",className:"mz-round-slider-tick"}),d&&gt("text",{"data-type":"tick-text",className:"mz-round-slider-tick-text",x:u,y:x,textAnchor:"middle",dominantBaseline:"middle",fill:n.tickValuesColor,fontSize:n.tickValuesFontSize,fontFamily:t.tickValuesFontFamily,style:{userSelect:"none",whiteSpace:"pre"},children:[t.tickValuesPrefix,c.tickValue,t.tickValuesSuffix]})]},g)})})})},mt=an;import{useEffect as pt,useState as Ee,useRef as Me}from"react";import{useEffect as dt,useState as ce}from"react";import{Fragment as cn,jsx as Te,jsxs as ft}from"react/jsx-runtime";var un=e=>{let{svg:t,maskId:r,settings:o,circle:n}=e,[s,a]=ce([0,0]),[l,c]=ce([0,0]),[g,m]=ce(0),[h,p]=ce(!1);return dt(()=>{if(D(t.startAngleDeg,360)===D(t.endAngleDeg,360)){p(!0);return}p(O(o.pathInnerBgFull,!1))},[o.pathInnerBgFull,t.startAngleDeg,t.endAngleDeg]),dt(()=>{let i=R(t.startAngleDeg,0,Math.PI*2,0,Math.PI);a(L([t.cx,t.cy],_(i),t.radius));let u=R(t.endAngleDeg,0,Math.PI*2,0,Math.PI);c(L([t.cx,t.cy],_(u),t.radius));let x=t.endAngleDeg-t.startAngleDeg<=180?1:0;m(x)},[t.cx,t.cy,t.endAngleDeg,t.radius,t.startAngleDeg]),ft(cn,{children:[!h&&ft("mask",{id:r,children:[Te("path",{fill:"black",d:`M ${s[0]} ${s[1]} A ${t.radius} ${t.radius} 1 ${g} 0 ${l[0]} ${l[1]}`}),Te("path",{fill:"white",d:`M ${s[0]} ${s[1]} A ${t.radius} ${t.radius} 0 ${g===1?0:1} 1 ${l[0]} ${l[1]}`})]}),Te("circle",{strokeDasharray:n.strokeDasharray,strokeDashoffset:n.strokeOffset,cx:t.cx,cy:t.cy,r:t.radius,stroke:"transparent",strokeWidth:t.thickness,fill:o.pathInnerBgColor,shapeRendering:"geometricPrecision",strokeLinecap:"round","data-type":"path-inner",className:"mz-round-slider-path-inner",mask:h?"":`url(#${r})`})]})},ht=un;import{jsx as Pe,jsxs as mn}from"react/jsx-runtime";var gn=e=>{let{settings:t,pointers:r,$svg:o,svg:n,setPointer:s}=e,[a,l]=Ee(null),[c]=Ee(Fe()),[g,m]=Ee({strokeDasharray:"0 1000000",strokeOffset:0}),h=Me(null),p=Me(0),i=Me(0);pt(()=>{m(qe(n.startAngleDeg,n.endAngleDeg,n.radius))},[n.startAngleDeg,n.endAngleDeg,n.radius]);let u=x=>{if(!o||t.disabled||a&&a.isAnimating())return;let d=V(o,x.clientX,x.clientY,n.cx,n.cy,n.radius,n.radius),b=re(r.pointers,d,n.cx,n.cy,n.radius);b&&(t.animateOnClick?(h.current=b,p.current=b.angleDeg,i.current=d,a==null||a.start()):s(b,d))};return pt(()=>{if(a&&a.stop(),!t.animateOnClick){l(null);return}let x=ne({callback:d=>{if(!h.current)return;let b=ie(d,p.current,i.current,n.startAngleDeg);s(h.current,b)},duration:f(t.animationDuration,200)});l(x)},[t.animateOnClick,t.animationDuration]),mn("g",{onClick:u,children:[t.pathInnerBgColor&&Pe(ht,{maskId:c,settings:t,svg:n,circle:g}),n.border>0&&Pe("circle",{strokeDasharray:g.strokeDasharray,strokeDashoffset:g.strokeOffset,cx:n.cx,cy:n.cy,r:n.radius,stroke:I(t.pathBorderColor,Ve),strokeWidth:n.thickness+n.border*2,fill:"none",shapeRendering:"geometricPrecision",strokeLinecap:"round",cursor:"pointer","data-type":"path-border",className:"mz-round-slider-path-border"}),Pe("circle",{strokeDasharray:g.strokeDasharray,strokeDashoffset:g.strokeOffset,cx:n.cx,cy:n.cy,r:n.radius,stroke:I(t.pathBgColor,He),strokeWidth:n.thickness,fill:"none",shapeRendering:"geometricPrecision",strokeLinecap:"round",cursor:"pointer","data-type":"path",className:"mz-round-slider-path"})]})},bt=gn;import{Fragment as bn,jsx as $,jsxs as pn}from"react/jsx-runtime";var Co=e=>{let[t,r]=me(null),[o,n]=me(null),[s,a]=me(null),[l,c]=me(""),g=Dt(null),m=Dt(null);ge(()=>{let i=tt(e);JSON.stringify(t)!==JSON.stringify(i)&&r(i)},[t,e]),ge(()=>{a(We(e,t))},[e.pointerRadius,e.pathStartAngle,e.pointerBgColor,e.pointerBgColorSelected,e.pointerBgColorDisabled,e.pointerBorder,e.pointerBorderColor,e.disabled,e.pointers,e.pointerRadius,e.pointerBgColor,e.pointerBgColorSelected,e.pointerBgColorDisabled,e.pointerBorder,e.pointerBorderColor,e.disabled,e.pathStartAngle,e.pathEndAngle,t]),ge(()=>{if(!s)return;let i=f(e.pathStartAngle,0),u=f(e.pathEndAngle,360);u<=i&&(u+=360),n(Ue(f(e.pathRadius,150),f(e.pathThickness,5),f(e.pathBorder,0),s.maxRadius,i,u))},[e.pathRadius,e.pathThickness,e.pathBorder,e.pathStartAngle,e.pathEndAngle,s]),ge(()=>{let i=u=>{u.target.closest('[data-type="pointer"]')||c("")};return document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}},[]);let h=(i,u)=>{if(e.disabled||!s.pointers||!i||i.disabled)return;if(u=ve(u,t.stepAngleDeg,o.startAngleDeg,o.endAngleDeg),t.isClosedShape&&D(u,360)===D(o.endAngleDeg,360)&&(u=o.startAngleDeg),i.angleDeg===u){p(i,u,!1);return}if(!e.pointersOverlap){let d,b;if(t.isClosedShape){let T=D(i.index-1,s.pointers.length),P=D(i.index+1,s.pointers.length),A=s.pointers[T],k=s.pointers[P];if(d=A.angleDeg,b=k.angleDeg,s.pointers.length===2&&d===b){let E=d;if(g.current===null)g.current=u;else{let y=E-150,M=E-.001;y<0&&(y+=360),M<0&&(M+=360);let S=U(E+.001,E+150,u),C=U(y,M,g.current),z=S&&C,F=E-150,N=E-.001;F<0&&(F+=360),N<0&&(N+=360);let de=U(F,N,u),fe=U(E+.001,E+150,g.current);if(z||de&&fe){p(i,E,!0);return}u!==E&&(g.current=u)}}}else d=i.index===0?o.startAngleDeg:s.pointers[i.index-1].angleDeg,b=i.index===s.pointers.length-1?o.endAngleDeg:s.pointers[i.index+1].angleDeg;b<=d?b+=360:D(d,360)<=D(b,360)&&(d=D(d,360),b=D(b,360)),U(d,b,u)||(u=oe(d,b,u,o.cx,o.cy,o.radius))}p(i,u,i.angleDeg!==u)},p=(i,u,x)=>{var b;if(x){let T=K({},s);T.pointers=[...s.pointers],T.pointers[i.index].prevAngleDeg=T.pointers[i.index].angleDeg,T.pointers[i.index].angleDeg=u,s.pointers=T.pointers,a(T);let P=()=>T.pointers.map(A=>{let k=q(t,A.angleDeg,o.startAngleDeg,o.endAngleDeg);return{radius:A.radius,value:k,bgColor:A.bgColor,bgColorSelected:A.bgColorSelected,bgColorDisabled:A.bgColorDisabled,border:A.border,borderColor:A.borderColor,disabled:A.disabled,ariaLabel:A.ariaLabel}});if(typeof e.onChange=="function"){let A=P();e.onChange(A)}if(typeof e.onClickUp=="function"){let A=P();e.onClickUp(A)}}c(i.id);let d=(b=m.current)==null?void 0:b.querySelector(`[data-id="${i.id}"]`);d&&d.focus()};return $(bn,{children:o&&pn("svg",{ref:m,xmlns:"http://www.w3.org/2000/svg",width:o.size,height:o.size,tabIndex:0,focusable:!0,"aria-disabled":e.disabled?!0:void 0,style:e.svgBgColor?_e(K({},J),{backgroundColor:e.svgBgColor}):J,className:`mz-round-slider ${e.disabled?"mz-round-slider-disabled":""}`,children:[e.SvgDefs&&$("defs",{children:e.SvgDefs}),$(bt,{settings:e,pointers:s,svg:o,$svg:m.current,setPointer:h}),$(mt,{settings:e,svg:o,data:t}),$(ot,{settings:e,pointers:s,svg:o,$svg:m.current,data:t,setPointer:h}),$(je,{settings:e,pointers:s,svg:o,$svg:m.current,data:t,setPointer:h,selectedPointerId:l}),$(at,{settings:e,pointers:s,svg:o,data:t})]})})};export{Co as RoundSlider};
//# sourceMappingURL=mz-react-round-slider.esm.js.map
