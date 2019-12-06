# querystring-number

1. 极小 gzip 0.3k
2. 可以选择性的将 string 转为 number

```js
import * as querystring from "querystring-number";

querystring.parse("?index=123"); // {index: 123}
querystring.parse("?index=123", false); // {index: '123'}
querystring.stringify({ index: 123 }); // 'index=123'
querystring.stringify({ index: 12345677890123456789 }); // "index='12345677890123456789'"
```
