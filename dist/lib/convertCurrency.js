/**
* name: jb-utils
* version 1.1.2
* description: jb-utils前端常用方法库
* author: ecitlm
* website: https://ecitlm.github.io/JB-Utils/index.html
* Date: 2022-4-17
**/

!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(e="undefined"!=typeof globalThis?globalThis:e||self).convertCurrency=o()}(this,(function(){"use strict";return function(e){var o=["角","分"],r=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"],t=[["元","万","亿"],["","拾","佰","仟"]],n=e<0?"欠":"";e=Math.abs(e);for(var f="",l=0;l<o.length;l++)f+=(r[Math.floor(10*e*Math.pow(10,l))%10]+o[l]).replace(/零./,"");f=f||"整",e=Math.floor(e);for(l=0;l<t[0].length&&e>0;l++){for(var a="",c=0;c<t[1].length&&e>0;c++)a=r[e%10]+t[1][c]+a,e=Math.floor(e/10);f=a.replace(/(零.)*零$/,"").replace(/^$/,"零")+t[0][l]+f}return n+f.replace(/(零.)*零元/,"元").replace(/(零.)+/g,"零").replace(/^整$/,"零元整")}}));
