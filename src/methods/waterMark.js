/**
 * @description 页面水印、可显示10个汉字
 * @param str 水印描述
 * @date: 2021/12/11
 * @return: []
 */
let waterMark = str => {
  let id = '1.23452384164.123412415';

  if (document.getElementById(id) !== null) {
    document.body.removeChild(document.getElementById(id));
  }

  let can = document.createElement('canvas');
  can.width = 300;
  can.height = 230;

  let cans = can.getContext('2d');
  cans.rotate((-20 * Math.PI) / 180);
  cans.font = '18px Vedana';
  cans.fillStyle = 'rgba(52, 58, 77, 0.3)';
  cans.textAlign = 'left';
  cans.textBaseline = 'Middle';
  cans.fillText(str, can.width / 3, can.height / 2);

  let div = document.createElement('div');
  div.id = id;
  div.style.pointerEvents = 'none';
  div.style.top = '30px';
  div.style.left = '0px';
  div.style.position = 'fixed';
  div.style.zIndex = '100000';
  div.style.width = document.documentElement.clientWidth - 50 + 'px';
  div.style.height = document.documentElement.clientHeight - 50 + 'px';
  div.style.background = 'url(' + can.toDataURL('image/png') + ') left top repeat';
  document.body.appendChild(div);
  return id;
};

// 该方法只允许调用一次
const setWaterMark = str => {
  let id = waterMark(str);
  setInterval(() => {
    if (document.getElementById(id) === null) {
      id = waterMark(str);
    }
  }, 500);
  window.onresize = () => {
    waterMark(str);
  };
};

export default setWaterMark;
