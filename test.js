var assert = require('assert');

var out = [];
var err = [];

// Stub out stdout and stderr
process.stdout.write = function () {
  out.push(arguments);
};
process.stderr.write = function () {
  err.push(arguments);
};

// Activate logstamp
require('./')(console);

console.log('sue');
console.info(['blip']);
console.warn({x: 'bob'});
console.error('blop');

// Regex to test timestamp conformity
var stampRe = /^\[\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z\] $/;

// Outputs and errputs 0 & 2 are timestamps
assert(stampRe.test(out[0][0]));
assert(stampRe.test(out[2][0]));
assert(stampRe.test(err[0][0]));
assert(stampRe.test(err[2][0]));

// Log messages at positions 1 & 3
assert.equal(out[1][0], 'sue\n');
assert.equal(out[3][0], "[ 'blip' ]\n");
assert.equal(err[1][0], "{ x: 'bob' }\n");
assert.equal(err[3][0], 'blop\n');
