var stamp = function (dest) {
  dest.write('[' + new Date().toISOString() + '] ');
}

var log = console.log;
console.log = console.info = function () {
  stamp(console._stdout);
  log.apply(console, arguments);
};

var warn = console.warn;
console.warn = console.error = function () {
  stamp(console._stderr);
  warn.apply(console, arguments);
};
