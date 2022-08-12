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
webUtils.getUID(); // '8814ff4a-72c0-4943-f5df-dc1736f0'

//按需引入
import { getUID } from 'jb-utils';
getUID(); // '103f4456-6c28-4449-89d1-a8ea7b20'
```

[在线文档](https://ecitlm.github.io/JB-Utils/)

gitHub： https://github.com/ecitlm/JB-Utils

### 方法

| 方法                    | 说明           |
| ----------------------- | -------------- |
| getTreeChildren ()      | 获取树的子节点 |
| getUID ()               | 生成唯一 UUID  |
| treeToArray ()          | 树扁平化树     |
| arrayToTree()           | 数组转树结构   |
| parseQueryString ()     | url 参数转对象 |
| stringifyQueryString () | 对象序列化     |
| Validator ()            | 表单校验       |
| convertCurrency()       | 数字金额转大写 |
| formatNumber()          | 数字千分位     |
| Storage()               | 浏览器缓存方法 |
| debounce()              | 函数防抖       |
| throttle()              | 函数节流       |
| IdCardInfo()            | 解析身份证信息 |
| Calc                    | 加减乘除类     |
| unique                  | 数组对象去重   |
| formatDate              | 时间格式化     |
| jsonp                   | jsonp 请求     |
| loadjs                  | 加载 script    |
| waterMark               | 水印生成       |
| ajax                    | ajax 请求      |
| isIdCard                | 身份证规范验证 |

```js
ajax({
  method: 'POST',
  url: 'test.php',
  data: {
    name1: 'value1',
    name2: 'value2'
  },
  success: function (response) {
    console.log(response);
  }
});
```

### change log
