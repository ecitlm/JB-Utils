/**
* name: jb-utils
* version 1.2.0
* description: jb-utils前端常用方法库
* author: ecitlm
* website: https://ecitlm.github.io/JB-Utils/index.html
* Date: 2022/5/25
**/

!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).jsonp=n()}(this,(function(){"use strict";return function(e){var n=e.cb||"callback",o="JSONP"+Date.now();window[o]=function(n){e.success&&e.success(n)},delete window[o];var t=document.createElement("script"),c=-1===e.url.indexOf("?")?"?":"&";e.url="".concat(e.url).concat(c).concat(n,"=").concat(o),t.src=e.url,document.getElementsByTagName("head")[0].appendChild(t),t.onerror=function(){e.error&&e.error()},setTimeout((function(){t.parentNode.removeChild(t)}),0)}}));
