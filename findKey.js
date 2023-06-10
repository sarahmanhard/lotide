const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

// Test case 1
const restaurants = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
const result1 = findKey(restaurants, x => x.stars === 2);
assertEqual(result1, "noma");

// Test case 2
const cars = {
  "Tesla": { electric: true },
  "Toyota": { electric: false },
  "Nissan": { electric: false },
  "Chevrolet": { electric: false }
};
const result2 = findKey(cars, x => x.electric);
assertEqual(result2, "Tesla");

// Test case 3
const emptyObj = {};
const result3 = findKey(emptyObj, x => x);
assertEqual(result3, undefined);
