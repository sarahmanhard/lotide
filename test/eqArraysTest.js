const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// Test code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 9]), false); // => should Fail
