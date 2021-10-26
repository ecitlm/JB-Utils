/**
* name: jb-utils
* version 1.1.0
* description: jb-utils前端常用方法库
* author: ecitlm
* website: https://ecitlm.github.io/JB-Utils/index.html
* Date: 2021-10-26
**/

!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).treeToArray=r()}(this,(function(){"use strict";return function e(r,t){var n=[];if(t=t||"children",!Array.isArray(r))throw new Error("arguments must be array");for(var o=0;o<r.length;o++){var i=r[o],f=JSON.parse(JSON.stringify(i));if(delete f[t],n.push(f),i[t]){var a=e(i[t],t);n=n.concat(a)}}return n}}));
