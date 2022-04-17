/**
* name: jb-utils
* version 1.1.2
* description: jb-utils前端常用方法库
* author: ecitlm
* website: https://ecitlm.github.io/JB-Utils/index.html
* Date: 2022-4-17
**/

!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).IdCardInfo=n()}(this,(function(){"use strict";return function(t){if(!/^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/.test(t))throw new Error("id card id is invalid !");var n,e=t.substring(6,14),r=e.substring(0,4),i=e.substring(4,6),o=e.substring(6,8),d=t.substring(0,2),s={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门"}[d];return t.charAt(16)>="0"&&t.charAt(16)<="9"&&(n=parseInt(t.charAt(16))%2==0?1:0),{year:r,month:i,day:o,birthday:"".concat(r,"-").concat(i,"-").concat(o),province:s,provCode:d,sex:n}}}));
