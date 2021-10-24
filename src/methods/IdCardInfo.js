/**
 * @description 解析身份证信息
 * @returns {Object} 身份信息对象
 * @param val
 */
const IdCardInfo = val => {
  const regx = /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/;
  const provs = { 11: '北京', 12: '天津', 13: '河北', 14: '山西', 15: '内蒙古', 21: '辽宁', 22: '吉林', 23: '黑龙江 ', 31: '上海', 32: '江苏', 33: '浙江', 34: '安徽', 35: '福建', 36: '江西', 37: '山东', 41: '河南', 42: '湖北 ', 43: '湖南', 44: '广东', 45: '广西', 46: '海南', 50: '重庆', 51: '四川', 52: '贵州', 53: '云南', 54: '西藏 ', 61: '陕西', 62: '甘肃', 63: '青海', 64: '宁夏', 65: '新疆', 71: '台湾', 81: '香港', 82: '澳门' };

  if (regx.test(val)) {
    let dateStr = val.substring(6, 14);
    let provCode = val.substring(0, 2);
    let year = dateStr.substring(0, 4);
    let month = dateStr.substring(4, 6);
    let date = dateStr.substring(6, 8);
    const province = provs[provCode];
    let sex = '';
    if (val.charAt(16) >= '0' && val.charAt(16) <= '9') {
      if (parseInt(val.charAt(16)) % 2 === 0) {
        sex = 1;
      } else {
        sex = 0;
      }
    }

    return {
      year,
      month,
      date,
      province,
      provCode,
      sex
    };
  } else {
    throw new Error('无效身份证');
  }
};
export default IdCardInfo;

/*
class IdCardInfo {
  constructor(id) {
    this.id = id;
    const regx = /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/;
    if (regx.test(id)) throw new Error('idCard id is invalid !');
  }
  sex() {

  }
  province() {}
  year() {}
  month() {}
  birthday() {}
}
 */
