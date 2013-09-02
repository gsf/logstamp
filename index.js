module.exports = function (console_) {
  var log = console_.log;
  console_.log = console_.info = function () {
    module.exports.stamp(console_._stdout);
    log.apply(console_, arguments);
  };

  var warn = console_.warn;
  console_.warn = console_.error = function () {
    module.exports.stamp(console_._stderr);
    warn.apply(console_, arguments);
  };
};

module.exports.stamp = function (out) {
  out.write('[' + new Date().toISOString() + '] ');
};
