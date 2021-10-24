import parseQueryString from './parseQueryString';
/**
 * @description URL字符串转URL对象
 * @param urlStr  {String} 父级ID
 * @return obj {Object}
 *
 */
//const URLREGX = /^(?:(?:([A-Za-z]+):?\/{2})?(?:(\w+)?:?([^\x00-\x1F^\x7F^:]*)@)?([\w\-\.]+)?(?::(\d+))?)\/?(([^\x00-\x1F^\x7F^\#^\?^:]+)?(?::([^\x00-\x1F^\x7F^\#^\?]+))?(?:#([^\x00-\x1F^\?]+))?)(?:\?(.*))?$/;
const URL = urlStr => {
  let url = urlStr || window.location.href;
  try {
    let parseUrl = new URL(url);
    parseUrl.params = parseQueryString(url);
    return parseUrl;
  } catch (e) {
    throw new Error('URL无效');
  }
};
export default URL;
