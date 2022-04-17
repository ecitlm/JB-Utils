/**
* name: jb-utils
* version 1.1.2
* description: jb-utils前端常用方法库
* author: ecitlm
* website: https://ecitlm.github.io/JB-Utils/index.html
* Date: 2022-4-17
**/

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).throttle=t()}(this,(function(){"use strict";return function(e,t){void 0===t&&(t=500);var n=0;return function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];var f=(new Date).getTime();f-n>t&&(e.apply(this,o),n=f)}}}));
