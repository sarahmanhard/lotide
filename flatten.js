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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
}

const flatten = function(array) { //empty array to store flattened elements
  let flattenedArray = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      flattenedArray = flattenedArray.concat(flatten(element));
    } else {
      flattenedArray.push(element);
    }
  }
  return flattenedArray;
};

//test code
assertArraysEqual(flatten([1, [2, 3, [4]]]), [1, 2, 3, 4]);

// Example 2: Flattening a simple nested array
const arr1 = [1, [2, 3], 4, [5]];
console.log(flatten(arr1));
// Output [1, 2, 3, 4, 5]

// Example 3: Flattening an array with multiple levels of nesting
const arr2 = [1, [2, [3, [4, [5]]]]];
console.log(flatten(arr2));
// Output [1, 2, 3, 4, 5]

