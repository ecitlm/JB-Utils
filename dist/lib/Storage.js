/**
* name: jb-utils
* version 1.1.1
* description: jb-utils前端常用方法库
* author: ecitlm
* website: https://ecitlm.github.io/JB-Utils/index.html
* Date: 2021-11-2
**/

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Storage=t()}(this,(function(){"use strict";function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),window&&window.localStorage&&(this.readStorage=window.localStorage)}var o,r,a;return o=t,r=[{key:"bootStrap",value:function(e){switch(e.mode){case"session":this.readStorage=window.sessionStorage;break;case"local":this.readStorage=window.localStorage;break;default:throw new Error("arguments is wrong,please check config {}")}this.config=e}},{key:"setItem",value:function(e,t){if(2!==arguments.length)throw new Error("args must be two");try{this.readStorage.setItem(e,JSON.stringify(t))}catch(e){throw new Error("value is not a JSON.stringify val，please check data value")}}},{key:"getItem",value:function(e){var t=JSON.parse(this.readStorage.getItem(e));return(null==t?void 0:t.data)||null}},{key:"removeItem",value:function(e){this.readStorage.removeItem(e)}},{key:"clear",value:function(){this.readStorage.clear()}}],r&&e(o.prototype,r),a&&e(o,a),t}();return t}));
