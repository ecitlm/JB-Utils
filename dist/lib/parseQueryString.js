/**
* name: jb-utils
* version 1.1.1
* description: jb-utils前端常用方法库
* author: ecitlm
* website: https://ecitlm.github.io/JB-Utils/index.html
* Date: 2021-11-8
**/

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).parseQueryString=t()}(this,(function(){"use strict";return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.href,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e.split("?")[1]||"";if(!n)return{};for(var i=n.split("&"),o={},f=0;f<i.length;){var r=i[f].split("=");o[r[0]]=r[1]?decodeURI(r[1]):"",f++}return t?o[t]:o}}));
