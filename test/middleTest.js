//const assertArraysEqual = require('../assertArraysEqual');
//const middle = require('../middle'); // Adjust the file path accordingly

// Test code
//assertArraysEqual(middle([1]), []); // should pass
//assertArraysEqual(middle([1, 2]), []); // should pass
//assertArraysEqual(middle([1, 2, 3]), [2]); // should pass
//assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // should pass
//assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // should pass
//assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // should pass

const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  
  it("returns [] for ['5']", () => {
    assert.deepEqual(middle(['5']), []);
  });
});


