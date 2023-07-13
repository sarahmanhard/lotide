const { assert } = require("chai");
const without = require("../without");

describe("#without", () => {
  it("should return an array without the specified elements", () => {
    const thisOne = [1, 2, 3];
    const expected = [2, 3];
    const result = without(thisOne, [1]);
    assert.deepEqual(result, expected);
  });

  it("should return an array without the specified elements (including different types)", () => {
    const array = ["1", "2", "3"];
    const expected = ["1", "2"];
    const result = without(array, [1, 2, "3"]);
    assert.deepEqual(result, expected);
  });

  it("should not modify the original array", () => {
    const words = ["hello", "world", "lighthouse"];
    const expected = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]);
    assert.deepEqual(words, expected);
  });
});
