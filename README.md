# logstamp [![Build Status](https://secure.travis-ci.org/gsf/logstamp.png)](http://travis-ci.org/gsf/logstamp)

Overrides the console's stdout and stderr streams to prefix
each log message with a stamp. Similar to
https://github.com/bahamas10/node-log-timestamp but console methods
are untouched, so things like console.log's application of
util.format still work.

## Examples
```js
console.log('Object: %s', 'myRobot', {number: 5});
require('logstamp')();
console.log('Object: %s', 'myRobot', {number: 5});
```

Output:
```
Object: myRobot { number: 5 }
2013-08-17T21:37:16.212Z Object: myRobot { number: 5 }
```

If desired, a custom stamp can also be set:
```js
require('logstamp')(function () {
  return Date.now() + ' Server X ';
});
console.log([1, 2, 3]);
```

Output:
```
1378137011853 Server X [ 1, 2, 3 ]
```
