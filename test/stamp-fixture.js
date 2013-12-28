// Activate logstamp, passing in stamp
require('..')(function () {
  return 'test ';
});

console.log('sue');
console.info(['blip']);
console.warn({x: 'bob'});
console.error('blop');
