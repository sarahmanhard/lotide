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

const without = function(source, itemsToRemove) { //without function takes in a course array and an intemsToRemove array
  let result = [];

  for (let i = 0; i < source.length; i++) { // each element is checked if it it present in the items to remove array using for loop
    if (!itemsToRemove.includes(source[i])) {
      result.push(source[i]); // if an element is not found it is added to the result using thr push method
    }
  }
  return result; //return result only contains elements from the source array that are not present in the itemsToRemove array
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]); 