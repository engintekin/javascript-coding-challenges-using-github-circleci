require('./solution.js');
module.exports = sinon = require("sinon");
module.exports = expect = require("chai").expect;

describe('isPalindrome', function () {
  it('returns false if string is blank', function () {
    expect(Solution.isPalindrome("")).to.be.false
  });
  it('returns false if string is not a palindrome', function () {
    expect(Solution.isPalindrome("not_a_palindrome")).to.be.false
  });
  it('returns true if string is a palindrome', function () {
    expect(Solution.isPalindrome("redivider")).to.be.true
    expect(Solution.isPalindrome("kinnikinnik")).to.be.true
  });
});