/*
 * @description 时间格式化
 * @param date
 * @param fmt
 * @date: 2021/12/21
 * @example dateFormat('2021/10/11', 'YYYY-mm-dd HH:MM:SS') // 2021-10-11 00:00:00
 * @example dateFormat('Tue Dec 21 2021 00:00:00 GMT+0800 (中国标准时间)', 'YYYY-mm-dd HH:MM:SS') // 2021-12-21 00:00:00
 * @returns {*}
 */
const formatDate = (date: any, fmt: string) => {
  let ret;
  date = date || new Date().valueOf();
  if (!(date && typeof date !== 'string')) {
    date = new Date(date);
  }
  const opt = {
    'Y+': date.getFullYear().toString(), // 年
    'm+': (date.getMonth() + 1).toString(), // 月
    'd+': date.getDate().toString(), // 日
    'H+': date.getHours().toString(), // 时
    'M+': date.getMinutes().toString(), // 分
    'S+': date.getSeconds().toString() // 秒
  };
  for (let k in opt) {
    ret = new RegExp('(' + k + ')').exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length === 1 ? opt[k] : opt[k].padStart(ret[1].length, '0'));
    }
  }
  return fmt;
};
export default formatDate;
