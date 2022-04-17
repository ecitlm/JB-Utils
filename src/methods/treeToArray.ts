/**
 * 树结构转数组Array
 * @returns {Array}
 * @param arr
 * @param pId
 */
const arrayToTree = (arr: Array<any>, pId: string | number): Array<any> => {
  let obj = {};
  let tree: Array<any> = [];
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
