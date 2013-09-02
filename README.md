logstamp
========

Overrides the passed-in console's log, info, warn, and error methods to prefix
each message with a timestamp. Similar to
https://github.com/bahamas10/node-log-timestamp but arguments are passed to
console untouched, allowing for the application of util.format.

Example:
```js
console.log('Object: %s', 'myRobot', {number: 5});
require('logstamp')(console);
console.log('Object: %s', 'myRobot', {number: 5});
```

Output:
```
Object: myRobot { number: 5 }
[2013-08-17T21:37:16.212Z] Object: myRobot { number: 5 }
```

If desired, a custom stamp can also be set:
```js
var logstamp = require('logstamp');
logstamp(console);
logstamp.stamp = function (out) {
  out.write(Date.now() + ' Server X ');
};
console.log([1, 2, 3]);
```

Output:
```
1378137011853 Server X [ 1, 2, 3 ]
```
