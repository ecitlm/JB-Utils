/**
* name: jb-utils
* version 1.1.1
* description: jb-utils前端常用方法库
* author: ecitlm
* website: https://ecitlm.github.io/JB-Utils/index.html
* Date: 2021-12-21
**/

var r=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxx".replace(/[xy]/g,(function(r){var t=16*Math.random()|0;return("x"===r?t:8|t).toString(16)}))},t=function(r,t){var e=!1,n=null;return function r(a){Array.isArray(a)&&!e&&a.forEach((function(a){a.id===t?(n=a,e=!0):a.children&&r(a.children)}))}(r),n},e=function r(t,e){var n=[];if(e=e||"children",!Array.isArray(t))throw new Error("arguments must be array");for(var a=0;a<t.length;a++){var o=t[a],i=JSON.parse(JSON.stringify(o));if(delete i[e],n.push(i),o[e]){var u=r(o[e],e);n=n.concat(u)}}return n},n=function(r){var t=r.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}},a=function(r){if(!r)return"";var t=[];for(var e in r){var n=r[e];if(n instanceof Array)for(var a=0;a<n.length;++a)t.push(encodeURIComponent(e+"["+a+"]")+"="+encodeURIComponent(n[a]));else t.push(encodeURIComponent(e)+"="+encodeURIComponent(r[e]))}return t.join("&")};function o(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function i(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function u(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function c(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?u(Object(e),!0).forEach((function(t){o(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}var f={phone:/^1[3|4|5|7|8][0-9]{9}$/,email:/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,tel:/^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/,number:/^[0-9]$/,chinese:/^[\u4E00-\u9FA5]+$/,english:/^[a-zA-Z]+$/,lower:/^[a-z]+$/,url:/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i,idCard:/^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/},l=function r(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,r);var n=c(c({},f),e);Object.keys(n).forEach((function(r){t[r]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return f[r].test(t)}}))},h=function(r){var t=["角","分"],e=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"],n=[["元","万","亿"],["","拾","佰","仟"]],a=r<0?"欠":"";r=Math.abs(r);for(var o="",i=0;i<t.length;i++)o+=(e[Math.floor(10*r*Math.pow(10,i))%10]+t[i]).replace(/零./,"");o=o||"整",r=Math.floor(r);for(var u=0;u<n[0].length&&r>0;u++){for(var c="",f=0;f<n[1].length&&r>0;f++)c=e[r%10]+n[1][f]+c,r=Math.floor(r/10);o=c.replace(/(零.)*零$/,"").replace(/^$/,"零")+n[0][u]+o}return a+o.replace(/(零.)*零元/,"元").replace(/(零.)+/g,"零").replace(/^整$/,"零元整")},d=function(r){if(isNaN(r))throw new TypeError("num is not a number");return(""+r).replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,"$1,")};function s(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function g(r,t,e){return t&&s(r.prototype,t),e&&s(r,e),r}var p=function(){function r(){i(this,r),window&&window.localStorage&&(this.readStorage=window.localStorage)}return g(r,[{key:"bootStrap",value:function(r){switch(r.mode){case"session":this.readStorage=window.sessionStorage;break;case"local":this.readStorage=window.localStorage;break;default:throw new Error("arguments is wrong,please check config {}")}this.config=r}},{key:"setItem",value:function(r,t){if(2!==arguments.length)throw new Error("args must be two");try{this.readStorage.setItem(r,JSON.stringify(t))}catch(r){throw new Error("value is not a JSON.stringify val，please check data value")}}},{key:"getItem",value:function(r){var t=JSON.parse(this.readStorage.getItem(r));return(null==t?void 0:t.data)||null}},{key:"removeItem",value:function(r){this.readStorage.removeItem(r)}},{key:"clear",value:function(){this.readStorage.clear()}}]),r}(),v=function(r,t){var e={},n=[];r.map((function(r){e[r.id]=r}));for(var a=0,o=r.length;a<o;a++){var i=r[a].parentId;i!==t?e[i].children?e[i].children.push(r[a]):e[i].children=[r[a]]:n.push(r[a])}return n},y=function(r){if(!/^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/.test(r))throw new Error("id card id is invalid !");var t=r.substring(6,14),e=t.substring(0,4),n=t.substring(4,6),a=t.substring(6,8),o=r.substring(0,2),i={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门"}[o],u="";return r.charAt(16)>="0"&&r.charAt(16)<="9"&&(u=parseInt(r.charAt(16))%2==0?1:0),{year:e,month:n,day:a,birthday:"".concat(e,"-").concat(n,"-").concat(a),province:i,provCode:o,sex:u}};function w(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function b(r){return function(r){if(Array.isArray(r))return w(r)}(r)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function(r,t){if(r){if("string"==typeof r)return w(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?w(r,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m=function(){function r(){i(this,r)}return g(r,[{key:"add",value:function(){for(var r=0,t=[],e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];for(var o=0,i=n;o<i.length;o++){var u=i[o];t.push.apply(t,b(String(u).split(".")))}for(var c=t.map((function(r){return r.length})),f=Math.max.apply(Math,b(c)),l=0;l<n.length;l++)r+=Math.round(n[l]*Math.pow(10,f));return r/Math.pow(10,f)}},{key:"sub",value:function(){for(var r=0,t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];for(var a=0|e[0],o=0;o<e.length;o++){var i=e[o].toString(),u=i.indexOf("."),c=0;u>-1&&(r=(c=i.length-1-u)>r?c:r)}for(var f=0;f<e.length;f++)0===f?a=Math.round(e[f]*Math.pow(10,r)):a-=Math.round(e[f]*Math.pow(10,r));return a/Math.pow(10,r)}},{key:"ride",value:function(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];var n=t[0].toString(),a=t[1].toString(),o=n.indexOf("."),i=a.indexOf("."),u=[0,0];return o>-1&&(u[0]=n.length-1-o),i>-1&&(u[1]=a.length-1-o),Math.round(t[0]*Math.pow(10,u[0])*(t[1]*Math.pow(10,u[1])))/Math.pow(10,u[0]+u[1])}},{key:"exc",value:function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,e=r.toString(),n=t.toString(),a=e.indexOf("."),o=n.indexOf("."),i=[0,0];return a>-1&&(i[0]=e.length-1-a),o>-1&&(i[1]=n.length-1-a),Math.round(r*Math.pow(10,i[0]))/(Math.round(t*Math.pow(10,i[1]))*Math.pow(10,i[0]-i[1]))}},{key:"toFixed",value:function(r,t){var e=Math.pow(10,t);return(Math.round(r*e)/e).toFixed(t)}}]),r}(),x=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,e=null;return function(){for(var n=this,a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];e&&clearTimeout(e),e=setTimeout((function(){e=null,r.apply(n,o)}),t)}},S=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,e=0;return function(){var n=(new Date).getTime();if(n-e>t){for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];r.apply(this,o),e=n}}},O=function(r,t){var e=t||"id",n=new Map;return r.filter((function(r){return!n.has(r[e])&&n.set(r[e],1)}))},M=function(r,t){var e;(r=r||(new Date).valueOf())&&"string"!=typeof r||(r=new Date(r));var n={"Y+":r.getFullYear().toString(),"m+":(r.getMonth()+1).toString(),"d+":r.getDate().toString(),"H+":r.getHours().toString(),"M+":r.getMinutes().toString(),"S+":r.getSeconds().toString()};for(var a in n)(e=new RegExp("("+a+")").exec(t))&&(t=t.replace(e[1],1===e[1].length?n[a]:n[a].padStart(e[1].length,"0")));return t},A="1.1.1";export{m as Calc,y as IdCardInfo,p as Storage,l as Validator,v as arrayToTree,h as convertCurrency,x as debounce,M as formatDate,d as formatNumber,t as getTreeChildren,r as getUID,n as parseQueryString,a as stringifyQueryString,S as throttle,e as treeToArray,O as unique,A as version};
