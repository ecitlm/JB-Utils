/**
 * @group 操作URL
 * @title 对象序列化
 * @description 对象序列化
 * @param obj { Object } 需要序列化对象
 * @param prefix
 * @return url { String } 返回解析后的url
 * @example webUtils.QStringify({name:'top', g:'man', account:'12341'}) = "name=top&g=man&account=12341"
 */

type objType = {
  [propName: string]: any;
};
const stringifyQueryString = (obj: objType, prefix: string): string => {
  let pairs = [];
  for (let key in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, key)) {
      continue;
    }
    let value = obj[key];
    let enKey = encodeURIComponent(key);
    let pair;
    if (typeof value === 'object') {
      pair = stringifyQueryString(value, prefix ? prefix + '[' + enKey + ']' : enKey);
    } else {
      pair = (prefix ? prefix + '[' + enKey + ']' : enKey) + '=' + encodeURIComponent(value);
    }
    pairs.push(pair);
  }
  return pairs.join('&');
};
export default stringifyQueryString;
