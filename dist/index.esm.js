/**
* name: jb-utils
* version 1.1.1
* description: jb-utils前端常用方法库
* author: ecitlm
* website: https://ecitlm.github.io/JB-Utils/index.html
* Date: 2021-11-2
**/

var r=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxx".replace(/[xy]/g,(function(r){var e=16*Math.random()|0;return("x"===r?e:8|e).toString(16)}))},e=function(r,e){var t=!1,n=null;return function r(a){Array.isArray(a)&&!t&&a.forEach((function(a){a.id===e?(n=a,t=!0):a.children&&r(a.children)}))}(r),n},t=function r(e,t){var n=[];if(t=t||"children",!Array.isArray(e))throw new Error("arguments must be array");for(var a=0;a<e.length;a++){var o=e[a],i=JSON.parse(JSON.stringify(o));if(delete i[t],n.push(i),o[t]){var u=r(o[t],t);n=n.concat(u)}}return n},n=function(r){var e=r.split("?")[1];return e?JSON.parse('{"'+decodeURIComponent(e).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}},a=function(r){if(!r)return"";var e=[];for(var t in r){var n=r[t];if(n instanceof Array)for(var a=0;a<n.length;++a)e.push(encodeURIComponent(t+"["+a+"]")+"="+encodeURIComponent(n[a]));else e.push(encodeURIComponent(t)+"="+encodeURIComponent(r[t]))}return e.join("&")};function o(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function i(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function u(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function c(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?u(Object(t),!0).forEach((function(e){o(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}var f={phone:/^1[3|4|5|7|8][0-9]{9}$/,email:/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,tel:/^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/,number:/^[0-9]$/,chinese:/^[\u4E00-\u9FA5]+$/,english:/^[a-zA-Z]+$/,lower:/^[a-z]+$/,url:/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i,idCard:/^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/},l=function r(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,r);var n=c(c({},f),t);Object.keys(n).forEach((function(r){e[r]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return f[r].test(e)}}))},h=function(r){var e=["角","分"],t=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"],n=[["元","万","亿"],["","拾","佰","仟"]],a=r<0?"欠":"";r=Math.abs(r);for(var o="",i=0;i<e.length;i++)o+=(t[Math.floor(10*r*Math.pow(10,i))%10]+e[i]).replace(/零./,"");o=o||"整",r=Math.floor(r);for(var u=0;u<n[0].length&&r>0;u++){for(var c="",f=0;f<n[1].length&&r>0;f++)c=t[r%10]+n[1][f]+c,r=Math.floor(r/10);o=c.replace(/(零.)*零$/,"").replace(/^$/,"零")+n[0][u]+o}return a+o.replace(/(零.)*零元/,"元").replace(/(零.)+/g,"零").replace(/^整$/,"零元整")},d=function(r){if(isNaN(r))throw new TypeError("num is not a number");return(""+r).replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,"$1,")};function s(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function p(r,e,t){return e&&s(r.prototype,e),t&&s(r,t),r}var g=function(){function r(){i(this,r),window&&window.localStorage&&(this.readStorage=window.localStorage)}return p(r,[{key:"bootStrap",value:function(r){switch(r.mode){case"session":this.readStorage=window.sessionStorage;break;case"local":this.readStorage=window.localStorage;break;default:throw new Error("arguments is wrong,please check config {}")}this.config=r}},{key:"setItem",value:function(r,e){if(2!==arguments.length)throw new Error("args must be two");try{this.readStorage.setItem(r,JSON.stringify(e))}catch(r){throw new Error("value is not a JSON.stringify val，please check data value")}}},{key:"getItem",value:function(r){var e=JSON.parse(this.readStorage.getItem(r));return(null==e?void 0:e.data)||null}},{key:"removeItem",value:function(r){this.readStorage.removeItem(r)}},{key:"clear",value:function(){this.readStorage.clear()}}]),r}(),v=function(r,e){var t={},n=[];r.map((function(r){t[r.id]=r}));for(var a=0,o=r.length;a<o;a++){var i=r[a].parentId;i!==e?t[i].children?t[i].children.push(r[a]):t[i].children=[r[a]]:n.push(r[a])}return n},y=function(r){if(!/^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/.test(r))throw new Error("id card id is invalid !");var e=r.substring(6,14),t=e.substring(0,4),n=e.substring(4,6),a=e.substring(6,8),o=r.substring(0,2),i={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门"}[o],u="";return r.charAt(16)>="0"&&r.charAt(16)<="9"&&(u=parseInt(r.charAt(16))%2==0?1:0),{year:t,month:n,day:a,birthday:"".concat(t,"-").concat(n,"-").concat(a),province:i,provCode:o,sex:u}};function w(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function b(r){return function(r){if(Array.isArray(r))return w(r)}(r)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function(r,e){if(r){if("string"==typeof r)return w(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?w(r,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m=function(){function r(){i(this,r)}return p(r,[{key:"add",value:function(){for(var r=0,e=[],t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];for(var o=0,i=n;o<i.length;o++){var u=i[o];e.push.apply(e,b(String(u).split(".")))}for(var c=e.map((function(r){return r.length})),f=Math.max.apply(Math,b(c)),l=0;l<n.length;l++)r+=Math.round(n[l]*Math.pow(10,f));return r/Math.pow(10,f)}},{key:"sub",value:function(){for(var r=0,e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var a=0|t[0],o=0;o<t.length;o++){var i=t[o].toString(),u=i.indexOf("."),c=0;u>-1&&(r=(c=i.length-1-u)>r?c:r)}for(var f=0;f<t.length;f++)0===f?a=Math.round(t[f]*Math.pow(10,r)):a-=Math.round(t[f]*Math.pow(10,r));return a/Math.pow(10,r)}},{key:"ride",value:function(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];var n=e[0].toString(),a=e[1].toString(),o=n.indexOf("."),i=a.indexOf("."),u=[0,0];return o>-1&&(u[0]=n.length-1-o),i>-1&&(u[1]=a.length-1-o),Math.round(e[0]*Math.pow(10,u[0])*(e[1]*Math.pow(10,u[1])))/Math.pow(10,u[0]+u[1])}},{key:"exc",value:function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,t=r.toString(),n=e.toString(),a=t.indexOf("."),o=n.indexOf("."),i=[0,0];return a>-1&&(i[0]=t.length-1-a),o>-1&&(i[1]=n.length-1-a),Math.round(r*Math.pow(10,i[0]))/(Math.round(e*Math.pow(10,i[1]))*Math.pow(10,i[0]-i[1]))}}]),r}(),x=function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,t=null;return function(){for(var n=this,a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];t&&clearTimeout(t),t=setTimeout((function(){t=null,r.apply(n,o)}),e)}},O=function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,t=0;return function(){var n=(new Date).getTime();if(n-t>e){for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];r.apply(this,o),t=n}}},S="1.1.1";export{m as Calc,y as IdCardInfo,g as Storage,l as Validator,v as arrayToTree,h as convertCurrency,x as debounce,d as formatNumber,e as getTreeChildren,r as getUID,n as parseQueryString,a as stringifyQueryString,O as throttle,t as treeToArray,S as version};
