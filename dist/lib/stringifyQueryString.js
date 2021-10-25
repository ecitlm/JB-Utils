/**
* name: jb-utils
* description: jb-utils前端常用方法库
* author: ecitlm
* website: https://ecitlm.github.io/JB-Utils/index.html
* Date: 2021-10-25
**/

!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).stringifyQueryString=n()}(this,(function(){"use strict";return function(e){if(!e)return"";var n=[];for(var o in e){var t=e[o];if(t instanceof Array)for(var i=0;i<t.length;++i)n.push(encodeURIComponent(o+"["+i+"]")+"="+encodeURIComponent(t[i]));else n.push(encodeURIComponent(o)+"="+encodeURIComponent(e[o]))}return n.join("&")}}));
