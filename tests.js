require('./solution.js');
module.exports = sinon = require("sinon");
module.exports = expect = require("chai").expect;

describe('water drops', function () {
  it('returns 0 given array [0,1,2,3,2,1,0]', function () {
    expect(Solution.calculateAmountOfWaterCollected([0,1,2,3,2,1,0])).to.be.equal(0)
  });

  it('returns 46 given array [1,0,2,0,1,0,0,0,5,0,2,0,0,0,10,0,8,0,5]', function () {
    expect(Solution.calculateAmountOfWaterCollected([1,0,2,0,1,0,0,0,5,0,2,0,0,0,10,0,8,0,5])).to.be.equal(46)
  });

  it('returns 2015 given array [0,1,2,3,4,5,80,5,4,3,2,1,2,3,4,5,6,5,4,3,2,1,0,26,14,13,12,1,2,3,4,5,6,7,8,9,75]', function () {
    expect(Solution.calculateAmountOfWaterCollected([0,1,2,3,4,5,80,5,4,3,2,1,2,3,4,5,6,5,4,3,2,1,0,26,14,13,12,1,2,3,4,5,6,7,8,9,75])).to.be.equal(2015)
  });

});
