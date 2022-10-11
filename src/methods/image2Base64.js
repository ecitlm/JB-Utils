/**
 * @description 图片地址转base64
 * @param {String} url 图片地址
 * @returns {Promise<>}
 */
const getImageBlob = url => {
  return new Promise((resolve, reject) => {
    // 创建请求
    const xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'blob';
    xhr.onload = function () {
      if (this.status === 200) {
        resolve(this.response);
      }
    };
    xhr.onerror = reject;
    xhr.send();
  });
};

function image2Base64(url) {
  let reader = new FileReader();
  return new Promise(function (resolve, reject) {
    try {
      getImageBlob(url).then(blob => {
        reader.readAsDataURL(blob);
      });

      reader.onload = function (e) {
        resolve(e.target.result);
      };
    } catch (e) {
      reject(e);
    }
  });
}

export default image2Base64;
