/**
 * @description 函数防抖
 * @param fn
 * @param delay 延迟时间 默认500ms
 * @return  {Function} 返回防抖后的函数
 */
const debounce = (fn, delay = 500) => {
  let timeout = null;
  return function (...args) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      fn.apply(this, args);
    }, delay);
  };
};

export default debounce;
