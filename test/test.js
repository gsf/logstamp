var assert = require('assert');
var concat = require('concat-stream');
var fork = require('child_process').fork;


// Regex to test timestamp conformity and filter them out
var stampRe = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z /mg;

function compareOuts (expected) {
  return function (out) {
    var outs = out.toString().replace(stampRe, '');
    assert.equal(outs, expected);
  };
}

var cp = fork(__dirname + '/fixture.js', {silent: true});
cp.stdout.pipe(concat(compareOuts("sue\n[ 'blip' ]\n")));
cp.stderr.pipe(concat(compareOuts("{ x: 'bob' }\nblop\n")));
