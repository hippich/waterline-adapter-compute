/**
 * Test utilities
 */
require('should');
var Adapter = require('../../lib/adapter');

describe('registerCollection', function () {

  it('should produce correct correct cartesian product', function() {
    var where = {
      a: [1, 2, 3],
      b: 'xyz',
      c: ['a', 'b', 'c']
    };

    var options = Adapter.objectProduct(where);

    options.should.deepEqual([ { a: 1, b: 'xyz', c: 'a' },
      { a: 1, b: 'xyz', c: 'b' },
      { a: 1, b: 'xyz', c: 'c' },
      { a: 2, b: 'xyz', c: 'a' },
      { a: 2, b: 'xyz', c: 'b' },
      { a: 2, b: 'xyz', c: 'c' },
      { a: 3, b: 'xyz', c: 'a' },
      { a: 3, b: 'xyz', c: 'b' },
      { a: 3, b: 'xyz', c: 'c' }
    ]);
  });
});
