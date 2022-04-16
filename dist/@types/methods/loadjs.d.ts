/**
 * 加载script脚本
 * @param url
 * @param cb
 */
interface LoadJSFunc {
    (url: string, cb?: Function): any;
}
declare let loadJS: LoadJSFunc;
export default loadJS;
