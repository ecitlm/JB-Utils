/**
* name: jb-utils
* version 1.1.2
* description: jb-utils前端常用方法库
* author: ecitlm
* website: https://ecitlm.github.io/JB-Utils/index.html
* Date: 2022-4-17
**/

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Storage=t()}(this,(function(){"use strict";var e=function(){function e(){window&&window.localStorage&&(this.readStorage=window.localStorage)}return e.prototype.bootStrap=function(e){switch(e.mode){case"session":this.readStorage=window.sessionStorage;break;case"local":this.readStorage=window.localStorage;break;default:throw new Error("arguments is wrong,please check config {}")}this.config=e},e.prototype.setItem=function(e,t){if(2!==arguments.length)throw new Error("args must be two");try{this.readStorage.setItem(e,JSON.stringify(t))}catch(e){throw new Error("value is not a JSON.stringify val，please check data value")}},e.prototype.getItem=function(e){var t=JSON.parse(this.readStorage.getItem(e));return(null==t?void 0:t.data)||null},e.prototype.removeItem=function(e){this.readStorage.removeItem(e)},e.prototype.clear=function(){this.readStorage.clear()},e}();return e}));
