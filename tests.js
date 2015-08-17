require('./solution.js');
module.exports = sinon = require("sinon");
module.exports = expect = require("chai").expect;

describe('Reverse Polish notation', function () {
  it('[3, 5, "+", 2, "*"] = 16', function () {
    expect(Solution.evalRPN([3, 5, "+", 2, "*"])).to.equal(16)
  });
  it('[1, 2, 3, "*", "+", 4, "+", 5, "+", 6, "-", 5, "+", 2000, "+"] = 2015', function () {
    expect(Solution.evalRPN([1, 2, 3, "*", "+", 4, "+", 5, "+", 6, "-", 5, "+", 2000, "+"])).to.equal(2015)
  });
});