/**
 * @description 生成唯一的UID
 * @return {*}  {string} 返回生成的UID字符串
 * @example createUID() => 5d33b0fc-692d-41eb-e703-4aa76a8f
 */
const getUID = () => {
  let UID;
  let rule = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxx';
  UID = rule.replace(/[xy]/g, function (rep) {
    let num = (16 * Math.random()) | 0;
    return (rep === 'x' ? num : 3 && num | 8).toString(16);
  });
  return UID;
};
export default getUID;
