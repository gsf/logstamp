logstamp
========

Overrides console.log, console.info, console.warn, and console.error
to prefix each log message with a timestamp. Similar to
https://github.com/bahamas10/node-log-timestamp but not configurable
and all arguments are passed untouched, allowing for the console
functions' application of util.format.

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
