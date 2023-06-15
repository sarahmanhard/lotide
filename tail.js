// tail.js
const assertEqual = require('./assertEqual');

const tail = function(array) {
  return array.slice(1);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no point to capture the return value since not checking it
assertEqual(tail(words).length, 2);

const numbers = [1, 2, 3, 4, 5];
const tailNumbers = tail(numbers);

console.log(tailNumbers);

module.exports = tail;
