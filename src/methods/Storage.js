/**
 * @description 浏览器缓存类
 * @class Storage
 */
class Storage {
  constructor() {
    if(window && window.localStorage){
      this.readStorage = window.localStorage;
    }
  }
  /**
   * 初始化Storage的数据
   * @param config {Object} {}
   */
  bootStrap(config) {
    switch (config.mode) {
    case 'session':
      this.readStorage = window.sessionStorage;
      break;
    case 'local':
      this.readStorage = window.localStorage;
      break;
    default:
      throw new Error('当前配置的mode未再配置区内，可以检查传入配置。');
    }
    this.config = config;
  }

  /**
   * 设置缓存 setItem
   * @param key key
   * @param value value
   */
  setItem(key,value){
    if(arguments.length !== 2) throw new Error('args must be two');
    try {
      this.readStorage.setItem(key, JSON.stringify(value));
    }catch (e) {
      throw new Error('需要存储的data不支持JSON.stringify方法，请检查当前数据');
    }
  }

  /**
   * 获取缓存 getItem
   * @param key {string} 缓存key
   * @returns {*|null}
   */
  getItem(key){
    const content = JSON.parse(this.readStorage.getItem(key));
    return (content === null || content === void 0 ? void 0 : content.data) || null;
  }

  /**
   * 移除缓存 removeItem
   * @param key {string} 缓存key
   */
  removeItem(key) {
    this.readStorage.removeItem(key);
  }

  /**
   * clear清除缓存
   */
  clear(){
    this.readStorage.clear();
  }
}
/*
let ls = new Storage();
ls.bootStrap({
  mode:'local',
  time:5000
});
*/
export default Storage;
