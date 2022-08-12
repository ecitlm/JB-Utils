/**
 * @description 格式化时间对象
 * @param {Date|Number} date  Date对象
 * @param {String}      fmt 目标格式，如：yyyy年MM月dd日，MM/dd/yyyy，yyyyMMdd，yyyy-MM-dd hh:mm:ss等
 * @example formatDate('2021/10/11', 'YYYY-mm-dd HH:MM:SS') // 2021-10-11 00:00:00
 * @example formatDate('Tue Dec 21 2021 00:00:00 GMT+0800 (中国标准时间)', 'YYYY-mm-dd HH:MM:SS') // 2021-12-21 00:00:00
 * @returns {String}    格式化结果；异常情况下返回空串
 */
const formatDate = (date, fmt) => {
  const dateObj = date instanceof Date ? date : new Date(date || new Date());
  if (isNaN(dateObj.getTime())) return '';

  let dateStr = fmt || 'yyyy-MM-dd hh:mm:ss';

  // 处理年
  if (/(y+)/.test(dateStr)) {
    dateStr = dateStr.replace(RegExp.$1, `${dateObj.getFullYear()}`.substr(4 - RegExp.$1.length));
  }

  // 处理月份、日、小时、分、秒、毫秒
  const obj = {
    'M+': dateObj.getMonth() + 1, // 月份
    'd+': dateObj.getDate(), // 日
    'h+': dateObj.getHours(), // 小时
    'm+': dateObj.getMinutes(), // 分
    's+': dateObj.getSeconds(), // 秒
    S: dateObj.getMilliseconds() // 毫秒
  };

  for (const [key, value] of Object.entries(obj)) {
    if (new RegExp(`(${key})`).test(dateStr)) {
      // RegExp.$1 -> 'M'或'MM' 如果是M的话直接返回月份值如5
      // 如果是MM要将5前面补0，变成'05'，其他同理
      dateStr = dateStr.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? value : `${value}`.padStart(2, '0')
      );
    }
  }

  return dateStr;
};
export default formatDate;
