const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  const length = array.length;
  if (length <= 2) {
    return [];
  }
  const middleIndex = Math.floor(length / 2);
  if (length % 2 === 0) {
    return [array[middleIndex -1], array[middleIndex]];
  } else {
    return [array[middleIndex]];
  }
};

assertArraysEqual(middle([1]), []); // should pass
assertArraysEqual(middle([1, 2]), []); // should pass
assertArraysEqual(middle([1, 2, 3]), [2]); // should pass
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // should pass
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // should pass
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // should pass

module.exports = middle;
