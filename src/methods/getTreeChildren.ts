/**
 * @description 获取树的子节点
 * @param {*} data tree
 * @param {*} id
 * @return {Object}
 */
const getTreeChildren = (data: Array<any>, id: string | number): Array<any> => {
  let hasFound = false;
  let result = null;
  let fn = function (data) {
    if (Array.isArray(data) && !hasFound) {
      // 判断是否是数组并且没有的情况下，
      data.forEach(item => {
        if (item.id === id) {
          // 数据循环每个子项，并且判断子项下边是否有id值
          result = item; // 返回的结果等于每一项
          hasFound = true; // 并且找到id值
        } else if (item.children) {
          fn(item.children); // 递归调用下边的子项
        }
      });
    }
  };
  fn(data);
  return result;
};
export default getTreeChildren;
