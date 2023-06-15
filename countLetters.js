/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ assertion Passed: ${actual} === ${expected}`)
 }else {
  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
};*/
//above code left as reference
const assertEqual = require('./assertEqual');


const countLetters = function(letters) {
  const result = {};
  const newString = letters.split(" ").join("");
  for (const letter of newString) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1
    }
  }
  return result;
};

const result = countLetters("LHL");
assertEqual(result["L"], 2);// Should Pass
assertEqual(result["H"], 1); // Should Pass
assertEqual(result["L"], 3); // Should fail