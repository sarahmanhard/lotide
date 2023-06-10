const assertEqual = require('../assertEqual');

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ assertion Passed: ${actual} === ${expected}`)
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
//   }
// };

assertEqual("Hello", "Hello");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(42, 42);
assertEqual("Apples", "Oranges");
assertEqual(10, 20);

// module.exports = assertEqual;
