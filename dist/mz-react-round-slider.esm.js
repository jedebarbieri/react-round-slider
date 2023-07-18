/* 
MZ React Round Slider v1.0.0
https://github.com/mzusin/react-round-slider
MIT License      
Copyright (c) 2023-present, Miriam Zusin          
*/
var xt=Object.defineProperty,vt=Object.defineProperties;var At=Object.getOwnPropertyDescriptors;var Re=Object.getOwnPropertySymbols;var It=Object.prototype.hasOwnProperty,St=Object.prototype.propertyIsEnumerable;var _e=(e,t,r)=>t in e?xt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,K=(e,t)=>{for(var r in t||(t={}))It.call(t,r)&&_e(e,r,t[r]);if(Re)for(var r of Re(t))St.call(t,r)&&_e(e,r,t[r]);return e},Le=(e,t)=>vt(e,At(t));import{useEffect as me,useRef as Dt,useState as de}from"react";var Tt=Math.pow,O=(e,t=1/0)=>{if(t===1/0)return e;t<0&&(t=0);let r=Tt(10,t);return Math.round(e*r)/r},v=(e,t)=>(e%t+t)%t,k=(e,t,r,o,n)=>(n-o)*(e-t)/(r-t)+o;var Oe=e=>!isNaN(parseFloat(e))&&isFinite(e);var ye=(e,t=1/0)=>{let r=e*(180/Math.PI);return O(r,t)},_=(e,t=1/0)=>{let r=e*(Math.PI/180);return O(r,t)};var we=(e,t,r=1/0)=>{let o=[];for(let n=0;n<e.length;n++)o.push(O(e[n]-t[n],r));return o},Ne=(e,t,r=1/0)=>we(e,t,r);var Ct=(e,t,r=1/0)=>{let o=[];for(let n=0;n<e.length;n++)o.push(O(e[n]*t,r));return o},ee=(e,t,r=1/0)=>Ct(e,t,r);var Fe=(e,t=1/0)=>{let r=0;for(let o=0;o<e.length;o++)r+=e[o]*e[o];return O(Math.sqrt(r),t)};var te=(e,t,r=1/0)=>{let o=we(e,t);return Fe(o,r)};var Et=(e,t=1/0)=>{let r=Fe(e),o=[];for(let n=0;n<e.length;n++)o.push(r===0?0:O(e[n]/r,t));return o},Be=(e,t=1/0)=>Et(e,t);var L=(e,t,r)=>(t=t%Math.PI*2,[e[0]+Math.cos(t)*r,e[1]+Math.sin(t)*r]);var Ue=()=>Math.random().toString(36).substring(2)+new Date().getTime().toString(36);var ne=e=>{let t=e.duration!==void 0?e.duration:1/0,r,o,n,s,a=!1,i,c=()=>{r=void 0,n=void 0,s=void 0,a=!1,o!==void 0&&window.cancelAnimationFrame(o)},g=()=>{c(),u()},m=()=>{a=!1},p=()=>{a=!0},f=P=>{r===void 0&&(r=P),n=P-r,a&&s!==P&&typeof e.callback=="function"&&e.callback(A()),n<=t?(s=P,o=window.requestAnimationFrame(f)):c()},l=(P,E)=>{g(),typeof e.resizeCallback=="function"&&e.resizeCallback(P,E)},u=()=>{r=void 0,n=void 0,s=void 0,a=!0,e.restartOnResize&&window.ResizeObserver&&i===void 0?(i=new ResizeObserver(l),i.observe(document.body,{box:"border-box"})):o=window.requestAnimationFrame(f)},b=()=>n,h=()=>a,D=()=>r,C=()=>{if(!(t===1/0||n===void 0))return n*100/t},R=()=>i,A=()=>({start:u,stop:c,pause:m,resume:p,restart:g,isAnimating:h,getElapsedTime:b,getStartTime:D,getPercent:C,getResizeObserver:R});return A()};var He=(e,t,r,o,n,s)=>{let a=t+r*2,i=Math.max(0,o*2-a),c=e*2+a+i,[g,m]=Mt(e,o,t,r);return{cx:g,cy:m,radius:e,size:c,thickness:t,border:r,startAngleDeg:n,endAngleDeg:s}},Mt=(e,t,r,o)=>{let n=Pt(e,t,r,o),s=O(n/2,2);return[s,s]},Pt=(e,t,r,o)=>{let n=r+o*2,s=Math.max(0,t*2-n);return e*2+n+s};var Ve="#efefef";var $e="#444444";var W="#163a86",be="#000",De="#a8a8a8";var xe="#000",ve="#5daed2",ze="#97b0bb",Ge="#000";var Xe="#efefef",qe="#000";var d=(e,t)=>Oe(e)?Number(e):t,T=(e,t)=>e==null?t:e,y=(e,t)=>e==null?t:e;var U=(e,t,r)=>(e>t&&(t+=360),r>=e&&r<=t||r+360>=e&&r+360<=t),Z=(e,t)=>{t<e&&(t+=360);let r=t-e,o=v(r,360);return o===0&&r>0?360:o},Ye=(e,t,r)=>{e>t&&(t+=360);let o=2*Math.PI*r,n=t-e,s=-(e/360)*o,a=n/360*o,i=o-a;return{strokeDasharray:[a,i].join(" "),strokeOffset:s}};var V=(e,t,r,o,n,s,a)=>{let{left:i,top:c}=e.getBoundingClientRect(),g=[t-i,r-c],m=Ne(g,[o,n]),p=Math.atan2(m[1]/a,m[0]/s);return p<0&&(p+=2*Math.PI),ye(p)},q=(e,t,r,o)=>{o<r&&(o+=360),t<r&&(t+=360);let n=k(t,r,o,e.min,e.max);if(e.data.length>0){let s=Math.round(n);n=e.data[s]}else n=O(n,e.round);return n},kt=(e,t,r,o)=>{let n;if(o<r&&(o+=360),e.data.length>0){let s=e.data.findIndex(a=>a===t);n=s===-1?0:s}else n=typeof t!="number"?e.min:t;return v(k(n,e.min,e.max,r,o),360)},Rt=(e,t)=>{if(!e||!e.pointers||e.pointers.length<0||!t){let o=v(d(e.pathStartAngle,0),360),n=T(e.pointerBgColor,W),s=T(e.pointerBgColorSelected,be),a=T(e.pointerBgColorDisabled,De),i=T(e.pointerBgColorHover,s);return[{id:"0",index:0,radius:d(e.pointerRadius,10),angleDeg:o,prevAngleDeg:o,bgColor:n,bgColorSelected:s,bgColorDisabled:a,bgColorHover:i,border:d(e.pointerBorder,0),borderColor:T(e.pointerBorderColor,xe),disabled:!!e.disabled}]}let r=[];for(let o=0;o<e.pointers.length;o++){let n=e.pointers[o],s=n.radius!==void 0?n.radius:d(e.pointerRadius,10),a=n.bgColor?n.bgColor:T(e.pointerBgColor,W),i=n.bgColorSelected?n.bgColorSelected:T(e.pointerBgColorSelected,be),c=n.bgColorDisabled?n.bgColorDisabled:T(e.pointerBgColorDisabled,De),g=n.bgColorHover?n.bgColorHover:T(e.pointerBgColorHover,i),m=n.border?n.border:d(e.pointerBorder,0),p=n.borderColor?n.borderColor:T(e.pointerBorderColor,xe),f=n.disabled!==void 0?n.disabled:y(e.disabled,!1),l=d(e.pathStartAngle,0),u=d(e.pathEndAngle,360),b=kt(t,n.value,l,u),h=Ae(b,t.stepAngleDeg);t.isClosedShape&&v(h,360)===v(u,360)&&(h=l),r.push({id:o.toString(),index:o,radius:s,angleDeg:h,prevAngleDeg:h,bgColor:a,bgColorSelected:i,bgColorDisabled:c,bgColorHover:g,border:m,borderColor:p,disabled:f,ariaLabel:n.ariaLabel})}return r},Ze=(e,t)=>{let r=Rt(e,t);return{pointers:r,maxRadius:_t(r)}},_t=e=>{if(e.length<=0)return 0;let t=-1/0;for(let r of e)t=Math.max(t,Math.max(0,r.radius+r.border/2));return t},re=(e,t,r,o,n)=>{if(!e||e.length<=0)return null;if(e.length===1)return e[0];let s=k(_(t),0,Math.PI*2,0,Math.PI),a=L([r,o],s,n),i,c=null,g=e.filter(m=>!m.disabled);for(let m of g){let p=k(_(m.angleDeg),0,Math.PI*2,0,Math.PI),f=L([r,o],p,n),l=te(a,f);(i===void 0||l<i)&&(i=l,c=m)}return K({},c)},oe=(e,t,r,o,n,s)=>{let a=k(_(r),0,Math.PI*2,0,Math.PI),i=L([o,n],a,s),c=k(_(e),0,Math.PI*2,0,Math.PI),g=L([o,n],c,s),m=k(_(t),0,Math.PI*2,0,Math.PI),p=L([o,n],m,s),f=te(i,g),l=te(i,p);return f<=l?e:t},se=(e,t)=>{if(!e||e.length<=0)return null;let r,o,n=null,s=null;for(let a of e){let i=Z(t,a.angleDeg);(r===void 0||i<r)&&(n=a,r=i),(o===void 0||i>o)&&(s=a,o=i)}return n===null||s===null?null:[n,s]},Ae=(e,t)=>t===0?0:Math.round(e/t)*t;import{useEffect as ae,useState as ie,useRef as Lt,useCallback as Ot}from"react";var J={outline:"none"};import{Fragment as Ft,jsx as Ie,jsxs as Nt}from"react/jsx-runtime";var yt=(e,t,r,o,n,s,a)=>e.disabled?n:a?s:e.id===t?o:r,wt=e=>{let t=Lt(null),{pointer:r,svg:o,$svg:n,data:s,settings:a,setPointer:i,selectedPointerId:c}=e,{radius:g,angleDeg:m,bgColor:p,bgColorSelected:f,bgColorDisabled:l,bgColorHover:u,border:b,borderColor:h}=e.pointer,{cx:D,cy:C}=o,[R,A]=ie(null),[P,E]=ie(""),[H,w]=ie(W),[M,I]=ie(!1);ae(()=>{w(yt(r,c,p,f,l,u,M))},[r,c,p,f,l,u,M]),ae(()=>{let x=q(s,r.angleDeg,o.startAngleDeg,o.endAngleDeg);E(x===void 0?"":x.toString())},[s,r.angleDeg,o.startAngleDeg,o.endAngleDeg]),ae(()=>{let x=k(_(m),0,Math.PI*2,0,Math.PI),G=L([D,C],x,o.radius);A(G)},[m,D,C,o.radius]);let S=Ot(x=>{if(!n||a.disabled||r.disabled)return;let G=x.type.indexOf("mouse")!==-1?x.clientX:x.touches[0].clientX,j=x.type.indexOf("mouse")!==-1?x.clientY:x.touches[0].clientY,F=V(n,G,j,o.cx,o.cy,o.radius,o.radius),Y;U(o.startAngleDeg,o.endAngleDeg,F)?Y=F:Y=oe(o.startAngleDeg,o.endAngleDeg,r.angleDeg,o.cx,o.cy,o.radius),i(r,Y)},[n,r,i,o.cx,o.cy,o.endAngleDeg,o.radius,o.startAngleDeg,a.disabled]),z=()=>{window.removeEventListener("mousemove",S),window.removeEventListener("mouseup",S)},B=x=>{a.disabled||r.disabled||(S(x),window.addEventListener("mousemove",S),window.addEventListener("mouseup",z))},N=x=>{if(!(a.disabled||r.disabled||a.keyboardDisabled))switch(x.key){case"ArrowLeft":{x.preventDefault(),i(r,r.angleDeg+s.stepAngleDeg);break}case"ArrowRight":{x.preventDefault(),i(r,r.angleDeg-s.stepAngleDeg);break}case"ArrowUp":{x.preventDefault(),i(r,r.angleDeg-s.stepAngleDeg);break}case"ArrowDown":{x.preventDefault(),i(r,r.angleDeg+s.stepAngleDeg);break}}};ae(()=>{let x=t.current,G=F=>{a.disabled||r.disabled||(F.preventDefault(),F.stopPropagation(),S(F))},j=F=>{if(a.disabled||r.disabled||a.mousewheelDisabled||document.activeElement!==x)return;F.stopPropagation(),F.preventDefault();let Y=F.deltaY<0,pe;Y?pe=r.angleDeg+s.stepAngleDeg:pe=r.angleDeg-s.stepAngleDeg,i(r,pe)};return x==null||x.addEventListener("touchmove",G,{passive:!1}),document.addEventListener("wheel",j,{passive:!1}),()=>{x==null||x.removeEventListener("touchmove",G),document.removeEventListener("wheel",j)}},[R,S,s.stepAngleDeg,r,i,a.disabled,a.mousewheelDisabled]);let fe=()=>{I(!0)},he=()=>{I(!1)};return Ie(Ft,{children:R&&Nt("g",{ref:t,transform:`translate(${R[0]-g/2}, ${R[1]-g/2})`,role:"slider","aria-disabled":r.disabled?!0:void 0,"aria-valuenow":r.angleDeg,"aria-valuetext":P,"aria-label":r.ariaLabel,"data-type":"pointer",className:`mz-round-slider-pointer ${r.disabled?"mz-round-slider-pointer-disabled":""}`,"data-angle":r.angleDeg,"data-id":r.id,"data-index":r.index,onMouseDown:B,onKeyDown:N,onMouseOver:fe,onMouseOut:he,tabIndex:0,cursor:r.disabled?"default":"pointer",style:J,children:[!a.pointerSVG&&Ie("circle",{cx:g/2,cy:g/2,r:g,fill:H,strokeWidth:b,stroke:h,style:{transition:"0.3s fill"}}),a.pointerSVG&&Ie("g",{children:a.pointerSVG})]})})},Qe=wt;import{Fragment as Ut,jsx as Je}from"react/jsx-runtime";var Bt=e=>{let{pointers:t,settings:r,svg:o,$svg:n,data:s,setPointer:a,selectedPointerId:i}=e;return Je(Ut,{children:t.pointers.map(c=>Je(Qe,{pointer:c,svg:o,settings:r,$svg:n,data:s,setPointer:a,selectedPointerId:i},c.id))})},je=Bt;var tt=e=>{let t=d(e.min,0),r=d(e.max,100),o=d(e.step,1),n=d(e.arrowStep,1),s=d(e.round,0),a=e.data||[];if(a.length>0){let f=a.findIndex(u=>u===t),l=a.findIndex(u=>u===r);t=f===-1?0:f,r=l===-1?a.length:l}else t>r&&(t=r+100);let i=d(e.pathStartAngle,0),c=d(e.pathEndAngle,360),g=v(i,360)===v(c,360),m=o*360/(r-t),p=n*360/(r-t);return{min:t,max:r,round:s,data:a,stepAngleDeg:m,arrowStepAngleDeg:p,isClosedShape:g}};import{useCallback as Gt,useEffect as Se,useRef as ue,useState as ce}from"react";var nt=(e,t,r,o,n,s)=>{if(!e.pointers||e.pointers.length<=0)return null;let a={radius:t,cx:r,cy:o,startAngleDeg:n,endAngleDeg:n,strokeDasharray:[0,0],strokeOffset:0};if(e.pointers.length===1)a.startAngleDeg=n,a.endAngleDeg=e.pointers[0].angleDeg;else{let u=se(e.pointers,n);if(!u)return null;let[b,h]=u;a.startAngleDeg=b.angleDeg,a.endAngleDeg=h.angleDeg}let i=Z(n,s);a.startAngleDeg>a.endAngleDeg&&(a.endAngleDeg+=360);let c=Z(a.startAngleDeg,a.endAngleDeg);c>i&&(c=360-c,[a.startAngleDeg,a.endAngleDeg]=[a.endAngleDeg,a.startAngleDeg]);let m=2*Math.PI*t,p=-(a.startAngleDeg/360)*m,f=c/360*m,l=m-f;return a.strokeDasharray=[f,l],a.strokeOffset=p,a};var le=(e,t,r,o)=>{let n=e.getPercent();n<0&&(n=0),n>100&&(n=100);let s=t%360,a=r%360;if(s<o&&(s+=360),a<o&&(a+=360),a>s){let c=(a-s+360)%360;return v(t+n*c/100,360)}else{let c=(s-a+360)%360;return v(t-n*c/100,360)}};import{Fragment as Yt,jsx as rt}from"react/jsx-runtime";var Xt=(e,t,r,o,n)=>{if(e)return T(t,ze);let s=T(r,ve);return o?T(n,s):s},qt=e=>{let{settings:t,pointers:r,$svg:o,svg:n,data:s,setPointer:a}=e,[i,c]=ce(null),[g,m]=ce(null),[p,f]=ce(ve),[l,u]=ce(!1),b=ue(),h=ue(null),D=ue(0),C=ue(0);Se(()=>{f(Xt(t.disabled,t.connectionBgColorDisabled,t.connectionBgColor,l,t.connectionBgColorHover))},[t.disabled,t.connectionBgColorDisabled,t.connectionBgColor,t.connectionBgColorHover,l]),Se(()=>{c(nt(r,n.radius,n.cx,n.cy,n.startAngleDeg,n.endAngleDeg))},[r,n.radius,n.cx,n.cy,n.startAngleDeg,n.endAngleDeg]);let R=M=>{if(!o||t.disabled||g&&g.isAnimating())return;let I=V(o,M.clientX,M.clientY,n.cx,n.cy,n.radius,n.radius),S=re(r.pointers,I,n.cx,n.cy,n.radius);S&&(t.animateOnClick?(h.current=S,D.current=S.angleDeg,C.current=I,g==null||g.start()):a(S,I))},A=Gt(M=>{if(!o||t.disabled||!t.rangeDragging)return;let I=se(r.pointers,n.startAngleDeg);if(!I)return;let[S,z]=I,B=V(o,M.clientX,M.clientY,n.cx,n.cy,n.radius,n.radius);if(b.current===void 0){b.current=B;return}let N=B-b.current;N===0||Math.abs(N)<s.stepAngleDeg||(a(S,v(S.angleDeg+N,360)),a(z,v(z.angleDeg+N,360)),b.current=B)},[o,n.cx,n.cy,n.radius,s.stepAngleDeg,r.pointers,a,t.disabled,t.rangeDragging,n.startAngleDeg]),P=()=>{window.removeEventListener("mousemove",A),window.removeEventListener("mouseup",A),b.current=void 0},E=M=>{!t.rangeDragging||t.disabled||r.pointers.length<=1||(A(M),window.addEventListener("mousemove",A),window.addEventListener("mouseup",P))};Se(()=>{if(g&&g.stop(),!t.animateOnClick){m(null);return}let M=ne({callback:I=>{if(!h.current)return;let S=le(I,D.current,C.current,n.startAngleDeg);a(h.current,S)},duration:d(t.animationDuration,200)});m(M)},[t.animateOnClick,t.animationDuration]);let H=()=>{u(!0)},w=()=>{u(!1)};return rt(Yt,{children:!y(t.hideConnection,!1)&&i&&rt("circle",{"data-type":"connection",className:"mz-round-slider-connection",cx:i.cx,cy:i.cy,r:i.radius,strokeDasharray:i.strokeDasharray.join(" "),strokeDashoffset:i.strokeOffset,stroke:p,strokeWidth:n.thickness+1,fill:"none",shapeRendering:"geometricPrecision",strokeLinecap:"round",cursor:t.disabled?"default":"pointer",onClick:R,onMouseDown:E,onMouseOver:H,onMouseOut:w,style:{transition:"0.2s stroke"}})})},ot=qt;import{useEffect as Wt,useState as Zt}from"react";import{Fragment as Jt,jsx as st}from"react/jsx-runtime";var Qt=e=>{let{settings:t,pointers:r,svg:o,data:n}=e,{cx:s,cy:a}=o,[i,c]=Zt("");Wt(()=>{let m=r.pointers.map(f=>q(n,f.angleDeg,o.startAngleDeg,o.endAngleDeg));m.sort((f,l)=>f.toString().localeCompare(l.toString(),"en",{numeric:!0}));let p=m.map(f=>`${t.textPrefix||""}${f}${t.textSuffix||""}`);c(p.join(" "))},[n,r.pointers,o.startAngleDeg,o.endAngleDeg,t.textPrefix,t.textSuffix]);let g=y(t.hideText,!1);return st(Jt,{children:!g&&st("text",{"data-type":"text",className:"mz-round-slider-text",x:s+d(t.textOffsetX,0),y:a+d(t.textOffsetY,0),fill:T(t.textColor,Ge),fontSize:d(t.textFontSize,16),fontFamily:t.textFontFamily,style:{userSelect:"none",whiteSpace:"pre"},textAnchor:"middle",children:i})})},at=Qt;import{useEffect as ut,useState as ct,Fragment as sn}from"react";var it=(e,t)=>{let r=d(e.ticksCount,0);r||(t.data&&t.data.length>0?r=t.data.length:r=t.max);let o=d(e.ticksHeight,10);return{ticksCount:r,enableTicks:y(e.enableTicks,!1),ticksWidth:d(e.ticksWidth,3),ticksHeight:o,longerTicksHeight:d(e.longerTicksHeight,o*2),ticksDistanceToPanel:d(e.ticksDistanceToPanel,0),tickValuesDistance:d(e.tickValuesDistance,15),ticksColor:T(e.ticksColor,Xe),tickValuesColor:T(e.tickValuesColor,qe),tickValuesFontSize:d(e.tickValuesFontSize,12),ticksGroupSize:d(e.ticksGroupSize,10),longerTickValuesOnly:y(e.longerTickValuesOnly,!0),showTickValues:y(e.showTickValues,!0)}},lt=(e,t,r,o,n,s)=>{let a=[],i=Math.abs(o-r),c=t===0?0:i/t,g=t;s.isClosedShape||g++;for(let m=0;m<g;m++){let p=r+m*c,f=k(_(p),0,Math.PI*2,0,Math.PI),[l,u]=L([n.cx,n.cy],f,n.radius),b=e.ticksGroupSize!==void 0&&m%e.ticksGroupSize===0,h=e.ticksHeight;b&&(h=e.longerTicksHeight);let D=Be([n.cx-l,n.cy-u]),C=ee(D,h),R=ee(D,e.ticksDistanceToPanel+n.thickness/2);l+=R[0],u+=R[1];let A=l+C[0],P=u+C[1],E;if(e.showTickValues&&(!e.longerTickValuesOnly||e.longerTickValuesOnly&&(b||e.ticksGroupSize===void 0))){let I=k(m,0,t,s.min,s.max);if(s.data.length>0){let S=Math.round(I);I=s.data[S]}else I=O(I,s.round);E=(I!=null?I:"").toString()}let H=0,w=0,M=E!==void 0;if(M){let I=d(h+e.tickValuesDistance,h*1.5),S=ee(D,I);H=l+S[0],w=u+S[1]}a.push({x:l,y:u,x1:A,y1:P,textX:H,textY:w,isLonger:b,tickValue:E,showText:M})}return a};import{Fragment as ln,jsx as Ce,jsxs as gt}from"react/jsx-runtime";var an=e=>{let{settings:t,svg:r,data:o}=e,[n,s]=ct(null),[a,i]=ct([]);return ut(()=>{s(it(t,o))},[t,o]),ut(()=>{if(!n)return;let c=r.endAngleDeg;c<r.startAngleDeg&&(c+=360),i(lt(n,n.ticksCount,r.startAngleDeg,c,r,o))},[o,r,n]),Ce(ln,{children:n&&n.enableTicks&&Ce("g",{children:a.map((c,g)=>{let{x:m,y:p,x1:f,y1:l,textX:u,textY:b,showText:h}=c;return gt(sn,{children:[Ce("line",{x1:m,y1:p,x2:f,y2:l,strokeWidth:n.ticksWidth,stroke:n.ticksColor,"data-type":"tick",className:"mz-round-slider-tick"}),h&&gt("text",{"data-type":"tick-text",className:"mz-round-slider-tick-text",x:u,y:b,textAnchor:"middle",dominantBaseline:"middle",fill:n.tickValuesColor,fontSize:n.tickValuesFontSize,fontFamily:t.tickValuesFontFamily,style:{userSelect:"none",whiteSpace:"pre"},children:[t.tickValuesPrefix,c.tickValue,t.tickValuesSuffix]})]},g)})})})},mt=an;import{useEffect as pt,useState as Me,useRef as Pe}from"react";import{useEffect as dt,useState as ge}from"react";import{Fragment as cn,jsx as Ee,jsxs as ft}from"react/jsx-runtime";var un=e=>{let{svg:t,maskId:r,settings:o,circle:n}=e,[s,a]=ge([0,0]),[i,c]=ge([0,0]),[g,m]=ge(0),[p,f]=ge(!1);return dt(()=>{if(v(t.startAngleDeg,360)===v(t.endAngleDeg,360)){f(!0);return}f(y(o.pathInnerBgFull,!1))},[o.pathInnerBgFull,t.startAngleDeg,t.endAngleDeg]),dt(()=>{let l=k(t.startAngleDeg,0,Math.PI*2,0,Math.PI);a(L([t.cx,t.cy],_(l),t.radius));let u=k(t.endAngleDeg,0,Math.PI*2,0,Math.PI);c(L([t.cx,t.cy],_(u),t.radius));let b=t.endAngleDeg-t.startAngleDeg<=180?1:0;m(b)},[t.cx,t.cy,t.endAngleDeg,t.radius,t.startAngleDeg]),ft(cn,{children:[!p&&ft("mask",{id:r,children:[Ee("path",{fill:"black",d:`M ${s[0]} ${s[1]} A ${t.radius} ${t.radius} 1 ${g} 0 ${i[0]} ${i[1]}`}),Ee("path",{fill:"white",d:`M ${s[0]} ${s[1]} A ${t.radius} ${t.radius} 0 ${g===1?0:1} 1 ${i[0]} ${i[1]}`})]}),Ee("circle",{strokeDasharray:n.strokeDasharray,strokeDashoffset:n.strokeOffset,cx:t.cx,cy:t.cy,r:t.radius,stroke:"transparent",strokeWidth:t.thickness,fill:o.pathInnerBgColor,shapeRendering:"geometricPrecision",strokeLinecap:"round","data-type":"path-inner",className:"mz-round-slider-path-inner",mask:p?"":`url(#${r})`})]})},ht=un;import{jsx as ke,jsxs as mn}from"react/jsx-runtime";var gn=e=>{let{settings:t,pointers:r,$svg:o,svg:n,setPointer:s}=e,[a,i]=Me(null),[c]=Me(Ue()),[g,m]=Me({strokeDasharray:"0 1000000",strokeOffset:0}),p=Pe(null),f=Pe(0),l=Pe(0);pt(()=>{m(Ye(n.startAngleDeg,n.endAngleDeg,n.radius))},[n.startAngleDeg,n.endAngleDeg,n.radius]);let u=b=>{if(!o||t.disabled||a&&a.isAnimating())return;let h=V(o,b.clientX,b.clientY,n.cx,n.cy,n.radius,n.radius),D=re(r.pointers,h,n.cx,n.cy,n.radius);D&&(t.animateOnClick?(p.current=D,f.current=D.angleDeg,l.current=h,a==null||a.start()):s(D,h))};return pt(()=>{if(a&&a.stop(),!t.animateOnClick){i(null);return}let b=ne({callback:h=>{if(!p.current)return;let D=le(h,f.current,l.current,n.startAngleDeg);s(p.current,D)},duration:d(t.animationDuration,200)});i(b)},[t.animateOnClick,t.animationDuration]),mn("g",{onClick:u,children:[t.pathInnerBgColor&&ke(ht,{maskId:c,settings:t,svg:n,circle:g}),n.border>0&&ke("circle",{strokeDasharray:g.strokeDasharray,strokeDashoffset:g.strokeOffset,cx:n.cx,cy:n.cy,r:n.radius,stroke:T(t.pathBorderColor,$e),strokeWidth:n.thickness+n.border*2,fill:"none",shapeRendering:"geometricPrecision",strokeLinecap:"round",cursor:"pointer","data-type":"path-border",className:"mz-round-slider-path-border"}),ke("circle",{strokeDasharray:g.strokeDasharray,strokeDashoffset:g.strokeOffset,cx:n.cx,cy:n.cy,r:n.radius,stroke:T(t.pathBgColor,Ve),strokeWidth:n.thickness,fill:"none",shapeRendering:"geometricPrecision",strokeLinecap:"round",cursor:"pointer","data-type":"path",className:"mz-round-slider-path"})]})},bt=gn;import{Fragment as bn,jsx as $,jsxs as pn}from"react/jsx-runtime";var Eo=e=>{let[t,r]=de(null),[o,n]=de(null),[s,a]=de(null),[i,c]=de(""),g=Dt(null),m=Dt(null);me(()=>{let l=tt(e);JSON.stringify(t)!==JSON.stringify(l)&&r(l)},[t,e]),me(()=>{a(Ze(e,t))},[e.pointerRadius,e.pathStartAngle,e.pointerBgColor,e.pointerBgColorSelected,e.pointerBgColorDisabled,e.pointerBorder,e.pointerBorderColor,e.disabled,e.pointers,e.pointerRadius,e.pointerBgColor,e.pointerBgColorSelected,e.pointerBgColorDisabled,e.pointerBorder,e.pointerBorderColor,e.disabled,e.pathStartAngle,e.pathEndAngle,t]),me(()=>{if(!s)return;let l=d(e.pathStartAngle,0),u=d(e.pathEndAngle,360);u<=l&&(u+=360),n(He(d(e.pathRadius,150),d(e.pathThickness,5),d(e.pathBorder,0),s.maxRadius,l,u))},[e.pathRadius,e.pathThickness,e.pathBorder,e.pathStartAngle,e.pathEndAngle,s]),me(()=>{let l=u=>{u.target.closest('[data-type="pointer"]')||c("")};return document.addEventListener("mousedown",l),()=>{document.removeEventListener("mousedown",l)}},[]);let p=(l,u)=>{if(e.disabled||!s.pointers||!l||l.disabled)return;if(u=Ae(u,t.stepAngleDeg),t.isClosedShape&&v(u,360)===v(o.endAngleDeg,360)&&(u=o.startAngleDeg),l.angleDeg===u){f(l,u,!1);return}if(!e.pointersOverlap){let h,D;if(t.isClosedShape){let C=v(l.index-1,s.pointers.length),R=v(l.index+1,s.pointers.length),A=s.pointers[C],P=s.pointers[R];if(h=A.angleDeg,D=P.angleDeg,s.pointers.length===2&&h===D){let E=h;if(g.current===null)g.current=u;else{let w=E-90,M=E-.001;w<0&&(w+=360),M<0&&(M+=360);let I=U(E+.001,E+90,u),S=U(w,M,g.current),z=I&&S,B=E-90,N=E-.001;B<0&&(B+=360),N<0&&(N+=360);let fe=U(B,N,u),he=U(E+.001,E+90,g.current);if(z||fe&&he){f(l,E,!0);return}u!==E&&(g.current=u)}}}else h=l.index===0?o.startAngleDeg:s.pointers[l.index-1].angleDeg,D=l.index===s.pointers.length-1?o.endAngleDeg:s.pointers[l.index+1].angleDeg;D<=h&&(D+=360),U(h,D,u)||(u=oe(h,D,u,o.cx,o.cy,o.radius))}f(l,u,l.angleDeg!==u)},f=(l,u,b)=>{var D;if(b){let C=K({},s);if(C.pointers=[...s.pointers],C.pointers[l.index].prevAngleDeg=C.pointers[l.index].angleDeg,C.pointers[l.index].angleDeg=u,s.pointers=C.pointers,a(C),typeof e.onChange=="function"){let R=C.pointers.map(A=>{let P=q(t,A.angleDeg,o.startAngleDeg,o.endAngleDeg);return{radius:A.radius,value:P,bgColor:A.bgColor,bgColorSelected:A.bgColorSelected,bgColorDisabled:A.bgColorDisabled,border:A.border,borderColor:A.borderColor,disabled:A.disabled,ariaLabel:A.ariaLabel}});e.onChange(R)}}c(l.id);let h=(D=m.current)==null?void 0:D.querySelector(`[data-id="${l.id}"]`);h&&h.focus()};return $(bn,{children:o&&pn("svg",{ref:m,xmlns:"http://www.w3.org/2000/svg",width:o.size,height:o.size,tabIndex:0,focusable:!0,"aria-disabled":e.disabled?!0:void 0,style:e.svgBgColor?Le(K({},J),{backgroundColor:e.svgBgColor}):J,className:"mz-round-slider",children:[e.SvgDefs&&$("defs",{children:e.SvgDefs}),$(bt,{settings:e,pointers:s,svg:o,$svg:m.current,setPointer:p}),$(mt,{settings:e,svg:o,data:t}),$(ot,{settings:e,pointers:s,svg:o,$svg:m.current,data:t,setPointer:p}),$(je,{settings:e,pointers:s,svg:o,$svg:m.current,data:t,setPointer:p,selectedPointerId:i}),$(at,{settings:e,pointers:s,svg:o,data:t})]})})};export{Eo as RoundSlider};
//# sourceMappingURL=mz-react-round-slider.esm.js.map
