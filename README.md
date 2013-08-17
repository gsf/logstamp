logstamp
========

Prefix log messages with a timestamp

Overrides console.log, console.info, console.warn, and console.error to
prefix timestamps. Similar to https://github.com/bahamas10/node-log-timestamp
but doesn't get in the way of the console functions' application of 
util.format to their arguments.

Example:
```js
console.log('Object: %s', 'myRobot', {number: 5});
require('logstamp');
console.log('Object: %s', 'myRobot', {number: 5});
```

Output:
```
Object: myRobot { number: 5 }
[2013-08-17T21:37:16.212Z] Object: myRobot { number: 5 }
```
