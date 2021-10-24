# jb-utils
> `JavaScript Business utils` 前端常用项目业务工具库

### Installation
Using npm:
```shell
$ npm i --save jb-utils
```

### how to use
```javascript
// 全部引入
import * as webUtils from 'jb-utils';
webUtils.getUID();

//按需引入
import { getUID } from 'jb-utils';

```

### 方法

```
getTreeChildren, 
getUID, 
treeToArray,
treeToArray,
parseQueryString, 
stringifyQueryString, 
validator, 
convertCurrency, 
formatNumber
Storage,
debounce
```

| 方法                       | 说明                                 |
| -------------------------- | ------------------------------------ |
| getTreeChildren ()         | 获取树的子节点                       |
| getUID ()                  | 生成唯一UUID                         |
| treeToArray ()             | 树扁平化树                           |
| arrayToTree()              | 数组转树结构                         |
| parseQueryString ()        | url参数转对象                        |
| stringifyQueryString ()    | 对象序列化                           |
| Validator ()               | 表单校验                             |
| convertCurrency()          | 数字金额转大写                       |
| formatNumber()             | 数字千分位                           |
| Storage()                  | 浏览器缓存方法                       |
| debounce()                 | 函数防抖                             |
| throttle()                 |  函数节流                            |


### change log
