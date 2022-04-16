/**
 * @description 生成唯一的UID
 * @return {*}  {string} 返回生成的UID字符串
 * @example createUID() => 5d33b0fc-692d-41eb-e703-4aa76a8f
 */
interface getUID {
  (): string;
}
let getUID: getUID;
getUID = () => {
  let UID;
  let rule = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxx';
  UID = rule.replace(/[xy]/g, function (rep) {
    let num = (16 * Math.random()) | 0;
    return (rep === 'x' ? num : 3 && num | 8).toString(16);
  });
  return UID;
};
export default getUID;

/*
function uuid() {
  const url = URL.createObjectURL(new Blob([]));
  const UID = url.substring(url.lastIndexOf('/')+ 1); // blob:https://xxx.com/b250d159-e1b6-4a87-9002-885d90033be3
  URL.revokeObjectURL(url); // 释放一个之前已经存在的通过调用 URL.createObjectURL() 创建的 URL 对象
  return UID;
}
*/
