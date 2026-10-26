import{s as e}from"./diorama-style-CCQKhlWv.js";var t=class extends e{onBeforeCompile(e){e.fragmentShader=e.fragmentShader.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
  totalEmissiveRadiance *= vColor.rgb / max( max( vColor.r, vColor.g ), max( vColor.b, 1e-3 ) );
#endif`)}customProgramCacheKey(){return`rv-carriage-tail-lamp`}};function n(e,n=e){let r=t.prototype;return e.constructor===t&&n.onBeforeCompile===r.onBeforeCompile&&n.customProgramCacheKey===r.customProgramCacheKey}export{n,t};