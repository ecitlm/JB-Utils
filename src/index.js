/**
 * @description jb-utils
 * @date: 2021/10/23
 * @return: {}
 */

import getUID from './methods/getUID';
import getTreeChildren from './methods/getTreeChildren';
import treeToArray from './methods/treeToArray';
import parseQueryString from './methods/parseQueryString';
import stringifyQueryString from './methods/stringifyQueryString';
import Validator from './methods/Validator';
import convertCurrency from './methods/convertCurrency';
import formatNumber from './methods/formatNumber';
import Storage from './methods/Storage';
import arrayToTree from './methods/arrayToTree';
import IdCardInfo from './methods/IdCardInfo';
import Calc from './methods/Calc';
import debounce from './methods/debounce';
import throttle from './methods/throttle';
import  unique  from './methods/unique';
import  formatDate  from './methods/formatDate';
import { version } from '../package.json';
import getActualWidthOfChars from './methods/getActualWidthOfChars';
import jsonp from './methods/jsonp';
import loadjs from './methods/loadjs';
import waterMark from './methods/waterMark';
import ajax from './methods/ajax';
import isIdCard from './methods/isIdCard';
import $$ from './methods/$$';
import image2Base64 from './methods/image2Base64';
import deepClone from './methods/deepClone';
import ridUrlParam from './methods/ridUrlParam';

export {
  getTreeChildren,
  getUID,
  treeToArray,
  parseQueryString,
  stringifyQueryString,
  Validator,
  convertCurrency,
  formatNumber,
  Storage,
  arrayToTree,
  IdCardInfo,
  Calc,
  throttle,
  debounce,
  unique,
  formatDate,
  getActualWidthOfChars,
  jsonp,
  loadjs,
  waterMark,
  ajax,
  version,
  isIdCard,
  $$,
  image2Base64,
  deepClone,
  ridUrlParam
};
