const tail = require("../tail");
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });
  it("returns '[2, 3, 4, 5]' for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });
  it("returns '[]' for []", () => {
    assert.deepEqual(tail([]), []);
  });
});

