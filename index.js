var stream = require('stream');

var outStream = new stream.Writable({decodeStrings: false});
var errStream = new stream.Writable({decodeStrings: false});

module.exports = function (console_) {
  var stdout = console_._stdout;
  var stderr = console_._stderr;

  outStream._write = function (chunk, encoding, callback) {
    stdout.write(module.exports.stamp());
    stdout.write(chunk);
    callback();
  };

  errStream._write = function (chunk, encoding, callback) {
    stderr.write(module.exports.stamp());
    stderr.write(chunk);
    callback();
  };

  console_._stdout = outStream;
  console_._stderr = errStream;
};

module.exports.stamp = function () {
  return '[' + new Date().toISOString() + '] ';
};
