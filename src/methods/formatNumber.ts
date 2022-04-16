/**
 * @description 金额数据千分位
 * @param {*} num 数值金额
 * @example formatNumber(88888.88) => '88,888.88'
 */
const formatNumber = (num: number):string => {
  if (isNaN(num)) {
    throw new TypeError('num is not a number');
  }
  return ('' + num).replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,');
};
export default formatNumber;
