# querystring-number

1. 极小 gzip 0.3k
2. 可以选择性的将 string 转为 number
3. 若 string 转为 number 之后，和原来的值有差异，则继续使用 string，如位数超过 double 的最大长度

```js
import * as querystring from "querystring-number";

querystring.parse("?index=123"); // {index: 123}
querystring.parse("?index=123", false); // {index: '123'}
querystring.parser("?index=12345677890123456789"); // {index: '12345677890123456789'}
querystring.stringify({ index: 123 }); // 'index=123'
```
