
const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

// TEST CODE

describe("#findKeyByValue", () => {

  const TVshows = {
    sci_fi: "The Expanse",
    comedy:  "Brooklyn Nine-Nine",
    drama: "The Wire"
  };

  it("returns 'drama' for 'The Wire'", () => {
    assert.strictEqual(findKeyByValue(TVshows, "The Wire"), "drama");
  });

  it("returns undefined for 'That 70s Show'", () => {
    assert.strictEqual(findKeyByValue(TVshows, "That 70s Show"), undefined);
  });

  it("returns 'comedy' for 'Brooklyn Nine-Nine'", () => {
    assert.strictEqual(findKeyByValue(TVshows, "Brooklyn Nine-Nine"), "comedy");
  });

});


