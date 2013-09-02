module.exports = function (cnsl, stamp) {
  var stamp = stamp || function (out) {
    out.write('[' + new Date().toISOString() + '] ');
  };

  var log = cnsl.log;
  cnsl.log = cnsl.info = function () {
    stamp(cnsl._stdout);
    log.apply(cnsl, arguments);
  };

  var warn = cnsl.warn;
  cnsl.warn = cnsl.error = function () {
    stamp(cnsl._stderr);
    warn.apply(cnsl, arguments);
  };
};
