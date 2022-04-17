/**
 * @description 浏览器缓存类
 * @class Storage
 */
interface config {
    mode: string;
    time: number;
}
declare class Storage {
    readStorage: any;
    config: config;
    constructor();
    /**
     * 初始化Storage的数据
     * @param config {Object} {}
     */
    bootStrap(config: any): void;
    /**
     * 设置缓存 setItem
     * @param key key
     * @param value value
     */
    setItem(key: string, value: any): void;
    /**
     * 获取缓存 getItem
     * @param key {string} 缓存key
     * @returns {*|null}
     */
    getItem(key: string): any;
    /**
     * 移除缓存 removeItem
     * @param key {string} 缓存key
     */
    removeItem(key: string): void;
    /**
     * clear清除缓存
     */
    clear(): void;
}
export default Storage;
