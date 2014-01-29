var assert = require('assert');

console.log('1..1');

var fz = require('../')

var match = fz.readdirRecursiveSync(__dirname + '/a');
assert.deepEqual(match, ['cool.js',
  'b/c/d.js']);

var match = fz.readdirRecursiveSync(__dirname + '/a', { fullPath: true });
assert.deepEqual(match, [__dirname + '/a/cool.js',
  __dirname + '/a/b/c/d.js']);

console.log('ok');