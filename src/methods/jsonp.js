/**
 * JSONP请求
 * @param config
 */
function JSONP(config) {
  let cb = config.cb || 'callback';
  let cbName = 'JSONP' + Date.now();
  window[cbName] = function (res) {
    config.success && config.success(res);
  };
  delete window[cbName];
  let script = document.createElement('script');
  let and = config.url.indexOf('?') === -1 ? '?' : '&';
  config.url = `${config.url}${and}${cb}=${cbName}`;
  script.src = config.url;
  document.getElementsByTagName('head')[0].appendChild(script);
  script.onerror = function () {
    config.error && config.error();
    new Error('JSONP failed');
  };
  setTimeout(function () {
    script.parentNode.removeChild(script);
  }, 0);
}
export default JSONP;
