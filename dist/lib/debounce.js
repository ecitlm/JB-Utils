/**
* name: jb-utils
* version 1.1.2
* description: jb-utils前端常用方法库
* author: ecitlm
* website: https://ecitlm.github.io/JB-Utils/index.html
* Date: 2022-4-17
**/

!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).debounce=n()}(this,(function(){"use strict";return function(e,n){void 0===n&&(n=500);var t=null;return function(){for(var o=this,i=[],u=0;u<arguments.length;u++)i[u]=arguments[u];t&&clearTimeout(t),t=setTimeout((function(){t=null,e.apply(o,i)}),n)}}}));
