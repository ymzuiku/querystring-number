!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e=e||self).mula={})}(this,function(e){"use strict";function c(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(e){return null}}function n(e){try{return encodeURIComponent(e)}catch(e){return null}}function t(e,n){if(!e)return null;for(var t,o=/([^=?&]+)=?([^&]*)/g,r={};t=o.exec(e);){var u=c(t[1]),i=c(t[2]);null===u||null===i||u in r||(n||(i=isNaN(Number(i))?i:Number(i)),r[u]=i)}return r}function o(e,n){void 0===n&&(n="");var t,o,r=[];for(o in"string"!=typeof n&&(n="?"),e)if(Object.prototype.hasOwnProperty.call(e,o)){if((t=e[o])||null!=t&&!isNaN(t)||(t=""),o=encodeURIComponent(o),t=encodeURIComponent(t),null===o||null===t)continue;r.push(o+"="+t)}return r.length?n+r.join("&"):""}var r={parse:t,stringify:o,decode:c,encode:n};e.decode=c,e.default=r,e.encode=n,e.parse=t,e.stringify=o,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=index.umd.js.map
