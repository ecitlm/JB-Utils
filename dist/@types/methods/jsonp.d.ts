interface params {
    [propName: string]: any;
}
interface jsonpFunc {
    url: string;
    success: Function;
    error?: Function;
    cbName: string;
    params?: params;
}
declare function jsonp(config: jsonpFunc): void;
export default jsonp;
