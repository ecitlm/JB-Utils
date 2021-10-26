/**
* name: jb-utils
* version 1.1.0
* description: jb-utils前端常用方法库
* author: ecitlm
* website: https://ecitlm.github.io/JB-Utils/index.html
* Date: 2021-10-26
**/

!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).debounce=n()}(this,(function(){"use strict";return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,t=null;return function(){for(var o=this,i=arguments.length,u=new Array(i),f=0;f<i;f++)u[f]=arguments[f];t&&clearTimeout(t),t=setTimeout((function(){t=null,e.apply(o,u)}),n)}}}));
