/**
 * Test utilities
 */
var Adapter = require('../../');

describe('registerCollection', function () {

  it('should produce correct correct cartesian product', function() {
    var where = {
      a: [1, 2, 3],
      b: 'xyz',
      c: ['a', 'b', 'c']
    };

    var result = Adapter.cartesian(where);


  });

});
