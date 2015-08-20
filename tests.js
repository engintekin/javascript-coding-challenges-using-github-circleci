require('./solution.js');
module.exports = sinon = require("sinon");
module.exports = expect = require("chai").expect;

describe('4sum', function () {
  it('returns `null` given array doesn`t contain no such set of four integers', function () {
    expect(Solution.fourSum([4, 5, -1, 2, 8])).to.be.null
  });

  it('returns one of the solution set [[3, 1, 0, -4], [0, 0, 0, 0], [3, -1, -1, -1]]', function () {
  	expect(Solution.fourSum([2, 3, 1, 0, -4, -1]))
      .that.is.an('array')
      .to.have.length(4)
      .to.satisfy(oneOfTheSolutionSet([[3, 1, 0, -4], [0, 0, 0, 0], [3, -1, -1, -1]]));
  });

  it('returns one of the solution set [[20, -8, -8, -4]]', function () {
    expect(Solution.fourSum([40, -2, 30, -4, -3, -8, -1, 20, -5]))
      .that.is.an('array')
      .to.have.length(4)
      .to.satisfy(oneOfTheSolutionSet([[20, -8, -8, -4]]));
  });

  function oneOfTheSolutionSet(alternativeSolutions) {
    return function(answer) { 
      answer = answer.slice().sort();

      for (i = 0; i < alternativeSolutions.length; i++) { 
        if(JSON.stringify(answer) == JSON.stringify(alternativeSolutions[i].sort())) {
          return true;
        }
      }

      return false;
    }
  }
});