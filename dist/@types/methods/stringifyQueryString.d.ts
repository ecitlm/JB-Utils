/**
 * @group 操作URL
 * @title 对象序列化
 * @description 对象序列化
 * @param obj { Object } 需要序列化对象
 * @param prefix
 * @return url { String } 返回解析后的url
 * @example webUtils.QStringify({name:'top', g:'man', account:'12341'}) = "name=top&g=man&account=12341"
 */
declare type objType = {
    [propName: string]: any;
};
declare const stringifyQueryString: (obj: objType, prefix: string) => string;
export default stringifyQueryString;
