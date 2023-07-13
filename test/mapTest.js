const map = require("../map");
const { assert } = require("chai");

describe("#map", () => {
  it("should return an array of the same words for words array", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const expected = ["ground", "control", "to", "major", "tom"];
    const results = map(words, (word) => word);
    assert.deepEqual(results, expected);
  });

  it("should return an array of the same motorbike names for motorbikes array", () => {
    const motorbikes = ["yamaha", "kawasaki", "honda", "ducati"];
    const expected = ["yamaha", "kawasaki", "honda", "ducati"];
    const results = map(motorbikes, (word) => word);
    assert.deepEqual(results, expected);
  });

  it("should return an array of the same guitar names for guitars array", () => {
    const guitars = ["also yamaha", "washburn", "dean", "ibanez"];
    const expected = ["also yamaha", "washburn", "dean", "ibanez"];
    const results = map(guitars, (word) => word);
    assert.deepEqual(results, expected);
  });

  it("should return an array of the same elements for rando array", () => {
    const rando = [null, undefined, [1, 2], true, false];
    const expected = [null, undefined, [1, 2], true, false];
    const results = map(rando, (word) => word);
    assert.deepEqual(results, expected);
  });
});
