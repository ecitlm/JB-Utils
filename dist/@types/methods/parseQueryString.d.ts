/**
 * @desc   url参数转对象
 * @param  {String} url  default: window.location.href
 * @return {Object}
 */
interface resType {
    [propName: string]: any;
}
declare const parseQueryString: (url: string) => resType;
export default parseQueryString;
