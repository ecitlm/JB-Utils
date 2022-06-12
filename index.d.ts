/**
 * @description 数字金额转大写
 * @param n 数字金额
 * @return {string} 大写金额
 * @example convertCurrency(88888.88) => '捌万捌仟捌佰捌拾捌元捌角捌分'
 */
export declare const convertCurrency: (num: number) => string;

/**
 * @description 函数防抖
 * @param fn
 * @param delay 延迟时间 默认500ms
 * @return  {Function} 返回防抖后的函数
 */
export declare const debounce: (fn: Function, delay?: number) => Function;

/**
 * @description 日期格式化 YYYY-mm-dd HH:MM:SS
 * @param {type}
 * @date: 2022/5/24
 * @fmt: YYYY-mm-dd HH:MM:SS
 * @return: {}
 */
export declare const formatDate: (date: any, fmt: string) => string;

/**
 * @description 金额数据千分位
 * @param {*} num 数值金额
 * @example formatNumber(88888.88) => '88,888.88'
 */
export declare const formatNumber: (num: number) => string;

/**
 * @description 获取树的子节点
 * @param {*} data tree
 * @param {*} id
 * @return {Object}
 */
export declare const getTreeChildren: (data: Array<any>, id: string | number) => Array<any>;


interface params {
  [propName: string]: any;
}
interface jsonpFunc {
  url: string;
  success: Function;
  error?: Function;
  cbName: string;
  params?: params;
}
export declare function jsonp(config: jsonpFunc): void;

/**
 * 加载script脚本
 * @param url
 * @param cb
 */
interface LoadJSFunc {
  (url: string, cb?: Function): any;
}
export declare let loadjs: LoadJSFunc;

/**
 * @desc   url参数转对象
 * @param  {String} url  default: window.location.href
 * @return {Object}
 */
interface resType {
  [propName: string]: any;
}
export declare const parseQueryString: (url: string) => resType;


/**
 * @group 操作URL
 * @title 对象序列化
 * @description 对象序列化
 * @param obj { Object } 需要序列化对象
 * @param prefix
 * @return url { String } 返回解析后的url
 * @example webUtils.QStringify({name:'top', g:'man', account:'12341'}) = "name=top&g=man&account=12341"
 */
declare type objType = {
  [propName: string]: any;
};
export declare const stringifyQueryString: (obj: objType, prefix: string) => string;

/**
 * @description 函数节流
 * @param  fn 需要做节流处理的函数
 * @param {number} [delay=500] 延迟时间 默认500ms
 * @return {*}  {Function} 返回节流后的函数
 */
export declare const throttle: (fn: Function, delay?: number) => Function;

/**
 * 树结构转数组Array
 * @returns {Array}
 * @param arr
 * @param pId
 */
export declare const arrayToTree: (arr: Array<any>, pId: string | number) => Array<any>;


/**
 * @description 数组对象去重
 * @param arr
 * @param uid
 * @date: 2021/12/11
 * @return: []
 */
export declare const unique: (arr: Array<any>, id?: number | string) => Array<any>;
