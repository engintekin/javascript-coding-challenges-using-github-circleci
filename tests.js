require('./solution.js');
module.exports = sinon = require("sinon");
module.exports = expect = require("chai").expect;

describe('countZeros', function () {
  it('returns 0 given n = 5', function () {
    expect(Solution.countZeros(5)).to.equal(0)
  });
  it('returns 5 given n = 50', function () {
    expect(Solution.countZeros(50)).to.equal(5)
  });
  it('returns 11 given n = 100', function () {
    expect(Solution.countZeros(100)).to.equal(11)
  });
  it('returns 111 given n = 1000', function () {
    expect(Solution.countZeros(1000)).to.equal(111)
  });
  it('returns 222 given n = 2000', function () {
    expect(Solution.countZeros(2000)).to.equal(222)
  });
  it('returns 223 given n = 2015', function () {
    expect(Solution.countZeros(2015)).to.equal(223)
  });
  it('returns 22222 given n = 200000', function () {
    expect(Solution.countZeros(200000)).to.equal(22222)
  });
});