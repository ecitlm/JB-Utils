/**
* name: jb-utils
* version 1.1.1
* description: jb-utils前端常用方法库
* author: ecitlm
* website: https://ecitlm.github.io/JB-Utils/index.html
* Date: 2021-11-8
**/

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});function r(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function e(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function t(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function n(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var o={phone:/^1[3|4|5|7|8][0-9]{9}$/,email:/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,tel:/^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/,number:/^[0-9]$/,chinese:/^[\u4E00-\u9FA5]+$/,english:/^[a-zA-Z]+$/,lower:/^[a-z]+$/,url:/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i,idCard:/^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/};function a(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function i(r,e,t){return e&&a(r.prototype,e),t&&a(r,t),r}var u=function(){function r(){e(this,r),window&&window.localStorage&&(this.readStorage=window.localStorage)}return i(r,[{key:"bootStrap",value:function(r){switch(r.mode){case"session":this.readStorage=window.sessionStorage;break;case"local":this.readStorage=window.localStorage;break;default:throw new Error("arguments is wrong,please check config {}")}this.config=r}},{key:"setItem",value:function(r,e){if(2!==arguments.length)throw new Error("args must be two");try{this.readStorage.setItem(r,JSON.stringify(e))}catch(r){throw new Error("value is not a JSON.stringify val，please check data value")}}},{key:"getItem",value:function(r){var e=JSON.parse(this.readStorage.getItem(r));return(null==e?void 0:e.data)||null}},{key:"removeItem",value:function(r){this.readStorage.removeItem(r)}},{key:"clear",value:function(){this.readStorage.clear()}}]),r}();function c(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function l(r){return function(r){if(Array.isArray(r))return c(r)}(r)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function(r,e){if(r){if("string"==typeof r)return c(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(r,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=function(){function r(){e(this,r)}return i(r,[{key:"add",value:function(){for(var r=0,e=[],t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];for(var a=0,i=n;a<i.length;a++){var u=i[a];e.push.apply(e,l(String(u).split(".")))}for(var c=e.map((function(r){return r.length})),f=Math.max.apply(Math,l(c)),s=0;s<n.length;s++)r+=Math.round(n[s]*Math.pow(10,f));return r/Math.pow(10,f)}},{key:"sub",value:function(){for(var r=0,e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=0|t[0],a=0;a<t.length;a++){var i=t[a].toString(),u=i.indexOf("."),c=0;u>-1&&(r=(c=i.length-1-u)>r?c:r)}for(var l=0;l<t.length;l++)0===l?o=Math.round(t[l]*Math.pow(10,r)):o-=Math.round(t[l]*Math.pow(10,r));return o/Math.pow(10,r)}},{key:"ride",value:function(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];var n=e[0].toString(),o=e[1].toString(),a=n.indexOf("."),i=o.indexOf("."),u=[0,0];return a>-1&&(u[0]=n.length-1-a),i>-1&&(u[1]=o.length-1-a),Math.round(e[0]*Math.pow(10,u[0])*(e[1]*Math.pow(10,u[1])))/Math.pow(10,u[0]+u[1])}},{key:"exc",value:function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,t=r.toString(),n=e.toString(),o=t.indexOf("."),a=n.indexOf("."),i=[0,0];return o>-1&&(i[0]=t.length-1-o),a>-1&&(i[1]=n.length-1-o),Math.round(r*Math.pow(10,i[0]))/(Math.round(e*Math.pow(10,i[1]))*Math.pow(10,i[0]-i[1]))}},{key:"toFixed",value:function(r,e){var t=Math.pow(10,e);return(Math.round(r*t)/t).toFixed(e)}}]),r}();exports.Calc=f,exports.IdCardInfo=function(r){if(!/^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/.test(r))throw new Error("id card id is invalid !");var e=r.substring(6,14),t=e.substring(0,4),n=e.substring(4,6),o=e.substring(6,8),a=r.substring(0,2),i={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门"}[a],u="";return r.charAt(16)>="0"&&r.charAt(16)<="9"&&(u=parseInt(r.charAt(16))%2==0?1:0),{year:t,month:n,day:o,birthday:"".concat(t,"-").concat(n,"-").concat(o),province:i,provCode:a,sex:u}},exports.Storage=u,exports.Validator=function r(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e(this,r);var i=n(n({},o),a);Object.keys(i).forEach((function(r){t[r]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return o[r].test(e)}}))},exports.arrayToTree=function(r,e){var t={},n=[];r.map((function(r){t[r.id]=r}));for(var o=0,a=r.length;o<a;o++){var i=r[o].parentId;i!==e?t[i].children?t[i].children.push(r[o]):t[i].children=[r[o]]:n.push(r[o])}return n},exports.convertCurrency=function(r){var e=["角","分"],t=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"],n=[["元","万","亿"],["","拾","佰","仟"]],o=r<0?"欠":"";r=Math.abs(r);for(var a="",i=0;i<e.length;i++)a+=(t[Math.floor(10*r*Math.pow(10,i))%10]+e[i]).replace(/零./,"");a=a||"整",r=Math.floor(r);for(var u=0;u<n[0].length&&r>0;u++){for(var c="",l=0;l<n[1].length&&r>0;l++)c=t[r%10]+n[1][l]+c,r=Math.floor(r/10);a=c.replace(/(零.)*零$/,"").replace(/^$/,"零")+n[0][u]+a}return o+a.replace(/(零.)*零元/,"元").replace(/(零.)+/g,"零").replace(/^整$/,"零元整")},exports.debounce=function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,t=null;return function(){for(var n=this,o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];t&&clearTimeout(t),t=setTimeout((function(){t=null,r.apply(n,a)}),e)}},exports.formatNumber=function(r){if(isNaN(r))throw new TypeError("num is not a number");return(""+r).replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,"$1,")},exports.getTreeChildren=function(r,e){var t=!1,n=null;return function r(o){Array.isArray(o)&&!t&&o.forEach((function(o){o.id===e?(n=o,t=!0):o.children&&r(o.children)}))}(r),n},exports.getUID=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxx".replace(/[xy]/g,(function(r){var e=16*Math.random()|0;return("x"===r?e:8|e).toString(16)}))},exports.parseQueryString=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.href,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=r.split("?")[1]||"";if(!t)return{};for(var n=t.split("&"),o={},a=0;a<n.length;){var i=n[a].split("=");o[i[0]]=i[1]?decodeURI(i[1]):"",a++}return e?o[e]:o},exports.stringifyQueryString=function(r){if(!r)return"";var e=[];for(var t in r){var n=r[t];if(n instanceof Array)for(var o=0;o<n.length;++o)e.push(encodeURIComponent(t+"["+o+"]")+"="+encodeURIComponent(n[o]));else e.push(encodeURIComponent(t)+"="+encodeURIComponent(r[t]))}return e.join("&")},exports.throttle=function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,t=0;return function(){var n=(new Date).getTime();if(n-t>e){for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];r.apply(this,a),t=n}}},exports.treeToArray=function r(e,t){var n=[];if(t=t||"children",!Array.isArray(e))throw new Error("arguments must be array");for(var o=0;o<e.length;o++){var a=e[o],i=JSON.parse(JSON.stringify(a));if(delete i[t],n.push(i),a[t]){var u=r(a[t],t);n=n.concat(u)}}return n},exports.version="1.1.1";
