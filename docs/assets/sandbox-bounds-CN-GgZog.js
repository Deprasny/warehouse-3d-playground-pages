const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GLTFLoader-BFjgnd6d.js","assets/three.core-IH6yQD8m.js"])))=>i.map(i=>d[i]);
import{$n as e,A as t,Ar as n,At as r,B as i,Bt as a,C as o,Cr as s,Ct as c,D as l,Dr as u,Dt as d,E as f,Er as p,Et as m,F as h,Fr as g,G as _,H as v,Ht as y,I as b,In as x,Ir as S,It as C,J as w,K as T,Kn as E,L as D,Ln as O,Lr as k,Lt as A,M as j,Mn as M,Mr as N,Mt as P,N as ee,Nn as F,Nr as I,Nt as te,O as ne,Or as re,P as ie,Pn as L,Pr as ae,Pt as oe,Q as R,R as se,Rn as ce,Rr as le,Sr as z,St as B,T as V,Tr as ue,Tt as de,Un as fe,Ut as pe,Vt as H,Wn as me,Xn as he,Xt as ge,Yn as _e,_ as ve,_r as ye,_t as be,a as xe,ar as Se,at as Ce,b as we,br as Te,bt as Ee,c as De,cr as Oe,dr as ke,en as U,f as Ae,fr as je,ft as Me,gt as W,h as Ne,hr as Pe,ht as Fe,i as G,ir as K,j as Ie,jn as Le,jr as Re,jt as ze,k as Be,kr as Ve,m as q,mt as He,nr as Ue,o as We,ot as Ge,p as Ke,pr as qe,pt as Je,qn as Ye,qt as Xe,r as Ze,rr as Qe,s as $e,st as et,tn as tt,tr as nt,u as rt,ur as it,v as at,vr as ot,wt as J,x as st,xr as Y,xt as X,y as ct,yr as lt,yt as ut,z as dt,zt as ft}from"./three.core-IH6yQD8m.js";var pt=Object.create,mt=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,gt=Object.getOwnPropertyNames,_t=Object.getPrototypeOf,vt=Object.prototype.hasOwnProperty,yt=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),bt=(e,t)=>{let n={};for(var r in e)mt(n,r,{get:e[r],enumerable:!0});return t||mt(n,Symbol.toStringTag,{value:`Module`}),n},xt=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(var i=gt(t),a=0,o=i.length,s;a<o;a++)s=i[a],!vt.call(e,s)&&s!==n&&mt(e,s,{get:(e=>t[e]).bind(null,s),enumerable:!(r=ht(t,s))||r.enumerable});return e},St=(e,t,n)=>(n=e==null?{}:pt(_t(e)),xt(t||!e||!e.__esModule||!vt.call(e,`default`)?mt(n,`default`,{value:e,enumerable:!0}):n,e));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function Ct(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function wt(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Z={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},Q={common:{diffuse:{value:new q(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new B},alphaMap:{value:null},alphaMapTransform:{value:new B},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new B}},envmap:{envMap:{value:null},envMapRotation:{value:new B},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new B}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new B}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new B},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new B},normalScale:{value:new Y(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new B},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new B}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new B}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new B}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new q(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new q(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new B},alphaTest:{value:0},uvTransform:{value:new B}},sprite:{diffuse:{value:new q(16777215)},opacity:{value:1},center:{value:new Y(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new B},alphaMap:{value:null},alphaMapTransform:{value:new B},alphaTest:{value:0}}},Tt={basic:{uniforms:g([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.fog]),vertexShader:Z.meshbasic_vert,fragmentShader:Z.meshbasic_frag},lambert:{uniforms:g([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new q(0)},envMapIntensity:{value:1}}]),vertexShader:Z.meshlambert_vert,fragmentShader:Z.meshlambert_frag},phong:{uniforms:g([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new q(0)},specular:{value:new q(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Z.meshphong_vert,fragmentShader:Z.meshphong_frag},standard:{uniforms:g([Q.common,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.roughnessmap,Q.metalnessmap,Q.fog,Q.lights,{emissive:{value:new q(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag},toon:{uniforms:g([Q.common,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.gradientmap,Q.fog,Q.lights,{emissive:{value:new q(0)}}]),vertexShader:Z.meshtoon_vert,fragmentShader:Z.meshtoon_frag},matcap:{uniforms:g([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,{matcap:{value:null}}]),vertexShader:Z.meshmatcap_vert,fragmentShader:Z.meshmatcap_frag},points:{uniforms:g([Q.points,Q.fog]),vertexShader:Z.points_vert,fragmentShader:Z.points_frag},dashed:{uniforms:g([Q.common,Q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Z.linedashed_vert,fragmentShader:Z.linedashed_frag},depth:{uniforms:g([Q.common,Q.displacementmap]),vertexShader:Z.depth_vert,fragmentShader:Z.depth_frag},normal:{uniforms:g([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,{opacity:{value:1}}]),vertexShader:Z.meshnormal_vert,fragmentShader:Z.meshnormal_frag},sprite:{uniforms:g([Q.sprite,Q.fog]),vertexShader:Z.sprite_vert,fragmentShader:Z.sprite_frag},background:{uniforms:{uvTransform:{value:new B},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Z.background_vert,fragmentShader:Z.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new B}},vertexShader:Z.backgroundCube_vert,fragmentShader:Z.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Z.cube_vert,fragmentShader:Z.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Z.equirect_vert,fragmentShader:Z.equirect_frag},distance:{uniforms:g([Q.common,Q.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Z.distance_vert,fragmentShader:Z.distance_frag},shadow:{uniforms:g([Q.lights,Q.fog,{color:{value:new q(0)},opacity:{value:1}}]),vertexShader:Z.shadow_vert,fragmentShader:Z.shadow_frag}};Tt.physical={uniforms:g([Tt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new B},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new B},clearcoatNormalScale:{value:new Y(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new B},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new B},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new B},sheen:{value:0},sheenColor:{value:new q(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new B},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new B},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new B},transmissionSamplerSize:{value:new Y},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new B},attenuationDistance:{value:0},attenuationColor:{value:new q(0)},specularColor:{value:new q(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new B},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new B},anisotropyVector:{value:new Y},anisotropyMap:{value:null},anisotropyMapTransform:{value:new B}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag};var Et={r:0,b:0,g:0},Dt=new c,Ot=new B;Ot.set(-1,0,0,0,1,0,0,0,1);function kt(e,t,n,r,i,a){let o=new q(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new J(new We(1,1,1),new E({name:`BackgroundCubeMaterial`,uniforms:re(Tt.backgroundCube.uniforms),vertexShader:Tt.backgroundCube.vertexShader,fragmentShader:Tt.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Dt.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ot),l.material.toneMapped=Ne.getTransfer(i.colorSpace)!==me,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new J(new H(2,2),new E({name:`BackgroundMaterial`,uniforms:re(Tt.background.uniforms),vertexShader:Tt.background.vertexShader,fragmentShader:Tt.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Ne.getTransfer(i.colorSpace)!==me,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Et,I(e)),n.buffers.color.setClear(Et.r,Et.g,Et.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function At(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function jt(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Mt(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(k(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&k(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Nt(e){let t=this,n=null,r=0,i=!1,o=!1,s=new a,c=new B,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(e,t){n=d(e,t,0)},this.setState=function(t,a,s){let c=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||c===null||c.length===0||o&&!p)o?d(null):u();else{let e=o?0:r,t=e*4,i=m.clippingState||null;l.value=i,i=d(c,a,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function d(e,n,r,i){let a=e===null?0:e.length,o=null;if(a!==0){if(o=l.value,i!==!0||o===null){let t=r+a*4,i=n.matrixWorldInverse;c.getNormalMatrix(i),(o===null||o.length<t)&&(o=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)s.copy(e[t]).applyMatrix4(i,c),s.normal.toArray(o,n),o[n+3]=s.constant}l.value=o,l.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,o}}var Pt=4,Ft=6,It=20,Lt=256,Rt=new A,zt=new q,Bt=null,Vt=0,Ht=0,Ut=!1,Wt=new z,Gt=new z,Kt=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Wt}=i;Bt=this._renderer.getRenderTarget(),Vt=this._renderer.getActiveCubeFace(),Ht=this._renderer.getActiveMipmapLevel(),Ut=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$t(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qt(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Bt,Vt,Ht),this._renderer.xr.enabled=Ut,e.scissorTest=!1,Yt(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bt=this._renderer.getRenderTarget(),Vt=this._renderer.getActiveCubeFace(),Ht=this._renderer.getActiveMipmapLevel(),Ut=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Me,minFilter:Me,generateMipmaps:!1,type:T,format:U,colorSpace:Fe,depthBuffer:!1},r=Jt(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jt(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=qt(r)),this._blurMaterial=Zt(r,e,t),this._ggxMaterial=Xt(r,e,t)}return r}_compileMaterial(e){let t=new J(new De,e);this._renderer.compile(t,Rt)}_sceneToCubeUV(e,t,n,r,i){let a=new ft(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(zt),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new J(new We,new de({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(zt),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Yt(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$t()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qt());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Yt(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Rt)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Pt?n-d+Pt:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Yt(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Rt),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Yt(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Rt)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Yt(t,3*l*(r>this._lodMax-Pt?r-this._lodMax+Pt:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Rt)}};function qt(e){let t=[],n=[],r=e,i=e-Pt+1+Ft;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Gt.set(1,r,n):e===1?Gt.set(-n,1,-r):e===2?Gt.set(-n,r,1):e===3?Gt.set(-1,r,-n):e===4?Gt.set(-n,-1,r):Gt.set(n,r,-1),Gt.toArray(l,(e*6+t)*3)}}let u=new De;u.setAttribute(`position`,new $e(c,3)),u.setAttribute(`outputDirection`,new $e(l,3)),n.push(new J(u,null)),r>Pt&&r--}return{lodMeshes:n,sizeLods:t}}function Jt(e,t,n){let r=new p(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Yt(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Xt(e,t,n){return new E({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Lt,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:en(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Zt(e,t,n){return new E({name:`SphericalGaussianBlur`,defines:{SAMPLES:It,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:en(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Qt(){return new E({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:en(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function $t(){return new E({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:en(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function en(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var tn=class extends p{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new st(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new We(5,5,5),i=new E({name:`CubemapFromEquirect`,uniforms:re(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new J(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Me),new ct(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function nn(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new tn(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Kt(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Kt(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function rn(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&le(`WebGLRenderer: `+e+` extension not supported.`),t}}}function an(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?ke:it)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function on(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function sn(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:Re(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function cn(e,t,n){let r=new WeakMap,a=new s;function o(o,s,c){let u=o.morphTargetInfluences,d=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,f=d===void 0?0:d.length,p=r.get(s);if(p===void 0||p.count!==f){p!==void 0&&p.texture.dispose();let e=s.morphAttributes.position!==void 0,n=s.morphAttributes.normal!==void 0,o=s.morphAttributes.color!==void 0,c=s.morphAttributes.position||[],u=s.morphAttributes.normal||[],d=s.morphAttributes.color||[],m=0;e===!0&&(m=1),n===!0&&(m=2),o===!0&&(m=3);let h=s.attributes.position.count*m,g=1;h>t.maxTextureSize&&(g=Math.ceil(h/t.maxTextureSize),h=t.maxTextureSize);let _=new Float32Array(h*g*4*f),v=new l(_,h,g,f);v.type=i,v.needsUpdate=!0;let y=m*4;for(let t=0;t<f;t++){let r=c[t],i=u[t],s=d[t],l=h*g*4*t;for(let t=0;t<r.count;t++){let c=t*y;e===!0&&(a.fromBufferAttribute(r,t),_[l+c+0]=a.x,_[l+c+1]=a.y,_[l+c+2]=a.z,_[l+c+3]=0),n===!0&&(a.fromBufferAttribute(i,t),_[l+c+4]=a.x,_[l+c+5]=a.y,_[l+c+6]=a.z,_[l+c+7]=0),o===!0&&(a.fromBufferAttribute(s,t),_[l+c+8]=a.x,_[l+c+9]=a.y,_[l+c+10]=a.z,_[l+c+11]=s.itemSize===4?a.w:1)}}p={count:f,texture:v,size:new Y(h,g)},r.set(s,p);function b(){v.dispose(),r.delete(s),s.removeEventListener(`dispose`,b)}s.addEventListener(`dispose`,b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(e,`morphTexture`,o.morphTexture,n);else{let t=0;for(let e=0;e<u.length;e++)t+=u[e];let n=s.morphTargetsRelative?1:1-t;c.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),c.getUniforms().setValue(e,`morphTargetInfluences`,u)}c.getUniforms().setValue(e,`morphTargetsTexture`,p.texture,n),c.getUniforms().setValue(e,`morphTargetsTextureSize`,p.size)}return{update:o}}function ln(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var un={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function dn(e,t,n,r,i,a){let o=new p(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new De;l.setAttribute(`position`,new dt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new dt([0,2,0,0,2,0],2));let u=new F({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new J(l,u),f=new A(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new p(t,n,{type:T,depthBuffer:!1,stencilBuffer:!1}),c=new p(t,n,{type:T,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,u.defines={},Ne.getTransfer(m)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=un[h];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var fn=new Se,pn=new Ie(1,1),mn=new l,hn=new f,gn=new st,_n=[],vn=[],yn=new Float32Array(16),bn=new Float32Array(9),xn=new Float32Array(4);function Sn(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=_n[i];if(a===void 0&&(a=new Float32Array(i),_n[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Cn(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function wn(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Tn(e,t){let n=vn[t];n===void 0&&(n=new Int32Array(t),vn[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function En(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Dn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Cn(n,t))return;e.uniform2fv(this.addr,t),wn(n,t)}}function On(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Cn(n,t))return;e.uniform3fv(this.addr,t),wn(n,t)}}function kn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Cn(n,t))return;e.uniform4fv(this.addr,t),wn(n,t)}}function An(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Cn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),wn(n,t)}else{if(Cn(n,r))return;xn.set(r),e.uniformMatrix2fv(this.addr,!1,xn),wn(n,r)}}function jn(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Cn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),wn(n,t)}else{if(Cn(n,r))return;bn.set(r),e.uniformMatrix3fv(this.addr,!1,bn),wn(n,r)}}function Mn(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Cn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),wn(n,t)}else{if(Cn(n,r))return;yn.set(r),e.uniformMatrix4fv(this.addr,!1,yn),wn(n,r)}}function Nn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Pn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Cn(n,t))return;e.uniform2iv(this.addr,t),wn(n,t)}}function Fn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Cn(n,t))return;e.uniform3iv(this.addr,t),wn(n,t)}}function In(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Cn(n,t))return;e.uniform4iv(this.addr,t),wn(n,t)}}function Ln(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Rn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Cn(n,t))return;e.uniform2uiv(this.addr,t),wn(n,t)}}function zn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Cn(n,t))return;e.uniform3uiv(this.addr,t),wn(n,t)}}function Bn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Cn(n,t))return;e.uniform4uiv(this.addr,t),wn(n,t)}}function Vn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(pn.compareFunction=n.isReversedDepthBuffer()?518:515,a=pn):a=fn,n.setTexture2D(t||a,i)}function Hn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||hn,i)}function Un(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||gn,i)}function Wn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||mn,i)}function Gn(e){switch(e){case 5126:return En;case 35664:return Dn;case 35665:return On;case 35666:return kn;case 35674:return An;case 35675:return jn;case 35676:return Mn;case 5124:case 35670:return Nn;case 35667:case 35671:return Pn;case 35668:case 35672:return Fn;case 35669:case 35673:return In;case 5125:return Ln;case 36294:return Rn;case 36295:return zn;case 36296:return Bn;case 35678:case 36198:case 36298:case 36306:case 35682:return Vn;case 35679:case 36299:case 36307:return Hn;case 35680:case 36300:case 36308:case 36293:return Un;case 36289:case 36303:case 36311:case 36292:return Wn}}function Kn(e,t){e.uniform1fv(this.addr,t)}function qn(e,t){let n=Sn(t,this.size,2);e.uniform2fv(this.addr,n)}function Jn(e,t){let n=Sn(t,this.size,3);e.uniform3fv(this.addr,n)}function Yn(e,t){let n=Sn(t,this.size,4);e.uniform4fv(this.addr,n)}function Xn(e,t){let n=Sn(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Zn(e,t){let n=Sn(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Qn(e,t){let n=Sn(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function $n(e,t){e.uniform1iv(this.addr,t)}function er(e,t){e.uniform2iv(this.addr,t)}function tr(e,t){e.uniform3iv(this.addr,t)}function nr(e,t){e.uniform4iv(this.addr,t)}function rr(e,t){e.uniform1uiv(this.addr,t)}function ir(e,t){e.uniform2uiv(this.addr,t)}function ar(e,t){e.uniform3uiv(this.addr,t)}function or(e,t){e.uniform4uiv(this.addr,t)}function sr(e,t,n){let r=this.cache,i=t.length,a=Tn(n,i);Cn(r,a)||(e.uniform1iv(this.addr,a),wn(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?pn:fn;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function cr(e,t,n){let r=this.cache,i=t.length,a=Tn(n,i);Cn(r,a)||(e.uniform1iv(this.addr,a),wn(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||hn,a[e])}function lr(e,t,n){let r=this.cache,i=t.length,a=Tn(n,i);Cn(r,a)||(e.uniform1iv(this.addr,a),wn(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||gn,a[e])}function ur(e,t,n){let r=this.cache,i=t.length,a=Tn(n,i);Cn(r,a)||(e.uniform1iv(this.addr,a),wn(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||mn,a[e])}function dr(e){switch(e){case 5126:return Kn;case 35664:return qn;case 35665:return Jn;case 35666:return Yn;case 35674:return Xn;case 35675:return Zn;case 35676:return Qn;case 5124:case 35670:return $n;case 35667:case 35671:return er;case 35668:case 35672:return tr;case 35669:case 35673:return nr;case 5125:return rr;case 36294:return ir;case 36295:return ar;case 36296:return or;case 35678:case 36198:case 36298:case 36306:case 35682:return sr;case 35679:case 36299:case 36307:return cr;case 35680:case 36300:case 36308:case 36293:return lr;case 36289:case 36303:case 36311:case 36292:return ur}}var fr=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Gn(t.type)}},pr=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dr(t.type)}},mr=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},hr=/(\w+)(\])?(\[|\.)?/g;function gr(e,t){e.seq.push(t),e.map[t.id]=t}function _r(e,t,n){let r=e.name,i=r.length;for(hr.lastIndex=0;;){let a=hr.exec(r),o=hr.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){gr(n,l===void 0?new fr(s,e,t):new pr(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new mr(s),gr(n,e)),n=e}}}var vr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);_r(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function yr(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var br=37297,xr=0;function Sr(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Cr=new B;function wr(e){Ne._getMatrix(Cr,Ne.workingColorSpace,e);let t=`mat3( ${Cr.elements.map(e=>e.toFixed(4))} )`;switch(Ne.getTransfer(e)){case W:return[t,`LinearTransferOETF`];case me:return[t,`sRGBTransferOETF`];default:return k(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Tr(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Sr(e.getShaderSource(t),r)}return i}function Er(e,t){let n=wr(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Dr={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Or(e,t){let n=Dr[t];return n===void 0?(k(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var kr=new z;function Ar(){return Ne.getLuminanceCoefficients(kr),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${kr.x.toFixed(4)}, ${kr.y.toFixed(4)}, ${kr.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function jr(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Pr).join(`
`)}function Mr(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Nr(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Pr(e){return e!==``}function Fr(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ir(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Lr=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rr(e){return e.replace(Lr,Br)}var zr=new Map;function Br(e,t){let n=Z[t];if(n===void 0){let e=zr.get(t);if(e!==void 0)n=Z[e],k(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Rr(n)}var Vr=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hr(e){return e.replace(Vr,Ur)}function Ur(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Wr(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var Gr={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Kr(e){return Gr[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var qr={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Jr(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:qr[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Yr={302:`ENVMAP_MODE_REFRACTION`};function Xr(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Yr[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Zr={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Qr(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Zr[e.combine]||`ENVMAP_BLENDING_NONE`}function $r(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function ei(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Kr(n),l=Jr(n),u=Xr(n),d=Qr(n),f=$r(n),p=jr(n),m=Mr(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Pr).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Pr).join(`
`),_.length>0&&(_+=`
`)):(g=[Wr(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Pr).join(`
`),_=[Wr(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Z.tonemapping_pars_fragment,n.toneMapping===0?``:Or(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Z.colorspace_pars_fragment,Er(`linearToOutputTexel`,n.outputColorSpace),Ar(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Pr).join(`
`)),o=Rr(o),o=Fr(o,n),o=Ir(o,n),s=Rr(s),s=Fr(s,n),s=Ir(s,n),o=Hr(o),s=Hr(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=yr(i,i.VERTEX_SHADER,y),S=yr(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Tr(i,x,`vertex`),n=Tr(i,S,`fragment`);Re(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):k(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new vr(i,h),T=Nr(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,br)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=xr++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var ti=0,ni=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ri(e),t.set(e,n)),n}},ri=class{constructor(e){this.id=ti++,this.code=e,this.usedTimes=0}};function ii(e){return e===1030||e===37490||e===36285}function ai(e,t,n,r,i,a){let o=new Ce,s=new ni,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&k(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,A,j;if(C){let e=Tt[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),A=e.id,j=t.id}let M=e.getRenderTarget(),N=e.state.buffers.depth.getReversed(),P=h.isInstancedMesh===!0,ee=h.isBatchedMesh===!0,F=!!i.map,I=!!i.matcap,te=!!x,ne=!!i.aoMap,re=!!i.lightMap,ie=!!i.bumpMap&&i.wireframe===!1,L=!!i.normalMap,ae=!!i.displacementMap,oe=!!i.emissiveMap,R=!!i.metalnessMap,se=!!i.roughnessMap,ce=i.anisotropy>0,le=i.clearcoat>0,z=i.dispersion>0,B=i.retroreflectivity>0,V=i.iridescence>0,ue=i.sheen>0,de=i.transmission>0,fe=ce&&!!i.anisotropyMap,pe=le&&!!i.clearcoatMap,H=le&&!!i.clearcoatNormalMap,me=le&&!!i.clearcoatRoughnessMap,he=V&&!!i.iridescenceMap,ge=V&&!!i.iridescenceThicknessMap,_e=ue&&!!i.sheenColorMap,ve=ue&&!!i.sheenRoughnessMap,ye=!!i.specularMap,be=!!i.specularColorMap,xe=!!i.specularIntensityMap,Se=de&&!!i.transmissionMap,Ce=de&&!!i.thicknessMap,we=!!i.gradientMap,Te=!!i.alphaMap,Ee=i.alphaTest>0,De=!!i.alphaHash,Oe=!!i.extensions,ke=0;i.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(ke=e.toneMapping);let U={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:A,customFragmentShaderID:j,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:ee,batchingColor:ee&&h._colorsTexture!==null,instancing:P,instancingColor:P&&h.instanceColor!==null,instancingMorph:P&&h.morphTexture!==null,outputColorSpace:M===null?e.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Ne.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:F,matcap:I,envMap:te,envMapMode:te&&x.mapping,envMapCubeUVHeight:S,aoMap:ne,lightMap:re,bumpMap:ie,normalMap:L,displacementMap:ae,emissiveMap:oe,normalMapObjectSpace:L&&i.normalMapType===1,normalMapTangentSpace:L&&i.normalMapType===0,packedNormalMap:L&&i.normalMapType===0&&ii(i.normalMap.format),metalnessMap:R,roughnessMap:se,anisotropy:ce,anisotropyMap:fe,clearcoat:le,clearcoatMap:pe,clearcoatNormalMap:H,clearcoatRoughnessMap:me,dispersion:z,retroreflection:B,iridescence:V,iridescenceMap:he,iridescenceThicknessMap:ge,sheen:ue,sheenColorMap:_e,sheenRoughnessMap:ve,specularMap:ye,specularColorMap:be,specularIntensityMap:xe,transmission:de,transmissionMap:Se,thicknessMap:Ce,gradientMap:we,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Te,alphaTest:Ee,alphaHash:De,combine:i.combine,mapUv:F&&m(i.map.channel),aoMapUv:ne&&m(i.aoMap.channel),lightMapUv:re&&m(i.lightMap.channel),bumpMapUv:ie&&m(i.bumpMap.channel),normalMapUv:L&&m(i.normalMap.channel),displacementMapUv:ae&&m(i.displacementMap.channel),emissiveMapUv:oe&&m(i.emissiveMap.channel),metalnessMapUv:R&&m(i.metalnessMap.channel),roughnessMapUv:se&&m(i.roughnessMap.channel),anisotropyMapUv:fe&&m(i.anisotropyMap.channel),clearcoatMapUv:pe&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:H&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:ve&&m(i.sheenRoughnessMap.channel),specularMapUv:ye&&m(i.specularMap.channel),specularColorMapUv:be&&m(i.specularColorMap.channel),specularIntensityMapUv:xe&&m(i.specularIntensityMap.channel),transmissionMapUv:Se&&m(i.transmissionMap.channel),thicknessMapUv:Ce&&m(i.thicknessMap.channel),alphaMapUv:Te&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(L||ce),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(F||Te),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&L===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:N,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:ke,decodeVideoTexture:F&&i.map.isVideoTexture===!0&&Ne.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:oe&&i.emissiveMap.isVideoTexture===!0&&Ne.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Oe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Oe&&i.extensions.multiDraw===!0||ee)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return U.vertexUv1s=c.has(1),U.vertexUv2s=c.has(2),U.vertexUv3s=c.has(3),c.clear(),U}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Tt[t];n=je.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new ei(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function oi(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function si(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ci(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function li(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||si),r.length>1&&r.sort(t||ci),i.length>1&&i.sort(t||ci)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function ui(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new li,e.set(t,[i])):n>=r.length?(i=new li,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function di(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new z,color:new q};break;case`SpotLight`:n={position:new z,direction:new z,color:new q,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new z,color:new q,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new z,skyColor:new q,groundColor:new q};break;case`RectAreaLight`:n={color:new q,position:new z,halfWidth:new z,halfHeight:new z}}return e[t.id]=n,n}}}function fi(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var pi=0;function mi(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function hi(e){let t=new di,n=fi(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new z);let i=new z,a=new c,o=new c;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(mi);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Q.LTC_FLOAT_1,r.rectAreaLTC2=Q.LTC_FLOAT_2):(r.rectAreaLTC1=Q.LTC_HALF_1,r.rectAreaLTC2=Q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=pi++)}function l(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:l,state:r}}function gi(e){let t=new hi(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function _i(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new gi(e),t.set(n,[a])):r>=i.length?(a=new gi(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var vi=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yi=`uniform sampler2D shadow_pass;
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
}`,bi=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],xi=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Si=new c,Ci=new z,wi=new z;function Ti(e,t,n){let r=new v,a=new Y,o=new Y,c=new s,l=new m,u=new d,f={},h=n.maxTextureSize,g={0:1,1:0,2:2},_=new E({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Y},radius:{value:4}},vertexShader:vi,fragmentShader:yi}),y=_.clone();y.defines.HORIZONTAL_PASS=1;let b=new De;b.setAttribute(`position`,new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new J(b,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let C=this.type;this.render=function(t,n,s){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||t.length===0)return;this.type===2&&(k(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let l=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let m=C!==this.type;m&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let l=0,u=t.length;l<u;l++){let u=t[l],d=u.shadow;if(d===void 0){k(`WebGLShadowMap:`,u,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;a.copy(d.mapSize);let g=d.getFrameExtents();a.multiply(g),o.copy(d.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(o.x=Math.floor(h/g.x),a.x=o.x*g.x,d.mapSize.x=o.x),a.y>h&&(o.y=Math.floor(h/g.y),a.y=o.y*g.y,d.mapSize.y=o.y));let _=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=_,d.map===null||m===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(u.isPointLight){k(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new p(a.x,a.y,{format:Le,type:T,minFilter:Me,magFilter:Me,generateMipmaps:!1}),d.map.texture.name=u.name+`.shadowMap`,d.map.depthTexture=new Ie(a.x,a.y,i),d.map.depthTexture.name=u.name+`.shadowMapDepth`,d.map.depthTexture.format=Be,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=P,d.map.depthTexture.magFilter=P}else u.isPointLight?(d.map=new tn(a.x),d.map.depthTexture=new we(a.x,ye)):(d.map=new p(a.x,a.y),d.map.depthTexture=new Ie(a.x,a.y,ye)),d.map.depthTexture.name=u.name+`.shadowMap`,d.map.depthTexture.format=Be,this.type===1?(d.map.depthTexture.compareFunction=_?518:515,d.map.depthTexture.minFilter=Me,d.map.depthTexture.magFilter=Me):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=P,d.map.depthTexture.magFilter=P);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==a.x||d.map.height!==a.y)&&d.map.setSize(a.x,a.y);let v=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();u.isPointLight!==!0&&d.updateMatrices(u,s);for(let t=0;t<v;t++){let i=d.getCamera(t);if(u.isPointLight){let e=d.camera,n=d.matrix,r=u.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Ci.setFromMatrixPosition(u.matrixWorld),e.position.copy(Ci),wi.copy(e.position),wi.add(bi[t]),e.up.copy(xi[t]),e.lookAt(wi),e.updateMatrixWorld(),n.makeTranslation(-Ci.x,-Ci.y,-Ci.z),Si.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Si,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);c.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),f.viewport(c)}r=d.getFrustum(t),O(n,s,i,u,this.type)}d.isPointLightShadow!==!0&&this.type===3&&w(d,s),d.needsUpdate=!1}C=this.type,S.needsUpdate=!1,e.setRenderTarget(l,u,d)};function w(n,r){let i=t.update(x);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,y.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),n.mapPass===null?n.mapPass=new p(a.x,a.y,{format:Le,type:T}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,x,null),y.uniforms.shadow_pass.value=n.mapPass.texture,y.uniforms.resolution.value.set(n.map.width,n.map.height),y.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,y,x,null)}function D(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=f[e];r===void 0&&(r={},f[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,A)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?g[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function O(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=D(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=D(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)O(c[e],i,a,o,s)}function A(e){e.target.removeEventListener(`dispose`,A);for(let t in f){let n=f[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Ei(e,t){function n(){let t=!1,n=new s,r=null,i=new s(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?R(e.DEPTH_TEST):se(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=ce[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?R(e.STENCIL_TEST):se(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,c=new i,l=new WeakMap,u=new WeakMap,d={},f={},p={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new q(0,0,0),E=0,D=!1,O=null,k=null,A=null,j=null,M=null,N=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),P=!1,ee=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),P=ee>=2):(ee=parseFloat(/^WebGL (\d)/.exec(F)[1]),P=ee>=1);let I=null,te={},ne=e.getParameter(e.SCISSOR_BOX),re=e.getParameter(e.VIEWPORT),ie=new s().fromArray(ne),L=new s().fromArray(re);function ae(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let oe={};oe[e.TEXTURE_2D]=ae(e.TEXTURE_2D,e.TEXTURE_2D,1),oe[e.TEXTURE_CUBE_MAP]=ae(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[e.TEXTURE_2D_ARRAY]=ae(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),oe[e.TEXTURE_3D]=ae(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),c.setClear(0),R(e.DEPTH_TEST),o.setFunc(3),pe(!1),H(1),R(e.CULL_FACE),de(0);function R(t){d[t]!==!0&&(e.enable(t),d[t]=!0)}function se(t){d[t]!==!1&&(e.disable(t),d[t]=!1)}function le(t,n){return p[t]!==n&&(e.bindFramebuffer(t,n),p[t]=n,t===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=n),!0)}function z(t,n){let r=h,i=!1;if(t){r=m.get(n),r===void 0&&(r=[],m.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function B(t){return g!==t&&(e.useProgram(t),g=t,!0)}let V={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};V[103]=e.MIN,V[104]=e.MAX;let ue={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function de(t,n,r,i,a,o,s,c,l,u){if(t===0)_===!0&&(se(e.BLEND),_=!1);else if(_===!1&&(R(e.BLEND),_=!0),t!==5){if(t!==v||u!==D){if((y!==100||S!==100)&&(e.blendEquation(e.FUNC_ADD),y=100,S=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Re(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:Re(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:Re(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:Re(`WebGLState: Invalid blending: `,t)}b=null,x=null,C=null,w=null,T.set(0,0,0),E=0,v=t,D=u}}else a||=n,o||=r,s||=i,(n!==y||a!==S)&&(e.blendEquationSeparate(V[n],V[a]),y=n,S=a),(r!==b||i!==x||o!==C||s!==w)&&(e.blendFuncSeparate(ue[r],ue[i],ue[o],ue[s]),b=r,x=i,C=o,w=s),(c.equals(T)===!1||l!==E)&&(e.blendColor(c.r,c.g,c.b,l),T.copy(c),E=l),v=t,D=!1}function fe(t,n){t.side===2?se(e.CULL_FACE):R(e.CULL_FACE);let r=t.side===1;n&&(r=!r),pe(r),t.blending===1&&t.transparent===!1?de(0):de(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;c.setTest(i),i&&(c.setMask(t.stencilWriteMask),c.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),c.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),he(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?R(e.SAMPLE_ALPHA_TO_COVERAGE):se(e.SAMPLE_ALPHA_TO_COVERAGE)}function pe(t){O!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),O=t)}function H(t){t===0?se(e.CULL_FACE):(R(e.CULL_FACE),t!==k&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),k=t}function me(t){t!==A&&(P&&e.lineWidth(t),A=t)}function he(t,n,r){t?(R(e.POLYGON_OFFSET_FILL),(j!==n||M!==r)&&(j=n,M=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):se(e.POLYGON_OFFSET_FILL)}function ge(t){t?R(e.SCISSOR_TEST):se(e.SCISSOR_TEST)}function _e(t){t===void 0&&(t=e.TEXTURE0+N-1),I!==t&&(e.activeTexture(t),I=t)}function ve(t,n,r){r===void 0&&(r=I===null?e.TEXTURE0+N-1:I);let i=te[r];i===void 0&&(i={type:void 0,texture:void 0},te[r]=i),(i.type!==t||i.texture!==n)&&(I!==r&&(e.activeTexture(r),I=r),e.bindTexture(t,n||oe[t]),i.type=t,i.texture=n)}function ye(){let t=te[I];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function be(){try{e.compressedTexImage2D(...arguments)}catch(e){Re(`WebGLState:`,e)}}function xe(){try{e.compressedTexImage3D(...arguments)}catch(e){Re(`WebGLState:`,e)}}function Se(){try{e.texSubImage2D(...arguments)}catch(e){Re(`WebGLState:`,e)}}function Ce(){try{e.texSubImage3D(...arguments)}catch(e){Re(`WebGLState:`,e)}}function we(){try{e.compressedTexSubImage2D(...arguments)}catch(e){Re(`WebGLState:`,e)}}function Te(){try{e.compressedTexSubImage3D(...arguments)}catch(e){Re(`WebGLState:`,e)}}function Ee(){try{e.texStorage2D(...arguments)}catch(e){Re(`WebGLState:`,e)}}function De(){try{e.texStorage3D(...arguments)}catch(e){Re(`WebGLState:`,e)}}function Oe(){try{e.texImage2D(...arguments)}catch(e){Re(`WebGLState:`,e)}}function ke(){try{e.texImage3D(...arguments)}catch(e){Re(`WebGLState:`,e)}}function U(t){return f[t]===void 0?e.getParameter(t):f[t]}function Ae(t,n){f[t]!==n&&(e.pixelStorei(t,n),f[t]=n)}function je(t){ie.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ie.copy(t))}function Me(t){L.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),L.copy(t))}function W(t,n){let r=u.get(n);r===void 0&&(r=new WeakMap,u.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ne(t,n){let r=u.get(n).get(t);l.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),l.set(n,r))}function Pe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),d={},f={},I=null,te={},p={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new q(0,0,0),E=0,D=!1,O=null,k=null,A=null,j=null,M=null,ie.set(0,0,e.canvas.width,e.canvas.height),L.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),c.reset()}return{buffers:{color:a,depth:o,stencil:c},enable:R,disable:se,bindFramebuffer:le,drawBuffers:z,useProgram:B,setBlending:de,setMaterial:fe,setFlipSided:pe,setCullFace:H,setLineWidth:me,setPolygonOffset:he,setScissorTest:ge,activeTexture:_e,bindTexture:ve,unbindTexture:ye,compressedTexImage2D:be,compressedTexImage3D:xe,texImage2D:Oe,texImage3D:ke,pixelStorei:Ae,getParameter:U,updateUBOMapping:W,uniformBlockBinding:Ne,texStorage2D:Ee,texStorage3D:De,texSubImage2D:Se,texSubImage3D:Ce,compressedTexSubImage2D:we,compressedTexSubImage3D:Te,scissor:je,viewport:Me,reset:Pe}}function Di(e,r,i,a,o,s,c){let l=r.has(`WEBGL_multisampled_render_to_texture`)?r.get(`WEBGL_multisampled_render_to_texture`):null,u=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Y,f=new WeakMap,p=new Set,m,h=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function _(e,t){return g?new OffscreenCanvas(e,t):n(`canvas`)}function v(e,t,n){let r=1,i=Ee(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);m===void 0&&(m=_(n,a));let o=t?_(n,a):m;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),k(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&k(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function y(e){return e.generateMipmaps}function b(t){e.generateMipmap(t)}function x(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(t,n,i,a,o,s=!1){if(t!==null){if(e[t]!==void 0)return e[t];k(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+t+`'`)}let c;a&&(c=r.get(`EXT_texture_norm16`),c||k(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=n;if(n===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),n===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),n===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),n===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),n===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),n===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),n===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),n===e.RGBA){let t=s?W:Ne.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&r.get(`EXT_color_buffer_float`),l}function C(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,k(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function w(e,t){return y(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function T(e){let t=e.target;t.removeEventListener(`dispose`,T),D(t),t.isVideoTexture&&f.delete(t),t.isHTMLTexture&&p.delete(t)}function E(e){let t=e.target;t.removeEventListener(`dispose`,E),j(t)}function D(e){let t=a.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=h.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&A(e),Object.keys(r).length===0&&h.delete(n)}a.remove(e)}function A(t){let n=a.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=h.get(r);delete i[n.__cacheKey],c.memory.textures--}function j(t){let n=a.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),a.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=t.textures;for(let t=0,n=r.length;t<n;t++){let n=a.get(r[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),c.memory.textures--),a.remove(r[t])}a.remove(t)}let M=0;function ee(){M=0}function F(){return M}function I(e){M=e}function ne(){let e=M;return e>=o.maxTextures&&k(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+o.maxTextures),M+=1,e}function re(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ie(t,n){let r=a.get(t);if(t.isVideoTexture&&we(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)k(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)k(`WebGLRenderer: Texture marked for update but image is incomplete`);else{de(r,t,n);return}}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function L(t,n){let r=a.get(t);t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version?de(r,t,n):(t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null),i.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n))}function ae(t,n){let r=a.get(t);t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version?de(r,t,n):i.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function R(t,n){let r=a.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&r.__version!==t.version?fe(r,t,n):i.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let se={[O]:e.REPEAT,[Ke]:e.CLAMP_TO_EDGE,[ze]:e.MIRRORED_REPEAT},ce={[P]:e.NEAREST,[oe]:e.NEAREST_MIPMAP_NEAREST,[te]:e.NEAREST_MIPMAP_LINEAR,[Me]:e.LINEAR,[He]:e.LINEAR_MIPMAP_NEAREST,[Je]:e.LINEAR_MIPMAP_LINEAR},le={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function z(t,n){if(n.type===1015&&r.has(`OES_texture_float_linear`)===!1&&(n.magFilter===1006||n.magFilter===1007||n.magFilter===1005||n.magFilter===1008||n.minFilter===1006||n.minFilter===1007||n.minFilter===1005||n.minFilter===1008)&&k(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(t,e.TEXTURE_WRAP_S,se[n.wrapS]),e.texParameteri(t,e.TEXTURE_WRAP_T,se[n.wrapT]),(t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY)&&e.texParameteri(t,e.TEXTURE_WRAP_R,se[n.wrapR]),e.texParameteri(t,e.TEXTURE_MAG_FILTER,ce[n.magFilter]),e.texParameteri(t,e.TEXTURE_MIN_FILTER,ce[n.minFilter]),n.compareFunction&&(e.texParameteri(t,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(t,e.TEXTURE_COMPARE_FUNC,le[n.compareFunction])),r.has(`EXT_texture_filter_anisotropic`)===!0){if(n.magFilter===1003||n.minFilter!==1005&&n.minFilter!==1008||n.type===1015&&r.has(`OES_texture_float_linear`)===!1)return;if(n.anisotropy>1||a.get(n).__currentAnisotropy){let i=r.get(`EXT_texture_filter_anisotropic`);e.texParameterf(t,i.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(n.anisotropy,o.getMaxAnisotropy())),a.get(n).__currentAnisotropy=n.anisotropy}}}function B(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,T));let i=n.source,a=h.get(i);a===void 0&&(a={},h.set(i,a));let o=re(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},c.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&A(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function V(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ue(t,n,r,a){let o=t.updateRanges;if(o.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,r,a,n.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],r=o[e],i=t.start+t.count,a=V(r.start,n.width,4),c=V(t.start,n.width,4);r.start<=i+1&&a===c&&V(r.start+r.count-1,n.width,4)===a?t.count=Math.max(t.count,r.start+r.count-t.start):(++s,o[s]=r)}o.length=s+1;let c=i.getParameter(e.UNPACK_ROW_LENGTH),l=i.getParameter(e.UNPACK_SKIP_PIXELS),u=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,n.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%n.width,d=Math.floor(c/n.width),f=l;i.pixelStorei(e.UNPACK_SKIP_PIXELS,u),i.pixelStorei(e.UNPACK_SKIP_ROWS,d),i.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,r,a,n.data)}t.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,c),i.pixelStorei(e.UNPACK_SKIP_PIXELS,l),i.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function de(n,r,c){let l=e.TEXTURE_2D;(r.isDataArrayTexture||r.isCompressedArrayTexture)&&(l=e.TEXTURE_2D_ARRAY),r.isData3DTexture&&(l=e.TEXTURE_3D);let u=B(n,r),d=r.source;i.bindTexture(l,n.__webglTexture,e.TEXTURE0+c);let f=a.get(d);if(d.version!==f.__version||u===!0){if(i.activeTexture(e.TEXTURE0+c),!(typeof ImageBitmap<`u`&&r.image instanceof ImageBitmap)){let t=Ne.getPrimaries(Ne.workingColorSpace),n=r.colorSpace===``?null:Ne.getPrimaries(r.colorSpace),a=r.colorSpace===``||t===n?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,a)}i.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment);let n=v(r.image,!1,o.maxTextureSize);n=Te(r,n);let a=s.convert(r.format,r.colorSpace),m=s.convert(r.type),h=S(r.internalFormat,a,m,r.normalized,r.colorSpace,r.isVideoTexture);z(l,r);let g,_=r.mipmaps,x=r.isVideoTexture!==!0,T=f.__version===void 0||u===!0,E=d.dataReady,D=w(r,n);if(r.isDepthTexture)h=C(r.format===t,r.type),T&&(x?i.texStorage2D(e.TEXTURE_2D,1,h,n.width,n.height):i.texImage2D(e.TEXTURE_2D,0,h,n.width,n.height,0,a,m,null));else if(r.isDataTexture){if(_.length>0){x&&T&&i.texStorage2D(e.TEXTURE_2D,D,h,_[0].width,_[0].height);for(let t=0,n=_.length;t<n;t++)g=_[t],x?E&&i.texSubImage2D(e.TEXTURE_2D,t,0,0,g.width,g.height,a,m,g.data):i.texImage2D(e.TEXTURE_2D,t,h,g.width,g.height,0,a,m,g.data);r.generateMipmaps=!1}else x?(T&&i.texStorage2D(e.TEXTURE_2D,D,h,n.width,n.height),E&&ue(r,n,a,m)):i.texImage2D(e.TEXTURE_2D,0,h,n.width,n.height,0,a,m,n.data)}else if(r.isCompressedTexture){if(r.isCompressedArrayTexture){x&&T&&i.texStorage3D(e.TEXTURE_2D_ARRAY,D,h,_[0].width,_[0].height,n.depth);for(let t=0,o=_.length;t<o;t++)if(g=_[t],r.format!==1023){if(a!==null){if(x){if(E){if(r.layerUpdates.size>0){let n=N(g.width,g.height,r.format,r.type);for(let o of r.layerUpdates){let r=g.data.subarray(o*n/g.data.BYTES_PER_ELEMENT,(o+1)*n/g.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,o,g.width,g.height,1,a,r)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,g.width,g.height,n.depth,a,g.data)}}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,t,h,g.width,g.height,n.depth,0,g.data,0,0)}else k(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else x?E&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,g.width,g.height,n.depth,a,m,g.data):i.texImage3D(e.TEXTURE_2D_ARRAY,t,h,g.width,g.height,n.depth,0,a,m,g.data);r.layerUpdates.size>0&&r.clearLayerUpdates()}else{x&&T&&i.texStorage2D(e.TEXTURE_2D,D,h,_[0].width,_[0].height);for(let t=0,n=_.length;t<n;t++)g=_[t],r.format===1023?x?E&&i.texSubImage2D(e.TEXTURE_2D,t,0,0,g.width,g.height,a,m,g.data):i.texImage2D(e.TEXTURE_2D,t,h,g.width,g.height,0,a,m,g.data):a===null?k(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):x?E&&i.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,g.width,g.height,a,g.data):i.compressedTexImage2D(e.TEXTURE_2D,t,h,g.width,g.height,0,g.data)}}else if(r.isDataArrayTexture){if(x){if(T&&i.texStorage3D(e.TEXTURE_2D_ARRAY,D,h,n.width,n.height,n.depth),E){if(r.layerUpdates.size>0){let t=N(n.width,n.height,r.format,r.type);for(let o of r.layerUpdates){let r=n.data.subarray(o*t/n.data.BYTES_PER_ELEMENT,(o+1)*t/n.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,o,n.width,n.height,1,a,m,r)}r.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,n.width,n.height,n.depth,a,m,n.data)}}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,h,n.width,n.height,n.depth,0,a,m,n.data)}else if(r.isData3DTexture)x?(T&&i.texStorage3D(e.TEXTURE_3D,D,h,n.width,n.height,n.depth),E&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,n.width,n.height,n.depth,a,m,n.data)):i.texImage3D(e.TEXTURE_3D,0,h,n.width,n.height,n.depth,0,a,m,n.data);else if(r.isFramebufferTexture){if(T){if(x)i.texStorage2D(e.TEXTURE_2D,D,h,n.width,n.height);else{let t=n.width,r=n.height;for(let n=0;n<D;n++)i.texImage2D(e.TEXTURE_2D,n,h,t,r,0,a,m,null),t>>=1,r>>=1}}}else if(r.isHTMLTexture){if(`texElementImage2D`in e){let t=e.canvas;if(t.hasAttribute(`layoutsubtree`)||t.setAttribute(`layoutsubtree`,`true`),n.parentNode!==t){t.appendChild(n),p.add(r),t.onpaint=e=>{let t=e.changedElements;for(let e of p)t.includes(e.image)&&(e.needsUpdate=!0)},t.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,n);else{let t=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,t,r,i,n)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(_.length>0){if(x&&T){let t=Ee(_[0]);i.texStorage2D(e.TEXTURE_2D,D,h,t.width,t.height)}for(let t=0,n=_.length;t<n;t++)g=_[t],x?E&&i.texSubImage2D(e.TEXTURE_2D,t,0,0,a,m,g):i.texImage2D(e.TEXTURE_2D,t,h,a,m,g);r.generateMipmaps=!1}else if(x){if(T){let t=Ee(n);i.texStorage2D(e.TEXTURE_2D,D,h,t.width,t.height)}E&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,a,m,n)}else i.texImage2D(e.TEXTURE_2D,0,h,a,m,n);y(r)&&b(l),f.__version=d.version,r.onUpdate&&r.onUpdate(r)}n.__version=r.version}function fe(t,n,r){if(n.image.length!==6)return;let c=B(t,n),l=n.source;i.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let u=a.get(l);if(l.version!==u.__version||c===!0){i.activeTexture(e.TEXTURE0+r);let t=Ne.getPrimaries(Ne.workingColorSpace),a=n.colorSpace===``?null:Ne.getPrimaries(n.colorSpace),d=n.colorSpace===``||t===a?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=n.isCompressedTexture||n.image[0].isCompressedTexture,p=n.image[0]&&n.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=v(n.image[e],!0,o.maxCubemapSize):m[e]=p?n.image[e].image:n.image[e],m[e]=Te(n,m[e]);let h=m[0],g=s.convert(n.format,n.colorSpace),_=s.convert(n.type),x=S(n.internalFormat,g,_,n.normalized,n.colorSpace),C=n.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=w(n,h);z(e.TEXTURE_CUBE_MAP,n);let O;if(f){C&&T&&i.texStorage2D(e.TEXTURE_CUBE_MAP,D,x,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let a=O[r];n.format===1023?C?E&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,a.width,a.height,g,_,a.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,a.width,a.height,0,g,_,a.data):g===null?k(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):C?E&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,a.width,a.height,g,a.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,a.width,a.height,0,a.data)}}}else{if(O=n.mipmaps,C&&T){O.length>0&&D++;let t=Ee(m[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,D,x,t.width,t.height)}for(let t=0;t<6;t++)if(p){C?E&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,m[t].width,m[t].height,0,g,_,m[t].data);for(let n=0;n<O.length;n++){let r=O[n].image[t].image;C?E&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,g,_,r.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,x,r.width,r.height,0,g,_,r.data)}}else{C?E&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,g,_,m[t]);for(let n=0;n<O.length;n++){let r=O[n];C?E&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,r.image[t]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,x,g,_,r.image[t])}}}y(n)&&b(e.TEXTURE_CUBE_MAP),u.__version=l.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function pe(t,n,r,o,c,u){let d=s.convert(r.format,r.colorSpace),f=s.convert(r.type),p=S(r.internalFormat,d,f,r.normalized,r.colorSpace),m=a.get(n),h=a.get(r);if(h.__renderTarget=n,!m.__hasExternalTextures){let t=Math.max(1,n.width>>u),r=Math.max(1,n.height>>u);c===e.TEXTURE_3D||c===e.TEXTURE_2D_ARRAY?i.texImage3D(c,u,p,t,r,n.depth,0,d,f,null):i.texImage2D(c,u,p,t,r,0,d,f,null)}i.bindFramebuffer(e.FRAMEBUFFER,t),Ce(n)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,o,c,h.__webglTexture,0,Se(n)):(c===e.TEXTURE_2D||c>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&c<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,o,c,h.__webglTexture,u),i.bindFramebuffer(e.FRAMEBUFFER,null)}function H(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=C(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ce(n)?l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Se(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Se(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=s.convert(a.format,a.colorSpace),c=s.convert(a.type),u=S(a.internalFormat,o,c,a.normalized,a.colorSpace);Ce(n)?l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Se(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Se(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function me(t,n,r){let o=n.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=a.get(n.depthTexture);if(c.__renderTarget=n,(!c.__webglTexture||n.depthTexture.image.width!==n.width||n.depthTexture.image.height!==n.height)&&(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),o){if(c.__webglInit===void 0&&(c.__webglInit=!0,n.depthTexture.addEventListener(`dispose`,T)),c.__webglTexture===void 0){c.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),z(e.TEXTURE_CUBE_MAP,n.depthTexture);let t=s.convert(n.depthTexture.format),r=s.convert(n.depthTexture.type),a;n.depthTexture.format===1026?a=e.DEPTH_COMPONENT24:n.depthTexture.format===1027&&(a=e.DEPTH24_STENCIL8);for(let i=0;i<6;i++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,a,n.width,n.height,0,t,r,null)}}else ie(n.depthTexture,0);let u=c.__webglTexture,d=Se(n),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+r:e.TEXTURE_2D,p=n.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(n.depthTexture.format===1026)Ce(n)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(n.depthTexture.format===1027)Ce(n)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function he(t){let n=a.get(t),r=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer){if(r)for(let e=0;e<6;e++)me(n.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?me(n.__webglFramebuffer[0],t,0):me(n.__webglFramebuffer,t,0)}}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(i.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]===void 0)n.__webglDepthbuffer[r]=e.createRenderbuffer(),H(n.__webglDepthbuffer[r],t,!1);else{let i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?i.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),H(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function ge(t,n,r){let i=a.get(t);n!==void 0&&pe(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&he(t)}function _e(t){let n=t.texture,r=a.get(t),o=a.get(n);t.addEventListener(`dispose`,E);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(o.__webglTexture===void 0&&(o.__webglTexture=e.createTexture()),o.__version=n.version,c.memory.textures++),u){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=a.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),c.memory.textures++)}if(t.samples>0&&Ce(t)===!1){r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let i=l[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let a=s.convert(i.format,i.colorSpace),o=s.convert(i.type),c=S(i.internalFormat,a,o,i.normalized,i.colorSpace,t.isXRRenderTarget===!0),u=Se(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),H(r.__webglDepthRenderbuffer,t,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){i.bindTexture(e.TEXTURE_CUBE_MAP,o.__webglTexture),z(e.TEXTURE_CUBE_MAP,n);for(let i=0;i<6;i++)if(n.mipmaps&&n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)pe(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else pe(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);y(n)&&b(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(d){for(let n=0,o=l.length;n<o;n++){let o=l[n],s=a.get(o),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(c,s.__webglTexture),z(c,o),pe(r.__webglFramebuffer,t,o,e.COLOR_ATTACHMENT0+n,c,0),y(o)&&b(c)}i.unbindTexture()}else{let a=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(a=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(a,o.__webglTexture),z(a,n),n.mipmaps&&n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)pe(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,a,i);else pe(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,a,0);y(n)&&b(a),i.unbindTexture()}t.depthBuffer&&he(t)}function ve(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(y(r)){let t=x(e),n=a.get(r).__webglTexture;i.bindTexture(t,n),b(t),i.unbindTexture()}}}let ye=[],be=[];function xe(t){if(t.samples>0){if(Ce(t)===!1){let n=t.textures,r=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,c=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,l=a.get(t),d=n.length>1;if(d)for(let t=0;t<n.length;t++)i.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,l.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglFramebuffer);for(let i=0;i<n.length;i++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,l.__webglColorRenderbuffer[i]);let t=a.get(n[i]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,o,0,0,r,o,s,e.NEAREST),u===!0&&(ye.length=0,be.length=0,ye.push(e.COLOR_ATTACHMENT0+i),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(ye.push(c),be.push(c),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,be)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ye))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<n.length;t++){i.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,l.__webglColorRenderbuffer[t]);let r=a.get(n[t]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&u){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Se(e){return Math.min(o.maxSamples,e.samples)}function Ce(e){let t=a.get(e);return e.samples>0&&r.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function we(e){let t=c.render.frame;f.get(e)!==t&&(f.set(e,t),e.update())}function Te(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Ne.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&k(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):Re(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ee(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(d.width=e.naturalWidth||e.width,d.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(d.width=e.displayWidth,d.height=e.displayHeight):(d.width=e.width,d.height=e.height),d}this.allocateTextureUnit=ne,this.resetTextureUnits=ee,this.getTextureUnits=F,this.setTextureUnits=I,this.setTexture2D=ie,this.setTexture2DArray=L,this.setTexture3D=ae,this.setTextureCube=R,this.rebindTextures=ge,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Ce,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Oi(e,t){function n(n,r=``){let i,a=Ne.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var ki=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ai=`
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

}`,ji=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new b(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new E({vertexShader:ki,fragmentShader:Ai,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new J(new H(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mi=class extends h{constructor(e,n){super();let r=this,i=null,a=1,o=null,c=`local-floor`,l=1,d=null,f=null,m=null,h=null,g=null,_=null,v=typeof XRWebGLBinding<`u`,y=new ji,x={},S=n.getContextAttributes(),C=null,w=null,T=[],E=[],D=new Y,O=null,A=null,j=new ft;j.viewport=new s;let M=new ft;M.viewport=new s;let N=[j,M],P=new Ze,ee=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=T[e];return t===void 0&&(t=new u,T[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=T[e];return t===void 0&&(t=new u,T[e]=t),t.getGripSpace()},this.getHand=function(e){let t=T[e];return t===void 0&&(t=new u,T[e]=t),t.getHandSpace()};function I(e){let t=E.indexOf(e.inputSource);if(t===-1)return;let n=T[t];n!==void 0&&(n.update(e.inputSource,e.frame,d||o),n.dispatchEvent({type:e.type,data:e.inputSource}))}function te(){i.removeEventListener(`select`,I),i.removeEventListener(`selectstart`,I),i.removeEventListener(`selectend`,I),i.removeEventListener(`squeeze`,I),i.removeEventListener(`squeezestart`,I),i.removeEventListener(`squeezeend`,I),i.removeEventListener(`end`,te),i.removeEventListener(`inputsourceschange`,ne);for(let e=0;e<T.length;e++){let t=E[e];t!==null&&(E[e]=null,T[e].disconnect(t))}ee=null,F=null,y.reset();for(let e in x)delete x[e];if(e.setRenderTarget(C),g=null,h=null,m=null,i=null,w=null,ce.stop(),r.isPresenting=!1,e.setPixelRatio(O),e.setSize(D.width,D.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}r.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){a=e,r.isPresenting===!0&&k(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){c=e,r.isPresenting===!0&&k(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return d||o},this.setReferenceSpace=function(e){d=e},this.getBaseLayer=function(){return h===null?g:h},this.getBinding=function(){return m===null&&v&&(m=new XRWebGLBinding(i,n)),m},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(s){if(i=s,i!==null){if(C=e.getRenderTarget(),i.addEventListener(`select`,I),i.addEventListener(`selectstart`,I),i.addEventListener(`selectend`,I),i.addEventListener(`squeeze`,I),i.addEventListener(`squeezestart`,I),i.addEventListener(`squeezeend`,I),i.addEventListener(`end`,te),i.addEventListener(`inputsourceschange`,ne),S.xrCompatible!==!0&&await n.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(D),v&&`createProjectionLayer`in XRWebGLBinding.prototype){let r=null,o=null,s=null;S.depth&&(s=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,r=S.stencil?t:Be,o=S.stencil?Pe:ye);let c={colorFormat:n.RGBA8,depthFormat:s,scaleFactor:a};m=this.getBinding(),h=m.createProjectionLayer(c),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),w=new p(h.textureWidth,h.textureHeight,{format:U,type:qe,depthTexture:new Ie(h.textureWidth,h.textureHeight,o,void 0,void 0,void 0,void 0,void 0,void 0,r),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let t={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(i,n,t),i.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),w=new p(g.framebufferWidth,g.framebufferHeight,{format:U,type:qe,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),d=null,o=await i.requestReferenceSpace(c),ce.setContext(i),ce.start(),r.isPresenting=!0,r.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ne(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=E.indexOf(n);r>=0&&(E[r]=null,T[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=E.indexOf(n);if(r===-1){for(let e=0;e<T.length;e++)if(e>=E.length){E.push(n),r=e;break}else if(E[e]===null){E[e]=n,r=e;break}if(r===-1)break}let i=T[r];i&&i.connect(n)}}let re=new z,ie=new z;function L(e,t,n){re.setFromMatrixPosition(t.matrixWorld),ie.setFromMatrixPosition(n.matrixWorld);let r=re.distanceTo(ie),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ae(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(i===null)return;let t=e.near,n=e.far;y.texture!==null&&(y.depthNear>0&&(t=y.depthNear),y.depthFar>0&&(n=y.depthFar)),P.near=M.near=j.near=t,P.far=M.far=j.far=n,(ee!==P.near||F!==P.far)&&(i.updateRenderState({depthNear:P.near,depthFar:P.far}),ee=P.near,F=P.far),P.layers.mask=e.layers.mask|6,j.layers.mask=P.layers.mask&-5,M.layers.mask=P.layers.mask&-3;let r=e.parent,a=P.cameras;ae(P,r);for(let e=0;e<a.length;e++)ae(a[e],r);a.length===2?L(P,j,M):P.projectionMatrix.copy(j.projectionMatrix),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),oe(e,P,r)};function oe(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ge*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(h!==null||g!==null)return l},this.setFoveation=function(e){l=e,h!==null&&(h.fixedFoveation=e),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=e)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(P)},this.getCameraTexture=function(e){return x[e]};let R=null;function se(t,n){if(f=n.getViewerPose(d||o),_=n,f!==null){let t=f.views;g!==null&&(e.setRenderTargetFramebuffer(w,g.framebuffer),e.setRenderTarget(w));let n=!1;t.length!==P.cameras.length&&(P.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let i=t[r],a=null;if(g!==null)a=g.getViewport(i);else{let t=m.getViewSubImage(h,i);a=t.viewport,r===0&&(e.setRenderTargetTextures(w,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(w))}let o=N[r];o===void 0&&(o=new ft,o.layers.enable(r),o.viewport=new s,N[r]=o),o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(i.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),r===0&&(P.matrix.copy(o.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),n===!0&&P.cameras.push(o)}let a=i.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&i.depthUsage==`gpu-optimized`&&v){m=r.getBinding();let e=m.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&y.init(e,i.renderState)}if(a&&a.includes(`camera-access`)&&v){e.state.unbindTexture(),m=r.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=x[n];e||(e=new b,x[n]=e);let t=m.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<T.length;e++){let t=E[e],r=T[e];t!==null&&r!==void 0&&r.update(t,n,d||o)}R&&R(t,n),n.detectedPlanes&&r.dispatchEvent({type:`planesdetected`,data:n}),_=null}let ce=new Ct;ce.setAnimationLoop(se),this.setAnimationLoop=function(e){R=e},this.dispose=function(){}}},Ni=new c,Pi=new B;Pi.set(-1,0,0,0,1,0,0,0,1);function Fi(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,I(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Ni.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Pi),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Ii(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return Re(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?k(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):k(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Li=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ri=null;function zi(){return Ri===null&&(Ri=new ne(Li,16,16,Le,T),Ri.name=`DFG_LUT`,Ri.minFilter=Me,Ri.magFilter=Me,Ri.wrapS=Ke,Ri.wrapT=Ke,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}var Bi=class{constructor(e={}){let{canvas:t=Ve(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:m=!1,outputBufferType:h=qe}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);g=n.getContextAttributes().alpha}else g=a;let _=h,y=new Set([tt,M,x]),b=new Set([qe,ye,Te,Pe,ot,lt]),C=new Uint32Array(4),w=new Int32Array(4),E=new z,D=null,O=null,A=[],j=[],N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,ee=!1,F=null,I=null,te=null,ne=null;this._outputColorSpace=fe;let re=0,ie=0,L=null,oe=-1,R=null,se=new s,ce=new s,le=null,B=new q(0),V=0,de=t.width,pe=t.height,H=1,me=null,he=null,ge=new s(0,0,de,pe),_e=new s(0,0,de,pe),ve=!1,be=new v,xe=!1,Se=!1,Ce=new c,we=new z,Ee=new s,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Oe=!1;function ke(){return L===null?H:1}let U=n;function Ae(e,n){return t.getContext(e,n)}let je,Me,W,Fe,G,K,Ie,Le,ze,Be,He,Ue,We,Ge,Ke,Ye,Xe,Ze,Qe,$e,et,nt,rt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,J,!1),t.addEventListener(`webglcontextrestored`,st,!1),t.addEventListener(`webglcontextcreationerror`,Y,!1),U===null){let t=`webgl2`;if(U=Ae(t,e),U===null)throw Ae(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}it()}catch(e){throw t.removeEventListener(`webglcontextlost`,J,!1),t.removeEventListener(`webglcontextrestored`,st,!1),t.removeEventListener(`webglcontextcreationerror`,Y,!1),Re(`WebGLRenderer: `+e.message),e}function it(){je=new rn(U),je.init(),et=new Oi(U,je),Me=new Mt(U,je,e,et),W=new Ei(U,je),Me.reversedDepthBuffer&&m&&W.buffers.depth.setReversed(!0),I=U.createFramebuffer(),te=U.createFramebuffer(),ne=U.createFramebuffer(),Fe=new sn(U),G=new oi,K=new Di(U,je,W,G,Me,et,Fe),Ie=new nn(P),Le=new wt(U),nt=new At(U,Le),ze=new an(U,Le,Fe,nt),Be=new ln(U,ze,Le,nt,Fe),Ze=new cn(U,Me,K),Ke=new Nt(G),He=new ai(P,Ie,je,Me,nt,Ke),Ue=new Fi(P,G),We=new ui,Ge=new _i(je),Xe=new kt(P,Ie,W,Be,g,l),Ye=new Ti(P,Be,Me),rt=new Ii(U,Fe,Me,W),Qe=new jt(U,je,Fe),$e=new on(U,je,Fe),Fe.programs=He.programs,P.capabilities=Me,P.extensions=je,P.properties=G,P.renderLists=We,P.shadowMap=Ye,P.state=W,P.info=Fe}_!==1009&&(N=new dn(_,t.width,t.height,o,r,i));let at=new Mi(P,U);this.xr=at,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let e=je.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=je.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(e){e!==void 0&&(H=e,this.setSize(de,pe,!1))},this.getSize=function(e){return e.set(de,pe)},this.setSize=function(e,n,r=!0){at.isPresenting?k(`WebGLRenderer: Can't change size while VR device is presenting.`):(de=e,pe=n,t.width=Math.floor(e*H),t.height=Math.floor(n*H),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(de*H,pe*H).floor()},this.setDrawingBufferSize=function(e,n,r){de=e,pe=n,H=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(_===1009)Re(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){k(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}N.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(se)},this.getViewport=function(e){return e.copy(ge)},this.setViewport=function(e,t,n,r){e.isVector4?ge.set(e.x,e.y,e.z,e.w):ge.set(e,t,n,r),W.viewport(se.copy(ge).multiplyScalar(H).round())},this.getScissor=function(e){return e.copy(_e)},this.setScissor=function(e,t,n,r){e.isVector4?_e.set(e.x,e.y,e.z,e.w):_e.set(e,t,n,r),W.scissor(ce.copy(_e).multiplyScalar(H).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(e){W.setScissorTest(ve=e)},this.setOpaqueSort=function(e){me=e},this.setTransparentSort=function(e){he=e},this.getClearColor=function(e){return e.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(L!==null){let t=L.texture.format;e=y.has(t)}if(e){let e=L.texture.type,t=b.has(e),n=Xe.getClearColor(),r=Xe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(C[0]=i,C[1]=a,C[2]=o,C[3]=r,U.clearBufferuiv(U.COLOR,0,C)):(w[0]=i,w[1]=a,w[2]=o,w[3]=r,U.clearBufferiv(U.COLOR,0,w))}else r|=U.COLOR_BUFFER_BIT}t&&(r|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&U.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),F=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,J,!1),t.removeEventListener(`webglcontextrestored`,st,!1),t.removeEventListener(`webglcontextcreationerror`,Y,!1),Xe.dispose(),We.dispose(),Ge.dispose(),G.dispose(),Ie.dispose(),Be.dispose(),nt.dispose(),rt.dispose(),He.dispose(),at.dispose(),at.removeEventListener(`sessionstart`,mt),at.removeEventListener(`sessionend`,ht),gt.stop()};function J(e){e.preventDefault(),ae(`WebGLRenderer: Context Lost.`),ee=!0}function st(){ae(`WebGLRenderer: Context Restored.`),ee=!1;let e=Fe.autoReset,t=Ye.enabled,n=Ye.autoUpdate,r=Ye.needsUpdate,i=Ye.type;it(),Fe.autoReset=e,Ye.enabled=t,Ye.autoUpdate=n,Ye.needsUpdate=r,Ye.type=i}function Y(e){Re(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function X(e){let t=e.target;t.removeEventListener(`dispose`,X),ct(t)}function ct(e){ut(e),G.remove(e)}function ut(e){let t=G.get(e).programs;t!==void 0&&(t.forEach(function(e){He.releaseProgram(e)}),e.isShaderMaterial&&He.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=De);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Et(e,t,n,r,i);W.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=ze.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;nt.setup(i,r,s,n,c);let h,g=Qe;if(c!==null&&(h=Le.get(c),g=$e,g.setIndex(h)),i.isMesh)r.wireframe===!0?(W.setLineWidth(r.wireframeLinewidth*ke()),g.setMode(U.LINES)):g.setMode(U.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),W.setLineWidth(e*ke()),i.isLineSegments?g.setMode(U.LINES):i.isLineLoop?g.setMode(U.LINE_LOOP):g.setMode(U.LINE_STRIP)}else i.isPoints?g.setMode(U.POINTS):i.isSprite&&g.setMode(U.TRIANGLES);if(i.isBatchedMesh){if(je.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Le.get(c).bytesPerElement:1,o=G.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(U,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function dt(e,t,n,r){F!==null&&e.isNodeMaterial&&F.setObject(r,e),xe===!0&&Ke.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,St(e,t,r),e.side=0,e.needsUpdate=!0,St(e,t,r),e.side=2):St(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),F!==null&&F.renderStart(e,t,n),O=Ge.get(n),O.init(t),j.push(O),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),O.setupLights(),F!==null&&F.updateLights(O.state.lightsArray),Se=this.localClippingEnabled,xe=Ke.init(this.clippingPlanes,Se),xe===!0&&Ke.setGlobalState(this.clippingPlanes,t),F!==null&&Ye.render(O.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];dt(o,n,t,e),r.add(o)}else dt(i,n,t,e),r.add(i)}}),O=j.pop(),F!==null&&F.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=G.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}je.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ft=null;function pt(e){ft&&ft(e)}function mt(){gt.stop()}function ht(){gt.start()}let gt=new Ct;gt.setAnimationLoop(pt),typeof self<`u`&&gt.setContext(self),this.setAnimationLoop=function(e){ft=e,at.setAnimationLoop(e),e===null?gt.stop():gt.start()},at.addEventListener(`sessionstart`,mt),at.addEventListener(`sessionend`,ht),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){Re(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ee===!0)return;F!==null&&F.renderStart(e,t);let n=at.enabled===!0&&at.isPresenting===!0,r=N!==null&&(L===null||n)&&N.begin(P,L);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(t),t=at.getCamera()),e.isScene===!0&&e.onBeforeRender(P,e,t,L),O=Ge.get(e,j.length),O.init(t),O.state.textureUnits=K.getTextureUnits(),j.push(O),Ce.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),be.setFromProjectionMatrix(Ce,ue,t.reversedDepth),Se=this.localClippingEnabled,xe=Ke.init(this.clippingPlanes,Se),D=We.get(e,A.length),D.init(),A.push(D),at.enabled===!0&&at.isPresenting===!0){let e=P.xr.getDepthSensingMesh();e!==null&&_t(e,t,-1/0,P.sortObjects)}_t(e,t,0,P.sortObjects),D.finish(),F!==null&&F.updateLights(O.state.lightsArray),P.sortObjects===!0&&D.sort(me,he),Oe=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,Oe&&Xe.addToRenderList(D,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xe===!0&&Ke.beginShadows();let i=O.state.shadowsArray;if(Ye.render(i,e,t),xe===!0&&Ke.endShadows(),(r&&N.hasRenderPass())===!1){let n=D.opaque,r=D.transmissive;if(O.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];yt(n,r,e,a)}Oe&&Xe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];vt(D,e,n,n.viewport)}}else r.length>0&&yt(n,r,e,t),Oe&&Xe.render(e),vt(D,e,t)}L!==null&&ie===0&&(K.updateMultisampleRenderTarget(L),K.updateRenderTargetMipmap(L)),r&&N.end(P),e.isScene===!0&&e.onAfterRender(P,e,t),nt.resetDefaultState(),oe=-1,R=null,j.pop(),j.length>0?(O=j[j.length-1],K.setTextureUnits(O.state.textureUnits),xe===!0&&Ke.setGlobalState(P.clippingPlanes,O.state.camera)):O=null,A.pop(),D=A.length>0?A[A.length-1]:null,F!==null&&F.renderEnd()};function _t(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)O.pushLightProbeGrid(e);else if(e.isLight)O.pushLight(e),e.castShadow&&O.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(be)){r&&Ee.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ce);let i=Be.update(e),a=e.material;a.visible&&D.push(e,i,a,n,Ee.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(be))){let i=Be.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Ee.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ee.copy(e.boundingSphere.center)),Ee.applyMatrix4(e.matrixWorld).applyMatrix4(Ce)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&D.push(e,i,c,n,Ee.z,s,t)}}else a.visible&&D.push(e,i,a,n,Ee.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)_t(i[e],t,n,r)}function vt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;O.setupLightsView(n),xe===!0&&Ke.setGlobalState(P.clippingPlanes,n),r&&W.viewport(se.copy(r)),i.length>0&&bt(i,t,n),a.length>0&&bt(a,t,n),o.length>0&&bt(o,t,n),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function yt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[r.id]===void 0){let e=je.has(`EXT_color_buffer_half_float`)||je.has(`EXT_color_buffer_float`);O.state.transmissionRenderTarget[r.id]=new p(1,1,{generateMipmaps:!0,type:e?T:qe,minFilter:Je,samples:Math.max(4,Me.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ne.workingColorSpace})}let a=O.state.transmissionRenderTarget[r.id],o=r.viewport||se;a.setSize(o.z*P.transmissionResolutionScale,o.w*P.transmissionResolutionScale);let s=P.getRenderTarget(),c=P.getActiveCubeFace(),l=P.getActiveMipmapLevel();P.setRenderTarget(a),P.getClearColor(B),V=P.getClearAlpha(),V<1&&P.setClearColor(16777215,.5),P.clear(),Oe&&Xe.render(n);let u=P.toneMapping;P.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),O.setupLightsView(r),xe===!0&&Ke.setGlobalState(P.clippingPlanes,r),bt(e,n,r),K.updateMultisampleRenderTarget(a),K.updateRenderTargetMipmap(a),je.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,xt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(K.updateMultisampleRenderTarget(a),K.updateRenderTargetMipmap(a))}P.setRenderTarget(s,c,l),P.setClearColor(B,V),d!==void 0&&(r.viewport=d),P.toneMapping=u}function bt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&xt(o,t,n,s,l,c)}}function xt(e,t,n,r,i,a){F!==null&&i.isNodeMaterial&&F.setObject(e,i),e.onBeforeRender(P,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(P,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,P.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,P.renderBufferDirect(n,t,r,i,e,a),i.side=2):P.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(P,t,n,r,i,a)}function St(e,t,n){t.isScene!==!0&&(t=De);let r=G.get(e),i=O.state.lights,a=O.state.shadowsArray,o=i.state.version,s=He.getParameters(e,i.state,a,t,n,O.state.lightProbeGridArray),c=He.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ie.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,X),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Q(e,s),d}else s.uniforms=He.getUniforms(e),F!==null&&e.isNodeMaterial&&F.build(e,n,s),e.onBeforeCompile(s,P),d=He.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ke.uniform),Q(e,s),r.needsLights=Ot(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=O.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Z(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=vr.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Q(e,t){let n=G.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Tt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];E.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(E))return n}return null}function Et(e,t,n,r,i){t.isScene!==!0&&(t=De),K.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=L===null?P.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ne.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ie.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(h=P.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=G.get(r),y=O.state.lights;if(xe===!0&&(Se===!0||e!==R)){let t=e===R&&r.id===oe;Ke.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ke.numPlanes||v.numIntersection!==Ke.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=O.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=St(r,t,i),F&&r.isNodeMaterial&&F.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(W.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==oe&&(oe=r.id,C=!0),v.needsLights){let e=Tt(O.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||R!==e){W.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(U,`projectionMatrix`,e.projectionMatrix),T.setValue(U,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(U,we.setFromMatrixPosition(e.matrixWorld)),Me.logarithmicDepthBuffer&&T.setValue(U,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(U,`isOrthographic`,e.isOrthographicCamera===!0),R!==e&&(R=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(U,`sunShadowMap`,y.state.sunShadowMap,K),y.state.directionalShadowMap.length>0&&T.setValue(U,`directionalShadowMap`,y.state.directionalShadowMap,K),y.state.spotShadowMap.length>0&&T.setValue(U,`spotShadowMap`,y.state.spotShadowMap,K),y.state.pointShadowMap.length>0&&T.setValue(U,`pointShadowMap`,y.state.pointShadowMap,K)),i.isSkinnedMesh){T.setOptional(U,i,`bindMatrix`),T.setOptional(U,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(U,`boneTexture`,e.boneTexture,K))}i.isBatchedMesh&&(T.setOptional(U,i,`batchingTexture`),T.setValue(U,`batchingTexture`,i._matricesTexture,K),T.setOptional(U,i,`batchingIdTexture`),T.setValue(U,`batchingIdTexture`,i._indirectTexture,K),T.setOptional(U,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(U,`batchingColorTexture`,i._colorsTexture,K));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&Ze.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(U,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=zi()),C){if(T.setValue(U,`toneMappingExposure`,P.toneMappingExposure),v.needsLights&&Dt(E,w),a&&r.fog===!0&&Ue.refreshFogUniforms(E,a),Ue.refreshMaterialUniforms(E,r,H,pe,O.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}vr.upload(U,Z(v),E,K)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(vr.upload(U,Z(v),E,K),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(U,`center`,i.center),T.setValue(U,`modelViewMatrix`,i.modelViewMatrix),T.setValue(U,`normalMatrix`,i.normalMatrix),T.setValue(U,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];rt.update(n,x),rt.bind(n,x)}}return x}function Dt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Ot(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return re},this.getActiveMipmapLevel=function(){return ie},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(e,t,n){let r=G.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),G.get(e.texture).__webglTexture=t,G.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=G.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){L=e,re=t,ie=n;let r=null,i=!1,a=!1;if(e){let o=G.get(e);if(o.__useDefaultFramebuffer!==void 0){W.bindFramebuffer(U.FRAMEBUFFER,o.__webglFramebuffer),se.copy(e.viewport),ce.copy(e.scissor),le=e.scissorTest,W.viewport(se),W.scissor(ce),W.setScissorTest(le),oe=-1;return}if(o.__webglFramebuffer===void 0)K.setupRenderTarget(e);else if(o.__hasExternalTextures)K.rebindTextures(e,G.get(e.texture).__webglTexture,G.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&G.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);K.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=G.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&K.useMultisampledRTT(e)===!1?G.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,se.copy(e.viewport),ce.copy(e.scissor),le=e.scissorTest}else se.copy(ge).multiplyScalar(H).floor(),ce.copy(_e).multiplyScalar(H).floor(),le=ve;if(n!==0&&(r=I),W.bindFramebuffer(U.FRAMEBUFFER,r)&&W.drawBuffers(e,r),W.viewport(se),W.scissor(ce),W.setScissorTest(le),i){let r=G.get(e.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=G.get(e.textures[t]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=G.get(e.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,t.__webglTexture,n)}oe=-1};function Pt(e){let t=G.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Me.textureFormatReadable(e.format),t.__typeReadable=Me.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){Re(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=G.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){W.bindFramebuffer(U.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+s);let u=Pt(o);if(u.__formatReadable===!1){Re(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){Re(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&U.readPixels(t,n,r,i,et.convert(c),et.convert(l),a)}finally{let e=L===null?null:G.get(L).__webglFramebuffer;W.bindFramebuffer(U.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=G.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){W.bindFramebuffer(U.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+s);let d=Pt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,f),U.bufferData(U.PIXEL_PACK_BUFFER,a.byteLength,U.STREAM_READ),U.readPixels(t,n,r,i,et.convert(l),et.convert(u),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let p=L===null?null:G.get(L).__webglFramebuffer;W.bindFramebuffer(U.FRAMEBUFFER,p);let m=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await S(U,m,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,f),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,a),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(f),U.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;K.setTexture2D(e,0),U.copyTexSubImage2D(U.TEXTURE_2D,n,0,0,o,s,i,a),W.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=et.convert(t.format),_=et.convert(t.type),v;t.isData3DTexture?(K.setTexture3D(t,0),v=U.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(K.setTexture2DArray(t,0),v=U.TEXTURE_2D_ARRAY):(K.setTexture2D(t,0),v=U.TEXTURE_2D),W.activeTexture(U.TEXTURE0),W.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,t.flipY),W.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),W.pixelStorei(U.UNPACK_ALIGNMENT,t.unpackAlignment);let y=W.getParameter(U.UNPACK_ROW_LENGTH),b=W.getParameter(U.UNPACK_IMAGE_HEIGHT),x=W.getParameter(U.UNPACK_SKIP_PIXELS),S=W.getParameter(U.UNPACK_SKIP_ROWS),C=W.getParameter(U.UNPACK_SKIP_IMAGES);W.pixelStorei(U.UNPACK_ROW_LENGTH,h.width),W.pixelStorei(U.UNPACK_IMAGE_HEIGHT,h.height),W.pixelStorei(U.UNPACK_SKIP_PIXELS,l),W.pixelStorei(U.UNPACK_SKIP_ROWS,u),W.pixelStorei(U.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=G.get(e),r=G.get(t),h=G.get(n.__renderTarget),g=G.get(r.__renderTarget);W.bindFramebuffer(U.READ_FRAMEBUFFER,h.__webglFramebuffer),W.bindFramebuffer(U.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,G.get(e).__webglTexture,i,d+n),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,G.get(t).__webglTexture,a,m+n)),U.blitFramebuffer(l,u,o,s,f,p,o,s,U.DEPTH_BUFFER_BIT,U.NEAREST);W.bindFramebuffer(U.READ_FRAMEBUFFER,null),W.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||G.has(e)){let n=G.get(e),r=G.get(t);W.bindFramebuffer(U.READ_FRAMEBUFFER,te),W.bindFramebuffer(U.DRAW_FRAMEBUFFER,ne);for(let e=0;e<c;e++)w?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,n.__webglTexture,i),T?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,r.__webglTexture,a),i===0?T?U.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):U.copyTexSubImage2D(v,a,f,p,l,u,o,s):U.blitFramebuffer(l,u,o,s,f,p,o,s,U.COLOR_BUFFER_BIT,U.NEAREST);W.bindFramebuffer(U.READ_FRAMEBUFFER,null),W.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?U.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?U.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):U.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):U.texSubImage2D(U.TEXTURE_2D,a,f,p,o,s,g,_,h);W.pixelStorei(U.UNPACK_ROW_LENGTH,y),W.pixelStorei(U.UNPACK_IMAGE_HEIGHT,b),W.pixelStorei(U.UNPACK_SKIP_PIXELS,x),W.pixelStorei(U.UNPACK_SKIP_ROWS,S),W.pixelStorei(U.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&U.generateMipmap(v),W.unbindTexture()},this.initRenderTarget=function(e){G.get(e).__webglFramebuffer===void 0&&K.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?K.setTextureCube(e,0):e.isData3DTexture?K.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?K.setTexture2DArray(e,0):K.setTexture2D(e,0),W.unbindTexture()},this.resetState=function(){re=0,ie=0,L=null,W.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return ue}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ne._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ne._getUnpackColorSpace()}},Vi={type:`change`},Hi={type:`start`},Ui={type:`end`},Wi=new L,Gi=new a,Ki=Math.cos(70*X.DEG2RAD),qi=new z,Ji=2*Math.PI,Yi={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xi=1e-6,Zi=class extends at{constructor(e,t=null){super(e,t),this.state=Yi.NONE,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:ut.ROTATE,MIDDLE:ut.DOLLY,RIGHT:ut.PAN},this.touches={ONE:K.ROTATE,TWO:K.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new Xe,this._lastTargetPosition=new z,this._quat=new Xe().setFromUnitVectors(e.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ue,this._sphericalDelta=new Ue,this._scale=1,this._panOffset=new z,this._rotateStart=new Y,this._rotateEnd=new Y,this._rotateDelta=new Y,this._panStart=new Y,this._panEnd=new Y,this._panDelta=new Y,this._dollyStart=new Y,this._dollyEnd=new Y,this._dollyDelta=new Y,this._dollyDirection=new z,this._mouse=new Y,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$i.bind(this),this._onPointerDown=Qi.bind(this),this._onPointerUp=ea.bind(this),this._onContextMenu=sa.bind(this),this._onMouseWheel=ra.bind(this),this._onKeyDown=ia.bind(this),this._onTouchStart=aa.bind(this),this._onTouchMove=oa.bind(this),this._onMouseDown=ta.bind(this),this._onMouseMove=na.bind(this),this._interceptControlDown=ca.bind(this),this._interceptControlUp=la.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.state=Yi.NONE,this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),e.removeEventListener(`keyup`,this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction=``,this.domElement.style.cursor=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vi),this.update(),this.state=Yi.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;qi.copy(t).sub(this.target),qi.applyQuaternion(this._quat),this._spherical.setFromVector3(qi),this.autoRotate&&this.state===Yi.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Ji:n>Math.PI&&(n-=Ji),r<-Math.PI?r+=Ji:r>Math.PI&&(r-=Ji),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(qi.setFromSpherical(this._spherical),qi.applyQuaternion(this._quatInverse),t.copy(this.target).add(qi),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=qi.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new z(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new z(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=qi.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(Wi.origin.copy(this.object.position),Wi.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wi.direction))<Ki?this.object.lookAt(this.target):(Gi.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wi.intersectPlane(Gi,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>Xi||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xi||this._lastTargetPosition.distanceToSquared(this.target)>Xi?(this.dispatchEvent(Vi),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?Ji/60/60*this.autoRotateSpeed:Ji/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){qi.setFromMatrixColumn(t,0),qi.multiplyScalar(-e),this._panOffset.add(qi)}_panUp(e,t){this.screenSpacePanning===!0?qi.setFromMatrixColumn(t,1):(qi.setFromMatrixColumn(t,0),qi.crossVectors(this.object.up,qi)),qi.multiplyScalar(e),this._panOffset.add(qi)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;qi.copy(r).sub(this.target);let i=qi.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Ji*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ji*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ji*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ji*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ji*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ji*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Ji*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ji*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Y,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Qi(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function $i(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function ea(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(Ui),this.state=Yi.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function ta(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=Yi.DOLLY;break;case ut.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Yi.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Yi.ROTATE}break;case ut.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Yi.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Yi.PAN}break;default:this.state=Yi.NONE}this.state!==Yi.NONE&&this.dispatchEvent(Hi)}function na(e){switch(this.state){case Yi.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Yi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Yi.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function ra(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===Yi.NONE&&(e.preventDefault(),this.dispatchEvent(Hi),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Ui))}function ia(e){this.enabled!==!1&&this._handleKeyDown(e)}function aa(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case K.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Yi.TOUCH_ROTATE;break;case K.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Yi.TOUCH_PAN;break;default:this.state=Yi.NONE}break;case 2:switch(this.touches.TWO){case K.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Yi.TOUCH_DOLLY_PAN;break;case K.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Yi.TOUCH_DOLLY_ROTATE;break;default:this.state=Yi.NONE}break;default:this.state=Yi.NONE}this.state!==Yi.NONE&&this.dispatchEvent(Hi)}function oa(e){switch(this._trackPointer(e),this.state){case Yi.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Yi.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Yi.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Yi.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Yi.NONE}}function sa(e){this.enabled!==!1&&e.preventDefault()}function ca(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function la(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var ua=new z;function da(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;ua.copy(t),ua[r]=0,ua.normalize();let l=.5*o/(o+s),u=1-ua.angleTo(e)/c;return Math.sign(ua[n])===1?u*l:s/(o+s)+l+l*(1-u)}var fa=class e extends We{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new z,c=new z,l=new z(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new z,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=da(m,c,`z`,`y`,i,n),f[a+1]=1-da(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-da(m,c,`z`,`y`,i,n),f[a+1]=1-da(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-da(m,c,`x`,`z`,i,e),f[a+1]=da(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-da(m,c,`x`,`z`,i,e),f[a+1]=1-da(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-da(m,c,`x`,`y`,i,e),f[a+1]=1-da(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=da(m,c,`x`,`y`,i,e),f[a+1]=1-da(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}};function pa(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new De,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=ma(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=ma(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function ma(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new $e(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function ha(e,t){if(t===0)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),e;if(t===2||t===1){let n=e.getIndex();if(n===null){let t=[],r=e.getAttribute(`position`);if(r!==void 0){for(let e=0;e<r.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),e}let r=n.count-2,i=[];if(t===2)for(let e=1;e<=r;e++)i.push(n.getX(0)),i.push(n.getX(e)),i.push(n.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(i.push(n.getX(e)),i.push(n.getX(e+1)),i.push(n.getX(e+2))):(i.push(n.getX(e+2)),i.push(n.getX(e+1)),i.push(n.getX(e)));return i.length/3!==r&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`),e.setIndex(i),e.clearGroups(),e}return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,t),e}var ga=class extends be{constructor(e){super(e)}load(e,t,n,r){let i=this,a=new se(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(e){let n=i.parse(JSON.parse(e));t&&t(n)},n,r)}parse(e){return new _a(e)}},_a=class{constructor(e){this.isFont=!0,this.type=`Font`,this.data=e}generateShapes(e,t=100,n=`ltr`){let r=[],i=va(e,t,this.data,n);for(let e=0,t=i.length;e<t;e++)r.push(...i[e].toShapes());return r}};function va(e,t,n,r){let i=Array.from(e),a=t/n.resolution,o=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*a,s=[],c=0,l=0;(r==`rtl`||r==`tb`)&&i.reverse();for(let e=0;e<i.length;e++){let t=i[e];if(t===`
`)c=0,l-=o;else{let e=ya(t,a,c,l,n);r==`tb`?(c=0,l+=n.ascender*a):c+=e.offsetX,s.push(e.path)}}return s}function ya(e,t,n,r,i){let a=i.glyphs[e]||i.glyphs[`?`];if(!a){console.error(`THREE.Font: character "`+e+`" does not exists in font family `+i.familyName+`.`);return}let o=new _e,s,c,l,u,d,f,p,m;if(a.o){let e=a._cachedOutline||=a.o.split(` `);for(let i=0,a=e.length;i<a;)switch(e[i++]){case`m`:s=e[i++]*t+n,c=e[i++]*t+r,o.moveTo(s,c);break;case`l`:s=e[i++]*t+n,c=e[i++]*t+r,o.lineTo(s,c);break;case`q`:l=e[i++]*t+n,u=e[i++]*t+r,d=e[i++]*t+n,f=e[i++]*t+r,o.quadraticCurveTo(d,f,l,u);break;case`b`:l=e[i++]*t+n,u=e[i++]*t+r,d=e[i++]*t+n,f=e[i++]*t+r,p=e[i++]*t+n,m=e[i++]*t+r,o.bezierCurveTo(d,f,p,m,l,u)}}return{offsetX:a.ha*t,path:o}}var ba=class e extends D{constructor(e,t={}){let n=t.font;if(n===void 0)super();else{let r=n.generateShapes(e,t.size,t.direction);t.depth===void 0&&(t.depth=50),t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type=`TextGeometry`}toJSON(){return super.toJSON()}static fromJSON(t){let n=t.options;return n.font=new _a(n.font.data),new e(n.text,n)}},xa={glyphs:JSON.parse(`{"ο":{"x_min":0,"x_max":764,"ha":863,"o":"m 380 -25 q 105 87 211 -25 q 0 372 0 200 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 372 764 544 q 658 87 764 200 q 380 -25 552 -25 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 218 204 283 q 379 142 294 142 "},"S":{"x_min":0,"x_max":826,"ha":915,"o":"m 826 306 q 701 55 826 148 q 423 -29 587 -29 q 138 60 255 -29 q 0 318 13 154 l 208 318 q 288 192 216 238 q 437 152 352 152 q 559 181 506 152 q 623 282 623 217 q 466 411 623 372 q 176 487 197 478 q 18 719 18 557 q 136 958 18 869 q 399 1040 244 1040 q 670 956 561 1040 q 791 713 791 864 l 591 713 q 526 826 583 786 q 393 866 469 866 q 277 838 326 866 q 218 742 218 804 q 374 617 218 655 q 667 542 646 552 q 826 306 826 471 "},"¦":{"x_min":0,"x_max":143,"ha":240,"o":"m 143 462 l 0 462 l 0 984 l 143 984 l 143 462 m 143 -242 l 0 -242 l 0 280 l 143 280 l 143 -242 "},"/":{"x_min":196.109375,"x_max":632.5625,"ha":828,"o":"m 632 1040 l 289 -128 l 196 -128 l 538 1040 l 632 1040 "},"Τ":{"x_min":-0.609375,"x_max":808,"ha":878,"o":"m 808 831 l 508 831 l 508 0 l 298 0 l 298 831 l 0 831 l 0 1013 l 808 1013 l 808 831 "},"y":{"x_min":0,"x_max":738.890625,"ha":828,"o":"m 738 749 l 444 -107 q 361 -238 413 -199 q 213 -277 308 -277 q 156 -275 176 -277 q 120 -271 131 -271 l 120 -110 q 147 -113 134 -111 q 179 -116 161 -116 q 247 -91 226 -116 q 269 -17 269 -67 q 206 173 269 -4 q 84 515 162 301 q 0 749 41 632 l 218 749 l 376 207 l 529 749 l 738 749 "},"Π":{"x_min":0,"x_max":809,"ha":922,"o":"m 809 0 l 598 0 l 598 836 l 208 836 l 208 0 l 0 0 l 0 1012 l 809 1012 l 809 0 "},"ΐ":{"x_min":-162,"x_max":364,"ha":364,"o":"m 364 810 l 235 810 l 235 952 l 364 952 l 364 810 m 301 1064 l 86 810 l -12 810 l 123 1064 l 301 1064 m -33 810 l -162 810 l -162 952 l -33 952 l -33 810 m 200 0 l 0 0 l 0 748 l 200 748 l 200 0 "},"g":{"x_min":0,"x_max":724,"ha":839,"o":"m 724 48 q 637 -223 724 -142 q 357 -304 551 -304 q 140 -253 226 -304 q 23 -72 36 -192 l 243 -72 q 290 -127 255 -110 q 368 -144 324 -144 q 504 -82 470 -144 q 530 71 530 -38 l 530 105 q 441 25 496 51 q 319 0 386 0 q 79 115 166 0 q 0 377 0 219 q 77 647 0 534 q 317 775 166 775 q 534 656 456 775 l 534 748 l 724 748 l 724 48 m 368 167 q 492 237 447 167 q 530 382 530 297 q 490 529 530 466 q 364 603 444 603 q 240 532 284 603 q 201 386 201 471 q 240 239 201 300 q 368 167 286 167 "},"²":{"x_min":0,"x_max":463,"ha":560,"o":"m 463 791 q 365 627 463 706 q 151 483 258 555 l 455 483 l 455 382 l 0 382 q 84 565 0 488 q 244 672 97 576 q 331 784 331 727 q 299 850 331 824 q 228 876 268 876 q 159 848 187 876 q 132 762 132 820 l 10 762 q 78 924 10 866 q 228 976 137 976 q 392 925 322 976 q 463 791 463 874 "},"–":{"x_min":0,"x_max":704.171875,"ha":801,"o":"m 704 297 l 0 297 l 0 450 l 704 450 l 704 297 "},"Κ":{"x_min":0,"x_max":899.671875,"ha":969,"o":"m 899 0 l 646 0 l 316 462 l 208 355 l 208 0 l 0 0 l 0 1013 l 208 1013 l 208 596 l 603 1013 l 863 1013 l 460 603 l 899 0 "},"ƒ":{"x_min":-46,"x_max":440,"ha":525,"o":"m 440 609 l 316 609 l 149 -277 l -46 -277 l 121 609 l 14 609 l 14 749 l 121 749 q 159 949 121 894 q 344 1019 208 1019 l 440 1015 l 440 855 l 377 855 q 326 841 338 855 q 314 797 314 827 q 314 773 314 786 q 314 749 314 761 l 440 749 l 440 609 "},"e":{"x_min":0,"x_max":708,"ha":808,"o":"m 708 321 l 207 321 q 254 186 207 236 q 362 141 298 141 q 501 227 453 141 l 700 227 q 566 36 662 104 q 362 -26 477 -26 q 112 72 213 -26 q 0 369 0 182 q 95 683 0 573 q 358 793 191 793 q 619 677 531 793 q 708 321 708 561 m 501 453 q 460 571 501 531 q 353 612 420 612 q 247 570 287 612 q 207 453 207 529 l 501 453 "},"ό":{"x_min":0,"x_max":764,"ha":863,"o":"m 380 -25 q 105 87 211 -25 q 0 372 0 200 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 372 764 544 q 658 87 764 200 q 380 -25 552 -25 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 218 204 283 q 379 142 294 142 m 593 1039 l 391 823 l 293 823 l 415 1039 l 593 1039 "},"J":{"x_min":0,"x_max":649,"ha":760,"o":"m 649 294 q 573 48 649 125 q 327 -29 497 -29 q 61 82 136 -29 q 0 375 0 173 l 200 375 l 199 309 q 219 194 199 230 q 321 145 249 145 q 418 193 390 145 q 441 307 441 232 l 441 1013 l 649 1013 l 649 294 "},"»":{"x_min":-0.234375,"x_max":526,"ha":624,"o":"m 526 286 l 297 87 l 296 250 l 437 373 l 297 495 l 297 660 l 526 461 l 526 286 m 229 286 l 0 87 l 0 250 l 140 373 l 0 495 l 0 660 l 229 461 l 229 286 "},"©":{"x_min":3,"x_max":1007,"ha":1104,"o":"m 507 -6 q 129 153 269 -6 q 3 506 3 298 q 127 857 3 713 q 502 1017 266 1017 q 880 855 740 1017 q 1007 502 1007 711 q 882 152 1007 295 q 507 -6 743 -6 m 502 934 q 184 800 302 934 q 79 505 79 680 q 184 210 79 331 q 501 76 302 76 q 819 210 701 76 q 925 507 925 331 q 820 800 925 682 q 502 934 704 934 m 758 410 q 676 255 748 313 q 506 197 605 197 q 298 291 374 197 q 229 499 229 377 q 297 713 229 624 q 494 811 372 811 q 666 760 593 811 q 752 616 739 710 l 621 616 q 587 688 621 658 q 509 719 554 719 q 404 658 441 719 q 368 511 368 598 q 403 362 368 427 q 498 298 438 298 q 624 410 606 298 l 758 410 "},"ώ":{"x_min":0,"x_max":945,"ha":1051,"o":"m 566 528 l 372 528 l 372 323 q 372 298 372 311 q 373 271 372 285 q 360 183 373 211 q 292 142 342 142 q 219 222 243 142 q 203 365 203 279 q 241 565 203 461 q 334 748 273 650 l 130 748 q 36 552 68 650 q 0 337 0 444 q 69 96 0 204 q 276 -29 149 -29 q 390 0 337 -29 q 470 78 444 28 q 551 0 495 30 q 668 -29 608 -29 q 874 96 793 -29 q 945 337 945 205 q 910 547 945 444 q 814 748 876 650 l 610 748 q 703 565 671 650 q 742 365 742 462 q 718 189 742 237 q 651 142 694 142 q 577 190 597 142 q 565 289 565 221 l 565 323 l 566 528 m 718 1039 l 516 823 l 417 823 l 540 1039 l 718 1039 "},"^":{"x_min":197.21875,"x_max":630.5625,"ha":828,"o":"m 630 836 l 536 836 l 413 987 l 294 836 l 197 836 l 331 1090 l 493 1090 l 630 836 "},"«":{"x_min":0,"x_max":526.546875,"ha":624,"o":"m 526 87 l 297 286 l 297 461 l 526 660 l 526 495 l 385 373 l 526 250 l 526 87 m 229 87 l 0 286 l 0 461 l 229 660 l 229 495 l 88 373 l 229 250 l 229 87 "},"D":{"x_min":0,"x_max":864,"ha":968,"o":"m 400 1013 q 736 874 608 1013 q 864 523 864 735 q 717 146 864 293 q 340 0 570 0 l 0 0 l 0 1013 l 400 1013 m 398 837 l 206 837 l 206 182 l 372 182 q 584 276 507 182 q 657 504 657 365 q 594 727 657 632 q 398 837 522 837 "},"∙":{"x_min":0,"x_max":207,"ha":304,"o":"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 "},"ÿ":{"x_min":0,"x_max":47,"ha":125,"o":"m 47 3 q 37 -7 47 -7 q 28 0 30 -7 q 39 -4 32 -4 q 45 3 45 -1 l 37 0 q 28 9 28 0 q 39 19 28 19 l 47 16 l 47 19 l 47 3 m 37 1 q 44 8 44 1 q 37 16 44 16 q 30 8 30 16 q 37 1 30 1 m 26 1 l 23 22 l 14 0 l 3 22 l 3 3 l 0 25 l 13 1 l 22 25 l 26 1 "},"w":{"x_min":0,"x_max":1056.953125,"ha":1150,"o":"m 1056 749 l 848 0 l 647 0 l 527 536 l 412 0 l 211 0 l 0 749 l 202 749 l 325 226 l 429 748 l 633 748 l 740 229 l 864 749 l 1056 749 "},"$":{"x_min":0,"x_max":704,"ha":800,"o":"m 682 693 l 495 693 q 468 782 491 749 q 391 831 441 824 l 391 579 q 633 462 562 534 q 704 259 704 389 q 616 57 704 136 q 391 -22 528 -22 l 391 -156 l 308 -156 l 308 -22 q 76 69 152 -7 q 0 300 0 147 l 183 300 q 215 191 190 230 q 308 128 245 143 l 308 414 q 84 505 157 432 q 12 700 12 578 q 89 902 12 824 q 308 981 166 981 l 308 1069 l 391 1069 l 391 981 q 595 905 521 981 q 682 693 670 829 m 308 599 l 308 831 q 228 796 256 831 q 200 712 200 762 q 225 642 200 668 q 308 599 251 617 m 391 128 q 476 174 449 140 q 504 258 504 207 q 391 388 504 354 l 391 128 "},"\\\\":{"x_min":-0.03125,"x_max":434.765625,"ha":532,"o":"m 434 -128 l 341 -128 l 0 1039 l 91 1040 l 434 -128 "},"µ":{"x_min":0,"x_max":647,"ha":754,"o":"m 647 0 l 478 0 l 478 68 q 412 9 448 30 q 330 -11 375 -11 q 261 3 296 -11 q 199 43 226 18 l 199 -277 l 0 -277 l 0 749 l 199 749 l 199 358 q 216 221 199 267 q 322 151 244 151 q 435 240 410 151 q 448 401 448 283 l 448 749 l 647 749 l 647 0 "},"Ι":{"x_min":42,"x_max":250,"ha":413,"o":"m 250 0 l 42 0 l 42 1013 l 250 1013 l 250 0 "},"Ύ":{"x_min":0,"x_max":1211.15625,"ha":1289,"o":"m 1211 1012 l 907 376 l 907 0 l 697 0 l 697 376 l 374 1012 l 583 1012 l 802 576 l 1001 1012 l 1211 1012 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"’":{"x_min":0,"x_max":192,"ha":289,"o":"m 192 834 q 137 692 192 751 q 0 626 83 634 l 0 697 q 101 831 101 723 l 0 831 l 0 1013 l 192 1013 l 192 834 "},"Ν":{"x_min":0,"x_max":833,"ha":946,"o":"m 833 0 l 617 0 l 206 696 l 206 0 l 0 0 l 0 1013 l 216 1013 l 629 315 l 629 1013 l 833 1013 l 833 0 "},"-":{"x_min":27.78125,"x_max":413.890625,"ha":525,"o":"m 413 279 l 27 279 l 27 468 l 413 468 l 413 279 "},"Q":{"x_min":0,"x_max":995.59375,"ha":1096,"o":"m 995 49 l 885 -70 l 762 42 q 641 -12 709 4 q 497 -29 572 -29 q 135 123 271 -29 q 0 504 0 276 q 131 881 0 731 q 497 1040 270 1040 q 859 883 719 1040 q 994 506 994 731 q 966 321 994 413 q 884 152 938 229 l 995 49 m 730 299 q 767 395 755 344 q 779 504 779 446 q 713 743 779 644 q 505 857 638 857 q 284 745 366 857 q 210 501 210 644 q 279 265 210 361 q 492 157 357 157 q 615 181 557 157 l 508 287 l 620 405 l 730 299 "},"ς":{"x_min":0,"x_max":731.78125,"ha":768,"o":"m 731 448 l 547 448 q 485 571 531 533 q 369 610 440 610 q 245 537 292 610 q 204 394 204 473 q 322 186 204 238 q 540 133 430 159 q 659 -15 659 98 q 643 -141 659 -80 q 595 -278 627 -202 l 423 -278 q 458 -186 448 -215 q 474 -88 474 -133 q 352 0 474 -27 q 123 80 181 38 q 0 382 0 170 q 98 660 0 549 q 367 777 202 777 q 622 683 513 777 q 731 448 731 589 "},"M":{"x_min":0,"x_max":1019,"ha":1135,"o":"m 1019 0 l 823 0 l 823 819 l 618 0 l 402 0 l 194 818 l 194 0 l 0 0 l 0 1013 l 309 1012 l 510 241 l 707 1013 l 1019 1013 l 1019 0 "},"Ψ":{"x_min":0,"x_max":995,"ha":1085,"o":"m 995 698 q 924 340 995 437 q 590 200 841 227 l 590 0 l 404 0 l 404 200 q 70 340 152 227 q 0 698 0 437 l 0 1013 l 188 1013 l 188 694 q 212 472 188 525 q 404 383 254 383 l 404 1013 l 590 1013 l 590 383 q 781 472 740 383 q 807 694 807 525 l 807 1013 l 995 1013 l 995 698 "},"C":{"x_min":0,"x_max":970.828125,"ha":1043,"o":"m 970 345 q 802 70 933 169 q 490 -29 672 -29 q 130 130 268 -29 q 0 506 0 281 q 134 885 0 737 q 502 1040 275 1040 q 802 939 668 1040 q 965 679 936 838 l 745 679 q 649 809 716 761 q 495 857 582 857 q 283 747 361 857 q 214 508 214 648 q 282 267 214 367 q 493 154 359 154 q 651 204 584 154 q 752 345 718 255 l 970 345 "},"!":{"x_min":0,"x_max":204,"ha":307,"o":"m 204 739 q 182 515 204 686 q 152 282 167 398 l 52 282 q 13 589 27 473 q 0 739 0 704 l 0 1013 l 204 1013 l 204 739 m 204 0 l 0 0 l 0 203 l 204 203 l 204 0 "},"{":{"x_min":0,"x_max":501.390625,"ha":599,"o":"m 501 -285 q 229 -209 301 -285 q 176 -35 176 -155 q 182 47 176 -8 q 189 126 189 103 q 156 245 189 209 q 0 294 112 294 l 0 438 q 154 485 111 438 q 189 603 189 522 q 186 666 189 636 q 176 783 176 772 q 231 945 176 894 q 501 1015 306 1015 l 501 872 q 370 833 408 872 q 340 737 340 801 q 342 677 340 705 q 353 569 353 579 q 326 451 353 496 q 207 366 291 393 q 327 289 294 346 q 353 164 353 246 q 348 79 353 132 q 344 17 344 26 q 372 -95 344 -58 q 501 -141 408 -141 l 501 -285 "},"X":{"x_min":0,"x_max":894.453125,"ha":999,"o":"m 894 0 l 654 0 l 445 351 l 238 0 l 0 0 l 316 516 l 0 1013 l 238 1013 l 445 659 l 652 1013 l 894 1013 l 577 519 l 894 0 "},"#":{"x_min":0,"x_max":1019.453125,"ha":1117,"o":"m 1019 722 l 969 582 l 776 581 l 717 417 l 919 417 l 868 279 l 668 278 l 566 -6 l 413 -5 l 516 279 l 348 279 l 247 -6 l 94 -6 l 196 278 l 0 279 l 49 417 l 245 417 l 304 581 l 98 582 l 150 722 l 354 721 l 455 1006 l 606 1006 l 507 721 l 673 722 l 776 1006 l 927 1006 l 826 721 l 1019 722 m 627 581 l 454 581 l 394 417 l 567 417 l 627 581 "},"ι":{"x_min":42,"x_max":242,"ha":389,"o":"m 242 0 l 42 0 l 42 749 l 242 749 l 242 0 "},"Ά":{"x_min":0,"x_max":995.828125,"ha":1072,"o":"m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 m 995 0 l 776 0 l 708 208 l 315 208 l 247 0 l 29 0 l 390 1012 l 629 1012 l 995 0 m 652 376 l 509 809 l 369 376 l 652 376 "},")":{"x_min":0,"x_max":389,"ha":486,"o":"m 389 357 q 319 14 389 187 q 145 -293 259 -134 l 0 -293 q 139 22 90 -142 q 189 358 189 187 q 139 689 189 525 q 0 1013 90 853 l 145 1013 q 319 703 258 857 q 389 357 389 528 "},"ε":{"x_min":16.671875,"x_max":652.78125,"ha":742,"o":"m 652 259 q 565 49 652 123 q 340 -25 479 -25 q 102 39 188 -25 q 16 197 16 104 q 45 299 16 249 q 134 390 75 348 q 58 456 86 419 q 25 552 25 502 q 120 717 25 653 q 322 776 208 776 q 537 710 456 776 q 625 508 625 639 l 445 508 q 415 585 445 563 q 327 608 386 608 q 254 590 293 608 q 215 544 215 573 q 252 469 215 490 q 336 453 280 453 q 369 455 347 453 q 400 456 391 456 l 400 308 l 329 308 q 247 291 280 308 q 204 223 204 269 q 255 154 204 172 q 345 143 286 143 q 426 174 398 143 q 454 259 454 206 l 652 259 "},"Δ":{"x_min":0,"x_max":981.953125,"ha":1057,"o":"m 981 0 l 0 0 l 386 1013 l 594 1013 l 981 0 m 715 175 l 490 765 l 266 175 l 715 175 "},"}":{"x_min":0,"x_max":500,"ha":597,"o":"m 500 294 q 348 246 390 294 q 315 128 315 209 q 320 42 315 101 q 326 -48 326 -17 q 270 -214 326 -161 q 0 -285 196 -285 l 0 -141 q 126 -97 90 -141 q 154 8 154 -64 q 150 91 154 37 q 146 157 146 145 q 172 281 146 235 q 294 366 206 339 q 173 451 208 390 q 146 576 146 500 q 150 655 146 603 q 154 731 154 708 q 126 831 154 799 q 0 872 90 872 l 0 1015 q 270 944 196 1015 q 326 777 326 891 q 322 707 326 747 q 313 593 313 612 q 347 482 313 518 q 500 438 390 438 l 500 294 "},"‰":{"x_min":0,"x_max":1681,"ha":1775,"o":"m 861 484 q 1048 404 979 484 q 1111 228 1111 332 q 1048 51 1111 123 q 859 -29 979 -29 q 672 50 740 -29 q 610 227 610 122 q 672 403 610 331 q 861 484 741 484 m 861 120 q 939 151 911 120 q 967 226 967 183 q 942 299 967 270 q 861 333 912 333 q 783 301 811 333 q 756 226 756 269 q 783 151 756 182 q 861 120 810 120 m 904 984 l 316 -28 l 205 -29 l 793 983 l 904 984 m 250 984 q 436 904 366 984 q 499 730 499 832 q 436 552 499 626 q 248 472 366 472 q 62 552 132 472 q 0 728 0 624 q 62 903 0 831 q 250 984 132 984 m 249 835 q 169 801 198 835 q 140 725 140 768 q 167 652 140 683 q 247 621 195 621 q 327 654 298 621 q 357 730 357 687 q 329 803 357 772 q 249 835 301 835 m 1430 484 q 1618 404 1548 484 q 1681 228 1681 332 q 1618 51 1681 123 q 1429 -29 1548 -29 q 1241 50 1309 -29 q 1179 227 1179 122 q 1241 403 1179 331 q 1430 484 1311 484 m 1431 120 q 1509 151 1481 120 q 1537 226 1537 183 q 1511 299 1537 270 q 1431 333 1482 333 q 1352 301 1380 333 q 1325 226 1325 269 q 1352 151 1325 182 q 1431 120 1379 120 "},"a":{"x_min":0,"x_max":700,"ha":786,"o":"m 700 0 l 488 0 q 465 93 469 45 q 365 5 427 37 q 233 -26 303 -26 q 65 37 130 -26 q 0 205 0 101 q 120 409 0 355 q 343 452 168 431 q 465 522 465 468 q 424 588 465 565 q 337 611 384 611 q 250 581 285 611 q 215 503 215 552 l 26 503 q 113 707 26 633 q 328 775 194 775 q 538 723 444 775 q 657 554 657 659 l 657 137 q 666 73 657 101 q 700 33 675 45 l 700 0 m 465 297 l 465 367 q 299 322 358 340 q 193 217 193 287 q 223 150 193 174 q 298 127 254 127 q 417 175 370 127 q 465 297 465 224 "},"—":{"x_min":0,"x_max":941.671875,"ha":1039,"o":"m 941 297 l 0 297 l 0 450 l 941 450 l 941 297 "},"=":{"x_min":29.171875,"x_max":798.609375,"ha":828,"o":"m 798 502 l 29 502 l 29 635 l 798 635 l 798 502 m 798 204 l 29 204 l 29 339 l 798 339 l 798 204 "},"N":{"x_min":0,"x_max":833,"ha":949,"o":"m 833 0 l 617 0 l 206 695 l 206 0 l 0 0 l 0 1013 l 216 1013 l 629 315 l 629 1013 l 833 1013 l 833 0 "},"ρ":{"x_min":0,"x_max":722,"ha":810,"o":"m 364 -17 q 271 0 313 -17 q 194 48 230 16 l 194 -278 l 0 -278 l 0 370 q 87 656 0 548 q 358 775 183 775 q 626 655 524 775 q 722 372 722 541 q 621 95 722 208 q 364 -17 520 -17 m 360 607 q 237 529 280 607 q 201 377 201 463 q 234 229 201 292 q 355 147 277 147 q 467 210 419 147 q 515 374 515 273 q 471 537 515 468 q 360 607 428 607 "},"2":{"x_min":64,"x_max":764,"ha":828,"o":"m 764 685 q 675 452 764 541 q 484 325 637 415 q 307 168 357 250 l 754 168 l 754 0 l 64 0 q 193 301 64 175 q 433 480 202 311 q 564 673 564 576 q 519 780 564 737 q 416 824 475 824 q 318 780 358 824 q 262 633 270 730 l 80 633 q 184 903 80 807 q 415 988 276 988 q 654 907 552 988 q 764 685 764 819 "},"¯":{"x_min":0,"x_max":775,"ha":771,"o":"m 775 958 l 0 958 l 0 1111 l 775 1111 l 775 958 "},"Z":{"x_min":0,"x_max":804.171875,"ha":906,"o":"m 804 836 l 251 182 l 793 182 l 793 0 l 0 0 l 0 176 l 551 830 l 11 830 l 11 1013 l 804 1013 l 804 836 "},"u":{"x_min":0,"x_max":668,"ha":782,"o":"m 668 0 l 474 0 l 474 89 q 363 9 425 37 q 233 -19 301 -19 q 61 53 123 -19 q 0 239 0 126 l 0 749 l 199 749 l 199 296 q 225 193 199 233 q 316 146 257 146 q 424 193 380 146 q 469 304 469 240 l 469 749 l 668 749 l 668 0 "},"k":{"x_min":0,"x_max":688.890625,"ha":771,"o":"m 688 0 l 450 0 l 270 316 l 196 237 l 196 0 l 0 0 l 0 1013 l 196 1013 l 196 483 l 433 748 l 675 748 l 413 469 l 688 0 "},"Η":{"x_min":0,"x_max":837,"ha":950,"o":"m 837 0 l 627 0 l 627 450 l 210 450 l 210 0 l 0 0 l 0 1013 l 210 1013 l 210 635 l 627 635 l 627 1013 l 837 1013 l 837 0 "},"Α":{"x_min":0,"x_max":966.671875,"ha":1043,"o":"m 966 0 l 747 0 l 679 208 l 286 208 l 218 0 l 0 0 l 361 1013 l 600 1013 l 966 0 m 623 376 l 480 809 l 340 376 l 623 376 "},"s":{"x_min":0,"x_max":681,"ha":775,"o":"m 681 229 q 568 33 681 105 q 340 -29 471 -29 q 107 39 202 -29 q 0 245 0 114 l 201 245 q 252 155 201 189 q 358 128 295 128 q 436 144 401 128 q 482 205 482 166 q 363 284 482 255 q 143 348 181 329 q 25 533 25 408 q 129 716 25 647 q 340 778 220 778 q 554 710 465 778 q 658 522 643 643 l 463 522 q 419 596 458 570 q 327 622 380 622 q 255 606 290 622 q 221 556 221 590 q 339 473 221 506 q 561 404 528 420 q 681 229 681 344 "},"B":{"x_min":0,"x_max":835,"ha":938,"o":"m 674 547 q 791 450 747 518 q 835 304 835 383 q 718 75 835 158 q 461 0 612 0 l 0 0 l 0 1013 l 477 1013 q 697 951 609 1013 q 797 754 797 880 q 765 630 797 686 q 674 547 734 575 m 438 621 q 538 646 495 621 q 590 730 590 676 q 537 814 590 785 q 436 838 494 838 l 199 838 l 199 621 l 438 621 m 445 182 q 561 211 513 182 q 618 311 618 247 q 565 410 618 375 q 444 446 512 446 l 199 446 l 199 182 l 445 182 "},"…":{"x_min":0,"x_max":819,"ha":963,"o":"m 206 0 l 0 0 l 0 207 l 206 207 l 206 0 m 512 0 l 306 0 l 306 207 l 512 207 l 512 0 m 819 0 l 613 0 l 613 207 l 819 207 l 819 0 "},"?":{"x_min":1,"x_max":687,"ha":785,"o":"m 687 734 q 621 563 687 634 q 501 454 560 508 q 436 293 436 386 l 251 293 l 251 391 q 363 557 251 462 q 476 724 476 653 q 432 827 476 788 q 332 866 389 866 q 238 827 275 866 q 195 699 195 781 l 1 699 q 110 955 1 861 q 352 1040 210 1040 q 582 963 489 1040 q 687 734 687 878 m 446 0 l 243 0 l 243 203 l 446 203 l 446 0 "},"H":{"x_min":0,"x_max":838,"ha":953,"o":"m 838 0 l 628 0 l 628 450 l 210 450 l 210 0 l 0 0 l 0 1013 l 210 1013 l 210 635 l 628 635 l 628 1013 l 838 1013 l 838 0 "},"ν":{"x_min":0,"x_max":740.28125,"ha":828,"o":"m 740 749 l 473 0 l 266 0 l 0 749 l 222 749 l 373 211 l 529 749 l 740 749 "},"c":{"x_min":0,"x_max":751.390625,"ha":828,"o":"m 751 282 q 625 58 725 142 q 384 -26 526 -26 q 107 84 215 -26 q 0 366 0 195 q 98 651 0 536 q 370 774 204 774 q 616 700 518 774 q 751 486 715 626 l 536 486 q 477 570 516 538 q 380 607 434 607 q 248 533 298 607 q 204 378 204 466 q 242 219 204 285 q 377 139 290 139 q 483 179 438 139 q 543 282 527 220 l 751 282 "},"¶":{"x_min":0,"x_max":566.671875,"ha":678,"o":"m 21 892 l 52 892 l 98 761 l 145 892 l 176 892 l 178 741 l 157 741 l 157 867 l 108 741 l 88 741 l 40 871 l 40 741 l 21 741 l 21 892 m 308 854 l 308 731 q 252 691 308 691 q 227 691 240 691 q 207 696 213 695 l 207 712 l 253 706 q 288 733 288 706 l 288 763 q 244 741 279 741 q 193 797 193 741 q 261 860 193 860 q 287 860 273 860 q 308 854 302 855 m 288 842 l 263 843 q 213 796 213 843 q 248 756 213 756 q 288 796 288 756 l 288 842 m 566 988 l 502 988 l 502 -1 l 439 -1 l 439 988 l 317 988 l 317 -1 l 252 -1 l 252 602 q 81 653 155 602 q 0 805 0 711 q 101 989 0 918 q 309 1053 194 1053 l 566 1053 l 566 988 "},"β":{"x_min":0,"x_max":703,"ha":789,"o":"m 510 539 q 651 429 600 501 q 703 262 703 357 q 617 53 703 136 q 404 -29 532 -29 q 199 51 279 -29 l 199 -278 l 0 -278 l 0 627 q 77 911 0 812 q 343 1021 163 1021 q 551 957 464 1021 q 649 769 649 886 q 613 638 649 697 q 510 539 577 579 m 344 136 q 452 181 408 136 q 497 291 497 227 q 435 409 497 369 q 299 444 381 444 l 299 600 q 407 634 363 600 q 452 731 452 669 q 417 820 452 784 q 329 857 382 857 q 217 775 246 857 q 199 622 199 725 l 199 393 q 221 226 199 284 q 344 136 254 136 "},"Μ":{"x_min":0,"x_max":1019,"ha":1132,"o":"m 1019 0 l 823 0 l 823 818 l 617 0 l 402 0 l 194 818 l 194 0 l 0 0 l 0 1013 l 309 1013 l 509 241 l 708 1013 l 1019 1013 l 1019 0 "},"Ό":{"x_min":0.15625,"x_max":1174,"ha":1271,"o":"m 676 -29 q 312 127 451 -29 q 179 505 179 277 q 311 883 179 733 q 676 1040 449 1040 q 1040 883 901 1040 q 1174 505 1174 733 q 1041 127 1174 277 q 676 -29 903 -29 m 676 154 q 890 266 811 154 q 961 506 961 366 q 891 745 961 648 q 676 857 812 857 q 462 747 541 857 q 392 506 392 648 q 461 266 392 365 q 676 154 540 154 m 314 1034 l 98 779 l 0 779 l 136 1034 l 314 1034 "},"Ή":{"x_min":0,"x_max":1248,"ha":1361,"o":"m 1248 0 l 1038 0 l 1038 450 l 621 450 l 621 0 l 411 0 l 411 1012 l 621 1012 l 621 635 l 1038 635 l 1038 1012 l 1248 1012 l 1248 0 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"•":{"x_min":-27.78125,"x_max":691.671875,"ha":775,"o":"m 691 508 q 588 252 691 358 q 331 147 486 147 q 77 251 183 147 q -27 508 -27 355 q 75 761 -27 655 q 331 868 179 868 q 585 763 479 868 q 691 508 691 658 "},"¥":{"x_min":0,"x_max":836,"ha":931,"o":"m 195 625 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 l 650 625 l 777 625 l 777 472 l 578 472 l 538 389 l 777 389 l 777 236 l 532 236 l 532 0 l 322 0 l 322 236 l 79 236 l 79 389 l 315 389 l 273 472 l 79 472 l 79 625 l 195 625 "},"(":{"x_min":0,"x_max":388.890625,"ha":486,"o":"m 388 -293 l 243 -293 q 70 14 130 -134 q 0 357 0 189 q 69 703 0 526 q 243 1013 129 856 l 388 1013 q 248 695 297 860 q 200 358 200 530 q 248 24 200 187 q 388 -293 297 -138 "},"U":{"x_min":0,"x_max":813,"ha":926,"o":"m 813 362 q 697 79 813 187 q 405 -29 582 -29 q 114 78 229 -29 q 0 362 0 186 l 0 1013 l 210 1013 l 210 387 q 260 226 210 291 q 408 154 315 154 q 554 226 500 154 q 603 387 603 291 l 603 1013 l 813 1013 l 813 362 "},"γ":{"x_min":0.0625,"x_max":729.234375,"ha":815,"o":"m 729 749 l 457 37 l 457 -278 l 257 -278 l 257 37 q 218 155 243 95 q 170 275 194 215 l 0 749 l 207 749 l 363 284 l 522 749 l 729 749 "},"α":{"x_min":-1,"x_max":722,"ha":835,"o":"m 722 0 l 531 0 l 530 101 q 433 8 491 41 q 304 -25 375 -25 q 72 104 157 -25 q -1 372 -1 216 q 72 643 -1 530 q 308 775 158 775 q 433 744 375 775 q 528 656 491 713 l 528 749 l 722 749 l 722 0 m 361 601 q 233 527 277 601 q 196 375 196 464 q 232 224 196 288 q 358 144 277 144 q 487 217 441 144 q 528 370 528 281 q 489 523 528 457 q 361 601 443 601 "},"F":{"x_min":0,"x_max":706.953125,"ha":778,"o":"m 706 837 l 206 837 l 206 606 l 645 606 l 645 431 l 206 431 l 206 0 l 0 0 l 0 1013 l 706 1013 l 706 837 "},"­":{"x_min":0,"x_max":704.171875,"ha":801,"o":"m 704 297 l 0 297 l 0 450 l 704 450 l 704 297 "},":":{"x_min":0,"x_max":207,"ha":304,"o":"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 m 207 0 l 0 0 l 0 207 l 207 207 l 207 0 "},"Χ":{"x_min":0,"x_max":894.453125,"ha":978,"o":"m 894 0 l 654 0 l 445 351 l 238 0 l 0 0 l 316 516 l 0 1013 l 238 1013 l 445 660 l 652 1013 l 894 1013 l 577 519 l 894 0 "},"*":{"x_min":115,"x_max":713,"ha":828,"o":"m 713 740 l 518 688 l 651 525 l 531 438 l 412 612 l 290 439 l 173 523 l 308 688 l 115 741 l 159 880 l 342 816 l 343 1013 l 482 1013 l 481 816 l 664 880 l 713 740 "},"†":{"x_min":0,"x_max":809,"ha":894,"o":"m 509 804 l 809 804 l 809 621 l 509 621 l 509 0 l 299 0 l 299 621 l 0 621 l 0 804 l 299 804 l 299 1011 l 509 1011 l 509 804 "},"°":{"x_min":-1,"x_max":363,"ha":460,"o":"m 181 808 q 46 862 94 808 q -1 992 -1 917 q 44 1118 -1 1066 q 181 1175 96 1175 q 317 1118 265 1175 q 363 991 363 1066 q 315 862 363 917 q 181 808 267 808 m 181 908 q 240 933 218 908 q 263 992 263 958 q 242 1051 263 1027 q 181 1075 221 1075 q 120 1050 142 1075 q 99 991 99 1026 q 120 933 99 958 q 181 908 142 908 "},"V":{"x_min":0,"x_max":895.828125,"ha":997,"o":"m 895 1013 l 550 0 l 347 0 l 0 1013 l 231 1013 l 447 256 l 666 1013 l 895 1013 "},"Ξ":{"x_min":0,"x_max":751.390625,"ha":800,"o":"m 733 826 l 5 826 l 5 1012 l 733 1012 l 733 826 m 681 432 l 65 432 l 65 617 l 681 617 l 681 432 m 751 0 l 0 0 l 0 183 l 751 183 l 751 0 "},"\xA0":{"x_min":0,"x_max":0,"ha":853},"Ϋ":{"x_min":-0.21875,"x_max":836.171875,"ha":914,"o":"m 610 1046 l 454 1046 l 454 1215 l 610 1215 l 610 1046 m 369 1046 l 212 1046 l 212 1215 l 369 1215 l 369 1046 m 836 1012 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1012 l 208 1012 l 427 576 l 626 1012 l 836 1012 "},"0":{"x_min":51,"x_max":779,"ha":828,"o":"m 415 -26 q 142 129 242 -26 q 51 476 51 271 q 141 825 51 683 q 415 984 242 984 q 687 825 585 984 q 779 476 779 682 q 688 131 779 271 q 415 -26 587 -26 m 415 137 q 529 242 485 137 q 568 477 568 338 q 530 713 568 619 q 415 821 488 821 q 303 718 344 821 q 262 477 262 616 q 301 237 262 337 q 415 137 341 137 "},"”":{"x_min":0,"x_max":469,"ha":567,"o":"m 192 834 q 137 692 192 751 q 0 626 83 634 l 0 697 q 101 831 101 723 l 0 831 l 0 1013 l 192 1013 l 192 834 m 469 834 q 414 692 469 751 q 277 626 360 634 l 277 697 q 379 831 379 723 l 277 831 l 277 1013 l 469 1013 l 469 834 "},"@":{"x_min":0,"x_max":1276,"ha":1374,"o":"m 1115 -52 q 895 -170 1015 -130 q 647 -211 776 -211 q 158 -34 334 -211 q 0 360 0 123 q 179 810 0 621 q 698 1019 377 1019 q 1138 859 981 1019 q 1276 514 1276 720 q 1173 210 1276 335 q 884 75 1062 75 q 784 90 810 75 q 737 186 749 112 q 647 104 698 133 q 532 75 596 75 q 360 144 420 75 q 308 308 308 205 q 398 568 308 451 q 638 696 497 696 q 731 671 690 696 q 805 604 772 647 l 840 673 l 964 673 q 886 373 915 490 q 856 239 856 257 q 876 201 856 214 q 920 188 895 188 q 1084 284 1019 188 q 1150 511 1150 380 q 1051 779 1150 672 q 715 905 934 905 q 272 734 439 905 q 121 363 121 580 q 250 41 121 170 q 647 -103 394 -103 q 863 -67 751 -103 q 1061 26 975 -32 l 1115 -52 m 769 483 q 770 500 770 489 q 733 567 770 539 q 651 596 695 596 q 508 504 566 596 q 457 322 457 422 q 483 215 457 256 q 561 175 509 175 q 671 221 625 175 q 733 333 718 268 l 769 483 "},"Ί":{"x_min":0,"x_max":619,"ha":732,"o":"m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 m 619 0 l 411 0 l 411 1012 l 619 1012 l 619 0 "},"i":{"x_min":14,"x_max":214,"ha":326,"o":"m 214 830 l 14 830 l 14 1013 l 214 1013 l 214 830 m 214 0 l 14 0 l 14 748 l 214 748 l 214 0 "},"Β":{"x_min":0,"x_max":835,"ha":961,"o":"m 675 547 q 791 450 747 518 q 835 304 835 383 q 718 75 835 158 q 461 0 612 0 l 0 0 l 0 1013 l 477 1013 q 697 951 609 1013 q 797 754 797 880 q 766 630 797 686 q 675 547 734 575 m 439 621 q 539 646 496 621 q 590 730 590 676 q 537 814 590 785 q 436 838 494 838 l 199 838 l 199 621 l 439 621 m 445 182 q 561 211 513 182 q 618 311 618 247 q 565 410 618 375 q 444 446 512 446 l 199 446 l 199 182 l 445 182 "},"υ":{"x_min":0,"x_max":656,"ha":767,"o":"m 656 416 q 568 55 656 145 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 191 l 0 749 l 200 749 l 200 369 q 216 222 200 268 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 749 l 656 749 l 656 416 "},"]":{"x_min":0,"x_max":349,"ha":446,"o":"m 349 -300 l 0 -300 l 0 -154 l 163 -154 l 163 866 l 0 866 l 0 1013 l 349 1013 l 349 -300 "},"m":{"x_min":0,"x_max":1065,"ha":1174,"o":"m 1065 0 l 866 0 l 866 483 q 836 564 866 532 q 759 596 807 596 q 663 555 700 596 q 627 454 627 514 l 627 0 l 433 0 l 433 481 q 403 563 433 531 q 323 596 374 596 q 231 554 265 596 q 197 453 197 513 l 197 0 l 0 0 l 0 748 l 189 748 l 189 665 q 279 745 226 715 q 392 775 333 775 q 509 744 455 775 q 606 659 563 713 q 695 744 640 713 q 814 775 749 775 q 992 702 920 775 q 1065 523 1065 630 l 1065 0 "},"χ":{"x_min":0,"x_max":759.71875,"ha":847,"o":"m 759 -299 l 548 -299 l 379 66 l 215 -299 l 0 -299 l 261 233 l 13 749 l 230 749 l 379 400 l 527 749 l 738 749 l 500 238 l 759 -299 "},"8":{"x_min":57,"x_max":770,"ha":828,"o":"m 625 516 q 733 416 697 477 q 770 284 770 355 q 675 69 770 161 q 415 -29 574 -29 q 145 65 244 -29 q 57 273 57 150 q 93 413 57 350 q 204 516 130 477 q 112 609 142 556 q 83 718 83 662 q 177 905 83 824 q 414 986 272 986 q 650 904 555 986 q 745 715 745 822 q 716 608 745 658 q 625 516 688 558 m 414 590 q 516 624 479 590 q 553 706 553 659 q 516 791 553 755 q 414 828 480 828 q 311 792 348 828 q 275 706 275 757 q 310 624 275 658 q 414 590 345 590 m 413 135 q 527 179 487 135 q 564 279 564 218 q 525 386 564 341 q 411 436 482 436 q 298 387 341 436 q 261 282 261 344 q 300 178 261 222 q 413 135 340 135 "},"ί":{"x_min":42,"x_max":371.171875,"ha":389,"o":"m 242 0 l 42 0 l 42 748 l 242 748 l 242 0 m 371 1039 l 169 823 l 71 823 l 193 1039 l 371 1039 "},"Ζ":{"x_min":0,"x_max":804.171875,"ha":886,"o":"m 804 835 l 251 182 l 793 182 l 793 0 l 0 0 l 0 176 l 551 829 l 11 829 l 11 1012 l 804 1012 l 804 835 "},"R":{"x_min":0,"x_max":836.109375,"ha":947,"o":"m 836 0 l 608 0 q 588 53 596 20 q 581 144 581 86 q 581 179 581 162 q 581 215 581 197 q 553 345 581 306 q 428 393 518 393 l 208 393 l 208 0 l 0 0 l 0 1013 l 491 1013 q 720 944 630 1013 q 819 734 819 869 q 778 584 819 654 q 664 485 738 513 q 757 415 727 463 q 794 231 794 358 l 794 170 q 800 84 794 116 q 836 31 806 51 l 836 0 m 462 838 l 208 838 l 208 572 l 452 572 q 562 604 517 572 q 612 704 612 640 q 568 801 612 765 q 462 838 525 838 "},"o":{"x_min":0,"x_max":764,"ha":871,"o":"m 380 -26 q 105 86 211 -26 q 0 371 0 199 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 371 764 544 q 658 86 764 199 q 380 -26 552 -26 m 379 141 q 515 216 466 141 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 217 204 282 q 379 141 294 141 "},"5":{"x_min":59,"x_max":767,"ha":828,"o":"m 767 319 q 644 59 767 158 q 382 -29 533 -29 q 158 43 247 -29 q 59 264 59 123 l 252 264 q 295 165 252 201 q 400 129 339 129 q 512 172 466 129 q 564 308 564 220 q 514 437 564 387 q 398 488 464 488 q 329 472 361 488 q 271 420 297 456 l 93 428 l 157 958 l 722 958 l 722 790 l 295 790 l 271 593 q 348 635 306 621 q 431 649 389 649 q 663 551 560 649 q 767 319 767 453 "},"7":{"x_min":65.28125,"x_max":762.5,"ha":828,"o":"m 762 808 q 521 435 604 626 q 409 0 438 244 l 205 0 q 313 422 227 234 q 548 789 387 583 l 65 789 l 65 958 l 762 958 l 762 808 "},"K":{"x_min":0,"x_max":900,"ha":996,"o":"m 900 0 l 647 0 l 316 462 l 208 355 l 208 0 l 0 0 l 0 1013 l 208 1013 l 208 595 l 604 1013 l 863 1013 l 461 603 l 900 0 "},",":{"x_min":0,"x_max":206,"ha":303,"o":"m 206 5 q 150 -151 206 -88 q 0 -238 94 -213 l 0 -159 q 84 -100 56 -137 q 111 -2 111 -62 l 0 -2 l 0 205 l 206 205 l 206 5 "},"d":{"x_min":0,"x_max":722,"ha":836,"o":"m 722 0 l 530 0 l 530 101 q 303 -26 449 -26 q 72 103 155 -26 q 0 373 0 214 q 72 642 0 528 q 305 775 156 775 q 433 743 373 775 q 530 656 492 712 l 530 1013 l 722 1013 l 722 0 m 361 600 q 234 523 280 600 q 196 372 196 458 q 233 220 196 286 q 358 143 278 143 q 489 216 442 143 q 530 369 530 280 q 491 522 530 456 q 361 600 443 600 "},"¨":{"x_min":212,"x_max":609,"ha":933,"o":"m 609 1046 l 453 1046 l 453 1216 l 609 1216 l 609 1046 m 369 1046 l 212 1046 l 212 1216 l 369 1216 l 369 1046 "},"E":{"x_min":0,"x_max":761.109375,"ha":824,"o":"m 761 0 l 0 0 l 0 1013 l 734 1013 l 734 837 l 206 837 l 206 621 l 690 621 l 690 446 l 206 446 l 206 186 l 761 186 l 761 0 "},"Y":{"x_min":0,"x_max":836,"ha":931,"o":"m 836 1013 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 "},"\\"":{"x_min":0,"x_max":357,"ha":454,"o":"m 357 604 l 225 604 l 225 988 l 357 988 l 357 604 m 132 604 l 0 604 l 0 988 l 132 988 l 132 604 "},"‹":{"x_min":35.984375,"x_max":791.671875,"ha":828,"o":"m 791 17 l 36 352 l 35 487 l 791 823 l 791 672 l 229 421 l 791 168 l 791 17 "},"„":{"x_min":0,"x_max":483,"ha":588,"o":"m 206 5 q 150 -151 206 -88 q 0 -238 94 -213 l 0 -159 q 84 -100 56 -137 q 111 -2 111 -62 l 0 -2 l 0 205 l 206 205 l 206 5 m 483 5 q 427 -151 483 -88 q 277 -238 371 -213 l 277 -159 q 361 -100 334 -137 q 388 -2 388 -62 l 277 -2 l 277 205 l 483 205 l 483 5 "},"δ":{"x_min":6,"x_max":732,"ha":835,"o":"m 732 352 q 630 76 732 177 q 354 -25 529 -25 q 101 74 197 -25 q 6 333 6 174 q 89 581 6 480 q 323 690 178 690 q 66 864 201 787 l 66 1013 l 669 1013 l 669 856 l 348 856 q 532 729 461 789 q 673 566 625 651 q 732 352 732 465 m 419 551 q 259 496 321 551 q 198 344 198 441 q 238 208 198 267 q 357 140 283 140 q 484 203 437 140 q 526 344 526 260 q 499 466 526 410 q 419 551 473 521 "},"έ":{"x_min":16.671875,"x_max":652.78125,"ha":742,"o":"m 652 259 q 565 49 652 123 q 340 -25 479 -25 q 102 39 188 -25 q 16 197 16 104 q 45 299 16 250 q 134 390 75 348 q 58 456 86 419 q 25 552 25 502 q 120 717 25 653 q 322 776 208 776 q 537 710 456 776 q 625 508 625 639 l 445 508 q 415 585 445 563 q 327 608 386 608 q 254 590 293 608 q 215 544 215 573 q 252 469 215 490 q 336 453 280 453 q 369 455 347 453 q 400 456 391 456 l 400 308 l 329 308 q 247 291 280 308 q 204 223 204 269 q 255 154 204 172 q 345 143 286 143 q 426 174 398 143 q 454 259 454 206 l 652 259 m 579 1039 l 377 823 l 279 823 l 401 1039 l 579 1039 "},"ω":{"x_min":0,"x_max":945,"ha":1051,"o":"m 565 323 l 565 289 q 577 190 565 221 q 651 142 597 142 q 718 189 694 142 q 742 365 742 237 q 703 565 742 462 q 610 749 671 650 l 814 749 q 910 547 876 650 q 945 337 945 444 q 874 96 945 205 q 668 -29 793 -29 q 551 0 608 -29 q 470 78 495 30 q 390 0 444 28 q 276 -29 337 -29 q 69 96 149 -29 q 0 337 0 204 q 36 553 0 444 q 130 749 68 650 l 334 749 q 241 565 273 650 q 203 365 203 461 q 219 222 203 279 q 292 142 243 142 q 360 183 342 142 q 373 271 373 211 q 372 298 372 285 q 372 323 372 311 l 372 528 l 566 528 l 565 323 "},"´":{"x_min":0,"x_max":132,"ha":299,"o":"m 132 604 l 0 604 l 0 988 l 132 988 l 132 604 "},"±":{"x_min":29,"x_max":798,"ha":828,"o":"m 798 480 l 484 480 l 484 254 l 344 254 l 344 480 l 29 480 l 29 615 l 344 615 l 344 842 l 484 842 l 484 615 l 798 615 l 798 480 m 798 0 l 29 0 l 29 136 l 798 136 l 798 0 "},"|":{"x_min":0,"x_max":143,"ha":240,"o":"m 143 462 l 0 462 l 0 984 l 143 984 l 143 462 m 143 -242 l 0 -242 l 0 280 l 143 280 l 143 -242 "},"ϋ":{"x_min":0,"x_max":656,"ha":767,"o":"m 535 810 l 406 810 l 406 952 l 535 952 l 535 810 m 271 810 l 142 810 l 142 952 l 271 952 l 271 810 m 656 417 q 568 55 656 146 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 200 369 q 216 222 200 268 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 748 l 656 748 l 656 417 "},"§":{"x_min":0,"x_max":633,"ha":731,"o":"m 633 469 q 601 356 633 406 q 512 274 569 305 q 570 197 548 242 q 593 105 593 152 q 501 -76 593 -5 q 301 -142 416 -142 q 122 -82 193 -142 q 43 108 43 -15 l 212 108 q 251 27 220 53 q 321 1 283 1 q 389 23 360 1 q 419 83 419 46 q 310 194 419 139 q 108 297 111 295 q 0 476 0 372 q 33 584 0 537 q 120 659 62 626 q 72 720 91 686 q 53 790 53 755 q 133 978 53 908 q 312 1042 207 1042 q 483 984 412 1042 q 574 807 562 921 l 409 807 q 379 875 409 851 q 307 900 349 900 q 244 881 270 900 q 218 829 218 862 q 324 731 218 781 q 524 636 506 647 q 633 469 633 565 m 419 334 q 473 411 473 372 q 451 459 473 436 q 390 502 430 481 l 209 595 q 167 557 182 577 q 153 520 153 537 q 187 461 153 491 q 263 413 212 440 l 419 334 "},"b":{"x_min":0,"x_max":722,"ha":822,"o":"m 416 -26 q 289 6 346 -26 q 192 101 232 39 l 192 0 l 0 0 l 0 1013 l 192 1013 l 192 656 q 286 743 226 712 q 415 775 346 775 q 649 644 564 775 q 722 374 722 533 q 649 106 722 218 q 416 -26 565 -26 m 361 600 q 232 524 279 600 q 192 371 192 459 q 229 221 192 284 q 357 145 275 145 q 487 221 441 145 q 526 374 526 285 q 488 523 526 460 q 361 600 442 600 "},"q":{"x_min":0,"x_max":722,"ha":833,"o":"m 722 -298 l 530 -298 l 530 97 q 306 -25 449 -25 q 73 104 159 -25 q 0 372 0 216 q 72 643 0 529 q 305 775 156 775 q 430 742 371 775 q 530 654 488 709 l 530 750 l 722 750 l 722 -298 m 360 601 q 234 527 278 601 q 197 378 197 466 q 233 225 197 291 q 357 144 277 144 q 488 217 441 144 q 530 370 530 282 q 491 523 530 459 q 360 601 443 601 "},"Ω":{"x_min":-0.03125,"x_max":1008.53125,"ha":1108,"o":"m 1008 0 l 589 0 l 589 199 q 717 368 670 265 q 764 580 764 471 q 698 778 764 706 q 504 855 629 855 q 311 773 380 855 q 243 563 243 691 q 289 360 243 458 q 419 199 336 262 l 419 0 l 0 0 l 0 176 l 202 176 q 77 355 123 251 q 32 569 32 459 q 165 908 32 776 q 505 1040 298 1040 q 844 912 711 1040 q 977 578 977 785 q 931 362 977 467 q 805 176 886 256 l 1008 176 l 1008 0 "},"ύ":{"x_min":0,"x_max":656,"ha":767,"o":"m 656 417 q 568 55 656 146 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 201 369 q 218 222 201 269 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 748 l 656 748 l 656 417 m 579 1039 l 378 823 l 279 823 l 401 1039 l 579 1039 "},"z":{"x_min":0,"x_max":663.890625,"ha":753,"o":"m 663 0 l 0 0 l 0 154 l 411 591 l 25 591 l 25 749 l 650 749 l 650 584 l 245 165 l 663 165 l 663 0 "},"™":{"x_min":0,"x_max":951,"ha":1063,"o":"m 405 921 l 255 921 l 255 506 l 149 506 l 149 921 l 0 921 l 0 1013 l 405 1013 l 405 921 m 951 506 l 852 506 l 852 916 l 750 506 l 643 506 l 539 915 l 539 506 l 442 506 l 442 1013 l 595 1012 l 695 625 l 794 1013 l 951 1013 l 951 506 "},"ή":{"x_min":0,"x_max":669,"ha":779,"o":"m 669 -278 l 469 -278 l 469 390 q 448 526 469 473 q 348 606 417 606 q 244 553 288 606 q 201 441 201 501 l 201 0 l 0 0 l 0 749 l 201 749 l 201 665 q 301 744 244 715 q 423 774 359 774 q 606 685 538 774 q 669 484 669 603 l 669 -278 m 495 1039 l 293 823 l 195 823 l 317 1039 l 495 1039 "},"Θ":{"x_min":0,"x_max":993,"ha":1092,"o":"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 133 883 0 733 q 497 1040 272 1040 q 861 883 722 1040 q 993 505 993 733 q 861 127 993 277 q 497 -29 722 -29 m 497 154 q 711 266 631 154 q 782 506 782 367 q 712 746 782 648 q 497 858 634 858 q 281 746 361 858 q 211 506 211 648 q 280 266 211 365 q 497 154 359 154 m 676 430 l 316 430 l 316 593 l 676 593 l 676 430 "},"®":{"x_min":3,"x_max":1007,"ha":1104,"o":"m 507 -6 q 129 153 269 -6 q 3 506 3 298 q 127 857 3 713 q 502 1017 266 1017 q 880 855 740 1017 q 1007 502 1007 711 q 882 152 1007 295 q 507 -6 743 -6 m 502 934 q 184 800 302 934 q 79 505 79 680 q 184 210 79 331 q 501 76 302 76 q 819 210 701 76 q 925 507 925 331 q 820 800 925 682 q 502 934 704 934 m 782 190 l 639 190 q 627 225 632 202 q 623 285 623 248 l 623 326 q 603 411 623 384 q 527 439 584 439 l 388 439 l 388 190 l 257 190 l 257 829 l 566 829 q 709 787 654 829 q 772 654 772 740 q 746 559 772 604 q 675 497 720 514 q 735 451 714 483 q 756 341 756 419 l 756 299 q 760 244 756 265 q 782 212 764 223 l 782 190 m 546 718 l 388 718 l 388 552 l 541 552 q 612 572 584 552 q 641 635 641 593 q 614 695 641 672 q 546 718 587 718 "},"~":{"x_min":0,"x_max":851,"ha":949,"o":"m 851 968 q 795 750 851 831 q 599 656 730 656 q 406 744 506 656 q 259 832 305 832 q 162 775 193 832 q 139 656 139 730 l 0 656 q 58 871 0 787 q 251 968 124 968 q 442 879 341 968 q 596 791 544 791 q 691 849 663 791 q 712 968 712 892 l 851 968 "},"Ε":{"x_min":0,"x_max":761.546875,"ha":824,"o":"m 761 0 l 0 0 l 0 1012 l 735 1012 l 735 836 l 206 836 l 206 621 l 690 621 l 690 446 l 206 446 l 206 186 l 761 186 l 761 0 "},"³":{"x_min":0,"x_max":467,"ha":564,"o":"m 467 555 q 393 413 467 466 q 229 365 325 365 q 70 413 134 365 q 0 565 0 467 l 123 565 q 163 484 131 512 q 229 461 190 461 q 299 486 269 461 q 329 553 329 512 q 281 627 329 607 q 187 641 248 641 l 187 722 q 268 737 237 722 q 312 804 312 758 q 285 859 312 837 q 224 882 259 882 q 165 858 189 882 q 135 783 140 834 l 12 783 q 86 930 20 878 q 230 976 145 976 q 379 931 314 976 q 444 813 444 887 q 423 744 444 773 q 365 695 402 716 q 439 640 412 676 q 467 555 467 605 "},"[":{"x_min":0,"x_max":347.21875,"ha":444,"o":"m 347 -300 l 0 -300 l 0 1013 l 347 1013 l 347 866 l 188 866 l 188 -154 l 347 -154 l 347 -300 "},"L":{"x_min":0,"x_max":704.171875,"ha":763,"o":"m 704 0 l 0 0 l 0 1013 l 208 1013 l 208 186 l 704 186 l 704 0 "},"σ":{"x_min":0,"x_max":851.3125,"ha":940,"o":"m 851 594 l 712 594 q 761 369 761 485 q 658 83 761 191 q 379 -25 555 -25 q 104 87 208 -25 q 0 372 0 200 q 103 659 0 544 q 378 775 207 775 q 464 762 407 775 q 549 750 521 750 l 851 750 l 851 594 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 608 465 608 q 244 530 293 608 q 203 373 203 465 q 244 218 203 283 q 379 142 293 142 "},"ζ":{"x_min":0,"x_max":622,"ha":701,"o":"m 622 -32 q 604 -158 622 -98 q 551 -278 587 -218 l 373 -278 q 426 -180 406 -229 q 446 -80 446 -131 q 421 -22 446 -37 q 354 -8 397 -8 q 316 -9 341 -8 q 280 -11 291 -11 q 75 69 150 -11 q 0 283 0 150 q 87 596 0 437 q 291 856 162 730 l 47 856 l 47 1013 l 592 1013 l 592 904 q 317 660 422 800 q 197 318 197 497 q 306 141 197 169 q 510 123 408 131 q 622 -32 622 102 "},"θ":{"x_min":0,"x_max":714,"ha":817,"o":"m 357 1022 q 633 833 534 1022 q 714 486 714 679 q 634 148 714 288 q 354 -25 536 -25 q 79 147 175 -25 q 0 481 0 288 q 79 831 0 679 q 357 1022 177 1022 m 510 590 q 475 763 510 687 q 351 862 430 862 q 233 763 272 862 q 204 590 204 689 l 510 590 m 510 440 l 204 440 q 233 251 204 337 q 355 131 274 131 q 478 248 434 131 q 510 440 510 337 "},"Ο":{"x_min":0,"x_max":995,"ha":1092,"o":"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 132 883 0 733 q 497 1040 270 1040 q 861 883 722 1040 q 995 505 995 733 q 862 127 995 277 q 497 -29 724 -29 m 497 154 q 711 266 632 154 q 781 506 781 365 q 711 745 781 647 q 497 857 632 857 q 283 747 361 857 q 213 506 213 647 q 282 266 213 365 q 497 154 361 154 "},"Γ":{"x_min":0,"x_max":703.84375,"ha":742,"o":"m 703 836 l 208 836 l 208 0 l 0 0 l 0 1012 l 703 1012 l 703 836 "}," ":{"x_min":0,"x_max":0,"ha":375},"%":{"x_min":0,"x_max":1111,"ha":1213,"o":"m 861 484 q 1048 404 979 484 q 1111 228 1111 332 q 1048 51 1111 123 q 859 -29 979 -29 q 672 50 740 -29 q 610 227 610 122 q 672 403 610 331 q 861 484 741 484 m 861 120 q 939 151 911 120 q 967 226 967 183 q 942 299 967 270 q 861 333 912 333 q 783 301 811 333 q 756 226 756 269 q 783 151 756 182 q 861 120 810 120 m 904 984 l 316 -28 l 205 -29 l 793 983 l 904 984 m 250 984 q 436 904 366 984 q 499 730 499 832 q 436 552 499 626 q 248 472 366 472 q 62 552 132 472 q 0 728 0 624 q 62 903 0 831 q 250 984 132 984 m 249 835 q 169 801 198 835 q 140 725 140 768 q 167 652 140 683 q 247 621 195 621 q 327 654 298 621 q 357 730 357 687 q 329 803 357 772 q 249 835 301 835 "},"P":{"x_min":0,"x_max":771,"ha":838,"o":"m 208 361 l 208 0 l 0 0 l 0 1013 l 450 1013 q 682 919 593 1013 q 771 682 771 826 q 687 452 771 544 q 466 361 604 361 l 208 361 m 421 837 l 208 837 l 208 544 l 410 544 q 525 579 480 544 q 571 683 571 615 q 527 792 571 747 q 421 837 484 837 "},"Έ":{"x_min":0,"x_max":1172.546875,"ha":1235,"o":"m 1172 0 l 411 0 l 411 1012 l 1146 1012 l 1146 836 l 617 836 l 617 621 l 1101 621 l 1101 446 l 617 446 l 617 186 l 1172 186 l 1172 0 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"Ώ":{"x_min":0.4375,"x_max":1189.546875,"ha":1289,"o":"m 1189 0 l 770 0 l 770 199 q 897 369 849 263 q 945 580 945 474 q 879 778 945 706 q 685 855 810 855 q 492 773 561 855 q 424 563 424 691 q 470 360 424 458 q 600 199 517 262 l 600 0 l 180 0 l 180 176 l 383 176 q 258 355 304 251 q 213 569 213 459 q 346 908 213 776 q 686 1040 479 1040 q 1025 912 892 1040 q 1158 578 1158 785 q 1112 362 1158 467 q 986 176 1067 256 l 1189 176 l 1189 0 m 314 1092 l 99 837 l 0 837 l 136 1092 l 314 1092 "},"_":{"x_min":61.109375,"x_max":766.671875,"ha":828,"o":"m 766 -333 l 61 -333 l 61 -190 l 766 -190 l 766 -333 "},"Ϊ":{"x_min":-56,"x_max":342,"ha":503,"o":"m 342 1046 l 186 1046 l 186 1215 l 342 1215 l 342 1046 m 101 1046 l -56 1046 l -56 1215 l 101 1215 l 101 1046 m 249 0 l 41 0 l 41 1012 l 249 1012 l 249 0 "},"+":{"x_min":43,"x_max":784,"ha":828,"o":"m 784 353 l 483 353 l 483 0 l 343 0 l 343 353 l 43 353 l 43 489 l 343 489 l 343 840 l 483 840 l 483 489 l 784 489 l 784 353 "},"½":{"x_min":0,"x_max":1090,"ha":1188,"o":"m 1090 380 q 992 230 1090 301 q 779 101 886 165 q 822 94 784 95 q 924 93 859 93 l 951 93 l 973 93 l 992 93 l 1009 93 q 1046 93 1027 93 q 1085 93 1066 93 l 1085 0 l 650 0 l 654 38 q 815 233 665 137 q 965 376 965 330 q 936 436 965 412 q 869 461 908 461 q 806 435 831 461 q 774 354 780 409 l 659 354 q 724 505 659 451 q 870 554 783 554 q 1024 506 958 554 q 1090 380 1090 459 m 868 998 l 268 -28 l 154 -27 l 757 999 l 868 998 m 272 422 l 147 422 l 147 799 l 0 799 l 0 875 q 126 900 91 875 q 170 973 162 926 l 272 973 l 272 422 "},"Ρ":{"x_min":0,"x_max":771,"ha":838,"o":"m 208 361 l 208 0 l 0 0 l 0 1012 l 450 1012 q 682 919 593 1012 q 771 681 771 826 q 687 452 771 544 q 466 361 604 361 l 208 361 m 422 836 l 209 836 l 209 544 l 410 544 q 525 579 480 544 q 571 683 571 614 q 527 791 571 747 q 422 836 484 836 "},"'":{"x_min":0,"x_max":192,"ha":289,"o":"m 192 834 q 137 692 192 751 q 0 626 82 632 l 0 697 q 101 830 101 726 l 0 830 l 0 1013 l 192 1013 l 192 834 "},"ª":{"x_min":0,"x_max":350,"ha":393,"o":"m 350 625 l 245 625 q 237 648 241 636 q 233 672 233 661 q 117 611 192 611 q 33 643 66 611 q 0 727 0 675 q 116 846 0 828 q 233 886 233 864 q 211 919 233 907 q 168 931 190 931 q 108 877 108 931 l 14 877 q 56 977 14 942 q 165 1013 98 1013 q 270 987 224 1013 q 329 903 329 955 l 329 694 q 332 661 329 675 q 350 641 336 648 l 350 625 m 233 774 l 233 809 q 151 786 180 796 q 97 733 97 768 q 111 700 97 712 q 149 689 126 689 q 210 713 187 689 q 233 774 233 737 "},"΅":{"x_min":57,"x_max":584,"ha":753,"o":"m 584 810 l 455 810 l 455 952 l 584 952 l 584 810 m 521 1064 l 305 810 l 207 810 l 343 1064 l 521 1064 m 186 810 l 57 810 l 57 952 l 186 952 l 186 810 "},"T":{"x_min":0,"x_max":809,"ha":894,"o":"m 809 831 l 509 831 l 509 0 l 299 0 l 299 831 l 0 831 l 0 1013 l 809 1013 l 809 831 "},"Φ":{"x_min":0,"x_max":949,"ha":1032,"o":"m 566 0 l 385 0 l 385 121 q 111 230 222 121 q 0 508 0 340 q 112 775 0 669 q 385 892 219 875 l 385 1013 l 566 1013 l 566 892 q 836 776 732 875 q 949 507 949 671 q 838 231 949 341 q 566 121 728 121 l 566 0 m 566 285 q 701 352 650 285 q 753 508 753 419 q 703 658 753 597 q 566 729 653 720 l 566 285 m 385 285 l 385 729 q 245 661 297 717 q 193 516 193 604 q 246 356 193 427 q 385 285 300 285 "},"j":{"x_min":-45.828125,"x_max":242,"ha":361,"o":"m 242 830 l 42 830 l 42 1013 l 242 1013 l 242 830 m 242 -119 q 180 -267 242 -221 q 20 -308 127 -308 l -45 -308 l -45 -140 l -24 -140 q 25 -130 8 -140 q 42 -88 42 -120 l 42 748 l 242 748 l 242 -119 "},"Σ":{"x_min":0,"x_max":772.21875,"ha":849,"o":"m 772 0 l 0 0 l 0 140 l 368 526 l 18 862 l 18 1012 l 740 1012 l 740 836 l 315 836 l 619 523 l 298 175 l 772 175 l 772 0 "},"1":{"x_min":197.609375,"x_max":628,"ha":828,"o":"m 628 0 l 434 0 l 434 674 l 197 674 l 197 810 q 373 837 318 810 q 468 984 450 876 l 628 984 l 628 0 "},"›":{"x_min":36.109375,"x_max":792,"ha":828,"o":"m 792 352 l 36 17 l 36 168 l 594 420 l 36 672 l 36 823 l 792 487 l 792 352 "},"<":{"x_min":35.984375,"x_max":791.671875,"ha":828,"o":"m 791 17 l 36 352 l 35 487 l 791 823 l 791 672 l 229 421 l 791 168 l 791 17 "},"£":{"x_min":0,"x_max":716.546875,"ha":814,"o":"m 716 38 q 603 -9 658 5 q 502 -24 548 -24 q 398 -10 451 -24 q 239 25 266 25 q 161 12 200 25 q 77 -29 122 0 l 0 113 q 110 211 81 174 q 151 315 151 259 q 117 440 151 365 l 0 440 l 0 515 l 73 515 q 35 610 52 560 q 15 710 15 671 q 119 910 15 831 q 349 984 216 984 q 570 910 480 984 q 693 668 674 826 l 501 668 q 455 791 501 746 q 353 830 414 830 q 256 795 298 830 q 215 705 215 760 q 249 583 215 655 q 283 515 266 548 l 479 515 l 479 440 l 309 440 q 316 394 313 413 q 319 355 319 374 q 287 241 319 291 q 188 135 263 205 q 262 160 225 152 q 332 168 298 168 q 455 151 368 168 q 523 143 500 143 q 588 152 558 143 q 654 189 617 162 l 716 38 "},"t":{"x_min":0,"x_max":412,"ha":511,"o":"m 412 -6 q 349 -8 391 -6 q 287 -11 307 -11 q 137 38 177 -11 q 97 203 97 87 l 97 609 l 0 609 l 0 749 l 97 749 l 97 951 l 297 951 l 297 749 l 412 749 l 412 609 l 297 609 l 297 191 q 315 152 297 162 q 366 143 334 143 q 389 143 378 143 q 412 143 400 143 l 412 -6 "},"¬":{"x_min":0,"x_max":704,"ha":801,"o":"m 704 93 l 551 93 l 551 297 l 0 297 l 0 450 l 704 450 l 704 93 "},"λ":{"x_min":0,"x_max":701.390625,"ha":775,"o":"m 701 0 l 491 0 l 345 444 l 195 0 l 0 0 l 238 697 l 131 1013 l 334 1013 l 701 0 "},"W":{"x_min":0,"x_max":1291.671875,"ha":1399,"o":"m 1291 1013 l 1002 0 l 802 0 l 645 777 l 490 0 l 288 0 l 0 1013 l 215 1013 l 388 298 l 534 1012 l 757 1013 l 904 299 l 1076 1013 l 1291 1013 "},">":{"x_min":36.109375,"x_max":792,"ha":828,"o":"m 792 352 l 36 17 l 36 168 l 594 420 l 36 672 l 36 823 l 792 487 l 792 352 "},"v":{"x_min":0,"x_max":740.28125,"ha":828,"o":"m 740 749 l 473 0 l 266 0 l 0 749 l 222 749 l 373 211 l 529 749 l 740 749 "},"τ":{"x_min":0.28125,"x_max":618.734375,"ha":699,"o":"m 618 593 l 409 593 l 409 0 l 210 0 l 210 593 l 0 593 l 0 749 l 618 749 l 618 593 "},"ξ":{"x_min":0,"x_max":640,"ha":715,"o":"m 640 -14 q 619 -157 640 -84 q 563 -299 599 -230 l 399 -299 q 442 -194 433 -223 q 468 -85 468 -126 q 440 -25 468 -41 q 368 -10 412 -10 q 333 -11 355 -10 q 302 -13 311 -13 q 91 60 179 -13 q 0 259 0 138 q 56 426 0 354 q 201 530 109 493 q 106 594 144 553 q 65 699 65 642 q 94 787 65 747 q 169 856 123 828 l 22 856 l 22 1013 l 597 1013 l 597 856 l 497 857 q 345 840 398 857 q 257 736 257 812 q 366 614 257 642 q 552 602 416 602 l 552 446 l 513 446 q 313 425 379 446 q 199 284 199 389 q 312 162 199 184 q 524 136 418 148 q 640 -14 640 105 "},"&":{"x_min":-1,"x_max":910.109375,"ha":1007,"o":"m 910 -1 l 676 -1 l 607 83 q 291 -47 439 -47 q 50 100 135 -47 q -1 273 -1 190 q 51 431 -1 357 q 218 568 104 505 q 151 661 169 629 q 120 769 120 717 q 201 951 120 885 q 382 1013 276 1013 q 555 957 485 1013 q 635 789 635 894 q 584 644 635 709 q 468 539 548 597 l 615 359 q 664 527 654 440 l 844 527 q 725 223 824 359 l 910 -1 m 461 787 q 436 848 461 826 q 381 870 412 870 q 325 849 349 870 q 301 792 301 829 q 324 719 301 757 q 372 660 335 703 q 430 714 405 680 q 461 787 461 753 m 500 214 l 318 441 q 198 286 198 363 q 225 204 198 248 q 347 135 268 135 q 425 153 388 135 q 500 214 462 172 "},"Λ":{"x_min":0,"x_max":894.453125,"ha":974,"o":"m 894 0 l 666 0 l 447 757 l 225 0 l 0 0 l 344 1013 l 547 1013 l 894 0 "},"I":{"x_min":41,"x_max":249,"ha":365,"o":"m 249 0 l 41 0 l 41 1013 l 249 1013 l 249 0 "},"G":{"x_min":0,"x_max":971,"ha":1057,"o":"m 971 -1 l 829 -1 l 805 118 q 479 -29 670 -29 q 126 133 261 -29 q 0 509 0 286 q 130 884 0 737 q 493 1040 268 1040 q 790 948 659 1040 q 961 698 920 857 l 736 698 q 643 813 709 769 q 500 857 578 857 q 285 746 364 857 q 213 504 213 644 q 285 263 213 361 q 505 154 365 154 q 667 217 598 154 q 761 374 736 280 l 548 374 l 548 548 l 971 548 l 971 -1 "},"ΰ":{"x_min":0,"x_max":655,"ha":767,"o":"m 583 810 l 454 810 l 454 952 l 583 952 l 583 810 m 186 810 l 57 809 l 57 952 l 186 952 l 186 810 m 516 1039 l 315 823 l 216 823 l 338 1039 l 516 1039 m 655 417 q 567 55 655 146 q 326 -25 489 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 201 369 q 218 222 201 269 q 326 142 245 142 q 439 247 410 142 q 455 422 455 304 l 455 748 l 655 748 l 655 417 "},"\`":{"x_min":0,"x_max":190,"ha":288,"o":"m 190 654 l 0 654 l 0 830 q 55 970 0 909 q 190 1040 110 1031 l 190 969 q 111 922 134 952 q 88 836 88 892 l 190 836 l 190 654 "},"·":{"x_min":0,"x_max":207,"ha":304,"o":"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 "},"Υ":{"x_min":-0.21875,"x_max":836.171875,"ha":914,"o":"m 836 1013 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 "},"r":{"x_min":0,"x_max":431.9375,"ha":513,"o":"m 431 564 q 269 536 320 564 q 200 395 200 498 l 200 0 l 0 0 l 0 748 l 183 748 l 183 618 q 285 731 224 694 q 431 768 345 768 l 431 564 "},"x":{"x_min":0,"x_max":738.890625,"ha":826,"o":"m 738 0 l 504 0 l 366 238 l 230 0 l 0 0 l 252 382 l 11 749 l 238 749 l 372 522 l 502 749 l 725 749 l 488 384 l 738 0 "},"μ":{"x_min":0,"x_max":647,"ha":754,"o":"m 647 0 l 477 0 l 477 68 q 411 9 448 30 q 330 -11 374 -11 q 261 3 295 -11 q 199 43 226 18 l 199 -278 l 0 -278 l 0 749 l 199 749 l 199 358 q 216 222 199 268 q 322 152 244 152 q 435 240 410 152 q 448 401 448 283 l 448 749 l 647 749 l 647 0 "},"h":{"x_min":0,"x_max":669,"ha":782,"o":"m 669 0 l 469 0 l 469 390 q 449 526 469 472 q 353 607 420 607 q 248 554 295 607 q 201 441 201 501 l 201 0 l 0 0 l 0 1013 l 201 1013 l 201 665 q 303 743 245 715 q 425 772 362 772 q 609 684 542 772 q 669 484 669 605 l 669 0 "},".":{"x_min":0,"x_max":206,"ha":303,"o":"m 206 0 l 0 0 l 0 207 l 206 207 l 206 0 "},"φ":{"x_min":-1,"x_max":921,"ha":990,"o":"m 542 -278 l 367 -278 l 367 -22 q 99 92 200 -22 q -1 376 -1 206 q 72 627 -1 520 q 288 769 151 742 l 288 581 q 222 495 243 550 q 202 378 202 439 q 240 228 202 291 q 367 145 285 157 l 367 776 l 515 776 q 807 667 694 776 q 921 379 921 558 q 815 93 921 209 q 542 -22 709 -22 l 542 -278 m 542 145 q 672 225 625 145 q 713 381 713 291 q 671 536 713 470 q 542 611 624 611 l 542 145 "},";":{"x_min":0,"x_max":208,"ha":306,"o":"m 208 528 l 0 528 l 0 735 l 208 735 l 208 528 m 208 6 q 152 -151 208 -89 q 0 -238 96 -212 l 0 -158 q 87 -100 61 -136 q 113 0 113 -65 l 0 0 l 0 207 l 208 207 l 208 6 "},"f":{"x_min":0,"x_max":424,"ha":525,"o":"m 424 609 l 300 609 l 300 0 l 107 0 l 107 609 l 0 609 l 0 749 l 107 749 q 145 949 107 894 q 328 1019 193 1019 l 424 1015 l 424 855 l 362 855 q 312 841 324 855 q 300 797 300 827 q 300 773 300 786 q 300 749 300 761 l 424 749 l 424 609 "},"“":{"x_min":0,"x_max":468,"ha":567,"o":"m 190 631 l 0 631 l 0 807 q 55 947 0 885 q 190 1017 110 1010 l 190 947 q 88 813 88 921 l 190 813 l 190 631 m 468 631 l 278 631 l 278 807 q 333 947 278 885 q 468 1017 388 1010 l 468 947 q 366 813 366 921 l 468 813 l 468 631 "},"A":{"x_min":0,"x_max":966.671875,"ha":1069,"o":"m 966 0 l 747 0 l 679 208 l 286 208 l 218 0 l 0 0 l 361 1013 l 600 1013 l 966 0 m 623 376 l 480 810 l 340 376 l 623 376 "},"6":{"x_min":57,"x_max":771,"ha":828,"o":"m 744 734 l 544 734 q 500 802 533 776 q 425 828 466 828 q 315 769 359 828 q 264 571 264 701 q 451 638 343 638 q 691 537 602 638 q 771 315 771 449 q 683 79 771 176 q 420 -29 586 -29 q 134 123 227 -29 q 57 455 57 250 q 184 865 57 721 q 452 988 293 988 q 657 916 570 988 q 744 734 744 845 m 426 128 q 538 178 498 128 q 578 300 578 229 q 538 422 578 372 q 415 479 493 479 q 303 430 342 479 q 264 313 264 381 q 308 184 264 240 q 426 128 352 128 "},"‘":{"x_min":0,"x_max":190,"ha":289,"o":"m 190 631 l 0 631 l 0 807 q 55 947 0 885 q 190 1017 110 1010 l 190 947 q 88 813 88 921 l 190 813 l 190 631 "},"ϊ":{"x_min":-55,"x_max":337,"ha":389,"o":"m 337 810 l 208 810 l 208 952 l 337 952 l 337 810 m 74 810 l -55 810 l -55 952 l 74 952 l 74 810 m 242 0 l 42 0 l 42 748 l 242 748 l 242 0 "},"π":{"x_min":0.5,"x_max":838.890625,"ha":938,"o":"m 838 593 l 750 593 l 750 0 l 549 0 l 549 593 l 287 593 l 287 0 l 88 0 l 88 593 l 0 593 l 0 749 l 838 749 l 838 593 "},"ά":{"x_min":-1,"x_max":722,"ha":835,"o":"m 722 0 l 531 0 l 530 101 q 433 8 491 41 q 304 -25 375 -25 q 72 104 157 -25 q -1 372 -1 216 q 72 643 -1 530 q 308 775 158 775 q 433 744 375 775 q 528 656 491 713 l 528 749 l 722 749 l 722 0 m 361 601 q 233 527 277 601 q 196 375 196 464 q 232 224 196 288 q 358 144 277 144 q 487 217 441 144 q 528 370 528 281 q 489 523 528 457 q 361 601 443 601 m 579 1039 l 377 823 l 279 823 l 401 1039 l 579 1039 "},"O":{"x_min":0,"x_max":994,"ha":1094,"o":"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 131 883 0 733 q 497 1040 270 1040 q 860 883 721 1040 q 994 505 994 733 q 862 127 994 277 q 497 -29 723 -29 m 497 154 q 710 266 631 154 q 780 506 780 365 q 710 745 780 647 q 497 857 631 857 q 283 747 361 857 q 213 506 213 647 q 282 266 213 365 q 497 154 361 154 "},"n":{"x_min":0,"x_max":669,"ha":782,"o":"m 669 0 l 469 0 l 469 452 q 442 553 469 513 q 352 601 412 601 q 245 553 290 601 q 200 441 200 505 l 200 0 l 0 0 l 0 748 l 194 748 l 194 659 q 289 744 230 713 q 416 775 349 775 q 600 700 531 775 q 669 509 669 626 l 669 0 "},"3":{"x_min":61,"x_max":767,"ha":828,"o":"m 767 290 q 653 51 767 143 q 402 -32 548 -32 q 168 48 262 -32 q 61 300 61 140 l 250 300 q 298 173 250 219 q 405 132 343 132 q 514 169 471 132 q 563 282 563 211 q 491 405 563 369 q 343 432 439 432 l 343 568 q 472 592 425 568 q 534 701 534 626 q 493 793 534 758 q 398 829 453 829 q 306 789 344 829 q 268 669 268 749 l 80 669 q 182 909 80 823 q 410 986 274 986 q 633 916 540 986 q 735 719 735 840 q 703 608 735 656 q 615 522 672 561 q 727 427 687 486 q 767 290 767 369 "},"9":{"x_min":58,"x_max":769,"ha":828,"o":"m 769 492 q 646 90 769 232 q 384 -33 539 -33 q 187 35 271 -33 q 83 224 98 107 l 282 224 q 323 154 286 182 q 404 127 359 127 q 513 182 471 127 q 563 384 563 248 q 475 335 532 355 q 372 315 418 315 q 137 416 224 315 q 58 642 58 507 q 144 877 58 781 q 407 984 239 984 q 694 827 602 984 q 769 492 769 699 m 416 476 q 525 521 488 476 q 563 632 563 566 q 521 764 563 709 q 403 826 474 826 q 297 773 337 826 q 258 649 258 720 q 295 530 258 577 q 416 476 339 476 "},"l":{"x_min":41,"x_max":240,"ha":363,"o":"m 240 0 l 41 0 l 41 1013 l 240 1013 l 240 0 "},"¤":{"x_min":40.265625,"x_max":727.203125,"ha":825,"o":"m 727 792 l 594 659 q 620 552 620 609 q 598 459 620 504 l 725 331 l 620 224 l 491 352 q 382 331 443 331 q 273 352 322 331 l 144 224 l 40 330 l 167 459 q 147 552 147 501 q 172 658 147 608 l 40 794 l 147 898 l 283 759 q 383 776 330 776 q 482 759 434 776 l 620 898 l 727 792 m 383 644 q 308 617 334 644 q 283 551 283 590 q 309 489 283 517 q 381 462 335 462 q 456 488 430 462 q 482 554 482 515 q 455 616 482 588 q 383 644 429 644 "},"κ":{"x_min":0,"x_max":691.84375,"ha":779,"o":"m 691 0 l 479 0 l 284 343 l 196 252 l 196 0 l 0 0 l 0 749 l 196 749 l 196 490 l 440 749 l 677 749 l 416 479 l 691 0 "},"4":{"x_min":53,"x_max":775.21875,"ha":828,"o":"m 775 213 l 660 213 l 660 0 l 470 0 l 470 213 l 53 213 l 53 384 l 416 958 l 660 958 l 660 370 l 775 370 l 775 213 m 474 364 l 474 786 l 204 363 l 474 364 "},"p":{"x_min":0,"x_max":722,"ha":824,"o":"m 415 -26 q 287 4 346 -26 q 192 92 228 34 l 192 -298 l 0 -298 l 0 750 l 192 750 l 192 647 q 289 740 230 706 q 416 775 347 775 q 649 645 566 775 q 722 375 722 534 q 649 106 722 218 q 415 -26 564 -26 m 363 603 q 232 529 278 603 q 192 375 192 465 q 230 222 192 286 q 360 146 276 146 q 487 221 441 146 q 526 371 526 285 q 488 523 526 458 q 363 603 443 603 "},"‡":{"x_min":0,"x_max":809,"ha":894,"o":"m 299 621 l 0 621 l 0 804 l 299 804 l 299 1011 l 509 1011 l 509 804 l 809 804 l 809 621 l 509 621 l 509 387 l 809 387 l 809 205 l 509 205 l 509 0 l 299 0 l 299 205 l 0 205 l 0 387 l 299 387 l 299 621 "},"ψ":{"x_min":0,"x_max":875,"ha":979,"o":"m 522 142 q 657 274 620 163 q 671 352 671 316 l 671 748 l 875 748 l 875 402 q 806 134 875 240 q 525 -22 719 -1 l 525 -278 l 349 -278 l 349 -22 q 65 135 152 -1 q 0 402 0 238 l 0 748 l 204 748 l 204 352 q 231 240 204 295 q 353 142 272 159 l 353 922 l 524 922 l 522 142 "},"η":{"x_min":0,"x_max":669,"ha":779,"o":"m 669 -278 l 469 -278 l 469 390 q 448 526 469 473 q 348 606 417 606 q 244 553 288 606 q 201 441 201 501 l 201 0 l 0 0 l 0 749 l 201 749 l 201 665 q 301 744 244 715 q 423 774 359 774 q 606 685 538 774 q 669 484 669 603 l 669 -278 "}}`),cssFontWeight:`bold`,ascender:1216,underlinePosition:-100,cssFontStyle:`normal`,boundingBox:{yMin:-333,xMin:-162,yMax:1216,xMax:1681},resolution:1e3,original_font_information:{postscript_name:`Helvetiker-Bold`,version_string:`Version 1.00 2004 initial release`,vendor_url:`http://www.magenta.gr`,full_font_name:`Helvetiker Bold`,font_family_name:`Helvetiker`,copyright:`Copyright (c) Magenta ltd, 2004.`,description:``,trademark:``,designer:``,designer_url:``,unique_font_identifier:`Magenta ltd:Helvetiker Bold:22-10-104`,license_url:`http://www.ellak.gr/fonts/MgOpen/license.html`,license_description:`Copyright (c) 2004 by MAGENTA Ltd. All Rights Reserved.\r
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
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL MAGENTA OR PERSONS OR BODIES IN CHARGE OF ADMINISTRATION AND MAINTENANCE OF THE FONT SOFTWARE BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.`,manufacturer_name:`Magenta ltd`,font_sub_family_name:`Bold`},descender:-334,familyName:`Helvetiker`,lineHeight:1549,underlineThickness:50};function Sa(e,t){return e.userData.seasonalSurface=t,e}var Ca=class{root;materials=new Map;seasonalMaterials=new Map;roughness;constructor(e=.84,t=new _){this.roughness=e,this.root=t}mat=e=>{let t=this.materials.get(e);return t||(t=new r({color:e,roughness:this.roughness,flatShading:!0}),e===`#fff0c9`&&(t.userData.stationLamp=!0),[`#697f81`,`#436574`,`#6d8990`].includes(e)&&(t.userData.stationWindow=!0),[`#fff1c6`,`#fff1ce`].includes(e)&&(t.userData.nightLight=!0),[`#869493`,`#c7c5b6`,`#ddd8c7`,`#eee6d3`,`#afc59c`,`#d0c5ad`,`#b6baae`].includes(e)&&(t.userData.environmentGround=!0),this.materials.set(e,t)),t};seasonal=(e,t)=>{let n=e.material,r=n.uuid+`:`+t,i=this.seasonalMaterials.get(r);return i||(i=Sa(n.clone(),t),this.seasonalMaterials.set(r,i)),e.material=i,(t===`grass`||t===`paving`)&&(e.castShadow=!1),e};mesh=(e,t,n,r,i,a=this.root)=>{let o=new J(e,this.mat(t));return o.position.set(n,r,i),o.castShadow=!0,o.receiveShadow=!0,a.add(o),o};box=(e,t,n,r,i,a,o,s=this.root)=>this.mesh(new We(e,t,n),r,i,a,o,s);cylinder=(e,t,n,r,i,a,o=this.root)=>this.mesh(new V(e,e,t,10),n,r,i,a,o);label=(e,t,n,r,i,a,o=0,s=this.root)=>{let c=new ba(e,{font:tc,size:t,depth:.012,curveSegments:2,bevelEnabled:!1});c.computeBoundingBox(),c.translate(-(c.boundingBox.max.x+c.boundingBox.min.x)/2,0,0);let l=this.mesh(c,n,r,i,a,s);return l.rotation.y=o,l};beam=(e,t,n,r,i=this.root)=>{let a=t.clone().sub(e),o=this.cylinder(n,a.length(),r,0,0,0,i);return o.position.copy(e).add(t).multiplyScalar(.5),o.quaternion.setFromUnitVectors(new z(0,1,0),a.normalize()),o}};function wa(e,t=`/warehouse-3d-playground-pages/`){return`${t.replace(/\/?$/,`/`)}${e.replace(/^\/+/,``)}`}var Ta=e=>e.name===`locomotive-body`||e.name===`passenger-body`||/^rail-(?:bogie|coupler)-(?:1|-1)$/.test(e.name)||e.name.startsWith(`rail-wheel-`)&&e.userData.axis===`x`||e.userData.axleShaft===!0||/^cab-entry-(?:0|1)-(?:1|-1)$/.test(e.name)||/^passenger-door-(?:1|-1)-(?:1|-1)$/.test(e.name);function Ea(e){let t=[];e.traverse(e=>{e instanceof J&&Ta(e)&&t.push(e)});for(let e of t){let t=e.parent,n=new _;n.name=e.name,n.position.copy(e.position),n.quaternion.copy(e.quaternion),n.scale.copy(e.scale),n.userData={...e.userData},t.add(n),t.remove(e);for(let t of[...e.children])n.add(t);e.name=`imported-rigid-surface`,e.userData={},e.position.set(0,0,0),e.quaternion.identity(),e.scale.set(1,1,1),n.add(e)}}function Da(e,t,n,r=`cc206`){Ea(e);let i=new Map;e.traverse(e=>{Ta(e)&&i.set(e.name,e)});let a=(e,t)=>{let n=new _;n.name=`cc206-visual-${t}`,n.userData.cc206LodLevel=t,n.visible=t===`medium`,n.updateMatrix(),n.matrixAutoUpdate=!1;for(let t of[...e.children])t instanceof J&&!Ta(t)&&(t.name=`imported-visual-surface`,t.userData={},t.updateMatrix(),t.matrixAutoUpdate=!1,n.add(t));return e.add(n),n};for(let e of i.values())a(e,`high`);for(let e of[`medium`,`low`]){let r=t[e];Ea(r);let o=new Set;r.traverse(e=>{e.position.multiplyScalar(n),e instanceof J&&!o.has(e.geometry)&&(e.geometry.scale(n,n,n),o.add(e.geometry))});let s=0;if(r.traverse(t=>{if(!Ta(t))return;let n=i.get(t.name);if(!n)throw Error(`Pivot ${e} aset kereta tidak cocok: ${t.name}`);let r=a(t,e);n.add(r),s++}),s!==i.size)throw Error(`Rig ${e} aset kereta tidak lengkap.`)}let o=new Map,s=new Set;e.traverse(e=>{if(!(e instanceof J)||Array.isArray(e.material))return;let t=e.material;for(let[e,n]of Object.entries(t)){if(!(n instanceof Se))continue;let r=n.name||(t.name===`jaring`?`cc206-grille`:``);if(!r)continue;n.matrixAutoUpdate&&n.updateMatrix();let i=n.source.data,a=JSON.stringify([r,i?.width,i?.height,n.channel,n.colorSpace,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.flipY,n.anisotropy,n.matrix.elements]),c=o.get(a);c?c!==n&&(s.add(n),t[e]=c):o.set(a,n)}});let l=new Set;s.forEach(e=>{l.add(e.source.data),e.dispose()});let u=new Set([...o.values()].map(e=>e.source.data));l.forEach(e=>{!u.has(e)&&typeof ImageBitmap<`u`&&e instanceof ImageBitmap&&e.close()});let d={geometries:new Set,materials:new Set};e.updateMatrixWorld(!0);for(let e of i.values()){if(!e.userData.axleShaft)continue;let t=e.parent;if(t&&/^rail-bogie-(?:1|-1)$/.test(t.name))for(let n of e.children){let e=n.userData.cc206LodLevel;if(!e)continue;let r=t.children.find(t=>t.userData.cc206LodLevel===e);if(!r)continue;let i=t.matrixWorld.clone().invert();for(let e of[...n.children]){if(!(e instanceof J))continue;let t=e.geometry;e.geometry=t.clone().applyMatrix4(new c().multiplyMatrices(i,e.matrixWorld)),d.geometries.add(t),e.position.set(0,0,0),e.quaternion.identity(),e.scale.set(1,1,1),e.updateMatrix(),r.add(e)}}}let f=[];e.traverse(e=>{e instanceof _&&e.userData.cc206LodLevel&&f.push(e)});for(let e of f)ka(e,e.userData.cc206LodLevel,d);e.traverse(e=>{if(e instanceof J){d.geometries.delete(e.geometry);for(let t of Array.isArray(e.material)?e.material:[e.material])d.materials.delete(t)}}),d.geometries.forEach(e=>e.dispose()),d.materials.forEach(e=>e.dispose()),r===`passenger`?(e.userData.passengerLodReady=!0,e.userData.passengerDetail=`medium`):(e.userData.cc206LodReady=!0,e.userData.cc206Detail=`medium`)}var Oa=Da;function ka(e,t,n){let i=new Map,a=e.parent?.name.startsWith(`rail-wheel-`);for(let n of e.children){if(!(n instanceof J)||Array.isArray(n.material))continue;let e=n.material;if(!(e instanceof r)||(e.transparent&&e.name.startsWith(`lampu_`)&&e.opacity>=.98?(e.transparent=!1,e.opacity=1,e.depthWrite=!0):e.name===`jaring`&&e.map&&e.opacity===1?(e.transparent=!1,e.alphaTest=.25,e.alphaToCoverage=!0,e.depthWrite=!0):e.name===`kaca_glass`&&(e.forceSinglePass=!0,e.depthWrite=!1),e.transparent||Object.values(e).some(e=>e instanceof Se))||n.children.length||Object.keys(n.geometry.morphAttributes).length)continue;let o;if(t===`high`)o=e.clone();else{let n=t===`low`?.65:a?.5:e.roughness<.3?.25:e.roughness<.7?.5:.85,i=t===`low`?.15:a?.35:e.metalness<.15?0:e.metalness<.5?.35:e.metalness<.8?.6:1;o=new r({roughness:n,metalness:i,side:e.side,emissive:e.emissive,emissiveIntensity:e.emissiveIntensity,fog:e.fog,flatShading:e.flatShading}),o.userData={...e.userData}}let s={...o.toJSON()};for(let e of[`uuid`,`name`,`color`,`metadata`])delete s[e];let c=JSON.stringify([s,n.layers.mask,n.renderOrder,n.receiveShadow]),l=i.get(c);l?o.dispose():(l={material:o,meshes:[]},i.set(c,l)),l.meshes.push(n)}for(let{material:r,meshes:a}of i.values()){let i=a.map(e=>{let t=e.geometry.clone();for(let e of Object.keys(t.attributes))[`position`,`normal`,`color`].includes(e)||t.deleteAttribute(e);t.getAttribute(`normal`)||t.computeVertexNormals(),e.updateMatrix(),t.applyMatrix4(e.matrix);for(let e of[`position`,`normal`]){let n=t.getAttribute(e),r=new Float32Array(n.count*3);for(let e=0;e<n.count;e++)r[e*3]=n.getX(e),r[e*3+1]=n.getY(e),r[e*3+2]=n.getZ(e);t.setAttribute(e,new dt(r,3))}let n=e.material,r=t.getAttribute(`color`),i=t.getAttribute(`position`).count,a=new Float32Array(i*3);for(let e=0;e<i;e++)a[e*3]=n.color.r*(r?.getX(e)??1),a[e*3+1]=n.color.g*(r?.getY(e)??1),a[e*3+2]=n.color.b*(r?.getZ(e)??1);return t.setAttribute(`color`,new $e(a,3)),t.clearGroups(),t}),o=pa(i,!1);if(i.forEach(e=>e.dispose()),!o){r.dispose();continue}r.name=`cc206-${t}-color-batch`,r.color.setRGB(1,1,1),r.vertexColors=!0;let s=new J(o,r);s.name=`imported-color-batch`,s.receiveShadow=a[0].receiveShadow,s.castShadow=!1,s.layers.mask=a[0].layers.mask,s.renderOrder=a[0].renderOrder,s.updateMatrix(),s.matrixAutoUpdate=!1;for(let t of a)n.geometries.add(t.geometry),n.materials.add(t.material),e.remove(t);e.add(s)}}var Aa=e=>e instanceof _&&!!(e.userData.isLocomotive&&e.userData.cc206LodReady||e.userData.passengerCoach&&e.userData.passengerLodReady||e.userData.freightLodReady),ja=e=>!e.visible&&(e.name.endsWith(`template-bank`)||e.name.includes(`shared-templates`));function Ma(t,n){let r=!1;for(let i=t;i;i=i.parent){if(!i.visible||i.userData.staticWorldDynamic||i.userData.railRigReady||i.name.includes(`template`)||i instanceof Ge||i instanceof rt||i instanceof e||i instanceof G)return!1;if(r||=i.userData.staticMapScenery===!0,i===n)return r}return!1}function Na(e){let t=new Set,n=new Set,i=new Set,a=new Set,o=new Set,s=new Set,c=new Set,l=new Set,u=new Map,d=new Map,f=new Map,p=new Map,m=new Set,h=new Set,g=new Set,v=0,y=0,b=0,x=0,S=(e,t)=>{let n=t===1?{materials:Array.isArray(e.material)?[...e.material]:[e.material],night:!!e.userData.nightLight}:p.get(e);if(n){for(let e of n.materials){let r=f.get(e)??{count:0,night:0};r.count+=t,n.night&&(r.night+=t),r.count>0?f.set(e,r):f.delete(e),g.add(e)}t===1?p.set(e,n):p.delete(e)}},C=()=>{for(let e of g){let t=f.get(e),n=!!t,r=!!t?.night;(m.has(e)!==n||h.has(e)!==r)&&v++,n?m.add(e):m.delete(e),r?h.add(e):h.delete(e)}g.clear()},w=0,T=0,E=!1,D=e=>A(e.child),O=e=>j(e.child),k=t=>{if(t.constructor!==J||Array.isArray(t.material)||!(t.material instanceof r))return!1;let n=!1;for(let r=t;r;r=r.parent){if(r.name===`rolling-stock-instance-pool`||r.name.includes(`shared-templates`))return!1;if(n||=r.userData.railRigReady===!0,r===e)return n}return!1},A=r=>{if(!(E||o.has(r))){if(o.add(r),r instanceof J&&(t.add(r),S(r,1),k(r)&&(n.add(r),T++)),r instanceof _&&r.userData.isLocomotive&&i.add(r),r instanceof _&&r.userData.railSignalEmitter&&(a.add(r),x++),Ma(r,e)&&(s.add(r),y++),ja(r)&&(c.add(r),y++),[`high`,`medium`,`low`].includes(r.userData.cc206LodLevel)){l.add(r),y++;for(let e=r.parent;e&&!e.name.includes(`shared-templates`);e=e.parent)if(Aa(e)){u.get(e)?.add(r),d.set(r,e),b++;break}}if(Aa(r)){let e=!1;for(let t=r;t;t=t.parent)e||=t.name.includes(`shared-templates`);e||(u.set(r,new Set),b++)}r.addEventListener(`childadded`,D),r.addEventListener(`childremoved`,O);for(let e of r.children)A(e);w++}},j=e=>{if(!o.delete(e))return;e.removeEventListener(`childadded`,D),e.removeEventListener(`childremoved`,O),e instanceof J&&(t.delete(e),S(e,-1)),s.delete(e)&&y++,c.delete(e)&&y++,l.delete(e)&&y++;let r=d.get(e);r&&(u.get(r)?.delete(e),d.delete(e),b++),e instanceof _&&u.delete(e)&&b++,e instanceof J&&n.delete(e)&&T++,e instanceof _&&(i.delete(e),a.delete(e)&&x++);for(let t of e.children)j(t);w++};return A(e),{objects:o,meshes:t,rollingStockMeshes:n,locomotives:i,signalEmitters:a,rigidObjects:s,templateBanks:c,visualLodGroups:l,detailActors:u,get materials(){return C(),m},get nightMaterials(){return C(),h},get materialRevision(){return C(),v},get transformRevision(){return y},get detailRevision(){return b},get signalRevision(){return x},get revision(){return w},get rollingStockRevision(){return T},dispose(){E=!0,j(e),C()}}}var Pa=[`high`,`medium`,`low`],Fa=Aa;function Ia(e,t){let n=[],r=-1/0,i=-1,a=-1,o=new z,s=new z,c=new z,l=()=>{let r=[],o=!1,s=e=>{if(e.name.includes(`shared-templates`))return;let n=e.userData.isLocomotive&&e.userData.cc206LodReady,i=e.userData.passengerCoach&&e.userData.passengerLodReady,a=e.userData.freightLodReady;if(e instanceof _&&(n||i||a)){let n={high:[],medium:[],low:[]},s=t=>{if(t!==e&&Fa(t))return;let r=t.userData.cc206LodLevel;r&&Pa.includes(r)&&n[r].push(t);for(let e of t.children)s(e)};if(t?.detailActors)for(let r of t.detailActors.get(e)??[]){let e=r.userData.cc206LodLevel;Pa.includes(e)&&n[e].push(r)}else s(e);let c=i?`passengerDetail`:a?`freightDetail`:`cc206Detail`,l=Pa.includes(e.userData[c])?e.userData[c]:`medium`,d=Number(e.userData.detailLength),f={engine:e,levels:n,detail:l,detailKey:c,length:Number.isFinite(d)&&d>0?d:15.18};o=u(f,l)||o,r.push(f)}if(!t?.detailActors)for(let t of e.children)s(t)};if(t?.detailActors)for(let e of t.detailActors.keys())s(e);else s(e);return n=r,i=e.children.length,a=t?.detailRevision??t?.revision??a,o},u=(e,t)=>{let n=e.levels[t].length?t:Pa.find(t=>e.levels[t].length)??t,r=!1;for(let t of Pa)for(let i of e.levels[t]){let e=t===n;r||=i.visible!==e,i.visible=e}return e.detail=n,e.engine.userData[e.detailKey]=n,r};return{update(d,f){let p=performance.now(),m=!1;if((t?a!==(t.detailRevision??t.revision):p>=r||i!==e.children.length)&&(m=l(),r=p+250),!(f>0))return m;d.getWorldPosition(c);for(let e of n){let t=!0;for(let n=e.engine;n;n=n.parent)if(!n.visible){t=!1;break}if(!t)continue;e.engine.getWorldScale(o);let n=e.length*Math.abs(o.z),r;if(d instanceof A)r=n*d.zoom*f/Math.abs(d.top-d.bottom);else if(d instanceof ft){e.engine.getWorldPosition(s);let t=Math.max(d.near,s.distanceTo(c));r=n*d.zoom*f/(2*t*Math.tan(X.degToRad(d.fov/2)))}else continue;let i=e.detail;i===`high`&&r<230?i=r<70?`low`:`medium`:i===`low`&&r>90?i=r>280?`high`:`medium`:i===`medium`&&(r>280?i=`high`:r<70&&(i=`low`)),(i!==e.detail||e.engine.userData[e.detailKey]!==i)&&(m=u(e,i)||m)}return m},count(){return n.length},dispose(){n=[]}}}function La(e){let t=e.clone(!0),n=[];t.traverse(e=>{e.userData.cc206ShadowProxy&&n.push(e),(e.name===`rolling-stock-instance-pool`||e.name===`fleet-instance-batches`)&&n.push(e)});for(let e of n)e.removeFromParent();return t}function Ra(e){Ba(e,!1)}function za(e){Ba(e,!0)}function Ba(e,t){let n=t?`passenger`:`cc206`;if(e.getObjectByName(`${n}-shadow-body`))return;e.updateWorldMatrix(!0,!0);let r=new de({colorWrite:!1,depthWrite:!1,depthTest:!1});r.name=`${n}-shadow-only`;let i=new c,a=new c,o=(e,t)=>{i.copy(e.matrixWorld).invert();let n=new xe,r=o=>{if(!o.userData.cc206ShadowProxy&&!(t&&o!==e&&/^rail-(?:bogie|coupler|wheel)-/.test(o.name))&&!(o.userData.cc206LodLevel&&o.userData.cc206LodLevel!==`high`)){o instanceof J&&(o.geometry.computeBoundingBox(),o.geometry.boundingBox&&(a.multiplyMatrices(i,o.matrixWorld),n.union(o.geometry.boundingBox.clone().applyMatrix4(a))));for(let e of o.children)r(e)}};return r(e),n},s=(e,t)=>new We(Math.max(e.x,.01),Math.max(e.y,.01),Math.max(e.z,.01)).translate(t.x,t.y,t.z),l=(e,t,n)=>{let i=new J(n,r);i.name=t,i.userData.cc206ShadowProxy=!0,i.userData.rollingStockShadowProxy=!0,i.castShadow=!0,i.receiveShadow=!1,i.updateMatrix(),i.matrixAutoUpdate=!1,e.add(i)},u=o(e,!0);if(u.isEmpty()){r.dispose();return}let d=u.getSize(new z),f=u.getCenter(new z),p=Math.min(.46,d.y*.2),m=u.min.y+p,h=u.max.y-m,g=Math.min(2.35,d.z*.2),_=t?[s(new z(d.x,p,d.z),new z(f.x,u.min.y+p/2,f.z)),s(new z(d.x,h*.82,d.z),new z(f.x,m+h*.82/2,f.z)),s(new z(d.x*.86,h*.18,d.z),new z(f.x,u.max.y-h*.18/2,f.z))]:[s(new z(d.x,p,d.z),new z(f.x,u.min.y+p/2,f.z)),s(new z(d.x*.79,h*.89,Math.max(.1,d.z-2*g)),new z(f.x,m+h*.89/2,f.z))];for(let e of t?[]:[-1,1]){let t=e<0?u.min.z+g/2:u.max.z-g/2;_.push(s(new z(d.x*.94,h,g),new z(f.x,m+h/2,t)))}let v=pa(_);_.forEach(e=>e.dispose()),v&&l(e,`${n}-shadow-body`,v);let y=[];e.traverse(e=>{/^rail-(?:bogie|coupler)-(?:1|-1)$/.test(e.name)&&y.push(e),e instanceof J&&!e.userData.cc206ShadowProxy&&(e.castShadow=!1)});for(let e of y){let t=o(e,!1);t.isEmpty()||l(e,`${n}-shadow-${e.name}`,s(t.getSize(new z),t.getCenter(new z)))}}var Va=new WeakMap,Ha=new WeakMap;function Ua(e,t){let n=Va.get(t);if(!n){let e=t.clone();e.needsUpdate=!0,n={source:t,texture:e,leases:0,disposed:!1,releaseGpu:e.dispose.bind(e)};let r=n;e.dispose=()=>{r.leases===0&&!r.disposed&&(r.disposed=!0,r.releaseGpu())},Va.set(t,n)}let r=Ha.get(e);return r||Ha.set(e,r=new Set),r.has(n)||(r.add(n),n.leases++),n.texture}function Wa(e){e.traverse(e=>{let t=Ha.get(e);if(t){Ha.delete(e);for(let e of t)e.leases--,e.leases===0&&(Va.delete(e.source),e.texture.dispose())}})}var Ga=new WeakMap,Ka=new WeakMap;function qa(e,t){let n=Ga.get(t);if(!n){let e=t.clone();n={source:t,geometry:e,leases:0,disposed:!1,disposeGpu:e.dispose.bind(e)};let r=n;e.dispose=()=>{r.leases===0&&!r.disposed&&(r.disposed=!0,r.disposeGpu())},Ga.set(t,n)}let r=Ka.get(e);return r||Ka.set(e,r=new Set),r.has(n)||(r.add(n),n.leases++),n.geometry}function Ja(e){Wa(e),e.traverse(e=>{let t=Ka.get(e);if(t){Ka.delete(e);for(let e of t)e.leases--,e.leases===0&&(Ga.delete(e.source),e.geometry.dispose())}})}function Ya(e,t=!1){let n=e.clone(!0),r=new Map,i=new Map,a=new Map,o=e=>{let r=i.get(e);if(!r){r=e.clone(),i.set(e,r);for(let[i,o]of Object.entries(e))if(o instanceof Se){let e=a.get(o);e||(e=t?Ua(n,o):o.clone(),e.needsUpdate=!0,a.set(o,e)),r[i]=e}}return r};return n.traverse(e=>{if(!(e instanceof J||e instanceof et||e instanceof pe))return;let t=r.get(e.geometry);if(!t){let i=qa(n,e.geometry);r.set(e.geometry,i),t=i}e.geometry=t,e.material=Array.isArray(e.material)?e.material.map(o):o(e.material)}),n}function Xa(e){let t=new Set,n=new Set,r=new Set;for(let i of e)i.traverse(e=>{if(e instanceof J||e instanceof et||e instanceof pe){t.add(e.geometry);for(let t of Array.isArray(e.material)?e.material:[e.material]){n.add(t);for(let e of Object.values(t))e instanceof Se&&r.add(e)}}});t.forEach(e=>e.dispose()),n.forEach(e=>e.dispose());let i=new Set;r.forEach(e=>{i.add(e.source.data),e.dispose()}),i.forEach(e=>{typeof ImageBitmap<`u`&&e instanceof ImageBitmap&&e.close()})}var Za=15.849,Qa=15.18,$a=Qa/Za,eo=1.067,$={referenceMeters:eo,referenceCC206LengthMeters:Za,authoredCC206Length:Qa,unitScale:$a,innerGap:eo*$a,centerHalf:1.1219610070035964/2,headWidth:.1,sleeperLength:2,ballastWidth:2.4,legacy:{centerHalf:.95,innerGap:1.8,sleeperLength:2.85,ballastWidth:3.2}},to=e=>e.name.startsWith(`rail-wheel-`)&&(e.userData.axis===`x`||e instanceof _);function no(e,t=$.centerHalf){if(!(Number.isFinite(t)&&t>0))throw Error(`Gauge roda tidak valid.`);let n=Number(e.userData.runningGearGaugeHalf),r=n>0&&Number.isFinite(n)?n:$.legacy.centerHalf;if(Math.abs(r-t)<1e-10)return e;let i=t/r;e.updateMatrixWorld(!0);let a=[],o=[],s=[];e.traverse(e=>{/^rail-bogie-(?:1|-1)$/.test(e.name)&&a.push(e),(e.userData.axleShaft===!0||e.userData.runningGearStatic===!0)&&o.push(e),to(e)&&s.push(e)});let l=new Set,u=new Set,d=new c().makeScale(i,1,1),f=(e,t)=>{let n=e.matrixWorld.clone().invert();(t??e).traverse(t=>{if(!(t instanceof J)||l.has(t))return;for(let n=t;n&&n!==e;n=n.parent)if(to(n))return;let r=new c().multiplyMatrices(n,t.matrixWorld),i=r.clone().invert().multiply(d).multiply(r),a=t.geometry.clone();a.applyMatrix4(i),a.computeBoundingBox(),a.computeBoundingSphere(),u.add(t.geometry),t.geometry=a,l.add(t),t.userData.runningGearGaugeRetargeted=!0})};for(let e of a)f(e);for(let t of o)f(e,t);for(let e of s)e.position.x=Math.sign(e.position.x)*t,e.updateMatrix();return e.traverse(e=>{(e instanceof J||e instanceof et||e instanceof pe)&&u.delete(e.geometry)}),u.forEach(e=>e.dispose()),e.userData.runningGearGaugeHalf=t,e.updateMatrixWorld(!0),e}var ro=`modulepreload`,io=function(e){return`/warehouse-3d-playground-pages/`+e},ao={},oo=function(e){return e.pathname.endsWith(`.css`)},so=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},co=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=io(t,n);let r=s(t),i=oo(r);return so(ao,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:ro,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},lo={author:`pucohensap`,source:`https://sketchfab.com/3d-models/cc-206-ge-cm20emp-locomotive-pt-kai-b2c2e6c802774f51955a9479a6c2b901`,license:`https://creativecommons.org/licenses/by/4.0/`},uo,fo,po=()=>uo!==void 0;async function mo(){if(!uo){if(fo)return fo;fo=(async()=>{let[{GLTFLoader:e},{MeshoptDecoder:t},...n]=await Promise.all([co(()=>import(`./GLTFLoader-BFjgnd6d.js`).then(e=>e.n),__vite__mapDeps([0,1])),co(()=>import(`./meshopt_decoder.module-DXTYc6wn.js`),[]),...[`optimized`,`medium`,`low`].map(e=>fetch(wa(`/models/cc206-sketchfab-${e}-packed.glb?v=lossless-1`)).then(e=>{if(!e.ok)throw Error(`Model CC206 belum dapat dimuat.`);return e.arrayBuffer()}))]),r=new e().setMeshoptDecoder(t),i=await Promise.allSettled(n.map(e=>r.parseAsync(e,``))),a=i.flatMap(e=>e.status===`fulfilled`?[e.value.scene]:[]),o=a.map(e=>e.getObjectByName(`cc206-sketchfab-rig`)??e);try{let e=i.find(e=>e.status===`rejected`);if(e?.status===`rejected`)throw e.reason;ho(a[0],{medium:a[1],low:a[2]})}catch(e){let t=new Set,n=new Set,r=new Set;for(let e of o)e.traverse(e=>{if(e instanceof J){t.add(e.geometry);for(let t of Array.isArray(e.material)?e.material:[e.material]){n.add(t);for(let e of Object.values(t))e instanceof Se&&r.add(e)}}});t.forEach(e=>e.dispose()),n.forEach(e=>e.dispose());let i=new Set;throw r.forEach(e=>{i.add(e.source.data),e.dispose()}),i.forEach(e=>{typeof ImageBitmap<`u`&&e instanceof ImageBitmap&&e.close()}),e}})();try{await fo}finally{fo=void 0}}}function ho(e,t){if(uo)throw Error(`Template CC206 sudah dimuat.`);let n=e.getObjectByName(`cc206-sketchfab-rig`);if(!n)throw Error(`Rig CC206 tidak ditemukan.`);let r=new _;r.add(n);let i=[],a=[],o=[];if(r.traverse(e=>{e.name.startsWith(`rail-wheel-`)&&e.userData.axis===`x`&&i.push(e),/^rail-bogie-(?:1|-1)$/.test(e.name)&&a.push(e),/^rail-coupler-(?:1|-1)$/.test(e.name)&&o.push(e)}),i.length!==12||a.length!==2||o.length!==2)throw Error(`Rig CC206 tidak lengkap.`);let s=15.18/new xe().setFromObject(r).getSize(new z).z,c=new Set;r.traverse(e=>{e.position.multiplyScalar(s),delete e.userData.isLocomotive,e instanceof J&&(c.has(e.geometry)||(e.geometry.scale(s,s,s),c.add(e.geometry)),e.castShadow=!0,e.receiveShadow=!1,e.name.startsWith(`rail-wheel-`)&&e.userData.axis!==`x`&&(e.name=`imported-wheel-surface`))});for(let e of a)e.position.z=Math.sign(e.position.z)*4.3;for(let e of i){let t=Number(e.userData.radius)*s;if(!(t>0))throw Error(`Radius roda CC206 tidak valid.`);e.scale.y*=.46/t,e.scale.z*=.46/t,e.position.x=Math.sign(e.position.x)*.95,e.position.y=.46,e.userData.radius=.46}r.traverse(e=>{if(!(e instanceof J)||e.userData.axleShaft!==!0)return;let t=i.find(t=>Number(t.name.split(`-`)[2])===e.userData.axleIndex);if(!t)throw Error(`Pasangan gandar CC206 tidak lengkap.`);let n=new xe;t.traverse(e=>{e instanceof J&&(e.geometry.computeBoundingBox(),n.union(e.geometry.boundingBox))}),e.geometry.computeBoundingBox();let r=e.geometry.boundingBox;e.scale.x=(.95-(n.max.x-n.min.x)/2)/Math.max(Math.abs(r.min.x),Math.abs(r.max.x)),e.position.y=t.position.y,e.position.z=t.position.z});for(let e of o){e.updateMatrixWorld(!0);let t=new xe;e.traverse(e=>{e instanceof J&&(e.geometry.computeBoundingBox(),t.union(e.geometry.boundingBox))});let n=e.name.endsWith(`--1`)?-1:1;e.scale.z=.67/Math.max(Math.abs(t.min.z),Math.abs(t.max.z)),e.scale.x=.39/(t.max.x-t.min.x),e.scale.y=.28/(t.max.y-t.min.y),e.position.set(0,.83,n*6.92)}r.name=`cc206`,r.userData={category:`train`,variant:0,locomotiveType:`cc206`,modelStyle:`imported`,isLocomotive:!0,railRigReady:!0,attribution:lo,modifications:`Simplified derivative; gauge, wheels, bogies, drawbars and lamps retargeted for Riverside.`,locomotiveLights:go(r)},t?(Da(r,t,s),no(r),Ra(r),r.userData.modifications+=` Zoom-dependent LOD, vertex-color/PBR batching, marker/cutout alpha optimization and simplified moving shadow proxies.`):no(r),r.removeFromParent(),r.updateMatrixWorld(!0),uo=r}function go(e){let t=new Map;e.updateMatrixWorld(!0),e.traverse(e=>{if(!(e instanceof J)||!(Array.isArray(e.material)?e.material:[e.material]).some(e=>e.name===`lampu_putih_glass`))return;let n=e.geometry.getAttribute(`position`),r=new z;for(let i=0;i<n.count;i++){r.fromBufferAttribute(n,i).applyMatrix4(e.matrixWorld);let a=`${r.z>0?`front`:`rear`}-${r.y>2?`upper`:`lower`}-${r.x>0?1:-1}`,o=t.get(a)??new xe;o.expandByPoint(r),t.set(a,o)}});let n=(e,n)=>[-1,1].map(r=>{let i=t.get(`${e}-${n}-${r}`);if(!i)throw Error(`Posisi lampu CC206 tidak lengkap.`);let a=i.getCenter(new z);return a.z=e===`front`?i.max.z+.025:i.min.z-.025,a.toArray()}),r=n(`front`,`upper`),i=n(`rear`,`upper`),a=e=>{let n=t.get(`front-${e}-1`).getSize(new z);return Math.min(n.x,n.y)/2};return{frontLower:n(`front`,`lower`),frontUpper:r,rearLower:n(`rear`,`lower`),rearUpper:i,spot:[0,r[0][1],r[0][2]+.16],rearSpot:[0,i[0][1],i[0][2]-.16],bulbRadii:{lower:a(`lower`),upper:a(`upper`)}}}function _o(e){if(!uo)return;let t=Ya(uo);return t.userData.palette=e,t}function vo(e){if(e.scenes.length!==3)throw Error(`Paket CC201 harus berisi tiga LOD.`);for(let t of e.scenes)t.traverse(e=>{let t=e.userData.cc201PackedName;typeof t==`string`&&(e.name=t,delete e.userData.cc201PackedName)});return e.scenes}function yo(e){return new Promise((t,n)=>{let r=new Worker(new URL(`/warehouse-3d-playground-pages/assets/cc201-decoder.worker-ChVfWu9Y.js`,``+import.meta.url),{type:`module`}),i=e=>{r.terminate(),n(Error(e))};r.onerror=()=>i(`Decoder CC201 tidak dapat dimulai.`),r.onmessage=e=>{r.terminate(),e.data.glb?t(e.data.glb):n(Error(e.data.error??`Paket CC201 tidak valid.`))},r.postMessage(e,[e])})}var bo,xo,So=()=>bo!==void 0,Co=$.unitScale,wo=7.68/2*Co,To=15.214/2*Co-.67,Eo={frontUpper:[[-.115,3.127,6.014],[.115,3.127,6.014]],rearUpper:[[-.115,3.083,-6.725],[.115,3.083,-6.725]],frontLower:[[-.8787633,1.1691714,6.92885],[.8972312,1.1691709,6.92805]],rearLower:[[-.8787634,1.1691714,-6.926],[.8972312,1.1691709,-6.928]],spot:[0,3.127,6.19],rearSpot:[0,3.083,-6.94],bulbRadii:{upper:.082,lower:.08,frontLower:.08,rearLower:.08}};function Do(e){let t=e.getObjectByName(`cc201-game-rig`);if(!t)throw Error(`Rig CC201 tidak ditemukan.`);t.updateWorldMatrix(!0,!0);let n=new _;n.name=`cc201-game-rig`,n.userData={...t.userData};let r=new Map;if(t.traverse(e=>{if(!Array.isArray(e.userData.anchorPosition))return;let t=new _;t.name=e.name,t.userData={...e.userData},t.position.fromArray(e.userData.anchorPosition);let i=e.name.startsWith(`rail-wheel-`)?r.get(e.parent):n;if(!i)throw Error(`Induk roda CC201 tidak ditemukan.`);i.add(t),r.set(e,t)}),r.size!==17)throw Error(`Rig CC201 harus mempunyai 17 pivot.`);n.updateMatrixWorld(!0);for(let[e,t]of r){let n=t.matrixWorld.clone().invert(),i=a=>{if(!(a!==e&&r.has(a))){if(a instanceof J){let e=a.geometry.clone();for(let t of Object.keys(e.attributes)){let n=e.getAttribute(t);if(n.normalized||!(n.array instanceof Float32Array)){let r=new Float32Array(n.count*n.itemSize);for(let e=0;e<n.count;e++)for(let t=0;t<n.itemSize;t++)r[e*n.itemSize+t]=n.getComponent(e,t);e.setAttribute(t,new dt(r,n.itemSize))}}e.applyMatrix4(new c().multiplyMatrices(n,a.matrixWorld)),e.computeBoundingBox(),e.computeBoundingSphere();let r=new J(e,a.material);r.name=`cc201-imported-surface`,r.castShadow=!1,r.receiveShadow=!1,t.add(r)}a.children.forEach(i)}};i(e)}return n}function Oo(e,t){if(bo)throw Error(`Template CC201 sudah terpasang.`);let n=Do(e),r=Do(t.medium),i=Do(t.low);n.name=`cc201`,n.userData={...n.userData,category:`train`,variant:3,locomotiveType:`cc201`,modelStyle:`imported`,isLocomotive:!0,railRigReady:!0,palette:`blue`,runningGearGaugeHalf:$.centerHalf,carSpecRaw:{bogieZ:wo,couplerZ:To},locomotiveLights:Eo},Da(n,{medium:r,low:i},1),Ra(n),n.updateMatrixWorld(!0),bo=n}async function ko(){if(!bo){if(xo)return xo;xo=(async()=>{let[{GLTFLoader:e},t]=await Promise.all([co(()=>import(`./GLTFLoader-BFjgnd6d.js`).then(e=>e.n),__vite__mapDeps([0,1])),fetch(wa(`/models/cc201-game-lossless.bin?v=lossless-1`))]);if(!t.ok)throw Error(`Model CC201 belum dapat dimuat.`);let n=await yo(await t.arrayBuffer()),r=await new e().parseAsync(n,``),i=r.scenes;try{vo(r),Oo(i[0],{medium:i[1],low:i[2]})}catch(e){throw Xa(i),e}})();try{await xo}finally{xo=void 0}}}function Ao(e){if(!bo)throw Error(`Template CC201 belum dimuat.`);let t=Ya(bo);return t.userData.palette=e,t}var jo=[{value:`cc206`,label:`CC206`},{value:`cc201`,label:`CC201 · hidung kotak`}];function Mo(e){return e===void 0||e===`cc203`||e===`cc204`?`cc206`:e}function No(e){return e===`train.cc203`||e===`train.cc204`?`train.cc206`:e}function Po(){let e=Math.max(0,jo.findIndex(e=>e.value===`cc201`)),t=e;return{next(){let e=jo[t].value;return t=(t+1)%jo.length,e},reset(){t=e}}}var Fo=(e,t)=>[[-1.09,e,t],[1.09,e,t]],Io=(e,t)=>[[-.16,e,t],[.16,e,t]],Lo={cc201:Eo,cc206:{frontLower:Fo(1.57,6.87),frontUpper:Io(4.06,6.58),rearLower:Fo(1.57,-6.87),rearUpper:Io(4.06,-6.58),spot:[0,3.95,6.6]},cc203:{frontLower:Fo(1.62,6.87),frontUpper:Io(4.08,5.94),rearLower:Fo(1.57,-6.87),rearUpper:[],spot:[0,3.95,6.01]},cc204:{frontLower:Fo(1.63,6.85),frontUpper:Io(4.11,5.1),rearLower:Fo(1.57,-6.87),rearUpper:[],spot:[0,3.99,5.11]}};function Ro(e=`cc206`){return Lo[e]}var zo=`#eeeee7`,Bo=`#dc7c29`,Vo=`#253e65`,Ho=`#333e48`,Uo=`#77838a`,Wo=`#334b58`,Go=`#b53b32`,Ko=.04;function qo(e){e.box(3.02,.35,13.8,Ho,0,1.1,0),e.box(2.9,.16,13.65,`#c7cbcb`,0,1.36,0),e.box(1.8,.65,4.1,`#48545e`,0,.58,0);let t=e.root.children.length;for(let t of[-4.3,4.3]){e.box(2.24,.35,3.6,Ho,0,.62,t);for(let n=0;n<3;n++){let r=t+(n-1)*1.13;e.box(2.2,.14,.18,`#55636f`,0,.46,r);for(let i of[-1,1]){let a=new _;a.name=`rail-wheel-loco-${t}-${n}-${i}`,a.position.set(i*.95,.46,r),a.userData.radius=.46,e.root.add(a);let o=e.mesh(new V(.46,.46,.19,16),`#687481`,0,0,0,a);o.rotation.z=Math.PI/2,e.mesh(new V(.495,.495,.025,16),Ho,-i*.09,0,0,a).rotation.z=Math.PI/2,e.mesh(new V(.22,.22,.205,12),`#8f9ba5`,0,0,0,a).rotation.z=Math.PI/2;for(let t=0;t<3;t++)e.box(.018,.38,.026,Ho,i*.11,0,0,a).rotation.x=t*Math.PI/3;e.box(.16,.29,.46,`#6b7680`,i*1.13,.71,r);for(let t=0;t<3;t++)e.box(.13,.04,.3,`#8d98a1`,i*1.23,.65+t*.07,r)}}}for(let n of e.root.children.slice(t))n instanceof J&&(n.userData.runningGearStatic=!0);for(let t of[-7.23,7.23])e.mesh(new fa(.22,.22,.62,2,.025),`#414a54`,0,.83,t),e.mesh(new fa(.39,.28,.22,2,.035),`#4e5861`,0,.83,t+Math.sign(t)*.25)}function Jo(e,t,n,r,i){let a=new Ye;t.forEach(([e,t],n)=>n?a.lineTo(-e,t):a.moveTo(-e,t)),a.closePath();let o=new D(a,{depth:n,bevelEnabled:!1,curveSegments:1});return o.rotateY(Math.PI/2).translate(-n/2,0,0),e.mesh(o,r,0,0,0,i)}function Yo(e,t,n){let[r,i,a]=t;e.mesh(new V(.12,.12,.065,12),Ho,r,i,a-Math.sign(a)*.02,n).rotation.x=Math.PI/2,e.mesh(new V(.087,.087,.071,12),`#fff1b8`,r,i,a,n).rotation.x=Math.PI/2}function Xo(e,t,n){e.box(3.05,.72,.16,Go,0,.67,t*6.8,n),e.box(3.02,.13,.17,Ho,0,1.08,t*6.81,n);for(let r of[-1.12,1.12])e.box(.1,.54,.05,Ho,r,.72,t*6.895,n),e.box(.32,.075,.06,Uo,r,1.18,t*6.87,n)}function Zo(e,t,n,r,i,a=!1){let o=Math.sign(t);e.label(`KAI`,.4,Vo,t,n,r,o*Math.PI/2,i),a||(e.box(.024,.058,1.04,Bo,t+o*.014,n+.18,r,i).rotation.x=-.33)}function Qo(e,t,n,r,i,a){let o=(t+n)/2,s=n-t,c=1.45;e.box(2.22,r-c,s,zo,0,(r+c)/2,o,a),e.box(2.3,.09,s,`#b3bbc0`,0,r+.045,o,a);for(let n of[-1,1]){i?(e.box(.035,.14,s,`#2c8bc2`,n*1.127,2.2,o,a),e.box(.037,.19,s,`#245784`,n*1.13,1.96,o,a)):(e.box(.035,.88,s,Bo,n*1.127,1.92,o,a),e.box(.038,.12,s,Vo,n*1.13,1.51,o,a));let l=Math.max(3,Math.floor(s/1.35));for(let i=0;i<l;i++){let o=t+(i+.5)*s/l;if(e.box(.033,r-c-.13,.022,`#adb6b6`,n*1.148,(r+c)/2,o-.59,a),e.box(.045,.1,.035,Uo,n*1.157,2.63,o+.35,a),i<2||i>=l-2){let t=i<2;e.box(.04,t?1.34:.85,.95,`#56616b`,n*1.149,t?r-.77:r-.55,o,a);for(let i=0;i<(t?7:5);i++)e.box(.046,t?1.29:.023,t?.028:.89,`#273943`,n*1.175,t?r-.77:r-.88+i*.14,t?o-.4+i*.133:o,a)}}for(let r=0;r<=l;r++)e.box(.04,.73,.04,Uo,n*1.46,1.83,t+r*s/l,a);e.box(.042,.042,s,Uo,n*1.46,2.21,o,a),Zo(e,n*1.18,2.58,o,a,i)}for(let n of[t+1.15,t+2.5]){e.cylinder(.48,.09,Ho,0,r+.12,n,a),e.cylinder(.38,.07,`#677780`,0,r+.2,n,a);for(let t=0;t<4;t++)e.box(.76,.018,.025,`#a2aeb3`,0,r+.243,n,a).rotation.y=t*Math.PI/4}e.box(.36,.27,.42,Ho,.53,r+.18,o+.4,a)}function $o(e,t,n,r,i=!1){for(let a of[-1,1]){e.box(.034,.73,.92,Ho,a*1.485,3.54,n,r),e.box(.042,.63,.78,Wo,a*1.507,3.54,n,r),e.box(.045,.69,.04,`#babfbc`,a*1.536,3.54,n-.05,r);let o=n-.89;e.box(.035,1.75,.53,`#d4d8d5`,a*1.49,2.66,o,r),e.box(.042,.65,.3,Wo,a*1.516,3.14,o,r),e.box(.063,.03,.17,Uo,a*1.54,2.67,o+.06,r),e.box(.035,.3,1.1,Ho,a*1.514,2.63,n,r),e.label(`CC ${t.slice(2)}`,.148,`#f6f5ee`,a*1.539,2.55,n,a*Math.PI/2,r),Zo(e,a*1.528,1.86,n,r,i);for(let t=0;t<3;t++)e.box(.35,.075,.47,Uo,a*1.43,.65+t*.24,o,r);e.box(.043,1.26,.043,Uo,a*1.54,2.13,o+.36,r)}}function es(e,t,n,r,i){for(let a of[-1,1]){e.box(1.15,.84,.039,Ho,a*.65,t,n,i).rotation.x=r,e.box(1.025,.7,.048,Wo,a*.65,t,n+.025,i).rotation.x=r;let o=e.box(.025,.5,.025,Ho,a*.67,t-.11,n+.074,i);o.rotation.x=r,o.rotation.z=a*-.27}}function ts(e,t){for(let n of[-1,1]){let r=new _;r.name=n===1?`cab-front`:`cab-rear`,r.rotation.y=n===1?0:Math.PI,t.add(r),Jo(e,[[3.82,1.45],[6.8,1.45],[6.8,3.08],[6.4,4.22],[4.05,4.22],[3.82,4.04]],2.96,zo,r),Jo(e,[[4.02,4.22],[6.4,4.22],[6.61,3.98],[4,4.06]],3.02,`#b0b8bd`,r).position.y=Ko,es(e,3.61,6.62,-.337,r),$o(e,`cc206`,5.59,r),e.box(2.91,.045,.035,`#bcc3c3`,0,3.06,6.824,r),e.label(`KAI`,.46,Vo,0,2.11,6.835,0,r),e.box(2.48,.08,.035,Bo,0,1.75,6.838,r),e.box(.55,.27,.1,Ho,0,4.07,6.55,r);for(let t of Lo.cc206.frontLower)Yo(e,t,r);for(let t of Lo.cc206.frontUpper)Yo(e,t,r);for(let t of[-1,1])e.box(.041,1.22,.041,Uo,t*1.43,2.05,6.84,r),e.mesh(new V(.065,.035,.24,8),Ho,t*.21,4.36,4.78,r).rotation.x=Math.PI/2,e.box(.21,.12,.16,Ho,t*1.53,3.14,6.11,r)}}function ns(e,t){Jo(e,[[3.27,1.45],[6.8,1.45],[6.8,2.23],[5.84,4.25],[3.53,4.25],[3.27,4.04]],2.96,zo,t),Jo(e,[[3.5,4.25],[5.84,4.25],[6,4.07],[3.49,4.11]],3.02,`#bdc4c5`,t).position.y=Ko,es(e,3.6,6.174,-.444,t),$o(e,`cc203`,4.79,t),e.label(`KAI`,.46,Vo,0,1.99,6.84,0,t),e.box(.58,.28,.1,Ho,0,4.08,5.91,t),e.box(2.6,.07,.04,Bo,0,1.76,6.84,t);for(let n of[-1,1])e.box(.045,1.06,.045,Uo,n*1.42,2.02,6.84,t),e.mesh(new V(.07,.035,.25,8),Ho,n*.2,4.38,3.93,t).rotation.x=Math.PI/2}function rs(e,t){e.box(2.96,2.79,1.88,zo,0,2.845,4.13,t),Jo(e,[[3.15,4.18],[5.1,4.18],[4.91,4.39],[3.34,4.39]],3.03,`#bbc2c4`,t),e.box(2.18,1.73,1.7,zo,0,2.315,5.95,t),e.box(2.23,.08,1.74,`#d1d5d2`,0,3.22,5.93,t),es(e,3.63,5.096,0,t),$o(e,`cc204`,4.29,t,!0);for(let n of[-1,1]){for(let[r,i,a]of[[2.2,`#2c8bc2`,.14],[1.96,`#245784`,.19]])e.box(.033,a,1.88,i,n*1.49,r,4.13,t),e.box(.033,a,1.7,i,n*1.104,r,5.95,t),e.box(2.19,a,.035,i,0,r,6.818,t);for(let r=0;r<5;r++)e.box(.033,.032,.54,Uo,n*1.108,2.48+r*.11,5.56,t);e.box(.046,1.08,.046,Uo,n*1.4,2,6.76,t),e.box(.38,.045,.047,Uo,n*1.24,2.57,6.76,t),e.mesh(new V(.075,.035,.27,8),Ho,n*.21,4.51,3.64,t).rotation.x=Math.PI/2}e.label(`KAI`,.4,Vo,0,2.61,6.823,0,t),e.box(.56,.27,.1,Ho,0,4.11,5.077,t)}function is(e=`cc206`,t=`blue`){return as(Mo(e),t)}function as(e=`cc206`,t=`blue`){if(e===`cc201`)return Ao(t);if(e===`cc206`){let e=_o(t);if(e)return e}let n=new Ca(.78);qo(n);let r=new _;if(r.name=`locomotive-body`,n.root.add(r),Xo(n,1,r),Xo(n,-1,r),e===`cc206`)Qo(n,-3.84,3.84,3.94,!1,r),ts(n,r);else{Qo(n,-6.58,e===`cc203`?3.3:3.2,e===`cc203`?4:4.1,e===`cc204`,r),e===`cc203`?ns(n,r):rs(n,r),n.box(2.89,.31,.16,Ho,0,1.57,-6.8,r);for(let t of Lo[e].frontLower)Yo(n,t,r);for(let t of Lo[e].frontUpper)Yo(n,t,r);for(let t of Lo[e].rearLower)Yo(n,t,r);for(let e of[-1,1])n.box(.044,.96,.044,Uo,e*1.44,1.94,-6.72,r),n.box(2.85,.044,.044,Uo,0,2.44,-6.72,r)}return n.root.name=e,n.root.userData={category:`train`,variant:[`cc206`,`cc203`,`cc204`].indexOf(e),palette:t,locomotiveType:e,modelStyle:`stylized`,referenceSeries:e===`cc204`?`C18MMi series 1`:void 0},no(n.root)}var os=[{id:`car.compact`,label:`Mobil kompak`,kind:`compact`,bodyColor:`#708eaa`,accentColor:`#a9b5b7`},{id:`car.hatchback`,label:`Mobil hatchback`,kind:`hatchback`,bodyColor:`#708eaa`,accentColor:`#a9b5b7`},{id:`motorcycle.city`,label:`Motor kota`,kind:`motorcycle`,bodyColor:`#708eaa`,accentColor:`#a9b5b7`},{id:`truck.box`,label:`Truk boks`,kind:`box`,bodyColor:`#3677d4`,accentColor:`#79a8e7`},{id:`truck.flatbed`,label:`Truk bak terbuka`,kind:`flatbed`,bodyColor:`#3677d4`,accentColor:`#79a8e7`},{id:`truck.van`,label:`Van pengiriman`,kind:`van`,bodyColor:`#3677d4`,accentColor:`#79a8e7`},{id:`truck.tanker`,label:`Mobil tangki BBM`,kind:`tanker`,bodyColor:`#c54135`,accentColor:`#eae7dc`},{id:`truck.container-trailer`,label:`Traktor dan trailer petikemas`,kind:`container-trailer`,bodyColor:`#4f82a1`,accentColor:`#e7e7d8`}],ss=new Set(Object.keys(new r)),cs=new Set([`position`,`normal`,`uv`,`uv1`,`uv2`,`tangent`,`color`]),ls=e=>Array.isArray(e)?`[`+e.map(ls).join(`,`)+`]`:e&&typeof e==`object`?`{`+Object.entries(e).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>JSON.stringify(e)+`:`+ls(t)).join(`,`)+`}`:JSON.stringify(e)??`null`;function us(e){if(e.constructor!==r)return null;let t=e;if(!t.visible||t.transparent||t.opacity!==1||t.alphaTest!==0||t.alphaHash||t.blending!==1||t.stencilWrite||t.wireframe||t.clippingPlanes?.length||Object.keys(t.userData).length||Object.keys(t).some(e=>e!==`_listeners`&&!ss.has(e))||Object.values(t).some(e=>e instanceof Se)||t.onBeforeRender!==Ee.prototype.onBeforeRender||t.onBeforeCompile!==Ee.prototype.onBeforeCompile||t.customProgramCacheKey!==Ee.prototype.customProgramCacheKey||ls(t.defines)!==ls({STANDARD:``}))return null;let n=[];for(let[e,r]of Object.entries(t))if(e!==`_listeners`&&e!==`uuid`&&e!==`version`&&e!==`color`&&e!==`vertexColors`){if(r instanceof q||r instanceof Y||r instanceof z||r instanceof ie)n.push([e,r.toArray()]);else if(r===null||[`number`,`boolean`,`string`].includes(typeof r))n.push([e,r]);else if(Array.isArray(r)&&r.length===0)n.push([e,[]]);else if(typeof r==`object`&&Object.getPrototypeOf(r)===Object.prototype&&Object.values(r).every(e=>[`number`,`boolean`,`string`].includes(typeof e)))n.push([e,r]);else return null}return ls(n.sort(([e],[t])=>e.localeCompare(t)))}function ds(e,t){if(!e.length||e.length!==t.length)return null;let n=us(e[0].material);if(n===null)return null;let r=[];try{for(let i=0;i<e.length;i++){let a=e[i],o=a.geometry,s=t[i];if(Array.isArray(a.material)||us(a.material)!==n||!Number.isFinite(s.determinant())||s.determinant()<=0||Object.keys(o.morphAttributes).length||Object.keys(o.userData).length||o.drawRange.start!==0||o.drawRange.count!==1/0||Object.keys(o.attributes).some(e=>!cs.has(e)))return null;let c=o.getAttribute(`position`),l=o.getAttribute(`normal`),u=o.getAttribute(`color`);if(!c||!l||c.itemSize!==3||l.itemSize!==3||l.count!==c.count||a.material.vertexColors&&(!u||u.itemSize!==3||u.count!==c.count))return null;let d=new Float32Array(c.count*3),f=new Float32Array(c.count*3),p=new Float32Array(c.count*3),m=a.material.color;for(let e=0;e<c.count;e++)d[e*3]=c.getX(e),d[e*3+1]=c.getY(e),d[e*3+2]=c.getZ(e),f[e*3]=l.getX(e),f[e*3+1]=l.getY(e),f[e*3+2]=l.getZ(e),p[e*3]=m.r*(a.material.vertexColors?u.getX(e):1),p[e*3+1]=m.g*(a.material.vertexColors?u.getY(e):1),p[e*3+2]=m.b*(a.material.vertexColors?u.getZ(e):1);let h=new De;r.push(h),h.setAttribute(`position`,new $e(d,3)),h.setAttribute(`normal`,new $e(f,3)),h.setAttribute(`color`,new $e(p,3)),o.index?h.setIndex(o.index.clone()):h.setIndex(Array.from({length:c.count},(e,t)=>t)),h.applyMatrix4(s)}let i=pa(r,!1);if(!i)return null;i.computeBoundingBox(),i.computeBoundingSphere();let a=e[0].material.clone();return a.color.setRGB(1,1,1),a.vertexColors=!0,a.needsUpdate=!0,{geometry:i,material:a}}finally{r.forEach(e=>e.dispose())}}function fs(e,t={}){let n=[];e.traverse(e=>{e instanceof _&&n.push(e)});let r=new Set,i=new Set,a=0;for(let e of n){let n=new Map;for(let r of e.children){if(!(r instanceof J)||r.constructor!==J||t.preserveObjects?.has(r)||r.children.length||!r.visible||Object.keys(r.userData).length||r.name&&!r.name.startsWith(`static-`)&&!r.name.startsWith(`rigid-color-batch-`)||r.onBeforeRender!==C.prototype.onBeforeRender||r.onAfterRender!==C.prototype.onAfterRender)continue;let e=r;if(Array.isArray(e.material)||t.preserveMaterials?.has(e.material)||e.customDepthMaterial||e.customDistanceMaterial||e.morphTargetInfluences||e.onBeforeShadow!==J.prototype.onBeforeShadow||e.onAfterShadow!==J.prototype.onAfterShadow)continue;let i=us(e.material);if(i===null)continue;let a=ls([i,e.castShadow,e.receiveShadow,e.layers.mask,e.renderOrder,e.frustumCulled]),o=n.get(a)??[];o.push(e),n.set(a,o)}for(let t of n.values()){if(t.length<2)continue;let n=ds(t,t.map(e=>(e.matrixAutoUpdate&&e.updateMatrix(),e.matrix.clone())));if(!n)continue;let o=t[0],s=new J(n.geometry,n.material);s.name=`rigid-color-batch-${a++}`,s.castShadow=o.castShadow,s.receiveShadow=o.receiveShadow,s.layers.mask=o.layers.mask,s.renderOrder=o.renderOrder,s.frustumCulled=o.frustumCulled,s.matrixAutoUpdate=!1,e.add(s);for(let e of t)r.add(e.geometry),i.add(e.material),e.removeFromParent()}}e.traverse(e=>{if(e instanceof J||e instanceof et||e instanceof pe){r.delete(e.geometry);for(let t of Array.isArray(e.material)?e.material:[e.material])i.delete(t)}}),r.forEach(e=>e.dispose()),i.forEach(e=>e.dispose())}var ps=class{roughness;root=new _;materials=new Map;constructor(e=.67){this.roughness=e}mat=(e,t=`body`)=>{let n=t+`:`+e,i=this.materials.get(n);return i||(i=new r({color:e,roughness:t===`glass`?.28:t===`metal`?.48:this.roughness,metalness:t===`glass`?.15:t===`metal`?.45:0,flatShading:!0}),t===`headlamp`&&(i.emissive.set(e),i.userData.nightLight=!0),this.materials.set(n,i)),i};mesh=(e,t,n,r,i,a=this.root,o=`body`)=>{let s=new J(e,this.mat(t,o));return s.position.set(n,r,i),s.castShadow=o===`body`,s.receiveShadow=o===`body`,a.add(s),s};box=(e,t,n,r,i,a,o,s=this.root,c=`body`)=>this.mesh(new We(e,t,n),r,i,a,o,s,c);cylinder=(e,t,n,r,i,a,o=this.root,s=`body`)=>this.mesh(new V(e,e,t,10),n,r,i,a,o,s);label=(e,t,n,r,i,a,o=0,s=this.root)=>{let c=new ba(e,{font:tc,size:t,depth:.012,curveSegments:2,bevelEnabled:!1});c.computeBoundingBox(),c.translate(-(c.boundingBox.max.x+c.boundingBox.min.x)/2,0,0);let l=this.mesh(c,n,r,i,a,s,`trim`);return l.rotation.y=o,l}};function ms(e,t,n,r,i){let a=new _;a.name=`road-wheel`,a.position.set(t,r,n),a.userData.radius=r,i.add(a);let o=e.mesh(new V(r,r,.15,12),`#363d3e`,0,0,0,a,`trim`);o.rotation.z=Math.PI/2;let s=e.mesh(new V(r*.65,r*.65,.17,12),`#b4b8af`,0,0,0,a,`metal`);s.rotation.z=Math.PI/2;for(let t=0;t<3;t++)e.box(.18,r*1.02,.027,`#6c7676`,0,0,0,a,`metal`).rotation.x=t*Math.PI/3;return a}function hs(e){let t=[],n=(e,n,r,i)=>t.push(...e,...n,...r,...e,...r,...i),r=([e,t,n,r,i=t])=>[[-t,n,e],[t,n,e],[i,r,e],[-i,r,e]];for(let t=1;t<e.length;t++){let i=r(e[t-1]),a=r(e[t]);for(let e=0;e<4;e++)n(i[e],i[(e+1)%4],a[(e+1)%4],a[e])}let i=r(e[0]),a=r(e[e.length-1]);n(i[3],i[2],i[1],i[0]),n(a[0],a[1],a[2],a[3]);let o=new De;return o.setAttribute(`position`,new dt(t,3)),o.computeVertexNormals(),o}function gs(e){let t=new De;return t.setAttribute(`position`,new dt(e.flatMap(e=>[...e]),3)),t.setIndex([0,1,2,0,2,3]),t.computeVertexNormals(),t}function _s(e){let t=new Ye,n=e/2-.06;t.moveTo(-n,.63),t.lineTo(n,.63),t.lineTo(n,.38);for(let n of[e*.31,-e*.31]){t.lineTo(n+.31,.38);for(let e=0;e<=8;e++){let r=e*Math.PI/8;t.lineTo(n+Math.cos(r)*.31,.3+Math.sin(r)*.31)}t.lineTo(n-.31,.38)}return t.lineTo(-n,.38),t.closePath(),new D(t,{depth:.12,bevelEnabled:!1,curveSegments:1})}function vs(e){let t=new ps,n=t.root;n.name=`road-`+e.id;let i=e.kind===`hatchback`?3.7:3.25,a=.27,o=e.bodyColor,s=e.accentColor,c=`#526e78`,l=`#354346`,u=`#b9c4be`,d=e=>(e.castShadow=!1,e);t.box(.99,.23,i-.16,l,0,.48,0,n,`trim`),t.mesh(hs([[-i/2,.6,.63,.73],[-i*.34,.675,.63,.83],[i*.27,.675,.63,.86],[i/2,.59,.63,.72]]),o,0,0,0,n,`body`);for(let e of[-1,1]){let r=t.mesh(_s(i),o,e*.675,0,0,n,`body`);r.rotation.y=-e*Math.PI/2,d(t.box(.033,.06,i*.47,s,e*.681,.41,0,n,`trim`))}let f=-i*.31,p=-i*(e.kind===`hatchback`?.24:.18),m=i*.245,h=i*.11;t.mesh(hs([[f,.595,.83,.88],[p,.595,.83,1.425,.5],[h,.595,.83,1.445,.5],[m,.595,.83,.89]]),o,0,0,0,n,`body`);let g=e=>m-(m-h)*(e-.89)/.555,_=e=>f+(p-f)*(e-.88)/.545;d(t.mesh(gs([[-.535,.96,g(.96)],[.535,.96,g(.96)],[.458,1.37,g(1.37)],[-.458,1.37,g(1.37)]]),c,0,0,.008,n,`glass`)),d(t.mesh(gs([[.535,.96,_(.96)],[-.535,.96,_(.96)],[-.458,1.355,_(1.355)],[.458,1.355,_(1.355)]]),c,0,0,-.008,n,`glass`));for(let e of[-1,1]){let r=(r,i,a,o)=>{let s=[[e*.58,.955,r],[e*.58,.955,i],[e*.514,1.36,o],[e*.514,1.36,a]];e>0&&s.reverse(),d(t.mesh(gs(s),c,e*.008,0,0,n,`glass`))};r(f+.12,-.175,p+.035,-.175),r(-.085,m-.115,-.085,h-.025);let a=[[e*.588,.955,-.16],[e*.588,.955,-.1],[e*.522,1.36,-.1],[e*.522,1.36,-.16]];e>0&&a.reverse(),d(t.mesh(gs(a),l,0,0,0,n,`trim`));for(let r of[f+.06,-.13,m-.045])d(t.box(.012,.32,.012,s,e*.682,.71,r,n,`trim`));d(t.box(.014,.012,m-f,s,e*.682,.552,(m+f)/2,n,`trim`));for(let r of[-.30000000000000004,m-.28])d(t.box(.03,.032,.15,u,e*.691,.81,r,n,`metal`));d(t.box(.16,.04,.065,l,e*.665,.98,m-.15,n,`trim`)),d(t.box(.13,.12,.2,o,e*.755,1.015,m-.14,n,`body`)),d(t.box(.012,.079,.15,c,e*.819,1.02,m-.14,n,`glass`)),d(t.box(.015,.012,i*.19,s,e*.48,.805,i*.37,n,`trim`)).rotation.x=Math.atan(.14/(i*.23)),d(t.box(.3,.12,.035,`#fff1c6`,e*.4,.71,i/2+.024,n,`headlamp`)),d(t.box(.05,.07,.038,`#edb46a`,e*.565,.69,i/2+.025,n,`trim`));let _=d(t.box(.27,.012,.018,l,e*.24,1.025,g(1.025)+.018,n,`trim`));_.rotation.z=-e*.1}d(t.box(1.23,.09,.105,s,0,.46,i/2-.012,n,`trim`)),d(t.box(.56,.115,.045,l,0,.65,i/2+.026,n,`trim`));for(let e of[.62,.66,.7])d(t.box(.51,.012,.011,u,0,e,i/2+.053,n,`metal`));for(let e of[-i/2-.03,i/2+.071])d(t.box(.33,.1,.025,l,0,.48,e,n,`trim`)),d(t.box(.27,.022,.006,`#c4c8bd`,0,.48,e+Math.sign(e)*.015,n,`trim`));d(t.box(1.23,.09,.09,s,0,.45,-i/2,n,`trim`));let v=new r({color:`#af5241`,emissive:`#c74028`,emissiveIntensity:0,roughness:.67});for(let e of[-1,1]){let r=d(t.box(.27,.14,.035,`#af5241`,e*.43,.68,-i/2-.022,n,`trim`));r.material=v,d(t.box(.08,.04,.036,`#e3dfc7`,e*.43,.65,-i/2-.023,n,`trim`))}let y=[];for(let e of[-1,1])for(let r of[-i*.31,i*.31])y.push(ms(t,e*.66,r,a,n));return fs(n,{preserveMaterials:new Set([v])}),{root:n,wheels:y,radius:a,length:i,brake:v}}function ys(e){let t=new ps,n=t.root;n.name=`road-`+e.id;let i=.24,a=e=>(e.castShadow=!1,e),o=(e,r,i,o,s=`metal`)=>{let c=r.clone().sub(e),l=a(t.cylinder(i,c.length(),o,0,0,0,n,s));return l.position.copy(e).add(r).multiplyScalar(.5),l.quaternion.setFromUnitVectors(new z(0,1,0),c.normalize()),l},s=[-.56,.56].map(e=>ms(t,0,e,i,n));t.box(.29,.15,.65,`#3f4c4e`,0,.37,-.08,n,`trim`);for(let e of[-1,1]){o(new z(e*.12,.25,-.56),new z(e*.12,.46,.08),.027,`#596566`),o(new z(e*.12,.46,.08),new z(e*.12,.76,.43),.027,`#596566`),o(new z(e*.12,.76,.43),new z(e*.12,.47,-.3),.025,`#596566`),o(new z(e*.13,.25,.56),new z(e*.13,.85,.46),.027,`#b8c1b8`),o(new z(e*.12,.31,-.49),new z(e*.12,.65,-.25),.034,`#a8b6b1`);let r=a(t.cylinder(.085,.03,`#9aaba8`,e*.167,.43,-.07,n,`metal`));r.rotation.z=Math.PI/2;for(let r of[.44,.48,.52])a(t.box(.04,.015,.2,`#768a87`,e*.153,r,.04,n,`metal`))}t.mesh(new nt(.25,8,5),e.bodyColor,0,.65,.12,n,`body`).scale.set(.77,.63,1.2),a(t.cylinder(.047,.018,`#b9c6bd`,0,.808,.12,n,`metal`)),t.box(.34,.11,.69,`#414b4d`,0,.73,-.22,n,`trim`),a(t.box(.31,.11,.39,e.bodyColor,0,.64,-.5,n,`body`)).rotation.x=-.13,a(t.box(.3,.09,.36,e.bodyColor,0,.52,.56,n,`body`)).rotation.x=-.12,t.box(.34,.23,.16,e.bodyColor,0,.75,.67,n,`body`),a(t.box(.25,.12,.041,`#fff1ce`,0,.77,.76,n,`headlamp`)),a(t.box(.57,.03,.065,`#a8b8b3`,0,.91,.49,n,`metal`));for(let r of[-1,1])a(t.box(.1,.045,.07,`#3e494d`,r*.255,.91,.49,n,`trim`)),o(new z(r*.26,.93,.49),new z(r*.28,1.08,.52),.01,`#8faaa9`),a(t.box(.1,.065,.03,`#526e78`,r*.28,1.09,.54,n,`glass`)),a(t.box(.05,.06,.025,`#e9af59`,r*.2,.7,.72,n,`trim`)),t.box(.11,.25,.16,`#526379`,r*.25,.6,-.04,n,`trim`),t.box(.11,.31,.13,`#526379`,r*.25,.43,-.2,n,`trim`).rotation.x=-.4,a(t.box(.15,.085,.23,`#465252`,r*.25,.27,-.15,n,`trim`)),t.box(.11,.4,.12,e.riderColor,r*.23,1.04,.28,n,`body`).rotation.x=-.85,a(t.box(.065,.12,.065,`#d3ae89`,r*.27,.955,.48,n,`trim`));t.box(.44,.46,.29,e.riderColor,0,1.035,-.1,n,`body`).rotation.x=.16,a(t.box(.065,.2,.016,e.accentColor,0,1.055,-.263,n,`trim`)),a(t.mesh(new w(.16,0),`#d8b48d`,0,1.36,.02,n,`trim`));let c=t.mesh(new nt(.21,10,7),e.helmetColor,0,1.52,.01,n,`body`);c.scale.y=.91,a(t.box(.29,.11,.085,`#405d68`,0,1.47,.19,n,`glass`)),a(t.box(.28,.028,.085,e.helmetColor,0,1.535,.19,n,`body`));let l=a(t.cylinder(.062,.66,`#aab4ad`,-.25,.37,-.13,n,`metal`));l.rotation.x=Math.PI/2;let u=a(t.cylinder(.045,.018,`#35494b`,-.25,.37,-.468,n,`trim`));u.rotation.x=Math.PI/2,a(t.box(.18,.14,.025,`#35494b`,0,.43,-.73,n,`trim`)),a(t.box(.13,.024,.006,`#d4d7c9`,0,.43,-.747,n,`trim`));let d=new r({color:`#bd5441`,emissive:`#c74028`,emissiveIntensity:0,roughness:.67}),f=a(t.box(.22,.08,.045,`#bd5441`,0,.62,-.75,n,`trim`));return f.material=d,fs(n,{preserveMaterials:new Set([d])}),{root:n,wheels:s,radius:i,length:1.72,brake:d}}function bs(e){let t=new ps(.62),{root:n,box:i,label:a}=t;n.name=`pertamina-fuel-tanker-truck`;let o=e.bodyColor,s=new Map,c=(e,r,i,a,o,c,l=n)=>{let u=e+`:`+r,d=s.get(u);return d||(d=new V(e,e,r,12),s.set(u,d)),t.mesh(d,i,a,o,c,l)},l=.42;i(2.05,.23,7.8,`#4a5859`,0,.77,-.07),i(2.3,.25,5.6,`#d3d9d6`,0,1.06,-1.08);let u=c(1.06,5.35,`#f0f1e8`,0,2.13,-1.09);u.rotation.x=Math.PI/2;for(let e of[-3.765,1.585]){let n=t.mesh(new nt(1.055,12,8),`#d5dcd8`,0,2.13,e);n.scale.z=.16}for(let e of[-1,1]){i(.035,.24,5.35,`#c43f36`,e*1.062,2.12,-1.09),a(`PERTAMINA`,.26,`#c43931`,e*1.075,2.36,-1.2,e*Math.PI/2),a(`BBM  30 KL`,.15,`#506761`,e*1.08,1.72,-1.2,e*Math.PI/2);for(let[t,n]of[`#ca4239`,`#3c70a5`,`#63a16a`].entries()){let r=i(.045,.24,.33,n,e*1.085,2.8,-.9+t*.33);r.rotation.x=-.28}i(.06,.13,5.5,`#899d9a`,e*.88,1.17,-1.12),c(.045,1.38,`#647a78`,e*.78,3.32,-1.1).rotation.x=Math.PI/2;for(let t of[-1.77,-.43])c(.04,.38,`#647a78`,e*.78,3.12,t)}i(1.6,.09,1.6,`#879b95`,0,3.08,-1.1),c(.31,.14,`#5d7270`,0,3.21,-1.1),c(.2,.09,`#c4473d`,0,3.325,-1.1);for(let e of[-.4,.4])c(.045,2.62,`#6a807d`,e,1.93,-3.95);for(let e=0;e<8;e++)i(.88,.065,.075,`#82968f`,0,.76+e*.31,-3.95);i(2.4,.12,.42,`#a8b5ad`,0,.57,-3.92);let d=c(.34,.18,`#404b49`,-1.17,1.3,-2.4);d.rotation.z=Math.PI/2,c(.075,.58,`#b5443b`,-1.18,1.17,-.2),i(.17,.075,.12,`#65706b`,-1.18,1.52,-.2),c(.12,.35,`#5f7773`,-1.15,1.3,-1.14).rotation.z=Math.PI/2,i(.08,.35,.28,`#ba453a`,-1.35,1.3,-1.14),i(2.24,1.95,1.97,o,0,1.94,2.62),i(2.28,.14,2.01,e.accentColor,0,2.98,2.62),i(2.25,.27,2.04,`#eeeae1`,0,1.42,2.62),i(1.96,.77,.045,`#436574`,0,2.35,3.625,n,`glass`),i(.1,.81,.06,o,0,2.35,3.66),i(1.18,.36,.055,`#4b5c58`,0,1.74,3.65);for(let e of[-1,1])i(.038,.76,1.18,`#436574`,e*1.135,2.35,2.7,n,`glass`),i(.075,.055,.36,`#d0dad2`,e*1.17,1.89,2.53),i(.3,.14,.09,`#fff1c6`,e*.77,1.25,3.67,n,`headlamp`),i(.17,.24,.25,`#485d59`,e*1.36,2.48,3.19),i(.26,.16,.83,`#899790`,e*1.15,.93,2.43);for(let e of[-1,1]){let t=i(.032,.4,.025,`#2f4247`,e*.47,2.17,3.658);t.rotation.z=e*.22,i(.025,.93,.025,`#8e332c`,e*1.142,1.81,1.71),i(.025,.025,1.49,`#8e332c`,e*1.142,1.355,2.45),i(.04,.09,.22,`#e5aa58`,e*1.2,1.1,-3.77),i(.04,.09,.22,`#e5aa58`,e*1.2,1.1,-.28)}i(2.35,.23,.22,`#b4c0b6`,0,.9,3.64),a(`BBM`,.2,`#f6ead2`,0,2.88,3.66);let f=new r({color:`#b94835`,emissive:`#bd3026`,emissiveIntensity:0});for(let e of[-1,1]){let t=i(.32,.15,.08,`#b94835`,e*.8,.89,-4.07);t.material=f}let p=[];for(let e of[-1,1])for(let t of[-2.93,-1.92,2.83]){let r=new _;r.name=`road-wheel`,r.position.set(e*1.08,l,t),n.add(r),c(l,.3,`#36413f`,0,0,0,r).rotation.z=Math.PI/2,c(l*.6,.32,`#b4c0b8`,0,0,0,r).rotation.z=Math.PI/2,i(.335,.08,.49,`#677c78`,0,0,0,r);for(let t=0;t<6;t++){let n=t*Math.PI/3;c(.031,.035,`#6d7e7a`,e*.163,Math.cos(n)*.16,Math.sin(n)*.16,r).rotation.z=Math.PI/2}p.push(r),i(.36,.18,1.04,`#c1c9c2`,e*1.08,.91,t)}return fs(n,{preserveMaterials:new Set([f])}),{root:n,wheels:p,radius:l,length:8.15,brake:f,loadingPort:new z(-1.36,1.3,-1.14)}}function xs(e){e.userData.staticWorldDynamic=!0}function Ss(e){return Array.isArray(e)?`[`+e.map(Ss).join(`,`)+`]`:e&&typeof e==`object`?`{`+Object.entries(e).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>JSON.stringify(e)+`:`+Ss(t)).join(`,`)+`}`:JSON.stringify(e)??`null`}function Cs(e){if(!(e instanceof r)||e.transparent||e.opacity<1||e.clippingPlanes?.length||Object.values(e).some(e=>e instanceof Se)||e.onBeforeRender!==Ee.prototype.onBeforeRender||e.onBeforeCompile!==Ee.prototype.onBeforeCompile||e.customProgramCacheKey!==Ee.prototype.customProgramCacheKey)return null;let{uuid:t,...n}=e.toJSON();return Ss([n,e.color.toArray(),e.emissive.toArray()])}function ws(t,n=32){t.updateMatrixWorld(!0);let r=t.matrixWorld.clone().invert(),i=t.matrixWorld.determinant(),a=new Map,o=new Map,s=new Map,l=new Map,u=new Map,d=new Set,f=new Set,p=new xe,m=new z,h=new c,g=t=>{if(t.visible&&!t.userData.staticWorldDynamic){if(t instanceof J&&!(t instanceof R)&&!(t instanceof e)&&!Array.isArray(t.material)&&t.children.length===0&&(!t.name||t.name.startsWith(`static-`)||t.name.startsWith(`rigid-color-batch-`)||t.userData.staticWorldBatch===!0)&&!t.customDepthMaterial&&!t.customDistanceMaterial&&t.matrixWorld.determinant()*i>0&&t.onBeforeRender===C.prototype.onBeforeRender&&t.onAfterRender===C.prototype.onAfterRender&&t.onBeforeShadow===J.prototype.onBeforeShadow&&t.onAfterShadow===J.prototype.onAfterShadow&&!Object.keys(t.geometry.morphAttributes).length&&t.geometry.drawRange.start===0&&t.geometry.drawRange.count===1/0){let e=s.get(t.material);e===void 0&&(e=us(t.material),s.set(t.material,e));let i=e!==null&&Object.keys(t.userData).every(e=>e===`staticWorldBatch`),c=i?e:o.get(t.material);if(c===void 0&&(c=Cs(t.material),o.set(t.material,c)),c!==null){let e=(i?`color:`:`material:`)+c;if(!i){let e=l.get(c);e&&e!==t.material?(f.add(t.material),t.material=e):l.set(c,t.material)}u.has(e)||u.set(e,u.size),h.multiplyMatrices(r,t.matrixWorld),t.geometry.boundingBox||t.geometry.computeBoundingBox(),p.copy(t.geometry.boundingBox).applyMatrix4(h).getCenter(m);let o=t.geometry,s=Object.entries(o.attributes).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>[e,t.itemSize,t.normalized,t.array.constructor.name]),d=Ss([u.get(e),i?null:s,t.userData,t.castShadow,t.receiveShadow,t.renderOrder,t.layers.mask,t.frustumCulled,Math.floor(m.x/n),Math.floor(m.z/n)]),g=a.get(d)??{material:t.material,meshes:[],colorBatch:i};g.meshes.push(t),a.set(d,g)}}for(let e of t.children)g(e)}};g(t);let _=0;for(let{material:e,meshes:n,colorBatch:i}of a.values()){if(n.length<2)continue;let a,o=e;if(i){let e=ds(n,n.map(e=>new c().multiplyMatrices(r,e.matrixWorld)));if(!e)continue;a=e.geometry,o=e.material}else{let e=n.map(e=>{let t=e.geometry.index?e.geometry.toNonIndexed():e.geometry.clone();return t.clearGroups(),t.applyMatrix4(new c().multiplyMatrices(r,e.matrixWorld))});a=pa(e),e.forEach(e=>e.dispose())}if(!a)continue;a.computeBoundingBox(),a.computeBoundingSphere();let s=n[0],l=new J(a,o);l.name=`static-world-cell-`+_++,l.castShadow=s.castShadow,l.receiveShadow=s.receiveShadow,l.layers.mask=s.layers.mask,l.renderOrder=s.renderOrder,l.frustumCulled=s.frustumCulled,l.userData={...s.userData},l.updateMatrix(),l.matrixAutoUpdate=!1,t.add(l);for(let e of n)e.removeFromParent(),d.add(e.geometry),f.add(e.material)}t.traverse(e=>{if(e instanceof J||e instanceof et||e instanceof pe){d.delete(e.geometry);for(let t of Array.isArray(e.material)?e.material:[e.material])f.delete(t)}}),d.forEach(e=>e.dispose()),f.forEach(e=>e.dispose())}function Ts(e){let t=new Set;return e.traverse(e=>{if(e instanceof J)for(let n of Array.isArray(e.material)?e.material:[e.material])n instanceof r&&n.emissive.getHex()!==0&&t.add(n)}),fs(e,{preserveMaterials:t}),e}var Es=.7,Ds=Object.freeze({hitchOffset:2.3*Es,trailerAxleOffset:10.2*Es,tractorFront:3.6*Es,tractorRear:2.8*Es,trailerRear:13.35*Es,deckY:1.22*Es,width:2.7*Es});function Os(e){let t=e.palette,n=new _;n.name=`port-container-trailer-truck`,n.userData.category=`truck`,n.userData.palette=t,n.userData.articulatedTrailer=!0,xs(n);let r=new _,i=new _,a=new _;r.name=`port-trailer-tractor`,i.name=`port-trailer-chassis`,a.name=`port-trailer-cargo-mount`,r.scale.setScalar(Es),i.scale.setScalar(Es),n.add(r,i),a.position.set(0,1.22,-6.3),xs(a),i.add(a);let o=e.bodyColor,s=`#384c51`,c=`#87999c`,l=`#436574`,{box:u,cylinder:d,label:f}=new ps(.72),p=[],m=[],h=(e,t,n,r,i,a)=>{let o=new _;o.name=r,o.position.set(t,.49,n),o.userData.radius=.49,e.add(o);let l=d(.49,i?.43:.27,`#303b3e`,0,0,0,o);l.rotation.z=Math.PI/2;let u=d(.27,i?.45:.29,c,0,0,0,o);u.rotation.z=Math.PI/2;let f=d(.1,i?.47:.31,s,0,0,0,o);f.rotation.z=Math.PI/2;for(let e=0;e<6;e++){let n=e*Math.PI/3,r=d(.03,.03,`#c2c9c4`,Math.sign(t)*(i?.24:.16),Math.cos(n)*.175,Math.sin(n)*.175,o);r.rotation.z=Math.PI/2}a.push(o)};u(1.9,.23,6.25,s,0,.88,.325,r),u(2.36,2.1,2.58,o,0,2.01,2.22,r),u(2.4,.16,2.64,e.accentColor,0,3.13,2.22,r),u(2.38,.11,2.64,o,0,2.92,2.22,r),u(2.1,.83,.045,l,0,2.56,3.535,r,`glass`),u(.07,.86,.075,o,0,2.55,3.565,r),u(2.02,.08,.095,`#ccd4ca`,0,2.08,3.55,r),u(1.55,.5,.09,`#263b40`,0,1.68,3.545,r);for(let e=0;e<4;e++)u(1.48,.035,.11,c,0,1.48+e*.12,3.57,r);u(2.46,.24,.18,c,0,1.035,3.51,r),f(`RIVERSIDE`,.135,`#efeada`,0,2.99,3.57,0,r),u(.57,.14,.035,`#e8e5d6`,0,1.04,3.61,r);for(let e of[-1,1]){u(.04,.8,1.79,l,e*1.195,2.52,2.49,r,`glass`),u(.04,.95,.07,o,e*1.224,2.47,1.9,r),u(.07,.055,.28,`#d5ddd2`,e*1.23,1.95,1.85,r),u(.045,.51,.07,s,e*1.3,2.62,3.18,r),u(.17,.38,.27,s,e*1.43,2.62,3.18,r),u(.035,.3,.2,`#90a3a6`,e*1.525,2.63,3.18,r),u(.28,.09,1.01,c,e*1.18,1.01,1.87,r),u(.3,.09,.86,s,e*1.18,.84,1.87,r),u(.38,.24,.07,`#fff1ce`,e*.94,1.23,3.58,r,`headlamp`),u(.1,.13,.08,`#d69a4e`,e*1.17,1.24,3.58,r),u(.55,.62,1.62,c,e*.74,1.17,-.1,r),u(.52,.16,2.14,s,e*1.03,1.1,-1.8,r);for(let[t,n]of[2.61,-1.43,-2.48].entries())h(r,e*1.03,n,`port-tractor-wheel-${e}-${t}`,t>0,p)}for(let e of[-1,1]){let t=u(.03,.43,.025,s,e*.48,2.37,3.562,r);t.rotation.z=e*.23,u(.025,.81,.025,s,e*1.206,1.61,1.01,r),u(.025,.025,1.37,s,e*1.206,1.205,1.68,r);for(let t of[-3.4,-6.3,-8.1])u(.035,.08,.17,`#d3a151`,e*1.345,1.12,t,i)}d(.51,.09,`#273b40`,0,1.13,-2.3,r),u(1.04,.035,.79,s,0,1.18,-2.3,r);for(let e of[-1,1]){u(.18,.3,14.1,s,e*.85,.98,-6.3,i),u(.09,.08,14.1,c,e*1.3,1.15,-6.3,i),u(.09,.18,4.4,`#d0d4c9`,e*1.27,.72,-5.75,i),u(.13,.83,.17,c,e*.83,.54,-2.43,i),u(.37,.07,.4,s,e*.83,.105,-2.43,i);for(let t of[.4,-13])u(.24,.06,.25,`#c5a14d`,e*1.19,1.19,t,i);u(.44,.12,3.8,s,e*1.07,1.07,-10.2,i),u(.45,.51,.07,`#37474c`,e*1.06,.43,-12.02,i);for(let[t,n]of[-9.1,-10.2,-11.3].entries())h(i,e*1.065,n,`port-trailer-wheel-${e}-${t}`,!0,m);u(.32,.15,.05,`#a6473e`,e*.98,.89,-13.37,i),u(.08,.11,.06,`#d3a151`,e*1.33,1.04,-13.3,i)}for(let e of[.4,-2.4,-6.3,-9.1,-13])u(2.7,.16,.22,c,0,1.09,e,i);return u(2.63,.15,.14,`#c2c8be`,0,.5,-13.35,i),u(.69,.12,.05,`#ece6d6`,0,.85,-13.38,i),Ts(n),{root:n,tractor:r,trailer:i,cargoMount:a,tractorWheels:p,trailerWheels:m,spec:Ds}}function ks(e){let t=e.root.clone(!0),n=t.getObjectByName(`port-trailer-tractor`),r=t.getObjectByName(`port-trailer-chassis`),i=t.getObjectByName(`port-trailer-cargo-mount`),a=[],o=[];return t.traverse(e=>{e.name.startsWith(`port-tractor-wheel-`)&&a.push(e),e.name.startsWith(`port-trailer-wheel-`)&&o.push(e)}),{root:t,tractor:n,trailer:r,cargoMount:i,tractorWheels:a,trailerWheels:o,spec:e.spec}}function As(e){let t=new ps(.78),{root:n,box:i}=t,a=e.kind===`van`,o=e.kind===`flatbed`,s=a?1.78:2.1,c=a?4.15:o?5.5:6.1,l=.44,u=c/2-.84,d=e.bodyColor,f=e.accentColor;n.name=`delivery-`+e.kind,i(s-.1,.3,c,`#3e4a58`,0,.57,0),i(s,1.25,1.72,d,0,1.29,u),i(s-.08,.94,1.46,d,0,2.08,u-.08),i(s-.32,.65,.035,`#47657a`,0,2.08,u+.67,n,`glass`),i(.052,.72,.06,f,0,2.09,u+.72,n,`trim`);for(let e of[-1,1])i(.035,.62,.99,`#47657a`,e*(s/2-.022),2.09,u-.01,n,`glass`),i(.06,.05,.24,`#cad6de`,e*(s/2+.02),1.62,u-.41,n,`metal`),i(.13,.08,.38,`#4c5760`,e*(s/2+.09),1.91,u+.3,n,`trim`),i(.11,.29,.15,`#3b4b57`,e*(s/2+.19),1.99,u+.43,n,`trim`),i(.025,.2,.09,`#71858c`,e*(s/2+.241),1.99,u+.43,n,`glass`),i(.36,.17,.08,`#fff0cf`,e*.68,1.32,c/2+.03,n,`headlamp`),i(.42,.025,.023,`#293d47`,e*.35,1.9,u+.707,n,`trim`).rotation.z=e*.12,i(.014,.87,.02,`#536775`,e*(s/2+.008),1.57,u-.58,n,`trim`),i(.018,.022,1.11,`#536775`,e*(s/2+.008),1.17,u-.04,n,`trim`),i(.19,.08,.51,`#a7b3b8`,e*(s/2+.04),.83,u-.2,n,`metal`);i(s+.1,.18,.14,`#bfcad5`,0,.85,c/2+.08,n,`metal`),i(s-.44,.29,.04,`#364855`,0,1,c/2+.03,n,`trim`);for(let e=0;e<3;e++)i(s-.58,.025,.025,`#8495a1`,0,.9+e*.08,c/2+.063,n,`metal`);i(.42,.13,.035,`#e9e7d8`,0,.86,c/2+.12,n,`trim`);let p=c-1.94;if(o){i(s+.08,.16,p,`#aab9c2`,0,.86,-1,n,`metal`);for(let e of[-1,1]){i(.09,.55,p,d,e*s/2,1.16,-1);for(let t=0;t<4;t++)i(.13,.61,.06,f,e*(s/2+.04),1.14,-p/2-.9+t*(p-.3)/3,n,`trim`)}}else{i(s+(a?0:.1),a?1.81:2.28,p,`#f0f2ed`,0,a?1.6:1.91,-.94);for(let e of[-1,1]){i(.025,.42,p-.08,d,e*(s/2+(a?.01:.06)),1.21,-.94),i(.036,.29,.29,f,e*(s/2+(a?.03:.08)),2.05,-.93,n,`trim`).rotation.x=Math.PI/4,i(.04,.11,1.1,f,e*(s/2+(a?.03:.08)),1.84,-1.02,n,`trim`);for(let t=0;t<3;t++)i(.025,.055,.4,`#9badb5`,e*(s/2+(a?.035:.085)),1.67+t*.26,-1.74,n,`trim`)}i(.06,1.68,.065,`#acb8bf`,0,1.85,-c/2-.011,n,`metal`);for(let e of[-.5,.5])i(.04,1.4,.065,`#acb8bf`,e,1.72,-c/2-.022,n,`metal`)}let m=new r({color:`#b94835`,emissive:`#bd3026`,emissiveIntensity:0});for(let e of[-1,1])i(.24,.12,.05,`#b94835`,e*.7,.71,-c/2+.015,n,`trim`).material=m;let h=[];for(let e of a?[u,-1.2]:[u,-1.65,...o?[]:[-2.35]])for(let r of[-1,1]){let i=new _;i.name=`road-wheel`,i.position.set(r*(s/2+.035),l,e),i.userData.radius=l,n.add(i);for(let[e,n,a,o]of[[.44,.28,`#343d46`,0],[.24,.3,`#c3cdd3`,r*.025],[.1,.31,`#768b9a`,r*.04]])t.mesh(new V(e,e,n,e===.44?16:e===.24?12:8),a,o,0,0,i,e===.44?`trim`:`metal`).rotation.z=Math.PI/2;h.push(i)}return fs(n,{preserveMaterials:new Set([m])}),{root:n,wheels:h,radius:l,length:c,brake:m}}var js=new Map(os.map(e=>[e.id,e]));if(js.size!==os.length)throw Error(`Duplicate vehicle preset`);var Ms=(e,t)=>{let n=js.get(e);if(!n)throw Error(`Unknown vehicle preset: `+e);let r=t.palette??`blue`;if(![`blue`,`sage`,`clay`].includes(r))throw Error(`Invalid vehicle palette`);let i=[`box`,`flatbed`,`van`].includes(n.kind),a=n.kind===`container-trailer`,o=r===`sage`?i?`#529084`:a?`#56877c`:`#86a79b`:r===`clay`?i?`#bc7156`:a?`#aa6755`:`#c5ae83`:n.bodyColor,s={...n,palette:r,bodyColor:t.bodyColor??(n.kind===`tanker`?n.bodyColor:o),accentColor:t.accentColor??(i?r===`sage`?`#95bdb0`:r===`clay`?`#d6a088`:n.accentColor:n.accentColor),riderColor:t.riderColor??`#7c9380`,helmetColor:t.helmetColor??`#596d75`};for(let e of[s.bodyColor,s.accentColor,s.riderColor,s.helmetColor])if(!/^#[0-9a-f]{6}$/i.test(e))throw Error(`Vehicle colors must use six-digit hex notation`);return s};function Ns(e,t={}){let n=Ms(e,t),r=n.kind===`container-trailer`?Os(n):n.kind===`tanker`?bs(n):n.kind===`motorcycle`?ys(n):[`compact`,`hatchback`].includes(n.kind)?vs(n):As(n);return r.root.userData.vehiclePresetId=e,r.root.userData.vehicle={kind:n.kind,bodyColor:n.bodyColor,accentColor:n.accentColor},r}var Ps={bodyLength:15,bogieZ:5.2,couplerZ:7.54,detailLength:16.42},Fs={colors:{bodyWhite:`#c5c5c5`,orange:`#fb8500`,roof:`#616161`,frame:`#3b3534`,steel:`#8b9398`,glass:`#34414b`,blueKai:`#2354bc`},runningGear:{wheelX:$.centerHalf,wagonRadius:.43,couplerY:.83,drawbarToJoint:.56},wagon:{...Ps,containerLength:13.4},coach:{...Ps,width:2.66,roofShoulder:3.1,roofTop:3.48,acTop:3.6,floorY:1.18}},Is={author:`Rico Cilliers; Rob Tuytel (guidance)`,source:`https://polyhaven.com/a/jacaranda_tree`,license:`CC0-1.0`,licenseUrl:`https://creativecommons.org/publicdomain/zero/1.0/`},Ls=[{height:4.15,width:1,label:`Jacaranda`,description:`Jacaranda CC0 dengan cabang alami dan daun bertekstur.`},{height:3.9,width:.87,label:`Jacaranda ramping`,description:`Jacaranda CC0 dengan tajuk lebih ramping untuk area sempit.`},{height:4.1,width:1.04,label:`Jacaranda lebar`,description:`Jacaranda CC0 dengan tajuk melebar sebagai pohon peneduh.`}],Rs,zs,Bs=()=>Rs!==void 0;function Vs(e){if(Rs)throw Error(`Template Jacaranda sudah dimuat.`);e.updateMatrixWorld(!0);let t=new xe().setFromObject(e),n=t.max.y-t.min.y;if(!Number.isFinite(n)||n<=0)throw Error(`Ukuran Jacaranda tidak valid.`);let i=t.getCenter(new z),a=new c().makeScale(1/n,1/n,1/n).multiply(new c().makeTranslation(-i.x,-t.min.y,-i.z)),o=new _,s=0,l=0,u=new Set;if(e.traverse(e=>{if(!(e instanceof J))return;if(!(e.material instanceof r))throw Error(`Material Jacaranda tidak valid.`);let t=e.geometry.clone().applyMatrix4(new c().multiplyMatrices(a,e.matrixWorld));u.add(e.geometry),s+=(t.index?.count??t.getAttribute(`position`).count)/3;let n=e.material;if(n.name.endsWith(`_leaves`)){if(l++,!n.map)throw Error(`Tekstur daun Jacaranda tidak tersedia.`);Sa(n,`foliage`),n.transparent=!1,n.alphaTest=.45,n.side=2,n.forceSinglePass=!0,n.color.set(`#dce5c8`)}let i=new J(t,n);i.name=n.name,i.castShadow=i.receiveShadow=!0,o.add(i)}),o.children.length!==3||l!==1||s>45e3)throw Xa([o]),Error(`Jacaranda harus memiliki tiga mesh dengan anggaran maksimal 45 ribu triangle.`);u.forEach(e=>e.dispose()),Rs=o}async function Hs(){if(!Rs){if(zs)return zs;zs=(async()=>{let[{GLTFLoader:e},{MeshoptDecoder:t},n]=await Promise.all([co(()=>import(`./GLTFLoader-BFjgnd6d.js`).then(e=>e.n),__vite__mapDeps([0,1])),co(()=>import(`./meshopt_decoder.module-DXTYc6wn.js`),[]),fetch(wa(`/models/jacaranda-game.glb?v=1`))]);if(!n.ok)throw Error(`Model Jacaranda belum dapat dimuat.`);let r=await new e().setMeshoptDecoder(t).parseAsync(await n.arrayBuffer(),``);try{Vs(r.scene)}catch(e){throw Xa([r.scene]),e}})();try{await zs}finally{zs=void 0}}}function Us(e=0,t=`blue`){if(!Rs)throw Error(`Muat template Jacaranda sebelum membuat scene.`);let n=Ls[e]??Ls[0],i=Ya(Rs,!0);i.name=`jacaranda-model`,i.scale.set(n.height*n.width,n.height,n.height*n.width);let a=new _;return a.add(i),a.name=`tree-`+e,a.userData={category:`tree`,variant:e,palette:t,modelStyle:`imported`,attribution:Is},t===`clay`&&a.traverse(e=>{e instanceof J&&e.material instanceof r&&e.material.userData.seasonalSurface===`foliage`&&e.material.color.set(`#ddd7b3`)}),a}var Ws=class{batches=new Map;add(e,t,n){let i=t+`:`+(n??``),a=this.batches.get(i);if(!a){let e=new r({color:t,roughness:.92,flatShading:!0});n&&Sa(e,n),a={material:e,geometry:[]},this.batches.set(i,a)}let o=e.index?e.toNonIndexed():e;o!==e&&e.dispose(),o.deleteAttribute(`uv`),a.geometry.push(o)}branch(e,t,n,r,i,a){let o=new z(...e),s=new z(...t),c=s.clone().sub(o),l=new V(r,n,c.length(),7);l.applyQuaternion(new Xe().setFromUnitVectors(new z(0,1,0),c.normalize())),l.translate(...o.add(s).multiplyScalar(.5).toArray()),this.add(l,i,a)}crown(e,t,n,r,i,a=1){let o=new w(1,a),s=o.getAttribute(`position`);for(let e=0;e<s.count;e++){let t=s.getX(e),n=s.getY(e),r=s.getZ(e),a=1+.09*Math.sin(t*7.1+n*5.3+r*9.7+i);s.setXYZ(e,t*a,n*a,r*a)}o.computeVertexNormals(),o.scale(...t),o.rotateY(i*.73),o.translate(...e),this.add(o,n,r)}leaf(e,t,n,r,i=`foliage`){let a=new z(...e),o=new z(...t),s=o.clone().sub(a),c=new z(s.z,0,-s.x).normalize().multiplyScalar(n),l=a.clone().addScaledVector(s,.56);l.y+=s.length()*.13;let u=l.clone().add(new z(0,n*.25,0)),d=[a,l.clone().add(c),o,l.clone().sub(c),u],f=new De;f.setAttribute(`position`,new dt(d.flatMap(e=>e.toArray()),3)),f.setIndex([0,4,1,1,4,2,2,4,3,3,4,0,0,2,3,0,1,2]),f.computeVertexNormals(),this.add(f,r,i)}finish(e){let t=new _;t.name=e;for(let{material:n,geometry:r}of this.batches.values()){let i=pa(r);if(r.forEach(e=>e.dispose()),!i)throw Error(`Vegetation geometry could not be merged`);let a=new J(i,n);a.name=e+`-`+(n.userData.seasonalSurface??`wood`),a.castShadow=!0,a.receiveShadow=!0,t.add(a)}return t}};function Gs(e){let t=new Ws;for(let n=0;n<3;n++){let r=(n-1)*.34,i=.33+n%2*.09;t.branch([r,0,0],[r+.025,i,.02],.018,.009,`#648e66`,`foliage`);for(let i=0;i<5;i++){let a=i*2.4+n;t.leaf([r,.06+i*.035,0],[r+Math.cos(a)*.22,.22+i*.025,Math.sin(a)*.2],.07,e===`clay`?`#87955c`:i%2?`#88ad7c`:`#648e66`)}for(let e=0;e<5;e++){let n=e*Math.PI*2/5;t.crown([r+Math.cos(n)*.065,i,.02+Math.sin(n)*.065],[.055,.024,.038],`#eebf6c`,`foliage`,e,0)}}return t.finish(`flower-plant`)}function Ks(e,t=0){let n=new Ws,r=e===`clay`?`#87955c`:`#7b976a`;for(let e=0;e<7;e++){let i=e*2.4+t*.4,a=Math.cos(i)*.32,o=Math.sin(i)*.22,s=.7+e%4*.13,c=[a+Math.cos(i)*.08,s,o+Math.sin(i)*.08];n.branch([a,0,o],c,.017,.01,r,`foliage`);for(let e=0;e<3;e++){let t=i+e*2.3;n.leaf([a,.12+e*.15,o],[a+Math.cos(t)*.24,s*(.62+e*.13),o+Math.sin(t)*.24],.034,r)}n.branch(c,[c[0],s+.17,c[2]],.035,.025,`#9b8261`)}return n.finish(`reed-cluster`)}Ls.map(e=>e.label);var qs={blue:{main:`#3677d4`,light:`#79a8e7`,dark:`#2555a0`,vehicle:`#dfb54f`},sage:{main:`#529084`,light:`#95bdb0`,dark:`#34665d`,vehicle:`#dca467`},clay:{main:`#bc7156`,light:`#d6a088`,dark:`#894e3d`,vehicle:`#7f9dba`}},Js=class{root=new _;materials=new Map;mat(e,t=.78,n){let i=e+t+(n??``),a=this.materials.get(i);return a||(a=new r({color:e,roughness:t,metalness:0,flatShading:!0}),n&&Sa(a,n),this.materials.set(i,a)),a}mesh(e,t,n,r,i,a=this.root){let o=new J(e,this.mat(t));return o.position.set(n,r,i),o.castShadow=!0,o.receiveShadow=!0,a.add(o),o}box(e,t,n,r,i=0,a=0,o=0,s=0,c=this.root){let l=s?new fa(e,t,n,2,Math.min(s,e/3,t/3,n/3)):new We(e,t,n);return this.mesh(l,r,i,a,o,c)}cylinder(e,t,n,r,i,a,o,s=12){return this.mesh(new V(e,t,n,s),r,i,a,o)}};function Ys(e,t,n,r,i=1){let a=new _;a.position.set(t,n,r),a.scale.setScalar(i),e.root.add(a);for(let t of[-.53,0,.53])e.box(.16,.14,1.3,`#9d7951`,t,.1,0,0,a);for(let t=0;t<6;t++)e.box(1.38,.07,.18,t%2?`#c6a476`:`#b79566`,0,.205,-.55+t*.22,0,a);return a}function Xs(e=0,t=`blue`){let n=new Js;if(Ys(n,0,0,0),e!==3){let t=e===1?3:2;for(let r=0;r<t;r++)for(let t=0;t<2;t++)for(let i=0;i<2;i++){if(e===1&&r===2&&t===1)continue;let a=(t-.5)*.63,o=(i-.5)*.59,s=.51+r*.53;if(n.box(.61,.5,.57,(t+i+r)%2?`#cfb187`:`#ddc09a`,a,s,o,.025),n.box(.05,.502,.574,`#ead3ad`,a,s,o),n.box(.614,.012,.05,`#e9d1ab`,a,s+.255,o),e===2){for(let e of[-.18,.18])n.box(.62,.06,.035,`#a7885d`,a,s+e,o+.3);for(let e of[-.24,.24])n.box(.065,.5,.035,`#b4986a`,a+e,s,o+.32)}else{n.box(.17,.1,.008,`#f4eee2`,a+.15,s+.03,o+.291);for(let e=0;e<4;e++)n.box(.006,.054,.01,`#8d836e`,a+.11+e*.02,s+.03,o+.3)}}if(e===0)for(let e of[-.35,.35])n.box(.035,1.1,1.21,`#867056`,e,.79,0),n.box(.04,.014,1.21,`#867056`,e,1.35,0)}return n.root.name=`pallet-`+e,n.root.userData={category:`pallet`,variant:e,palette:t},n.root}function Zs(e=0,t=`blue`){let n=new Js,r=qs[t],i=e===1?8.4:11.2,a=e===2?5.5:6.8,o=e===1?4.6:3.7;n.box(i+.55,.24,a+.5,`#c2cbd3`,0,.12,0),n.box(i,o,a,r.main,0,o/2+.24,0);for(let e=-i/2+.1;e<i/2;e+=.21)n.box(.028,o-.04,.036,r.light,e,o/2+.24,a/2+.02),n.box(.028,o-.04,.036,r.dark,e,o/2+.24,-a/2-.02);for(let e=-a/2;e<a/2;e+=.21)n.box(.04,o-.04,.028,r.light,i/2+.02,o/2+.24,e),n.box(.04,o-.04,.028,r.dark,-i/2-.02,o/2+.24,e);let s=e===1?.25:.13,c=a/2+.35;for(let e of[-1,1]){let t=n.box(i+.55,.12,c/Math.cos(s),r.main,0,o+.34+Math.sin(s)*c/2,e*c/2);t.rotation.x=e*s,t.material=n.mat(r.main,.78,`roof`);for(let a=-i/2;a<=i/2;a+=.22){let i=n.box(.025,.04,c/Math.cos(s),r.light,a,t.position.y+.085,t.position.z);i.rotation.x=e*s,i.material=n.mat(r.light,.78,`roof`)}}let l=new Ye;l.moveTo(-a/2,0),l.lineTo(a/2,0),l.lineTo(0,Math.sin(s)*c),l.closePath();for(let e of[-1,1]){let t=n.mesh(new D(l,{depth:.05,bevelEnabled:!1}),r.main,e*i/2,o+.27,0);t.rotation.y=Math.PI/2}let u=e===1?2:3;for(let e=0;e<u;e++){let o=(e-(u-1)/2)*(i/(u+.25)),s=a/2;n.box(2.4,2.85,.1,`#e5ebef`,o,1.65,s+.065),n.box(2.04,2.5,.12,`#293847`,o,1.45,s+.13),n.box(1.9,.58,.08,`#c1cbd6`,o,2.52,s+.205);for(let e=0;e<6;e++)n.box(1.91,.018,.03,`#a3b0bf`,o,2.27+e*.1,s+.25);n.box(2.36,.2,.6,`#818f9e`,o,.3,s+.4);let c=Xs(e%2,t);c.scale.setScalar(.8),c.position.set(o+.1,.35,s+.02),n.root.add(c);for(let e of[-1,1])n.box(.13,.74,.15,`#c6a250`,o+e*1.24,.61,s+.42,.02),n.box(.135,.13,.155,`#3b4651`,o+e*1.24,.77,s+.42);n.box(.47,.24,.04,r.dark,o,3.19,s+.18);for(let t=0;t<=e;t++)n.box(.048,.1,.012,`#f4f7fc`,o-e*.065+t*.13,3.19,s+.209)}if(e===2){n.box(3.1,2.4,3,`#e3e9eb`,-i/2-1.15,1.43,-.8),n.box(3.3,.16,3.2,r.dark,-i/2-1.15,2.73,-.8);for(let e=0;e<2;e++)n.box(.91,.85,.06,`#5c8297`,-i/2-1.8+e*1.32,1.9,.72),n.box(.04,.89,.07,`#f0f1ed`,-i/2-1.8+e*1.32,1.9,.76);n.box(.68,1.55,.07,r.dark,-i/2-1.15,1.03,.75)}for(let e of[-i/2+.12,i/2-.12])n.box(.12,o+.03,.12,r.dark,e,o/2+.24,a/2+.07);n.box(i,.16,.12,r.dark,0,.46,a/2+.04);let d=n.box(1.8,.42,.05,`#f6f8fb`,0,o-.06,a/2+.13,.025);n.box(.22,.22,.06,r.main,d.position.x-.62,d.position.y,d.position.z+.04).rotation.z=Math.PI/4;for(let e=0;e<3;e++)n.box(.65-e*.15,.035,.02,r.dark,.24,d.position.y+.07-e*.07,d.position.z+.04);return n.root.name=`warehouse-`+e,n.root.userData={category:`warehouse`,variant:e,palette:t},n.root}function Qs(e=0,t=`blue`){let n=Ns(e===2?`truck.van`:e===1?`truck.flatbed`:`truck.box`,{palette:t}).root;if(e===1)for(let e of[-1.75,-.35]){let r=Xs(e<-1?2:0,t);r.scale.setScalar(.87),r.position.set(0,.94,e),n.add(r)}return n.name=`truck-`+e,Object.assign(n.userData,{category:`truck`,variant:e,palette:t}),n}function $s(e=0,t=`blue`){let n=new Js,r=qs[t],i=e===2,a=i?1.48:1.18;n.box(a,.68,1.94,r.vehicle,0,.78,.04,.16),n.box(a*.94,.51,.6,r.vehicle,0,1.04,-.74,.14),n.box(a+.03,.2,1.35,r.main,0,.45,.21,.04),n.box(a*.84,.07,1,`#62727b`,0,1.11,-.05);let o=n.box(.49,.14,.45,`#36434b`,0,1.32,-.18,.07);n.box(.5,.5,.13,`#36434b`,0,1.56,-.4,.06).rotation.x=-.14,o.name=`seat`;let s=n.mesh(new Oe(.18,.023,6,12),`#35434e`,0,1.61,.42);s.rotation.x=Math.PI/3,n.box(.06,.4,.06,`#35434e`,0,1.39,.47).rotation.x=-.25;for(let e of[-a*.4,a*.4])for(let t of[-.57,.55])n.box(.08,1.56,.08,`#34434f`,e,1.9,t);n.box(a,.1,1.43,`#34434f`,0,2.68,0,.04);for(let e=0;e<5;e++)n.box(a,.042,.035,`#6a7883`,0,2.75,-.54+e*.27);n.cylinder(.072,.072,.16,`#edac42`,a*.35,2.83,-.42,8);let c=i?3.25:2.62,l=new _;l.name=`mast`,n.root.add(l);for(let e of[-.39,.39])n.box(.115,c,.12,`#34444f`,e,c/2+.2,1.02,0,l),n.box(.045,c-.22,.05,`#a0abb3`,e,c/2+.16,1.11,0,l);for(let e of[.42,c-.03])n.box(.88,.1,.15,`#34444f`,0,e,1.02,0,l);let u=new _;u.name=`fork-carriage`,u.position.y=e===1?.6:0,n.root.add(u),n.box(.96,.45,.12,`#536574`,0,.56,1.16,0,u);for(let e of[-.31,.31])n.box(.12,.62,.08,`#798c98`,e,.45,1.25,0,u),n.box(.13,.07,1.03,`#798c98`,e,.15,1.74,.015,u);for(let e of[-.65,.65])for(let t of[-1,1]){let r=e>0?.33:.27,i=new _;i.name=`wheel-${e>0?`front`:`rear`}-${t>0?`right`:`left`}`,i.position.set(t*(a/2+.02),r,e),i.userData.radius=r,n.root.add(i);let o=n.mesh(new V(r,r,.22,12),`#34414a`,0,0,0,i);o.rotation.z=Math.PI/2;let s=n.mesh(new V(r*.56,r*.56,.25,12),`#c4cdd2`,t*.015,0,0,i);s.rotation.z=Math.PI/2;for(let e=0;e<3;e++)n.box(.018,r*.88,.027,`#8094a2`,t*.15,0,0,0,i).rotation.x=e*Math.PI/3}if(e===1){let e=Xs(0,t);e.scale.setScalar(.9),e.position.set(0,.78,1.78),n.root.add(e)}return n.root.name=`forklift-`+e,n.root.userData={category:`forklift`,variant:e,palette:t},n.root}function ec(e=0,t=`blue`){return Us(e,t)}var tc=new ga().parse(xa);function nc(e,t,n,r,i,a,o,s,c=0){let l=new ba(t,{font:tc,size:n,depth:.009,curveSegments:2,bevelEnabled:!1});l.computeBoundingBox(),l.translate(-(l.boundingBox.max.x-l.boundingBox.min.x)/2,0,0);let u=e.mesh(l,r,i,a,o,s);u.rotation.y=c}function rc(e,t,n,r,i){let a=new _;a.name=i,a.position.set(t,r,n),a.userData.radius=r,e.root.add(a);let o=e.mesh(new V(r,r,.19,16),Fs.colors.steel,0,0,0,a);o.rotation.z=Math.PI/2;let s=e.mesh(new V(r+.035,r+.035,.025,16),Fs.colors.frame,-Math.sign(t)*.09,0,0,a);s.rotation.z=Math.PI/2;let c=e.mesh(new V(r*.48,r*.48,.205,12),Fs.colors.steel,0,0,0,a);c.rotation.z=Math.PI/2;for(let n=0;n<3;n++)e.box(.018,r*.82,.026,Fs.colors.frame,Math.sign(t)*.11,0,0,0,a).rotation.x=n*Math.PI/3}function ic(e,t){e.box(.22,.22,.62,Fs.colors.frame,0,Fs.runningGear.couplerY,t,.025),e.box(.39,.28,.22,Fs.colors.steel,0,Fs.runningGear.couplerY,t+Math.sign(t)*.25,.035)}function ac(e=0,t=`blue`){return is(`cc206`,t)}function oc(e=0,t=`blue`){let n=new Js,r=t===`sage`?`#627a6b`:t===`clay`?`#9e684d`:`#93624f`,{colors:i,runningGear:a,wagon:o}=Fs,s=o.bodyLength/2;n.box(2.8,.2,o.bodyLength,r,0,1.05,0),n.box(2.62,.27,o.bodyLength-.3,i.frame,0,.8,0);let c=n.root.children.length;for(let e of[-o.bogieZ,o.bogieZ]){n.box(2.2,.26,2.6,i.frame,0,.61,e);for(let t of[-.79,.79])for(let r of[-1,1])rc(n,r*a.wheelX,e+t,a.wagonRadius,`rail-wheel-wagon-${e}-${t}-${r}`)}for(let e of n.root.children.slice(c))e instanceof J&&(e.userData.runningGearStatic=!0);let l=Math.ceil((o.bodyLength-.7)/.57)+1;for(let e=0;e<l;e++)n.box(2.7,.024,.04,`#b18c70`,0,1.163,-s+.35+e*(o.bodyLength-.7)/(l-1));for(let t of[-1,1]){let r=Math.ceil((o.bodyLength-1.2)/1.23)+1;for(let e=0;e<r;e++)n.box(.055,.28,.07,`#bc9572`,t*1.42,.96,-s+.6+e*(o.bodyLength-1.2)/(r-1));nc(n,e?`GERBONG BARANG`:`GERBONG DATAR`,.13,`#ede6d1`,t*1.431,.97,0,n.root,t*Math.PI/2)}if(e===1){let e=o.bodyLength-.8;n.box(2.67,2.8,e,r,0,2.56,0,.04),n.box(2.77,.15,e+.18,`#ab9c89`,0,4.05,0,.075);for(let t of[-1,1]){for(let r=-e/2+.17;r<=e/2-.17;r+=.28)n.box(.045,2.63,.037,`#ba9479`,t*1.35,2.56,r);n.box(.065,2.42,2.1,`#735345`,t*1.39,2.43,0),n.box(.07,.06,2.34,`#c4ad8d`,t*1.43,3.72,0),nc(n,`KAI LOGISTIK`,.29,`#efe8d8`,t*1.4,3.21,-e*.31,n.root,t*Math.PI/2)}}else for(let e of[-s+.18,s-.18]){n.box(2.79,.54,.1,r,0,1.39,e);for(let t of[-1.31,1.31])n.box(.065,.7,.065,`#bca188`,t,1.45,e)}ic(n,o.couplerZ+.31),ic(n,-o.couplerZ-.31),n.root.name=`freight-wagon-`+e,n.root.userData={category:`wagon`,variant:e,palette:t,railFamily:`cc206`,carSpecRaw:{bogieZ:o.bogieZ,couplerZ:o.couplerZ},detailLength:o.detailLength};let u=new Set([r,`#b18c70`,`#bc9572`,`#ab9c89`,`#ba9479`,`#735345`,`#c4ad8d`,`#bca188`]),d=new Set([`#ede6d1`,`#efe8d8`]);for(let e of n.materials.values()){let t=`#`+e.color.getHexString();e.roughness=u.has(t)||d.has(t)?.8:.45,e.metalness=u.has(t)||d.has(t)?0:.12}return no(n.root)}function sc(e=14){let t=new Js;t.box($.ballastWidth,.14,e,`#a7adb0`,0,.07,0,.045);for(let n=-e/2+.36;n<e/2;n+=.7){t.box($.sleeperLength,.09,.21,`#8b857a`,0,.165,n,.02);for(let e of[-1,1])t.box(.27,.026,.23,`#656e73`,e*$.centerHalf,.225,n)}for(let n of[-1,1])t.box(.16,.035,e,`#7b858d`,n*$.centerHalf,.235,0),t.box(.042,.055,e,`#727f8a`,n*$.centerHalf,.275,0),t.box($.headWidth,.035,e,`#c4cdd3`,n*$.centerHalf,.3025,0);return t.root.name=`rail-track`,t.root.userData={category:`rail`,variant:0},uc(t.root),t.root}function cc(e=`blue`){let t=new Js,n=qs[e];t.box(28,.22,23,`#d8e0e6`,0,-.12,0,.08),t.box(27.8,.012,4.2,`#b4c5d7`,0,.004,8.8);for(let e=-12;e<=12;e+=3)t.box(1.5,.015,.085,`#edf2f5`,e,.02,8.8);t.box(27.8,.02,.14,`#f0f4f7`,0,.015,6.62),t.box(27.8,.02,.14,`#f0f4f7`,0,.015,10.98);let r=Zs(0,e);r.position.set(-1.4,0,-2),t.root.add(r);let i=Zs(1,e);i.scale.setScalar(.61),i.position.set(6.65,0,-3.95),i.rotation.y=-Math.PI/2,t.root.add(i);for(let e of[-4.6,-1.2,2.2]){for(let n of[-1,1])t.box(.048,.015,3.6,`#c4ab6a`,e+n*1.35,.01,3.8);t.box(2.74,.015,.048,`#c4ab6a`,e,.01,5.6)}let a=Qs(0,e);a.scale.setScalar(.63),a.position.set(-4.6,.04,3.82),t.root.add(a);let o=Qs(2,e);o.scale.setScalar(.74),o.rotation.y=Math.PI/2,o.position.set(7.9,.03,8.8),t.root.add(o);for(let n=0;n<2;n++){let r=$s(n,e);r.scale.setScalar(.69),r.rotation.y=n?-Math.PI/3:Math.PI/3,r.position.set(n?3.5:-8.6,.02,n?4.5:1.45),t.root.add(r)}for(let n=0;n<8;n++){let r=Xs(n%3,e);r.position.set(n<5?-8.8+n*1.6:8.3+(n-5)%2*1.6,.02,n<5?4.5:.8+Math.floor((n-5)/2)*1.6),t.root.add(r)}t.box(3.3,2.12,2.1,`#589d99`,-9.6,1.09,-3,.025);for(let e=-11.16;e<-8;e+=.16)t.box(.03,2.05,.04,`#83b6ae`,e,1.1,-1.93);for(let e of[-4.03,-1.97])t.box(3.4,.12,.12,n.dark,-9.6,2.21,e);let s=new _;s.name=`cargo-rack`,t.root.add(s);for(let e of[7.4,10.5])for(let r of[-6.6,-5.2])t.box(.08,4.2,.08,n.main,e,2.1,r,0,s);for(let n of[.3,1.76,3.22]){t.box(3.2,.12,1.5,`#aebfca`,8.95,n,-5.9,0,s);for(let t of[8.1,9.8]){let r=Xs(0,e);r.scale.setScalar(.82),r.position.set(t,n+.1,-5.9),s.add(r)}}for(let n=0;n<7;n++){let r=ec(n%3,e);r.scale.setScalar(.67+n%3*.1),r.position.set(-11.8+n*3.85,0,-9.2),t.root.add(r)}return t.root.name=`depot-riverside`,t.root.userData={category:`yard`,palette:e},t.root}function lc(e,t,n){let r=e===`yard`?cc(n):e===`rail`?sc():e===`train`?is([`cc206`,`cc203`,`cc204`][t]??`cc206`,n):{warehouse:Zs,truck:Qs,forklift:$s,pallet:Xs,tree:ec,wagon:oc}[e](t,n);return uc(r),r}function uc(e){let t=[];e.traverse(e=>{e instanceof _&&t.push(e)});for(let e of t){let t=new Map;for(let n of e.children){if(!(n instanceof J)||n.name||Array.isArray(n.material))continue;let e=`${n.material.uuid}:${n.castShadow}:${n.receiveShadow}`,r=t.get(e)??{material:n.material,meshes:[]};r.meshes.push(n),t.set(e,r)}for(let{material:n,meshes:r}of t.values()){if(r.length<2)continue;let i=r.map(e=>(e.updateMatrix(),(e.geometry.index?e.geometry.toNonIndexed():e.geometry.clone()).applyMatrix4(e.matrix))),a=pa(i);if(i.forEach(e=>e.dispose()),!a)throw Error(`Static geometry could not be merged.`);let o=new J(a,n);o.castShadow=r[0].castShadow,o.receiveShadow=r[0].receiveShadow,o.name=`static-`+t.size+`-`+n.name+`-`+e.children.length;for(let t of r)e.remove(t),t.geometry.dispose();e.add(o)}}}function dc(e,t=!1){let n=0,r=0,i=e=>{if(e instanceof J&&(!t||!e.userData.cc206ShadowProxy&&e.layers.isEnabled(0))){n++;let t=e.geometry;r+=(t.index?.count??t.getAttribute(`position`).count)/3*(e instanceof R?e.count:1)}};return t?e.traverseVisible(i):e.traverse(i),{meshes:n,triangles:r}}function fc(e,t=!1){let n=dc(e,t);e.updateMatrixWorld(!0);let r=new xe().setFromObject(e).getSize(new z);return{...n,size:r.toArray()}}function pc(e){Ja(e);let t=new Set,n=new Set,r=new Set;e.traverse(e=>{if(e instanceof J||e instanceof et||e instanceof pe){t.add(e.geometry);for(let t of Array.isArray(e.material)?e.material:[e.material]){n.add(t);for(let e of Object.values(t))e instanceof Se&&r.add(e)}e instanceof R&&e.dispose()}(e instanceof Qe||e instanceof j||e instanceof y)&&e.shadow.dispose()}),t.forEach(e=>e.dispose()),n.forEach(e=>e.dispose()),r.forEach(e=>e.dispose())}var mc=-180,hc=-1.35,gc=-3.2,_c=5.6,vc=.065,yc=-180,bc=Object.freeze({minX:-117,maxX:-90.12,minZ:-16,maxZ:3.28,centerX:-103,centerZ:-11.56,gateX:-114.76,roadEdgeZ:-17.65,scale:.56}),xc=4.2,Sc=291.8/2,Cc=10.6,wc=-320,Tc=Object.freeze({centerX:Sc,nearZ:107,farZ:119,halfOpening:5,springY:3.6,archRise:3});function Ec(e,t,n,r,i,a,o,s=.3){let{box:c,cylinder:l}=e,u=a/2;for(let a of[-1,1]){let l=e.seasonal(c(i,.16,u/Math.cos(s),o,t,n+u*Math.tan(s)/2,r+a*u/2),`roof`);l.rotation.x=a*s;for(let n=t-i/2+.12;n<t+i/2;n+=.42){let t=e.seasonal(c(.075,.045,u/Math.cos(s),`#c68465`,n,l.position.y+.105,l.position.z),`roof`);t.rotation.x=l.rotation.x}}e.seasonal(l(.13,i,`#a05e45`,t,n+u*Math.tan(s)+.12,r),`roof`).rotation.z=Math.PI/2}function Dc(e){let t=new Ca,n=t.root,{box:r,mesh:i,label:a}=t;n.name=`station-building`;let o=e===`sage`?`#4c8276`:e===`clay`?`#ad674f`:`#325c88`;r(26,.3,7.8,`#b9b6a8`,-19,.15,-10),r(25,3.35,6.7,`#f5edd8`,-19,1.97,-10),r(25.15,.58,6.85,`#c9bb9e`,-19,.59,-10),((e,n,r,i,a,o,s=.3)=>Ec(t,e,n,r,i,a,o,s))(-19,3.78,-10,27,8.2,`#b97455`);let s=new Ye;s.moveTo(-3.35,0),s.lineTo(3.35,0),s.lineTo(0,4.1*Math.tan(.3)),s.closePath();for(let e of[-1,1]){let t=i(new D(s,{depth:.08,bevelEnabled:!1}),`#f5edd8`,-19+e*12.5,3.64,-10);t.rotation.y=Math.PI/2}for(let e=-30;e<=-8;e+=3.65)if(!(Math.abs(e- -19)<2.5))for(let t of[-1,1]){let n=-10+t*3.39;r(1.75,1.45,.1,`#697f81`,e,2.15,n);for(let i of[-.92,0,.92])r(.075,1.6,.13,`#ffffff`,e+i,2.15,n+t*.04);for(let i of[-.77,.77])r(1.93,.075,.13,`#ffffff`,e,2.15+i,n+t*.04);r(1.2,.095,.04,`#a0b7ad`,e,2.58,n+t*.08)}for(let e of[-1,1]){r(3.7,2.8,.16,`#436574`,-19,1.71,-10+e*3.45),r(.09,2.8,.2,`#f0e7d2`,-19,1.71,-10+e*3.54),r(3.6,.09,.2,`#f0e7d2`,-19,2.6,-10+e*3.54),r(5.9,.72,.16,`#f9f6e9`,-19,3.27,-10+e*3.53),a(`STASIUN RIVERSIDE`,.39,`#355568`,-19,3.11,-10+e*3.63,e>0?0:Math.PI);for(let t=0;t<3;t++)r(5.5,.12,.5+t*.6,`#b9b6a8`,-19,.3-t*.09,-10+e*(3.85+t*.3))}r(5.8,1,.18,`#f8f4e5`,-19,5.68,-9.9),a(`KAI`,.72,`#355b8a`,-19,5.34,-9.79),r(1.9,.07,.08,`#dd8752`,-18.9,5.23,-9.75).rotation.z=.08,a(`LOKET`,.2,o,-29.5,3.08,-6.47),a(`RUANG TUNGGU`,.18,o,-9.9,3.08,-6.47);for(let e of n.children)e.position.x-=-19,e.position.z-=-10;return n}function Oc(e){let t=new Ca,n=t.root,{box:r,label:i}=t;n.name=`station-baggage-building`;let a=e===`sage`?`#4c8276`:e===`clay`?`#ad674f`:`#325c88`;r(6.7,2.45,4.1,`#e7dfc9`,15.2,1.24,-10),((e,n,r,i,a,o,s=.3)=>Ec(t,e,n,r,i,a,o,s))(15.2,2.57,-10,7.3,4.8,`#b97455`),r(2,1.8,.1,`#6c8181`,15.2,.95,-7.9);for(let e=.35;e<1.9;e+=.22)r(2.02,.025,.12,`#a2afaa`,15.2,e,-7.81);i(`BAGASI & LOGISTIK`,.23,a,15.2,2.17,-7.82);for(let e of n.children)e.position.x-=15.2,e.position.z+=10;return n}function kc(e,t=!1){let n=new Ca,r=n.root,{box:i}=n;r.name=`station-bench`;let a=r;t&&(a.rotation.y=Math.PI);for(let e of[-.86,.86])i(.09,.48,.57,`#4d6264`,e,.25,0,a),i(.07,.8,.07,`#4d6264`,e,.65,-.25,a),i(.08,.05,.6,`#4d6264`,e,.78,0,a);for(let e=0;e<4;e++)i(2.05,.075,.12,`#bb9161`,0,.53,-.18+e*.13,a);for(let e=0;e<3;e++)i(2.05,.12,.07,`#bb9161`,0,.72+e*.15,-.27,a);return r}function Ac(e,t=!1){let n=new Ca,r=n.root,{box:i}=n;if(r.name=t?`tree-planter`:`flower-planter`,i(1.35,.5,1.15,`#c0b8a6`,0,.25,0),i(1.2,.04,1,`#766853`,0,.52,0),t){let t=lc(`tree`,0,e);t.scale.setScalar(.85),t.position.set(0,.52,0),r.add(t)}else{let t=Gs(e);t.position.set(0,.54,0),r.add(t)}return r}function jc(e,t=4.3){let n=new Ca,r=n.root,{box:i,cylinder:a}=n;r.name=`station-lamp`,a(.18,.35,`#aeb5b0`,0,.175,0),a(.065,t,`#5f7376`,0,t/2,0),i(.72,.1,.2,`#5f7376`,0,t,0);for(let e of[-1,1])i(.48,.16,.36,`#5f7376`,0+e*.34,t-.03,0),i(.4,.035,.3,`#fff0c9`,0+e*.34,t-.13,0);return r}function Mc(e,t=`RIVERSIDE`,n=void 0){let r=new Ca,i=r.root,{box:a,cylinder:o,label:s}=r;i.name=`station-sign`;let c=e===`sage`?`#4c8276`:e===`clay`?`#ad674f`:`#325c88`;for(let e of[-1,1])o(.045,2.6,`#65757a`,0+e*1.7,1.7,0);return a(3.75,.72,.12,`#f4f1e6`,0,2.74,0),a(3.75,.1,.14,c,0,2.4,0),s(t,.25,`#344d5e`,0,2.67,.07),s(t,.25,`#344d5e`,0,2.67,-.07,Math.PI),n&&(a(.6,.6,.14,c,2.2,2.75,0),s(n,.36,`#ffffff`,2.2,2.58,.09)),i}function Nc(e,t=`#87986c`,n=0){let r=new Ca,i=r.root,{box:a,mesh:o}=r;i.name=`station-passenger`;let s=i;s.rotation.y=n;for(let e of[-1,1])a(.11,.4,.12,`#3d5058`,e*.1,.23,0,s),a(.14,.075,.23,`#495554`,e*.1,.06,.06,s),a(.09,.36,.12,t,e*.24,.63,0,s);return a(.37,.47,.23,t,0,.65,0,s),o(new w(.16,1),`#d7b18b`,0,1.02,0,s),o(new w(.163,1),`#51453b`,0,1.075,-.025,s).scale.y=.6,a(.25,.35,.2,`#ab7759`,.34,.22,0,s),a(.12,.05,.06,`#5e635e`,.34,.45,0,s),s}function Pc(e,t=12){let n=new Ca,r=n.root,{box:i}=n,a=-t/2,o=t/2;r.name=`station-fence`;for(let e=a;e<=o;e+=2.2){i(.075,.95,.075,`#75837c`,e,.5,0);for(let t=0;t<4&&e+t*.48<=o;t++)i(.035,.72,.035,`#75837c`,e+t*.48,.55,0)}for(let e of[.29,.89])i(o-a,.05,.05,`#75837c`,(a+o)/2,e,0);return r}function Fc(e){let t=new Ca,n=t.root,{mesh:r,cylinder:i}=t;n.name=`station-palm`,Sa(t.mat(`#668e6b`),`evergreen`),i(.14,4.7,`#a5936c`,0,2.35,-12.7);for(let e=0;e<7;e++){let t=e*Math.PI*2/7;r(new ve(.48,2.7,4),`#668e6b`,0+Math.sin(t)*1,4.65,-12.7+Math.cos(t)*1).quaternion.setFromUnitVectors(new z(0,1,0),new z(Math.sin(t),-.18,Math.cos(t)).normalize())}for(let e of n.children)e.position.z+=12.7;return n}function Ic(e,t=28,n=3.6,r=1){let i=new Ca,a=i.root,{box:o}=i,s=r*n/2;a.name=`station-platform`,o(t,.38,n,`#b8b6a9`,0,.19,0),i.seasonal(o(t-.08,.055,n-.08,`#eee6d3`,0,.407,0),`paving`),o(t,.07,.14,`#f7f2e5`,0,.4,s),o(t,.025,.23,`#e4b850`,0,.45,s+(s<0?.22:-.22));for(let e=0-t/2+.3;e<0+t/2;e+=.65)for(let t=0;t<2;t++)o(.075,.017,.075,`#c39e42`,e,.469,s+(s<0?.16+t*.1:-.16-t*.1));return a}function Lc(e,t=22,n=!1){let r=new Ca,i=r.root,{box:a,beam:o}=r,s=t;i.name=`station-canopy`;let c=e===`sage`?`#4c8276`:e===`clay`?`#ad674f`:`#325c88`;((e,t,n,i,a,o,s=.3)=>Ec(r,e,t,n,i,a,o,s))(0,3.62,0,s,3.35,`#b97455`,.14);for(let e=0-s/2+1;e<=0+s/2-.5;e+=5)a(.12,3.3,.12,`#e9dfc6`,e,2.08,.9),a(.22,.38,.22,c,e,.62,.9),a(.07,.1,2.9,c,e,3.59,0),o(new z(e,2.9,.9),new z(e,3.55,-.2),.045,c);for(let t=0-s/2+3;t<0+s/2;t+=7){let r=kc(e,n);r.position.set(t,.39,.3),i.add(r)}return i}function Rc(e){let t=new Ca,n=t.root,{box:r,cylinder:i}=t;n.name=`station-clock`,i(.045,3.1,`#617778`,-18,1.94,-.9);let a=i(.48,.15,`#50656b`,-18,3.48,-.9);a.rotation.x=Math.PI/2;let o=i(.42,.17,`#f8f2e0`,-18,3.48,-.9);o.rotation.x=Math.PI/2;for(let e=0;e<12;e++){let t=e*Math.PI/6,n=r(.032,e%3?.06:.1,.022,`#536568`,-18+Math.sin(t)*.34,3.48+Math.cos(t)*.34,-.8);n.rotation.z=-t}let s=(e,t)=>{let i=new _;i.position.set(-18,3.48,-.78),i.name=t,n.add(i);let a=r(.035,e,.027,`#384e59`,0,e*.38,0,i);return a.name=t+`-mesh`,i},c=s(.3,`station-minute-hand`),l=s(.22,`station-hour-hand`);for(let e of n.children)e.position.x+=18,e.position.z+=.9;return{root:n,update:e=>{let t=40+Math.max(0,e)/60;c.rotation.z=-t/60*Math.PI*2,l.rotation.z=-(9+t/60)/12*Math.PI*2}}}var zc=.7;function Bc(e=.85){if(!Number.isFinite(e)||e<=0)throw Error(`Invalid turnout duration`);let t=0,n=!1,r=!1,i=!1,a=0,o=0,s,c=()=>Math.abs(t-Number(n))<1e-8,l=()=>({position:t,target:n,moving:!r&&!c(),locked:c(),blocked:r});return{read:l,ready(e){return c()&&n===e&&!r},reset(e=!1){t=Number(e),n=i=e,r=!1,a=t,o=0,s=void 0},update(u,d,f=!1){let p=d!==void 0;if(p&&!Number.isFinite(d))throw Error(`Invalid turnout time`);let m=p&&s!==void 0?Math.max(0,d-s):0;s=d;let h=r;if(n=u,r=f&&!c(),r)return a=t,o=0,i=n,l();if(!p)return t=Number(u),i=u,a=t,o=0,l();if(h)return a=t,o=0,i=u,l();if(i!==u)return i=u,a=t,o=0,l();if(!c()){o+=m;let n=Math.min(1,o/e),r=n*n*(3-2*n);t=a+(Number(i)-a)*r,n===1&&(t=Number(i))}return l()}}}function Vc(e,t,n=0,r=t.getLength(),i=.35){let a=Math.max(1,Math.ceil(Math.abs(r-n)/i)),o=new z;return{id:e,points:Array.from({length:a+1},(e,i)=>(t.getPointAt(X.lerp(n,r,i/a)/t.getLength(),o),[o.x,o.z]))}}function Hc(e,t,n,r,i=.35){let a=Math.max(1,Math.ceil(Math.abs(n-t)/i));return{id:e,points:Array.from({length:a+1},(e,i)=>{let o=X.lerp(t,n,i/a);return[o,r(o)]})}}function Uc(e,t,n,r){let i=Math.cos(r),a=Math.sin(r);return e.map(([e,r])=>[(e-t)*i-(r-n)*a,(e-t)*a+(r-n)*i])}function Wc(e,t,n,r,i=3.7){let a=e.getPointAt(t/e.getLength()),o=new z,s=0,c=i*2;for(let l=0;l<32;l++){let l=(s+c)/2;e.getPointAt(X.clamp((t+n*l)/e.getLength(),0,1),o),(o.x-a.x)*Math.sin(r)+(o.z-a.z)*Math.cos(r)<i?s=l:c=l}return Uc(Vc(`point-heel`,e,t,t+n*c,.18).points,a.x,a.z,r)}function Gc(e,t,n,r,i=14){let a=e.getLength(),o=e.getPointAt(t/a),s=n===1?a-t:t,c=[[0,0]],l=Math.cos(r),u=Math.sin(r),d=new z,f=Math.min(s,i*4);for(let r=Math.min(.18,f);r>0&&r<=f+1e-8;r=Math.min(f,r+.18)){e.getPointAt((t+n*r)/a,d);let s=(d.x-o.x)*l-(d.z-o.z)*u,p=(d.x-o.x)*u+(d.z-o.z)*l,m=c.at(-1);if(p<=m[1]+1e-6)break;if(p>=i){let e=(i-m[1])/(p-m[1]);c.push([m[0]+e*(s-m[0]),i]);break}if(c.push([s,p]),r===f)break}return c}function Kc(e){let t=e.minLength??3.7,n=e.maxLength??12;if(!e.id||![e.heading,e.gaugeHalf,e.railTop,t,n].every(Number.isFinite)||e.gaugeHalf<=0||t<=0||n<t)throw Error(`Invalid turnout layout: ${e.id}`);let r=t=>{let n=t.route.getLength();if(!Number.isFinite(n)||n<=0||!Number.isFinite(t.distance)||t.distance<0||t.distance>n||t.direction!==1&&t.direction!==-1)throw Error(`Invalid turnout route toe: ${e.id}`);return t.route.getPointAt(t.distance/n)},i=r(e.normal),a=r(e.branch);if(i.distanceTo(a)>1e-4)throw Error(`Turnout legs do not share a toe: ${e.id}`);let o=t=>{let i=t.route.getLength(),a=t.direction===1?i-t.distance:t.distance,o=Math.min(a,n*2),s=t.route.getPointAt((t.distance+t.direction*o)/i),c=r(t);return(s.x-c.x)*Math.sin(e.heading)+(s.z-c.z)*Math.cos(e.heading)},s=Math.min(n,o(e.normal)-1e-5,o(e.branch)-1e-5);if(s<t-1e-6)throw Error(`Turnout heel is outside its routes: ${e.id}`);let c=t=>{let n=n=>Wc(n.route,n.distance,n.direction,e.heading,t),r=n(e.normal),i=n(e.branch);return{normalPath:r,branchPath:i,deflection:i[i.length-1][0]-r[r.length-1][0]}},l=$.headWidth*e.gaugeHalf/$.centerHalf+.04,u=Math.min(t,s),d=c(u);for(;Math.abs(d.deflection)<l&&u<s;){let e=u;if(u=Math.min(s,u+.5),d=c(u),Math.abs(d.deflection)>=l){let t=e,n=u;for(let e=0;e<16;e++){let e=(t+n)/2;Math.abs(c(e).deflection)<l?t=e:n=e}u=n,d=c(u)}}if(Math.abs(d.deflection)<l)throw Error(`Turnout legs do not form a fork within its heel limit: ${e.id}`);return{id:e.id,x:i.x,z:i.z,heading:e.heading,branchAngle:Math.atan2(d.deflection,u),gaugeHalf:e.gaugeHalf,railTop:e.railTop,bladeLength:u,normalPath:d.normalPath,branchPath:d.branchPath,normalDetailPath:Gc(e.normal.route,e.normal.distance,e.normal.direction,e.heading),branchDetailPath:Gc(e.branch.route,e.branch.distance,e.branch.direction,e.heading),motorSide:e.motorSide,hardwareOffset:e.hardwareOffset,duration:e.duration}}function qc(e){if(!e.normalPath&&!e.branchPath)return[];let t=e.bladeLength??3.7,n=e.normalPath??[[0,0],[0,t]],r=e.branchPath??[[0,0],[Math.tan(e.branchAngle)*t,t]],i=(e,t)=>{let n=0;for(;n<e.length-2&&e[n+1][1]<t;)n++;let[r,i]=e[n],[a,o]=e[n+1],s=a-r,c=o-i,l=Math.hypot(s,c);return{x:r+Math.max(0,Math.min(1,(t-i)/c))*s,z:t,nx:c/l,nz:-s/l}},a=i(r,t).x-i(n,t).x,o=Math.abs(a)>1e-6?Math.sign(a):e.branchAngle<0?-1:1,s=$.headWidth*e.gaugeHalf/$.centerHalf/2,c=Math.cos(e.heading),l=Math.sin(e.heading);return[n,r].map((n,r)=>{let a=r===0?o:-o,u=[],d=[];for(let r=0;r<=24;r++){let o=r/24,f=i(n,r===24?t:t*o),p=.006+(s-.006)*o,m=a*(e.gaugeHalf-(s+.006)*(1-o)*(1-o));for(let[t,n]of[[u,m-p],[d,m+p]]){let r=f.x+f.nx*n,i=f.z+f.nz*n;t.push([e.x+r*c+i*l,e.z-r*l+i*c])}}let f=[...u,...d.reverse()];return f.push([...f[0]]),f})}var Jc=yt(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self,n.polygonClipping=r())})(e,(function(){function e(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o={next:s(0),throw:s(1),return:s(2)};return typeof Symbol==`function`&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return c([e,t])}}function c(o){if(r)throw TypeError(`Generator is already executing.`);for(;n;)try{if(r=1,i&&(a=o[0]&2?i.return:o[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;switch(i=0,a&&(o=[o[0]&2,a.value]),o[0]){case 0:case 1:a=o;break;case 4:return n.label++,{value:o[1],done:!1};case 5:n.label++,i=o[1],o=[0];continue;case 7:o=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(o[0]===6&&n.label<a[1]){n.label=a[1],a=o;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(o);break}a[2]&&n.ops.pop(),n.trys.pop();continue}o=t.call(e,n)}catch(e){o=[6,e],i=0}finally{r=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}var t=function(){function e(e,t){this.next=null,this.key=e,this.data=t,this.left=null,this.right=null}return e}();function n(e,t){return e>t?1:e<t?-1:0}function r(e,n,r){for(var i=new t(null,null),a=i,o=i;;){var s=r(e,n.key);if(s<0){if(n.left===null)break;if(r(e,n.left.key)<0){var c=n.left;if(n.left=c.right,c.right=n,n=c,n.left===null)break}o.left=n,o=n,n=n.left}else if(s>0){if(n.right===null)break;if(r(e,n.right.key)>0){var c=n.right;if(n.right=c.left,c.left=n,n=c,n.right===null)break}a.right=n,a=n,n=n.right}else break}return a.right=n.left,o.left=n.right,n.left=i.right,n.right=i.left,n}function i(e,n,i,a){var o=new t(e,n);if(i===null)return o.left=o.right=null,o;i=r(e,i,a);var s=a(e,i.key);return s<0?(o.left=i.left,o.right=i,i.left=null):s>=0&&(o.right=i.right,o.left=i,i.right=null),o}function a(e,t,n){var i=null,a=null;if(t){t=r(e,t,n);var o=n(t.key,e);o===0?(i=t.left,a=t.right):o<0?(a=t.right,t.right=null,i=t):(i=t.left,t.left=null,a=t)}return{left:i,right:a}}function o(e,t,n){return t===null?e:(e===null||(t=r(e.key,t,n),t.left=e),t)}function s(e,t,n,r,i){if(e){r(``+t+(n?`└── `:`├── `)+i(e)+`
`);var a=t+(n?`    `:`│   `);e.left&&s(e.left,a,!1,r,i),e.right&&s(e.right,a,!0,r,i)}}var c=function(){function c(e){e===void 0&&(e=n),this._root=null,this._size=0,this._comparator=e}return c.prototype.insert=function(e,t){return this._size++,this._root=i(e,t,this._root,this._comparator)},c.prototype.add=function(e,n){var i=new t(e,n);this._root===null&&(i.left=i.right=null,this._size++,this._root=i);var a=this._comparator,o=r(e,this._root,a),s=a(e,o.key);return s===0?this._root=o:(s<0?(i.left=o.left,i.right=o,o.left=null):s>0&&(i.right=o.right,i.left=o,o.right=null),this._size++,this._root=i),this._root},c.prototype.remove=function(e){this._root=this._remove(e,this._root,this._comparator)},c.prototype._remove=function(e,t,n){var i;return t===null?null:(t=r(e,t,n),n(e,t.key)===0?(t.left===null?i=t.right:(i=r(e,t.left,n),i.right=t.right),this._size--,i):t)},c.prototype.pop=function(){var e=this._root;if(e){for(;e.left;)e=e.left;return this._root=r(e.key,this._root,this._comparator),this._root=this._remove(e.key,this._root,this._comparator),{key:e.key,data:e.data}}return null},c.prototype.findStatic=function(e){for(var t=this._root,n=this._comparator;t;){var r=n(e,t.key);if(r===0)return t;t=r<0?t.left:t.right}return null},c.prototype.find=function(e){return this._root&&(this._root=r(e,this._root,this._comparator),this._comparator(e,this._root.key)!==0)?null:this._root},c.prototype.contains=function(e){for(var t=this._root,n=this._comparator;t;){var r=n(e,t.key);if(r===0)return!0;t=r<0?t.left:t.right}return!1},c.prototype.forEach=function(e,t){for(var n=this._root,r=[],i=!1;!i;)n===null?r.length===0?i=!0:(n=r.pop(),e.call(t,n),n=n.right):(r.push(n),n=n.left);return this},c.prototype.range=function(e,t,n,r){for(var i=[],a=this._comparator,o=this._root,s;i.length!==0||o;)if(o)i.push(o),o=o.left;else{if(o=i.pop(),s=a(o.key,t),s>0)break;if(a(o.key,e)>=0&&n.call(r,o))return this;o=o.right}return this},c.prototype.keys=function(){var e=[];return this.forEach(function(t){var n=t.key;return e.push(n)}),e},c.prototype.values=function(){var e=[];return this.forEach(function(t){var n=t.data;return e.push(n)}),e},c.prototype.min=function(){return this._root?this.minNode(this._root).key:null},c.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},c.prototype.minNode=function(e){if(e===void 0&&(e=this._root),e)for(;e.left;)e=e.left;return e},c.prototype.maxNode=function(e){if(e===void 0&&(e=this._root),e)for(;e.right;)e=e.right;return e},c.prototype.at=function(e){for(var t=this._root,n=!1,r=0,i=[];!n;)if(t)i.push(t),t=t.left;else if(i.length>0){if(t=i.pop(),r===e)return t;r++,t=t.right}else n=!0;return null},c.prototype.next=function(e){var t=this._root,n=null;if(e.right){for(n=e.right;n.left;)n=n.left;return n}for(var r=this._comparator;t;){var i=r(e.key,t.key);if(i===0)break;i<0?(n=t,t=t.left):t=t.right}return n},c.prototype.prev=function(e){var t=this._root,n=null;if(e.left!==null){for(n=e.left;n.right;)n=n.right;return n}for(var r=this._comparator;t;){var i=r(e.key,t.key);if(i===0)break;i<0?t=t.left:(n=t,t=t.right)}return n},c.prototype.clear=function(){return this._root=null,this._size=0,this},c.prototype.toList=function(){return d(this._root)},c.prototype.load=function(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!1);var r=e.length,i=this._comparator;if(n&&m(e,t,0,r-1,i),this._root===null)this._root=l(e,t,0,r),this._size=r;else{var a=p(this.toList(),u(e,t),i);r=this._size+r,this._root=f({head:a},0,r)}return this},c.prototype.isEmpty=function(){return this._root===null},Object.defineProperty(c.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),c.prototype.toString=function(e){e===void 0&&(e=function(e){return String(e.key)});var t=[];return s(this._root,``,!0,function(e){return t.push(e)},e),t.join(``)},c.prototype.update=function(e,t,n){var r=this._comparator,s=a(e,this._root,r),c=s.left,l=s.right;r(e,t)<0?l=i(t,n,l,r):c=i(t,n,c,r),this._root=o(c,l,r)},c.prototype.split=function(e){return a(e,this._root,this._comparator)},c.prototype[Symbol.iterator]=function(){var t,n,r;return e(this,function(e){switch(e.label){case 0:t=this._root,n=[],r=!1,e.label=1;case 1:return r?[3,6]:t===null?[3,2]:(n.push(t),t=t.left,[3,5]);case 2:return n.length===0?[3,4]:(t=n.pop(),[4,t]);case 3:return e.sent(),t=t.right,[3,5];case 4:r=!0,e.label=5;case 5:return[3,1];case 6:return[2]}})},c}();function l(e,n,r,i){var a=i-r;if(a>0){var o=r+Math.floor(a/2),s=e[o],c=n[o],u=new t(s,c);return u.left=l(e,n,r,o),u.right=l(e,n,o+1,i),u}return null}function u(e,n){for(var r=new t(null,null),i=r,a=0;a<e.length;a++)i=i.next=new t(e[a],n[a]);return i.next=null,r.next}function d(e){for(var n=e,r=[],i=!1,a=new t(null,null),o=a;!i;)n?(r.push(n),n=n.left):r.length>0?(n=o=o.next=r.pop(),n=n.right):i=!0;return o.next=null,a.next}function f(e,t,n){var r=n-t;if(r>0){var i=t+Math.floor(r/2),a=f(e,t,i),o=e.head;return o.left=a,e.head=e.head.next,o.right=f(e,i+1,n),o}return null}function p(e,n,r){for(var i=new t(null,null),a=i,o=e,s=n;o!==null&&s!==null;)r(o.key,s.key)<0?(a.next=o,o=o.next):(a.next=s,s=s.next),a=a.next;return o===null?s!==null&&(a.next=s):a.next=o,i.next}function m(e,t,n,r,i){if(!(n>=r)){for(var a=e[n+r>>1],o=n-1,s=r+1;;){do o++;while(i(e[o],a)<0);do s--;while(i(e[s],a)>0);if(o>=s)break;var c=e[o];e[o]=e[s],e[s]=c,c=t[o],t[o]=t[s],t[s]=c}m(e,t,n,s,i),m(e,t,s+1,r,i)}}let h=(e,t)=>e.ll.x<=t.x&&t.x<=e.ur.x&&e.ll.y<=t.y&&t.y<=e.ur.y,g=(e,t)=>{if(t.ur.x<e.ll.x||e.ur.x<t.ll.x||t.ur.y<e.ll.y||e.ur.y<t.ll.y)return null;let n=e.ll.x<t.ll.x?t.ll.x:e.ll.x,r=e.ur.x<t.ur.x?e.ur.x:t.ur.x,i=e.ll.y<t.ll.y?t.ll.y:e.ll.y,a=e.ur.y<t.ur.y?e.ur.y:t.ur.y;return{ll:{x:n,y:i},ur:{x:r,y:a}}},_=2**-52;_===void 0&&(_=2**-52);let v=_*_,y=(e,t)=>{if(-_<e&&e<_&&-_<t&&t<_)return 0;let n=e-t;return n*n<v*e*t?0:e<t?-1:1};class b{constructor(){this.reset()}reset(){this.xRounder=new x,this.yRounder=new x}round(e,t){return{x:this.xRounder.round(e),y:this.yRounder.round(t)}}}class x{constructor(){this.tree=new c,this.round(0)}round(e){let t=this.tree.add(e),n=this.tree.prev(t);if(n!==null&&y(t.key,n.key)===0)return this.tree.remove(e),n.key;let r=this.tree.next(t);return r!==null&&y(t.key,r.key)===0?(this.tree.remove(e),r.key):e}}let S=new b,C=134217729;function w(e,t,n,r,i){let a,o,s,c,l=t[0],u=r[0],d=0,f=0;u>l==u>-l?(a=l,l=t[++d]):(a=u,u=r[++f]);let p=0;if(d<e&&f<n)for(u>l==u>-l?(o=l+a,s=a-(o-l),l=t[++d]):(o=u+a,s=a-(o-u),u=r[++f]),a=o,s!==0&&(i[p++]=s);d<e&&f<n;)u>l==u>-l?(o=a+l,c=o-a,s=a-(o-c)+(l-c),l=t[++d]):(o=a+u,c=o-a,s=a-(o-c)+(u-c),u=r[++f]),a=o,s!==0&&(i[p++]=s);for(;d<e;)o=a+l,c=o-a,s=a-(o-c)+(l-c),l=t[++d],a=o,s!==0&&(i[p++]=s);for(;f<n;)o=a+u,c=o-a,s=a-(o-c)+(u-c),u=r[++f],a=o,s!==0&&(i[p++]=s);return(a!==0||p===0)&&(i[p++]=a),p}function T(e,t){let n=t[0];for(let r=1;r<e;r++)n+=t[r];return n}function E(e){return new Float64Array(e)}let D=E(4),O=E(8),k=E(12),A=E(16),j=E(4);function M(e,t,n,r,i,a,o){let s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,E,M,N=e-i,P=n-i,ee=t-a,F=r-a;b=N*F,f=C*N,p=f-(f-N),m=N-p,f=C*F,h=f-(f-F),g=F-h,x=m*g-(b-p*h-m*h-p*g),S=ee*P,f=C*ee,p=f-(f-ee),m=ee-p,f=C*P,h=f-(f-P),g=P-h,E=m*g-(S-p*h-m*h-p*g),_=x-E,d=x-_,D[0]=x-(_+d)+(d-E),v=b+_,d=v-b,y=b-(v-d)+(_-d),_=y-S,d=y-_,D[1]=y-(_+d)+(d-S),M=v+_,d=M-v,D[2]=v-(M-d)+(_-d),D[3]=M;let I=T(4,D),te=22204460492503146e-32*o;if(I>=te||-I>=te||(d=e-N,s=e-(N+d)+(d-i),d=n-P,l=n-(P+d)+(d-i),d=t-ee,c=t-(ee+d)+(d-a),d=r-F,u=r-(F+d)+(d-a),s===0&&c===0&&l===0&&u===0)||(te=11093356479670487e-47*o+33306690738754706e-32*Math.abs(I),I+=N*u+F*s-(ee*l+P*c),I>=te||-I>=te))return I;b=s*F,f=C*s,p=f-(f-s),m=s-p,f=C*F,h=f-(f-F),g=F-h,x=m*g-(b-p*h-m*h-p*g),S=c*P,f=C*c,p=f-(f-c),m=c-p,f=C*P,h=f-(f-P),g=P-h,E=m*g-(S-p*h-m*h-p*g),_=x-E,d=x-_,j[0]=x-(_+d)+(d-E),v=b+_,d=v-b,y=b-(v-d)+(_-d),_=y-S,d=y-_,j[1]=y-(_+d)+(d-S),M=v+_,d=M-v,j[2]=v-(M-d)+(_-d),j[3]=M;let ne=w(4,D,4,j,O);b=N*u,f=C*N,p=f-(f-N),m=N-p,f=C*u,h=f-(f-u),g=u-h,x=m*g-(b-p*h-m*h-p*g),S=ee*l,f=C*ee,p=f-(f-ee),m=ee-p,f=C*l,h=f-(f-l),g=l-h,E=m*g-(S-p*h-m*h-p*g),_=x-E,d=x-_,j[0]=x-(_+d)+(d-E),v=b+_,d=v-b,y=b-(v-d)+(_-d),_=y-S,d=y-_,j[1]=y-(_+d)+(d-S),M=v+_,d=M-v,j[2]=v-(M-d)+(_-d),j[3]=M;let re=w(ne,O,4,j,k);b=s*u,f=C*s,p=f-(f-s),m=s-p,f=C*u,h=f-(f-u),g=u-h,x=m*g-(b-p*h-m*h-p*g),S=c*l,f=C*c,p=f-(f-c),m=c-p,f=C*l,h=f-(f-l),g=l-h,E=m*g-(S-p*h-m*h-p*g),_=x-E,d=x-_,j[0]=x-(_+d)+(d-E),v=b+_,d=v-b,y=b-(v-d)+(_-d),_=y-S,d=y-_,j[1]=y-(_+d)+(d-S),M=v+_,d=M-v,j[2]=v-(M-d)+(_-d),j[3]=M;let ie=w(re,k,4,j,A);return A[ie-1]}function N(e,t,n,r,i,a){let o=(t-a)*(n-i),s=(e-i)*(r-a),c=o-s,l=Math.abs(o+s);return Math.abs(c)>=33306690738754716e-32*l?c:-M(e,t,n,r,i,a,l)}let P=(e,t)=>e.x*t.y-e.y*t.x,ee=(e,t)=>e.x*t.x+e.y*t.y,F=(e,t,n)=>{let r=N(e.x,e.y,t.x,t.y,n.x,n.y);return r>0?-1:+(r<0)},I=e=>Math.sqrt(ee(e,e)),te=(e,t,n)=>{let r={x:t.x-e.x,y:t.y-e.y},i={x:n.x-e.x,y:n.y-e.y};return P(i,r)/I(i)/I(r)},ne=(e,t,n)=>{let r={x:t.x-e.x,y:t.y-e.y},i={x:n.x-e.x,y:n.y-e.y};return ee(i,r)/I(i)/I(r)},re=(e,t,n)=>t.y===0?null:{x:e.x+t.x/t.y*(n-e.y),y:n},ie=(e,t,n)=>t.x===0?null:{x:n,y:e.y+t.y/t.x*(n-e.x)},L=(e,t,n,r)=>{if(t.x===0)return ie(n,r,e.x);if(r.x===0)return ie(e,t,n.x);if(t.y===0)return re(n,r,e.y);if(r.y===0)return re(e,t,n.y);let i=P(t,r);if(i==0)return null;let a={x:n.x-e.x,y:n.y-e.y},o=P(a,t)/i,s=P(a,r)/i,c=e.x+s*t.x,l=n.x+o*r.x,u=e.y+s*t.y,d=n.y+o*r.y;return{x:(c+l)/2,y:(u+d)/2}};class ae{static compare(e,t){let n=ae.comparePoints(e.point,t.point);return n===0?(e.point!==t.point&&e.link(t),e.isLeft===t.isLeft?R.compare(e.segment,t.segment):e.isLeft?1:-1):n}static comparePoints(e,t){return e.x<t.x?-1:e.x>t.x?1:e.y<t.y?-1:+(e.y>t.y)}constructor(e,t){e.events===void 0?e.events=[this]:e.events.push(this),this.point=e,this.isLeft=t}link(e){if(e.point===this.point)throw Error(`Tried to link already linked events`);let t=e.point.events;for(let e=0,n=t.length;e<n;e++){let n=t[e];this.point.events.push(n),n.point=this.point}this.checkForConsuming()}checkForConsuming(){let e=this.point.events.length;for(let t=0;t<e;t++){let n=this.point.events[t];if(n.segment.consumedBy===void 0)for(let r=t+1;r<e;r++){let e=this.point.events[r];e.consumedBy===void 0&&n.otherSE.point.events===e.otherSE.point.events&&n.segment.consume(e.segment)}}}getAvailableLinkedEvents(){let e=[];for(let t=0,n=this.point.events.length;t<n;t++){let n=this.point.events[t];n!==this&&!n.segment.ringOut&&n.segment.isInResult()&&e.push(n)}return e}getLeftmostComparator(e){let t=new Map,n=n=>{let r=n.otherSE;t.set(n,{sine:te(this.point,e.point,r.point),cosine:ne(this.point,e.point,r.point)})};return(e,r)=>{t.has(e)||n(e),t.has(r)||n(r);let{sine:i,cosine:a}=t.get(e),{sine:o,cosine:s}=t.get(r);return i>=0&&o>=0?a<s?1:a>s?-1:0:i<0&&o<0?a<s?-1:+(a>s):o<i?-1:+(o>i)}}}let oe=0;class R{static compare(e,t){let n=e.leftSE.point.x,r=t.leftSE.point.x,i=e.rightSE.point.x,a=t.rightSE.point.x;if(a<n)return 1;if(i<r)return-1;let o=e.leftSE.point.y,s=t.leftSE.point.y,c=e.rightSE.point.y,l=t.rightSE.point.y;if(n<r){if(s<o&&s<c)return 1;if(s>o&&s>c)return-1;let n=e.comparePoint(t.leftSE.point);if(n<0)return 1;if(n>0)return-1;let r=t.comparePoint(e.rightSE.point);return r===0?-1:r}if(n>r){if(o<s&&o<l)return-1;if(o>s&&o>l)return 1;let n=t.comparePoint(e.leftSE.point);if(n!==0)return n;let r=e.comparePoint(t.rightSE.point);return r<0?1:r>0?-1:1}if(o<s)return-1;if(o>s)return 1;if(i<a){let n=t.comparePoint(e.rightSE.point);if(n!==0)return n}if(i>a){let n=e.comparePoint(t.rightSE.point);if(n<0)return 1;if(n>0)return-1}if(i!==a){let e=c-o,t=i-n,u=l-s,d=a-r;if(e>t&&u<d)return 1;if(e<t&&u>d)return-1}return i>a?1:i<a||c<l?-1:c>l?1:e.id<t.id?-1:+(e.id>t.id)}constructor(e,t,n,r){this.id=++oe,this.leftSE=e,e.segment=this,e.otherSE=t,this.rightSE=t,t.segment=this,t.otherSE=e,this.rings=n,this.windings=r}static fromRing(e,t,n){let r,i,a,o=ae.comparePoints(e,t);if(o<0)r=e,i=t,a=1;else if(o>0)r=t,i=e,a=-1;else throw Error(`Tried to create degenerate segment at [${e.x}, ${e.y}]`);let s=new ae(r,!0),c=new ae(i,!1);return new R(s,c,[n],[a])}replaceRightSE(e){this.rightSE=e,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}bbox(){let e=this.leftSE.point.y,t=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:e<t?e:t},ur:{x:this.rightSE.point.x,y:e>t?e:t}}}vector(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}isAnEndpoint(e){return e.x===this.leftSE.point.x&&e.y===this.leftSE.point.y||e.x===this.rightSE.point.x&&e.y===this.rightSE.point.y}comparePoint(e){if(this.isAnEndpoint(e))return 0;let t=this.leftSE.point,n=this.rightSE.point,r=this.vector();if(t.x===n.x)return e.x===t.x?0:e.x<t.x?1:-1;let i=(e.y-t.y)/r.y,a=t.x+i*r.x;if(e.x===a)return 0;let o=(e.x-t.x)/r.x,s=t.y+o*r.y;return e.y===s?0:e.y<s?-1:1}getIntersection(e){let t=this.bbox(),n=e.bbox(),r=g(t,n);if(r===null)return null;let i=this.leftSE.point,a=this.rightSE.point,o=e.leftSE.point,s=e.rightSE.point,c=h(t,o)&&this.comparePoint(o)===0,l=h(n,i)&&e.comparePoint(i)===0,u=h(t,s)&&this.comparePoint(s)===0,d=h(n,a)&&e.comparePoint(a)===0;if(l&&c)return d&&!u?a:!d&&u?s:null;if(l)return u&&i.x===s.x&&i.y===s.y?null:i;if(c)return d&&a.x===o.x&&a.y===o.y?null:o;if(d&&u)return null;if(d)return a;if(u)return s;let f=L(i,this.vector(),o,e.vector());return f===null||!h(r,f)?null:S.round(f.x,f.y)}split(e){let t=[],n=e.events!==void 0,r=new ae(e,!0),i=new ae(e,!1),a=this.rightSE;this.replaceRightSE(i),t.push(i),t.push(r);let o=new R(r,a,this.rings.slice(),this.windings.slice());return ae.comparePoints(o.leftSE.point,o.rightSE.point)>0&&o.swapEvents(),ae.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),n&&(r.checkForConsuming(),i.checkForConsuming()),t}swapEvents(){let e=this.rightSE;this.rightSE=this.leftSE,this.leftSE=e,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(let e=0,t=this.windings.length;e<t;e++)this.windings[e]*=-1}consume(e){let t=this,n=e;for(;t.consumedBy;)t=t.consumedBy;for(;n.consumedBy;)n=n.consumedBy;let r=R.compare(t,n);if(r!==0){if(r>0){let e=t;t=n,n=e}if(t.prev===n){let e=t;t=n,n=e}for(let e=0,r=n.rings.length;e<r;e++){let r=n.rings[e],i=n.windings[e],a=t.rings.indexOf(r);a===-1?(t.rings.push(r),t.windings.push(i)):t.windings[a]+=i}n.rings=null,n.windings=null,n.consumedBy=t,n.leftSE.consumedBy=t.leftSE,n.rightSE.consumedBy=t.rightSE}}prevInResult(){return this._prevInResult===void 0&&(this._prevInResult=this.prev?this.prev.isInResult()?this.prev:this.prev.prevInResult():null),this._prevInResult}beforeState(){if(this._beforeState!==void 0)return this._beforeState;if(!this.prev)this._beforeState={rings:[],windings:[],multiPolys:[]};else{let e=this.prev.consumedBy||this.prev;this._beforeState=e.afterState()}return this._beforeState}afterState(){if(this._afterState!==void 0)return this._afterState;let e=this.beforeState();this._afterState={rings:e.rings.slice(0),windings:e.windings.slice(0),multiPolys:[]};let t=this._afterState.rings,n=this._afterState.windings,r=this._afterState.multiPolys;for(let e=0,r=this.rings.length;e<r;e++){let r=this.rings[e],i=this.windings[e],a=t.indexOf(r);a===-1?(t.push(r),n.push(i)):n[a]+=i}let i=[],a=[];for(let e=0,r=t.length;e<r;e++){if(n[e]===0)continue;let r=t[e],o=r.poly;if(a.indexOf(o)===-1){if(r.isExterior)i.push(o);else{a.indexOf(o)===-1&&a.push(o);let e=i.indexOf(r.poly);e!==-1&&i.splice(e,1)}}}for(let e=0,t=i.length;e<t;e++){let t=i[e].multiPoly;r.indexOf(t)===-1&&r.push(t)}return this._afterState}isInResult(){if(this.consumedBy)return!1;if(this._isInResult!==void 0)return this._isInResult;let e=this.beforeState().multiPolys,t=this.afterState().multiPolys;switch(H.type){case`union`:{let n=e.length===0,r=t.length===0;this._isInResult=n!==r;break}case`intersection`:{let n,r;e.length<t.length?(n=e.length,r=t.length):(n=t.length,r=e.length),this._isInResult=r===H.numMultiPolys&&n<r;break}case`xor`:{let n=Math.abs(e.length-t.length);this._isInResult=n%2==1;break}case`difference`:{let n=e=>e.length===1&&e[0].isSubject;this._isInResult=n(e)!==n(t);break}default:throw Error(`Unrecognized operation type found ${H.type}`)}return this._isInResult}}class se{constructor(e,t,n){if(!Array.isArray(e)||e.length===0||(this.poly=t,this.isExterior=n,this.segments=[],typeof e[0][0]!=`number`||typeof e[0][1]!=`number`))throw Error(`Input geometry is not a valid Polygon or MultiPolygon`);let r=S.round(e[0][0],e[0][1]);this.bbox={ll:{x:r.x,y:r.y},ur:{x:r.x,y:r.y}};let i=r;for(let t=1,n=e.length;t<n;t++){if(typeof e[t][0]!=`number`||typeof e[t][1]!=`number`)throw Error(`Input geometry is not a valid Polygon or MultiPolygon`);let n=S.round(e[t][0],e[t][1]);(n.x!==i.x||n.y!==i.y)&&(this.segments.push(R.fromRing(i,n,this)),n.x<this.bbox.ll.x&&(this.bbox.ll.x=n.x),n.y<this.bbox.ll.y&&(this.bbox.ll.y=n.y),n.x>this.bbox.ur.x&&(this.bbox.ur.x=n.x),n.y>this.bbox.ur.y&&(this.bbox.ur.y=n.y),i=n)}(r.x!==i.x||r.y!==i.y)&&this.segments.push(R.fromRing(i,r,this))}getSweepEvents(){let e=[];for(let t=0,n=this.segments.length;t<n;t++){let n=this.segments[t];e.push(n.leftSE),e.push(n.rightSE)}return e}}class ce{constructor(e,t){if(!Array.isArray(e))throw Error(`Input geometry is not a valid Polygon or MultiPolygon`);this.exteriorRing=new se(e[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(let t=1,n=e.length;t<n;t++){let n=new se(e[t],this,!1);n.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=n.bbox.ll.x),n.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=n.bbox.ll.y),n.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=n.bbox.ur.x),n.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=n.bbox.ur.y),this.interiorRings.push(n)}this.multiPoly=t}getSweepEvents(){let e=this.exteriorRing.getSweepEvents();for(let t=0,n=this.interiorRings.length;t<n;t++){let n=this.interiorRings[t].getSweepEvents();for(let t=0,r=n.length;t<r;t++)e.push(n[t])}return e}}class le{constructor(e,t){if(!Array.isArray(e))throw Error(`Input geometry is not a valid Polygon or MultiPolygon`);try{typeof e[0][0][0]==`number`&&(e=[e])}catch{}this.polys=[],this.bbox={ll:{x:1/0,y:1/0},ur:{x:-1/0,y:-1/0}};for(let t=0,n=e.length;t<n;t++){let n=new ce(e[t],this);n.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=n.bbox.ll.x),n.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=n.bbox.ll.y),n.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=n.bbox.ur.x),n.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=n.bbox.ur.y),this.polys.push(n)}this.isSubject=t}getSweepEvents(){let e=[];for(let t=0,n=this.polys.length;t<n;t++){let n=this.polys[t].getSweepEvents();for(let t=0,r=n.length;t<r;t++)e.push(n[t])}return e}}class z{static factory(e){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];if(!r.isInResult()||r.ringOut)continue;let i=null,a=r.leftSE,o=r.rightSE,s=[a],c=a.point,l=[];for(;i=a,a=o,s.push(a),a.point!==c;)for(;;){let e=a.getAvailableLinkedEvents();if(e.length===0){let e=s[0].point,t=s[s.length-1].point;throw Error(`Unable to complete output ring starting at [${e.x}, ${e.y}]. Last matching segment found ends at [${t.x}, ${t.y}].`)}if(e.length===1){o=e[0].otherSE;break}let n=null;for(let e=0,t=l.length;e<t;e++)if(l[e].point===a.point){n=e;break}if(n!==null){let e=l.splice(n)[0],r=s.splice(e.index);r.unshift(r[0].otherSE),t.push(new z(r.reverse()));continue}l.push({index:s.length,point:a.point});let r=a.getLeftmostComparator(i);o=e.sort(r)[0].otherSE;break}t.push(new z(s))}return t}constructor(e){this.events=e;for(let t=0,n=e.length;t<n;t++)e[t].segment.ringOut=this;this.poly=null}getGeom(){let e=this.events[0].point,t=[e];for(let n=1,r=this.events.length-1;n<r;n++){let r=this.events[n].point,i=this.events[n+1].point;F(r,e,i)!==0&&(t.push(r),e=r)}if(t.length===1)return null;let n=t[0],r=t[1];F(n,e,r)===0&&t.shift(),t.push(t[0]);let i=this.isExteriorRing()?1:-1,a=this.isExteriorRing()?0:t.length-1,o=this.isExteriorRing()?t.length:-1,s=[];for(let e=a;e!=o;e+=i)s.push([t[e].x,t[e].y]);return s}isExteriorRing(){if(this._isExteriorRing===void 0){let e=this.enclosingRing();this._isExteriorRing=!e||!e.isExteriorRing()}return this._isExteriorRing}enclosingRing(){return this._enclosingRing===void 0&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}_calcEnclosingRing(){let e=this.events[0];for(let t=1,n=this.events.length;t<n;t++){let n=this.events[t];ae.compare(e,n)>0&&(e=n)}let t=e.segment.prevInResult(),n=t?t.prevInResult():null;for(;;){if(!t)return null;if(!n)return t.ringOut;if(n.ringOut!==t.ringOut)return n.ringOut.enclosingRing()===t.ringOut?t.ringOut.enclosingRing():t.ringOut;t=n.prevInResult(),n=t?t.prevInResult():null}}}class B{constructor(e){this.exteriorRing=e,e.poly=this,this.interiorRings=[]}addInterior(e){this.interiorRings.push(e),e.poly=this}getGeom(){let e=[this.exteriorRing.getGeom()];if(e[0]===null)return null;for(let t=0,n=this.interiorRings.length;t<n;t++){let n=this.interiorRings[t].getGeom();n!==null&&e.push(n)}return e}}class V{constructor(e){this.rings=e,this.polys=this._composePolys(e)}getGeom(){let e=[];for(let t=0,n=this.polys.length;t<n;t++){let n=this.polys[t].getGeom();n!==null&&e.push(n)}return e}_composePolys(e){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];if(!r.poly){if(r.isExteriorRing())t.push(new B(r));else{let e=r.enclosingRing();e.poly||t.push(new B(e)),e.poly.addInterior(r)}}}return t}}class ue{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:R.compare;this.queue=e,this.tree=new c(t),this.segments=[]}process(e){let t=e.segment,n=[];if(e.consumedBy)return e.isLeft?this.queue.remove(e.otherSE):this.tree.remove(t),n;let r=e.isLeft?this.tree.add(t):this.tree.find(t);if(!r)throw Error(`Unable to find segment #${t.id} [${t.leftSE.point.x}, ${t.leftSE.point.y}] -> [${t.rightSE.point.x}, ${t.rightSE.point.y}] in SweepLine tree.`);let i=r,a=r,o,s;for(;o===void 0;)i=this.tree.prev(i),i===null?o=null:i.key.consumedBy===void 0&&(o=i.key);for(;s===void 0;)a=this.tree.next(a),a===null?s=null:a.key.consumedBy===void 0&&(s=a.key);if(e.isLeft){let r=null;if(o){let e=o.getIntersection(t);if(e!==null&&(t.isAnEndpoint(e)||(r=e),!o.isAnEndpoint(e))){let t=this._splitSafely(o,e);for(let e=0,r=t.length;e<r;e++)n.push(t[e])}}let i=null;if(s){let e=s.getIntersection(t);if(e!==null&&(t.isAnEndpoint(e)||(i=e),!s.isAnEndpoint(e))){let t=this._splitSafely(s,e);for(let e=0,r=t.length;e<r;e++)n.push(t[e])}}if(r!==null||i!==null){let e=null;e=r===null?i:i===null||ae.comparePoints(r,i)<=0?r:i,this.queue.remove(t.rightSE),n.push(t.rightSE);let a=t.split(e);for(let e=0,t=a.length;e<t;e++)n.push(a[e])}n.length>0?(this.tree.remove(t),n.push(e)):(this.segments.push(t),t.prev=o)}else{if(o&&s){let e=o.getIntersection(s);if(e!==null){if(!o.isAnEndpoint(e)){let t=this._splitSafely(o,e);for(let e=0,r=t.length;e<r;e++)n.push(t[e])}if(!s.isAnEndpoint(e)){let t=this._splitSafely(s,e);for(let e=0,r=t.length;e<r;e++)n.push(t[e])}}}this.tree.remove(t)}return n}_splitSafely(e,t){this.tree.remove(e);let n=e.rightSE;this.queue.remove(n);let r=e.split(t);return r.push(n),e.consumedBy===void 0&&this.tree.add(e),r}}let de=typeof process<`u`&&{}.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,fe=typeof process<`u`&&{}.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6;class pe{run(e,t,n){H.type=e,S.reset();let r=[new le(t,!0)];for(let e=0,t=n.length;e<t;e++)r.push(new le(n[e],!1));if(H.numMultiPolys=r.length,H.type===`difference`){let e=r[0],t=1;for(;t<r.length;)g(r[t].bbox,e.bbox)===null?r.splice(t,1):t++}if(H.type===`intersection`)for(let e=0,t=r.length;e<t;e++){let t=r[e];for(let n=e+1,i=r.length;n<i;n++)if(g(t.bbox,r[n].bbox)===null)return[]}let i=new c(ae.compare);for(let e=0,t=r.length;e<t;e++){let t=r[e].getSweepEvents();for(let e=0,n=t.length;e<n;e++)if(i.insert(t[e]),i.size>de)throw Error(`Infinite loop when putting segment endpoints in a priority queue (queue size too big).`)}let a=new ue(i),o=i.size,s=i.pop();for(;s;){let e=s.key;if(i.size===o){let t=e.segment;throw Error(`Unable to pop() ${e.isLeft?`left`:`right`} SweepEvent [${e.point.x}, ${e.point.y}] from segment #${t.id} [${t.leftSE.point.x}, ${t.leftSE.point.y}] -> [${t.rightSE.point.x}, ${t.rightSE.point.y}] from queue.`)}if(i.size>de)throw Error(`Infinite loop when passing sweep line over endpoints (queue size too big).`);if(a.segments.length>fe)throw Error(`Infinite loop when passing sweep line over endpoints (too many sweep line segments).`);let t=a.process(e);for(let e=0,n=t.length;e<n;e++){let n=t[e];n.consumedBy===void 0&&i.insert(n)}o=i.size,s=i.pop()}S.reset();let l=z.factory(a.segments);return new V(l).getGeom()}}let H=new pe;return{union:function(e){var t=[...arguments].slice(1);return H.run(`union`,e,t)},intersection:function(e){var t=[...arguments].slice(1);return H.run(`intersection`,e,t)},xor:function(e){var t=[...arguments].slice(1);return H.run(`xor`,e,t)},difference:function(e){var t=[...arguments].slice(1);return H.run(`difference`,e,t)}}}))})),Yc=St(Jc(),1),Xc=.045,Zc=1e-7,Qc=1e-6;function $c(e){return e.map(e=>{let t=[];for(let[n,r]of e){let e=[Math.round(n/Qc)*Qc,Math.round(r/Qc)*Qc],i=t[t.length-1];(!i||i[0]!==e[0]||i[1]!==e[1])&&t.push(e)}t.length>1&&t[0][0]===t[t.length-1][0]&&t[0][1]===t[t.length-1][1]&&t.pop();for(let e=t.length-2;e>0;e--){let n=t[e-1],r=t[e],i=t[e+1],a=r[0]-n[0],o=r[1]-n[1],s=i[0]-r[0],c=i[1]-r[1];Math.abs(a*c-o*s)<Qc*Math.hypot(a,o,s,c)&&a*s+o*c>0&&t.splice(e,1)}return t})}function el(e){if(e.length<2||e.some(([t,n],r)=>!Number.isFinite(t)||!Number.isFinite(n)||r>0&&n<=e[r-1][1]))throw Error(`Invalid fixed turnout detail path`)}function tl(e,t){let n=e.slice(1).map(([t,n],r)=>{let i=t-e[r][0],a=n-e[r][1],o=Math.hypot(i,a);return[a/o,-i/o]});return e.map(([e,r],i)=>{let a=n[Math.max(0,i-1)],o=n[Math.min(i,n.length-1)],s=1+a[0]*o[0]+a[1]*o[1];return[e+t*(a[0]+o[0])/s,r+t*(a[1]+o[1])/s]})}function nl(e,t,n){return $c([[...tl(e,t-n/2),...tl(e,t+n/2).reverse()]])}function rl(e,t){let n=0;for(;n<e.length-2&&e[n+1][1]<t;)n++;let r=Math.max(0,Math.min(1,(t-e[n][1])/(e[n+1][1]-e[n][1])));return[e[n][0]+r*(e[n+1][0]-e[n][0]),e[n][1]+r*(e[n+1][1]-e[n][1])]}function il(e,t,n){return[rl(e,t),...e.filter(([,e])=>e>t+Zc&&e<n-Zc).map(([e,t])=>[e,t]),rl(e,n)]}function al(e,t){let n;for(let r=1;r<e.length;r++)for(let i=1;i<t.length;i++){let a=e[r-1],o=t[i-1],s=e[r][0]-a[0],c=e[r][1]-a[1],l=t[i][0]-o[0],u=t[i][1]-o[1],d=s*u-c*l;if(Math.abs(d)<Zc)continue;let f=o[0]-a[0],p=o[1]-a[1],m=(f*u-p*l)/d,h=(f*c-p*s)/d;if(m<-1e-7||m>1.0000001||h<-1e-7||h>1.0000001)continue;let g=[a[0]+m*s,a[1]+m*c];g[1]>Zc&&(!n||g[1]<n[1])&&(n=g)}return n}function ol(e,t,n){let r=[],i=(e,t,n,i,a,o)=>r.push(e[0],t,e[1],n[0],i,n[1],a[0],o,a[1]);for(let r of e){let e=r.map(e=>{let t=e.slice(0,-1);for(let e=t.length-1;e>=0&&t.length>3;e--){let n=t[(e+t.length-1)%t.length],r=t[e],i=t[(e+1)%t.length],a=i[0]-n[0],o=i[1]-n[1],s=a*a+o*o,c=s?((r[0]-n[0])*a+(r[1]-n[1])*o)/s:-1;c>=0&&c<=1&&Math.hypot(r[0]-n[0]-c*a,r[1]-n[1]-c*o)<.001&&t.splice(e,1)}return t});if(e[0].length<3)continue;let a=e.flat(),o=he.triangulateShape(e[0].map(([e,t])=>new Y(e,t)),e.slice(1).map(e=>e.map(([e,t])=>new Y(e,t))));for(let[e,r,s]of o)i(a[s],n,a[r],n,a[e],n),i(a[e],t,a[r],t,a[s],t);for(let r of e)for(let e=0;e<r.length;e++){let a=r[e],o=r[(e+1)%r.length];i(a,t,o,n,a,n),i(a,t,o,t,o,n)}}let a=new De;return a.setAttribute(`position`,new dt(r,3)),a.computeVertexNormals(),a}function sl(e){let t=new _;t.name=`turnout-track-details`;let n=e.bladeLength??3.7,i=e.normalDetailPath??e.normalPath,a=e.branchDetailPath??e.branchPath;if(![n,e.railTop,e.gaugeHalf,e.branchAngle].every(Number.isFinite)||n<=0||e.gaugeHalf<=0)throw Error(`Invalid fixed turnout detail dimensions`);i&&el(i),a&&el(a);let o=e.detailExclusionPaths??[];for(let e of o)el(e);let s={steel:[],plate:[],timber:[]},c=$.headWidth*e.gaugeHalf/$.centerHalf/2,l=e.gaugeHalf/$.centerHalf,u=e.railTop-.32*l+.213*l,d={steel:new r({color:`#909a9c`,metalness:.72,roughness:.45}),plate:new r({color:`#424b4a`,metalness:.55,roughness:.8}),timber:new r({color:`#695e4c`,roughness:.95})},f=(e,t,n,r,i,a,o)=>{let c=new We(r,o-a,i).toNonIndexed();c.deleteAttribute(`uv`),c.translate(t,(o+a)/2,n),s[e].push(c)};for(let t of[.6,1.4,2.4,Math.min(n-.25,3.4)].filter((e,t,r)=>e>0&&e<n&&r.indexOf(e)===t)){let n=i?rl(i,t)[0]:0,r=a?rl(a,t)[0]:Math.tan(e.branchAngle)*t,o=Math.min(n,r)-e.gaugeHalf,c=Math.max(n,r)+e.gaugeHalf;f(`timber`,o-.37,t,.58,.16,u-.058,u-.018),f(`timber`,c+.37,t,.58,.16,u-.058,u-.018);for(let r of[-1,1]){let i=n+r*e.gaugeHalf;f(`plate`,i,t,.28,.16,u-.012,u);for(let e of[-.05,.05]){let n=new V(.022,.022,.023,6,1).toNonIndexed();n.deleteAttribute(`uv`),n.translate(i+r*.11,u+.0115,t+e),s.steel.push(n)}}}let p,m=0,h=0;if(i&&a){let t=Math.min(i[i.length-1][1],a[a.length-1][1]),r=rl(a,t)[0]-rl(i,t)[0],d=Math.sign(r);if(d){let r=tl(i,d*e.gaugeHalf),g=tl(a,-d*e.gaugeHalf);if(p=al(r,g),p){let _=[i,a,...o].flatMap(t=>[-e.gaugeHalf,e.gaugeHalf].map(e=>nl(t,e,c*2+Xc*2))),v=Yc.default.union(_).map($c),y=(t,n=e.railTop-.009)=>{let r=Yc.default.difference([$c(t)],v);return r.length&&s.steel.push(ol(r,n-.065,n)),r.length>0},b=Math.max(n+.15,p[1]-.7),x=Math.min(t,p[1]+.7);if(x>b+.2){for(let[t,n]of[[i,-d],[a,d]])y(nl(il(t,b,x),n*(e.gaugeHalf-c-Xc-.025),.05)),m++;if(p[1]>n+.15)for(let[t,n]of[[i,d],[a,-d]])y(nl(il(t,b,x),n*(e.gaugeHalf+c+Xc+.018),.036))}let S=Math.min(t,p[1]+1.15);if(p[1]>n+.15&&S>p[1]+.3){let t=rl(r,S),n=rl(g,S);y([[p,t,n]],e.railTop-.012)&&h++}f(`plate`,p[0],p[1],.6,.55,u-.012,u+.003*l)}}}let g=0;for(let e of[`timber`,`plate`,`steel`]){if(!s[e].length){d[e].dispose();continue}let n=pa(s[e],!1);for(let t of s[e])t.dispose();n.computeBoundingBox(),n.computeBoundingSphere();let r=new J(n,d[e]);r.name=`static-turnout-detail-`+e,r.castShadow=!1,r.receiveShadow=!1,t.add(r),g+=n.getAttribute(`position`).count/3}return t.userData.turnoutDetails={frog:p,triangleCount:g,meshCount:t.children.length,flangeGap:Xc,guardCount:m,noseCount:h,exclusionPathCount:o.length},t}function cl(e){let t=new De,n=[-.006,-.045,-e,.006,-.045,-e,-.006,.045,-e,.006,.045,-e,-.045,-.045,0,.045,-.045,0,-.045,.045,0,.045,.045,0];return t.setAttribute(`position`,new dt(n,3)),t.setIndex([2,3,7,2,7,6,0,5,1,0,4,5,0,2,6,0,6,4,1,5,7,1,7,3,0,1,3,0,3,2,4,6,7,4,7,5]),t.computeVertexNormals(),t}function ll(e,t){let n=0;for(;n<e.length-2&&e[n+1][1]<t;)n++;let[r,i]=e[n],[a,o]=e[n+1],s=a-r,c=o-i,l=Math.max(0,Math.min(1,(t-i)/c)),u=Math.hypot(s,c);return{x:r+l*s,z:t,nx:c/u,nz:-s/u}}function ul(e,t,n,r){let i=new De,a=new dt(new Float32Array(300),3);a.setUsage(ee),i.setAttribute(`position`,a);let o=[];for(let e=0;e<24;e++){let t=e*4,n=t+4;o.push(t+2,n+2,t+3,t+3,n+2,n+3,t,t+1,n,t+1,n+1,n,t,n,t+2,t+2,n,n+2,t+1,t+3,n+1,t+3,n+3,n+1)}o.push(0,2,1,1,2,3),o.push(96,97,98,97,99,98),i.setIndex(o);let s=Array.from({length:25},(n,r)=>ll(e,r===24?t:t*r/24)),c=$.headWidth*r/$.centerHalf/2;return{geometry:i,write:e=>{for(let t=0;t<=24;t++){let i=t/24,o=s[t],l=.006+(c-.006)*i,u=n*(r-e*((1-i)*(1-i)));for(let e=0;e<4;e++){let n=u+(e%2?l:-l);a.setXYZ(t*4+e,o.x+o.nx*n,e<2?-.09:0,o.z+o.nz*n)}}a.needsUpdate=!0,i.computeVertexNormals(),i.computeBoundingBox(),i.computeBoundingSphere()}}}function dl(e){let t=e.bladeLength??3.7;if(![e.x,e.z,e.heading,e.branchAngle,e.railTop,e.gaugeHalf,t].every(Number.isFinite)||e.gaugeHalf<=0||t<=0||e.hardwareOffset!==void 0&&(!Number.isFinite(e.hardwareOffset)||e.hardwareOffset<e.gaugeHalf+.35))throw Error(`Invalid turnout model coordinates`);let n=e.normalPath!==void 0||e.branchPath!==void 0,i=e.normalPath??[[0,0],[0,t]],a=e.branchPath??[[0,0],[Math.tan(e.branchAngle)*t,t]];for(let e of n?[i,a]:[])if(e.length<2||e[0][1]>0||e[e.length-1][1]<t||e.some(([t,n],r)=>!Number.isFinite(t)||!Number.isFinite(n)||r>0&&n<=e[r-1][1]))throw Error(`Invalid turnout centerline`);let o=ll(a,t).x-ll(i,t).x,s=n&&Math.abs(o)>1e-6?Math.sign(o):e.branchAngle<0?-1:1,l=Bc(e.duration),u=new _;u.name=`turnout-`+e.id,u.userData.turnoutId=e.id,u.userData.turnoutHeadMasks=qc(e),u.position.set(e.x,0,e.z),u.rotation.y=e.heading,u.add(sl(e));let d=new _;d.name=`turnout-fixed-hardware`,u.add(d);let f={steel:new r({color:`#bac6cd`,roughness:.5,metalness:.65}),dark:new r({color:`#34474e`,roughness:.75}),motor:new r({color:`#768e9d`,roughness:.65,metalness:.2}),white:new r({color:`#f1f4ed`,roughness:.7}),lamp:new r({color:`#6ed5a2`,emissive:`#6ed5a2`,emissiveIntensity:.85,toneMapped:!1})},p=(e,t,n,r,i,a,o,s,c=``)=>{let l=new J(new We(t,n,r),i);return l.position.set(a,o,s),l.name=c,l.castShadow=!1,l.receiveShadow=!0,e.add(l),l},m=e.motorSide??-s,h=e.hardwareOffset??Math.max(1.72,e.gaugeHalf+1.1),g=m*h,v=e.railTop-.02;p(d,.65,.18,.68,f.dark,g,v-.1,.55),p(d,.58,.26,.57,f.motor,g,v+.07,.55),p(d,.46,.025,.46,f.steel,g,v+.212,.55);for(let e of[.37,.73])p(d,.4,.022,.03,f.dark,g,v+.229,e);let y=Math.min(.075,e.gaugeHalf*.15),b=new q(`#4b5964`),x=new q(`#eaf1f4`),S=[-1,1].map(r=>{let o=n?ul(r===-s?a:i,t,r,e.gaugeHalf):void 0,c=f.steel.clone();c.roughness=.34;let l=new J(o?.geometry??cl(t),c);return l.name=`turnout-point-`+(r<0?`left`:`right`),o?l.position.set(0,e.railTop-.003,0):l.position.set(r*(e.gaugeHalf-y),e.railTop-.048,t),l.userData.turnoutBlade=!0,xs(l),l.receiveShadow=!0,u.add(l),{railSide:r,blade:l,curved:o,bladeMaterial:c}}),C=new _;C.name=`turnout-moving-linkage`,xs(C),u.add(C);let w=p(C,e.gaugeHalf*2+.34,.045,.075,f.dark,0,e.railTop-.14,.55,`turnout-tiebar`),T=p(C,Math.abs(g),.035,.045,f.steel,g/2,e.railTop-.115,.55,`turnout-actuator-rod`),E=new R(new V(.039,.039,.022,6),f.steel,2);E.name=`turnout-link-pins`,E.castShadow=!1,E.receiveShadow=!1;for(let[t,n]of[-1,1].entries())E.setMatrixAt(t,new c().makeTranslation(n*e.gaugeHalf*.55,e.railTop-.046,.55));E.instanceMatrix.needsUpdate=!0,C.add(E);let D=m*(e.hardwareOffset===void 0?Math.max(2.05,e.gaugeHalf+1.4):Math.max(h+.33,e.gaugeHalf+1.4)),O=e.railTop+1.25;p(d,.065,1.18,.065,f.dark,D,e.railTop+.59,1.25),p(d,.5,.62,.075,f.dark,D,O,1.25),p(d,.55,.055,.15,f.motor,D,O+.32,1.25);let k=new _;k.name=`turnout-direction-indicator`,k.position.set(D,O,1.25),xs(k),u.add(k);let A=[-1,1].map(e=>{let t=new _;t.name=`turnout-arrow-`+e,t.position.z=e*.044,p(t,.045,.32,.015,f.white,0,-.025,0);for(let e of[-1,1]){let n=p(t,.042,.16,.015,f.white,e*.049,.125,0);n.rotation.z=e*-Math.PI/4}return uc(t),k.add(t),{face:e,pointer:t}}),j=p(k,.095,.07,.1,f.lamp,0,-.25,0,`turnout-lock-indicator`);j.receiveShadow=!1;let M=Math.min(.18,e.gaugeHalf*.45),N=NaN,P=r=>{let i=s>0?r.position:1-r.position;if(r.position!==N)for(let{railSide:n,blade:a,curved:o,bladeMaterial:c}of S){let l=n===-s?r.position:1-r.position;if(c.color.copy(b).lerp(x,l),o){let t=l,n=$.headWidth*e.gaugeHalf/$.centerHalf/2;o.write(n+.006+M*(1-t))}else{let e=.04+M*(n<0?i:1-i);a.rotation.y=-Math.atan2(n*(y-e),t)}}N=r.position;let a=M*(n?.5-i:i-.5);w.position.x=a,E.position.x=a,T.position.x=g/2+a/2,T.scale.x=Math.max(.5,(Math.abs(g)-m*a)/Math.abs(g));for(let{face:e,pointer:t}of A)t.rotation.z=-e*s*Math.PI/4*r.position;f.lamp.color.set(r.locked?`#6ed5a2`:`#edb654`),f.lamp.emissive.copy(f.lamp.color),u.userData.turnoutState=r};return uc(d),P(l.read()),{root:u,read:l.read,ready:l.ready,update(e,t,n=!1){let r=l.update(e,t,n);return P(r),r},reset(e=!1){l.reset(e),P(l.read())}}}var fl=Object.freeze({entryX:-169.4,eastEntryX:-130.6,northRadius:19.4,commonX:-150,commonZ:-12,privateRadius:16,yardStartX:-134,westSwitchX:-123,storageSwitchX:-130,storageStraightX:-84,eastSwitchX:10,headshuntEndX:36,d1Z:-28,d2Z:-37,d3Z:-46,stopX:-13,storageStopX:26,storageEndX:34,centerX:-33,centerZ:-44,spawnX:-215,exitX:-205}),pl=Object.freeze({scale:.55,offsetX:119.35,offsetZ:-21.2}),ml={minX:-115,maxX:38,minZ:-71,maxZ:-23},hl={minX:-177,maxX:-119,minZ:-31,maxZ:10},gl={from:[-347,.065,-83],to:[-347,.065,-71],width:6},_l={red:`#f15d50`,yellow:`#f1b843`,green:`#64d293`,white:`#e6f1ea`};function vl(e=`main`,t=`M-B`,n=`post`){let i=new Ca(.78);i.root.name=`rail-signal-`+t;let a=e===`main`,o=a?6:2.4,s=a?[`red`,`yellow`,`green`]:[`red`,`white`];n===`post`&&(i.box(.66,.22,.66,`#b7bdb7`,0,.11,0),i.cylinder(.095,o-.5,`#839391`,0,(o-.5)/2+.2,0));let c=o-(a?.74:.49);i.box(.76,a?1.67:1.12,.31,`#263c41`,0,c,.06),i.box(.84,.065,.52,`#263c41`,0,o+.075,.16);let l=new _;l.name=`signal-light-emitter`,l.userData.railSignalEmitter=!0,l.visible=!1,xs(l),i.root.add(l);let u=new de({color:_l.red,transparent:!0,opacity:0,depthTest:!0,depthWrite:!1,blending:2,toneMapped:!1}),d=new J(new nt(.52,12,8),u);d.name=`signal-active-halo`,d.scale.z=.7,d.renderOrder=1,xs(d),l.add(d);let f=new de({color:_l.red,toneMapped:!1}),p=new J(new nt(.205,12,8),f);p.name=`signal-active-bulb`,xs(p),l.add(p);let m=new de({color:_l.red,transparent:!0,opacity:0,depthWrite:!1,side:2,blending:2,toneMapped:!1}),h=new V(.045,1.25,10,14,1,!0);h.rotateX(-Math.PI/2),h.translate(0,0,5);let g=new J(h,m);g.name=`signal-visible-beam`,g.renderOrder=2,xs(g),l.add(g);let v=new q(`#ffffff`),y=s.map((e,t)=>{let n=c+((s.length-1)/2-t)*.48,a=i.cylinder(.25,.1,`#1e3034`,0,n,.25);a.rotation.x=Math.PI/2,i.box(.51,.055,.37,`#263c41`,0,n+.245,.34);let o=new r({color:`#293b3a`,emissive:_l[e],emissiveIntensity:0,roughness:.32,metalness:.05,toneMapped:!1});o.userData.railSignalLens=e;let l=new J(new Ae(.205,14),o);return l.name=`signal-lens-`+e,l.position.set(0,n,.308),xs(l),i.root.add(l),{aspect:e,material:o,y:n}}),b=n===`gantry`?4.1:a?3.75:1.13;if(i.box(.82,.3,.06,`#eeeadd`,0,b,.16),i.label(t,.12,`#344b50`,0,b-.055,.198),a&&n===`post`){i.cylinder(.025,4.3,`#707f7d`,-.19,2.34,-.17),i.cylinder(.025,4.3,`#707f7d`,.19,2.34,-.17);for(let e=.5;e<4.5;e+=.36)i.box(.41,.035,.035,`#707f7d`,0,e,-.17)}let x,S={root:i.root,setAspect(e){let t=s.includes(e)?e:`red`;if(x!==t){x=t;for(let e of y){let n=e.aspect===t;e.material.color.set(n?_l[e.aspect]:`#293b3a`),e.material.emissiveIntensity=n?1.65:0,n&&(l.position.set(0,e.y,.4),g.rotation.x=Math.atan2(e.y-.32,12/.78),u.color.set(_l[e.aspect]),m.color.copy(u.color),f.color.copy(u.color).lerp(v,.28))}i.root.userData.signalAspect=t}}};return S.setAspect(`red`),fs(i.root),S}function yl(){let e=new Ca(.78),t=[-2.1,2.1].map((t,n)=>{let r=vl(`main`,`J`+(n+2),`gantry`);return r.root.position.set(t,0,0),e.root.add(r.root),r});for(let t of[-3.65,3.65])e.box(.28,6.75,.28,`#8b9794`,t,3.375,-.45),e.box(.62,.2,.62,`#b7bdb7`,t,.1,-.45);return e.box(7.6,.25,.32,`#8b9794`,0,6.55,-.45),e.root.name=`rail-signal-gantry`,uc(e.root),{root:e.root,setAspect(e){for(let n of t)n.setAspect(e)}}}var bl=Object.freeze({bridgeX:-150,bridgeStartZ:26,bridgeEndZ:84,bridgeWidth:6.4,commonStemZ:31.4,northClearZ:24,northHoldZ:33.4,southTurnZ:86,southRadius:16,northArrivalX:-169.8,northArrivalRadius:19.8,northDepartureX:-169.8,northDepartureRadius:19.8,northArrivalEastX:-130.2,northArrivalEastRadius:19.8,northDepartureEastX:-130.2,northDepartureEastRadius:19.8,westCrossoverStartX:-198,westCrossoverEndX:-178,p1Z:102,p2Z:112,westSwitchX:-122,westStraightX:-96,eastStraightX:-28,eastSwitchX:4,headshuntEndX:34,stopX:-5,spawnX:-215,exitX:-205,centerX:-55,centerZ:96}),xl=Object.freeze({minX:-166,maxX:38,minZ:79.5,maxZ:119}),Sl=Object.freeze({minX:-178,maxX:-122,minZ:12.5,maxZ:89.5}),Cl=Object.freeze([...[-84,-72,-60,-48,-36,-24].map(e=>({x:e,z:108.2,levels:2,shore:!1})),...[-120,-108,-96,-84,-12,0].map(e=>({x:e,z:83,levels:3,shore:e<-70})),{x:-132,z:83,levels:2,shore:!0}]),wl=[{id:`terminal-access`,from:[-128,.065,94],to:[32,.065,94],width:4.1},{id:`trailer-bays`,from:[-28,.065,88],to:[28,.065,88],width:3.2}],Tl=Object.freeze({westEntryX:-124,westSwitchX:-88,trackZ:22,headshuntEndX:36,stopX:26,spawnX:-215,exitX:-205,centerX:-10,centerZ:22}),El=Object.freeze({lot:{minX:53,maxX:116,minZ:82,maxZ:103},endX:55,frontStopX:62,tracksZ:[88,93,98],branchZ:88,radius:10,fanStartX:131,secondFanX:127.2,fanEndX:114,sidingRetreatX:-155,pickupTurnX:-205,sidingDeliveryX:-130}),Dl=bt({DEPOT_ACCESS_BLOCKS:()=>Pl,EAST_SECONDARY_BLOCKS:()=>jl,EAST_STATION_BLOCKS:()=>kl,PORT_ARRIVAL_BLOCKS:()=>Il,PORT_DEPARTURE_BLOCKS:()=>Ll,RAIL_FOULING:()=>Wl,SIDING_ACCESS_BLOCKS:()=>Fl,WEST_SECONDARY_BLOCKS:()=>Al,WEST_STATION_BLOCKS:()=>Ol,classicBlockLabel:()=>Gl,depotAccessBlocks:()=>Hl,portAccessBlocks:()=>Ul,stationApproachBlocks:()=>Ml,stationThroatBlocks:()=>Nl}),Ol=[`west-main`,`depot-junction`,`siding-junction`,`west-throat`],kl=[`east-throat`,`east-main`],Al=[`west-main-west`,`depot-junction-west`,`siding-junction-west`,`west-throat-west`],jl=[`east-throat-west`,`east-main-west`],Ml=(e,t)=>e>0?t===`west`?Al:jl:t===`west`?Ol:kl,Nl=e=>e===`west`?[`west-throat`,`west-throat-west`]:[`east-throat`,`east-throat-west`],Pl=[`west-main`,`depot-junction`],Fl=[`west-main-west`,`depot-junction-west`,`siding-junction-west`,`west-throat-west`],Il=[`west-main-west`,`depot-junction-west`],Ll=[`west-main`,`depot-junction`,`west-main-west`,`depot-junction-west`],Rl=[`east-main`,`east-throat`,`station-2`,`west-throat`,`siding-junction`],zl=[`siding-junction`,`west-throat`,`west-throat-west`,`station-3`,`east-throat-west`,`east-main-west`],Bl=[`east-main`,`east-throat`,`station-2`,`west-throat`,`west-throat-west`,`siding-junction-west`,`depot-junction-west`],Vl=[`siding-junction-west`,`west-throat-west`,`station-3`,`east-throat-west`,`east-main-west`],Hl=(e,t)=>e===`west`?Pl:t===`arrival`?Rl:zl,Ul=(e,t)=>e===`west`?t===`arrival`?Il:Ll:t===`arrival`?Bl:Vl,Wl=Object.freeze({westMainX:-180,depotClearX:-139,sidingClearX:-106,sidingMainClearX:-120,stationWestX:-79,stationWestThroatX:-127,stationEastX:49,eastMainX:120}),Gl=e=>e.startsWith(`station-`)?`jalur `+e.slice(8):e.includes(`throat`)?`wesel stasiun`:e.includes(`junction`)?`wesel cabang`:e===`port-yard`?`jalur pelabuhan`:e===`depot-yard`?`jalur depot BBM`:e===`siding-yard`?`jalur simpan gerbong`:e===`locomotive-depot-yard`?`jalur depo lokomotif`:`jalur utama`,Kl=`three-track-railway`,ql=[{id:`station`,role:`station`,moduleId:`three-track-station`},{id:`bbm`,role:`bbm`,moduleId:`bbm-yard`},{id:`port`,role:`port`,moduleId:`cargo-port`},{id:`siding`,role:`siding`,moduleId:`wagon-siding`},{id:`locomotiveDepot`,role:`locomotiveDepot`,moduleId:`locomotive-depot`}],Jl=[{role:`bbm`,stationConnector:`bbm-west`,connector:`rail-west`},{role:`bbm`,stationConnector:`bbm-east`,connector:`rail-east`},{role:`port`,stationConnector:`port-west`,connector:`rail-west`},{role:`port`,stationConnector:`port-east`,connector:`rail-east`},{role:`siding`,stationConnector:`siding`,connector:`rail-entry`},{role:`locomotiveDepot`,stationConnector:`locomotiveDepot`,connector:`rail-entry`}];function Yl(e){let t=e.find(e=>e.role===`station`);if(!t)throw Error(`Railway kit requires a station.`);return Jl.flatMap(n=>{let r=e.find(e=>e.role===n.role);return r?[{from:{facilityId:t.id,connectorId:n.stationConnector},to:{facilityId:r.id,connectorId:n.connector}}]:[]})}var Xl={"depot-yard":`bbm`,"port-yard":`port`,"siding-yard":`siding`,"locomotive-depot-yard":`locomotiveDepot`},Zl={"shunt.bbm":`bbm`,"shunt.port":`port`,"shunt.J4":`siding`,"shunt.loco":`locomotiveDepot`},Ql={"depot-common":`bbm`,"depot-west":`bbm`,"depot-east":`bbm`,"port-common":`port`,"port-west":`port`,"port-east":`port`,"port-crossover-west":`port`,"port-crossover-east":`port`,W4:`siding`,W1:`bbm`,"loco-yard-entry":`locomotiveDepot`,"loco-west-crossover-entry":`locomotiveDepot`,"loco-west-crossover-exit":`locomotiveDepot`},$l=[...new Set([...Ol,...Al,...kl,...jl,`station-1`,`station-2`,`station-3`,`depot-yard`,`port-yard`,`siding-yard`,`locomotive-depot-yard`])],eu=[`entry.west`,`entry.east`,...[1,2,3].flatMap(e=>[`exit.J${e}.east`,`exit.J${e}.west`]),`shunt.bbm`,`shunt.port`,`shunt.J4`,`shunt.loco`],tu={id:`riverside-network`,kitId:Kl,position:[0,0,0],rotationY:0,namespace:``,scenery:`riverside`,components:ql,connections:Yl(ql)},nu=.32*.7,ru=$.innerGap*.7;function iu(e,t){return{minX:e.minX-t[0],maxX:e.maxX-t[0],minZ:e.minZ-t[2],maxZ:e.maxZ-t[2]}}var au=[fl.centerX,0,fl.centerZ],ou=[bl.centerX,0,bl.centerZ],su=gl.from,cu={id:`bbm-yard`,referenceOrigin:au,footprints:[ml,hl].map(e=>iu(e,au)),connectors:[{id:`rail-west`,kind:`rail`,gauge:ru,position:[fl.entryX-fl.centerX,nu,fl.commonZ+fl.northRadius-fl.centerZ],direction:[-1,0,0]},{id:`rail-east`,kind:`rail`,gauge:ru,position:[fl.eastEntryX-fl.centerX,nu,fl.commonZ+fl.northRadius-fl.centerZ],direction:[1,0,0]},{id:`road-entry`,kind:`road`,width:gl.width*pl.scale,position:[su[0]*pl.scale+pl.offsetX-fl.centerX,su[1]*pl.scale,su[2]*pl.scale+pl.offsetZ-fl.centerZ],direction:[0,0,-1]}]},lu={id:`cargo-port`,referenceOrigin:ou,footprints:[xl,Sl].map(e=>iu(e,ou)),connectors:[{id:`rail-west`,kind:`rail`,gauge:ru,position:[bl.northArrivalX-bl.centerX,nu,bl.commonStemZ-bl.northArrivalRadius-bl.centerZ],direction:[-1,0,0]},{id:`rail-east`,kind:`rail`,gauge:ru,position:[bl.northArrivalEastX-bl.centerX,nu,bl.commonStemZ-bl.northArrivalEastRadius-bl.centerZ],direction:[1,0,0]},{id:`road-entry`,kind:`road`,width:wl[0].width,position:[wl[0].to[0]-bl.centerX,wl[0].to[1],wl[0].to[2]-bl.centerZ],direction:[1,0,0]}]},uu={id:`wagon-siding`,referenceOrigin:[Tl.centerX,0,Tl.centerZ],footprints:[{minX:-89-Tl.centerX,maxX:38-Tl.centerX,minZ:-4,maxZ:5}],connectors:[{id:`rail-entry`,kind:`rail`,gauge:ru,position:[Tl.westEntryX-Tl.centerX,nu,11.6-Tl.centerZ],direction:[-1,0,0]}]},du={id:`locomotive-depot`,referenceOrigin:[82,0,93],footprints:[iu(El.lot,[82,0,93]),iu({minX:114,maxX:148,minZ:84,maxZ:103},[82,0,93])],connectors:[{id:`rail-entry`,kind:`rail`,gauge:ru,position:[143.8-82,nu,El.branchZ-93],direction:[0,0,-1]}]},fu=[cu,lu,uu,du,{id:`three-track-station`,referenceOrigin:[0,0,0],footprints:[{minX:-118,maxX:46,minZ:-17.5,maxZ:18}],connectors:[{id:`rail-west`,kind:`rail`,gauge:ru,position:[-320,nu,11.6],direction:[-1,0,0]},{id:`rail-east`,kind:`rail`,gauge:ru,position:[143.8,nu,240],direction:[0,0,1]},{id:`bbm-west`,kind:`rail`,gauge:ru,position:[fl.entryX,nu,7.4],direction:[1,0,0]},{id:`bbm-east`,kind:`rail`,gauge:ru,position:[fl.eastEntryX,nu,7.4],direction:[-1,0,0]},{id:`port-west`,kind:`rail`,gauge:ru,position:[bl.northArrivalX,nu,11.6],direction:[1,0,0]},{id:`port-east`,kind:`rail`,gauge:ru,position:[bl.northArrivalEastX,nu,11.6],direction:[-1,0,0]},{id:`siding`,kind:`rail`,gauge:ru,position:[Tl.westEntryX,nu,11.6],direction:[1,0,0]},{id:`locomotiveDepot`,kind:`rail`,gauge:ru,position:[143.8,nu,El.branchZ],direction:[0,0,1]}]}],pu=e=>e.length===3&&e.every(Number.isFinite);function mu(e){if(!e.id.trim()||!e.moduleId.trim()||!pu(e.position)||!Number.isFinite(e.rotationY))throw Error(`Invalid facility placement: ${e.id}`)}function hu(e,t){let n=Math.cos(t.rotationY),r=Math.sin(t.rotationY);return[t.position[0]+n*e[0]+r*e[2],t.position[1]+e[1],t.position[2]-r*e[0]+n*e[2]]}function gu(e,t){let n=Math.cos(t),r=Math.sin(t);return[n*e[0]+r*e[2],e[1],-r*e[0]+n*e[2]]}function _u(e,t){let n=[[e.minX,0,e.minZ],[e.maxX,0,e.minZ],[e.maxX,0,e.maxZ],[e.minX,0,e.maxZ]].map(e=>hu(e,t));return{corners:n,bounds:{minX:Math.min(...n.map(e=>e[0])),maxX:Math.max(...n.map(e=>e[0])),minZ:Math.min(...n.map(e=>e[2])),maxZ:Math.max(...n.map(e=>e[2]))}}}function vu(e,t){for(let n of[e,t])for(let r=0;r<n.length;r++){let i=n[r],a=n[(r+1)%n.length],o=a[2]-i[2],s=i[0]-a[0],c=e=>e.map(e=>e[0]*o+e[2]*s),l=c(e),u=c(t),d=Math.hypot(o,s)*1e-6;if(Math.max(...l)<=Math.min(...u)+d||Math.max(...u)<=Math.min(...l)+d)return!1}return!0}function yu(e){if(e&&typeof e==`object`){for(let t of Object.values(e))yu(t);Object.freeze(e)}return e}function bu(e,t,n=[],r){let i=new Map;for(let t of e){if(!t.id.trim()||i.has(t.id)||!pu(t.referenceOrigin))throw Error(`Invalid or duplicate facility module: ${t.id}`);if(!t.footprints.length)throw Error(`Facility needs a footprint.`);for(let e of t.footprints)if(![e.minX,e.maxX,e.minZ,e.maxZ].every(Number.isFinite)||e.minX>=e.maxX||e.minZ>=e.maxZ)throw Error(`Invalid facility footprint.`);let e=new Set;for(let n of t.connectors){if(!n.id.trim()||n.kind!==`rail`&&n.kind!==`road`||e.has(n.id)||!pu(n.position)||!pu(n.direction)||Math.abs(Math.hypot(...n.direction)-1)>1e-6||Math.abs(n.direction[1])>1e-6||!Number.isFinite(n.kind===`rail`?n.gauge:n.width)||(n.kind===`rail`?n.gauge:n.width)<=0)throw Error(`Invalid facility connector: ${n.id}`);e.add(n.id)}i.set(t.id,yu(structuredClone(t)))}let a=new Map;function o(e){mu(e);let t=yu(structuredClone(e)),n=i.get(t.moduleId);if(!n)throw Error(`Unknown facility module: ${t.moduleId}`);let a=n.footprints.map(e=>_u(e,t)),o=n.connectors.map(e=>({...e,position:hu(e.position,t),direction:gu(e.direction,t.rotationY)}));if(r&&(a.some(({bounds:e})=>e.minX<r.minX||e.maxX>r.maxX||e.minZ<r.minZ||e.maxZ>r.maxZ)||o.some(e=>e.position[0]<r.minX||e.position[0]>r.maxX||e.position[1]<r.minY||e.position[1]>r.maxY||e.position[2]<r.minZ||e.position[2]>r.maxZ)))throw Error(`Facility outside simulation bounds: ${t.id}`);return yu({placement:t,definition:n,footprints:a,connectors:o})}for(let e of t){if(a.has(e.id))throw Error(`Duplicate facility: ${e.id}`);a.set(e.id,o(e))}let s=[...a.values()];for(let e=0;e<s.length;e++)for(let t=e+1;t<s.length;t++)if(s[e].footprints.some(e=>s[t].footprints.some(t=>vu(e.corners,t.corners))))throw Error(`Overlapping facility footprints: ${s[e].placement.id}, ${s[t].placement.id}`);let c=new Set,l=e=>{let t=JSON.stringify([e.facilityId,e.connectorId]);if(c.has(t))throw Error(`Facility connector connected more than once.`);let n=a.get(e.facilityId)?.connectors.find(t=>t.id===e.connectorId);if(!n)throw Error(`Unknown facility connector: ${t}`);return c.add(t),n};for(let e of n){if(e.from.facilityId===e.to.facilityId)throw Error(`Cannot connect a facility to itself.`);let t=l(e.from),n=l(e.to);if(t.kind!==n.kind||t.kind===`rail`&&n.kind===`rail`&&Math.abs(t.gauge-n.gauge)>1e-6||t.kind===`road`&&n.kind===`road`&&Math.abs(t.width-n.width)>1e-6)throw Error(`Incompatible facility connectors.`);if(Math.hypot(...t.position.map((e,t)=>e-n.position[t]))>1e-4||Math.hypot(...t.direction.map((e,t)=>e+n.direction[t]))>1e-4)throw Error(`Facility connectors must meet with opposite directions.`)}return{list:()=>[...a.values()],get(e){let t=a.get(e);if(!t)throw Error(`Unknown facility: ${e}`);return t}}}var xu=[{id:`bbm`,moduleId:cu.id,position:cu.referenceOrigin,rotationY:0},{id:`port`,moduleId:lu.id,position:lu.referenceOrigin,rotationY:0}];function Su(e=xu){let t=bu(fu,e);if(e.length!==xu.length)throw Error(`Riverside requires its BBM and port facilities.`);for(let e of xu){let n=t.get(e.id).placement;if(n.moduleId!==e.moduleId||n.rotationY!==0||n.position.some((t,n)=>t!==e.position[n]))throw Error(`Riverside facility relocation requires migrating its interlocking and public approaches.`)}return{bbm:t.get(`bbm`).placement,port:t.get(`port`).placement}}var Cu={minX:mc,maxX:180,minY:-4.5,maxY:24,minZ:-72,maxZ:120},wu={id:`riverside`,name:`Riverside`,runtimeKey:`riverside-railway`,bounds:Cu,railway:tu,facilities:xu,simulationBounds:{...Cu,minX:wc,maxZ:240},camera:{target:[0,1.5,5],direction:[1,1,1],distance:360,zoom:3.2,minZoom:1.4,maxZoom:14,far:1100,followZoom:10,framingBounds:Cu,focusPoints:{station:[bc.centerX,(bc.minZ+bc.maxZ)/2],depot:[-33,-44],siding:[-10,22],port:[-55,96],"locomotive-depot":[85,93]},focusAreas:[{region:`station`,bounds:bc,target:[bc.centerX,bc.centerZ],paddingX:22,paddingZ:14,innerX:4,strength:.5}]},rendering:{floorSize:900,gridSize:52},environment:{groundY:hc,lampPositions:[[-38,3.85,-1],[38,3.85,-1],[-35,3.85,16.1],[0,3.85,16.1],[35,3.85,16.1],[-36,3.85,-14.7],[8,3.85,-14.7],[35,3.85,-14.7],[40,3.85,34],[48,3.85,50],[40,3.85,66],[48,3.85,80]]},ambient:{riverAreas:[{minX:mc,maxX:180,minZ:30,maxZ:78}]}},Tu={...tu,id:`square-network`,namespace:`square`,position:[600,0,600],rotationY:Math.PI/2,scenery:`none`},Eu={minX:410,maxX:790,minY:-4.5,maxY:24,minZ:410,maxZ:790},Du={...wu,id:`square-example`,name:`Contoh Kotak`,runtimeKey:`railway-sandbox`,bounds:Eu,simulationBounds:{...Eu,minX:330,maxX:870,maxZ:940},railway:Tu,facilities:[],camera:{...wu.camera,target:[625,1.5,600],distance:400,zoom:3,framingBounds:Eu,focusAreas:[],focusPoints:{}},environment:{...wu.environment,lampPositions:wu.environment.lampPositions.map(e=>hu(e,{...Tu,moduleId:Tu.kitId}))},ambient:{riverAreas:[]}},Ou={approachX:210,centerX:-35,radius:50,lowerHeight:12,upperHeight:24,bridgeFromX:-45,bridgeToX:5,speed:5,wagons:6,bridgeBend:[0,.34],stations:{westToeX:-22,eastToeX:98,centerX:38,spacing:4.2,lowerHeight:14,upperHeight:22}};function ku(e){if(![e.approachX,e.centerX,e.radius,e.lowerHeight,e.upperHeight,e.bridgeFromX,e.bridgeToX,e.speed,e.wagons].every(Number.isFinite)||Math.abs(e.approachX-e.centerX)<150||e.radius<25||e.upperHeight<=e.lowerHeight||!e.bridgeBend&&(e.bridgeFromX<=Math.min(e.approachX,e.centerX)||e.bridgeToX>=Math.max(e.approachX,e.centerX))||e.bridgeFromX>=e.bridgeToX||e.speed<=0||!Number.isInteger(e.wagons)||e.wagons<1||e.wagons>8)throw Error(`Invalid mountain preview layout.`);if(e.stations){let t=e.stations;if(!Object.values(t).every(Number.isFinite)||t.westToeX<=e.centerX||t.eastToeX>=e.approachX||t.eastToeX-t.westToeX<115||t.spacing<4||t.centerX<=t.westToeX+40||t.centerX>=t.eastToeX-40||t.lowerHeight<=e.lowerHeight||t.upperHeight>=e.upperHeight||t.upperHeight<=t.lowerHeight)throw Error(`Invalid mountain passing station layout.`)}if(e.bridgeBend&&(e.bridgeBend.length!==2||!e.bridgeBend.every(Number.isFinite)||e.bridgeBend[0]<0||e.bridgeBend[1]>1||e.bridgeBend[0]>=e.bridgeBend[1]))throw Error(`Invalid mountain bridge span.`)}var Au={minX:-100,maxX:100,minZ:-100,maxZ:100,minY:-6,maxY:55},ju={...wu,id:`mini-station`,name:`Lintas Pegunungan`,runtimeKey:`mountain-preview`,railway:void 0,railPreview:Ou,bounds:Au,simulationBounds:{...Au,maxX:230},facilities:[],facilityLinks:[],elements:[],camera:{...wu.camera,target:[0,17,0],distance:300,zoom:2,minZoom:1.1,framingBounds:Au,focusPoints:{},focusAreas:[]},environment:{groundY:-5.9,lampPositions:[[8,17.55,58],[38,17.55,58],[72,17.55,58],[8,25.55,-58],[38,25.55,-58],[72,25.55,-58]]},ambient:{riverAreas:[]}};function Mu(e){if(e&&typeof e==`object`){for(let t of Object.values(e))Mu(t);Object.freeze(e)}return e}function Nu(e){if(!e.id.trim()||e.kitId!==`three-track-railway`||e.position.length!==3||![...e.position,e.rotationY].every(Number.isFinite)||![`riverside`,`none`].includes(e.scenery))throw Error(`Invalid railway assembly.`);let t=Mu(structuredClone({...e,connections:e.connections??Yl(e.components)})),n=new Set,r=new Set;for(let e of t.components){let t=ql.find(t=>t.role===e.role);if(!t||e.moduleId!==t.moduleId||!e.id.trim()||n.has(e.id)||r.has(e.role))throw Error(`Invalid, duplicate or incompatible railway component.`);n.add(e.id),r.add(e.role)}if(!r.has(`station`))throw Error(`Railway kit requires a station.`);if((r.has(`bbm`)||r.has(`siding`))&&!r.has(`locomotiveDepot`))throw Error(`BBM and J4 require a locomotive depot for transfer operations.`);let i=Object.fromEntries(ql.map(e=>[e.role,r.has(e.role)])),a=e=>[e.from,e.to].map(e=>JSON.stringify([e.facilityId,e.connectorId])).sort().join(`|`),o=Yl(t.components).map(a).sort(),s=t.connections.map(a).sort();if(JSON.stringify(o)!==JSON.stringify(s))throw Error(`Connections must match the selected modules and supported route kit joins.`);let c=(e,t)=>e.filter(e=>!t[e]||i[t[e]]),l=t.namespace??t.id,u=(e,t)=>{if(t&&Object.keys(t).some(t=>!e.includes(t)))throw Error(`Unknown railway binding role.`);let n=e.map(e=>[e,t?.[e]??(l?`${l}/${e}`:e)]);if(n.some(([,e])=>!e.trim())||new Set(n.map(([,e])=>e)).size!==n.length)throw Error(`Railway resource ids must be unique and nonempty.`);return Object.fromEntries(n)},d=Mu({assembly:t,enabled:i,blocks:u(c($l,Xl),t.blockIds),signals:u(c(eu,Zl),t.signalIds)});return Fu(d),d}function Pu(e){return Object.fromEntries(e.assembly.components.map(e=>{let t=fu.find(t=>t.id===e.moduleId);return[e.role,{id:e.id,moduleId:e.moduleId,position:t.referenceOrigin,rotationY:0}]}))}function Fu(e,t){let n=Pu(e),r={id:e.assembly.id,moduleId:e.assembly.kitId,position:e.assembly.position,rotationY:e.assembly.rotationY},i=Object.values(n).map(e=>({...e,position:hu(e.position,r),rotationY:r.rotationY})),a=new Set(e.assembly.connections.flatMap(e=>[e.from,e.to]).map(e=>JSON.stringify([e.facilityId,e.connectorId]))),o=e.assembly.components.find(e=>e.role===`station`);return bu(fu.map(e=>e.id===o.moduleId?{...e,connectors:e.connectors.filter(e=>e.id.startsWith(`rail-`)||a.has(JSON.stringify([o.id,e.id])))}:e),i,e.assembly.connections,t)}var Iu=e=>e.every(Number.isFinite);function Lu(e){if(!Iu([e.minX,e.maxX,e.minZ,e.maxZ])||e.minX>=e.maxX||e.minZ>=e.maxZ)throw Error(`Map bounds must have finite, positive dimensions.`)}function Ru(e){if(!e.id.trim()||!e.name.trim()||!e.runtimeKey.trim())throw Error(`Map id, name and runtime key are required.`);for(let t of[e.bounds,e.simulationBounds,e.camera.framingBounds])if(Lu(t),!Iu([t.minY,t.maxY])||t.minY>=t.maxY)throw Error(`Invalid map height bounds.`);let t=e.bounds,n=e.simulationBounds,r=e.camera;if(r.target.length!==3||r.direction.length!==3)throw Error(`Invalid camera point.`);if(n.minX>t.minX||n.maxX<t.maxX||n.minY>t.minY||n.maxY<t.maxY||n.minZ>t.minZ||n.maxZ<t.maxZ)throw Error(`Simulation bounds must contain the visible map.`);if(!Iu([...r.target,...r.direction,r.distance,r.zoom,r.minZoom,r.maxZoom,r.far,r.followZoom,e.rendering.floorSize,e.rendering.gridSize,e.environment.groundY])||Math.hypot(...r.direction)===0||r.distance<=0||r.minZoom<=0||r.maxZoom<r.minZoom||r.zoom<r.minZoom||r.zoom>r.maxZoom||r.followZoom<=0||r.far<=0||e.rendering.floorSize<=0||e.rendering.gridSize<=0)throw Error(`Invalid map camera or rendering profile.`);for(let e of r.focusAreas)if(Lu(e.bounds),!e.region||e.target.length!==2||!Iu([...e.target,e.paddingX,e.paddingZ,e.innerX,e.strength])||e.paddingX<=0||e.paddingZ<=0||e.innerX<0||e.innerX*2>e.bounds.maxX-e.bounds.minX||e.strength<0||e.strength>1)throw Error(`Invalid map focus area.`);for(let e of Object.values(r.focusPoints??{}))if(e.length!==2||!Iu(e))throw Error(`Invalid map focus point.`);for(let t of e.environment.lampPositions)if(t.length!==3||!Iu(t))throw Error(`Invalid map lamp.`);for(let t of e.ambient.riverAreas)Lu(t);if(e.railway&&Fu(Nu(e.railway),e.simulationBounds),e.railPreview){ku(e.railPreview);let t=e.railPreview;if((t.approachX<t.centerX?t.centerX+t.radius>e.bounds.maxX-5:t.centerX-t.radius<e.bounds.minX+5)||t.radius>Math.min(e.bounds.maxZ,-e.bounds.minZ)-5||t.approachX<e.simulationBounds.minX||t.approachX>e.simulationBounds.maxX||t.upperHeight+5>e.bounds.maxY)throw Error(`Mountain railway must fit map and approach bounds.`)}bu(fu,e.facilities??[],e.facilityLinks??[],e.simulationBounds);let i=new Set;for(let t of e.elements??[]){if(!t.id||i.has(t.id))throw Error(`Duplicate or empty map element id.`);if(i.add(t.id),!t.assetId||t.position.length!==3||!Iu([...t.position,t.rotationY]))throw Error(`Invalid map element: ${t.id}`)}}function zu(e){if(e&&typeof e==`object`){for(let t of Object.values(e))zu(t);Object.freeze(e)}return e}function Bu(e){let t=new Map;for(let n of e){if(Ru(n),t.has(n.id))throw Error(`Duplicate map: ${n.id}`);t.set(n.id,zu(structuredClone(n)))}return{list:()=>[...t.values()],get(e){let n=t.get(e);if(!n)throw Error(`Unknown map: ${e}`);return n}}}var Vu=Bu([wu,Du,ju]),Hu=`riverside`,Uu=Vu.get,Wu=Vu.list,Gu=()=>Uu(Hu);function Ku(e,t={lower:1,upper:1}){ku(e);let n=Object.freeze({...e}),r=n.approachX<n.centerX?1:-1,i=Math.abs(n.centerX-n.approachX),a=Math.PI*n.radius,s=i*2+a;class c extends o{constructor(){super(),this.arcLengthDivisions=4096}getPoint(e,o=new z){let c=X.clamp(e,0,1),l=c*s,u=X.lerp(n.lowerHeight,n.upperHeight,c),d=n.stations,f=(e,t)=>!d||t===1?0:d.spacing*X.smoothstep(e,d.westToeX,d.westToeX+15)*(1-X.smoothstep(e,d.eastToeX-15,d.eastToeX));if(l<i){let e=n.approachX+r*l;return d&&(u=X.lerp(d.lowerHeight,n.lowerHeight,X.smoothstep(e,d.eastToeX,n.approachX))),o.set(e,u,n.radius+f(e,t.lower))}if(l<=i+a){let e=(l-i)/n.radius;return d&&(u=X.lerp(d.lowerHeight,d.upperHeight,X.smoothstep(e,0,Math.PI))),o.set(n.centerX+r*n.radius*Math.sin(e),u,n.radius*Math.cos(e))}let p=n.centerX-r*(l-i-a);return d&&(u=X.lerp(d.upperHeight,n.upperHeight,X.smoothstep(p,d.eastToeX,n.approachX))),o.set(p,u,-n.radius-f(p,t.upper))}}let l=new c,u=l.getLength(),d=(e,t)=>l.getPointAt(X.clamp(e/u,0,1),t),f=(e,t)=>l.getTangentAt(X.clamp(e/u,0,1),t),p=e=>{let t=l.getLengths(),n=X.clamp(e,0,1)*(t.length-1),r=Math.floor(n);return X.lerp(t[r],t[Math.min(r+1,t.length-1)],n-r)},m=(e,t)=>p((e===`lower`?Math.abs(t-n.approachX):i+a+Math.abs(t-n.centerX))/s);return{layout:n,curve:l,length:u,at:d,tangent:f,stationDistance:m,bridgeRange:n.bridgeBend?n.bridgeBend.map(e=>p((i+a*e)/s)):[m(`upper`,n.bridgeToX),m(`upper`,n.bridgeFromX)]}}function qu(e){class t extends o{constructor(){super()}getPoint(t,n=new z){return e.curve.getPoint(1-t,n)}}let n=new t;return n.arcLengthDivisions=4096,{...e,curve:n,at:(t,n)=>e.at(e.length-t,n),tangent:(t,n)=>e.tangent(e.length-t,n).negate(),stationDistance:(t,n)=>e.length-e.stationDistance(t,n),bridgeRange:[e.length-e.bridgeRange[1],e.length-e.bridgeRange[0]]}}function Ju(){return{distance:0,frontDistance:0,rearDistance:0,position:new z,quaternion:new Xe,frontBogie:new z,rearBogie:new z,frontAnchor:new z,rearAnchor:new z,joint:new z}}function Yu(e,t){let n=t.map(Ju),r=Ju(),i=new z,a=new z,o=new z,s=new c,l=new z,u=new z(0,1,0),d=.56*zc,f=(t,n,r)=>{r.distance=t,r.frontDistance=t+n.bogieZ,e.at(r.frontDistance,r.frontBogie);let c=r.frontDistance-n.bogieZ*2.3,l=r.frontDistance;for(let t=0;t<20;t++){let t=(c+l)/2;e.at(t,r.rearBogie),r.frontBogie.distanceTo(r.rearBogie)>n.bogieZ*2?c=t:l=t}r.rearDistance=(c+l)/2,e.at(r.rearDistance,r.rearBogie),r.position.copy(r.frontBogie).add(r.rearBogie).multiplyScalar(.5),i.copy(r.frontBogie).sub(r.rearBogie).normalize(),a.crossVectors(u,i).normalize(),o.crossVectors(i,a).normalize(),r.quaternion.setFromRotationMatrix(s.makeBasis(a,o,i)),r.frontAnchor.set(0,.83*zc,n.couplerZ).applyQuaternion(r.quaternion).add(r.position),r.rearAnchor.set(0,.83*zc,-n.couplerZ).applyQuaternion(r.quaternion).add(r.position)};return a=>{for(let o=0;o<t.length;o++)if(!o)f(a,t[o],n[o]);else{let a=n[o-1],s=t[o-1].couplerZ+t[o].couplerZ,c=a.distance-(s+d*2)*1.4,u=a.distance-s*.8;for(let n=0;n<20;n++){let n=(c+u)/2;f(n,t[o],r),l.copy(a.rearAnchor).sub(r.frontAnchor),e.tangent(n,i),l.length()*Math.sign(l.dot(i))>d*2?c=n:u=n}f((c+u)/2,t[o],n[o]),n[o].joint.copy(a.rearAnchor).add(n[o].frontAnchor).multiplyScalar(.5)}return n}}function Xu(e,t,n=0,r=t.length){let i=new Ca(.9,e),a=new z,o=new z,s=(s,c,l,u,d)=>{let f=[],p=[],m=Math.ceil((r-n)/.6);for(let e=0;e<=m;e++){t.at(n+(r-n)*e/m,a),t.tangent(n+(r-n)*e/m,o);let i=Math.hypot(o.x,o.z),d=o.z/i,h=-o.x/i;for(let[e,t]of[[s-c/2,l],[s+c/2,l],[s-c/2,l-u],[s+c/2,l-u]])f.push(a.x+d*e,a.y+t,a.z+h*e);if(e<m){let t=e*4;p.push(t,t+4,t+1,t+1,t+4,t+5,t,t+2,t+4,t+2,t+6,t+4,t+1,t+5,t+3,t+3,t+5,t+7)}}let h=new De;h.setAttribute(`position`,new dt(f,3)),h.setIndex(p),h.computeVertexNormals();let g=new J(h,i.mat(d));g.castShadow=!0,g.receiveShadow=!0,e.add(g)};s(0,2.1,-.23,.12,`#88867b`);for(let e of[-1,1])s(e*$.centerHalf*zc,$.headWidth*zc,0,.07,`#a0a5a5`),s(e*$.centerHalf*zc,.024,-.07,.1,`#a0a5a5`);let l=Math.ceil((r-n)/.7),u=new R(new We($.sleeperLength*zc,.09,.15),i.mat(`#675f52`),l),d=new C,f=new z,p=new z,m=new z(0,1,0),h=new c;for(let e=0;e<l;e++){let i=n+(r-n)*e/l;t.at(i,a),t.tangent(i,o),f.crossVectors(m,o).normalize(),p.crossVectors(o,f).normalize(),d.position.copy(a),d.position.y-=.18,d.quaternion.setFromRotationMatrix(h.makeBasis(f,p,o)),d.updateMatrix(),u.setMatrixAt(e,d.matrix)}u.castShadow=!0,u.receiveShadow=!0,e.add(u)}function Zu(e,t){let n=new _;n.name=`mountain-passing-stations`;let r=e.layout.stations,i=Ku(e.layout,{lower:2,upper:1}),a=Ku(e.layout,{lower:1,upper:2}),o=new Map,s=new Map,c=new Ca(.85,n);for(let l of[`lower`,`upper`]){let u=l===`lower`?1:-1,d=l===`lower`?r.lowerHeight:r.upperHeight,f=u*e.layout.radius,p=l===`lower`?i:a;Xu(n,p,Math.min(p.stationDistance(l,r.westToeX),p.stationDistance(l,r.eastToeX)),Math.max(p.stationDistance(l,r.westToeX),p.stationDistance(l,r.eastToeX)));let m=new _;m.name=`mountain-station-${l}`,n.add(m);let h=c.box(100,.2,21,`#c7c5b6`,r.centerX,d-.45,f+u*11);h.name=`station-pad-${l}`;let g=Ic(t,90,1.25,u);g.position.set(r.centerX,d,f+u*r.spacing/2),m.add(g);let v=Lc(t,42,u<0);v.scale.z=.45,v.position.set(r.centerX,d,f+u*r.spacing/2),m.add(v);let y=Dc(t);y.scale.setScalar(.6),y.position.set(r.centerX,d-.3,f+u*12),m.add(y);for(let e of[8,38,72]){let n=jc(t,4);n.position.set(e,d,f+u*8),m.add(n)}let b=Mc(t,l===`lower`?`LEMBAH`:`BUKIT`);b.position.set(r.centerX,d,f+u*7),m.add(b);for(let e of[15,65]){let n=kc(t,u<0);n.position.set(e,d,f+u*8),m.add(n)}for(let e=0;e<4;e++){let n=Nc(t,[`#bd855d`,`#648c8b`][e%2]);n.scale.setScalar(.7),n.position.set(19+e*9,d+.45,f+u*r.spacing/2),m.add(n)}for(let t of[`west`,`east`]){let i=t===`west`?r.westToeX:r.eastToeX,a=(l===`lower`?1:-1)*(t===`west`?-1:1),s=dl(Kc({id:`${l}-${t}`,normal:{route:e.curve,distance:e.stationDistance(l,i),direction:a},branch:{route:p.curve,distance:p.stationDistance(l,i),direction:a},heading:t===`west`?Math.PI/2:-Math.PI/2,gaugeHalf:$.centerHalf*zc,railTop:d}));xs(s.root),n.add(s.root),o.set(`${l}-${t}`,s)}let x=vl(`main`,l===`lower`?`L`:`B`);x.root.position.set(r.westToeX+19,d,f+u*8),x.root.rotation.y=Math.PI/2,xs(x.root),n.add(x.root),s.set(l,x)}return{root:n,lowerLoop:i,upperLoop:a,update(e,t){let n=e.locks.occupied(`mountain-single`),r=e.actors.find(e=>e.id===n);for(let n of[`lower`,`upper`]){let i=e.locks.occupied(`${n}-east`),a=e.actors.find(e=>e.id===i);o.get(`${n}-east`).update(a?.origin===n,t);let c=r?.origin===n;o.get(`${n}-west`).update(c,t),s.get(n).setAspect(r?.origin===n&&o.get(`${n}-west`).ready(!0)?`green`:`red`)}},ready(e){return e.stage===`approach`?e.tailDistance>e.originTailClear||o.get(`${e.origin}-east`).ready(!0):e.stage===`mountain`?e.distance<e.destinationTailClear?o.get(`${e.origin}-west`).ready(!0)&&o.get(`${e.destination}-west`).ready(!1):!0:e.stage!==`exit`||o.get(`${e.destination}-east`).ready(!1)},reset(){for(let e of o.values())e.reset()}}}var Qu=(e,t)=>{let n=Math.imul(e,374761393)+Math.imul(t,668265263);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967295},$u=(e,t)=>{let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=i*i*(3-2*i),s=a*a*(3-2*a);return X.lerp(X.lerp(Qu(n,r),Qu(n+1,r),o),X.lerp(Qu(n,r+1),Qu(n+1,r+1),o),s)};function ed(e,t,n=1024){let r=e.getAttribute(`color`),i=new Float32Array(r.count*3),a=new q;for(let e=0;e<r.count;e++)a.fromBufferAttribute(r,e).convertLinearToSRGB(),i.set([a.r,a.g,a.b],e*3);let o=new Uint8Array(n*n*4),s=t+1;for(let e=0;e<n;e++)for(let r=0;r<n;r++){let a=Math.min(t-1e-8,r/(n-1)*t),c=Math.min(t-1e-8,(1-e/(n-1))*t),l=Math.floor(a),u=Math.floor(c),d=a-l,f=c-u,p=(u*s+l)*3,m=p+s*3,h=m+3,g=p+3,_=(e*n+r)*4,v=(.9+Qu(r,e)*.18)*(.91+$u(r/18,e/18)*.18);for(let e=0;e<3;e++){let t=X.lerp(i[p+e],i[g+e],d),n=X.lerp(i[m+e],i[h+e],d);o[_+e]=Math.min(255,Math.round(X.lerp(t,n,f)*v*255))}o[_+3]=255}let c=new ne(o,n,n,U);return c.name=`terrain-surface-grain`,c.colorSpace=fe,c.generateMipmaps=!0,c.minFilter=Je,c.magFilter=Me,c.anisotropy=4,c.needsUpdate=!0,c}var td=X.lerp,nd=X.smoothstep,rd=(e,t)=>{let n=Math.sin(e*127.1+t*311.7+73.2)*43758.5453;return n-Math.floor(n)};function id(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r;return td(td(rd(n,r),rd(n+1,r),i*i*(3-2*i)),td(rd(n,r+1),rd(n+1,r+1),i*i*(3-2*i)),a*a*(3-2*a))}function ad(e,t){return(id(e,t)*.55+id(e*2.07+17,t*2.07-8)*.28+id(e*4.19-23,t*4.19+31)*.17)*2-1}var od=e=>-59+4*Math.sin((e+20)*.027)+2.2*Math.sin(e*.079),sd=e=>.3+(100-e)*.006,cd=e=>1.65+.4*Math.sin(e*.087)+.25*id(e*.14,11)+2.6*Math.exp(-(((e-12)/14)**2));function ld(){let e=new De,t=[],n=[],i=[],a=new q;for(let e=0;e<=200;e++){let r=-100+e,o=od(r),s=cd(r);if(t.push(o-s,sd(r),r,o+s,sd(r),r),a.set(`#719399`).multiplyScalar(.93+.12*id(r*.12,4)),i.push(a.r,a.g,a.b,a.r,a.g,a.b),e<200){let t=e*2;n.push(t,t+1,t+2,t+1,t+3,t+2)}}e.setAttribute(`position`,new dt(t,3)),e.setAttribute(`color`,new dt(i,3)),e.setIndex(n),e.computeVertexNormals();let o=new J(e,new r({vertexColors:!0,roughness:.45,side:2}));return o.name=`mountain-river`,o}function ud(e){let t=e.layout.stations,n=new Map,r=[{path:e,from:0,to:e.length}];if(t)for(let n of[`lower`,`upper`]){let i=Ku(e.layout,{lower:n===`lower`?2:1,upper:n===`upper`?2:1}),a=[i.stationDistance(n,t.westToeX),i.stationDistance(n,t.eastToeX)].sort((e,t)=>e-t);r.push({path:i,from:a[0],to:a[1]})}for(let t of r){let r=Math.ceil((t.to-t.from)/1.6);for(let i=0;i<r;i++){let a=t.from+(t.to-t.from)*i/r,o=t.from+(t.to-t.from)*(i+1)/r,s=t.path.at(a,new z),c=t.path.at(o,new z),l={a:s,b:c,bridge:t.path===e&&a>e.bridgeRange[0]&&o<e.bridgeRange[1]};for(let e=Math.floor((Math.min(s.x,c.x)-12)/12);e<=Math.floor((Math.max(s.x,c.x)+12)/12);e++)for(let t=Math.floor((Math.min(s.z,c.z)-12)/12);t<=Math.floor((Math.max(s.z,c.z)+12)/12);t++){let r=`${e},${t}`,i=n.get(r)??[];i.push(l),n.set(r,i)}}}let i=(e,t,n,r,i,a,o,s)=>{let c=e-n,l=t-r,u=Math.cos(s),d=Math.sin(s),f=(c*u+l*d)/a,p=(-c*d+l*u)/o;return i*Math.exp(-(f*f+p*p)*1.25)},a=[[-31,-42,27,17],[-22,-23,30,19],[-10,-7,22,18],[9,5,13,15],[27,23,18,22],[53,28,11,22],[78,20,7,20]],o=(e,t)=>{let n=0;for(let r=0;r<a.length-1;r++){let i=a[r],o=a[r+1],s=o[0]-i[0],c=o[1]-i[1],l=X.clamp(((e-i[0])*s+(t-i[1])*c)/(s*s+c*c),0,1),u=Math.hypot(e-td(i[0],o[0],l),t-td(i[1],o[1],l))/td(i[3],o[3],l);n=Math.max(n,td(i[2],o[2],l)*Math.exp(-u*u*1.2))}return n},s=(e,t)=>{let n=e+ad(e*.015,t*.015)*7,r=t+ad(e*.017+48,t*.017-12)*6,a=1.8+o(n,r)+i(n,r,54,-9,12,16,30,-.5)+i(n,r,49,45,6,33,22,-.2)+i(n,r,-86,-35,22,14,23,.1)+i(n,r,-88,12,18,13,22,-.25)+i(n,r,-85,71,10,16,16,.3)+i(n,r,-70,-84,21,25,15,-.45)+i(n,r,-14,-89,14,21,11,.2)+i(n,r,32,-91,9,24,13,-.25);a+=9.5*nd(-t,38,76)*nd(e,-35,20),a+=ad(n*.046,r*.046)*1.8+ad(n*.13+7,r*.13-18)*.3;let s=nd(a,14,23)*(1-nd(n,8,30));a+=(ad(n*.17+10,r*.105-12)*1.6+(1-Math.abs(ad(n*.09,r*.12)))**8*1.2)*s,a-=5*Math.exp(-(((n+18)/16)**2+((r+25)/6)**2));let c=Math.max(0,1-Math.abs(ad(n*.07,r*.07)))**9;a-=c*1.4*nd(a,8,35),a-=7*Math.exp(-(((n-7)/10)**2+((r-4)/20)**2)),a-=6*Math.exp(-(((n-28)/16)**2+((r+10)/17)**2));let l=1-nd(Math.hypot((e-68)/1.3,t+25),8,23);a=td(a,5.4+ad(e*.07,t*.07)*.45,l*.8);let u=od(t),d=Math.abs(e-u),f=nd(d,Math.max(4,cd(t)+.8),19+2*Math.sin(t*.04));a=td(sd(t)-.1+Math.max(0,d-cd(t))*.035,a,f);let p=nd(e,-53,-40)*(1-nd(e,-10,24))*nd(a,4,12);for(let n of[-22,17,48]){let r=n+Math.sin((e+38)*.063+n*.04)*4+(e+38)*.19;a-=3.2*Math.exp(-(((t-r)/3.8)**2))*p}for(let n of[19,49]){let r=n+Math.sin(t*.055+n*.1)*3,i=nd(t,8,26)*(1-nd(t,48,61));a-=2*Math.exp(-(((e-r)/4.5)**2))*i}let m=(1-nd(Math.abs(e-39),21,50))*(1-nd(Math.abs(t-17),25,48))*nd(a,10,20),h=3.8,g=a/h,_=Math.floor(g),v=g-_,y=(_+v*v*(3-2*v))*h;return a=td(a,y,m*.55),Math.max(.2,a)};return{heightAt:(r,i)=>{let a=s(r,i),o=n.get(`${Math.floor(r/12)},${Math.floor(i/12)}`)??[],c=1/0,l=0,u=!1;for(let e of o){let t=e.b.x-e.a.x,n=e.b.z-e.a.z,a=t*t+n*n,o=X.clamp(((r-e.a.x)*t+(i-e.a.z)*n)/(a||1),0,1),s=e.a.x+t*o,d=e.a.z+n*o,f=(r-s)**2+(i-d)**2;f<c&&(c=f,l=td(e.a.y,e.b.y,o),u=e.bridge)}let d=Math.sqrt(c);if(u)a=Math.min(a,td(a,l-.55,1-nd(d,2.3,5)));else if(d<12){let e=l-.34,t=1-nd(d,1.7,e<a?8:6);a=td(a,e,t)}let f=Math.abs(r-od(i));if(i>0&&d<12&&f<4&&(a=Math.min(a,td(a,s(r,i),1-nd(f,2.5,4)))),t)for(let n of[1,-1]){let o=Math.max(Math.abs(r-t.centerX)-50,0),s=Math.max(Math.abs(i-n*(e.layout.radius+11))-10.5,0),c=1-nd(Math.hypot(o,s),0,11);a=td(a,(n===1?t.lowerHeight:t.upperHeight)-.38,c)}return a},rawHeight:s,riverX:od,corridorCells:n.size}}function dd(e,t=256){let n=ud(e),i=new _;i.name=`mountain-terrain-base`,i.userData.staticMapScenery=!0;let a=new H(200,200,t,t);a.rotateX(-Math.PI/2);let o=a.getAttribute(`position`),s=[],c=new q;for(let e=0;e<o.count;e++)o.setY(e,n.heightAt(o.getX(e),o.getZ(e)));a.computeVertexNormals();let l=a.getAttribute(`normal`),u=new q(`#a08e63`),d=new q(`#a29883`),f=new q(`#526d39`),p=new q(`#b0a471`);for(let e=0;e<o.count;e++){let t=o.getX(e),r=o.getZ(e),i=Math.hypot(l.getX(e),l.getZ(e))/Math.max(.02,l.getY(e)),a=nd(i+ad(t*.13,r*.13)*.18,.45,1.15),m=nd(i,.23,.9)*.4,h=1-nd(Math.abs(t-n.riverX(r)),5,24);c.set(`#748d46`).lerp(p,nd(ad(t*.055,r*.055),-.2,.55)*.7).lerp(f,h*.45).lerp(u,m).lerp(d,a);let g=1+Math.sin(o.getY(e)*2.1+t*.1+r*.08)*a*.065;c.multiplyScalar((.94+ad(t*.09,r*.09)*.12+id(t*.7,r*.7)*.05)*g),s.push(c.r,c.g,c.b)}a.setAttribute(`color`,new dt(s,3));let m=new r({map:ed(a,t),roughness:.96,flatShading:!1}),h=new J(a,m);h.name=`mountain-terrain`,h.castShadow=h.receiveShadow=!0,i.add(h);let g=[],v=[],y=[],b=[`#806b45`,`#735e41`,`#a18a60`,`#b7a478`,`#917c56`,`#ad966c`,`#bdac80`,`#958059`,`#ae956b`,`#b4a076`,`#8b7956`];for(let e of[-1,1])for(let r of[`x`,`z`]){let i=g.length/3;for(let a=0;a<=t;a++){let o=-100+a*200/t,s=r===`x`?o:e*100,l=r===`z`?o:e*100,u=n.heightAt(s,l);for(let e=0;e<=10;e++){let n=e/10,r=Math.sin(o*.04+e*.55)*Math.sin(n*Math.PI)*.022;if(g.push(s,td(u,-5.8,n+r),l),c.set(b[e]).multiplyScalar(.94+.09*id(s*.1,l*.1+e)),y.push(c.r,c.g,c.b),a<t&&e<10){let t=i+a*11+e,n=t+10+1;v.push(t,t+1,n,n,t+1,n+1)}}}}let x=new De;x.setAttribute(`position`,new dt(g,3)),x.setIndex(v),x.computeVertexNormals(),x.setAttribute(`color`,new dt(y,3));let S=new J(x,new r({vertexColors:!0,roughness:1,side:2}));return S.name=`mountain-terrain-skirt`,S.receiveShadow=!0,i.add(S),{root:i,...n,geometry:a,triangles:t*t*2}}function fd(e,t=`blue`,n={}){let r=new _;r.name=`mountain-preview-scenery`,r.userData.staticMapScenery=!0;let i=e.layout,a=new z,o=new z,s=i.stations?Zu(e,t):void 0;s&&r.add(s.root);let l=Array.from({length:401},(t,n)=>e.at(e.length*n/400,new z)),u=(t,n)=>{let r=1/0,i=0;for(let a=0;a<l.length;a++){let o=l[a],s=e.length*a/(l.length-1);if(s>Math.min(...e.bridgeRange)&&s<Math.max(...e.bridgeRange))continue;let c=(t-o.x)**2+(n-o.z)**2;c<r&&(r=c,i=o.y)}return{distance:Math.sqrt(r),height:i}},d=n.terrain??dd(e),f=d.heightAt;r.add(d.root);let p=new Ca(.95,r);d.riverX&&r.add(ld());let m=(t,n,i,s,c,l)=>{let u=[],d=[],f=Math.ceil(e.length/.8);for(let r=0;r<=f;r++){let c=e.length*r/f;e.at(c,a),e.tangent(c,o);let l=Math.hypot(o.x,o.z),p=o.z/l,m=-o.x/l;for(let[e,r]of[[t-n/2,i],[t+n/2,i],[t-n/2,i-s],[t+n/2,i-s]])u.push(a.x+p*e,a.y+r,a.z+m*e);if(r<f){let e=r*4;d.push(e,e+4,e+1,e+1,e+4,e+5,e+2,e+3,e+6,e+3,e+7,e+6,e,e+2,e+4,e+2,e+6,e+4,e+1,e+5,e+3,e+3,e+5,e+7)}}let p=new De;p.setAttribute(`position`,new dt(u,3)),p.setIndex(d),p.computeVertexNormals();let m=new J(p,c);m.name=l,m.receiveShadow=!0,m.castShadow=!0,r.add(m)};m(0,2.1,-.23,.12,p.mat(`#88867b`),`mountain-ballast`);let h=p.mat(`#a0a5a5`);for(let e of[-1,1])m(e*$.centerHalf*zc,$.headWidth*zc,0,.07,h,`mountain-rail-head`),m(e*$.centerHalf*zc,.024,-.07,.1,h,`mountain-rail-web`);let g=Math.ceil(e.length/.7),v=new We($.sleeperLength*zc,.09,.15),y=new R(v,p.mat(`#675f52`),g);y.name=`mountain-sleepers`;let b=new C,x=new z,S=new z,T=new c,E=new z(0,1,0);for(let t=0;t<g;t++)e.at(e.length*t/g,a),e.tangent(e.length*t/g,o),x.crossVectors(E,o).normalize(),S.crossVectors(o,x).normalize(),b.position.copy(a),b.position.y-=.18,b.quaternion.setFromRotationMatrix(T.makeBasis(x,S,o)),b.updateMatrix(),y.setMatrixAt(t,b.matrix);y.castShadow=!0,y.receiveShadow=!0,r.add(y);let[D,O]=e.bridgeRange.slice().sort((e,t)=>e-t),k=Math.ceil((O-D)/3),A=new z,j=new z,M=new z(0,0,1);for(let t=0;t<e.length;t+=1.5){if(e.at(t,A),e.at(t+1.5,j),!d.riverX||A.z<=0||Math.abs(A.x-d.riverX(A.z))>5.2)continue;let n=p.box(2.8,.55,A.distanceTo(j)+.08,`#92958d`,(A.x+j.x)/2,(A.y+j.y)/2-.57,(A.z+j.z)/2);n.name=`mountain-culvert`,n.quaternion.setFromUnitVectors(M,new z().subVectors(j,A).normalize())}for(let t=0;t<k;t++){e.at(D+(O-D)*t/k,A),e.at(D+(O-D)*(t+1)/k,j);let n=p.box(3.1,.6,A.distanceTo(j)+.08,`#8c9694`,(A.x+j.x)/2,(A.y+j.y)/2-.6,(A.z+j.z)/2);n.name=`mountain-bridge`,n.quaternion.setFromUnitVectors(M,new z().subVectors(j,A).normalize());let r=new z().subVectors(j,A).normalize(),i=new z(r.z,0,-r.x).normalize();for(let e of[-1,1]){let t=A.clone().addScaledVector(i,e*1.4),n=j.clone().addScaledVector(i,e*1.4);t.y+=.8,n.y+=.8,p.beam(t,n,.055,`#697b79`),p.box(.1,1.1,.1,`#697b79`,t.x,A.y+.28,t.z)}if(t%3==1){let e=(A.x+j.x)/2,t=(A.z+j.z)/2,n=(A.y+j.y)/2-.9,r=Math.min(f(e,t),n-.5);p.box(1.7,n-r,2,`#89918e`,e,(n+r)/2,t)}}if(n.trees!==!1){let e=[];for(let t=0;t<160;t++){let n=-93+t*53.73%186,r=-93+t*97.31%186,a=f(n,r);u(n,r).distance<8||Math.abs(n+60)<15||a<2||i.stations&&n>-15&&n<95&&Math.abs(Math.abs(r)-i.radius)<24||e.push(new z(n,a,r))}let t=new R(new V(.16,.22,3,5),p.mat(`#796d51`),e.length),n=new R(new w(1,0),Sa(p.mat(`#4f7651`),`grass`),e.length);for(let r=0;r<e.length;r++){b.quaternion.identity(),b.position.copy(e[r]),b.position.y+=1.4,b.scale.set(1,1,1),b.updateMatrix(),t.setMatrixAt(r,b.matrix),b.position.y+=2;let i=1.7+r%4*.3;b.scale.set(i,i*1.15,i),b.rotation.y=r*1.3,b.updateMatrix(),n.setMatrixAt(r,b.matrix)}t.castShadow=!0,n.castShadow=!0,r.add(t,n)}return ws(r,64),r.userData.mountainPreview={heightAt:f,bridgeRange:[i.bridgeFromX,i.bridgeToX]},{root:r,terrainHeight:f,stations:s,prepare:d.prepare}}var pd={resolution:129,heights:[2947,2947,2947,2947,2947,2947,2947,2947,2947,2948,2950,2951,2952,2956,2960,2968,2981,2995,3005,3014,3023,3034,3045,3055,3065,3073,3081,3082,3064,3043,3020,2978,2925,2887,2857,2815,2763,2720,2677,2636,2609,2587,2568,2543,2519,2496,2479,2466,2452,2435,2419,2405,2391,2376,2361,2348,2335,2324,2314,2309,2304,2298,2293,2289,2287,2286,2276,2268,2259,2254,2253,2254,2255,2257,2258,2255,2252,2249,2246,2247,2249,2255,2262,2277,2292,2313,2333,2354,2381,2409,2434,2454,2484,2521,2569,2621,2680,2732,2781,2844,2905,2956,3006,3048,3072,3091,3118,3150,3172,3191,3216,3251,3289,3320,3345,3369,3394,3417,3434,3444,3447,3446,3444,3442,3441,3440,3440,3439,3439,2949,2949,2949,2949,2949,2949,2949,2949,2947,2949,2950,2951,2952,2958,2962,2971,2980,2995,3008,3016,3023,3031,3040,3050,3062,3072,3079,3069,3049,3021,2998,2958,2911,2878,2840,2787,2742,2698,2662,2629,2603,2577,2553,2535,2511,2489,2473,2457,2443,2428,2412,2395,2381,2371,2356,2340,2331,2321,2312,2300,2296,2291,2286,2279,2278,2281,2276,2264,2257,2252,2246,2249,2250,2251,2254,2256,2250,2248,2247,2248,2252,2259,2267,2283,2298,2315,2334,2356,2377,2399,2424,2453,2485,2517,2559,2607,2660,2711,2771,2832,2898,2953,2998,3043,3061,3084,3102,3129,3150,3162,3193,3225,3265,3298,3323,3347,3376,3404,3423,3438,3444,3444,3444,3442,3441,3440,3440,3439,3439,2950,2950,2950,2950,2950,2951,2951,2950,2948,2949,2950,2951,2952,2959,2965,2973,2981,2991,3005,3017,3027,3038,3045,3049,3060,3069,3078,3060,3026,2996,2967,2947,2907,2862,2804,2769,2725,2692,2659,2625,2599,2574,2548,2524,2503,2483,2465,2450,2436,2416,2405,2390,2376,2355,2347,2338,2327,2315,2304,2294,2284,2275,2271,2270,2261,2264,2264,2260,2253,2246,2231,2240,2240,2241,2250,2250,2248,2246,2248,2252,2256,2262,2273,2288,2303,2317,2334,2355,2379,2399,2422,2447,2479,2512,2551,2595,2651,2708,2781,2835,2880,2925,2972,2991,3027,3040,3051,3077,3094,3120,3151,3186,3223,3246,3276,3315,3346,3372,3398,3427,3443,3442,3442,3442,3441,3439,3439,3439,3439,2951,2951,2951,2953,2954,2953,2952,2950,2948,2949,2950,2951,2953,2959,2964,2970,2980,2996,3004,3014,3025,3039,3054,3058,3061,3065,3064,3053,3020,2981,2942,2919,2895,2853,2802,2761,2724,2692,2658,2625,2597,2572,2546,2522,2500,2479,2455,2441,2425,2409,2394,2381,2365,2351,2333,2320,2314,2305,2300,2287,2267,2251,2250,2247,2227,2239,2244,2238,2239,2241,2234,2222,2221,2242,2246,2241,2237,2236,2244,2249,2248,2249,2259,2271,2291,2310,2329,2343,2372,2396,2419,2442,2470,2498,2534,2577,2621,2667,2723,2772,2823,2884,2930,2943,2962,2968,2981,3024,3071,3125,3166,3206,3237,3276,3312,3335,3373,3395,3416,3429,3442,3441,3441,3440,3439,3439,3438,3437,3439,2953,2954,2956,2956,2955,2954,2953,2950,2948,2949,2950,2952,2953,2959,2963,2967,2979,2992,3010,3019,3027,3041,3051,3056,3058,3047,3044,3043,3029,2985,2946,2916,2887,2837,2803,2766,2728,2692,2656,2625,2596,2570,2544,2519,2497,2474,2449,2425,2413,2396,2383,2367,2352,2342,2328,2309,2287,2284,2278,2280,2271,2250,2207,2218,2209,2204,2218,2208,2211,2222,2222,2182,2220,2236,2242,2232,2219,2220,2231,2227,2234,2226,2240,2248,2268,2286,2310,2334,2355,2377,2394,2434,2465,2493,2527,2560,2597,2637,2683,2733,2785,2840,2865,2888,2894,2953,3011,3056,3096,3137,3173,3208,3243,3276,3307,3345,3378,3400,3419,3435,3439,3439,3438,3437,3437,3433,3435,3438,3440,2957,2958,2958,2957,2956,2955,2953,2951,2948,2949,2951,2952,2953,2958,2962,2966,2976,2989,3009,3026,3033,3039,3048,3053,3051,3036,3028,3026,3e3,2954,2924,2894,2880,2849,2807,2767,2727,2691,2655,2626,2600,2571,2546,2516,2493,2469,2447,2424,2403,2373,2366,2352,2339,2323,2309,2295,2283,2261,2250,2258,2251,2244,2218,2168,2185,2155,2183,2171,2185,2196,2200,2164,2211,2227,2234,2214,2177,2199,2210,2196,2195,2188,2208,2219,2239,2265,2280,2290,2311,2350,2385,2418,2453,2487,2520,2553,2586,2620,2658,2700,2737,2780,2811,2846,2888,2933,2985,3035,3082,3118,3151,3199,3237,3276,3310,3341,3368,3391,3414,3430,3436,3436,3435,3434,3435,3423,3430,3434,3439,2961,2960,2959,2958,2957,2956,2953,2951,2948,2950,2951,2952,2953,2956,2958,2965,2974,2988,3001,3016,3028,3038,3044,3046,3043,3030,2984,3001,2982,2929,2881,2861,2840,2822,2788,2747,2711,2676,2646,2618,2599,2573,2546,2520,2500,2476,2451,2427,2401,2378,2353,2319,2316,2303,2290,2272,2242,2251,2192,2227,2218,2217,2213,2184,2130,2118,2142,2135,2156,2168,2169,2136,2194,2218,2223,2202,2145,2158,2175,2178,2155,2154,2159,2187,2212,2218,2234,2290,2327,2359,2395,2424,2460,2500,2535,2568,2607,2637,2678,2701,2731,2765,2813,2874,2928,2978,3017,3056,3088,3129,3172,3210,3241,3264,3287,3321,3354,3384,3410,3427,3433,3430,3428,3422,3424,3418,3416,3430,3438,2962,2961,2960,2959,2958,2956,2953,2950,2947,2947,2949,2950,2951,2953,2956,2963,2972,2988,3005,3020,3028,3032,3030,3032,3033,3024,2997,2937,2915,2896,2863,2821,2791,2777,2751,2720,2685,2650,2626,2597,2574,2553,2532,2507,2483,2466,2446,2426,2396,2373,2356,2328,2300,2269,2260,2253,2207,2219,2186,2173,2173,2149,2172,2165,2147,2086,2090,2098,2125,2135,2104,2127,2182,2207,2204,2187,2142,2109,2131,2136,2116,2116,2141,2149,2165,2189,2234,2270,2314,2354,2397,2439,2487,2533,2566,2600,2635,2680,2720,2745,2787,2804,2819,2849,2897,2944,2982,3022,3057,3096,3132,3170,3216,3265,3307,3329,3361,3388,3406,3424,3428,3420,3418,3412,3408,3406,3407,3426,3434,2963,2962,2961,2960,2958,2955,2951,2947,2946,2945,2946,2947,2948,2949,2954,2962,2970,2983,2996,3005,3013,3015,3014,3018,3023,3027,3007,2980,2933,2874,2837,2797,2764,2735,2708,2684,2660,2636,2605,2581,2556,2533,2510,2488,2468,2448,2424,2404,2385,2364,2349,2329,2306,2275,2237,2209,2201,2168,2148,2121,2113,2095,2120,2124,2126,2088,2023,2059,2083,2085,2047,2129,2173,2186,2181,2162,2136,2055,2064,2081,2070,2086,2097,2110,2144,2185,2228,2275,2311,2353,2398,2452,2522,2604,2644,2674,2697,2741,2779,2808,2851,2880,2866,2906,2928,2955,2994,3042,3078,3120,3165,3205,3256,3285,3304,3335,3360,3385,3408,3418,3422,3413,3407,3404,3378,3383,3393,3411,3428,2962,2961,2959,2958,2955,2952,2949,2946,2943,2933,2943,2945,2945,2946,2953,2958,2963,2971,2984,2990,2998,2999,3003,3007,3022,3030,3032,3005,2963,2915,2871,2815,2763,2724,2695,2670,2645,2620,2594,2569,2545,2522,2499,2476,2454,2431,2409,2391,2373,2354,2336,2318,2292,2269,2239,2215,2175,2147,2132,2116,2075,2054,2042,2050,2067,2061,1997,2004,2033,1998,2054,2110,2130,2143,2158,2122,2100,2039,2016,2029,2036,2042,2066,2096,2136,2175,2218,2263,2308,2353,2406,2478,2582,2684,2750,2772,2789,2806,2843,2872,2870,2933,2933,2957,2982,3008,3037,3066,3102,3140,3183,3228,3270,3310,3336,3354,3373,3392,3407,3402,3400,3400,3391,3375,3347,3342,3383,3404,3420,2960,2959,2958,2955,2952,2950,2946,2941,2936,2921,2936,2941,2941,2944,2947,2951,2956,2963,2973,2978,2983,2987,2998,3009,3021,3032,3038,3004,2964,2929,2889,2821,2764,2719,2682,2658,2633,2607,2583,2558,2534,2513,2492,2471,2451,2428,2406,2384,2363,2340,2321,2293,2269,2245,2227,2202,2192,2194,2186,2158,2101,2074,2034,2e3,1982,1980,1964,1953,1979,1947,2012,2048,2059,2100,2116,2101,2064,2022,1972,1979,1992,2016,2048,2103,2149,2187,2226,2270,2308,2362,2425,2500,2598,2712,2783,2789,2788,2844,2882,2908,2937,2946,2986,3008,3024,3040,3055,3071,3090,3124,3169,3203,3252,3308,3344,3363,3381,3390,3397,3379,3373,3377,3378,3332,3324,3349,3366,3389,3411,2959,2958,2955,2952,2949,2947,2938,2939,2926,2900,2920,2933,2929,2938,2940,2945,2949,2957,2963,2967,2978,2989,3e3,3010,3020,3034,3032,2991,2934,2893,2857,2822,2778,2733,2689,2645,2621,2598,2575,2553,2530,2509,2489,2469,2449,2426,2407,2385,2367,2350,2335,2316,2292,2264,2228,2233,2226,2229,2220,2157,2164,2129,2086,2014,1983,1948,1925,1917,1914,1912,1941,1958,1990,2029,2070,2050,2022,1976,1938,1947,1969,2004,2046,2106,2144,2184,2223,2264,2306,2358,2426,2502,2584,2666,2702,2693,2731,2806,2870,2926,2959,2980,3003,3023,3018,3010,3006,3023,3055,3095,3149,3198,3246,3281,3317,3346,3362,3376,3377,3356,3334,3344,3357,3321,3284,3333,3349,3372,3399,2957,2955,2953,2951,2948,2945,2937,2924,2926,2916,2889,2918,2891,2927,2923,2916,2927,2940,2960,2969,2980,2991,3002,3017,3025,3039,3005,2960,2916,2880,2843,2801,2762,2728,2690,2659,2628,2597,2574,2550,2526,2506,2487,2467,2446,2427,2408,2390,2372,2353,2333,2312,2283,2262,2265,2268,2251,2261,2240,2225,2213,2180,2128,2066,2007,1958,1932,1896,1877,1878,1874,1892,1930,1972,2009,2005,1965,1922,1906,1924,1962,2017,2077,2121,2154,2186,2218,2258,2303,2355,2437,2493,2539,2591,2594,2595,2678,2736,2814,2892,2955,2981,2993,2997,2972,2946,2929,2982,3048,3102,3160,3203,3233,3256,3293,3304,3324,3359,3356,3317,3294,3311,3318,3275,3271,3320,3323,3353,3384,2959,2956,2954,2952,2949,2945,2940,2933,2908,2867,2863,2902,2862,2867,2890,2934,2946,2955,2957,2971,2983,2994,3006,3020,3034,3042,3016,2985,2947,2912,2868,2823,2781,2733,2691,2656,2622,2597,2573,2549,2529,2505,2485,2465,2444,2424,2403,2383,2367,2349,2326,2303,2294,2297,2298,2297,2286,2285,2259,2259,2239,2189,2162,2104,2019,2e3,1965,1911,1871,1852,1838,1847,1867,1901,1937,1948,1914,1880,1887,1903,1968,2038,2086,2102,2134,2159,2200,2249,2309,2390,2439,2450,2462,2489,2495,2539,2608,2664,2728,2845,2901,2909,2929,2917,2902,2855,2884,2959,3018,3071,3128,3169,3184,3210,3227,3237,3274,3308,3306,3266,3230,3250,3261,3231,3253,3302,3295,3326,3361,2961,2960,2955,2952,2951,2946,2941,2938,2926,2905,2826,2873,2821,2880,2919,2931,2951,2966,2974,2980,2986,2997,3009,3023,3033,3041,3013,2978,2932,2908,2870,2822,2781,2745,2700,2655,2627,2604,2580,2556,2532,2512,2491,2464,2442,2420,2401,2383,2366,2352,2341,2327,2326,2323,2308,2295,2284,2275,2264,2255,2235,2206,2169,2102,2069,2077,2042,1973,1925,1892,1868,1859,1863,1879,1913,1923,1901,1892,1905,1930,1991,2035,2050,2061,2121,2162,2199,2244,2299,2356,2369,2358,2356,2378,2402,2445,2492,2540,2619,2695,2717,2717,2725,2761,2720,2691,2757,2821,2881,2926,2964,2965,2994,3020,2994,3049,3077,3090,3092,3080,3044,3055,3105,3142,3226,3272,3268,3298,3334,2962,2962,2961,2954,2950,2946,2941,2930,2902,2863,2812,2810,2813,2867,2910,2940,2955,2970,2986,2992,2996,3e3,3013,3025,3038,3043,3024,2993,2935,2879,2840,2799,2762,2727,2695,2665,2643,2626,2599,2572,2544,2520,2496,2468,2448,2431,2417,2397,2385,2372,2360,2344,2345,2334,2300,2276,2258,2255,2248,2237,2219,2191,2153,2126,2142,2130,2075,2043,2019,1976,1945,1934,1923,1924,1939,1950,1943,1953,1959,1979,2017,2032,2061,2107,2132,2160,2185,2216,2257,2290,2283,2269,2270,2282,2313,2334,2363,2394,2445,2485,2498,2498,2529,2547,2508,2515,2569,2605,2660,2687,2699,2681,2731,2732,2744,2779,2799,2799,2800,2792,2778,2790,2876,2974,3147,3242,3239,3267,3302,2964,2963,2963,2962,2953,2947,2940,2929,2915,2887,2852,2776,2811,2869,2914,2942,2962,2977,2992,3003,3009,3014,3018,3032,3045,3049,3038,3003,2942,2894,2857,2814,2772,2738,2708,2703,2685,2660,2624,2591,2561,2536,2508,2483,2468,2458,2439,2423,2412,2395,2378,2363,2356,2323,2278,2241,2223,2218,2214,2207,2194,2181,2160,2165,2158,2144,2133,2124,2105,2073,2045,2026,2019,2017,2018,2024,2032,2033,2040,2048,2063,2079,2103,2122,2137,2153,2165,2181,2203,2217,2216,2209,2205,2216,2227,2242,2254,2269,2286,2303,2318,2329,2338,2342,2335,2353,2383,2416,2427,2438,2437,2442,2458,2459,2480,2498,2510,2509,2509,2504,2500,2524,2634,2799,3016,3183,3211,3236,3269,2965,2963,2961,2953,2945,2932,2915,2909,2896,2859,2833,2743,2786,2844,2900,2935,2960,2982,2999,3010,3019,3028,3030,3042,3048,3043,3029,3008,2976,2937,2886,2829,2787,2749,2751,2746,2715,2686,2652,2614,2574,2543,2525,2511,2500,2490,2477,2461,2442,2423,2401,2382,2358,2314,2255,2214,2188,2185,2183,2181,2174,2169,2166,2165,2165,2162,2159,2157,2148,2137,2122,2115,2110,2108,2109,2110,2112,2113,2117,2120,2124,2134,2141,2144,2152,2153,2159,2166,2170,2174,2172,2171,2172,2175,2179,2183,2187,2194,2198,2203,2208,2210,2213,2217,2216,2226,2234,2244,2246,2249,2250,2254,2259,2264,2270,2277,2279,2279,2279,2278,2279,2308,2446,2653,2903,3109,3184,3205,3232,2962,2957,2950,2935,2916,2914,2887,2863,2848,2824,2766,2705,2754,2828,2871,2905,2943,2957,2994,3012,3025,3033,3044,3047,3043,3026,3011,3001,2975,2941,2894,2842,2807,2787,2765,2737,2692,2664,2640,2602,2577,2555,2532,2517,2511,2506,2494,2485,2472,2445,2418,2397,2365,2311,2248,2193,2165,2164,2163,2163,2163,2163,2163,2163,2163,2163,2162,2162,2161,2161,2160,2160,2160,2160,2160,2160,2160,2160,2160,2160,2160,2160,2160,2160,2161,2162,2162,2163,2162,2162,2164,2165,2164,2164,2163,2163,2163,2163,2163,2163,2164,2164,2164,2164,2164,2164,2165,2165,2165,2165,2165,2166,2166,2166,2166,2168,2169,2167,2167,2167,2168,2202,2357,2586,2839,3062,3155,3170,3192,2952,2943,2925,2901,2904,2870,2864,2804,2802,2778,2717,2675,2718,2755,2806,2858,2905,2948,2983,2997,3019,3037,3046,3042,3031,2990,2980,2971,2967,2931,2886,2845,2806,2760,2734,2699,2668,2633,2611,2585,2551,2532,2508,2493,2488,2490,2483,2461,2462,2449,2432,2412,2377,2315,2250,2194,2165,2163,2163,2163,2163,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2161,2160,2161,2161,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2163,2163,2163,2162,2162,2163,2163,2163,2162,2163,2163,2163,2163,2163,2163,2162,2162,2162,2162,2162,2162,2162,2162,2162,2163,2163,2162,2162,2162,2162,2202,2337,2568,2827,3034,3131,3144,3158,2927,2911,2895,2860,2867,2838,2810,2793,2734,2733,2678,2655,2723,2795,2859,2914,2953,2981,2996,3008,3020,3038,3045,3031,3008,2984,2919,2915,2931,2926,2883,2829,2788,2752,2716,2674,2633,2607,2557,2555,2526,2500,2451,2459,2449,2457,2459,2437,2426,2431,2423,2414,2378,2312,2250,2193,2164,2162,2163,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2161,2161,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2163,2163,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2199,2333,2560,2788,3021,3108,3123,3131,2900,2883,2869,2833,2821,2808,2734,2746,2681,2667,2620,2642,2715,2798,2876,2923,2956,2982,2994,3013,3026,3039,3035,3023,3001,2976,2919,2848,2868,2889,2867,2811,2765,2724,2699,2673,2641,2603,2563,2502,2470,2447,2417,2400,2413,2422,2423,2408,2357,2378,2373,2391,2370,2298,2238,2193,2164,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2161,2161,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2163,2194,2326,2539,2792,3004,3083,3098,3117,2870,2857,2845,2816,2750,2754,2730,2668,2624,2590,2582,2649,2749,2826,2875,2900,2915,2932,2956,2995,3023,3032,3027,3009,2964,2932,2906,2837,2797,2818,2831,2798,2754,2713,2676,2653,2629,2602,2572,2533,2474,2386,2344,2305,2356,2349,2380,2358,2273,2307,2324,2358,2347,2282,2213,2180,2163,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2163,2192,2317,2526,2788,2986,3058,3078,3110,2845,2829,2817,2799,2777,2698,2665,2622,2567,2547,2585,2671,2755,2804,2819,2828,2868,2936,2978,3001,3021,3029,3016,3e3,2975,2933,2863,2794,2741,2731,2761,2759,2723,2695,2657,2620,2606,2585,2561,2529,2469,2411,2332,2237,2264,2255,2305,2314,2190,2224,2250,2302,2313,2259,2196,2174,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2163,2191,2311,2524,2768,2964,3009,3056,3100,2824,2807,2796,2761,2755,2712,2626,2559,2530,2508,2593,2677,2728,2736,2731,2787,2868,2923,2950,2998,3010,3019,3e3,2980,2967,2944,2897,2841,2758,2680,2668,2709,2693,2667,2633,2602,2561,2551,2538,2508,2490,2440,2363,2248,2163,2166,2217,2202,2127,2138,2192,2251,2269,2228,2183,2159,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2188,2301,2511,2755,2946,2957,3037,3084,2794,2774,2762,2738,2672,2666,2613,2536,2493,2488,2555,2646,2663,2657,2696,2762,2830,2900,2948,2966,2940,2981,2949,2904,2915,2931,2886,2826,2772,2681,2607,2634,2655,2622,2595,2538,2549,2515,2487,2485,2456,2434,2384,2281,2159,2083,2114,2089,2055,2061,2108,2165,2221,2188,2163,2152,2160,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2187,2303,2517,2766,2916,2913,2997,3069,2754,2735,2696,2687,2655,2599,2562,2507,2457,2458,2520,2568,2574,2620,2705,2768,2814,2853,2913,2907,2846,2897,2876,2810,2862,2879,2855,2764,2706,2653,2576,2578,2613,2587,2538,2506,2484,2487,2440,2426,2399,2396,2381,2313,2203,2052,1999,1992,1959,1965,2019,2090,2151,2133,2126,2141,2160,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2183,2286,2501,2748,2863,2865,2967,3050,2710,2690,2657,2642,2603,2547,2518,2462,2418,2420,2462,2496,2555,2640,2686,2711,2717,2808,2845,2831,2778,2795,2796,2751,2769,2780,2784,2743,2655,2597,2544,2517,2548,2537,2503,2455,2414,2424,2421,2353,2359,2336,2334,2332,2252,2100,1961,1907,1895,1890,1931,2014,2076,2068,2110,2142,2161,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2172,2242,2430,2687,2828,2809,2912,3018,2675,2641,2597,2588,2559,2504,2455,2425,2386,2398,2427,2473,2550,2609,2637,2625,2679,2734,2727,2725,2690,2707,2700,2672,2660,2668,2672,2654,2593,2559,2518,2467,2479,2479,2456,2414,2360,2370,2382,2336,2280,2265,2264,2285,2244,2138,1999,1904,1859,1848,1884,1964,2036,2076,2128,2154,2161,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2163,2184,2284,2463,2618,2688,2822,2926,2638,2601,2547,2527,2510,2462,2410,2385,2354,2372,2404,2475,2548,2568,2554,2545,2590,2618,2613,2607,2616,2644,2620,2603,2577,2584,2583,2577,2542,2509,2496,2452,2414,2407,2372,2320,2274,2252,2258,2244,2209,2182,2182,2193,2180,2151,2108,2038,1987,1972,1977,2029,2098,2140,2160,2160,2161,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2172,2230,2324,2405,2488,2540,2593,2564,2513,2467,2464,2414,2370,2346,2325,2338,2374,2437,2488,2515,2488,2477,2501,2515,2529,2531,2570,2581,2553,2537,2501,2507,2507,2499,2480,2447,2434,2375,2305,2250,2230,2205,2185,2170,2170,2168,2165,2161,2160,2159,2159,2155,2152,2149,2141,2137,2139,2150,2158,2160,2161,2161,2161,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2161,2161,2162,2179,2192,2199,2551,2522,2488,2429,2405,2378,2328,2304,2297,2302,2334,2381,2441,2449,2446,2413,2435,2449,2455,2476,2532,2517,2477,2469,2439,2434,2430,2404,2355,2301,2266,2225,2187,2163,2152,2152,2154,2156,2157,2158,2159,2160,2160,2160,2160,2160,2160,2160,2160,2160,2160,2160,2159,2160,2161,2161,2161,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2161,2161,2161,2160,2160,2497,2467,2430,2393,2356,2335,2291,2270,2270,2268,2299,2354,2390,2381,2380,2355,2374,2396,2398,2439,2479,2458,2410,2389,2378,2349,2313,2251,2203,2170,2149,2138,2142,2144,2147,2150,2153,2155,2157,2158,2159,2160,2160,2160,2160,2160,2160,2160,2160,2160,2160,2160,2160,2160,2161,2161,2162,2161,2162,2162,2162,2162,2162,2161,2161,2161,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2161,2161,2160,2160,2430,2408,2379,2345,2315,2291,2258,2237,2241,2239,2272,2312,2324,2323,2301,2299,2318,2334,2349,2401,2409,2376,2345,2312,2274,2223,2178,2142,2128,2127,2132,2136,2140,2143,2146,2150,2152,2155,2157,2158,2159,2160,2160,2160,2159,2160,2160,2160,2160,2160,2160,2160,2160,2161,2161,2161,2161,2160,2161,2162,2162,2161,2162,2162,2160,2162,2162,2162,2162,2162,2153,2162,2162,2162,2162,2162,2154,2159,2161,2161,2162,2162,2162,2161,2161,2161,2161,2162,2162,2161,2162,2162,2161,2162,2164,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2162,2161,2160,2161,2161,2160,2368,2341,2325,2303,2268,2255,2230,2209,2212,2206,2235,2259,2262,2260,2242,2250,2264,2282,2307,2337,2315,2291,2260,2208,2161,2127,2112,2115,2119,2125,2130,2134,2138,2142,2148,2150,2152,2154,2155,2152,2150,2148,2147,2146,2144,2138,2138,2136,2133,2131,2128,2126,2127,2131,2138,2144,2147,2147,2147,2146,2146,2146,2145,2144,2143,2143,2143,2143,2143,2144,2144,2144,2145,2145,2146,2146,2146,2147,2147,2147,2147,2147,2151,2152,2152,2153,2156,2157,2158,2159,2160,2160,2160,2163,2166,2166,2168,2168,2167,2168,2168,2169,2169,2169,2168,2169,2169,2169,2169,2169,2169,2169,2167,2166,2166,2166,2166,2166,2166,2167,2167,2167,2168,2170,2173,2175,2177,2181,2184,2303,2269,2261,2251,2226,2216,2201,2181,2183,2179,2186,2210,2197,2194,2197,2206,2217,2236,2260,2248,2231,2195,2158,2118,2100,2102,2106,2111,2117,2123,2128,2133,2137,2144,2150,2163,2165,2149,2127,2093,2045,2015,1993,1977,1970,1956,1939,1926,1909,1866,1842,1824,1821,1837,1870,1904,1920,1915,1907,1901,1897,1893,1881,1867,1859,1857,1856,1861,1745,1746,1761,1883,1770,1893,1900,1907,1809,1921,1927,1944,1960,1976,1994,2023,2037,2055,2072,2093,2113,2135,2157,2168,2180,2183,2188,2194,2213,2228,2245,2253,2261,2269,2267,2264,2262,2263,2264,2256,2254,2253,2258,2262,2243,2228,2224,2222,2219,2222,2229,2233,2236,2234,2241,2253,2271,2281,2292,2313,2342,2233,2218,2195,2192,2176,2177,2168,2152,2154,2154,2145,2148,2143,2146,2158,2165,2181,2195,2197,2175,2146,2115,2092,2089,2093,2098,2104,2110,2115,2121,2126,2135,2146,2150,2164,2197,2216,2194,2143,2071,1973,1880,1822,1777,1736,1706,1690,1661,1633,1574,1508,1476,1460,1455,1450,1465,1466,1447,1431,1406,1392,1378,1351,1323,1316,1318,1320,1334,1347,1362,1378,1389,1396,1410,1430,1451,1472,1491,1510,1547,1584,1640,1696,1745,1810,1842,1893,1955,2029,2100,2178,2240,2266,2266,2267,2300,2325,2343,2375,2405,2424,2432,2417,2413,2394,2397,2388,2374,2357,2358,2358,2359,2336,2304,2298,2299,2291,2288,2295,2312,2317,2319,2329,2338,2353,2357,2367,2389,2430,2174,2147,2130,2135,2129,2132,2136,2125,2127,2128,2119,2104,2105,2112,2121,2130,2143,2149,2138,2103,2085,2074,2078,2084,2090,2095,2100,2106,2112,2115,2124,2133,2142,2130,2150,2204,2238,2230,2188,2094,1990,1915,1823,1745,1682,1643,1603,1575,1537,1491,1434,1386,1359,1331,1351,1267,1235,1196,1167,1126,1103,1086,1073,1055,1056,1063,1174,1088,1204,1126,1139,1151,1252,1170,1191,1222,1252,1279,1307,1352,1414,1474,1535,1602,1673,1747,1824,1916,2013,2108,2189,2269,2334,2351,2349,2367,2404,2435,2456,2476,2484,2489,2476,2426,2412,2421,2394,2384,2362,2355,2347,2341,2321,2303,2302,2304,2298,2289,2294,2302,2315,2326,2314,2326,2330,2335,2325,2335,2363,2108,2085,2076,2084,2086,2087,2101,2097,2103,2103,2093,2084,2075,2082,2088,2095,2105,2098,2080,2062,2061,2067,2073,2079,2085,2091,2097,2099,2101,2092,2081,2090,2097,2092,2124,2149,2175,2185,2160,2115,2027,1951,1867,1781,1701,1629,1583,1540,1499,1455,1410,1360,1321,1286,1252,1220,1177,1129,1082,1044,1018,1011,988,987,994,1011,1028,1044,1060,1074,1088,1098,1108,1116,1135,1160,1193,1225,1272,1326,1379,1438,1496,1565,1638,1712,1800,1887,1996,2128,2225,2305,2354,2373,2382,2394,2418,2439,2463,2475,2474,2476,2462,2414,2382,2386,2363,2342,2327,2313,2303,2287,2274,2274,2276,2275,2274,2267,2260,2276,2290,2297,2299,2296,2294,2293,2280,2281,2300,2044,2028,2027,2034,2045,2050,2061,2071,2079,2078,2070,2062,2050,2052,2059,2063,2064,2053,2047,2049,2055,2061,2067,2074,2080,2084,2081,2069,2062,2052,2037,2052,2067,2057,2079,2090,2108,2121,2102,2083,2056,1971,1889,1808,1715,1646,1585,1519,1473,1432,1385,1335,1284,1241,1207,1173,1131,1089,1042,998,961,938,938,946,962,979,996,1015,1031,1045,1055,1066,1076,1086,1095,1118,1148,1192,1244,1297,1349,1402,1483,1569,1649,1732,1824,1932,2033,2113,2187,2263,2308,2339,2361,2376,2400,2426,2444,2456,2455,2449,2441,2386,2360,2347,2339,2311,2289,2277,2266,2251,2238,2244,2250,2251,2246,2242,2239,2253,2264,2268,2269,2266,2256,2251,2241,2232,2253,1988,1979,1985,1993,2009,2023,2039,2048,2055,2055,2047,2039,2031,2024,2030,2030,2030,2031,2037,2043,2049,2056,2062,2068,2070,2060,2038,2021,2019,2018,2017,2036,2039,2024,2034,2041,2055,2061,2054,2027,2026,1977,1879,1801,1733,1676,1605,1536,1461,1402,1359,1309,1257,1208,1167,1128,1087,1047,1005,965,925,900,899,913,930,947,963,982,1001,1011,1022,1032,1043,1053,1063,1078,1112,1157,1210,1261,1310,1371,1461,1518,1602,1681,1787,1882,1971,2047,2119,2165,2213,2273,2326,2351,2389,2410,2423,2429,2433,2420,2419,2385,2332,2301,2314,2287,2263,2247,2231,2220,2209,2215,2220,2226,2224,2221,2219,2231,2238,2238,2238,2237,2225,2217,2203,2193,2203,1935,1943,1956,1971,1986,2001,2017,2025,2033,2033,2025,2016,2008,2e3,2008,2008,2022,2025,2031,2037,2043,2050,2056,2052,2027,2012,1989,1984,1991,1992,1998,2012,2012,1992,1997,2e3,2011,2018,2003,1987,1988,1963,1891,1817,1749,1676,1621,1534,1471,1392,1328,1278,1230,1179,1134,1088,1041,999,961,919,891,871,875,887,897,913,926,945,962,979,989,1007,1015,1023,1031,1054,1085,1125,1175,1224,1265,1314,1388,1458,1527,1612,1690,1784,1871,1955,2023,2075,2144,2232,2258,2324,2370,2383,2397,2380,2393,2374,2392,2362,2306,2263,2282,2284,2246,2220,2205,2194,2185,2191,2196,2202,2202,2201,2199,2208,2213,2211,2210,2208,2196,2184,2170,2163,2157,1902,1919,1935,1951,1968,1982,1995,2003,2011,2012,2003,1995,1986,1977,1985,2e3,2014,2018,2025,2030,2038,2043,2031,2009,1983,1971,1958,1958,1962,1965,1980,1986,1984,1965,1960,1966,1978,1978,1960,1948,1939,1922,1866,1801,1761,1721,1669,1587,1516,1439,1322,1243,1191,1145,1093,1051,995,957,922,887,860,841,843,855,867,880,889,906,923,940,957,971,986,995,1003,1030,1060,1098,1146,1194,1253,1317,1369,1432,1505,1574,1646,1715,1793,1866,1940,2038,2113,2188,2257,2315,2347,2354,2351,2336,2351,2333,2363,2329,2277,2238,2239,2258,2232,2197,2180,2169,2160,2167,2172,2178,2178,2178,2178,2184,2189,2187,2185,2182,2171,2158,2144,2133,2127,1882,1899,1915,1932,1950,1963,1972,1981,1989,1991,1982,1973,1967,1964,1984,1992,2006,2011,2018,2024,2016,2011,1983,1957,1949,1937,1933,1933,1936,1945,1959,1965,1956,1937,1928,1935,1952,1938,1924,1909,1896,1874,1848,1798,1718,1679,1626,1539,1448,1363,1286,1197,1137,1096,1048,996,943,904,874,844,820,811,813,825,839,845,857,873,891,909,923,937,950,963,976,1002,1028,1065,1112,1160,1227,1308,1351,1415,1508,1607,1714,1792,1854,1932,2015,2104,2162,2207,2264,2309,2317,2311,2292,2287,2302,2286,2324,2292,2242,2204,2186,2208,2211,2179,2155,2144,2136,2142,2148,2154,2154,2155,2157,2159,2164,2162,2160,2156,2145,2132,2118,2104,2099,1863,1880,1897,1914,1931,1940,1949,1958,1967,1969,1963,1956,1949,1966,1982,1990,1998,2004,2011,2016,1995,1961,1927,1919,1915,1911,1907,1907,1912,1933,1939,1950,1919,1903,1901,1916,1927,1921,1884,1867,1854,1839,1796,1735,1658,1563,1531,1466,1364,1291,1213,1129,1066,1028,989,937,893,850,822,794,786,774,782,796,812,818,831,842,861,877,889,902,915,927,946,970,995,1032,1079,1126,1189,1274,1341,1469,1604,1715,1796,1876,1938,1965,2003,2077,2142,2196,2260,2296,2281,2259,2236,2228,2240,2238,2274,2242,2207,2174,2151,2153,2165,2144,2130,2119,2113,2120,2125,2130,2132,2134,2136,2138,2140,2138,2136,2129,2120,2107,2094,2081,2072,1850,1866,1883,1900,1914,1923,1932,1941,1948,1951,1945,1938,1947,1964,1977,1984,1990,1987,1993,1984,1940,1933,1899,1895,1891,1886,1882,1886,1905,1911,1921,1934,1906,1875,1867,1885,1896,1893,1872,1830,1821,1806,1775,1713,1631,1510,1416,1354,1306,1230,1133,1038,990,953,916,876,837,800,774,758,745,745,754,779,785,796,805,813,827,844,855,867,879,891,915,939,963,1002,1055,1102,1164,1235,1320,1438,1605,1726,1810,1882,1944,1983,2041,2107,2176,2223,2267,2272,2236,2186,2179,2176,2184,2185,2212,2190,2175,2143,2120,2114,2124,2113,2104,2093,2091,2100,2109,2111,2116,2119,2120,2122,2121,2113,2111,2103,2097,2084,2071,2058,2046,1836,1853,1869,1883,1897,1905,1914,1922,1930,1932,1927,1936,1945,1963,1971,1976,1981,1978,1976,1930,1885,1878,1872,1872,1867,1861,1857,1867,1886,1876,1888,1895,1880,1852,1838,1852,1861,1861,1841,1814,1770,1772,1764,1723,1659,1556,1435,1315,1250,1171,1073,988,929,881,852,828,797,761,730,715,711,717,731,748,765,774,783,792,807,821,831,841,850,865,885,909,942,989,1041,1094,1154,1233,1312,1427,1550,1691,1779,1838,1878,1968,2050,2101,2138,2175,2225,2236,2188,2140,2118,2123,2131,2140,2150,2133,2120,2119,2090,2081,2085,2082,2072,2066,2069,2082,2087,2091,2097,2101,2105,2104,2102,2094,2087,2081,2075,2061,2048,2035,2021,1827,1843,1856,1869,1880,1888,1896,1904,1912,1913,1915,1925,1944,1957,1962,1968,1973,1970,1928,1876,1857,1847,1849,1851,1844,1836,1830,1846,1856,1849,1849,1849,1846,1832,1808,1819,1829,1820,1809,1788,1766,1723,1729,1721,1671,1558,1436,1338,1227,1138,1042,953,895,835,803,783,758,731,702,688,681,690,702,722,738,755,762,769,781,792,800,810,825,840,857,888,928,975,1027,1090,1163,1237,1317,1394,1500,1603,1680,1788,1881,1957,1999,2030,2056,2128,2178,2174,2138,2095,2075,2074,2080,2085,2088,2079,2058,2083,2068,2048,2052,2046,2042,2041,2052,2062,2064,2072,2078,2083,2090,2085,2084,2076,2067,2058,2052,2039,2025,2012,1998,1818,1830,1842,1856,1864,1872,1879,1885,1893,1898,1904,1924,1942,1948,1953,1959,1962,1926,1873,1835,1829,1828,1828,1829,1823,1811,1805,1826,1828,1821,1818,1819,1817,1807,1770,1797,1804,1788,1780,1758,1730,1716,1655,1703,1685,1632,1524,1385,1252,1116,1003,919,856,812,780,747,726,702,683,668,658,673,680,695,708,723,731,741,755,762,769,785,800,815,831,868,915,958,1002,1060,1141,1249,1370,1434,1532,1632,1743,1792,1842,1890,1904,1949,2009,2076,2127,2128,2087,2053,2038,2032,2038,2033,2029,2018,2006,2024,2035,2020,2024,2018,2013,2014,2032,2044,2042,2054,2059,2065,2076,2071,2065,2056,2047,2038,2029,2016,2003,1989,1976,1809,1817,1829,1840,1848,1856,1863,1870,1876,1883,1904,1925,1933,1938,1944,1949,1932,1875,1818,1815,1806,1809,1808,1808,1799,1783,1788,1802,1803,1797,1797,1795,1787,1779,1740,1763,1773,1764,1744,1734,1698,1684,1603,1646,1636,1564,1481,1374,1223,1074,956,883,839,796,753,736,708,690,663,648,650,656,664,669,678,694,700,713,722,730,745,757,772,788,804,837,885,924,966,1030,1138,1269,1403,1532,1613,1707,1732,1731,1756,1796,1821,1891,1967,2033,2077,2087,2051,2017,1999,1993,2e3,1990,1980,1968,1964,1982,1994,1995,2002,1992,1984,2e3,2016,2020,2027,2036,2044,2049,2062,2056,2051,2042,2033,2022,2011,2e3,1986,1973,1957,1800,1808,1816,1824,1832,1840,1848,1853,1859,1878,1901,1919,1924,1929,1934,1934,1884,1824,1790,1796,1786,1785,1790,1786,1777,1763,1768,1779,1776,1768,1774,1773,1764,1748,1721,1732,1745,1740,1725,1708,1668,1581,1579,1547,1636,1576,1436,1265,1173,1039,910,850,812,769,733,713,705,670,660,638,633,641,647,641,648,664,675,685,690,704,720,733,745,757,775,815,856,897,935,1006,1118,1252,1419,1532,1595,1643,1644,1656,1684,1712,1786,1859,1933,1985,2028,2057,2021,1983,1961,1956,1963,1953,1942,1928,1926,1937,1951,1976,1978,1968,1958,1985,1996,1995,2014,2019,2020,2040,2050,2043,2037,2026,2015,2004,1993,1982,1970,1955,1939,1791,1799,1804,1810,1819,1828,1836,1844,1849,1873,1898,1910,1915,1919,1924,1905,1834,1775,1771,1776,1769,1763,1769,1763,1752,1734,1750,1756,1756,1743,1751,1757,1737,1704,1678,1706,1717,1716,1708,1691,1611,1514,1463,1452,1568,1554,1471,1296,1146,1025,893,804,765,724,701,676,651,644,628,618,612,618,623,628,629,640,651,660,664,680,695,709,721,733,746,777,828,869,909,988,1104,1227,1380,1448,1488,1531,1542,1566,1610,1671,1754,1808,1888,1960,2e3,2029,2e3,1954,1924,1919,1929,1917,1908,1889,1891,1899,1936,1955,1953,1945,1943,1961,1972,1981,1997,1997,2012,2030,2039,2031,2024,2016,2006,1995,1984,1973,1957,1940,1924,1782,1788,1793,1799,1804,1813,1822,1831,1840,1868,1895,1899,1904,1908,1909,1866,1787,1741,1749,1758,1750,1735,1749,1746,1732,1703,1728,1736,1730,1711,1728,1734,1711,1684,1637,1672,1687,1685,1682,1673,1651,1546,1408,1358,1448,1439,1335,1211,1087,942,823,761,729,699,663,630,619,601,596,593,594,600,606,607,611,621,631,643,648,659,674,686,698,709,717,749,788,832,876,964,1098,1190,1284,1347,1382,1411,1459,1518,1590,1685,1752,1826,1894,1948,1976,1995,1966,1926,1898,1889,1902,1889,1875,1851,1852,1885,1916,1927,1927,1915,1925,1935,1948,1970,1968,1986,2010,2019,2028,2020,2012,2005,1995,1985,1976,1960,1945,1930,1915,1772,1776,1782,1787,1793,1799,1807,1816,1838,1858,1885,1889,1894,1897,1885,1816,1754,1723,1721,1733,1726,1717,1725,1723,1705,1679,1698,1711,1709,1682,1695,1705,1695,1652,1605,1623,1658,1653,1655,1634,1624,1561,1431,1307,1280,1277,1207,1129,1005,884,781,738,714,688,653,613,583,559,559,564,575,587,593,600,604,609,615,621,631,640,652,664,676,687,697,727,767,812,864,940,1066,1145,1207,1278,1323,1371,1431,1535,1639,1720,1784,1847,1897,1925,1952,1952,1930,1897,1866,1856,1875,1861,1828,1815,1832,1869,1886,1902,1903,1890,1901,1916,1939,1933,1967,1987,2002,2012,2019,2014,2004,1993,1984,1974,1964,1954,1939,1924,1911,1762,1765,1771,1776,1782,1787,1793,1814,1836,1856,1876,1879,1883,1886,1854,1790,1726,1703,1694,1708,1698,1699,1702,1697,1680,1649,1671,1688,1687,1651,1659,1676,1670,1626,1566,1603,1630,1622,1626,1589,1581,1521,1410,1281,1204,1151,1073,990,885,810,754,719,695,669,631,585,565,552,525,536,552,563,575,581,591,596,604,608,615,623,629,641,653,665,687,730,772,819,872,938,1027,1098,1167,1232,1288,1362,1488,1595,1657,1717,1787,1823,1862,1866,1906,1919,1899,1867,1825,1809,1846,1835,1802,1782,1817,1845,1861,1878,1876,1863,1863,1881,1909,1941,1963,1981,1995,2002,2010,2005,1999,1989,1978,1966,1955,1944,1932,1920,1907,1751,1755,1759,1765,1770,1776,1782,1797,1834,1861,1864,1867,1870,1868,1822,1759,1728,1698,1675,1673,1672,1670,1688,1670,1649,1623,1645,1662,1662,1626,1626,1646,1645,1600,1535,1568,1594,1586,1591,1566,1542,1490,1381,1252,1145,1094,1012,928,849,779,725,682,674,644,610,575,556,532,513,510,524,540,552,563,577,586,594,599,600,607,615,618,630,637,693,733,784,835,887,946,1013,1079,1143,1198,1263,1352,1447,1510,1598,1688,1737,1778,1806,1825,1863,1885,1870,1839,1801,1766,1808,1803,1771,1751,1785,1817,1832,1847,1838,1831,1880,1903,1927,1943,1957,1976,1987,1995,2003,1997,1992,1981,1974,1961,1949,1936,1926,1916,1903,1741,1745,1748,1754,1759,1765,1771,1802,1833,1850,1852,1854,1857,1848,1794,1736,1716,1694,1664,1647,1644,1651,1668,1651,1623,1598,1609,1638,1637,1592,1584,1611,1609,1561,1494,1518,1569,1541,1547,1525,1487,1425,1334,1216,1094,1022,949,888,818,758,707,670,651,616,592,576,558,535,505,498,506,517,533,543,553,566,570,578,579,590,599,601,615,635,689,747,793,837,887,942,998,1054,1110,1163,1228,1321,1392,1481,1567,1631,1672,1723,1728,1780,1822,1856,1858,1802,1770,1727,1764,1762,1733,1722,1756,1783,1810,1805,1797,1832,1876,1901,1916,1931,1945,1962,1975,1988,1997,1991,1985,1973,1962,1951,1940,1930,1920,1909,1899,1731,1735,1741,1748,1754,1760,1766,1797,1828,1839,1841,1844,1846,1826,1774,1724,1697,1679,1661,1629,1619,1623,1639,1627,1594,1573,1577,1607,1606,1558,1539,1572,1572,1529,1456,1472,1526,1493,1498,1463,1414,1405,1309,1175,1058,972,904,843,785,740,707,671,645,623,590,560,542,518,495,485,491,503,522,526,528,540,544,552,552,566,575,583,592,628,696,742,776,823,868,913,960,1013,1074,1138,1206,1300,1387,1458,1519,1568,1630,1655,1676,1710,1795,1838,1849,1811,1749,1691,1700,1699,1684,1694,1711,1734,1758,1766,1804,1855,1871,1884,1902,1915,1932,1958,1970,1983,1990,1984,1978,1969,1958,1948,1944,1940,1923,1913,1903,1721,1728,1734,1741,1748,1754,1761,1791,1822,1828,1831,1833,1835,1803,1748,1723,1703,1677,1636,1616,1603,1596,1606,1604,1570,1548,1545,1571,1575,1525,1492,1527,1528,1479,1416,1410,1468,1440,1440,1401,1321,1351,1309,1193,1024,913,861,823,770,732,702,668,646,615,578,542,504,486,478,467,466,483,498,500,499,505,508,507,515,536,553,557,570,614,667,710,755,800,842,883,932,982,1047,1111,1185,1269,1344,1397,1444,1498,1553,1591,1645,1707,1769,1817,1831,1792,1745,1657,1646,1641,1657,1669,1695,1717,1742,1764,1785,1811,1832,1863,1887,1904,1920,1941,1960,1976,1983,1977,1971,1965,1962,1959,1956,1950,1938,1922,1906,1718,1723,1728,1735,1741,1748,1765,1783,1813,1818,1820,1821,1820,1784,1734,1702,1697,1671,1637,1605,1586,1573,1575,1571,1554,1522,1513,1532,1542,1504,1451,1463,1484,1433,1376,1363,1395,1377,1362,1321,1280,1242,1224,1092,946,856,815,788,755,721,696,674,652,625,593,551,505,475,469,462,458,458,473,480,480,479,477,473,488,508,528,539,553,605,651,688,744,794,836,872,916,973,1034,1099,1163,1234,1298,1359,1419,1473,1534,1613,1669,1711,1765,1802,1785,1726,1691,1627,1612,1620,1642,1699,1742,1766,1809,1817,1829,1828,1844,1880,1904,1926,1940,1956,1965,1975,1985,1980,1978,1975,1973,1970,1968,1965,1951,1935,1921,1715,1720,1725,1730,1735,1752,1770,1787,1804,1806,1808,1809,1806,1766,1717,1698,1667,1672,1647,1607,1575,1555,1540,1536,1532,1498,1485,1489,1504,1470,1415,1408,1433,1406,1344,1329,1328,1325,1354,1272,1213,1147,1083,996,894,834,797,774,753,730,698,673,649,619,582,552,511,476,467,470,464,453,451,461,454,453,455,451,465,481,496,512,541,584,612,672,738,783,814,853,901,959,1016,1080,1186,1287,1347,1407,1473,1537,1578,1637,1698,1723,1742,1740,1719,1651,1600,1581,1583,1608,1661,1729,1783,1800,1812,1851,1865,1871,1862,1876,1907,1932,1954,1964,1982,1984,1991,1990,1988,1985,1983,1980,1978,1977,1965,1949,1935,1716,1718,1723,1728,1733,1741,1759,1776,1793,1795,1796,1798,1791,1747,1694,1682,1664,1640,1634,1611,1571,1540,1523,1509,1497,1480,1460,1445,1456,1438,1385,1365,1366,1364,1313,1293,1278,1261,1274,1241,1156,1086,1020,941,873,828,799,770,756,738,703,674,649,607,555,526,508,484,476,470,462,453,448,444,440,434,436,434,439,454,468,481,515,556,575,628,705,746,795,829,872,924,984,1054,1165,1263,1372,1437,1486,1546,1585,1626,1659,1684,1668,1642,1600,1577,1545,1550,1570,1623,1660,1693,1766,1818,1846,1853,1881,1893,1891,1901,1923,1936,1961,1980,1997,2e3,2003,2001,1998,1995,1995,1995,1994,1993,1983,1966,1953,1716,1718,1721,1726,1731,1737,1748,1765,1782,1784,1785,1784,1778,1742,1698,1667,1642,1618,1594,1578,1552,1528,1506,1493,1477,1460,1439,1424,1405,1399,1367,1337,1313,1297,1271,1254,1243,1222,1178,1137,1089,1036,968,915,871,833,808,782,761,735,712,679,645,600,550,527,503,475,455,451,443,438,433,435,422,417,419,422,416,426,439,458,491,527,557,616,697,727,763,802,844,897,962,1038,1157,1266,1341,1402,1448,1491,1525,1562,1590,1615,1595,1544,1512,1490,1509,1534,1585,1656,1728,1767,1794,1802,1852,1881,1891,1910,1914,1925,1936,1958,1976,1996,2012,2016,2014,2011,2008,2011,2012,2011,2010,2009,1996,1984,1970,1716,1719,1721,1723,1728,1733,1744,1754,1771,1773,1772,1770,1765,1737,1706,1685,1667,1642,1620,1577,1550,1527,1502,1478,1461,1444,1425,1407,1388,1366,1343,1314,1287,1257,1225,1207,1198,1171,1127,1078,1038,987,939,896,865,834,805,779,760,734,703,670,630,577,540,528,512,470,437,433,427,426,419,411,409,393,392,399,398,404,413,437,474,507,544,611,655,688,743,792,828,876,948,1015,1098,1203,1285,1356,1374,1403,1443,1493,1520,1528,1488,1460,1454,1470,1508,1550,1587,1667,1739,1778,1818,1847,1873,1889,1914,1927,1937,1945,1958,1977,1996,2013,2027,2036,2035,2027,2027,2032,2038,2033,2029,2027,2016,2005,1989,1717,1719,1722,1724,1726,1731,1740,1750,1760,1759,1758,1757,1756,1737,1711,1694,1674,1654,1633,1598,1570,1543,1500,1479,1453,1430,1411,1393,1370,1347,1321,1296,1271,1237,1206,1174,1149,1122,1091,1055,1010,964,928,887,856,832,806,775,748,721,691,661,624,586,558,541,515,482,422,415,412,415,410,400,393,384,371,375,380,386,395,423,463,504,550,594,620,678,734,786,828,874,926,988,1061,1150,1248,1298,1322,1349,1385,1420,1441,1417,1405,1408,1436,1470,1514,1586,1619,1649,1692,1754,1811,1854,1890,1913,1926,1944,1958,1968,1978,1995,2016,2035,2053,2063,2056,2059,2068,2061,2063,2052,2046,2046,2036,2026,2018,1719,1720,1722,1724,1727,1729,1736,1746,1749,1748,1747,1746,1744,1734,1710,1693,1673,1659,1640,1613,1581,1534,1532,1516,1479,1431,1398,1375,1353,1330,1305,1279,1255,1221,1187,1157,1128,1098,1068,1038,1e3,961,925,886,856,832,807,779,752,722,694,665,637,609,567,507,430,384,381,395,398,399,395,384,382,371,359,361,366,371,387,417,457,500,540,579,618,689,740,777,821,873,918,967,1031,1105,1180,1237,1269,1288,1309,1333,1343,1361,1384,1411,1444,1486,1530,1615,1690,1732,1766,1792,1823,1856,1887,1919,1944,1962,1981,1997,2008,2021,2040,2062,2079,2090,2094,2099,2115,2098,2092,2080,2065,2068,2063,2055,2071,1722,1721,1723,1725,1727,1729,1732,1735,1738,1737,1736,1734,1732,1725,1709,1694,1678,1661,1643,1617,1572,1582,1572,1545,1500,1448,1412,1379,1354,1325,1292,1263,1239,1209,1179,1148,1118,1088,1059,1031,994,957,921,886,855,825,796,772,745,717,679,654,625,590,545,459,339,318,341,355,368,373,374,368,362,355,345,343,349,359,380,411,450,497,548,588,629,697,738,774,814,859,915,961,1009,1064,1128,1183,1223,1256,1288,1320,1344,1365,1382,1404,1441,1508,1573,1599,1643,1703,1761,1822,1853,1879,1916,1943,1967,1987,2004,2029,2051,2063,2089,2096,2117,2123,2135,2153,2164,2144,2126,2122,2098,2091,2087,2094,2137,1724,1723,1723,1725,1728,1730,1731,1723,1726,1725,1724,1722,1720,1719,1707,1689,1668,1650,1633,1623,1610,1592,1575,1535,1511,1472,1456,1412,1395,1375,1337,1291,1248,1209,1174,1142,1110,1079,1048,1018,985,945,913,882,852,821,789,756,736,714,680,654,616,569,482,363,279,284,306,318,330,337,346,345,345,339,327,331,338,361,374,402,441,487,549,601,641,688,724,761,811,856,901,956,999,1042,1090,1137,1190,1233,1270,1305,1322,1335,1371,1419,1469,1546,1645,1714,1724,1753,1791,1831,1844,1897,1931,1964,1989,2019,2048,2074,2106,2122,2147,2147,2154,2159,2178,2206,2223,2191,2176,2174,2137,2116,2111,2125,2184,1727,1726,1725,1726,1728,1729,1731,1723,1715,1713,1712,1710,1708,1716,1707,1699,1686,1669,1659,1647,1636,1617,1599,1573,1551,1530,1506,1460,1477,1451,1416,1344,1286,1249,1205,1152,1105,1067,1037,1005,975,940,906,877,850,817,776,750,734,711,675,634,588,533,410,305,263,272,283,295,307,312,320,328,330,327,326,323,343,366,390,422,449,493,551,607,654,695,738,765,805,845,892,941,987,1030,1071,1112,1155,1194,1230,1258,1286,1322,1376,1454,1536,1549,1623,1704,1769,1804,1824,1846,1884,1915,1939,1976,2010,2046,2105,2166,2184,2217,2251,2218,2198,2206,2217,2249,2285,2263,2241,2211,2166,2141,2138,2157,2212,1727,1726,1726,1726,1727,1728,1726,1719,1705,1701,1700,1698,1696,1709,1713,1707,1694,1686,1675,1665,1654,1642,1624,1601,1584,1563,1527,1513,1517,1495,1462,1384,1358,1328,1291,1222,1151,1088,1041,1001,965,934,896,868,834,804,778,750,733,706,671,621,559,499,367,245,247,253,270,280,300,308,316,319,319,314,317,328,350,379,404,437,462,503,551,616,668,710,734,767,799,837,881,931,973,1018,1057,1096,1134,1167,1202,1245,1295,1364,1435,1520,1623,1657,1658,1722,1776,1815,1846,1875,1903,1933,1967,1994,2031,2073,2147,2244,2298,2300,2347,2289,2249,2261,2262,2301,2335,2339,2308,2256,2198,2172,2165,2197,2255,1727,1726,1725,1722,1720,1726,1722,1708,1695,1691,1688,1686,1684,1698,1712,1708,1699,1690,1680,1670,1657,1640,1627,1608,1585,1563,1544,1526,1525,1520,1491,1465,1432,1394,1341,1271,1193,1127,1068,1019,980,943,902,865,840,809,778,743,723,685,640,567,479,409,290,233,220,230,245,262,281,298,300,301,306,305,314,326,350,383,416,447,490,526,557,598,644,684,716,748,789,829,873,917,960,1001,1037,1073,1112,1163,1239,1305,1394,1482,1550,1602,1668,1715,1736,1741,1763,1817,1851,1884,1915,1951,1987,2021,2053,2104,2163,2245,2341,2402,2427,2353,2322,2324,2334,2357,2386,2394,2366,2287,2224,2200,2196,2230,2299,1726,1725,1724,1715,1710,1712,1717,1698,1685,1682,1678,1674,1672,1682,1698,1706,1696,1685,1678,1666,1655,1642,1629,1610,1587,1557,1522,1513,1504,1516,1511,1488,1446,1388,1327,1271,1205,1140,1085,1046,1006,969,918,873,838,804,773,749,721,679,629,555,468,345,253,213,206,221,229,240,263,277,284,297,304,304,316,327,350,384,419,457,498,530,567,596,628,676,707,742,785,823,860,903,947,987,1027,1076,1134,1215,1316,1402,1475,1549,1594,1632,1657,1690,1717,1765,1798,1826,1852,1883,1920,1957,2001,2038,2079,2123,2176,2266,2364,2459,2494,2451,2419,2393,2420,2454,2440,2427,2375,2313,2253,2227,2232,2281,2327,1725,1720,1716,1712,1700,1703,1706,1691,1676,1672,1668,1664,1660,1666,1685,1695,1696,1687,1670,1659,1640,1629,1613,1597,1576,1546,1519,1486,1480,1498,1513,1505,1463,1432,1386,1319,1252,1172,1125,1097,1065,1022,972,923,878,824,768,740,711,673,619,545,468,331,229,204,197,209,217,228,246,256,266,283,299,312,317,327,346,379,412,449,480,529,565,596,632,672,705,737,775,812,843,881,923,967,1014,1085,1162,1262,1368,1423,1467,1512,1556,1588,1591,1644,1707,1757,1797,1829,1852,1880,1915,1960,2005,2052,2101,2152,2200,2270,2353,2448,2531,2550,2535,2479,2526,2521,2489,2436,2381,2324,2280,2253,2274,2317,2360,1720,1718,1711,1708,1696,1685,1695,1680,1664,1660,1655,1652,1649,1649,1662,1679,1687,1687,1676,1664,1650,1636,1615,1592,1563,1529,1498,1448,1434,1465,1486,1499,1508,1486,1429,1369,1293,1214,1193,1173,1149,1127,1087,1029,941,838,766,727,693,655,594,532,447,333,232,186,185,196,203,212,221,231,243,255,261,285,301,316,338,366,397,425,451,510,550,592,622,661,690,721,753,783,818,858,899,951,1010,1091,1163,1249,1319,1363,1397,1435,1480,1518,1598,1660,1700,1734,1768,1782,1813,1861,1910,1958,2007,2055,2107,2165,2226,2293,2364,2451,2539,2610,2605,2580,2621,2574,2505,2437,2384,2343,2301,2281,2304,2340,2378,1716,1710,1704,1684,1680,1669,1684,1670,1654,1648,1644,1640,1637,1634,1638,1654,1679,1678,1672,1653,1639,1629,1619,1611,1587,1557,1521,1470,1399,1411,1436,1474,1500,1470,1407,1343,1300,1288,1292,1268,1255,1237,1191,1099,972,858,765,708,674,634,582,528,460,358,207,170,167,170,178,190,194,200,207,213,227,242,262,287,311,332,353,385,422,474,514,550,585,622,659,694,729,761,792,842,892,944,1006,1077,1154,1222,1274,1323,1367,1407,1454,1519,1579,1621,1657,1686,1721,1772,1819,1863,1907,1955,2003,2053,2109,2168,2225,2303,2411,2475,2592,2673,2699,2692,2657,2588,2518,2465,2419,2364,2326,2315,2339,2371,2394,1710,1703,1691,1685,1666,1651,1671,1655,1640,1638,1634,1629,1625,1622,1622,1635,1665,1670,1668,1661,1644,1626,1604,1572,1579,1551,1523,1466,1390,1348,1370,1432,1469,1436,1411,1389,1382,1380,1374,1345,1327,1300,1221,1109,987,859,763,700,644,611,561,509,440,354,241,174,159,151,152,162,170,177,183,190,196,211,232,253,274,303,328,359,401,443,482,518,554,586,622,660,702,733,775,830,895,957,1014,1075,1140,1212,1271,1324,1369,1410,1444,1491,1539,1586,1633,1681,1723,1768,1813,1864,1912,1958,2012,2068,2128,2191,2265,2347,2460,2570,2635,2722,2773,2751,2682,2623,2577,2508,2455,2397,2351,2350,2378,2404,2430,1704,1697,1688,1660,1651,1633,1649,1640,1626,1625,1624,1620,1615,1611,1607,1614,1637,1658,1661,1653,1642,1634,1618,1580,1534,1524,1492,1458,1378,1301,1327,1387,1444,1475,1488,1493,1495,1496,1454,1390,1324,1234,1148,1052,937,803,735,675,629,579,538,488,420,357,281,185,144,140,143,154,157,168,170,181,191,201,214,238,257,278,305,340,373,415,456,496,535,569,603,635,674,722,769,824,888,951,1012,1082,1140,1192,1260,1336,1385,1421,1454,1501,1543,1604,1664,1712,1757,1793,1836,1881,1924,1970,2018,2066,2129,2205,2298,2390,2483,2592,2694,2778,2816,2802,2763,2692,2630,2545,2484,2417,2377,2390,2422,2457,2490,1695,1688,1678,1663,1640,1616,1628,1621,1609,1609,1614,1610,1606,1601,1597,1594,1615,1635,1649,1645,1627,1619,1609,1585,1535,1485,1475,1390,1326,1259,1278,1342,1408,1458,1488,1500,1506,1507,1484,1411,1299,1178,1071,982,855,733,676,616,564,526,503,475,420,370,319,222,111,99,108,125,147,158,163,161,171,181,195,211,233,258,293,323,352,391,430,469,508,543,578,610,656,707,763,816,875,933,997,1080,1144,1196,1271,1366,1443,1495,1535,1561,1583,1607,1651,1700,1748,1797,1845,1896,1938,1986,2039,2093,2158,2240,2356,2455,2545,2650,2736,2821,2863,2856,2818,2749,2647,2574,2499,2434,2411,2442,2476,2516,2555,1678,1663,1665,1653,1632,1604,1606,1602,1590,1591,1602,1600,1596,1591,1586,1581,1581,1609,1636,1639,1627,1600,1535,1522,1502,1454,1397,1361,1254,1217,1234,1298,1360,1402,1436,1449,1454,1458,1447,1407,1308,1178,1043,896,764,670,612,553,501,483,460,432,393,360,303,188,84,64,76,97,125,148,158,162,162,166,174,191,210,240,272,302,339,376,413,446,483,516,550,589,631,691,746,802,862,920,978,1075,1155,1222,1308,1398,1473,1539,1585,1615,1629,1661,1680,1715,1759,1811,1858,1906,1951,1997,2051,2110,2181,2258,2348,2455,2598,2719,2793,2847,2833,2818,2801,2737,2652,2577,2508,2452,2449,2489,2532,2558,2606,1652,1641,1642,1635,1618,1597,1581,1583,1569,1570,1585,1588,1586,1581,1576,1492,1516,1589,1597,1626,1626,1612,1577,1517,1438,1370,1341,1298,1216,1169,1182,1237,1295,1347,1377,1386,1398,1392,1403,1346,1244,1114,972,826,687,596,537,483,443,425,395,364,347,314,226,113,48,47,50,71,100,126,150,164,168,176,183,190,204,234,263,290,320,352,390,419,456,492,534,575,627,682,737,792,852,913,965,1061,1162,1223,1286,1357,1412,1464,1515,1579,1628,1678,1721,1749,1784,1826,1870,1917,1971,2025,2077,2128,2206,2321,2418,2519,2623,2728,2823,2851,2804,2759,2746,2701,2626,2569,2514,2475,2488,2535,2578,2617,2651,1621,1607,1610,1613,1596,1584,1564,1564,1555,1545,1564,1578,1577,1492,1487,1482,1478,1526,1569,1591,1604,1601,1575,1532,1458,1349,1260,1208,1152,1109,1126,1172,1227,1265,1296,1296,1298,1294,1287,1231,1134,987,874,755,628,529,481,420,395,363,330,310,282,228,162,68,27,28,34,51,72,104,125,148,151,155,167,181,203,226,246,272,295,324,360,393,427,467,517,567,634,695,746,797,854,913,974,1040,1139,1218,1276,1329,1378,1428,1487,1548,1604,1664,1703,1755,1799,1842,1881,1928,1981,2040,2098,2156,2233,2345,2455,2535,2634,2727,2801,2849,2814,2755,2703,2647,2607,2571,2524,2510,2511,2559,2613,2660,2688,1590,1578,1581,1586,1575,1564,1552,1543,1542,1519,1540,1537,1503,1483,1478,1472,1467,1470,1516,1541,1573,1574,1536,1490,1405,1279,1195,1147,1105,1060,1058,1086,1130,1168,1187,1184,1167,1148,1141,1070,985,888,763,671,574,480,423,366,305,280,257,231,192,117,71,38,6,7,24,40,54,82,102,128,147,140,151,160,178,202,219,239,267,295,326,358,392,437,499,584,672,716,758,806,873,934,1e3,1073,1149,1217,1277,1340,1396,1435,1500,1575,1641,1688,1717,1775,1820,1860,1898,1942,1988,2040,2100,2167,2240,2340,2426,2529,2617,2698,2750,2781,2780,2744,2711,2685,2637,2572,2543,2542,2550,2570,2629,2680,2707,1560,1550,1552,1550,1548,1545,1539,1521,1521,1501,1511,1515,1507,1478,1469,1426,1450,1449,1460,1517,1540,1534,1501,1421,1335,1231,1137,1094,1055,1018,1005,1011,1040,1066,1085,1074,1042,1011,992,935,830,726,643,581,506,414,355,292,217,186,170,140,83,60,39,19,3,11,25,34,47,60,83,97,118,140,144,159,163,175,205,222,245,272,300,329,364,414,496,594,665,714,770,832,903,972,1060,1133,1216,1303,1330,1372,1445,1506,1527,1576,1620,1671,1732,1780,1828,1872,1920,1966,2007,2066,2117,2178,2260,2367,2457,2518,2570,2644,2691,2762,2754,2719,2680,2640,2612,2592,2596,2580,2601,2587,2644,2687,2707,1530,1523,1523,1522,1523,1525,1520,1508,1502,1480,1484,1489,1490,1470,1450,1398,1397,1404,1433,1457,1493,1470,1443,1359,1252,1170,1098,1046,1013,974,955,956,971,992,992,974,944,895,846,768,683,606,555,504,422,346,268,188,131,111,89,49,38,31,20,7,3,7,26,47,54,68,85,89,100,112,126,143,164,178,197,215,243,283,307,330,362,409,505,625,680,743,851,923,997,1070,1133,1219,1310,1378,1405,1430,1475,1542,1592,1614,1666,1710,1746,1775,1811,1863,1910,1957,2002,2049,2101,2168,2239,2321,2394,2438,2507,2582,2676,2759,2771,2741,2710,2659,2647,2646,2647,2621,2640,2643,2646,2689,2713,1500,1495,1496,1497,1499,1500,1502,1496,1466,1464,1446,1462,1455,1441,1410,1368,1345,1357,1387,1423,1411,1360,1329,1264,1191,1125,1066,1012,972,932,905,900,908,922,910,876,845,807,733,644,561,524,482,429,350,269,173,112,65,61,50,35,30,29,17,14,13,30,41,59,68,81,92,92,99,108,121,134,152,172,203,235,259,291,323,347,381,430,553,650,701,794,903,996,1087,1177,1249,1324,1375,1422,1463,1497,1533,1568,1619,1655,1691,1728,1758,1803,1839,1879,1917,1951,1989,2030,2082,2133,2194,2262,2327,2401,2500,2574,2656,2739,2777,2748,2716,2679,2697,2694,2690,2667,2671,2674,2666,2710,2737,1462,1471,1476,1477,1482,1484,1487,1481,1464,1427,1413,1425,1412,1394,1376,1333,1306,1316,1336,1350,1334,1292,1234,1182,1142,1098,1042,990,943,899,863,850,847,848,840,802,761,719,655,586,516,444,389,350,287,201,121,85,66,52,40,46,46,34,28,23,35,42,64,72,82,95,92,108,111,121,133,151,167,181,216,252,282,309,334,373,405,451,599,687,770,836,895,979,1083,1167,1235,1314,1385,1432,1480,1527,1556,1592,1627,1659,1689,1720,1748,1786,1827,1858,1889,1922,1973,2028,2078,2130,2186,2252,2330,2427,2504,2584,2655,2729,2776,2757,2719,2720,2734,2732,2719,2714,2698,2710,2710,2733,2760,1443,1450,1456,1461,1466,1469,1471,1466,1447,1427,1395,1387,1373,1356,1330,1292,1264,1261,1276,1280,1249,1218,1176,1136,1101,1073,1035,983,928,870,830,810,800,793,780,746,714,669,610,540,474,398,344,303,227,167,117,94,85,76,64,48,53,48,46,49,57,64,69,89,104,103,94,114,124,141,164,173,177,182,201,243,286,330,376,424,458,533,625,706,777,832,892,951,1029,1090,1145,1224,1307,1351,1432,1476,1519,1558,1600,1621,1656,1678,1729,1764,1791,1818,1857,1911,1959,2016,2077,2136,2202,2263,2330,2414,2495,2574,2642,2694,2736,2752,2734,2745,2757,2757,2740,2744,2736,2742,2748,2757,2780,1434,1440,1446,1451,1456,1458,1463,1458,1440,1415,1385,1349,1329,1315,1290,1262,1224,1206,1201,1190,1169,1147,1122,1108,1081,1044,1008,963,905,844,800,775,772,755,733,697,675,641,571,493,430,380,331,268,203,152,121,97,93,75,71,64,59,55,57,69,81,91,101,104,109,108,101,118,138,155,160,159,158,176,201,228,264,309,372,425,487,553,624,693,759,821,882,934,987,1036,1087,1146,1211,1275,1330,1367,1427,1482,1534,1586,1598,1662,1695,1723,1748,1795,1846,1898,1953,2006,2054,2116,2180,2256,2331,2405,2472,2533,2575,2625,2660,2740,2754,2763,2773,2769,2761,2763,2763,2773,2775,2782,2800,1425,1430,1435,1440,1445,1450,1455,1451,1440,1415,1384,1351,1317,1282,1256,1229,1197,1171,1149,1126,1118,1099,1089,1073,1055,1042,996,930,873,810,762,745,731,714,690,652,627,598,537,466,405,354,307,257,224,181,140,108,90,85,87,81,73,70,67,72,89,104,109,108,115,108,110,128,143,158,159,159,164,170,192,219,255,315,367,419,481,572,629,688,748,807,867,925,980,1031,1074,1117,1164,1214,1265,1319,1378,1432,1485,1524,1569,1604,1646,1684,1733,1787,1839,1881,1925,1975,2031,2079,2128,2188,2268,2346,2407,2443,2479,2542,2620,2701,2738,2770,2782,2762,2735,2761,2777,2791,2801,2806,2815,1417,1422,1427,1431,1434,1437,1440,1445,1440,1427,1397,1365,1321,1307,1276,1249,1216,1168,1118,1089,1064,1052,1048,1033,1016,999,970,917,833,776,735,712,690,662,638,605,576,546,496,444,396,347,293,247,209,187,159,129,110,106,93,89,89,84,85,83,96,108,111,110,107,109,119,135,147,152,152,153,163,173,188,213,250,298,366,439,490,574,639,706,755,817,880,950,1009,1045,1079,1119,1168,1222,1272,1322,1371,1413,1459,1504,1545,1588,1629,1681,1727,1769,1815,1862,1904,1946,1989,2033,2085,2145,2202,2268,2316,2364,2430,2498,2570,2635,2705,2760,2762,2734,2691,2716,2770,2796,2800,2801,2810,1408,1412,1416,1419,1423,1427,1429,1431,1434,1427,1405,1371,1366,1346,1315,1300,1268,1203,1123,1054,1021,999,992,991,964,932,904,860,786,722,682,666,645,619,586,565,540,511,465,421,379,339,294,237,201,174,164,140,109,100,94,85,78,83,88,94,103,105,107,107,101,102,122,134,144,158,159,159,167,180,193,214,247,302,372,442,505,571,630,706,778,839,906,983,1037,1074,1120,1158,1198,1241,1289,1336,1378,1418,1460,1498,1535,1573,1616,1670,1713,1760,1793,1838,1873,1914,1963,2012,2065,2120,2173,2226,2276,2338,2400,2478,2548,2620,2703,2750,2733,2681,2638,2682,2747,2780,2760,2757,2782,1407,1407,1409,1412,1414,1417,1419,1425,1431,1425,1412,1405,1397,1377,1359,1344,1299,1222,1131,1044,980,961,946,932,901,879,854,805,736,676,636,626,589,564,542,529,516,489,455,413,366,326,269,225,180,152,133,123,98,84,71,69,65,76,82,97,114,124,135,136,131,126,146,156,164,185,298,190,188,201,325,240,271,328,394,466,525,582,646,710,787,844,926,1042,1114,1171,1180,1220,1256,1293,1351,1390,1401,1428,1468,1519,1549,1580,1615,1651,1691,1728,1767,1814,1862,1903,1949,1997,2045,2093,2139,2202,2275,2346,2420,2473,2536,2612,2680,2705,2671,2625,2588,2633,2691,2736,2689,2691,2745,1406,1405,1406,1408,1410,1413,1419,1426,1433,1433,1434,1434,1422,1403,1389,1361,1302,1223,1130,1043,971,925,905,884,864,842,808,759,710,659,607,590,571,536,520,509,495,480,440,390,345,308,330,284,249,232,216,202,187,169,157,154,158,168,242,322,373,379,386,393,397,392,395,407,409,423,438,441,439,450,457,480,506,527,571,640,712,759,802,856,897,950,1020,1080,1163,1250,1297,1317,1337,1358,1395,1444,1445,1452,1479,1508,1555,1574,1583,1605,1626,1656,1685,1718,1751,1786,1822,1858,1892,1931,1971,2020,2075,2137,2204,2257,2320,2362,2417,2392,2372,2332,2347,2434,2521,2555,2539,2551,2599,1405,1404,1403,1404,1407,1411,1418,1426,1440,1448,1457,1460,1441,1423,1394,1336,1255,1191,1104,1026,967,914,878,856,831,808,784,745,700,650,615,577,564,543,517,498,482,460,427,383,347,289,816,795,773,773,764,755,751,742,735,732,738,794,875,947,985,988,992,998,1e3,1e3,1003,1006,1007,1010,1016,1020,1019,1022,1025,1035,1044,1053,1063,1099,1121,1140,1162,1174,1193,1212,1238,1263,1289,1316,1337,1355,1367,1377,1389,1401,1410,1408,1424,1430,1440,1456,1463,1469,1474,1478,1486,1496,1508,1520,1539,1548,1561,1575,1590,1607,1628,1654,1678,1710,1743,1755,1778,1759,1729,1727,1751,1821,1910,1947,1939,1944,1970,1403,1402,1401,1401,1403,1410,1418,1432,1446,1460,1479,1472,1454,1423,1385,1326,1260,1175,1084,1004,945,902,856,829,803,777,747,730,689,647,622,591,566,539,515,503,476,453,434,395,344,291,1301,1299,1297,1296,1295,1294,1293,1292,1292,1291,1296,1307,1320,1331,1337,1338,1338,1338,1338,1339,1339,1339,1339,1339,1339,1340,1340,1340,1341,1341,1341,1342,1343,1341,1346,1346,1349,1350,1351,1353,1355,1356,1357,1357,1360,1361,1362,1363,1364,1365,1366,1369,1368,1368,1368,1368,1368,1369,1369,1370,1370,1370,1371,1372,1372,1373,1374,1375,1376,1377,1383,1381,1382,1384,1385,1385,1386,1392,1384,1384,1390,1399,1411,1418,1420,1426,1423,1409,1408,1407,1406,1406,1410,1424,1438,1452,1471,1491,1481,1461,1428,1382,1311,1221,1142,1056,980,917,871,828,798,762,732,709,693,673,647,619,597,566,534,507,487,464,450,423,381,321,254,1360,1360,1360,1360,1360,1360,1360,1360,1360,1360,1360,1361,1361,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1360,1360,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1361,1361,1362,1361,1361,1361,1361,1361,1361,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1363,1363,1363,1363,1362,1362,1363,1362,1363,1363,1362,1362,1364,1362,1362,1361,1361,1361,1361,1360,1360,1360,1360,1360,1424,1425,1426,1428,1420,1420,1433,1452,1467,1487,1491,1477,1452,1421,1365,1282,1181,1084,1010,945,888,837,795,763,730,699,672,659,640,616,595,573,556,528,509,468,456,422,393,350,292,237,1360,1360,1360,1360,1360,1360,1360,1360,1360,1360,1360,1361,1361,1362,1362,1362,1362,1361,1362,1362,1362,1362,1362,1361,1361,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1361,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1363,1362,1362,1362,1362,1362,1363,1362,1362,1362,1361,1361,1361,1360,1360,1360,1360,1360,1438,1434,1430,1433,1428,1423,1433,1458,1483,1487,1482,1456,1426,1381,1314,1232,1114,1027,968,916,876,829,784,745,712,679,646,625,610,595,580,560,531,510,486,451,423,400,376,335,276,244,1360,1360,1360,1360,1360,1360,1360,1360,1360,1360,1360,1361,1361,1362,1362,1362,1361,1361,1362,1362,1362,1362,1362,1361,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1361,1361,1361,1362,1360,1360,1360,1435,1423,1415,1425,1419,1408,1419,1447,1467,1476,1467,1443,1395,1313,1233,1156,1071,987,936,892,849,820,789,744,704,671,643,626,604,582,570,553,531,507,477,451,416,380,360,331,295,264,1301,1299,1297,1296,1296,1296,1296,1295,1296,1330,1360,1361,1361,1362,1362,1361,1361,1361,1361,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1361,1361,1361,1364,1396,1412,1413,1414,1405,1397,1400,1406,1392,1389,1425,1444,1457,1459,1439,1404,1348,1240,1139,1063,994,932,878,834,796,767,733,702,664,631,613,603,583,564,536,518,499,469,434,400,366,347,326,302,270,817,811,816,815,806,798,788,783,789,872,1090,1277,1355,1362,1361,1360,1360,1361,1361,1361,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1363,1363,1377,1460,1627,1769,1809,1821,1393,1380,1364,1374,1380,1356,1355,1388,1414,1435,1452,1439,1404,1352,1255,1167,1090,1018,946,879,833,790,760,735,699,657,625,601,581,567,561,537,514,494,454,414,377,354,342,325,312,290,363,348,349,338,324,293,281,269,254,326,603,954,1212,1334,1360,1360,1360,1361,1361,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1363,1367,1403,1526,1745,1975,2150,2200,2213,1367,1352,1324,1332,1338,1318,1313,1344,1372,1404,1416,1414,1380,1325,1249,1179,1106,1031,960,891,844,798,760,733,701,665,631,599,571,549,533,529,508,487,463,445,433,419,397,377,360,351,347,315,303,274,261,235,213,197,183,194,351,670,1019,1260,1357,1361,1361,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1363,1381,1487,1692,1933,2121,2205,2232,2246,1338,1317,1282,1283,1287,1264,1259,1291,1327,1345,1369,1355,1325,1288,1222,1142,1067,1005,947,891,842,801,773,738,701,666,622,578,562,541,524,521,514,499,508,500,489,475,457,444,422,395,370,358,333,312,292,258,234,223,205,205,358,635,940,1202,1352,1361,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1363,1395,1539,1733,1929,2089,2176,2193,2221,1295,1276,1241,1221,1212,1192,1212,1251,1273,1280,1306,1289,1246,1214,1156,1086,1012,955,915,872,827,795,767,725,666,629,608,587,570,551,537,524,517,521,525,535,524,515,497,476,443,406,377,364,348,337,301,290,275,271,249,234,382,648,943,1208,1352,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1364,1396,1536,1723,1899,2058,2144,2167,2203,1237,1218,1194,1160,1132,1128,1150,1176,1192,1206,1221,1193,1155,1115,1073,1018,962,915,874,828,782,745,709,657,631,608,589,567,571,571,556,547,557,557,556,557,553,549,531,499,462,419,392,369,355,341,328,316,330,324,293,295,430,655,950,1213,1352,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1363,1364,1397,1537,1721,1893,2032,2096,2138,2186,1164,1149,1136,1108,1082,1067,1068,1079,1087,1110,1119,1102,1074,1046,1013,965,923,881,842,799,756,717,684,655,617,591,575,564,553,550,564,572,573,578,585,587,591,589,566,530,493,442,404,391,374,371,364,344,347,339,323,323,441,662,957,1214,1352,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1363,1364,1396,1530,1709,1883,2003,2064,2110,2162,1101,1096,1086,1063,1031,1015,1003,1002,1003,1019,1039,1036,1023,1005,981,950,916,882,838,808,781,743,701,661,627,597,570,561,557,556,560,571,581,591,599,610,624,619,599,580,534,474,442,425,403,386,372,377,367,363,359,356,464,684,969,1218,1352,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1361,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1364,1394,1522,1695,1866,1979,2036,2081,2138,1060,1067,1055,1016,980,967,954,944,947,965,979,987,985,977,961,939,910,880,876,865,856,816,757,694,647,613,583,571,568,557,566,581,588,608,627,629,639,637,629,599,543,505,463,433,416,401,387,380,388,390,380,386,483,706,983,1223,1353,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1361,1361,1362,1362,1361,1361,1361,1361,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1364,1394,1514,1679,1844,1954,2007,2052,2113,1037,1039,1016,974,941,921,904,902,912,925,938,950,956,960,949,942,926,897,907,908,911,894,825,751,684,639,605,583,576,570,566,580,600,627,650,665,679,687,665,618,562,523,481,449,437,418,401,399,405,396,398,412,515,721,1e3,1228,1353,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1361,1360,1361,1361,1360,1361,1361,1361,1361,1361,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1363,1363,1363,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1363,1363,1362,1362,1362,1362,1362,1363,1392,1512,1663,1817,1928,1978,2025,2080,1015,996,971,936,907,889,871,871,879,898,913,933,940,944,945,939,935,920,938,940,952,945,910,825,741,681,636,606,599,594,580,586,609,646,674,702,730,741,698,632,585,547,514,492,473,450,434,421,419,417,422,431,547,738,1007,1232,1353,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1362,1361,1360,1360,1360,1360,1360,1360,1361,1361,1361,1362,1362,1362,1362,1362,1362,1362,1362,1363,1363,1363,1363,1363,1363,1363,1362,1362,1362,1362,1362,1362,1362,1363,1362,1363,1364,1363,1362,1362,1363,1363,1363,1363,1390,1502,1649,1798,1904,1951,1973,2029,969,952,932,909,886,868,854,850,862,884,905,925,931,940,943,942,945,949,956,968,981,989,968,905,816,747,683,649,633,626,609,607,627,701,754,780,795,800,722,636,595,567,547,527,516,488,467,453,448,447,443,448,564,760,1015,1230,1349,1357,1357,1357,1357,1357,1358,1358,1358,1358,1358,1358,1358,1358,1358,1358,1358,1358,1358,1359,1359,1359,1359,1359,1359,1359,1359,1360,1360,1360,1361,1361,1362,1363,1365,1365,1364,1364,1364,1364,1363,1363,1363,1364,1364,1364,1364,1364,1365,1366,1365,1366,1364,1366,1367,1366,1365,1365,1365,1365,1365,1365,1365,1365,1365,1392,1497,1639,1777,1880,1926,1936,1976,915,906,900,877,862,846,838,840,859,890,910,920,928,937,942,945,956,968,973,985,1002,1018,1013,955,890,824,752,701,672,649,648,656,731,832,891,875,881,852,746,667,624,612,588,579,567,533,511,485,469,475,485,479,556,731,956,1144,1247,1252,1251,1254,1259,1265,1264,1268,1270,1271,1273,1275,1276,1277,1278,1279,1280,1282,1283,1284,1286,1286,1286,1291,1293,1296,1300,1305,1311,1321,1334,1351,1360,1368,1375,1381,1392,1392,1393,1392,1392,1392,1393,1396,1402,1400,1401,1403,1407,1411,1415,1416,1414,1419,1422,1421,1421,1422,1425,1436,1435,1435,1434,1433,1435,1455,1543,1669,1782,1870,1899,1900,1931,873,866,864,857,841,823,818,821,847,879,904,914,924,923,920,940,961,980,989,1001,1021,1040,1047,1012,980,926,832,765,732,703,695,739,858,975,1028,999,964,883,774,714,697,668,647,629,612,586,557,530,505,499,514,498,539,657,836,977,1059,1065,1068,1080,1089,1111,1127,1131,1127,1134,1141,1149,1154,1145,1150,1156,1158,1152,1149,1146,1151,1155,1162,1169,1177,1184,1187,1207,1226,1255,1285,1320,1352,1390,1416,1430,1433,1441,1437,1435,1431,1437,1443,1453,1460,1460,1462,1467,1473,1480,1488,1488,1498,1500,1503,1509,1515,1522,1539,1562,1563,1554,1549,1548,1547,1566,1634,1712,1809,1873,1876,1871,1895,841,838,834,837,827,813,800,796,813,839,874,900,894,889,909,945,965,983,1001,1012,1033,1053,1068,1068,1041,999,941,865,821,801,805,851,987,1109,1147,1090,1010,912,842,792,772,753,716,682,658,631,601,572,548,536,536,520,515,582,699,793,852,869,881,892,920,959,992,996,988,986,1004,1022,1034,1021,1017,1025,1037,1018,1012,1007,1010,1016,1028,1034,1049,1064,1079,1098,1126,1168,1221,1289,1356,1410,1446,1464,1463,1475,1482,1466,1470,1481,1502,1510,1517,1521,1526,1531,1540,1549,1561,1571,1581,1586,1597,1608,1618,1643,1674,1696,1698,1678,1676,1675,1666,1672,1715,1772,1836,1868,1851,1838,1851,823,821,816,812,811,802,787,780,783,801,834,860,859,861,889,935,971,995,1016,1035,1052,1069,1085,1101,1097,1072,1014,960,934,918,962,1029,1135,1242,1281,1211,1099,1019,956,914,875,850,801,742,702,668,640,613,596,578,565,547,528,535,590,645,685,693,720,741,786,855,916,920,902,914,956,966,961,930,934,962,961,934,913,895,890,899,913,936,961,975,987,1001,1041,1098,1172,1255,1337,1417,1445,1467,1485,1497,1501,1485,1491,1522,1540,1552,1562,1563,1572,1580,1592,1607,1622,1634,1646,1662,1679,1695,1708,1741,1776,1783,1783,1776,1775,1778,1770,1764,1786,1816,1843,1846,1836,1817,1806,816,813,807,797,791,787,773,769,764,768,795,807,819,830,863,907,958,1002,1031,1055,1078,1095,1113,1134,1140,1124,1090,1048,1034,1051,1122,1217,1319,1392,1403,1303,1255,1180,1102,1073,1016,951,877,808,756,713,674,646,635,619,598,576,560,557,561,565,588,604,647,708,778,881,940,930,936,981,996,984,955,935,949,976,970,926,890,854,849,853,864,888,917,930,941,961,990,1049,1125,1222,1305,1385,1392,1456,1469,1477,1484,1475,1503,1537,1549,1559,1574,1579,1571,1598,1617,1636,1632,1666,1663,1680,1694,1734,1747,1790,1814,1822,1820,1823,1831,1832,1794,1817,1819,1821,1825,1829,1822,1802,1782,809,805,803,792,780,770,766,760,752,755,760,776,790,806,835,881,930,981,1021,1058,1096,1131,1161,1190,1206,1186,1159,1154,1158,1192,1213,1335,1422,1464,1450,1414,1392,1316,1279,1235,1175,1080,957,874,800,754,713,690,680,658,630,607,599,590,591,594,598,615,669,758,881,983,1035,1035,1054,1101,1092,1054,1005,1013,1022,1037,1016,968,926,893,883,879,887,912,932,959,973,983,1014,1056,1119,1188,1265,1301,1374,1406,1421,1432,1436,1453,1495,1515,1530,1537,1550,1559,1571,1591,1611,1626,1642,1658,1680,1694,1708,1719,1737,1764,1790,1800,1807,1814,1825,1822,1818,1809,1808,1810,1814,1814,1809,1791,1773,813,812,805,791,774,772,763,750,739,742,746,756,767,789,815,852,903,953,1005,1055,1103,1173,1248,1287,1286,1276,1245,1249,1278,1311,1353,1370,1454,1500,1498,1482,1454,1402,1395,1353,1300,1203,1088,977,888,829,766,745,725,708,676,657,639,631,633,638,653,686,728,807,945,1059,1124,1129,1154,1187,1162,1112,1073,1071,1092,1087,1050,1009,960,934,920,915,936,947,967,991,1010,1017,1045,1076,1114,1162,1214,1266,1322,1366,1378,1388,1411,1444,1471,1491,1500,1515,1529,1540,1557,1577,1594,1609,1631,1648,1662,1677,1689,1701,1715,1738,1759,1777,1786,1811,1813,1806,1804,1801,1796,1799,1799,1798,1795,1777,1765,828,817,811,793,778,763,752,739,726,730,733,740,754,774,796,830,876,925,989,1050,1128,1230,1328,1376,1377,1367,1352,1362,1382,1396,1427,1436,1461,1505,1525,1518,1486,1459,1452,1423,1373,1299,1200,1112,999,935,876,829,799,759,743,722,673,665,670,686,723,763,828,889,980,1094,1180,1198,1221,1228,1192,1147,1132,1132,1144,1122,1084,1037,994,987,958,973,987,1001,1029,1047,1047,1051,1069,1093,1124,1153,1193,1236,1281,1318,1337,1364,1387,1424,1452,1467,1478,1495,1508,1525,1543,1561,1577,1601,1619,1631,1644,1659,1673,1691,1708,1727,1745,1763,1787,1806,1801,1794,1791,1788,1784,1784,1783,1782,1782,1769,1756,855,843,830,813,788,771,755,737,722,719,720,726,740,760,782,811,849,904,973,1057,1152,1256,1359,1413,1435,1434,1429,1444,1453,1459,1478,1507,1502,1517,1528,1517,1506,1483,1453,1417,1370,1313,1258,1173,1103,1026,955,917,877,846,820,780,717,694,708,742,798,819,886,975,1052,1123,1189,1221,1236,1237,1216,1170,1177,1170,1184,1159,1111,1066,1051,1032,1007,1017,1032,1056,1077,1106,1100,1090,1092,1107,1128,1156,1184,1223,1254,1286,1314,1349,1388,1414,1430,1438,1458,1477,1488,1511,1528,1544,1562,1581,1601,1618,1640,1670,1695,1707,1721,1736,1750,1768,1791,1804,1793,1782,1781,1778,1775,1772,1772,1771,1766,1760,1748,876,864,854,844,819,787,760,739,724,710,708,711,727,746,767,792,831,883,951,1052,1159,1258,1362,1429,1473,1486,1483,1511,1510,1510,1521,1541,1531,1531,1521,1508,1492,1455,1414,1372,1341,1311,1273,1223,1165,1096,1039,984,941,919,885,805,745,743,754,800,847,886,924,996,1087,1158,1202,1231,1240,1237,1225,1208,1210,1208,1213,1182,1151,1117,1101,1057,1050,1055,1073,1104,1123,1152,1158,1150,1132,1129,1134,1151,1180,1203,1235,1267,1307,1347,1377,1393,1403,1422,1440,1459,1480,1504,1524,1548,1567,1588,1610,1630,1655,1699,1729,1732,1744,1753,1777,1786,1801,1807,1792,1778,1771,1768,1766,1763,1760,1755,1750,1744,1739,866,851,837,833,824,803,772,735,707,688,692,694,706,724,752,783,822,869,935,1030,1131,1233,1341,1436,1494,1530,1525,1543,1544,1538,1552,1559,1546,1536,1514,1492,1458,1430,1372,1334,1300,1274,1252,1228,1186,1138,1086,1039,995,934,869,802,784,783,806,853,905,948,978,1021,1094,1157,1200,1220,1224,1225,1225,1224,1223,1222,1219,1203,1175,1158,1123,1093,1092,1096,1106,1143,1172,1190,1210,1213,1193,1172,1160,1158,1173,1197,1220,1251,1286,1330,1347,1364,1388,1409,1432,1461,1491,1521,1542,1559,1580,1597,1620,1643,1669,1710,1750,1769,1779,1791,1797,1807,1817,1810,1795,1780,1769,1762,1759,1756,1754,1748,1741,1736,1731,832,825,807,808,810,800,772,735,699,676,673,675,674,698,732,773,811,867,928,1026,1130,1225,1333,1434,1505,1545,1545,1561,1570,1572,1573,1567,1557,1533,1505,1477,1429,1394,1352,1306,1267,1238,1222,1195,1173,1138,1098,1049,999,934,862,829,831,829,846,899,956,993,1038,1071,1103,1147,1177,1195,1203,1213,1210,1207,1205,1205,1213,1210,1199,1179,1140,1129,1137,1148,1142,1164,1204,1230,1244,1261,1254,1229,1199,1192,1193,1202,1226,1252,1282,1306,1332,1357,1382,1411,1436,1463,1487,1516,1545,1578,1598,1614,1637,1659,1682,1712,1753,1791,1813,1816,1819,1829,1824,1809,1801,1793,1771,1760,1752,1750,1747,1741,1735,1729,1723,801,805,797,805,813,800,770,734,699,673,662,661,655,669,709,755,799,863,931,1021,1127,1230,1340,1422,1485,1533,1560,1572,1574,1577,1579,1575,1557,1530,1502,1460,1411,1375,1332,1287,1246,1211,1184,1169,1137,1111,1081,1045,1001,952,903,887,904,906,889,913,975,1011,1044,1085,1114,1138,1154,1172,1190,1203,1198,1193,1188,1187,1195,1199,1200,1187,1169,1172,1183,1193,1191,1196,1219,1253,1273,1286,1295,1282,1248,1239,1237,1241,1248,1261,1282,1306,1335,1359,1391,1420,1445,1469,1502,1534,1561,1576,1600,1622,1643,1670,1703,1731,1760,1794,1813,1826,1831,1835,1825,1822,1819,1804,1775,1755,1751,1743,1741,1734,1728,1723,1718,797,798,801,805,809,805,793,756,719,675,660,649,645,652,682,727,780,852,950,1063,1172,1258,1362,1437,1499,1541,1556,1566,1570,1574,1577,1576,1558,1534,1499,1450,1409,1366,1321,1281,1250,1218,1189,1153,1121,1085,1053,1030,990,960,950,970,969,964,919,912,953,989,1030,1062,1091,1122,1145,1177,1195,1203,1200,1192,1183,1178,1176,1179,1182,1187,1198,1202,1217,1230,1235,1238,1237,1264,1286,1307,1318,1316,1295,1295,1297,1291,1293,1310,1301,1320,1359,1375,1410,1442,1462,1488,1507,1527,1560,1587,1607,1630,1649,1672,1698,1723,1749,1772,1788,1811,1834,1841,1836,1836,1827,1808,1779,1764,1749,1742,1734,1729,1724,1719,1714,793,795,801,806,813,819,814,785,745,687,654,639,636,643,662,700,761,837,971,1122,1244,1335,1393,1452,1506,1539,1553,1560,1566,1569,1573,1572,1558,1540,1513,1472,1425,1370,1336,1304,1285,1253,1222,1188,1152,1111,1080,1052,1032,1011,1004,1008,998,976,948,938,951,978,1010,1046,1080,1115,1158,1185,1208,1212,1210,1202,1190,1172,1164,1166,1174,1193,1216,1233,1244,1257,1267,1270,1272,1270,1288,1311,1328,1338,1335,1333,1337,1336,1340,1348,1335,1344,1363,1400,1423,1449,1477,1503,1526,1548,1563,1579,1599,1622,1645,1668,1690,1718,1744,1779,1810,1828,1837,1849,1850,1846,1834,1805,1784,1764,1753,1740,1733,1727,1722,1717,1712,789,786,789,798,811,826,826,796,752,701,657,630,616,616,633,677,727,843,1004,1159,1287,1374,1424,1467,1507,1521,1542,1554,1562,1566,1570,1567,1555,1539,1512,1468,1436,1394,1360,1346,1327,1296,1260,1222,1186,1158,1128,1106,1079,1054,1029,1010,989,974,950,969,991,1006,1028,1050,1085,1117,1152,1187,1211,1218,1220,1209,1191,1168,1158,1161,1178,1202,1225,1248,1260,1270,1286,1291,1284,1293,1300,1315,1337,1352,1359,1366,1366,1364,1368,1372,1370,1380,1393,1406,1433,1457,1480,1507,1535,1557,1581,1600,1617,1633,1652,1675,1701,1730,1763,1799,1833,1851,1862,1872,1872,1871,1850,1823,1795,1776,1757,1744,1731,1725,1720,1715,1710,790,782,787,792,803,821,828,809,758,700,664,626,603,590,613,651,730,864,1009,1127,1223,1315,1375,1425,1457,1494,1517,1532,1552,1558,1566,1565,1553,1540,1525,1503,1463,1417,1392,1377,1353,1323,1285,1247,1214,1189,1164,1137,1093,1059,1033,1012,992,972,972,988,1016,1038,1055,1074,1102,1133,1165,1190,1213,1219,1224,1214,1185,1167,1156,1154,1181,1209,1234,1251,1268,1284,1288,1298,1299,1306,1312,1324,1342,1359,1376,1384,1382,1382,1384,1387,1393,1400,1412,1426,1441,1461,1482,1508,1539,1564,1589,1617,1634,1652,1669,1688,1712,1737,1767,1803,1837,1865,1890,1907,1914,1914,1894,1860,1829,1796,1772,1759,1740,1724,1718,1713,1708,786,783,781,794,817,822,829,809,760,691,644,609,583,570,566,640,752,921,1068,1216,1322,1381,1424,1465,1504,1532,1545,1555,1561,1564,1568,1572,1566,1554,1539,1513,1480,1442,1415,1401,1373,1338,1303,1266,1238,1209,1184,1151,1102,1064,1037,1020,1005,992,994,1011,1032,1058,1077,1092,1116,1154,1184,1204,1218,1222,1228,1213,1186,1164,1154,1153,1174,1209,1237,1255,1270,1286,1293,1298,1303,1307,1315,1331,1347,1365,1382,1389,1395,1396,1395,1395,1399,1406,1417,1429,1444,1464,1484,1518,1552,1580,1606,1628,1648,1666,1684,1709,1735,1761,1789,1820,1852,1877,1902,1930,1949,1952,1938,1910,1864,1815,1787,1768,1748,1728,1716,1711,1706],scale:100,size:200,boundary:[[2947,2947,2947,2947,2947,2947,2947,2947,2947,2947,2947,2947,2947,2947,2947,2947,2947,2947,2947,2947,2947,2947,2947,2947,2947,2947,2947,2947,2947,2947,2947,2947,2947,2947,2948,2948,2948,2949,2949,2949,2950,2950,2950,2951,2951,2951,2951,2952,2952,2953,2954,2955,2956,2957,2958,2959,2960,2962,2964,2966,2968,2971,2974,2978,2981,2984,2988,2992,2995,2998,3e3,3003,3005,3007,3010,3012,3014,3016,3019,3021,3023,3026,3029,3031,3034,3037,3040,3042,3045,3048,3050,3053,3055,3058,3060,3062,3065,3067,3069,3071,3073,3075,3077,3079,3081,3081,3081,3082,3082,3077,3073,3068,3064,3059,3053,3048,3043,3037,3031,3025,3020,3010,3001,2990,2978,2965,2952,2939,2925,2916,2906,2897,2887,2880,2873,2865,2857,2848,2838,2827,2815,2802,2789,2776,2763,2752,2742,2731,2720,2710,2699,2688,2677,2667,2657,2647,2636,2629,2622,2616,2609,2603,2598,2592,2587,2582,2577,2573,2568,2562,2555,2549,2543,2537,2531,2525,2519,2513,2507,2501,2496,2492,2487,2483,2479,2476,2473,2469,2466,2463,2459,2456,2452,2448,2444,2440,2435,2431,2427,2423,2419,2415,2412,2408,2405,2402,2398,2395,2391,2388,2384,2380,2376,2372,2369,2365,2361,2358,2354,2351,2348,2345,2341,2338,2335,2332,2329,2327,2324,2322,2319,2316,2314,2313,2312,2310,2309,2308,2307,2305,2304,2303,2301,2300,2298,2297,2296,2294,2293,2292,2291,2290,2289,2289,2288,2288,2287,2287,2287,2286,2286,2283,2281,2279,2276,2274,2272,2270,2268,2266,2264,2262,2259,2258,2257,2255,2254,2254,2254,2253,2253,2253,2254,2254,2254,2254,2254,2255,2255,2255,2256,2256,2257,2257,2257,2258,2258,2257,2257,2256,2255,2254,2254,2253,2252,2251,2251,2250,2249,2249,2248,2247,2246,2247,2247,2247,2247,2248,2248,2248,2249,2250,2252,2253,2255,2257,2258,2260,2262,2265,2269,2273,2277,2281,2285,2289,2292,2298,2303,2308,2313,2318,2323,2328,2333,2338,2343,2348,2354,2360,2367,2374,2381,2388,2395,2402,2409,2415,2421,2427,2434,2439,2444,2449,2454,2462,2469,2477,2484,2493,2503,2512,2521,2533,2545,2557,2569,2582,2595,2608,2621,2636,2651,2665,2680,2694,2708,2721,2732,2743,2754,2767,2781,2795,2810,2827,2844,2860,2876,2890,2905,2918,2931,2943,2956,2968,2980,2993,3006,3018,3029,3039,3048,3055,3062,3067,3072,3076,3081,3086,3091,3097,3104,3111,3118,3126,3134,3142,3150,3155,3161,3167,3172,3177,3182,3186,3191,3197,3202,3209,3216,3224,3233,3242,3251,3260,3270,3279,3289,3297,3305,3313,3320,3326,3333,3339,3345,3351,3357,3363,3369,3376,3382,3388,3394,3400,3406,3411,3417,3421,3425,3430,3434,3436,3439,3442,3444,3445,3446,3447,3447,3447,3447,3446,3446,3445,3445,3445,3444,3444,3443,3443,3442,3442,3442,3441,3441,3441,3441,3440,3440,3440,3440,3440,3440,3440,3439,3439,3439,3439,3439,3439,3439],[786,785,783,783,783,782,782,781,781,783,786,790,794,800,806,812,817,819,821,822,822,824,826,828,829,826,823,816,809,800,791,777,760,741,723,707,691,679,668,656,644,633,622,616,609,603,596,590,583,581,578,574,570,569,568,567,566,576,597,619,640,661,682,712,752,800,840,880,921,958,994,1031,1068,1105,1142,1179,1216,1248,1281,1301,1322,1338,1355,1369,1381,1392,1403,1413,1424,1434,1444,1454,1465,1474,1484,1494,1504,1512,1520,1526,1532,1535,1539,1542,1545,1548,1550,1553,1555,1557,1558,1560,1561,1562,1563,1563,1564,1565,1566,1567,1568,1569,1570,1571,1572,1570,1569,1567,1566,1563,1560,1557,1554,1550,1546,1543,1539,1532,1526,1519,1513,1505,1497,1489,1480,1470,1461,1452,1442,1435,1429,1422,1415,1412,1408,1405,1401,1394,1387,1380,1373,1364,1356,1347,1338,1330,1321,1312,1303,1294,1285,1275,1266,1259,1252,1245,1238,1231,1223,1216,1209,1202,1196,1190,1184,1176,1168,1160,1151,1139,1127,1115,1102,1093,1083,1074,1064,1057,1051,1044,1037,1033,1028,1024,1020,1015,1010,1007,1005,1002,998,995,992,993,993,993,994,996,998,1004,1011,1016,1021,1027,1032,1038,1045,1051,1058,1062,1067,1072,1077,1080,1084,1088,1092,1098,1104,1110,1116,1126,1135,1145,1154,1162,1169,1177,1184,1189,1194,1199,1204,1208,1211,1214,1218,1219,1220,1221,1222,1224,1225,1227,1228,1226,1224,1219,1213,1207,1200,1193,1186,1181,1175,1170,1164,1162,1159,1157,1154,1154,1153,1153,1153,1156,1160,1167,1174,1183,1192,1200,1209,1216,1223,1230,1237,1242,1246,1251,1255,1259,1263,1266,1270,1274,1278,1282,1286,1288,1289,1291,1293,1294,1295,1296,1298,1299,1300,1302,1303,1304,1305,1306,1307,1309,1311,1313,1315,1319,1323,1327,1331,1335,1339,1343,1347,1351,1356,1360,1365,1369,1374,1378,1382,1384,1385,1387,1389,1390,1392,1393,1395,1395,1395,1395,1396,1396,1396,1395,1395,1395,1395,1395,1395,1396,1397,1398,1399,1400,1402,1404,1406,1409,1412,1414,1417,1420,1423,1426,1429,1433,1437,1440,1444,1449,1454,1459,1464,1469,1474,1479,1484,1492,1501,1509,1518,1526,1535,1543,1552,1559,1566,1573,1580,1587,1593,1600,1606,1611,1617,1622,1628,1633,1638,1643,1648,1652,1657,1661,1666,1670,1675,1680,1684,1690,1697,1703,1709,1715,1722,1729,1735,1742,1748,1755,1761,1768,1775,1782,1789,1796,1804,1812,1820,1828,1836,1844,1852,1858,1865,1871,1877,1883,1889,1895,1902,1909,1916,1923,1930,1935,1940,1944,1949,1951,1953,1953,1952,1949,1946,1942,1938,1932,1926,1918,1910,1899,1889,1877,1864,1852,1840,1828,1815,1808,1801,1794,1787,1783,1778,1773,1768,1763,1758,1753,1748,1743,1738,1733,1728,1725,1722,1719,1716,1715,1714,1713,1711,1710,1709,1708,1706],[2947,2948,2948,2948,2949,2949,2949,2950,2950,2950,2951,2951,2951,2952,2952,2952,2953,2954,2955,2956,2957,2958,2959,2960,2961,2961,2962,2962,2962,2962,2963,2963,2963,2963,2962,2962,2962,2961,2961,2961,2960,2960,2960,2959,2959,2958,2958,2958,2957,2958,2958,2959,2959,2959,2960,2960,2961,2961,2961,2962,2962,2963,2963,2963,2964,2964,2965,2965,2965,2965,2964,2963,2962,2959,2957,2954,2952,2946,2940,2934,2927,2920,2913,2907,2900,2892,2885,2878,2870,2864,2858,2851,2845,2840,2835,2830,2824,2817,2810,2802,2794,2784,2775,2765,2754,2743,2731,2721,2710,2701,2691,2683,2675,2666,2658,2648,2638,2627,2615,2604,2593,2582,2572,2561,2551,2539,2527,2512,2497,2480,2464,2447,2430,2414,2398,2383,2368,2352,2337,2320,2303,2285,2267,2250,2233,2217,2202,2188,2174,2158,2142,2125,2108,2091,2074,2059,2044,2030,2016,2002,1988,1975,1962,1948,1935,1925,1915,1909,1902,1897,1892,1887,1882,1878,1873,1868,1863,1859,1856,1853,1850,1846,1843,1840,1836,1834,1832,1829,1827,1825,1823,1820,1818,1816,1813,1811,1809,1807,1805,1802,1800,1798,1796,1793,1791,1789,1787,1784,1782,1780,1777,1775,1772,1769,1767,1764,1762,1759,1757,1754,1751,1749,1746,1744,1741,1739,1736,1734,1731,1729,1726,1724,1721,1720,1720,1719,1718,1717,1717,1716,1715,1715,1715,1716,1716,1716,1716,1716,1716,1716,1716,1716,1716,1717,1717,1717,1717,1718,1718,1719,1719,1720,1721,1721,1722,1722,1723,1724,1724,1725,1725,1726,1727,1727,1727,1727,1727,1727,1727,1727,1727,1727,1727,1726,1726,1726,1725,1725,1725,1724,1722,1721,1720,1719,1718,1717,1716,1714,1713,1711,1710,1708,1707,1705,1704,1701,1699,1697,1695,1691,1687,1682,1678,1672,1666,1659,1652,1645,1637,1629,1621,1613,1606,1598,1590,1582,1575,1568,1560,1553,1545,1538,1530,1523,1515,1508,1500,1491,1481,1472,1462,1458,1453,1448,1443,1441,1439,1436,1434,1432,1429,1427,1425,1423,1421,1419,1417,1414,1412,1410,1408,1408,1408,1408,1407,1407,1407,1407,1406,1406,1405,1405,1405,1404,1404,1403,1403,1404,1406,1407,1409,1413,1417,1421,1424,1428,1431,1435,1438,1438,1437,1436,1435,1430,1424,1419,1414,1408,1403,1398,1393,1387,1380,1373,1367,1360,1352,1345,1338,1329,1320,1308,1295,1281,1266,1251,1237,1218,1200,1182,1164,1147,1129,1115,1101,1089,1077,1069,1060,1055,1049,1043,1037,1033,1029,1022,1015,1003,992,980,969,955,942,928,915,904,894,883,873,865,857,849,841,836,832,828,823,821,820,818,816,814,813,811,809,810,811,812,813,817,820,824,828,833,837,846,855,860,865,871,876,876,875,870,866,857,849,840,832,824,816,809,801,800,799,798,797,796,795,794,793,792,791,790,789,789,789,790,790,786,783,784,786],[3439,3439,3439,3439,3439,3439,3439,3439,3439,3439,3439,3439,3439,3440,3440,3440,3440,3440,3440,3439,3439,3439,3439,3438,3438,3437,3436,3435,3434,3433,3431,3429,3428,3426,3424,3422,3420,3418,3416,3413,3411,3408,3405,3402,3399,3395,3392,3388,3384,3378,3373,3367,3361,3355,3348,3341,3334,3326,3318,3310,3302,3294,3286,3277,3269,3260,3250,3241,3232,3222,3212,3202,3192,3183,3174,3166,3158,3150,3143,3137,3131,3128,3124,3120,3117,3115,3113,3111,3110,3107,3105,3102,3100,3097,3093,3088,3084,3080,3075,3072,3069,3066,3062,3056,3050,3042,3034,3026,3018,3009,3002,2964,2926,2848,2753,2648,2540,2439,2338,2258,2199,2180,2160,2160,2160,2160,2160,2160,2160,2160,2160,2160,2160,2160,2160,2172,2184,2221,2258,2301,2342,2375,2407,2424,2430,2418,2405,2384,2363,2346,2328,2314,2300,2288,2276,2264,2253,2240,2228,2215,2203,2191,2180,2169,2157,2150,2142,2134,2127,2120,2113,2106,2099,2092,2085,2078,2072,2065,2059,2053,2046,2040,2034,2027,2021,2015,2010,2004,1998,1993,1987,1982,1976,1971,1967,1962,1957,1953,1948,1943,1939,1935,1931,1927,1924,1922,1919,1917,1915,1914,1913,1912,1911,1910,1909,1908,1907,1906,1905,1904,1903,1902,1901,1900,1899,1900,1901,1902,1903,1904,1905,1906,1906,1910,1914,1917,1921,1924,1928,1932,1935,1940,1944,1948,1953,1957,1962,1966,1970,1975,1980,1985,1989,1995,2e3,2009,2018,2029,2041,2056,2071,2088,2106,2122,2137,2151,2164,2174,2184,2191,2198,2205,2212,2223,2234,2244,2255,2267,2278,2288,2299,2306,2313,2320,2327,2335,2343,2352,2360,2366,2372,2375,2378,2381,2384,2389,2394,2401,2409,2420,2430,2444,2458,2474,2490,2507,2524,2540,2555,2568,2582,2594,2606,2618,2630,2640,2651,2661,2671,2679,2688,2693,2697,2702,2707,2707,2707,2707,2707,2707,2707,2710,2713,2719,2725,2731,2737,2743,2749,2755,2760,2765,2770,2775,2780,2785,2790,2795,2800,2804,2808,2811,2815,2815,2816,2813,2810,2804,2798,2790,2782,2773,2764,2754,2745,2734,2723,2661,2599,2458,2316,2143,1970,1808,1646,1534,1423,1391,1360,1360,1360,1360,1360,1360,1360,1360,1360,1360,1360,1373,1386,1400,1413,1515,1617,1719,1821,1919,2017,2115,2213,2221,2229,2238,2246,2239,2232,2226,2221,2216,2212,2208,2203,2199,2195,2191,2186,2181,2175,2169,2162,2156,2150,2144,2138,2131,2125,2119,2113,2105,2098,2089,2080,2068,2056,2043,2029,2016,2003,1989,1976,1965,1954,1942,1931,1922,1913,1904,1895,1885,1876,1864,1851,1840,1829,1817,1806,1798,1790,1786,1782,1780,1778,1776,1773,1771,1769,1767,1765,1763,1760,1758,1756,1754,1752,1750,1748,1745,1743,1741,1739,1737,1735,1733,1731,1729,1727,1725,1723,1722,1721,1719,1718,1717,1716,1715,1714,1713,1713,1712,1712,1712,1711,1711,1710,1710,1709,1709,1708,1708,1707,1707,1706]],assetPath:`/models/hilly-terrain-b5292f5de8b4.glb`};function md(e,t){let n=[],i=[],a=[],o=[`#665438`,`#846d49`,`#a58c62`,`#ad986e`,`#806b48`],s=new q;for(let r=0;r<4;r++){let c=e[r],l=c.length,u=n.length/3;for(let e=0;e<l;e++){let d=-100+e*200/(l-1),f=r<2?d:r===2?-100:100,p=r>=2?d:r===0?-100:100,m=c[e]/t+.015;for(let t=0;t<=4;t++)if(n.push(f,X.lerp(m,-5.8,t/4),p),s.set(o[t]),i.push(s.r,s.g,s.b),e<l-1&&t<4){let n=u+e*5+t,r=n+4+1;a.push(n,n+1,r,r,n+1,r+1)}}}let c=new De;c.setAttribute(`position`,new dt(n,3)),c.setAttribute(`color`,new dt(i,3)),c.setIndex(a),c.computeVertexNormals();let l=new J(c,new r({vertexColors:!0,roughness:1,side:2}));return l.name=`terrain-soil-perimeter`,l.receiveShadow=!0,l}var hd={title:`Hilly terrain`,author:`distant_voices`,source:`https://sketchfab.com/3d-models/hilly-terrain-3375904cd95d43dcbbb44ac4cea6c984`,license:`https://creativecommons.org/licenses/by/4.0/`},gd,_d;function vd(e){if(gd)throw Error(`Hilly terrain template already installed`);if(!e.getObjectByName(`hilly-terrain-surface`))throw Error(`Hilly terrain surface missing`);e.name=`hilly-terrain-template`,e.userData.attribution=hd,e.traverse(e=>{e instanceof J&&(e.castShadow=e.receiveShadow=!0,e.name=`imported-hilly-terrain`)}),e.updateMatrixWorld(!0),gd=e}async function yd(){if(!gd){if(_d)return _d;_d=(async()=>{let[{GLTFLoader:e},{MeshoptDecoder:t},n]=await Promise.all([co(()=>import(`./GLTFLoader-BFjgnd6d.js`).then(e=>e.n),__vite__mapDeps([0,1])),co(()=>import(`./meshopt_decoder.module-DXTYc6wn.js`),[]),fetch(wa(pd.assetPath))]);if(!n.ok)throw Error(`Terrain pegunungan belum dapat dimuat.`);let{scene:r}=await new e().setMeshoptDecoder(t).parseAsync(await n.arrayBuffer(),``);try{vd(r)}catch(e){throw Xa([r]),e}})();try{await _d}finally{_d=void 0}}}function bd(e,t){let n=pd.resolution,r=X.clamp((e+100)/200*(n-1),0,n-1.00001),i=X.clamp((t+100)/200*(n-1),0,n-1.00001),a=Math.floor(r),o=Math.floor(i),s=pd.heights;return X.lerp(X.lerp(s[o*n+a],s[o*n+a+1],r-a),X.lerp(s[(o+1)*n+a],s[(o+1)*n+a+1],r-a),i-o)/pd.scale}function xd(){let e=new _;e.name=`imported-mountain-terrain`,e.userData.staticMapScenery=!0,e.add(md(pd.boundary,pd.scale));let t=!1,n=()=>{!t&&gd&&(e.add(Ya(gd)),e.updateMatrixWorld(!0),t=!0)};return n(),{root:e,heightAt:bd,async prepare(e=()=>!0){t||(await yd(),e()&&n())}}}var Sd=.05;function Cd(e=Gu().bounds){return[new a(new z(1,0,0),-e.minX+Sd),new a(new z(-1,0,0),e.maxX+Sd),new a(new z(0,0,1),-e.minZ+Sd),new a(new z(0,0,-1),e.maxZ+Sd)]}export{dl as $,is as $t,Fl as A,St as An,hc as At,Tl as B,fc as Bt,uu as C,pa as Cn,Tc as Ct,jl as D,Bi as Dn,Cc as Dt,Ql as E,Kt as En,Sc as Et,Ul as F,lc as Ft,wl as G,Fs as Gt,Cl as H,Ls as Ht,Ml as I,pc as It,gl as J,Ts as Jt,yl as K,Ns as Kt,Nl as L,$s as Lt,Ol as M,uc as Mt,Gl as N,ac as Nt,kl as O,yt as On,gc as Ot,Hl as P,dc as Pt,pl as Q,us as Qt,Dl as R,oc as Rt,lu as S,ba as Sn,yc as St,Kl as T,Zi as Tn,xc as Tt,bl as U,Bs as Ut,Sl as V,Ks as Vt,xl as W,Hs as Wt,ml as X,xs as Xt,hl as Y,ws as Yt,fl as Z,fs as Zt,bu as _,Na as _n,Rc as _t,Yu as a,So as an,Vc as at,fu as b,Ca as bn,Dc as bt,Hu as c,po as cn,zc as ct,Uu as d,no as dn,jc as dt,Ro as en,Jc as et,Wu as f,$ as fn,Fc as ft,Su as g,Ia as gn,Lc as gt,Ou as h,La as hn,Ic as ht,fd as i,Po as in,Hc as it,Al as j,mc as jt,Wl as k,bt as kn,vc as kt,Bu as l,mo as ln,kc as lt,Pu as m,za as mn,Ac as mt,hd as n,No as nn,qc as nt,Ku as o,ko as on,Wc as ot,Nu as p,Ya as pn,Nc as pt,vl as q,ks as qt,xd as r,Mo as rn,Uc as rt,qu as s,lo as sn,Gc as st,Cd as t,jo as tn,Kc as tt,Gu as u,co as un,Pc as ut,hu as v,Oa as vn,Mc as vt,ql as w,ha as wn,bc as wt,du as x,Sa as xn,_c as xt,cu as y,wa as yn,Oc as yt,El as z,tc as zt};