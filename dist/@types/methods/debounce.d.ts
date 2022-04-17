/**
 * @description 函数防抖
 * @param fn
 * @param delay 延迟时间 默认500ms
 * @return  {Function} 返回防抖后的函数
 */
declare const debounce: (fn: Function, delay?: number) => Function;
export default debounce;
