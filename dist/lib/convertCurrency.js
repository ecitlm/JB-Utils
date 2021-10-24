/**
* name: jb-utils
* description: jb-utils前端常用方法库
* author: ecitlm
* website: https://ecitlm.github.io/JB-Utils/index.html
* Date: 2021-10-24
**/

!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(e="undefined"!=typeof globalThis?globalThis:e||self).convertCurrency=o()}(this,(function(){"use strict";return function(e){var o=["角","分"],r=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"],t=[["元","万","亿"],["","拾","佰","仟"]],n=e<0?"欠":"";e=Math.abs(e);for(var f="",a=0;a<o.length;a++)f+=(r[Math.floor(10*e*Math.pow(10,a))%10]+o[a]).replace(/零./,"");f=f||"整",e=Math.floor(e);for(var l=0;l<t[0].length&&e>0;l++){for(var c="",i=0;i<t[1].length&&e>0;i++)c=r[e%10]+t[1][i]+c,e=Math.floor(e/10);f=c.replace(/(零.)*零$/,"").replace(/^$/,"零")+t[0][l]+f}return n+f.replace(/(零.)*零元/,"元").replace(/(零.)+/g,"零").replace(/^整$/,"零元整")}}));
