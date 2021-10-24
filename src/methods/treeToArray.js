/**
 * 树结构转数组Array
 * @param treeData 树元数据
 * @param field  父id
 * @returns {Array}
 */
const treeToArray = (treeData, field) => {
  let result = [];
  field = field || 'children';
  if (!Array.isArray(treeData)) throw new Error('arguments must be array');
  for (let key = 0; key < treeData.length; key++) {
    let obj = treeData[key];
    let clone = JSON.parse(JSON.stringify(obj));
    delete clone[field];
    result.push(clone);
    if (obj[field]) {
      let tmp = treeToArray(obj[field], field);
      result = result.concat(tmp);
    }
  }
  return result;
};
export default treeToArray;
