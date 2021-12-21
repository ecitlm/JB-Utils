/**
* name: jb-utils
* version 1.1.1
* description: jb-utils前端常用方法库
* author: ecitlm
* website: https://ecitlm.github.io/JB-Utils/index.html
* Date: 2021-12-21
**/

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).formatDate=t()}(this,(function(){"use strict";return function(e,t){var n;(e=e||(new Date).valueOf())&&"string"!=typeof e||(e=new Date(e));var o={"Y+":e.getFullYear().toString(),"m+":(e.getMonth()+1).toString(),"d+":e.getDate().toString(),"H+":e.getHours().toString(),"M+":e.getMinutes().toString(),"S+":e.getSeconds().toString()};for(var r in o)(n=new RegExp("("+r+")").exec(t))&&(t=t.replace(n[1],1===n[1].length?o[r]:o[r].padStart(n[1].length,"0")));return t}}));
