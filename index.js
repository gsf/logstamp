var stream = require('stream');

var outStream = new stream.Writable({decodeStrings: false});
var errStream = new stream.Writable({decodeStrings: false});

module.exports = function (stamp) {
  var stdout = console._stdout;
  var stderr = console._stderr;

  stamp = stamp || function () {
    return new Date().toISOString() + ' ';
  };

  outStream._write = function (chunk, encoding, callback) {
    stdout.write(stamp());
    stdout.write(chunk);
    callback();
  };

  errStream._write = function (chunk, encoding, callback) {
    stderr.write(stamp());
    stderr.write(chunk);
    callback();
  };

  console._stdout = outStream;
  console._stderr = errStream;
};
