const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GLTFLoader-Bf35660z.js","assets/three.core-nbKIHe-i.js","assets/BufferGeometryUtils-CSl_zOCZ.js"])))=>i.map(i=>d[i]);
import{$n as e,A as t,Ar as n,B as r,Bt as i,Cr as a,Ct as o,D as s,Dr as c,Dt as l,E as u,Er as d,Et as f,F as p,Fr as m,Ft as h,G as g,Gn as _,H as v,Ht as y,I as b,In as x,Ir as S,J as C,Jn as w,K as T,Kn as E,L as D,Ln as O,Lr as k,Lt as A,M as j,Mn as ee,Mr as te,Mt as M,Nn as N,Nr as P,Nt as ne,O as re,Or as ie,P as ae,Pr as oe,Pt as se,Q as F,R as ce,Rn as le,Rr as I,Rt as L,S as ue,Sr as R,St as z,T as B,Tr as de,Tt as fe,Un as pe,Ut as me,Vt as he,Wn as ge,Wt as _e,Xn as ve,Xt as ye,Yn as be,_ as xe,_r as Se,_t as Ce,a as we,ar as Te,at as Ee,b as De,br as Oe,bt as ke,c as Ae,dr as je,en as V,f as Me,fr as Ne,ft as Pe,gt as H,h as Fe,hr as Ie,ht as Le,i as U,j as W,jn as Re,jr as ze,jt as G,k as Be,kr as Ve,lr as He,lt as Ue,m as K,mt as We,o as Ge,or as Ke,ot as qe,p as Je,pr as Ye,pt as Xe,q as Ze,qn as Qe,qt as $e,r as et,rr as tt,s as nt,st as rt,tn as it,tr as at,u as ot,ur as st,vr as ct,w as lt,wt as q,x as ut,xr as dt,xt as ft,y as pt,yr as mt,z as ht,zt as gt}from"./three.core-nbKIHe-i.js";import{t as _t}from"./BufferGeometryUtils-CSl_zOCZ.js";var vt=Object.create,yt=Object.defineProperty,bt=Object.getOwnPropertyDescriptor,xt=Object.getOwnPropertyNames,St=Object.getPrototypeOf,Ct=Object.prototype.hasOwnProperty,wt=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),Tt=(e,t)=>{let n={};for(var r in e)yt(n,r,{get:e[r],enumerable:!0});return t||yt(n,Symbol.toStringTag,{value:`Module`}),n},Et=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(var i=xt(t),a=0,o=i.length,s;a<o;a++)s=i[a],!Ct.call(e,s)&&s!==n&&yt(e,s,{get:(e=>t[e]).bind(null,s),enumerable:!(r=bt(t,s))||r.enumerable});return e},Dt=(e,t,n)=>(n=e==null?{}:vt(St(e)),Et(t||!e||!e.__esModule||!Ct.call(e,`default`)?yt(n,`default`,{value:e,enumerable:!0}):n,e)),Ot=wt((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var C=Array.isArray;function w(){}var T={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function D(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function O(e,t){return D(e.type,t,e.props)}function k(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function A(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var j=/\/+/g;function ee(e,t){return typeof e==`object`&&e&&e.key!=null?A(``+e.key):t.toString(36)}function te(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(w,w):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function M(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,M(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ee(e,0):a,C(o)?(i=``,c!=null&&(i=c.replace(j,`$&/`)+`/`),M(o,r,i,``,function(e){return e})):o!=null&&(k(o)&&(o=O(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(j,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(C(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ee(a,u),c+=M(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ee(a,u++),c+=M(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return M(te(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function N(e,t,n){if(e==null)return e;var r=[],i=0;return M(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function P(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ne=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function re(e){var t=T.T,n={};n.types=t===null?null:t.types,T.T=n;try{var r=e(),i=T.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(w,ne)}catch(e){ne(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),T.T=t}}function ie(e){var t=T.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else re(ie.bind(null,e))}var ae={map:N,forEach:function(e,t,n){N(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return N(e,function(){t++}),t},toArray:function(e){return N(e,function(e){return e})||[]},only:function(e){if(!k(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=ae,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return T.H.useMemoCache(e)}},e.addTransitionType=ie,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!E.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return D(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)E.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return D(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=k,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:P}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=re,e.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},e.use=function(e){return T.H.use(e)},e.useActionState=function(e,t,n){return T.H.useActionState(e,t,n)},e.useCallback=function(e,t){return T.H.useCallback(e,t)},e.useContext=function(e){return T.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return T.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return T.H.useEffect(e,t)},e.useEffectEvent=function(e){return T.H.useEffectEvent(e)},e.useId=function(){return T.H.useId()},e.useImperativeHandle=function(e,t,n){return T.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return T.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return T.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return T.H.useMemo(e,t)},e.useOptimistic=function(e,t){return T.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return T.H.useReducer(e,t,n)},e.useRef=function(e){return T.H.useRef(e)},e.useState=function(e){return T.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return T.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return T.H.useTransition()},e.version=`19.3.0`})),kt=wt(((e,t)=>{t.exports=Ot()})),At=Dt(kt(),1);function jt(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Mt(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var J={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Y={common:{diffuse:{value:new K(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new z},alphaMap:{value:null},alphaMapTransform:{value:new z},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new z}},envmap:{envMap:{value:null},envMapRotation:{value:new z},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new z}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new z}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new z},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new z},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new z},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new z}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new z}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new z}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new K(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new K(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new z},alphaTest:{value:0},uvTransform:{value:new z}},sprite:{diffuse:{value:new K(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new z},alphaMap:{value:null},alphaMapTransform:{value:new z},alphaTest:{value:0}}},Nt={basic:{uniforms:m([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.fog]),vertexShader:J.meshbasic_vert,fragmentShader:J.meshbasic_frag},lambert:{uniforms:m([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new K(0)},envMapIntensity:{value:1}}]),vertexShader:J.meshlambert_vert,fragmentShader:J.meshlambert_frag},phong:{uniforms:m([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new K(0)},specular:{value:new K(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:J.meshphong_vert,fragmentShader:J.meshphong_frag},standard:{uniforms:m([Y.common,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.roughnessmap,Y.metalnessmap,Y.fog,Y.lights,{emissive:{value:new K(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:J.meshphysical_vert,fragmentShader:J.meshphysical_frag},toon:{uniforms:m([Y.common,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.gradientmap,Y.fog,Y.lights,{emissive:{value:new K(0)}}]),vertexShader:J.meshtoon_vert,fragmentShader:J.meshtoon_frag},matcap:{uniforms:m([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,{matcap:{value:null}}]),vertexShader:J.meshmatcap_vert,fragmentShader:J.meshmatcap_frag},points:{uniforms:m([Y.points,Y.fog]),vertexShader:J.points_vert,fragmentShader:J.points_frag},dashed:{uniforms:m([Y.common,Y.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:J.linedashed_vert,fragmentShader:J.linedashed_frag},depth:{uniforms:m([Y.common,Y.displacementmap]),vertexShader:J.depth_vert,fragmentShader:J.depth_frag},normal:{uniforms:m([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,{opacity:{value:1}}]),vertexShader:J.meshnormal_vert,fragmentShader:J.meshnormal_frag},sprite:{uniforms:m([Y.sprite,Y.fog]),vertexShader:J.sprite_vert,fragmentShader:J.sprite_frag},background:{uniforms:{uvTransform:{value:new z},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:J.background_vert,fragmentShader:J.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new z}},vertexShader:J.backgroundCube_vert,fragmentShader:J.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:J.cube_vert,fragmentShader:J.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:J.equirect_vert,fragmentShader:J.equirect_frag},distance:{uniforms:m([Y.common,Y.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:J.distance_vert,fragmentShader:J.distance_frag},shadow:{uniforms:m([Y.lights,Y.fog,{color:{value:new K(0)},opacity:{value:1}}]),vertexShader:J.shadow_vert,fragmentShader:J.shadow_frag}};Nt.physical={uniforms:m([Nt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new z},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new z},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new z},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new z},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new z},sheen:{value:0},sheenColor:{value:new K(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new z},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new z},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new z},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new z},attenuationDistance:{value:0},attenuationColor:{value:new K(0)},specularColor:{value:new K(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new z},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new z},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new z}}]),vertexShader:J.meshphysical_vert,fragmentShader:J.meshphysical_frag};var Pt={r:0,b:0,g:0},Ft=new o,It=new z;It.set(-1,0,0,0,1,0,0,0,1);function Lt(e,t,n,r,i,a){let o=new K(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new q(new Ge(1,1,1),new E({name:`BackgroundCubeMaterial`,uniforms:ie(Nt.backgroundCube.uniforms),vertexShader:Nt.backgroundCube.vertexShader,fragmentShader:Nt.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ft.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(It),l.material.toneMapped=Fe.getTransfer(i.colorSpace)!==ge,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new q(new y(2,2),new E({name:`BackgroundMaterial`,uniforms:ie(Nt.background.uniforms),vertexShader:Nt.background.vertexShader,fragmentShader:Nt.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Fe.getTransfer(i.colorSpace)!==ge,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Pt,P(e)),n.buffers.color.setClear(Pt.r,Pt.g,Pt.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Rt(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function zt(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Bt(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(k(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&k(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Vt(e){let t=this,n=null,r=0,i=!1,a=!1,o=new he,s=new z,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Ht=4,Ut=6,Wt=20,Gt=256,Kt=new L,qt=new K,Jt=null,Yt=0,Xt=0,Zt=!1,Qt=new R,$t=new R,en=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Qt}=i;Jt=this._renderer.getRenderTarget(),Yt=this._renderer.getActiveCubeFace(),Xt=this._renderer.getActiveMipmapLevel(),Zt=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cn(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sn(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Jt,Yt,Xt),this._renderer.xr.enabled=Zt,e.scissorTest=!1,rn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jt=this._renderer.getRenderTarget(),Yt=this._renderer.getActiveCubeFace(),Xt=this._renderer.getActiveMipmapLevel(),Zt=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pe,minFilter:Pe,generateMipmaps:!1,type:T,format:V,colorSpace:Le,depthBuffer:!1},r=nn(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nn(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=tn(r)),this._blurMaterial=on(r,e,t),this._ggxMaterial=an(r,e,t)}return r}_compileMaterial(e){let t=new q(new Ae,e);this._renderer.compile(t,Kt)}_sceneToCubeUV(e,t,n,r,a){let o=new i(90,1,t,n),s=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,d=l.toneMapping;l.getClearColor(qt),l.toneMapping=0,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new q(new Ge,new fe({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let f=this._backgroundBox,p=f.material,m=!1,h=e.background;h?h.isColor&&(p.color.copy(h),e.background=null,m=!0):(p.color.copy(qt),m=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(o.up.set(0,s[t],0),o.position.set(a.x,a.y,a.z),o.lookAt(a.x+c[t],a.y,a.z)):n===1?(o.up.set(0,0,s[t]),o.position.set(a.x,a.y,a.z),o.lookAt(a.x,a.y+c[t],a.z)):(o.up.set(0,s[t],0),o.position.set(a.x,a.y,a.z),o.lookAt(a.x,a.y,a.z+c[t]));let i=this._cubeSize;rn(r,n*i,t>2?i:0,i,i),l.setRenderTarget(r),m&&l.render(f,o),l.render(e,o)}l.toneMapping=d,l.autoClear=u,e.background=h}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cn()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sn());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;rn(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Kt)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Ht?n-d+Ht:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,rn(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Kt),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,rn(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Kt)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];rn(t,3*l*(r>this._lodMax-Ht?r-this._lodMax+Ht:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Kt)}};function tn(e){let t=[],n=[],r=e,i=e-Ht+1+Ut;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?$t.set(1,r,n):e===1?$t.set(-n,1,-r):e===2?$t.set(-n,r,1):e===3?$t.set(-1,r,-n):e===4?$t.set(-n,-1,r):$t.set(n,r,-1),$t.toArray(l,(e*6+t)*3)}}let u=new Ae;u.setAttribute(`position`,new nt(c,3)),u.setAttribute(`outputDirection`,new nt(l,3)),n.push(new q(u,null)),r>Ht&&r--}return{lodMeshes:n,sizeLods:t}}function nn(e,t,n){let r=new d(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function rn(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function an(e,t,n){return new E({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Gt,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ln(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function on(e,t,n){return new E({name:`SphericalGaussianBlur`,defines:{SAMPLES:Wt,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ln(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function sn(){return new E({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:ln(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function cn(){return new E({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ln(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ln(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var un=class extends d{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ut(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ge(5,5,5),i=new E({name:`CubemapFromEquirect`,uniforms:ie(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new q(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Pe),new pt(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function dn(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new un(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new en(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new en(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function fn(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&I(`WebGLRenderer: `+e+` extension not supported.`),t}}}function pn(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?je:st)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function mn(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function hn(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:ze(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function gn(e,t,n){let i=new WeakMap,o=new a;function c(a,c,l){let u=a.morphTargetInfluences,d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,f=d===void 0?0:d.length,p=i.get(c);if(p===void 0||p.count!==f){p!==void 0&&p.texture.dispose();let e=c.morphAttributes.position!==void 0,n=c.morphAttributes.normal!==void 0,a=c.morphAttributes.color!==void 0,l=c.morphAttributes.position||[],u=c.morphAttributes.normal||[],d=c.morphAttributes.color||[],m=0;e===!0&&(m=1),n===!0&&(m=2),a===!0&&(m=3);let h=c.attributes.position.count*m,g=1;h>t.maxTextureSize&&(g=Math.ceil(h/t.maxTextureSize),h=t.maxTextureSize);let _=new Float32Array(h*g*4*f),v=new s(_,h,g,f);v.type=r,v.needsUpdate=!0;let y=m*4;for(let t=0;t<f;t++){let r=l[t],i=u[t],s=d[t],c=h*g*4*t;for(let t=0;t<r.count;t++){let l=t*y;e===!0&&(o.fromBufferAttribute(r,t),_[c+l+0]=o.x,_[c+l+1]=o.y,_[c+l+2]=o.z,_[c+l+3]=0),n===!0&&(o.fromBufferAttribute(i,t),_[c+l+4]=o.x,_[c+l+5]=o.y,_[c+l+6]=o.z,_[c+l+7]=0),a===!0&&(o.fromBufferAttribute(s,t),_[c+l+8]=o.x,_[c+l+9]=o.y,_[c+l+10]=o.z,_[c+l+11]=s.itemSize===4?o.w:1)}}p={count:f,texture:v,size:new dt(h,g)},i.set(c,p);function b(){v.dispose(),i.delete(c),c.removeEventListener(`dispose`,b)}c.addEventListener(`dispose`,b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<u.length;e++)t+=u[e];let n=c.morphTargetsRelative?1:1-t;l.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),l.getUniforms().setValue(e,`morphTargetInfluences`,u)}l.getUniforms().setValue(e,`morphTargetsTexture`,p.texture,n),l.getUniforms().setValue(e,`morphTargetsTextureSize`,p.size)}return{update:c}}function _n(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var vn={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function yn(e,t,n,r,i,a){let o=new d(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Ae;l.setAttribute(`position`,new ht([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new ht([0,2,0,0,2,0],2));let u=new N({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new q(l,u),p=new L(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new d(t,n,{type:T,depthBuffer:!1,stencilBuffer:!1}),c=new d(t,n,{type:T,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,u.defines={},Fe.getTransfer(m)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=vn[h];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var bn=new Te,xn=new W(1,1),Sn=new s,Cn=new u,wn=new ut,Tn=[],En=[],Dn=new Float32Array(16),On=new Float32Array(9),kn=new Float32Array(4);function An(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Tn[i];if(a===void 0&&(a=new Float32Array(i),Tn[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function jn(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Mn(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Nn(e,t){let n=En[t];n===void 0&&(n=new Int32Array(t),En[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Pn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Fn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(jn(n,t))return;e.uniform2fv(this.addr,t),Mn(n,t)}}function In(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(jn(n,t))return;e.uniform3fv(this.addr,t),Mn(n,t)}}function Ln(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(jn(n,t))return;e.uniform4fv(this.addr,t),Mn(n,t)}}function Rn(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(jn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Mn(n,t)}else{if(jn(n,r))return;kn.set(r),e.uniformMatrix2fv(this.addr,!1,kn),Mn(n,r)}}function zn(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(jn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Mn(n,t)}else{if(jn(n,r))return;On.set(r),e.uniformMatrix3fv(this.addr,!1,On),Mn(n,r)}}function Bn(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(jn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Mn(n,t)}else{if(jn(n,r))return;Dn.set(r),e.uniformMatrix4fv(this.addr,!1,Dn),Mn(n,r)}}function Vn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Hn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(jn(n,t))return;e.uniform2iv(this.addr,t),Mn(n,t)}}function Un(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(jn(n,t))return;e.uniform3iv(this.addr,t),Mn(n,t)}}function Wn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(jn(n,t))return;e.uniform4iv(this.addr,t),Mn(n,t)}}function Gn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Kn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(jn(n,t))return;e.uniform2uiv(this.addr,t),Mn(n,t)}}function qn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(jn(n,t))return;e.uniform3uiv(this.addr,t),Mn(n,t)}}function Jn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(jn(n,t))return;e.uniform4uiv(this.addr,t),Mn(n,t)}}function Yn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(xn.compareFunction=n.isReversedDepthBuffer()?518:515,a=xn):a=bn,n.setTexture2D(t||a,i)}function Xn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Cn,i)}function Zn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||wn,i)}function Qn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Sn,i)}function $n(e){switch(e){case 5126:return Pn;case 35664:return Fn;case 35665:return In;case 35666:return Ln;case 35674:return Rn;case 35675:return zn;case 35676:return Bn;case 5124:case 35670:return Vn;case 35667:case 35671:return Hn;case 35668:case 35672:return Un;case 35669:case 35673:return Wn;case 5125:return Gn;case 36294:return Kn;case 36295:return qn;case 36296:return Jn;case 35678:case 36198:case 36298:case 36306:case 35682:return Yn;case 35679:case 36299:case 36307:return Xn;case 35680:case 36300:case 36308:case 36293:return Zn;case 36289:case 36303:case 36311:case 36292:return Qn}}function er(e,t){e.uniform1fv(this.addr,t)}function tr(e,t){let n=An(t,this.size,2);e.uniform2fv(this.addr,n)}function nr(e,t){let n=An(t,this.size,3);e.uniform3fv(this.addr,n)}function rr(e,t){let n=An(t,this.size,4);e.uniform4fv(this.addr,n)}function ir(e,t){let n=An(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function ar(e,t){let n=An(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function or(e,t){let n=An(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function sr(e,t){e.uniform1iv(this.addr,t)}function cr(e,t){e.uniform2iv(this.addr,t)}function lr(e,t){e.uniform3iv(this.addr,t)}function ur(e,t){e.uniform4iv(this.addr,t)}function dr(e,t){e.uniform1uiv(this.addr,t)}function fr(e,t){e.uniform2uiv(this.addr,t)}function pr(e,t){e.uniform3uiv(this.addr,t)}function mr(e,t){e.uniform4uiv(this.addr,t)}function hr(e,t,n){let r=this.cache,i=t.length,a=Nn(n,i);jn(r,a)||(e.uniform1iv(this.addr,a),Mn(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?xn:bn;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function gr(e,t,n){let r=this.cache,i=t.length,a=Nn(n,i);jn(r,a)||(e.uniform1iv(this.addr,a),Mn(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Cn,a[e])}function _r(e,t,n){let r=this.cache,i=t.length,a=Nn(n,i);jn(r,a)||(e.uniform1iv(this.addr,a),Mn(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||wn,a[e])}function vr(e,t,n){let r=this.cache,i=t.length,a=Nn(n,i);jn(r,a)||(e.uniform1iv(this.addr,a),Mn(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Sn,a[e])}function yr(e){switch(e){case 5126:return er;case 35664:return tr;case 35665:return nr;case 35666:return rr;case 35674:return ir;case 35675:return ar;case 35676:return or;case 5124:case 35670:return sr;case 35667:case 35671:return cr;case 35668:case 35672:return lr;case 35669:case 35673:return ur;case 5125:return dr;case 36294:return fr;case 36295:return pr;case 36296:return mr;case 35678:case 36198:case 36298:case 36306:case 35682:return hr;case 35679:case 36299:case 36307:return gr;case 35680:case 36300:case 36308:case 36293:return _r;case 36289:case 36303:case 36311:case 36292:return vr}}var br=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$n(t.type)}},xr=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yr(t.type)}},Sr=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Cr=/(\w+)(\])?(\[|\.)?/g;function wr(e,t){e.seq.push(t),e.map[t.id]=t}function Tr(e,t,n){let r=e.name,i=r.length;for(Cr.lastIndex=0;;){let a=Cr.exec(r),o=Cr.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){wr(n,l===void 0?new br(s,e,t):new xr(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Sr(s),wr(n,e)),n=e}}}var Er=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Tr(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Dr(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Or=37297,kr=0;function Ar(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var jr=new z;function Mr(e){Fe._getMatrix(jr,Fe.workingColorSpace,e);let t=`mat3( ${jr.elements.map(e=>e.toFixed(4))} )`;switch(Fe.getTransfer(e)){case H:return[t,`LinearTransferOETF`];case ge:return[t,`sRGBTransferOETF`];default:return k(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Nr(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ar(e.getShaderSource(t),r)}return i}function Pr(e,t){let n=Mr(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Fr={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Ir(e,t){let n=Fr[t];return n===void 0?(k(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Lr=new R;function Rr(){return Fe.getLuminanceCoefficients(Lr),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Lr.x.toFixed(4)}, ${Lr.y.toFixed(4)}, ${Lr.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function zr(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Hr).join(`
`)}function Br(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Vr(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Hr(e){return e!==``}function Ur(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wr(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Gr=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kr(e){return e.replace(Gr,Jr)}var qr=new Map;function Jr(e,t){let n=J[t];if(n===void 0){let e=qr.get(t);if(e!==void 0)n=J[e],k(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Kr(n)}var Yr=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xr(e){return e.replace(Yr,Zr)}function Zr(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Qr(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var $r={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function ei(e){return $r[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var ti={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function ni(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:ti[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var ri={302:`ENVMAP_MODE_REFRACTION`};function ii(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:ri[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var ai={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function oi(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:ai[e.combine]||`ENVMAP_BLENDING_NONE`}function si(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function ci(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=ei(n),l=ni(n),u=ii(n),d=oi(n),f=si(n),p=zr(n),m=Br(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Hr).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Hr).join(`
`),_.length>0&&(_+=`
`)):(g=[Qr(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Hr).join(`
`),_=[Qr(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:J.tonemapping_pars_fragment,n.toneMapping===0?``:Ir(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,J.colorspace_pars_fragment,Pr(`linearToOutputTexel`,n.outputColorSpace),Rr(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Hr).join(`
`)),o=Kr(o),o=Ur(o,n),o=Wr(o,n),s=Kr(s),s=Ur(s,n),s=Wr(s,n),o=Xr(o),s=Xr(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Dr(i,i.VERTEX_SHADER,y),S=Dr(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Nr(i,x,`vertex`),n=Nr(i,S,`fragment`);ze(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):k(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Er(i,h),T=Vr(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Or)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=kr++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var li=0,ui=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new di(e),t.set(e,n)),n}},di=class{constructor(e){this.id=li++,this.code=e,this.usedTimes=0}};function fi(e){return e===1030||e===37490||e===36285}function pi(e,t,n,r,i,a){let o=new Ee,s=new ui,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&k(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,A,j;if(C){let e=Nt[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),A=e.id,j=t.id}let ee=e.getRenderTarget(),te=e.state.buffers.depth.getReversed(),M=h.isInstancedMesh===!0,N=h.isBatchedMesh===!0,P=!!i.map,ne=!!i.matcap,re=!!x,ie=!!i.aoMap,ae=!!i.lightMap,oe=!!i.bumpMap&&i.wireframe===!1,se=!!i.normalMap,F=!!i.displacementMap,ce=!!i.emissiveMap,le=!!i.metalnessMap,I=!!i.roughnessMap,L=i.anisotropy>0,ue=i.clearcoat>0,R=i.dispersion>0,z=i.retroreflectivity>0,B=i.iridescence>0,de=i.sheen>0,fe=i.transmission>0,pe=L&&!!i.anisotropyMap,me=ue&&!!i.clearcoatMap,he=ue&&!!i.clearcoatNormalMap,ge=ue&&!!i.clearcoatRoughnessMap,_e=B&&!!i.iridescenceMap,ve=B&&!!i.iridescenceThicknessMap,ye=de&&!!i.sheenColorMap,be=de&&!!i.sheenRoughnessMap,xe=!!i.specularMap,Se=!!i.specularColorMap,Ce=!!i.specularIntensityMap,we=fe&&!!i.transmissionMap,Te=fe&&!!i.thicknessMap,Ee=!!i.gradientMap,De=!!i.alphaMap,Oe=i.alphaTest>0,ke=!!i.alphaHash,Ae=!!i.extensions,je=0;i.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(je=e.toneMapping);let V={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:A,customFragmentShaderID:j,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:N,batchingColor:N&&h._colorsTexture!==null,instancing:M,instancingColor:M&&h.instanceColor!==null,instancingMorph:M&&h.morphTexture!==null,outputColorSpace:ee===null?e.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Fe.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:P,matcap:ne,envMap:re,envMapMode:re&&x.mapping,envMapCubeUVHeight:S,aoMap:ie,lightMap:ae,bumpMap:oe,normalMap:se,displacementMap:F,emissiveMap:ce,normalMapObjectSpace:se&&i.normalMapType===1,normalMapTangentSpace:se&&i.normalMapType===0,packedNormalMap:se&&i.normalMapType===0&&fi(i.normalMap.format),metalnessMap:le,roughnessMap:I,anisotropy:L,anisotropyMap:pe,clearcoat:ue,clearcoatMap:me,clearcoatNormalMap:he,clearcoatRoughnessMap:ge,dispersion:R,retroreflection:z,iridescence:B,iridescenceMap:_e,iridescenceThicknessMap:ve,sheen:de,sheenColorMap:ye,sheenRoughnessMap:be,specularMap:xe,specularColorMap:Se,specularIntensityMap:Ce,transmission:fe,transmissionMap:we,thicknessMap:Te,gradientMap:Ee,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:De,alphaTest:Oe,alphaHash:ke,combine:i.combine,mapUv:P&&m(i.map.channel),aoMapUv:ie&&m(i.aoMap.channel),lightMapUv:ae&&m(i.lightMap.channel),bumpMapUv:oe&&m(i.bumpMap.channel),normalMapUv:se&&m(i.normalMap.channel),displacementMapUv:F&&m(i.displacementMap.channel),emissiveMapUv:ce&&m(i.emissiveMap.channel),metalnessMapUv:le&&m(i.metalnessMap.channel),roughnessMapUv:I&&m(i.roughnessMap.channel),anisotropyMapUv:pe&&m(i.anisotropyMap.channel),clearcoatMapUv:me&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:he&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:be&&m(i.sheenRoughnessMap.channel),specularMapUv:xe&&m(i.specularMap.channel),specularColorMapUv:Se&&m(i.specularColorMap.channel),specularIntensityMapUv:Ce&&m(i.specularIntensityMap.channel),transmissionMapUv:we&&m(i.transmissionMap.channel),thicknessMapUv:Te&&m(i.thicknessMap.channel),alphaMapUv:De&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(se||L),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(P||De),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&se===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:je,decodeVideoTexture:P&&i.map.isVideoTexture===!0&&Fe.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ce&&i.emissiveMap.isVideoTexture===!0&&Fe.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ae&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ae&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return V.vertexUv1s=c.has(1),V.vertexUv2s=c.has(2),V.vertexUv3s=c.has(3),c.clear(),V}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Nt[t];n=Ne.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new ci(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function mi(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function hi(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function gi(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function _i(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||hi),r.length>1&&r.sort(t||gi),i.length>1&&i.sort(t||gi)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function vi(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new _i,e.set(t,[i])):n>=r.length?(i=new _i,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function yi(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new R,color:new K};break;case`SpotLight`:n={position:new R,direction:new R,color:new K,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new R,color:new K,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new R,skyColor:new K,groundColor:new K};break;case`RectAreaLight`:n={color:new K,position:new R,halfWidth:new R,halfHeight:new R}}return e[t.id]=n,n}}}function bi(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var xi=0;function Si(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Ci(e){let t=new yi,n=bi(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new R);let i=new R,a=new o,s=new o;function c(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Si);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Y.LTC_FLOAT_1,r.rectAreaLTC2=Y.LTC_FLOAT_2):(r.rectAreaLTC1=Y.LTC_HALF_1,r.rectAreaLTC2=Y.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=xi++)}function l(e,t){let n=0,o=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[o];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),o++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),s.identity(),a.copy(p.matrixWorld),a.premultiply(f),s.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(s),e.halfHeight.applyMatrix4(s),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:c,setupView:l,state:r}}function wi(e){let t=new Ci(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Ti(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new wi(e),t.set(n,[a])):r>=i.length?(a=new wi(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ei=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Di=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Oi=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],ki=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Ai=new o,ji=new R,Mi=new R;function Ni(e,t,n){let i=new v,o=new dt,s=new dt,c=new a,u=new f,p=new l,m={},h=n.maxTextureSize,g={0:1,1:0,2:2},_=new E({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:Ei,fragmentShader:Di}),y=_.clone();y.defines.HORIZONTAL_PASS=1;let b=new Ae;b.setAttribute(`position`,new nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new q(b,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let C=this.type;this.render=function(t,n,a){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||t.length===0)return;this.type===2&&(k(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let l=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.depth.getReversed()===!0?p.buffers.color.setClear(0,0,0,0):p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=C!==this.type;m&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let l=0,u=t.length;l<u;l++){let u=t[l],f=u.shadow;if(f===void 0){k(`WebGLShadowMap:`,u,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;o.copy(f.mapSize);let g=f.getFrameExtents();o.multiply(g),s.copy(f.mapSize),(o.x>h||o.y>h)&&(o.x>h&&(s.x=Math.floor(h/g.x),o.x=s.x*g.x,f.mapSize.x=s.x),o.y>h&&(s.y=Math.floor(h/g.y),o.y=s.y*g.y,f.mapSize.y=s.y));let _=e.state.buffers.depth.getReversed();if(f.camera._reversedDepth=_,f.map===null||m===!0){if(f.map!==null&&(f.map.depthTexture!==null&&(f.map.depthTexture.dispose(),f.map.depthTexture=null),f.map.dispose()),this.type===3){if(u.isPointLight){k(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}f.map=new d(o.x,o.y,{format:Re,type:T,minFilter:Pe,magFilter:Pe,generateMipmaps:!1}),f.map.texture.name=u.name+`.shadowMap`,f.map.depthTexture=new W(o.x,o.y,r),f.map.depthTexture.name=u.name+`.shadowMapDepth`,f.map.depthTexture.format=Be,f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=ne,f.map.depthTexture.magFilter=ne}else u.isPointLight?(f.map=new un(o.x),f.map.depthTexture=new De(o.x,Se)):(f.map=new d(o.x,o.y),f.map.depthTexture=new W(o.x,o.y,Se)),f.map.depthTexture.name=u.name+`.shadowMap`,f.map.depthTexture.format=Be,this.type===1?(f.map.depthTexture.compareFunction=_?518:515,f.map.depthTexture.minFilter=Pe,f.map.depthTexture.magFilter=Pe):(f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=ne,f.map.depthTexture.magFilter=ne);f.camera.updateProjectionMatrix()}f.map.isWebGLCubeRenderTarget!==!0&&(f.map.width!==o.x||f.map.height!==o.y)&&f.map.setSize(o.x,o.y);let v=f.map.isWebGLCubeRenderTarget?6:f.getViewportCount();u.isPointLight!==!0&&f.updateMatrices(u,a);for(let t=0;t<v;t++){let r=f.getCamera(t);if(u.isPointLight){let e=f.camera,n=f.matrix,r=u.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),ji.setFromMatrixPosition(u.matrixWorld),e.position.copy(ji),Mi.copy(e.position),Mi.add(Oi[t]),e.up.copy(ki[t]),e.lookAt(Mi),e.updateMatrixWorld(),n.makeTranslation(-ji.x,-ji.y,-ji.z),Ai.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),f._frustum.setFromProjectionMatrix(Ai,e.coordinateSystem,e.reversedDepth)}if(f.map.isWebGLCubeRenderTarget)e.setRenderTarget(f.map,t),e.clear();else{t===0&&(e.setRenderTarget(f.map),e.clear());let n=f.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),p.viewport(c)}i=f.getFrustum(t),O(n,a,r,u,this.type)}f.isPointLightShadow!==!0&&this.type===3&&w(f,a),f.needsUpdate=!1}C=this.type,S.needsUpdate=!1,e.setRenderTarget(l,u,f)};function w(n,r){let i=t.update(x);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,y.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),n.mapPass===null?n.mapPass=new d(o.x,o.y,{format:Re,type:T}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,x,null),y.uniforms.shadow_pass.value=n.mapPass.texture,y.uniforms.resolution.value.set(n.map.width,n.map.height),y.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,y,x,null)}function D(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?p:u,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=m[e];r===void 0&&(r={},m[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,A)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?g[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function O(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=D(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=D(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)O(c[e],r,a,o,s)}function A(e){e.target.removeEventListener(`dispose`,A);for(let t in m){let n=m[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Pi(e,t){function n(){let t=!1,n=new a,r=null,i=new a(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?I(e.DEPTH_TEST):L(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=le[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?I(e.STENCIL_TEST):L(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let o=new n,s=new r,c=new i,l=new WeakMap,u=new WeakMap,d={},f={},p={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new K(0,0,0),E=0,D=!1,O=null,k=null,A=null,j=null,ee=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,N=0,P=e.getParameter(e.VERSION);P.indexOf(`WebGL`)===-1?P.indexOf(`OpenGL ES`)!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),M=N>=2):(N=parseFloat(/^WebGL (\d)/.exec(P)[1]),M=N>=1);let ne=null,re={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),oe=new a().fromArray(ie),se=new a().fromArray(ae);function F(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ce={};ce[e.TEXTURE_2D]=F(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=F(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[e.TEXTURE_2D_ARRAY]=F(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=F(e.TEXTURE_3D,e.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),c.setClear(0),I(e.DEPTH_TEST),s.setFunc(3),me(!1),he(1),I(e.CULL_FACE),fe(0);function I(t){d[t]!==!0&&(e.enable(t),d[t]=!0)}function L(t){d[t]!==!1&&(e.disable(t),d[t]=!1)}function ue(t,n){return p[t]!==n&&(e.bindFramebuffer(t,n),p[t]=n,t===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=n),!0)}function R(t,n){let r=h,i=!1;if(t){r=m.get(n),r===void 0&&(r=[],m.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function z(t){return g!==t&&(e.useProgram(t),g=t,!0)}let B={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};B[103]=e.MIN,B[104]=e.MAX;let de={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function fe(t,n,r,i,a,o,s,c,l,u){if(t===0)_===!0&&(L(e.BLEND),_=!1);else if(_===!1&&(I(e.BLEND),_=!0),t!==5){if(t!==v||u!==D){if((y!==100||S!==100)&&(e.blendEquation(e.FUNC_ADD),y=100,S=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:ze(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:ze(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:ze(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:ze(`WebGLState: Invalid blending: `,t)}b=null,x=null,C=null,w=null,T.set(0,0,0),E=0,v=t,D=u}}else a||=n,o||=r,s||=i,(n!==y||a!==S)&&(e.blendEquationSeparate(B[n],B[a]),y=n,S=a),(r!==b||i!==x||o!==C||s!==w)&&(e.blendFuncSeparate(de[r],de[i],de[o],de[s]),b=r,x=i,C=o,w=s),(c.equals(T)===!1||l!==E)&&(e.blendColor(c.r,c.g,c.b,l),T.copy(c),E=l),v=t,D=!1}function pe(t,n){t.side===2?L(e.CULL_FACE):I(e.CULL_FACE);let r=t.side===1;n&&(r=!r),me(r),t.blending===1&&t.transparent===!1?fe(0):fe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),s.setFunc(t.depthFunc),s.setTest(t.depthTest),s.setMask(t.depthWrite),o.setMask(t.colorWrite);let i=t.stencilWrite;c.setTest(i),i&&(c.setMask(t.stencilWriteMask),c.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),c.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),_e(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?I(e.SAMPLE_ALPHA_TO_COVERAGE):L(e.SAMPLE_ALPHA_TO_COVERAGE)}function me(t){O!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),O=t)}function he(t){t===0?L(e.CULL_FACE):(I(e.CULL_FACE),t!==k&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),k=t}function ge(t){t!==A&&(M&&e.lineWidth(t),A=t)}function _e(t,n,r){t?(I(e.POLYGON_OFFSET_FILL),(j!==n||ee!==r)&&(j=n,ee=r,s.getReversed()&&(n=-n),e.polygonOffset(n,r))):L(e.POLYGON_OFFSET_FILL)}function ve(t){t?I(e.SCISSOR_TEST):L(e.SCISSOR_TEST)}function ye(t){t===void 0&&(t=e.TEXTURE0+te-1),ne!==t&&(e.activeTexture(t),ne=t)}function be(t,n,r){r===void 0&&(r=ne===null?e.TEXTURE0+te-1:ne);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(ne!==r&&(e.activeTexture(r),ne=r),e.bindTexture(t,n||ce[t]),i.type=t,i.texture=n)}function xe(){let t=re[ne];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Se(){try{e.compressedTexImage2D(...arguments)}catch(e){ze(`WebGLState:`,e)}}function Ce(){try{e.compressedTexImage3D(...arguments)}catch(e){ze(`WebGLState:`,e)}}function we(){try{e.texSubImage2D(...arguments)}catch(e){ze(`WebGLState:`,e)}}function Te(){try{e.texSubImage3D(...arguments)}catch(e){ze(`WebGLState:`,e)}}function Ee(){try{e.compressedTexSubImage2D(...arguments)}catch(e){ze(`WebGLState:`,e)}}function De(){try{e.compressedTexSubImage3D(...arguments)}catch(e){ze(`WebGLState:`,e)}}function Oe(){try{e.texStorage2D(...arguments)}catch(e){ze(`WebGLState:`,e)}}function ke(){try{e.texStorage3D(...arguments)}catch(e){ze(`WebGLState:`,e)}}function Ae(){try{e.texImage2D(...arguments)}catch(e){ze(`WebGLState:`,e)}}function je(){try{e.texImage3D(...arguments)}catch(e){ze(`WebGLState:`,e)}}function V(t){return f[t]===void 0?e.getParameter(t):f[t]}function Me(t,n){f[t]!==n&&(e.pixelStorei(t,n),f[t]=n)}function Ne(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function Pe(t){se.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),se.copy(t))}function H(t,n){let r=u.get(n);r===void 0&&(r=new WeakMap,u.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Fe(t,n){let r=u.get(n).get(t);l.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),l.set(n,r))}function Ie(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),d={},f={},ne=null,re={},p={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new K(0,0,0),E=0,D=!1,O=null,k=null,A=null,j=null,ee=null,oe.set(0,0,e.canvas.width,e.canvas.height),se.set(0,0,e.canvas.width,e.canvas.height),o.reset(),s.reset(),c.reset()}return{buffers:{color:o,depth:s,stencil:c},enable:I,disable:L,bindFramebuffer:ue,drawBuffers:R,useProgram:z,setBlending:fe,setMaterial:pe,setFlipSided:me,setCullFace:he,setLineWidth:ge,setPolygonOffset:_e,setScissorTest:ve,activeTexture:ye,bindTexture:be,unbindTexture:xe,compressedTexImage2D:Se,compressedTexImage3D:Ce,texImage2D:Ae,texImage3D:je,pixelStorei:Me,getParameter:V,updateUBOMapping:H,uniformBlockBinding:Fe,texStorage2D:Oe,texStorage3D:ke,texSubImage2D:we,texSubImage3D:Te,compressedTexSubImage2D:Ee,compressedTexSubImage3D:De,scissor:Ne,viewport:Pe,reset:Ie}}function Fi(e,r,i,a,o,s,c){let l=r.has(`WEBGL_multisampled_render_to_texture`)?r.get(`WEBGL_multisampled_render_to_texture`):null,u=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),d=new dt,f=new WeakMap,p=new Set,m,g=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function v(e,t){return _?new OffscreenCanvas(e,t):n(`canvas`)}function y(e,t,n){let r=1,i=ke(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);m===void 0&&(m=v(n,a));let o=t?v(n,a):m;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),k(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&k(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function b(e){return e.generateMipmaps}function x(t){e.generateMipmap(t)}function S(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function C(t,n,i,a,o,s=!1){if(t!==null){if(e[t]!==void 0)return e[t];k(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+t+`'`)}let c;a&&(c=r.get(`EXT_texture_norm16`),c||k(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=n;if(n===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),n===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),n===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),n===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),n===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),n===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),n===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),n===e.RGBA){let t=s?H:Fe.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&r.get(`EXT_color_buffer_float`),l}function w(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,k(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function T(e,t){return b(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function E(e){let t=e.target;t.removeEventListener(`dispose`,E),A(t),t.isVideoTexture&&f.delete(t),t.isHTMLTexture&&p.delete(t)}function D(e){let t=e.target;t.removeEventListener(`dispose`,D),ee(t)}function A(e){let t=a.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=g.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&j(e),Object.keys(r).length===0&&g.delete(n)}a.remove(e)}function j(t){let n=a.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=g.get(r);delete i[n.__cacheKey],c.memory.textures--}function ee(t){let n=a.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),a.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=t.textures;for(let t=0,n=r.length;t<n;t++){let n=a.get(r[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),c.memory.textures--),a.remove(r[t])}a.remove(t)}let N=0;function P(){N=0}function re(){return N}function ie(e){N=e}function ae(){let e=N;return e>=o.maxTextures&&k(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+o.maxTextures),N+=1,e}function oe(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function F(t,n){let r=a.get(t);if(t.isVideoTexture&&De(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)k(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)k(`WebGLRenderer: Texture marked for update but image is incomplete`);else{pe(r,t,n);return}}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function ce(t,n){let r=a.get(t);t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version?pe(r,t,n):(t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null),i.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n))}function le(t,n){let r=a.get(t);t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version?pe(r,t,n):i.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function I(t,n){let r=a.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&r.__version!==t.version?me(r,t,n):i.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let L={[O]:e.REPEAT,[Je]:e.CLAMP_TO_EDGE,[M]:e.MIRRORED_REPEAT},ue={[ne]:e.NEAREST,[h]:e.NEAREST_MIPMAP_NEAREST,[se]:e.NEAREST_MIPMAP_LINEAR,[Pe]:e.LINEAR,[We]:e.LINEAR_MIPMAP_NEAREST,[Xe]:e.LINEAR_MIPMAP_LINEAR},R={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function z(t,n){if(n.type===1015&&r.has(`OES_texture_float_linear`)===!1&&(n.magFilter===1006||n.magFilter===1007||n.magFilter===1005||n.magFilter===1008||n.minFilter===1006||n.minFilter===1007||n.minFilter===1005||n.minFilter===1008)&&k(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(t,e.TEXTURE_WRAP_S,L[n.wrapS]),e.texParameteri(t,e.TEXTURE_WRAP_T,L[n.wrapT]),(t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY)&&e.texParameteri(t,e.TEXTURE_WRAP_R,L[n.wrapR]),e.texParameteri(t,e.TEXTURE_MAG_FILTER,ue[n.magFilter]),e.texParameteri(t,e.TEXTURE_MIN_FILTER,ue[n.minFilter]),n.compareFunction&&(e.texParameteri(t,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(t,e.TEXTURE_COMPARE_FUNC,R[n.compareFunction])),r.has(`EXT_texture_filter_anisotropic`)===!0){if(n.magFilter===1003||n.minFilter!==1005&&n.minFilter!==1008||n.type===1015&&r.has(`OES_texture_float_linear`)===!1)return;if(n.anisotropy>1||a.get(n).__currentAnisotropy){let i=r.get(`EXT_texture_filter_anisotropic`);e.texParameterf(t,i.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(n.anisotropy,o.getMaxAnisotropy())),a.get(n).__currentAnisotropy=n.anisotropy}}}function B(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,E));let i=n.source,a=g.get(i);a===void 0&&(a={},g.set(i,a));let o=oe(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},c.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&j(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function de(e,t,n){return Math.floor(Math.floor(e/n)/t)}function fe(t,n,r,a){let o=t.updateRanges;if(o.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,r,a,n.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],r=o[e],i=t.start+t.count,a=de(r.start,n.width,4),c=de(t.start,n.width,4);r.start<=i+1&&a===c&&de(r.start+r.count-1,n.width,4)===a?t.count=Math.max(t.count,r.start+r.count-t.start):(++s,o[s]=r)}o.length=s+1;let c=i.getParameter(e.UNPACK_ROW_LENGTH),l=i.getParameter(e.UNPACK_SKIP_PIXELS),u=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,n.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%n.width,d=Math.floor(c/n.width),f=l;i.pixelStorei(e.UNPACK_SKIP_PIXELS,u),i.pixelStorei(e.UNPACK_SKIP_ROWS,d),i.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,r,a,n.data)}t.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,c),i.pixelStorei(e.UNPACK_SKIP_PIXELS,l),i.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function pe(n,r,c){let l=e.TEXTURE_2D;(r.isDataArrayTexture||r.isCompressedArrayTexture)&&(l=e.TEXTURE_2D_ARRAY),r.isData3DTexture&&(l=e.TEXTURE_3D);let u=B(n,r),d=r.source;i.bindTexture(l,n.__webglTexture,e.TEXTURE0+c);let f=a.get(d);if(d.version!==f.__version||u===!0){if(i.activeTexture(e.TEXTURE0+c),!(typeof ImageBitmap<`u`&&r.image instanceof ImageBitmap)){let t=Fe.getPrimaries(Fe.workingColorSpace),n=r.colorSpace===``?null:Fe.getPrimaries(r.colorSpace),a=r.colorSpace===``||t===n?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,a)}i.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment);let n=y(r.image,!1,o.maxTextureSize);n=Oe(r,n);let a=s.convert(r.format,r.colorSpace),m=s.convert(r.type),h=C(r.internalFormat,a,m,r.normalized,r.colorSpace,r.isVideoTexture);z(l,r);let g,_=r.mipmaps,v=r.isVideoTexture!==!0,S=f.__version===void 0||u===!0,E=d.dataReady,D=T(r,n);if(r.isDepthTexture)h=w(r.format===t,r.type),S&&(v?i.texStorage2D(e.TEXTURE_2D,1,h,n.width,n.height):i.texImage2D(e.TEXTURE_2D,0,h,n.width,n.height,0,a,m,null));else if(r.isDataTexture){if(_.length>0){v&&S&&i.texStorage2D(e.TEXTURE_2D,D,h,_[0].width,_[0].height);for(let t=0,n=_.length;t<n;t++)g=_[t],v?E&&i.texSubImage2D(e.TEXTURE_2D,t,0,0,g.width,g.height,a,m,g.data):i.texImage2D(e.TEXTURE_2D,t,h,g.width,g.height,0,a,m,g.data);r.generateMipmaps=!1}else v?(S&&i.texStorage2D(e.TEXTURE_2D,D,h,n.width,n.height),E&&fe(r,n,a,m)):i.texImage2D(e.TEXTURE_2D,0,h,n.width,n.height,0,a,m,n.data)}else if(r.isCompressedTexture){if(r.isCompressedArrayTexture){v&&S&&i.texStorage3D(e.TEXTURE_2D_ARRAY,D,h,_[0].width,_[0].height,n.depth);for(let t=0,o=_.length;t<o;t++)if(g=_[t],r.format!==1023){if(a!==null){if(v){if(E){if(r.layerUpdates.size>0){let n=te(g.width,g.height,r.format,r.type);for(let o of r.layerUpdates){let r=g.data.subarray(o*n/g.data.BYTES_PER_ELEMENT,(o+1)*n/g.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,o,g.width,g.height,1,a,r)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,g.width,g.height,n.depth,a,g.data)}}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,t,h,g.width,g.height,n.depth,0,g.data,0,0)}else k(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else v?E&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,g.width,g.height,n.depth,a,m,g.data):i.texImage3D(e.TEXTURE_2D_ARRAY,t,h,g.width,g.height,n.depth,0,a,m,g.data);r.layerUpdates.size>0&&r.clearLayerUpdates()}else{v&&S&&i.texStorage2D(e.TEXTURE_2D,D,h,_[0].width,_[0].height);for(let t=0,n=_.length;t<n;t++)g=_[t],r.format===1023?v?E&&i.texSubImage2D(e.TEXTURE_2D,t,0,0,g.width,g.height,a,m,g.data):i.texImage2D(e.TEXTURE_2D,t,h,g.width,g.height,0,a,m,g.data):a===null?k(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):v?E&&i.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,g.width,g.height,a,g.data):i.compressedTexImage2D(e.TEXTURE_2D,t,h,g.width,g.height,0,g.data)}}else if(r.isDataArrayTexture){if(v){if(S&&i.texStorage3D(e.TEXTURE_2D_ARRAY,D,h,n.width,n.height,n.depth),E){if(r.layerUpdates.size>0){let t=te(n.width,n.height,r.format,r.type);for(let o of r.layerUpdates){let r=n.data.subarray(o*t/n.data.BYTES_PER_ELEMENT,(o+1)*t/n.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,o,n.width,n.height,1,a,m,r)}r.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,n.width,n.height,n.depth,a,m,n.data)}}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,h,n.width,n.height,n.depth,0,a,m,n.data)}else if(r.isData3DTexture)v?(S&&i.texStorage3D(e.TEXTURE_3D,D,h,n.width,n.height,n.depth),E&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,n.width,n.height,n.depth,a,m,n.data)):i.texImage3D(e.TEXTURE_3D,0,h,n.width,n.height,n.depth,0,a,m,n.data);else if(r.isFramebufferTexture){if(S){if(v)i.texStorage2D(e.TEXTURE_2D,D,h,n.width,n.height);else{let t=n.width,r=n.height;for(let n=0;n<D;n++)i.texImage2D(e.TEXTURE_2D,n,h,t,r,0,a,m,null),t>>=1,r>>=1}}}else if(r.isHTMLTexture){if(`texElementImage2D`in e){let t=e.canvas;if(t.hasAttribute(`layoutsubtree`)||t.setAttribute(`layoutsubtree`,`true`),n.parentNode!==t){t.appendChild(n),p.add(r),t.onpaint=e=>{let t=e.changedElements;for(let e of p)t.includes(e.image)&&(e.needsUpdate=!0)},t.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,n);else{let t=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,t,r,i,n)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(_.length>0){if(v&&S){let t=ke(_[0]);i.texStorage2D(e.TEXTURE_2D,D,h,t.width,t.height)}for(let t=0,n=_.length;t<n;t++)g=_[t],v?E&&i.texSubImage2D(e.TEXTURE_2D,t,0,0,a,m,g):i.texImage2D(e.TEXTURE_2D,t,h,a,m,g);r.generateMipmaps=!1}else if(v){if(S){let t=ke(n);i.texStorage2D(e.TEXTURE_2D,D,h,t.width,t.height)}E&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,a,m,n)}else i.texImage2D(e.TEXTURE_2D,0,h,a,m,n);b(r)&&x(l),f.__version=d.version,r.onUpdate&&r.onUpdate(r)}n.__version=r.version}function me(t,n,r){if(n.image.length!==6)return;let c=B(t,n),l=n.source;i.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let u=a.get(l);if(l.version!==u.__version||c===!0){i.activeTexture(e.TEXTURE0+r);let t=Fe.getPrimaries(Fe.workingColorSpace),a=n.colorSpace===``?null:Fe.getPrimaries(n.colorSpace),d=n.colorSpace===``||t===a?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=n.isCompressedTexture||n.image[0].isCompressedTexture,p=n.image[0]&&n.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=y(n.image[e],!0,o.maxCubemapSize):m[e]=p?n.image[e].image:n.image[e],m[e]=Oe(n,m[e]);let h=m[0],g=s.convert(n.format,n.colorSpace),_=s.convert(n.type),v=C(n.internalFormat,g,_,n.normalized,n.colorSpace),S=n.isVideoTexture!==!0,w=u.__version===void 0||c===!0,E=l.dataReady,D=T(n,h);z(e.TEXTURE_CUBE_MAP,n);let O;if(f){S&&w&&i.texStorage2D(e.TEXTURE_CUBE_MAP,D,v,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let a=O[r];n.format===1023?S?E&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,a.width,a.height,g,_,a.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,a.width,a.height,0,g,_,a.data):g===null?k(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):S?E&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,a.width,a.height,g,a.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,a.width,a.height,0,a.data)}}}else{if(O=n.mipmaps,S&&w){O.length>0&&D++;let t=ke(m[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,D,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){S?E&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let n=0;n<O.length;n++){let r=O[n].image[t].image;S?E&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,g,_,r.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,r.width,r.height,0,g,_,r.data)}}else{S?E&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let n=0;n<O.length;n++){let r=O[n];S?E&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,r.image[t]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,g,_,r.image[t])}}}b(n)&&x(e.TEXTURE_CUBE_MAP),u.__version=l.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function he(t,n,r,o,c,u){let d=s.convert(r.format,r.colorSpace),f=s.convert(r.type),p=C(r.internalFormat,d,f,r.normalized,r.colorSpace),m=a.get(n),h=a.get(r);if(h.__renderTarget=n,!m.__hasExternalTextures){let t=Math.max(1,n.width>>u),r=Math.max(1,n.height>>u);c===e.TEXTURE_3D||c===e.TEXTURE_2D_ARRAY?i.texImage3D(c,u,p,t,r,n.depth,0,d,f,null):i.texImage2D(c,u,p,t,r,0,d,f,null)}i.bindFramebuffer(e.FRAMEBUFFER,t),Ee(n)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,o,c,h.__webglTexture,0,Te(n)):(c===e.TEXTURE_2D||c>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&c<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,o,c,h.__webglTexture,u),i.bindFramebuffer(e.FRAMEBUFFER,null)}function ge(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=w(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ee(n)?l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Te(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Te(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=s.convert(a.format,a.colorSpace),c=s.convert(a.type),u=C(a.internalFormat,o,c,a.normalized,a.colorSpace);Ee(n)?l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Te(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Te(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function _e(t,n,r){let o=n.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=a.get(n.depthTexture);if(c.__renderTarget=n,(!c.__webglTexture||n.depthTexture.image.width!==n.width||n.depthTexture.image.height!==n.height)&&(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),o){if(c.__webglInit===void 0&&(c.__webglInit=!0,n.depthTexture.addEventListener(`dispose`,E)),c.__webglTexture===void 0){c.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),z(e.TEXTURE_CUBE_MAP,n.depthTexture);let t=s.convert(n.depthTexture.format),r=s.convert(n.depthTexture.type),a;n.depthTexture.format===1026?a=e.DEPTH_COMPONENT24:n.depthTexture.format===1027&&(a=e.DEPTH24_STENCIL8);for(let i=0;i<6;i++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,a,n.width,n.height,0,t,r,null)}}else F(n.depthTexture,0);let u=c.__webglTexture,d=Te(n),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+r:e.TEXTURE_2D,p=n.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(n.depthTexture.format===1026)Ee(n)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(n.depthTexture.format===1027)Ee(n)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function ve(t){let n=a.get(t),r=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer){if(r)for(let e=0;e<6;e++)_e(n.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?_e(n.__webglFramebuffer[0],t,0):_e(n.__webglFramebuffer,t,0)}}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(i.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]===void 0)n.__webglDepthbuffer[r]=e.createRenderbuffer(),ge(n.__webglDepthbuffer[r],t,!1);else{let i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?i.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),ge(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function ye(t,n,r){let i=a.get(t);n!==void 0&&he(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&ve(t)}function be(t){let n=t.texture,r=a.get(t),o=a.get(n);t.addEventListener(`dispose`,D);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(o.__webglTexture===void 0&&(o.__webglTexture=e.createTexture()),o.__version=n.version,c.memory.textures++),u){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=a.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),c.memory.textures++)}if(t.samples>0&&Ee(t)===!1){r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let i=l[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let a=s.convert(i.format,i.colorSpace),o=s.convert(i.type),c=C(i.internalFormat,a,o,i.normalized,i.colorSpace,t.isXRRenderTarget===!0),u=Te(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),ge(r.__webglDepthRenderbuffer,t,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){i.bindTexture(e.TEXTURE_CUBE_MAP,o.__webglTexture),z(e.TEXTURE_CUBE_MAP,n);for(let i=0;i<6;i++)if(n.mipmaps&&n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)he(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else he(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);b(n)&&x(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(d){for(let n=0,o=l.length;n<o;n++){let o=l[n],s=a.get(o),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(c,s.__webglTexture),z(c,o),he(r.__webglFramebuffer,t,o,e.COLOR_ATTACHMENT0+n,c,0),b(o)&&x(c)}i.unbindTexture()}else{let a=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(a=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(a,o.__webglTexture),z(a,n),n.mipmaps&&n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)he(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,a,i);else he(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,a,0);b(n)&&x(a),i.unbindTexture()}t.depthBuffer&&ve(t)}function xe(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(b(r)){let t=S(e),n=a.get(r).__webglTexture;i.bindTexture(t,n),x(t),i.unbindTexture()}}}let Se=[],Ce=[];function we(t){if(t.samples>0){if(Ee(t)===!1){let n=t.textures,r=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,c=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,l=a.get(t),d=n.length>1;if(d)for(let t=0;t<n.length;t++)i.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,l.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglFramebuffer);for(let i=0;i<n.length;i++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,l.__webglColorRenderbuffer[i]);let t=a.get(n[i]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,o,0,0,r,o,s,e.NEAREST),u===!0&&(Se.length=0,Ce.length=0,Se.push(e.COLOR_ATTACHMENT0+i),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(Se.push(c),Ce.push(c),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ce)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Se))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<n.length;t++){i.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,l.__webglColorRenderbuffer[t]);let r=a.get(n[t]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&u){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Te(e){return Math.min(o.maxSamples,e.samples)}function Ee(e){let t=a.get(e);return e.samples>0&&r.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function De(e){let t=c.render.frame;f.get(e)!==t&&(f.set(e,t),e.update())}function Oe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Fe.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&k(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):ze(`WebGLTextures: Unsupported texture color space:`,n)),t}function ke(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(d.width=e.naturalWidth||e.width,d.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(d.width=e.displayWidth,d.height=e.displayHeight):(d.width=e.width,d.height=e.height),d}this.allocateTextureUnit=ae,this.resetTextureUnits=P,this.getTextureUnits=re,this.setTextureUnits=ie,this.setTexture2D=F,this.setTexture2DArray=ce,this.setTexture3D=le,this.setTextureCube=I,this.rebindTextures=ye,this.setupRenderTarget=be,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Ee,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Ii(e,t){function n(n,r=``){let i,a=Fe.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Li=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ri=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,zi=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new b(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new E({vertexShader:Li,fragmentShader:Ri,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new q(new y(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bi=class extends p{constructor(e,n){super();let r=this,o=null,s=1,l=null,u=`local-floor`,f=1,p=null,m=null,h=null,g=null,_=null,v=null,y=typeof XRWebGLBinding<`u`,x=new zi,S={},C=n.getContextAttributes(),w=null,T=null,E=[],D=[],O=new dt,A=null,j=null,ee=new i;ee.viewport=new a;let te=new i;te.viewport=new a;let M=[ee,te],N=new et,P=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=E[e];return t===void 0&&(t=new c,E[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=E[e];return t===void 0&&(t=new c,E[e]=t),t.getGripSpace()},this.getHand=function(e){let t=E[e];return t===void 0&&(t=new c,E[e]=t),t.getHandSpace()};function re(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=E[t];n!==void 0&&(n.update(e.inputSource,e.frame,p||l),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ie(){o.removeEventListener(`select`,re),o.removeEventListener(`selectstart`,re),o.removeEventListener(`selectend`,re),o.removeEventListener(`squeeze`,re),o.removeEventListener(`squeezestart`,re),o.removeEventListener(`squeezeend`,re),o.removeEventListener(`end`,ie),o.removeEventListener(`inputsourceschange`,ae);for(let e=0;e<E.length;e++){let t=D[e];t!==null&&(D[e]=null,E[e].disconnect(t))}P=null,ne=null,x.reset();for(let e in S)delete S[e];if(e.setRenderTarget(w),_=null,g=null,h=null,o=null,T=null,ue.stop(),r.isPresenting=!1,e.setPixelRatio(A),e.setSize(O.width,O.height,!1),j!==null){let e=j.camera;e.fov=j.fov,e.zoom=j.zoom,e.updateProjectionMatrix(),j=null}r.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){s=e,r.isPresenting===!0&&k(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){u=e,r.isPresenting===!0&&k(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return p||l},this.setReferenceSpace=function(e){p=e},this.getBaseLayer=function(){return g===null?_:g},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(o,n)),h},this.getFrame=function(){return v},this.getSession=function(){return o},this.setSession=async function(i){if(o=i,o!==null){if(w=e.getRenderTarget(),o.addEventListener(`select`,re),o.addEventListener(`selectstart`,re),o.addEventListener(`selectend`,re),o.addEventListener(`squeeze`,re),o.addEventListener(`squeezestart`,re),o.addEventListener(`squeezeend`,re),o.addEventListener(`end`,ie),o.addEventListener(`inputsourceschange`,ae),C.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(O),y&&`createProjectionLayer`in XRWebGLBinding.prototype){let r=null,i=null,a=null;C.depth&&(a=C.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,r=C.stencil?t:Be,i=C.stencil?Ie:Se);let c={colorFormat:n.RGBA8,depthFormat:a,scaleFactor:s};h=this.getBinding(),g=h.createProjectionLayer(c),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),T=new d(g.textureWidth,g.textureHeight,{format:V,type:Ye,depthTexture:new W(g.textureWidth,g.textureHeight,i,void 0,void 0,void 0,void 0,void 0,void 0,r),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{let t={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(o,n,t),o.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),T=new d(_.framebufferWidth,_.framebufferHeight,{format:V,type:Ye,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(f),p=null,l=await o.requestReferenceSpace(u),ue.setContext(o),ue.start(),r.isPresenting=!0,r.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ae(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,E[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<E.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=E[r];i&&i.connect(n)}}let oe=new R,se=new R;function F(e,t,n){oe.setFromMatrixPosition(t.matrixWorld),se.setFromMatrixPosition(n.matrixWorld);let r=oe.distanceTo(se),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ce(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(o===null)return;let t=e.near,n=e.far;x.texture!==null&&(x.depthNear>0&&(t=x.depthNear),x.depthFar>0&&(n=x.depthFar)),N.near=te.near=ee.near=t,N.far=te.far=ee.far=n,(P!==N.near||ne!==N.far)&&(o.updateRenderState({depthNear:N.near,depthFar:N.far}),P=N.near,ne=N.far),N.layers.mask=e.layers.mask|6,ee.layers.mask=N.layers.mask&-5,te.layers.mask=N.layers.mask&-3;let r=e.parent,i=N.cameras;ce(N,r);for(let e=0;e<i.length;e++)ce(i[e],r);i.length===2?F(N,ee,te):N.projectionMatrix.copy(ee.projectionMatrix),j===null&&e.isPerspectiveCamera&&(j={camera:e,fov:e.fov,zoom:e.zoom}),le(e,N,r)};function le(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ye*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(g!==null||_!==null)return f},this.setFoveation=function(e){f=e,g!==null&&(g.fixedFoveation=e),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=e)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(N)},this.getCameraTexture=function(e){return S[e]};let I=null;function L(t,n){if(m=n.getViewerPose(p||l),v=n,m!==null){let t=m.views;_!==null&&(e.setRenderTargetFramebuffer(T,_.framebuffer),e.setRenderTarget(T));let n=!1;t.length!==N.cameras.length&&(N.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let o=t[r],s=null;if(_!==null)s=_.getViewport(o);else{let t=h.getViewSubImage(g,o);s=t.viewport,r===0&&(e.setRenderTargetTextures(T,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(T))}let c=M[r];c===void 0&&(c=new i,c.layers.enable(r),c.viewport=new a,M[r]=c),c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.projectionMatrix.fromArray(o.projectionMatrix),c.projectionMatrixInverse.copy(c.projectionMatrix).invert(),c.viewport.set(s.x,s.y,s.width,s.height),r===0&&(N.matrix.copy(c.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),n===!0&&N.cameras.push(c)}let s=o.enabledFeatures;if(s&&s.includes(`depth-sensing`)&&o.depthUsage==`gpu-optimized`&&y){h=r.getBinding();let e=h.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&x.init(e,o.renderState)}if(s&&s.includes(`camera-access`)&&y){e.state.unbindTexture(),h=r.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=S[n];e||(e=new b,S[n]=e);let t=h.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<E.length;e++){let t=D[e],r=E[e];t!==null&&r!==void 0&&r.update(t,n,p||l)}I&&I(t,n),n.detectedPlanes&&r.dispatchEvent({type:`planesdetected`,data:n}),v=null}let ue=new jt;ue.setAnimationLoop(L),this.setAnimationLoop=function(e){I=e},this.dispose=function(){}}},Vi=new o,Hi=new z;Hi.set(-1,0,0,0,1,0,0,0,1);function Ui(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,P(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Vi.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Hi),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Wi(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return ze(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?k(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):k(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Gi=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ki=null;function qi(){return Ki===null&&(Ki=new re(Gi,16,16,Re,T),Ki.name=`DFG_LUT`,Ki.minFilter=Pe,Ki.magFilter=Pe,Ki.wrapS=Je,Ki.wrapT=Je,Ki.generateMipmaps=!1,Ki.needsUpdate=!0),Ki}var Ji=class{constructor(e={}){let{canvas:t=Ve(),context:n=null,depth:r=!0,stencil:i=!1,alpha:s=!1,antialias:c=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:m=!1,outputBufferType:h=Ye}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);g=n.getContextAttributes().alpha}else g=s;let _=h,y=new Set([it,ee,x]),b=new Set([Ye,Se,Oe,Ie,ct,mt]),C=new Uint32Array(4),w=new Int32Array(4),E=new R,D=null,O=null,A=[],j=[],te=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,N=!1,P=null,ne=null,re=null,ie=null;this._outputColorSpace=pe;let ae=0,se=0,F=null,ce=-1,le=null,I=new a,L=new a,ue=null,z=new K(0),B=0,fe=t.width,me=t.height,he=1,ge=null,_e=null,ve=new a(0,0,fe,me),ye=new a(0,0,fe,me),be=!1,xe=new v,Ce=!1,we=!1,Te=new o,Ee=new R,De=new a,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function je(){return F===null?he:1}let V=n;function Me(e,n){return t.getContext(e,n)}let Ne,Pe,H,Le,U,W,Re,G,Be,He,Ue,We,Ge,Ke,qe,Je,Ze,Qe,$e,et,tt,nt,rt;try{let e={alpha:!0,depth:r,stencil:i,antialias:c,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,st,!1),t.addEventListener(`webglcontextrestored`,lt,!1),t.addEventListener(`webglcontextcreationerror`,q,!1),V===null){let t=`webgl2`;if(V=Me(t,e),V===null)throw Me(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}at()}catch(e){throw t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,lt,!1),t.removeEventListener(`webglcontextcreationerror`,q,!1),ze(`WebGLRenderer: `+e.message),e}function at(){Ne=new fn(V),Ne.init(),tt=new Ii(V,Ne),Pe=new Bt(V,Ne,e,tt),H=new Pi(V,Ne),Pe.reversedDepthBuffer&&m&&H.buffers.depth.setReversed(!0),ne=V.createFramebuffer(),re=V.createFramebuffer(),ie=V.createFramebuffer(),Le=new hn(V),U=new mi,W=new Fi(V,Ne,H,U,Pe,tt,Le),Re=new dn(M),G=new Mt(V),nt=new Rt(V,G),Be=new pn(V,G,Le,nt),He=new _n(V,Be,G,nt,Le),Qe=new gn(V,Pe,W),qe=new Vt(U),Ue=new pi(M,Re,Ne,Pe,nt,qe),We=new Ui(M,U),Ge=new vi,Ke=new Ti(Ne),Ze=new Lt(M,Re,H,He,g,l),Je=new Ni(M,He,Pe),rt=new Wi(V,Le,Pe,H),$e=new zt(V,Ne,Le),et=new mn(V,Ne,Le),Le.programs=Ue.programs,M.capabilities=Pe,M.extensions=Ne,M.properties=U,M.renderLists=Ge,M.shadowMap=Je,M.state=H,M.info=Le}_!==1009&&(te=new yn(_,t.width,t.height,c,r,i));let ot=new Bi(M,V);this.xr=ot,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(e){e!==void 0&&(he=e,this.setSize(fe,me,!1))},this.getSize=function(e){return e.set(fe,me)},this.setSize=function(e,n,r=!0){ot.isPresenting?k(`WebGLRenderer: Can't change size while VR device is presenting.`):(fe=e,me=n,t.width=Math.floor(e*he),t.height=Math.floor(n*he),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),te!==null&&te.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(fe*he,me*he).floor()},this.setDrawingBufferSize=function(e,n,r){fe=e,me=n,he=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(_===1009)ze(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){k(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}te.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(I)},this.getViewport=function(e){return e.copy(ve)},this.setViewport=function(e,t,n,r){e.isVector4?ve.set(e.x,e.y,e.z,e.w):ve.set(e,t,n,r),H.viewport(I.copy(ve).multiplyScalar(he).round())},this.getScissor=function(e){return e.copy(ye)},this.setScissor=function(e,t,n,r){e.isVector4?ye.set(e.x,e.y,e.z,e.w):ye.set(e,t,n,r),H.scissor(L.copy(ye).multiplyScalar(he).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(e){H.setScissorTest(be=e)},this.setOpaqueSort=function(e){ge=e},this.setTransparentSort=function(e){_e=e},this.getClearColor=function(e){return e.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(F!==null){let t=F.texture.format;e=y.has(t)}if(e){let e=F.texture.type,t=b.has(e),n=Ze.getClearColor(),r=Ze.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(C[0]=i,C[1]=a,C[2]=o,C[3]=r,V.clearBufferuiv(V.COLOR,0,C)):(w[0]=i,w[1]=a,w[2]=o,w[3]=r,V.clearBufferiv(V.COLOR,0,w))}else r|=V.COLOR_BUFFER_BIT}t&&(r|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&V.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),P=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,lt,!1),t.removeEventListener(`webglcontextcreationerror`,q,!1),Ze.dispose(),Ge.dispose(),Ke.dispose(),U.dispose(),Re.dispose(),He.dispose(),nt.dispose(),rt.dispose(),Ue.dispose(),ot.dispose(),ot.removeEventListener(`sessionstart`,_t),ot.removeEventListener(`sessionend`,vt),yt.stop()};function st(e){e.preventDefault(),oe(`WebGLRenderer: Context Lost.`),N=!0}function lt(){oe(`WebGLRenderer: Context Restored.`),N=!1;let e=Le.autoReset,t=Je.enabled,n=Je.autoUpdate,r=Je.needsUpdate,i=Je.type;at(),Le.autoReset=e,Je.enabled=t,Je.autoUpdate=n,Je.needsUpdate=r,Je.type=i}function q(e){ze(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ut(e){let t=e.target;t.removeEventListener(`dispose`,ut),dt(t)}function dt(e){ft(e),U.remove(e)}function ft(e){let t=U.get(e).programs;t!==void 0&&(t.forEach(function(e){Ue.releaseProgram(e)}),e.isShaderMaterial&&Ue.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ke);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=kt(e,t,n,r,i);H.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Be.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;nt.setup(i,r,s,n,c);let h,g=$e;if(c!==null&&(h=G.get(c),g=et,g.setIndex(h)),i.isMesh)r.wireframe===!0?(H.setLineWidth(r.wireframeLinewidth*je()),g.setMode(V.LINES)):g.setMode(V.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),H.setLineWidth(e*je()),i.isLineSegments?g.setMode(V.LINES):i.isLineLoop?g.setMode(V.LINE_LOOP):g.setMode(V.LINE_STRIP)}else i.isPoints?g.setMode(V.POINTS):i.isSprite&&g.setMode(V.TRIANGLES);if(i.isBatchedMesh){if(Ne.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?G.get(c).bytesPerElement:1,o=U.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(V,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function pt(e,t,n,r){P!==null&&e.isNodeMaterial&&P.setObject(r,e),Ce===!0&&qe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Tt(e,t,r),e.side=0,e.needsUpdate=!0,Tt(e,t,r),e.side=2):Tt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),P!==null&&P.renderStart(e,t,n),O=Ke.get(n),O.init(t),j.push(O),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),O.setupLights(),P!==null&&P.updateLights(O.state.lightsArray),we=this.localClippingEnabled,Ce=qe.init(this.clippingPlanes,we),Ce===!0&&qe.setGlobalState(this.clippingPlanes,t),P!==null&&Je.render(O.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];pt(o,n,t,e),r.add(o)}else pt(i,n,t,e),r.add(i)}}),O=j.pop(),P!==null&&P.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=U.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Ne.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ht=null;function gt(e){ht&&ht(e)}function _t(){yt.stop()}function vt(){yt.start()}let yt=new jt;yt.setAnimationLoop(gt),typeof self<`u`&&yt.setContext(self),this.setAnimationLoop=function(e){ht=e,ot.setAnimationLoop(e),e===null?yt.stop():yt.start()},ot.addEventListener(`sessionstart`,_t),ot.addEventListener(`sessionend`,vt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){ze(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(N===!0)return;P!==null&&P.renderStart(e,t);let n=ot.enabled===!0&&ot.isPresenting===!0,r=te!==null&&(F===null||n)&&te.begin(M,F);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(te===null||te.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(t),t=ot.getCamera()),e.isScene===!0&&e.onBeforeRender(M,e,t,F),O=Ke.get(e,j.length),O.init(t),O.state.textureUnits=W.getTextureUnits(),j.push(O),Te.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),xe.setFromProjectionMatrix(Te,de,t.reversedDepth),we=this.localClippingEnabled,Ce=qe.init(this.clippingPlanes,we),D=Ge.get(e,A.length),D.init(),A.push(D),ot.enabled===!0&&ot.isPresenting===!0){let e=M.xr.getDepthSensingMesh();e!==null&&bt(e,t,-1/0,M.sortObjects)}bt(e,t,0,M.sortObjects),D.finish(),P!==null&&P.updateLights(O.state.lightsArray),M.sortObjects===!0&&D.sort(ge,_e),Ae=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Ae&&Ze.addToRenderList(D,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ce===!0&&qe.beginShadows();let i=O.state.shadowsArray;if(Je.render(i,e,t),Ce===!0&&qe.endShadows(),(r&&te.hasRenderPass())===!1){let n=D.opaque,r=D.transmissive;if(O.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];St(n,r,e,a)}Ae&&Ze.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];xt(D,e,n,n.viewport)}}else r.length>0&&St(n,r,e,t),Ae&&Ze.render(e),xt(D,e,t)}F!==null&&se===0&&(W.updateMultisampleRenderTarget(F),W.updateRenderTargetMipmap(F)),r&&te.end(M),e.isScene===!0&&e.onAfterRender(M,e,t),nt.resetDefaultState(),ce=-1,le=null,j.pop(),j.length>0?(O=j[j.length-1],W.setTextureUnits(O.state.textureUnits),Ce===!0&&qe.setGlobalState(M.clippingPlanes,O.state.camera)):O=null,A.pop(),D=A.length>0?A[A.length-1]:null,P!==null&&P.renderEnd()};function bt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)O.pushLightProbeGrid(e);else if(e.isLight)O.pushLight(e),e.castShadow&&O.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(xe)){r&&De.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Te);let i=He.update(e),a=e.material;a.visible&&D.push(e,i,a,n,De.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(xe))){let i=He.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),De.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),De.copy(e.boundingSphere.center)),De.applyMatrix4(e.matrixWorld).applyMatrix4(Te)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&D.push(e,i,c,n,De.z,s,t)}}else a.visible&&D.push(e,i,a,n,De.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)bt(i[e],t,n,r)}function xt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;O.setupLightsView(n),Ce===!0&&qe.setGlobalState(M.clippingPlanes,n),r&&H.viewport(I.copy(r)),i.length>0&&Ct(i,t,n),a.length>0&&Ct(a,t,n),o.length>0&&Ct(o,t,n),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function St(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[r.id]===void 0){let e=Ne.has(`EXT_color_buffer_half_float`)||Ne.has(`EXT_color_buffer_float`);O.state.transmissionRenderTarget[r.id]=new d(1,1,{generateMipmaps:!0,type:e?T:Ye,minFilter:Xe,samples:Math.max(4,Pe.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Fe.workingColorSpace})}let a=O.state.transmissionRenderTarget[r.id],o=r.viewport||I;a.setSize(o.z*M.transmissionResolutionScale,o.w*M.transmissionResolutionScale);let s=M.getRenderTarget(),c=M.getActiveCubeFace(),l=M.getActiveMipmapLevel();M.setRenderTarget(a),M.getClearColor(z),B=M.getClearAlpha(),B<1&&M.setClearColor(16777215,.5),M.clear(),Ae&&Ze.render(n);let u=M.toneMapping;M.toneMapping=0;let f=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),O.setupLightsView(r),Ce===!0&&qe.setGlobalState(M.clippingPlanes,r),Ct(e,n,r),W.updateMultisampleRenderTarget(a),W.updateRenderTargetMipmap(a),Ne.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,wt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(W.updateMultisampleRenderTarget(a),W.updateRenderTargetMipmap(a))}M.setRenderTarget(s,c,l),M.setClearColor(z,B),f!==void 0&&(r.viewport=f),M.toneMapping=u}function Ct(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&wt(o,t,n,s,l,c)}}function wt(e,t,n,r,i,a){P!==null&&i.isNodeMaterial&&P.setObject(e,i),e.onBeforeRender(M,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(M,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=2):M.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(M,t,n,r,i,a)}function Tt(e,t,n){t.isScene!==!0&&(t=ke);let r=U.get(e),i=O.state.lights,a=O.state.shadowsArray,o=i.state.version,s=Ue.getParameters(e,i.state,a,t,n,O.state.lightProbeGridArray),c=Ue.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Re.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ut),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Dt(e,s),d}else s.uniforms=Ue.getUniforms(e),P!==null&&e.isNodeMaterial&&P.build(e,n,s),e.onBeforeCompile(s,M),d=Ue.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=qe.uniform),Dt(e,s),r.needsLights=J(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=O.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Et(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Er.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Dt(e,t){let n=U.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Ot(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];E.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(E))return n}return null}function kt(e,t,n,r,i){t.isScene!==!0&&(t=ke),W.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=F===null?M.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Fe.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Re.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(h=M.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=U.get(r),y=O.state.lights;if(Ce===!0&&(we===!0||e!==le)){let t=e===le&&r.id===ce;qe.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==qe.numPlanes||v.numIntersection!==qe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=O.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Tt(r,t,i),P&&r.isNodeMaterial&&P.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(H.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==ce&&(ce=r.id,C=!0),v.needsLights){let e=Ot(O.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||le!==e){H.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(V,`projectionMatrix`,e.projectionMatrix),T.setValue(V,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(V,Ee.setFromMatrixPosition(e.matrixWorld)),Pe.logarithmicDepthBuffer&&T.setValue(V,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(V,`isOrthographic`,e.isOrthographicCamera===!0),le!==e&&(le=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(V,`sunShadowMap`,y.state.sunShadowMap,W),y.state.directionalShadowMap.length>0&&T.setValue(V,`directionalShadowMap`,y.state.directionalShadowMap,W),y.state.spotShadowMap.length>0&&T.setValue(V,`spotShadowMap`,y.state.spotShadowMap,W),y.state.pointShadowMap.length>0&&T.setValue(V,`pointShadowMap`,y.state.pointShadowMap,W)),i.isSkinnedMesh){T.setOptional(V,i,`bindMatrix`),T.setOptional(V,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(V,`boneTexture`,e.boneTexture,W))}i.isBatchedMesh&&(T.setOptional(V,i,`batchingTexture`),T.setValue(V,`batchingTexture`,i._matricesTexture,W),T.setOptional(V,i,`batchingIdTexture`),T.setValue(V,`batchingIdTexture`,i._indirectTexture,W),T.setOptional(V,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(V,`batchingColorTexture`,i._colorsTexture,W));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&Qe.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(V,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=qi()),C){if(T.setValue(V,`toneMappingExposure`,M.toneMappingExposure),v.needsLights&&At(E,w),a&&r.fog===!0&&We.refreshFogUniforms(E,a),We.refreshMaterialUniforms(E,r,he,me,O.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Er.upload(V,Et(v),E,W)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Er.upload(V,Et(v),E,W),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(V,`center`,i.center),T.setValue(V,`modelViewMatrix`,i.modelViewMatrix),T.setValue(V,`normalMatrix`,i.normalMatrix),T.setValue(V,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];rt.update(n,x),rt.bind(n,x)}}return x}function At(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function J(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ae},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(e,t,n){let r=U.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),U.get(e.texture).__webglTexture=t,U.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=U.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){F=e,ae=t,se=n;let r=null,i=!1,a=!1;if(e){let o=U.get(e);if(o.__useDefaultFramebuffer!==void 0){H.bindFramebuffer(V.FRAMEBUFFER,o.__webglFramebuffer),I.copy(e.viewport),L.copy(e.scissor),ue=e.scissorTest,H.viewport(I),H.scissor(L),H.setScissorTest(ue),ce=-1;return}if(o.__webglFramebuffer===void 0)W.setupRenderTarget(e);else if(o.__hasExternalTextures)W.rebindTextures(e,U.get(e.texture).__webglTexture,U.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&U.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);W.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=U.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&W.useMultisampledRTT(e)===!1?U.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,I.copy(e.viewport),L.copy(e.scissor),ue=e.scissorTest}else I.copy(ve).multiplyScalar(he).floor(),L.copy(ye).multiplyScalar(he).floor(),ue=be;if(n!==0&&(r=ne),H.bindFramebuffer(V.FRAMEBUFFER,r)&&H.drawBuffers(e,r),H.viewport(I),H.scissor(L),H.setScissorTest(ue),i){let r=U.get(e.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=U.get(e.textures[t]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=U.get(e.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,t.__webglTexture,n)}ce=-1};function Y(e){let t=U.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Pe.textureFormatReadable(e.format),t.__typeReadable=Pe.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){ze(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=U.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){H.bindFramebuffer(V.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+s);let u=Y(o);if(u.__formatReadable===!1){ze(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){ze(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&V.readPixels(t,n,r,i,tt.convert(c),tt.convert(l),a)}finally{let e=F===null?null:U.get(F).__webglFramebuffer;H.bindFramebuffer(V.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=U.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){H.bindFramebuffer(V.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+s);let d=Y(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,f),V.bufferData(V.PIXEL_PACK_BUFFER,a.byteLength,V.STREAM_READ),V.readPixels(t,n,r,i,tt.convert(l),tt.convert(u),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let p=F===null?null:U.get(F).__webglFramebuffer;H.bindFramebuffer(V.FRAMEBUFFER,p);let m=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await S(V,m,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,f),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,a),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(f),V.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;W.setTexture2D(e,0),V.copyTexSubImage2D(V.TEXTURE_2D,n,0,0,o,s,i,a),H.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=tt.convert(t.format),_=tt.convert(t.type),v;t.isData3DTexture?(W.setTexture3D(t,0),v=V.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(W.setTexture2DArray(t,0),v=V.TEXTURE_2D_ARRAY):(W.setTexture2D(t,0),v=V.TEXTURE_2D),H.activeTexture(V.TEXTURE0),H.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,t.flipY),H.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),H.pixelStorei(V.UNPACK_ALIGNMENT,t.unpackAlignment);let y=H.getParameter(V.UNPACK_ROW_LENGTH),b=H.getParameter(V.UNPACK_IMAGE_HEIGHT),x=H.getParameter(V.UNPACK_SKIP_PIXELS),S=H.getParameter(V.UNPACK_SKIP_ROWS),C=H.getParameter(V.UNPACK_SKIP_IMAGES);H.pixelStorei(V.UNPACK_ROW_LENGTH,h.width),H.pixelStorei(V.UNPACK_IMAGE_HEIGHT,h.height),H.pixelStorei(V.UNPACK_SKIP_PIXELS,l),H.pixelStorei(V.UNPACK_SKIP_ROWS,u),H.pixelStorei(V.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=U.get(e),r=U.get(t),h=U.get(n.__renderTarget),g=U.get(r.__renderTarget);H.bindFramebuffer(V.READ_FRAMEBUFFER,h.__webglFramebuffer),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,U.get(e).__webglTexture,i,d+n),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,U.get(t).__webglTexture,a,m+n)),V.blitFramebuffer(l,u,o,s,f,p,o,s,V.DEPTH_BUFFER_BIT,V.NEAREST);H.bindFramebuffer(V.READ_FRAMEBUFFER,null),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||U.has(e)){let n=U.get(e),r=U.get(t);H.bindFramebuffer(V.READ_FRAMEBUFFER,re),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,ie);for(let e=0;e<c;e++)w?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,n.__webglTexture,i),T?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,r.__webglTexture,a),i===0?T?V.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):V.copyTexSubImage2D(v,a,f,p,l,u,o,s):V.blitFramebuffer(l,u,o,s,f,p,o,s,V.COLOR_BUFFER_BIT,V.NEAREST);H.bindFramebuffer(V.READ_FRAMEBUFFER,null),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?V.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?V.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):V.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):V.texSubImage2D(V.TEXTURE_2D,a,f,p,o,s,g,_,h);H.pixelStorei(V.UNPACK_ROW_LENGTH,y),H.pixelStorei(V.UNPACK_IMAGE_HEIGHT,b),H.pixelStorei(V.UNPACK_SKIP_PIXELS,x),H.pixelStorei(V.UNPACK_SKIP_ROWS,S),H.pixelStorei(V.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&V.generateMipmap(v),H.unbindTexture()},this.initRenderTarget=function(e){U.get(e).__webglFramebuffer===void 0&&W.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?W.setTextureCube(e,0):e.isData3DTexture?W.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?W.setTexture2DArray(e,0):W.setTexture2D(e,0),H.unbindTexture()},this.resetState=function(){ae=0,se=0,F=null,H.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return de}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Fe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Fe._getUnpackColorSpace()}},Yi=new R;function Xi(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;Yi.copy(t),Yi[r]=0,Yi.normalize();let l=.5*o/(o+s),u=1-Yi.angleTo(e)/c;return Math.sign(Yi[n])===1?u*l:s/(o+s)+l+l*(1-u)}var Zi=class e extends Ge{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new R,c=new R,l=new R(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new R,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=Xi(m,c,`z`,`y`,i,n),f[a+1]=1-Xi(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-Xi(m,c,`z`,`y`,i,n),f[a+1]=1-Xi(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-Xi(m,c,`x`,`z`,i,e),f[a+1]=Xi(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-Xi(m,c,`x`,`z`,i,e),f[a+1]=1-Xi(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-Xi(m,c,`x`,`y`,i,e),f[a+1]=1-Xi(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=Xi(m,c,`x`,`y`,i,e),f[a+1]=1-Xi(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}},Qi=class extends Ce{constructor(e){super(e)}load(e,t,n,r){let i=this,a=new ce(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(e){let n=i.parse(JSON.parse(e));t&&t(n)},n,r)}parse(e){return new $i(e)}},$i=class{constructor(e){this.isFont=!0,this.type=`Font`,this.data=e}generateShapes(e,t=100,n=`ltr`){let r=[],i=ea(e,t,this.data,n);for(let e=0,t=i.length;e<t;e++)r.push(...i[e].toShapes());return r}};function ea(e,t,n,r){let i=Array.from(e),a=t/n.resolution,o=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*a,s=[],c=0,l=0;(r==`rtl`||r==`tb`)&&i.reverse();for(let e=0;e<i.length;e++){let t=i[e];if(t===`
`)c=0,l-=o;else{let e=ta(t,a,c,l,n);r==`tb`?(c=0,l+=n.ascender*a):c+=e.offsetX,s.push(e.path)}}return s}function ta(e,t,n,r,i){let a=i.glyphs[e]||i.glyphs[`?`];if(!a){console.error(`THREE.Font: character "`+e+`" does not exists in font family `+i.familyName+`.`);return}let o=new be,s,c,l,u,d,f,p,m;if(a.o){let e=a._cachedOutline||=a.o.split(` `);for(let i=0,a=e.length;i<a;)switch(e[i++]){case`m`:s=e[i++]*t+n,c=e[i++]*t+r,o.moveTo(s,c);break;case`l`:s=e[i++]*t+n,c=e[i++]*t+r,o.lineTo(s,c);break;case`q`:l=e[i++]*t+n,u=e[i++]*t+r,d=e[i++]*t+n,f=e[i++]*t+r,o.quadraticCurveTo(d,f,l,u);break;case`b`:l=e[i++]*t+n,u=e[i++]*t+r,d=e[i++]*t+n,f=e[i++]*t+r,p=e[i++]*t+n,m=e[i++]*t+r,o.bezierCurveTo(d,f,p,m,l,u)}}return{offsetX:a.ha*t,path:o}}var na=class e extends D{constructor(e,t={}){let n=t.font;if(n===void 0)super();else{let r=n.generateShapes(e,t.size,t.direction);t.depth===void 0&&(t.depth=50),t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type=`TextGeometry`}toJSON(){return super.toJSON()}static fromJSON(t){let n=t.options;return n.font=new $i(n.font.data),new e(n.text,n)}},ra={glyphs:JSON.parse(`{"ο":{"x_min":0,"x_max":764,"ha":863,"o":"m 380 -25 q 105 87 211 -25 q 0 372 0 200 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 372 764 544 q 658 87 764 200 q 380 -25 552 -25 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 218 204 283 q 379 142 294 142 "},"S":{"x_min":0,"x_max":826,"ha":915,"o":"m 826 306 q 701 55 826 148 q 423 -29 587 -29 q 138 60 255 -29 q 0 318 13 154 l 208 318 q 288 192 216 238 q 437 152 352 152 q 559 181 506 152 q 623 282 623 217 q 466 411 623 372 q 176 487 197 478 q 18 719 18 557 q 136 958 18 869 q 399 1040 244 1040 q 670 956 561 1040 q 791 713 791 864 l 591 713 q 526 826 583 786 q 393 866 469 866 q 277 838 326 866 q 218 742 218 804 q 374 617 218 655 q 667 542 646 552 q 826 306 826 471 "},"¦":{"x_min":0,"x_max":143,"ha":240,"o":"m 143 462 l 0 462 l 0 984 l 143 984 l 143 462 m 143 -242 l 0 -242 l 0 280 l 143 280 l 143 -242 "},"/":{"x_min":196.109375,"x_max":632.5625,"ha":828,"o":"m 632 1040 l 289 -128 l 196 -128 l 538 1040 l 632 1040 "},"Τ":{"x_min":-0.609375,"x_max":808,"ha":878,"o":"m 808 831 l 508 831 l 508 0 l 298 0 l 298 831 l 0 831 l 0 1013 l 808 1013 l 808 831 "},"y":{"x_min":0,"x_max":738.890625,"ha":828,"o":"m 738 749 l 444 -107 q 361 -238 413 -199 q 213 -277 308 -277 q 156 -275 176 -277 q 120 -271 131 -271 l 120 -110 q 147 -113 134 -111 q 179 -116 161 -116 q 247 -91 226 -116 q 269 -17 269 -67 q 206 173 269 -4 q 84 515 162 301 q 0 749 41 632 l 218 749 l 376 207 l 529 749 l 738 749 "},"Π":{"x_min":0,"x_max":809,"ha":922,"o":"m 809 0 l 598 0 l 598 836 l 208 836 l 208 0 l 0 0 l 0 1012 l 809 1012 l 809 0 "},"ΐ":{"x_min":-162,"x_max":364,"ha":364,"o":"m 364 810 l 235 810 l 235 952 l 364 952 l 364 810 m 301 1064 l 86 810 l -12 810 l 123 1064 l 301 1064 m -33 810 l -162 810 l -162 952 l -33 952 l -33 810 m 200 0 l 0 0 l 0 748 l 200 748 l 200 0 "},"g":{"x_min":0,"x_max":724,"ha":839,"o":"m 724 48 q 637 -223 724 -142 q 357 -304 551 -304 q 140 -253 226 -304 q 23 -72 36 -192 l 243 -72 q 290 -127 255 -110 q 368 -144 324 -144 q 504 -82 470 -144 q 530 71 530 -38 l 530 105 q 441 25 496 51 q 319 0 386 0 q 79 115 166 0 q 0 377 0 219 q 77 647 0 534 q 317 775 166 775 q 534 656 456 775 l 534 748 l 724 748 l 724 48 m 368 167 q 492 237 447 167 q 530 382 530 297 q 490 529 530 466 q 364 603 444 603 q 240 532 284 603 q 201 386 201 471 q 240 239 201 300 q 368 167 286 167 "},"²":{"x_min":0,"x_max":463,"ha":560,"o":"m 463 791 q 365 627 463 706 q 151 483 258 555 l 455 483 l 455 382 l 0 382 q 84 565 0 488 q 244 672 97 576 q 331 784 331 727 q 299 850 331 824 q 228 876 268 876 q 159 848 187 876 q 132 762 132 820 l 10 762 q 78 924 10 866 q 228 976 137 976 q 392 925 322 976 q 463 791 463 874 "},"–":{"x_min":0,"x_max":704.171875,"ha":801,"o":"m 704 297 l 0 297 l 0 450 l 704 450 l 704 297 "},"Κ":{"x_min":0,"x_max":899.671875,"ha":969,"o":"m 899 0 l 646 0 l 316 462 l 208 355 l 208 0 l 0 0 l 0 1013 l 208 1013 l 208 596 l 603 1013 l 863 1013 l 460 603 l 899 0 "},"ƒ":{"x_min":-46,"x_max":440,"ha":525,"o":"m 440 609 l 316 609 l 149 -277 l -46 -277 l 121 609 l 14 609 l 14 749 l 121 749 q 159 949 121 894 q 344 1019 208 1019 l 440 1015 l 440 855 l 377 855 q 326 841 338 855 q 314 797 314 827 q 314 773 314 786 q 314 749 314 761 l 440 749 l 440 609 "},"e":{"x_min":0,"x_max":708,"ha":808,"o":"m 708 321 l 207 321 q 254 186 207 236 q 362 141 298 141 q 501 227 453 141 l 700 227 q 566 36 662 104 q 362 -26 477 -26 q 112 72 213 -26 q 0 369 0 182 q 95 683 0 573 q 358 793 191 793 q 619 677 531 793 q 708 321 708 561 m 501 453 q 460 571 501 531 q 353 612 420 612 q 247 570 287 612 q 207 453 207 529 l 501 453 "},"ό":{"x_min":0,"x_max":764,"ha":863,"o":"m 380 -25 q 105 87 211 -25 q 0 372 0 200 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 372 764 544 q 658 87 764 200 q 380 -25 552 -25 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 218 204 283 q 379 142 294 142 m 593 1039 l 391 823 l 293 823 l 415 1039 l 593 1039 "},"J":{"x_min":0,"x_max":649,"ha":760,"o":"m 649 294 q 573 48 649 125 q 327 -29 497 -29 q 61 82 136 -29 q 0 375 0 173 l 200 375 l 199 309 q 219 194 199 230 q 321 145 249 145 q 418 193 390 145 q 441 307 441 232 l 441 1013 l 649 1013 l 649 294 "},"»":{"x_min":-0.234375,"x_max":526,"ha":624,"o":"m 526 286 l 297 87 l 296 250 l 437 373 l 297 495 l 297 660 l 526 461 l 526 286 m 229 286 l 0 87 l 0 250 l 140 373 l 0 495 l 0 660 l 229 461 l 229 286 "},"©":{"x_min":3,"x_max":1007,"ha":1104,"o":"m 507 -6 q 129 153 269 -6 q 3 506 3 298 q 127 857 3 713 q 502 1017 266 1017 q 880 855 740 1017 q 1007 502 1007 711 q 882 152 1007 295 q 507 -6 743 -6 m 502 934 q 184 800 302 934 q 79 505 79 680 q 184 210 79 331 q 501 76 302 76 q 819 210 701 76 q 925 507 925 331 q 820 800 925 682 q 502 934 704 934 m 758 410 q 676 255 748 313 q 506 197 605 197 q 298 291 374 197 q 229 499 229 377 q 297 713 229 624 q 494 811 372 811 q 666 760 593 811 q 752 616 739 710 l 621 616 q 587 688 621 658 q 509 719 554 719 q 404 658 441 719 q 368 511 368 598 q 403 362 368 427 q 498 298 438 298 q 624 410 606 298 l 758 410 "},"ώ":{"x_min":0,"x_max":945,"ha":1051,"o":"m 566 528 l 372 528 l 372 323 q 372 298 372 311 q 373 271 372 285 q 360 183 373 211 q 292 142 342 142 q 219 222 243 142 q 203 365 203 279 q 241 565 203 461 q 334 748 273 650 l 130 748 q 36 552 68 650 q 0 337 0 444 q 69 96 0 204 q 276 -29 149 -29 q 390 0 337 -29 q 470 78 444 28 q 551 0 495 30 q 668 -29 608 -29 q 874 96 793 -29 q 945 337 945 205 q 910 547 945 444 q 814 748 876 650 l 610 748 q 703 565 671 650 q 742 365 742 462 q 718 189 742 237 q 651 142 694 142 q 577 190 597 142 q 565 289 565 221 l 565 323 l 566 528 m 718 1039 l 516 823 l 417 823 l 540 1039 l 718 1039 "},"^":{"x_min":197.21875,"x_max":630.5625,"ha":828,"o":"m 630 836 l 536 836 l 413 987 l 294 836 l 197 836 l 331 1090 l 493 1090 l 630 836 "},"«":{"x_min":0,"x_max":526.546875,"ha":624,"o":"m 526 87 l 297 286 l 297 461 l 526 660 l 526 495 l 385 373 l 526 250 l 526 87 m 229 87 l 0 286 l 0 461 l 229 660 l 229 495 l 88 373 l 229 250 l 229 87 "},"D":{"x_min":0,"x_max":864,"ha":968,"o":"m 400 1013 q 736 874 608 1013 q 864 523 864 735 q 717 146 864 293 q 340 0 570 0 l 0 0 l 0 1013 l 400 1013 m 398 837 l 206 837 l 206 182 l 372 182 q 584 276 507 182 q 657 504 657 365 q 594 727 657 632 q 398 837 522 837 "},"∙":{"x_min":0,"x_max":207,"ha":304,"o":"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 "},"ÿ":{"x_min":0,"x_max":47,"ha":125,"o":"m 47 3 q 37 -7 47 -7 q 28 0 30 -7 q 39 -4 32 -4 q 45 3 45 -1 l 37 0 q 28 9 28 0 q 39 19 28 19 l 47 16 l 47 19 l 47 3 m 37 1 q 44 8 44 1 q 37 16 44 16 q 30 8 30 16 q 37 1 30 1 m 26 1 l 23 22 l 14 0 l 3 22 l 3 3 l 0 25 l 13 1 l 22 25 l 26 1 "},"w":{"x_min":0,"x_max":1056.953125,"ha":1150,"o":"m 1056 749 l 848 0 l 647 0 l 527 536 l 412 0 l 211 0 l 0 749 l 202 749 l 325 226 l 429 748 l 633 748 l 740 229 l 864 749 l 1056 749 "},"$":{"x_min":0,"x_max":704,"ha":800,"o":"m 682 693 l 495 693 q 468 782 491 749 q 391 831 441 824 l 391 579 q 633 462 562 534 q 704 259 704 389 q 616 57 704 136 q 391 -22 528 -22 l 391 -156 l 308 -156 l 308 -22 q 76 69 152 -7 q 0 300 0 147 l 183 300 q 215 191 190 230 q 308 128 245 143 l 308 414 q 84 505 157 432 q 12 700 12 578 q 89 902 12 824 q 308 981 166 981 l 308 1069 l 391 1069 l 391 981 q 595 905 521 981 q 682 693 670 829 m 308 599 l 308 831 q 228 796 256 831 q 200 712 200 762 q 225 642 200 668 q 308 599 251 617 m 391 128 q 476 174 449 140 q 504 258 504 207 q 391 388 504 354 l 391 128 "},"\\\\":{"x_min":-0.03125,"x_max":434.765625,"ha":532,"o":"m 434 -128 l 341 -128 l 0 1039 l 91 1040 l 434 -128 "},"µ":{"x_min":0,"x_max":647,"ha":754,"o":"m 647 0 l 478 0 l 478 68 q 412 9 448 30 q 330 -11 375 -11 q 261 3 296 -11 q 199 43 226 18 l 199 -277 l 0 -277 l 0 749 l 199 749 l 199 358 q 216 221 199 267 q 322 151 244 151 q 435 240 410 151 q 448 401 448 283 l 448 749 l 647 749 l 647 0 "},"Ι":{"x_min":42,"x_max":250,"ha":413,"o":"m 250 0 l 42 0 l 42 1013 l 250 1013 l 250 0 "},"Ύ":{"x_min":0,"x_max":1211.15625,"ha":1289,"o":"m 1211 1012 l 907 376 l 907 0 l 697 0 l 697 376 l 374 1012 l 583 1012 l 802 576 l 1001 1012 l 1211 1012 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"’":{"x_min":0,"x_max":192,"ha":289,"o":"m 192 834 q 137 692 192 751 q 0 626 83 634 l 0 697 q 101 831 101 723 l 0 831 l 0 1013 l 192 1013 l 192 834 "},"Ν":{"x_min":0,"x_max":833,"ha":946,"o":"m 833 0 l 617 0 l 206 696 l 206 0 l 0 0 l 0 1013 l 216 1013 l 629 315 l 629 1013 l 833 1013 l 833 0 "},"-":{"x_min":27.78125,"x_max":413.890625,"ha":525,"o":"m 413 279 l 27 279 l 27 468 l 413 468 l 413 279 "},"Q":{"x_min":0,"x_max":995.59375,"ha":1096,"o":"m 995 49 l 885 -70 l 762 42 q 641 -12 709 4 q 497 -29 572 -29 q 135 123 271 -29 q 0 504 0 276 q 131 881 0 731 q 497 1040 270 1040 q 859 883 719 1040 q 994 506 994 731 q 966 321 994 413 q 884 152 938 229 l 995 49 m 730 299 q 767 395 755 344 q 779 504 779 446 q 713 743 779 644 q 505 857 638 857 q 284 745 366 857 q 210 501 210 644 q 279 265 210 361 q 492 157 357 157 q 615 181 557 157 l 508 287 l 620 405 l 730 299 "},"ς":{"x_min":0,"x_max":731.78125,"ha":768,"o":"m 731 448 l 547 448 q 485 571 531 533 q 369 610 440 610 q 245 537 292 610 q 204 394 204 473 q 322 186 204 238 q 540 133 430 159 q 659 -15 659 98 q 643 -141 659 -80 q 595 -278 627 -202 l 423 -278 q 458 -186 448 -215 q 474 -88 474 -133 q 352 0 474 -27 q 123 80 181 38 q 0 382 0 170 q 98 660 0 549 q 367 777 202 777 q 622 683 513 777 q 731 448 731 589 "},"M":{"x_min":0,"x_max":1019,"ha":1135,"o":"m 1019 0 l 823 0 l 823 819 l 618 0 l 402 0 l 194 818 l 194 0 l 0 0 l 0 1013 l 309 1012 l 510 241 l 707 1013 l 1019 1013 l 1019 0 "},"Ψ":{"x_min":0,"x_max":995,"ha":1085,"o":"m 995 698 q 924 340 995 437 q 590 200 841 227 l 590 0 l 404 0 l 404 200 q 70 340 152 227 q 0 698 0 437 l 0 1013 l 188 1013 l 188 694 q 212 472 188 525 q 404 383 254 383 l 404 1013 l 590 1013 l 590 383 q 781 472 740 383 q 807 694 807 525 l 807 1013 l 995 1013 l 995 698 "},"C":{"x_min":0,"x_max":970.828125,"ha":1043,"o":"m 970 345 q 802 70 933 169 q 490 -29 672 -29 q 130 130 268 -29 q 0 506 0 281 q 134 885 0 737 q 502 1040 275 1040 q 802 939 668 1040 q 965 679 936 838 l 745 679 q 649 809 716 761 q 495 857 582 857 q 283 747 361 857 q 214 508 214 648 q 282 267 214 367 q 493 154 359 154 q 651 204 584 154 q 752 345 718 255 l 970 345 "},"!":{"x_min":0,"x_max":204,"ha":307,"o":"m 204 739 q 182 515 204 686 q 152 282 167 398 l 52 282 q 13 589 27 473 q 0 739 0 704 l 0 1013 l 204 1013 l 204 739 m 204 0 l 0 0 l 0 203 l 204 203 l 204 0 "},"{":{"x_min":0,"x_max":501.390625,"ha":599,"o":"m 501 -285 q 229 -209 301 -285 q 176 -35 176 -155 q 182 47 176 -8 q 189 126 189 103 q 156 245 189 209 q 0 294 112 294 l 0 438 q 154 485 111 438 q 189 603 189 522 q 186 666 189 636 q 176 783 176 772 q 231 945 176 894 q 501 1015 306 1015 l 501 872 q 370 833 408 872 q 340 737 340 801 q 342 677 340 705 q 353 569 353 579 q 326 451 353 496 q 207 366 291 393 q 327 289 294 346 q 353 164 353 246 q 348 79 353 132 q 344 17 344 26 q 372 -95 344 -58 q 501 -141 408 -141 l 501 -285 "},"X":{"x_min":0,"x_max":894.453125,"ha":999,"o":"m 894 0 l 654 0 l 445 351 l 238 0 l 0 0 l 316 516 l 0 1013 l 238 1013 l 445 659 l 652 1013 l 894 1013 l 577 519 l 894 0 "},"#":{"x_min":0,"x_max":1019.453125,"ha":1117,"o":"m 1019 722 l 969 582 l 776 581 l 717 417 l 919 417 l 868 279 l 668 278 l 566 -6 l 413 -5 l 516 279 l 348 279 l 247 -6 l 94 -6 l 196 278 l 0 279 l 49 417 l 245 417 l 304 581 l 98 582 l 150 722 l 354 721 l 455 1006 l 606 1006 l 507 721 l 673 722 l 776 1006 l 927 1006 l 826 721 l 1019 722 m 627 581 l 454 581 l 394 417 l 567 417 l 627 581 "},"ι":{"x_min":42,"x_max":242,"ha":389,"o":"m 242 0 l 42 0 l 42 749 l 242 749 l 242 0 "},"Ά":{"x_min":0,"x_max":995.828125,"ha":1072,"o":"m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 m 995 0 l 776 0 l 708 208 l 315 208 l 247 0 l 29 0 l 390 1012 l 629 1012 l 995 0 m 652 376 l 509 809 l 369 376 l 652 376 "},")":{"x_min":0,"x_max":389,"ha":486,"o":"m 389 357 q 319 14 389 187 q 145 -293 259 -134 l 0 -293 q 139 22 90 -142 q 189 358 189 187 q 139 689 189 525 q 0 1013 90 853 l 145 1013 q 319 703 258 857 q 389 357 389 528 "},"ε":{"x_min":16.671875,"x_max":652.78125,"ha":742,"o":"m 652 259 q 565 49 652 123 q 340 -25 479 -25 q 102 39 188 -25 q 16 197 16 104 q 45 299 16 249 q 134 390 75 348 q 58 456 86 419 q 25 552 25 502 q 120 717 25 653 q 322 776 208 776 q 537 710 456 776 q 625 508 625 639 l 445 508 q 415 585 445 563 q 327 608 386 608 q 254 590 293 608 q 215 544 215 573 q 252 469 215 490 q 336 453 280 453 q 369 455 347 453 q 400 456 391 456 l 400 308 l 329 308 q 247 291 280 308 q 204 223 204 269 q 255 154 204 172 q 345 143 286 143 q 426 174 398 143 q 454 259 454 206 l 652 259 "},"Δ":{"x_min":0,"x_max":981.953125,"ha":1057,"o":"m 981 0 l 0 0 l 386 1013 l 594 1013 l 981 0 m 715 175 l 490 765 l 266 175 l 715 175 "},"}":{"x_min":0,"x_max":500,"ha":597,"o":"m 500 294 q 348 246 390 294 q 315 128 315 209 q 320 42 315 101 q 326 -48 326 -17 q 270 -214 326 -161 q 0 -285 196 -285 l 0 -141 q 126 -97 90 -141 q 154 8 154 -64 q 150 91 154 37 q 146 157 146 145 q 172 281 146 235 q 294 366 206 339 q 173 451 208 390 q 146 576 146 500 q 150 655 146 603 q 154 731 154 708 q 126 831 154 799 q 0 872 90 872 l 0 1015 q 270 944 196 1015 q 326 777 326 891 q 322 707 326 747 q 313 593 313 612 q 347 482 313 518 q 500 438 390 438 l 500 294 "},"‰":{"x_min":0,"x_max":1681,"ha":1775,"o":"m 861 484 q 1048 404 979 484 q 1111 228 1111 332 q 1048 51 1111 123 q 859 -29 979 -29 q 672 50 740 -29 q 610 227 610 122 q 672 403 610 331 q 861 484 741 484 m 861 120 q 939 151 911 120 q 967 226 967 183 q 942 299 967 270 q 861 333 912 333 q 783 301 811 333 q 756 226 756 269 q 783 151 756 182 q 861 120 810 120 m 904 984 l 316 -28 l 205 -29 l 793 983 l 904 984 m 250 984 q 436 904 366 984 q 499 730 499 832 q 436 552 499 626 q 248 472 366 472 q 62 552 132 472 q 0 728 0 624 q 62 903 0 831 q 250 984 132 984 m 249 835 q 169 801 198 835 q 140 725 140 768 q 167 652 140 683 q 247 621 195 621 q 327 654 298 621 q 357 730 357 687 q 329 803 357 772 q 249 835 301 835 m 1430 484 q 1618 404 1548 484 q 1681 228 1681 332 q 1618 51 1681 123 q 1429 -29 1548 -29 q 1241 50 1309 -29 q 1179 227 1179 122 q 1241 403 1179 331 q 1430 484 1311 484 m 1431 120 q 1509 151 1481 120 q 1537 226 1537 183 q 1511 299 1537 270 q 1431 333 1482 333 q 1352 301 1380 333 q 1325 226 1325 269 q 1352 151 1325 182 q 1431 120 1379 120 "},"a":{"x_min":0,"x_max":700,"ha":786,"o":"m 700 0 l 488 0 q 465 93 469 45 q 365 5 427 37 q 233 -26 303 -26 q 65 37 130 -26 q 0 205 0 101 q 120 409 0 355 q 343 452 168 431 q 465 522 465 468 q 424 588 465 565 q 337 611 384 611 q 250 581 285 611 q 215 503 215 552 l 26 503 q 113 707 26 633 q 328 775 194 775 q 538 723 444 775 q 657 554 657 659 l 657 137 q 666 73 657 101 q 700 33 675 45 l 700 0 m 465 297 l 465 367 q 299 322 358 340 q 193 217 193 287 q 223 150 193 174 q 298 127 254 127 q 417 175 370 127 q 465 297 465 224 "},"—":{"x_min":0,"x_max":941.671875,"ha":1039,"o":"m 941 297 l 0 297 l 0 450 l 941 450 l 941 297 "},"=":{"x_min":29.171875,"x_max":798.609375,"ha":828,"o":"m 798 502 l 29 502 l 29 635 l 798 635 l 798 502 m 798 204 l 29 204 l 29 339 l 798 339 l 798 204 "},"N":{"x_min":0,"x_max":833,"ha":949,"o":"m 833 0 l 617 0 l 206 695 l 206 0 l 0 0 l 0 1013 l 216 1013 l 629 315 l 629 1013 l 833 1013 l 833 0 "},"ρ":{"x_min":0,"x_max":722,"ha":810,"o":"m 364 -17 q 271 0 313 -17 q 194 48 230 16 l 194 -278 l 0 -278 l 0 370 q 87 656 0 548 q 358 775 183 775 q 626 655 524 775 q 722 372 722 541 q 621 95 722 208 q 364 -17 520 -17 m 360 607 q 237 529 280 607 q 201 377 201 463 q 234 229 201 292 q 355 147 277 147 q 467 210 419 147 q 515 374 515 273 q 471 537 515 468 q 360 607 428 607 "},"2":{"x_min":64,"x_max":764,"ha":828,"o":"m 764 685 q 675 452 764 541 q 484 325 637 415 q 307 168 357 250 l 754 168 l 754 0 l 64 0 q 193 301 64 175 q 433 480 202 311 q 564 673 564 576 q 519 780 564 737 q 416 824 475 824 q 318 780 358 824 q 262 633 270 730 l 80 633 q 184 903 80 807 q 415 988 276 988 q 654 907 552 988 q 764 685 764 819 "},"¯":{"x_min":0,"x_max":775,"ha":771,"o":"m 775 958 l 0 958 l 0 1111 l 775 1111 l 775 958 "},"Z":{"x_min":0,"x_max":804.171875,"ha":906,"o":"m 804 836 l 251 182 l 793 182 l 793 0 l 0 0 l 0 176 l 551 830 l 11 830 l 11 1013 l 804 1013 l 804 836 "},"u":{"x_min":0,"x_max":668,"ha":782,"o":"m 668 0 l 474 0 l 474 89 q 363 9 425 37 q 233 -19 301 -19 q 61 53 123 -19 q 0 239 0 126 l 0 749 l 199 749 l 199 296 q 225 193 199 233 q 316 146 257 146 q 424 193 380 146 q 469 304 469 240 l 469 749 l 668 749 l 668 0 "},"k":{"x_min":0,"x_max":688.890625,"ha":771,"o":"m 688 0 l 450 0 l 270 316 l 196 237 l 196 0 l 0 0 l 0 1013 l 196 1013 l 196 483 l 433 748 l 675 748 l 413 469 l 688 0 "},"Η":{"x_min":0,"x_max":837,"ha":950,"o":"m 837 0 l 627 0 l 627 450 l 210 450 l 210 0 l 0 0 l 0 1013 l 210 1013 l 210 635 l 627 635 l 627 1013 l 837 1013 l 837 0 "},"Α":{"x_min":0,"x_max":966.671875,"ha":1043,"o":"m 966 0 l 747 0 l 679 208 l 286 208 l 218 0 l 0 0 l 361 1013 l 600 1013 l 966 0 m 623 376 l 480 809 l 340 376 l 623 376 "},"s":{"x_min":0,"x_max":681,"ha":775,"o":"m 681 229 q 568 33 681 105 q 340 -29 471 -29 q 107 39 202 -29 q 0 245 0 114 l 201 245 q 252 155 201 189 q 358 128 295 128 q 436 144 401 128 q 482 205 482 166 q 363 284 482 255 q 143 348 181 329 q 25 533 25 408 q 129 716 25 647 q 340 778 220 778 q 554 710 465 778 q 658 522 643 643 l 463 522 q 419 596 458 570 q 327 622 380 622 q 255 606 290 622 q 221 556 221 590 q 339 473 221 506 q 561 404 528 420 q 681 229 681 344 "},"B":{"x_min":0,"x_max":835,"ha":938,"o":"m 674 547 q 791 450 747 518 q 835 304 835 383 q 718 75 835 158 q 461 0 612 0 l 0 0 l 0 1013 l 477 1013 q 697 951 609 1013 q 797 754 797 880 q 765 630 797 686 q 674 547 734 575 m 438 621 q 538 646 495 621 q 590 730 590 676 q 537 814 590 785 q 436 838 494 838 l 199 838 l 199 621 l 438 621 m 445 182 q 561 211 513 182 q 618 311 618 247 q 565 410 618 375 q 444 446 512 446 l 199 446 l 199 182 l 445 182 "},"…":{"x_min":0,"x_max":819,"ha":963,"o":"m 206 0 l 0 0 l 0 207 l 206 207 l 206 0 m 512 0 l 306 0 l 306 207 l 512 207 l 512 0 m 819 0 l 613 0 l 613 207 l 819 207 l 819 0 "},"?":{"x_min":1,"x_max":687,"ha":785,"o":"m 687 734 q 621 563 687 634 q 501 454 560 508 q 436 293 436 386 l 251 293 l 251 391 q 363 557 251 462 q 476 724 476 653 q 432 827 476 788 q 332 866 389 866 q 238 827 275 866 q 195 699 195 781 l 1 699 q 110 955 1 861 q 352 1040 210 1040 q 582 963 489 1040 q 687 734 687 878 m 446 0 l 243 0 l 243 203 l 446 203 l 446 0 "},"H":{"x_min":0,"x_max":838,"ha":953,"o":"m 838 0 l 628 0 l 628 450 l 210 450 l 210 0 l 0 0 l 0 1013 l 210 1013 l 210 635 l 628 635 l 628 1013 l 838 1013 l 838 0 "},"ν":{"x_min":0,"x_max":740.28125,"ha":828,"o":"m 740 749 l 473 0 l 266 0 l 0 749 l 222 749 l 373 211 l 529 749 l 740 749 "},"c":{"x_min":0,"x_max":751.390625,"ha":828,"o":"m 751 282 q 625 58 725 142 q 384 -26 526 -26 q 107 84 215 -26 q 0 366 0 195 q 98 651 0 536 q 370 774 204 774 q 616 700 518 774 q 751 486 715 626 l 536 486 q 477 570 516 538 q 380 607 434 607 q 248 533 298 607 q 204 378 204 466 q 242 219 204 285 q 377 139 290 139 q 483 179 438 139 q 543 282 527 220 l 751 282 "},"¶":{"x_min":0,"x_max":566.671875,"ha":678,"o":"m 21 892 l 52 892 l 98 761 l 145 892 l 176 892 l 178 741 l 157 741 l 157 867 l 108 741 l 88 741 l 40 871 l 40 741 l 21 741 l 21 892 m 308 854 l 308 731 q 252 691 308 691 q 227 691 240 691 q 207 696 213 695 l 207 712 l 253 706 q 288 733 288 706 l 288 763 q 244 741 279 741 q 193 797 193 741 q 261 860 193 860 q 287 860 273 860 q 308 854 302 855 m 288 842 l 263 843 q 213 796 213 843 q 248 756 213 756 q 288 796 288 756 l 288 842 m 566 988 l 502 988 l 502 -1 l 439 -1 l 439 988 l 317 988 l 317 -1 l 252 -1 l 252 602 q 81 653 155 602 q 0 805 0 711 q 101 989 0 918 q 309 1053 194 1053 l 566 1053 l 566 988 "},"β":{"x_min":0,"x_max":703,"ha":789,"o":"m 510 539 q 651 429 600 501 q 703 262 703 357 q 617 53 703 136 q 404 -29 532 -29 q 199 51 279 -29 l 199 -278 l 0 -278 l 0 627 q 77 911 0 812 q 343 1021 163 1021 q 551 957 464 1021 q 649 769 649 886 q 613 638 649 697 q 510 539 577 579 m 344 136 q 452 181 408 136 q 497 291 497 227 q 435 409 497 369 q 299 444 381 444 l 299 600 q 407 634 363 600 q 452 731 452 669 q 417 820 452 784 q 329 857 382 857 q 217 775 246 857 q 199 622 199 725 l 199 393 q 221 226 199 284 q 344 136 254 136 "},"Μ":{"x_min":0,"x_max":1019,"ha":1132,"o":"m 1019 0 l 823 0 l 823 818 l 617 0 l 402 0 l 194 818 l 194 0 l 0 0 l 0 1013 l 309 1013 l 509 241 l 708 1013 l 1019 1013 l 1019 0 "},"Ό":{"x_min":0.15625,"x_max":1174,"ha":1271,"o":"m 676 -29 q 312 127 451 -29 q 179 505 179 277 q 311 883 179 733 q 676 1040 449 1040 q 1040 883 901 1040 q 1174 505 1174 733 q 1041 127 1174 277 q 676 -29 903 -29 m 676 154 q 890 266 811 154 q 961 506 961 366 q 891 745 961 648 q 676 857 812 857 q 462 747 541 857 q 392 506 392 648 q 461 266 392 365 q 676 154 540 154 m 314 1034 l 98 779 l 0 779 l 136 1034 l 314 1034 "},"Ή":{"x_min":0,"x_max":1248,"ha":1361,"o":"m 1248 0 l 1038 0 l 1038 450 l 621 450 l 621 0 l 411 0 l 411 1012 l 621 1012 l 621 635 l 1038 635 l 1038 1012 l 1248 1012 l 1248 0 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"•":{"x_min":-27.78125,"x_max":691.671875,"ha":775,"o":"m 691 508 q 588 252 691 358 q 331 147 486 147 q 77 251 183 147 q -27 508 -27 355 q 75 761 -27 655 q 331 868 179 868 q 585 763 479 868 q 691 508 691 658 "},"¥":{"x_min":0,"x_max":836,"ha":931,"o":"m 195 625 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 l 650 625 l 777 625 l 777 472 l 578 472 l 538 389 l 777 389 l 777 236 l 532 236 l 532 0 l 322 0 l 322 236 l 79 236 l 79 389 l 315 389 l 273 472 l 79 472 l 79 625 l 195 625 "},"(":{"x_min":0,"x_max":388.890625,"ha":486,"o":"m 388 -293 l 243 -293 q 70 14 130 -134 q 0 357 0 189 q 69 703 0 526 q 243 1013 129 856 l 388 1013 q 248 695 297 860 q 200 358 200 530 q 248 24 200 187 q 388 -293 297 -138 "},"U":{"x_min":0,"x_max":813,"ha":926,"o":"m 813 362 q 697 79 813 187 q 405 -29 582 -29 q 114 78 229 -29 q 0 362 0 186 l 0 1013 l 210 1013 l 210 387 q 260 226 210 291 q 408 154 315 154 q 554 226 500 154 q 603 387 603 291 l 603 1013 l 813 1013 l 813 362 "},"γ":{"x_min":0.0625,"x_max":729.234375,"ha":815,"o":"m 729 749 l 457 37 l 457 -278 l 257 -278 l 257 37 q 218 155 243 95 q 170 275 194 215 l 0 749 l 207 749 l 363 284 l 522 749 l 729 749 "},"α":{"x_min":-1,"x_max":722,"ha":835,"o":"m 722 0 l 531 0 l 530 101 q 433 8 491 41 q 304 -25 375 -25 q 72 104 157 -25 q -1 372 -1 216 q 72 643 -1 530 q 308 775 158 775 q 433 744 375 775 q 528 656 491 713 l 528 749 l 722 749 l 722 0 m 361 601 q 233 527 277 601 q 196 375 196 464 q 232 224 196 288 q 358 144 277 144 q 487 217 441 144 q 528 370 528 281 q 489 523 528 457 q 361 601 443 601 "},"F":{"x_min":0,"x_max":706.953125,"ha":778,"o":"m 706 837 l 206 837 l 206 606 l 645 606 l 645 431 l 206 431 l 206 0 l 0 0 l 0 1013 l 706 1013 l 706 837 "},"­":{"x_min":0,"x_max":704.171875,"ha":801,"o":"m 704 297 l 0 297 l 0 450 l 704 450 l 704 297 "},":":{"x_min":0,"x_max":207,"ha":304,"o":"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 m 207 0 l 0 0 l 0 207 l 207 207 l 207 0 "},"Χ":{"x_min":0,"x_max":894.453125,"ha":978,"o":"m 894 0 l 654 0 l 445 351 l 238 0 l 0 0 l 316 516 l 0 1013 l 238 1013 l 445 660 l 652 1013 l 894 1013 l 577 519 l 894 0 "},"*":{"x_min":115,"x_max":713,"ha":828,"o":"m 713 740 l 518 688 l 651 525 l 531 438 l 412 612 l 290 439 l 173 523 l 308 688 l 115 741 l 159 880 l 342 816 l 343 1013 l 482 1013 l 481 816 l 664 880 l 713 740 "},"†":{"x_min":0,"x_max":809,"ha":894,"o":"m 509 804 l 809 804 l 809 621 l 509 621 l 509 0 l 299 0 l 299 621 l 0 621 l 0 804 l 299 804 l 299 1011 l 509 1011 l 509 804 "},"°":{"x_min":-1,"x_max":363,"ha":460,"o":"m 181 808 q 46 862 94 808 q -1 992 -1 917 q 44 1118 -1 1066 q 181 1175 96 1175 q 317 1118 265 1175 q 363 991 363 1066 q 315 862 363 917 q 181 808 267 808 m 181 908 q 240 933 218 908 q 263 992 263 958 q 242 1051 263 1027 q 181 1075 221 1075 q 120 1050 142 1075 q 99 991 99 1026 q 120 933 99 958 q 181 908 142 908 "},"V":{"x_min":0,"x_max":895.828125,"ha":997,"o":"m 895 1013 l 550 0 l 347 0 l 0 1013 l 231 1013 l 447 256 l 666 1013 l 895 1013 "},"Ξ":{"x_min":0,"x_max":751.390625,"ha":800,"o":"m 733 826 l 5 826 l 5 1012 l 733 1012 l 733 826 m 681 432 l 65 432 l 65 617 l 681 617 l 681 432 m 751 0 l 0 0 l 0 183 l 751 183 l 751 0 "},"\xA0":{"x_min":0,"x_max":0,"ha":853},"Ϋ":{"x_min":-0.21875,"x_max":836.171875,"ha":914,"o":"m 610 1046 l 454 1046 l 454 1215 l 610 1215 l 610 1046 m 369 1046 l 212 1046 l 212 1215 l 369 1215 l 369 1046 m 836 1012 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1012 l 208 1012 l 427 576 l 626 1012 l 836 1012 "},"0":{"x_min":51,"x_max":779,"ha":828,"o":"m 415 -26 q 142 129 242 -26 q 51 476 51 271 q 141 825 51 683 q 415 984 242 984 q 687 825 585 984 q 779 476 779 682 q 688 131 779 271 q 415 -26 587 -26 m 415 137 q 529 242 485 137 q 568 477 568 338 q 530 713 568 619 q 415 821 488 821 q 303 718 344 821 q 262 477 262 616 q 301 237 262 337 q 415 137 341 137 "},"”":{"x_min":0,"x_max":469,"ha":567,"o":"m 192 834 q 137 692 192 751 q 0 626 83 634 l 0 697 q 101 831 101 723 l 0 831 l 0 1013 l 192 1013 l 192 834 m 469 834 q 414 692 469 751 q 277 626 360 634 l 277 697 q 379 831 379 723 l 277 831 l 277 1013 l 469 1013 l 469 834 "},"@":{"x_min":0,"x_max":1276,"ha":1374,"o":"m 1115 -52 q 895 -170 1015 -130 q 647 -211 776 -211 q 158 -34 334 -211 q 0 360 0 123 q 179 810 0 621 q 698 1019 377 1019 q 1138 859 981 1019 q 1276 514 1276 720 q 1173 210 1276 335 q 884 75 1062 75 q 784 90 810 75 q 737 186 749 112 q 647 104 698 133 q 532 75 596 75 q 360 144 420 75 q 308 308 308 205 q 398 568 308 451 q 638 696 497 696 q 731 671 690 696 q 805 604 772 647 l 840 673 l 964 673 q 886 373 915 490 q 856 239 856 257 q 876 201 856 214 q 920 188 895 188 q 1084 284 1019 188 q 1150 511 1150 380 q 1051 779 1150 672 q 715 905 934 905 q 272 734 439 905 q 121 363 121 580 q 250 41 121 170 q 647 -103 394 -103 q 863 -67 751 -103 q 1061 26 975 -32 l 1115 -52 m 769 483 q 770 500 770 489 q 733 567 770 539 q 651 596 695 596 q 508 504 566 596 q 457 322 457 422 q 483 215 457 256 q 561 175 509 175 q 671 221 625 175 q 733 333 718 268 l 769 483 "},"Ί":{"x_min":0,"x_max":619,"ha":732,"o":"m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 m 619 0 l 411 0 l 411 1012 l 619 1012 l 619 0 "},"i":{"x_min":14,"x_max":214,"ha":326,"o":"m 214 830 l 14 830 l 14 1013 l 214 1013 l 214 830 m 214 0 l 14 0 l 14 748 l 214 748 l 214 0 "},"Β":{"x_min":0,"x_max":835,"ha":961,"o":"m 675 547 q 791 450 747 518 q 835 304 835 383 q 718 75 835 158 q 461 0 612 0 l 0 0 l 0 1013 l 477 1013 q 697 951 609 1013 q 797 754 797 880 q 766 630 797 686 q 675 547 734 575 m 439 621 q 539 646 496 621 q 590 730 590 676 q 537 814 590 785 q 436 838 494 838 l 199 838 l 199 621 l 439 621 m 445 182 q 561 211 513 182 q 618 311 618 247 q 565 410 618 375 q 444 446 512 446 l 199 446 l 199 182 l 445 182 "},"υ":{"x_min":0,"x_max":656,"ha":767,"o":"m 656 416 q 568 55 656 145 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 191 l 0 749 l 200 749 l 200 369 q 216 222 200 268 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 749 l 656 749 l 656 416 "},"]":{"x_min":0,"x_max":349,"ha":446,"o":"m 349 -300 l 0 -300 l 0 -154 l 163 -154 l 163 866 l 0 866 l 0 1013 l 349 1013 l 349 -300 "},"m":{"x_min":0,"x_max":1065,"ha":1174,"o":"m 1065 0 l 866 0 l 866 483 q 836 564 866 532 q 759 596 807 596 q 663 555 700 596 q 627 454 627 514 l 627 0 l 433 0 l 433 481 q 403 563 433 531 q 323 596 374 596 q 231 554 265 596 q 197 453 197 513 l 197 0 l 0 0 l 0 748 l 189 748 l 189 665 q 279 745 226 715 q 392 775 333 775 q 509 744 455 775 q 606 659 563 713 q 695 744 640 713 q 814 775 749 775 q 992 702 920 775 q 1065 523 1065 630 l 1065 0 "},"χ":{"x_min":0,"x_max":759.71875,"ha":847,"o":"m 759 -299 l 548 -299 l 379 66 l 215 -299 l 0 -299 l 261 233 l 13 749 l 230 749 l 379 400 l 527 749 l 738 749 l 500 238 l 759 -299 "},"8":{"x_min":57,"x_max":770,"ha":828,"o":"m 625 516 q 733 416 697 477 q 770 284 770 355 q 675 69 770 161 q 415 -29 574 -29 q 145 65 244 -29 q 57 273 57 150 q 93 413 57 350 q 204 516 130 477 q 112 609 142 556 q 83 718 83 662 q 177 905 83 824 q 414 986 272 986 q 650 904 555 986 q 745 715 745 822 q 716 608 745 658 q 625 516 688 558 m 414 590 q 516 624 479 590 q 553 706 553 659 q 516 791 553 755 q 414 828 480 828 q 311 792 348 828 q 275 706 275 757 q 310 624 275 658 q 414 590 345 590 m 413 135 q 527 179 487 135 q 564 279 564 218 q 525 386 564 341 q 411 436 482 436 q 298 387 341 436 q 261 282 261 344 q 300 178 261 222 q 413 135 340 135 "},"ί":{"x_min":42,"x_max":371.171875,"ha":389,"o":"m 242 0 l 42 0 l 42 748 l 242 748 l 242 0 m 371 1039 l 169 823 l 71 823 l 193 1039 l 371 1039 "},"Ζ":{"x_min":0,"x_max":804.171875,"ha":886,"o":"m 804 835 l 251 182 l 793 182 l 793 0 l 0 0 l 0 176 l 551 829 l 11 829 l 11 1012 l 804 1012 l 804 835 "},"R":{"x_min":0,"x_max":836.109375,"ha":947,"o":"m 836 0 l 608 0 q 588 53 596 20 q 581 144 581 86 q 581 179 581 162 q 581 215 581 197 q 553 345 581 306 q 428 393 518 393 l 208 393 l 208 0 l 0 0 l 0 1013 l 491 1013 q 720 944 630 1013 q 819 734 819 869 q 778 584 819 654 q 664 485 738 513 q 757 415 727 463 q 794 231 794 358 l 794 170 q 800 84 794 116 q 836 31 806 51 l 836 0 m 462 838 l 208 838 l 208 572 l 452 572 q 562 604 517 572 q 612 704 612 640 q 568 801 612 765 q 462 838 525 838 "},"o":{"x_min":0,"x_max":764,"ha":871,"o":"m 380 -26 q 105 86 211 -26 q 0 371 0 199 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 371 764 544 q 658 86 764 199 q 380 -26 552 -26 m 379 141 q 515 216 466 141 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 217 204 282 q 379 141 294 141 "},"5":{"x_min":59,"x_max":767,"ha":828,"o":"m 767 319 q 644 59 767 158 q 382 -29 533 -29 q 158 43 247 -29 q 59 264 59 123 l 252 264 q 295 165 252 201 q 400 129 339 129 q 512 172 466 129 q 564 308 564 220 q 514 437 564 387 q 398 488 464 488 q 329 472 361 488 q 271 420 297 456 l 93 428 l 157 958 l 722 958 l 722 790 l 295 790 l 271 593 q 348 635 306 621 q 431 649 389 649 q 663 551 560 649 q 767 319 767 453 "},"7":{"x_min":65.28125,"x_max":762.5,"ha":828,"o":"m 762 808 q 521 435 604 626 q 409 0 438 244 l 205 0 q 313 422 227 234 q 548 789 387 583 l 65 789 l 65 958 l 762 958 l 762 808 "},"K":{"x_min":0,"x_max":900,"ha":996,"o":"m 900 0 l 647 0 l 316 462 l 208 355 l 208 0 l 0 0 l 0 1013 l 208 1013 l 208 595 l 604 1013 l 863 1013 l 461 603 l 900 0 "},",":{"x_min":0,"x_max":206,"ha":303,"o":"m 206 5 q 150 -151 206 -88 q 0 -238 94 -213 l 0 -159 q 84 -100 56 -137 q 111 -2 111 -62 l 0 -2 l 0 205 l 206 205 l 206 5 "},"d":{"x_min":0,"x_max":722,"ha":836,"o":"m 722 0 l 530 0 l 530 101 q 303 -26 449 -26 q 72 103 155 -26 q 0 373 0 214 q 72 642 0 528 q 305 775 156 775 q 433 743 373 775 q 530 656 492 712 l 530 1013 l 722 1013 l 722 0 m 361 600 q 234 523 280 600 q 196 372 196 458 q 233 220 196 286 q 358 143 278 143 q 489 216 442 143 q 530 369 530 280 q 491 522 530 456 q 361 600 443 600 "},"¨":{"x_min":212,"x_max":609,"ha":933,"o":"m 609 1046 l 453 1046 l 453 1216 l 609 1216 l 609 1046 m 369 1046 l 212 1046 l 212 1216 l 369 1216 l 369 1046 "},"E":{"x_min":0,"x_max":761.109375,"ha":824,"o":"m 761 0 l 0 0 l 0 1013 l 734 1013 l 734 837 l 206 837 l 206 621 l 690 621 l 690 446 l 206 446 l 206 186 l 761 186 l 761 0 "},"Y":{"x_min":0,"x_max":836,"ha":931,"o":"m 836 1013 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 "},"\\"":{"x_min":0,"x_max":357,"ha":454,"o":"m 357 604 l 225 604 l 225 988 l 357 988 l 357 604 m 132 604 l 0 604 l 0 988 l 132 988 l 132 604 "},"‹":{"x_min":35.984375,"x_max":791.671875,"ha":828,"o":"m 791 17 l 36 352 l 35 487 l 791 823 l 791 672 l 229 421 l 791 168 l 791 17 "},"„":{"x_min":0,"x_max":483,"ha":588,"o":"m 206 5 q 150 -151 206 -88 q 0 -238 94 -213 l 0 -159 q 84 -100 56 -137 q 111 -2 111 -62 l 0 -2 l 0 205 l 206 205 l 206 5 m 483 5 q 427 -151 483 -88 q 277 -238 371 -213 l 277 -159 q 361 -100 334 -137 q 388 -2 388 -62 l 277 -2 l 277 205 l 483 205 l 483 5 "},"δ":{"x_min":6,"x_max":732,"ha":835,"o":"m 732 352 q 630 76 732 177 q 354 -25 529 -25 q 101 74 197 -25 q 6 333 6 174 q 89 581 6 480 q 323 690 178 690 q 66 864 201 787 l 66 1013 l 669 1013 l 669 856 l 348 856 q 532 729 461 789 q 673 566 625 651 q 732 352 732 465 m 419 551 q 259 496 321 551 q 198 344 198 441 q 238 208 198 267 q 357 140 283 140 q 484 203 437 140 q 526 344 526 260 q 499 466 526 410 q 419 551 473 521 "},"έ":{"x_min":16.671875,"x_max":652.78125,"ha":742,"o":"m 652 259 q 565 49 652 123 q 340 -25 479 -25 q 102 39 188 -25 q 16 197 16 104 q 45 299 16 250 q 134 390 75 348 q 58 456 86 419 q 25 552 25 502 q 120 717 25 653 q 322 776 208 776 q 537 710 456 776 q 625 508 625 639 l 445 508 q 415 585 445 563 q 327 608 386 608 q 254 590 293 608 q 215 544 215 573 q 252 469 215 490 q 336 453 280 453 q 369 455 347 453 q 400 456 391 456 l 400 308 l 329 308 q 247 291 280 308 q 204 223 204 269 q 255 154 204 172 q 345 143 286 143 q 426 174 398 143 q 454 259 454 206 l 652 259 m 579 1039 l 377 823 l 279 823 l 401 1039 l 579 1039 "},"ω":{"x_min":0,"x_max":945,"ha":1051,"o":"m 565 323 l 565 289 q 577 190 565 221 q 651 142 597 142 q 718 189 694 142 q 742 365 742 237 q 703 565 742 462 q 610 749 671 650 l 814 749 q 910 547 876 650 q 945 337 945 444 q 874 96 945 205 q 668 -29 793 -29 q 551 0 608 -29 q 470 78 495 30 q 390 0 444 28 q 276 -29 337 -29 q 69 96 149 -29 q 0 337 0 204 q 36 553 0 444 q 130 749 68 650 l 334 749 q 241 565 273 650 q 203 365 203 461 q 219 222 203 279 q 292 142 243 142 q 360 183 342 142 q 373 271 373 211 q 372 298 372 285 q 372 323 372 311 l 372 528 l 566 528 l 565 323 "},"´":{"x_min":0,"x_max":132,"ha":299,"o":"m 132 604 l 0 604 l 0 988 l 132 988 l 132 604 "},"±":{"x_min":29,"x_max":798,"ha":828,"o":"m 798 480 l 484 480 l 484 254 l 344 254 l 344 480 l 29 480 l 29 615 l 344 615 l 344 842 l 484 842 l 484 615 l 798 615 l 798 480 m 798 0 l 29 0 l 29 136 l 798 136 l 798 0 "},"|":{"x_min":0,"x_max":143,"ha":240,"o":"m 143 462 l 0 462 l 0 984 l 143 984 l 143 462 m 143 -242 l 0 -242 l 0 280 l 143 280 l 143 -242 "},"ϋ":{"x_min":0,"x_max":656,"ha":767,"o":"m 535 810 l 406 810 l 406 952 l 535 952 l 535 810 m 271 810 l 142 810 l 142 952 l 271 952 l 271 810 m 656 417 q 568 55 656 146 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 200 369 q 216 222 200 268 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 748 l 656 748 l 656 417 "},"§":{"x_min":0,"x_max":633,"ha":731,"o":"m 633 469 q 601 356 633 406 q 512 274 569 305 q 570 197 548 242 q 593 105 593 152 q 501 -76 593 -5 q 301 -142 416 -142 q 122 -82 193 -142 q 43 108 43 -15 l 212 108 q 251 27 220 53 q 321 1 283 1 q 389 23 360 1 q 419 83 419 46 q 310 194 419 139 q 108 297 111 295 q 0 476 0 372 q 33 584 0 537 q 120 659 62 626 q 72 720 91 686 q 53 790 53 755 q 133 978 53 908 q 312 1042 207 1042 q 483 984 412 1042 q 574 807 562 921 l 409 807 q 379 875 409 851 q 307 900 349 900 q 244 881 270 900 q 218 829 218 862 q 324 731 218 781 q 524 636 506 647 q 633 469 633 565 m 419 334 q 473 411 473 372 q 451 459 473 436 q 390 502 430 481 l 209 595 q 167 557 182 577 q 153 520 153 537 q 187 461 153 491 q 263 413 212 440 l 419 334 "},"b":{"x_min":0,"x_max":722,"ha":822,"o":"m 416 -26 q 289 6 346 -26 q 192 101 232 39 l 192 0 l 0 0 l 0 1013 l 192 1013 l 192 656 q 286 743 226 712 q 415 775 346 775 q 649 644 564 775 q 722 374 722 533 q 649 106 722 218 q 416 -26 565 -26 m 361 600 q 232 524 279 600 q 192 371 192 459 q 229 221 192 284 q 357 145 275 145 q 487 221 441 145 q 526 374 526 285 q 488 523 526 460 q 361 600 442 600 "},"q":{"x_min":0,"x_max":722,"ha":833,"o":"m 722 -298 l 530 -298 l 530 97 q 306 -25 449 -25 q 73 104 159 -25 q 0 372 0 216 q 72 643 0 529 q 305 775 156 775 q 430 742 371 775 q 530 654 488 709 l 530 750 l 722 750 l 722 -298 m 360 601 q 234 527 278 601 q 197 378 197 466 q 233 225 197 291 q 357 144 277 144 q 488 217 441 144 q 530 370 530 282 q 491 523 530 459 q 360 601 443 601 "},"Ω":{"x_min":-0.03125,"x_max":1008.53125,"ha":1108,"o":"m 1008 0 l 589 0 l 589 199 q 717 368 670 265 q 764 580 764 471 q 698 778 764 706 q 504 855 629 855 q 311 773 380 855 q 243 563 243 691 q 289 360 243 458 q 419 199 336 262 l 419 0 l 0 0 l 0 176 l 202 176 q 77 355 123 251 q 32 569 32 459 q 165 908 32 776 q 505 1040 298 1040 q 844 912 711 1040 q 977 578 977 785 q 931 362 977 467 q 805 176 886 256 l 1008 176 l 1008 0 "},"ύ":{"x_min":0,"x_max":656,"ha":767,"o":"m 656 417 q 568 55 656 146 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 201 369 q 218 222 201 269 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 748 l 656 748 l 656 417 m 579 1039 l 378 823 l 279 823 l 401 1039 l 579 1039 "},"z":{"x_min":0,"x_max":663.890625,"ha":753,"o":"m 663 0 l 0 0 l 0 154 l 411 591 l 25 591 l 25 749 l 650 749 l 650 584 l 245 165 l 663 165 l 663 0 "},"™":{"x_min":0,"x_max":951,"ha":1063,"o":"m 405 921 l 255 921 l 255 506 l 149 506 l 149 921 l 0 921 l 0 1013 l 405 1013 l 405 921 m 951 506 l 852 506 l 852 916 l 750 506 l 643 506 l 539 915 l 539 506 l 442 506 l 442 1013 l 595 1012 l 695 625 l 794 1013 l 951 1013 l 951 506 "},"ή":{"x_min":0,"x_max":669,"ha":779,"o":"m 669 -278 l 469 -278 l 469 390 q 448 526 469 473 q 348 606 417 606 q 244 553 288 606 q 201 441 201 501 l 201 0 l 0 0 l 0 749 l 201 749 l 201 665 q 301 744 244 715 q 423 774 359 774 q 606 685 538 774 q 669 484 669 603 l 669 -278 m 495 1039 l 293 823 l 195 823 l 317 1039 l 495 1039 "},"Θ":{"x_min":0,"x_max":993,"ha":1092,"o":"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 133 883 0 733 q 497 1040 272 1040 q 861 883 722 1040 q 993 505 993 733 q 861 127 993 277 q 497 -29 722 -29 m 497 154 q 711 266 631 154 q 782 506 782 367 q 712 746 782 648 q 497 858 634 858 q 281 746 361 858 q 211 506 211 648 q 280 266 211 365 q 497 154 359 154 m 676 430 l 316 430 l 316 593 l 676 593 l 676 430 "},"®":{"x_min":3,"x_max":1007,"ha":1104,"o":"m 507 -6 q 129 153 269 -6 q 3 506 3 298 q 127 857 3 713 q 502 1017 266 1017 q 880 855 740 1017 q 1007 502 1007 711 q 882 152 1007 295 q 507 -6 743 -6 m 502 934 q 184 800 302 934 q 79 505 79 680 q 184 210 79 331 q 501 76 302 76 q 819 210 701 76 q 925 507 925 331 q 820 800 925 682 q 502 934 704 934 m 782 190 l 639 190 q 627 225 632 202 q 623 285 623 248 l 623 326 q 603 411 623 384 q 527 439 584 439 l 388 439 l 388 190 l 257 190 l 257 829 l 566 829 q 709 787 654 829 q 772 654 772 740 q 746 559 772 604 q 675 497 720 514 q 735 451 714 483 q 756 341 756 419 l 756 299 q 760 244 756 265 q 782 212 764 223 l 782 190 m 546 718 l 388 718 l 388 552 l 541 552 q 612 572 584 552 q 641 635 641 593 q 614 695 641 672 q 546 718 587 718 "},"~":{"x_min":0,"x_max":851,"ha":949,"o":"m 851 968 q 795 750 851 831 q 599 656 730 656 q 406 744 506 656 q 259 832 305 832 q 162 775 193 832 q 139 656 139 730 l 0 656 q 58 871 0 787 q 251 968 124 968 q 442 879 341 968 q 596 791 544 791 q 691 849 663 791 q 712 968 712 892 l 851 968 "},"Ε":{"x_min":0,"x_max":761.546875,"ha":824,"o":"m 761 0 l 0 0 l 0 1012 l 735 1012 l 735 836 l 206 836 l 206 621 l 690 621 l 690 446 l 206 446 l 206 186 l 761 186 l 761 0 "},"³":{"x_min":0,"x_max":467,"ha":564,"o":"m 467 555 q 393 413 467 466 q 229 365 325 365 q 70 413 134 365 q 0 565 0 467 l 123 565 q 163 484 131 512 q 229 461 190 461 q 299 486 269 461 q 329 553 329 512 q 281 627 329 607 q 187 641 248 641 l 187 722 q 268 737 237 722 q 312 804 312 758 q 285 859 312 837 q 224 882 259 882 q 165 858 189 882 q 135 783 140 834 l 12 783 q 86 930 20 878 q 230 976 145 976 q 379 931 314 976 q 444 813 444 887 q 423 744 444 773 q 365 695 402 716 q 439 640 412 676 q 467 555 467 605 "},"[":{"x_min":0,"x_max":347.21875,"ha":444,"o":"m 347 -300 l 0 -300 l 0 1013 l 347 1013 l 347 866 l 188 866 l 188 -154 l 347 -154 l 347 -300 "},"L":{"x_min":0,"x_max":704.171875,"ha":763,"o":"m 704 0 l 0 0 l 0 1013 l 208 1013 l 208 186 l 704 186 l 704 0 "},"σ":{"x_min":0,"x_max":851.3125,"ha":940,"o":"m 851 594 l 712 594 q 761 369 761 485 q 658 83 761 191 q 379 -25 555 -25 q 104 87 208 -25 q 0 372 0 200 q 103 659 0 544 q 378 775 207 775 q 464 762 407 775 q 549 750 521 750 l 851 750 l 851 594 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 608 465 608 q 244 530 293 608 q 203 373 203 465 q 244 218 203 283 q 379 142 293 142 "},"ζ":{"x_min":0,"x_max":622,"ha":701,"o":"m 622 -32 q 604 -158 622 -98 q 551 -278 587 -218 l 373 -278 q 426 -180 406 -229 q 446 -80 446 -131 q 421 -22 446 -37 q 354 -8 397 -8 q 316 -9 341 -8 q 280 -11 291 -11 q 75 69 150 -11 q 0 283 0 150 q 87 596 0 437 q 291 856 162 730 l 47 856 l 47 1013 l 592 1013 l 592 904 q 317 660 422 800 q 197 318 197 497 q 306 141 197 169 q 510 123 408 131 q 622 -32 622 102 "},"θ":{"x_min":0,"x_max":714,"ha":817,"o":"m 357 1022 q 633 833 534 1022 q 714 486 714 679 q 634 148 714 288 q 354 -25 536 -25 q 79 147 175 -25 q 0 481 0 288 q 79 831 0 679 q 357 1022 177 1022 m 510 590 q 475 763 510 687 q 351 862 430 862 q 233 763 272 862 q 204 590 204 689 l 510 590 m 510 440 l 204 440 q 233 251 204 337 q 355 131 274 131 q 478 248 434 131 q 510 440 510 337 "},"Ο":{"x_min":0,"x_max":995,"ha":1092,"o":"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 132 883 0 733 q 497 1040 270 1040 q 861 883 722 1040 q 995 505 995 733 q 862 127 995 277 q 497 -29 724 -29 m 497 154 q 711 266 632 154 q 781 506 781 365 q 711 745 781 647 q 497 857 632 857 q 283 747 361 857 q 213 506 213 647 q 282 266 213 365 q 497 154 361 154 "},"Γ":{"x_min":0,"x_max":703.84375,"ha":742,"o":"m 703 836 l 208 836 l 208 0 l 0 0 l 0 1012 l 703 1012 l 703 836 "}," ":{"x_min":0,"x_max":0,"ha":375},"%":{"x_min":0,"x_max":1111,"ha":1213,"o":"m 861 484 q 1048 404 979 484 q 1111 228 1111 332 q 1048 51 1111 123 q 859 -29 979 -29 q 672 50 740 -29 q 610 227 610 122 q 672 403 610 331 q 861 484 741 484 m 861 120 q 939 151 911 120 q 967 226 967 183 q 942 299 967 270 q 861 333 912 333 q 783 301 811 333 q 756 226 756 269 q 783 151 756 182 q 861 120 810 120 m 904 984 l 316 -28 l 205 -29 l 793 983 l 904 984 m 250 984 q 436 904 366 984 q 499 730 499 832 q 436 552 499 626 q 248 472 366 472 q 62 552 132 472 q 0 728 0 624 q 62 903 0 831 q 250 984 132 984 m 249 835 q 169 801 198 835 q 140 725 140 768 q 167 652 140 683 q 247 621 195 621 q 327 654 298 621 q 357 730 357 687 q 329 803 357 772 q 249 835 301 835 "},"P":{"x_min":0,"x_max":771,"ha":838,"o":"m 208 361 l 208 0 l 0 0 l 0 1013 l 450 1013 q 682 919 593 1013 q 771 682 771 826 q 687 452 771 544 q 466 361 604 361 l 208 361 m 421 837 l 208 837 l 208 544 l 410 544 q 525 579 480 544 q 571 683 571 615 q 527 792 571 747 q 421 837 484 837 "},"Έ":{"x_min":0,"x_max":1172.546875,"ha":1235,"o":"m 1172 0 l 411 0 l 411 1012 l 1146 1012 l 1146 836 l 617 836 l 617 621 l 1101 621 l 1101 446 l 617 446 l 617 186 l 1172 186 l 1172 0 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"Ώ":{"x_min":0.4375,"x_max":1189.546875,"ha":1289,"o":"m 1189 0 l 770 0 l 770 199 q 897 369 849 263 q 945 580 945 474 q 879 778 945 706 q 685 855 810 855 q 492 773 561 855 q 424 563 424 691 q 470 360 424 458 q 600 199 517 262 l 600 0 l 180 0 l 180 176 l 383 176 q 258 355 304 251 q 213 569 213 459 q 346 908 213 776 q 686 1040 479 1040 q 1025 912 892 1040 q 1158 578 1158 785 q 1112 362 1158 467 q 986 176 1067 256 l 1189 176 l 1189 0 m 314 1092 l 99 837 l 0 837 l 136 1092 l 314 1092 "},"_":{"x_min":61.109375,"x_max":766.671875,"ha":828,"o":"m 766 -333 l 61 -333 l 61 -190 l 766 -190 l 766 -333 "},"Ϊ":{"x_min":-56,"x_max":342,"ha":503,"o":"m 342 1046 l 186 1046 l 186 1215 l 342 1215 l 342 1046 m 101 1046 l -56 1046 l -56 1215 l 101 1215 l 101 1046 m 249 0 l 41 0 l 41 1012 l 249 1012 l 249 0 "},"+":{"x_min":43,"x_max":784,"ha":828,"o":"m 784 353 l 483 353 l 483 0 l 343 0 l 343 353 l 43 353 l 43 489 l 343 489 l 343 840 l 483 840 l 483 489 l 784 489 l 784 353 "},"½":{"x_min":0,"x_max":1090,"ha":1188,"o":"m 1090 380 q 992 230 1090 301 q 779 101 886 165 q 822 94 784 95 q 924 93 859 93 l 951 93 l 973 93 l 992 93 l 1009 93 q 1046 93 1027 93 q 1085 93 1066 93 l 1085 0 l 650 0 l 654 38 q 815 233 665 137 q 965 376 965 330 q 936 436 965 412 q 869 461 908 461 q 806 435 831 461 q 774 354 780 409 l 659 354 q 724 505 659 451 q 870 554 783 554 q 1024 506 958 554 q 1090 380 1090 459 m 868 998 l 268 -28 l 154 -27 l 757 999 l 868 998 m 272 422 l 147 422 l 147 799 l 0 799 l 0 875 q 126 900 91 875 q 170 973 162 926 l 272 973 l 272 422 "},"Ρ":{"x_min":0,"x_max":771,"ha":838,"o":"m 208 361 l 208 0 l 0 0 l 0 1012 l 450 1012 q 682 919 593 1012 q 771 681 771 826 q 687 452 771 544 q 466 361 604 361 l 208 361 m 422 836 l 209 836 l 209 544 l 410 544 q 525 579 480 544 q 571 683 571 614 q 527 791 571 747 q 422 836 484 836 "},"'":{"x_min":0,"x_max":192,"ha":289,"o":"m 192 834 q 137 692 192 751 q 0 626 82 632 l 0 697 q 101 830 101 726 l 0 830 l 0 1013 l 192 1013 l 192 834 "},"ª":{"x_min":0,"x_max":350,"ha":393,"o":"m 350 625 l 245 625 q 237 648 241 636 q 233 672 233 661 q 117 611 192 611 q 33 643 66 611 q 0 727 0 675 q 116 846 0 828 q 233 886 233 864 q 211 919 233 907 q 168 931 190 931 q 108 877 108 931 l 14 877 q 56 977 14 942 q 165 1013 98 1013 q 270 987 224 1013 q 329 903 329 955 l 329 694 q 332 661 329 675 q 350 641 336 648 l 350 625 m 233 774 l 233 809 q 151 786 180 796 q 97 733 97 768 q 111 700 97 712 q 149 689 126 689 q 210 713 187 689 q 233 774 233 737 "},"΅":{"x_min":57,"x_max":584,"ha":753,"o":"m 584 810 l 455 810 l 455 952 l 584 952 l 584 810 m 521 1064 l 305 810 l 207 810 l 343 1064 l 521 1064 m 186 810 l 57 810 l 57 952 l 186 952 l 186 810 "},"T":{"x_min":0,"x_max":809,"ha":894,"o":"m 809 831 l 509 831 l 509 0 l 299 0 l 299 831 l 0 831 l 0 1013 l 809 1013 l 809 831 "},"Φ":{"x_min":0,"x_max":949,"ha":1032,"o":"m 566 0 l 385 0 l 385 121 q 111 230 222 121 q 0 508 0 340 q 112 775 0 669 q 385 892 219 875 l 385 1013 l 566 1013 l 566 892 q 836 776 732 875 q 949 507 949 671 q 838 231 949 341 q 566 121 728 121 l 566 0 m 566 285 q 701 352 650 285 q 753 508 753 419 q 703 658 753 597 q 566 729 653 720 l 566 285 m 385 285 l 385 729 q 245 661 297 717 q 193 516 193 604 q 246 356 193 427 q 385 285 300 285 "},"j":{"x_min":-45.828125,"x_max":242,"ha":361,"o":"m 242 830 l 42 830 l 42 1013 l 242 1013 l 242 830 m 242 -119 q 180 -267 242 -221 q 20 -308 127 -308 l -45 -308 l -45 -140 l -24 -140 q 25 -130 8 -140 q 42 -88 42 -120 l 42 748 l 242 748 l 242 -119 "},"Σ":{"x_min":0,"x_max":772.21875,"ha":849,"o":"m 772 0 l 0 0 l 0 140 l 368 526 l 18 862 l 18 1012 l 740 1012 l 740 836 l 315 836 l 619 523 l 298 175 l 772 175 l 772 0 "},"1":{"x_min":197.609375,"x_max":628,"ha":828,"o":"m 628 0 l 434 0 l 434 674 l 197 674 l 197 810 q 373 837 318 810 q 468 984 450 876 l 628 984 l 628 0 "},"›":{"x_min":36.109375,"x_max":792,"ha":828,"o":"m 792 352 l 36 17 l 36 168 l 594 420 l 36 672 l 36 823 l 792 487 l 792 352 "},"<":{"x_min":35.984375,"x_max":791.671875,"ha":828,"o":"m 791 17 l 36 352 l 35 487 l 791 823 l 791 672 l 229 421 l 791 168 l 791 17 "},"£":{"x_min":0,"x_max":716.546875,"ha":814,"o":"m 716 38 q 603 -9 658 5 q 502 -24 548 -24 q 398 -10 451 -24 q 239 25 266 25 q 161 12 200 25 q 77 -29 122 0 l 0 113 q 110 211 81 174 q 151 315 151 259 q 117 440 151 365 l 0 440 l 0 515 l 73 515 q 35 610 52 560 q 15 710 15 671 q 119 910 15 831 q 349 984 216 984 q 570 910 480 984 q 693 668 674 826 l 501 668 q 455 791 501 746 q 353 830 414 830 q 256 795 298 830 q 215 705 215 760 q 249 583 215 655 q 283 515 266 548 l 479 515 l 479 440 l 309 440 q 316 394 313 413 q 319 355 319 374 q 287 241 319 291 q 188 135 263 205 q 262 160 225 152 q 332 168 298 168 q 455 151 368 168 q 523 143 500 143 q 588 152 558 143 q 654 189 617 162 l 716 38 "},"t":{"x_min":0,"x_max":412,"ha":511,"o":"m 412 -6 q 349 -8 391 -6 q 287 -11 307 -11 q 137 38 177 -11 q 97 203 97 87 l 97 609 l 0 609 l 0 749 l 97 749 l 97 951 l 297 951 l 297 749 l 412 749 l 412 609 l 297 609 l 297 191 q 315 152 297 162 q 366 143 334 143 q 389 143 378 143 q 412 143 400 143 l 412 -6 "},"¬":{"x_min":0,"x_max":704,"ha":801,"o":"m 704 93 l 551 93 l 551 297 l 0 297 l 0 450 l 704 450 l 704 93 "},"λ":{"x_min":0,"x_max":701.390625,"ha":775,"o":"m 701 0 l 491 0 l 345 444 l 195 0 l 0 0 l 238 697 l 131 1013 l 334 1013 l 701 0 "},"W":{"x_min":0,"x_max":1291.671875,"ha":1399,"o":"m 1291 1013 l 1002 0 l 802 0 l 645 777 l 490 0 l 288 0 l 0 1013 l 215 1013 l 388 298 l 534 1012 l 757 1013 l 904 299 l 1076 1013 l 1291 1013 "},">":{"x_min":36.109375,"x_max":792,"ha":828,"o":"m 792 352 l 36 17 l 36 168 l 594 420 l 36 672 l 36 823 l 792 487 l 792 352 "},"v":{"x_min":0,"x_max":740.28125,"ha":828,"o":"m 740 749 l 473 0 l 266 0 l 0 749 l 222 749 l 373 211 l 529 749 l 740 749 "},"τ":{"x_min":0.28125,"x_max":618.734375,"ha":699,"o":"m 618 593 l 409 593 l 409 0 l 210 0 l 210 593 l 0 593 l 0 749 l 618 749 l 618 593 "},"ξ":{"x_min":0,"x_max":640,"ha":715,"o":"m 640 -14 q 619 -157 640 -84 q 563 -299 599 -230 l 399 -299 q 442 -194 433 -223 q 468 -85 468 -126 q 440 -25 468 -41 q 368 -10 412 -10 q 333 -11 355 -10 q 302 -13 311 -13 q 91 60 179 -13 q 0 259 0 138 q 56 426 0 354 q 201 530 109 493 q 106 594 144 553 q 65 699 65 642 q 94 787 65 747 q 169 856 123 828 l 22 856 l 22 1013 l 597 1013 l 597 856 l 497 857 q 345 840 398 857 q 257 736 257 812 q 366 614 257 642 q 552 602 416 602 l 552 446 l 513 446 q 313 425 379 446 q 199 284 199 389 q 312 162 199 184 q 524 136 418 148 q 640 -14 640 105 "},"&":{"x_min":-1,"x_max":910.109375,"ha":1007,"o":"m 910 -1 l 676 -1 l 607 83 q 291 -47 439 -47 q 50 100 135 -47 q -1 273 -1 190 q 51 431 -1 357 q 218 568 104 505 q 151 661 169 629 q 120 769 120 717 q 201 951 120 885 q 382 1013 276 1013 q 555 957 485 1013 q 635 789 635 894 q 584 644 635 709 q 468 539 548 597 l 615 359 q 664 527 654 440 l 844 527 q 725 223 824 359 l 910 -1 m 461 787 q 436 848 461 826 q 381 870 412 870 q 325 849 349 870 q 301 792 301 829 q 324 719 301 757 q 372 660 335 703 q 430 714 405 680 q 461 787 461 753 m 500 214 l 318 441 q 198 286 198 363 q 225 204 198 248 q 347 135 268 135 q 425 153 388 135 q 500 214 462 172 "},"Λ":{"x_min":0,"x_max":894.453125,"ha":974,"o":"m 894 0 l 666 0 l 447 757 l 225 0 l 0 0 l 344 1013 l 547 1013 l 894 0 "},"I":{"x_min":41,"x_max":249,"ha":365,"o":"m 249 0 l 41 0 l 41 1013 l 249 1013 l 249 0 "},"G":{"x_min":0,"x_max":971,"ha":1057,"o":"m 971 -1 l 829 -1 l 805 118 q 479 -29 670 -29 q 126 133 261 -29 q 0 509 0 286 q 130 884 0 737 q 493 1040 268 1040 q 790 948 659 1040 q 961 698 920 857 l 736 698 q 643 813 709 769 q 500 857 578 857 q 285 746 364 857 q 213 504 213 644 q 285 263 213 361 q 505 154 365 154 q 667 217 598 154 q 761 374 736 280 l 548 374 l 548 548 l 971 548 l 971 -1 "},"ΰ":{"x_min":0,"x_max":655,"ha":767,"o":"m 583 810 l 454 810 l 454 952 l 583 952 l 583 810 m 186 810 l 57 809 l 57 952 l 186 952 l 186 810 m 516 1039 l 315 823 l 216 823 l 338 1039 l 516 1039 m 655 417 q 567 55 655 146 q 326 -25 489 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 201 369 q 218 222 201 269 q 326 142 245 142 q 439 247 410 142 q 455 422 455 304 l 455 748 l 655 748 l 655 417 "},"\`":{"x_min":0,"x_max":190,"ha":288,"o":"m 190 654 l 0 654 l 0 830 q 55 970 0 909 q 190 1040 110 1031 l 190 969 q 111 922 134 952 q 88 836 88 892 l 190 836 l 190 654 "},"·":{"x_min":0,"x_max":207,"ha":304,"o":"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 "},"Υ":{"x_min":-0.21875,"x_max":836.171875,"ha":914,"o":"m 836 1013 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 "},"r":{"x_min":0,"x_max":431.9375,"ha":513,"o":"m 431 564 q 269 536 320 564 q 200 395 200 498 l 200 0 l 0 0 l 0 748 l 183 748 l 183 618 q 285 731 224 694 q 431 768 345 768 l 431 564 "},"x":{"x_min":0,"x_max":738.890625,"ha":826,"o":"m 738 0 l 504 0 l 366 238 l 230 0 l 0 0 l 252 382 l 11 749 l 238 749 l 372 522 l 502 749 l 725 749 l 488 384 l 738 0 "},"μ":{"x_min":0,"x_max":647,"ha":754,"o":"m 647 0 l 477 0 l 477 68 q 411 9 448 30 q 330 -11 374 -11 q 261 3 295 -11 q 199 43 226 18 l 199 -278 l 0 -278 l 0 749 l 199 749 l 199 358 q 216 222 199 268 q 322 152 244 152 q 435 240 410 152 q 448 401 448 283 l 448 749 l 647 749 l 647 0 "},"h":{"x_min":0,"x_max":669,"ha":782,"o":"m 669 0 l 469 0 l 469 390 q 449 526 469 472 q 353 607 420 607 q 248 554 295 607 q 201 441 201 501 l 201 0 l 0 0 l 0 1013 l 201 1013 l 201 665 q 303 743 245 715 q 425 772 362 772 q 609 684 542 772 q 669 484 669 605 l 669 0 "},".":{"x_min":0,"x_max":206,"ha":303,"o":"m 206 0 l 0 0 l 0 207 l 206 207 l 206 0 "},"φ":{"x_min":-1,"x_max":921,"ha":990,"o":"m 542 -278 l 367 -278 l 367 -22 q 99 92 200 -22 q -1 376 -1 206 q 72 627 -1 520 q 288 769 151 742 l 288 581 q 222 495 243 550 q 202 378 202 439 q 240 228 202 291 q 367 145 285 157 l 367 776 l 515 776 q 807 667 694 776 q 921 379 921 558 q 815 93 921 209 q 542 -22 709 -22 l 542 -278 m 542 145 q 672 225 625 145 q 713 381 713 291 q 671 536 713 470 q 542 611 624 611 l 542 145 "},";":{"x_min":0,"x_max":208,"ha":306,"o":"m 208 528 l 0 528 l 0 735 l 208 735 l 208 528 m 208 6 q 152 -151 208 -89 q 0 -238 96 -212 l 0 -158 q 87 -100 61 -136 q 113 0 113 -65 l 0 0 l 0 207 l 208 207 l 208 6 "},"f":{"x_min":0,"x_max":424,"ha":525,"o":"m 424 609 l 300 609 l 300 0 l 107 0 l 107 609 l 0 609 l 0 749 l 107 749 q 145 949 107 894 q 328 1019 193 1019 l 424 1015 l 424 855 l 362 855 q 312 841 324 855 q 300 797 300 827 q 300 773 300 786 q 300 749 300 761 l 424 749 l 424 609 "},"“":{"x_min":0,"x_max":468,"ha":567,"o":"m 190 631 l 0 631 l 0 807 q 55 947 0 885 q 190 1017 110 1010 l 190 947 q 88 813 88 921 l 190 813 l 190 631 m 468 631 l 278 631 l 278 807 q 333 947 278 885 q 468 1017 388 1010 l 468 947 q 366 813 366 921 l 468 813 l 468 631 "},"A":{"x_min":0,"x_max":966.671875,"ha":1069,"o":"m 966 0 l 747 0 l 679 208 l 286 208 l 218 0 l 0 0 l 361 1013 l 600 1013 l 966 0 m 623 376 l 480 810 l 340 376 l 623 376 "},"6":{"x_min":57,"x_max":771,"ha":828,"o":"m 744 734 l 544 734 q 500 802 533 776 q 425 828 466 828 q 315 769 359 828 q 264 571 264 701 q 451 638 343 638 q 691 537 602 638 q 771 315 771 449 q 683 79 771 176 q 420 -29 586 -29 q 134 123 227 -29 q 57 455 57 250 q 184 865 57 721 q 452 988 293 988 q 657 916 570 988 q 744 734 744 845 m 426 128 q 538 178 498 128 q 578 300 578 229 q 538 422 578 372 q 415 479 493 479 q 303 430 342 479 q 264 313 264 381 q 308 184 264 240 q 426 128 352 128 "},"‘":{"x_min":0,"x_max":190,"ha":289,"o":"m 190 631 l 0 631 l 0 807 q 55 947 0 885 q 190 1017 110 1010 l 190 947 q 88 813 88 921 l 190 813 l 190 631 "},"ϊ":{"x_min":-55,"x_max":337,"ha":389,"o":"m 337 810 l 208 810 l 208 952 l 337 952 l 337 810 m 74 810 l -55 810 l -55 952 l 74 952 l 74 810 m 242 0 l 42 0 l 42 748 l 242 748 l 242 0 "},"π":{"x_min":0.5,"x_max":838.890625,"ha":938,"o":"m 838 593 l 750 593 l 750 0 l 549 0 l 549 593 l 287 593 l 287 0 l 88 0 l 88 593 l 0 593 l 0 749 l 838 749 l 838 593 "},"ά":{"x_min":-1,"x_max":722,"ha":835,"o":"m 722 0 l 531 0 l 530 101 q 433 8 491 41 q 304 -25 375 -25 q 72 104 157 -25 q -1 372 -1 216 q 72 643 -1 530 q 308 775 158 775 q 433 744 375 775 q 528 656 491 713 l 528 749 l 722 749 l 722 0 m 361 601 q 233 527 277 601 q 196 375 196 464 q 232 224 196 288 q 358 144 277 144 q 487 217 441 144 q 528 370 528 281 q 489 523 528 457 q 361 601 443 601 m 579 1039 l 377 823 l 279 823 l 401 1039 l 579 1039 "},"O":{"x_min":0,"x_max":994,"ha":1094,"o":"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 131 883 0 733 q 497 1040 270 1040 q 860 883 721 1040 q 994 505 994 733 q 862 127 994 277 q 497 -29 723 -29 m 497 154 q 710 266 631 154 q 780 506 780 365 q 710 745 780 647 q 497 857 631 857 q 283 747 361 857 q 213 506 213 647 q 282 266 213 365 q 497 154 361 154 "},"n":{"x_min":0,"x_max":669,"ha":782,"o":"m 669 0 l 469 0 l 469 452 q 442 553 469 513 q 352 601 412 601 q 245 553 290 601 q 200 441 200 505 l 200 0 l 0 0 l 0 748 l 194 748 l 194 659 q 289 744 230 713 q 416 775 349 775 q 600 700 531 775 q 669 509 669 626 l 669 0 "},"3":{"x_min":61,"x_max":767,"ha":828,"o":"m 767 290 q 653 51 767 143 q 402 -32 548 -32 q 168 48 262 -32 q 61 300 61 140 l 250 300 q 298 173 250 219 q 405 132 343 132 q 514 169 471 132 q 563 282 563 211 q 491 405 563 369 q 343 432 439 432 l 343 568 q 472 592 425 568 q 534 701 534 626 q 493 793 534 758 q 398 829 453 829 q 306 789 344 829 q 268 669 268 749 l 80 669 q 182 909 80 823 q 410 986 274 986 q 633 916 540 986 q 735 719 735 840 q 703 608 735 656 q 615 522 672 561 q 727 427 687 486 q 767 290 767 369 "},"9":{"x_min":58,"x_max":769,"ha":828,"o":"m 769 492 q 646 90 769 232 q 384 -33 539 -33 q 187 35 271 -33 q 83 224 98 107 l 282 224 q 323 154 286 182 q 404 127 359 127 q 513 182 471 127 q 563 384 563 248 q 475 335 532 355 q 372 315 418 315 q 137 416 224 315 q 58 642 58 507 q 144 877 58 781 q 407 984 239 984 q 694 827 602 984 q 769 492 769 699 m 416 476 q 525 521 488 476 q 563 632 563 566 q 521 764 563 709 q 403 826 474 826 q 297 773 337 826 q 258 649 258 720 q 295 530 258 577 q 416 476 339 476 "},"l":{"x_min":41,"x_max":240,"ha":363,"o":"m 240 0 l 41 0 l 41 1013 l 240 1013 l 240 0 "},"¤":{"x_min":40.265625,"x_max":727.203125,"ha":825,"o":"m 727 792 l 594 659 q 620 552 620 609 q 598 459 620 504 l 725 331 l 620 224 l 491 352 q 382 331 443 331 q 273 352 322 331 l 144 224 l 40 330 l 167 459 q 147 552 147 501 q 172 658 147 608 l 40 794 l 147 898 l 283 759 q 383 776 330 776 q 482 759 434 776 l 620 898 l 727 792 m 383 644 q 308 617 334 644 q 283 551 283 590 q 309 489 283 517 q 381 462 335 462 q 456 488 430 462 q 482 554 482 515 q 455 616 482 588 q 383 644 429 644 "},"κ":{"x_min":0,"x_max":691.84375,"ha":779,"o":"m 691 0 l 479 0 l 284 343 l 196 252 l 196 0 l 0 0 l 0 749 l 196 749 l 196 490 l 440 749 l 677 749 l 416 479 l 691 0 "},"4":{"x_min":53,"x_max":775.21875,"ha":828,"o":"m 775 213 l 660 213 l 660 0 l 470 0 l 470 213 l 53 213 l 53 384 l 416 958 l 660 958 l 660 370 l 775 370 l 775 213 m 474 364 l 474 786 l 204 363 l 474 364 "},"p":{"x_min":0,"x_max":722,"ha":824,"o":"m 415 -26 q 287 4 346 -26 q 192 92 228 34 l 192 -298 l 0 -298 l 0 750 l 192 750 l 192 647 q 289 740 230 706 q 416 775 347 775 q 649 645 566 775 q 722 375 722 534 q 649 106 722 218 q 415 -26 564 -26 m 363 603 q 232 529 278 603 q 192 375 192 465 q 230 222 192 286 q 360 146 276 146 q 487 221 441 146 q 526 371 526 285 q 488 523 526 458 q 363 603 443 603 "},"‡":{"x_min":0,"x_max":809,"ha":894,"o":"m 299 621 l 0 621 l 0 804 l 299 804 l 299 1011 l 509 1011 l 509 804 l 809 804 l 809 621 l 509 621 l 509 387 l 809 387 l 809 205 l 509 205 l 509 0 l 299 0 l 299 205 l 0 205 l 0 387 l 299 387 l 299 621 "},"ψ":{"x_min":0,"x_max":875,"ha":979,"o":"m 522 142 q 657 274 620 163 q 671 352 671 316 l 671 748 l 875 748 l 875 402 q 806 134 875 240 q 525 -22 719 -1 l 525 -278 l 349 -278 l 349 -22 q 65 135 152 -1 q 0 402 0 238 l 0 748 l 204 748 l 204 352 q 231 240 204 295 q 353 142 272 159 l 353 922 l 524 922 l 522 142 "},"η":{"x_min":0,"x_max":669,"ha":779,"o":"m 669 -278 l 469 -278 l 469 390 q 448 526 469 473 q 348 606 417 606 q 244 553 288 606 q 201 441 201 501 l 201 0 l 0 0 l 0 749 l 201 749 l 201 665 q 301 744 244 715 q 423 774 359 774 q 606 685 538 774 q 669 484 669 603 l 669 -278 "}}`),cssFontWeight:`bold`,ascender:1216,underlinePosition:-100,cssFontStyle:`normal`,boundingBox:{yMin:-333,xMin:-162,yMax:1216,xMax:1681},resolution:1e3,original_font_information:{postscript_name:`Helvetiker-Bold`,version_string:`Version 1.00 2004 initial release`,vendor_url:`http://www.magenta.gr`,full_font_name:`Helvetiker Bold`,font_family_name:`Helvetiker`,copyright:`Copyright (c) Magenta ltd, 2004.`,description:``,trademark:``,designer:``,designer_url:``,unique_font_identifier:`Magenta ltd:Helvetiker Bold:22-10-104`,license_url:`http://www.ellak.gr/fonts/MgOpen/license.html`,license_description:`Copyright (c) 2004 by MAGENTA Ltd. All Rights Reserved.\r
\r
Permission is hereby granted, free of charge, to any person obtaining a copy of the fonts accompanying this license ("Fonts") and associated documentation files (the "Font Software"), to reproduce and distribute the Font Software, including without limitation the rights to use, copy, merge, publish, distribute, and/or sell copies of the Font Software, and to permit persons to whom the Font Software is furnished to do so, subject to the following conditions: \r
\r
The above copyright and this permission notice shall be included in all copies of one or more of the Font Software typefaces.\r
\r
The Font Software may be modified, altered, or added to, and in particular the designs of glyphs or characters in the Fonts may be modified and additional glyphs or characters may be added to the Fonts, only if the fonts are renamed to names not containing the word "MgOpen", or if the modifications are accepted for inclusion in the Font Software itself by the each appointed Administrator.\r
\r
This License becomes null and void to the extent applicable to Fonts or Font Software that has been modified and is distributed under the "MgOpen" name.\r
\r
The Font Software may be sold as part of a larger software package but no copy of one or more of the Font Software typefaces may be sold by itself. \r
\r
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL MAGENTA OR PERSONS OR BODIES IN CHARGE OF ADMINISTRATION AND MAINTENANCE OF THE FONT SOFTWARE BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.`,manufacturer_name:`Magenta ltd`,font_sub_family_name:`Bold`},descender:-334,familyName:`Helvetiker`,lineHeight:1549,underlineThickness:50};function ia(e,t){return e.userData.seasonalSurface=t,e}var X=class{root;materials=new Map;seasonalMaterials=new Map;roughness;constructor(e=.84,t=new g){this.roughness=e,this.root=t}mat=e=>{let t=this.materials.get(e);return t||(t=new G({color:e,roughness:this.roughness,flatShading:!0}),e===`#fff0c9`&&(t.userData.stationLamp=!0),[`#697f81`,`#436574`,`#6d8990`].includes(e)&&(t.userData.stationWindow=!0),[`#fff1c6`,`#fff1ce`].includes(e)&&(t.userData.nightLight=!0),[`#869493`,`#c7c5b6`,`#ddd8c7`,`#eee6d3`,`#afc59c`,`#d0c5ad`,`#b6baae`].includes(e)&&(t.userData.environmentGround=!0),this.materials.set(e,t)),t};seasonal=(e,t)=>{let n=e.material,r=n.uuid+`:`+t,i=this.seasonalMaterials.get(r);return i||(i=ia(n.clone(),t),this.seasonalMaterials.set(r,i)),e.material=i,(t===`grass`||t===`paving`)&&(e.castShadow=!1),e};mesh=(e,t,n,r,i,a=this.root)=>{let o=new q(e,this.mat(t));return o.position.set(n,r,i),o.castShadow=!0,o.receiveShadow=!0,a.add(o),o};box=(e,t,n,r,i,a,o,s=this.root)=>this.mesh(new Ge(e,t,n),r,i,a,o,s);cylinder=(e,t,n,r,i,a,o=this.root)=>this.mesh(new B(e,e,t,10),n,r,i,a,o);label=(e,t,n,r,i,a,o=0,s=this.root)=>{let c=new na(e,{font:zs,size:t,depth:.012,curveSegments:2,bevelEnabled:!1});c.computeBoundingBox(),c.translate(-(c.boundingBox.max.x+c.boundingBox.min.x)/2,0,0);let l=this.mesh(c,n,r,i,a,s);return l.rotation.y=o,l};beam=(e,t,n,r,i=this.root)=>{let a=t.clone().sub(e),o=this.cylinder(n,a.length(),r,0,0,0,i);return o.position.copy(e).add(t).multiplyScalar(.5),o.quaternion.setFromUnitVectors(new R(0,1,0),a.normalize()),o}};function aa(e,t=`/warehouse-3d-playground-pages/`){return`${t.replace(/\/?$/,`/`)}${e.replace(/^\/+/,``)}`}var oa=e=>e.name===`locomotive-body`||e.name===`passenger-body`||/^rail-(?:bogie|coupler)-(?:1|-1)$/.test(e.name)||e.name.startsWith(`rail-wheel-`)&&e.userData.axis===`x`||e.userData.axleShaft===!0||/^cab-entry-(?:0|1)-(?:1|-1)$/.test(e.name)||/^passenger-door-(?:1|-1)-(?:1|-1)$/.test(e.name);function sa(e){let t=[];e.traverse(e=>{e instanceof q&&oa(e)&&t.push(e)});for(let e of t){let t=e.parent,n=new g;n.name=e.name,n.position.copy(e.position),n.quaternion.copy(e.quaternion),n.scale.copy(e.scale),n.userData={...e.userData},t.add(n),t.remove(e);for(let t of[...e.children])n.add(t);e.name=`imported-rigid-surface`,e.userData={},e.position.set(0,0,0),e.quaternion.identity(),e.scale.set(1,1,1),n.add(e)}}function ca(e,t,n,r=`cc206`){sa(e);let i=new Map;e.traverse(e=>{oa(e)&&i.set(e.name,e)});let a=(e,t)=>{let n=new g;n.name=`cc206-visual-${t}`,n.userData.cc206LodLevel=t,n.visible=t===`medium`,n.updateMatrix(),n.matrixAutoUpdate=!1;for(let t of[...e.children])t instanceof q&&!oa(t)&&(t.name=`imported-visual-surface`,t.userData={},t.updateMatrix(),t.matrixAutoUpdate=!1,n.add(t));return e.add(n),n};for(let e of i.values())a(e,`high`);for(let e of[`medium`,`low`]){let r=t[e];sa(r);let o=new Set;r.traverse(e=>{e.position.multiplyScalar(n),e instanceof q&&!o.has(e.geometry)&&(e.geometry.scale(n,n,n),o.add(e.geometry))});let s=0;if(r.traverse(t=>{if(!oa(t))return;let n=i.get(t.name);if(!n)throw Error(`Pivot ${e} aset kereta tidak cocok: ${t.name}`);let r=a(t,e);n.add(r),s++}),s!==i.size)throw Error(`Rig ${e} aset kereta tidak lengkap.`)}let s=new Map,c=new Set;e.traverse(e=>{if(!(e instanceof q)||Array.isArray(e.material))return;let t=e.material;for(let[e,n]of Object.entries(t)){if(!(n instanceof Te))continue;let r=n.name||(t.name===`jaring`?`cc206-grille`:``);if(!r)continue;n.matrixAutoUpdate&&n.updateMatrix();let i=n.source.data,a=JSON.stringify([r,i?.width,i?.height,n.channel,n.colorSpace,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.flipY,n.anisotropy,n.matrix.elements]),o=s.get(a);o?o!==n&&(c.add(n),t[e]=o):s.set(a,n)}});let l=new Set;c.forEach(e=>{l.add(e.source.data),e.dispose()});let u=new Set([...s.values()].map(e=>e.source.data));l.forEach(e=>{!u.has(e)&&typeof ImageBitmap<`u`&&e instanceof ImageBitmap&&e.close()});let d={geometries:new Set,materials:new Set};e.updateMatrixWorld(!0);for(let e of i.values()){if(!e.userData.axleShaft)continue;let t=e.parent;if(t&&/^rail-bogie-(?:1|-1)$/.test(t.name))for(let n of e.children){let e=n.userData.cc206LodLevel;if(!e)continue;let r=t.children.find(t=>t.userData.cc206LodLevel===e);if(!r)continue;let i=t.matrixWorld.clone().invert();for(let e of[...n.children]){if(!(e instanceof q))continue;let t=e.geometry;e.geometry=t.clone().applyMatrix4(new o().multiplyMatrices(i,e.matrixWorld)),d.geometries.add(t),e.position.set(0,0,0),e.quaternion.identity(),e.scale.set(1,1,1),e.updateMatrix(),r.add(e)}}}let f=[];e.traverse(e=>{e instanceof g&&e.userData.cc206LodLevel&&f.push(e)});for(let e of f)ua(e,e.userData.cc206LodLevel,d);e.traverse(e=>{if(e instanceof q){d.geometries.delete(e.geometry);for(let t of Array.isArray(e.material)?e.material:[e.material])d.materials.delete(t)}}),d.geometries.forEach(e=>e.dispose()),d.materials.forEach(e=>e.dispose()),r===`passenger`?(e.userData.passengerLodReady=!0,e.userData.passengerDetail=`medium`):(e.userData.cc206LodReady=!0,e.userData.cc206Detail=`medium`)}var la=ca;function ua(e,t,n){let r=new Map,i=e.parent?.name.startsWith(`rail-wheel-`);for(let n of e.children){if(!(n instanceof q)||Array.isArray(n.material))continue;let e=n.material;if(!(e instanceof G)||(e.transparent&&e.name.startsWith(`lampu_`)&&e.opacity>=.98?(e.transparent=!1,e.opacity=1,e.depthWrite=!0):e.name===`jaring`&&e.map&&e.opacity===1?(e.transparent=!1,e.alphaTest=.25,e.alphaToCoverage=!0,e.depthWrite=!0):e.name===`kaca_glass`&&(e.forceSinglePass=!0,e.depthWrite=!1),e.transparent||Object.values(e).some(e=>e instanceof Te))||n.children.length||Object.keys(n.geometry.morphAttributes).length)continue;let a;if(t===`high`)a=e.clone();else{let n=t===`low`?.65:i?.5:e.roughness<.3?.25:e.roughness<.7?.5:.85,r=t===`low`?.15:i?.35:e.metalness<.15?0:e.metalness<.5?.35:e.metalness<.8?.6:1;a=new G({roughness:n,metalness:r,side:e.side,emissive:e.emissive,emissiveIntensity:e.emissiveIntensity,fog:e.fog,flatShading:e.flatShading}),a.userData={...e.userData}}let o={...a.toJSON()};for(let e of[`uuid`,`name`,`color`,`metadata`])delete o[e];let s=JSON.stringify([o,n.layers.mask,n.renderOrder,n.receiveShadow]),c=r.get(s);c?a.dispose():(c={material:a,meshes:[]},r.set(s,c)),c.meshes.push(n)}for(let{material:i,meshes:a}of r.values()){let r=a.map(e=>{let t=e.geometry.clone();for(let e of Object.keys(t.attributes))[`position`,`normal`,`color`].includes(e)||t.deleteAttribute(e);t.getAttribute(`normal`)||t.computeVertexNormals(),e.updateMatrix(),t.applyMatrix4(e.matrix);for(let e of[`position`,`normal`]){let n=t.getAttribute(e),r=new Float32Array(n.count*3);for(let e=0;e<n.count;e++)r[e*3]=n.getX(e),r[e*3+1]=n.getY(e),r[e*3+2]=n.getZ(e);t.setAttribute(e,new ht(r,3))}let n=e.material,r=t.getAttribute(`color`),i=t.getAttribute(`position`).count,a=new Float32Array(i*3);for(let e=0;e<i;e++)a[e*3]=n.color.r*(r?.getX(e)??1),a[e*3+1]=n.color.g*(r?.getY(e)??1),a[e*3+2]=n.color.b*(r?.getZ(e)??1);return t.setAttribute(`color`,new nt(a,3)),t.clearGroups(),t}),o=_t(r,!1);if(r.forEach(e=>e.dispose()),!o){i.dispose();continue}i.name=`cc206-${t}-color-batch`,i.color.setRGB(1,1,1),i.vertexColors=!0;let s=new q(o,i);s.name=`imported-color-batch`,s.receiveShadow=a[0].receiveShadow,s.castShadow=!1,s.layers.mask=a[0].layers.mask,s.renderOrder=a[0].renderOrder,s.updateMatrix(),s.matrixAutoUpdate=!1;for(let t of a)n.geometries.add(t.geometry),n.materials.add(t.material),e.remove(t);e.add(s)}}var da=e=>e instanceof g&&!!(e.userData.isLocomotive&&e.userData.cc206LodReady||e.userData.passengerCoach&&e.userData.passengerLodReady||e.userData.freightLodReady),fa=e=>!e.visible&&(e.name.endsWith(`template-bank`)||e.name.includes(`shared-templates`));function pa(t,n){let r=!1;for(let i=t;i;i=i.parent){if(!i.visible||i.userData.staticWorldDynamic||i.userData.railRigReady||i.name.includes(`template`)||i instanceof qe||i instanceof ot||i instanceof e||i instanceof U)return!1;if(r||=i.userData.staticMapScenery===!0,i===n)return r}return!1}function ma(e){let t=new Set,n=new Set,r=new Set,i=new Set,a=new Set,o=new Set,s=new Set,c=new Set,l=new Map,u=new Map,d=new Map,f=new Map,p=new Set,m=new Set,h=new Set,_=0,v=0,y=0,b=0,x=(e,t)=>{let n=t===1?{materials:Array.isArray(e.material)?[...e.material]:[e.material],night:!!e.userData.nightLight}:f.get(e);if(n){for(let e of n.materials){let r=d.get(e)??{count:0,night:0};r.count+=t,n.night&&(r.night+=t),r.count>0?d.set(e,r):d.delete(e),h.add(e)}t===1?f.set(e,n):f.delete(e)}},S=()=>{for(let e of h){let t=d.get(e),n=!!t,r=!!t?.night;(p.has(e)!==n||m.has(e)!==r)&&_++,n?p.add(e):p.delete(e),r?m.add(e):m.delete(e)}h.clear()},C=0,w=0,T=!1,E=e=>k(e.child),D=e=>A(e.child),O=t=>{if(t.constructor!==q||Array.isArray(t.material)||!(t.material instanceof G))return!1;let n=!1;for(let r=t;r;r=r.parent){if(r.name===`rolling-stock-instance-pool`||r.name.includes(`shared-templates`))return!1;if(n||=r.userData.railRigReady===!0,r===e)return n}return!1},k=d=>{if(!(T||a.has(d))){if(a.add(d),d instanceof q&&(t.add(d),x(d,1),O(d)&&(n.add(d),w++)),d instanceof g&&d.userData.isLocomotive&&r.add(d),d instanceof g&&d.userData.railSignalEmitter&&(i.add(d),b++),pa(d,e)&&(o.add(d),v++),fa(d)&&(s.add(d),v++),[`high`,`medium`,`low`].includes(d.userData.cc206LodLevel)){c.add(d),v++;for(let e=d.parent;e&&!e.name.includes(`shared-templates`);e=e.parent)if(da(e)){l.get(e)?.add(d),u.set(d,e),y++;break}}if(da(d)){let e=!1;for(let t=d;t;t=t.parent)e||=t.name.includes(`shared-templates`);e||(l.set(d,new Set),y++)}d.addEventListener(`childadded`,E),d.addEventListener(`childremoved`,D);for(let e of d.children)k(e);C++}},A=e=>{if(!a.delete(e))return;e.removeEventListener(`childadded`,E),e.removeEventListener(`childremoved`,D),e instanceof q&&(t.delete(e),x(e,-1)),o.delete(e)&&v++,s.delete(e)&&v++,c.delete(e)&&v++;let d=u.get(e);d&&(l.get(d)?.delete(e),u.delete(e),y++),e instanceof g&&l.delete(e)&&y++,e instanceof q&&n.delete(e)&&w++,e instanceof g&&(r.delete(e),i.delete(e)&&b++);for(let t of e.children)A(t);C++};return k(e),{objects:a,meshes:t,rollingStockMeshes:n,locomotives:r,signalEmitters:i,rigidObjects:o,templateBanks:s,visualLodGroups:c,detailActors:l,get materials(){return S(),p},get nightMaterials(){return S(),m},get materialRevision(){return S(),_},get transformRevision(){return v},get detailRevision(){return y},get signalRevision(){return b},get revision(){return C},get rollingStockRevision(){return w},dispose(){T=!0,A(e),S()}}}var ha=[`high`,`medium`,`low`],ga=da;function _a(e,t){let n=[],r=-1/0,a=-1,o=-1,s=new R,c=new R,l=new R,u=()=>{let r=[],i=!1,s=e=>{if(e.name.includes(`shared-templates`))return;let n=e.userData.isLocomotive&&e.userData.cc206LodReady,a=e.userData.passengerCoach&&e.userData.passengerLodReady,o=e.userData.freightLodReady;if(e instanceof g&&(n||a||o)){let n={high:[],medium:[],low:[]},s=t=>{if(t!==e&&ga(t))return;let r=t.userData.cc206LodLevel;r&&ha.includes(r)&&n[r].push(t);for(let e of t.children)s(e)};if(t?.detailActors)for(let r of t.detailActors.get(e)??[]){let e=r.userData.cc206LodLevel;ha.includes(e)&&n[e].push(r)}else s(e);let c=a?`passengerDetail`:o?`freightDetail`:`cc206Detail`,l=ha.includes(e.userData[c])?e.userData[c]:`medium`,u=Number(e.userData.detailLength),f={engine:e,levels:n,detail:l,detailKey:c,length:Number.isFinite(u)&&u>0?u:15.18};i=d(f,l)||i,r.push(f)}if(!t?.detailActors)for(let t of e.children)s(t)};if(t?.detailActors)for(let e of t.detailActors.keys())s(e);else s(e);return n=r,a=e.children.length,o=t?.detailRevision??t?.revision??o,i},d=(e,t)=>{let n=e.levels[t].length?t:ha.find(t=>e.levels[t].length)??t,r=!1;for(let t of ha)for(let i of e.levels[t]){let e=t===n;r||=i.visible!==e,i.visible=e}return e.detail=n,e.engine.userData[e.detailKey]=n,r};return{update(f,p){let m=performance.now(),h=!1;if((t?o!==(t.detailRevision??t.revision):m>=r||a!==e.children.length)&&(h=u(),r=m+250),!(p>0))return h;f.getWorldPosition(l);for(let e of n){let t=!0;for(let n=e.engine;n;n=n.parent)if(!n.visible){t=!1;break}if(!t)continue;e.engine.getWorldScale(s);let n=e.length*Math.abs(s.z),r;if(f instanceof L)r=n*f.zoom*p/Math.abs(f.top-f.bottom);else if(f instanceof i){e.engine.getWorldPosition(c);let t=Math.max(f.near,c.distanceTo(l));r=n*f.zoom*p/(2*t*Math.tan(ft.degToRad(f.fov/2)))}else continue;let a=e.detail;a===`high`&&r<230?a=r<70?`low`:`medium`:a===`low`&&r>90?a=r>280?`high`:`medium`:a===`medium`&&(r>280?a=`high`:r<70&&(a=`low`)),(a!==e.detail||e.engine.userData[e.detailKey]!==a)&&(h=d(e,a)||h)}return h},count(){return n.length},dispose(){n=[]}}}function va(e){let t=e.clone(!0),n=[];t.traverse(e=>{e.userData.cc206ShadowProxy&&n.push(e),(e.name===`rolling-stock-instance-pool`||e.name===`fleet-instance-batches`)&&n.push(e)});for(let e of n)e.removeFromParent();return t}function ya(e){xa(e,!1)}function ba(e){xa(e,!0)}function xa(e,t){let n=t?`passenger`:`cc206`;if(e.getObjectByName(`${n}-shadow-body`))return;e.updateWorldMatrix(!0,!0);let r=new fe({colorWrite:!1,depthWrite:!1,depthTest:!1});r.name=`${n}-shadow-only`;let i=new o,a=new o,s=(e,t)=>{i.copy(e.matrixWorld).invert();let n=new we,r=o=>{if(!o.userData.cc206ShadowProxy&&!(t&&o!==e&&/^rail-(?:bogie|coupler|wheel)-/.test(o.name))&&!(o.userData.cc206LodLevel&&o.userData.cc206LodLevel!==`high`)){o instanceof q&&(o.geometry.computeBoundingBox(),o.geometry.boundingBox&&(a.multiplyMatrices(i,o.matrixWorld),n.union(o.geometry.boundingBox.clone().applyMatrix4(a))));for(let e of o.children)r(e)}};return r(e),n},c=(e,t)=>new Ge(Math.max(e.x,.01),Math.max(e.y,.01),Math.max(e.z,.01)).translate(t.x,t.y,t.z),l=(e,t,n)=>{let i=new q(n,r);i.name=t,i.userData.cc206ShadowProxy=!0,i.userData.rollingStockShadowProxy=!0,i.castShadow=!0,i.receiveShadow=!1,i.updateMatrix(),i.matrixAutoUpdate=!1,e.add(i)},u=s(e,!0);if(u.isEmpty()){r.dispose();return}let d=u.getSize(new R),f=u.getCenter(new R),p=Math.min(.46,d.y*.2),m=u.min.y+p,h=u.max.y-m,g=Math.min(2.35,d.z*.2),_=t?[c(new R(d.x,p,d.z),new R(f.x,u.min.y+p/2,f.z)),c(new R(d.x,h*.82,d.z),new R(f.x,m+h*.82/2,f.z)),c(new R(d.x*.86,h*.18,d.z),new R(f.x,u.max.y-h*.18/2,f.z))]:[c(new R(d.x,p,d.z),new R(f.x,u.min.y+p/2,f.z)),c(new R(d.x*.79,h*.89,Math.max(.1,d.z-2*g)),new R(f.x,m+h*.89/2,f.z))];for(let e of t?[]:[-1,1]){let t=e<0?u.min.z+g/2:u.max.z-g/2;_.push(c(new R(d.x*.94,h,g),new R(f.x,m+h/2,t)))}let v=_t(_);_.forEach(e=>e.dispose()),v&&l(e,`${n}-shadow-body`,v);let y=[];e.traverse(e=>{/^rail-(?:bogie|coupler)-(?:1|-1)$/.test(e.name)&&y.push(e),e instanceof q&&!e.userData.cc206ShadowProxy&&(e.castShadow=!1)});for(let e of y){let t=s(e,!1);t.isEmpty()||l(e,`${n}-shadow-${e.name}`,c(t.getSize(new R),t.getCenter(new R)))}}var Sa=new WeakMap,Ca=new WeakMap;function wa(e,t){let n=Sa.get(t);if(!n){let e=t.clone();e.needsUpdate=!0,n={source:t,texture:e,leases:0,disposed:!1,releaseGpu:e.dispose.bind(e)};let r=n;e.dispose=()=>{r.leases===0&&!r.disposed&&(r.disposed=!0,r.releaseGpu())},Sa.set(t,n)}let r=Ca.get(e);return r||Ca.set(e,r=new Set),r.has(n)||(r.add(n),n.leases++),n.texture}function Ta(e){e.traverse(e=>{let t=Ca.get(e);if(t){Ca.delete(e);for(let e of t)e.leases--,e.leases===0&&(Sa.delete(e.source),e.texture.dispose())}})}var Ea=new WeakMap,Da=new WeakMap;function Oa(e,t){let n=Ea.get(t);if(!n){let e=t.clone();n={source:t,geometry:e,leases:0,disposed:!1,disposeGpu:e.dispose.bind(e)};let r=n;e.dispose=()=>{r.leases===0&&!r.disposed&&(r.disposed=!0,r.disposeGpu())},Ea.set(t,n)}let r=Da.get(e);return r||Da.set(e,r=new Set),r.has(n)||(r.add(n),n.leases++),n.geometry}function ka(e){Ta(e),e.traverse(e=>{let t=Da.get(e);if(t){Da.delete(e);for(let e of t)e.leases--,e.leases===0&&(Ea.delete(e.source),e.geometry.dispose())}})}function Aa(e,t=!1){let n=e.clone(!0),r=new Map,i=new Map,a=new Map,o=e=>{let r=i.get(e);if(!r){r=e.clone(),i.set(e,r);for(let[i,o]of Object.entries(e))if(o instanceof Te){let e=a.get(o);e||(e=t?wa(n,o):o.clone(),e.needsUpdate=!0,a.set(o,e)),r[i]=e}}return r};return n.traverse(e=>{if(!(e instanceof q||e instanceof rt||e instanceof _e))return;let t=r.get(e.geometry);if(!t){let i=Oa(n,e.geometry);r.set(e.geometry,i),t=i}e.geometry=t,e.material=Array.isArray(e.material)?e.material.map(o):o(e.material)}),n}function ja(e){let t=new Set,n=new Set,r=new Set;for(let i of e)i.traverse(e=>{if(e instanceof q||e instanceof rt||e instanceof _e){t.add(e.geometry);for(let t of Array.isArray(e.material)?e.material:[e.material]){n.add(t);for(let e of Object.values(t))e instanceof Te&&r.add(e)}}});t.forEach(e=>e.dispose()),n.forEach(e=>e.dispose());let i=new Set;r.forEach(e=>{i.add(e.source.data),e.dispose()}),i.forEach(e=>{typeof ImageBitmap<`u`&&e instanceof ImageBitmap&&e.close()})}var Ma=15.849,Na=15.18,Pa=Na/Ma,Fa=1.067,Ia={referenceMeters:Fa,referenceCC206LengthMeters:Ma,authoredCC206Length:Na,unitScale:Pa,innerGap:Fa*Pa,centerHalf:1.1219610070035964/2,headWidth:.1,sleeperLength:2,ballastWidth:2.4,legacy:{centerHalf:.95,innerGap:1.8,sleeperLength:2.85,ballastWidth:3.2}},La=e=>e.name.startsWith(`rail-wheel-`)&&(e.userData.axis===`x`||e instanceof g);function Ra(e,t=Ia.centerHalf){if(!(Number.isFinite(t)&&t>0))throw Error(`Gauge roda tidak valid.`);let n=Number(e.userData.runningGearGaugeHalf),r=n>0&&Number.isFinite(n)?n:Ia.legacy.centerHalf;if(Math.abs(r-t)<1e-10)return e;let i=t/r;e.updateMatrixWorld(!0);let a=[],s=[],c=[];e.traverse(e=>{/^rail-bogie-(?:1|-1)$/.test(e.name)&&a.push(e),(e.userData.axleShaft===!0||e.userData.runningGearStatic===!0)&&s.push(e),La(e)&&c.push(e)});let l=new Set,u=new Set,d=new o().makeScale(i,1,1),f=(e,t)=>{let n=e.matrixWorld.clone().invert();(t??e).traverse(t=>{if(!(t instanceof q)||l.has(t))return;for(let n=t;n&&n!==e;n=n.parent)if(La(n))return;let r=new o().multiplyMatrices(n,t.matrixWorld),i=r.clone().invert().multiply(d).multiply(r),a=t.geometry.clone();a.applyMatrix4(i),a.computeBoundingBox(),a.computeBoundingSphere(),u.add(t.geometry),t.geometry=a,l.add(t),t.userData.runningGearGaugeRetargeted=!0})};for(let e of a)f(e);for(let t of s)f(e,t);for(let e of c)e.position.x=Math.sign(e.position.x)*t,e.updateMatrix();return e.traverse(e=>{(e instanceof q||e instanceof rt||e instanceof _e)&&u.delete(e.geometry)}),u.forEach(e=>e.dispose()),e.userData.runningGearGaugeHalf=t,e.updateMatrixWorld(!0),e}var za=`modulepreload`,Ba=function(e){return`/warehouse-3d-playground-pages/`+e},Va={},Ha=function(e){return e.pathname.endsWith(`.css`)},Ua=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},Wa=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Ba(t,n);let r=s(t),i=Ha(r);return Ua(Va,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:za,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Ga={author:`Depras · V13`,source:aa(`/models/cc206-v13-credits.txt`),license:aa(`/models/cc206-v13-credits.txt`),licenseLabel:`Kredit referensi`},Ka={author:`pucohensap`,source:`https://sketchfab.com/3d-models/cc-206-ge-cm20emp-locomotive-pt-kai-b2c2e6c802774f51955a9479a6c2b901`,license:`https://creativecommons.org/licenses/by/4.0/`},qa={...Ka,licenseLabel:`CC BY 4.0`},Ja,Ya,Xa=()=>Ja!==void 0;async function Za(){if(!Ja){if(Ya)return Ya;Ya=(async()=>{let[{GLTFLoader:e},{MeshoptDecoder:t},...n]=await Promise.all([Wa(()=>import(`./GLTFLoader-Bf35660z.js`).then(e=>e.n),__vite__mapDeps([0,1,2])),Wa(()=>import(`./meshopt_decoder.module-DXTYc6wn.js`),[]),...[`optimized`,`medium`,`low`].map(e=>fetch(aa(`/models/cc206-sketchfab-${e}-packed.glb?v=riverside-200-old-1`)).then(e=>{if(!e.ok)throw Error(`Model CC206 belum dapat dimuat.`);return e.arrayBuffer()}))]),r=new e().setMeshoptDecoder(t),i=await Promise.allSettled(n.map(e=>r.parseAsync(e,``))),a=i.flatMap(e=>e.status===`fulfilled`?[e.value.scene]:[]),o=a.map(e=>e.getObjectByName(`cc206-sketchfab-rig`)??e);try{let e=i.find(e=>e.status===`rejected`);if(e?.status===`rejected`)throw e.reason;Qa(a[0],{medium:a[1],low:a[2]})}catch(e){let t=new Set,n=new Set,r=new Set;for(let e of o)e.traverse(e=>{if(e instanceof q){t.add(e.geometry);for(let t of Array.isArray(e.material)?e.material:[e.material]){n.add(t);for(let e of Object.values(t))e instanceof Te&&r.add(e)}}});t.forEach(e=>e.dispose()),n.forEach(e=>e.dispose());let i=new Set;throw r.forEach(e=>{i.add(e.source.data),e.dispose()}),i.forEach(e=>{typeof ImageBitmap<`u`&&e instanceof ImageBitmap&&e.close()}),e}})();try{await Ya}finally{Ya=void 0}}}function Qa(e,t){if(Ja)throw Error(`Template CC206 sudah dimuat.`);let n=e.getObjectByName(`cc206-v13-rig`)??e.getObjectByName(`cc206-v12-rig`)??e.getObjectByName(`cc206-sketchfab-rig`);if(!n)throw Error(`Rig CC206 tidak ditemukan.`);let r=/^original-v(?:12|13)$/.test(String(n.userData.sourceRevision)),i=new g;i.add(n);let a=[],o=[],s=[];if(i.traverse(e=>{e.name.startsWith(`rail-wheel-`)&&e.userData.axis===`x`&&a.push(e),/^rail-bogie-(?:1|-1)$/.test(e.name)&&o.push(e),/^rail-coupler-(?:1|-1)$/.test(e.name)&&s.push(e)}),a.length!==12||o.length!==2||s.length!==2)throw Error(`Rig CC206 tidak lengkap.`);let c=15.18/new we().setFromObject(i).getSize(new R).z,l=a.reduce((e,t)=>e+Math.abs(t.position.x),0)/a.length*c,u=new Set;i.traverse(e=>{e.position.multiplyScalar(c),delete e.userData.isLocomotive,e instanceof q&&(u.has(e.geometry)||(e.geometry.scale(c,c,c),u.add(e.geometry)),e.castShadow=!0,e.receiveShadow=!1,e.name.startsWith(`rail-wheel-`)&&e.userData.axis!==`x`&&(e.name=`imported-wheel-surface`))});for(let e of o)e.position.z=Math.sign(e.position.z)*4.3;for(let e of a){let t=Number(e.userData.radius)*c;if(!(t>0))throw Error(`Radius roda CC206 tidak valid.`);e.scale.y*=.46/t,e.scale.z*=.46/t,r||(e.position.x=Math.sign(e.position.x)*.95),e.position.y=.46,e.userData.radius=.46}i.traverse(e=>{if(!(e instanceof q)||e.userData.axleShaft!==!0)return;let t=a.find(t=>Number(t.name.split(`-`)[2])===e.userData.axleIndex);if(!t)throw Error(`Pasangan gandar CC206 tidak lengkap.`);let n=new we;t.traverse(e=>{e instanceof q&&(e.geometry.computeBoundingBox(),n.union(e.geometry.boundingBox))}),e.geometry.computeBoundingBox();let i=e.geometry.boundingBox;r||(e.scale.x=(.95-(n.max.x-n.min.x)/2)/Math.max(Math.abs(i.min.x),Math.abs(i.max.x))),e.position.y=t.position.y,e.position.z=t.position.z});for(let e of s){e.updateMatrixWorld(!0);let t=new we;e.traverse(e=>{e instanceof q&&(e.geometry.computeBoundingBox(),t.union(e.geometry.boundingBox))});let n=e.name.endsWith(`--1`)?-1:1;if(r){let t=e.position.z-n*6.92;e.traverse(e=>{e instanceof q&&e.geometry.translate(0,0,t)}),e.position.z=n*6.92}else e.scale.z=.67/Math.max(Math.abs(t.min.z),Math.abs(t.max.z)),e.scale.x=.39/(t.max.x-t.min.x),e.scale.y=.28/(t.max.y-t.min.y),e.position.set(0,.83,n*6.92)}i.name=`cc206`,i.userData={category:`train`,variant:0,locomotiveType:`cc206`,modelStyle:`imported`,isLocomotive:!0,railRigReady:!0,attribution:r?{...Ga,source:aa(`/models/cc206-${String(n.userData.sourceRevision).replace(`original-`,``)}-credits.txt`),license:aa(`/models/cc206-${String(n.userData.sourceRevision).replace(`original-`,``)}-credits.txt`),author:`Depras · ${String(n.userData.sourceRevision).replace(`original-`,``).toUpperCase()}`}:Ka,...r&&{sourceRevision:n.userData.sourceRevision,runningGearGaugeHalf:l},modifications:`Simplified derivative; gauge, wheels, bogies, drawbars and lamps retargeted for Riverside.`,locomotiveLights:r?$a(n.userData.locomotiveLights,c):eo(i)},t?(ca(i,t,c),Ra(i),ya(i),i.userData.modifications+=` Zoom-dependent LOD, vertex-color/PBR batching, marker/cutout alpha optimization and simplified moving shadow proxies.`):Ra(i),i.removeFromParent(),i.updateMatrixWorld(!0),Ja=i}function $a(e,t){let n=e=>[e[0]*t,e[1]*t,e[2]*t];return{frontLower:e.frontLower.map(n),frontUpper:e.frontUpper.map(n),rearLower:e.rearLower.map(n),rearUpper:e.rearUpper.map(n),spot:n(e.spot),...e.rearSpot&&{rearSpot:n(e.rearSpot)},...e.bulbRadii&&{bulbRadii:{lower:e.bulbRadii.lower*t,upper:e.bulbRadii.upper*t}}}}function eo(e){let t=new Map;e.updateMatrixWorld(!0),e.traverse(e=>{if(!(e instanceof q)||!(Array.isArray(e.material)?e.material:[e.material]).some(e=>e.name===`lampu_putih_glass`))return;let n=e.geometry.getAttribute(`position`),r=new R;for(let i=0;i<n.count;i++){r.fromBufferAttribute(n,i).applyMatrix4(e.matrixWorld);let a=`${r.z>0?`front`:`rear`}-${r.y>2?`upper`:`lower`}-${r.x>0?1:-1}`,o=t.get(a)??new we;o.expandByPoint(r),t.set(a,o)}});let n=(e,n)=>[-1,1].map(r=>{let i=t.get(`${e}-${n}-${r}`);if(!i)throw Error(`Posisi lampu CC206 tidak lengkap.`);let a=i.getCenter(new R);return a.z=e===`front`?i.max.z+.025:i.min.z-.025,a.toArray()}),r=n(`front`,`upper`),i=n(`rear`,`upper`),a=e=>{let n=t.get(`front-${e}-1`).getSize(new R);return Math.min(n.x,n.y)/2};return{frontLower:n(`front`,`lower`),frontUpper:r,rearLower:n(`rear`,`lower`),rearUpper:i,spot:[0,r[0][1],r[0][2]+.16],rearSpot:[0,i[0][1],i[0][2]-.16],bulbRadii:{lower:a(`lower`),upper:a(`upper`)}}}function to(e){if(!Ja)return;let t=Aa(Ja);return t.userData.palette=e,t}function no(e){if(e.scenes.length!==3)throw Error(`Paket CC201 harus berisi tiga LOD.`);for(let t of e.scenes)t.traverse(e=>{let t=e.userData.cc201PackedName;typeof t==`string`&&(e.name=t,delete e.userData.cc201PackedName)});return e.scenes}function ro(e){return new Promise((t,n)=>{let r=new Worker(new URL(`/warehouse-3d-playground-pages/assets/cc201-decoder.worker-ChVfWu9Y.js`,``+import.meta.url),{type:`module`}),i=e=>{r.terminate(),n(Error(e))};r.onerror=()=>i(`Decoder CC201 tidak dapat dimulai.`),r.onmessage=e=>{r.terminate(),e.data.glb?t(e.data.glb):n(Error(e.data.error??`Paket CC201 tidak valid.`))},r.postMessage(e,[e])})}var io,ao,oo=()=>io!==void 0,so=Ia.unitScale,co=7.68/2*so,lo=15.214/2*so-.67,uo={frontUpper:[[-.115,3.127,6.014],[.115,3.127,6.014]],rearUpper:[[-.115,3.083,-6.725],[.115,3.083,-6.725]],frontLower:[[-.8787633,1.1691714,6.92885],[.8972312,1.1691709,6.92805]],rearLower:[[-.8787634,1.1691714,-6.926],[.8972312,1.1691709,-6.928]],spot:[0,3.127,6.19],rearSpot:[0,3.083,-6.94],bulbRadii:{upper:.082,lower:.08,frontLower:.08,rearLower:.08}};function fo(e){let t=e.getObjectByName(`cc201-game-rig`);if(!t)throw Error(`Rig CC201 tidak ditemukan.`);t.updateWorldMatrix(!0,!0);let n=new g;n.name=`cc201-game-rig`,n.userData={...t.userData};let r=new Map;if(t.traverse(e=>{if(!Array.isArray(e.userData.anchorPosition))return;let t=new g;t.name=e.name,t.userData={...e.userData},t.position.fromArray(e.userData.anchorPosition);let i=e.name.startsWith(`rail-wheel-`)?r.get(e.parent):n;if(!i)throw Error(`Induk roda CC201 tidak ditemukan.`);i.add(t),r.set(e,t)}),r.size!==17)throw Error(`Rig CC201 harus mempunyai 17 pivot.`);n.updateMatrixWorld(!0);for(let[e,t]of r){let n=t.matrixWorld.clone().invert(),i=a=>{if(!(a!==e&&r.has(a))){if(a instanceof q){let e=a.geometry.clone();for(let t of Object.keys(e.attributes)){let n=e.getAttribute(t);if(n.normalized||!(n.array instanceof Float32Array)){let r=new Float32Array(n.count*n.itemSize);for(let e=0;e<n.count;e++)for(let t=0;t<n.itemSize;t++)r[e*n.itemSize+t]=n.getComponent(e,t);e.setAttribute(t,new ht(r,n.itemSize))}}e.applyMatrix4(new o().multiplyMatrices(n,a.matrixWorld)),e.computeBoundingBox(),e.computeBoundingSphere();let r=new q(e,a.material);r.name=`cc201-imported-surface`,r.castShadow=!1,r.receiveShadow=!1,t.add(r)}a.children.forEach(i)}};i(e)}return n}function po(e,t){if(io)throw Error(`Template CC201 sudah terpasang.`);let n=fo(e),r=fo(t.medium),i=fo(t.low);n.name=`cc201`,n.userData={...n.userData,category:`train`,variant:3,locomotiveType:`cc201`,modelStyle:`imported`,isLocomotive:!0,railRigReady:!0,palette:`blue`,runningGearGaugeHalf:Ia.centerHalf,carSpecRaw:{bogieZ:co,couplerZ:lo},locomotiveLights:uo},ca(n,{medium:r,low:i},1),ya(n),n.updateMatrixWorld(!0),io=n}async function mo(){if(!io){if(ao)return ao;ao=(async()=>{let[{GLTFLoader:e},t]=await Promise.all([Wa(()=>import(`./GLTFLoader-Bf35660z.js`).then(e=>e.n),__vite__mapDeps([0,1,2])),fetch(aa(`/models/cc201-game-lossless.bin?v=lossless-1`))]);if(!t.ok)throw Error(`Model CC201 belum dapat dimuat.`);let n=await ro(await t.arrayBuffer()),r=await new e().parseAsync(n,``),i=r.scenes;try{no(r),po(i[0],{medium:i[1],low:i[2]})}catch(e){throw ja(i),e}})();try{await ao}finally{ao=void 0}}}function ho(e){if(!io)throw Error(`Template CC201 belum dimuat.`);let t=Aa(io);return t.userData.palette=e,t}var go=[{value:`cc206`,label:`CC206`},{value:`cc201`,label:`CC201 · hidung kotak`}];function _o(e){return e===void 0||e===`cc203`||e===`cc204`?`cc206`:e}function vo(e){return e===`train.cc203`||e===`train.cc204`?`train.cc206`:e}var yo=(e,t)=>[[-1.09,e,t],[1.09,e,t]],bo=(e,t)=>[[-.16,e,t],[.16,e,t]],xo={cc201:uo,cc206:{frontLower:yo(1.57,6.87),frontUpper:bo(4.06,6.58),rearLower:yo(1.57,-6.87),rearUpper:bo(4.06,-6.58),spot:[0,3.95,6.6]},cc203:{frontLower:yo(1.62,6.87),frontUpper:bo(4.08,5.94),rearLower:yo(1.57,-6.87),rearUpper:[],spot:[0,3.95,6.01]},cc204:{frontLower:yo(1.63,6.85),frontUpper:bo(4.11,5.1),rearLower:yo(1.57,-6.87),rearUpper:[],spot:[0,3.99,5.11]}};function So(e=`cc206`){return xo[e]}var Co=`#eeeee7`,wo=`#dc7c29`,To=`#253e65`,Eo=`#333e48`,Do=`#77838a`,Oo=`#334b58`,ko=`#b53b32`,Ao=.04;function jo(e){e.box(3.02,.35,13.8,Eo,0,1.1,0),e.box(2.9,.16,13.65,`#c7cbcb`,0,1.36,0),e.box(1.8,.65,4.1,`#48545e`,0,.58,0);let t=e.root.children.length;for(let t of[-4.3,4.3]){e.box(2.24,.35,3.6,Eo,0,.62,t);for(let n=0;n<3;n++){let r=t+(n-1)*1.13;e.box(2.2,.14,.18,`#55636f`,0,.46,r);for(let i of[-1,1]){let a=new g;a.name=`rail-wheel-loco-${t}-${n}-${i}`,a.position.set(i*.95,.46,r),a.userData.radius=.46,e.root.add(a);let o=e.mesh(new B(.46,.46,.19,16),`#687481`,0,0,0,a);o.rotation.z=Math.PI/2,e.mesh(new B(.495,.495,.025,16),Eo,-i*.09,0,0,a).rotation.z=Math.PI/2,e.mesh(new B(.22,.22,.205,12),`#8f9ba5`,0,0,0,a).rotation.z=Math.PI/2;for(let t=0;t<3;t++)e.box(.018,.38,.026,Eo,i*.11,0,0,a).rotation.x=t*Math.PI/3;e.box(.16,.29,.46,`#6b7680`,i*1.13,.71,r);for(let t=0;t<3;t++)e.box(.13,.04,.3,`#8d98a1`,i*1.23,.65+t*.07,r)}}}for(let n of e.root.children.slice(t))n instanceof q&&(n.userData.runningGearStatic=!0);for(let t of[-7.23,7.23])e.mesh(new Zi(.22,.22,.62,2,.025),`#414a54`,0,.83,t),e.mesh(new Zi(.39,.28,.22,2,.035),`#4e5861`,0,.83,t+Math.sign(t)*.25)}function Mo(e,t,n,r,i){let a=new Qe;t.forEach(([e,t],n)=>n?a.lineTo(-e,t):a.moveTo(-e,t)),a.closePath();let o=new D(a,{depth:n,bevelEnabled:!1,curveSegments:1});return o.rotateY(Math.PI/2).translate(-n/2,0,0),e.mesh(o,r,0,0,0,i)}function No(e,t,n){let[r,i,a]=t;e.mesh(new B(.12,.12,.065,12),Eo,r,i,a-Math.sign(a)*.02,n).rotation.x=Math.PI/2,e.mesh(new B(.087,.087,.071,12),`#fff1b8`,r,i,a,n).rotation.x=Math.PI/2}function Po(e,t,n){e.box(3.05,.72,.16,ko,0,.67,t*6.8,n),e.box(3.02,.13,.17,Eo,0,1.08,t*6.81,n);for(let r of[-1.12,1.12])e.box(.1,.54,.05,Eo,r,.72,t*6.895,n),e.box(.32,.075,.06,Do,r,1.18,t*6.87,n)}function Fo(e,t,n,r,i,a=!1){let o=Math.sign(t);e.label(`KAI`,.4,To,t,n,r,o*Math.PI/2,i),a||(e.box(.024,.058,1.04,wo,t+o*.014,n+.18,r,i).rotation.x=-.33)}function Io(e,t,n,r,i,a){let o=(t+n)/2,s=n-t,c=1.45;e.box(2.22,r-c,s,Co,0,(r+c)/2,o,a),e.box(2.3,.09,s,`#b3bbc0`,0,r+.045,o,a);for(let n of[-1,1]){i?(e.box(.035,.14,s,`#2c8bc2`,n*1.127,2.2,o,a),e.box(.037,.19,s,`#245784`,n*1.13,1.96,o,a)):(e.box(.035,.88,s,wo,n*1.127,1.92,o,a),e.box(.038,.12,s,To,n*1.13,1.51,o,a));let l=Math.max(3,Math.floor(s/1.35));for(let i=0;i<l;i++){let o=t+(i+.5)*s/l;if(e.box(.033,r-c-.13,.022,`#adb6b6`,n*1.148,(r+c)/2,o-.59,a),e.box(.045,.1,.035,Do,n*1.157,2.63,o+.35,a),i<2||i>=l-2){let t=i<2;e.box(.04,t?1.34:.85,.95,`#56616b`,n*1.149,t?r-.77:r-.55,o,a);for(let i=0;i<(t?7:5);i++)e.box(.046,t?1.29:.023,t?.028:.89,`#273943`,n*1.175,t?r-.77:r-.88+i*.14,t?o-.4+i*.133:o,a)}}for(let r=0;r<=l;r++)e.box(.04,.73,.04,Do,n*1.46,1.83,t+r*s/l,a);e.box(.042,.042,s,Do,n*1.46,2.21,o,a),Fo(e,n*1.18,2.58,o,a,i)}for(let n of[t+1.15,t+2.5]){e.cylinder(.48,.09,Eo,0,r+.12,n,a),e.cylinder(.38,.07,`#677780`,0,r+.2,n,a);for(let t=0;t<4;t++)e.box(.76,.018,.025,`#a2aeb3`,0,r+.243,n,a).rotation.y=t*Math.PI/4}e.box(.36,.27,.42,Eo,.53,r+.18,o+.4,a)}function Lo(e,t,n,r,i=!1){for(let a of[-1,1]){e.box(.034,.73,.92,Eo,a*1.485,3.54,n,r),e.box(.042,.63,.78,Oo,a*1.507,3.54,n,r),e.box(.045,.69,.04,`#babfbc`,a*1.536,3.54,n-.05,r);let o=n-.89;e.box(.035,1.75,.53,`#d4d8d5`,a*1.49,2.66,o,r),e.box(.042,.65,.3,Oo,a*1.516,3.14,o,r),e.box(.063,.03,.17,Do,a*1.54,2.67,o+.06,r),e.box(.035,.3,1.1,Eo,a*1.514,2.63,n,r),e.label(`CC ${t.slice(2)}`,.148,`#f6f5ee`,a*1.539,2.55,n,a*Math.PI/2,r),Fo(e,a*1.528,1.86,n,r,i);for(let t=0;t<3;t++)e.box(.35,.075,.47,Do,a*1.43,.65+t*.24,o,r);e.box(.043,1.26,.043,Do,a*1.54,2.13,o+.36,r)}}function Ro(e,t,n,r,i){for(let a of[-1,1]){e.box(1.15,.84,.039,Eo,a*.65,t,n,i).rotation.x=r,e.box(1.025,.7,.048,Oo,a*.65,t,n+.025,i).rotation.x=r;let o=e.box(.025,.5,.025,Eo,a*.67,t-.11,n+.074,i);o.rotation.x=r,o.rotation.z=a*-.27}}function zo(e,t){for(let n of[-1,1]){let r=new g;r.name=n===1?`cab-front`:`cab-rear`,r.rotation.y=n===1?0:Math.PI,t.add(r),Mo(e,[[3.82,1.45],[6.8,1.45],[6.8,3.08],[6.4,4.22],[4.05,4.22],[3.82,4.04]],2.96,Co,r),Mo(e,[[4.02,4.22],[6.4,4.22],[6.61,3.98],[4,4.06]],3.02,`#b0b8bd`,r).position.y=Ao,Ro(e,3.61,6.62,-.337,r),Lo(e,`cc206`,5.59,r),e.box(2.91,.045,.035,`#bcc3c3`,0,3.06,6.824,r),e.label(`KAI`,.46,To,0,2.11,6.835,0,r),e.box(2.48,.08,.035,wo,0,1.75,6.838,r),e.box(.55,.27,.1,Eo,0,4.07,6.55,r);for(let t of xo.cc206.frontLower)No(e,t,r);for(let t of xo.cc206.frontUpper)No(e,t,r);for(let t of[-1,1])e.box(.041,1.22,.041,Do,t*1.43,2.05,6.84,r),e.mesh(new B(.065,.035,.24,8),Eo,t*.21,4.36,4.78,r).rotation.x=Math.PI/2,e.box(.21,.12,.16,Eo,t*1.53,3.14,6.11,r)}}function Bo(e,t){Mo(e,[[3.27,1.45],[6.8,1.45],[6.8,2.23],[5.84,4.25],[3.53,4.25],[3.27,4.04]],2.96,Co,t),Mo(e,[[3.5,4.25],[5.84,4.25],[6,4.07],[3.49,4.11]],3.02,`#bdc4c5`,t).position.y=Ao,Ro(e,3.6,6.174,-.444,t),Lo(e,`cc203`,4.79,t),e.label(`KAI`,.46,To,0,1.99,6.84,0,t),e.box(.58,.28,.1,Eo,0,4.08,5.91,t),e.box(2.6,.07,.04,wo,0,1.76,6.84,t);for(let n of[-1,1])e.box(.045,1.06,.045,Do,n*1.42,2.02,6.84,t),e.mesh(new B(.07,.035,.25,8),Eo,n*.2,4.38,3.93,t).rotation.x=Math.PI/2}function Vo(e,t){e.box(2.96,2.79,1.88,Co,0,2.845,4.13,t),Mo(e,[[3.15,4.18],[5.1,4.18],[4.91,4.39],[3.34,4.39]],3.03,`#bbc2c4`,t),e.box(2.18,1.73,1.7,Co,0,2.315,5.95,t),e.box(2.23,.08,1.74,`#d1d5d2`,0,3.22,5.93,t),Ro(e,3.63,5.096,0,t),Lo(e,`cc204`,4.29,t,!0);for(let n of[-1,1]){for(let[r,i,a]of[[2.2,`#2c8bc2`,.14],[1.96,`#245784`,.19]])e.box(.033,a,1.88,i,n*1.49,r,4.13,t),e.box(.033,a,1.7,i,n*1.104,r,5.95,t),e.box(2.19,a,.035,i,0,r,6.818,t);for(let r=0;r<5;r++)e.box(.033,.032,.54,Do,n*1.108,2.48+r*.11,5.56,t);e.box(.046,1.08,.046,Do,n*1.4,2,6.76,t),e.box(.38,.045,.047,Do,n*1.24,2.57,6.76,t),e.mesh(new B(.075,.035,.27,8),Eo,n*.21,4.51,3.64,t).rotation.x=Math.PI/2}e.label(`KAI`,.4,To,0,2.61,6.823,0,t),e.box(.56,.27,.1,Eo,0,4.11,5.077,t)}function Ho(e=`cc206`,t=`blue`){return Uo(_o(e),t)}function Uo(e=`cc206`,t=`blue`){if(e===`cc201`)return ho(t);if(e===`cc206`){let e=to(t);if(e)return e}let n=new X(.78);jo(n);let r=new g;if(r.name=`locomotive-body`,n.root.add(r),Po(n,1,r),Po(n,-1,r),e===`cc206`)Io(n,-3.84,3.84,3.94,!1,r),zo(n,r);else{Io(n,-6.58,e===`cc203`?3.3:3.2,e===`cc203`?4:4.1,e===`cc204`,r),e===`cc203`?Bo(n,r):Vo(n,r),n.box(2.89,.31,.16,Eo,0,1.57,-6.8,r);for(let t of xo[e].frontLower)No(n,t,r);for(let t of xo[e].frontUpper)No(n,t,r);for(let t of xo[e].rearLower)No(n,t,r);for(let e of[-1,1])n.box(.044,.96,.044,Do,e*1.44,1.94,-6.72,r),n.box(2.85,.044,.044,Do,0,2.44,-6.72,r)}return n.root.name=e,n.root.userData={category:`train`,variant:[`cc206`,`cc203`,`cc204`].indexOf(e),palette:t,locomotiveType:e,modelStyle:`stylized`,referenceSeries:e===`cc204`?`C18MMi series 1`:void 0},Ra(n.root)}var Wo=[{id:`car.compact`,label:`Mobil kompak`,kind:`compact`,bodyColor:`#708eaa`,accentColor:`#a9b5b7`},{id:`car.hatchback`,label:`Mobil hatchback`,kind:`hatchback`,bodyColor:`#708eaa`,accentColor:`#a9b5b7`},{id:`motorcycle.city`,label:`Motor kota`,kind:`motorcycle`,bodyColor:`#708eaa`,accentColor:`#a9b5b7`},{id:`truck.box`,label:`Truk boks`,kind:`box`,bodyColor:`#3677d4`,accentColor:`#79a8e7`},{id:`truck.flatbed`,label:`Truk bak terbuka`,kind:`flatbed`,bodyColor:`#3677d4`,accentColor:`#79a8e7`},{id:`truck.van`,label:`Van pengiriman`,kind:`van`,bodyColor:`#3677d4`,accentColor:`#79a8e7`},{id:`truck.pickup`,label:`Pikap hasil kebun`,kind:`pickup`,bodyColor:`#b8584a`,accentColor:`#eae7dc`},{id:`truck.tanker`,label:`Mobil tangki BBM`,kind:`tanker`,bodyColor:`#c54135`,accentColor:`#eae7dc`},{id:`truck.container-trailer`,label:`Traktor dan trailer petikemas`,kind:`container-trailer`,bodyColor:`#4f82a1`,accentColor:`#e7e7d8`}],Go=new Set(Object.keys(new G)),Ko=new Set([`position`,`normal`,`uv`,`uv1`,`uv2`,`tangent`,`color`]),qo=e=>Array.isArray(e)?`[`+e.map(qo).join(`,`)+`]`:e&&typeof e==`object`?`{`+Object.entries(e).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>JSON.stringify(e)+`:`+qo(t)).join(`,`)+`}`:JSON.stringify(e)??`null`;function Jo(e){if(e.constructor!==G)return null;let t=e;if(!t.visible||t.transparent||t.opacity!==1||t.alphaTest!==0||t.alphaHash||t.blending!==1||t.stencilWrite||t.wireframe||t.clippingPlanes?.length||Object.keys(t.userData).length||Object.keys(t).some(e=>e!==`_listeners`&&!Go.has(e))||Object.values(t).some(e=>e instanceof Te)||t.onBeforeRender!==ke.prototype.onBeforeRender||t.onBeforeCompile!==ke.prototype.onBeforeCompile||t.customProgramCacheKey!==ke.prototype.customProgramCacheKey||qo(t.defines)!==qo({STANDARD:``}))return null;let n=[];for(let[e,r]of Object.entries(t))if(e!==`_listeners`&&e!==`uuid`&&e!==`version`&&e!==`color`&&e!==`vertexColors`){if(r instanceof K||r instanceof dt||r instanceof R||r instanceof ae)n.push([e,r.toArray()]);else if(r===null||[`number`,`boolean`,`string`].includes(typeof r))n.push([e,r]);else if(Array.isArray(r)&&r.length===0)n.push([e,[]]);else if(typeof r==`object`&&Object.getPrototypeOf(r)===Object.prototype&&Object.values(r).every(e=>[`number`,`boolean`,`string`].includes(typeof e)))n.push([e,r]);else return null}return qo(n.sort(([e],[t])=>e.localeCompare(t)))}function Yo(e,t){if(!e.length||e.length!==t.length)return null;let n=Jo(e[0].material);if(n===null)return null;let r=[];try{for(let i=0;i<e.length;i++){let a=e[i],o=a.geometry,s=t[i];if(Array.isArray(a.material)||Jo(a.material)!==n||!Number.isFinite(s.determinant())||s.determinant()<=0||Object.keys(o.morphAttributes).length||Object.keys(o.userData).length||o.drawRange.start!==0||o.drawRange.count!==1/0||Object.keys(o.attributes).some(e=>!Ko.has(e)))return null;let c=o.getAttribute(`position`),l=o.getAttribute(`normal`),u=o.getAttribute(`color`);if(!c||!l||c.itemSize!==3||l.itemSize!==3||l.count!==c.count||a.material.vertexColors&&(!u||u.itemSize!==3||u.count!==c.count))return null;let d=new Float32Array(c.count*3),f=new Float32Array(c.count*3),p=new Float32Array(c.count*3),m=a.material.color;for(let e=0;e<c.count;e++)d[e*3]=c.getX(e),d[e*3+1]=c.getY(e),d[e*3+2]=c.getZ(e),f[e*3]=l.getX(e),f[e*3+1]=l.getY(e),f[e*3+2]=l.getZ(e),p[e*3]=m.r*(a.material.vertexColors?u.getX(e):1),p[e*3+1]=m.g*(a.material.vertexColors?u.getY(e):1),p[e*3+2]=m.b*(a.material.vertexColors?u.getZ(e):1);let h=new Ae;r.push(h),h.setAttribute(`position`,new nt(d,3)),h.setAttribute(`normal`,new nt(f,3)),h.setAttribute(`color`,new nt(p,3)),o.index?h.setIndex(o.index.clone()):h.setIndex(Array.from({length:c.count},(e,t)=>t)),h.applyMatrix4(s)}let i=_t(r,!1);if(!i)return null;i.computeBoundingBox(),i.computeBoundingSphere();let a=e[0].material.clone();return a.color.setRGB(1,1,1),a.vertexColors=!0,a.needsUpdate=!0,{geometry:i,material:a}}finally{r.forEach(e=>e.dispose())}}function Xo(e,t={}){let n=[];e.traverse(e=>{e instanceof g&&n.push(e)});let r=new Set,i=new Set,a=0;for(let e of n){let n=new Map;for(let r of e.children){if(!(r instanceof q)||r.constructor!==q||t.preserveObjects?.has(r)||r.children.length||!r.visible||Object.keys(r.userData).length||r.name&&!r.name.startsWith(`static-`)&&!r.name.startsWith(`rigid-color-batch-`)||r.onBeforeRender!==A.prototype.onBeforeRender||r.onAfterRender!==A.prototype.onAfterRender)continue;let e=r;if(Array.isArray(e.material)||t.preserveMaterials?.has(e.material)||e.customDepthMaterial||e.customDistanceMaterial||e.morphTargetInfluences||e.onBeforeShadow!==q.prototype.onBeforeShadow||e.onAfterShadow!==q.prototype.onAfterShadow)continue;let i=Jo(e.material);if(i===null)continue;let a=qo([i,e.castShadow,e.receiveShadow,e.layers.mask,e.renderOrder,e.frustumCulled]),o=n.get(a)??[];o.push(e),n.set(a,o)}for(let t of n.values()){if(t.length<2)continue;let n=Yo(t,t.map(e=>(e.matrixAutoUpdate&&e.updateMatrix(),e.matrix.clone())));if(!n)continue;let o=t[0],s=new q(n.geometry,n.material);s.name=`rigid-color-batch-${a++}`,s.castShadow=o.castShadow,s.receiveShadow=o.receiveShadow,s.layers.mask=o.layers.mask,s.renderOrder=o.renderOrder,s.frustumCulled=o.frustumCulled,s.matrixAutoUpdate=!1,e.add(s);for(let e of t)r.add(e.geometry),i.add(e.material),e.removeFromParent()}}e.traverse(e=>{if(e instanceof q||e instanceof rt||e instanceof _e){r.delete(e.geometry);for(let t of Array.isArray(e.material)?e.material:[e.material])i.delete(t)}}),r.forEach(e=>e.dispose()),i.forEach(e=>e.dispose())}var Zo=class{roughness;root=new g;materials=new Map;constructor(e=.67){this.roughness=e}mat=(e,t=`body`)=>{let n=t+`:`+e,r=this.materials.get(n);return r||(r=new G({color:e,roughness:t===`glass`?.28:t===`metal`?.48:this.roughness,metalness:t===`glass`?.15:t===`metal`?.45:0,flatShading:!0}),t===`headlamp`&&(r.emissive.set(e),r.userData.nightLight=!0),this.materials.set(n,r)),r};mesh=(e,t,n,r,i,a=this.root,o=`body`)=>{let s=new q(e,this.mat(t,o));return s.position.set(n,r,i),s.castShadow=o===`body`,s.receiveShadow=o===`body`,a.add(s),s};box=(e,t,n,r,i,a,o,s=this.root,c=`body`)=>this.mesh(new Ge(e,t,n),r,i,a,o,s,c);cylinder=(e,t,n,r,i,a,o=this.root,s=`body`)=>this.mesh(new B(e,e,t,10),n,r,i,a,o,s);label=(e,t,n,r,i,a,o=0,s=this.root)=>{let c=new na(e,{font:zs,size:t,depth:.012,curveSegments:2,bevelEnabled:!1});c.computeBoundingBox(),c.translate(-(c.boundingBox.max.x+c.boundingBox.min.x)/2,0,0);let l=this.mesh(c,n,r,i,a,s,`trim`);return l.rotation.y=o,l}};function Qo(e,t,n,r,i){let a=new g;a.name=`road-wheel`,a.position.set(t,r,n),a.userData.radius=r,i.add(a);let o=e.mesh(new B(r,r,.15,12),`#363d3e`,0,0,0,a,`trim`);o.rotation.z=Math.PI/2;let s=e.mesh(new B(r*.65,r*.65,.17,12),`#b4b8af`,0,0,0,a,`metal`);s.rotation.z=Math.PI/2;for(let t=0;t<3;t++)e.box(.18,r*1.02,.027,`#6c7676`,0,0,0,a,`metal`).rotation.x=t*Math.PI/3;return a}function $o(e){let t=[],n=(e,n,r,i)=>t.push(...e,...n,...r,...e,...r,...i),r=([e,t,n,r,i=t])=>[[-t,n,e],[t,n,e],[i,r,e],[-i,r,e]];for(let t=1;t<e.length;t++){let i=r(e[t-1]),a=r(e[t]);for(let e=0;e<4;e++)n(i[e],i[(e+1)%4],a[(e+1)%4],a[e])}let i=r(e[0]),a=r(e[e.length-1]);n(i[3],i[2],i[1],i[0]),n(a[0],a[1],a[2],a[3]);let o=new Ae;return o.setAttribute(`position`,new ht(t,3)),o.computeVertexNormals(),o}function es(e){let t=new Ae;return t.setAttribute(`position`,new ht(e.flatMap(e=>[...e]),3)),t.setIndex([0,1,2,0,2,3]),t.computeVertexNormals(),t}function ts(e){let t=new Qe,n=e/2-.06;t.moveTo(-n,.63),t.lineTo(n,.63),t.lineTo(n,.38);for(let n of[e*.31,-e*.31]){t.lineTo(n+.31,.38);for(let e=0;e<=8;e++){let r=e*Math.PI/8;t.lineTo(n+Math.cos(r)*.31,.3+Math.sin(r)*.31)}t.lineTo(n-.31,.38)}return t.lineTo(-n,.38),t.closePath(),new D(t,{depth:.12,bevelEnabled:!1,curveSegments:1})}function ns(e){let t=new Zo,n=t.root;n.name=`road-`+e.id;let r=e.kind===`hatchback`?3.7:3.25,i=.27,a=e.bodyColor,o=e.accentColor,s=`#526e78`,c=`#354346`,l=`#b9c4be`,u=e=>(e.castShadow=!1,e);t.box(.99,.23,r-.16,c,0,.48,0,n,`trim`),t.mesh($o([[-r/2,.6,.63,.73],[-r*.34,.675,.63,.83],[r*.27,.675,.63,.86],[r/2,.59,.63,.72]]),a,0,0,0,n,`body`);for(let e of[-1,1]){let i=t.mesh(ts(r),a,e*.675,0,0,n,`body`);i.rotation.y=-e*Math.PI/2,u(t.box(.033,.06,r*.47,o,e*.681,.41,0,n,`trim`))}let d=-r*.31,f=-r*(e.kind===`hatchback`?.24:.18),p=r*.245,m=r*.11;t.mesh($o([[d,.595,.83,.88],[f,.595,.83,1.425,.5],[m,.595,.83,1.445,.5],[p,.595,.83,.89]]),a,0,0,0,n,`body`);let h=e=>p-(p-m)*(e-.89)/.555,g=e=>d+(f-d)*(e-.88)/.545;u(t.mesh(es([[-.535,.96,h(.96)],[.535,.96,h(.96)],[.458,1.37,h(1.37)],[-.458,1.37,h(1.37)]]),s,0,0,.008,n,`glass`)),u(t.mesh(es([[.535,.96,g(.96)],[-.535,.96,g(.96)],[-.458,1.355,g(1.355)],[.458,1.355,g(1.355)]]),s,0,0,-.008,n,`glass`));for(let e of[-1,1]){let i=(r,i,a,o)=>{let c=[[e*.58,.955,r],[e*.58,.955,i],[e*.514,1.36,o],[e*.514,1.36,a]];e>0&&c.reverse(),u(t.mesh(es(c),s,e*.008,0,0,n,`glass`))};i(d+.12,-.175,f+.035,-.175),i(-.085,p-.115,-.085,m-.025);let g=[[e*.588,.955,-.16],[e*.588,.955,-.1],[e*.522,1.36,-.1],[e*.522,1.36,-.16]];e>0&&g.reverse(),u(t.mesh(es(g),c,0,0,0,n,`trim`));for(let r of[d+.06,-.13,p-.045])u(t.box(.012,.32,.012,o,e*.682,.71,r,n,`trim`));u(t.box(.014,.012,p-d,o,e*.682,.552,(p+d)/2,n,`trim`));for(let r of[-.30000000000000004,p-.28])u(t.box(.03,.032,.15,l,e*.691,.81,r,n,`metal`));u(t.box(.16,.04,.065,c,e*.665,.98,p-.15,n,`trim`)),u(t.box(.13,.12,.2,a,e*.755,1.015,p-.14,n,`body`)),u(t.box(.012,.079,.15,s,e*.819,1.02,p-.14,n,`glass`)),u(t.box(.015,.012,r*.19,o,e*.48,.805,r*.37,n,`trim`)).rotation.x=Math.atan(.14/(r*.23)),u(t.box(.3,.12,.035,`#fff1c6`,e*.4,.71,r/2+.024,n,`headlamp`)),u(t.box(.05,.07,.038,`#edb46a`,e*.565,.69,r/2+.025,n,`trim`));let _=u(t.box(.27,.012,.018,c,e*.24,1.025,h(1.025)+.018,n,`trim`));_.rotation.z=-e*.1}u(t.box(1.23,.09,.105,o,0,.46,r/2-.012,n,`trim`)),u(t.box(.56,.115,.045,c,0,.65,r/2+.026,n,`trim`));for(let e of[.62,.66,.7])u(t.box(.51,.012,.011,l,0,e,r/2+.053,n,`metal`));for(let e of[-r/2-.03,r/2+.071])u(t.box(.33,.1,.025,c,0,.48,e,n,`trim`)),u(t.box(.27,.022,.006,`#c4c8bd`,0,.48,e+Math.sign(e)*.015,n,`trim`));u(t.box(1.23,.09,.09,o,0,.45,-r/2,n,`trim`));let _=new G({color:`#af5241`,emissive:`#c74028`,emissiveIntensity:0,roughness:.67});for(let e of[-1,1]){let i=u(t.box(.27,.14,.035,`#af5241`,e*.43,.68,-r/2-.022,n,`trim`));i.material=_,u(t.box(.08,.04,.036,`#e3dfc7`,e*.43,.65,-r/2-.023,n,`trim`))}let v=[];for(let e of[-1,1])for(let a of[-r*.31,r*.31])v.push(Qo(t,e*.66,a,i,n));return Xo(n,{preserveMaterials:new Set([_])}),{root:n,wheels:v,radius:i,length:r,brake:_}}function rs(e){let t=new Zo,n=t.root;n.name=`road-`+e.id;let r=.24,i=e=>(e.castShadow=!1,e),a=(e,r,a,o,s=`metal`)=>{let c=r.clone().sub(e),l=i(t.cylinder(a,c.length(),o,0,0,0,n,s));return l.position.copy(e).add(r).multiplyScalar(.5),l.quaternion.setFromUnitVectors(new R(0,1,0),c.normalize()),l},o=[-.56,.56].map(e=>Qo(t,0,e,r,n));t.box(.29,.15,.65,`#3f4c4e`,0,.37,-.08,n,`trim`);for(let e of[-1,1]){a(new R(e*.12,.25,-.56),new R(e*.12,.46,.08),.027,`#596566`),a(new R(e*.12,.46,.08),new R(e*.12,.76,.43),.027,`#596566`),a(new R(e*.12,.76,.43),new R(e*.12,.47,-.3),.025,`#596566`),a(new R(e*.13,.25,.56),new R(e*.13,.85,.46),.027,`#b8c1b8`),a(new R(e*.12,.31,-.49),new R(e*.12,.65,-.25),.034,`#a8b6b1`);let r=i(t.cylinder(.085,.03,`#9aaba8`,e*.167,.43,-.07,n,`metal`));r.rotation.z=Math.PI/2;for(let r of[.44,.48,.52])i(t.box(.04,.015,.2,`#768a87`,e*.153,r,.04,n,`metal`))}t.mesh(new at(.25,8,5),e.bodyColor,0,.65,.12,n,`body`).scale.set(.77,.63,1.2),i(t.cylinder(.047,.018,`#b9c6bd`,0,.808,.12,n,`metal`)),t.box(.34,.11,.69,`#414b4d`,0,.73,-.22,n,`trim`),i(t.box(.31,.11,.39,e.bodyColor,0,.64,-.5,n,`body`)).rotation.x=-.13,i(t.box(.3,.09,.36,e.bodyColor,0,.52,.56,n,`body`)).rotation.x=-.12,t.box(.34,.23,.16,e.bodyColor,0,.75,.67,n,`body`),i(t.box(.25,.12,.041,`#fff1ce`,0,.77,.76,n,`headlamp`)),i(t.box(.57,.03,.065,`#a8b8b3`,0,.91,.49,n,`metal`));for(let r of[-1,1])i(t.box(.1,.045,.07,`#3e494d`,r*.255,.91,.49,n,`trim`)),a(new R(r*.26,.93,.49),new R(r*.28,1.08,.52),.01,`#8faaa9`),i(t.box(.1,.065,.03,`#526e78`,r*.28,1.09,.54,n,`glass`)),i(t.box(.05,.06,.025,`#e9af59`,r*.2,.7,.72,n,`trim`)),t.box(.11,.25,.16,`#526379`,r*.25,.6,-.04,n,`trim`),t.box(.11,.31,.13,`#526379`,r*.25,.43,-.2,n,`trim`).rotation.x=-.4,i(t.box(.15,.085,.23,`#465252`,r*.25,.27,-.15,n,`trim`)),t.box(.11,.4,.12,e.riderColor,r*.23,1.04,.28,n,`body`).rotation.x=-.85,i(t.box(.065,.12,.065,`#d3ae89`,r*.27,.955,.48,n,`trim`));t.box(.44,.46,.29,e.riderColor,0,1.035,-.1,n,`body`).rotation.x=.16,i(t.box(.065,.2,.016,e.accentColor,0,1.055,-.263,n,`trim`)),i(t.mesh(new C(.16,0),`#d8b48d`,0,1.36,.02,n,`trim`));let s=t.mesh(new at(.21,10,7),e.helmetColor,0,1.52,.01,n,`body`);s.scale.y=.91,i(t.box(.29,.11,.085,`#405d68`,0,1.47,.19,n,`glass`)),i(t.box(.28,.028,.085,e.helmetColor,0,1.535,.19,n,`body`));let c=i(t.cylinder(.062,.66,`#aab4ad`,-.25,.37,-.13,n,`metal`));c.rotation.x=Math.PI/2;let l=i(t.cylinder(.045,.018,`#35494b`,-.25,.37,-.468,n,`trim`));l.rotation.x=Math.PI/2,i(t.box(.18,.14,.025,`#35494b`,0,.43,-.73,n,`trim`)),i(t.box(.13,.024,.006,`#d4d7c9`,0,.43,-.747,n,`trim`));let u=new G({color:`#bd5441`,emissive:`#c74028`,emissiveIntensity:0,roughness:.67}),d=i(t.box(.22,.08,.045,`#bd5441`,0,.62,-.75,n,`trim`));return d.material=u,Xo(n,{preserveMaterials:new Set([u])}),{root:n,wheels:o,radius:r,length:1.72,brake:u}}function is(e){let t=new Zo(.62),{root:n,box:r,label:i}=t;n.name=`pertamina-fuel-tanker-truck`;let a=e.bodyColor,o=new Map,s=(e,r,i,a,s,c,l=n)=>{let u=e+`:`+r,d=o.get(u);return d||(d=new B(e,e,r,12),o.set(u,d)),t.mesh(d,i,a,s,c,l)},c=.42;r(2.05,.23,7.8,`#4a5859`,0,.77,-.07),r(2.3,.25,5.6,`#d3d9d6`,0,1.06,-1.08);let l=s(1.06,5.35,`#f0f1e8`,0,2.13,-1.09);l.rotation.x=Math.PI/2;for(let e of[-3.765,1.585]){let n=t.mesh(new at(1.055,12,8),`#d5dcd8`,0,2.13,e);n.scale.z=.16}for(let e of[-1,1]){r(.035,.24,5.35,`#c43f36`,e*1.062,2.12,-1.09),i(`PERTAMINA`,.26,`#c43931`,e*1.075,2.36,-1.2,e*Math.PI/2),i(`BBM  30 KL`,.15,`#506761`,e*1.08,1.72,-1.2,e*Math.PI/2);for(let[t,n]of[`#ca4239`,`#3c70a5`,`#63a16a`].entries()){let i=r(.045,.24,.33,n,e*1.085,2.8,-.9+t*.33);i.rotation.x=-.28}r(.06,.13,5.5,`#899d9a`,e*.88,1.17,-1.12),s(.045,1.38,`#647a78`,e*.78,3.32,-1.1).rotation.x=Math.PI/2;for(let t of[-1.77,-.43])s(.04,.38,`#647a78`,e*.78,3.12,t)}r(1.6,.09,1.6,`#879b95`,0,3.08,-1.1),s(.31,.14,`#5d7270`,0,3.21,-1.1),s(.2,.09,`#c4473d`,0,3.325,-1.1);for(let e of[-.4,.4])s(.045,2.62,`#6a807d`,e,1.93,-3.95);for(let e=0;e<8;e++)r(.88,.065,.075,`#82968f`,0,.76+e*.31,-3.95);r(2.4,.12,.42,`#a8b5ad`,0,.57,-3.92);let u=s(.34,.18,`#404b49`,-1.17,1.3,-2.4);u.rotation.z=Math.PI/2,s(.075,.58,`#b5443b`,-1.18,1.17,-.2),r(.17,.075,.12,`#65706b`,-1.18,1.52,-.2),s(.12,.35,`#5f7773`,-1.15,1.3,-1.14).rotation.z=Math.PI/2,r(.08,.35,.28,`#ba453a`,-1.35,1.3,-1.14),r(2.24,1.95,1.97,a,0,1.94,2.62),r(2.28,.14,2.01,e.accentColor,0,2.98,2.62),r(2.25,.27,2.04,`#eeeae1`,0,1.42,2.62),r(1.96,.77,.045,`#436574`,0,2.35,3.625,n,`glass`),r(.1,.81,.06,a,0,2.35,3.66),r(1.18,.36,.055,`#4b5c58`,0,1.74,3.65);for(let e of[-1,1])r(.038,.76,1.18,`#436574`,e*1.135,2.35,2.7,n,`glass`),r(.075,.055,.36,`#d0dad2`,e*1.17,1.89,2.53),r(.3,.14,.09,`#fff1c6`,e*.77,1.25,3.67,n,`headlamp`),r(.17,.24,.25,`#485d59`,e*1.36,2.48,3.19),r(.26,.16,.83,`#899790`,e*1.15,.93,2.43);for(let e of[-1,1]){let t=r(.032,.4,.025,`#2f4247`,e*.47,2.17,3.658);t.rotation.z=e*.22,r(.025,.93,.025,`#8e332c`,e*1.142,1.81,1.71),r(.025,.025,1.49,`#8e332c`,e*1.142,1.355,2.45),r(.04,.09,.22,`#e5aa58`,e*1.2,1.1,-3.77),r(.04,.09,.22,`#e5aa58`,e*1.2,1.1,-.28)}r(2.35,.23,.22,`#b4c0b6`,0,.9,3.64),i(`BBM`,.2,`#f6ead2`,0,2.88,3.66);let d=new G({color:`#b94835`,emissive:`#bd3026`,emissiveIntensity:0});for(let e of[-1,1]){let t=r(.32,.15,.08,`#b94835`,e*.8,.89,-4.07);t.material=d}let f=[];for(let e of[-1,1])for(let t of[-2.93,-1.92,2.83]){let i=new g;i.name=`road-wheel`,i.position.set(e*1.08,c,t),n.add(i),s(c,.3,`#36413f`,0,0,0,i).rotation.z=Math.PI/2,s(c*.6,.32,`#b4c0b8`,0,0,0,i).rotation.z=Math.PI/2,r(.335,.08,.49,`#677c78`,0,0,0,i);for(let t=0;t<6;t++){let n=t*Math.PI/3;s(.031,.035,`#6d7e7a`,e*.163,Math.cos(n)*.16,Math.sin(n)*.16,i).rotation.z=Math.PI/2}f.push(i),r(.36,.18,1.04,`#c1c9c2`,e*1.08,.91,t)}return Xo(n,{preserveMaterials:new Set([d])}),{root:n,wheels:f,radius:c,length:8.15,brake:d,loadingPort:new R(-1.36,1.3,-1.14)}}function as(e){e.userData.staticWorldDynamic=!0}function os(e){return Array.isArray(e)?`[`+e.map(os).join(`,`)+`]`:e&&typeof e==`object`?`{`+Object.entries(e).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>JSON.stringify(e)+`:`+os(t)).join(`,`)+`}`:JSON.stringify(e)??`null`}function ss(e){if(!(e instanceof G)||e.transparent||e.opacity<1||e.clippingPlanes?.length||Object.values(e).some(e=>e instanceof Te)||e.onBeforeRender!==ke.prototype.onBeforeRender||e.onBeforeCompile!==ke.prototype.onBeforeCompile||e.customProgramCacheKey!==ke.prototype.customProgramCacheKey)return null;let{uuid:t,...n}=e.toJSON();return os([n,e.color.toArray(),e.emissive.toArray()])}function cs(t,n=32){t.updateMatrixWorld(!0);let r=t.matrixWorld.clone().invert(),i=t.matrixWorld.determinant(),a=new Map,s=new Map,c=new Map,l=new Map,u=new Map,d=new Set,f=new Set,p=new we,m=new R,h=new o,g=t=>{if(t.visible&&!t.userData.staticWorldDynamic){if(t instanceof q&&!(t instanceof F)&&!(t instanceof e)&&!Array.isArray(t.material)&&t.children.length===0&&(!t.name||t.name.startsWith(`static-`)||t.name.startsWith(`rigid-color-batch-`)||t.userData.staticWorldBatch===!0)&&!t.customDepthMaterial&&!t.customDistanceMaterial&&t.matrixWorld.determinant()*i>0&&t.onBeforeRender===A.prototype.onBeforeRender&&t.onAfterRender===A.prototype.onAfterRender&&t.onBeforeShadow===q.prototype.onBeforeShadow&&t.onAfterShadow===q.prototype.onAfterShadow&&!Object.keys(t.geometry.morphAttributes).length&&t.geometry.drawRange.start===0&&t.geometry.drawRange.count===1/0){let e=c.get(t.material);e===void 0&&(e=Jo(t.material),c.set(t.material,e));let i=e!==null&&Object.keys(t.userData).every(e=>e===`staticWorldBatch`),o=i?e:s.get(t.material);if(o===void 0&&(o=ss(t.material),s.set(t.material,o)),o!==null){let e=(i?`color:`:`material:`)+o;if(!i){let e=l.get(o);e&&e!==t.material?(f.add(t.material),t.material=e):l.set(o,t.material)}u.has(e)||u.set(e,u.size),h.multiplyMatrices(r,t.matrixWorld),t.geometry.boundingBox||t.geometry.computeBoundingBox(),p.copy(t.geometry.boundingBox).applyMatrix4(h).getCenter(m);let s=t.geometry,c=Object.entries(s.attributes).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>[e,t.itemSize,t.normalized,t.array.constructor.name]),d=os([u.get(e),i?null:c,t.userData,t.castShadow,t.receiveShadow,t.renderOrder,t.layers.mask,t.frustumCulled,Math.floor(m.x/n),Math.floor(m.z/n)]),g=a.get(d)??{material:t.material,meshes:[],colorBatch:i};g.meshes.push(t),a.set(d,g)}}for(let e of t.children)g(e)}};g(t);let _=0;for(let{material:e,meshes:n,colorBatch:i}of a.values()){if(n.length<2)continue;let a,s=e;if(i){let e=Yo(n,n.map(e=>new o().multiplyMatrices(r,e.matrixWorld)));if(!e)continue;a=e.geometry,s=e.material}else{let e=n.map(e=>{let t=e.geometry.index?e.geometry.toNonIndexed():e.geometry.clone();return t.clearGroups(),t.applyMatrix4(new o().multiplyMatrices(r,e.matrixWorld))});a=_t(e),e.forEach(e=>e.dispose())}if(!a)continue;a.computeBoundingBox(),a.computeBoundingSphere();let c=n[0],l=new q(a,s);l.name=`static-world-cell-`+_++,l.castShadow=c.castShadow,l.receiveShadow=c.receiveShadow,l.layers.mask=c.layers.mask,l.renderOrder=c.renderOrder,l.frustumCulled=c.frustumCulled,l.userData={...c.userData},l.updateMatrix(),l.matrixAutoUpdate=!1,t.add(l);for(let e of n)e.removeFromParent(),d.add(e.geometry),f.add(e.material)}t.traverse(e=>{if(e instanceof q||e instanceof rt||e instanceof _e){d.delete(e.geometry);for(let t of Array.isArray(e.material)?e.material:[e.material])f.delete(t)}}),d.forEach(e=>e.dispose()),f.forEach(e=>e.dispose())}function ls(e){let t=new Set;return e.traverse(e=>{if(e instanceof q)for(let n of Array.isArray(e.material)?e.material:[e.material])n instanceof G&&n.emissive.getHex()!==0&&t.add(n)}),Xo(e,{preserveMaterials:t}),e}var us=.7,ds=Object.freeze({hitchOffset:2.3*us,trailerAxleOffset:10.2*us,tractorFront:3.6*us,tractorRear:2.8*us,trailerRear:13.35*us,deckY:1.22*us,width:2.7*us});function fs(e){let t=e.palette,n=new g;n.name=`port-container-trailer-truck`,n.userData.category=`truck`,n.userData.palette=t,n.userData.articulatedTrailer=!0,as(n);let r=new g,i=new g,a=new g;r.name=`port-trailer-tractor`,i.name=`port-trailer-chassis`,a.name=`port-trailer-cargo-mount`,r.scale.setScalar(us),i.scale.setScalar(us),n.add(r,i),a.position.set(0,1.22,-6.3),as(a),i.add(a);let o=e.bodyColor,s=`#384c51`,c=`#87999c`,l=`#436574`,{box:u,cylinder:d,label:f}=new Zo(.72),p=[],m=[],h=(e,t,n,r,i,a)=>{let o=new g;o.name=r,o.position.set(t,.49,n),o.userData.radius=.49,e.add(o);let l=d(.49,i?.43:.27,`#303b3e`,0,0,0,o);l.rotation.z=Math.PI/2;let u=d(.27,i?.45:.29,c,0,0,0,o);u.rotation.z=Math.PI/2;let f=d(.1,i?.47:.31,s,0,0,0,o);f.rotation.z=Math.PI/2;for(let e=0;e<6;e++){let n=e*Math.PI/3,r=d(.03,.03,`#c2c9c4`,Math.sign(t)*(i?.24:.16),Math.cos(n)*.175,Math.sin(n)*.175,o);r.rotation.z=Math.PI/2}a.push(o)};u(1.9,.23,6.25,s,0,.88,.325,r),u(2.36,2.1,2.58,o,0,2.01,2.22,r),u(2.4,.16,2.64,e.accentColor,0,3.13,2.22,r),u(2.38,.11,2.64,o,0,2.92,2.22,r),u(2.1,.83,.045,l,0,2.56,3.535,r,`glass`),u(.07,.86,.075,o,0,2.55,3.565,r),u(2.02,.08,.095,`#ccd4ca`,0,2.08,3.55,r),u(1.55,.5,.09,`#263b40`,0,1.68,3.545,r);for(let e=0;e<4;e++)u(1.48,.035,.11,c,0,1.48+e*.12,3.57,r);u(2.46,.24,.18,c,0,1.035,3.51,r),f(`RIVERSIDE`,.135,`#efeada`,0,2.99,3.57,0,r),u(.57,.14,.035,`#e8e5d6`,0,1.04,3.61,r);for(let e of[-1,1]){u(.04,.8,1.79,l,e*1.195,2.52,2.49,r,`glass`),u(.04,.95,.07,o,e*1.224,2.47,1.9,r),u(.07,.055,.28,`#d5ddd2`,e*1.23,1.95,1.85,r),u(.045,.51,.07,s,e*1.3,2.62,3.18,r),u(.17,.38,.27,s,e*1.43,2.62,3.18,r),u(.035,.3,.2,`#90a3a6`,e*1.525,2.63,3.18,r),u(.28,.09,1.01,c,e*1.18,1.01,1.87,r),u(.3,.09,.86,s,e*1.18,.84,1.87,r),u(.38,.24,.07,`#fff1ce`,e*.94,1.23,3.58,r,`headlamp`),u(.1,.13,.08,`#d69a4e`,e*1.17,1.24,3.58,r),u(.55,.62,1.62,c,e*.74,1.17,-.1,r),u(.52,.16,2.14,s,e*1.03,1.1,-1.8,r);for(let[t,n]of[2.61,-1.43,-2.48].entries())h(r,e*1.03,n,`port-tractor-wheel-${e}-${t}`,t>0,p)}for(let e of[-1,1]){let t=u(.03,.43,.025,s,e*.48,2.37,3.562,r);t.rotation.z=e*.23,u(.025,.81,.025,s,e*1.206,1.61,1.01,r),u(.025,.025,1.37,s,e*1.206,1.205,1.68,r);for(let t of[-3.4,-6.3,-8.1])u(.035,.08,.17,`#d3a151`,e*1.345,1.12,t,i)}d(.51,.09,`#273b40`,0,1.13,-2.3,r),u(1.04,.035,.79,s,0,1.18,-2.3,r);for(let e of[-1,1]){u(.18,.3,14.1,s,e*.85,.98,-6.3,i),u(.09,.08,14.1,c,e*1.3,1.15,-6.3,i),u(.09,.18,4.4,`#d0d4c9`,e*1.27,.72,-5.75,i),u(.13,.83,.17,c,e*.83,.54,-2.43,i),u(.37,.07,.4,s,e*.83,.105,-2.43,i);for(let t of[.4,-13])u(.24,.06,.25,`#c5a14d`,e*1.19,1.19,t,i);u(.44,.12,3.8,s,e*1.07,1.07,-10.2,i),u(.45,.51,.07,`#37474c`,e*1.06,.43,-12.02,i);for(let[t,n]of[-9.1,-10.2,-11.3].entries())h(i,e*1.065,n,`port-trailer-wheel-${e}-${t}`,!0,m);u(.32,.15,.05,`#a6473e`,e*.98,.89,-13.37,i),u(.08,.11,.06,`#d3a151`,e*1.33,1.04,-13.3,i)}for(let e of[.4,-2.4,-6.3,-9.1,-13])u(2.7,.16,.22,c,0,1.09,e,i);return u(2.63,.15,.14,`#c2c8be`,0,.5,-13.35,i),u(.69,.12,.05,`#ece6d6`,0,.85,-13.38,i),ls(n),{root:n,tractor:r,trailer:i,cargoMount:a,tractorWheels:p,trailerWheels:m,spec:ds}}function ps(e){let t=new Zo(.78),{root:n,box:r}=t,i=e.kind===`van`,a=e.kind===`flatbed`,o=i?1.78:2.1,s=i?4.15:a?5.5:6.1,c=.44,l=s/2-.84,u=e.bodyColor,d=e.accentColor;n.name=`delivery-`+e.kind,r(o-.1,.3,s,`#3e4a58`,0,.57,0),r(o,1.25,1.72,u,0,1.29,l),r(o-.08,.94,1.46,u,0,2.08,l-.08),r(o-.32,.65,.035,`#47657a`,0,2.08,l+.67,n,`glass`),r(.052,.72,.06,d,0,2.09,l+.72,n,`trim`);for(let e of[-1,1])r(.035,.62,.99,`#47657a`,e*(o/2-.022),2.09,l-.01,n,`glass`),r(.06,.05,.24,`#cad6de`,e*(o/2+.02),1.62,l-.41,n,`metal`),r(.13,.08,.38,`#4c5760`,e*(o/2+.09),1.91,l+.3,n,`trim`),r(.11,.29,.15,`#3b4b57`,e*(o/2+.19),1.99,l+.43,n,`trim`),r(.025,.2,.09,`#71858c`,e*(o/2+.241),1.99,l+.43,n,`glass`),r(.36,.17,.08,`#fff0cf`,e*.68,1.32,s/2+.03,n,`headlamp`),r(.42,.025,.023,`#293d47`,e*.35,1.9,l+.707,n,`trim`).rotation.z=e*.12,r(.014,.87,.02,`#536775`,e*(o/2+.008),1.57,l-.58,n,`trim`),r(.018,.022,1.11,`#536775`,e*(o/2+.008),1.17,l-.04,n,`trim`),r(.19,.08,.51,`#a7b3b8`,e*(o/2+.04),.83,l-.2,n,`metal`);r(o+.1,.18,.14,`#bfcad5`,0,.85,s/2+.08,n,`metal`),r(o-.44,.29,.04,`#364855`,0,1,s/2+.03,n,`trim`);for(let e=0;e<3;e++)r(o-.58,.025,.025,`#8495a1`,0,.9+e*.08,s/2+.063,n,`metal`);r(.42,.13,.035,`#e9e7d8`,0,.86,s/2+.12,n,`trim`);let f=s-1.94;if(a){r(o+.08,.16,f,`#aab9c2`,0,.86,-1,n,`metal`);for(let e of[-1,1]){r(.09,.55,f,u,e*o/2,1.16,-1);for(let t=0;t<4;t++)r(.13,.61,.06,d,e*(o/2+.04),1.14,-f/2-.9+t*(f-.3)/3,n,`trim`)}}else{r(o+(i?0:.1),i?1.81:2.28,f,`#f0f2ed`,0,i?1.6:1.91,-.94);for(let e of[-1,1]){r(.025,.42,f-.08,u,e*(o/2+(i?.01:.06)),1.21,-.94),r(.036,.29,.29,d,e*(o/2+(i?.03:.08)),2.05,-.93,n,`trim`).rotation.x=Math.PI/4,r(.04,.11,1.1,d,e*(o/2+(i?.03:.08)),1.84,-1.02,n,`trim`);for(let t=0;t<3;t++)r(.025,.055,.4,`#9badb5`,e*(o/2+(i?.035:.085)),1.67+t*.26,-1.74,n,`trim`)}r(.06,1.68,.065,`#acb8bf`,0,1.85,-s/2-.011,n,`metal`);for(let e of[-.5,.5])r(.04,1.4,.065,`#acb8bf`,e,1.72,-s/2-.022,n,`metal`)}let p=new G({color:`#b94835`,emissive:`#bd3026`,emissiveIntensity:0});for(let e of[-1,1])r(.24,.12,.05,`#b94835`,e*.7,.71,-s/2+.015,n,`trim`).material=p;let m=[];for(let e of i?[l,-1.2]:[l,-1.65,...a?[]:[-2.35]])for(let r of[-1,1]){let i=new g;i.name=`road-wheel`,i.position.set(r*(o/2+.035),c,e),i.userData.radius=c,n.add(i);for(let[e,n,a,o]of[[.44,.28,`#343d46`,0],[.24,.3,`#c3cdd3`,r*.025],[.1,.31,`#768b9a`,r*.04]])t.mesh(new B(e,e,n,e===.44?16:e===.24?12:8),a,o,0,0,i,e===.44?`trim`:`metal`).rotation.z=Math.PI/2;m.push(i)}return Xo(n,{preserveMaterials:new Set([p])}),{root:n,wheels:m,radius:c,length:s,brake:p}}function ms(e){let t=new Zo(.72),{root:n,box:r}=t,i=1.8,a=.33,o=e.bodyColor,s=e.accentColor;n.name=`pickup`,r(1.56,.24,4.1,`#3e4a58`,0,.5,0,n,`trim`),r(1.76,.6,1.62,o,0,.7,1.39),r(1.76,.62,1.5,o,0,.71,-.17),r(1.62,.7,1,`#47657a`,0,1.37,.06,n,`glass`),r(1.6800000000000002,.07,1.04,o,0,1.75,.04);let c=r(1.6,.74,.04,`#47657a`,0,1.33,.71,n,`glass`);c.rotation.x=-.55;for(let e of[-1,1])r(.07,.72,.1,o,e*(i/2-.08),1.37,-.18),r(.06,.07,.26,s,e*.91,.6,0,n,`trim`),r(.12,.12,.08,`#4c5760`,e*.96,1.12,.92,n,`trim`),r(.3,.12,.035,`#fff1c6`,e*.62,.86,2.205,n,`headlamp`),r(.08,.43,1.78,o,e*(i/2-.06),.965,-1.31),r(.1,.04,1.78,`#3f4c4e`,e*(i/2-.06),1.2,-1.31,n,`trim`);r(1.72,.04,1.74,`#3f4c4e`,0,.76,-1.31,n,`trim`),r(1.72,.4,.08,o,0,.95,-2.16),r(1.72,.44,.1,o,0,.97,-.43),r(1.82,.18,.12,`#b9c4be`,0,.49,2.21,n,`metal`),r(1.82,.15,.1,`#3f4c4e`,0,.48,-4.4/2,n,`trim`),r(.9,.2,.03,`#3f4c4e`,0,.72,2.205,n,`trim`),r(1.82,.07,3.8,s,0,.58,.1,n,`trim`);let l=new G({color:`#af5241`,emissive:`#c74028`,emissiveIntensity:0});for(let e of[-1,1])r(.22,.14,.04,`#af5241`,e*.66,.95,-4.4/2-.01,n,`trim`).material=l;let u=[];for(let e of[1.35,-1.3])for(let r of[-1,1])u.push(Qo(t,r*(i/2-.1),e,a,n));let d=new g;return d.name=`cargo-mount`,d.position.set(0,.78,-1.31),n.add(d),n.userData.cargoMount=d,Xo(n,{preserveMaterials:new Set([l])}),{root:n,wheels:u,radius:a,length:4.4,brake:l}}var hs=new Map(Wo.map(e=>[e.id,e]));if(hs.size!==Wo.length)throw Error(`Duplicate vehicle preset`);var gs=(e,t)=>{let n=hs.get(e);if(!n)throw Error(`Unknown vehicle preset: `+e);let r=t.palette??`blue`;if(![`blue`,`sage`,`clay`].includes(r))throw Error(`Invalid vehicle palette`);let i=[`box`,`flatbed`,`van`].includes(n.kind),a=n.kind===`container-trailer`,o=r===`sage`?i?`#529084`:a?`#56877c`:`#86a79b`:r===`clay`?i?`#bc7156`:a?`#aa6755`:`#c5ae83`:n.bodyColor,s={...n,palette:r,bodyColor:t.bodyColor??(n.kind===`tanker`?n.bodyColor:o),accentColor:t.accentColor??(i?r===`sage`?`#95bdb0`:r===`clay`?`#d6a088`:n.accentColor:n.accentColor),riderColor:t.riderColor??`#7c9380`,helmetColor:t.helmetColor??`#596d75`};for(let e of[s.bodyColor,s.accentColor,s.riderColor,s.helmetColor])if(!/^#[0-9a-f]{6}$/i.test(e))throw Error(`Vehicle colors must use six-digit hex notation`);return s};function _s(e,t={}){let n=gs(e,t),r=n.kind===`container-trailer`?fs(n):n.kind===`tanker`?is(n):n.kind===`motorcycle`?rs(n):[`compact`,`hatchback`].includes(n.kind)?ns(n):n.kind===`pickup`?ms(n):ps(n);return r.root.userData.vehiclePresetId=e,r.root.userData.vehicle={kind:n.kind,bodyColor:n.bodyColor,accentColor:n.accentColor},r}var vs={bodyLength:15,bogieZ:5.2,couplerZ:7.54,detailLength:16.42},ys={colors:{bodyWhite:`#c5c5c5`,orange:`#fb8500`,roof:`#616161`,frame:`#3b3534`,steel:`#8b9398`,glass:`#34414b`,blueKai:`#2354bc`},runningGear:{wheelX:Ia.centerHalf,wagonRadius:.43,couplerY:.83,drawbarToJoint:.56},wagon:{...vs,containerLength:13.4},coach:{...vs,width:2.66,roofShoulder:3.1,roofTop:3.48,acTop:3.6,floorY:1.18}},bs={author:`Rico Cilliers; Rob Tuytel (guidance)`,source:`https://polyhaven.com/a/jacaranda_tree`,license:`CC0-1.0`,licenseUrl:`https://creativecommons.org/publicdomain/zero/1.0/`},xs=[{height:4.15,width:1,label:`Jacaranda`,description:`Jacaranda CC0 dengan cabang alami dan daun bertekstur.`},{height:3.9,width:.87,label:`Jacaranda ramping`,description:`Jacaranda CC0 dengan tajuk lebih ramping untuk area sempit.`},{height:4.1,width:1.04,label:`Jacaranda lebar`,description:`Jacaranda CC0 dengan tajuk melebar sebagai pohon peneduh.`}],Ss,Cs,ws=()=>Ss!==void 0;function Ts(e){if(Ss)throw Error(`Template Jacaranda sudah dimuat.`);e.updateMatrixWorld(!0);let t=new we().setFromObject(e),n=t.max.y-t.min.y;if(!Number.isFinite(n)||n<=0)throw Error(`Ukuran Jacaranda tidak valid.`);let r=t.getCenter(new R),i=new o().makeScale(1/n,1/n,1/n).multiply(new o().makeTranslation(-r.x,-t.min.y,-r.z)),a=new g,s=0,c=0,l=new Set;if(e.traverse(e=>{if(!(e instanceof q))return;if(!(e.material instanceof G))throw Error(`Material Jacaranda tidak valid.`);let t=e.geometry.clone().applyMatrix4(new o().multiplyMatrices(i,e.matrixWorld));l.add(e.geometry),s+=(t.index?.count??t.getAttribute(`position`).count)/3;let n=e.material;if(n.name.endsWith(`_leaves`)){if(c++,!n.map)throw Error(`Tekstur daun Jacaranda tidak tersedia.`);ia(n,`foliage`),n.transparent=!1,n.alphaTest=.45,n.side=2,n.forceSinglePass=!0,n.color.set(`#dce5c8`)}let r=new q(t,n);r.name=n.name,r.castShadow=r.receiveShadow=!0,a.add(r)}),a.children.length!==3||c!==1||s>45e3)throw ja([a]),Error(`Jacaranda harus memiliki tiga mesh dengan anggaran maksimal 45 ribu triangle.`);l.forEach(e=>e.dispose()),Ss=a}async function Es(){if(!Ss){if(Cs)return Cs;Cs=(async()=>{let[{GLTFLoader:e},{MeshoptDecoder:t},n]=await Promise.all([Wa(()=>import(`./GLTFLoader-Bf35660z.js`).then(e=>e.n),__vite__mapDeps([0,1,2])),Wa(()=>import(`./meshopt_decoder.module-DXTYc6wn.js`),[]),fetch(aa(`/models/jacaranda-game.glb?v=1`))]);if(!n.ok)throw Error(`Model Jacaranda belum dapat dimuat.`);let r=await new e().setMeshoptDecoder(t).parseAsync(await n.arrayBuffer(),``);try{Ts(r.scene)}catch(e){throw ja([r.scene]),e}})();try{await Cs}finally{Cs=void 0}}}function Ds(e=0,t=`blue`){if(!Ss)throw Error(`Muat template Jacaranda sebelum membuat scene.`);let n=xs[e]??xs[0],r=Aa(Ss,!0);r.name=`jacaranda-model`,r.scale.set(n.height*n.width,n.height,n.height*n.width);let i=new g;return i.add(r),i.name=`tree-`+e,i.userData={category:`tree`,variant:e,palette:t,modelStyle:`imported`,attribution:bs},t===`clay`&&i.traverse(e=>{e instanceof q&&e.material instanceof G&&e.material.userData.seasonalSurface===`foliage`&&e.material.color.set(`#ddd7b3`)}),i}var Os=class{batches=new Map;add(e,t,n){let r=t+`:`+(n??``),i=this.batches.get(r);if(!i){let e=new G({color:t,roughness:.92,flatShading:!0});n&&ia(e,n),i={material:e,geometry:[]},this.batches.set(r,i)}let a=e.index?e.toNonIndexed():e;a!==e&&e.dispose(),a.deleteAttribute(`uv`),i.geometry.push(a)}branch(e,t,n,r,i,a){let o=new R(...e),s=new R(...t),c=s.clone().sub(o),l=new B(r,n,c.length(),7);l.applyQuaternion(new $e().setFromUnitVectors(new R(0,1,0),c.normalize())),l.translate(...o.add(s).multiplyScalar(.5).toArray()),this.add(l,i,a)}crown(e,t,n,r,i,a=1){let o=new C(1,a),s=o.getAttribute(`position`);for(let e=0;e<s.count;e++){let t=s.getX(e),n=s.getY(e),r=s.getZ(e),a=1+.09*Math.sin(t*7.1+n*5.3+r*9.7+i);s.setXYZ(e,t*a,n*a,r*a)}o.computeVertexNormals(),o.scale(...t),o.rotateY(i*.73),o.translate(...e),this.add(o,n,r)}leaf(e,t,n,r,i=`foliage`){let a=new R(...e),o=new R(...t),s=o.clone().sub(a),c=new R(s.z,0,-s.x).normalize().multiplyScalar(n),l=a.clone().addScaledVector(s,.56);l.y+=s.length()*.13;let u=l.clone().add(new R(0,n*.25,0)),d=[a,l.clone().add(c),o,l.clone().sub(c),u],f=new Ae;f.setAttribute(`position`,new ht(d.flatMap(e=>e.toArray()),3)),f.setIndex([0,4,1,1,4,2,2,4,3,3,4,0,0,2,3,0,1,2]),f.computeVertexNormals(),this.add(f,r,i)}finish(e){let t=new g;t.name=e;for(let{material:n,geometry:r}of this.batches.values()){let i=_t(r);if(r.forEach(e=>e.dispose()),!i)throw Error(`Vegetation geometry could not be merged`);let a=new q(i,n);a.name=e+`-`+(n.userData.seasonalSurface??`wood`),a.castShadow=!0,a.receiveShadow=!0,t.add(a)}return t}};function ks(e){let t=new Os;for(let n=0;n<3;n++){let r=(n-1)*.34,i=.33+n%2*.09;t.branch([r,0,0],[r+.025,i,.02],.018,.009,`#648e66`,`foliage`);for(let i=0;i<5;i++){let a=i*2.4+n;t.leaf([r,.06+i*.035,0],[r+Math.cos(a)*.22,.22+i*.025,Math.sin(a)*.2],.07,e===`clay`?`#87955c`:i%2?`#88ad7c`:`#648e66`)}for(let e=0;e<5;e++){let n=e*Math.PI*2/5;t.crown([r+Math.cos(n)*.065,i,.02+Math.sin(n)*.065],[.055,.024,.038],`#eebf6c`,`foliage`,e,0)}}return t.finish(`flower-plant`)}function As(e,t=0){let n=new Os,r=e===`clay`?`#87955c`:`#7b976a`;for(let e=0;e<7;e++){let i=e*2.4+t*.4,a=Math.cos(i)*.32,o=Math.sin(i)*.22,s=.7+e%4*.13,c=[a+Math.cos(i)*.08,s,o+Math.sin(i)*.08];n.branch([a,0,o],c,.017,.01,r,`foliage`);for(let e=0;e<3;e++){let t=i+e*2.3;n.leaf([a,.12+e*.15,o],[a+Math.cos(t)*.24,s*(.62+e*.13),o+Math.sin(t)*.24],.034,r)}n.branch(c,[c[0],s+.17,c[2]],.035,.025,`#9b8261`)}return n.finish(`reed-cluster`)}xs.map(e=>e.label);var js={blue:{main:`#3677d4`,light:`#79a8e7`,dark:`#2555a0`,vehicle:`#dfb54f`},sage:{main:`#529084`,light:`#95bdb0`,dark:`#34665d`,vehicle:`#dca467`},clay:{main:`#bc7156`,light:`#d6a088`,dark:`#894e3d`,vehicle:`#7f9dba`}},Ms=class{root=new g;materials=new Map;mat(e,t=.78,n){let r=e+t+(n??``),i=this.materials.get(r);return i||(i=new G({color:e,roughness:t,metalness:0,flatShading:!0}),n&&ia(i,n),this.materials.set(r,i)),i}mesh(e,t,n,r,i,a=this.root){let o=new q(e,this.mat(t));return o.position.set(n,r,i),o.castShadow=!0,o.receiveShadow=!0,a.add(o),o}box(e,t,n,r,i=0,a=0,o=0,s=0,c=this.root){let l=s?new Zi(e,t,n,2,Math.min(s,e/3,t/3,n/3)):new Ge(e,t,n);return this.mesh(l,r,i,a,o,c)}cylinder(e,t,n,r,i,a,o,s=12){return this.mesh(new B(e,t,n,s),r,i,a,o)}};function Ns(e,t,n,r,i=1){let a=new g;a.position.set(t,n,r),a.scale.setScalar(i),e.root.add(a);for(let t of[-.53,0,.53])e.box(.16,.14,1.3,`#9d7951`,t,.1,0,0,a);for(let t=0;t<6;t++)e.box(1.38,.07,.18,t%2?`#c6a476`:`#b79566`,0,.205,-.55+t*.22,0,a);return a}function Ps(e=0,t=`blue`){let n=new Ms;if(Ns(n,0,0,0),e!==3){let t=e===1?3:2;for(let r=0;r<t;r++)for(let t=0;t<2;t++)for(let i=0;i<2;i++){if(e===1&&r===2&&t===1)continue;let a=(t-.5)*.63,o=(i-.5)*.59,s=.51+r*.53;if(n.box(.61,.5,.57,(t+i+r)%2?`#cfb187`:`#ddc09a`,a,s,o,.025),n.box(.05,.502,.574,`#ead3ad`,a,s,o),n.box(.614,.012,.05,`#e9d1ab`,a,s+.255,o),e===2){for(let e of[-.18,.18])n.box(.62,.06,.035,`#a7885d`,a,s+e,o+.3);for(let e of[-.24,.24])n.box(.065,.5,.035,`#b4986a`,a+e,s,o+.32)}else{n.box(.17,.1,.008,`#f4eee2`,a+.15,s+.03,o+.291);for(let e=0;e<4;e++)n.box(.006,.054,.01,`#8d836e`,a+.11+e*.02,s+.03,o+.3)}}if(e===0)for(let e of[-.35,.35])n.box(.035,1.1,1.21,`#867056`,e,.79,0),n.box(.04,.014,1.21,`#867056`,e,1.35,0)}return n.root.name=`pallet-`+e,n.root.userData={category:`pallet`,variant:e,palette:t},n.root}function Fs(e=0,t=`blue`){let n=new Ms,r=js[t],i=e===1?8.4:11.2,a=e===2?5.5:6.8,o=e===1?4.6:3.7;n.box(i+.55,.24,a+.5,`#c2cbd3`,0,.12,0),n.box(i,o,a,r.main,0,o/2+.24,0);for(let e=-i/2+.1;e<i/2;e+=.21)n.box(.028,o-.04,.036,r.light,e,o/2+.24,a/2+.02),n.box(.028,o-.04,.036,r.dark,e,o/2+.24,-a/2-.02);for(let e=-a/2;e<a/2;e+=.21)n.box(.04,o-.04,.028,r.light,i/2+.02,o/2+.24,e),n.box(.04,o-.04,.028,r.dark,-i/2-.02,o/2+.24,e);let s=e===1?.25:.13,c=a/2+.35;for(let e of[-1,1]){let t=n.box(i+.55,.12,c/Math.cos(s),r.main,0,o+.34+Math.sin(s)*c/2,e*c/2);t.rotation.x=e*s,t.material=n.mat(r.main,.78,`roof`);for(let a=-i/2;a<=i/2;a+=.22){let i=n.box(.025,.04,c/Math.cos(s),r.light,a,t.position.y+.085,t.position.z);i.rotation.x=e*s,i.material=n.mat(r.light,.78,`roof`)}}let l=new Qe;l.moveTo(-a/2,0),l.lineTo(a/2,0),l.lineTo(0,Math.sin(s)*c),l.closePath();for(let e of[-1,1]){let t=n.mesh(new D(l,{depth:.05,bevelEnabled:!1}),r.main,e*i/2,o+.27,0);t.rotation.y=Math.PI/2}let u=e===1?2:3;for(let e=0;e<u;e++){let o=(e-(u-1)/2)*(i/(u+.25)),s=a/2;n.box(2.4,2.85,.1,`#e5ebef`,o,1.65,s+.065),n.box(2.04,2.5,.12,`#293847`,o,1.45,s+.13),n.box(1.9,.58,.08,`#c1cbd6`,o,2.52,s+.205);for(let e=0;e<6;e++)n.box(1.91,.018,.03,`#a3b0bf`,o,2.27+e*.1,s+.25);n.box(2.36,.2,.6,`#818f9e`,o,.3,s+.4);let c=Ps(e%2,t);c.scale.setScalar(.8),c.position.set(o+.1,.35,s+.02),n.root.add(c);for(let e of[-1,1])n.box(.13,.74,.15,`#c6a250`,o+e*1.24,.61,s+.42,.02),n.box(.135,.13,.155,`#3b4651`,o+e*1.24,.77,s+.42);n.box(.47,.24,.04,r.dark,o,3.19,s+.18);for(let t=0;t<=e;t++)n.box(.048,.1,.012,`#f4f7fc`,o-e*.065+t*.13,3.19,s+.209)}if(e===2){n.box(3.1,2.4,3,`#e3e9eb`,-i/2-1.15,1.43,-.8),n.box(3.3,.16,3.2,r.dark,-i/2-1.15,2.73,-.8);for(let e=0;e<2;e++)n.box(.91,.85,.06,`#5c8297`,-i/2-1.8+e*1.32,1.9,.72),n.box(.04,.89,.07,`#f0f1ed`,-i/2-1.8+e*1.32,1.9,.76);n.box(.68,1.55,.07,r.dark,-i/2-1.15,1.03,.75)}for(let e of[-i/2+.12,i/2-.12])n.box(.12,o+.03,.12,r.dark,e,o/2+.24,a/2+.07);n.box(i,.16,.12,r.dark,0,.46,a/2+.04);let d=n.box(1.8,.42,.05,`#f6f8fb`,0,o-.06,a/2+.13,.025);n.box(.22,.22,.06,r.main,d.position.x-.62,d.position.y,d.position.z+.04).rotation.z=Math.PI/4;for(let e=0;e<3;e++)n.box(.65-e*.15,.035,.02,r.dark,.24,d.position.y+.07-e*.07,d.position.z+.04);return n.root.name=`warehouse-`+e,n.root.userData={category:`warehouse`,variant:e,palette:t},n.root}function Is(e=0,t=`blue`){let n=_s(e===2?`truck.van`:e===1?`truck.flatbed`:`truck.box`,{palette:t}).root;if(e===1)for(let e of[-1.75,-.35]){let r=Ps(e<-1?2:0,t);r.scale.setScalar(.87),r.position.set(0,.94,e),n.add(r)}return n.name=`truck-`+e,Object.assign(n.userData,{category:`truck`,variant:e,palette:t}),n}function Ls(e=0,t=`blue`){let n=new Ms,r=js[t],i=e===2,a=i?1.48:1.18;n.box(a,.68,1.94,r.vehicle,0,.78,.04,.16),n.box(a*.94,.51,.6,r.vehicle,0,1.04,-.74,.14),n.box(a+.03,.2,1.35,r.main,0,.45,.21,.04),n.box(a*.84,.07,1,`#62727b`,0,1.11,-.05);let o=n.box(.49,.14,.45,`#36434b`,0,1.32,-.18,.07);n.box(.5,.5,.13,`#36434b`,0,1.56,-.4,.06).rotation.x=-.14,o.name=`seat`;let s=n.mesh(new He(.18,.023,6,12),`#35434e`,0,1.61,.42);s.rotation.x=Math.PI/3,n.box(.06,.4,.06,`#35434e`,0,1.39,.47).rotation.x=-.25;for(let e of[-a*.4,a*.4])for(let t of[-.57,.55])n.box(.08,1.56,.08,`#34434f`,e,1.9,t);n.box(a,.1,1.43,`#34434f`,0,2.68,0,.04);for(let e=0;e<5;e++)n.box(a,.042,.035,`#6a7883`,0,2.75,-.54+e*.27);n.cylinder(.072,.072,.16,`#edac42`,a*.35,2.83,-.42,8);let c=i?3.25:2.62,l=new g;l.name=`mast`,n.root.add(l);for(let e of[-.39,.39])n.box(.115,c,.12,`#34444f`,e,c/2+.2,1.02,0,l),n.box(.045,c-.22,.05,`#a0abb3`,e,c/2+.16,1.11,0,l);for(let e of[.42,c-.03])n.box(.88,.1,.15,`#34444f`,0,e,1.02,0,l);let u=new g;u.name=`fork-carriage`,u.position.y=e===1?.6:0,n.root.add(u),n.box(.96,.45,.12,`#536574`,0,.56,1.16,0,u);for(let e of[-.31,.31])n.box(.12,.62,.08,`#798c98`,e,.45,1.25,0,u),n.box(.13,.07,1.03,`#798c98`,e,.15,1.74,.015,u);for(let e of[-.65,.65])for(let t of[-1,1]){let r=e>0?.33:.27,i=new g;i.name=`wheel-${e>0?`front`:`rear`}-${t>0?`right`:`left`}`,i.position.set(t*(a/2+.02),r,e),i.userData.radius=r,n.root.add(i);let o=n.mesh(new B(r,r,.22,12),`#34414a`,0,0,0,i);o.rotation.z=Math.PI/2;let s=n.mesh(new B(r*.56,r*.56,.25,12),`#c4cdd2`,t*.015,0,0,i);s.rotation.z=Math.PI/2;for(let e=0;e<3;e++)n.box(.018,r*.88,.027,`#8094a2`,t*.15,0,0,0,i).rotation.x=e*Math.PI/3}if(e===1){let e=Ps(0,t);e.scale.setScalar(.9),e.position.set(0,.78,1.78),n.root.add(e)}return n.root.name=`forklift-`+e,n.root.userData={category:`forklift`,variant:e,palette:t},n.root}function Rs(e=0,t=`blue`){return Ds(e,t)}var zs=new Qi().parse(ra);function Bs(e,t,n,r,i,a,o,s,c=0){let l=new na(t,{font:zs,size:n,depth:.009,curveSegments:2,bevelEnabled:!1});l.computeBoundingBox(),l.translate(-(l.boundingBox.max.x-l.boundingBox.min.x)/2,0,0);let u=e.mesh(l,r,i,a,o,s);u.rotation.y=c}function Vs(e,t,n,r,i){let a=new g;a.name=i,a.position.set(t,r,n),a.userData.radius=r,e.root.add(a);let o=e.mesh(new B(r,r,.19,16),ys.colors.steel,0,0,0,a);o.rotation.z=Math.PI/2;let s=e.mesh(new B(r+.035,r+.035,.025,16),ys.colors.frame,-Math.sign(t)*.09,0,0,a);s.rotation.z=Math.PI/2;let c=e.mesh(new B(r*.48,r*.48,.205,12),ys.colors.steel,0,0,0,a);c.rotation.z=Math.PI/2;for(let n=0;n<3;n++)e.box(.018,r*.82,.026,ys.colors.frame,Math.sign(t)*.11,0,0,0,a).rotation.x=n*Math.PI/3}function Hs(e,t){e.box(.22,.22,.62,ys.colors.frame,0,ys.runningGear.couplerY,t,.025),e.box(.39,.28,.22,ys.colors.steel,0,ys.runningGear.couplerY,t+Math.sign(t)*.25,.035)}function Us(e=0,t=`blue`){return Ho(`cc206`,t)}function Ws(e=0,t=`blue`){let n=new Ms,r=t===`sage`?`#627a6b`:t===`clay`?`#9e684d`:`#93624f`,{colors:i,runningGear:a,wagon:o}=ys,s=o.bodyLength/2;n.box(2.8,.2,o.bodyLength,r,0,1.05,0),n.box(2.62,.27,o.bodyLength-.3,i.frame,0,.8,0);let c=n.root.children.length;for(let e of[-o.bogieZ,o.bogieZ]){n.box(2.2,.26,2.6,i.frame,0,.61,e);for(let t of[-.79,.79])for(let r of[-1,1])Vs(n,r*a.wheelX,e+t,a.wagonRadius,`rail-wheel-wagon-${e}-${t}-${r}`)}for(let e of n.root.children.slice(c))e instanceof q&&(e.userData.runningGearStatic=!0);let l=Math.ceil((o.bodyLength-.7)/.57)+1;for(let e=0;e<l;e++)n.box(2.7,.024,.04,`#b18c70`,0,1.163,-s+.35+e*(o.bodyLength-.7)/(l-1));for(let t of[-1,1]){let r=Math.ceil((o.bodyLength-1.2)/1.23)+1;for(let e=0;e<r;e++)n.box(.055,.28,.07,`#bc9572`,t*1.42,.96,-s+.6+e*(o.bodyLength-1.2)/(r-1));Bs(n,e?`GERBONG BARANG`:`GERBONG DATAR`,.13,`#ede6d1`,t*1.431,.97,0,n.root,t*Math.PI/2)}if(e===1){let e=o.bodyLength-.8;n.box(2.67,2.8,e,r,0,2.56,0,.04),n.box(2.77,.15,e+.18,`#ab9c89`,0,4.05,0,.075);for(let t of[-1,1]){for(let r=-e/2+.17;r<=e/2-.17;r+=.28)n.box(.045,2.63,.037,`#ba9479`,t*1.35,2.56,r);n.box(.065,2.42,2.1,`#735345`,t*1.39,2.43,0),n.box(.07,.06,2.34,`#c4ad8d`,t*1.43,3.72,0),Bs(n,`KAI LOGISTIK`,.29,`#efe8d8`,t*1.4,3.21,-e*.31,n.root,t*Math.PI/2)}}else for(let e of[-s+.18,s-.18]){n.box(2.79,.54,.1,r,0,1.39,e);for(let t of[-1.31,1.31])n.box(.065,.7,.065,`#bca188`,t,1.45,e)}Hs(n,o.couplerZ+.31),Hs(n,-o.couplerZ-.31),n.root.name=`freight-wagon-`+e,n.root.userData={category:`wagon`,variant:e,palette:t,railFamily:`cc206`,carSpecRaw:{bogieZ:o.bogieZ,couplerZ:o.couplerZ},detailLength:o.detailLength};let u=new Set([r,`#b18c70`,`#bc9572`,`#ab9c89`,`#ba9479`,`#735345`,`#c4ad8d`,`#bca188`]),d=new Set([`#ede6d1`,`#efe8d8`]);for(let e of n.materials.values()){let t=`#`+e.color.getHexString();e.roughness=u.has(t)||d.has(t)?.8:.45,e.metalness=u.has(t)||d.has(t)?0:.12}return Ra(n.root)}function Gs(e=14){let t=new Ms;t.box(Ia.ballastWidth,.14,e,`#a7adb0`,0,.07,0,.045);for(let n=-e/2+.36;n<e/2;n+=.7){t.box(Ia.sleeperLength,.09,.21,`#8b857a`,0,.165,n,.02);for(let e of[-1,1])t.box(.27,.026,.23,`#656e73`,e*Ia.centerHalf,.225,n)}for(let n of[-1,1])t.box(.16,.035,e,`#7b858d`,n*Ia.centerHalf,.235,0),t.box(.042,.055,e,`#727f8a`,n*Ia.centerHalf,.275,0),t.box(Ia.headWidth,.035,e,`#c4cdd3`,n*Ia.centerHalf,.3025,0);return t.root.name=`rail-track`,t.root.userData={category:`rail`,variant:0},Js(t.root),t.root}function Ks(e=`blue`){let t=new Ms,n=js[e];t.box(28,.22,23,`#d8e0e6`,0,-.12,0,.08),t.box(27.8,.012,4.2,`#b4c5d7`,0,.004,8.8);for(let e=-12;e<=12;e+=3)t.box(1.5,.015,.085,`#edf2f5`,e,.02,8.8);t.box(27.8,.02,.14,`#f0f4f7`,0,.015,6.62),t.box(27.8,.02,.14,`#f0f4f7`,0,.015,10.98);let r=Fs(0,e);r.position.set(-1.4,0,-2),t.root.add(r);let i=Fs(1,e);i.scale.setScalar(.61),i.position.set(6.65,0,-3.95),i.rotation.y=-Math.PI/2,t.root.add(i);for(let e of[-4.6,-1.2,2.2]){for(let n of[-1,1])t.box(.048,.015,3.6,`#c4ab6a`,e+n*1.35,.01,3.8);t.box(2.74,.015,.048,`#c4ab6a`,e,.01,5.6)}let a=Is(0,e);a.scale.setScalar(.63),a.position.set(-4.6,.04,3.82),t.root.add(a);let o=Is(2,e);o.scale.setScalar(.74),o.rotation.y=Math.PI/2,o.position.set(7.9,.03,8.8),t.root.add(o);for(let n=0;n<2;n++){let r=Ls(n,e);r.scale.setScalar(.69),r.rotation.y=n?-Math.PI/3:Math.PI/3,r.position.set(n?3.5:-8.6,.02,n?4.5:1.45),t.root.add(r)}for(let n=0;n<8;n++){let r=Ps(n%3,e);r.position.set(n<5?-8.8+n*1.6:8.3+(n-5)%2*1.6,.02,n<5?4.5:.8+Math.floor((n-5)/2)*1.6),t.root.add(r)}t.box(3.3,2.12,2.1,`#589d99`,-9.6,1.09,-3,.025);for(let e=-11.16;e<-8;e+=.16)t.box(.03,2.05,.04,`#83b6ae`,e,1.1,-1.93);for(let e of[-4.03,-1.97])t.box(3.4,.12,.12,n.dark,-9.6,2.21,e);let s=new g;s.name=`cargo-rack`,t.root.add(s);for(let e of[7.4,10.5])for(let r of[-6.6,-5.2])t.box(.08,4.2,.08,n.main,e,2.1,r,0,s);for(let n of[.3,1.76,3.22]){t.box(3.2,.12,1.5,`#aebfca`,8.95,n,-5.9,0,s);for(let t of[8.1,9.8]){let r=Ps(0,e);r.scale.setScalar(.82),r.position.set(t,n+.1,-5.9),s.add(r)}}for(let n=0;n<7;n++){let r=Rs(n%3,e);r.scale.setScalar(.67+n%3*.1),r.position.set(-11.8+n*3.85,0,-9.2),t.root.add(r)}return t.root.name=`depot-riverside`,t.root.userData={category:`yard`,palette:e},t.root}function qs(e,t,n){let r=e===`yard`?Ks(n):e===`rail`?Gs():e===`train`?Ho([`cc206`,`cc203`,`cc204`][t]??`cc206`,n):{warehouse:Fs,truck:Is,forklift:Ls,pallet:Ps,tree:Rs,wagon:Ws}[e](t,n);return Js(r),r}function Js(e){let t=[];e.traverse(e=>{e instanceof g&&t.push(e)});for(let e of t){let t=new Map;for(let n of e.children){if(!(n instanceof q)||n.name||Array.isArray(n.material))continue;let e=`${n.material.uuid}:${n.castShadow}:${n.receiveShadow}`,r=t.get(e)??{material:n.material,meshes:[]};r.meshes.push(n),t.set(e,r)}for(let{material:n,meshes:r}of t.values()){if(r.length<2)continue;let i=r.map(e=>(e.updateMatrix(),(e.geometry.index?e.geometry.toNonIndexed():e.geometry.clone()).applyMatrix4(e.matrix))),a=_t(i);if(i.forEach(e=>e.dispose()),!a)throw Error(`Static geometry could not be merged.`);let o=new q(a,n);o.castShadow=r[0].castShadow,o.receiveShadow=r[0].receiveShadow,o.name=`static-`+t.size+`-`+n.name+`-`+e.children.length;for(let t of r)e.remove(t),t.geometry.dispose();e.add(o)}}}function Ys(e,t=!1){let n=0,r=0,i=e=>{if(e instanceof q&&(!t||!e.userData.cc206ShadowProxy&&e.layers.isEnabled(0))){n++;let t=e.geometry;r+=(t.index?.count??t.getAttribute(`position`).count)/3*(e instanceof F?e.count:1)}};return t?e.traverseVisible(i):e.traverse(i),{meshes:n,triangles:r}}function Xs(e,t=!1){let n=Ys(e,t);e.updateMatrixWorld(!0);let r=new we().setFromObject(e).getSize(new R);return{...n,size:r.toArray()}}function Zs(e){ka(e);let t=new Set,n=new Set,r=new Set;e.traverse(e=>{if(e instanceof q||e instanceof rt||e instanceof _e){t.add(e.geometry);for(let t of Array.isArray(e.material)?e.material:[e.material]){n.add(t);for(let e of Object.values(t))e instanceof Te&&r.add(e)}e instanceof F&&e.dispose()}(e instanceof tt||e instanceof j||e instanceof me)&&e.shadow.dispose()}),t.forEach(e=>e.dispose()),n.forEach(e=>e.dispose()),r.forEach(e=>e.dispose())}function Qs(e,t){let n=e instanceof g?{root:e}:e;n.root.userData.assetId=t,Js(n.root);let r=!1;return{root:n.root,update(e){r||n.update?.(Number.isFinite(e)?Math.max(0,e):0)},dispose(){r||(r=!0,Zs(n.root),n.root.removeFromParent(),n.root.clear())}}}function Z(e,...t){return{order:e,definitions:t}}function $s(e,t=vo){let n=new Set,r=new Map;for(let t of e){if(!Number.isFinite(t.order)||n.has(t.order))throw Error(`Urutan registrasi katalog harus unik dan finite.`);n.add(t.order);for(let e of t.definitions){if(!e.id||r.has(e.id))throw Error(`AssetId katalog harus unik.`);if(typeof e.create!=`function`)throw Error(`Factory aset tidak tersedia: `+e.id);r.set(e.id,e)}}let i=[...e].sort((e,t)=>e.order-t.order).flatMap(e=>e.definitions);for(let e of i)if(!r.has(t(e.id)))throw Error(`Tujuan alias aset tidak ditemukan: `+e.id);return{list(){return i.filter(e=>t(e.id)===e.id).map(({id:e,label:t,group:n,description:r,tags:i})=>({id:e,label:t,group:n,description:r,tags:[...i]}))},create(e,{palette:n}){let i=r.get(t(e));if(!i)throw Error(`Aset tidak ditemukan: `+e);return Qs(i.create(n),i.id)}}}var ec=new Map,{colors:Q,runningGear:tc,coach:nc}=ys;function rc(e=`blue`){let t=ec.get(e);return t||(t=ic(`high`,e),la(t,{medium:ic(`medium`,e),low:ic(`low`,e)},1,`passenger`),Ra(t),ba(t),ec.set(e,t)),Aa(t)}function ic(e,t){let n=new g;n.name=`kai-passenger-family-coach`,n.userData={category:`passenger`,palette:t,passengerCoach:!0,isLocomotive:!1,railRigReady:!0,modelStyle:`rail-family`,railFamily:`cc206`,carSpecRaw:{bogieZ:nc.bogieZ,couplerZ:nc.couplerZ},detailLength:nc.detailLength};let r=new g;r.name=`passenger-body`,n.add(r);let i=new X(.56,r),a=i.mat(Q.steel);a.metalness=.48,a.roughness=.48,i.mat(Q.roof).flatShading=!1,i.mat(Q.bodyWhite).flatShading=!1;let o=i.mat(Q.glass);o.roughness=.28,o.metalness=.12,o.userData.stationWindow=!0;let s=t===`sage`?`#617572`:t===`clay`?`#8b7164`:`#647b90`,c=nc.width,l=c/2,u=nc.bodyLength/2,d=u-1.3,f=.37,p=1.17,m=Math.floor((2*(d-f)-.93)/p)+1;i.box(c,.16,nc.bodyLength,Q.steel,0,1.1,0),i.box(2.3,.25,nc.bodyLength-.45,Q.frame,0,.86,0);for(let t of[-1,1]){for(let[e,n]of[[-u,-d-f],[-d+f,d-f],[d+f,u]]){let r=(e+n)/2,a=n-e;i.box(.085,1.92,a,Q.bodyWhite,t*(l-.043),2.14,r),i.box(.035,.23,a,Q.orange,t*(l+.018),1.62,r),i.box(.035,.037,a,Q.blueKai,t*(l+.019),1.45,r),i.box(.04,.055,a,Q.steel,t*(l+.019),1.235,r)}i.box(.085,.095,nc.bodyLength,Q.bodyWhite,t*(l-.043),3.055,0);for(let n=0;n<m;n++){let r=(n-(m-1)/2)*p;if(i.box(.033,.93,.93,`#969da0`,t*(l+.024),2.5,r),i.box(.025,.82,.82,Q.glass,t*(l+.046),2.5,r),e!==`low`){for(let n of[-.21,.21])i.box(.014,.25,.17,s,t*(l+.064),2.25,r+n),e===`high`&&i.box(.013,.055,.13,`#9aa4a6`,t*(l+.075),2.4,r+n);e===`high`&&i.box(.02,.025,.76,Q.steel,t*(l+.063),2.9,r)}}for(let r of[-1,1]){let a=r*d;for(let e of[-.395,.395])i.box(.1,1.89,.043,Q.steel,t*(l+.01),2.125,a+e);i.box(.1,.045,.83,Q.steel,t*(l+.01),3.055,a);let o=new g;if(o.name=`passenger-door-${t}-${r}`,o.position.set(t*(l+.038),2.12,a-f),o.userData.boardingFootpoint=[t*1.45,nc.floorY,a],as(o),n.add(o),i.box(.04,1.85,.74,Q.bodyWhite,0,0,.37,o),i.box(.015,.59,.46,Q.glass,t*.028,.43,.37,o),i.box(.015,.025,.13,Q.frame,t*.03,-.11,.6,o),i.box(.02,.23,.74,Q.orange,t*.029,-.5,.37,o),e!==`low`){for(let e of[-.46,.46]){i.cylinder(.018,1.18,Q.steel,t*(l+.1),2.16,a+e);for(let n of[1.6,2.72])i.box(.13,.032,.032,Q.steel,t*(l+.047),n,a+e)}i.label(`1`,.16,Q.blueKai,t*(l+.065),2.92,a+r*.66,t*Math.PI/2)}for(let e=0;e<3;e++)i.box(.2,.052,.78,Q.steel,t*(1.32+(2-e)*.035),.7+e*.21,a)}if(i.label(`KAI`,.26,Q.blueKai,t*(l+.057),1.855,-4.6,t*Math.PI/2),e===`high`){i.box(.015,.07,.47,Q.frame,t*(l+.043),1.3,4.95);for(let e=0;e<5;e++)i.box(.009,.035,.018,Q.steel,t*(l+.053),1.3,4.79+e*.08)}}let h=new Qe;h.moveTo(-l,0),h.quadraticCurveTo(-l*.92,.38,0,.38),h.quadraticCurveTo(l*.92,.38,l,0),h.lineTo(l,-.055),h.lineTo(-l,-.055),h.closePath();let _=new D(h,{depth:nc.bodyLength,curveSegments:e===`high`?12:e===`medium`?7:4,bevelEnabled:!1}),v=_.getAttribute(`normal`),y=_.getAttribute(`position`);for(let e=0;e<y.count;e++){if(Math.abs(v.getZ(e))>.5||y.getY(e)<-.001)continue;let t=y.getX(e),n=y.getY(e),r=new R(t*.3,Math.max(.1,n+.05),0).normalize();v.setXYZ(e,r.x,r.y,0)}i.mesh(_,Q.roof,0,nc.roofShoulder,-u);for(let t of[-3.6,3.6])if(i.box(1.13,.12,1.83,Q.steel,0,3.54,t),e!==`low`)for(let n=0;n<(e===`high`?8:4);n++)i.box(.88,.01,.065,Q.frame,0,3.595,t-.65+n*(e===`high`?.185:.41));for(let t of[-1,1]){i.box(c,1.92,.085,Q.bodyWhite,0,2.14,t*(u-.0425)),i.box(.81,1.72,.065,Q.frame,0,2.14,t*(u+.02)),i.box(.56,1.55,.032,Q.bodyWhite,0,2.14,t*(u+.066)),i.box(.41,.62,.025,Q.glass,0,2.55,t*(u+.09));let r=e===`high`?5:e===`medium`?3:1;for(let e=0;e<r;e++){let n=t*(u+.03+e*.035);for(let e of[-1,1])i.box(.12,1.8,.027,Q.frame,e*.47,2.14,n);i.box(1.06,.11,.027,Q.frame,0,3.015,n)}i.box(.96,.08,.29,Q.steel,0,1.22,t*(u+.075));for(let e of[-1,1])i.box(.1,.13,.03,`#872f2c`,e,1.79,t*(u+.01));let a=new g;a.name=`rail-bogie-${t}`,a.position.z=t*nc.bogieZ,n.add(a),i.box(1.94,.25,2.7,Q.frame,0,.65,0,a);for(let n of[-1,1]){i.box(.14,.15,2.4,Q.steel,n*1.045,.62,0,a);for(let r of[-.87,.87]){let o=new g;o.name=`rail-wheel-coach-${t}-${n}-${r}`,o.userData={axis:`x`,radius:tc.wagonRadius},o.position.set(n*tc.wheelX,tc.wagonRadius,r),a.add(o);let s=e===`high`?18:e===`medium`?10:8,c=(e,t,n,r)=>{let a=i.mesh(new B(e,e,t,s),r,n,0,0,o);a.rotation.z=Math.PI/2};c(tc.wagonRadius,.17,0,Q.steel),c(tc.wagonRadius+.025,.025,-n*.078,Q.frame),e!==`low`&&c(.2,.022,n*.095,Q.frame),i.box(.16,.18,.19,Q.frame,n*1.09,.57,r,a),e===`high`&&(i.cylinder(.105,.14,Q.steel,n*1.11,.77,r,a),i.box(.02,.38,.045,Q.frame,n*.12,0,0,o))}}for(let e of[-.87,.87]){let t=i.cylinder(.067,1.8,Q.frame,0,tc.wagonRadius,e,a);t.rotation.z=Math.PI/2}let o=new g;o.name=`rail-coupler-${t}`,o.position.set(0,tc.couplerY,t*nc.couplerZ),n.add(o),i.box(.19,.18,.56,Q.frame,0,0,t*.28,o),i.box(.39,.28,.22,Q.steel,0,0,t*tc.drawbarToJoint,o)}for(let t of[-3.9,0,3.9])if(i.box(1.6,.31,1.54,Q.frame,0,.79,t),e===`high`)for(let e=0;e<4;e++)i.box(.035,.16,1.2,Q.steel,-.55+e*.37,.79,t);return n.traverse(e=>{if(!(e instanceof q)||!e.geometry.index)return;let t=e.geometry;e.geometry=t.toNonIndexed(),t.dispose()}),n}var ac=Object.freeze({indomie:Object.freeze({url:aa(`/sponsors/indomie-wrap.webp?v=indomie-b2`),color:`#ffffff`}),"le-minerale":Object.freeze({url:aa(`/sponsors/le-minerale-wrap.webp?v=leminerale-b2`),color:`#ffffff`})}),oc=new Map,sc,cc=()=>Object.keys(ac).every(e=>oc.has(e));function lc(e,t=`indomie`){oc.set(t,e)}function uc(){if(cc())return Promise.resolve();if(!sc){let e=new Ke;sc=Promise.all(Object.keys(ac).map(async t=>{if(!oc.has(t))try{let n=await e.loadAsync(ac[t].url);n.colorSpace=pe,lc(n,t)}catch(e){console.warn(`Passenger advertising artwork (${t}) could not be loaded.`,e)}})).then(()=>{cc()||(sc=void 0)})}return sc}function dc(e,t,n,r){let i=(e,[t,n,r,i])=>{e.moveTo(t,n),e.lineTo(r,n),e.lineTo(r,i),e.lineTo(t,i),e.closePath()},a=new Qe;i(a,e);for(let e of t){let t=new gt;i(t,e),a.holes.push(t)}let o=new w(a),s=o.getAttribute(`position`),c=o.getAttribute(`normal`),l=o.getAttribute(`uv`);for(let e=0;e<s.count;e++){let[t,i,a,o,u]=n(s.getX(e),s.getY(e));s.setXYZ(e,t,i,a),c.setXYZ(e,...r),l.setXY(e,o,u)}return o}function fc(e,t=`indomie`){let n=oc.get(t);if(!n||e.getObjectByName(`passenger-advertising`))return null;let{width:r,bodyLength:i}=ys.coach,a=i/2-1.3,o=i/2-.04,s=a-.42,c=1.21,l=3.09,u=e=>(e-c)/1.88,d=1.17,f=Math.floor((2*(a-.37)-.93)/d)+1,p=[];for(let e=0;e<f;e++){let t=(e-(f-1)/2)*d,n=.49;p.push([t-n,2.01,t+n,2.99])}let m=n.clone();m.colorSpace=pe,m.needsUpdate=!0;let h=new G({color:ac[t].color,map:m,roughness:.65,metalness:.02}),_=new g;_.name=`passenger-advertising`,_.userData={passengerAdvertising:!0,sponsorPreset:t};let v=(e,t,n)=>{let r=new q(e,h);r.name=t,r.castShadow=!1,r.receiveShadow=!1,r.userData.passengerAdvertising=!0,n.add(r)},y=[];for(let t of[-1,1]){for(let[e,n]of[[-o,-a-.42],[-s,s],[a+.42,o]])y.push(dc([e,c,n,l],e===-s?p:[],(e,n)=>[t*(r/2+.095),n,-t*e,(e+o)/(2*o),u(n)],[t,0,0]));for(let n of[-1,1]){let r=e.getObjectByName(`passenger-door-${t}-${n}`);if(!r)continue;let i=e=>-t*e,a=[i(.015),i(.725)].sort((e,t)=>e-t),s=(e,t,n,r)=>[Math.min(i(e),i(n)),t,Math.max(i(e),i(n)),r];v(dc([a[0],-.895,a[1],.895],[s(.125,.115,.615,.745),s(.525,-.135,.675,-.085)],(e,n)=>[t*.043,n,-t*e,(e-t*r.position.z+o)/(2*o),u(n+r.position.y)],[t,0,0]),`passenger-advertising-door-${t}-${n}`,r)}}for(let e of[-1,1])for(let t of[-1,1]){let n=t<0?-r/2+.02:.57,a=t<0?-.57:r/2-.02;y.push(dc([n,c,a,l],[[t-.08,1.7,t+.08,1.88]],(r,o)=>[e*r,o,e*(i/2+.03),t<0?.1*(r-n)/(a-n):.9+.1*(r-n)/(a-n),u(o)],[0,0,e]))}let b=_t(y,!1);return y.forEach(e=>e.dispose()),v(b,`passenger-advertising-body`,_),e.add(_),_}function pc(e=`blue`,t=`indomie`){let n=rc(e);return fc(n,t),n}function mc(e=`blue`){let t=new X(.68),n=t.root;n.name=`pertamina-bbm-tank-wagon`;let{colors:r,runningGear:i,wagon:a}=ys;n.userData={category:`wagon`,carriageType:`tank`,isLocomotive:!1,palette:e,railFamily:`cc206`,carSpecRaw:{bogieZ:a.bogieZ,couplerZ:a.couplerZ},detailLength:a.detailLength};let o=a.bodyLength/2,s=a.bodyLength-2.8,c=s*.37,l=o-.37,u=r.bodyWhite,d=r.frame,f=r.steel,p=`#c74742`,m=`#6c797c`;Object.assign(t.mat(u),{roughness:.3,metalness:.08}),Object.assign(t.mat(d),{roughness:.5,metalness:.12}),Object.assign(t.mat(f),{roughness:.4,metalness:.24}),Object.assign(t.mat(m),{roughness:.45,metalness:.2}),Object.assign(t.mat(p),{roughness:.42,metalness:.08});let h=(e,n,r,i)=>t.beam(new R(e[0],e[1],e[2]),new R(n[0],n[1],n[2]),r,i),_=(e,n,r,i,a,o)=>{let s=t.mesh(new B(e,e,n,20),r,i,a,o);return s.rotation.x=Math.PI/2,s},v=new B(i.wagonRadius,i.wagonRadius,.19,12),y=new B(i.wagonRadius+.035,i.wagonRadius+.035,.025,12),b=new B(.21,.21,.205,10),x=(e,r,a)=>{let o=new g;o.name=a,o.userData.radius=i.wagonRadius,o.position.set(e,i.wagonRadius,r),n.add(o),t.mesh(v,f,0,0,0,o).rotation.z=Math.PI/2,t.mesh(y,d,-Math.sign(e)*.09,0,0,o).rotation.z=Math.PI/2,t.mesh(b,f,0,0,0,o).rotation.z=Math.PI/2;for(let n=0;n<3;n++)t.box(.018,.35,.025,d,Math.sign(e)*.11,0,0,o).rotation.x=n*Math.PI/3};t.box(2.64,.18,a.bodyLength,d,0,1.055,0),t.box(.58,.3,a.bodyLength-.35,d,0,.79,0);for(let e of[-1,1])t.box(.12,.23,a.bodyLength-.25,d,e*1.22,.97,0);for(let e of[-c,c]){t.box(1.96,.28,.62,f,0,1.22,e);for(let n of[-.94,.94])t.box(.15,.36,.58,f,n,1.4,e)}_(1.22,s,u,0,2.43,0);for(let e of[-1,1]){let n=t.mesh(new at(1.22,20,12),u,0,2.43,e*(s/2-.01));n.scale.z=.43,t.mesh(new He(1.223,.019,4,20),`#bac4c1`,0,2.43,e*(s/2-.06))}for(let e of[-c,c])t.mesh(new He(1.235,.034,4,20),f,0,2.43,e);for(let e of[-1,1]){let r=e*Math.PI/2,i=new g;i.position.set(e*1.245,2.37,0),i.rotation.y=r,n.add(i);let a=new Qe;a.moveTo(-.19,-.08),a.lineTo(.01,-.08),a.lineTo(.19,.18),a.lineTo(-.01,.18),a.closePath();let o=new D(a,{depth:.011,bevelEnabled:!1});t.mesh(o,`#c93f40`,-1.81,.31,0,i),t.mesh(o,`#2e6d9a`,-1.9,0,0,i),t.mesh(o,`#559269`,-1.54,0,0,i),t.label(`PERTAMINA`,.28,`#384b55`,.14,.15,0,0,i),t.label(`ANGKUTAN BBM`,.12,`#64787c`,.15,-.12,0,0,i),t.label(`KKW 26 001`,.075,`#d4dcd8`,e*1.294,.981,c+.22,r),t.label(`ISI 50 m3`,.075,`#d4dcd8`,e*1.294,.981,-c-.25,r);let l=c+.38,u=t.box(.026,.35,.35,`#d8643f`,e*1.25,2.35,e*l);u.rotation.x=Math.PI/4,t.label(`3`,.12,`#fff2df`,e*1.272,2.29,e*l,r),t.box(.027,.065,.65,p,e*1.25,1.37,-s/2-.2),t.box(.027,.065,.65,p,e*1.25,1.37,s/2+.2)}t.box(.8,.06,3.62,f,0,3.66,0);for(let e=0;e<14;e++)t.box(.7,.021,.04,`#a9b4b1`,0,3.702,-1.61+e*.248);t.cylinder(.3,.2,d,0,3.8,.25),t.cylinder(.35,.08,f,0,3.94,.25),t.box(.24,.055,.04,d,0,4.013,.25),t.cylinder(.09,.24,p,0,3.82,-.68),t.cylinder(.13,.07,f,0,3.965,-.68);for(let e of[-1,1]){for(let n of[-1.74,0,1.74])t.cylinder(.025,.43,f,e*.39,3.92,n);h([e*.39,4.135,-1.74],[e*.39,4.135,1.74],.025,f),h([e*.39,3.96,-1.74],[e*.39,3.96,1.74],.018,f)}for(let e of[-1.38,-.88])h([1.38,1.17,e],[1.38,3.35,e],.031,f),h([1.38,3.35,e],[.42,3.89,e],.031,f);for(let e=0;e<8;e++)h([1.39,1.35+e*.28,-1.38],[1.39,1.35+e*.28,-.88],.023,f);for(let e of[.62,.91,1.2])h([e,3.35+(1.38-e)*.5625,-1.38],[e,3.35+(1.38-e)*.5625,-.88],.023,f);for(let e of[-1,1]){t.box(2.5,.08,.61,p,0,1.19,e*l);for(let n of[-1,1])t.cylinder(.026,.68,f,n*1.15,1.58,e*(o-.18)),t.box(.36,.06,.47,f,n*1.16,.99,e*(o-.29));h([-1.15,1.92,e*(o-.18)],[1.15,1.92,e*(o-.18)],.026,f),h([-1.15,1.61,e*(o-.18)],[1.15,1.61,e*(o-.18)],.021,f),t.box(.22,.22,.62,d,0,i.couplerY,e*(a.couplerZ+.31)),t.box(.39,.28,.22,f,0,i.couplerY,e*(a.couplerZ+.56))}t.cylinder(.031,.69,d,.69,1.64,-l),t.mesh(new He(.2,.023,5,12),p,.69,1.96,-l);for(let e=0;e<3;e++)t.box(.36,.022,.026,p,.69,1.96,-l).rotation.z=e*Math.PI/3;t.cylinder(.105,.24,m,0,1.29,-.2),h([0,1.17,-.2],[-1.39,1.17,-.2],.085,m),t.box(.12,.24,.26,p,-1.39,1.22,-.2),h([-1.39,1.35,-.34],[-1.39,1.35,-.06],.027,p),_(.17,1.28,f,.63,.71,.44),t.box(.59,.22,.54,d,-.34,.72,.66);let S=n.children.length;for(let e of[-a.bogieZ,a.bogieZ]){t.box(2.2,.26,2.6,d,0,.61,e);for(let n of[-1,1]){t.box(.17,.14,2.28,f,n*1.02,.66,e);for(let r of[-.34,.34]){t.cylinder(.125,.28,d,n*1.09,.72,e+r);for(let i of[-.065,.035])t.cylinder(.135,.018,f,n*1.09,.72+i,e+r)}for(let r of[-.79,.79])x(n*i.wheelX,e+r,`rail-wheel-tank-${e}-${r}-${n}`),t.cylinder(.105,.18,f,n*1.16,.63,e+r).rotation.z=Math.PI/2}}for(let e of n.children.slice(S))e instanceof q&&(e.userData.runningGearStatic=!0);return Ra(n)}function hc(e){if(e.userData.freightLodReady||e.userData.category!==`wagon`||e.userData.passengerCoach)return;let t=new g;t.name=`freight-body-high`,t.userData.cc206LodLevel=`high`;for(let n of[...e.children])/^rail-(bogie|coupler|wheel)-/.test(n.name)||n.name===`container-cargo`||t.add(n);e.add(t);for(let t of[`medium`,`low`]){let n=new g;n.name=`freight-body-`+t,n.userData.cc206LodLevel=t,n.visible=!1;let r=[],i=(e,t,n,i,a)=>{let o=e.index?e.toNonIndexed():e.clone();e.dispose(),o.translate(n,i,a);let s=new K(t),c=o.getAttribute(`position`).count,l=new Float32Array(c*3);for(let e=0;e<c;e++)l[e*3]=s.r,l[e*3+1]=s.g,l[e*3+2]=s.b;o.setAttribute(`color`,new nt(l,3)),o.deleteAttribute(`uv`),r.push(o)},a=(e,t,n,r,a,o=0)=>i(new Ge(e,t,n),r,0,a,o),{wagon:o,colors:s}=ys,c=e.userData.palette===`sage`?`#627a6b`:e.userData.palette===`clay`?`#9e684d`:`#93624f`;if(a(2.64,.3,o.bodyLength-.3,s.frame,.9),e.userData.carriageType===`tank`){let e=o.bodyLength-2.8,n=t===`medium`?16:10;i(new B(1.22,1.22,e,n).rotateX(Math.PI/2),s.bodyWhite,0,2.43,0);for(let r of[-1,1])i(new at(1.22,n,t===`medium`?8:6).scale(1,1,.43),s.bodyWhite,0,2.43,r*(e/2-.01));a(.8,.1,3.62,s.steel,3.7),a(2.5,.08,.61,`#c74742`,1.19,-o.bodyLength/2+.37),a(2.5,.08,.61,`#c74742`,1.19,o.bodyLength/2-.37)}else if(e.userData.containerWagon)a(2.72,.07,o.bodyLength-.34,s.steel,1.15);else if(a(2.8,.2,o.bodyLength,c,1.05),e.userData.variant===1)a(2.67,2.8,o.bodyLength-.8,c,2.56),a(2.77,.15,o.bodyLength-.62,`#ab9c89`,4.05);else for(let e of[-1,1])a(2.79,.54,.1,c,1.39,e*(o.bodyLength/2-.18));let l=_t(r,!1);if(r.forEach(e=>e.dispose()),l){let e=new G({vertexColors:!0,roughness:.5,metalness:.08,flatShading:!0}),t=new q(l,e);t.name=`freight-detail-body`,t.castShadow=!0,t.receiveShadow=!0,t.matrixAutoUpdate=!1,n.add(t)}e.add(n)}e.userData.freightLodReady=!0,e.userData.freightDetail=`high`}function gc(e,t,n){Object.assign(e.userData,{freightLodReady:!0,freightDetail:`high`,detailLength:n});let r=new g;r.name=`container-payload-high`,r.userData.cc206LodLevel=`high`;for(let t of[...e.children])r.add(t);e.add(r);for(let r of[`medium`,`low`]){let i=new g;i.name=`container-payload-`+r,i.userData.cc206LodLevel=r,i.visible=!1;let a=new q(new Ge(2.43,2.52,n),new G({color:t,roughness:.42,metalness:.08}));a.position.y=1.295,a.updateMatrix(),a.matrixAutoUpdate=!1,a.castShadow=!0,a.receiveShadow=!0,i.add(a),e.add(i)}}var _c=1.19,vc=ys.wagon.containerLength;function yc(e=`blue`,t=0){let n=new X(.42),{root:r,box:i,cylinder:a,label:o}=n;r.name=`shipping-container`,r.userData={container:!0,variant:t};let s=e===`clay`?[`#aa7358`,`#798f83`,`#b09467`]:[`#507f9c`,`#ad6452`,`#608a83`],c=s[t%s.length],l=ys.colors.steel;Object.assign(n.mat(c),{roughness:.42,metalness:.08}),Object.assign(n.mat(l),{roughness:.4,metalness:.24});let u=vc/2,d=u+.02;i(2.43,2.52,vc,c,0,1.295,0);for(let e of[-1,1]){let n=Math.ceil((vc-.36)/.28)+1;for(let t=0;t<n;t++)i(.045,2.28,.055,c,e*1.24,1.29,-u+.18+t*(vc-.36)/(n-1));for(let t of[.075,2.515])i(.085,.13,vc+.08,l,e*1.23,t,0);o(`RIVERSIDE`,.26,`#f2eddb`,e*1.271,1.57,-vc*.2,e*Math.PI/2),o(`LOGISTICS`,.12,`#f2eddb`,e*1.272,1.28,-vc*.2,e*Math.PI/2),o(`RIVU 26${String(t+1).padStart(4,`0`)}`,.11,`#f2eddb`,e*1.274,1.97,vc*.3,e*Math.PI/2);for(let t of[-1,1]){i(.11,2.5,.11,l,e*1.22,1.295,t*d);for(let n of[.085,2.505])i(.18,.17,.18,`#d8d7c4`,e*1.19,n,t*(u-.01))}}for(let e of[-d,d]){for(let t of[-.57,.57]){i(1.07,2.24,.035,c,t,1.295,e);for(let n of[-.31,.31])a(.024,2.06,l,t+n,1.3,e+Math.sign(e)*.055),i(.18,.04,.07,`#e4dec8`,t+n+.06,.87,e+Math.sign(e)*.073);for(let n of[.48,1.28,2.12])i(.16,.06,.08,l,t+Math.sign(t)*.45,n,e+Math.sign(e)*.055)}i(.035,2.24,.045,l,0,1.295,e+Math.sign(e)*.045)}let f=Math.ceil((vc-.48)/.45)+1;for(let e=0;e<f;e++)i(2.26,.025,.045,c,0,2.571,-u+.24+e*(vc-.48)/(f-1));return Js(r),gc(r,c,vc),r}function bc(e=`blue`,t=0,n=!0){let r=Ws(0,e),i=new Set;for(let e of[...r.children])if(!(!(e instanceof q)||e.position.y<=1.13&&e.geometry.type!==`TextGeometry`)){e.removeFromParent(),e.geometry.dispose();for(let t of Array.isArray(e.material)?e.material:[e.material])i.add(t)}r.traverse(e=>{if(e instanceof q)for(let t of Array.isArray(e.material)?e.material:[e.material])i.delete(t)}),i.forEach(e=>e.dispose());let a=new X(.45,r),{box:o,label:s}=a,{frame:c,steel:l}=ys.colors,{wagon:u}=ys;Object.assign(a.mat(c),{roughness:.5,metalness:.12}),Object.assign(a.mat(l),{roughness:.4,metalness:.24}),o(2.72,.07,u.bodyLength-.34,l,0,1.15,0);for(let e of[-1,1]){o(.09,.25,u.bodyLength-.4,c,e*1.36,.98,0),s(`GD  PETIKEMAS`,.12,`#eee8d4`,e*1.413,.94,0,e*Math.PI/2);for(let t of[-1,1])o(.22,.09,.25,`#d4b363`,e*1.19,1.205,t*(vc/2-.01)),o(.33,.065,.5,l,e*1.32,.97,t*(u.bodyLength/2-.33))}let d=yc(e,t);return d.name=`container-cargo`,d.position.y=_c,d.visible=n,as(d),r.add(d),r.name=`container-flat-wagon`,r.userData={category:`wagon`,palette:e,containerWagon:!0,variant:t,railFamily:`cc206`,runningGearGaugeHalf:r.userData.runningGearGaugeHalf,carSpecRaw:{bogieZ:u.bogieZ,couplerZ:u.couplerZ},detailLength:u.detailLength},r}var $=(e,t,n,r,i,a)=>({id:e,label:t,group:n,description:r,tags:i,create:a}),xc=(e,t,n,r,i,a)=>$(e,t,n,a,[`low-poly`,`procedural`],e=>qs(r,i,e));function Sc(e){let t=[];e.traverse(e=>{e instanceof g&&e.name.startsWith(`rail-wheel-`)&&t.push(e)});let n=new Map,r=new Set,i=new Set;for(let e of t){if(e.children.length<2)continue;let t=[],a,o=!0;for(let n of e.children){if(!Tc(n)){o=!1;break}let e=wc(n.material);if(e===void 0){o=!1;break}let r=t[0];if(e===void 0||a!==void 0&&a!==e||r&&(r.castShadow!==n.castShadow||r.receiveShadow!==n.receiveShadow||r.layers.mask!==n.layers.mask||r.renderOrder!==n.renderOrder||r.frustumCulled!==n.frustumCulled)){o=!1;break}a=e,t.push(n)}if(!o||a===void 0)continue;let s=t.map(e=>{e.updateMatrix();let t=e.geometry.index?e.geometry.toNonIndexed():e.geometry.clone();t.applyMatrix4(e.matrix);let n=t.getAttribute(`position`).count,r=new Float32Array(n*3),{r:i,g:a,b:o}=e.material.color;for(let e=0;e<n;e++)r[e*3]=i,r[e*3+1]=a,r[e*3+2]=o;return t.setAttribute(`color`,new nt(r,3)),t}),c=_t(s,!1);if(s.forEach(e=>e.dispose()),!c)continue;let l=n.get(a);l||(l=t[0].material.clone(),l.color.setRGB(1,1,1),l.vertexColors=!0,n.set(a,l));let u=new q(c,l);u.name=`wheel-color-batch`,u.castShadow=t[0].castShadow,u.receiveShadow=t[0].receiveShadow,u.layers.mask=t[0].layers.mask,u.renderOrder=t[0].renderOrder,u.frustumCulled=t[0].frustumCulled,u.matrixAutoUpdate=!1;for(let n of t)r.add(n.geometry),i.add(n.material),e.remove(n);e.add(u)}e.traverse(e=>{if(e instanceof q||e instanceof rt||e instanceof _e){r.delete(e.geometry);for(let t of Array.isArray(e.material)?e.material:[e.material])i.delete(t)}}),r.forEach(e=>e.dispose()),i.forEach(e=>e.dispose())}var Cc=new Set(Object.keys(new G));function wc(e){let t=[];for(let[n,r]of Object.entries(e)){if(!Cc.has(n))return;if(n!==`uuid`&&n!==`version`&&n!==`color`){if(r instanceof K)t.push([n,[r.r,r.g,r.b]]);else if(r instanceof dt||r instanceof ae)t.push([n,r.toArray()]);else if(r===null||typeof r==`number`||typeof r==`boolean`||typeof r==`string`)t.push([n,r]);else if(typeof r==`object`&&r&&Object.getPrototypeOf(r)===Object.prototype&&Object.values(r).every(e=>[`string`,`number`,`boolean`].includes(typeof e)))t.push([n,r]);else return}}return JSON.stringify(t)}function Tc(e){if(!(e instanceof q)||e.constructor!==q||Array.isArray(e.material)||e.material.constructor!==G||!e.visible||e.children.length||Object.keys(e.userData).length||e.onBeforeRender!==A.prototype.onBeforeRender||e.onAfterRender!==A.prototype.onAfterRender||e.onBeforeShadow!==q.prototype.onBeforeShadow||e.onAfterShadow!==q.prototype.onAfterShadow||e.customDepthMaterial||e.customDistanceMaterial||e.morphTargetInfluences)return!1;let t=e.material;if(!(t instanceof G)||t.transparent||t.opacity!==1||t.alphaTest!==0||t.alphaHash||t.blending!==1||t.stencilWrite||t.wireframe||t.vertexColors||Object.keys(t.userData).length||t.onBeforeCompile!==ke.prototype.onBeforeCompile||t.customProgramCacheKey!==ke.prototype.customProgramCacheKey||Object.values(t).some(e=>e instanceof Te))return!1;let n=e.geometry;return e.updateMatrix(),e.matrix.determinant()>0&&Object.keys(n.morphAttributes).length===0&&Object.keys(n.userData).length===0&&n.drawRange.start===0&&n.drawRange.count===1/0&&!!n.getAttribute(`position`)&&!!n.getAttribute(`normal`)&&!n.getAttribute(`color`)}function Ec(e,t,n){if(e.userData.locomotiveType!==`cc201`)return;let r=n===2&&t===1,i=e.getObjectByName(`locomotive-body`);if(!i)throw Error(`Bodi CC201 untuk orientasi pasangan tidak ditemukan.`);if(i.rotation.y=r?Math.PI:0,!!e.userData.cc201CabReversed===r)return;e.userData.cc201CabReversed=r;let a=e.userData.locomotiveLights,o=([e,t,n])=>[-e,t,-n];e.userData.locomotiveLights={...a,frontUpper:a.rearUpper.map(o),rearUpper:a.frontUpper.map(o),frontLower:a.rearLower.map(o),rearLower:a.frontLower.map(o),spot:o(a.rearSpot),rearSpot:o(a.spot),...a.bulbRadii?.frontLower!==void 0&&{bulbRadii:{...a.bulbRadii,frontLower:a.bulbRadii.rearLower,rearLower:a.bulbRadii.frontLower}}}}function Dc(e,t,n){let r=e.userData.carSpecRaw;return r&&Number.isFinite(r.bogieZ)&&r.bogieZ>0&&Number.isFinite(r.couplerZ)&&r.couplerZ>r.bogieZ?{bogieZ:r.bogieZ*n,couplerZ:r.couplerZ*n}:t}function Oc(e,t){if(e.userData.isLocomotive=t,e.userData.railRigReady===!0)return Ra(e);t&&e.traverse(e=>{if(e instanceof q)for(let t of Array.isArray(e.material)?e.material:[e.material])t instanceof G&&t.color.getHexString()===`fff1b8`&&(t.userData.nightLight=!0)});let n=e.userData.carSpecRaw??ys.wagon,r=t?4.3:n.bogieZ,i=t?7.23:n.couplerZ+.31;for(let n of[-1,1]){let a=new g;a.name=`rail-bogie-${n}`,a.position.z=n*r;let o=new g;o.name=`rail-coupler-${n}`,o.position.set(0,.83,n*(i-.31));let s=[...e.children];e.add(a,o),e.updateMatrixWorld(!0);for(let e of s){if(Math.sign(e.position.z)!==n)continue;let s=Math.abs(e.position.z);Math.abs(e.position.y-.83)<.001&&Math.abs(e.position.x)<.001&&(Math.abs(s-i)<.001||Math.abs(s-i-.25)<.001)?o.attach(e):e.position.y<.95&&Math.abs(s-r)<=(t?1.14:.8)&&a.attach(e)}}return Ra(e),Js(e),Sc(e),t||hc(e),e.userData.railRigReady=!0,e}var kc=(e,t)=>{let n=Oc(e,t),r=[];return n.traverse(e=>{e.name.startsWith(`rail-wheel-`)&&r.push(e)}),{root:n,update(e){for(let t of r)t.rotation.x=e*1.4/(t.userData.radius??.43)}}},Ac=e=>(Js(e.root),{root:e.root,update(t){for(let n of e.wheels)n.rotation.x=t*1.4/e.radius;e.brake.emissiveIntensity=Math.floor(t/4)%2?.65:0}}),jc=e=>e===`clay`?`#c5ae83`:e===`sage`?`#86a79b`:`#708eaa`,Mc=[Z(8.1,$(`train.cc201`,`CC201 · hidung kotak`,`rolling-stock`,`CC201 GE U18C dari aset unduhan, berkabin tunggal, roda berputar, bogie dan coupler berartikulasi.`,[`KAI`,`lokomotif`,`CC201`,`hidung kotak`,`beranimasi`],e=>kc(Ho(`cc201`,e),!0))),Z(8,$(`train.cc206`,`CC206`,`rolling-stock`,`CC206 dua kabin dari model pucohensap, dengan bogie tiga gandar, livery KAI dan rig yang disesuaikan untuk game.`,[`KAI`,`lokomotif`,`beranimasi`],e=>kc(Us(0,e),!0))),Z(9,$(`train.cc203`,`CC203`,`rolling-stock`,`CC203 berkabin tunggal aerodinamis, ruang mesin panjang dan livery putih-oranye.`,[`KAI`,`lokomotif`,`CC203`,`kabin tunggal`,`beranimasi`],e=>kc(Ho(`cc203`,e),!0))),Z(10,$(`train.cc204`,`CC204 · hidung kotak`,`rolling-stock`,`CC204 seri pertama C18MMi dengan hidung pendek kotak, kabin tinggi dan dua garis biru.`,[`KAI`,`lokomotif`,`CC204`,`hidung kotak`,`seri pertama`,`beranimasi`],e=>kc(Ho(`cc204`,e),!0))),Z(11,$(`coach.passenger`,`Gerbong penumpang · Indomie`,`rolling-stock`,`Gerbong penumpang keluarga CC206 dengan iklan Indomie, jendela terbuka, pintu berengsel, roda dan kopler sesuai jalur.`,[`KAI`,`penumpang`,`Indomie`,`iklan`,`beranimasi`],e=>kc(pc(e),!1))),Z(11.1,$(`coach.passenger.le-minerale`,`Gerbong penumpang · Le Minerale`,`rolling-stock`,`Gerbong penumpang keluarga CC206 dengan iklan Le Minerale putih-hijau, jendela terbuka dan pintu berengsel.`,[`KAI`,`penumpang`,`Le Minerale`,`iklan`,`beranimasi`],e=>kc(pc(e,`le-minerale`),!1))),Z(12,$(`wagon.flat`,`Gerbong datar`,`rolling-stock`,`Gerbong barang terbuka dengan deck kayu dan coupler.`,[`barang`,`beranimasi`],e=>kc(Ws(0,e),!1))),Z(13,$(`wagon.box`,`Gerbong boks`,`rolling-stock`,`Gerbong barang tertutup KAI Logistik.`,[`barang`,`beranimasi`],e=>kc(Ws(1,e),!1))),Z(14,$(`wagon.container`,`Gerbong peti kemas`,`rolling-stock`,`Gerbong datar dengan twist-lock dan peti kemas bergelombang, pintu serta batang pengunci.`,[`peti kemas`,`container`,`pelabuhan`,`barang`,`beranimasi`],e=>kc(bc(e),!1))),Z(15,$(`wagon.pertamina-tank`,`Gerbong tangki Pertamina`,`rolling-stock`,`Gerbong ketel BBM dengan tangki silinder, livery Pertamina, manway, tangga dan platform atas.`,[`Pertamina`,`BBM`,`ketel`,`tangki`,`barang`,`beranimasi`],e=>kc(mc(e),!1)))];function Nc(e=`blue`){return _s(`truck.tanker`,{palette:e})}function Pc(e){let t=_s(`car.compact`,{bodyColor:e}).root;t.name=`station-parked-car`,t.scale.setScalar(.75);let n=new g;n.name=`parking-ground-offset`,n.position.y=.061;for(let e of[...t.children])n.add(e);return t.add(n),t}function Fc(e,t=0){let n=_s(t===1?`car.hatchback`:`car.compact`,{bodyColor:e});return n.root.name=`compact-car-`+t,n}function Ic(e,t=0){let n=_s(`motorcycle.city`,{bodyColor:e,riderColor:t%2?`#b17b56`:`#7c9380`,helmetColor:t%2?`#dcd9c4`:`#596d75`});return n.root.name=`motorcycle-rider-`+t,n}function Lc(e,t=`crates`){let n=new X(.83),{box:r,cylinder:i,beam:a,label:o}=n,s=n.root;s.name=`river-cargo-barge`,s.userData.palette=e;let c=e===`clay`?`#72554b`:`#456570`,l=new Qe;l.moveTo(-18,-2.7),l.lineTo(-16.8,-4.1),l.lineTo(14.8,-4.1),l.lineTo(18.2,-2.8),l.lineTo(19,0),l.lineTo(18.2,2.8),l.lineTo(14.8,4.1),l.lineTo(-16.8,4.1),l.lineTo(-18,2.7),l.closePath();let u=new D(l,{depth:1.25,bevelEnabled:!0,bevelSegments:1,steps:1,bevelSize:.22,bevelThickness:.2,curveSegments:1});u.rotateX(Math.PI/2),n.mesh(u,c,0,1.35,0),r(31.5,.13,7.2,`#a49b80`,0,1.5,0);for(let e of[-1,1]){r(32.4,.33,.2,`#d6c5a6`,-.7,1.72,e*3.72),r(31.5,.24,.14,`#a55d46`,-.7,.95,e*4.12);for(let t=-15.8;t<=14.3;t+=2.4)i(.038,.6,`#b8b6a3`,t,2.07,e*3.76),t<13.5&&a(new R(t,2.32,e*3.76),new R(t+2.4,2.32,e*3.76),.027,`#b8b6a3`);for(let t of[-15.8,-7,6,15.2]){let r=n.mesh(new He(.5,.13,5,12),`#344449`,t,.94,e*4.2);r.rotation.y=e<0?Math.PI:0,a(new R(t,1.88,e*3.73),new R(t,1.05,e*4.2),.035,`#c3ab83`)}o(`RIVERSIDE CARGO`,.4,`#e3d3ad`,-2,.79,e*4.14,e<0?Math.PI:0)}r(5.1,.24,6.2,`#c8bfa6`,-13,1.72,0),r(4.5,2.2,4.8,`#efe7d2`,-13,2.87,0),n.seasonal(r(5.2,.22,5.5,`#476c79`,-13,4.08,0),`roof`);for(let e of[-1,1])r(2.9,.72,.07,`#697f81`,-13,3.45,e*2.45),r(.08,.85,.09,`#efe7d2`,-13,3.45,e*2.48);for(let e of[-1.35,0,1.35])r(.08,.74,1.05,`#697f81`,-10.71,3.47,e);r(.075,1.65,.95,`#607977`,-15.28,2.62,0),i(.19,2.4,`#4d6264`,-14.9,5.3,1.7),i(.35,.12,`#d4cbb8`,-14.9,6.56,1.7),i(.045,3.8,`#9ca99e`,-11.9,6,-1.5),r(1.1,.35,.12,`#b84c3f`,-11.4,7.54,-1.5),r(1.1,.35,.12,`#ede7d4`,-11.4,7.19,-1.5);for(let e of[-1,1]){r(.16,.19,.22,e<0?`#b7503e`:`#5f9b75`,-10.7,4.24,e*2.56),r(.16,.13,.25,`#fff1ce`,17.5,1.93,e*2.3);for(let t of[-17,16.4])i(.16,.38,`#3d535b`,t,1.74,e*2.85),r(.8,.12,.22,`#3d535b`,t,1.97,e*2.85)}let d=Array.from({length:t===`containers`?8:16},(e,n)=>{let i=new g;if(i.name=`ship-cargo-`+(n+1),t===`containers`?i.position.set(n%2?6.2:-4.2,1.62+Math.floor(n/4)*2.59*.7,Math.floor(n/2)%2?1.65:-1.65):i.position.set(-7.8+n%8*2.9,1.62,n<8?-1.65:1.65),s.add(i),as(i),t===`containers`)return i;let a=[`#668b8b`,`#be785b`,`#c6b17f`,`#70899d`][n%4];r(2.55,1.5,2.85,a,0,.75,0,i);for(let e of[-1,1]){for(let t=-1.1;t<=1.15;t+=.33)r(.045,1.38,.04,`#506d73`,t,.75,e*1.44,i);r(2.58,.065,.06,`#d4c7a4`,0,1.49,e*1.44,i)}return i});return Js(s),cs(s),{root:s,cargoSlots:d}}var Rc={wall:`#efe6d3`,accent:`#7d9aa6`,trim:`#f5edd8`,frame:`#a7ac9d`,roof:`#9a9d90`,window:`#6d8990`,door:`#436574`,paving:`#b6baae`,grass:`#a4ba8c`},zc=[...[`house.tropical`,`house.tropical-tan`,`house.tropical-sage`,`house.tropical-cream-tall`,`house.tropical-tan-wide`,`house.tropical-sage-tall`].map((e,t)=>({id:e,label:`Rumah desa ${t+1}`,kind:`house`,name:`village-house-${t}`,width:7.6,depth:6.2,floors:1,floorHeight:3.3,roof:`gable`,roofHeight:1.5,balcony:!1,windowStyle:`split`,roughness:.85,colors:{...Rc,wall:[`#eee1c4`,`#dbc9ad`,`#d5dcc9`][t%3],roof:t%2?`#a97c61`:`#bd8b6d`,frame:`#ede7d4`,door:`#7a8a80`}})),{id:`city.apartment`,label:`Apartemen kota`,kind:`apartment`,name:`city-apartment`,width:9,depth:7,floors:4,floorHeight:10.8/4,roof:`flat`,roofHeight:1.2,balcony:!0,windowStyle:`split`,roughness:.84,colors:{...Rc}},{id:`city.shops`,label:`Deretan ruko`,kind:`shops`,name:`city-shops`,width:14,depth:6,floors:2,floorHeight:4.4/2,roof:`flat`,roofHeight:.6,balcony:!1,windowStyle:`split`,roughness:.84,colors:{...Rc,wall:`#e9d9be`}},{id:`city.office`,label:`Kantor kota`,kind:`office`,name:`city-office`,width:9,depth:7,floors:3,floorHeight:8.8/3,roof:`flat`,roofHeight:1.2,balcony:!1,windowStyle:`split`,roughness:.84,colors:{...Rc,wall:`#dedfcd`}}],Bc=new WeakMap,Vc=e=>{delete e.userData.stationWindow,delete e.userData.stationLamp,delete e.userData.nightLight};function Hc(e,t,n,r,i,a,o,s){let c=e.box(t,n,r,i,a,o,s),l=c.material;if(l.userData.stationWindow||l.userData.stationLamp||l.userData.nightLight||l.userData.seasonalSurface||l.userData.environmentGround){let t=Bc.get(e)??new Map;Bc.set(e,t);let n=t.get(l);n||(n=l.clone(),Vc(n),delete n.userData.seasonalSurface,delete n.userData.environmentGround,t.set(l,n)),c.material=n}return c}function Uc(e,t,n,r,i,a){let o=new Qe;o.moveTo(-n/2-.45,0),o.lineTo(n/2+.45,0),o.lineTo(0,i),o.closePath();let s=e.seasonal(e.mesh(new D(o,{depth:t+.9,bevelEnabled:!1}),a,-(t+.9)/2,r,0),`roof`);return s.rotation.y=Math.PI/2,Vc(s.material),s}function Wc(e,t,n,r,i){let a=e.seasonal(e.box(t,.18,n,i,0,r+.09,0),`roof`);return Vc(a.material),a}function Gc(e,t,n,r,i,a){let s=[],c=n/2+.45,l=Math.atan2(i,c),u=new R,d=new R,f=new $e,p=new o,m=new R(1,1,1),h=(e,t,n,r,i)=>{p.compose(r,i,m),s.push(new Ge(e,t,n).applyMatrix4(p))},g=Math.min(18,Math.max(4,Math.ceil(c/.55))),_=Math.min(24,Math.max(5,Math.ceil((t+.9)/.75)));for(let e of[-1,1]){u.set(0,Math.cos(l),e*Math.sin(l)),f.setFromAxisAngle(new R(1,0,0),e*l);for(let n=1;n<=g;n++){let a=c*n/(g+1);d.set(0,r+i*(1-a/c),e*a).addScaledVector(u,.014),h(t+.82,.026,.055,d,f)}let n=Math.max(.18,.03*c/i),a=c-.08,o=new R(0,-i*(a-n)/c,e*(a-n));f.setFromUnitVectors(new R(0,0,1),o.clone().normalize());for(let s=1;s<_;s++){let l=-(t+.82)/2+(t+.82)*s/_,p=(n+a)/2;d.set(l,r+i*(1-p/c),e*p).addScaledVector(u,.014),h(.025,.018,o.length(),d,f)}}f.identity(),d.set(0,r+i-.021,0),h(t+.88,.04,.095,d,f);let v=_t(s,!1);if(s.forEach(e=>e.dispose()),!v)throw Error(`Roof tile detail could not be merged.`);let y=e.seasonal(e.mesh(v,a,0,0,0),`roof`);return y.name=`static-building-roof-tile-detail`,y.castShadow=y.receiveShadow=!1,Vc(y.material),y}function Kc(e,t,n,r,i,a,o,s=0){for(let c=1;c<r;c++)e.box(t,a,n,o,0,c*i+s,0)}function qc(e,t,n,r,i,a,o,s){let c=e.box(t,n,r,i,a,o,s);return c.material.userData.stationWindow=!0,c}function Jc(e,t,n,r,i,a,o,s){return e.box(t,n,r,i,a,o,s)}function Yc(e){let t=new X(e.roughness),{box:n}=t,{width:r,depth:i,floors:a,floorHeight:o,colors:s}=e,c=a*o;t.root.name=e.name,ia(t.mat(s.grass),`grass`),ia(t.mat(s.paving),`paving`),n(r+.6,.2,i+.6,s.paving,0,.06,0),Hc(t,r,c,i,s.wall,0,c/2+.13,0);let l=(e,n,r,i,a,o,s)=>{let c=Hc(t,e,n,r,i,a,o,s);return c.castShadow=!1,c.receiveShadow=!1,c};l(r+.08,.32,i+.08,s.accent,0,.32,0),l(r+.12,.1,i+.12,s.trim,0,.54,0);for(let e of[-1,1])for(let t of[-1,1])l(.18,c-.32,.18,s.trim,e*(r/2-.045),c/2+.3,t*(i/2-.045));e.roof===`gable`?(Uc(t,r,i,c+.2,e.roofHeight,s.roof),Gc(t,r,i,c+.2,e.roofHeight,s.roof)):Wc(t,r+.9,i+.9,c+.2,s.roof);for(let e=1;e<a;e++)l(r+.1,.1,i+.1,s.trim,0,e*o+.18,0);let u=(n,r,i,a,o=!1)=>{let c=(e,t,s,c,u,d,f)=>o?l(s,t,e,c,n+a*f,r+d,i+u):l(e,t,s,c,n+u,r+d,i+a*f);c(1.43,1.2,.07,s.trim,0,0,.06);let u=o?qc(t,.07,.95,1.22,s.window,n+a*.12,r,i):qc(t,1.22,.95,.07,s.window,n,r,i+a*.12);u.castShadow=!1,u.receiveShadow=!1,c(1.52,.11,.23,s.trim,0,-.62,.13),c(1.5,.09,.14,s.accent,0,.63,.09),e.windowStyle===`split`&&(c(.045,1,.08,s.frame,0,0,.17),c(1.23,.045,.075,s.frame,0,.16,.165))},d=Math.min(2.1,r/2-.965),f=Math.min(2.2,o-.55);for(let p of[-1,1]){for(let t=0;t<a;t++){let r=f+t*o;for(let a of[-d,d])if(u(a,r,p*i/2,p),e.balcony&&t>0){let e=t*o+.2,r=p*(i/2+.78);n(1.8,.12,.85,s.trim,a,e,p*(i/2+.4)),n(1.8,.07,.07,s.frame,a,e+.87,r);for(let t of[-.84,0,.84])n(.055,.84,.055,s.frame,a+t,e+.43,r)}}Jc(t,.98,2.04,.08,s.door,0,1.17,p*(i/2+.06));for(let e of[-.55,.55])l(.1,2.15,.13,s.trim,e,1.2,p*(i/2+.12));l(1.2,.12,.14,s.trim,0,2.31,p*(i/2+.12)),l(.8,.7,.04,s.accent,0,.72,p*(i/2+.13)),l(.8,.89,.04,s.accent,0,1.61,p*(i/2+.13)),l(.05,.19,.055,s.frame,.35,1.2,p*(i/2+.17)),n(1.5,.13,.6,s.paving,0,.18,p*(i/2+.42));let m=Math.min(2.62,o-.28);n(2.05,.12,.82,s.trim,0,m,p*(i/2+.43)),t.seasonal(l(2.12,.09,.87,s.roof,0,m+.1,p*(i/2+.43)),`roof`);for(let e of[-.94,.94])n(.095,m-.3,.095,s.trim,e,(m+.18)/2,p*(i/2+.72));l(r+.8,.09,.11,s.frame,0,c+.14,p*(i/2+.4)),l(.075,c-.16,.075,s.frame,r/2+.12,c/2+.22,p*(i/2+.14)),l(.2,.29,.13,s.frame,.81,2.2,p*(i/2+.12));let h=n(.12,.18,.035,`#fff0c9`,.81,2.2,p*(i/2+.21));h.castShadow=!1,h.receiveShadow=!1}let p=Math.min(1.55,i/2-.92);for(let t of[-1,1]){for(let e=0;e<a;e++)for(let n of[-p,p])u(t*r/2,f+e*o,n,t,!0);if(e.roof===`gable`&&e.roofHeight>.5){let n=c+.2+e.roofHeight*.34;l(.06,.35,.54,s.trim,t*(r/2+.46),n,0);for(let e of[-.105,0,.105])l(.065,.035,.39,s.frame,t*(r/2+.5),n+e,0)}}return n(r+2.8,.04,i+3.2,s.grass,0,0,0).castShadow=!1,t.root}function Xc(e){let t=new X(e.roughness),{box:n,cylinder:r}=t,{width:i,depth:a,floors:o,floorHeight:s,kind:c}=e,{accent:l,wall:u,trim:d,frame:f,roof:p,window:m,door:h,paving:g}=e.colors,_=(e,n,r,i,a,o,s)=>{let c=Hc(t,e,n,r,i,a,o,s);return c.castShadow=c.receiveShadow=!1,c},v=o*s,y=i/(c===`shops`?14:9),b=(c===`shops`?[-4.5,0,4.5]:[-2.7,0,2.7]).map(e=>e*y);t.root.name=e.name,n(i,.22,a,g,0,.11,0),Hc(t,i-.2,v-.22,a-.2,u,0,(v+.22)/2,0),n(i,.32,a,l,0,.38,0),Kc(t,i,a,o,s,.16,d);for(let e of[-1,1]){for(let t of[-i/2+.17,i/2-.17])_(.28,v-.55,.08,d,t,(v+.55)/2,e*(a/2-.04));_(i-.3,.14,.08,d,0,v-.16,e*(a/2-.04)),c!==`shops`&&_(.07,v-.6,.24,d,e*(i/2-.035),(v+.6)/2,0)}if(e.roof===`gable`)Uc(t,i,a,v,e.roofHeight,p),Gc(t,i,a,v,e.roofHeight,p);else{Wc(t,i,a,v,p);for(let e of[-1,1])n(i,.38,.14,d,0,v+.31,e*(a/2-.07)),n(.14,.38,a-.28,d,e*(i/2-.07),v+.31,0);n(1.3,.46,1,`#c5c5b7`,-i*.28,v+.31,-a*.22);for(let e=0;e<3;e++)_(1.06,.045,.07,f,-i*.28,v+.56,-a*.22-.28+e*.28);_(.9,.21,.025,f,-i*.28,v+.34,-a*.22+.51);for(let e of[-.27,0,.27])_(.055,.21,.035,d,-i*.28+e,v+.34,-a*.22+.53);if(_(i*.52,.065,.065,f,-i*.04,v+.24,-a*.22),_(.065,.065,a*.24,f,i*.22,v+.24,-a*.1),_(.45,.32,.45,d,0,v+.34,a*.18),_(.53,.07,.53,f,0,v+.535,a*.18),c!==`shops`){n(1.7,.16,1.7,f,i*.23,v+.26,-a*.22);let t=Math.max(.1,e.roofHeight-.34);r(.68,t,l,i*.23,v+.34+t/2,-a*.22);for(let e of[.18,.77]){let n=r(.687,Math.min(.045,t*.12),f,i*.23,v+.34+t*e,-a*.22);n.castShadow=n.receiveShadow=!1}_(.085,t*.82,.085,f,i*.23-.78,v+.34+t*.41,-a*.22)}}let x=(n,r,i,o=1.42*y)=>{let s=i*(a/2-.105);_(o+.22,1.58,.07,f,n,r,s);let c=qc(t,o,1.34,.065,m,n,r,s+i*.035);c.castShadow=c.receiveShadow=!1;for(let e of[-1,1])_(.085,1.48,.09,d,n+e*(o/2+.045),r,s+i*.045);_(o+.22,.1,.095,d,n,r+.73,s+i*.04),e.windowStyle===`split`&&(_(.065,1.35,.06,f,n,r,s+i*.07),_(o,.045,.06,f,n,r+.28,s+i*.07)),_(o+.22,.11,.15,d,n,r-.79,i*(a/2-.075))};for(let r=0;r<o;r++){let o=r*s+s*.58;for(let n of[-1,1]){for(let e of b)n>0&&r===0&&(c===`shops`||e===0)||x(e,o,n,(c===`office`?1.85:1.42)*y);if(c!==`shops`)for(let r of[-1.8*a/7,1.8*a/7]){_(.065,1.53,1.47,d,n*(i/2-.035),o,r);let a=qc(t,.06,1.32,1.26,m,n*(i/2-.0075),o,r);a.castShadow=a.receiveShadow=!1;for(let e of[-1,1])_(.07,1.4,.07,d,n*(i/2-.0125),o,r+e*.66);e.windowStyle===`split`&&_(.06,1.32,.055,f,n*(i/2-.0075),o,r),_(.08,.08,1.4,d,n*(i/2-.0175),o-.72,r)}}if(e.balcony&&r>0)for(let e of[b[0],b[2]]){let t=r*s+.16;n(2.03*y,.16,.9,d,e,t,a/2+.38),_(2.03*y,.2,.1,l,e,t+.18,a/2+.77),_(2.03*y,.07,.1,f,e,t+.665,a/2+.77);for(let n of[-.94,-.47,0,.47,.94])_(.055,.4,.065,f,e+n*y,t+.44,a/2+.77);for(let n of[-1,1])_(.1,.2,.76,l,e+n*.965*y,t+.18,a/2+.38),_(.07,.07,.76,f,e+n*.965*y,t+.665,a/2+.38),_(.055,.4,.065,f,e+n*.965*y,t+.44,a/2+.03)}}if(c===`shops`)for(let[r,i]of b.entries()){Jc(t,3.8*y,1.75,.07,f,i,1.14,a/2-.035);let o=qc(t,3.5*y,1.43,.035,m,i,1.13,a/2+.0175);o.castShadow=o.receiveShadow=!1,e.windowStyle===`split`&&_(.08,1.75,.08,d,i,1.14,a/2+.025);for(let e of[-1.78,1.78])_(.09,1.7,.07,d,i+e*y,1.14,a/2+.025);_(3.65*y,.065,.06,d,i,1.63,a/2+.035),_(3.65*y,.085,.08,d,i,.37,a/2+.04);for(let e of[-.14,.14])_(.045,.28,.045,d,i+e*y,1.02,a/2+.08);n(3.92*y,.49,.12,r%2?l:`#b97860`,i,2.2,a/2+.08),n(2.7*y,.11,.035,d,i,2.22,a/2+.16),_(.26,.26,.03,d,i-1.65*y,2.2,a/2+.16),_(.1,.1,.025,f,i-1.65*y,2.2,a/2+.19);let s=n(4.02*y,.14,.95,r%2?l:`#b97860`,i,1.94,a/2+.33);s.rotation.x=.1,n(4.02*y,.23,.07,d,i,1.78,a/2+.79);for(let e of[-1.75,1.75]){let t=_(.055,.055,.62,f,i+e*y,1.73,a/2+.33);t.rotation.x=-.39}n(.29,.12,.05,`#fff0c9`,i,2.55,a/2+.025)}else{Jc(t,1.65,2.13,.08,h,0,1.29,a/2-.03),e.windowStyle===`split`&&n(.07,2.13,.06,f,0,1.29,a/2+.04),n(2.5,.14,.85,l,0,2.48,a/2+.32),n(2.5,.16,.75,g,0,.3,a/2+.3);for(let e of[-1,1]){_(.08,2.13,.07,d,e*.87,1.29,a/2+.02),_(.045,.34,.045,d,e*.14,1.24,a/2+.08);let t=_(.065,.065,.55,f,e*1.01,2.27,a/2+.26);t.rotation.x=-.45}_(1.8,.085,.06,d,0,2.37,a/2+.02);for(let e of[-1.1,1.1])n(.22,.14,.06,`#fff0c9`,e,2.23,a/2+.02)}return t.root}var Zc=new Map(zc.map(e=>[e.id,e]));if(Zc.size!==zc.length)throw Error(`Building preset IDs must be unique.`);function Qc(e,t){let n=Zc.get(e);if(!n)throw Error(`Building preset not found: ${e}`);let r=t.palette??`blue`;if(![`blue`,`sage`,`clay`].includes(r))throw Error(`Invalid building palette.`);let i=t.roof??n.roof;if(i!==`flat`&&i!==`gable`)throw Error(`Invalid building roof.`);let a={...n,palette:r,width:t.width??n.width,depth:t.depth??n.depth,floors:t.floors??n.floors,floorHeight:t.floorHeight??n.floorHeight,roof:i,roofHeight:t.roofHeight??(i===n.roof?n.roofHeight:i===`gable`?1.5:.6),balcony:t.balcony??n.balcony,windowStyle:t.windowStyle??n.windowStyle,colors:{...n.colors,wall:t.wallColor??n.colors.wall,roof:t.roofColor??n.colors.roof,accent:t.accentColor??(r===`sage`?`#709486`:r===`clay`?`#b97860`:n.colors.accent)}},o=(e,t,n,r)=>{if(!Number.isFinite(t)||t<n||t>r)throw Error(`${e} must be between ${n} and ${r}.`)};if(o(`Width`,a.width,6,30),o(`Depth`,a.depth,5,24),o(`Floors`,a.floors,1,12),!Number.isInteger(a.floors))throw Error(`Floors must be an integer.`);if(o(`Floor height`,a.floorHeight,a.kind===`house`?2.8:2.2,5),o(`Roof height`,a.roofHeight,.6,3),typeof a.balcony!=`boolean`)throw Error(`Balcony must be boolean.`);if(![`split`,`plain`].includes(a.windowStyle))throw Error(`Invalid building window style.`);for(let e of Object.values(a.colors))if(!/^#[0-9a-f]{6}$/i.test(e))throw Error(`Building colors must use six-digit hex notation.`);return a}function $c(e,t={}){let n=Qc(e,t),r=n.kind===`house`?Yc(n):Xc(n);return r.userData.buildingPresetId=e,r.userData.building={kind:n.kind,width:n.width,depth:n.depth,floors:n.floors,floorHeight:n.floorHeight,roof:n.roof,roofHeight:n.roofHeight,balcony:n.balcony,windowStyle:n.windowStyle,palette:n.palette,colors:{...n.colors}},r}function el(e,t=`#b97553`){let n=new X(.85),{box:r,mesh:i}=n,a=n.root;a.name=`riverside-small-boat`;let o=new Qe;o.moveTo(-.95,-1.7),o.lineTo(-.8,1.7),o.lineTo(0,2.65),o.lineTo(.8,1.7),o.lineTo(.95,-1.7),o.lineTo(.65,-2),o.lineTo(-.65,-2),o.closePath();let s=new D(o,{depth:.46,bevelEnabled:!0,bevelSize:.06,bevelThickness:.04,bevelSegments:1});s.rotateX(Math.PI/2),i(s,t,0,.24,0,a),r(1.37,.11,3.1,`#d4bc86`,0,.28,-.15,a),r(1.08,.77,1.52,`#eee6cd`,0,.72,-.49,a),r(.89,.41,.04,`#6d8990`,0,.87,.29,a);for(let e of[-1,1])r(.045,.37,.74,`#6d8990`,e*.56,.87,-.45,a);r(1.25,.09,1.75,`#adbbb1`,0,1.15,-.45,a);for(let e of[-1,1])r(.035,.39,2.45,`#9f9f83`,e*.81,.51,.3,a);let c=r(1.2,.015,3.2,`#abcacc`,0,.045,-3.1,a);return c.name=`boat-water-wake`,a}function tl(e,t=1){let n=new X(.85),r=n.root,{box:i}=n;r.name=`riverside-bench`;for(let e of[-1.1,1.1])i(.12,.51,.6,`#627b75`,0+e,.45,0);for(let e=0;e<4;e++)i(2.7,.07,.12,`#b99161`,0,.71,-.18+e*.13);for(let e=0;e<3;e++)i(2.7,.12,.06,`#b99161`,0,.9+e*.14,0+t*.26);return r}function nl(e){let t=new X(.85),n=t.root,{box:r,mesh:i}=t;return n.name=`promenade-lamp`,((e,t,n,r,a,o)=>i(new B(e,e,t,8),n,r,a,o))(.07,4.4,`#6c827b`,0,2.2,0),r(.48,.11,.5,`#6c827b`,0,4.4,0),r(.4,.07,.42,`#fff0c9`,0,4.31,0),n}function rl(e,t=19,n=14,r=7){let i=new X(.85),a=i.root,{mesh:o}=i;a.name=`landscape-hill`;for(let e of[`#91a486`,`#a8b49c`])ia(i.mat(e),`grass`);return o(new C(1,1),`#91a486`,0,.12,0).scale.set(t,n,r),o(new C(1,0),`#a8b49c`,0+t*.08,n*.42,0).scale.set(t*.56,n*.6,r*.61),a}function il(e){let t=new X(.85),n=t.root,{box:r,mesh:i}=t;n.name=`pocket-park`,ia(t.mat(`#b7c899`),`grass`),ia(t.mat(`#d0c5ad`),`paving`),ia(t.mat(`#b6baae`),`paving`),ia(t.mat(`#7aafb0`),`water`);let a=(e,t,n,r,a,o)=>i(new B(e,e,t,8),n,r,a,o);return r(16,.045,10,`#b7c899`,0,-.005,0).castShadow=!1,r(1.5,.05,10,`#d0c5ad`,0,.008,0).castShadow=!1,r(16,.05,1.5,`#d0c5ad`,0,.009,0).castShadow=!1,a(2.2,.22,`#b6baae`,0,.08,0),a(1.75,.16,`#7aafb0`,0,.22,0),n}function al(e,t=0){let n=new X(.85),r=n.root,{mesh:i}=n;r.name=`rock-and-reed-bank`,i(new C(.9,0),t%3?`#929e8e`:`#b0b9a2`,0,.2,0).scale.set(1.7,.8,.9);let a=As(e,t);return a.position.set(0,.18,.4),r.add(a),r}var ol=[Z(90,$(`vehicle.truck.container-trailer`,`Traktor dan trailer petikemas`,`vehicles`,`Traktor tiga gandar dan rangka trailer pelabuhan, memakai model dan sambungan yang sama dengan simulator.`,[`truk`,`trailer`,`pelabuhan`,`beranimasi`],e=>{let t=_s(`truck.container-trailer`,{palette:e});return t.trailer.position.z=-t.spec.hitchOffset,{root:t.root,update(e){for(let n of[...t.tractorWheels,...t.trailerWheels])n.rotation.x=e*1.4/((n.userData.radius??.49)*.7)}}})),Z(3,$(`vehicle.cargo-barge`,`Kapal barang sungai`,`vehicles`,`Kapal rendah dengan kontainer, kabin, fender, tali tambat dan lampu navigasi.`,[`kapal`,`pelabuhan`,`barang`,`beranimasi`],e=>{let{root:t}=Lc(e);return{root:t,update(e){t.position.y=Math.sin(e*1.4)*.035,t.rotation.z=Math.sin(e)*.01}}})),Z(6,$(`vehicle.pertamina-tanker`,`Mobil tangki Pertamina`,`vehicles`,`Mobil BBM tiga gandar, tangki silinder, livery Pertamina, manway dan perlengkapan pompa.`,[`Pertamina`,`BBM`,`mobil tangki`,`distribusi`,`beranimasi`],e=>Ac(Nc(e)))),Z(16,xc(`vehicle.truck.box`,`Truk boks`,`vehicles`,`truck`,0,`Kabin dan boks pengiriman.`)),Z(17,xc(`vehicle.truck.flatbed`,`Truk bak terbuka`,`vehicles`,`truck`,1,`Truk barang dengan bak terbuka.`)),Z(18,xc(`vehicle.truck.van`,`Van pengiriman`,`vehicles`,`truck`,2,`Van ringkas dengan kabin dan bodi pengiriman.`)),Z(19,xc(`vehicle.forklift.compact`,`Forklift kompak`,`vehicles`,`forklift`,0,`Forklift ringan dengan garpu dan tiang angkat.`)),Z(20,xc(`vehicle.forklift.loaded`,`Forklift bermuatan`,`vehicles`,`forklift`,1,`Forklift dan palet terangkat.`)),Z(21,xc(`vehicle.forklift.heavy`,`Forklift heavy-duty`,`vehicles`,`forklift`,2,`Forklift berbodi lebih besar.`)),Z(22,$(`vehicle.car.compact`,`Mobil kompak`,`vehicles`,`Model mobil yang digunakan lalu lintas stasiun.`,[`mobil`,`beranimasi`],e=>Ac(Fc(jc(e),0)))),Z(23,$(`vehicle.car.hatchback`,`Mobil hatchback`,`vehicles`,`Mobil varian panjang dari lalu lintas stasiun.`,[`mobil`,`beranimasi`],e=>Ac(Fc(jc(e),1)))),Z(24,$(`vehicle.car.parked`,`Mobil parkir plaza`,`vehicles`,`Model mobil statis yang sama dengan area parkir stasiun.`,[`mobil`,`parkir`],e=>Pc(jc(e)))),Z(25,$(`vehicle.motorcycle`,`Motor dan pengendara`,`vehicles`,`Motor yang sama dengan traffic, lengkap pengendara berhelm.`,[`motor`,`helm`,`beranimasi`],e=>Ac(Ic(jc(e),2)))),Z(26,$(`vehicle.boat.fishing`,`Perahu sungai`,`vehicles`,`Perahu kecil berkabin yang digunakan pada sungai.`,[`perahu`,`beranimasi`],e=>{let t=el(e);return{root:t,update(e){t.position.y=Math.sin(e*1.4)*.035,t.rotation.z=Math.sin(e)*.013}}})),Z(91,$(`vehicle.truck.pickup`,`Pikap hasil kebun`,`vehicles`,`Pikap bak terbuka pengangkut panen dari ladang utara Riverside ke gudang.`,[`pikap`,`truk`,`kebun`,`beranimasi`],e=>Ac(_s(`truck.pickup`,{palette:e}))))];function sl(e,t,n,r,i,a,o,s=.3){let{box:c,cylinder:l}=e,u=a/2;for(let a of[-1,1]){let l=e.seasonal(c(i,.16,u/Math.cos(s),o,t,n+u*Math.tan(s)/2,r+a*u/2),`roof`);l.rotation.x=a*s;for(let n=t-i/2+.12;n<t+i/2;n+=.42){let t=e.seasonal(c(.075,.045,u/Math.cos(s),`#c68465`,n,l.position.y+.105,l.position.z),`roof`);t.rotation.x=l.rotation.x}}e.seasonal(l(.13,i,`#a05e45`,t,n+u*Math.tan(s)+.12,r),`roof`).rotation.z=Math.PI/2}function cl(e){let t=new X,n=t.root,{box:r,mesh:i,label:a}=t;n.name=`station-building`;let o=e===`sage`?`#4c8276`:e===`clay`?`#ad674f`:`#325c88`;r(26,.3,7.8,`#b9b6a8`,-19,.15,-10),r(25,3.35,6.7,`#f5edd8`,-19,1.97,-10),r(25.15,.58,6.85,`#c9bb9e`,-19,.59,-10),((e,n,r,i,a,o,s=.3)=>sl(t,e,n,r,i,a,o,s))(-19,3.78,-10,27,8.2,`#b97455`);let s=new Qe;s.moveTo(-3.35,0),s.lineTo(3.35,0),s.lineTo(0,4.1*Math.tan(.3)),s.closePath();for(let e of[-1,1]){let t=i(new D(s,{depth:.08,bevelEnabled:!1}),`#f5edd8`,-19+e*12.5,3.64,-10);t.rotation.y=Math.PI/2}for(let e=-30;e<=-8;e+=3.65)if(!(Math.abs(e- -19)<2.5))for(let t of[-1,1]){let n=-10+t*3.39;r(1.75,1.45,.1,`#697f81`,e,2.15,n);for(let i of[-.92,0,.92])r(.075,1.6,.13,`#ffffff`,e+i,2.15,n+t*.04);for(let i of[-.77,.77])r(1.93,.075,.13,`#ffffff`,e,2.15+i,n+t*.04);r(1.2,.095,.04,`#a0b7ad`,e,2.58,n+t*.08)}for(let e of[-1,1]){r(3.7,2.8,.16,`#436574`,-19,1.71,-10+e*3.45),r(.09,2.8,.2,`#f0e7d2`,-19,1.71,-10+e*3.54),r(3.6,.09,.2,`#f0e7d2`,-19,2.6,-10+e*3.54),r(5.9,.72,.16,`#f9f6e9`,-19,3.27,-10+e*3.53),a(`STASIUN RIVERSIDE`,.39,`#355568`,-19,3.11,-10+e*3.63,e>0?0:Math.PI);for(let t=0;t<3;t++)r(5.5,.12,.5+t*.6,`#b9b6a8`,-19,.3-t*.09,-10+e*(3.85+t*.3))}r(5.8,1,.18,`#f8f4e5`,-19,5.68,-9.9),a(`KAI`,.72,`#355b8a`,-19,5.34,-9.79),r(1.9,.07,.08,`#dd8752`,-18.9,5.23,-9.75).rotation.z=.08,a(`LOKET`,.2,o,-29.5,3.08,-6.47),a(`RUANG TUNGGU`,.18,o,-9.9,3.08,-6.47);for(let e of n.children)e.position.x-=-19,e.position.z-=-10;return n}function ll(e){let t=new X,n=t.root,{box:r,label:i}=t;n.name=`station-baggage-building`;let a=e===`sage`?`#4c8276`:e===`clay`?`#ad674f`:`#325c88`;r(6.7,2.45,4.1,`#e7dfc9`,15.2,1.24,-10),((e,n,r,i,a,o,s=.3)=>sl(t,e,n,r,i,a,o,s))(15.2,2.57,-10,7.3,4.8,`#b97455`),r(2,1.8,.1,`#6c8181`,15.2,.95,-7.9);for(let e=.35;e<1.9;e+=.22)r(2.02,.025,.12,`#a2afaa`,15.2,e,-7.81);i(`BAGASI & LOGISTIK`,.23,a,15.2,2.17,-7.82);for(let e of n.children)e.position.x-=15.2,e.position.z+=10;return n}function ul(e){let t=new X,{box:n,cylinder:r,label:i}=t,a=t.root;a.name=`kopdes-building`;let o=`#f2f0e7`,s=`#b23230`,c=`#323b3e`,l=`#bdc6c9`,u=e===`sage`?`#487366`:e===`clay`?`#9a674d`:`#426486`;t.mat(l).metalness=.3,t.mat(l).roughness=.52;let d=(e,t,r=.065)=>{let i=new R(...e),a=new R(...t),o=a.clone().sub(i),s=i.add(a).multiplyScalar(.5),l=n(r,o.length(),r,c,s.x,s.y,s.z);return l.quaternion.setFromUnitVectors(new R(0,1,0),o.normalize()),l};n(32,.2,9,`#abaea5`,0,.1,0),n(31.6,.035,8.55,`#969b94`,0,.215,0),n(32,5.32,.24,o,0,2.86,-4.38);for(let e of[-1,1])n(.24,5.32,8.78,o,e*15.88,2.86,0),n(.26,.32,8.8,`#cccfc6`,e*15.88,.38,0);n(32,.32,.27,`#cccfc6`,0,.38,-4.4),n(32,.92,.32,o,0,5.05,4.32),n(5.15,4.35,.26,`#969f9e`,6.7,2.38,4.38),n(5.12,.24,.3,`#bcc4bd`,6.7,.35,4.4);for(let e of[-15.78,-12,-8,-4,0,4,9.4,15.78])n(.28,5.42,.44,o,e,2.93,4.28),n(.38,.21,.5,`#cdd1c8`,e,.305,4.28),n(.075,.65,.1,c,e,5.79,4.48);for(let e of[-4.42,4.42]){n(31.75,.56,.08,`#252e31`,0,5.82,e);for(let t of[5.5,6.13])n(32,.08,.1,c,0,t,e+Math.sign(e)*.05);for(let t=-15.75;t<15.5;t+=1.65)d([t,5.53,e+Math.sign(e)*.1],[t+.8,6.08,e+Math.sign(e)*.1]),d([t+.8,6.08,e+Math.sign(e)*.1],[t+1.6,5.53,e+Math.sign(e)*.1])}for(let e of[-1,1]){n(.08,.6,8.7,`#252e31`,e*15.95,5.82,0);for(let t of[5.51,6.11])n(.1,.07,8.9,c,e*16,t,0)}for(let[e,r]of[-14,-10,-6,-2,2].entries()){let i=.25+(e===2?1.65:e===4?1.1:0),a=4.53,o=a-i;n(3.62,o,.12,s,r,i+o/2,4.22);for(let e=i+.13;e<a;e+=.22)n(3.59,.037,.025,`#922b2b`,r,e,4.295);n(3.7,.095,.17,`#6c3735`,r,i,4.25),n(.18,.065,.05,`#e0d2bd`,r,i+.3,4.3);for(let e of[-1.84,1.84])n(.07,4.38,.13,c,r+e,2.4,4.34);n(3.68,.1,.21,c,r,4.59,4.3),n(3.64,.045,.46,`#c4c7bb`,r,.235,4.17),t.seasonal(n(3.87,.09,.74,l,r,4.68,4.72),`roof`).rotation.x=.035;for(let e of[-1.68,1.68])d([r+e,4.21,4.45],[r+e,4.62,5.02],.06);n(.3,.1,.08,`#fff0c9`,r,4.49,4.4)}let f=5.08,p=Math.atan(.81/f),m=f/Math.cos(p);for(let e of[-1,1]){let i=e*f/2;t.seasonal(n(33.4,.105,m,l,0,6.595000000000001,i),`roof`).rotation.x=e*p;for(let r=-16.5;r<=16.5;r+=.46)t.seasonal(n(.042,.043,m,`#d3d9d8`,r,6.668000000000001,i),`roof`).rotation.x=e*p;t.seasonal(n(33.45,.17,.14,`#9eaaaf`,0,6.17,e*5.13),`roof`);for(let t of[-15.65,15.65])r(.065,5.7,`#9eaaaf`,t,3.04,e*4.64),d([t,5.87,e*4.64],[t,6.17,e*5.1],.09),n(.2,.07,.4,`#858f8e`,t,.25,e*4.77)}t.seasonal(n(33.45,.12,.22,`#d3d9d8`,0,7.015,0),`roof`);let h=6.7,g=4.545;n(.14,.93,.06,s,6.2,3.08,g),n(1.13,.12,.06,s,h,2.64,g),n(.14,.86,.06,s,7.2,3.035,g),n(1.45,.15,.06,s,6.58,3.69,g).rotation.z=.48;for(let e of[-.19,.19])for(let t of[2.98,3.27])n(.24,.22,.04,`#e6e7dc`,h+e,t,4.59);i(`KOPDES`,.4,s,h,2.05,4.58),i(`MERAH PUTIH`,.3,s,h,1.6,4.58),i(`KOPERASI DESA`,.21,c,h,1.12,4.58),i(`RIVERSIDE`,.24,c,h,.76,4.58);let _=(e,t,r,i=.8,a=.75,o=.72)=>{n(i,a,o,`#c1a075`,e,t+a/2,r),n(i+.012,.045,o+.012,`#94794f`,e,t+a*.75,r),n(.06,a+.01,o+.025,`#e0c5a0`,e,t+a/2,r)},v=(e,t)=>{for(let r of[-.46,0,.46])n(.15,.14,1.55,`#96774f`,e+r,.32,t);for(let r=0;r<4;r++)n(1.6,.065,.31,`#b59463`,e,.42,t-.59+r*.39);for(let n of[-.4,.4])_(e+n,.46,t,.73,.8,1.2)};n(6.02,.035,.44,`#c4c7bb`,12.64,.237,4.17),n(5.86,.12,.18,c,12.64,4.61,4.36),n(.95,.055,.16,`#fff0c9`,12.65,4.96,2.8);for(let e of[10.1,14.6]){for(let t of[-.66,.66])for(let r of[-.9,2.2])n(.09,3.1,.09,u,e+t,1.79,r);for(let t of[.51,1.74,2.95]){n(1.5,.1,3.3,`#ab855d`,e,t,.65),n(1.5,.13,.075,u,e,t-.08,2.26);for(let n of[-.3,1.25])_(e,t+.07,n,1.15,.85,1.15)}}return v(12.5,2.65),v(11.9,-2.9),v(-6,2.7),v(2,2.75),n(.28,1.75,.45,`#697f81`,8.85,1.24,4.54),a}var dl=[Z(27,xc(`building.warehouse.three-bay`,`Gudang tiga bay`,`buildings`,`warehouse`,0,`Gudang modular dengan tiga loading bay.`)),Z(28,xc(`building.warehouse.gabled`,`Gudang atap pelana`,`buildings`,`warehouse`,1,`Gudang berukuran lebih kecil dengan dua pintu.`)),Z(29,xc(`building.warehouse.office`,`Gudang dan kantor`,`buildings`,`warehouse`,2,`Gudang dengan annex kantor.`)),Z(30,$(`building.station`,`Stasiun Riverside`,`buildings`,`Bangunan stasiun yang sama dengan dunia, termasuk signage dan tangga.`,[`stasiun`,`KAI`],cl)),Z(31,$(`building.kopdes`,`Kopdes Merah Putih`,`buildings`,`Koperasi desa dengan atap seng panjang, lima pintu merah, ventilasi baja dan bay logistik terbuka.`,[`kopdes`,`koperasi`,`merah putih`,`logistik`],ul)),Z(33,$(`building.baggage`,`Kantor bagasi`,`buildings`,`Kantor bagasi dan logistik di samping stasiun.`,[`stasiun`,`bagasi`],ll)),Z(34,$(`building.city-apartment`,`Apartemen kota`,`buildings`,`Hunian empat lantai dengan balkon, tangki air, dan jendela malam.`,[`kota`,`hunian`,`malam`],e=>$c(`city.apartment`,{palette:e}))),Z(35,$(`building.city-shops`,`Deretan ruko`,`buildings`,`Ruko dua lantai dengan etalase, kanopi, dan papan toko.`,[`kota`,`toko`,`malam`],e=>$c(`city.shops`,{palette:e}))),Z(36,$(`building.city-office`,`Kantor kota`,`buildings`,`Kantor tiga lantai dengan jendela lebar dan peralatan atap.`,[`kota`,`kantor`,`malam`],e=>$c(`city.office`,{palette:e}))),Z(37,$(`building.house.cream`,`Rumah desa cream`,`buildings`,`Rumah desa dengan genteng dan jendela.`,[`desa`,`rumah`],e=>$c(`house.tropical`,{palette:e}))),Z(38,$(`building.house.tan`,`Rumah desa tan`,`buildings`,`Rumah desa dengan bentuk standar yang sama dan warna tan.`,[`desa`,`rumah`],e=>$c(`house.tropical-tan`,{palette:e}))),Z(39,$(`building.house.sage`,`Rumah desa sage`,`buildings`,`Rumah desa varian warna hijau lembut.`,[`desa`,`rumah`],e=>$c(`house.tropical-sage`,{palette:e})))];function fl(e){let t=new G({color:`#ffffff`,vertexColors:!0,roughness:.86,flatShading:!0}),n=new Set,r=new Set;for(let i of e){let e=i.children.filter(e=>e instanceof q&&e.material instanceof G);if(!e.length)continue;let a=e.map(e=>{e.updateMatrix();let t=e.geometry.index?e.geometry.toNonIndexed():e.geometry.clone();t.applyMatrix4(e.matrix);let i=t.attributes.position.count,a=new Float32Array(i*3);for(let t=0;t<i;t++)a[t*3]=e.material.color.r,a[t*3+1]=e.material.color.g,a[t*3+2]=e.material.color.b;return t.setAttribute(`color`,new nt(a,3)),n.add(e.geometry),r.add(e.material),t}),o;try{o=_t(a,!1)}finally{a.forEach(e=>e.dispose())}if(!o)throw Error(`Worker rigid parts could not be merged.`);o.computeBoundingSphere(),e.forEach(e=>e.removeFromParent());let s=new q(o,t);s.name=`yard-worker-rigid-part`,s.castShadow=s.receiveShadow=!0,i.add(s)}n.forEach(e=>e.dispose()),r.forEach(e=>e.dispose())}function pl(e){let t=[`left`,`right`].map(t=>e.getObjectByName(`yard-worker-leg-`+t)),n=[`left`,`right`].map(t=>e.getObjectByName(`yard-worker-arm-`+t));return{root:e,legs:t,arms:n,pose(r,i){let a=Number.isFinite(r)?r:0,o=Math.sin(a*4.2),s=i===`walk`;t[0].rotation.x=s?o*.34:0,t[1].rotation.x=-t[0].rotation.x,n[0].rotation.set(s?-o*.23:i===`work`?-.78:-.06,0,0),n[1].rotation.set(s?o*.23:i===`work`?-.7+Math.sin(a*1.8)*.08:-.06,0,i===`signal`?-1.9+Math.sin(a*2.2)*.13:0),e.rotation.z=s?o*.011:0}}}function ml(e=`blue`,t=0){let n=new X,{root:r,box:i,cylinder:a}=n;r.name=`yard-worker`,r.userData={category:`ornaments`,variant:t},as(r);let o=(t%3+3)%3,s=(e===`clay`?[`#c98b55`,`#7e9690`,`#baaa75`]:[`#cd7939`,`#648e89`,`#b5a36a`])[o],c=o===1?`#e6e3d4`:`#e3bd58`;i(.47,.6,.3,s,0,1.05,0);for(let e of[-.145,.145])i(.05,.55,.027,`#e7e5c7`,e,1.04,.166);i(.47,.045,.026,`#e7e5c7`,0,.94,.166),i(.11,.14,.025,`#3d626e`,.09,1.16,.182),i(.13,.035,.31,`#485d65`,0,.77,0),a(.12,.13,`#cfab87`,0,1.4,0),n.mesh(new C(.175,1),`#cfab87`,0,1.55,0),i(.22,.045,.03,`#425a64`,0,1.57,.16);let l=n.mesh(new at(.21,10,6),c,0,1.72,0);l.scale.y=.6,a(.24,.035,c,0,1.69,0);let u=[r];for(let[e,t]of[-1,1].entries()){let n=new g;n.name=`yard-worker-leg-`+(e?`right`:`left`),n.position.set(t*.125,.75,0),r.add(n),u.push(n),i(.18,.61,.2,`#465e68`,0,-.3,0,n),i(.19,.04,.205,`#d4d8bf`,0,-.46,0,n),i(.22,.13,.33,`#344c54`,0,-.65,.055,n);let a=new g;a.name=`yard-worker-arm-`+(e?`right`:`left`),a.position.set(t*.3,1.26,0),r.add(a),u.push(a),i(.15,.48,.16,s,0,-.22,0,a),i(.157,.042,.166,`#e7e5c7`,0,-.3,0,a),i(.145,.13,.15,`#c7bda0`,0,-.52,0,a)}fl(u);let d=pl(r);return d.pose(0,`idle`),d}function hl(e,t=0){let{root:n,box:r,mesh:i}=new X;n.name=`animated-station-passenger`,as(n);let a=t%3,o=(e===`clay`?[`#c58b69`,`#869b81`,`#b39775`]:[`#648f9a`,`#c28c68`,`#88946d`])[a];if(r(.34,.46,.23,o,0,.67,0),i(new C(.15,1),a===2?`#ba8d69`:`#d7b18b`,0,1.02,0),i(new C(.156,1),a===1?`#776152`:`#51453b`,0,1.085,-.025).scale.y=.6,a===2){r(.27,.32,.11,`#566d86`,0,.65,-.18);for(let e of[-.11,.11])r(.035,.4,.026,`#566d86`,e,.68,.13)}let s=[],c=[];for(let e of[-1,1]){let t=new g;t.position.set(e*.095,.43,0),n.add(t),s.push(t),r(.12,.36,.13,`#3d5058`,0,-.18,0,t),r(.15,.075,.23,`#495554`,0,-.38,.05,t);let i=new g;i.position.set(e*.225,.84,0),n.add(i),c.push(i),r(.085,.34,.12,o,0,-.16,0,i),r(.08,.09,.09,`#d7b18b`,0,-.35,0,i),e===1&&a===1&&(r(.17,.24,.18,`#ab7759`,0,-.48,0,i),r(.08,.05,.07,`#5e635e`,0,-.34,0,i))}let l=new G({vertexColors:!0,roughness:.86,flatShading:!0}),u=new Set,d=new Set;for(let e of[n,...s,...c]){let t=e.children.filter(e=>e instanceof q),n=t.map(e=>{e.updateMatrix();let t=e.geometry.index?e.geometry.toNonIndexed():e.geometry.clone();t.applyMatrix4(e.matrix);let n=new Float32Array(t.attributes.position.count*3);for(let r=0;r<t.attributes.position.count;r++)e.material.color.toArray(n,r*3);return t.setAttribute(`color`,new nt(n,3)),u.add(e.geometry),d.add(e.material),t}),r;try{r=_t(n)}finally{n.forEach(e=>e.dispose())}if(!r)throw Error(`Passenger rigid parts could not be baked.`);t.forEach(e=>e.removeFromParent());let i=new q(r,l);i.castShadow=i.receiveShadow=!0,e.add(i)}return u.forEach(e=>e.dispose()),d.forEach(e=>e.dispose()),{root:n,pose(e,t){let n=t?Math.sin(e*5.2):0;s[0].rotation.x=n*.4,s[1].rotation.x=-n*.4,c[0].rotation.x=-n*.25,c[1].rotation.x=n*.25}}}function gl(e,t=!1){let n=new X,r=n.root,{box:i}=n;r.name=`station-bench`;let a=r;t&&(a.rotation.y=Math.PI);for(let e of[-.86,.86])i(.09,.48,.57,`#4d6264`,e,.25,0,a),i(.07,.8,.07,`#4d6264`,e,.65,-.25,a),i(.08,.05,.6,`#4d6264`,e,.78,0,a);for(let e=0;e<4;e++)i(2.05,.075,.12,`#bb9161`,0,.53,-.18+e*.13,a);for(let e=0;e<3;e++)i(2.05,.12,.07,`#bb9161`,0,.72+e*.15,-.27,a);return r}function _l(e,t=!1){let n=new X,r=n.root,{box:i}=n;if(r.name=t?`tree-planter`:`flower-planter`,i(1.35,.5,1.15,`#c0b8a6`,0,.25,0),i(1.2,.04,1,`#766853`,0,.52,0),t){let t=qs(`tree`,0,e);t.scale.setScalar(.85),t.position.set(0,.52,0),r.add(t)}else{let t=ks(e);t.position.set(0,.54,0),r.add(t)}return r}function vl(e,t=4.3){let n=new X,r=n.root,{box:i,cylinder:a}=n;r.name=`station-lamp`,a(.18,.35,`#aeb5b0`,0,.175,0),a(.065,t,`#5f7376`,0,t/2,0),i(.72,.1,.2,`#5f7376`,0,t,0);for(let e of[-1,1])i(.48,.16,.36,`#5f7376`,0+e*.34,t-.03,0),i(.4,.035,.3,`#fff0c9`,0+e*.34,t-.13,0);return r}function yl(e,t=`RIVERSIDE`,n=void 0){let r=new X,i=r.root,{box:a,cylinder:o,label:s}=r;i.name=`station-sign`;let c=e===`sage`?`#4c8276`:e===`clay`?`#ad674f`:`#325c88`;for(let e of[-1,1])o(.045,2.6,`#65757a`,0+e*1.7,1.7,0);return a(3.75,.72,.12,`#f4f1e6`,0,2.74,0),a(3.75,.1,.14,c,0,2.4,0),s(t,.25,`#344d5e`,0,2.67,.07),s(t,.25,`#344d5e`,0,2.67,-.07,Math.PI),n&&(a(.6,.6,.14,c,2.2,2.75,0),s(n,.36,`#ffffff`,2.2,2.58,.09)),i}function bl(e,t=`#87986c`,n=0){let r=new X,i=r.root,{box:a,mesh:o}=r;i.name=`station-passenger`;let s=i;s.rotation.y=n;for(let e of[-1,1])a(.11,.4,.12,`#3d5058`,e*.1,.23,0,s),a(.14,.075,.23,`#495554`,e*.1,.06,.06,s),a(.09,.36,.12,t,e*.24,.63,0,s);return a(.37,.47,.23,t,0,.65,0,s),o(new C(.16,1),`#d7b18b`,0,1.02,0,s),o(new C(.163,1),`#51453b`,0,1.075,-.025,s).scale.y=.6,a(.25,.35,.2,`#ab7759`,.34,.22,0,s),a(.12,.05,.06,`#5e635e`,.34,.45,0,s),s}function xl(e,t=12){let n=new X,r=n.root,{box:i}=n,a=-t/2,o=t/2;r.name=`station-fence`;for(let e=a;e<=o;e+=2.2){i(.075,.95,.075,`#75837c`,e,.5,0);for(let t=0;t<4&&e+t*.48<=o;t++)i(.035,.72,.035,`#75837c`,e+t*.48,.55,0)}for(let e of[.29,.89])i(o-a,.05,.05,`#75837c`,(a+o)/2,e,0);return r}function Sl(e){let t=new X,n=t.root,{mesh:r,cylinder:i}=t;n.name=`station-palm`,ia(t.mat(`#668e6b`),`evergreen`),i(.14,4.7,`#a5936c`,0,2.35,-12.7);for(let e=0;e<7;e++){let t=e*Math.PI*2/7;r(new xe(.48,2.7,4),`#668e6b`,0+Math.sin(t)*1,4.65,-12.7+Math.cos(t)*1).quaternion.setFromUnitVectors(new R(0,1,0),new R(Math.sin(t),-.18,Math.cos(t)).normalize())}for(let e of n.children)e.position.z+=12.7;return n}function Cl(e,t=28,n=3.6,r=1){let i=new X,a=i.root,{box:o}=i,s=r*n/2;a.name=`station-platform`,o(t,.38,n,`#b8b6a9`,0,.19,0),i.seasonal(o(t-.08,.055,n-.08,`#eee6d3`,0,.407,0),`paving`),o(t,.07,.14,`#f7f2e5`,0,.4,s),o(t,.025,.23,`#e4b850`,0,.45,s+(s<0?.22:-.22));for(let e=0-t/2+.3;e<0+t/2;e+=.65)for(let t=0;t<2;t++)o(.075,.017,.075,`#c39e42`,e,.469,s+(s<0?.16+t*.1:-.16-t*.1));return a}function wl(e,t=22,n=!1){let r=new X,i=r.root,{box:a,beam:o}=r,s=t;i.name=`station-canopy`;let c=e===`sage`?`#4c8276`:e===`clay`?`#ad674f`:`#325c88`;((e,t,n,i,a,o,s=.3)=>sl(r,e,t,n,i,a,o,s))(0,3.62,0,s,3.35,`#b97455`,.14);for(let e=0-s/2+1;e<=0+s/2-.5;e+=5)a(.12,3.3,.12,`#e9dfc6`,e,2.08,.9),a(.22,.38,.22,c,e,.62,.9),a(.07,.1,2.9,c,e,3.59,0),o(new R(e,2.9,.9),new R(e,3.55,-.2),.045,c);for(let t=0-s/2+3;t<0+s/2;t+=7){let r=gl(e,n);r.position.set(t,.39,.3),i.add(r)}return i}function Tl(e){let t=new X,n=t.root,{box:r,cylinder:i}=t;n.name=`station-clock`,i(.045,3.1,`#617778`,-18,1.94,-.9);let a=i(.48,.15,`#50656b`,-18,3.48,-.9);a.rotation.x=Math.PI/2;let o=i(.42,.17,`#f8f2e0`,-18,3.48,-.9);o.rotation.x=Math.PI/2;for(let e=0;e<12;e++){let t=e*Math.PI/6,n=r(.032,e%3?.06:.1,.022,`#536568`,-18+Math.sin(t)*.34,3.48+Math.cos(t)*.34,-.8);n.rotation.z=-t}let s=(e,t)=>{let i=new g;i.position.set(-18,3.48,-.78),i.name=t,n.add(i);let a=r(.035,e,.027,`#384e59`,0,e*.38,0,i);return a.name=t+`-mesh`,i},c=s(.3,`station-minute-hand`),l=s(.22,`station-hour-hand`);for(let e of n.children)e.position.x+=18,e.position.z+=.9;return{root:n,update:e=>{let t=40+Math.max(0,e)/60;c.rotation.z=-t/60*Math.PI*2,l.rotation.z=-(9+t/60)/12*Math.PI*2}}}var El=[Z(40,xc(`ornament.pallet.strapped`,`Kardus bertali`,`ornaments`,`pallet`,0,`Palet kayu dan kardus dengan tali pengikat.`)),Z(41,xc(`ornament.pallet.stacked`,`Kardus bertingkat`,`ornaments`,`pallet`,1,`Palet dengan tumpukan kardus tinggi.`)),Z(42,xc(`ornament.pallet.crate`,`Peti kayu`,`ornaments`,`pallet`,2,`Muatan bergaya peti kayu.`)),Z(43,xc(`ornament.pallet.empty`,`Palet kosong`,`ornaments`,`pallet`,3,`Palet kayu tanpa muatan.`)),Z(44,$(`ornament.bench.station`,`Bangku stasiun`,`ornaments`,`Bangku kayu dan rangka yang sama dengan peron.`,[`bangku`,`peron`],e=>gl(e))),Z(45,$(`ornament.bench.riverside`,`Bangku promenade`,`ornaments`,`Bangku lebar di tepi sungai.`,[`bangku`,`sungai`],e=>tl(e))),Z(46,$(`ornament.lamp.station`,`Lampu stasiun`,`ornaments`,`Tiang lampu dua kepala di peron dan plaza.`,[`lampu`,`malam`],e=>vl(e))),Z(47,$(`ornament.lamp.promenade`,`Lampu promenade`,`ornaments`,`Tiang lampu di sepanjang tanggul sungai.`,[`lampu`,`sungai`],nl)),Z(48,$(`ornament.planter.flower`,`Planter bunga`,`ornaments`,`Pot batu dengan semak dan bunga.`,[`tanaman`,`pot`],e=>_l(e))),Z(49,$(`ornament.planter.tree`,`Planter pohon`,`ornaments`,`Pot batu dengan pohon stasiun.`,[`tanaman`,`pot`],e=>_l(e,!0))),Z(50,$(`ornament.palm`,`Palm stasiun`,`ornaments`,`Palm low-poly yang membingkai bangunan stasiun.`,[`palm`,`tanaman`],Sl)),Z(51,$(`ornament.sign.station`,`Papan stasiun`,`ornaments`,`Signage Riverside dua sisi dan nomor jalur.`,[`signage`,`peron`],e=>yl(e,`RIVERSIDE`,`1`))),Z(52,$(`ornament.fence`,`Pagar stasiun`,`ornaments`,`Pagar rendah dengan tiang dan picket.`,[`pagar`],e=>xl(e))),Z(53,$(`ornament.person`,`Penumpang dan koper`,`ornaments`,`Figur penumpang yang sama dengan scene stasiun.`,[`orang`,`koper`],e=>bl(e))),Z(54,$(`ornament.clock`,`Jam peron`,`ornaments`,`Jam analog dengan jarum mengikuti waktu preview.`,[`jam`,`beranimasi`],Tl)),Z(55,$(`ornament.animated-passenger`,`Penumpang berjalan`,`ornaments`,`Penumpang dengan gerakan kaki dan tangan untuk peron serta naik-turun kereta.`,[`orang`,`penumpang`,`beranimasi`,`koper`],e=>{let t=hl(e,1);return{root:t.root,update(e){t.pose(e,Math.floor(e/6)%2==0)}}})),Z(56,$(`ornament.yard-worker`,`Petugas logistik berhelm`,`ornaments`,`Kru depot dan pelabuhan dengan helm, rompi reflektif, sepatu kerja dan gerakan inspeksi.`,[`orang`,`petugas`,`depot`,`pelabuhan`,`beranimasi`],e=>{let t=ml(e);return{root:t.root,update(e){let n=Math.floor(Math.max(0,e)/5)%3;t.pose(e,n===0?`walk`:n===1?`work`:`signal`)}}})),Z(57,$(`ornament.platform`,`Peron tactile`,`ornaments`,`Permukaan peron dengan garis kuning dan tactile.`,[`peron`],e=>Cl(e))),Z(58,$(`ornament.canopy`,`Shelter peron`,`ornaments`,`Kanopi genteng, penyangga, dan bangku peron.`,[`peron`,`kanopi`],e=>wl(e)))],Dl=(e,t)=>$(e,xs[t].label,`nature`,xs[t].description,[`Jacaranda`,`CC0`,`bertekstur`],e=>qs(`tree`,t,e)),Ol=[Z(59,Dl(`nature.tree.round`,0)),Z(60,Dl(`nature.tree.conifer`,1)),Z(61,Dl(`nature.tree.cluster`,2)),Z(62,$(`nature.hill`,`Bukit landscape`,`nature`,`Bukit faceted yang sama dengan landscape sungai.`,[`bukit`],e=>rl(e))),Z(63,$(`nature.park`,`Pocket park`,`nature`,`Taman kecil dengan jalan silang dan fountain.`,[`taman`],il)),Z(64,$(`nature.rock-reeds`,`Batu dan reed sungai`,`nature`,`Cluster batu, batang reed miring, daun melengkung, dan bulir tepi air.`,[`batu`,`sungai`],e=>al(e)))],kl=(e,t)=>({kind:`line`,from:e,to:t}),Al=(e,t,n,r)=>({kind:`cubic`,from:e,control1:t,control2:n,to:r});function jl(e,t){let n=e.knots;if(!n.length)throw Error(`Road grade needs at least one height knot`);if(t<=n[0][0])return n[0][1];for(let r=1;r<n.length;r++){let[i,a]=n[r],[o,s]=n[r-1];if(t>i)continue;let c=ft.clamp((t-o)/(i-o),0,1);return ft.lerp(s,a,e.interpolation===`smooth`?c*c*(3-2*c):c)}return n[n.length-1][1]}function Ml(e,t,n,r,i=0){let a=n;for(let n of r){let r=n.region;r&&(e<r.minX||e>r.maxX||t<r.minZ||t>r.maxZ)||(a=jl(n,n.axis===`x`?e:n.axis===`z`?t:i))}return a}var Nl=class{curve=new lt;length;grades;before=new R;after=new R;tangentScratch=new R;constructor(e,t=[]){if(this.grades=t,!e.length)throw Error(`Road path needs a segment`);let n,r=e=>new R(...e);for(let t of e){if((t.kind===`cubic`?[t.from,t.control1,t.control2,t.to]:[t.from,t.to]).some(e=>e.length!==3||e.some(e=>!Number.isFinite(e))))throw Error(`Invalid road point`);if(n&&r(n).distanceTo(r(t.from))>1e-4)throw Error(`Road segments must share an endpoint`);this.curve.add(t.kind===`line`?new Ue(r(t.from),r(t.to)):new ue(r(t.from),r(t.control1),r(t.control2),r(t.to))),n=t.to}for(let e of t){if(!e.knots.length)throw Error(`Road grade needs at least one height knot`);for(let[t,n]of e.knots.entries())if(!Number.isFinite(n[0]+n[1])||t>0&&n[0]<=e.knots[t-1][0])throw Error(`Road grade knots must be finite and ordered`)}if(this.curve.arcLengthDivisions=2048,this.length=this.curve.getLength(),this.length<=1e-4)throw Error(`Road path needs positive length`)}point(e,t){let n=ft.clamp(e,0,this.length);return this.curve.getPointAt(n/this.length,t),t.y=Ml(t.x,t.z,t.y,this.grades,n),t}sample(e,t,n,r=0){let i=ft.clamp(e,0,this.length);return this.point(i,t),this.point(i-.01,this.before),this.point(i+.01,this.after),n.copy(this.after).sub(this.before).normalize(),r&&(this.tangentScratch.set(n.z,0,-n.x).normalize(),t.addScaledVector(this.tangentScratch,r),t.y=Ml(t.x,t.z,t.y,this.grades,ft.clamp(e,0,this.length))),t}},Pl=(e,t=[])=>new Nl(e,t),Fl={asphalt:`#a0aeaf`,paint:`#f1eee0`,sidewalk:`#ddd8c7`,curb:`#e8e5d7`},Il=1e-5,Ll=class{surfaces=new Map;polygon(e,t,n){if(n.length<3)return;if(n.some(e=>!Number.isFinite(e.x+e.y+e.z)))throw Error(`Non-finite road surface`);let r=n.map(e=>new dt(e.x,e.z)),i=ve.triangulateShape(r,[]).filter(([e,t,r])=>Math.abs((n[t].x-n[e].x)*(n[r].z-n[e].z)-(n[t].z-n[e].z)*(n[r].x-n[e].x))>=Il*Il);if(!i.length)return;let a=this.surfaces.get(e);a||this.surfaces.set(e,a={positions:[],colors:[],indices:[]});let o=a.positions.length/3,s=new K(t),c=[...new Set(i.flat())],l=new Map(c.map((e,t)=>[e,t]));for(let e of c){let t=n[e];a.positions.push(t.x,t.y,t.z),a.colors.push(s.r,s.g,s.b)}for(let[e,t,r]of i){let i=n[e],s=n[t],c=n[r],u=(s.x-i.x)*(c.z-i.z)-(s.z-i.z)*(c.x-i.x);a.indices.push(o+l.get(e),o+l.get(u>0?r:t),o+l.get(u>0?t:r))}}finish(e){let t=new g;t.name=e;for(let[n,r]of this.surfaces){if(!r.indices.length)continue;let i=new Ae;i.setAttribute(`position`,new ht(r.positions,3)),i.setAttribute(`color`,new ht(r.colors,3)),i.setIndex(r.indices),i.computeVertexNormals(),i.computeBoundingBox(),i.computeBoundingSphere();let a=new G({vertexColors:!0,roughness:.95,polygonOffset:n===`paint`,polygonOffsetFactor:-1,polygonOffsetUnits:-1});n!==`paint`&&ia(a,`paving`);let o=new q(i,a);o.name=`${e}:${n}`,o.castShadow=!1,o.receiveShadow=!0,o.userData.roadSurface=n,t.add(o)}return t}};function Rl(e){let t=e.arms,n=Object.values(t).map(e=>e.width);if(!n.length||n.some(e=>!Number.isFinite(e)||e<=0)||Object.values(t).some(e=>!Number.isFinite(e.length)||e.length<=0)||!e.center.every(Number.isFinite)||!Number.isFinite(e.radius??1.2))throw Error(`Invalid junction arms`);let r=Math.max(t.north?.width??0,t.south?.width??0,Math.min(...n))/2,i=Math.max(t.east?.width??0,t.west?.width??0,Math.min(...n))/2,a=[],o=(e,t)=>{let n=a[a.length-1];(!n||Math.hypot(n.x-e,n.z-t)>Il)&&a.push({x:e,z:t})},s=t.north,c=t.east,l=t.south,u=t.west;o(-r,-i),s&&(o(-s.width/2,-i),o(-s.width/2,-Math.max(s.length,i)),o(s.width/2,-Math.max(s.length,i)),o(s.width/2,-i)),o(r,-i),c&&(o(r,-c.width/2),o(Math.max(c.length,r),-c.width/2),o(Math.max(c.length,r),c.width/2),o(r,c.width/2)),o(r,i),l&&(o(l.width/2,i),o(l.width/2,Math.max(l.length,i)),o(-l.width/2,Math.max(l.length,i)),o(-l.width/2,i)),o(-r,i),u&&(o(-r,u.width/2),o(-Math.max(u.length,r),u.width/2),o(-Math.max(u.length,r),-u.width/2),o(-r,-u.width/2));let d=!0;for(;d&&a.length>3;){d=!1;for(let e=0;e<a.length;e++){let t=a[(e+a.length-1)%a.length],n=a[e],r=a[(e+1)%a.length];if(Math.abs((n.x-t.x)*(r.z-n.z)-(n.z-t.z)*(r.x-n.x))<Il){a.splice(e,1),d=!0;break}}}let f=Math.max(0,e.radius??1.2),p=[],m=e=>!!(s&&Math.abs(e.z+Math.max(s.length,i))<Il||c&&Math.abs(e.x-Math.max(c.length,r))<Il||l&&Math.abs(e.z-Math.max(l.length,i))<Il||u&&Math.abs(e.x+Math.max(u.length,r))<Il);for(let e=0;e<a.length;e++){let t=a[(e+a.length-1)%a.length],n=a[e],r=a[(e+1)%a.length],i=Math.hypot(t.x-n.x,t.z-n.z),o=Math.hypot(r.x-n.x,r.z-n.z),s=m(n)?0:Math.min(f,i*(m(t)?1:.45),o*(m(r)?1:.45));if(s<Il){p.push(n);continue}let c={x:n.x+(t.x-n.x)*s/i,z:n.z+(t.z-n.z)*s/i},l={x:n.x+(r.x-n.x)*s/o,z:n.z+(r.z-n.z)*s/o},u=.5522847498,d={x:c.x+(n.x-c.x)*u,z:c.z+(n.z-c.z)*u},h={x:l.x+(n.x-l.x)*u,z:l.z+(n.z-l.z)*u};for(let e=0;e<=8;e++){let t=e/8,n=1-t;p.push({x:n*n*n*c.x+3*n*n*t*d.x+3*n*t*t*h.x+t*t*t*l.x,z:n*n*n*c.z+3*n*n*t*d.z+3*n*t*t*h.z+t*t*t*l.z})}}return p.map(t=>({x:t.x+e.center[0],z:t.z+e.center[2]}))}function zl(e,t){let n=!1;for(let r=0,i=t.length-1;r<t.length;i=r++){let a=t[r],o=t[i];a.z>e.z!=o.z>e.z&&e.x<(o.x-a.x)*(e.z-a.z)/(o.z-a.z)+a.x&&(n=!n)}return n}function Bl(e,t){let n=[],r=new R,i=new R,a=(t,n)=>zl(e.sample(t,r,i),n);for(let r of t){let t=a(0,r),i=t?0:-1,o=0;for(let s=Math.min(.5,e.length);;s=Math.min(s+.5,e.length)){let c=a(s,r);if(c!==t){let e=o,l=s;for(let n=0;n<24;n++){let n=(e+l)/2;a(n,r)===t?e=n:l=n}let u=(e+l)/2;c?i=u:n.push([i,u])}if(s>=e.length){c&&n.push([i,e.length]);break}t=c,o=s}}return n}function Vl(e,t){let n=t.map(([t,n])=>[Math.max(0,Math.min(t,n)),Math.min(e,Math.max(t,n))]).filter(([e,t])=>t>e).sort((e,t)=>e[0]-t[0]),r=[],i=0;for(let[e,t]of n)e>i+Il&&r.push([i,e]),i=Math.max(i,t);return i<e-Il&&r.push([i,e]),r}function Hl(e,t,n,r,i,a,o,s,c=0){let l=new R,u=new R,d=(e,n)=>(t.sample(e,l,u,n),{x:l.x,y:l.y+c,z:l.z}),f=Math.max(1,Math.ceil((a-i)/.65));for(let t=0;t<f;t++){let c=ft.lerp(i,a,t/f),l=ft.lerp(i,a,(t+1)/f);e.polygon(n,r,[d(c,o),d(l,o),d(l,s),d(c,s)])}}function Ul(e,t,n){let r=t.style??{},i=t.center[1],a=r.sidewalkWidth??.9;if(e.polygon(`asphalt`,r.asphalt??Fl.asphalt,n.map(e=>({...e,y:i}))),a<=0)return;let o=Math.max(t.arms.north?.width??0,t.arms.south?.width??0)/2,s=Math.max(t.arms.east?.width??0,t.arms.west?.width??0)/2,c=(e,n)=>{let[r,,i]=t.center;return Object.entries(t.arms).some(([t,a])=>{let c=t===`east`||t===`west`,l=(c?r:i)+(t===`west`||t===`north`?-1:1)*Math.max(a.length,c?o:s);return Math.abs((c?e.x:e.z)-l)<Il&&Math.abs((c?n.x:n.z)-l)<Il})},l=n.map((e,t)=>{let r=n[(t+n.length-1)%n.length],i=n[(t+1)%n.length],o=new dt(e.z-r.z,r.x-e.x).normalize(),s=new dt(i.z-e.z,e.x-i.x).normalize();if(c(r,e))return{x:e.x+s.x*a,z:e.z+s.y*a};if(c(e,i))return{x:e.x+o.x*a,z:e.z+o.y*a};let l=o.clone().add(s).normalize(),u=a/Math.max(.4,l.dot(o));return{x:e.x+l.x*u,z:e.z+l.y*u}});for(let t=0;t<n.length;t++){let o=(t+1)%n.length,s=n[t],u=n[o];if(c(s,u))continue;e.polygon(`sidewalk`,r.sidewalk??Fl.sidewalk,[{...s,y:i+.12},{...u,y:i+.12},{...l[o],y:i+.12},{...l[t],y:i+.12}]);let d={x:ft.lerp(s.x,l[t].x,.12/a),z:ft.lerp(s.z,l[t].z,.12/a)},f={x:ft.lerp(u.x,l[o].x,.12/a),z:ft.lerp(u.z,l[o].z,.12/a)};e.polygon(`curb`,r.curb??Fl.curb,[{...s,y:i+.125},{...u,y:i+.125},{...f,y:i+.125},{...d,y:i+.125}])}}function Wl(e){let t=new Ll,n=e.junctions??[],r=n.map(Rl);for(let n of e.roads){if(!Number.isFinite(n.width)||n.width<=0)throw Error(`Invalid width: ${n.id}`);let e=Pl(n.parts,n.grades),i=n.style??{},a=Vl(e.length,[...n.cuts??[],...Bl(e,r)]),o=n.width/2,s=i.sidewalkWidth??.9;for(let[n,r]of a){if(Hl(t,e,`asphalt`,i.asphalt??Fl.asphalt,n,r,-o,o),s>0)for(let a of[-1,1])Hl(t,e,`sidewalk`,i.sidewalk??Fl.sidewalk,n,r,a*o,a*(o+s),.12),Hl(t,e,`curb`,i.curb??Fl.curb,n,r,a*o,a*(o+.12),.125);if(i.edgeLines!==!1)for(let a of[-1,1])Hl(t,e,`paint`,i.paint??Fl.paint,n,r,a*(o-.3),a*(o-.4),.004);if(i.centerLine!==`none`){if(i.centerLine===`solid`)Hl(t,e,`paint`,i.paint??Fl.paint,n,r,-.055,.055,.005);else for(let a=Math.floor(n/4)*4;a<r;a+=4){let o=Math.max(n,a),s=Math.min(r,a+1.8);s>o+Il&&Hl(t,e,`paint`,i.paint??Fl.paint,o,s,-.055,.055,.005)}}}}for(let e=0;e<n.length;e++)Ul(t,n[e],r[e]);let i=t.finish(`roads:${e.id}`);return i.userData.roadNetworkId=e.id,i.userData.roadDefinition=e,i}var Gl=.08,Kl=1e-6;function ql(e,t,n){return(t-e.center[0])*Math.sin(e.yaw)+(n-e.center[2])*Math.cos(e.yaw)}function Jl(e,t,n){let r=ql(e,t,n),i=e.length/2,a=e.rampBefore??e.rampLength,o=e.rampAfter??e.rampLength,s=r<-i?(r+i+a)/a:r>i?(i+o-r)/o:1;return ft.lerp(e.center[1],e.deckHeight,ft.clamp(s,0,1))}function Yl(e,t,n,r){let i=[];for(let a=0;a<e.length;a++){let o=e[a],s=e[(a+1)%e.length],c=t(o)-n,l=t(s)-n,u=r?c>=-1e-6:c<=Kl,d=r?l>=-1e-6:l<=Kl;if(u&&i.push(o),u!==d){let e=c/(c-l);i.push({x:ft.lerp(o.x,s.x,e),y:ft.lerp(o.y,s.y,e),z:ft.lerp(o.z,s.z,e)})}}return i}function Xl(e,t){let n=t.reduce((e,n,r)=>{let i=t[(r+1)%t.length];return e+n.x*i.z-n.z*i.x},0),r=[],i=e;for(let e=0;e<t.length&&i.length>=3;e++){let a=t[e],o=t[(e+1)%t.length],s=n>0?1:-1,c=e=>s*((o.x-a.x)*(e.z-a.z)-(o.z-a.z)*(e.x-a.x)),l=Yl(i,c,0,!1);l.length>=3&&r.push(l),i=Yl(i,c,0,!0)}return r}function Zl(e){let t=e.points,n=t.map((e,n)=>{let r=t[Math.max(0,n-1)],i=t[Math.min(t.length-1,n+1)];return new dt(i[2]-r[2],r[0]-i[0]).normalize()}),r=e.headWidth/2+Gl,i=[];for(let a of[-1,1]){let o=a*e.gauge/2;for(let e=0;e<t.length-1;e++){let a=t[e],s=t[e+1],c=n[e],l=n[e+1];i.push([{x:a[0]+c.x*(o-r),y:0,z:a[2]+c.y*(o-r)},{x:s[0]+l.x*(o-r),y:0,z:s[2]+l.y*(o-r)},{x:s[0]+l.x*(o+r),y:0,z:s[2]+l.y*(o+r)},{x:a[0]+c.x*(o+r),y:0,z:a[2]+c.y*(o+r)}])}}return i}function Ql(e,t){let n=[e];for(let e of t.rails){if(e.points&&e.points.length>=2){for(let t of Zl(e))n=n.flatMap(e=>Xl(e,t));continue}let t=Math.cos(e.heading),r=-Math.sin(e.heading),i=n=>(n.x-e.point[0])*t+(n.z-e.point[2])*r,a=e.headWidth/2+Gl;for(let t of[-1,1]){let r=t*e.gauge/2,o=[];for(let e of n){let t=Yl(e,i,r-a,!1),n=Yl(e,i,r+a,!0);t.length>=3&&o.push(t),n.length>=3&&o.push(n)}n=o}}return n}function $l(e){if(![...e.center,e.yaw,e.width,e.length,e.deckHeight,e.rampLength,e.rampBefore??e.rampLength,e.rampAfter??e.rampLength].every(Number.isFinite)||e.width<=0||e.length<=0||e.rampLength<=0||(e.rampBefore??e.rampLength)<=0||(e.rampAfter??e.rampLength)<=0)throw Error(`Invalid crossing dimensions: ${e.id}`);for(let t of e.rails)if(![...t.point,t.heading,t.gauge,t.headWidth].every(Number.isFinite)||t.gauge<=0||t.headWidth<=0)throw Error(`Invalid crossing rail: ${e.id}`);for(let t of e.rails)if(t.points&&(t.points.length<2||t.points.some(e=>!e.every(Number.isFinite))||t.points.some((e,n)=>n>0&&Math.hypot(e[0]-t.points[n-1][0],e[2]-t.points[n-1][2])<Kl)))throw Error(`Invalid crossing rail polyline: ${e.id}`);let t=new Ll,n=e.style??{},r=Math.sin(e.yaw),i=Math.cos(e.yaw),a=e.length/2,o=e.rampBefore??e.rampLength,s=e.rampAfter??e.rampLength,c=(t,n,a=0)=>{let o=e.center[0]+t*i+n*r,s=e.center[2]-t*r+n*i;return{x:o,y:Jl(e,o,s)+a,z:s}},l=(r,i,a,o,s=!1)=>{let l=[c(a,r,s?.004:0),c(a,i,s?.004:0),c(o,i,s?.004:0),c(o,r,s?.004:0)];for(let r of Ql(l,e))t.polygon(s?`paint`:`asphalt`,s?n.paint??`#f1eee0`:n.asphalt??`#929c9a`,r)},u=[-a-o,-a,a,a+s];for(let t=0;t<u.length-1;t++){let n=u[t],r=u[t+1],i=Math.ceil((r-n)/.8);for(let t=0;t<i;t++)l(ft.lerp(n,r,t/i),ft.lerp(n,r,(t+1)/i),-e.width/2,e.width/2)}if(n.edgeLines!==!1)for(let t of[-1,1])for(let n=0;n<u.length-1;n++)l(u[n],u[n+1],t*(e.width/2-.3),t*(e.width/2-.4),!0);if(n.centerLine!==`none`)for(let e=0;e<u.length-1;e++)l(u[e],u[e+1],-.055,.055,!0);let d=t.finish(`crossing:${e.id}`);return d.userData.railCrossingId=e.id,d.userData.roadDefinition=e,d}function eu(e){let t=.04,n=4.8,r=(e,t,r)=>({id:e,width:n,parts:[kl(t,r)]});if(e===`crossing`){let e=$l({id:`catalog-crossing`,center:[0,t,0],yaw:0,width:n,length:5.4,deckHeight:.22,rampLength:2,rails:[{point:[0,.22,0],heading:Math.PI/2,gauge:.8,headWidth:.08}]}),r=new G({color:`#777d7d`,roughness:.5});for(let t of[-.4,.4]){let n=new q(new Ge(12,.08,.08),r);n.position.set(0,.18,t),n.receiveShadow=!0,e.add(n)}return e}let i;if(e===`bend`)i={id:`catalog-bend`,roads:[{id:`curve`,width:n,parts:[kl([-9,t,6],[-3,t,6]),Al([-3,t,6],[2,t,6],[6,t,2],[6,t,-3]),kl([6,t,-3],[6,t,-9])]}]};else if(e===`tee`||e===`cross`){let a={north:{width:n,length:5.6},east:{width:n,length:5.6},west:{width:n,length:5.6},...e===`cross`?{south:{width:n,length:5.6}}:{}};i={id:`catalog-${e}`,roads:[r(`horizontal`,[-11,t,0],[11,t,0]),r(`vertical`,[0,t,-11],[0,t,e===`cross`?11:0])],junctions:[{id:`junction`,center:[0,t,0],arms:a,radius:1.6}]}}else i={id:`catalog-${e}`,roads:[{...r(`road`,[-11,t,0],[11,t,0]),...e===`grade`?{grades:[{axis:`x`,interpolation:`smooth`,knots:[[-11,t],[-5,t],[5,2.4],[11,2.4]]}]}:{}}]};return Wl(i)}var tu={red:`#f15d50`,yellow:`#f1b843`,green:`#64d293`,white:`#e6f1ea`};function nu(e=`main`,t=`M-B`,n=`post`,r={}){let i=r.toneMapped??!1,a=new X(.78);a.root.name=`rail-signal-`+t;let o=e===`main`,s=o?6:2.4,c=o?[`red`,`yellow`,`green`]:[`red`,`white`];n===`post`&&(a.box(.66,.22,.66,`#b7bdb7`,0,.11,0),a.cylinder(.095,s-.5,`#839391`,0,(s-.5)/2+.2,0));let l=s-(o?.74:.49);a.box(.76,o?1.67:1.12,.31,`#263c41`,0,l,.06),a.box(.84,.065,.52,`#263c41`,0,s+.075,.16);let u=new g;u.name=`signal-light-emitter`,u.userData.railSignalEmitter=!0,u.visible=!1,as(u),a.root.add(u);let d=new fe({color:tu.red,transparent:!0,opacity:0,depthTest:!0,depthWrite:!1,blending:2,toneMapped:i}),f=new q(new at(.52,12,8),d);f.name=`signal-active-halo`,f.scale.z=.7,f.renderOrder=1,as(f),u.add(f);let p=new fe({color:tu.red,toneMapped:i}),m=new q(new at(.205,12,8),p);m.name=`signal-active-bulb`,as(m),u.add(m);let h=new fe({color:tu.red,transparent:!0,opacity:0,depthWrite:!1,side:2,blending:2,toneMapped:i}),_=new B(.045,1.25,10,14,1,!0);_.rotateX(-Math.PI/2),_.translate(0,0,5);let v=new q(_,h);v.name=`signal-visible-beam`,v.renderOrder=2,as(v),u.add(v);let y=new K(`#ffffff`),b=c.map((e,t)=>{let n=l+((c.length-1)/2-t)*.48,r=a.cylinder(.25,.1,`#1e3034`,0,n,.25);r.rotation.x=Math.PI/2,a.box(.51,.055,.37,`#263c41`,0,n+.245,.34);let o=new G({color:`#293b3a`,emissive:tu[e],emissiveIntensity:0,roughness:.32,metalness:.05,toneMapped:i});o.userData.railSignalLens=e;let s=new q(new Me(.205,14),o);return s.name=`signal-lens-`+e,s.position.set(0,n,.308),as(s),a.root.add(s),{aspect:e,material:o,y:n}}),x=n===`gantry`?4.1:o?3.75:1.13;if(a.box(.82,.3,.06,`#eeeadd`,0,x,.16),a.label(t,.12,`#344b50`,0,x-.055,.198),o&&n===`post`){a.cylinder(.025,4.3,`#707f7d`,-.19,2.34,-.17),a.cylinder(.025,4.3,`#707f7d`,.19,2.34,-.17);for(let e=.5;e<4.5;e+=.36)a.box(.41,.035,.035,`#707f7d`,0,e,-.17)}let S,C={root:a.root,setAspect(e){let t=c.includes(e)?e:`red`;if(S!==t){S=t;for(let e of b){let n=e.aspect===t;e.material.color.set(n?tu[e.aspect]:`#293b3a`),e.material.emissiveIntensity=n?1.65:0,n&&(u.position.set(0,e.y,.4),v.rotation.x=Math.atan2(e.y-.32,12/.78),d.color.set(tu[e.aspect]),h.color.copy(d.color),p.color.copy(d.color).lerp(y,.28))}a.root.userData.signalAspect=t}}};return C.setAspect(`red`),Xo(a.root),C}function ru(){let e=new X(.78),t=[-2.1,2.1].map((t,n)=>{let r=nu(`main`,`J`+(n+2),`gantry`);return r.root.position.set(t,0,0),e.root.add(r.root),r});for(let t of[-3.65,3.65])e.box(.28,6.75,.28,`#8b9794`,t,3.375,-.45),e.box(.62,.2,.62,`#b7bdb7`,t,.1,-.45);return e.box(7.6,.25,.32,`#8b9794`,0,6.55,-.45),e.root.name=`rail-signal-gantry`,Js(e.root),{root:e.root,setAspect(e){for(let n of t)n.setAspect(e)}}}var iu=[Z(0,...[`main`,`shunt`,`gantry`].map(e=>$(`signal.`+e,e===`main`?`Sinyal utama tiga lampu`:e===`shunt`?`Sinyal langsir`:`Portal sinyal dua jalur`,`infrastructure`,`Sinyal modular dengan lampu emissive, pelindung lensa dan papan identifikasi.`,[`sinyal`,`persinyalan`,`rel`,`beranimasi`],()=>{let t=e===`gantry`?ru():nu(e);return{root:t.root,update(n){let r=e===`shunt`?[`red`,`white`]:[`red`,`yellow`,`green`];t.setAspect(r[Math.floor(n/4)%r.length])}}}))),Z(1,...[[`straight`,`Jalan lurus`,`Jalan dua lajur dengan marka dan tepi yang mengikuti jalur.`],[`bend`,`Tikungan jalan`,`Tikungan halus dengan lebar lajur konsisten.`],[`tee`,`Simpang tiga`,`Simpang tiga dengan sudut membulat dan marka yang berhenti sebelum persimpangan.`],[`cross`,`Perempatan jalan`,`Empat cabang jalan dengan satu permukaan persimpangan.`],[`grade`,`Tanjakan jalan`,`Permukaan dan marka mengikuti profil ketinggian yang sama dengan kendaraan.`],[`crossing`,`Deck jalan bertemu rel`,`Deck dengan ramp dan celah roda di sepanjang kepala rel.`]].map(([e,t,n])=>$(`roads.`+e,t,`infrastructure`,n,[`jalan`,`modular`,e],()=>eu(e)))),Z(65,xc(`rail.track`,`Rel dan bantalan`,`infrastructure`,`rail`,0,`Sepasang rel, balas, bantalan, dan pengikat.`))],au=[Z(70,xc(`scene.depot`,`Kompleks depot`,`scenes`,`yard`,0,`Kompleks gudang awal dengan kendaraan dan muatan.`))],ou=$s([...Mc,...ol,...dl,...El,...Ol,...iu,...au]);function su(){return ou.list()}function cu(e,t){return ou.create(e,t)}var lu=wt((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),uu=wt(((e,t)=>{t.exports=lu()})),du=uu(),fu=`blue`;function pu(){let e=su();return[{id:`riverside`,label:`Riverside`,description:`Stasiun, kawasan kota, lanskap sungai, kendaraan dan ornamen.`,assetIds:e.filter(e=>!e.id.includes(`warehouse.`)&&e.id!==`scene.depot`).map(e=>e.id)},{id:`rail-kit`,label:`Perkeretaapian`,description:`Lokomotif, gerbong, rel dan sinyal.`,assetIds:e.filter(e=>e.group===`rolling-stock`||e.group===`infrastructure`).map(e=>e.id)},{id:`depot`,label:`Depot`,description:`Gudang, truk, forklift, palet dan vegetasi.`,assetIds:e.filter(e=>/warehouse|truck|forklift|pallet|tree|depot/.test(e.id)||e.id===`vehicle.pertamina-tanker`).map(e=>e.id)}]}var mu={auto:{source:`fi-sr-shuffle`,viewBox:`0 0 300 300`,path:`M293 207 252 166Q247 161 239.5 162.5Q232 164 230.5 171.5Q229 179 234 184L263 212Q239 213 217.5 203.5Q196 194 179 177Q175 174 170.0 174.5Q165 175 161 179Q158 183 158.5 188.0Q159 193 162 196Q182 216 208.0 227.0Q234 238 263 237L234 266Q228 271 230.0 278.5Q232 286 239.5 288.0Q247 290 252 284L293 243Q300 235 300.0 225.0Q300 215 293 207ZM263 87 234 116 233 117Q230 121 230.5 126.0Q231 131 234.5 134.5Q238 138 243.0 137.5Q248 137 252 134L293 93Q298 88 299.5 80.5Q301 73 299.0 67.0Q297 61 293 57L252 16Q247 11 239.5 12.5Q232 14 230.0 21.5Q228 29 234 34L263 63Q234 63 209 73Q189 81 169 98Q155 110 137 131Q110 101 88 87Q57 66 19 63L13 62Q7 62 3.5 66.0Q0 70 0.0 75.0Q0 80 3.5 83.5Q7 87 13 87L16 88Q49 90 76 109Q95 122 120 150Q95 179 76 191Q50 210 17 212H12Q5 213 1.5 219.5Q-2 226 2.0 232.0Q6 238 13 237H20Q49 235 74 222Q94 212 114 193Q126 182 146 158L147 157Q168 133 178 123Q197 106 215 98Q237 88 263 87Z`},add:{source:`fi-sr-plus`,viewBox:`0 0 300 300`,path:`M288 138H162V12Q162 7 158.5 3.5Q155 0 150.0 0.0Q145 0 141.5 3.5Q138 7 138 12V137H12Q7 138 3.5 141.5Q0 145 0.0 150.0Q0 155 3.5 158.5Q7 162 12 162H137V287Q137 293 141.0 296.5Q145 300 150.0 300.0Q155 300 158.5 296.5Q162 293 162 287V162H287Q293 162 296.5 158.5Q300 155 300.0 150.0Q300 145 296.5 141.5Q293 138 288 138Z`},train:{source:`fi-sr-train-side`,viewBox:`0 0 300 300`,path:`M288 275H13Q7 275 3.5 271.5Q0 268 0.0 262.5Q0 257 3.5 253.5Q7 250 12 250H288Q293 250 296.5 253.5Q300 257 300.0 262.5Q300 268 296.5 271.5Q293 275 288 275ZM150 26V75H253Q232 54 205.5 41.5Q179 29 150 26ZM75 25V75H125V25ZM274 100H0V200Q0 205 3.5 208.5Q7 212 12 212H250Q262 213 272.5 207.5Q283 202 290.0 192.5Q297 183 299.0 171.0Q301 159 298 148Q290 122 274 100ZM50 75V25H13Q7 25 3.5 28.5Q0 32 0 37V75Z`},formation:{source:`fi-sr-train-journey`,viewBox:`0 0 300 300`,path:`M282 18Q263 0 237.5 0.0Q212 0 193 18Q181 30 177.0 46.5Q173 63 177.0 79.0Q181 95 193 107L216 129Q225 138 237.5 138.0Q250 138 259 129L282 107Q294 95 298.0 79.0Q302 63 298.0 46.5Q294 30 282 18ZM238 79Q230 79 224.5 73.5Q219 68 219.0 60.0Q219 52 224.5 46.5Q230 41 237.5 41.0Q245 41 250.5 46.5Q256 52 256.0 60.0Q256 68 250.5 73.5Q245 79 238 79ZM300 225Q300 204 285.5 189.5Q271 175 250 175H150Q140 175 132.5 167.5Q125 160 125.0 150.0Q125 140 132.5 132.5Q140 125 150 125Q155 125 159.0 121.5Q163 118 163.0 112.5Q163 107 159.0 103.5Q155 100 150 100Q129 100 114.5 114.5Q100 129 100.0 150.0Q100 171 114.5 185.5Q129 200 150 200H250Q260 200 267.5 207.5Q275 215 275.0 225.0Q275 235 267.5 242.5Q260 250 250 250H163Q157 250 153.5 253.5Q150 257 150.0 262.5Q150 268 153.5 271.5Q157 275 162 275H250Q271 275 285.5 260.5Q300 246 300 225ZM124 245 114 219Q108 205 95.5 196.5Q83 188 67 188H63V238Q63 243 59.0 246.5Q55 250 50.0 250.0Q45 250 41.5 246.5Q38 243 38 238V188H13Q7 188 3.5 191.5Q0 195 0 200V263Q0 268 3.5 271.5Q7 275 13 275H25V281Q25 289 30.5 294.5Q36 300 44.0 300.0Q52 300 57.0 294.5Q62 289 62 281Q62 289 67.5 294.5Q73 300 81.0 300.0Q89 300 94.5 294.5Q100 289 100 281V275Q111 275 118.0 267.5Q125 260 125 250Q125 248 124 245Z`},depot:{source:`fi-sr-oil-can`,viewBox:`0 0 300 300`,path:`M295 102Q290 99 284 101L211 125Q204 126 199 122Q193 112 182.0 106.0Q171 100 159 100H138V62H163Q168 63 171.5 59.0Q175 55 175.0 50.0Q175 45 171.5 41.0Q168 37 163 37H88Q82 37 78.5 41.0Q75 45 75.0 50.0Q75 55 78.5 59.0Q82 63 88 63H113V100H75L51 90Q42 87 33.0 88.0Q24 89 16.5 94.0Q9 99 4.5 107.5Q0 116 0 125V143Q0 159 9.0 172.0Q18 185 33 190L50 196V200Q50 221 64.5 235.5Q79 250 100 250H164Q178 250 190.5 244.0Q203 238 212 228L297 128Q300 124 300 120V112Q300 106 295 102ZM42 167Q34 164 29.5 157.5Q25 151 25 143V125Q25 118 30.0 114.5Q35 111 41 113L50 117V170ZM293 207Q298 213 299.5 220.5Q301 228 298.0 235.0Q295 242 289.0 246.0Q283 250 275.0 250.0Q267 250 261.0 246.0Q255 242 252.0 235.0Q249 228 250.5 220.5Q252 213 257 207L267 196Q270 193 275.0 193.0Q280 193 283 196Z`},"locomotive-depot":{source:`fi-sr-warehouse-alt`,viewBox:`0 0 300 300`,path:`M300 122V269Q300 282 291.0 291.0Q282 300 269 300Q256 300 247.0 291.0Q238 282 238 269V150Q238 145 234.0 141.5Q230 138 225 138H75Q70 137 66.5 141.0Q63 145 63 150V269Q63 282 53.5 291.0Q44 300 31 300Q18 300 9.0 291.0Q0 282 0 269V122Q0 106 7.5 92.0Q15 78 28 70L115 11Q131 0 150.0 0.0Q169 0 185 11L272 70Q285 78 292.5 92.0Q300 106 300 122ZM125 250H113Q107 250 103.5 253.5Q100 257 100 262V287Q100 293 103.5 296.5Q107 300 113 300H125Q130 300 134.0 296.5Q138 293 138 287V262Q137 257 133.5 253.5Q130 250 125 250ZM125 175H113Q107 175 103.5 178.5Q100 182 100 187V212Q100 218 103.5 221.5Q107 225 113 225H125Q130 225 134.0 221.5Q138 218 138 213V187Q138 182 134.0 178.5Q130 175 125 175ZM188 250H175Q170 250 166.5 253.5Q163 257 162 262V287Q162 293 166.0 296.5Q170 300 175 300H188Q193 300 196.5 296.5Q200 293 200 287V262Q200 257 196.5 253.5Q193 250 188 250Z`},siding:{source:`fi-sr-train-track`,viewBox:`0 0 300 300`,path:`M211 275H76L75 289Q75 293 71.0 296.5Q67 300 63 300H61Q56 299 53.0 295.5Q50 292 50 286L75 11Q76 6 79.5 3.0Q83 0 88.5 0.5Q94 1 97.0 4.5Q100 8 100 14L99 25H189L194 87H93L90 119H197L203 181H85L82 212H206ZM27 47 25 60Q24 71 31 79Q36 84 43 86L49 25Q40 26 33.5 32.0Q27 38 27 47ZM300 247 299 235Q297 225 290.0 219.0Q283 213 274 213H256L253 181H263Q274 181 281.5 173.0Q289 165 287 154L286 141Q285 132 278.0 125.5Q271 119 261 119H247L244 87H250Q261 87 268.5 79.0Q276 71 275 60L274 47Q272 38 265.0 31.5Q258 25 249 25H239L237 11Q237 6 233.0 3.0Q229 0 224.0 0.0Q219 0 215.5 4.0Q212 8 213 14L238 289Q238 293 241.5 296.5Q245 300 250 300H251Q256 299 259.5 295.0Q263 291 262 286L261 275H275Q286 275 293.5 266.5Q301 258 300 247ZM2 235 0 247Q-1 258 6.5 266.5Q14 275 25 275H26L32 213H26Q17 213 10.0 219.0Q3 225 2 235ZM14 141 13 154Q11 165 18.0 172.5Q25 180 35 181L40 119H39Q29 119 22.0 125.5Q15 132 14 141Z`},port:{source:`fi-sr-ship`,viewBox:`0 0 300 300`,path:`M300 262Q300 278 286.0 289.0Q272 300 253.0 300.0Q234 300 219 287Q204 300 184.5 300.0Q165 300 150 288Q135 300 115.5 300.0Q96 300 81 287Q66 300 47.0 300.0Q28 300 14.0 289.0Q0 278 0 263Q0 257 3.5 253.5Q7 250 12.5 250.0Q18 250 21.5 253.5Q25 257 25.0 261.5Q25 266 31.5 270.5Q38 275 47 275Q59 276 67 266L65 264Q34 231 25 187Q23 173 30.0 161.0Q37 149 50 144L138 116V237Q138 243 141.5 246.5Q145 250 150.0 250.0Q155 250 159.0 246.5Q163 243 163 237V116L249 144Q262 149 269.5 161.0Q277 173 274 187Q266 231 235 264L233 266Q241 275 253 275Q262 275 268.5 270.5Q275 266 275.0 261.5Q275 257 278.5 253.5Q282 250 287.5 250.0Q293 250 296.5 253.5Q300 257 300 262ZM150 87Q160 88 170 92L250 118V92Q250 75 237.5 62.5Q225 50 208 50H188V37Q188 22 177.0 11.0Q166 0 150.0 0.0Q134 0 123.0 11.0Q112 22 113 38V50H93Q75 50 62.5 62.5Q50 75 50 92V118L130 92Q140 88 150 87Z`},weather:{source:`fi-sr-cloud-sun`,viewBox:`0 0 300 300`,path:`M174 300Q129 300 118 300Q112 300 107 298Q94 294 85.0 283.5Q76 273 75.0 259.0Q74 245 81.5 233.0Q89 221 101 216Q98 199 102 182Q108 158 126.5 142.5Q145 127 169.5 125.0Q194 123 214.5 136.0Q235 149 244 171Q246 175 254 177Q270 181 281.5 192.5Q293 204 297.5 220.0Q302 236 298.0 252.5Q294 269 281.5 281.5Q269 294 252 298Q245 300 239 300ZM112 122Q131 107 155.0 102.0Q179 97 202 103Q212 106 221 101L251 83Q257 79 256.5 72.0Q256 65 250.0 61.5Q244 58 238 62L204 84Q201 86 199.0 84.5Q197 83 193.5 79.5Q190 76 189 75L212 36Q214 31 213.0 26.0Q212 21 207.5 18.5Q203 16 198.0 17.5Q193 19 190 23L167 62Q159 59 150 57V12Q150 7 146.5 3.5Q143 0 137.5 0.0Q132 0 128.5 3.5Q125 7 125 12V57Q116 59 108 62L85 23Q83 18 78.0 17.0Q73 16 68.5 18.5Q64 21 62.5 26.0Q61 31 64 36L87 74Q80 80 75 86L36 63Q30 59 23.5 63.0Q17 67 17.0 74.0Q17 81 24 85L62 107Q59 116 57 125H13Q7 125 3.5 128.5Q0 132 0.0 137.5Q0 143 3.5 146.5Q7 150 12 150H57Q58 156 60 161Q60 163 59.0 165.0Q58 167 56 168L22 188Q18 191 16.5 196.0Q15 201 17.5 205.5Q20 210 25.0 211.0Q30 212 35 209L67 190Q75 186 78 177Q86 143 112 122Z`},sound:{source:`fi-sr-volume`,viewBox:`0 0 300 300`,path:`M260 54Q256 50 251.0 50.5Q246 51 242.5 54.5Q239 58 239.0 63.0Q239 68 242 71Q264 93 271.5 121.5Q279 150 271.5 178.5Q264 207 242 229Q237 234 238.5 241.0Q240 248 247.5 250.0Q255 252 260 246Q286 220 295.0 185.0Q304 150 295.0 115.0Q286 80 260 54ZM226 91Q221 86 214.0 88.0Q207 90 205.0 97.0Q203 104 208 109Q220 120 223.5 135.0Q227 150 223.5 165.0Q220 180 208 191Q203 196 205.0 203.0Q207 210 214.0 212.0Q221 214 226 209Q242 193 247.5 171.5Q253 150 247.5 128.5Q242 107 226 91ZM173 3Q144 8 119.5 23.5Q95 39 78 62H63Q46 63 31.5 71.0Q17 79 8.5 93.5Q0 108 0 125V175Q0 192 8.5 206.5Q17 221 31.5 229.0Q46 237 63 237H78Q95 261 119.5 276.5Q144 292 173 297Q178 298 182.5 294.5Q187 291 188 285V15Q187 9 182.5 5.5Q178 2 173 3Z`},camera:{source:`fi-sr-camera`,viewBox:`0 0 300 300`,path:`M222 37 204 15Q199 8 191.0 4.0Q183 0 174 0H126Q117 0 109.0 4.0Q101 8 96 15L78 37ZM100 175Q100 196 114.5 210.5Q129 225 150.0 225.0Q171 225 185.5 210.5Q200 196 200.0 175.0Q200 154 185.5 139.5Q171 125 150.0 125.0Q129 125 114.5 139.5Q100 154 100 175ZM238 62H63Q46 63 31.5 71.0Q17 79 8.5 93.5Q0 108 0 125V237Q0 254 8.5 268.5Q17 283 31.5 291.5Q46 300 62 300H238Q254 300 268.5 291.5Q283 283 291.5 268.5Q300 254 300 238V125Q300 108 291.5 93.5Q283 79 268.5 71.0Q254 63 238 62ZM150 250Q130 250 112.5 240.0Q95 230 85.0 212.5Q75 195 75.0 175.0Q75 155 85.0 137.5Q95 120 112.5 110.0Q130 100 150.0 100.0Q170 100 187.5 110.0Q205 120 215.0 137.5Q225 155 225.0 175.0Q225 195 215.0 212.5Q205 230 187.5 240.0Q170 250 150 250Z`},catalog:{source:`fi-sr-cube`,viewBox:`0 0 300 300`,path:`M185 145Q174 151 163 153V298Q172 296 181 291L257 248Q271 240 279.5 225.5Q288 211 288 194V107Q288 97 285 87ZM128 123Q138 129 150.0 129.0Q162 129 172 123L272 66Q265 58 257 53L181 9Q167 1 150.0 1.0Q133 1 119 9L43 53Q35 58 28 65ZM138 153Q126 151 115 145L16 87Q12 96 12 107V194Q12 211 20.5 225.5Q29 240 43 248L119 291Q128 296 138 298Z`},station:{source:`fi-sr-train-station-building`,viewBox:`0 0 300 300`,path:`M278 104Q271 97 262.0 93.5Q253 90 243 90L212 87Q212 74 207.0 62.0Q202 50 191.5 40.5Q181 31 167 27H162V12Q163 7 159.0 3.5Q155 0 150.0 0.0Q145 0 141.0 3.5Q137 7 137 13V27H133Q119 31 108.5 40.5Q98 50 92.5 62.0Q87 74 87 87H57Q48 87 38.5 91.0Q29 95 22 102L6 117Q0 122 0.0 130.0Q0 138 5.5 144.0Q11 150 19 150L280 152Q288 152 293.5 146.5Q299 141 299.0 133.0Q299 125 293 119ZM150 112Q140 112 132.5 105.0Q125 98 125.0 87.5Q125 77 132.5 69.5Q140 62 150.0 62.0Q160 62 167.5 69.5Q175 77 175.0 87.5Q175 98 167.5 105.0Q160 112 150 112ZM288 187V256Q288 274 275.0 287.0Q262 300 244 300H213Q207 300 203.5 296.5Q200 293 200 287V250Q200 229 185.5 214.5Q171 200 150.0 200.0Q129 200 114.5 214.5Q100 229 100 250V287Q100 293 96.5 296.5Q93 300 87 300H56Q38 300 25.5 287.0Q13 274 13 256V187Q13 182 16.5 178.5Q20 175 25 175H275Q280 175 284.0 178.5Q288 182 288 187Z`},monitor:{source:`fi-sr-list-check`,viewBox:`0 0 300 300`,path:`M50 275Q34 275 23 264L4 247Q0 243 0.0 238.0Q0 233 3.5 229.0Q7 225 12.0 225.0Q17 225 21 228L41 246Q44 250 49.5 250.0Q55 250 59 246L104 203Q109 198 116.0 200.0Q123 202 125.0 209.5Q127 217 121 222L76 264Q65 275 50 275ZM288 262H163Q157 262 153.5 258.5Q150 255 150.0 250.0Q150 245 153.5 241.5Q157 238 162 238H288Q293 237 296.5 241.0Q300 245 300.0 250.0Q300 255 296.5 258.5Q293 262 288 262ZM50 175Q34 175 23 164L4 144Q0 141 0.0 135.5Q0 130 3.5 126.5Q7 123 12.5 123.0Q18 123 21 127L41 146Q45 150 50.0 150.0Q55 150 59 146L104 103Q108 100 113.0 100.0Q118 100 121.5 104.0Q125 108 125.0 113.0Q125 118 121 122L76 164Q65 175 50 175ZM288 162H163Q157 162 153.5 158.5Q150 155 150.0 150.0Q150 145 153.5 141.0Q157 137 162 137H288Q293 137 296.5 141.0Q300 145 300.0 150.0Q300 155 296.5 159.0Q293 163 288 163ZM50 75Q34 75 23 64L4 47Q0 43 0.0 38.0Q0 33 3.5 29.0Q7 25 12.0 25.0Q17 25 21 28L41 46Q44 50 49.5 50.0Q55 50 59 46L104 3Q108 0 113.0 0.5Q118 1 121.5 4.5Q125 8 125.0 13.0Q125 18 121 22L76 64Q65 75 50 75ZM288 62H163Q157 63 153.5 59.0Q150 55 150.0 50.0Q150 45 153.5 41.0Q157 37 162 37H288Q293 37 296.5 41.0Q300 45 300.0 50.0Q300 55 296.5 58.5Q293 62 288 63Z`},settings:{source:`fi-sr-settings`,viewBox:`0 0 300 300`,path:`M20 225Q28 238 43.0 242.5Q58 247 71 239L77 236Q93 249 113 256V262Q112 278 123.0 289.0Q134 300 150.0 300.0Q166 300 177.0 289.0Q188 278 187 262V256Q207 249 223 236L229 239Q242 247 257.0 242.5Q272 238 280.0 225.0Q288 212 284.0 197.0Q280 182 266 174L261 171Q264 150 261 129L266 126Q280 118 284.0 103.0Q288 88 280.0 75.0Q272 62 257.0 57.5Q242 53 229 61L223 64Q207 51 187 44V37Q187 22 176.5 11.0Q166 0 150.0 0.0Q134 0 123.5 11.0Q113 22 113 38V44Q93 51 77 64L71 61Q58 53 43.0 57.5Q28 62 20.0 75.0Q12 88 16.0 103.0Q20 118 34 126L39 129Q36 150 39 171L34 174Q20 182 16.0 197.0Q12 212 20 225ZM150 100Q171 100 185.5 114.5Q200 129 200.0 150.0Q200 171 185.5 185.5Q171 200 150.0 200.0Q129 200 114.5 185.5Q100 171 100.0 150.0Q100 129 114.5 114.5Q129 100 150 100Z`},location:{source:`fi-sr-marker`,viewBox:`0 0 300 300`,path:`M150 1Q116 1 87.5 17.5Q59 34 42.0 62.5Q25 91 25 125Q25 174 99 275Q108 287 121.5 294.0Q135 301 150.0 301.0Q165 301 178.5 294.0Q192 287 201 275Q275 174 275 125Q275 91 258.0 62.5Q241 34 212.5 17.5Q184 1 150 1ZM150 175Q129 175 114.5 160.5Q100 146 100.0 125.0Q100 104 114.5 89.5Q129 75 150.0 75.0Q171 75 185.5 89.5Q200 104 200.0 125.0Q200 146 185.5 160.5Q171 175 150 175Z`},info:{source:`fi-sr-info`,viewBox:`0 0 300 300`,path:`M150 300Q191 300 225.5 280.0Q260 260 280.0 225.5Q300 191 300.0 150.0Q300 109 280.0 74.5Q260 40 225.5 20.0Q191 0 150.0 0.0Q109 0 74.5 20.0Q40 40 20.0 74.5Q0 109 0.0 150.0Q0 191 20.0 225.5Q40 260 74.5 280.0Q109 300 150 300ZM150 62Q158 63 163.5 68.0Q169 73 169.0 81.0Q169 89 163.5 94.5Q158 100 150.0 100.0Q142 100 136.5 94.5Q131 89 131.0 81.0Q131 73 136.5 67.5Q142 62 150 62ZM138 125H150Q160 125 167.5 132.5Q175 140 175 150V225Q175 230 171.5 233.5Q168 237 162.5 237.0Q157 237 153.5 233.5Q150 230 150 225V150H138Q132 150 128.5 146.5Q125 143 125.0 137.5Q125 132 128.5 128.5Q132 125 138 125Z`},"zoom-in":{source:`fi-sr-zoom-in`,viewBox:`0 0 300 300`,path:`M125 250Q147 250 167.0 242.5Q187 235 204 222L279 296Q282 300 287.5 300.0Q293 300 296.5 296.5Q300 293 300.0 287.5Q300 282 296 279L222 204Q240 182 246.5 154.0Q253 126 247.0 98.5Q241 71 223.5 48.0Q206 25 180.0 12.5Q154 0 125.5 0.0Q97 0 71.0 12.0Q45 24 27.5 46.5Q10 69 3.5 96.5Q-3 124 3.0 152.5Q9 181 27.0 203.0Q45 225 70.5 237.5Q96 250 125 250ZM88 112H113V87Q113 82 116.5 78.5Q120 75 125.0 75.0Q130 75 134.0 78.5Q138 82 138 87V112H163Q168 112 171.5 116.0Q175 120 175.0 125.0Q175 130 171.5 134.0Q168 138 163 138H138V162Q138 168 134.0 171.5Q130 175 125.0 175.0Q120 175 116.5 171.5Q113 168 113 162V137H88Q82 137 78.5 133.5Q75 130 75.0 125.0Q75 120 78.5 116.0Q82 112 88 112Z`},"zoom-out":{source:`fi-sr-zoom-out`,viewBox:`0 0 300 300`,path:`M296 279 222 204Q243 179 248.5 147.0Q254 115 243.5 84.5Q233 54 209.0 32.0Q185 10 153.5 3.0Q122 -4 91.0 4.5Q60 13 36.5 36.5Q13 60 4.5 91.0Q-4 122 3.0 153.5Q10 185 32.0 209.0Q54 233 84.5 243.5Q115 254 147.0 248.5Q179 243 204 222L279 296Q282 300 287.5 300.0Q293 300 296.5 296.5Q300 293 300.0 287.5Q300 282 296 279ZM163 137H88Q82 137 78.5 133.5Q75 130 75.0 125.0Q75 120 78.5 116.0Q82 112 88 112H163Q168 112 171.5 116.0Q175 120 175.0 125.0Q175 130 171.5 134.0Q168 138 163 138Z`},recenter:{source:`fi-sr-target`,viewBox:`0 0 300 300`,path:`M263 162Q257 162 253.5 158.5Q250 155 250.0 150.0Q250 145 253.5 141.0Q257 137 262 137H299Q296 102 277.5 71.5Q259 41 228.5 22.5Q198 4 163 1V38Q163 43 159.0 46.5Q155 50 150.0 50.0Q145 50 141.0 46.5Q137 43 137 38V1Q102 4 71.5 22.5Q41 41 22.5 71.5Q4 102 1 138H38Q43 137 46.5 141.0Q50 145 50.0 150.0Q50 155 46.5 159.0Q43 163 37 163H1Q4 198 22.5 228.5Q41 259 71.5 277.5Q102 296 137 299V262Q137 257 141.0 253.5Q145 250 150.0 250.0Q155 250 159.0 253.5Q163 257 163 262V299Q198 296 228.5 277.5Q259 259 277.5 228.5Q296 198 299 162ZM188 162H163V187Q163 193 159.0 196.5Q155 200 150.0 200.0Q145 200 141.0 196.5Q137 193 137 187V162H113Q107 162 103.5 158.5Q100 155 100.0 150.0Q100 145 103.5 141.0Q107 137 113 137H138V112Q138 107 141.5 103.5Q145 100 150.0 100.0Q155 100 159.0 103.5Q163 107 163 112V137H188Q193 137 196.5 141.0Q200 145 200.0 150.0Q200 155 196.5 159.0Q193 163 188 163Z`},pause:{source:`fi-sr-pause`,viewBox:`0 0 300 300`,path:`M81 0Q63 0 50.0 13.0Q37 26 37 44V256Q38 274 50.5 287.0Q63 300 81.0 300.0Q99 300 112.0 287.0Q125 274 125 256V44Q125 26 112.0 13.0Q99 0 81 0ZM219 0Q201 0 188.0 13.0Q175 26 175 44V256Q175 274 188.0 287.0Q201 300 219.0 300.0Q237 300 250.0 287.0Q263 274 263 256V44Q263 26 250.0 13.0Q237 0 219 0Z`},play:{source:`fi-sr-play`,viewBox:`0 0 300 300`,path:`M256 100 137 12Q123 2 105.0 0.5Q87 -1 71.5 7.0Q56 15 47.0 30.0Q38 45 38 63V237Q37 255 46.5 270.0Q56 285 71.5 293.0Q87 301 105.0 299.5Q123 298 137 288L256 200Q268 192 275.0 178.5Q282 165 282.0 150.0Q282 135 275.0 122.0Q268 109 256 100Z`},reset:{source:`fi-sr-rotate-left`,viewBox:`0 0 300 300`,path:`M150 0Q122 0 96.5 10.0Q71 20 50 38V12Q50 7 46.5 3.5Q43 0 37.5 0.0Q32 0 28.5 3.5Q25 7 25 12V62Q25 73 32.5 80.0Q40 87 50 88H100Q105 87 108.5 83.5Q112 80 112.0 75.0Q112 70 108.5 66.0Q105 62 100 62H61Q79 45 102.0 35.0Q125 25 150 25Q184 25 212.5 42.0Q241 59 258.0 87.5Q275 116 275.0 150.0Q275 184 258.0 212.5Q241 241 212.5 258.0Q184 275 151.0 275.0Q118 275 90.5 260.0Q63 245 45.5 219.0Q28 193 26 161Q25 156 21.0 153.0Q17 150 12.0 150.5Q7 151 3.5 154.5Q0 158 1 164Q4 202 25.0 233.0Q46 264 78.5 282.0Q111 300 151.0 300.0Q191 300 225.5 280.0Q260 260 280.0 225.5Q300 191 300.0 150.0Q300 109 280.0 74.5Q260 40 225.5 20.0Q191 0 150 0Z`},close:{source:`fi-sr-cross`,viewBox:`0 0 300 300`,path:`M168 150 296 21Q300 18 300.0 12.5Q300 7 296.0 3.5Q292 0 287.0 0.0Q282 0 279 4L150 132L21 4Q18 0 12.5 0.0Q7 0 3.5 4.0Q0 8 0.0 13.0Q0 18 4 21L132 150L4 279Q0 282 0.0 287.5Q0 293 4 296Q7 300 12.5 300.0Q18 300 21 296L150 168L279 296Q282 300 287.5 300.0Q293 300 296 296Q300 293 300.0 287.5Q300 282 296 279Z`},download:{source:`fi-sr-download`,viewBox:`0 0 300 300`,path:`M123 227Q134 238 150.0 238.0Q166 238 177 227L217 186Q220 183 220.0 177.5Q220 172 216.0 168.5Q212 165 207.5 165.5Q203 166 199 169L162 205L163 13Q162 7 158.5 3.5Q155 0 150 0Q145 0 141.5 3.5Q138 7 138 12L137 205L101 169Q97 165 92.0 165.0Q87 165 83.5 168.5Q80 172 80.0 177.5Q80 183 83 186ZM288 200Q282 200 278.5 203.5Q275 207 275 212V262Q275 268 271.5 271.5Q268 275 263 275H38Q32 275 28.5 271.5Q25 268 25 263V213Q25 207 21.5 203.5Q18 200 13 200Q7 200 3.5 203.5Q0 207 0 213V262Q0 278 11.0 289.0Q22 300 38 300H263Q278 300 289.0 289.0Q300 278 300 262V213Q300 207 296.5 203.5Q293 200 288 200Z`},"chevron-down":{source:`fi-sr-angle-small-down`,viewBox:`0 0 300 300`,path:`M238 98Q233 93 225.0 93.0Q217 93 212 98L154 155Q153 157 150.0 157.0Q147 157 146 155L88 98Q83 93 75.0 93.0Q67 93 61.5 98.5Q56 104 56.0 111.5Q56 119 62 125L119 182Q132 195 150.0 195.0Q168 195 181 182L238 125Q244 119 244.0 111.5Q244 104 238 98Z`},"chevron-right":{source:`fi-sr-angle-small-right`,viewBox:`0 0 300 300`,path:`M197 119 140 62Q134 56 126.5 56.0Q119 56 113.5 61.5Q108 67 108.0 75.0Q108 83 113 88L170 146Q172 147 172.0 150.0Q172 153 170 154L113 212Q108 217 108.0 225.0Q108 233 113.5 238.5Q119 244 126.5 244.0Q134 244 140 238L197 181Q210 168 210.0 150.0Q210 132 197 119Z`},sun:{source:`fi-sr-sun`,viewBox:`0 0 300 300`,path:`M288 137H237Q235 127 231 117L275 92Q282 88 282.0 81.0Q282 74 275.5 70.0Q269 66 263 70L219 96Q212 88 204 81L230 37Q232 33 230.5 28.0Q229 23 225.0 20.5Q221 18 216.0 19.0Q211 20 208 25L183 69Q173 65 162 63V12Q162 7 158.5 3.5Q155 0 150.0 0.0Q145 0 141.0 3.5Q137 7 137 12V63Q127 65 117 69L92 25Q89 20 84.0 19.0Q79 18 75.0 20.5Q71 23 69.5 28.0Q68 33 70 37L96 81Q88 88 81 96L37 70Q31 66 24.5 70.0Q18 74 18.0 81.0Q18 88 25 92L69 117Q65 127 63 137H13Q7 137 3.5 141.0Q0 145 0.0 150.0Q0 155 3.5 159.0Q7 163 12 163H64Q65 173 69 183L25 208Q18 212 18.0 219.0Q18 226 24.5 230.0Q31 234 37 230L81 204Q88 212 96 219L70 263Q68 267 69.5 272.0Q71 277 75.0 279.5Q79 282 84.0 281.0Q89 280 92 275L117 231Q127 235 138 237V287Q138 293 141.5 296.5Q145 300 150.0 300.0Q155 300 159.0 296.5Q163 293 163 288V236Q173 235 183 231L208 275Q211 280 216.0 281.0Q221 282 225.0 279.5Q229 277 230.5 272.0Q232 267 230 263L204 219Q212 212 219 204L263 230Q269 234 275.5 230.0Q282 226 282.0 219.0Q282 212 275 208L231 183Q235 173 237 162H288Q293 162 296.5 158.5Q300 155 300.0 150.0Q300 145 296.5 141.0Q293 137 288 137Z`},moon:{source:`fi-sr-moon`,viewBox:`0 0 300 300`,path:`M188 300Q156 300 126.5 287.0Q97 274 76.0 250.5Q55 227 45.0 196.5Q35 166 38.5 133.5Q42 101 59.0 73.0Q76 45 103.5 26.0Q131 7 163.0 2.0Q195 -3 226 4Q235 7 241.0 13.0Q247 19 249.0 27.0Q251 35 248.5 43.0Q246 51 240 57Q212 83 204.0 116.0Q196 149 208.0 181.5Q220 214 250 237Q257 243 260.0 251.0Q263 259 262.0 267.0Q261 275 255.5 282.0Q250 289 242 291Q215 300 187 300Z`},cloud:{source:`fi-sr-cloud`,viewBox:`0 0 300 300`,path:`M222 90Q217 66 200.5 47.5Q184 29 161.5 20.0Q139 11 114.0 13.5Q89 16 68.5 30.0Q48 44 36.5 65.5Q25 87 25.0 112.0Q25 137 36 158Q15 170 5.5 191.5Q-4 213 2.0 236.0Q8 259 26.5 273.5Q45 288 69 287H200Q225 287 246.5 275.5Q268 264 282.0 244.0Q296 224 299.0 199.0Q302 174 293.0 151.0Q284 128 265.5 112.0Q247 96 222 90Z`},rain:{source:`fi-sr-cloud-rain`,viewBox:`0 0 300 300`,path:`M114 218Q129 233 135 250Q143 274 127 289Q115 300 99.5 300.0Q84 300 73 289Q57 274 65 251Q71 234 86 219Q92 213 100.0 212.5Q108 212 114 218ZM186 219Q171 234 165 251Q157 274 173 289Q182 297 193.0 299.0Q204 301 214.5 297.0Q225 293 231.0 283.5Q237 274 237.0 262.5Q237 251 228 236Q222 227 214 218Q208 212 200.0 212.5Q192 213 186 219ZM300 156Q300 180 288.0 201.5Q276 223 256 236Q246 216 231 200Q218 187 199.5 187.5Q181 188 169 201Q158 212 150 225Q142 212 131 200Q118 187 99.5 187.5Q81 188 68 201Q50 220 41 244Q25 237 14.5 223.0Q4 209 1.5 192.0Q-1 175 4.5 158.5Q10 142 23 130Q28 126 27 119Q23 101 26 83Q32 52 53.5 29.5Q75 7 106 2Q140 -5 170.5 10.5Q201 26 215 57Q218 63 225 64Q258 71 279.0 97.0Q300 123 300 156ZM188 137Q188 126 178 111Q172 102 164 93Q158 87 150.0 87.5Q142 88 136 94Q121 109 115 126Q107 149 123 164Q132 172 143.0 174.0Q154 176 164.5 172.0Q175 168 181.0 158.5Q187 149 188 138Z`},snow:{source:`fi-sr-cloud-snow`,viewBox:`0 0 300 300`,path:`M224 64Q218 63 215 57Q201 27 174 12Q150 -1 121.5 0.5Q93 2 69.0 17.5Q45 33 34 58Q21 86 27 119Q28 126 23 130Q11 141 5.5 155.0Q0 169 0.5 184.5Q1 200 8.0 213.5Q15 227 28 236Q33 240 39.0 238.0Q45 236 47 230Q53 208 71.5 194.5Q90 181 113.0 181.0Q136 181 154.0 195.0Q172 209 179 231Q181 240 189.0 245.5Q197 251 206 250Q237 250 261 233Q282 218 292.0 192.5Q302 167 298.5 140.0Q295 113 277 93Q257 71 224 64ZM213 137H197L204 151Q208 158 204.5 164.0Q201 170 193.5 170.0Q186 170 183 164L175 150L167 164Q164 170 156.5 170.0Q149 170 145.5 164.0Q142 158 146 151L153 137H138Q132 137 128.5 133.5Q125 130 125.0 125.0Q125 120 128.5 116.0Q132 112 138 112H153L146 99Q142 92 145.5 86.0Q149 80 156.5 80.0Q164 80 167 86L175 100L183 86Q186 80 193.5 80.0Q201 80 204.5 86.0Q208 92 204 99L197 112H213Q218 112 221.5 116.0Q225 120 225.0 125.0Q225 130 221.5 134.0Q218 138 213 138ZM163 250Q163 255 159.0 258.5Q155 262 150 262H134L142 276Q146 283 142.0 289.0Q138 295 131.0 295.0Q124 295 120 289L113 275L105 289Q101 295 94.0 295.0Q87 295 83.0 289.0Q79 283 83 276L91 262H75Q70 262 66.5 258.5Q63 255 63.0 250.0Q63 245 66.5 241.5Q70 238 75 238H91L83 224Q79 217 83.0 211.0Q87 205 94.0 205.0Q101 205 105 211L113 225L120 211Q124 205 131.0 205.0Q138 205 142.0 211.0Q146 217 142 224L134 237H150Q155 237 159.0 241.0Q163 245 163 250Z`},storm:{source:`fi-sr-thunderstorm`,viewBox:`0 0 300 300`,path:`M136 300Q131 300 126 298Q118 294 114.5 286.5Q111 279 113 270L125 237H112Q100 237 92.5 227.5Q85 218 89 207L115 142Q119 130 131 127Q138 125 155 125H163Q173 125 178.5 133.0Q184 141 181 150L163 187H176Q183 188 188.5 191.0Q194 194 197.0 200.0Q200 206 200.0 212.5Q200 219 196 224L155 290Q148 300 136 300ZM225 64Q218 63 215 57Q201 26 170.5 11.0Q140 -4 106 2Q75 7 53.5 29.5Q32 52 26 83Q23 101 27 119Q28 126 23 130Q7 145 2.0 165.5Q-3 186 5.0 206.0Q13 226 30.5 238.0Q48 250 69 250H79Q75 247 72 243Q65 233 63.0 221.5Q61 210 65 199L92 133Q97 118 110.0 109.0Q123 100 139 100H163Q173 100 182.5 105.0Q192 110 198.5 118.5Q205 127 206.5 137.5Q208 148 204 158L199 168Q208 173 214.5 181.5Q221 190 223.5 200.0Q226 210 224.5 220.0Q223 230 217 238L210 250Q241 248 264 231Q285 214 293.5 189.0Q302 164 297.5 137.5Q293 111 275 92Q256 71 225 64Z`}};function hu({name:e,size:t=24}){let n=mu[e];return(0,du.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:n.viewBox,fill:`currentColor`,"aria-hidden":`true`,focusable:`false`,"data-flaticon-icon":n.source,children:(0,du.jsx)(`path`,{d:n.path})})}function gu(e,t){let n=(0,At.useRef)(null),r=(0,At.useRef)(t);return r.current=t,(0,At.useEffect)(()=>{if(!e)return;n.current?.focus();let t=e=>{e.key===`Escape`&&!e.defaultPrevented&&(e.preventDefault(),r.current())};return window.addEventListener(`keydown`,t),()=>window.removeEventListener(`keydown`,t)},[e]),n}var _u=320,vu=176,yu=new Map,bu=[],xu=null,Su=!1;function Cu(e){xu||(xu=new Ji({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),xu.setPixelRatio(1),xu.setSize(_u,vu,!1),xu.setClearColor(0,0),xu.toneMapping=4,xu.toneMappingExposure=1.14);let t=cu(e,{palette:fu}),n=new _;try{let e=t.root;n.add(e),e.updateMatrixWorld(!0);let r=new we().setFromObject(e);if(r.isEmpty())throw Error(`Model aset kosong.`);let i=r.getCenter(new R),a=r.getSize(new R),o=Math.max(1,a.x,a.y,a.z),s=new L(-1,1,1,-1,.1,o*10);s.position.copy(i).add(new R(1.5,.85,1.4).normalize().multiplyScalar(o*3)),s.lookAt(i),s.updateMatrixWorld(!0);let c=new we;for(let e of[r.min.x,r.max.x])for(let t of[r.min.y,r.max.y])for(let n of[r.min.z,r.max.z])c.expandByPoint(new R(e,t,n).applyMatrix4(s.matrixWorldInverse));let l=_u/vu,u=Math.max(c.max.y-c.min.y,(c.max.x-c.min.x)/l)*.57;s.left=-u*l,s.right=u*l,s.top=u,s.bottom=-u,s.updateProjectionMatrix(),n.add(new Ze(`#f2f7ff`,`#8b9181`,2.5));let d=new j(`#fff4df`,2.8);return d.position.copy(i).add(new R(o,o*2,o)),d.target.position.copy(i),n.add(d,d.target),xu.render(n,s),xu.domElement.toDataURL(`image/png`)}finally{t.dispose(),n.clear(),xu.renderLists.dispose()}}function wu(){let e=bu.shift();if(!e)xu?.dispose(),xu?.forceContextLoss(),xu=null,Su=!1;else{try{e.resolve(Cu(e.assetId))}catch(t){yu.delete(e.assetId),e.reject(t)}window.setTimeout(wu,0)}}function Tu(e){let t=yu.get(e);if(t)return t;let n=new Promise((t,n)=>bu.push({assetId:e,resolve:t,reject:n}));return yu.set(e,n),Su||(Su=!0,window.setTimeout(wu,0)),n}function Eu({assetId:e,active:t}){let n=(0,At.useRef)(null),[r,i]=(0,At.useState)(null),[a,o]=(0,At.useState)(``);return(0,At.useEffect)(()=>{let r=n.current;if(!t||!r)return;let a=!0,s=new IntersectionObserver(t=>{t.some(e=>e.isIntersecting)&&(s.disconnect(),Tu(e).then(t=>{a&&i({assetId:e,url:t})},()=>{a&&o(e)}))},{rootMargin:`100px`});return s.observe(r),()=>{a=!1,s.disconnect()}},[e,t]),(0,du.jsx)(`span`,{ref:n,className:`hud-model-thumbnail`,"data-thumbnail-asset":e,children:r?.assetId===e?(0,du.jsx)(`img`,{src:r.url,alt:``,draggable:!1}):(0,du.jsx)(`span`,{className:`hud-thumbnail-status`,children:a===e?`Preview belum tersedia`:`Memuat model…`})})}export{Oa as $,Ws as A,go as B,pc as C,Ys as D,Js as E,cs as F,qa as G,_o as H,as as I,Wa as J,Xa as K,Jo as L,ws as M,Es as N,qs as O,ys as P,ja as Q,Ho as R,mc as S,uc as T,oo as U,vo as V,mo as W,Ia as X,Ra as Y,Aa as Z,Ec as _,pu as a,ia as at,Sc as b,su as c,kt as ct,vl as d,Dt as dt,va as et,bl as f,cl as g,yl as h,fu as i,X as it,Xs as j,Zs as k,nu as l,wt as lt,wl as m,gu as n,ma as nt,uu as o,en as ot,Cl as p,Za as q,hu as r,aa as rt,cu as s,Ji as st,Eu as t,_a as tt,gl as u,Tt as ut,Dc as v,cc as w,bc as x,Oc as y,So as z};