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

// Activate logstamp and set custom stamp
var logstamp = require('./');
logstamp(console);
logstamp.stamp = function () {
  return 'test';
};

console.log('sue');
console.warn('bob');
console.info('blip');
console.error('blop');

// Outputs and errputs 0 & 2 are stamps
assert.equal(out[0][0], 'test');
assert.equal(out[2][0], 'test');
assert.equal(err[0][0], 'test');
assert.equal(err[2][0], 'test');

// Log messages at positions 1 & 3
assert.equal(out[1][0], 'sue\n');
assert.equal(out[3][0], 'blip\n');
assert.equal(err[1][0], 'bob\n');
assert.equal(err[3][0], 'blop\n');
