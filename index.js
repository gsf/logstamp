var stream = require('stream');

module.exports = function (stamp) {
  stamp = stamp || function () {
    return new Date().toISOString() + ' ';
  };

  var std = {};

  ['out', 'err'].forEach(function (s) {
    std[s] = console['_std' + s];
    console['_std' + s] = new stream.Writable({decodeStrings: false});
    console['_std' + s]._write = function (chunk, encoding, callback) {
      std[s].write(stamp());
      std[s].write(chunk);
      callback();
    };
  });
};
