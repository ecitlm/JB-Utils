/**
 * @desc   url参数转对象
 * @param  {String} url  default: window.location.href
 * @return {Object}
 */
const parseQueryString = url => {
  const search = url.split('?')[1];
  if (!search) {
    return {};
  }
  return JSON.parse(
    '{"' +
    decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +
    '"}'
  );
};

export default parseQueryString;
