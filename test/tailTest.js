//const assertEqual = require('../assertEqual');
//const tail = require('../tail');

const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(tail(['5']), '5'); 
  });
});

// Test code
//const words = ["Yo Yo", "Lighthouse", "Labs"];
//tail(words);
//assertEqual(tail(words.length, 3), 3);