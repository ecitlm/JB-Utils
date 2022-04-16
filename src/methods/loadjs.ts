/**
 * 加载script脚本
 * @param url
 * @param cb
 */
interface LoadJSFunc {
  (url: string, cb?: Function);
}

let loadJS: LoadJSFunc;
loadJS = function(url: string, cb = Function):void {
  let script: any = document.createElement('script');
  //IE兼容
  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState == 'loaded' || script.readyState == 'complete') {
        script.onreadystatechange = null;
        cb();
      }
    };
  } else {
    script.onload = function () {
      cb();
    };
  }
};
export default loadJS;
