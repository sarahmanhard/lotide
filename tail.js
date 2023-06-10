
const assertEqual = require('./assertEqual');

const tail = function(array) {
  return array[0];
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no point to capture the return value since not checking it
assertEqual(tail(words.length, 3), 3); // original array should still have 3 elements!

module.exports = tail;