/**
 * @description 数组对象去重
 * @param arr
 * @param uid
 * @date: 2021/12/11
 * @return: []
 */
const unique = (arr: Array<any>, id: number | string = 'id'): Array<any> => {
  const res = new Map();
  return arr.filter(item => {
    return !res.has(item[id]) && res.set(item[id], 1);
  });
};
export default unique;
