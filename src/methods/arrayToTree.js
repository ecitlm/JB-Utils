/**
 * @description 数组转树结构
 * @param arr {Array}  数组
 * @param pId {String} 父级ID
 * @return tree  返回树
 */

const arrayToTree = (arr, pId) => {
  let obj = {};
  let tree = [];
  //将数组中数据转为键值对结构 (这里的数组和obj会相互引用)
  arr.map(el => {
    obj[el.id] = el;
  });
  for (let i = 0, len = arr.length; i < len; i++) {
    let id = arr[i].parentId;
    if (id === pId) {
      tree.push(arr[i]);
      continue;
    }
    if (obj[id].children) {
      obj[id].children.push(arr[i]);
    } else {
      obj[id].children = [arr[i]];
    }
  }
  return tree;
};
export default arrayToTree;
