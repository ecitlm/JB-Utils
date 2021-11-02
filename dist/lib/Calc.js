/**
* name: jb-utils
* version 1.1.1
* description: jb-utils前端常用方法库
* author: ecitlm
* website: https://ecitlm.github.io/JB-Utils/index.html
* Date: 2021-11-2
**/

!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).Calc=n()}(this,(function(){"use strict";function t(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function n(n){return function(n){if(Array.isArray(n))return t(n)}(n)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(n)||function(n,r){if(n){if("string"==typeof n)return t(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?t(n,r):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}var e=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,o,a;return e=t,o=[{key:"add",value:function(){for(var t=0,r=[],e=arguments.length,o=new Array(e),a=0;a<e;a++)o[a]=arguments[a];for(var i=0,u=o;i<u.length;i++){var f=u[i];r.push.apply(r,n(String(f).split(".")))}for(var l=r.map((function(t){return t.length})),h=Math.max.apply(Math,n(l)),c=0;c<o.length;c++)t+=Math.round(o[c]*Math.pow(10,h));return t/Math.pow(10,h)}},{key:"sub",value:function(){for(var t=0,n=arguments.length,r=new Array(n),e=0;e<n;e++)r[e]=arguments[e];for(var o=0|r[0],a=0;a<r.length;a++){var i=r[a].toString(),u=i.indexOf("."),f=0;u>-1&&(t=(f=i.length-1-u)>t?f:t)}for(var l=0;l<r.length;l++)0===l?o=Math.round(r[l]*Math.pow(10,t)):o-=Math.round(r[l]*Math.pow(10,t));return o/Math.pow(10,t)}},{key:"ride",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var e=n[0].toString(),o=n[1].toString(),a=e.indexOf("."),i=o.indexOf("."),u=[0,0];return a>-1&&(u[0]=e.length-1-a),i>-1&&(u[1]=o.length-1-a),Math.round(n[0]*Math.pow(10,u[0])*(n[1]*Math.pow(10,u[1])))/Math.pow(10,u[0]+u[1])}},{key:"exc",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=t.toString(),e=n.toString(),o=r.indexOf("."),a=e.indexOf("."),i=[0,0];return o>-1&&(i[0]=r.length-1-o),a>-1&&(i[1]=e.length-1-o),Math.round(t*Math.pow(10,i[0]))/(Math.round(n*Math.pow(10,i[1]))*Math.pow(10,i[0]-i[1]))}}],o&&r(e.prototype,o),a&&r(e,a),t}();return e}));
