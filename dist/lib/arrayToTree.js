/**
* name: jb-utils
* version 1.1.0
* description: jb-utils前端常用方法库
* author: ecitlm
* website: https://ecitlm.github.io/JB-Utils/index.html
* Date: 2021-10-26
**/

!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).arrayToTree=n()}(this,(function(){"use strict";return function(e,n){var t={},i=[];e.map((function(e){t[e.id]=e}));for(var o=0,r=e.length;o<r;o++){var f=e[o].parentId;f!==n?t[f].children?t[f].children.push(e[o]):t[f].children=[e[o]]:i.push(e[o])}return i}}));
