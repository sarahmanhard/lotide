const { assert } = require("chai");
const takeUntil = require("../takeUntil");

describe("#takeUntil", () => {
  it("should return an array until the condition (x < 0) is met", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const expected = [1, 2, 5, 7, 2];
    const results = takeUntil(data1, (x) => x < 0);
    assert.deepEqual(results, expected);
  });
});
