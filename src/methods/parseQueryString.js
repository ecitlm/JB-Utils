/**
 * @desc   url参数转对象
 * @param  {String} url  default: window.location.href
 * @param {*} key
 * @return {Object}
 */

const parseQueryString = (url = window.location.href, key = '') => {
  let param = url.split('?')[1] || '';
  if (!param) {
    return {};
  }
  let params = param.split('&');
  let res = {};
  let i = 0;
  while (i < params.length) {
    let item = params[i].split('=');
    res[item[0]] = item[1] ? decodeURI(item[1]) : '';
    i++;
  }
  return !key ? res : res[key];
};

export default parseQueryString;
