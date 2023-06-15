/*const assertEqual = function(actual, expected) {
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
};*/

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];

    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }

  return results;
};

const result = letterPositions("lighthouse in the house");
console.log(result);

module.exports = letterPositions;