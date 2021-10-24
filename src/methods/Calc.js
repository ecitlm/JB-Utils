/**
 * @description 加减乘除类
 * @return: {}
 */
class Calc{
  constructor() {
  }
  /**
   * @description 加法
   * @param args
   */
  add(...args) {
    let sum = 0;
    let tmp = [];
    for (let val of args) {
      tmp.push(...String(val).split('.'));
    }
    let arr = tmp.map(item => {
      return item.length;
    });
    let max = Math.max(...arr);

    for (let i = 0; i < args.length; i++) {
      sum += Math.round(args[i] * Math.pow(10, max));
    }
    return sum / Math.pow(10, max);
  }
  /**
   * @description 减法
   * @param args
   */
  sub(...args) {
    let max = 0;
    let count = args[0] | 0;
    for (let i = 0; i < args.length; i++) {
      const strVal = args[i].toString();
      const index = strVal.indexOf('.');
      let num = 0;
      if (index > -1) {
        num = strVal.length - 1 - index;
        max = num > max ? num : max;
      }
    }
    for (let i = 0; i < args.length; i++) {
      if (i === 0) {
        count = Math.round(args[i] * Math.pow(10, max));
      } else {
        count -= Math.round(args[i] * Math.pow(10, max));
      }
    }
    return count / Math.pow(10, max);
  }
  /**
   * @description 乘法
   * @param args
   */
  ride(...args) {
    const strVal = args[0].toString();
    const strValTwo = args[1].toString();
    const index = strVal.indexOf('.');
    const indexTwo = strValTwo.indexOf('.');
    const num = [0, 0];
    if (index > -1) {
      num[0] = strVal.length - 1 - index;
    }
    if (indexTwo > -1) {
      num[1] = strValTwo.length - 1 - index;
    }
    return (
      Math.round(args[0] * Math.pow(10, num[0]) * (args[1] * Math.pow(10, num[1]))) /
      Math.pow(10, num[0] + num[1])
    );
  }
  /**
   * @description 除法
   * @param args
   * @param valTwo
   */
  exc(args, valTwo = 100) {
    const strVal = args.toString();
    const strValTwo = valTwo.toString();
    const index = strVal.indexOf('.');
    const indexTwo = strValTwo.indexOf('.');
    const num = [0, 0];
    if (index > -1) {
      num[0] = strVal.length - 1 - index;
    }
    if (indexTwo > -1) {
      num[1] = strValTwo.length - 1 - index;
    }
    return (
      Math.round(args * Math.pow(10, num[0])) /
      (Math.round(valTwo * Math.pow(10, num[1])) * Math.pow(10, num[0] - num[1]))
    );
  }
}

export default Calc;
