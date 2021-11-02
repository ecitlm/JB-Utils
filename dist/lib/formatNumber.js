/**
* name: jb-utils
* version 1.1.1
* description: jb-utils前端常用方法库
* author: ecitlm
* website: https://ecitlm.github.io/JB-Utils/index.html
* Date: 2021-11-2
**/

!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).formatNumber=n()}(this,(function(){"use strict";return function(e){if(isNaN(e))throw new TypeError("num is not a number");return(""+e).replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,"$1,")}}));
