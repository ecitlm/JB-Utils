/**
* name: jb-utils
* description: jb-utils前端常用方法库
* author: ecitlm
* website: https://ecitlm.github.io/JB-Utils/index.html
* Date: 2021-10-25
**/

!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).getTreeChildren=n()}(this,(function(){"use strict";return function(e,n){var i=!1,t=null;return function e(o){Array.isArray(o)&&!i&&o.forEach((function(o){o.id===n?(t=o,i=!0):o.children&&e(o.children)}))}(e),t}}));
