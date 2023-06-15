const { assert } = require("chai");
const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {
  it("should return [0] for h in 'hello'", () => {
    assert.deepEqual(letterPositions("hello").h, [0]);
  });
});