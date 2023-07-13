const assert = require('assert');
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  it('should return true for two identical shirt objects', () => {
    const shirtObject = { color: "red", size: "medium" };
    const anotherShirtObject = { size: "medium", color: "red" };
    assert.strictEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });

  it('should return false for two different shirt objects', () => {
    const shirtObject = { color: "red", size: "medium" };
    const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
    assert.strictEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
  });

  it('should return true for two identical multi-color shirt objects', () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
    assert.strictEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
  });

  it('should return false for two different multi-color shirt objects', () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
    assert.strictEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
  });
});
