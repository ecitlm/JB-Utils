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
function jsonp(config: jsonpFunc) {
  const cbName = 'JSONP' + Date.now();
  window[cbName] = function (res) {
    config.success(res);
  };
  delete window[cbName];

  let script: HTMLScriptElement = document.createElement('script');

  if (config.url.indexOf('?') === -1) {
    config.url = config.url + `?${config.cbName}=${cbName}`;
  } else {
    config.url = config.url + `&${config.cbName}=${cbName}`;
  }
  script.src = config.url;
  document.getElementsByTagName('head')[0].appendChild(script);

  script.onerror = () => {
    config.error && config.error();
    new Error(`JSONP failed`);
  };

  setTimeout(() => {
    script.parentNode.removeChild(script);
  }, 0);
}
export default jsonp;
/*
JSONP({
  url: 'xxxx',
  params: [],
  cbName: 'callback',
  success: function (res) {},
  error: function (err) {}
});
*/
