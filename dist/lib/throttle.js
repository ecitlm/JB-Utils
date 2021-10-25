/**
* name: jb-utils
* description: jb-utils前端常用方法库
* author: ecitlm
* website: https://ecitlm.github.io/JB-Utils/index.html
* Date: 2021-10-25
**/

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).throttle=t()}(this,(function(){"use strict";return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=0;return function(){var o=(new Date).getTime();if(o-n>t){for(var i=arguments.length,f=new Array(i),r=0;r<i;r++)f[r]=arguments[r];e.apply(this,f),n=o}}}}));
