!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e=e||self).queryString={})}(this,function(e){"use strict";function l(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(e){return null}}function n(e){try{return encodeURIComponent(e)}catch(e){return null}}function t(e,n){if(!e)return null;for(var t,o=/([^=?&]+)=?([^&]*)/g,r={};t=o.exec(e);){var i=l(t[1]),u=l(t[2]);if(!(null===i||null===u||i in r))if(n||"string"!=typeof u)r[i]=u;else{var f=Number(u),c=isNaN(f)?u:f;r[i]=u==c.toString()?c:u}}return r}function o(e,n){void 0===n&&(n="");var t,o,r=[];for(o in"string"!=typeof n&&(n="?"),e)if(Object.prototype.hasOwnProperty.call(e,o)){if((t=e[o])||null!=t&&!isNaN(t)||(t=""),o=encodeURIComponent(o),t=encodeURIComponent(t),null===o||null===t)continue;r.push(o+"="+t)}return r.length?n+r.join("&"):""}var r={parse:t,stringify:o,decode:l,encode:n};e.decode=l,e.default=r,e.encode=n,e.parse=t,e.stringify=o,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=index.js.map
