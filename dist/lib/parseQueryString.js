/**
* name: jb-utils
* description: jb-utils前端常用方法库
* author: ecitlm
* website: https://ecitlm.github.io/JB-Utils/index.html
* Date: 2021-10-25
**/

!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).parseQueryString=n()}(this,(function(){"use strict";return function(e){var n=(e=null==e?window.location.href:e).substring(e.lastIndexOf("?")+1);return n?JSON.parse('{"'+decodeURIComponent(n).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}}));
