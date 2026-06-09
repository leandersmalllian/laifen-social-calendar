(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))u(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const w of h.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&u(w)}).observe(document,{childList:!0,subtree:!0});function s(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function u(d){if(d.ep)return;d.ep=!0;const h=s(d);fetch(d.href,h)}})();function zc(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Qo={exports:{}},zr={},Yo={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rc;function nh(){if(rc)return J;rc=1;var a=Symbol.for("react.element"),o=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),w=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),F=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),P=Symbol.iterator;function $(y){return y===null||typeof y!="object"?null:(y=P&&y[P]||y["@@iterator"],typeof y=="function"?y:null)}var re={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,G={};function V(y,M,Z){this.props=y,this.context=M,this.refs=G,this.updater=Z||re}V.prototype.isReactComponent={},V.prototype.setState=function(y,M){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,M,"setState")},V.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function Ne(){}Ne.prototype=V.prototype;function Ke(y,M,Z){this.props=y,this.context=M,this.refs=G,this.updater=Z||re}var Be=Ke.prototype=new Ne;Be.constructor=Ke,q(Be,V.prototype),Be.isPureReactComponent=!0;var be=Array.isArray,Oe=Object.prototype.hasOwnProperty,K={current:null},ke={key:!0,ref:!0,__self:!0,__source:!0};function _(y,M,Z){var Q,ee={},ne=null,ce=null;if(M!=null)for(Q in M.ref!==void 0&&(ce=M.ref),M.key!==void 0&&(ne=""+M.key),M)Oe.call(M,Q)&&!ke.hasOwnProperty(Q)&&(ee[Q]=M[Q]);var ae=arguments.length-2;if(ae===1)ee.children=Z;else if(1<ae){for(var me=Array(ae),tn=0;tn<ae;tn++)me[tn]=arguments[tn+2];ee.children=me}if(y&&y.defaultProps)for(Q in ae=y.defaultProps,ae)ee[Q]===void 0&&(ee[Q]=ae[Q]);return{$$typeof:a,type:y,key:ne,ref:ce,props:ee,_owner:K.current}}function Y(y,M){return{$$typeof:a,type:y.type,key:M,ref:y.ref,props:y.props,_owner:y._owner}}function ue(y){return typeof y=="object"&&y!==null&&y.$$typeof===a}function Ae(y){var M={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(Z){return M[Z]})}var Pe=/\/+/g;function ie(y,M){return typeof y=="object"&&y!==null&&y.key!=null?Ae(""+y.key):M.toString(36)}function Ee(y,M,Z,Q,ee){var ne=typeof y;(ne==="undefined"||ne==="boolean")&&(y=null);var ce=!1;if(y===null)ce=!0;else switch(ne){case"string":case"number":ce=!0;break;case"object":switch(y.$$typeof){case a:case o:ce=!0}}if(ce)return ce=y,ee=ee(ce),y=Q===""?"."+ie(ce,0):Q,be(ee)?(Z="",y!=null&&(Z=y.replace(Pe,"$&/")+"/"),Ee(ee,M,Z,"",function(tn){return tn})):ee!=null&&(ue(ee)&&(ee=Y(ee,Z+(!ee.key||ce&&ce.key===ee.key?"":(""+ee.key).replace(Pe,"$&/")+"/")+y)),M.push(ee)),1;if(ce=0,Q=Q===""?".":Q+":",be(y))for(var ae=0;ae<y.length;ae++){ne=y[ae];var me=Q+ie(ne,ae);ce+=Ee(ne,M,Z,me,ee)}else if(me=$(y),typeof me=="function")for(y=me.call(y),ae=0;!(ne=y.next()).done;)ne=ne.value,me=Q+ie(ne,ae++),ce+=Ee(ne,M,Z,me,ee);else if(ne==="object")throw M=String(y),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.");return ce}function Se(y,M,Z){if(y==null)return y;var Q=[],ee=0;return Ee(y,Q,"","",function(ne){return M.call(Z,ne,ee++)}),Q}function xe(y){if(y._status===-1){var M=y._result;M=M(),M.then(function(Z){(y._status===0||y._status===-1)&&(y._status=1,y._result=Z)},function(Z){(y._status===0||y._status===-1)&&(y._status=2,y._result=Z)}),y._status===-1&&(y._status=0,y._result=M)}if(y._status===1)return y._result.default;throw y._result}var ye={current:null},N={transition:null},H={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:N,ReactCurrentOwner:K};function W(){throw Error("act(...) is not supported in production builds of React.")}return J.Children={map:Se,forEach:function(y,M,Z){Se(y,function(){M.apply(this,arguments)},Z)},count:function(y){var M=0;return Se(y,function(){M++}),M},toArray:function(y){return Se(y,function(M){return M})||[]},only:function(y){if(!ue(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},J.Component=V,J.Fragment=s,J.Profiler=d,J.PureComponent=Ke,J.StrictMode=u,J.Suspense=L,J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,J.act=W,J.cloneElement=function(y,M,Z){if(y==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+y+".");var Q=q({},y.props),ee=y.key,ne=y.ref,ce=y._owner;if(M!=null){if(M.ref!==void 0&&(ne=M.ref,ce=K.current),M.key!==void 0&&(ee=""+M.key),y.type&&y.type.defaultProps)var ae=y.type.defaultProps;for(me in M)Oe.call(M,me)&&!ke.hasOwnProperty(me)&&(Q[me]=M[me]===void 0&&ae!==void 0?ae[me]:M[me])}var me=arguments.length-2;if(me===1)Q.children=Z;else if(1<me){ae=Array(me);for(var tn=0;tn<me;tn++)ae[tn]=arguments[tn+2];Q.children=ae}return{$$typeof:a,type:y.type,key:ee,ref:ne,props:Q,_owner:ce}},J.createContext=function(y){return y={$$typeof:w,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},y.Provider={$$typeof:h,_context:y},y.Consumer=y},J.createElement=_,J.createFactory=function(y){var M=_.bind(null,y);return M.type=y,M},J.createRef=function(){return{current:null}},J.forwardRef=function(y){return{$$typeof:S,render:y}},J.isValidElement=ue,J.lazy=function(y){return{$$typeof:B,_payload:{_status:-1,_result:y},_init:xe}},J.memo=function(y,M){return{$$typeof:F,type:y,compare:M===void 0?null:M}},J.startTransition=function(y){var M=N.transition;N.transition={};try{y()}finally{N.transition=M}},J.unstable_act=W,J.useCallback=function(y,M){return ye.current.useCallback(y,M)},J.useContext=function(y){return ye.current.useContext(y)},J.useDebugValue=function(){},J.useDeferredValue=function(y){return ye.current.useDeferredValue(y)},J.useEffect=function(y,M){return ye.current.useEffect(y,M)},J.useId=function(){return ye.current.useId()},J.useImperativeHandle=function(y,M,Z){return ye.current.useImperativeHandle(y,M,Z)},J.useInsertionEffect=function(y,M){return ye.current.useInsertionEffect(y,M)},J.useLayoutEffect=function(y,M){return ye.current.useLayoutEffect(y,M)},J.useMemo=function(y,M){return ye.current.useMemo(y,M)},J.useReducer=function(y,M,Z){return ye.current.useReducer(y,M,Z)},J.useRef=function(y){return ye.current.useRef(y)},J.useState=function(y){return ye.current.useState(y)},J.useSyncExternalStore=function(y,M,Z){return ye.current.useSyncExternalStore(y,M,Z)},J.useTransition=function(){return ye.current.useTransition()},J.version="18.3.1",J}var ic;function al(){return ic||(ic=1,Yo.exports=nh()),Yo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ac;function th(){if(ac)return zr;ac=1;var a=al(),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,d=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function w(S,L,F){var B,P={},$=null,re=null;F!==void 0&&($=""+F),L.key!==void 0&&($=""+L.key),L.ref!==void 0&&(re=L.ref);for(B in L)u.call(L,B)&&!h.hasOwnProperty(B)&&(P[B]=L[B]);if(S&&S.defaultProps)for(B in L=S.defaultProps,L)P[B]===void 0&&(P[B]=L[B]);return{$$typeof:o,type:S,key:$,ref:re,props:P,_owner:d.current}}return zr.Fragment=s,zr.jsx=w,zr.jsxs=w,zr}var oc;function rh(){return oc||(oc=1,Qo.exports=th()),Qo.exports}var p=rh(),se=al();const ih=zc(se);var Zi={},qo={exports:{}},Xe={},Xo={exports:{}},el={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lc;function ah(){return lc||(lc=1,(function(a){function o(N,H){var W=N.length;N.push(H);e:for(;0<W;){var y=W-1>>>1,M=N[y];if(0<d(M,H))N[y]=H,N[W]=M,W=y;else break e}}function s(N){return N.length===0?null:N[0]}function u(N){if(N.length===0)return null;var H=N[0],W=N.pop();if(W!==H){N[0]=W;e:for(var y=0,M=N.length,Z=M>>>1;y<Z;){var Q=2*(y+1)-1,ee=N[Q],ne=Q+1,ce=N[ne];if(0>d(ee,W))ne<M&&0>d(ce,ee)?(N[y]=ce,N[ne]=W,y=ne):(N[y]=ee,N[Q]=W,y=Q);else if(ne<M&&0>d(ce,W))N[y]=ce,N[ne]=W,y=ne;else break e}}return H}function d(N,H){var W=N.sortIndex-H.sortIndex;return W!==0?W:N.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;a.unstable_now=function(){return h.now()}}else{var w=Date,S=w.now();a.unstable_now=function(){return w.now()-S}}var L=[],F=[],B=1,P=null,$=3,re=!1,q=!1,G=!1,V=typeof setTimeout=="function"?setTimeout:null,Ne=typeof clearTimeout=="function"?clearTimeout:null,Ke=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Be(N){for(var H=s(F);H!==null;){if(H.callback===null)u(F);else if(H.startTime<=N)u(F),H.sortIndex=H.expirationTime,o(L,H);else break;H=s(F)}}function be(N){if(G=!1,Be(N),!q)if(s(L)!==null)q=!0,xe(Oe);else{var H=s(F);H!==null&&ye(be,H.startTime-N)}}function Oe(N,H){q=!1,G&&(G=!1,Ne(_),_=-1),re=!0;var W=$;try{for(Be(H),P=s(L);P!==null&&(!(P.expirationTime>H)||N&&!Ae());){var y=P.callback;if(typeof y=="function"){P.callback=null,$=P.priorityLevel;var M=y(P.expirationTime<=H);H=a.unstable_now(),typeof M=="function"?P.callback=M:P===s(L)&&u(L),Be(H)}else u(L);P=s(L)}if(P!==null)var Z=!0;else{var Q=s(F);Q!==null&&ye(be,Q.startTime-H),Z=!1}return Z}finally{P=null,$=W,re=!1}}var K=!1,ke=null,_=-1,Y=5,ue=-1;function Ae(){return!(a.unstable_now()-ue<Y)}function Pe(){if(ke!==null){var N=a.unstable_now();ue=N;var H=!0;try{H=ke(!0,N)}finally{H?ie():(K=!1,ke=null)}}else K=!1}var ie;if(typeof Ke=="function")ie=function(){Ke(Pe)};else if(typeof MessageChannel<"u"){var Ee=new MessageChannel,Se=Ee.port2;Ee.port1.onmessage=Pe,ie=function(){Se.postMessage(null)}}else ie=function(){V(Pe,0)};function xe(N){ke=N,K||(K=!0,ie())}function ye(N,H){_=V(function(){N(a.unstable_now())},H)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(N){N.callback=null},a.unstable_continueExecution=function(){q||re||(q=!0,xe(Oe))},a.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<N?Math.floor(1e3/N):5},a.unstable_getCurrentPriorityLevel=function(){return $},a.unstable_getFirstCallbackNode=function(){return s(L)},a.unstable_next=function(N){switch($){case 1:case 2:case 3:var H=3;break;default:H=$}var W=$;$=H;try{return N()}finally{$=W}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(N,H){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var W=$;$=N;try{return H()}finally{$=W}},a.unstable_scheduleCallback=function(N,H,W){var y=a.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?y+W:y):W=y,N){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=W+M,N={id:B++,callback:H,priorityLevel:N,startTime:W,expirationTime:M,sortIndex:-1},W>y?(N.sortIndex=W,o(F,N),s(L)===null&&N===s(F)&&(G?(Ne(_),_=-1):G=!0,ye(be,W-y))):(N.sortIndex=M,o(L,N),q||re||(q=!0,xe(Oe))),N},a.unstable_shouldYield=Ae,a.unstable_wrapCallback=function(N){var H=$;return function(){var W=$;$=H;try{return N.apply(this,arguments)}finally{$=W}}}})(el)),el}var sc;function oh(){return sc||(sc=1,Xo.exports=ah()),Xo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uc;function lh(){if(uc)return Xe;uc=1;var a=al(),o=oh();function s(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,d={};function h(e,n){w(e,n),w(e+"Capture",n)}function w(e,n){for(d[e]=n,e=0;e<n.length;e++)u.add(n[e])}var S=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),L=Object.prototype.hasOwnProperty,F=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,B={},P={};function $(e){return L.call(P,e)?!0:L.call(B,e)?!1:F.test(e)?P[e]=!0:(B[e]=!0,!1)}function re(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function q(e,n,t,r){if(n===null||typeof n>"u"||re(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function G(e,n,t,r,i,l,c){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=c}var V={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){V[e]=new G(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];V[n]=new G(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){V[e]=new G(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){V[e]=new G(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){V[e]=new G(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){V[e]=new G(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){V[e]=new G(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){V[e]=new G(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){V[e]=new G(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ne=/[\-:]([a-z])/g;function Ke(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Ne,Ke);V[n]=new G(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Ne,Ke);V[n]=new G(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Ne,Ke);V[n]=new G(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){V[e]=new G(e,1,!1,e.toLowerCase(),null,!1,!1)}),V.xlinkHref=new G("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){V[e]=new G(e,1,!1,e.toLowerCase(),null,!0,!0)});function Be(e,n,t,r){var i=V.hasOwnProperty(n)?V[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(q(n,t,i,r)&&(t=null),r||i===null?$(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var be=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oe=Symbol.for("react.element"),K=Symbol.for("react.portal"),ke=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),ue=Symbol.for("react.provider"),Ae=Symbol.for("react.context"),Pe=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),Ee=Symbol.for("react.suspense_list"),Se=Symbol.for("react.memo"),xe=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),N=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=N&&e[N]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,y;function M(e){if(y===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);y=n&&n[1]||""}return`
`+y+e}var Z=!1;function Q(e,n){if(!e||Z)return"";Z=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(x){var r=x}Reflect.construct(e,[],n)}else{try{n.call()}catch(x){r=x}e.call(n.prototype)}else{try{throw Error()}catch(x){r=x}e()}}catch(x){if(x&&r&&typeof x.stack=="string"){for(var i=x.stack.split(`
`),l=r.stack.split(`
`),c=i.length-1,f=l.length-1;1<=c&&0<=f&&i[c]!==l[f];)f--;for(;1<=c&&0<=f;c--,f--)if(i[c]!==l[f]){if(c!==1||f!==1)do if(c--,f--,0>f||i[c]!==l[f]){var m=`
`+i[c].replace(" at new "," at ");return e.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",e.displayName)),m}while(1<=c&&0<=f);break}}}finally{Z=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?M(e):""}function ee(e){switch(e.tag){case 5:return M(e.type);case 16:return M("Lazy");case 13:return M("Suspense");case 19:return M("SuspenseList");case 0:case 2:case 15:return e=Q(e.type,!1),e;case 11:return e=Q(e.type.render,!1),e;case 1:return e=Q(e.type,!0),e;default:return""}}function ne(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ke:return"Fragment";case K:return"Portal";case Y:return"Profiler";case _:return"StrictMode";case ie:return"Suspense";case Ee:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ae:return(e.displayName||"Context")+".Consumer";case ue:return(e._context.displayName||"Context")+".Provider";case Pe:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Se:return n=e.displayName||null,n!==null?n:ne(e.type)||"Memo";case xe:n=e._payload,e=e._init;try{return ne(e(n))}catch{}}return null}function ce(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ne(n);case 8:return n===_?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ae(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function me(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function tn(e){var n=me(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(c){r=""+c,l.call(this,c)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(c){r=""+c},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function _r(e){e._valueTracker||(e._valueTracker=tn(e))}function ul(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=me(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ta(e,n){var t=n.checked;return W({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function cl(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=ae(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function dl(e,n){n=n.checked,n!=null&&Be(e,"checked",n,!1)}function ra(e,n){dl(e,n);var t=ae(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ia(e,n.type,t):n.hasOwnProperty("defaultValue")&&ia(e,n.type,ae(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function fl(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ia(e,n,t){(n!=="number"||Br(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Kt=Array.isArray;function wt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+ae(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function aa(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(s(91));return W({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function hl(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(s(92));if(Kt(t)){if(1<t.length)throw Error(s(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:ae(t)}}function ml(e,n){var t=ae(n.value),r=ae(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function pl(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function gl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oa(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?gl(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Or,yl=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Or=Or||document.createElement("div"),Or.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Or.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Zt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Jt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},id=["Webkit","ms","Moz","O"];Object.keys(Jt).forEach(function(e){id.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Jt[n]=Jt[e]})});function vl(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Jt.hasOwnProperty(e)&&Jt[e]?(""+n).trim():n+"px"}function wl(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=vl(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var ad=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function la(e,n){if(n){if(ad[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(s(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(s(61))}if(n.style!=null&&typeof n.style!="object")throw Error(s(62))}}function sa(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ua=null;function ca(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var da=null,kt=null,St=null;function kl(e){if(e=yr(e)){if(typeof da!="function")throw Error(s(280));var n=e.stateNode;n&&(n=ui(n),da(e.stateNode,e.type,n))}}function Sl(e){kt?St?St.push(e):St=[e]:kt=e}function xl(){if(kt){var e=kt,n=St;if(St=kt=null,kl(e),n)for(e=0;e<n.length;e++)kl(n[e])}}function Ll(e,n){return e(n)}function El(){}var fa=!1;function Ml(e,n,t){if(fa)return e(n,t);fa=!0;try{return Ll(e,n,t)}finally{fa=!1,(kt!==null||St!==null)&&(El(),xl())}}function Qt(e,n){var t=e.stateNode;if(t===null)return null;var r=ui(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(s(231,n,typeof t));return t}var ha=!1;if(S)try{var Yt={};Object.defineProperty(Yt,"passive",{get:function(){ha=!0}}),window.addEventListener("test",Yt,Yt),window.removeEventListener("test",Yt,Yt)}catch{ha=!1}function od(e,n,t,r,i,l,c,f,m){var x=Array.prototype.slice.call(arguments,3);try{n.apply(t,x)}catch(C){this.onError(C)}}var qt=!1,Ir=null,Hr=!1,ma=null,ld={onError:function(e){qt=!0,Ir=e}};function sd(e,n,t,r,i,l,c,f,m){qt=!1,Ir=null,od.apply(ld,arguments)}function ud(e,n,t,r,i,l,c,f,m){if(sd.apply(this,arguments),qt){if(qt){var x=Ir;qt=!1,Ir=null}else throw Error(s(198));Hr||(Hr=!0,ma=x)}}function at(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Cl(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function bl(e){if(at(e)!==e)throw Error(s(188))}function cd(e){var n=e.alternate;if(!n){if(n=at(e),n===null)throw Error(s(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return bl(i),e;if(l===r)return bl(i),n;l=l.sibling}throw Error(s(188))}if(t.return!==r.return)t=i,r=l;else{for(var c=!1,f=i.child;f;){if(f===t){c=!0,t=i,r=l;break}if(f===r){c=!0,r=i,t=l;break}f=f.sibling}if(!c){for(f=l.child;f;){if(f===t){c=!0,t=l,r=i;break}if(f===r){c=!0,r=l,t=i;break}f=f.sibling}if(!c)throw Error(s(189))}}if(t.alternate!==r)throw Error(s(190))}if(t.tag!==3)throw Error(s(188));return t.stateNode.current===t?e:n}function Pl(e){return e=cd(e),e!==null?Tl(e):null}function Tl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Tl(e);if(n!==null)return n;e=e.sibling}return null}var Nl=o.unstable_scheduleCallback,Dl=o.unstable_cancelCallback,dd=o.unstable_shouldYield,fd=o.unstable_requestPaint,Me=o.unstable_now,hd=o.unstable_getCurrentPriorityLevel,pa=o.unstable_ImmediatePriority,zl=o.unstable_UserBlockingPriority,Ur=o.unstable_NormalPriority,md=o.unstable_LowPriority,Wl=o.unstable_IdlePriority,Gr=null,xn=null;function pd(e){if(xn&&typeof xn.onCommitFiberRoot=="function")try{xn.onCommitFiberRoot(Gr,e,void 0,(e.current.flags&128)===128)}catch{}}var pn=Math.clz32?Math.clz32:vd,gd=Math.log,yd=Math.LN2;function vd(e){return e>>>=0,e===0?32:31-(gd(e)/yd|0)|0}var Vr=64,$r=4194304;function Xt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Kr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,c=t&268435455;if(c!==0){var f=c&~i;f!==0?r=Xt(f):(l&=c,l!==0&&(r=Xt(l)))}else c=t&~i,c!==0?r=Xt(c):l!==0&&(r=Xt(l));if(r===0)return 0;if(n!==0&&n!==r&&(n&i)===0&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if((r&4)!==0&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-pn(n),i=1<<t,r|=e[t],n&=~i;return r}function wd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kd(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var c=31-pn(l),f=1<<c,m=i[c];m===-1?((f&t)===0||(f&r)!==0)&&(i[c]=wd(f,n)):m<=n&&(e.expiredLanes|=f),l&=~f}}function ga(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function jl(){var e=Vr;return Vr<<=1,(Vr&4194240)===0&&(Vr=64),e}function ya(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function er(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-pn(n),e[n]=t}function Sd(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-pn(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function va(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-pn(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var oe=0;function Fl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Al,wa,Rl,_l,Bl,ka=!1,Zr=[],Rn=null,_n=null,Bn=null,nr=new Map,tr=new Map,On=[],xd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ol(e,n){switch(e){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":_n=null;break;case"mouseover":case"mouseout":Bn=null;break;case"pointerover":case"pointerout":nr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":tr.delete(n.pointerId)}}function rr(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=yr(n),n!==null&&wa(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Ld(e,n,t,r,i){switch(n){case"focusin":return Rn=rr(Rn,e,n,t,r,i),!0;case"dragenter":return _n=rr(_n,e,n,t,r,i),!0;case"mouseover":return Bn=rr(Bn,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return nr.set(l,rr(nr.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,tr.set(l,rr(tr.get(l)||null,e,n,t,r,i)),!0}return!1}function Il(e){var n=ot(e.target);if(n!==null){var t=at(n);if(t!==null){if(n=t.tag,n===13){if(n=Cl(t),n!==null){e.blockedOn=n,Bl(e.priority,function(){Rl(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=xa(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);ua=r,t.target.dispatchEvent(r),ua=null}else return n=yr(t),n!==null&&wa(n),e.blockedOn=t,!1;n.shift()}return!0}function Hl(e,n,t){Jr(e)&&t.delete(n)}function Ed(){ka=!1,Rn!==null&&Jr(Rn)&&(Rn=null),_n!==null&&Jr(_n)&&(_n=null),Bn!==null&&Jr(Bn)&&(Bn=null),nr.forEach(Hl),tr.forEach(Hl)}function ir(e,n){e.blockedOn===n&&(e.blockedOn=null,ka||(ka=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Ed)))}function ar(e){function n(i){return ir(i,e)}if(0<Zr.length){ir(Zr[0],e);for(var t=1;t<Zr.length;t++){var r=Zr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Rn!==null&&ir(Rn,e),_n!==null&&ir(_n,e),Bn!==null&&ir(Bn,e),nr.forEach(n),tr.forEach(n),t=0;t<On.length;t++)r=On[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<On.length&&(t=On[0],t.blockedOn===null);)Il(t),t.blockedOn===null&&On.shift()}var xt=be.ReactCurrentBatchConfig,Qr=!0;function Md(e,n,t,r){var i=oe,l=xt.transition;xt.transition=null;try{oe=1,Sa(e,n,t,r)}finally{oe=i,xt.transition=l}}function Cd(e,n,t,r){var i=oe,l=xt.transition;xt.transition=null;try{oe=4,Sa(e,n,t,r)}finally{oe=i,xt.transition=l}}function Sa(e,n,t,r){if(Qr){var i=xa(e,n,t,r);if(i===null)Ba(e,n,r,Yr,t),Ol(e,r);else if(Ld(i,e,n,t,r))r.stopPropagation();else if(Ol(e,r),n&4&&-1<xd.indexOf(e)){for(;i!==null;){var l=yr(i);if(l!==null&&Al(l),l=xa(e,n,t,r),l===null&&Ba(e,n,r,Yr,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else Ba(e,n,r,null,t)}}var Yr=null;function xa(e,n,t,r){if(Yr=null,e=ca(r),e=ot(e),e!==null)if(n=at(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Cl(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Yr=e,null}function Ul(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hd()){case pa:return 1;case zl:return 4;case Ur:case md:return 16;case Wl:return 536870912;default:return 16}default:return 16}}var In=null,La=null,qr=null;function Gl(){if(qr)return qr;var e,n=La,t=n.length,r,i="value"in In?In.value:In.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var c=t-e;for(r=1;r<=c&&n[t-r]===i[l-r];r++);return qr=i.slice(e,1<r?1-r:void 0)}function Xr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ei(){return!0}function Vl(){return!1}function rn(e){function n(t,r,i,l,c){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=c,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(t=e[f],this[f]=t?t(l):l[f]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ei:Vl,this.isPropagationStopped=Vl,this}return W(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ei)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ei)},persist:function(){},isPersistent:ei}),n}var Lt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ea=rn(Lt),or=W({},Lt,{view:0,detail:0}),bd=rn(or),Ma,Ca,lr,ni=W({},or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lr&&(lr&&e.type==="mousemove"?(Ma=e.screenX-lr.screenX,Ca=e.screenY-lr.screenY):Ca=Ma=0,lr=e),Ma)},movementY:function(e){return"movementY"in e?e.movementY:Ca}}),$l=rn(ni),Pd=W({},ni,{dataTransfer:0}),Td=rn(Pd),Nd=W({},or,{relatedTarget:0}),ba=rn(Nd),Dd=W({},Lt,{animationName:0,elapsedTime:0,pseudoElement:0}),zd=rn(Dd),Wd=W({},Lt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jd=rn(Wd),Fd=W({},Lt,{data:0}),Kl=rn(Fd),Ad={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_d={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=_d[e])?!!n[e]:!1}function Pa(){return Bd}var Od=W({},or,{key:function(e){if(e.key){var n=Ad[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Xr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pa,charCode:function(e){return e.type==="keypress"?Xr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Id=rn(Od),Hd=W({},ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zl=rn(Hd),Ud=W({},or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pa}),Gd=rn(Ud),Vd=W({},Lt,{propertyName:0,elapsedTime:0,pseudoElement:0}),$d=rn(Vd),Kd=W({},ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rn(Kd),Jd=[9,13,27,32],Ta=S&&"CompositionEvent"in window,sr=null;S&&"documentMode"in document&&(sr=document.documentMode);var Qd=S&&"TextEvent"in window&&!sr,Jl=S&&(!Ta||sr&&8<sr&&11>=sr),Ql=" ",Yl=!1;function ql(e,n){switch(e){case"keyup":return Jd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Et=!1;function Yd(e,n){switch(e){case"compositionend":return Xl(n);case"keypress":return n.which!==32?null:(Yl=!0,Ql);case"textInput":return e=n.data,e===Ql&&Yl?null:e;default:return null}}function qd(e,n){if(Et)return e==="compositionend"||!Ta&&ql(e,n)?(e=Gl(),qr=La=In=null,Et=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Jl&&n.locale!=="ko"?null:n.data;default:return null}}var Xd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function es(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Xd[e.type]:n==="textarea"}function ns(e,n,t,r){Sl(r),n=oi(n,"onChange"),0<n.length&&(t=new Ea("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var ur=null,cr=null;function ef(e){ws(e,0)}function ti(e){var n=Tt(e);if(ul(n))return e}function nf(e,n){if(e==="change")return n}var ts=!1;if(S){var Na;if(S){var Da="oninput"in document;if(!Da){var rs=document.createElement("div");rs.setAttribute("oninput","return;"),Da=typeof rs.oninput=="function"}Na=Da}else Na=!1;ts=Na&&(!document.documentMode||9<document.documentMode)}function is(){ur&&(ur.detachEvent("onpropertychange",as),cr=ur=null)}function as(e){if(e.propertyName==="value"&&ti(cr)){var n=[];ns(n,cr,e,ca(e)),Ml(ef,n)}}function tf(e,n,t){e==="focusin"?(is(),ur=n,cr=t,ur.attachEvent("onpropertychange",as)):e==="focusout"&&is()}function rf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ti(cr)}function af(e,n){if(e==="click")return ti(n)}function of(e,n){if(e==="input"||e==="change")return ti(n)}function lf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var gn=typeof Object.is=="function"?Object.is:lf;function dr(e,n){if(gn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!L.call(n,i)||!gn(e[i],n[i]))return!1}return!0}function os(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ls(e,n){var t=os(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=os(t)}}function ss(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?ss(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function us(){for(var e=window,n=Br();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Br(e.document)}return n}function za(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function sf(e){var n=us(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&ss(t.ownerDocument.documentElement,t)){if(r!==null&&za(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=ls(t,l);var c=ls(t,r);i&&c&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(c.node,c.offset)):(n.setEnd(c.node,c.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var uf=S&&"documentMode"in document&&11>=document.documentMode,Mt=null,Wa=null,fr=null,ja=!1;function cs(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ja||Mt==null||Mt!==Br(r)||(r=Mt,"selectionStart"in r&&za(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fr&&dr(fr,r)||(fr=r,r=oi(Wa,"onSelect"),0<r.length&&(n=new Ea("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Mt)))}function ri(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Ct={animationend:ri("Animation","AnimationEnd"),animationiteration:ri("Animation","AnimationIteration"),animationstart:ri("Animation","AnimationStart"),transitionend:ri("Transition","TransitionEnd")},Fa={},ds={};S&&(ds=document.createElement("div").style,"AnimationEvent"in window||(delete Ct.animationend.animation,delete Ct.animationiteration.animation,delete Ct.animationstart.animation),"TransitionEvent"in window||delete Ct.transitionend.transition);function ii(e){if(Fa[e])return Fa[e];if(!Ct[e])return e;var n=Ct[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in ds)return Fa[e]=n[t];return e}var fs=ii("animationend"),hs=ii("animationiteration"),ms=ii("animationstart"),ps=ii("transitionend"),gs=new Map,ys="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hn(e,n){gs.set(e,n),h(n,[e])}for(var Aa=0;Aa<ys.length;Aa++){var Ra=ys[Aa],cf=Ra.toLowerCase(),df=Ra[0].toUpperCase()+Ra.slice(1);Hn(cf,"on"+df)}Hn(fs,"onAnimationEnd"),Hn(hs,"onAnimationIteration"),Hn(ms,"onAnimationStart"),Hn("dblclick","onDoubleClick"),Hn("focusin","onFocus"),Hn("focusout","onBlur"),Hn(ps,"onTransitionEnd"),w("onMouseEnter",["mouseout","mouseover"]),w("onMouseLeave",["mouseout","mouseover"]),w("onPointerEnter",["pointerout","pointerover"]),w("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ff=new Set("cancel close invalid load scroll toggle".split(" ").concat(hr));function vs(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,ud(r,n,void 0,e),e.currentTarget=null}function ws(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var c=r.length-1;0<=c;c--){var f=r[c],m=f.instance,x=f.currentTarget;if(f=f.listener,m!==l&&i.isPropagationStopped())break e;vs(i,f,x),l=m}else for(c=0;c<r.length;c++){if(f=r[c],m=f.instance,x=f.currentTarget,f=f.listener,m!==l&&i.isPropagationStopped())break e;vs(i,f,x),l=m}}}if(Hr)throw e=ma,Hr=!1,ma=null,e}function fe(e,n){var t=n[Va];t===void 0&&(t=n[Va]=new Set);var r=e+"__bubble";t.has(r)||(ks(n,e,2,!1),t.add(r))}function _a(e,n,t){var r=0;n&&(r|=4),ks(t,e,r,n)}var ai="_reactListening"+Math.random().toString(36).slice(2);function mr(e){if(!e[ai]){e[ai]=!0,u.forEach(function(t){t!=="selectionchange"&&(ff.has(t)||_a(t,!1,e),_a(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ai]||(n[ai]=!0,_a("selectionchange",!1,n))}}function ks(e,n,t,r){switch(Ul(n)){case 1:var i=Md;break;case 4:i=Cd;break;default:i=Sa}t=i.bind(null,n,t,e),i=void 0,!ha||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Ba(e,n,t,r,i){var l=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var c=r.tag;if(c===3||c===4){var f=r.stateNode.containerInfo;if(f===i||f.nodeType===8&&f.parentNode===i)break;if(c===4)for(c=r.return;c!==null;){var m=c.tag;if((m===3||m===4)&&(m=c.stateNode.containerInfo,m===i||m.nodeType===8&&m.parentNode===i))return;c=c.return}for(;f!==null;){if(c=ot(f),c===null)return;if(m=c.tag,m===5||m===6){r=l=c;continue e}f=f.parentNode}}r=r.return}Ml(function(){var x=l,C=ca(t),b=[];e:{var E=gs.get(e);if(E!==void 0){var D=Ea,j=e;switch(e){case"keypress":if(Xr(t)===0)break e;case"keydown":case"keyup":D=Id;break;case"focusin":j="focus",D=ba;break;case"focusout":j="blur",D=ba;break;case"beforeblur":case"afterblur":D=ba;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=$l;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=Td;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=Gd;break;case fs:case hs:case ms:D=zd;break;case ps:D=$d;break;case"scroll":D=bd;break;case"wheel":D=Zd;break;case"copy":case"cut":case"paste":D=jd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=Zl}var A=(n&4)!==0,Ce=!A&&e==="scroll",v=A?E!==null?E+"Capture":null:E;A=[];for(var g=x,k;g!==null;){k=g;var T=k.stateNode;if(k.tag===5&&T!==null&&(k=T,v!==null&&(T=Qt(g,v),T!=null&&A.push(pr(g,T,k)))),Ce)break;g=g.return}0<A.length&&(E=new D(E,j,null,t,C),b.push({event:E,listeners:A}))}}if((n&7)===0){e:{if(E=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",E&&t!==ua&&(j=t.relatedTarget||t.fromElement)&&(ot(j)||j[bn]))break e;if((D||E)&&(E=C.window===C?C:(E=C.ownerDocument)?E.defaultView||E.parentWindow:window,D?(j=t.relatedTarget||t.toElement,D=x,j=j?ot(j):null,j!==null&&(Ce=at(j),j!==Ce||j.tag!==5&&j.tag!==6)&&(j=null)):(D=null,j=x),D!==j)){if(A=$l,T="onMouseLeave",v="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(A=Zl,T="onPointerLeave",v="onPointerEnter",g="pointer"),Ce=D==null?E:Tt(D),k=j==null?E:Tt(j),E=new A(T,g+"leave",D,t,C),E.target=Ce,E.relatedTarget=k,T=null,ot(C)===x&&(A=new A(v,g+"enter",j,t,C),A.target=k,A.relatedTarget=Ce,T=A),Ce=T,D&&j)n:{for(A=D,v=j,g=0,k=A;k;k=bt(k))g++;for(k=0,T=v;T;T=bt(T))k++;for(;0<g-k;)A=bt(A),g--;for(;0<k-g;)v=bt(v),k--;for(;g--;){if(A===v||v!==null&&A===v.alternate)break n;A=bt(A),v=bt(v)}A=null}else A=null;D!==null&&Ss(b,E,D,A,!1),j!==null&&Ce!==null&&Ss(b,Ce,j,A,!0)}}e:{if(E=x?Tt(x):window,D=E.nodeName&&E.nodeName.toLowerCase(),D==="select"||D==="input"&&E.type==="file")var R=nf;else if(es(E))if(ts)R=of;else{R=rf;var O=tf}else(D=E.nodeName)&&D.toLowerCase()==="input"&&(E.type==="checkbox"||E.type==="radio")&&(R=af);if(R&&(R=R(e,x))){ns(b,R,t,C);break e}O&&O(e,E,x),e==="focusout"&&(O=E._wrapperState)&&O.controlled&&E.type==="number"&&ia(E,"number",E.value)}switch(O=x?Tt(x):window,e){case"focusin":(es(O)||O.contentEditable==="true")&&(Mt=O,Wa=x,fr=null);break;case"focusout":fr=Wa=Mt=null;break;case"mousedown":ja=!0;break;case"contextmenu":case"mouseup":case"dragend":ja=!1,cs(b,t,C);break;case"selectionchange":if(uf)break;case"keydown":case"keyup":cs(b,t,C)}var I;if(Ta)e:{switch(e){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else Et?ql(e,t)&&(U="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(U="onCompositionStart");U&&(Jl&&t.locale!=="ko"&&(Et||U!=="onCompositionStart"?U==="onCompositionEnd"&&Et&&(I=Gl()):(In=C,La="value"in In?In.value:In.textContent,Et=!0)),O=oi(x,U),0<O.length&&(U=new Kl(U,e,null,t,C),b.push({event:U,listeners:O}),I?U.data=I:(I=Xl(t),I!==null&&(U.data=I)))),(I=Qd?Yd(e,t):qd(e,t))&&(x=oi(x,"onBeforeInput"),0<x.length&&(C=new Kl("onBeforeInput","beforeinput",null,t,C),b.push({event:C,listeners:x}),C.data=I))}ws(b,n)})}function pr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function oi(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Qt(e,t),l!=null&&r.unshift(pr(e,l,i)),l=Qt(e,n),l!=null&&r.push(pr(e,l,i))),e=e.return}return r}function bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ss(e,n,t,r,i){for(var l=n._reactName,c=[];t!==null&&t!==r;){var f=t,m=f.alternate,x=f.stateNode;if(m!==null&&m===r)break;f.tag===5&&x!==null&&(f=x,i?(m=Qt(t,l),m!=null&&c.unshift(pr(t,m,f))):i||(m=Qt(t,l),m!=null&&c.push(pr(t,m,f)))),t=t.return}c.length!==0&&e.push({event:n,listeners:c})}var hf=/\r\n?/g,mf=/\u0000|\uFFFD/g;function xs(e){return(typeof e=="string"?e:""+e).replace(hf,`
`).replace(mf,"")}function li(e,n,t){if(n=xs(n),xs(e)!==n&&t)throw Error(s(425))}function si(){}var Oa=null,Ia=null;function Ha(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ua=typeof setTimeout=="function"?setTimeout:void 0,pf=typeof clearTimeout=="function"?clearTimeout:void 0,Ls=typeof Promise=="function"?Promise:void 0,gf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ls<"u"?function(e){return Ls.resolve(null).then(e).catch(yf)}:Ua;function yf(e){setTimeout(function(){throw e})}function Ga(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),ar(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);ar(n)}function Un(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Es(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Pt=Math.random().toString(36).slice(2),Ln="__reactFiber$"+Pt,gr="__reactProps$"+Pt,bn="__reactContainer$"+Pt,Va="__reactEvents$"+Pt,vf="__reactListeners$"+Pt,wf="__reactHandles$"+Pt;function ot(e){var n=e[Ln];if(n)return n;for(var t=e.parentNode;t;){if(n=t[bn]||t[Ln]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Es(e);e!==null;){if(t=e[Ln])return t;e=Es(e)}return n}e=t,t=e.parentNode}return null}function yr(e){return e=e[Ln]||e[bn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function ui(e){return e[gr]||null}var $a=[],Nt=-1;function Gn(e){return{current:e}}function he(e){0>Nt||(e.current=$a[Nt],$a[Nt]=null,Nt--)}function de(e,n){Nt++,$a[Nt]=e.current,e.current=n}var Vn={},Ie=Gn(Vn),Ze=Gn(!1),lt=Vn;function Dt(e,n){var t=e.type.contextTypes;if(!t)return Vn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Je(e){return e=e.childContextTypes,e!=null}function ci(){he(Ze),he(Ie)}function Ms(e,n,t){if(Ie.current!==Vn)throw Error(s(168));de(Ie,n),de(Ze,t)}function Cs(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(s(108,ce(e)||"Unknown",i));return W({},t,r)}function di(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vn,lt=Ie.current,de(Ie,e),de(Ze,Ze.current),!0}function bs(e,n,t){var r=e.stateNode;if(!r)throw Error(s(169));t?(e=Cs(e,n,lt),r.__reactInternalMemoizedMergedChildContext=e,he(Ze),he(Ie),de(Ie,e)):he(Ze),de(Ze,t)}var Pn=null,fi=!1,Ka=!1;function Ps(e){Pn===null?Pn=[e]:Pn.push(e)}function kf(e){fi=!0,Ps(e)}function $n(){if(!Ka&&Pn!==null){Ka=!0;var e=0,n=oe;try{var t=Pn;for(oe=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Pn=null,fi=!1}catch(i){throw Pn!==null&&(Pn=Pn.slice(e+1)),Nl(pa,$n),i}finally{oe=n,Ka=!1}}return null}var zt=[],Wt=0,hi=null,mi=0,un=[],cn=0,st=null,Tn=1,Nn="";function ut(e,n){zt[Wt++]=mi,zt[Wt++]=hi,hi=e,mi=n}function Ts(e,n,t){un[cn++]=Tn,un[cn++]=Nn,un[cn++]=st,st=e;var r=Tn;e=Nn;var i=32-pn(r)-1;r&=~(1<<i),t+=1;var l=32-pn(n)+i;if(30<l){var c=i-i%5;l=(r&(1<<c)-1).toString(32),r>>=c,i-=c,Tn=1<<32-pn(n)+i|t<<i|r,Nn=l+e}else Tn=1<<l|t<<i|r,Nn=e}function Za(e){e.return!==null&&(ut(e,1),Ts(e,1,0))}function Ja(e){for(;e===hi;)hi=zt[--Wt],zt[Wt]=null,mi=zt[--Wt],zt[Wt]=null;for(;e===st;)st=un[--cn],un[cn]=null,Nn=un[--cn],un[cn]=null,Tn=un[--cn],un[cn]=null}var an=null,on=null,pe=!1,yn=null;function Ns(e,n){var t=mn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ds(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,an=e,on=Un(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,an=e,on=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=st!==null?{id:Tn,overflow:Nn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=mn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,an=e,on=null,!0):!1;default:return!1}}function Qa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ya(e){if(pe){var n=on;if(n){var t=n;if(!Ds(e,n)){if(Qa(e))throw Error(s(418));n=Un(t.nextSibling);var r=an;n&&Ds(e,n)?Ns(r,t):(e.flags=e.flags&-4097|2,pe=!1,an=e)}}else{if(Qa(e))throw Error(s(418));e.flags=e.flags&-4097|2,pe=!1,an=e}}}function zs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;an=e}function pi(e){if(e!==an)return!1;if(!pe)return zs(e),pe=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ha(e.type,e.memoizedProps)),n&&(n=on)){if(Qa(e))throw Ws(),Error(s(418));for(;n;)Ns(e,n),n=Un(n.nextSibling)}if(zs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){on=Un(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}on=null}}else on=an?Un(e.stateNode.nextSibling):null;return!0}function Ws(){for(var e=on;e;)e=Un(e.nextSibling)}function jt(){on=an=null,pe=!1}function qa(e){yn===null?yn=[e]:yn.push(e)}var Sf=be.ReactCurrentBatchConfig;function vr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(s(309));var r=t.stateNode}if(!r)throw Error(s(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(c){var f=i.refs;c===null?delete f[l]:f[l]=c},n._stringRef=l,n)}if(typeof e!="string")throw Error(s(284));if(!t._owner)throw Error(s(290,e))}return e}function gi(e,n){throw e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function js(e){var n=e._init;return n(e._payload)}function Fs(e){function n(v,g){if(e){var k=v.deletions;k===null?(v.deletions=[g],v.flags|=16):k.push(g)}}function t(v,g){if(!e)return null;for(;g!==null;)n(v,g),g=g.sibling;return null}function r(v,g){for(v=new Map;g!==null;)g.key!==null?v.set(g.key,g):v.set(g.index,g),g=g.sibling;return v}function i(v,g){return v=et(v,g),v.index=0,v.sibling=null,v}function l(v,g,k){return v.index=k,e?(k=v.alternate,k!==null?(k=k.index,k<g?(v.flags|=2,g):k):(v.flags|=2,g)):(v.flags|=1048576,g)}function c(v){return e&&v.alternate===null&&(v.flags|=2),v}function f(v,g,k,T){return g===null||g.tag!==6?(g=Go(k,v.mode,T),g.return=v,g):(g=i(g,k),g.return=v,g)}function m(v,g,k,T){var R=k.type;return R===ke?C(v,g,k.props.children,T,k.key):g!==null&&(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===xe&&js(R)===g.type)?(T=i(g,k.props),T.ref=vr(v,g,k),T.return=v,T):(T=Oi(k.type,k.key,k.props,null,v.mode,T),T.ref=vr(v,g,k),T.return=v,T)}function x(v,g,k,T){return g===null||g.tag!==4||g.stateNode.containerInfo!==k.containerInfo||g.stateNode.implementation!==k.implementation?(g=Vo(k,v.mode,T),g.return=v,g):(g=i(g,k.children||[]),g.return=v,g)}function C(v,g,k,T,R){return g===null||g.tag!==7?(g=yt(k,v.mode,T,R),g.return=v,g):(g=i(g,k),g.return=v,g)}function b(v,g,k){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Go(""+g,v.mode,k),g.return=v,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Oe:return k=Oi(g.type,g.key,g.props,null,v.mode,k),k.ref=vr(v,null,g),k.return=v,k;case K:return g=Vo(g,v.mode,k),g.return=v,g;case xe:var T=g._init;return b(v,T(g._payload),k)}if(Kt(g)||H(g))return g=yt(g,v.mode,k,null),g.return=v,g;gi(v,g)}return null}function E(v,g,k,T){var R=g!==null?g.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return R!==null?null:f(v,g,""+k,T);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Oe:return k.key===R?m(v,g,k,T):null;case K:return k.key===R?x(v,g,k,T):null;case xe:return R=k._init,E(v,g,R(k._payload),T)}if(Kt(k)||H(k))return R!==null?null:C(v,g,k,T,null);gi(v,k)}return null}function D(v,g,k,T,R){if(typeof T=="string"&&T!==""||typeof T=="number")return v=v.get(k)||null,f(g,v,""+T,R);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Oe:return v=v.get(T.key===null?k:T.key)||null,m(g,v,T,R);case K:return v=v.get(T.key===null?k:T.key)||null,x(g,v,T,R);case xe:var O=T._init;return D(v,g,k,O(T._payload),R)}if(Kt(T)||H(T))return v=v.get(k)||null,C(g,v,T,R,null);gi(g,T)}return null}function j(v,g,k,T){for(var R=null,O=null,I=g,U=g=0,Fe=null;I!==null&&U<k.length;U++){I.index>U?(Fe=I,I=null):Fe=I.sibling;var te=E(v,I,k[U],T);if(te===null){I===null&&(I=Fe);break}e&&I&&te.alternate===null&&n(v,I),g=l(te,g,U),O===null?R=te:O.sibling=te,O=te,I=Fe}if(U===k.length)return t(v,I),pe&&ut(v,U),R;if(I===null){for(;U<k.length;U++)I=b(v,k[U],T),I!==null&&(g=l(I,g,U),O===null?R=I:O.sibling=I,O=I);return pe&&ut(v,U),R}for(I=r(v,I);U<k.length;U++)Fe=D(I,v,U,k[U],T),Fe!==null&&(e&&Fe.alternate!==null&&I.delete(Fe.key===null?U:Fe.key),g=l(Fe,g,U),O===null?R=Fe:O.sibling=Fe,O=Fe);return e&&I.forEach(function(nt){return n(v,nt)}),pe&&ut(v,U),R}function A(v,g,k,T){var R=H(k);if(typeof R!="function")throw Error(s(150));if(k=R.call(k),k==null)throw Error(s(151));for(var O=R=null,I=g,U=g=0,Fe=null,te=k.next();I!==null&&!te.done;U++,te=k.next()){I.index>U?(Fe=I,I=null):Fe=I.sibling;var nt=E(v,I,te.value,T);if(nt===null){I===null&&(I=Fe);break}e&&I&&nt.alternate===null&&n(v,I),g=l(nt,g,U),O===null?R=nt:O.sibling=nt,O=nt,I=Fe}if(te.done)return t(v,I),pe&&ut(v,U),R;if(I===null){for(;!te.done;U++,te=k.next())te=b(v,te.value,T),te!==null&&(g=l(te,g,U),O===null?R=te:O.sibling=te,O=te);return pe&&ut(v,U),R}for(I=r(v,I);!te.done;U++,te=k.next())te=D(I,v,U,te.value,T),te!==null&&(e&&te.alternate!==null&&I.delete(te.key===null?U:te.key),g=l(te,g,U),O===null?R=te:O.sibling=te,O=te);return e&&I.forEach(function(eh){return n(v,eh)}),pe&&ut(v,U),R}function Ce(v,g,k,T){if(typeof k=="object"&&k!==null&&k.type===ke&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case Oe:e:{for(var R=k.key,O=g;O!==null;){if(O.key===R){if(R=k.type,R===ke){if(O.tag===7){t(v,O.sibling),g=i(O,k.props.children),g.return=v,v=g;break e}}else if(O.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===xe&&js(R)===O.type){t(v,O.sibling),g=i(O,k.props),g.ref=vr(v,O,k),g.return=v,v=g;break e}t(v,O);break}else n(v,O);O=O.sibling}k.type===ke?(g=yt(k.props.children,v.mode,T,k.key),g.return=v,v=g):(T=Oi(k.type,k.key,k.props,null,v.mode,T),T.ref=vr(v,g,k),T.return=v,v=T)}return c(v);case K:e:{for(O=k.key;g!==null;){if(g.key===O)if(g.tag===4&&g.stateNode.containerInfo===k.containerInfo&&g.stateNode.implementation===k.implementation){t(v,g.sibling),g=i(g,k.children||[]),g.return=v,v=g;break e}else{t(v,g);break}else n(v,g);g=g.sibling}g=Vo(k,v.mode,T),g.return=v,v=g}return c(v);case xe:return O=k._init,Ce(v,g,O(k._payload),T)}if(Kt(k))return j(v,g,k,T);if(H(k))return A(v,g,k,T);gi(v,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,g!==null&&g.tag===6?(t(v,g.sibling),g=i(g,k),g.return=v,v=g):(t(v,g),g=Go(k,v.mode,T),g.return=v,v=g),c(v)):t(v,g)}return Ce}var Ft=Fs(!0),As=Fs(!1),yi=Gn(null),vi=null,At=null,Xa=null;function eo(){Xa=At=vi=null}function no(e){var n=yi.current;he(yi),e._currentValue=n}function to(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Rt(e,n){vi=e,Xa=At=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(Qe=!0),e.firstContext=null)}function dn(e){var n=e._currentValue;if(Xa!==e)if(e={context:e,memoizedValue:n,next:null},At===null){if(vi===null)throw Error(s(308));At=e,vi.dependencies={lanes:0,firstContext:e}}else At=At.next=e;return n}var ct=null;function ro(e){ct===null?ct=[e]:ct.push(e)}function Rs(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,ro(n)):(t.next=i.next,i.next=t),n.interleaved=t,Dn(e,r)}function Dn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Kn=!1;function io(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _s(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Zn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(X&2)!==0){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Dn(e,t)}return i=r.interleaved,i===null?(n.next=n,ro(r)):(n.next=i.next,i.next=n),r.interleaved=n,Dn(e,t)}function wi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,va(e,t)}}function Bs(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var c={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=c:l=l.next=c,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ki(e,n,t,r){var i=e.updateQueue;Kn=!1;var l=i.firstBaseUpdate,c=i.lastBaseUpdate,f=i.shared.pending;if(f!==null){i.shared.pending=null;var m=f,x=m.next;m.next=null,c===null?l=x:c.next=x,c=m;var C=e.alternate;C!==null&&(C=C.updateQueue,f=C.lastBaseUpdate,f!==c&&(f===null?C.firstBaseUpdate=x:f.next=x,C.lastBaseUpdate=m))}if(l!==null){var b=i.baseState;c=0,C=x=m=null,f=l;do{var E=f.lane,D=f.eventTime;if((r&E)===E){C!==null&&(C=C.next={eventTime:D,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var j=e,A=f;switch(E=n,D=t,A.tag){case 1:if(j=A.payload,typeof j=="function"){b=j.call(D,b,E);break e}b=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=A.payload,E=typeof j=="function"?j.call(D,b,E):j,E==null)break e;b=W({},b,E);break e;case 2:Kn=!0}}f.callback!==null&&f.lane!==0&&(e.flags|=64,E=i.effects,E===null?i.effects=[f]:E.push(f))}else D={eventTime:D,lane:E,tag:f.tag,payload:f.payload,callback:f.callback,next:null},C===null?(x=C=D,m=b):C=C.next=D,c|=E;if(f=f.next,f===null){if(f=i.shared.pending,f===null)break;E=f,f=E.next,E.next=null,i.lastBaseUpdate=E,i.shared.pending=null}}while(!0);if(C===null&&(m=b),i.baseState=m,i.firstBaseUpdate=x,i.lastBaseUpdate=C,n=i.shared.interleaved,n!==null){i=n;do c|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);ht|=c,e.lanes=c,e.memoizedState=b}}function Os(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(s(191,i));i.call(r)}}}var wr={},En=Gn(wr),kr=Gn(wr),Sr=Gn(wr);function dt(e){if(e===wr)throw Error(s(174));return e}function ao(e,n){switch(de(Sr,n),de(kr,e),de(En,wr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:oa(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=oa(n,e)}he(En),de(En,n)}function _t(){he(En),he(kr),he(Sr)}function Is(e){dt(Sr.current);var n=dt(En.current),t=oa(n,e.type);n!==t&&(de(kr,e),de(En,t))}function oo(e){kr.current===e&&(he(En),he(kr))}var ve=Gn(0);function Si(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var lo=[];function so(){for(var e=0;e<lo.length;e++)lo[e]._workInProgressVersionPrimary=null;lo.length=0}var xi=be.ReactCurrentDispatcher,uo=be.ReactCurrentBatchConfig,ft=0,we=null,De=null,We=null,Li=!1,xr=!1,Lr=0,xf=0;function He(){throw Error(s(321))}function co(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!gn(e[t],n[t]))return!1;return!0}function fo(e,n,t,r,i,l){if(ft=l,we=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,xi.current=e===null||e.memoizedState===null?Cf:bf,e=t(r,i),xr){l=0;do{if(xr=!1,Lr=0,25<=l)throw Error(s(301));l+=1,We=De=null,n.updateQueue=null,xi.current=Pf,e=t(r,i)}while(xr)}if(xi.current=Ci,n=De!==null&&De.next!==null,ft=0,We=De=we=null,Li=!1,n)throw Error(s(300));return e}function ho(){var e=Lr!==0;return Lr=0,e}function Mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?we.memoizedState=We=e:We=We.next=e,We}function fn(){if(De===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var n=We===null?we.memoizedState:We.next;if(n!==null)We=n,De=e;else{if(e===null)throw Error(s(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},We===null?we.memoizedState=We=e:We=We.next=e}return We}function Er(e,n){return typeof n=="function"?n(e):n}function mo(e){var n=fn(),t=n.queue;if(t===null)throw Error(s(311));t.lastRenderedReducer=e;var r=De,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var c=i.next;i.next=l.next,l.next=c}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var f=c=null,m=null,x=l;do{var C=x.lane;if((ft&C)===C)m!==null&&(m=m.next={lane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),r=x.hasEagerState?x.eagerState:e(r,x.action);else{var b={lane:C,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null};m===null?(f=m=b,c=r):m=m.next=b,we.lanes|=C,ht|=C}x=x.next}while(x!==null&&x!==l);m===null?c=r:m.next=f,gn(r,n.memoizedState)||(Qe=!0),n.memoizedState=r,n.baseState=c,n.baseQueue=m,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,we.lanes|=l,ht|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function po(e){var n=fn(),t=n.queue;if(t===null)throw Error(s(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var c=i=i.next;do l=e(l,c.action),c=c.next;while(c!==i);gn(l,n.memoizedState)||(Qe=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function Hs(){}function Us(e,n){var t=we,r=fn(),i=n(),l=!gn(r.memoizedState,i);if(l&&(r.memoizedState=i,Qe=!0),r=r.queue,go($s.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||We!==null&&We.memoizedState.tag&1){if(t.flags|=2048,Mr(9,Vs.bind(null,t,r,i,n),void 0,null),je===null)throw Error(s(349));(ft&30)!==0||Gs(t,n,i)}return i}function Gs(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=we.updateQueue,n===null?(n={lastEffect:null,stores:null},we.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Vs(e,n,t,r){n.value=t,n.getSnapshot=r,Ks(n)&&Zs(e)}function $s(e,n,t){return t(function(){Ks(n)&&Zs(e)})}function Ks(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!gn(e,t)}catch{return!0}}function Zs(e){var n=Dn(e,1);n!==null&&Sn(n,e,1,-1)}function Js(e){var n=Mn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Er,lastRenderedState:e},n.queue=e,e=e.dispatch=Mf.bind(null,we,e),[n.memoizedState,e]}function Mr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=we.updateQueue,n===null?(n={lastEffect:null,stores:null},we.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Qs(){return fn().memoizedState}function Ei(e,n,t,r){var i=Mn();we.flags|=e,i.memoizedState=Mr(1|n,t,void 0,r===void 0?null:r)}function Mi(e,n,t,r){var i=fn();r=r===void 0?null:r;var l=void 0;if(De!==null){var c=De.memoizedState;if(l=c.destroy,r!==null&&co(r,c.deps)){i.memoizedState=Mr(n,t,l,r);return}}we.flags|=e,i.memoizedState=Mr(1|n,t,l,r)}function Ys(e,n){return Ei(8390656,8,e,n)}function go(e,n){return Mi(2048,8,e,n)}function qs(e,n){return Mi(4,2,e,n)}function Xs(e,n){return Mi(4,4,e,n)}function eu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function nu(e,n,t){return t=t!=null?t.concat([e]):null,Mi(4,4,eu.bind(null,n,e),t)}function yo(){}function tu(e,n){var t=fn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&co(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function ru(e,n){var t=fn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&co(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function iu(e,n,t){return(ft&21)===0?(e.baseState&&(e.baseState=!1,Qe=!0),e.memoizedState=t):(gn(t,n)||(t=jl(),we.lanes|=t,ht|=t,e.baseState=!0),n)}function Lf(e,n){var t=oe;oe=t!==0&&4>t?t:4,e(!0);var r=uo.transition;uo.transition={};try{e(!1),n()}finally{oe=t,uo.transition=r}}function au(){return fn().memoizedState}function Ef(e,n,t){var r=qn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},ou(e))lu(n,t);else if(t=Rs(e,n,t,r),t!==null){var i=$e();Sn(t,e,r,i),su(t,n,r)}}function Mf(e,n,t){var r=qn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(ou(e))lu(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var c=n.lastRenderedState,f=l(c,t);if(i.hasEagerState=!0,i.eagerState=f,gn(f,c)){var m=n.interleaved;m===null?(i.next=i,ro(n)):(i.next=m.next,m.next=i),n.interleaved=i;return}}catch{}finally{}t=Rs(e,n,i,r),t!==null&&(i=$e(),Sn(t,e,r,i),su(t,n,r))}}function ou(e){var n=e.alternate;return e===we||n!==null&&n===we}function lu(e,n){xr=Li=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function su(e,n,t){if((t&4194240)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,va(e,t)}}var Ci={readContext:dn,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},Cf={readContext:dn,useCallback:function(e,n){return Mn().memoizedState=[e,n===void 0?null:n],e},useContext:dn,useEffect:Ys,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ei(4194308,4,eu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ei(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ei(4,2,e,n)},useMemo:function(e,n){var t=Mn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Mn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Ef.bind(null,we,e),[r.memoizedState,e]},useRef:function(e){var n=Mn();return e={current:e},n.memoizedState=e},useState:Js,useDebugValue:yo,useDeferredValue:function(e){return Mn().memoizedState=e},useTransition:function(){var e=Js(!1),n=e[0];return e=Lf.bind(null,e[1]),Mn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=we,i=Mn();if(pe){if(t===void 0)throw Error(s(407));t=t()}else{if(t=n(),je===null)throw Error(s(349));(ft&30)!==0||Gs(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,Ys($s.bind(null,r,l,e),[e]),r.flags|=2048,Mr(9,Vs.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=Mn(),n=je.identifierPrefix;if(pe){var t=Nn,r=Tn;t=(r&~(1<<32-pn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Lr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=xf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},bf={readContext:dn,useCallback:tu,useContext:dn,useEffect:go,useImperativeHandle:nu,useInsertionEffect:qs,useLayoutEffect:Xs,useMemo:ru,useReducer:mo,useRef:Qs,useState:function(){return mo(Er)},useDebugValue:yo,useDeferredValue:function(e){var n=fn();return iu(n,De.memoizedState,e)},useTransition:function(){var e=mo(Er)[0],n=fn().memoizedState;return[e,n]},useMutableSource:Hs,useSyncExternalStore:Us,useId:au,unstable_isNewReconciler:!1},Pf={readContext:dn,useCallback:tu,useContext:dn,useEffect:go,useImperativeHandle:nu,useInsertionEffect:qs,useLayoutEffect:Xs,useMemo:ru,useReducer:po,useRef:Qs,useState:function(){return po(Er)},useDebugValue:yo,useDeferredValue:function(e){var n=fn();return De===null?n.memoizedState=e:iu(n,De.memoizedState,e)},useTransition:function(){var e=po(Er)[0],n=fn().memoizedState;return[e,n]},useMutableSource:Hs,useSyncExternalStore:Us,useId:au,unstable_isNewReconciler:!1};function vn(e,n){if(e&&e.defaultProps){n=W({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function vo(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:W({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var bi={isMounted:function(e){return(e=e._reactInternals)?at(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=$e(),i=qn(e),l=zn(r,i);l.payload=n,t!=null&&(l.callback=t),n=Zn(e,l,i),n!==null&&(Sn(n,e,i,r),wi(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=$e(),i=qn(e),l=zn(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=Zn(e,l,i),n!==null&&(Sn(n,e,i,r),wi(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=$e(),r=qn(e),i=zn(t,r);i.tag=2,n!=null&&(i.callback=n),n=Zn(e,i,r),n!==null&&(Sn(n,e,r,t),wi(n,e,r))}};function uu(e,n,t,r,i,l,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,c):n.prototype&&n.prototype.isPureReactComponent?!dr(t,r)||!dr(i,l):!0}function cu(e,n,t){var r=!1,i=Vn,l=n.contextType;return typeof l=="object"&&l!==null?l=dn(l):(i=Je(n)?lt:Ie.current,r=n.contextTypes,l=(r=r!=null)?Dt(e,i):Vn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=bi,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function du(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&bi.enqueueReplaceState(n,n.state,null)}function wo(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},io(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=dn(l):(l=Je(n)?lt:Ie.current,i.context=Dt(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(vo(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&bi.enqueueReplaceState(i,i.state,null),ki(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Bt(e,n){try{var t="",r=n;do t+=ee(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function ko(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function So(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Tf=typeof WeakMap=="function"?WeakMap:Map;function fu(e,n,t){t=zn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){ji||(ji=!0,Ao=r),So(e,n)},t}function hu(e,n,t){t=zn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){So(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){So(e,n),typeof r!="function"&&(Qn===null?Qn=new Set([this]):Qn.add(this));var c=n.stack;this.componentDidCatch(n.value,{componentStack:c!==null?c:""})}),t}function mu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Tf;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Uf.bind(null,e,n,t),n.then(e,e))}function pu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function gu(e,n,t,r,i){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=zn(-1,1),n.tag=2,Zn(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Nf=be.ReactCurrentOwner,Qe=!1;function Ve(e,n,t,r){n.child=e===null?As(n,null,t,r):Ft(n,e.child,t,r)}function yu(e,n,t,r,i){t=t.render;var l=n.ref;return Rt(n,i),r=fo(e,n,t,r,l,i),t=ho(),e!==null&&!Qe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Wn(e,n,i)):(pe&&t&&Za(n),n.flags|=1,Ve(e,n,r,i),n.child)}function vu(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!Uo(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,wu(e,n,l,r,i)):(e=Oi(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,(e.lanes&i)===0){var c=l.memoizedProps;if(t=t.compare,t=t!==null?t:dr,t(c,r)&&e.ref===n.ref)return Wn(e,n,i)}return n.flags|=1,e=et(l,r),e.ref=n.ref,e.return=n,n.child=e}function wu(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(dr(l,r)&&e.ref===n.ref)if(Qe=!1,n.pendingProps=r=l,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Qe=!0);else return n.lanes=e.lanes,Wn(e,n,i)}return xo(e,n,t,r,i)}function ku(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(It,ln),ln|=t;else{if((t&1073741824)===0)return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,de(It,ln),ln|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,de(It,ln),ln|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,de(It,ln),ln|=r;return Ve(e,n,i,t),n.child}function Su(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function xo(e,n,t,r,i){var l=Je(t)?lt:Ie.current;return l=Dt(n,l),Rt(n,i),t=fo(e,n,t,r,l,i),r=ho(),e!==null&&!Qe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Wn(e,n,i)):(pe&&r&&Za(n),n.flags|=1,Ve(e,n,t,i),n.child)}function xu(e,n,t,r,i){if(Je(t)){var l=!0;di(n)}else l=!1;if(Rt(n,i),n.stateNode===null)Ti(e,n),cu(n,t,r),wo(n,t,r,i),r=!0;else if(e===null){var c=n.stateNode,f=n.memoizedProps;c.props=f;var m=c.context,x=t.contextType;typeof x=="object"&&x!==null?x=dn(x):(x=Je(t)?lt:Ie.current,x=Dt(n,x));var C=t.getDerivedStateFromProps,b=typeof C=="function"||typeof c.getSnapshotBeforeUpdate=="function";b||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(f!==r||m!==x)&&du(n,c,r,x),Kn=!1;var E=n.memoizedState;c.state=E,ki(n,r,c,i),m=n.memoizedState,f!==r||E!==m||Ze.current||Kn?(typeof C=="function"&&(vo(n,t,C,r),m=n.memoizedState),(f=Kn||uu(n,t,f,r,E,m,x))?(b||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=m),c.props=r,c.state=m,c.context=x,r=f):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{c=n.stateNode,_s(e,n),f=n.memoizedProps,x=n.type===n.elementType?f:vn(n.type,f),c.props=x,b=n.pendingProps,E=c.context,m=t.contextType,typeof m=="object"&&m!==null?m=dn(m):(m=Je(t)?lt:Ie.current,m=Dt(n,m));var D=t.getDerivedStateFromProps;(C=typeof D=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(f!==b||E!==m)&&du(n,c,r,m),Kn=!1,E=n.memoizedState,c.state=E,ki(n,r,c,i);var j=n.memoizedState;f!==b||E!==j||Ze.current||Kn?(typeof D=="function"&&(vo(n,t,D,r),j=n.memoizedState),(x=Kn||uu(n,t,x,r,E,j,m)||!1)?(C||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,j,m),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,j,m)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||f===e.memoizedProps&&E===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&E===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=j),c.props=r,c.state=j,c.context=m,r=x):(typeof c.componentDidUpdate!="function"||f===e.memoizedProps&&E===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&E===e.memoizedState||(n.flags|=1024),r=!1)}return Lo(e,n,t,r,l,i)}function Lo(e,n,t,r,i,l){Su(e,n);var c=(n.flags&128)!==0;if(!r&&!c)return i&&bs(n,t,!1),Wn(e,n,l);r=n.stateNode,Nf.current=n;var f=c&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&c?(n.child=Ft(n,e.child,null,l),n.child=Ft(n,null,f,l)):Ve(e,n,f,l),n.memoizedState=r.state,i&&bs(n,t,!0),n.child}function Lu(e){var n=e.stateNode;n.pendingContext?Ms(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ms(e,n.context,!1),ao(e,n.containerInfo)}function Eu(e,n,t,r,i){return jt(),qa(i),n.flags|=256,Ve(e,n,t,r),n.child}var Eo={dehydrated:null,treeContext:null,retryLane:0};function Mo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mu(e,n,t){var r=n.pendingProps,i=ve.current,l=!1,c=(n.flags&128)!==0,f;if((f=c)||(f=e!==null&&e.memoizedState===null?!1:(i&2)!==0),f?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),de(ve,i&1),e===null)return Ya(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(c=r.children,e=r.fallback,l?(r=n.mode,l=n.child,c={mode:"hidden",children:c},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=c):l=Ii(c,r,0,null),e=yt(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=Mo(t),n.memoizedState=Eo,e):Co(n,c));if(i=e.memoizedState,i!==null&&(f=i.dehydrated,f!==null))return Df(e,n,c,r,f,i,t);if(l){l=r.fallback,c=n.mode,i=e.child,f=i.sibling;var m={mode:"hidden",children:r.children};return(c&1)===0&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=m,n.deletions=null):(r=et(i,m),r.subtreeFlags=i.subtreeFlags&14680064),f!==null?l=et(f,l):(l=yt(l,c,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,c=e.child.memoizedState,c=c===null?Mo(t):{baseLanes:c.baseLanes|t,cachePool:null,transitions:c.transitions},l.memoizedState=c,l.childLanes=e.childLanes&~t,n.memoizedState=Eo,r}return l=e.child,e=l.sibling,r=et(l,{mode:"visible",children:r.children}),(n.mode&1)===0&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Co(e,n){return n=Ii({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Pi(e,n,t,r){return r!==null&&qa(r),Ft(n,e.child,null,t),e=Co(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Df(e,n,t,r,i,l,c){if(t)return n.flags&256?(n.flags&=-257,r=ko(Error(s(422))),Pi(e,n,c,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=Ii({mode:"visible",children:r.children},i,0,null),l=yt(l,i,c,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,(n.mode&1)!==0&&Ft(n,e.child,null,c),n.child.memoizedState=Mo(c),n.memoizedState=Eo,l);if((n.mode&1)===0)return Pi(e,n,c,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var f=r.dgst;return r=f,l=Error(s(419)),r=ko(l,r,void 0),Pi(e,n,c,r)}if(f=(c&e.childLanes)!==0,Qe||f){if(r=je,r!==null){switch(c&-c){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|c))!==0?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Dn(e,i),Sn(r,e,i,-1))}return Ho(),r=ko(Error(s(421))),Pi(e,n,c,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Gf.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,on=Un(i.nextSibling),an=n,pe=!0,yn=null,e!==null&&(un[cn++]=Tn,un[cn++]=Nn,un[cn++]=st,Tn=e.id,Nn=e.overflow,st=n),n=Co(n,r.children),n.flags|=4096,n)}function Cu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),to(e.return,n,t)}function bo(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function bu(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(Ve(e,n,r.children,t),r=ve.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cu(e,t,n);else if(e.tag===19)Cu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(de(ve,r),(n.mode&1)===0)n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&Si(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),bo(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&Si(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}bo(n,!0,t,null,l);break;case"together":bo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ti(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Wn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),ht|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,t=et(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=et(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function zf(e,n,t){switch(n.tag){case 3:Lu(n),jt();break;case 5:Is(n);break;case 1:Je(n.type)&&di(n);break;case 4:ao(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;de(yi,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(de(ve,ve.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?Mu(e,n,t):(de(ve,ve.current&1),e=Wn(e,n,t),e!==null?e.sibling:null);de(ve,ve.current&1);break;case 19:if(r=(t&n.childLanes)!==0,(e.flags&128)!==0){if(r)return bu(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(ve,ve.current),r)break;return null;case 22:case 23:return n.lanes=0,ku(e,n,t)}return Wn(e,n,t)}var Pu,Po,Tu,Nu;Pu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},Po=function(){},Tu=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,dt(En.current);var l=null;switch(t){case"input":i=ta(e,i),r=ta(e,r),l=[];break;case"select":i=W({},i,{value:void 0}),r=W({},r,{value:void 0}),l=[];break;case"textarea":i=aa(e,i),r=aa(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=si)}la(t,r);var c;t=null;for(x in i)if(!r.hasOwnProperty(x)&&i.hasOwnProperty(x)&&i[x]!=null)if(x==="style"){var f=i[x];for(c in f)f.hasOwnProperty(c)&&(t||(t={}),t[c]="")}else x!=="dangerouslySetInnerHTML"&&x!=="children"&&x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(d.hasOwnProperty(x)?l||(l=[]):(l=l||[]).push(x,null));for(x in r){var m=r[x];if(f=i!=null?i[x]:void 0,r.hasOwnProperty(x)&&m!==f&&(m!=null||f!=null))if(x==="style")if(f){for(c in f)!f.hasOwnProperty(c)||m&&m.hasOwnProperty(c)||(t||(t={}),t[c]="");for(c in m)m.hasOwnProperty(c)&&f[c]!==m[c]&&(t||(t={}),t[c]=m[c])}else t||(l||(l=[]),l.push(x,t)),t=m;else x==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,f=f?f.__html:void 0,m!=null&&f!==m&&(l=l||[]).push(x,m)):x==="children"?typeof m!="string"&&typeof m!="number"||(l=l||[]).push(x,""+m):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&(d.hasOwnProperty(x)?(m!=null&&x==="onScroll"&&fe("scroll",e),l||f===m||(l=[])):(l=l||[]).push(x,m))}t&&(l=l||[]).push("style",t);var x=l;(n.updateQueue=x)&&(n.flags|=4)}},Nu=function(e,n,t,r){t!==r&&(n.flags|=4)};function Cr(e,n){if(!pe)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ue(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Wf(e,n,t){var r=n.pendingProps;switch(Ja(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(n),null;case 1:return Je(n.type)&&ci(),Ue(n),null;case 3:return r=n.stateNode,_t(),he(Ze),he(Ie),so(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pi(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,yn!==null&&(Bo(yn),yn=null))),Po(e,n),Ue(n),null;case 5:oo(n);var i=dt(Sr.current);if(t=n.type,e!==null&&n.stateNode!=null)Tu(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ue(n),null}if(e=dt(En.current),pi(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[Ln]=n,r[gr]=l,e=(n.mode&1)!==0,t){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<hr.length;i++)fe(hr[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":cl(r,l),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},fe("invalid",r);break;case"textarea":hl(r,l),fe("invalid",r)}la(t,l),i=null;for(var c in l)if(l.hasOwnProperty(c)){var f=l[c];c==="children"?typeof f=="string"?r.textContent!==f&&(l.suppressHydrationWarning!==!0&&li(r.textContent,f,e),i=["children",f]):typeof f=="number"&&r.textContent!==""+f&&(l.suppressHydrationWarning!==!0&&li(r.textContent,f,e),i=["children",""+f]):d.hasOwnProperty(c)&&f!=null&&c==="onScroll"&&fe("scroll",r)}switch(t){case"input":_r(r),fl(r,l,!0);break;case"textarea":_r(r),pl(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=si)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{c=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gl(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=c.createElement(t,{is:r.is}):(e=c.createElement(t),t==="select"&&(c=e,r.multiple?c.multiple=!0:r.size&&(c.size=r.size))):e=c.createElementNS(e,t),e[Ln]=n,e[gr]=r,Pu(e,n,!1,!1),n.stateNode=e;e:{switch(c=sa(t,r),t){case"dialog":fe("cancel",e),fe("close",e),i=r;break;case"iframe":case"object":case"embed":fe("load",e),i=r;break;case"video":case"audio":for(i=0;i<hr.length;i++)fe(hr[i],e);i=r;break;case"source":fe("error",e),i=r;break;case"img":case"image":case"link":fe("error",e),fe("load",e),i=r;break;case"details":fe("toggle",e),i=r;break;case"input":cl(e,r),i=ta(e,r),fe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=W({},r,{value:void 0}),fe("invalid",e);break;case"textarea":hl(e,r),i=aa(e,r),fe("invalid",e);break;default:i=r}la(t,i),f=i;for(l in f)if(f.hasOwnProperty(l)){var m=f[l];l==="style"?wl(e,m):l==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,m!=null&&yl(e,m)):l==="children"?typeof m=="string"?(t!=="textarea"||m!=="")&&Zt(e,m):typeof m=="number"&&Zt(e,""+m):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(d.hasOwnProperty(l)?m!=null&&l==="onScroll"&&fe("scroll",e):m!=null&&Be(e,l,m,c))}switch(t){case"input":_r(e),fl(e,r,!1);break;case"textarea":_r(e),pl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ae(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?wt(e,!!r.multiple,l,!1):r.defaultValue!=null&&wt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=si)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ue(n),null;case 6:if(e&&n.stateNode!=null)Nu(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=dt(Sr.current),dt(En.current),pi(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ln]=n,(l=r.nodeValue!==t)&&(e=an,e!==null))switch(e.tag){case 3:li(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&li(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ln]=n,n.stateNode=r}return Ue(n),null;case 13:if(he(ve),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(pe&&on!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Ws(),jt(),n.flags|=98560,l=!1;else if(l=pi(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[Ln]=n}else jt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ue(n),l=!1}else yn!==null&&(Bo(yn),yn=null),l=!0;if(!l)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(ve.current&1)!==0?ze===0&&(ze=3):Ho())),n.updateQueue!==null&&(n.flags|=4),Ue(n),null);case 4:return _t(),Po(e,n),e===null&&mr(n.stateNode.containerInfo),Ue(n),null;case 10:return no(n.type._context),Ue(n),null;case 17:return Je(n.type)&&ci(),Ue(n),null;case 19:if(he(ve),l=n.memoizedState,l===null)return Ue(n),null;if(r=(n.flags&128)!==0,c=l.rendering,c===null)if(r)Cr(l,!1);else{if(ze!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(c=Si(e),c!==null){for(n.flags|=128,Cr(l,!1),r=c.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,c=l.alternate,c===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=c.childLanes,l.lanes=c.lanes,l.child=c.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=c.memoizedProps,l.memoizedState=c.memoizedState,l.updateQueue=c.updateQueue,l.type=c.type,e=c.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return de(ve,ve.current&1|2),n.child}e=e.sibling}l.tail!==null&&Me()>Ht&&(n.flags|=128,r=!0,Cr(l,!1),n.lanes=4194304)}else{if(!r)if(e=Si(c),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Cr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!pe)return Ue(n),null}else 2*Me()-l.renderingStartTime>Ht&&t!==1073741824&&(n.flags|=128,r=!0,Cr(l,!1),n.lanes=4194304);l.isBackwards?(c.sibling=n.child,n.child=c):(t=l.last,t!==null?t.sibling=c:n.child=c,l.last=c)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=Me(),n.sibling=null,t=ve.current,de(ve,r?t&1|2:t&1),n):(Ue(n),null);case 22:case 23:return Io(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&(n.mode&1)!==0?(ln&1073741824)!==0&&(Ue(n),n.subtreeFlags&6&&(n.flags|=8192)):Ue(n),null;case 24:return null;case 25:return null}throw Error(s(156,n.tag))}function jf(e,n){switch(Ja(n),n.tag){case 1:return Je(n.type)&&ci(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return _t(),he(Ze),he(Ie),so(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return oo(n),null;case 13:if(he(ve),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));jt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return he(ve),null;case 4:return _t(),null;case 10:return no(n.type._context),null;case 22:case 23:return Io(),null;case 24:return null;default:return null}}var Ni=!1,Ge=!1,Ff=typeof WeakSet=="function"?WeakSet:Set,z=null;function Ot(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Le(e,n,r)}else t.current=null}function To(e,n,t){try{t()}catch(r){Le(e,n,r)}}var Du=!1;function Af(e,n){if(Oa=Qr,e=us(),za(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var c=0,f=-1,m=-1,x=0,C=0,b=e,E=null;n:for(;;){for(var D;b!==t||i!==0&&b.nodeType!==3||(f=c+i),b!==l||r!==0&&b.nodeType!==3||(m=c+r),b.nodeType===3&&(c+=b.nodeValue.length),(D=b.firstChild)!==null;)E=b,b=D;for(;;){if(b===e)break n;if(E===t&&++x===i&&(f=c),E===l&&++C===r&&(m=c),(D=b.nextSibling)!==null)break;b=E,E=b.parentNode}b=D}t=f===-1||m===-1?null:{start:f,end:m}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ia={focusedElem:e,selectionRange:t},Qr=!1,z=n;z!==null;)if(n=z,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,z=e;else for(;z!==null;){n=z;try{var j=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var A=j.memoizedProps,Ce=j.memoizedState,v=n.stateNode,g=v.getSnapshotBeforeUpdate(n.elementType===n.type?A:vn(n.type,A),Ce);v.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var k=n.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(T){Le(n,n.return,T)}if(e=n.sibling,e!==null){e.return=n.return,z=e;break}z=n.return}return j=Du,Du=!1,j}function br(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&To(n,t,l)}i=i.next}while(i!==r)}}function Di(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function No(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function zu(e){var n=e.alternate;n!==null&&(e.alternate=null,zu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ln],delete n[gr],delete n[Va],delete n[vf],delete n[wf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wu(e){return e.tag===5||e.tag===3||e.tag===4}function ju(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Do(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=si));else if(r!==4&&(e=e.child,e!==null))for(Do(e,n,t),e=e.sibling;e!==null;)Do(e,n,t),e=e.sibling}function zo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(zo(e,n,t),e=e.sibling;e!==null;)zo(e,n,t),e=e.sibling}var Re=null,wn=!1;function Jn(e,n,t){for(t=t.child;t!==null;)Fu(e,n,t),t=t.sibling}function Fu(e,n,t){if(xn&&typeof xn.onCommitFiberUnmount=="function")try{xn.onCommitFiberUnmount(Gr,t)}catch{}switch(t.tag){case 5:Ge||Ot(t,n);case 6:var r=Re,i=wn;Re=null,Jn(e,n,t),Re=r,wn=i,Re!==null&&(wn?(e=Re,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Re.removeChild(t.stateNode));break;case 18:Re!==null&&(wn?(e=Re,t=t.stateNode,e.nodeType===8?Ga(e.parentNode,t):e.nodeType===1&&Ga(e,t),ar(e)):Ga(Re,t.stateNode));break;case 4:r=Re,i=wn,Re=t.stateNode.containerInfo,wn=!0,Jn(e,n,t),Re=r,wn=i;break;case 0:case 11:case 14:case 15:if(!Ge&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,c=l.destroy;l=l.tag,c!==void 0&&((l&2)!==0||(l&4)!==0)&&To(t,n,c),i=i.next}while(i!==r)}Jn(e,n,t);break;case 1:if(!Ge&&(Ot(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(f){Le(t,n,f)}Jn(e,n,t);break;case 21:Jn(e,n,t);break;case 22:t.mode&1?(Ge=(r=Ge)||t.memoizedState!==null,Jn(e,n,t),Ge=r):Jn(e,n,t);break;default:Jn(e,n,t)}}function Au(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Ff),n.forEach(function(r){var i=Vf.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function kn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,c=n,f=c;e:for(;f!==null;){switch(f.tag){case 5:Re=f.stateNode,wn=!1;break e;case 3:Re=f.stateNode.containerInfo,wn=!0;break e;case 4:Re=f.stateNode.containerInfo,wn=!0;break e}f=f.return}if(Re===null)throw Error(s(160));Fu(l,c,i),Re=null,wn=!1;var m=i.alternate;m!==null&&(m.return=null),i.return=null}catch(x){Le(i,n,x)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Ru(n,e),n=n.sibling}function Ru(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(kn(n,e),Cn(e),r&4){try{br(3,e,e.return),Di(3,e)}catch(A){Le(e,e.return,A)}try{br(5,e,e.return)}catch(A){Le(e,e.return,A)}}break;case 1:kn(n,e),Cn(e),r&512&&t!==null&&Ot(t,t.return);break;case 5:if(kn(n,e),Cn(e),r&512&&t!==null&&Ot(t,t.return),e.flags&32){var i=e.stateNode;try{Zt(i,"")}catch(A){Le(e,e.return,A)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,c=t!==null?t.memoizedProps:l,f=e.type,m=e.updateQueue;if(e.updateQueue=null,m!==null)try{f==="input"&&l.type==="radio"&&l.name!=null&&dl(i,l),sa(f,c);var x=sa(f,l);for(c=0;c<m.length;c+=2){var C=m[c],b=m[c+1];C==="style"?wl(i,b):C==="dangerouslySetInnerHTML"?yl(i,b):C==="children"?Zt(i,b):Be(i,C,b,x)}switch(f){case"input":ra(i,l);break;case"textarea":ml(i,l);break;case"select":var E=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var D=l.value;D!=null?wt(i,!!l.multiple,D,!1):E!==!!l.multiple&&(l.defaultValue!=null?wt(i,!!l.multiple,l.defaultValue,!0):wt(i,!!l.multiple,l.multiple?[]:"",!1))}i[gr]=l}catch(A){Le(e,e.return,A)}}break;case 6:if(kn(n,e),Cn(e),r&4){if(e.stateNode===null)throw Error(s(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(A){Le(e,e.return,A)}}break;case 3:if(kn(n,e),Cn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{ar(n.containerInfo)}catch(A){Le(e,e.return,A)}break;case 4:kn(n,e),Cn(e);break;case 13:kn(n,e),Cn(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Fo=Me())),r&4&&Au(e);break;case 22:if(C=t!==null&&t.memoizedState!==null,e.mode&1?(Ge=(x=Ge)||C,kn(n,e),Ge=x):kn(n,e),Cn(e),r&8192){if(x=e.memoizedState!==null,(e.stateNode.isHidden=x)&&!C&&(e.mode&1)!==0)for(z=e,C=e.child;C!==null;){for(b=z=C;z!==null;){switch(E=z,D=E.child,E.tag){case 0:case 11:case 14:case 15:br(4,E,E.return);break;case 1:Ot(E,E.return);var j=E.stateNode;if(typeof j.componentWillUnmount=="function"){r=E,t=E.return;try{n=r,j.props=n.memoizedProps,j.state=n.memoizedState,j.componentWillUnmount()}catch(A){Le(r,t,A)}}break;case 5:Ot(E,E.return);break;case 22:if(E.memoizedState!==null){Ou(b);continue}}D!==null?(D.return=E,z=D):Ou(b)}C=C.sibling}e:for(C=null,b=e;;){if(b.tag===5){if(C===null){C=b;try{i=b.stateNode,x?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(f=b.stateNode,m=b.memoizedProps.style,c=m!=null&&m.hasOwnProperty("display")?m.display:null,f.style.display=vl("display",c))}catch(A){Le(e,e.return,A)}}}else if(b.tag===6){if(C===null)try{b.stateNode.nodeValue=x?"":b.memoizedProps}catch(A){Le(e,e.return,A)}}else if((b.tag!==22&&b.tag!==23||b.memoizedState===null||b===e)&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===e)break e;for(;b.sibling===null;){if(b.return===null||b.return===e)break e;C===b&&(C=null),b=b.return}C===b&&(C=null),b.sibling.return=b.return,b=b.sibling}}break;case 19:kn(n,e),Cn(e),r&4&&Au(e);break;case 21:break;default:kn(n,e),Cn(e)}}function Cn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Wu(t)){var r=t;break e}t=t.return}throw Error(s(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Zt(i,""),r.flags&=-33);var l=ju(e);zo(e,l,i);break;case 3:case 4:var c=r.stateNode.containerInfo,f=ju(e);Do(e,f,c);break;default:throw Error(s(161))}}catch(m){Le(e,e.return,m)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Rf(e,n,t){z=e,_u(e)}function _u(e,n,t){for(var r=(e.mode&1)!==0;z!==null;){var i=z,l=i.child;if(i.tag===22&&r){var c=i.memoizedState!==null||Ni;if(!c){var f=i.alternate,m=f!==null&&f.memoizedState!==null||Ge;f=Ni;var x=Ge;if(Ni=c,(Ge=m)&&!x)for(z=i;z!==null;)c=z,m=c.child,c.tag===22&&c.memoizedState!==null?Iu(i):m!==null?(m.return=c,z=m):Iu(i);for(;l!==null;)z=l,_u(l),l=l.sibling;z=i,Ni=f,Ge=x}Bu(e)}else(i.subtreeFlags&8772)!==0&&l!==null?(l.return=i,z=l):Bu(e)}}function Bu(e){for(;z!==null;){var n=z;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Ge||Di(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Ge)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:vn(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&Os(n,l,r);break;case 3:var c=n.updateQueue;if(c!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Os(n,c,t)}break;case 5:var f=n.stateNode;if(t===null&&n.flags&4){t=f;var m=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":m.autoFocus&&t.focus();break;case"img":m.src&&(t.src=m.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var x=n.alternate;if(x!==null){var C=x.memoizedState;if(C!==null){var b=C.dehydrated;b!==null&&ar(b)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}Ge||n.flags&512&&No(n)}catch(E){Le(n,n.return,E)}}if(n===e){z=null;break}if(t=n.sibling,t!==null){t.return=n.return,z=t;break}z=n.return}}function Ou(e){for(;z!==null;){var n=z;if(n===e){z=null;break}var t=n.sibling;if(t!==null){t.return=n.return,z=t;break}z=n.return}}function Iu(e){for(;z!==null;){var n=z;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Di(4,n)}catch(m){Le(n,t,m)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(m){Le(n,i,m)}}var l=n.return;try{No(n)}catch(m){Le(n,l,m)}break;case 5:var c=n.return;try{No(n)}catch(m){Le(n,c,m)}}}catch(m){Le(n,n.return,m)}if(n===e){z=null;break}var f=n.sibling;if(f!==null){f.return=n.return,z=f;break}z=n.return}}var _f=Math.ceil,zi=be.ReactCurrentDispatcher,Wo=be.ReactCurrentOwner,hn=be.ReactCurrentBatchConfig,X=0,je=null,Te=null,_e=0,ln=0,It=Gn(0),ze=0,Pr=null,ht=0,Wi=0,jo=0,Tr=null,Ye=null,Fo=0,Ht=1/0,jn=null,ji=!1,Ao=null,Qn=null,Fi=!1,Yn=null,Ai=0,Nr=0,Ro=null,Ri=-1,_i=0;function $e(){return(X&6)!==0?Me():Ri!==-1?Ri:Ri=Me()}function qn(e){return(e.mode&1)===0?1:(X&2)!==0&&_e!==0?_e&-_e:Sf.transition!==null?(_i===0&&(_i=jl()),_i):(e=oe,e!==0||(e=window.event,e=e===void 0?16:Ul(e.type)),e)}function Sn(e,n,t,r){if(50<Nr)throw Nr=0,Ro=null,Error(s(185));er(e,t,r),((X&2)===0||e!==je)&&(e===je&&((X&2)===0&&(Wi|=t),ze===4&&Xn(e,_e)),qe(e,r),t===1&&X===0&&(n.mode&1)===0&&(Ht=Me()+500,fi&&$n()))}function qe(e,n){var t=e.callbackNode;kd(e,n);var r=Kr(e,e===je?_e:0);if(r===0)t!==null&&Dl(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Dl(t),n===1)e.tag===0?kf(Uu.bind(null,e)):Ps(Uu.bind(null,e)),gf(function(){(X&6)===0&&$n()}),t=null;else{switch(Fl(r)){case 1:t=pa;break;case 4:t=zl;break;case 16:t=Ur;break;case 536870912:t=Wl;break;default:t=Ur}t=Yu(t,Hu.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Hu(e,n){if(Ri=-1,_i=0,(X&6)!==0)throw Error(s(327));var t=e.callbackNode;if(Ut()&&e.callbackNode!==t)return null;var r=Kr(e,e===je?_e:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||n)n=Bi(e,r);else{n=r;var i=X;X|=2;var l=Vu();(je!==e||_e!==n)&&(jn=null,Ht=Me()+500,pt(e,n));do try{If();break}catch(f){Gu(e,f)}while(!0);eo(),zi.current=l,X=i,Te!==null?n=0:(je=null,_e=0,n=ze)}if(n!==0){if(n===2&&(i=ga(e),i!==0&&(r=i,n=_o(e,i))),n===1)throw t=Pr,pt(e,0),Xn(e,r),qe(e,Me()),t;if(n===6)Xn(e,r);else{if(i=e.current.alternate,(r&30)===0&&!Bf(i)&&(n=Bi(e,r),n===2&&(l=ga(e),l!==0&&(r=l,n=_o(e,l))),n===1))throw t=Pr,pt(e,0),Xn(e,r),qe(e,Me()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(s(345));case 2:gt(e,Ye,jn);break;case 3:if(Xn(e,r),(r&130023424)===r&&(n=Fo+500-Me(),10<n)){if(Kr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){$e(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ua(gt.bind(null,e,Ye,jn),n);break}gt(e,Ye,jn);break;case 4:if(Xn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var c=31-pn(r);l=1<<c,c=n[c],c>i&&(i=c),r&=~l}if(r=i,r=Me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_f(r/1960))-r,10<r){e.timeoutHandle=Ua(gt.bind(null,e,Ye,jn),r);break}gt(e,Ye,jn);break;case 5:gt(e,Ye,jn);break;default:throw Error(s(329))}}}return qe(e,Me()),e.callbackNode===t?Hu.bind(null,e):null}function _o(e,n){var t=Tr;return e.current.memoizedState.isDehydrated&&(pt(e,n).flags|=256),e=Bi(e,n),e!==2&&(n=Ye,Ye=t,n!==null&&Bo(n)),e}function Bo(e){Ye===null?Ye=e:Ye.push.apply(Ye,e)}function Bf(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!gn(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xn(e,n){for(n&=~jo,n&=~Wi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-pn(n),r=1<<t;e[t]=-1,n&=~r}}function Uu(e){if((X&6)!==0)throw Error(s(327));Ut();var n=Kr(e,0);if((n&1)===0)return qe(e,Me()),null;var t=Bi(e,n);if(e.tag!==0&&t===2){var r=ga(e);r!==0&&(n=r,t=_o(e,r))}if(t===1)throw t=Pr,pt(e,0),Xn(e,n),qe(e,Me()),t;if(t===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,gt(e,Ye,jn),qe(e,Me()),null}function Oo(e,n){var t=X;X|=1;try{return e(n)}finally{X=t,X===0&&(Ht=Me()+500,fi&&$n())}}function mt(e){Yn!==null&&Yn.tag===0&&(X&6)===0&&Ut();var n=X;X|=1;var t=hn.transition,r=oe;try{if(hn.transition=null,oe=1,e)return e()}finally{oe=r,hn.transition=t,X=n,(X&6)===0&&$n()}}function Io(){ln=It.current,he(It)}function pt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,pf(t)),Te!==null)for(t=Te.return;t!==null;){var r=t;switch(Ja(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ci();break;case 3:_t(),he(Ze),he(Ie),so();break;case 5:oo(r);break;case 4:_t();break;case 13:he(ve);break;case 19:he(ve);break;case 10:no(r.type._context);break;case 22:case 23:Io()}t=t.return}if(je=e,Te=e=et(e.current,null),_e=ln=n,ze=0,Pr=null,jo=Wi=ht=0,Ye=Tr=null,ct!==null){for(n=0;n<ct.length;n++)if(t=ct[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var c=l.next;l.next=i,r.next=c}t.pending=r}ct=null}return e}function Gu(e,n){do{var t=Te;try{if(eo(),xi.current=Ci,Li){for(var r=we.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Li=!1}if(ft=0,We=De=we=null,xr=!1,Lr=0,Wo.current=null,t===null||t.return===null){ze=1,Pr=n,Te=null;break}e:{var l=e,c=t.return,f=t,m=n;if(n=_e,f.flags|=32768,m!==null&&typeof m=="object"&&typeof m.then=="function"){var x=m,C=f,b=C.tag;if((C.mode&1)===0&&(b===0||b===11||b===15)){var E=C.alternate;E?(C.updateQueue=E.updateQueue,C.memoizedState=E.memoizedState,C.lanes=E.lanes):(C.updateQueue=null,C.memoizedState=null)}var D=pu(c);if(D!==null){D.flags&=-257,gu(D,c,f,l,n),D.mode&1&&mu(l,x,n),n=D,m=x;var j=n.updateQueue;if(j===null){var A=new Set;A.add(m),n.updateQueue=A}else j.add(m);break e}else{if((n&1)===0){mu(l,x,n),Ho();break e}m=Error(s(426))}}else if(pe&&f.mode&1){var Ce=pu(c);if(Ce!==null){(Ce.flags&65536)===0&&(Ce.flags|=256),gu(Ce,c,f,l,n),qa(Bt(m,f));break e}}l=m=Bt(m,f),ze!==4&&(ze=2),Tr===null?Tr=[l]:Tr.push(l),l=c;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var v=fu(l,m,n);Bs(l,v);break e;case 1:f=m;var g=l.type,k=l.stateNode;if((l.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(Qn===null||!Qn.has(k)))){l.flags|=65536,n&=-n,l.lanes|=n;var T=hu(l,f,n);Bs(l,T);break e}}l=l.return}while(l!==null)}Ku(t)}catch(R){n=R,Te===t&&t!==null&&(Te=t=t.return);continue}break}while(!0)}function Vu(){var e=zi.current;return zi.current=Ci,e===null?Ci:e}function Ho(){(ze===0||ze===3||ze===2)&&(ze=4),je===null||(ht&268435455)===0&&(Wi&268435455)===0||Xn(je,_e)}function Bi(e,n){var t=X;X|=2;var r=Vu();(je!==e||_e!==n)&&(jn=null,pt(e,n));do try{Of();break}catch(i){Gu(e,i)}while(!0);if(eo(),X=t,zi.current=r,Te!==null)throw Error(s(261));return je=null,_e=0,ze}function Of(){for(;Te!==null;)$u(Te)}function If(){for(;Te!==null&&!dd();)$u(Te)}function $u(e){var n=Qu(e.alternate,e,ln);e.memoizedProps=e.pendingProps,n===null?Ku(e):Te=n,Wo.current=null}function Ku(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=Wf(t,n,ln),t!==null){Te=t;return}}else{if(t=jf(t,n),t!==null){t.flags&=32767,Te=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ze=6,Te=null;return}}if(n=n.sibling,n!==null){Te=n;return}Te=n=e}while(n!==null);ze===0&&(ze=5)}function gt(e,n,t){var r=oe,i=hn.transition;try{hn.transition=null,oe=1,Hf(e,n,t,r)}finally{hn.transition=i,oe=r}return null}function Hf(e,n,t,r){do Ut();while(Yn!==null);if((X&6)!==0)throw Error(s(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(Sd(e,l),e===je&&(Te=je=null,_e=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||Fi||(Fi=!0,Yu(Ur,function(){return Ut(),null})),l=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||l){l=hn.transition,hn.transition=null;var c=oe;oe=1;var f=X;X|=4,Wo.current=null,Af(e,t),Ru(t,e),sf(Ia),Qr=!!Oa,Ia=Oa=null,e.current=t,Rf(t),fd(),X=f,oe=c,hn.transition=l}else e.current=t;if(Fi&&(Fi=!1,Yn=e,Ai=i),l=e.pendingLanes,l===0&&(Qn=null),pd(t.stateNode),qe(e,Me()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(ji)throw ji=!1,e=Ao,Ao=null,e;return(Ai&1)!==0&&e.tag!==0&&Ut(),l=e.pendingLanes,(l&1)!==0?e===Ro?Nr++:(Nr=0,Ro=e):Nr=0,$n(),null}function Ut(){if(Yn!==null){var e=Fl(Ai),n=hn.transition,t=oe;try{if(hn.transition=null,oe=16>e?16:e,Yn===null)var r=!1;else{if(e=Yn,Yn=null,Ai=0,(X&6)!==0)throw Error(s(331));var i=X;for(X|=4,z=e.current;z!==null;){var l=z,c=l.child;if((z.flags&16)!==0){var f=l.deletions;if(f!==null){for(var m=0;m<f.length;m++){var x=f[m];for(z=x;z!==null;){var C=z;switch(C.tag){case 0:case 11:case 15:br(8,C,l)}var b=C.child;if(b!==null)b.return=C,z=b;else for(;z!==null;){C=z;var E=C.sibling,D=C.return;if(zu(C),C===x){z=null;break}if(E!==null){E.return=D,z=E;break}z=D}}}var j=l.alternate;if(j!==null){var A=j.child;if(A!==null){j.child=null;do{var Ce=A.sibling;A.sibling=null,A=Ce}while(A!==null)}}z=l}}if((l.subtreeFlags&2064)!==0&&c!==null)c.return=l,z=c;else e:for(;z!==null;){if(l=z,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:br(9,l,l.return)}var v=l.sibling;if(v!==null){v.return=l.return,z=v;break e}z=l.return}}var g=e.current;for(z=g;z!==null;){c=z;var k=c.child;if((c.subtreeFlags&2064)!==0&&k!==null)k.return=c,z=k;else e:for(c=g;z!==null;){if(f=z,(f.flags&2048)!==0)try{switch(f.tag){case 0:case 11:case 15:Di(9,f)}}catch(R){Le(f,f.return,R)}if(f===c){z=null;break e}var T=f.sibling;if(T!==null){T.return=f.return,z=T;break e}z=f.return}}if(X=i,$n(),xn&&typeof xn.onPostCommitFiberRoot=="function")try{xn.onPostCommitFiberRoot(Gr,e)}catch{}r=!0}return r}finally{oe=t,hn.transition=n}}return!1}function Zu(e,n,t){n=Bt(t,n),n=fu(e,n,1),e=Zn(e,n,1),n=$e(),e!==null&&(er(e,1,n),qe(e,n))}function Le(e,n,t){if(e.tag===3)Zu(e,e,t);else for(;n!==null;){if(n.tag===3){Zu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qn===null||!Qn.has(r))){e=Bt(t,e),e=hu(n,e,1),n=Zn(n,e,1),e=$e(),n!==null&&(er(n,1,e),qe(n,e));break}}n=n.return}}function Uf(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=$e(),e.pingedLanes|=e.suspendedLanes&t,je===e&&(_e&t)===t&&(ze===4||ze===3&&(_e&130023424)===_e&&500>Me()-Fo?pt(e,0):jo|=t),qe(e,n)}function Ju(e,n){n===0&&((e.mode&1)===0?n=1:(n=$r,$r<<=1,($r&130023424)===0&&($r=4194304)));var t=$e();e=Dn(e,n),e!==null&&(er(e,n,t),qe(e,t))}function Gf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Ju(e,t)}function Vf(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(s(314))}r!==null&&r.delete(n),Ju(e,t)}var Qu;Qu=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ze.current)Qe=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return Qe=!1,zf(e,n,t);Qe=(e.flags&131072)!==0}else Qe=!1,pe&&(n.flags&1048576)!==0&&Ts(n,mi,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Ti(e,n),e=n.pendingProps;var i=Dt(n,Ie.current);Rt(n,t),i=fo(null,n,r,e,i,t);var l=ho();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Je(r)?(l=!0,di(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,io(n),i.updater=bi,n.stateNode=i,i._reactInternals=n,wo(n,r,e,t),n=Lo(null,n,r,!0,l,t)):(n.tag=0,pe&&l&&Za(n),Ve(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Ti(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Kf(r),e=vn(r,e),i){case 0:n=xo(null,n,r,e,t);break e;case 1:n=xu(null,n,r,e,t);break e;case 11:n=yu(null,n,r,e,t);break e;case 14:n=vu(null,n,r,vn(r.type,e),t);break e}throw Error(s(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:vn(r,i),xo(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:vn(r,i),xu(e,n,r,i,t);case 3:e:{if(Lu(n),e===null)throw Error(s(387));r=n.pendingProps,l=n.memoizedState,i=l.element,_s(e,n),ki(n,r,null,t);var c=n.memoizedState;if(r=c.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=Bt(Error(s(423)),n),n=Eu(e,n,r,t,i);break e}else if(r!==i){i=Bt(Error(s(424)),n),n=Eu(e,n,r,t,i);break e}else for(on=Un(n.stateNode.containerInfo.firstChild),an=n,pe=!0,yn=null,t=As(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(jt(),r===i){n=Wn(e,n,t);break e}Ve(e,n,r,t)}n=n.child}return n;case 5:return Is(n),e===null&&Ya(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,c=i.children,Ha(r,i)?c=null:l!==null&&Ha(r,l)&&(n.flags|=32),Su(e,n),Ve(e,n,c,t),n.child;case 6:return e===null&&Ya(n),null;case 13:return Mu(e,n,t);case 4:return ao(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ft(n,null,r,t):Ve(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:vn(r,i),yu(e,n,r,i,t);case 7:return Ve(e,n,n.pendingProps,t),n.child;case 8:return Ve(e,n,n.pendingProps.children,t),n.child;case 12:return Ve(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,c=i.value,de(yi,r._currentValue),r._currentValue=c,l!==null)if(gn(l.value,c)){if(l.children===i.children&&!Ze.current){n=Wn(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var f=l.dependencies;if(f!==null){c=l.child;for(var m=f.firstContext;m!==null;){if(m.context===r){if(l.tag===1){m=zn(-1,t&-t),m.tag=2;var x=l.updateQueue;if(x!==null){x=x.shared;var C=x.pending;C===null?m.next=m:(m.next=C.next,C.next=m),x.pending=m}}l.lanes|=t,m=l.alternate,m!==null&&(m.lanes|=t),to(l.return,t,n),f.lanes|=t;break}m=m.next}}else if(l.tag===10)c=l.type===n.type?null:l.child;else if(l.tag===18){if(c=l.return,c===null)throw Error(s(341));c.lanes|=t,f=c.alternate,f!==null&&(f.lanes|=t),to(c,t,n),c=l.sibling}else c=l.child;if(c!==null)c.return=l;else for(c=l;c!==null;){if(c===n){c=null;break}if(l=c.sibling,l!==null){l.return=c.return,c=l;break}c=c.return}l=c}Ve(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,Rt(n,t),i=dn(i),r=r(i),n.flags|=1,Ve(e,n,r,t),n.child;case 14:return r=n.type,i=vn(r,n.pendingProps),i=vn(r.type,i),vu(e,n,r,i,t);case 15:return wu(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:vn(r,i),Ti(e,n),n.tag=1,Je(r)?(e=!0,di(n)):e=!1,Rt(n,t),cu(n,r,i),wo(n,r,i,t),Lo(null,n,r,!0,e,t);case 19:return bu(e,n,t);case 22:return ku(e,n,t)}throw Error(s(156,n.tag))};function Yu(e,n){return Nl(e,n)}function $f(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(e,n,t,r){return new $f(e,n,t,r)}function Uo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kf(e){if(typeof e=="function")return Uo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Pe)return 11;if(e===Se)return 14}return 2}function et(e,n){var t=e.alternate;return t===null?(t=mn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Oi(e,n,t,r,i,l){var c=2;if(r=e,typeof e=="function")Uo(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case ke:return yt(t.children,i,l,n);case _:c=8,i|=8;break;case Y:return e=mn(12,t,n,i|2),e.elementType=Y,e.lanes=l,e;case ie:return e=mn(13,t,n,i),e.elementType=ie,e.lanes=l,e;case Ee:return e=mn(19,t,n,i),e.elementType=Ee,e.lanes=l,e;case ye:return Ii(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ue:c=10;break e;case Ae:c=9;break e;case Pe:c=11;break e;case Se:c=14;break e;case xe:c=16,r=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return n=mn(c,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function yt(e,n,t,r){return e=mn(7,e,r,n),e.lanes=t,e}function Ii(e,n,t,r){return e=mn(22,e,r,n),e.elementType=ye,e.lanes=t,e.stateNode={isHidden:!1},e}function Go(e,n,t){return e=mn(6,e,null,n),e.lanes=t,e}function Vo(e,n,t){return n=mn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Zf(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ya(0),this.expirationTimes=ya(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ya(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $o(e,n,t,r,i,l,c,f,m){return e=new Zf(e,n,t,f,m),n===1?(n=1,l===!0&&(n|=8)):n=0,l=mn(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},io(l),e}function Jf(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:K,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function qu(e){if(!e)return Vn;e=e._reactInternals;e:{if(at(e)!==e||e.tag!==1)throw Error(s(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Je(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(s(171))}if(e.tag===1){var t=e.type;if(Je(t))return Cs(e,t,n)}return n}function Xu(e,n,t,r,i,l,c,f,m){return e=$o(t,r,!0,e,i,l,c,f,m),e.context=qu(null),t=e.current,r=$e(),i=qn(t),l=zn(r,i),l.callback=n??null,Zn(t,l,i),e.current.lanes=i,er(e,i,r),qe(e,r),e}function Hi(e,n,t,r){var i=n.current,l=$e(),c=qn(i);return t=qu(t),n.context===null?n.context=t:n.pendingContext=t,n=zn(l,c),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Zn(i,n,c),e!==null&&(Sn(e,i,c,l),wi(e,i,c)),c}function Ui(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ec(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ko(e,n){ec(e,n),(e=e.alternate)&&ec(e,n)}function Qf(){return null}var nc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Zo(e){this._internalRoot=e}Gi.prototype.render=Zo.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));Hi(e,n,null,null)},Gi.prototype.unmount=Zo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;mt(function(){Hi(null,e,null,null)}),n[bn]=null}};function Gi(e){this._internalRoot=e}Gi.prototype.unstable_scheduleHydration=function(e){if(e){var n=_l();e={blockedOn:null,target:e,priority:n};for(var t=0;t<On.length&&n!==0&&n<On[t].priority;t++);On.splice(t,0,e),t===0&&Il(e)}};function Jo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Vi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function tc(){}function Yf(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var x=Ui(c);l.call(x)}}var c=Xu(n,r,e,0,null,!1,!1,"",tc);return e._reactRootContainer=c,e[bn]=c.current,mr(e.nodeType===8?e.parentNode:e),mt(),c}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var f=r;r=function(){var x=Ui(m);f.call(x)}}var m=$o(e,0,!1,null,null,!1,!1,"",tc);return e._reactRootContainer=m,e[bn]=m.current,mr(e.nodeType===8?e.parentNode:e),mt(function(){Hi(n,m,t,r)}),m}function $i(e,n,t,r,i){var l=t._reactRootContainer;if(l){var c=l;if(typeof i=="function"){var f=i;i=function(){var m=Ui(c);f.call(m)}}Hi(n,c,e,i)}else c=Yf(t,n,e,i,r);return Ui(c)}Al=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Xt(n.pendingLanes);t!==0&&(va(n,t|1),qe(n,Me()),(X&6)===0&&(Ht=Me()+500,$n()))}break;case 13:mt(function(){var r=Dn(e,1);if(r!==null){var i=$e();Sn(r,e,1,i)}}),Ko(e,1)}},wa=function(e){if(e.tag===13){var n=Dn(e,134217728);if(n!==null){var t=$e();Sn(n,e,134217728,t)}Ko(e,134217728)}},Rl=function(e){if(e.tag===13){var n=qn(e),t=Dn(e,n);if(t!==null){var r=$e();Sn(t,e,n,r)}Ko(e,n)}},_l=function(){return oe},Bl=function(e,n){var t=oe;try{return oe=e,n()}finally{oe=t}},da=function(e,n,t){switch(n){case"input":if(ra(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=ui(r);if(!i)throw Error(s(90));ul(r),ra(r,i)}}}break;case"textarea":ml(e,t);break;case"select":n=t.value,n!=null&&wt(e,!!t.multiple,n,!1)}},Ll=Oo,El=mt;var qf={usingClientEntryPoint:!1,Events:[yr,Tt,ui,Sl,xl,Oo]},Dr={findFiberByHostInstance:ot,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xf={bundleType:Dr.bundleType,version:Dr.version,rendererPackageName:Dr.rendererPackageName,rendererConfig:Dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:be.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Pl(e),e===null?null:e.stateNode},findFiberByHostInstance:Dr.findFiberByHostInstance||Qf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ki=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ki.isDisabled&&Ki.supportsFiber)try{Gr=Ki.inject(Xf),xn=Ki}catch{}}return Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qf,Xe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jo(n))throw Error(s(200));return Jf(e,n,null,t)},Xe.createRoot=function(e,n){if(!Jo(e))throw Error(s(299));var t=!1,r="",i=nc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=$o(e,1,!1,null,null,t,!1,r,i),e[bn]=n.current,mr(e.nodeType===8?e.parentNode:e),new Zo(n)},Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=Pl(n),e=e===null?null:e.stateNode,e},Xe.flushSync=function(e){return mt(e)},Xe.hydrate=function(e,n,t){if(!Vi(n))throw Error(s(200));return $i(null,e,n,!0,t)},Xe.hydrateRoot=function(e,n,t){if(!Jo(e))throw Error(s(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",c=nc;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),n=Xu(n,null,e,1,t??null,i,!1,l,c),e[bn]=n.current,mr(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Gi(n)},Xe.render=function(e,n,t){if(!Vi(n))throw Error(s(200));return $i(null,e,n,!1,t)},Xe.unmountComponentAtNode=function(e){if(!Vi(e))throw Error(s(40));return e._reactRootContainer?(mt(function(){$i(null,null,e,!1,function(){e._reactRootContainer=null,e[bn]=null})}),!0):!1},Xe.unstable_batchedUpdates=Oo,Xe.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Vi(t))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return $i(e,n,t,!1,r)},Xe.version="18.3.1-next-f1338f8080-20240426",Xe}var cc;function sh(){if(cc)return qo.exports;cc=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(o){console.error(o)}}return a(),qo.exports=lh(),qo.exports}var dc;function uh(){if(dc)return Zi;dc=1;var a=sh();return Zi.createRoot=a.createRoot,Zi.hydrateRoot=a.hydrateRoot,Zi}var ch=uh();const dh=zc(ch);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Wc=(...a)=>a.filter((o,s,u)=>!!o&&o.trim()!==""&&u.indexOf(o)===s).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var hh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=se.forwardRef(({color:a="currentColor",size:o=24,strokeWidth:s=2,absoluteStrokeWidth:u,className:d="",children:h,iconNode:w,...S},L)=>se.createElement("svg",{ref:L,...hh,width:o,height:o,stroke:a,strokeWidth:u?Number(s)*24/Number(o):s,className:Wc("lucide",d),...S},[...w.map(([F,B])=>se.createElement(F,B)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=(a,o)=>{const s=se.forwardRef(({className:u,...d},h)=>se.createElement(mh,{ref:h,iconNode:o,className:Wc(`lucide-${fh(a)}`,u),...d}));return s.displayName=`${a}`,s};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=ge("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=ge("CalendarHeart",[["path",{d:"M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7",key:"136lmk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",key:"1t7hil"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=ge("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=ge("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=ge("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=ge("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=ge("CloudUpload",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=ge("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=ge("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=ge("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=ge("GripHorizontal",[["circle",{cx:"12",cy:"9",r:"1",key:"124mty"}],["circle",{cx:"19",cy:"9",r:"1",key:"1ruzo2"}],["circle",{cx:"5",cy:"9",r:"1",key:"1a8b28"}],["circle",{cx:"12",cy:"15",r:"1",key:"1e56xg"}],["circle",{cx:"19",cy:"15",r:"1",key:"1a92ep"}],["circle",{cx:"5",cy:"15",r:"1",key:"5r1jwy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=ge("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=ge("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=ge("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=ge("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=ge("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=ge("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=ge("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=ge("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=ge("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=ge("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=ge("StickyNote",[["path",{d:"M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z",key:"qazsjp"}],["path",{d:"M15 3v4a2 2 0 0 0 2 2h4",key:"40519r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=ge("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=ge("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),_c=6048e5,Fh=864e5,fc=Symbol.for("constructDateFrom");function An(a,o){return typeof a=="function"?a(o):a&&typeof a=="object"&&fc in a?a[fc](o):a instanceof Date?new a.constructor(o):new Date(o)}function nn(a,o){return An(o||a,a)}let Ah={};function Xi(){return Ah}function Rr(a,o){var S,L,F,B;const s=Xi(),u=(o==null?void 0:o.weekStartsOn)??((L=(S=o==null?void 0:o.locale)==null?void 0:S.options)==null?void 0:L.weekStartsOn)??s.weekStartsOn??((B=(F=s.locale)==null?void 0:F.options)==null?void 0:B.weekStartsOn)??0,d=nn(a,o==null?void 0:o.in),h=d.getDay(),w=(h<u?7:0)+h-u;return d.setDate(d.getDate()-w),d.setHours(0,0,0,0),d}function Ji(a,o){return Rr(a,{...o,weekStartsOn:1})}function Bc(a,o){const s=nn(a,o==null?void 0:o.in),u=s.getFullYear(),d=An(s,0);d.setFullYear(u+1,0,4),d.setHours(0,0,0,0);const h=Ji(d),w=An(s,0);w.setFullYear(u,0,4),w.setHours(0,0,0,0);const S=Ji(w);return s.getTime()>=h.getTime()?u+1:s.getTime()>=S.getTime()?u:u-1}function hc(a){const o=nn(a),s=new Date(Date.UTC(o.getFullYear(),o.getMonth(),o.getDate(),o.getHours(),o.getMinutes(),o.getSeconds(),o.getMilliseconds()));return s.setUTCFullYear(o.getFullYear()),+a-+s}function Oc(a,...o){const s=An.bind(null,o.find(u=>typeof u=="object"));return o.map(s)}function mc(a,o){const s=nn(a,o==null?void 0:o.in);return s.setHours(0,0,0,0),s}function Rh(a,o,s){const[u,d]=Oc(s==null?void 0:s.in,a,o),h=mc(u),w=mc(d),S=+h-hc(h),L=+w-hc(w);return Math.round((S-L)/Fh)}function _h(a,o){const s=Bc(a,o),u=An(a,0);return u.setFullYear(s,0,4),u.setHours(0,0,0,0),Ji(u)}function Bh(a){return a instanceof Date||typeof a=="object"&&Object.prototype.toString.call(a)==="[object Date]"}function Oh(a){return!(!Bh(a)&&typeof a!="number"||isNaN(+nn(a)))}function Ih(a,o){const s=nn(a,o==null?void 0:o.in),u=s.getMonth();return s.setFullYear(s.getFullYear(),u+1,0),s.setHours(23,59,59,999),s}function Hh(a,o){const[s,u]=Oc(a,o.start,o.end);return{start:s,end:u}}function Uh(a,o){const{start:s,end:u}=Hh(o==null?void 0:o.in,a);let d=+s>+u;const h=d?+s:+u,w=d?u:s;w.setHours(0,0,0,0);let S=1;const L=[];for(;+w<=h;)L.push(An(s,w)),w.setDate(w.getDate()+S),w.setHours(0,0,0,0);return d?L.reverse():L}function Gh(a,o){const s=nn(a,o==null?void 0:o.in);return s.setDate(1),s.setHours(0,0,0,0),s}function Vh(a,o){const s=nn(a,o==null?void 0:o.in);return s.setFullYear(s.getFullYear(),0,1),s.setHours(0,0,0,0),s}const $h={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Kh=(a,o,s)=>{let u;const d=$h[a];return typeof d=="string"?u=d:o===1?u=d.one:u=d.other.replace("{{count}}",o.toString()),s!=null&&s.addSuffix?s.comparison&&s.comparison>0?"in "+u:u+" ago":u};function nl(a){return(o={})=>{const s=o.width?String(o.width):a.defaultWidth;return a.formats[s]||a.formats[a.defaultWidth]}}const Zh={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Jh={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Qh={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Yh={date:nl({formats:Zh,defaultWidth:"full"}),time:nl({formats:Jh,defaultWidth:"full"}),dateTime:nl({formats:Qh,defaultWidth:"full"})},qh={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Xh=(a,o,s,u)=>qh[a];function Wr(a){return(o,s)=>{const u=s!=null&&s.context?String(s.context):"standalone";let d;if(u==="formatting"&&a.formattingValues){const w=a.defaultFormattingWidth||a.defaultWidth,S=s!=null&&s.width?String(s.width):w;d=a.formattingValues[S]||a.formattingValues[w]}else{const w=a.defaultWidth,S=s!=null&&s.width?String(s.width):a.defaultWidth;d=a.values[S]||a.values[w]}const h=a.argumentCallback?a.argumentCallback(o):o;return d[h]}}const em={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},nm={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},tm={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},rm={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},im={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},am={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},om=(a,o)=>{const s=Number(a),u=s%100;if(u>20||u<10)switch(u%10){case 1:return s+"st";case 2:return s+"nd";case 3:return s+"rd"}return s+"th"},lm={ordinalNumber:om,era:Wr({values:em,defaultWidth:"wide"}),quarter:Wr({values:nm,defaultWidth:"wide",argumentCallback:a=>a-1}),month:Wr({values:tm,defaultWidth:"wide"}),day:Wr({values:rm,defaultWidth:"wide"}),dayPeriod:Wr({values:im,defaultWidth:"wide",formattingValues:am,defaultFormattingWidth:"wide"})};function jr(a){return(o,s={})=>{const u=s.width,d=u&&a.matchPatterns[u]||a.matchPatterns[a.defaultMatchWidth],h=o.match(d);if(!h)return null;const w=h[0],S=u&&a.parsePatterns[u]||a.parsePatterns[a.defaultParseWidth],L=Array.isArray(S)?um(S,P=>P.test(w)):sm(S,P=>P.test(w));let F;F=a.valueCallback?a.valueCallback(L):L,F=s.valueCallback?s.valueCallback(F):F;const B=o.slice(w.length);return{value:F,rest:B}}}function sm(a,o){for(const s in a)if(Object.prototype.hasOwnProperty.call(a,s)&&o(a[s]))return s}function um(a,o){for(let s=0;s<a.length;s++)if(o(a[s]))return s}function cm(a){return(o,s={})=>{const u=o.match(a.matchPattern);if(!u)return null;const d=u[0],h=o.match(a.parsePattern);if(!h)return null;let w=a.valueCallback?a.valueCallback(h[0]):h[0];w=s.valueCallback?s.valueCallback(w):w;const S=o.slice(d.length);return{value:w,rest:S}}}const dm=/^(\d+)(th|st|nd|rd)?/i,fm=/\d+/i,hm={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},mm={any:[/^b/i,/^(a|c)/i]},pm={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},gm={any:[/1/i,/2/i,/3/i,/4/i]},ym={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},vm={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},wm={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},km={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Sm={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},xm={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Lm={ordinalNumber:cm({matchPattern:dm,parsePattern:fm,valueCallback:a=>parseInt(a,10)}),era:jr({matchPatterns:hm,defaultMatchWidth:"wide",parsePatterns:mm,defaultParseWidth:"any"}),quarter:jr({matchPatterns:pm,defaultMatchWidth:"wide",parsePatterns:gm,defaultParseWidth:"any",valueCallback:a=>a+1}),month:jr({matchPatterns:ym,defaultMatchWidth:"wide",parsePatterns:vm,defaultParseWidth:"any"}),day:jr({matchPatterns:wm,defaultMatchWidth:"wide",parsePatterns:km,defaultParseWidth:"any"}),dayPeriod:jr({matchPatterns:Sm,defaultMatchWidth:"any",parsePatterns:xm,defaultParseWidth:"any"})},Em={code:"en-US",formatDistance:Kh,formatLong:Yh,formatRelative:Xh,localize:lm,match:Lm,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Mm(a,o){const s=nn(a,o==null?void 0:o.in);return Rh(s,Vh(s))+1}function Cm(a,o){const s=nn(a,o==null?void 0:o.in),u=+Ji(s)-+_h(s);return Math.round(u/_c)+1}function Ic(a,o){var B,P,$,re;const s=nn(a,o==null?void 0:o.in),u=s.getFullYear(),d=Xi(),h=(o==null?void 0:o.firstWeekContainsDate)??((P=(B=o==null?void 0:o.locale)==null?void 0:B.options)==null?void 0:P.firstWeekContainsDate)??d.firstWeekContainsDate??((re=($=d.locale)==null?void 0:$.options)==null?void 0:re.firstWeekContainsDate)??1,w=An((o==null?void 0:o.in)||a,0);w.setFullYear(u+1,0,h),w.setHours(0,0,0,0);const S=Rr(w,o),L=An((o==null?void 0:o.in)||a,0);L.setFullYear(u,0,h),L.setHours(0,0,0,0);const F=Rr(L,o);return+s>=+S?u+1:+s>=+F?u:u-1}function bm(a,o){var S,L,F,B;const s=Xi(),u=(o==null?void 0:o.firstWeekContainsDate)??((L=(S=o==null?void 0:o.locale)==null?void 0:S.options)==null?void 0:L.firstWeekContainsDate)??s.firstWeekContainsDate??((B=(F=s.locale)==null?void 0:F.options)==null?void 0:B.firstWeekContainsDate)??1,d=Ic(a,o),h=An((o==null?void 0:o.in)||a,0);return h.setFullYear(d,0,u),h.setHours(0,0,0,0),Rr(h,o)}function Pm(a,o){const s=nn(a,o==null?void 0:o.in),u=+Rr(s,o)-+bm(s,o);return Math.round(u/_c)+1}function le(a,o){const s=a<0?"-":"",u=Math.abs(a).toString().padStart(o,"0");return s+u}const tt={y(a,o){const s=a.getFullYear(),u=s>0?s:1-s;return le(o==="yy"?u%100:u,o.length)},M(a,o){const s=a.getMonth();return o==="M"?String(s+1):le(s+1,2)},d(a,o){return le(a.getDate(),o.length)},a(a,o){const s=a.getHours()/12>=1?"pm":"am";switch(o){case"a":case"aa":return s.toUpperCase();case"aaa":return s;case"aaaaa":return s[0];case"aaaa":default:return s==="am"?"a.m.":"p.m."}},h(a,o){return le(a.getHours()%12||12,o.length)},H(a,o){return le(a.getHours(),o.length)},m(a,o){return le(a.getMinutes(),o.length)},s(a,o){return le(a.getSeconds(),o.length)},S(a,o){const s=o.length,u=a.getMilliseconds(),d=Math.trunc(u*Math.pow(10,s-3));return le(d,o.length)}},Gt={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},pc={G:function(a,o,s){const u=a.getFullYear()>0?1:0;switch(o){case"G":case"GG":case"GGG":return s.era(u,{width:"abbreviated"});case"GGGGG":return s.era(u,{width:"narrow"});case"GGGG":default:return s.era(u,{width:"wide"})}},y:function(a,o,s){if(o==="yo"){const u=a.getFullYear(),d=u>0?u:1-u;return s.ordinalNumber(d,{unit:"year"})}return tt.y(a,o)},Y:function(a,o,s,u){const d=Ic(a,u),h=d>0?d:1-d;if(o==="YY"){const w=h%100;return le(w,2)}return o==="Yo"?s.ordinalNumber(h,{unit:"year"}):le(h,o.length)},R:function(a,o){const s=Bc(a);return le(s,o.length)},u:function(a,o){const s=a.getFullYear();return le(s,o.length)},Q:function(a,o,s){const u=Math.ceil((a.getMonth()+1)/3);switch(o){case"Q":return String(u);case"QQ":return le(u,2);case"Qo":return s.ordinalNumber(u,{unit:"quarter"});case"QQQ":return s.quarter(u,{width:"abbreviated",context:"formatting"});case"QQQQQ":return s.quarter(u,{width:"narrow",context:"formatting"});case"QQQQ":default:return s.quarter(u,{width:"wide",context:"formatting"})}},q:function(a,o,s){const u=Math.ceil((a.getMonth()+1)/3);switch(o){case"q":return String(u);case"qq":return le(u,2);case"qo":return s.ordinalNumber(u,{unit:"quarter"});case"qqq":return s.quarter(u,{width:"abbreviated",context:"standalone"});case"qqqqq":return s.quarter(u,{width:"narrow",context:"standalone"});case"qqqq":default:return s.quarter(u,{width:"wide",context:"standalone"})}},M:function(a,o,s){const u=a.getMonth();switch(o){case"M":case"MM":return tt.M(a,o);case"Mo":return s.ordinalNumber(u+1,{unit:"month"});case"MMM":return s.month(u,{width:"abbreviated",context:"formatting"});case"MMMMM":return s.month(u,{width:"narrow",context:"formatting"});case"MMMM":default:return s.month(u,{width:"wide",context:"formatting"})}},L:function(a,o,s){const u=a.getMonth();switch(o){case"L":return String(u+1);case"LL":return le(u+1,2);case"Lo":return s.ordinalNumber(u+1,{unit:"month"});case"LLL":return s.month(u,{width:"abbreviated",context:"standalone"});case"LLLLL":return s.month(u,{width:"narrow",context:"standalone"});case"LLLL":default:return s.month(u,{width:"wide",context:"standalone"})}},w:function(a,o,s,u){const d=Pm(a,u);return o==="wo"?s.ordinalNumber(d,{unit:"week"}):le(d,o.length)},I:function(a,o,s){const u=Cm(a);return o==="Io"?s.ordinalNumber(u,{unit:"week"}):le(u,o.length)},d:function(a,o,s){return o==="do"?s.ordinalNumber(a.getDate(),{unit:"date"}):tt.d(a,o)},D:function(a,o,s){const u=Mm(a);return o==="Do"?s.ordinalNumber(u,{unit:"dayOfYear"}):le(u,o.length)},E:function(a,o,s){const u=a.getDay();switch(o){case"E":case"EE":case"EEE":return s.day(u,{width:"abbreviated",context:"formatting"});case"EEEEE":return s.day(u,{width:"narrow",context:"formatting"});case"EEEEEE":return s.day(u,{width:"short",context:"formatting"});case"EEEE":default:return s.day(u,{width:"wide",context:"formatting"})}},e:function(a,o,s,u){const d=a.getDay(),h=(d-u.weekStartsOn+8)%7||7;switch(o){case"e":return String(h);case"ee":return le(h,2);case"eo":return s.ordinalNumber(h,{unit:"day"});case"eee":return s.day(d,{width:"abbreviated",context:"formatting"});case"eeeee":return s.day(d,{width:"narrow",context:"formatting"});case"eeeeee":return s.day(d,{width:"short",context:"formatting"});case"eeee":default:return s.day(d,{width:"wide",context:"formatting"})}},c:function(a,o,s,u){const d=a.getDay(),h=(d-u.weekStartsOn+8)%7||7;switch(o){case"c":return String(h);case"cc":return le(h,o.length);case"co":return s.ordinalNumber(h,{unit:"day"});case"ccc":return s.day(d,{width:"abbreviated",context:"standalone"});case"ccccc":return s.day(d,{width:"narrow",context:"standalone"});case"cccccc":return s.day(d,{width:"short",context:"standalone"});case"cccc":default:return s.day(d,{width:"wide",context:"standalone"})}},i:function(a,o,s){const u=a.getDay(),d=u===0?7:u;switch(o){case"i":return String(d);case"ii":return le(d,o.length);case"io":return s.ordinalNumber(d,{unit:"day"});case"iii":return s.day(u,{width:"abbreviated",context:"formatting"});case"iiiii":return s.day(u,{width:"narrow",context:"formatting"});case"iiiiii":return s.day(u,{width:"short",context:"formatting"});case"iiii":default:return s.day(u,{width:"wide",context:"formatting"})}},a:function(a,o,s){const d=a.getHours()/12>=1?"pm":"am";switch(o){case"a":case"aa":return s.dayPeriod(d,{width:"abbreviated",context:"formatting"});case"aaa":return s.dayPeriod(d,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return s.dayPeriod(d,{width:"narrow",context:"formatting"});case"aaaa":default:return s.dayPeriod(d,{width:"wide",context:"formatting"})}},b:function(a,o,s){const u=a.getHours();let d;switch(u===12?d=Gt.noon:u===0?d=Gt.midnight:d=u/12>=1?"pm":"am",o){case"b":case"bb":return s.dayPeriod(d,{width:"abbreviated",context:"formatting"});case"bbb":return s.dayPeriod(d,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return s.dayPeriod(d,{width:"narrow",context:"formatting"});case"bbbb":default:return s.dayPeriod(d,{width:"wide",context:"formatting"})}},B:function(a,o,s){const u=a.getHours();let d;switch(u>=17?d=Gt.evening:u>=12?d=Gt.afternoon:u>=4?d=Gt.morning:d=Gt.night,o){case"B":case"BB":case"BBB":return s.dayPeriod(d,{width:"abbreviated",context:"formatting"});case"BBBBB":return s.dayPeriod(d,{width:"narrow",context:"formatting"});case"BBBB":default:return s.dayPeriod(d,{width:"wide",context:"formatting"})}},h:function(a,o,s){if(o==="ho"){let u=a.getHours()%12;return u===0&&(u=12),s.ordinalNumber(u,{unit:"hour"})}return tt.h(a,o)},H:function(a,o,s){return o==="Ho"?s.ordinalNumber(a.getHours(),{unit:"hour"}):tt.H(a,o)},K:function(a,o,s){const u=a.getHours()%12;return o==="Ko"?s.ordinalNumber(u,{unit:"hour"}):le(u,o.length)},k:function(a,o,s){let u=a.getHours();return u===0&&(u=24),o==="ko"?s.ordinalNumber(u,{unit:"hour"}):le(u,o.length)},m:function(a,o,s){return o==="mo"?s.ordinalNumber(a.getMinutes(),{unit:"minute"}):tt.m(a,o)},s:function(a,o,s){return o==="so"?s.ordinalNumber(a.getSeconds(),{unit:"second"}):tt.s(a,o)},S:function(a,o){return tt.S(a,o)},X:function(a,o,s){const u=a.getTimezoneOffset();if(u===0)return"Z";switch(o){case"X":return yc(u);case"XXXX":case"XX":return vt(u);case"XXXXX":case"XXX":default:return vt(u,":")}},x:function(a,o,s){const u=a.getTimezoneOffset();switch(o){case"x":return yc(u);case"xxxx":case"xx":return vt(u);case"xxxxx":case"xxx":default:return vt(u,":")}},O:function(a,o,s){const u=a.getTimezoneOffset();switch(o){case"O":case"OO":case"OOO":return"GMT"+gc(u,":");case"OOOO":default:return"GMT"+vt(u,":")}},z:function(a,o,s){const u=a.getTimezoneOffset();switch(o){case"z":case"zz":case"zzz":return"GMT"+gc(u,":");case"zzzz":default:return"GMT"+vt(u,":")}},t:function(a,o,s){const u=Math.trunc(+a/1e3);return le(u,o.length)},T:function(a,o,s){return le(+a,o.length)}};function gc(a,o=""){const s=a>0?"-":"+",u=Math.abs(a),d=Math.trunc(u/60),h=u%60;return h===0?s+String(d):s+String(d)+o+le(h,2)}function yc(a,o){return a%60===0?(a>0?"-":"+")+le(Math.abs(a)/60,2):vt(a,o)}function vt(a,o=""){const s=a>0?"-":"+",u=Math.abs(a),d=le(Math.trunc(u/60),2),h=le(u%60,2);return s+d+o+h}const vc=(a,o)=>{switch(a){case"P":return o.date({width:"short"});case"PP":return o.date({width:"medium"});case"PPP":return o.date({width:"long"});case"PPPP":default:return o.date({width:"full"})}},Hc=(a,o)=>{switch(a){case"p":return o.time({width:"short"});case"pp":return o.time({width:"medium"});case"ppp":return o.time({width:"long"});case"pppp":default:return o.time({width:"full"})}},Tm=(a,o)=>{const s=a.match(/(P+)(p+)?/)||[],u=s[1],d=s[2];if(!d)return vc(a,o);let h;switch(u){case"P":h=o.dateTime({width:"short"});break;case"PP":h=o.dateTime({width:"medium"});break;case"PPP":h=o.dateTime({width:"long"});break;case"PPPP":default:h=o.dateTime({width:"full"});break}return h.replace("{{date}}",vc(u,o)).replace("{{time}}",Hc(d,o))},Nm={p:Hc,P:Tm},Dm=/^D+$/,zm=/^Y+$/,Wm=["D","DD","YY","YYYY"];function jm(a){return Dm.test(a)}function Fm(a){return zm.test(a)}function Am(a,o,s){const u=Rm(a,o,s);if(console.warn(u),Wm.includes(a))throw new RangeError(u)}function Rm(a,o,s){const u=a[0]==="Y"?"years":"days of the month";return`Use \`${a.toLowerCase()}\` instead of \`${a}\` (in \`${o}\`) for formatting ${u} to the input \`${s}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const _m=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Bm=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Om=/^'([^]*?)'?$/,Im=/''/g,Hm=/[a-zA-Z]/;function Qi(a,o,s){var B,P,$,re;const u=Xi(),d=u.locale??Em,h=u.firstWeekContainsDate??((P=(B=u.locale)==null?void 0:B.options)==null?void 0:P.firstWeekContainsDate)??1,w=u.weekStartsOn??((re=($=u.locale)==null?void 0:$.options)==null?void 0:re.weekStartsOn)??0,S=nn(a,s==null?void 0:s.in);if(!Oh(S))throw new RangeError("Invalid time value");let L=o.match(Bm).map(q=>{const G=q[0];if(G==="p"||G==="P"){const V=Nm[G];return V(q,d.formatLong)}return q}).join("").match(_m).map(q=>{if(q==="''")return{isToken:!1,value:"'"};const G=q[0];if(G==="'")return{isToken:!1,value:Um(q)};if(pc[G])return{isToken:!0,value:q};if(G.match(Hm))throw new RangeError("Format string contains an unescaped latin alphabet character `"+G+"`");return{isToken:!1,value:q}});d.localize.preprocessor&&(L=d.localize.preprocessor(S,L));const F={firstWeekContainsDate:h,weekStartsOn:w,locale:d};return L.map(q=>{if(!q.isToken)return q.value;const G=q.value;(Fm(G)||jm(G))&&Am(G,o,String(a));const V=pc[G[0]];return V(S,G,d.localize,F)}).join("")}function Um(a){const o=a.match(Om);return o?o[1].replace(Im,"'"):a}function Uc(a,o){return nn(a,o==null?void 0:o.in).getDay()}const Fn=2026,ol=["January","February","March","April","May","June","July","August","September","October","November","December"],Gm=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];function Vm(a){return Qi(a,"yyyy-MM-dd")}function Ar(a){return Qi(new Date(`${a}T00:00:00`),"EEE")}function $m(a){const o=Gh(new Date(Fn,a-1,1)),s=Ih(o);return Uh({start:o,end:s}).map(u=>({date:Vm(u),dayOfMonth:Number(Qi(u,"d")),dayOfWeek:Qi(u,"EEE"),isWeekend:[0,6].includes(Uc(u))}))}function Km(a){const o=$m(a),s=(Uc(new Date(Fn,a-1,1))+6)%7,u=[...Array.from({length:s},()=>null),...o],d=Math.ceil(u.length/7)*7-u.length;return[...u,...Array.from({length:d},()=>null)]}function tl(a){return`${Fn}-${String(a).padStart(2,"0")}-01`}function ea(a){return ol[a-1]}const Gc=[{id:"new-year",date:"2026-01-01",region:"BOTH",labels:{NA:"New Year",DE:"Neujahr"},type:"seasonal"},{id:"mlk-day",date:"2026-01-19",region:"NA",labels:{NA:"MLK Day",DE:"MLK Day"},type:"cultural"},{id:"valentines",date:"2026-02-14",region:"BOTH",labels:{NA:"Valentine's Day",DE:"Valentinstag"},type:"retail"},{id:"presidents-day",date:"2026-02-16",region:"NA",labels:{NA:"Presidents' Day",DE:"Presidents' Day"},type:"cultural"},{id:"karfreitag",date:"2026-04-03",region:"DE",labels:{NA:"Good Friday",DE:"Karfreitag"},type:"cultural"},{id:"easter",date:"2026-04-05",region:"BOTH",labels:{NA:"Easter",DE:"Ostern"},type:"seasonal"},{id:"tag-der-arbeit",date:"2026-05-01",region:"DE",labels:{NA:"Labor Day",DE:"Tag der Arbeit"},type:"cultural"},{id:"mothers-day",date:"2026-05-10",region:"BOTH",labels:{NA:"Mother's Day",DE:"Muttertag"},type:"retail"},{id:"vatertag",date:"2026-05-14",region:"DE",labels:{NA:"Father's Day",DE:"Vatertag"},type:"cultural"},{id:"pfingsten",date:"2026-05-24",region:"DE",labels:{NA:"Pentecost",DE:"Pfingsten"},type:"cultural"},{id:"memorial-day",date:"2026-05-25",region:"NA",labels:{NA:"Memorial Day",DE:"Memorial Day"},type:"cultural"},{id:"fathers-day",date:"2026-06-21",region:"NA",labels:{NA:"Father's Day",DE:"Father's Day"},type:"retail"},{id:"independence-day",date:"2026-07-04",region:"NA",labels:{NA:"Independence Day",DE:"Independence Day"},type:"cultural"},{id:"labor-day",date:"2026-09-07",region:"NA",labels:{NA:"Labor Day",DE:"Labor Day"},type:"cultural"},{id:"deutsche-einheit",date:"2026-10-03",region:"DE",labels:{NA:"German Unity Day",DE:"Tag der Deutschen Einheit"},type:"cultural"},{id:"halloween",date:"2026-10-31",region:"BOTH",labels:{NA:"Halloween",DE:"Halloween"},type:"seasonal"},{id:"thanksgiving",date:"2026-11-26",region:"NA",labels:{NA:"Thanksgiving",DE:"Thanksgiving"},type:"seasonal"},{id:"black-friday",date:"2026-11-27",region:"NA",labels:{NA:"Black Friday",DE:"Black Friday"},type:"retail"},{id:"christmas",date:"2026-12-25",region:"BOTH",labels:{NA:"Christmas",DE:"Weihnachten"},type:"seasonal"},{id:"silvester",date:"2026-12-31",region:"DE",labels:{NA:"New Year's Eve",DE:"Silvester"},type:"seasonal"}];function Zm(a,o){return Gc.filter(s=>s.date===a&&(s.region===o||s.region==="BOTH"))}function Jm(a,o){const s=`2026-${String(a).padStart(2,"0")}`;return Gc.filter(u=>u.date.startsWith(s)&&(u.region===o||u.region==="BOTH"))}const Qm={NA:"North America",DE:"Germany"},Ym={NA:"border-laifen-cyan/50 bg-laifen-cyan/10",DE:"border-laifen-green/60 bg-laifen-green/15"};function qm({asset:a,onDragStart:o}){return a.startsWith("http")||a.startsWith("data:")?p.jsxs("div",{className:"mt-1 h-14 w-full overflow-hidden rounded-[4px] border border-zinc-200 bg-zinc-100 cursor-grab active:cursor-grabbing group/img",draggable:!0,onDragStart:o,children:[p.jsx("img",{src:a,alt:"",className:"h-full w-full object-cover",onError:u=>{u.target.style.display="none"}}),p.jsx("div",{className:"absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition",children:p.jsx(Eh,{size:14,className:"text-white drop-shadow-md"})})]}):null}function wc({month:a,posts:o,region:s,selectedDate:u,onAddPost:d,onEditPost:h,onSelectDate:w,onDropImage:S,onMovePost:L}){const F=Km(a),B=o.filter(P=>P.region===s).reduce((P,$)=>(P[$.date]=[...P[$.date]??[],$],P),{});return p.jsxs("section",{className:["min-w-[30rem] rounded-[8px] border bg-white/92 p-3 shadow-sm",Ym[s]].join(" "),children:[p.jsxs("header",{className:"mb-3 flex items-center justify-between gap-3",children:[p.jsxs("div",{className:"min-w-0",children:[p.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500",children:s}),p.jsxs("h2",{className:"truncate text-lg font-semibold text-laifen-ink",children:[Qm[s]," · ",ea(a)]})]}),p.jsxs("span",{className:"rounded-full bg-laifen-ink px-2.5 py-1 text-xs font-semibold text-white",children:[o.filter(P=>P.region===s).length," posts"]})]}),p.jsxs("div",{className:"grid grid-cols-7 overflow-hidden rounded-[8px] border border-zinc-200 bg-white",children:[Gm.map(P=>p.jsx("div",{className:"border-b border-zinc-200 bg-laifen-mist px-2 py-2 text-center text-[0.68rem] font-bold uppercase tracking-[0.12em] text-zinc-500",children:P},`${s}-${P}`)),F.map((P,$)=>{if(!P)return p.jsx("div",{className:"min-h-[8rem] border-b border-r border-zinc-100 bg-zinc-50/80 last:border-r-0"},`${s}-empty-${$}`);const re=B[P.date]??[],q=Zm(P.date,s),G=u===P.date,V=re.find(Ne=>Ne.asset);return p.jsx(Xm,{date:P.date,region:s,isWeekend:P.isWeekend,hasHolidays:q.length>0,isSelected:G,dayOfMonth:P.dayOfMonth,dayOfWeek:P.dayOfWeek,holidays:q,dayPosts:re,firstAsset:V==null?void 0:V.asset,firstPostId:V==null?void 0:V.id,onSelectDate:w,onAddPost:d,onEditPost:h,onDropImage:S,onMovePost:L},`${s}-${P.date}`)})]})]})}function Xm({date:a,region:o,isWeekend:s,hasHolidays:u,isSelected:d,dayOfMonth:h,dayOfWeek:w,holidays:S,dayPosts:L,firstAsset:F,firstPostId:B,onSelectDate:P,onAddPost:$,onEditPost:re,onDropImage:q,onMovePost:G}){const[V,Ne]=se.useState(!1),Ke=se.useCallback(K=>{K.preventDefault(),K.stopPropagation(),Ne(!0)},[]),Be=se.useCallback(K=>{K.preventDefault(),K.stopPropagation(),Ne(!1)},[]),be=se.useCallback(K=>{K.preventDefault(),K.stopPropagation(),Ne(!1);const ke=K.dataTransfer.getData("application/laifen-post");if(ke){try{const{postId:Y,fromDate:ue}=JSON.parse(ke);ue!==a&&G(Y,a,o)}catch{}return}const _=K.dataTransfer.files[0];!_||!_.type.startsWith("image/")||q(a,o,_)},[a,o,q,G]),Oe=se.useCallback(K=>{B&&(K.dataTransfer.setData("application/laifen-post",JSON.stringify({postId:B,fromDate:a})),K.dataTransfer.effectAllowed="move")},[B,a]);return p.jsxs("div",{className:["group relative min-h-[8rem] border-b border-r border-zinc-100 p-1.5 outline-none transition last:border-r-0",s?"bg-zinc-50/70":"bg-white",u?"bg-laifen-green/10":"",d?"ring-2 ring-inset ring-laifen-cyan":"",V?"bg-laifen-cyan/30 ring-2 ring-laifen-cyan":""].join(" "),role:"button",tabIndex:0,onClick:()=>P(a),onKeyDown:K=>{(K.key==="Enter"||K.key===" ")&&P(a)},onDragOver:Ke,onDragLeave:Be,onDrop:be,children:[V&&p.jsxs("div",{className:"pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center rounded-[6px] bg-laifen-cyan/20",children:[p.jsx(Fc,{size:20,className:"text-laifen-cyan"}),p.jsx("span",{className:"mt-1 text-[0.62rem] font-bold text-laifen-cyan",children:"Drop here"})]}),p.jsxs("div",{className:"mb-1 flex items-start justify-between gap-1",children:[p.jsxs("div",{children:[p.jsx("span",{className:"text-sm font-bold text-laifen-ink",children:h}),p.jsx("span",{className:"ml-1 text-[0.62rem] font-semibold uppercase text-zinc-400",children:w})]}),p.jsx("button",{"aria-label":`Add ${o} post on ${a}`,className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-[6px] border border-zinc-200 bg-white text-zinc-500 transition hover:border-laifen-cyan hover:text-laifen-ink sm:opacity-0 sm:group-hover:opacity-100",type:"button",onClick:K=>{K.stopPropagation(),$(a,o)},children:p.jsx(Rc,{size:12})})]}),L.length>0&&p.jsx("span",{className:"absolute right-1 top-1 rounded-full bg-laifen-ink px-1.5 py-0.5 text-[0.56rem] font-bold text-white",children:L.length}),S.length>0&&p.jsx("div",{className:"mb-1 flex flex-wrap gap-0.5",children:S.map(K=>p.jsx("span",{className:"max-w-full truncate rounded-full border border-laifen-green/50 bg-white/85 px-1 py-0.5 text-[0.56rem] font-semibold text-laifen-graphite",children:K.labels[o]},K.id))}),F&&p.jsx(qm,{asset:F,onDragStart:Oe}),p.jsx("div",{className:"mt-1 grid gap-0.5",children:L.slice(0,2).map(K=>p.jsx("button",{className:"min-w-0 rounded-[4px] border border-zinc-200 bg-white px-1.5 py-0.5 text-left shadow-sm transition hover:border-laifen-cyan",type:"button",onClick:ke=>{ke.stopPropagation(),re(K)},children:p.jsxs("div",{className:"flex min-w-0 items-center gap-1",children:[p.jsx(Ac,{className:"shrink-0 text-zinc-400",size:10}),p.jsx("span",{className:"truncate text-[0.62rem] font-semibold text-laifen-ink",children:K.focus||K.pillar||"Post"})]})},K.id))}),L.length>2&&p.jsxs("p",{className:"mt-0.5 text-[0.58rem] font-semibold text-zinc-500",children:["+",L.length-2," more"]})]})}function ep(a,o){if(a.match(/^[a-z]+:\/\//i))return a;if(a.match(/^\/\//))return window.location.protocol+a;if(a.match(/^[a-z]+:/i))return a;const s=document.implementation.createHTMLDocument(),u=s.createElement("base"),d=s.createElement("a");return s.head.appendChild(u),s.body.appendChild(d),o&&(u.href=o),d.href=a,d.href}const np=(()=>{let a=0;const o=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(a+=1,`u${o()}${a}`)})();function it(a){const o=[];for(let s=0,u=a.length;s<u;s++)o.push(a[s]);return o}let Vt=null;function Vc(a={}){return Vt||(a.includeStyleProperties?(Vt=a.includeStyleProperties,Vt):(Vt=it(window.getComputedStyle(document.documentElement)),Vt))}function Yi(a,o){const u=(a.ownerDocument.defaultView||window).getComputedStyle(a).getPropertyValue(o);return u?parseFloat(u.replace("px","")):0}function tp(a){const o=Yi(a,"border-left-width"),s=Yi(a,"border-right-width");return a.clientWidth+o+s}function rp(a){const o=Yi(a,"border-top-width"),s=Yi(a,"border-bottom-width");return a.clientHeight+o+s}function $c(a,o={}){const s=o.width||tp(a),u=o.height||rp(a);return{width:s,height:u}}function ip(){let a,o;try{o=process}catch{}const s=o&&o.env?o.env.devicePixelRatio:null;return s&&(a=parseInt(s,10),Number.isNaN(a)&&(a=1)),a||window.devicePixelRatio||1}const sn=16384;function ap(a){(a.width>sn||a.height>sn)&&(a.width>sn&&a.height>sn?a.width>a.height?(a.height*=sn/a.width,a.width=sn):(a.width*=sn/a.height,a.height=sn):a.width>sn?(a.height*=sn/a.width,a.width=sn):(a.width*=sn/a.height,a.height=sn))}function qi(a){return new Promise((o,s)=>{const u=new Image;u.onload=()=>{u.decode().then(()=>{requestAnimationFrame(()=>o(u))})},u.onerror=s,u.crossOrigin="anonymous",u.decoding="async",u.src=a})}async function op(a){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(a)).then(encodeURIComponent).then(o=>`data:image/svg+xml;charset=utf-8,${o}`)}async function lp(a,o,s){const u="http://www.w3.org/2000/svg",d=document.createElementNS(u,"svg"),h=document.createElementNS(u,"foreignObject");return d.setAttribute("width",`${o}`),d.setAttribute("height",`${s}`),d.setAttribute("viewBox",`0 0 ${o} ${s}`),h.setAttribute("width","100%"),h.setAttribute("height","100%"),h.setAttribute("x","0"),h.setAttribute("y","0"),h.setAttribute("externalResourcesRequired","true"),d.appendChild(h),h.appendChild(a),op(d)}const en=(a,o)=>{if(a instanceof o)return!0;const s=Object.getPrototypeOf(a);return s===null?!1:s.constructor.name===o.name||en(s,o)};function sp(a){const o=a.getPropertyValue("content");return`${a.cssText} content: '${o.replace(/'|"/g,"")}';`}function up(a,o){return Vc(o).map(s=>{const u=a.getPropertyValue(s),d=a.getPropertyPriority(s);return`${s}: ${u}${d?" !important":""};`}).join(" ")}function cp(a,o,s,u){const d=`.${a}:${o}`,h=s.cssText?sp(s):up(s,u);return document.createTextNode(`${d}{${h}}`)}function kc(a,o,s,u){const d=window.getComputedStyle(a,s),h=d.getPropertyValue("content");if(h===""||h==="none")return;const w=np();try{o.className=`${o.className} ${w}`}catch{return}const S=document.createElement("style");S.appendChild(cp(w,s,d,u)),o.appendChild(S)}function dp(a,o,s){kc(a,o,":before",s),kc(a,o,":after",s)}const Sc="application/font-woff",xc="image/jpeg",fp={woff:Sc,woff2:Sc,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:xc,jpeg:xc,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function hp(a){const o=/\.([^./]*?)$/g.exec(a);return o?o[1]:""}function ll(a){const o=hp(a).toLowerCase();return fp[o]||""}function mp(a){return a.split(/,/)[1]}function il(a){return a.search(/^(data:)/)!==-1}function pp(a,o){return`data:${o};base64,${a}`}async function Kc(a,o,s){const u=await fetch(a,o);if(u.status===404)throw new Error(`Resource "${u.url}" not found`);const d=await u.blob();return new Promise((h,w)=>{const S=new FileReader;S.onerror=w,S.onloadend=()=>{try{h(s({res:u,result:S.result}))}catch(L){w(L)}},S.readAsDataURL(d)})}const rl={};function gp(a,o,s){let u=a.replace(/\?.*/,"");return s&&(u=a),/ttf|otf|eot|woff2?/i.test(u)&&(u=u.replace(/.*\//,"")),o?`[${o}]${u}`:u}async function sl(a,o,s){const u=gp(a,o,s.includeQueryParams);if(rl[u]!=null)return rl[u];s.cacheBust&&(a+=(/\?/.test(a)?"&":"?")+new Date().getTime());let d;try{const h=await Kc(a,s.fetchRequestInit,({res:w,result:S})=>(o||(o=w.headers.get("Content-Type")||""),mp(S)));d=pp(h,o)}catch(h){d=s.imagePlaceholder||"";let w=`Failed to fetch resource: ${a}`;h&&(w=typeof h=="string"?h:h.message),w&&console.warn(w)}return rl[u]=d,d}async function yp(a){const o=a.toDataURL();return o==="data:,"?a.cloneNode(!1):qi(o)}async function vp(a,o){if(a.currentSrc){const h=document.createElement("canvas"),w=h.getContext("2d");h.width=a.clientWidth,h.height=a.clientHeight,w==null||w.drawImage(a,0,0,h.width,h.height);const S=h.toDataURL();return qi(S)}const s=a.poster,u=ll(s),d=await sl(s,u,o);return qi(d)}async function wp(a,o){var s;try{if(!((s=a==null?void 0:a.contentDocument)===null||s===void 0)&&s.body)return await na(a.contentDocument.body,o,!0)}catch{}return a.cloneNode(!1)}async function kp(a,o){return en(a,HTMLCanvasElement)?yp(a):en(a,HTMLVideoElement)?vp(a,o):en(a,HTMLIFrameElement)?wp(a,o):a.cloneNode(Zc(a))}const Sp=a=>a.tagName!=null&&a.tagName.toUpperCase()==="SLOT",Zc=a=>a.tagName!=null&&a.tagName.toUpperCase()==="SVG";async function xp(a,o,s){var u,d;if(Zc(o))return o;let h=[];return Sp(a)&&a.assignedNodes?h=it(a.assignedNodes()):en(a,HTMLIFrameElement)&&(!((u=a.contentDocument)===null||u===void 0)&&u.body)?h=it(a.contentDocument.body.childNodes):h=it(((d=a.shadowRoot)!==null&&d!==void 0?d:a).childNodes),h.length===0||en(a,HTMLVideoElement)||await h.reduce((w,S)=>w.then(()=>na(S,s)).then(L=>{L&&o.appendChild(L)}),Promise.resolve()),o}function Lp(a,o,s){const u=o.style;if(!u)return;const d=window.getComputedStyle(a);d.cssText?(u.cssText=d.cssText,u.transformOrigin=d.transformOrigin):Vc(s).forEach(h=>{let w=d.getPropertyValue(h);h==="font-size"&&w.endsWith("px")&&(w=`${Math.floor(parseFloat(w.substring(0,w.length-2)))-.1}px`),en(a,HTMLIFrameElement)&&h==="display"&&w==="inline"&&(w="block"),h==="d"&&o.getAttribute("d")&&(w=`path(${o.getAttribute("d")})`),u.setProperty(h,w,d.getPropertyPriority(h))})}function Ep(a,o){en(a,HTMLTextAreaElement)&&(o.innerHTML=a.value),en(a,HTMLInputElement)&&o.setAttribute("value",a.value)}function Mp(a,o){if(en(a,HTMLSelectElement)){const u=Array.from(o.children).find(d=>a.value===d.getAttribute("value"));u&&u.setAttribute("selected","")}}function Cp(a,o,s){return en(o,Element)&&(Lp(a,o,s),dp(a,o,s),Ep(a,o),Mp(a,o)),o}async function bp(a,o){const s=a.querySelectorAll?a.querySelectorAll("use"):[];if(s.length===0)return a;const u={};for(let h=0;h<s.length;h++){const S=s[h].getAttribute("xlink:href");if(S){const L=a.querySelector(S),F=document.querySelector(S);!L&&F&&!u[S]&&(u[S]=await na(F,o,!0))}}const d=Object.values(u);if(d.length){const h="http://www.w3.org/1999/xhtml",w=document.createElementNS(h,"svg");w.setAttribute("xmlns",h),w.style.position="absolute",w.style.width="0",w.style.height="0",w.style.overflow="hidden",w.style.display="none";const S=document.createElementNS(h,"defs");w.appendChild(S);for(let L=0;L<d.length;L++)S.appendChild(d[L]);a.appendChild(w)}return a}async function na(a,o,s){return!s&&o.filter&&!o.filter(a)?null:Promise.resolve(a).then(u=>kp(u,o)).then(u=>xp(a,u,o)).then(u=>Cp(a,u,o)).then(u=>bp(u,o))}const Jc=/url\((['"]?)([^'"]+?)\1\)/g,Pp=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,Tp=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function Np(a){const o=a.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${o})(['"]?\\))`,"g")}function Dp(a){const o=[];return a.replace(Jc,(s,u,d)=>(o.push(d),s)),o.filter(s=>!il(s))}async function zp(a,o,s,u,d){try{const h=s?ep(o,s):o,w=ll(o);let S;return d||(S=await sl(h,w,u)),a.replace(Np(o),`$1${S}$3`)}catch{}return a}function Wp(a,{preferredFontFormat:o}){return o?a.replace(Tp,s=>{for(;;){const[u,,d]=Pp.exec(s)||[];if(!d)return"";if(d===o)return`src: ${u};`}}):a}function Qc(a){return a.search(Jc)!==-1}async function Yc(a,o,s){if(!Qc(a))return a;const u=Wp(a,s);return Dp(u).reduce((h,w)=>h.then(S=>zp(S,w,o,s)),Promise.resolve(u))}async function $t(a,o,s){var u;const d=(u=o.style)===null||u===void 0?void 0:u.getPropertyValue(a);if(d){const h=await Yc(d,null,s);return o.style.setProperty(a,h,o.style.getPropertyPriority(a)),!0}return!1}async function jp(a,o){await $t("background",a,o)||await $t("background-image",a,o),await $t("mask",a,o)||await $t("-webkit-mask",a,o)||await $t("mask-image",a,o)||await $t("-webkit-mask-image",a,o)}async function Fp(a,o){const s=en(a,HTMLImageElement);if(!(s&&!il(a.src))&&!(en(a,SVGImageElement)&&!il(a.href.baseVal)))return;const u=s?a.src:a.href.baseVal,d=await sl(u,ll(u),o);await new Promise((h,w)=>{a.onload=h,a.onerror=o.onImageErrorHandler?(...L)=>{try{h(o.onImageErrorHandler(...L))}catch(F){w(F)}}:w;const S=a;S.decode&&(S.decode=h),S.loading==="lazy"&&(S.loading="eager"),s?(a.srcset="",a.src=d):a.href.baseVal=d})}async function Ap(a,o){const u=it(a.childNodes).map(d=>qc(d,o));await Promise.all(u).then(()=>a)}async function qc(a,o){en(a,Element)&&(await jp(a,o),await Fp(a,o),await Ap(a,o))}function Rp(a,o){const{style:s}=a;o.backgroundColor&&(s.backgroundColor=o.backgroundColor),o.width&&(s.width=`${o.width}px`),o.height&&(s.height=`${o.height}px`);const u=o.style;return u!=null&&Object.keys(u).forEach(d=>{s[d]=u[d]}),a}const Lc={};async function Ec(a){let o=Lc[a];if(o!=null)return o;const u=await(await fetch(a)).text();return o={url:a,cssText:u},Lc[a]=o,o}async function Mc(a,o){let s=a.cssText;const u=/url\(["']?([^"')]+)["']?\)/g,h=(s.match(/url\([^)]+\)/g)||[]).map(async w=>{let S=w.replace(u,"$1");return S.startsWith("https://")||(S=new URL(S,a.url).href),Kc(S,o.fetchRequestInit,({result:L})=>(s=s.replace(w,`url(${L})`),[w,L]))});return Promise.all(h).then(()=>s)}function Cc(a){if(a==null)return[];const o=[],s=/(\/\*[\s\S]*?\*\/)/gi;let u=a.replace(s,"");const d=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const L=d.exec(u);if(L===null)break;o.push(L[0])}u=u.replace(d,"");const h=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,w="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",S=new RegExp(w,"gi");for(;;){let L=h.exec(u);if(L===null){if(L=S.exec(u),L===null)break;h.lastIndex=S.lastIndex}else S.lastIndex=h.lastIndex;o.push(L[0])}return o}async function _p(a,o){const s=[],u=[];return a.forEach(d=>{if("cssRules"in d)try{it(d.cssRules||[]).forEach((h,w)=>{if(h.type===CSSRule.IMPORT_RULE){let S=w+1;const L=h.href,F=Ec(L).then(B=>Mc(B,o)).then(B=>Cc(B).forEach(P=>{try{d.insertRule(P,P.startsWith("@import")?S+=1:d.cssRules.length)}catch($){console.error("Error inserting rule from remote css",{rule:P,error:$})}})).catch(B=>{console.error("Error loading remote css",B.toString())});u.push(F)}})}catch(h){const w=a.find(S=>S.href==null)||document.styleSheets[0];d.href!=null&&u.push(Ec(d.href).then(S=>Mc(S,o)).then(S=>Cc(S).forEach(L=>{w.insertRule(L,w.cssRules.length)})).catch(S=>{console.error("Error loading remote stylesheet",S)})),console.error("Error inlining remote css file",h)}}),Promise.all(u).then(()=>(a.forEach(d=>{if("cssRules"in d)try{it(d.cssRules||[]).forEach(h=>{s.push(h)})}catch(h){console.error(`Error while reading CSS rules from ${d.href}`,h)}}),s))}function Bp(a){return a.filter(o=>o.type===CSSRule.FONT_FACE_RULE).filter(o=>Qc(o.style.getPropertyValue("src")))}async function Op(a,o){if(a.ownerDocument==null)throw new Error("Provided element is not within a Document");const s=it(a.ownerDocument.styleSheets),u=await _p(s,o);return Bp(u)}function Xc(a){return a.trim().replace(/["']/g,"")}function Ip(a){const o=new Set;function s(u){(u.style.fontFamily||getComputedStyle(u).fontFamily).split(",").forEach(h=>{o.add(Xc(h))}),Array.from(u.children).forEach(h=>{h instanceof HTMLElement&&s(h)})}return s(a),o}async function Hp(a,o){const s=await Op(a,o),u=Ip(a);return(await Promise.all(s.filter(h=>u.has(Xc(h.style.fontFamily))).map(h=>{const w=h.parentStyleSheet?h.parentStyleSheet.href:null;return Yc(h.cssText,w,o)}))).join(`
`)}async function Up(a,o){const s=o.fontEmbedCSS!=null?o.fontEmbedCSS:o.skipFonts?null:await Hp(a,o);if(s){const u=document.createElement("style"),d=document.createTextNode(s);u.appendChild(d),a.firstChild?a.insertBefore(u,a.firstChild):a.appendChild(u)}}async function Gp(a,o={}){const{width:s,height:u}=$c(a,o),d=await na(a,o,!0);return await Up(d,o),await qc(d,o),Rp(d,o),await lp(d,s,u)}async function Vp(a,o={}){const{width:s,height:u}=$c(a,o),d=await Gp(a,o),h=await qi(d),w=document.createElement("canvas"),S=w.getContext("2d"),L=o.pixelRatio||ip(),F=o.canvasWidth||s,B=o.canvasHeight||u;return w.width=F*L,w.height=B*L,o.skipAutoScale||ap(w),w.style.width=`${F}`,w.style.height=`${B}`,o.backgroundColor&&(S.fillStyle=o.backgroundColor,S.fillRect(0,0,w.width,w.height)),S.drawImage(h,0,0,w.width,w.height),w}async function $p(a,o={}){return(await Vp(a,o)).toDataURL()}function Kp({month:a,targetRef:o}){const[s,u]=se.useState(!1),d=async()=>{const h=o.current;if(h){u(!0);try{const w=await $p(h,{backgroundColor:"#f5f7f5",cacheBust:!0,canvasHeight:1350,canvasWidth:1080,height:1350,pixelRatio:1,style:{height:"1350px",width:"1080px"},width:1080}),S=document.createElement("a");S.download=`laifen-social-calendar-2026-${String(a).padStart(2,"0")}-${ea(a).toLowerCase()}.png`,S.href=w,S.click()}finally{u(!1)}}};return p.jsxs("button",{className:"inline-flex items-center justify-center gap-2 rounded-[8px] bg-laifen-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-black disabled:bg-zinc-400",disabled:s,type:"button",onClick:d,children:[s?p.jsx(Ph,{className:"animate-spin",size:16}):p.jsx(xh,{size:16}),"PNG"]})}const Zp=`,,1. CES 2. Wave Pro 3. Mini Launch,,,,,,,,1. CES 2. Wave Pro,,,,,
Date,Day,Pillar,Focus,Asset,Post Copy,Hashtags ,Content Type,Notes,FOR DE→,Pillar,Focus,Asset,Post Copy,Hashtags ,Content Type
01 Jan,Thu,Community,"Martin Sati x Laifen
Competition",,"A new year, a new rhythm — swipe to choose your favorite 🎨

We collaborated with artist Martin Sati to explore color as frequency —
where technology measures movement, and emotion gives it meaning,
through Laifen Wave Special.

Which color speaks to you?
👇 Comment the number that resonates with your rhythm (#1, #2…).
🎁 Two winners will be randomly selected to receive a Laifen Wave Special. 
*Ends January 9 at 10:00 PM (ET). Open to US, CA, EU & UK residents only.

See these creations live at Laifen CES Las Vegas 2026.
📍 South Hall 1 — Booth 30225",#MartinSati #Laifen #LaifenCES #LaifenWave #LaifenToothbrush #CES2026 #CES,Carousel,,,Community,"Martin Sati x Laifen
Competition",,"Gemeinsam mit dem Künstler Martin Sati haben wir Farbe als Frequenz erforscht —
wo Technologie Bewegung misst
und Emotion ihr Bedeutung verleiht —
mit der Laifen Wave Special.",#ElektrischeZahnbürste #LaifenZahnbürste #Laifen,
02 Jan,Fri,Community,"Martin Sati x Laifen
Competition",,"A new year, a new rhythm — swipe to choose your favorite 🎨

We collaborated with artist Martin Sati to explore color in motion —
where air, rotation, and flow form an invisible choreography,
through Laifen SE / SE2.

Which color speaks to you?
👇 Comment the number that resonates with you (#1, #2…).

🎁 Two winners will be randomly selected to receive a Laifen SE2.
*Ends January 9 at 10:00 PM (ET). Open to US, CA, EU & UK residents only.

See these creations live at Laifen CES Las Vegas 2026.
📍 South Hall 1 — Booth 30225",#MartinSati #Laifen #LaifenCES #LaifenHairdryer #CES2026 #CES,Carousel,,,,,,,,
05 Jan,Mon,Brand,CES 空镜,,"Life Enhanced with Laifen
Now at CES 2026

South Hall 1 — Booth 30225
Jan. 6–9, 2026",#Laifen #LaifenCES #CES2026 #LaifenWave #LaifenToothbrush #LaifenHairdryer #LaifenElectricShaver,Carousel,,,,,,,,
05 Jan,Mon,Brand,CES 先导片,,"Laifen CES 2026 · Day 3

With CES 2026 approaching its close, Booth 30225 remains lively, with growing curiosity around what’s new.",#Laifen #LaifenCES #CES2026,Carousel,,,Brand,CES 先导片,Laifen CES 2026 | Leben. Verbessert mit Laifen,,,
06 Jan,Tue,Brand,CES Pepcom,,"Laifen at Pepcom Media Event | CES 2026

We’re bringing what’s next to Pepcom.
Take a closer look at Laifen’s upcoming lineup —
✨ Wave Pro Electric Toothbrush (coming soon)
🪒 T1 Pro & P3 Pro Electric Shavers
💨 A new-generation hair dryer, arriving soon

From everyday care to what’s coming next, see how life is enhanced with Laifen.

📌 South Hall 1 — Booth 30225
🗓️ Jan. 6–9, Las Vegas",#Laifen #LaifenCES #CES2026 #Pepcom,Carousel,,,,,,,,
07 Jan,Wed,Brand,CES Day 1 图片 Recap,,"Day 1 at CES with Laifen

New products, familiar favorites,
and what’s coming next.

From a first look at Wave Pro,
to our electric shavers,
and an early preview of the Swift 4 Nourishing High-Speed Hair Dryer.

More to come.

📍 South Hall 1 — Booth 30225
⏱️ Jan. 6–9, 2026",#Laifen #LaifenCES #CES2026 #LaifenWave #LaifenToothbrush #LaifenHairdryer #LaifenElectricShaver,Carousel,,,,,,,,
08 Jan,Thu,Brand,CES Day 1 视频 Recap,,"As CES 2026 kicked off,
our hair styling, grooming, and oral care zones opened with hands-on experiences and first looks at our latest products.",#Laifen #LaifenCES #CES2026 #LaifenWave #LaifenToothbrush #LaifenHairdryer #LaifenElectricShaver,Carousel,,,,,,,,
08 Jan,Thu,Brand,CES,,"CES Day 2 at Laifen

Our hair dryer experience zone quickly became a crowd favorite.
Visitors stepped in to feel the powerful airflow in slow motion — watching every strand move and settle up close.

From hands-on styling to grooming and oral care, Wave Pro electric toothbrushes drew extra attention, alongside our electric shavers.

South Hall 1 — Booth 30225
Jan. 6–9, 2026",#Laifen #LaifenCES #CES2026 #LaifenWave #LaifenToothbrush #LaifenHairdryer #LaifenElectricShaver,Carousel,,,,,,,,
09 Jan,Fri,Brand,CES,,"Laifen CES 2026 · Day 3

With CES 2026 approaching its close, Booth 30225 remains lively, with growing curiosity around what’s new.",#Laifen #LaifenCES #CES2026 #LaifenWave #LaifenToothbrush #LaifenHairdryer #LaifenElectricShaver,Carousel,,,,,,,,
09 Jan,Fri,Brand,CES FINAL RECAP,,"CES 2026 with Laifen | Final Recap

CES 2026 has come to an end — and what a week it’s been.

From hands-on moments across the booth to conversations beyond the products,
we shared what’s next for Laifen across hair care, grooming, and oral care.

From the upcoming Wave Pro electric toothbrushes to our T1 & P3 Pro electric shavers, along with a first look at the Laifen Swift 4 Hair Dryer.

Thank you to everyone who stopped by, shared feedback, and spent time with us at CES.

We’ll see you again next year.",#Laifen #LaifenCES #CES2026 #LaifenWave #LaifenToothbrush #LaifenHairdryer #LaifenElectricShaver #LaifenSwift,Carousel,,,,,,,,
10 Jan,Sat,Brand,CES媒体获奖,,"CES 2026: Laifen Wave Pro Recognized by Leading Global Media

As CES 2026 comes to an end, Laifen Wave Pro received broad recognition from some of the world’s most influential tech and consumer media across North America and Europe, earning multiple editor-selected honors throughout the show.

Media Recognitions Include:
Reviewed Awards: CES 2026
The Shortcut: Best of CES
CES Picks Awards: TWICE Picks Winner
Trusted Reviews: Best in Show
Trusted Reviews: Innovation Award
Netzwelt: Innovation Awards 2026
Gadget Flow: Best of CES
PhoneArena: Best of CES
Smartzone: Best of CES 2026

We sincerely thank the editors, reviewers, partners, and visitors who engaged with Laifen Wave Pro in Las Vegas and contributed to this recognition.",#Laifen #LaifenCES #CES2026 #LaifenWave #CES,Static,,,,,,,,
13 Jan,Tue,Brand,Wave Pro TVC,,"Meet the Laifen Wave Pro Electric Toothbrush — designed for those who want a pro-level, smart, and truly effortless brushing experience, Laifen Wave Pro brings professional performance into your everyday routine.

✔Pro-Level Clean: 60° oscillation + 66,000 vibrations per minute. Faster, wider, more efficient cleaning.
✔Comprehensive Cleaning with Gentle Gum Protection: Advanced brush head design reaches deeper while staying soft on gums.
✔Smart Pressure Protection: Real-time force sensing adjusts power to protect gums and enamel.
✔Dual Modes. Precise Control: Daily Clean and Deep Clean. Three intensity levels each.
✔Up to 70 Days Battery Life: One charge. Wireless convenience. Go anywhere.

Learn more and subscribe now: xxxx",#Laifen #LaifenWave #LaifenToothbrush  #Toothbrush,Reel,,,,,,,,
15 Jan,Thu,Brand,Mini- TVC,,"Meet the Laifen Mini High-Speed Hair Dryer — Mini But Mighty
Powered by a 110,000 RPM high-speed motor and an ultra-compact, lightweight design, Laifen Mini delivers fast, efficient drying without heat damage in a truly portable form.

✔ Ultra-Compact Design — 33% smaller and 27% lighter (299g) than previous models
✔ Ultra-Fast Drying — 110,000 RPM motor delivers 19 m/s airflow, drying hair in just 3 minutes
✔ No Heat Damage — Smart temperature control (100x/s) paired with 200M negative ions
✔ Premium Look & Comfortable Grip — UV tactile paint gives the Mini a refined, fine-grained feel
✔ Child-Friendly — The all-new Child Mode is gentle on finer hair, offering a safer way to dry children’s hair

Learn more: https://bit.ly/m/laifenshop",#Laifen #LaifenHairdryer #LaifenMini #Travel #MyLightThings #HairDryer,Reel,,,,,,,,
16 Jan,Fri,Brand,Mini,,"Laifen Mini — a lightweight, compact high-speed hair dryer

Laifen Mini combines an ultra-compact, lightweight design with high-speed drying performance, smart temperature control, and carefully considered features—built for reliable, everyday use wherever you go.

Learn more via the link in bio.",#Laifen #LaifenHairdryer #LaifenMini #Travel #MyLightThings,Carousel,,,Brand,Wave Pro TVC,,"Lerne die Laifen Wave Pro Zahnbürste kennen — entwickelt für alle, die sich eine professionelle, smarte und mühelos effektive Zahnreinigung wünschen.
Die Laifen Wave Pro bringt leistungsstarke Profi-Technologie direkt in deine tägliche Routine.

✔ Professionelle Reinigung: 60°-Schwingungen + 66.000 Vibrationen pro Minute – schneller, gründlicher und effizienter.
✔ Umfassende Reinigung mit sanftem Zahnfleischschutz: Das fortschrittliche Bürstenkopfdesign erreicht auch tieferliegende Bereiche und bleibt dabei besonders schonend zum Zahnfleisch.
✔ Intelligenter Drucksensor: Erkennt den Anpressdruck in Echtzeit und passt die Leistung automatisch an – zum Schutz von Zahnfleisch und Zahnschmelz.
✔ Zwei Modi. Präzise Kontrolle: Daily Clean und Deep Clean, jeweils mit drei Intensitätsstufen.
✔ Bis zu 70 Tage Akkulaufzeit: Einmal laden, kabellos nutzen – ideal für unterwegs.

👉 Jetzt mehr erfahren & abonnieren: bit.ly/4puGFpA

#Laifen #LaifenWave #LaifenZahnbürste #Zahnbürste",,
17 Jan,Sat,Brand,Mini,,"Unbelievably light. Incredibly compact.

Laifen Mini weighs just 299 g—lighter than a bottle of water—and is 33% smaller than the Laifen SE.
Designed for easy carrying, it fits easily into carry-ons, gym bags, and handbags.

Learn more via the link in bio.",#Laifen #LaifenHairdryer #LaifenMini #Travel #MyLightThings,Carousel,,,,,,,,
18 Jan,Sun,Brand,Mini,,"Small package. Powerful performance.

Laifen Mini delivers 19 m/s airflow powered by a 110,000 RPM motor, proving that compact size doesn’t mean compromised drying power.
With a 5 mm slimmer handle, it’s designed for a more comfortable, secure grip—making everyday use feel lighter, easier, and more controlled.

Learn more via the link in bio.",#Laifen #LaifenHairdryer #LaifenMini #Travel #MyLightThings,Carousel,,,,,,,,
19 Jan,Mon,Education,Mini,,"Gentle care, made simple.

Laifen Mini features an all-new Child Mode designed for gentle, controlled drying.
With lower temperature settings (38°C / 48°C), it helps reduce heat exposure while maintaining consistent airflow. Simple button controls and a clear LED indicator make it easy for parents to activate and monitor—so everyday drying feels safer and more reassuring.

Learn more via the link in bio.",#Laifen #LaifenHairdryer #LaifenMini #Travel #MyLightThings,Carousel,,,,,,,,
20 Jan,Tue,Brand,,,,,,,,,,,,,
21 Jan,Wed,Inspiration,Mini,,"Wherever you go, style follows.

With its compact size and lightweight design, Laifen Mini fits effortlessly into your routine—whether you’re heading to work, the gym, or out for the day. Easy to carry, easy to use, and designed to move with you.

Learn more via the link in bio.",#Laifen #LaifenHairdryer #LaifenMini #Travel #MyLightThings,Carousel,,,,,,,,
22 Jan,Thu,Inspiration,,,,,,,,,,,,,
23 Jan,Fri,Inspiration,,,,,,,,,,,,,
24 Jan,Sat,Brand,,,,,,,,,,,,,
25 Jan,Sun,Brand,Mini,,Power that fits your style.,#Laifen #LaifenHairdryer #LaifenMini #Travel #MyLightThings,Carousel,,,,,,,,
26 Jan,Mon,Brand,Mini,,Ready when you are.,#Laifen #LaifenHairdryer #LaifenMini #Travel #MyLightThings,Carousel,,,,,,,,
28 Jan,Wed,Brand,Mini,,"Pack it.
Bring it.

Laifen Mini fits easily into your everyday bag.",#Laifen #LaifenHairdryer #LaifenMini #Travel #MyLightThings,Carousel,,,,,,,,
29 Jan,Thu,Brand,Mini,,Laifen Mini Unboxing — What’s inside,#Laifen #LaifenHairdryer #LaifenMini #Travel #MyLightThings,Reel,,,,,,,,
30 Jan,Fri,Community,"Wave Pro
体验官招募",,"Be one of the First to try Laifen Wave Pro – Apply now for a chance to become a Laifen Toothbrush Specialist.

The upcoming Laifen Wave Pro Electric Toothbrush is designed for those who want a pro-level, smart, and truly effortless brushing experience. As we prepare for its launch, we’re inviting 10 Laifen fans to join us as Toothbrush Specialists, try the Wave Pro, and share their experiences with the community.

How to Apply:
1. Like this post and follow @laifen_tech.
2. Complete the application via the bio link.

Application Deadline: Feb 10, 10:00 PM ET

📦 What You’ll Receive: One Laifen Wave Pro Electric Toothbrush

📣 Winners Announcement:

Our team will review all applications and contact selected participants via the email provided after the application closes. Please keep an eye on your inbox.

If you enjoy the experience, you’re welcome to share your thoughts within the community.

It’s about real-life use, honest opinions, and helping us improve what comes next.

#LaifenWave #Laifen #Toothbrush",,,,,Community,"Wave Pro
体验官招募",,"Sei unter den Ersten, die die Laifen Wave Pro ausprobieren – bewirb dich jetzt als Laifen Toothbrush Specialist.

Die kommende Laifen Wave Pro Zahnbürste wurde für alle entwickelt, die sich ein professionelles, smartes und wirklich müheloses Putzerlebnis wünschen.

Zum bevorstehenden Launch laden wir 10 Laifen Fans ein, als Toothbrush Specialists die Wave Pro zu testen und ihre Nutzungserfahrungen mit der Community zu teilen.

🎯 So kannst du teilnehmen:
1. Like diesen Beitrag und folge @Laifen_de.
2. Fülle das Bewerbungsformular über den Link in der Bio aus.

📅 Bewerbungsschluss: 11. Februar, 04:00 Uhr (MEZ)

📦 Das erwartet dich:
Eine Laifen Wave Pro Zahnbürste

📣 Bekanntgabe der Teilnehmenden:

Unser Team wird alle Bewerbungen prüfen und die ausgewählten Teilnehmenden nach Ablauf der
Bewerbungsfrist über die angegebene E-Mail-Adresse kontaktieren. Bitte behalte dein Postfach im Blick.",#LaifenWave #Laifen,
01 Feb,Sun,Brand,Banner更换,,,,,,,Brand,情人节KV,,"Laifen sorgt. Liebe bleibt.

Spare bis zu 38 % zum Valentinstag –
👉 Link in der Bio @laifen_de",#Laifen #Valentinstag #ValentinesDay,
01 Feb,Sun,Brand,情人节视频 #1,,"Laifen Cares, Love Endures.
Save up to 30% off this Valentine’s Day: https://bit.ly/m/laifenshop",#laifen #valentines #valentinesday,,,,,,,,,
01 Feb,Sun,Brand,情人节视频 #2,,"This Valentine’s Day, just for you | Laifen
Save up to 30% off this Valentine’s Day: https://bit.ly/m/laifenshop",#laifen #valentines #valentinesday,,,,,,,,,
02 Feb,Mon,Brand,"情人节视频 #3
混剪视频",,,#laifen #valentines #valentinesday,,,,,,,,,
02 Feb,Mon,Brand,V Day 营销海报,,混剪视频,,,,,,,,,,
03 Feb,Tue,Community,,,,,,,,,,,,,
04 Feb,Wed,Community,"
V Day 社媒互动",,"Who’s your Valentine this year? 💕
Comment below and tell us 👇",#laifen #valentines #valentinesday #valentine,,,,Brand,情人节互动,,"Welches Geschenk passt zum Valentinstag am besten? 

💝 Schreib uns deine Wahl in die Kommentare 👇",#laifen #valentinstag #liebe,
04 Feb,Wed,Community,"
V Day 导购",,"This Valentine’s Day, give a gift they’ll love
Save up to 30% off this Valentine’s Day: https://bit.ly/m/laifenshop",#laifen #valentines #valentinesday #valentine,,,,,,,,,
05 Feb,Thu,,,,,,,,,Brand,情人节产品,,"Zum Valentinstag: Ein Geschenk, das jeden Tag Freude macht.
Save up to 38% for Valentine's Day: https://bit.ly/m/laifende",#laifen #valentines #valentinesday #valentine,
06 Feb,Fri,Community,V  Day Giveaway,,"Laifen Cares, Love Endures — Valentine’s Giveaway
Love isn’t just about one day.
It’s built through care — again and again.
This Valentine’s Day, Laifen wants to help you care for the people who matter most —
by helping you turn care into a gift.
How to Enter:
1️⃣ Follow Laifentech 
2️⃣ Like this post.
3️⃣ Comment below:
  • Who you’d gift it to
  • Why you choose them (one sentence)
✨ Bonus: Share this post to your Story and tag @Laifentech for an extra chance.
Giveaway ends: Feb. 14, 10:00 AM (ET)
🎁 We’ll select 3 winners to receive a Laifen gift sent to the person you care about.
Winners will be contacted via DM from our official account
Open to U.S., EU, and UK residents only. This giveaway is in no way sponsored, endorsed, administered by, or associated with Instagram.",#laifen #valentines #valentinesday #valentine,,,,,,,,,
09 Feb,Mon,,"KOL Repost
 (Do Not Repost)",,"Sometimes love looks like the little things. 🤍
Bath time gets busy.
So he stepped in — drying her hair, taking care of both mom and daughter.
Four modes.
Cool, warm, hot, or cycle mode — comfort for everyone in the family.
Because routines are easier when you share them.
Video by @sergey.be.be
🔗 Up to 30% OFF for Valentine’s: https://bit.ly/m/laifenshop",#laifen #valentines #valentinesday #valentine,,,,Brand,情人节Giveaway,,"Laifen sorgt, Liebe besteht. — Valentinstags-Gewinnspiel
Liebe ist nicht nur ein Tag.
Sie entsteht durch Fürsorge — jeden Tag, immer wieder.
Zum Valentinstag möchte Laifen dir helfen, dich um die Menschen zu kümmern,
die dir am wichtigsten sind — indem wir deine Fürsorge in ein Geschenk verwandeln.
So nimmst du teil:
 1️⃣ Folge Laifen Deutschland 
 2️⃣ Like diesen Beitrag
 3️⃣ Kommentiere unten:
   • Für wen das Geschenk ist
   • Warum diese Person genau dieses Laifen-Produkt braucht
(ein Satz, z. B. im Alltag, für Pflege, Komfort oder Zeitersparnis)
 ✨ Extra Chance: Teile diesen Beitrag in deiner Story und markiere @Laifen_de
Teilnahmeschluss: 14. Februar, 16:00 Uhr (MEZ)
🎁 Ein Gewinner erhält ein Laifen-Produkt,
das von Laifen direkt an die von ihm gewählte Person versendet wird.
Der Gewinner wird per Direktnachricht von unserem offiziellen Account kontaktiert,
um die Versandinformationen für den Geschenkversand zu bestätigen.
Teilnahmeberechtigt sind ausschließlich Personen mit Wohnsitz in Deutschland.",#Laifen #LoveEndures #Valentines #Giveaway,
11 Feb,Wed,,"KOL Repost
 (Do Not Repost)",,"Valentine’s is for family, too. 💝
The Laifen SE2 hair dryer —
high-speed drying made for everyday love.
Valentine’s Sale — Up to 30% OFF: https://bit.ly/m/laifenshop
🎥 Video by: @laniechurco",#laifen #valentines #valentinesday #valentine #Hairdryer,,,,,,,,,
15 Feb,Sun,Brand,Wave Pro 预热物料一,,"Magnetic Wireless Charging.
Just place it. Charging starts.

Keeps you powered without hassle.

Laifen Wave Pro Coming Soon",#Laifen #ElectricToothbrush #LaifenWave #WaveMotion,,,,,,,,,
17 Feb,Tue,Brand,Wave Pro 预热物料二,,"Smart Pressure Sensor
Instant Pressure Reminder

Ensures every brush feels just right.

Laifen Wave Pro Coming Soon",#Laifen #ElectricToothbrush #LaifenWave #WaveMotion,,,,,,,,,
19 Feb,Thu,Brand,Wave Pro 预热物料三,,"Multifunctional Bristle Design
Full Clean, Even Interdental Areas

Ensures every brush feels just right.

Laifen Wave Pro Coming Soon",#Laifen #ElectricToothbrush #LaifenWave #WaveMotion,,,,,,,,,
21 Feb,Sat,Brand,Wave Pro 预热物料四,,"Dual-Mode Cleaning System

Enjoy an efficient pro-level clean in minutes.

Laifen Wave Pro Coming Soon",#Laifen #ElectricToothbrush #LaifenWave #WaveMotion,,,,,,,,,
23 Feb,Mon,,Wave Pro- 工艺片,,"Laifen Pro Series Brush Heads deliver comprehensive cleaning with gentle gum protection.

Learn more: https://bit.ly/m/laifenshop",#Laifen #ElectricToothbrush #LaifenWave #WaveMotion,,,,,,,,,
24 Feb,Tue,Brand,Wave Pro- ID片,,"Laifen Wave Pro Electric Toothbrush Reliability Test

Learn more: https://bit.ly/m/laifenshop",#Laifen #ElectricToothbrush #LaifenWave #WaveMotion,,,,,,,,,
25 Feb,Wed,Community,妇女节 UGC话题,,"What’s one thing you tried just because you were curious?
Tell us in the comments 👇

🎁 One lucky winner will receive a Laifen MINI High-Speed Hair Dryer.

⏳ Giveaway ends March 2.
The winner will be contacted via DM.","#TryNewwithLaifen
 #TrySomethingNew",,,,Community,妇女节 UGC话题,,"Was hast du einfach aus Neugier ausprobiert?
Schreib es uns in die Kommentare 👇

🎁 Eine glückliche Gewinnerin oder ein glücklicher Gewinner erhält einen Laifen MINI Hochgeschwindigkeits-Haartrockner.

⏳ Das Gewinnspiel endet am 2. März.
 Die Gewinnerin oder der Gewinner wird per DM benachrichtigt.

#TryNewwithLaifen
 #TrySomethingNew","#TryNewwithLaifen
 #TrySomethingNew",
26 Feb,Thu,Brand,Story,,,,,,,Brand,Wave Pro,,"Magnetisches, kabelloses Laden
Einfach abstellen. Der Ladevorgang startet automatisch.

Bleibt jederzeit einsatzbereit – ganz ohne Aufwand.

Laifen Wave Pro
Bald verfügbar",#Laifen #Zahnbürste #ElektrischeZahnbürste #LaifenWave #WaveMotion,
27 Feb,Fri,Brand,Story,,"Laifen Beyond The Limits
We’re bringing Laifen beyond the screen and into more spaces around the world.
We’re excited to take our high-speed hair dryers, electric shavers, and electric toothbrushes to more cities — meeting our community face to face.
📍 Thailand, Bangkok
Central Ladprao, 1st Floor",#Laifen #LaifenTHxKeng #DatewithKeng #LaifenThailand #LaifenBeyondTheLimits,,,,Brand,Wave Pro,,"Intelligenter Drucksensor
Sofortige Druckwarnung.

Für ein Putzgefühl, das sich immer genau richtig anfühlt.

Laifen Wave Pro
Bald verfügbar",#Laifen #Zahnbürste #ElektrischeZahnbürste #LaifenWave #WaveMotion,
28 Feb,Sat,Brand,Cosctco 促销正式上线,,"🔥 Now Live on Costco Online 🔥
The Laifen SE High-Speed Hair Dryer is now available on Costco — and it’s at a limited-time deal you don’t want to miss.

✨ Special Price: $89.99
💸 Save $30 (Was $119.99)
👉 Buy here: https://bit.ly/costco-laifen

Powerful airflow.
Fast drying.
Less heat damage, more shine.

Perfect for everyday styling or gifting this season.

💜 Limited stock — grab yours while it lasts!

#costco #costcofinds #hairdryer #laifen",#Laifen #Hairdryer #HairCare,,,,Brand,Wave Pro,,"Multifunktionales Borstendesign
Gründliche Reinigung – selbst in den Zahnzwischenräumen.

Für ein rundum sauberes Mundgefühl.

Laifen Wave Pro
Bald verfügbar",#Laifen #Zahnbürste #ElektrischeZahnbürste #LaifenWave #WaveMotion,
28 Feb,Sat,Brand,"KOL Repost
 (Do Not Repost)",,"From wet hair to photoshoot-ready in 3 mins. ⚡️📸

The Laifen SE makes it look easy. Rate this transformation 1-10! 👇


Video by @luke_nanderson

#Laifen #Hairdryer #HairCare",#costco #costcofinds #hairdryer #laifen,,,,Brand,Wave Pro,,"Zwei-Modus-Reinigungssystem

Weiß: Tägliche Reinigung
Orange: Tiefenreinigung

Professionelle Reinigung – effizient in nur wenigen Minuten.

Laifen Wave Pro
Bald verfügbar",#Laifen #Zahnbürste #ElektrischeZahnbürste #LaifenWave #WaveMotion,
01 Mar,Sun,Brand,"妇女节短片 #1
US/DE通发",,"Every Brave Step Forward | Laifen #TrySomethingNew
Every change begins with a choice.
A step forward.
A moment of courage.
Make the change.
Move with confidence.
With her. For her.",#TryNewWithLaifen #Laifen,,,,Brand,妇女节 KV上线,,"Auf Neugier.
Auf Innovation.
Auf Dich.",#Laifen #TrySomethingNew #TryNewWithLaifen,
01 Mar,Sun,Brand,妇女节- UGC活动开始,,"Try something new.
A big change isn’t required.
Just one small step — taken out of curiosity.
This March, we invite you to share one new thing you tried — a moment, a routine, or a choice. Anything that felt new to you.
How to join:
1. Follow Laifentech
2. Share a photo or short video
 Post your moment of trying something new with
 #TryNewWithLaifen
🎁 Tiered Prizes:
🥇 1 Grand Prize (1 winner):
 Laifen MINI + Laifen Wave Special + Laifen P3 Pro
🥈 Second Prize (2 winners):
 MINI + Wave Special
🥉 Third Prize (3 winners):
 Laifen Wave Special Electric Toothbrush
3. Prefer to share in words?
 Comment below and tell us your story in one sentence
🎁 $15 (US/CA/UK) or €15 (EU) Laifen coupon
Timeline: March 1 – March 22
Winners will be selected by the Laifen team and contacted via DM. Final winners will be announced within 5 business days after the campaign ends. Open to residents of the US, CA, UK, and EU only. Participants must be 18+.
By joining #TryNewWithLaifen, you agree that Laifen may use your content for brand and UGC compilation purposes.",#Laifen #TryNewWithLaifen #TrySomethingNew,,,,Brand,妇女节- UGC活动开始,,"Probier mal was Neues aus.
Eine große Veränderung ist nicht nötig.
Manchmal reicht ein kleiner Schritt — aus Neugier.
Diesen März laden wir dich ein,
etwas Neues zu teilen, das du ausprobiert hast —
ein Moment, eine Routine oder eine Entscheidung.
Alles, was sich für dich neu angefühlt hat.
So nimmst du teil:
1. Folge Laifen Deutschland
2. Kommentiere deine Geschichte unten.
🎁 Mit etwas Glück gewinnst du ein Laifen-Produkt (1 Gewinner/in)
Teilnahmezeitraum: 1. März – 16. März
Der Gewinner wird vom Laifen Team ausgewählt und per Direktnachricht (DM) kontaktiert.
Die Bekanntgabe erfolgt innerhalb von 5 Werktagen nach Aktionsende.
Teilnahme nur für Personen mit Wohnsitz in Deutschland.
Mit der Teilnahme an #TryNewWithLaifen erklärst du dich damit einverstanden,
dass Laifen deine Inhalte für Marken- und UGC-Zwecke verwenden darf.",#Laifen #TryNewWithLaifen #TrySomethingNew,
01 Mar,Sun,Brand,"妇女节KV
US/DE通发",,"Try something new
To curiosity, to innovation, to you",#Laifen #TryNewWithLaifen #TrySomethingNew,,,,,,,,,
03 Mar,Tue,Brand,"妇女节短片 #2
US/DE通发",,"Every Brave Step Forward | Laifen #TrySomethingNew
Every change begins with a choice.
A step forward.
A moment of courage.
Make the change.
Move with confidence.
With her. For her.",#TryNewWithLaifen #Laifen,,,,Community,Wave Pro美图,,"Werfen Sie einen genaueren Blick auf die brandneue Laifen Elektrische Zahnbürste - Wave Pro

Bald erhältlich, diesen März!",#Laifen #Zahnbürste #ElektrischeZahnbürste #LaifenWave #WaveMotion,
04 Mar,Wed,Community,妇女节短片 #3,,"A Different Way Ahead | Laifen #TrySomethingNew
Sometimes, nothing needs to change —
except the way you choose to see it.
A new direction.
A new rhythm.
Trying something new
isn’t about leaving the familiar.",#Laifen #TryNewWithLaifen,,,,,,,,,
05 Mar,Thu,Community,"Wave Pro 科普互动 #1
Quiz",,"What’s the brushing method dentists actually recommend? 🪥
Tell us your answer in the comments 👇

🎁 One lucky winner will receive a Laifen Wave Pro Electric Toothbrush.
⏳ Giveaway ends March 10.
The winner will be contacted via DM.",#Laifen #ElectricToothbrush #LaifenWave #WaveMotion,,,,Community,"Wave Pro 科普互动 #1
Quiz",,"Welche Putztechnik wird von Zahnärzten tatsächlich empfohlen? 🪥
Schreib deine Antwort in die Kommentare 👇

🎁 Ein glücklicher Gewinner erhält eine Laifen Wave Pro elektrische Zahnbürste.
⏳ Das Gewinnspiel endet am 10. März.
Der Gewinner wird per DM kontaktiert.",#Laifen #Zahnbürste #ElektrischeZahnbürste #LaifenWave #WaveMotion,
06 Mar,Fri,Community,"Wave Pro 科普解释 #1
#WaveMotion",,"Quiz #1 Answer revealed 👀
Yesterday’s question was:
Which brushing method do dentists actually recommend?
The answer is the Bass technique.
This method focuses on placing the bristles at a slight angle toward the gumline, using small vibrating movements to remove plaque where it most often builds up.
But in daily brushing, maintaining this precise motion isn’t always easy.
That’s where Laifen Wave Pro comes in.
Powered by WaveMotion™ Technology, it combines 60° oscillation with up to 66,000 vibrations per minute, helping guide a brushing motion closer to the cleaning logic dentists recommend.
Paired with a multi-functional bristle design and a soft gum-protective coating, Wave Pro helps deliver a deeper clean — even between teeth — while staying gentle on gums.
Swipe to learn more. 
Learn more about Wave Pro:
https://bit.ly/m/laifenshop",#Laifen #LaifenWave #LaifenElectricToothbrush #Toothbrush #WaveMotion,,,,Community,"Wave Pro 科普解释 #1
#WaveMotion",,"Quiz #1 – Antwort enthüllt 👀
Die gestrige Frage lautete:
Welche Putztechnik empfehlen Zahnärzte tatsächlich?
Die richtige Antwort ist die Bass-Methode.
Dabei werden die Borsten leicht zum Zahnfleischrand geneigt und mit kleinen vibrierenden Bewegungen geführt, um Plaque genau dort zu entfernen, wo sie sich am häufigsten bildet.
Im Alltag ist es jedoch nicht immer einfach, diese präzise Bewegung konstant beizubehalten.
Hier setzt die Laifen Wave Pro an.
Dank der WaveMotion™ Technologie, die 60° Oszillation mit bis zu 66.000 Vibrationen pro Minute kombiniert, entsteht eine Putzbewegung, die näher an der von Zahnärzten empfohlenen Reinigung liegt.
In Kombination mit dem multifunktionalen Borstendesign und einer sanften, zahnfleischschützenden Beschichtung ermöglicht die Wave Pro eine gründliche Reinigung – auch in den Zahnzwischenräumen.
Swipe, um mehr zu erfahren. 🪥
Mehr über die Wave Pro erfahren: https://bit.ly/m/laifenshop",#Laifen #Zahnbürste #ElektrischeZahnbürste #LaifenWave #WaveMotion,
06 Mar,Fri,,"Wave Pro 科普互动 #2
Quiz",,"When brushing, does applying more force mean better cleaning? Tell us your answer in the comments 👇
🎁 One lucky winner will receive a Laifen Wave Pro Electric Toothbrush.
⏳ Giveaway ends March 10.
The winner will be contacted via DM. ",#Laifen #ElectricToothbrush #LaifenWave #WaveMotion #Quiz,,,,Community,"Wave Pro 科普互动 #2
Quiz",,"Bedeutet mehr Druck beim Zähneputzen automatisch bessere Reinigung? 
Schreib deine Antwort in die Kommentare 👇
🎁 Ein glücklicher Gewinner erhält eine Laifen Wave Pro elektrische Zahnbürste.
⏳ Das Gewinnspiel endet am 10. März.
Der Gewinner wird per DM kontaktiert.",#Laifen #Zahnbürste #ElektrischeZahnbürste #LaifenWave #WaveMotion #Quiz,
07 Mar,Sat,Community,"Wave Pro 科普解释 #2
#WaveMotion",,"Quiz #2 Answer revealed 👀
Yesterday’s question was:
When brushing, does applying more force mean better cleaning?
The answer is no.
Brushing harder does not remove more plaque. In fact, excessive pressure can wear down enamel and irritate your gums over time.
Effective brushing comes from controlled, consistent motion — not force.
That’s why Laifen Wave Pro is equipped with a Smart Pressure Sensor.
When brushing pressure becomes too strong, the system alerts you, helping prevent unintentional over-brushing.
Combined with dual cleaning modes and customizable brushing settings in the app, Wave Pro adapts to different brushing habits and oral care needs.
Better brushing isn’t about more force.
It’s about the right pressure.
Swipe to learn more. 
Learn more about Wave Pro:
https://bit.ly/m/laifenshop",#Laifen #LaifenWave #LaifenElectricToothbrush #Toothbrush #WaveMotion,,,,Community,"Wave Pro 科普解释 #2
#WaveMotion",,"Quiz #2 – Antwort enthüllt 👀
Die gestrige Frage lautete:
Bedeutet mehr Druck beim Zähneputzen automatisch eine bessere Reinigung?
Die Antwort lautet nein.
Zu starkes Putzen entfernt nicht mehr Plaque. Im Gegenteil – zu viel Druck kann mit der Zeit Zahnschmelz abnutzen und das Zahnfleisch reizen.
Eine effektive Reinigung entsteht durch kontrollierte und gleichmäßige Bewegungen, nicht durch Kraft.
Deshalb ist die Laifen Wave Pro mit einem intelligenten Drucksensor ausgestattet.
 Wenn beim Putzen zu viel Druck ausgeübt wird, erinnert das System daran, die Kraft zu reduzieren.
In Kombination mit Dual-Mode-Reinigung und individuell anpassbaren Einstellungen in der App passt sich die Wave Pro verschiedenen Putzgewohnheiten und Bedürfnissen an.
Gutes Zähneputzen bedeutet nicht mehr Kraft –
 sondern die richtige Kontrolle.
Swipe, um mehr zu erfahren.
Mehr über die Wave Pro erfahren:
https://bit.ly/m/laifenshop",#Laifen #Zahnbürste #ElektrischeZahnbürste #LaifenWave #WaveMotion,
08 Mar,Sun,Community,"Wave Pro 科普互动 #3
Quiz",,"How long should a brushing session last?
🎁 One lucky winner will receive a Laifen Wave Pro Electric Toothbrush.
⏳ Giveaway ends March 10.
The winner will be contacted via DM.",#Laifen #ElectricToothbrush #LaifenWave #WaveMotion #Quiz,,,,Community,"Wave Pro 科普互动 #3
Quiz",,"Wie lange sollte eine Zahnputz-Session dauern?
Schreib deine Antwort in die Kommentare 👇
🎁 Ein glücklicher Gewinner erhält eine Laifen Wave Pro elektrische Zahnbürste.
⏳ Das Gewinnspiel endet am 10. März.
Der Gewinner wird per DM kontaktiert.",#Laifen #Zahnbürste #ElektrischeZahnbürste #LaifenWave #WaveMotion #Quiz,
09 Mar,Mon,Community,"Wave Pro 科普解释 #3
#WaveMotion",,"Quiz #3 Answer revealed 👀
How long should a brushing session last?
The answer is 2 minutes.
Dentists generally recommend brushing for at least two minutes, allowing enough time to clean all areas of the mouth.
But in everyday life, many people brush too quickly or unevenly, often missing certain areas.
That’s why Laifen Wave Pro features a Smart Timer with 30-second reminders, helping guide you through each section of your mouth for a more balanced clean.
With up to 70 days of battery life, it’s designed to support a consistent brushing routine without frequent charging interruptions.
Good brushing isn’t about brushing longer.
 It’s about brushing just right.
Swipe to learn more.
Learn more about Wave Pro: https://bit.ly/m/laifenshop",#Laifen #LaifenWave #LaifenElectricToothbrush #Toothbrush #WaveMotion,,,,Community,"Wave Pro 科普解释 #3
#WaveMotion",,"Quiz #3 – Antwort enthüllt 👀
Wie lange sollte eine Zahnputz-Session dauern?
Die richtige Antwort ist 2 Minuten.
Zahnärzte empfehlen in der Regel, die Zähne mindestens zwei Minuten lang zu putzen, damit alle Bereiche im Mund ausreichend gereinigt werden.
Im Alltag putzen viele Menschen jedoch zu kurz oder ungleichmäßig, wodurch manche Bereiche leicht übersehen werden.
Die Laifen Wave Pro verfügt deshalb über einen intelligenten Timer mit 30-Sekunden-Erinnerungen, der dabei hilft, jede Zone im Mund gleichmäßig zu reinigen.
Mit einer Akkulaufzeit von bis zu 70 Tagen unterstützt sie außerdem eine langfristig stabile und komfortable Putzroutine.
Gutes Zähneputzen bedeutet nicht länger zu putzen –
 sondern genau richtig.
Swipe, um mehr zu erfahren.
Mehr über die Wave Pro erfahren:
https://bit.ly/m/laifenshop",#Laifen #Zahnbürste #ElektrischeZahnbürste #LaifenWave #WaveMotion,
10 Mar,,,,,,,,,,Brand,春促海报上线,,"Neuer Frühling, neues Du.
Bis zu 38% Rabatt: ",#Laifen #Sale,
10 Mar,Tue,Brand,"Wave Pro
正式开售",,"Meet the Laifen Wave Pro Electric Toothbrush — designed for those who want a pro-level, smart, and truly effortless brushing experience, Laifen Wave Pro brings professional performance into your everyday routine. 
Learn more: https://bit.ly/m/laifenshop
#Laifen #ElectricToothbrush #LaifenWave #WaveMotion",#Laifen #ElectricToothbrush #LaifenWave #WaveMotion,,,,Brand,"Wave Pro
正式开售",,"Meet the Laifen Wave Pro Toothbrush — developed for those who want a professional, smart and effortlessly effective dental cleaning. The Laifen Wave Pro brings powerful pro technology right into your daily routine.
Find out more: https://bit.ly/m/laifende
#Laifen #Zahnbürste #ElektrischeZahnbürste #LaifenWave #WaveMotion",#Laifen #Zahnbürste #ElektrischeZahnbürste #LaifenWave #WaveMotion,
11 Mar,Wed,Brand,One Page卖点合集,,"Introducing Laifen Wave Pro — designed to bring a professional clean into your daily routine.
Powered by WaveMotion™ Technology, Wave Pro combines 60° oscillation and  66,000 vibrations/min to help remove plaque more effectively along the gumline and between teeth.
Here’s what makes Wave Pro stand out:
• 60° Oscillations for effective deep cleaning
• Brand-New Brush Heads Pro
• Dual-Mode Cleaning System – Daily Clean & Deep Clean
• Smart Pressure Sensor to help protect gums
• Personalized Care with App
• Up to 70 Days Battery Life
• IPX8 Waterproof
Easy to be a brushing pro.
Learn more: https://bit.ly/m/laifenshop
#Laifen #LaifenWave #LaifenElectricToothbrush #Toothbrush #WaveMotion",#Laifen #ElectricToothbrush #LaifenWave #WaveMotion,,,,Brand,One Page卖点合集,,"Meet the Laifen Wave Pro – developed for professional-level cleaning in everyday life.
Thanks to WaveMotionTM technology, the Wave Pro combines 60° oscillation with 66,000 vibrations per minute to provide a deeper clean along the gum edge and between the teeth.
That's what makes Wave Pro special:
• 60° oscillation cleaning for effective plaque removal
• Two-mode cleaning system – Daily Clean & Deep Clean
• Smart pressure sensor to protect gums and tooth enamel
• Brand new pro brush heads for a more precise cleaning
• Personalized care with app
• Up to 70 days of battery life
• IPX8 Waterproof
Easy to be a brushing pro.
Find out more: https://bit.ly/m/laifende
#Laifen #Zahnbürste #ElektrischeZahnbürste #LaifenWave #WaveMotion",#Laifen #Zahnbürste #ElektrischeZahnbürste #LaifenWave #WaveMotion,
11 Mar,Wed,Brand,短视频转载,,"What’s actually inside the Laifen Wave Pro? 👀

Take a look at the world's first oscillation & vibration electric toothbrush

Discover Wave Pro: https://bit.ly/m/laifenshop

🎥 Credit: @bbbigdeer

#Laifen #LaifenWavePro #ElectricToothbrush #OralCare #TechInside #DailyRoutine",#Laifen #LaifenWavePro #ElectricToothbrush #OralCare #TechInside #DailyRoutine,,,,,,,,,
12 Mar,Thu,Brand,Wave Pro - Giveaway,,"🎁 Wave Pro Giveaway is Here!
To celebrate the launch of our Laifen Wave Pro Electric Toothbrush, we’re giving our community the chance to experience a new brushing routine.
🎁 Prizes:
 5 winners will each receive a Laifen Wave Pro Electric Toothbrush!
How to enter:
 1️⃣ Like this post ❤️
 2️⃣ Follow @laifen_tech
 3️⃣ Tag 2 friends who care about their smile 😁
⭐ Bonus: Share this post in your Story for an extra entry!
📅 Entry ends: March 22, 2026, 11:59 PM ET
📍 Open to residents of the US, Canada, EU, and UK

🏆 Winners will be contacted via DM within 3 business days after the giveaway ends.
Learn more about the Wave Pro via the bio link.

⚠️ This promotion is in no way sponsored, endorsed, or administered by, or associated with Instagram. By entering, participants confirm they are 13+ years of age, release Instagram of all responsibility, and agree to Instagram’s Terms of Use.",#Laifen #LaifenWave #Giveaway #ElectricToothbrush #LaifenWave #WaveMotion,,,,Community,Wave Pro - Giveaway,,"🎁 Wave Pro Giveaway ist da!

Zur Feier der Einführung unserer Laifen Wave Pro elektrischen Zahnbürste geben wir unserer Community die Chance, eine neue Art des Zähneputzens zu erleben.

🎁 Preise:
3 Gewinner erhalten jeweils eine Laifen Wave Pro elektrische Zahnbürste!

So kannst du teilnehmen:
1️⃣ Like diesen Beitrag ❤️
2️⃣ Folge @laifen_de
3️⃣ Markiere 2 Freunde, die sich ebenfalls über ein strahlendes Lächeln freuen würden 😁

⭐ Bonus: Teile diesen Beitrag in deiner Story für eine zusätzliche Gewinnchance!

📅 Teilnahmeschluss: 22. März 2026, 23:59 Uhr (MEZ)

📍 Teilnahmeberechtigt sind nur Einwohner Deutschlands

🏆 Die Gewinner werden innerhalb von 3 Werktagen per DM nach Ende des Gewinnspiels kontaktiert.

Mehr über die Wave Pro erfahren über den Link in der Bio @laifen_de

⚠️ Dieses Gewinnspiel steht in keiner Verbindung zu Instagram und wird in keiner Weise von Instagram gesponsert, unterstützt oder organisiert. Mit der Teilnahme bestätigen die Teilnehmer, dass sie mindestens 13 Jahre alt sind, Instagram von jeglicher Verantwortung freistellen und den Nutzungsbedingungen von Meta zustimmen.",#Laifen #LaifenWave #Giveaway #ElektrischeZahnbürste #LaifenWave #WaveMotion,
13 Mar,,Education,HOW TO 视频发布,,"How to Use Your Laifen Wave Pro Electric Toothbrush
Learn more about the Wave Pro: https://bit.ly/m/laifenshop",#Laifen #ElectricToothbrush #LaifenWave #WaveMotion,,,,Brand,春促互动,,Frühling bedeutet Neuanfang.,,
14 Mar,,,,,,,,,,Brand,春促互动,,"Der Frühling ist die Zeit für kleine Neuanfänge.

Frischer Start am Morgen.
Sanfte Pflege am Abend.

Eine einfache Routine für jeden Tag.

Jetzt bis zu 38 % sparen: https://bit.ly/m/laifende
","
#Laifen #ElektrischeZahnbürste #Haartrockner #LaifenWave #LaifenMini #LaifenNeo",
15 Mar,,,,,,,,,,Brand,春促互动,,"🍃Neuer Frühling, neues Du.
Jetzt bis zu 38 % sparen: https://bit.ly/m/laifende",#Laifen #ElektrischeZahnbürste #Haartrockner #LaifenWave #LaifenMini,
16 Mar,,,,,,,,,,Brand,春促互动,,"🍃Neuer Frühling, neues Du.
Jetzt bis zu 38 % sparen: https://bit.ly/m/laifende",#Laifen #ElektrischeZahnbürste #Haartrockner #LaifenWave #LaifenMini,
17 Mar,Tue,Brand,"KOL Repost
 (Do Not Repost)",,"Morning moves fast, and the Laifen Wave Pro keeps up.
Credit: @r6katanaa",#Laifen #LaifenWave #WaveMotion #MorningRoutine,,,,Brand,春促互动,,"🍃Neuer Frühling, neues Du.
Jetzt bis zu 38 % sparen: https://bit.ly/m/laifende",#Laifen #ElektrischeZahnbürste #Haartrockner #LaifenWave #LaifenMini,
18 Mar,Wed,Brand,春促,,"Spring feels like ______ 🌸
Tell us in the comments 👇

🎁 One lucky winner from the comment section will receive a Laifen MINI Hair Dryer.
⏳ Giveaway ends March 25, 12 PM ET.
Open to US, CA, UK, and EU residents only.
The winner will be contacted via DM.",#Laifen #LaifenHairDryer #HairDryer #Spring #LaifenMini,,,,Brand,春促互动,,"🍃Neuer Frühling, neues Du.
Jetzt bis zu 38 % sparen: https://bit.ly/m/laifende",#Laifen #ElektrischeZahnbürste #Haartrockner #LaifenWave #LaifenMini,
19 Mar,Thu,Brand,春促-AI视频,,"New Season, New Shine",#Spring #Laifen #laifenHairdryer #Laifenmini,,,,Brand,春促互动,,Bitte überprüfe dein Lächeln.,,
20 Mar,Fri,Brand,春促-AI视频,,"New Season, New Shine
Up to 30% Off: https://bit.ly/m/laifenshop
",#Spring #Laifen #laifenHairdryer #LaifenSE2,,,,,,,,,
21 Mar,Sat,Brand,春促-KV,,"New Season, New Shine
Up to 30% Off: https://bit.ly/m/laifenshop
",#laifen #laifenhairdryer #sale,,,,,,,,,
22 Mar,Sun,Community,春促- 互动,,"From 8:00 A.M. to 10:30 P.M.
A routine that moves with you",#Spring #Laifen,,,,,,,,,
23 Mar,Mon,Brand,春促- 产品,,"New Season, New Shine
Up to 30% Off: https://bit.ly/m/laifenshop
",#laifen #laifenhairdryer #sale,,,,,,,,,
24 Mar,Tue,Brand,春促- 产品,,"New Season, New Shine
Up to 30% Off: https://bit.ly/m/laifenshop",#laifen #laifenhairdryer #sale,,,,,,,,,
25 Mar,Wed,Brand,世界第一,,"World’s No.1 High-Speed Hair Dryer Brand — Laifen

20M+ users worldwide
60+ countries
600+ patents
30+ awards
",#Laifen #LaifenHairDryer #HairDryer #No1Brand #HairCare,,,,Brand,世界第一,-,-,,
26 Mar,Thu,Brand,春促视觉互动,,👀,,,,,,,,,,
27 Mar,Fri,Community,"#TryNewWithLaifen
开奖",,"This month, we celebrated women choosing something for themselves.
Not big changes.
Not perfect moments.
Just small steps —
trying, exploring, and putting themselves first.
💜 Here are some of the stories that inspired us.",#TryNewWithLaifen #TrySomethingNew,,,,,,,,,
27 Mar,Fri,,,,,,,,,Brand,Neo 预热,,Es ist neu.,#LaifenNeo #LaifenFöhn #Föhn #Laifen,
28 Mar,Sat,Brand,Wave Pro美图,,"Just part of the routine.

Laifen Wave Pro fits right in — sleek, simple, and seriously effective.
A better clean, every day.",#Laifen #ElectricToothbrush #LaifenWave #WaveMotion,,,,Brand,Neo S 预热,,Sichtbarer Glanz.,#LaifenNeo #LaifenFöhn #Föhn #Laifen,
30 Mar,Mon,Community,"#TryNewWithLaifen
红人",,"Trying something new looks different for everyone 
From stepping out of your comfort zone,
to finding a better way,
to simply choosing what works for you.
We’re proud to see how our partners are embracing something new in their own way 💜
Thank you for sharing your stories with us.",#TryNewWithLaifen #Trysomethingnew,,,,Inspiration,Wave Pro美图,,"Einfach Teil deiner Routine.
Die Laifen Wave Pro passt perfekt dazu — schlank, minimalistisch und beeindruckend effektiv.
Für eine bessere Reinigung, jeden Tag.",#Laifen #Zahnbürste #ElektrischeZahnbürste #LaifenWave #WaveMotion,
30 Mar,,Inspiration,Wave Pro美图,,"Engineered for a pro-level clean.

Laifen Wave Pro combines 66,000 vibrations/min with a 60° wide oscillation — delivering deeper, more efficient cleaning in every stroke.",#Laifen #ElectricToothbrush #LaifenWave #WaveMotion,,,,Inspiration,Wave Pro美图,,"Entwickelt für eine professionelle Reinigung.
Die Laifen Wave Pro kombiniert 66.000 Vibrationen/Min. mit einer 60°-Weitwinkel-Oszillation — für eine tiefere und effizientere Reinigung bei jeder Bewegung.",#Laifen #Zahnbürste #ElektrischeZahnbürste #LaifenWave #WaveMotion,
30 Mar,Mon,Inspiration,Wave Pro美图,,Oscillates. Vibrates. Cleans like a pro—every day.,#Laifen #LaifenWave #LaifenElectricToothbrush #Toothbrush #WaveMotion,,,,Inspiration,Wave Pro美图,,Oszilliert. Vibriert. Reinigt wie ein Profi – jeden Tag.,#Laifen #Zahnbürste #ElektrischeZahnbürste #LaifenWave #WaveMotion,
31 Mar,Tue,Inspiration,Wave Pro美图,,Care that goes further.,#Laifen #LaifenWave #LaifenElectricToothbrush #Toothbrush #WaveMotion,,,,Inspiration,Wave Pro美图,,"Pflege, die weiter geht.",#Laifen #Zahnbürste #ElektrischeZahnbürste #LaifenWave #WaveMotion,
01 Apr,Wed,Brand,Costco进店,,"Laifen SE High-Speed Hair Dryer is now at Costco Canada 🇨🇦

Available online & in-store — it’s never been easier to upgrade your routine.

👉 Shop now: https://bit.ly/3OemWxF

#Laifen #Costco #Canada #Laifenhairdryer #HairDryer",#Laifen #Costco #Canada #Laifenhairdryer #HairDryer,,,,Brand,Neo TVC,,"Introducing Laifen Neo — Es ist Neo. Es ist neu.
Angetrieben von Laifens proprietärer Hochgeschwindigkeitsmotor-Technologie vereint der Neo schnelles Trocknen, vielseitiges Styling und sanfte Pflege — in einem schlanken, durchdachten Design.
Key Benefits des Laifen Neo:
 ✅ Laifens legendäres Trocknen mit 110.000 U/min bürstenlosem Motor
 ✅ 3× schnelleres Trocknen dank 22 m/s Luftstrom
 ✅ 200 Millionen negative Ionen für weniger Frizz und mehr Glanz
 ✅ Ultraleichtes Design (nur 390 g) – 33 % leichter für müheloses Styling
 ✅ Geräuscharm bei nur 59 dB für ein angenehmes Nutzungserlebnis
 ✅ Grenzenloses Styling mit Glättungsdüse und Diffusor
👉 Mehr erfahren: https://bit.ly/4m0sTuq",#LaifenNeo #LaifenFöhn  #Föhn #Laifen,
01 Apr,Wed,Brand,秋促,,"Easter Sale 🐣
Up to 38% off
New season, new shine.

👉 Shop now: https://bit.ly/m/laifenshop

#Laifen #EasterSale",#Laifen #EasterSale,,,,Brand,秋促,,"Oster-Sale 🐣
Bis zu 38 % Rabatt

Neue Saison, neuer Glanz.",#Laifen #EasterSale,
02 Apr,Thu,,,,,,,,,Brand,Neo S TVC,,"Introducing Laifen Neo Special — Visible broadcast in minutes.
With a combination of high-speed airflow, advanced care technology, and precise temperature control, the Neo Special delivers ultra-fast drying while retaining shine and moisture – with every application.
Key Benefits of Laifen Neo Special:
✅ Professional oil diffusion technology turns essential oils into ultra-fine micro-mist for deep-impact, residue-free absorption
✅ Precise 58°C care mode with sensors that monitor temperature 100 times per second and protect moisture
✅ Extra-fast 3-minute drying thanks to 110 000 rpm engine and 22 m/s airflow
✅ 200 million negative ions for silky shine smooth hair and visibly reduce frizz
✅ Whisper-quiet & magnetic filter with 6x noise reduction (only 59 dB) and 3-second cleaning
✅ Smartes LED-Display & Premium-Design mit 5-farbigem LED-Ring und modernem Color-Block-Finish
👉 Find out more: https://bit.ly/4m5fCB4",#LaifenNeo #LaifenFöhn  #Föhn #Laifen,
02 Apr,Thu,,,,,,,,,Brand,N 一图读懂,,"Alles, was du über den Laifen Neo wissen musst.
Mehr erfahren: https://bit.ly/4v5TJ8z",#LaifenNeo #LaifenFöhn #Föhn #Laifen,
03 Apr,Fri,,,,,,,,,Community,NS 一图读懂,,"Alles, was du über den Laifen Neo Special wissen musst. 
Mehr erfahren: https://bit.ly/4v5TJ8z",#LaifenNeo #LaifenFöhn #Föhn #Laifen,
04 Apr,Sat,,,,,,,,,Brand,世界第一吹风机,-,-,-,
06 Apr,Mon,,,,,,,,,Community,Neo S Giveaway,,"🎉 Contest: For healthier hair - win the Laifen Neo Special!
The Laifen Neo Special stands for gentle and effective hair care in everyday life. Formulated to protect your hair while delivering perfect styling results. ✨
Enter now and secure your chance!
Here's how you can participate:
1. Folge Laifen Deutschland
2. Like this post 👍
3. Comment your most important hair care routine and tag 2 friends
🎁 Win:
3 winners each will receive a Laifen Neo Special
📅 Deadline: 17. April
📢 Winners will be notified by Facebook message
Lots of success! 🍀
📌 Hint:
This contest is not affiliated with Facebook and is in no way sponsored, supported or organized by Facebook. The organizer is the only person to contact and responsible.",#LaifenNeo #LaifenFöhn #Föhn #Laifen #Gewinnspiel #Giveaway,
07 Apr,Tue,Inspiration,"KOL Repost
 (Do Not Repost)",,"✨ See how @ellabella_soleil elevates her hair routine with the Laifen MINI!
Small in size, massive in power. 💨 Whether you're at home or on the go, the Laifen MINI high-speed dryer keeps your hair salon-ready in minutes. Ready to experience the perfect blow-dry? 💇‍♀️💖",#Laifen #LaifenMini #laifenhairdryer #hairdryer,,,,Brand,NS 护发KSP,,"Sichtbarer Glanz in Minuten ✨

Mit der Neo Special erlebst du Haarpflege auf einem neuen Level:
💧 Feine Öl-Diffusion für intensive Pflege
💨 200 Mio. negative Ionen für sichtbar glatteres Haar
✨ Seidig, geschmeidig, gesund glänzend

Einfach trocknen – und gleichzeitig pflegen.",#LaifenNeo #LaifenFöhn #Föhn #Laifen,
08 Apr,Wed,,,,,,,,,Brand,NEO 快干,,"Trocken in nur 3 Minuten – kraftvoll und schonend zugleich.
Ein 110.000 U/min Motor mit 22 m/s Luftstrom trocknet dein Haar in Rekordzeit, während intelligente Temperaturkontrolle Frizz reduziert und den natürlichen Glanz bewahrt. Für ein Finish wie im Salon.",#LaifenNeo #LaifenFöhn #Föhn #Laifen,
09 Apr,Thu,Brand,Wave Proi美图,,"A soft pink moment for your everyday routine 💗 
Meet the toothbrush that looks good and works even better.
✨ WaveMotion Tech: 60° oscillation + 66,000 vibrations/min for fast, pro-level cleaning
✨ Up to 70-day battery life + wireless charging for effortless use 
Learn more: https://bit.ly/m/laifenshop",,,,,Brand,NEO 快干,,"Trocken in nur 3 Minuten – schnell, einfach, effizient.
Ein 110.000 U/min Motor mit 22 m/s Luftstrom sorgt für starke Performance und verkürzt deine Trocknungszeit deutlich – perfekt für den Alltag.",#LaifenNeo #LaifenFöhn #Föhn #Laifen,
10 Apr,Fri,Inspiration,"KOL Repost
 (Do Not Repost)",,"When you’ve got 20 minutes to get ready before a family party…
And your hair is still wet

Laifen SE 2 = handled
🎥: @tomi.timetraveler

Learn more: https://bit.ly/m/laifenshop

#hairdryer #highspeed #Laifen #Laifenhairdryer",#hairdryer #highspeed #Laifen #Laifenhairdryer,,,,Brand,Neo 智能控温,,"Keine Hitzeschäden. Nur gesund glänzendes Haar.
Die Neo Series steht für intelligente Temperaturkontrolle, die 100× pro Sekunde misst und anpasst – damit die Hitze immer im sicheren Bereich bleibt.
✨ Schonend zur Haarstruktur
⚡ Schnelles Trocknen in wenigen Minuten
🧠 Smarte Kontrolle in Echtzeit",#LaifenNeo #LaifenFöhn #Föhn #Laifen,
11 Apr,Sat,,"KOL Repost
 (Do Not Repost)",,,,,,,,,,,,
12 Apr,Sun,Community,"KOL Repost
 (Do Not Repost)",,"Curly hair done right 🙌
Using the diffuser nozzle to keep curls soft and defined—no extra frizz.
Laifen SE 2 in action.
🎥 Credit: @arinamartirosyan",#Laifen #LaifenSE2 #CurlyHair #Diffuser,,,,Brand,Neo 模特,,"Schnell trocknen, mehr Zeit zusammen genießen.
Laifen Neo.",#LaifenNeo #LaifenFöhn #Föhn #Laifen,
13 Apr,Mon,Brand,沃尔玛进店预热,,"Laifen at Walmart.
Coming mid April.",#Walmart #hairdryer #laifen,,,,,,,,,
15 Apr,Wed,,,,,,,,,Brand,Neo s 模特,,"Ausgewogene Leistung für jeden Haartyp.
Ob glatt, gewellt oder lockig – der Neo Special sorgt für schnelles Trocknen mit präziser Temperaturkontrolle, ohne Hitzeschäden.",#LaifenNeo #LaifenFöhn #Föhn #Laifen,
16 Apr,Thu,Community,红人视频转载,,"Gentle care for little curls 💛
🎥 Credit: @laii.lo",#Laifen #Laifenhairdryer,,,,,,,,,
18 Apr,Sat,Brand,沃尔玛进店,,"Laifen SE Air & More
New at Walmart: https://bit.ly/4s15nyM",#Walmart #Laifen #Hairdryer,,,,Education,Neo Special 模特图,,"Salon-Styling – ganz einfach zu Hause.
Magnetische Aufsätze für jeden Look.",#LaifenNeo #LaifenFöhn #Föhn #Laifen,
19 Apr,Sun,Education,P3 Pro how to 物料,,How to shave with P3 Pro (the right way),#Laifen #Shaver #ElectricShaver,,,,Education,P3 Pro how to 物料,,So rasierst du dich mit dem P3 Pro – richtig,#Laifen #Rasierer #LaifenElektrorasierer,
20 Apr,Mon,Brand,沃尔玛进店,,"Now closer than ever.

Meet Laifen at Walmart —
available in 3000+ stores nationwide.

Your next upgrade? It’s already waiting for you.

#Laifen #Walmart #NowAvailable #HairDryer #EverydayUpgrade",#LaifenHairdryer,,,,Brand,Neo场景,,"Familienmomente, die bleiben. 💛
Mit dem Laifen Neo wird das Styling zum gemeinsamen Ritual – schnell, sanft und für jedes Alter geeignet.",#LaifenNeo #LaifenFöhn #Föhn #Laifen,
21 Apr,Tue,Brand,"KOL Repost
 (Do Not Repost)",,"Meet the Laifen SE Air, now available at your nearby Walmart.

Credit: @mylifedailyblog",#Walmart #Laifen #Hairdryer,,,,Brand,"KOL Repost
 (Do Not Repost)",,"Der Laifen P3 Pro mit 3-fach Scherkopf-System sorgt für eine mühelose und effiziente Rasur.
IPX7 wasserdicht für den ganzen Körper – und dank seines kompakten Designs der perfekte Begleiter für Reisen und Geschäftsreisen.

Mehr erfahren: https://bit.ly/m/laifende

📹: @peaceoot",#Laifen #Rasierer #LaifenElektrorasierer,
22 Apr,Wed,Brand,"KOL Repost
 (Do Not Repost)",,"Meet the Laifen SE Air, now at Walmart.
Don’t miss the best price—check it out via the link in bio.

Credit: @iselinjt",#Walmart #Laifen #Hairdryer,,,,Brand,Neo/Neo S HOW TO,-,"Laifen Neo Schnellstart-Anleitung | Auspacken & Anwendung

Neu beim Laifen Neo? Diese Schnellstart-Anleitung zeigt dir alles – vom Auspacken bis zur ersten Anwendung.


--
Laifen Neo Special Schnellstart-Anleitung | Auspacken & Anwendung

Du hast den Laifen Neo Special gerade erhalten? Starte hier.
Diese Anleitung führt dich Schritt für Schritt durch Auspacken, Einrichtung und Anwendung.",#LaifenNeo #LaifenFöhn #Föhn #Laifen,
23 Apr,,Brand,"KOL Repost
 (Do Not Repost)",,"Meet the Laifen SE Air Hair Dryer 💨
Now available at Walmart for just $79.97 — grab it online or at a store near you.

Lightweight, fast drying, and made for everyday ease.

Shop now via link in bio.

🎥 Credit: @jazsat",#Walmart #Laifen #Hairdryer,,,,Community,Giveaway上线,,"🎉 Gewinnspiel: Der Vatertag steht vor der Tür – gewinne den Laifen P3 Pro für deinen Vater oder einen Vater in deinem Umfeld! ❤️
Der Laifen P3 Pro sorgt mit seinem 3-fach Scherkopf-System für eine gründliche und mühelose Rasur.
 Kompakt, wasserdicht und perfekt für den Alltag oder auf Reisen. ✨

🎁 So nimmst du teil
1. Folge @laifen_De 
2. Like diesen Beitrag 
3. Kommentiere, was dir am P3 Pro am besten gefällt und warum du ihn deinem Vater oder einem Familienmitglied bzw. Freund, der bereits Vater ist, schenken möchtest.
 (Tipp: Mehr Infos findest du über den Link in unserer Bio)
(Tipp: Mehr Infos findest du hier: [Link einfügen])

🎁 Preis
🎁 P3 Pro ×3

⏰ Teilnahmezeitraum & Gewinnerauswahl
Das Gewinnspiel endet am 30. April um 23:59 Uhr (Berliner Zeit).
Die Gewinner werden nach dem Zufallsprinzip aus den Kommentaren ausgewählt und per Direktnachricht benachrichtigt. Insgesamt werden 3 Gewinner ausgewählt.

*Dieses Gewinnspiel steht in keiner Verbindung zu Facebook oder Instagram und wird in keiner Weise von ihnen gesponsert, unterstützt oder organisiert.",-,
24 Apr,Fri,Brand,母亲节预热,,"What’s something your mom has used for years and refuses to replace?
Like her old hair dryer — “It still works!” 😂

💬 Comment below and tell us yours 👇

🎁 One lucky winner will receive a Laifen MINI

⏳ Giveaway ends May 1
📩 The winner will be contacted via DM",,,,,,,,,,
25 Apr,Sat,Brand,"KOL Repost
 (Do Not Repost)",,"5-Minute Hair, Ready to Go 💨 | Laifen SE 2

🎥 Credit: @habibti.boushra",#Laifen #Laifenhairdryer,,,,,,,,,
27 Apr,Mon,Brand,母亲节KV,,"Give Her the Gift of Glow ✨

Save up to 25% this Mother’s Day: XXXX","
#laifen #mothersday #hairdryer #toothbrush #laifenhairdryer",,,,,,,,,
28 Apr,Tue,Brand,母亲节Giveaway,,"Mother’s Day Giveaway 💛
“This one still works.” — but she’s been using it for years.

💬 Follow @laifen_tech and comment one reason you want to upgrade your mom’s hair routine. We’re reading every single one.

🎁 We’re upgrading 3 moms with a Laifen SE 2 High-Speed Hair Dryer — one she’ll actually use every day.

📅 Ends May 5, 10 PM EDT
📩 Winners will be contacted via DM

Because maybe… it is time for an upgrade 😉

*Not sponsored or endorsed by Facebook or Instagram. 18+. No purchase necessary. Winners contacted via @laifen_tech only—beware of scams.
","
#LaifenMothersDay #ThingsMomsSay #MothersDay",,,,,,,,,
29 Apr,Wed,Brand,Last Minute Guide,,"This Mother’s Day, give her more than a gift—give her time, confidence, and that salon-fresh feeling at home 💐

✨ Meet the Laifen SE 2 High-Speed Hair Dryer
– Fast drying in minutes (1–5 min depending on hair length)
– 200M negative ions for smooth, shiny, frizz-free hair
– Lightweight, quiet, and designed for everyday comfort

Because she deserves effortless beauty—every single day 💛

🎁 Shop now & make her routine feel like self-care","
#happymothersday #giftideas #mom #Laifen #LaifenMothersDay ",,,,Brand,,,,,
30 Apr,Thu,Brand,Last Minute Guide,,"For the mom who deserves something extra special this Mother’s Day 💝

✨ The Laifen Swift Premium Love-Bound Box
– A stunning gift-ready design she’ll love at first sight
– 110,000 RPM high-speed motor for fast, salon-quality blowouts at home
– 200M negative ions for smoother, shinier, frizz-free hair
– Smart temperature control (100x/sec) to protect her hair every day
– Complete set with styling attachments, travel bag & more—everything she needs in one box

🎁 Shop now & make her routine feel like self-care","
#happymothersday #giftideas #mom #Laifen #LaifenMothersDay ",,,,,,,,,
01 May,Fri,Brand,Last Minute Guide,,"For the moms who care about every detail—even their smile 💛

✨ Meet Laifen Wave Special
– Gentle 26,000 vibrations/min for a cozy, comfortable clean
– 60° oscillation that mimics dentist-recommended brushing
– Designed for sensitive teeth & first-time electric users
– Cushioned brush heads for a softer, more caring touch

Because a thoughtful gift isn’t just seen—it’s felt, every single day.

🎁 Upgrade her daily routine this Mother’s Day🎁 Upgrade her daily routine this Mother’s Day",#happymothersday #giftideas #mom #Laifen #LaifenMothersDay,,,,Brand,母亲节Engagement Post,,"„Dieser funktioniert noch.“ 

Was ist etwas, das deine Mom seit Jahren benutzt und einfach nicht ersetzen will?
Wie ihr alter Föhn… wir kennen es alle

💬 Schreib’s in die Kommentare 👇

🎁 Eine glückliche Person gewinnt einen Laifen MINI

⏳ Giveaway endet am 07. Mai
📩 Der Gewinner wird per DM kontaktiert","
#Laifen #MothersDay #Gewinnspiel #FürMama #Giveaway",
02 May,Sat,Brand,Last Minute Guide,,"For the moms who love premium everything—even their daily routine ✨

🪥 Meet Laifen Wave Pro
– Dual-action clean: 60° oscillation + 66,000 vibrations/min for a deeper, dentist-level clean
– Smart pressure control to protect gums while brushing
– Personalized settings via app for a routine that fits her perfectly
– Up to 70 days battery life—effortless, travel-ready care

Because the best gifts upgrade the little moments she does every day.

🎁 Upgrade her daily routine this Mother’s Day",#happymothersday #giftideas #mom #Laifen #LaifenMothersDay,,,,,,,,,
04 May,Mon,Brand,Costco上线,,"Mother‘s Day Sale, Only at Costco Online
Best Price Yet - Now $89.99","
#Costco #Sale #mothersday",,,,Brand,母亲节KV,,"Schenk ihr strahlende Schönheit 💗

✨ Bis zu 38 % Rabatt zum Muttertag",#Laifen #Muttertag #GeschenkFürMama #Sale #LaifenMuttertag,
05 May,Tue,Brand,2026 MET Gala,,"Laifen High-Speed Hair Dryer × celebrity hairstylist @laurapolko

For the 2026 MET Gala, @laurapolko used the Laifen High-Speed Hair Dryer to create a sleek, red carpet–ready look for her client #LindseyVonn.

From prep to final styling — high-speed airflow for control, shape, and a polished finish.

Go behind the scenes and see how the look comes together.",#Laifen #METGala #LaifenHairDryer #BehindTheScenes,,,,Community,母亲节Giveaway,,"Muttertags-Giveaway 💛
„Das funktioniert doch noch.“ — und wahrscheinlich benutzt sie es schon seit Jahren.

💬 Folge @laifen_de und verrate uns, welches Pflegeprodukt deine Mutter schon ewig benutzt — Haartrockner, Zahnbürste … ganz egal 😄

🎁 Wir überraschen 3 Mamas mit einem Laifen Neo Special oder einer Laifen Wave Pro — etwas, das sie wirklich jeden Tag benutzen wird.

📅 Teilnahme bis zum 14. Mai, 22 Uhr CET
📩 Die Gewinner werden per DM kontaktiert

Vielleicht ist es ja endlich Zeit für ein Upgrade 😉

*Dieses Gewinnspiel steht in keiner Verbindung zu Instagram oder Facebook und wird weder gesponsert noch unterstützt. Teilnahme ab 18 Jahren. Kein Kauf erforderlich. Gewinner werden ausschließlich über @laifen_de kontaktiert — Vorsicht vor Fake-Accounts.
",#LaifenMuttertag #Mutterstag #LaifenWavePro #LaifenNeo,
06 May,Wed,,,,,,,,,Community,"Last Minute Guide
Neo Special",,"Für alle, die glänzendes, gesund aussehendes Haar lieben. ✨

Der Laifen Neo Special High-Speed Hair Dryer vereint ultraschnelles Trocknen mit smarter Haarpflege.
Mit dem 58 °C Pflegemodus, intelligentem Temperatur-Management und 200 Millionen negativen Ionen sorgt er für geschmeidiges, glänzendes Haar — ganz ohne übermäßige Hitze.

22 m/s Hochgeschwindigkeits-Luftstrom
200 Mio. negative Ionen gegen Frizz
58 °C Pflegemodus für sanfte Trocknung
Ultraleicht mit nur 390 g
Leise bei nur 59 dB

Salon-Glow. Jeden Tag. 💜",#Laifen #LaifenNeoSpecial #Muttertag #MothersDayGift #GiftGuide #HairCare,
07 May,,,,,,,,,,Community,"Last Minute Guide
Wave Special",,"Ein Geschenk für ein strahlendes Lächeln – jeden Tag. 💚

Die Laifen Wave Special kombiniert sanfte Reinigung mit innovativer Oszillationstechnologie für ein besonders angenehmes Putzgefühl.
Mit 60°-Oszillation, weichen Bürstenköpfen und 26.000 Vibrationen pro Minute sorgt sie für eine gründliche und zugleich komfortable Reinigung — auch bei empfindlichen Zähnen.

🦷 60°-Oszillationstechnologie
✨ 26.000 sanfte Vibrationen/Min.
💚 Weiche, komfortable Bürstenköpfe
🔋 Bis zu 50 Tage Akkulaufzeit
✔️ Entwickelt für eine sanfte & effektive Reinigung",#Laifen #Laifenwave #Muttertag #MothersDayGift #GiftGuide #Oralcare,
08 May,Fri,Brand,红人转载母亲节,,"Make Mom’s routine feel a little more luxe this year 💐
Save up to 25% this Mother’s Day with the Laifen Premium High-Speed Hair Dryer Love-Bound Box — because everyday moments deserve premium care. ✨

📸: @laemekiia

Shop the Mother’s Day Sale now. 💝","
#happymothersday #giftideas #mom #Laifen #LaifenMothersDay",,,,Community,"Last Minute Guide
Wave pro",,"Professionelle Zahnreinigung – ganz einfach zuhause. 💗

Die Laifen Wave Pro Electric Toothbrush kombiniert die innovative WaveMotion™-Technologie mit intelligenter Pflege für ein besonders gründliches Reinigungserlebnis.
Mit 60°-Schwingungen, personalisierten App-Einstellungen und intelligentem Drucksensor sorgt sie für eine effektive und zugleich komfortable Reinigung — jeden Tag.

60° WaveMotion™-Technologie
Bis zu 66.000 Vibrationen/Min.
Personalisierte Pflege mit App
Intelligenter Drucksensor
Bis zu 70 Tage Akkulaufzeit
Zwei Reinigungsmodi für individuelle Bedürfnisse

Für alle, die sich ein professionelles Reinigungserlebnis zuhause wünschen. 💕",#Laifen #Laifenwave #Muttertag #MothersDayGift #GiftGuide #Oralcare,
09 May,Sat,Brand,红人转载Costco,,"Mother’s Day gifting made easy 💐

The Laifen SE Air is now only $89.99 — exclusively at Costco Online. ✨

Compact, lightweight, and powered by high-speed drying for effortless everyday routines.

Because the best gifts are the ones she’ll actually use every day. 💝

📸: @rachelbreanna_","
#happymothersday #giftideas #mom #Laifen #LaifenMothersDay #Costco",,,,,,,,,
10 May,Sun,Brand,母亲节创意海报,,"To the moms who give so much love every day — thank you. 🤍

Wishing you a Mother’s Day filled with love, joy, and a little time for yourself. 💐

Happy Mother’s Day","
#LaifenMothersDay #Laifen",,,,Community,母亲节创意海报,,"An alle Mamas, die jeden Tag so viel Liebe schenken — danke. 🤍

Wir wünschen euch einen Muttertag voller Liebe, Freude und ein wenig Zeit nur für euch selbst. 💐

Alles Liebe zum Muttertag von Laifen.",#HappyMothersDay #Laifen,
11 May,Mon,,,,,,,,,Brand,父亲节KV,,,,
12 May,Tue,,,,,,,,,Community,父亲节Giveaway,,"Magst du es, wenn dein Papa seinen Bart trägt — oder nicht? 👀

👉 Ja — es steht ihm gut
👉 Nein — Zeit für eine Veränderung

Teile deine Antwort mit uns und sag uns warum 👇
(Je genauer, desto besser)

🎁 Wir wählen:
• 1 „Nein“-Antwort → gewinnt einen Laifen P3 Pro Rasierer für eine gründliche und schnelle Rasur
• 1 „Ja“-Antwort → gewinnt eine Laifen Wave Pro Zahnbürste für eine gründliche Reinigung jeden Tag

So nimmst du teil:
✔ Folge @laifen_de
✔ Kommentiere deine Antwort unten

Mal sehen, wie die Meinungen ausfallen 👀

📅 Endet am 16. Mai um 22:00 Uhr CET
📩 Die Gewinner werden per DM kontaktiert

Dieses Gewinnspiel steht in keiner Verbindung zu Instagram und wird weder von Instagram gesponsert noch unterstützt.

#Vatertag #GeschenkFürPapa #BesterPapa",#Gewinnspiel #Vatertag #GeschenkFürPapa #BesterPapa,
13 May,Wed,Brand,红人转载 P3 Pro,,"From “wait… I still need to shave”
to date-night ready in seconds. ✨

The Laifen P3 Pro electric shaver keeps up with every last-minute plan. 🪒⚡

🎥 Credit: @Afani and Mark",#Laifen #Shaver #ElectricShaver,,,,Brand,Last Minute Gift Guide,,"Zum Vatertag ein Geschenk für gepflegte Momente – jeden Tag. 🧡

Der Laifen P3 Pro Elektrorasierer kombiniert präzise Rasur mit modernster Technologie in einem kompakten Aluminium-Design.
Mit Dual-Linear-Motoren, intelligenter Dämpfung und leistungsstarken PID-Algorithmen sorgt er für eine gründliche, sanfte Rasur — jeden Tag.

⚡ Dual-Linear-Motoren mit 12.000 CPM
🪒 Präzise & angenehme Rasur
🔇 Dual-Dämpfungssystem für mehr Komfort
🔋 Bis zu 100 Minuten Akkulaufzeit
⚡ USB-C Fast Charging
💧 IPX7 wasserdicht für Nass- & Trockenrasur
✨ CNC-gefrästes Aluminiumgehäuse

Für Väter, Partner oder einfach für jeden, der tägliche Premium-Pflege verdient. 🧡",#HappyMothersDay #Laifen,
14 May,Thu,Brand,红人转载 Laifen mini,,"Small yet mighty. 💨✨

The Laifen MINI may fit in your bag, but it delivers big results to your everyday hair routine.

🎥 Credit: @britmanuela",#Laifenhairdryer #laifen #haircare,,,,,,,,,
18 May,Mon,Brand,Laifen Wave,,"PRO CLEAN. BRUSH SMARTER.

Meet the Laifen Wave Pro — designed to deliver a deeper, more professional clean wherever life takes you.

With powerful oscillation technology and up to 70 days of battery life, your oral care routine stays effortless at home and on the go. ✈️

✔️ Pro-level clean
✔️ Smart brushing experience
✔️ 70-day battery life

Shop now: ",#Laifen #ElectricToothbrush #LaifenWave #WaveMotion,,,,Brand,Laifen Wave,,"PRO CLEAN. SMARTER PUTZEN. 🪥✨

Die Laifen Wave Pro sorgt für ein professionelles Reinigungserlebnis — egal ob zu Hause oder unterwegs.

Mit kraftvoller Schalltechnologie und bis zu 70 Tagen Akkulaufzeit bleibt deine Mundpflege einfach, smart und jederzeit reisefertig. ✈️

✔️ Professionelle Reinigung
✔️ Smarteres Putzerlebnis
✔️ Bis zu 70 Tage Akkulaufzeit",#Laifen #Zahnbürste #ElektrischeZahnbürste #LaifenWave #WaveMotion,
19 May,Tue,Brand,Laifen Wave,,"FRESHNESS TRAVELS WITH YOU ✈️

Powered by pro-level WaveMotion™ Technology for an efficient, deeper clean wherever you go.

✔️ 60° Oscillations for effective plaque removal
✔️ Dual-Mode Cleaning System
✔️ Daily Clean & Deep Clean modes

Pack light. Clean pro.

Shop now — link in bio.
",#Laifen #ElectricToothbrush #LaifenWave #WaveMotion,,,,Brand,Laifen Wave,,"FRISCHE REIST MIT ✈️🪥

Angetrieben von der professionellen WaveMotion™ Technologie für eine effiziente und gründliche Reinigung — überall.

✔️ 60° Oszillationen für effektive Plaque-Entfernung
✔️ Dual-Mode Reinigungssystem
✔️ Daily Clean & Deep Clean Modi

Leicht im Gepäck. Professionell sauber.

Jetzt entdecken — Link in Bio.",#Laifen #LaifenWavePro #WaveMotion #DeepClean #OralCare #ElectricToothbrush #TravelReady,
25 May,Mon,Brand,红人转载,,"Laifen SE Lite High-Speed Hair Dryer vs. traditional hair dryer ⚡
Credit: @curlygirl_45",#hair #hairstyle #hairstylist #haircare #Laifen #curlygirl #GRWM,,,,,,,,,
26 May,Tue,Brand,红人转载,,"Laifen SE 2 gives you different drying and styling experiences with every temperature mode 💨✨
Credit: @haley__robinson",#hair #hairstyle #hairstylist #haircare #Laifen,,,,,,,,,
27 May,Wed,Brand,红人转载,,"Curly hair wash days feel way easier with the right dryer
@haley__robinson shares her experience using the Laifen SE Lite and why the difference feels noticeable during her routine.",#hair #hairstyle #hairstylist #haircare #Laifen #curlygirl #GRWM,,,,,,,,,
01 Jun,Mon,Brand,Prime Day预热,,"⚡Prime Day is almost here. ⚡

Use code SOCIALPD to unlock early savings on select Laifen favorites.

Because great hair, smooth shaves, and cleaner smiles shouldn't have to wait. ✨

Save now via the bio link. @laifen_tech",#primeday #amazondeals #amazonprime #couponcommunity #deals,,,,,,,"⚡Prime Day steht vor der Tür. ⚡

Mit dem Code **SOCIALPD** sicherst du dir schon jetzt exklusive Rabatte auf ausgewählte Laifen Favoriten.

Denn großartige Haare, eine gründliche Rasur und ein strahlendes Lächeln sollten nicht warten müssen. ✨

Link in der Bio. @laifen_de
",#primeday #amazonprimeday #amazondeals,
02 Jun,Tue,Brand,Prime Day互动素材,,"Prime Day is almost here. ⚡

Use code SOCIALPD to unlock early savings on selected Laifen favorites.

✨ Save up to 40% off.

And if you think that's the best part...

🎁 Our biggest Prime Day giveaway is just around the corner.

Follow along so you don't miss it.

🔗 Link in bio",#Primeday #Deals #Laifen #sale,,,,,,,"Der Prime Day steht vor der Tür. ⚡

Nutze den Code **SOCIALPD**, um dir vorab Rabatte auf ausgewählte Laifen-Favoriten zu sichern.

✨ **Bis zu 38% Rabatt.**

Und wenn du denkst, das war schon das Beste...

🎁 Unser größtes Prime Day-Gewinnspiel steht kurz bevor.
Folge uns, um nichts zu verpassen!

🔗 Link in der Bio",#Primeday #Sale,
03 Jun,Wed,Brand,红人活动预热,,,,,,,,,,,,
03 Jun,Wed,Brand,Air 预热 #1,,Something Light is Landing.,"
#LaifenAir #LaifenHairdryer #hairdryer #newproduct #newlaunch",,,,,,,Leichtigkeit im Landeanflug......,#LaifenAir #LaifenFöhn #Föhn #Neuheit,
04 Jun,Thu,Community,Air 预热 #2,,"What’s lighter than 9.88 oz around you? 👀

Apparently… quite a few things.

A scrunchie.
A baby avocado.
Your patience before coffee. ☕️

And now, the all-new Laifen Air Hair Dryer. 💨✨

👇 Tell us the lightest thing you can think of in the comments.

🎁 One lucky winner will receive a brand-new Laifen Air Hair Dryer after launch.

⏳ Giveaway ends June 10, 11:59 PM ET.

Open to residents of the US, Canada, UK, and EU. Winner will be randomly selected and contacted via DM.",#LaifenAir #Laifen #Giveaway #newproduct #newlaunch,,,,,,,"Was ist leichter als 280 g in deiner Nähe? 👀

Anscheinend ... so einiges.

• Ein Scrunchie
• Eine Mini-Avocado
• Deine Geduld vor dem ersten Kaffee ☕️
• Und jetzt auch der neue Laifen Air Haartrockner 💨✨

👇 Verrate uns in den Kommentaren das Leichteste, das dir einfällt.

🎁 Ein glücklicher Gewinner erhält nach dem Launch einen brandneuen Laifen Air Haartrockner.

⏳ Das Gewinnspiel endet am 10. Juni um 23:59 Uhr (ET).

Teilnahmeberechtigt sind Personen mit Wohnsitz in den USA, Kanada, Großbritannien und der EU. Der Gewinner wird per Zufallsprinzip ausgewählt und per Direktnachricht kontaktiert.",#LaifenAir #LaifenFöhn #Föhn #Giveaway #Laifen,
05 Jun,Fri,Community,Air 预热 #3,,"How many times do you switch hands while drying your hair? 👀

Some people never do.
Some are fighting for their lives halfway through. 💪😂

👇 Comment the number that sounds most like you:

💪 0 — Awesome
🙂 1 — Manageable
🥲 2–3 — Suffering quietly
😭 4+ — Send help

🎁 One lucky winner will receive the all-new Laifen Air Hair Dryer after launch.

⏳ Giveaway ends June 12, 11:59 PM ET.

Open to residents of the US, Canada, UK, and EU only.

The winner will be randomly selected and contacted via DM.",#LaifenAir #Laifen #Giveaway #newproduct #newlaunch,,,,,,,"Was glaubst du: Wie viel wird der neue Laifen Air kosten? 👀

Zeit für ein kleines Ratespiel. 💜

Wähle deinen Tipp:

💶 €60–80
💶 €80–100
💶 €100+

👇 Schreib deinen Preis-Tipp in die Kommentare.

🎁 Unter allen Teilnehmern verlosen wir einen brandneuen Laifen Air Haartrockner nach dem Launch.

⏳ Das Gewinnspiel endet am 12. Juni um 23:59 Uhr.

🇩🇪 Teilnahme nur für Personen mit Wohnsitz in Deutschland.

Der Gewinner wird per Zufallsprinzip ausgelost und per DM benachrichtigt.",#LaifenAir #LaifenFöhn #Föhn #Giveaway #Laifen,
05 Jun,Fri,,Air 预热 #3,,,,,,,,,,"Wie oft wechselst du beim Föhnen die Hand? 👀

Manche wechseln nie.
Andere kämpfen schon nach der Hälfte ums Überleben. 💪😂

👇 Schreib deine Zahl in die Kommentare:

💪 0 — Stark
🙂 1 — Noch okay
🥲 2–3 — Leise am Leiden
😭 4+ — Hilfe!

🎁 Ein glücklicher Gewinner erhält nach dem Launch einen brandneuen Laifen Air Haartrockner.

⏳ Das Gewinnspiel endet am 12. Juni um 23:59 Uhr.

🇩🇪 Teilnahme nur für Personen mit Wohnsitz in Deutschland.

Der Gewinner wird nach dem Zufallsprinzip ausgelost und per DM benachrichtigt.",#LaifenAir #LaifenFöhn #Föhn #Giveaway #Laifen #Giveaway,
06 Jun,Sat,Community,Air 预热 #4,,,,,,,,,,,,
08 Jun,Mon,Brand,BRAD官宣合作,,"Brad Mondo × Laifen
We're excited to welcome Brad Mondo as Laifen's Pro Styling Partner
As one of the most trusted voices in haircare, Brad brings professional insight, real-world experience, and a passion for helping people achieve healthier hair every day.
Want to see his Laifen recommendations?

🎥 Head to @BradMondo YouTube channel to watch the full video.
🎁 Use code Brad10 for exclusive savings on your favorite Laifen products.
Here's to better hair days ahead. ✨
#BradMondo #Laifen #HairCare #HairExpertPartner #HealthyHair #HairDryer",,,,,,,,,,
08 Jun,Mon,Brand,红人活动现场反图,,,,,,,,,,,,
08 Jun,Mon,Brand,PD KV,,"⚡ PRIME DAY DEALS ARE LIVE ⚡

Save up to 40% OFF

Plus, use code SOCIALPD for extra savings.

🌎 Available in: US, CA, EU & DE

🛒 Shop Now: https://bit.ly/m/laifenshop

*Amazon discounts may vary by product. Check the notes in the link for offer details.",#primeday #amazondeals #amazonprime #couponcommunity #deals,,,,,,,"⚡ PRIME-DAY-ANGEBOTE SIND JETZT LIVE ⚡

Spare bis zu 38 %

Sichere dir mit dem Code SOCIALPD zusätzliche Ersparnisse.

🛒 Jetzt einkaufen: https://bit.ly/m/laifende
 

*Die Amazon-Rabatte können je nach Produkt variieren. Details zu den jeweiligen Angeboten findest du in den Hinweisen des Links.",#primeday #amazonprimeday #amazondeals,
09 Jun,Tue,,"Hair Dryer Guide
SE 2",,,,,,,,,,,,
09 Jun,Tue,,"Hair Dryer Guide
SE Lite",,,,,,,,,,,,
10 Jun,Wed,Brand,"Laifen Air正式上线
TVC",,,,,,,,,,,,
11 Jun,Thu,Brand,"GLEAM 活动开始
(PD+Air)",,,,,,,,,,,,
11 Jun,Thu,Brand,"Laifen Air KSP #1
轻+小",,,,,,,,,,,,
12 Jun,,Brand,Brad 视频,短视频二剪,,,,,,,,,,,
12 Jun,Fri,Brand,"Laifen Air KSP #2
轻",,,,,,,,,,,,
12 Jun,Fri,Brand,Toothbrush Guide,,,,,,,,,,,,
13 Jun,Sat,Brand,Toothbrush Guide,,,,,,,,,,,,
13 Jun,Sat,,"Laifen Air KSP #3
小",,,,,,,,,,,,
14 Jun,Sun,,Shaver Guide,,,,,,,,,,,,
14 Jun,Sun,,"Laifen Air KSP #4
轻+小",,,,,,,,,,,,
15 Jun,Mon,,Shaver Guide,,,,,,,,,,,,
15 Jun,Mon,,"Laifen Air KSP #5
小",,,,,,,,,,,,
16 Jun,Tue,,信息流剪辑- 吹风机,,,,,,,,,,,,
16 Jun,Tue,,"Laifen Air KSP #6
小",,,,,,,,,,,,
17 Jun,Wed,,信息流剪辑- 牙刷,,,,,,,,,,,,
17 Jun,Wed,,"Laifen Air KSP #7
快干，轻",,,,,,,,,,,,
18 Jun,Thu,,信息流剪辑- 剃须刀,,,,,,,,,,,,
18 Jun,Thu,,"Laifen Air KSP #8
轻",,,,,,,,,,,,
19 Jun,Fri,,红人转载,,,,,,,,,,,,
19 Jun,Fri,,"Laifen Air KSP #9
年轻",,,,,,,,,,,,
20 Jun,Sat,,如何获得最优惠的Laifen产品（路径引导）,,,,,,,,,,,,
20 Jun,,,"Laifen Air KSP #10
儿童模式",,,,,,,,,,,,
21 Jun,Sun,,Father’s Day,,,,,,,,,,,,
21 Jun,,,一图读懂,,,,,,,,,,,,
22 Jun,Mon,,红人转载,,,,,,,,,,,,
22 Jun,Mon,,SE 2 视频,,,,,,,,,,,,
22 Jun,,Brand,Brad Quote,,,,,,,,,,,,
23 Jun,Tue,,正日子KV,,,,,,,,,,,,
15 Jul,Wed,,Give Something Away Day,,,,,,,,,,,,
08 Aug,Sat,,International Cat Day,,,,,,,,,,,,
26 Aug,Wed,,National Dog Day,,,,,,,,,,,,
31 Oct,Sat,,Halloween,,,,,,,,,,,,
26 Nov,Thu,,Thanksgiving Day,,,,,,,,,,,,
27 Nov,Fri,,Black Friday,,,,,,,,,,,,
30 Nov,Mon,,Cyber Monday,,,,,,,,,,,,
25 Dec,Fri,,Christmas Day ,,,,,,,,,,,,
31 Dec,,,New Year’s Eve,,,,,,,,,,,,`,Jp={jan:1,january:1,feb:2,february:2,mar:3,march:3,apr:4,april:4,may:5,jun:6,june:6,jul:7,july:7,aug:8,august:8,sep:9,sept:9,september:9,oct:10,october:10,nov:11,november:11,dec:12,december:12},ed={NA:{pillar:2,focus:3,asset:4,postCopy:5,hashtags:6,contentType:7,notes:8},DE:{pillar:10,focus:11,asset:12,postCopy:13,hashtags:14,contentType:15,notes:16}};function Qp(a){const o=[];let s=[],u="",d=!1;for(let h=0;h<a.length;h+=1){const w=a[h],S=a[h+1];if(w==='"'){d&&S==='"'?(u+='"',h+=1):d=!d;continue}if(w===","&&!d){s.push(u),u="";continue}if((w===`
`||w==="\r")&&!d){w==="\r"&&S===`
`&&(h+=1),s.push(u),o.push(s),s=[],u="";continue}u+=w}return(u.length>0||s.length>0)&&(s.push(u),o.push(s)),o}function bc(a){return a.replace(/\r/g,"").split(/\s*\d+\.\s*/g).map(o=>o.trim()).filter(Boolean)}function Yp(a){const s=a.trim().replace(/\s+/g," ").match(/^(\d{1,2})\s+([A-Za-z]+)$/);if(!s)return null;const u=Number(s[1]),d=Jp[s[2].toLowerCase()];return!d||!Number.isFinite(u)?null:`${Fn}-${String(d).padStart(2,"0")}-${String(u).padStart(2,"0")}`}function Pc(a,o){const s=ed[o];return[s.pillar,s.focus,s.asset,s.postCopy,s.hashtags,s.contentType,s.notes].some(u=>(a[u]??"").trim().length>0)}function Tc(a,o,s,u){const d=ed[o],h=(a[1]??"").trim()||Ar(u);return{id:`seed-${u}-${o}-${s}`,date:u,dayOfWeek:h,region:o,pillar:(a[d.pillar]??"").trim(),focus:(a[d.focus]??"").trim(),asset:(a[d.asset]??"").trim(),postCopy:(a[d.postCopy]??"").trim(),hashtags:(a[d.hashtags]??"").trim(),contentType:(a[d.contentType]??"").trim(),notes:(a[d.notes]??"").trim()}}function qp(a){const o=Qp(a),s=o[0]??[],u=[],d={NA:bc(s[2]??""),DE:bc(s[10]??"")};return o.slice(2).forEach((h,w)=>{const S=Yp(h[0]??"");S&&(Pc(h,"NA")&&u.push(Tc(h,"NA",w,S)),Pc(h,"DE")&&u.push(Tc(h,"DE",w,S)))}),ol.map((h,w)=>{const S=w+1,L=u.filter(F=>F.date.startsWith(`${Fn}-${String(S).padStart(2,"0")}`));return{year:Fn,month:S,highlights:S===1?d:{NA:[],DE:[]},posts:L}})}function Xp(){return qp(Zp)}function eg(a,o){const s=Jm(a.month,o).map(u=>u.labels[o]);return[...a.highlights[o],...s]}const ng={NA:"North America",DE:"Germany"};function tg({monthData:a}){return p.jsx("section",{className:"grid gap-3 md:grid-cols-2",children:["NA","DE"].map(o=>{const s=eg(a,o);return p.jsxs("div",{className:"min-w-0 rounded-[8px] border border-zinc-200 bg-white/88 p-3",children:[p.jsxs("div",{className:"mb-2 flex items-center gap-2 text-laifen-ink",children:[p.jsx(gh,{size:16}),p.jsxs("h3",{className:"text-sm font-semibold",children:[ng[o]," · ",ea(a.month)]})]}),p.jsx("div",{className:"calendar-scrollbar flex gap-2 overflow-x-auto pb-1",children:s.length>0?s.map(u=>p.jsx("span",{className:"shrink-0 rounded-full border border-zinc-200 bg-laifen-mist px-3 py-1 text-xs font-medium text-laifen-graphite",children:u},`${o}-${u}`)):p.jsx("span",{className:"rounded-full border border-zinc-200 bg-laifen-mist px-3 py-1 text-xs font-medium text-laifen-graphite",children:"Planning window"})})]},o)})})}function rg({selectedMonth:a,onSelectMonth:o}){const s=()=>{o(a===1?12:a-1)},u=()=>{o(a===12?1:a+1)};return p.jsx("section",{className:"rounded-[8px] border border-zinc-200 bg-white/86 p-3 shadow-sm backdrop-blur",children:p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("button",{"aria-label":"Previous month",className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] border border-zinc-200 text-laifen-graphite transition hover:border-laifen-cyan hover:text-laifen-ink",type:"button",onClick:s,children:p.jsx(yh,{size:18})}),p.jsx("div",{className:"calendar-scrollbar grid min-w-0 flex-1 grid-flow-col auto-cols-[minmax(7.2rem,1fr)] gap-2 overflow-x-auto pb-1",children:ol.map((d,h)=>{const w=h+1,S=a===w;return p.jsxs("button",{className:["rounded-[8px] border px-3 py-2 text-left transition",S?"border-laifen-ink bg-laifen-ink text-white shadow-sm":"border-zinc-200 bg-white text-laifen-graphite hover:border-laifen-cyan hover:text-laifen-ink"].join(" "),type:"button",onClick:()=>o(w),children:[p.jsx("span",{className:"block text-[0.68rem] font-semibold uppercase tracking-[0.12em] opacity-70",children:"2026"}),p.jsx("span",{className:"block truncate text-sm font-semibold",children:d})]},d)})}),p.jsx("button",{"aria-label":"Next month",className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] border border-zinc-200 text-laifen-graphite transition hover:border-laifen-cyan hover:text-laifen-ink",type:"button",onClick:u,children:p.jsx(vh,{size:18})})]})})}function ig(a){return a==="uploading…"?!1:/^(https?:|\/\/|data:image\/)/.test(a)}function ag({post:a,onEdit:o}){return p.jsxs("article",{className:"rounded-[8px] border border-zinc-200 bg-white p-4 shadow-sm",children:[p.jsxs("div",{className:"mb-3 flex items-start justify-between gap-3",children:[p.jsxs("div",{className:"min-w-0",children:[p.jsxs("div",{className:"mb-2 flex flex-wrap items-center gap-2",children:[p.jsx("span",{className:"rounded-full bg-laifen-ink px-2.5 py-1 text-xs font-semibold text-white",children:a.region}),a.contentType&&p.jsx("span",{className:"rounded-full border border-laifen-cyan/40 bg-laifen-cyan/10 px-2.5 py-1 text-xs font-semibold text-laifen-graphite",children:a.contentType})]}),p.jsx("h3",{className:"truncate text-base font-semibold text-laifen-ink",children:a.focus||"Untitled post"}),p.jsxs("p",{className:"text-xs font-medium text-zinc-500",children:[a.date," · ",a.dayOfWeek]})]}),p.jsx("button",{"aria-label":"Edit post",className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] border border-zinc-200 text-laifen-graphite transition hover:border-laifen-cyan hover:text-laifen-ink",type:"button",onClick:()=>o(a),children:p.jsx(Ac,{size:16})})]}),p.jsxs("dl",{className:"grid gap-3 text-sm",children:[p.jsxs("div",{className:"flex gap-2",children:[p.jsx(bh,{className:"mt-0.5 shrink-0 text-laifen-cyan",size:16}),p.jsxs("div",{className:"min-w-0",children:[p.jsx("dt",{className:"text-xs font-semibold uppercase tracking-[0.12em] text-zinc-400",children:"Pillar"}),p.jsx("dd",{className:"break-words text-laifen-graphite",children:a.pillar||"Open"})]})]}),a.asset&&p.jsxs("div",{className:"flex gap-2",children:[p.jsx(Fc,{className:"mt-0.5 shrink-0 text-laifen-coral",size:16}),p.jsxs("div",{className:"min-w-0 flex-1",children:[p.jsx("dt",{className:"text-xs font-semibold uppercase tracking-[0.12em] text-zinc-400",children:"Asset"}),p.jsx("dd",{className:"mt-1",children:ig(a.asset)?p.jsx("a",{className:"group block overflow-hidden rounded-[8px] border border-zinc-200",href:a.asset,rel:"noreferrer",target:"_blank",children:p.jsx("img",{alt:a.focus||"Post asset",className:"h-32 w-full object-cover transition group-hover:scale-[1.02]",src:a.asset})}):p.jsxs("a",{className:"inline-flex max-w-full items-center gap-1 text-laifen-graphite underline decoration-zinc-300 underline-offset-4 hover:text-laifen-ink",href:a.asset.startsWith("http")?a.asset:void 0,rel:"noreferrer",target:"_blank",children:[p.jsx("span",{className:"truncate",children:a.asset}),a.asset.startsWith("http")&&p.jsx(jc,{size:13})]})})]})]}),a.postCopy&&p.jsxs("div",{className:"flex gap-2",children:[p.jsx(Lh,{className:"mt-0.5 shrink-0 text-laifen-green",size:16}),p.jsxs("div",{className:"min-w-0",children:[p.jsx("dt",{className:"text-xs font-semibold uppercase tracking-[0.12em] text-zinc-400",children:"Post Copy"}),p.jsx("dd",{className:"whitespace-pre-line break-words leading-relaxed text-laifen-graphite",children:a.postCopy})]})]}),a.hashtags&&p.jsxs("div",{className:"flex gap-2",children:[p.jsx(Mh,{className:"mt-0.5 shrink-0 text-laifen-cyan",size:16}),p.jsxs("div",{className:"min-w-0",children:[p.jsx("dt",{className:"text-xs font-semibold uppercase tracking-[0.12em] text-zinc-400",children:"Hashtags"}),p.jsx("dd",{className:"break-words text-laifen-graphite",children:a.hashtags})]})]}),a.notes&&p.jsxs("div",{className:"flex gap-2",children:[p.jsx(zh,{className:"mt-0.5 shrink-0 text-laifen-coral",size:16}),p.jsxs("div",{className:"min-w-0",children:[p.jsx("dt",{className:"text-xs font-semibold uppercase tracking-[0.12em] text-zinc-400",children:"Notes"}),p.jsx("dd",{className:"break-words text-laifen-graphite",children:a.notes})]})]})]})]})}const og=["Carousel","Reel","Static","Story","Video","Live"],lg=["Brand","Community","Education","Inspiration","Product"];function Nc(a,o){return{date:a,region:o,pillar:"",focus:"",asset:"",postCopy:"",hashtags:"",contentType:"",notes:""}}function sg({date:a,isOpen:o,post:s,region:u,onClose:d,onDelete:h,onSave:w}){const[S,L]=se.useState(()=>s??Nc(a,u));if(se.useEffect(()=>{L(s??Nc(a,u))},[a,s,u]),!o)return null;const F=(P,$)=>{L(re=>({...re,[P]:$}))},B=P=>{P.preventDefault(),w(S)};return p.jsx("div",{className:"fixed inset-0 z-50 flex items-end justify-center bg-laifen-ink/44 p-3 backdrop-blur-sm sm:items-center",children:p.jsxs("form",{className:"max-h-[94vh] w-full max-w-3xl overflow-y-auto rounded-[8px] border border-zinc-200 bg-white shadow-2xl",onSubmit:B,children:[p.jsxs("header",{className:"sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-zinc-200 bg-white/95 px-5 py-4 backdrop-blur",children:[p.jsxs("div",{className:"min-w-0",children:[p.jsxs("p",{className:"text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500",children:[S.region," · ",S.date]}),p.jsx("h2",{className:"truncate text-lg font-semibold text-laifen-ink",children:s?"Edit post":"New post"})]}),p.jsx("button",{"aria-label":"Close editor",className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] border border-zinc-200 text-laifen-graphite transition hover:border-laifen-cyan hover:text-laifen-ink",type:"button",onClick:d,children:p.jsx(jh,{size:17})})]}),p.jsxs("div",{className:"grid gap-4 p-5 sm:grid-cols-2",children:[p.jsxs("label",{className:"grid gap-1 text-sm font-semibold text-laifen-graphite",children:["Date",p.jsx("input",{className:"rounded-[8px] border border-zinc-200 px-3 py-2 font-normal text-laifen-ink outline-none transition focus:border-laifen-cyan focus:ring-2 focus:ring-laifen-cyan/20",type:"date",value:S.date,onChange:P=>F("date",P.target.value)})]}),p.jsxs("label",{className:"grid gap-1 text-sm font-semibold text-laifen-graphite",children:["Region",p.jsxs("select",{className:"rounded-[8px] border border-zinc-200 px-3 py-2 font-normal text-laifen-ink outline-none transition focus:border-laifen-cyan focus:ring-2 focus:ring-laifen-cyan/20",value:S.region,onChange:P=>F("region",P.target.value),children:[p.jsx("option",{value:"NA",children:"North America"}),p.jsx("option",{value:"DE",children:"Germany"})]})]}),p.jsxs("label",{className:"grid gap-1 text-sm font-semibold text-laifen-graphite",children:["Pillar",p.jsx("input",{className:"rounded-[8px] border border-zinc-200 px-3 py-2 font-normal text-laifen-ink outline-none transition focus:border-laifen-cyan focus:ring-2 focus:ring-laifen-cyan/20",list:"pillar-options",value:S.pillar,onChange:P=>F("pillar",P.target.value)})]}),p.jsxs("label",{className:"grid gap-1 text-sm font-semibold text-laifen-graphite",children:["Focus",p.jsx("input",{className:"rounded-[8px] border border-zinc-200 px-3 py-2 font-normal text-laifen-ink outline-none transition focus:border-laifen-cyan focus:ring-2 focus:ring-laifen-cyan/20",value:S.focus,onChange:P=>F("focus",P.target.value)})]}),p.jsxs("label",{className:"grid gap-1 text-sm font-semibold text-laifen-graphite sm:col-span-2",children:["Asset",p.jsx("input",{className:"rounded-[8px] border border-zinc-200 px-3 py-2 font-normal text-laifen-ink outline-none transition focus:border-laifen-cyan focus:ring-2 focus:ring-laifen-cyan/20",placeholder:"https://",value:S.asset,onChange:P=>F("asset",P.target.value)})]}),p.jsxs("label",{className:"grid gap-1 text-sm font-semibold text-laifen-graphite sm:col-span-2",children:["Post Copy",p.jsx("textarea",{className:"min-h-40 rounded-[8px] border border-zinc-200 px-3 py-2 font-normal leading-relaxed text-laifen-ink outline-none transition focus:border-laifen-cyan focus:ring-2 focus:ring-laifen-cyan/20",value:S.postCopy,onChange:P=>F("postCopy",P.target.value)})]}),p.jsxs("label",{className:"grid gap-1 text-sm font-semibold text-laifen-graphite sm:col-span-2",children:["Hashtags",p.jsx("textarea",{className:"min-h-24 rounded-[8px] border border-zinc-200 px-3 py-2 font-normal leading-relaxed text-laifen-ink outline-none transition focus:border-laifen-cyan focus:ring-2 focus:ring-laifen-cyan/20",value:S.hashtags,onChange:P=>F("hashtags",P.target.value)})]}),p.jsxs("label",{className:"grid gap-1 text-sm font-semibold text-laifen-graphite",children:["Content Type",p.jsx("input",{className:"rounded-[8px] border border-zinc-200 px-3 py-2 font-normal text-laifen-ink outline-none transition focus:border-laifen-cyan focus:ring-2 focus:ring-laifen-cyan/20",list:"content-type-options",value:S.contentType,onChange:P=>F("contentType",P.target.value)})]}),p.jsxs("label",{className:"grid gap-1 text-sm font-semibold text-laifen-graphite",children:["Notes",p.jsx("input",{className:"rounded-[8px] border border-zinc-200 px-3 py-2 font-normal text-laifen-ink outline-none transition focus:border-laifen-cyan focus:ring-2 focus:ring-laifen-cyan/20",value:S.notes,onChange:P=>F("notes",P.target.value)})]})]}),p.jsx("datalist",{id:"pillar-options",children:lg.map(P=>p.jsx("option",{value:P},P))}),p.jsx("datalist",{id:"content-type-options",children:og.map(P=>p.jsx("option",{value:P},P))}),p.jsxs("footer",{className:"flex flex-col-reverse gap-2 border-t border-zinc-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between",children:[p.jsx("div",{children:s&&p.jsxs("button",{className:"inline-flex items-center justify-center gap-2 rounded-[8px] border border-red-200 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50",type:"button",onClick:()=>h(s.id),children:[p.jsx(Wh,{size:16}),"Delete"]})}),p.jsxs("button",{className:"inline-flex items-center justify-center gap-2 rounded-[8px] bg-laifen-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-black",type:"submit",children:[p.jsx(Dh,{size:16}),"Save"]})]})]})})}const ug="https://laifen-calendar-worker.leanderlaifen.workers.dev",cg="RgFqbx0bxa0l1DsQyOccbe7mn7g",dg=`https://f1l5e2ythy.feishu.cn/base/${cg}`;async function fg(a){const o=await fetch(`${ug}/api/posts`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!o.ok)throw new Error("Failed to save post");return o.json()}function hg(a){return new Intl.DateTimeFormat(void 0,{hour:"2-digit",minute:"2-digit"}).format(a)}function mg({posts:a}){const[o,s]=se.useState("idle"),[u,d]=se.useState(null),h=async()=>{s("syncing");try{for(const L of a)await fg(L);d(new Date),s("success")}catch(L){console.error(L),s("error")}},w=o==="syncing"?p.jsx(Th,{className:"animate-spin",size:16}):o==="success"?p.jsx(kh,{size:16}):o==="error"?p.jsx(wh,{size:16}):p.jsx(Sh,{size:16}),S=o==="syncing"?"Syncing…":o==="success"?`Synced ${u?hg(u):""}`:o==="error"?"Sync failed":"Sync to Bitable";return p.jsxs(p.Fragment,{children:[p.jsxs("button",{className:"inline-flex items-center justify-center gap-2 rounded-[8px] border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-laifen-graphite transition hover:border-laifen-cyan hover:text-laifen-ink",disabled:o==="syncing",type:"button",onClick:h,children:[w,S]}),p.jsxs("a",{href:dg,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 rounded-[8px] border border-zinc-200 px-3 py-2 text-xs font-semibold text-laifen-graphite transition hover:border-laifen-cyan hover:text-laifen-ink",children:[p.jsx(jc,{size:14})," Bitable"]})]})}const pg="https://laifen-calendar-worker.leanderlaifen.workers.dev";async function gg(a){const o=new FormData;o.append("file",a);const s=await fetch(`${pg}/api/upload`,{method:"POST",body:o});if(!s.ok){const d=await s.text();throw new Error(`上传失败 (${s.status}): ${d}`)}const u=await s.json();if(u.code!==0)throw new Error(`飞书 API 错误: ${u.msg||"未知错误"}`);return{file_token:u.data.file_token,url:u.data.url,name:u.data.name,size:u.data.size}}const nd="laifen-social-calendar-2026:v1",td=Xp(),Fr=td.flatMap(a=>a.posts);function rd(){return typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():`post-${Date.now()}-${Math.random().toString(36).slice(2)}`}function yg(){if(typeof window>"u")return Fr;const a=window.localStorage.getItem(nd);if(!a)return Fr;try{const o=JSON.parse(a);return Array.isArray(o)?o:Fr}catch{return Fr}}function rt(a){return a.slice().sort((o,s)=>{const u=o.date.localeCompare(s.date);return u!==0?u:o.region.localeCompare(s.region)})}function vg(a){return{id:a.id??rd(),date:a.date,dayOfWeek:Ar(a.date),region:a.region,pillar:a.pillar.trim(),focus:a.focus.trim(),asset:a.asset.trim(),postCopy:a.postCopy.trim(),hashtags:a.hashtags.trim(),contentType:a.contentType.trim(),notes:a.notes.trim()}}function Dc(a){return Number(a.slice(5,7))}function wg(){const a=se.useRef(null),[o,s]=se.useState(1),[u,d]=se.useState(tl(1)),[h,w]=se.useState(()=>rt(yg())),[S,L]=se.useState(null),[F,B]=se.useState(!1),[P,$]=se.useState(()=>localStorage.getItem("feishu_token")||"");se.useEffect(()=>{window.localStorage.setItem(nd,JSON.stringify(h))},[h]),se.useEffect(()=>{d(tl(o))},[o]);const re=se.useMemo(()=>h.filter(_=>_.date.startsWith(`${Fn}-${String(o).padStart(2,"0")}`)),[h,o]),q=se.useMemo(()=>({...td[o-1],posts:re}),[o,re]),G=se.useMemo(()=>h.filter(_=>_.date===u),[h,u]),V=(_,Y)=>{L({date:_,region:Y,post:null}),d(_)},Ne=_=>{L({date:_.date,region:_.region,post:_}),d(_.date)},Ke=_=>{const Y=vg(_);w(ue=>{const Pe=ue.some(ie=>ie.id===Y.id)?ue.map(ie=>ie.id===Y.id?Y:ie):[...ue,Y];return rt(Pe)}),s(Dc(Y.date)),d(Y.date),L(null)},Be=async(_,Y,ue)=>{const Ae=h.filter(ie=>ie.date===_&&ie.region===Y),Pe=rd();if(Ae.length>0){const ie={...Ae[0],asset:"uploading…"};w(Ee=>rt(Ee.map(Se=>Se.id===ie.id?ie:Se)))}else{const ie={id:Pe,date:_,dayOfWeek:Ar(_),region:Y,pillar:"",focus:"",asset:"uploading…",postCopy:"",hashtags:"",contentType:"",notes:""};w(Ee=>rt([...Ee,ie]))}d(_);try{const ie=await gg(ue);w(Ee=>rt(Ee.map(Se=>Se.date===_&&Se.region===Y&&(Ae.length>0?Se.id===Ae[0].id:Se.id===Pe)?{...Se,asset:ie.url}:Se)))}catch(ie){console.error("Feishu Drive upload failed, falling back to data URL:",ie);const Ee=new FileReader;Ee.onload=()=>{w(Se=>rt(Se.map(xe=>xe.date===_&&xe.region===Y&&(Ae.length>0?xe.id===Ae[0].id:xe.id===Pe)?{...xe,asset:Ee.result}:xe)))},Ee.readAsDataURL(ue)}},be=_=>{w(Y=>Y.filter(ue=>ue.id!==_)),L(null)},Oe=(_,Y,ue)=>{w(Ae=>rt(Ae.map(Pe=>Pe.id===_?{...Pe,date:Y,dayOfWeek:Ar(Y)}:Pe))),d(Y),s(Dc(Y))},K=()=>{w(rt(Fr)),s(1),d(tl(1))},ke=()=>{localStorage.setItem("feishu_token",P.trim()),B(!1)};return p.jsxs("div",{className:"min-h-screen px-3 py-4 text-laifen-ink sm:px-5 lg:px-8",children:[p.jsxs("div",{className:"mx-auto grid max-w-[1400px] gap-4",children:[p.jsxs("header",{className:"flex flex-col gap-3 rounded-[8px] border border-zinc-200 bg-white/82 p-4 shadow-sm backdrop-blur md:flex-row md:items-center md:justify-between",children:[p.jsxs("div",{className:"flex min-w-0 items-center gap-3",children:[p.jsx("div",{className:"flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] bg-laifen-ink text-lg font-black text-white",children:"L"}),p.jsxs("div",{className:"min-w-0",children:[p.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.18em] text-zinc-500",children:"Laifen"}),p.jsx("h1",{className:"truncate text-2xl font-semibold tracking-normal text-laifen-ink",children:"2026 Social Media Calendar"})]})]}),p.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[p.jsxs("button",{className:"inline-flex items-center justify-center gap-1 rounded-[8px] border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold text-laifen-graphite transition hover:border-laifen-cyan hover:text-laifen-ink",type:"button",onClick:()=>B(!F),children:[p.jsx(Ch,{size:14}),P?"Token ✓":"Set Token"]}),p.jsxs("button",{className:"inline-flex items-center justify-center gap-2 rounded-[8px] border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-laifen-graphite transition hover:border-laifen-cyan hover:text-laifen-ink",type:"button",onClick:K,children:[p.jsx(Nh,{size:16}),"Seed"]}),p.jsx(mg,{posts:h}),p.jsx(Kp,{month:o,targetRef:a})]})]}),F&&p.jsxs("div",{className:"rounded-[8px] border border-laifen-cyan/40 bg-white/90 p-4 shadow-sm backdrop-blur",children:[p.jsxs("div",{className:"flex flex-col gap-2 sm:flex-row sm:items-center",children:[p.jsx("label",{className:"text-sm font-semibold text-laifen-graphite whitespace-nowrap",children:"飞书 Tenant Token:"}),p.jsx("input",{className:"flex-1 rounded-[6px] border border-zinc-300 bg-white px-3 py-2 text-sm text-laifen-ink placeholder:text-zinc-400 focus:border-laifen-cyan focus:outline-none",placeholder:"t-g1...",type:"password",value:P,onChange:_=>$(_.target.value),onKeyDown:_=>{_.key==="Enter"&&ke()}}),p.jsx("button",{className:"inline-flex items-center justify-center gap-2 rounded-[6px] bg-laifen-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-laifen-graphite",type:"button",onClick:ke,children:"保存"})]}),p.jsx("p",{className:"mt-1.5 text-xs text-zinc-400",children:"从飞书开放平台获取，用于上传图片到飞书 Drive"})]}),p.jsx(rg,{selectedMonth:o,onSelectMonth:s}),p.jsxs("section",{ref:a,className:"export-board relative overflow-hidden rounded-[8px] border border-zinc-200 bg-laifen-mist p-4 shadow-sm",children:[p.jsxs("div",{className:"pointer-events-none absolute bottom-4 right-5 z-20 text-right text-[0.66rem] font-black uppercase tracking-[0.22em] text-laifen-ink/18",children:["Laifen · ",Fn]}),p.jsxs("div",{className:"mb-4 flex flex-wrap items-end justify-between gap-3",children:[p.jsxs("div",{className:"min-w-0",children:[p.jsxs("div",{className:"mb-1 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-laifen-graphite",children:[p.jsx(ph,{size:14}),"Month ",String(o).padStart(2,"0")]}),p.jsxs("h2",{className:"truncate text-4xl font-semibold tracking-normal text-laifen-ink",children:[ea(o)," ",Fn]})]}),p.jsxs("div",{className:"grid grid-cols-2 gap-2 text-right text-sm font-semibold text-laifen-graphite",children:[p.jsx("span",{className:"rounded-full border border-laifen-cyan/50 bg-white px-3 py-1",children:"NA"}),p.jsx("span",{className:"rounded-full border border-laifen-green/60 bg-white px-3 py-1",children:"DE"})]})]}),p.jsx("div",{className:"mb-4",children:p.jsx(tg,{monthData:q})}),p.jsx("div",{className:"calendar-scrollbar overflow-x-auto pb-2",children:p.jsxs("div",{className:"grid min-w-[61rem] grid-cols-2 gap-4",children:[p.jsx(wc,{month:o,posts:re,region:"NA",selectedDate:u,onAddPost:V,onEditPost:Ne,onSelectDate:d,onDropImage:Be,onMovePost:Oe}),p.jsx(wc,{month:o,posts:re,region:"DE",selectedDate:u,onAddPost:V,onEditPost:Ne,onSelectDate:d,onDropImage:Be,onMovePost:Oe})]})})]}),p.jsxs("section",{className:"grid gap-4 rounded-[8px] border border-zinc-200 bg-white/86 p-4 shadow-sm backdrop-blur",children:[p.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[p.jsxs("div",{children:[p.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.16em] text-zinc-500",children:"Selected Date"}),p.jsxs("h2",{className:"text-xl font-semibold text-laifen-ink",children:[u," · ",Ar(u)]})]}),p.jsx("div",{className:"flex gap-2",children:["NA","DE"].map(_=>p.jsxs("button",{className:"inline-flex items-center justify-center gap-2 rounded-[8px] border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold text-laifen-graphite transition hover:border-laifen-cyan hover:text-laifen-ink",type:"button",onClick:()=>V(u,_),children:[p.jsx(Rc,{size:15}),_]},`add-${_}`))})]}),p.jsx("div",{className:"grid gap-4 lg:grid-cols-2",children:["NA","DE"].map(_=>{const Y=G.filter(ue=>ue.region===_);return p.jsxs("div",{className:"grid gap-3",children:[p.jsxs("div",{className:"flex items-center justify-between border-b border-zinc-200 pb-2",children:[p.jsx("h3",{className:"text-sm font-bold uppercase tracking-[0.14em] text-laifen-graphite",children:_==="NA"?"North America":"Germany"}),p.jsxs("span",{className:"rounded-full bg-laifen-mist px-2.5 py-1 text-xs font-semibold text-zinc-500",children:[Y.length," posts"]})]}),Y.length>0?Y.map(ue=>p.jsx(ag,{post:ue,onEdit:Ne},ue.id)):p.jsx("div",{className:"rounded-[8px] border border-dashed border-zinc-300 bg-laifen-mist/70 p-4 text-sm font-medium text-zinc-500",children:"No posts scheduled"})]},`details-${_}`)})})]})]}),p.jsx(sg,{date:(S==null?void 0:S.date)??u,isOpen:!!S,post:(S==null?void 0:S.post)??null,region:(S==null?void 0:S.region)??"NA",onClose:()=>L(null),onDelete:be,onSave:Ke})]})}dh.createRoot(document.getElementById("root")).render(p.jsx(ih.StrictMode,{children:p.jsx(wg,{})}));
