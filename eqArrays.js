const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ assertion Passed: ${actual} === ${expected}`);
 } else {
  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) { // compares each array element by element and returns false if one is different
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) { // i < aar1.length is the condition that determines if the loop will continue
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
 return true; // if loop completes without any unequal elements it means both arrays are identical! :)
};
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 9]), false); // => should Fail


// implement a function that takes two arrays and returns true or false
// have the function return true or false based of off a perfect match
// use assertEqual to write test cases for various scenarios