/*! 
 * name: @ecitlm/web-utils  
 * author: ecitlm 
 * Date: 2021-10-23 
 * */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});function r(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function e(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function t(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function n(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var o={phone:/^1[3|4|5|7|8][0-9]{9}$/,email:/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,tel:/^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/,number:/^[0-9]$/,chinese:/^[\u4E00-\u9FA5]+$/,english:/^[a-zA-Z]+$/,lower:/^[a-z]+$/};exports.convertCurrency=function(r){var e=["角","分"],t=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"],n=[["元","万","亿"],["","拾","佰","仟"]],o=r<0?"欠":"";r=Math.abs(r);for(var a="",c=0;c<e.length;c++)a+=(t[Math.floor(10*r*Math.pow(10,c))%10]+e[c]).replace(/零./,"");a=a||"整",r=Math.floor(r);for(var i=0;i<n[0].length&&r>0;i++){for(var u="",f=0;f<n[1].length&&r>0;f++)u=t[r%10]+n[1][f]+u,r=Math.floor(r/10);a=u.replace(/(零.)*零$/,"").replace(/^$/,"零")+n[0][i]+a}return o+a.replace(/(零.)*零元/,"元").replace(/(零.)+/g,"零").replace(/^整$/,"零元整")},exports.formatNumber=function(r){if(isNaN(r))throw new TypeError("num is not a number");return(""+r).replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,"$1,")},exports.getTreeChildren=function(r,e){var t=!1,n=null;return function r(o){Array.isArray(o)&&!t&&o.forEach((function(o){o.id===e?(n=o,t=!0):o.children&&r(o.children)}))}(r),n},exports.getUID=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxx".replace(/[xy]/g,(function(r){var e=16*Math.random()|0;return("x"===r?e:8|e).toString(16)}))},exports.parseQueryString=function(r){var e=(r=null==r?window.location.href:r).substring(r.lastIndexOf("?")+1);return e?JSON.parse('{"'+decodeURIComponent(e).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}},exports.stringifyQueryString=function(r){if(!r)return"";var e=[];for(var t in r){var n=r[t];if(n instanceof Array)for(var o=0;o<n.length;++o)e.push(encodeURIComponent(t+"["+o+"]")+"="+encodeURIComponent(n[o]));else e.push(encodeURIComponent(t)+"="+encodeURIComponent(r[t]))}return e.join("&")},exports.treeToArray=function r(e,t){var n=[];if(t=t||"children",!Array.isArray(e))throw new Error("arguments must be array");for(var o=0;o<e.length;o++){var a=e[o],c=JSON.parse(JSON.stringify(a));if(delete c[t],n.push(c),a[t]){var i=r(a[t],t);n=n.concat(i)}}return n},exports.validator=function r(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e(this,r);var c=n(n({},o),a);Object.keys(c).forEach((function(r){t[r]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return o[r].test(e)}}))};
