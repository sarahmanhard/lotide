// tail.js
const assertEqual = require('./assertEqual');

const tail = function(array) {
  return array.slice(1);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no point to capture the return value since not checking it
assertEqual(tail(words).length, 2);

module.exports = tail;
