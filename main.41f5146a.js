parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function n(n){if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(n=e(n))){var r=0,t=function(){};return{s:t,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a,i=!0,l=!1;return{s:function(){o=n[Symbol.iterator]()},n:function(){var n=o.next();return i=n.done,n},e:function(n){l=!0,a=n},f:function(){try{i||null==o.return||o.return()}finally{if(l)throw a}}}}function r(n){return a(n)||o(n)||e(n)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(n,r){if(n){if("string"==typeof n)return i(n,r);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(n,r):void 0}}function o(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}function a(n){if(Array.isArray(n))return i(n)}function i(n,r){(null==r||r>n.length)&&(r=n.length);for(var t=0,e=new Array(r);t<r;t++)e[t]=n[t];return e}var l,c=r(document.querySelectorAll("input")),u=n(c);try{for(u.s();!(l=u.n()).done;){var f=l.value,s='\n    <label\n      class="field-label"\n      for='.concat(f.id,"\n    >\n    ").concat(y(f.name),"\n    </label>\n  ");f.placeholder=y(f.name),f.insertAdjacentHTML("beforebegin",s)}}catch(b){u.e(b)}finally{u.f()}function y(n){for(var r=n,t=1;t<n.length;t++)n[t]===n[t].toUpperCase()&&(n[t].toLowerCase(),r="".concat(n.slice(0,t)," ").concat(n.slice(t).toLowerCase()));return r[0].toUpperCase()+r.slice(1)}
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.41f5146a.js.map