/**
* name: jb-utils
* version 1.1.2
* description: jb-utils前端常用方法库
* author: ecitlm
* website: https://ecitlm.github.io/JB-Utils/index.html
* Date: 2022-4-17
**/

!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(e="undefined"!=typeof globalThis?globalThis:e||self).stringifyQueryString=o()}(this,(function(){"use strict";var e=function(o,n){var t=[];for(var i in o)if(Object.prototype.hasOwnProperty.call(o,i)){var f=o[i],r=encodeURIComponent(i),d=void 0;d="object"==typeof f?e(f,n?n+"["+r+"]":r):(n?n+"["+r+"]":r)+"="+encodeURIComponent(f),t.push(d)}return t.join("&")};return e}));
