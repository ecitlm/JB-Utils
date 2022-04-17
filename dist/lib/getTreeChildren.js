/**
* name: jb-utils
* version 1.1.2
* description: jb-utils前端常用方法库
* author: ecitlm
* website: https://ecitlm.github.io/JB-Utils/index.html
* Date: 2022-4-17
**/

!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).getTreeChildren=n()}(this,(function(){"use strict";return function(e,n){var i=!1,t=null,o=function(e){Array.isArray(e)&&!i&&e.forEach((function(e){e.id===n?(t=e,i=!0):e.children&&o(e.children)}))};return o(e),t}}));
