/**
* name: jb-utils
* version 1.1.2
* description: jb-utils前端常用方法库
* author: ecitlm
* website: https://ecitlm.github.io/JB-Utils/index.html
* Date: 2022-4-17
**/

!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).jsonp=n()}(this,(function(){"use strict";return function(e){var n="JSONP"+Date.now();window[n]=function(n){e.success(n)},delete window[n];var o=document.createElement("script");-1===e.url.indexOf("?")?e.url=e.url+"?".concat(e.cbName,"=").concat(n):e.url=e.url+"&".concat(e.cbName,"=").concat(n),o.src=e.url,document.getElementsByTagName("head")[0].appendChild(o),o.onerror=function(){e.error&&e.error()},setTimeout((function(){o.parentNode.removeChild(o)}),0)}}));
