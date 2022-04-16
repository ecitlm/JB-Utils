/**
 * 加载JS文件
 * @param url
 * @param callback
 */
const loadJS = (url, callback = Function) => {
  let script = document.createElement('script');
  script.type = 'text/javascript';
  //IE
  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState == 'loaded' || script.readyState == 'complete') {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = function () {
      callback();
    };
  }
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
};

export default loadJS;
