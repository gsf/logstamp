var assert = require('assert');
var concat = require('concat-stream');
var fork = require('child_process').fork;


function compareOuts (expected) {
  return function (out) {
    assert.equal(out.toString(), expected);
  };
}

var cp = fork(__dirname + '/stamp-fixture.js', {silent: true});
cp.stdout.pipe(concat(compareOuts("test sue\ntest [ 'blip' ]\n")));
cp.stderr.pipe(concat(compareOuts("test { x: 'bob' }\ntest blop\n")));
