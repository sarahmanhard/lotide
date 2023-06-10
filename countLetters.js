const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ assertion Passed: ${actual} === ${expected}`)
 }else {
  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
};

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
assertEqual(result["L"], 2);
assertEqual(result["H"], 1);