/**
 * @description 表单验证类
 * @class Validator
 */
const regx = {
  phone: /^1[3|4|5|7|8][0-9]{9}$/,
  email: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
  tel: /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/,
  number: /^[0-9]$/,
  chinese: /^[\u4E00-\u9FA5]+$/,
  english: /^[a-zA-Z]+$/,
  lower: /^[a-z]+$/,
  url: /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i,
  idCard: /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/
};
class Validator {
  constructor(reg = {}) {
    const r = { ...regx, ...reg };
    Object.keys(r).forEach((item: string) => {
      this[item] = (str: string): boolean => {
        return regx[item].test(str);
      };
    });
  }
}

export default Validator;
