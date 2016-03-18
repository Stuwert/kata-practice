var expect = require('chai').expect;
var rampNum = require('../app');

describe('rampNum', function(){
  it('returns true if each number in a string is ascending or equal', function(){
    expect(rampNum(11)).to.equal(true);
  })
  it("should work if numbers aren't sequential", function(){
    expect(rampNum(13)).to.equal(true);
  })
  it("should work with 4 digits", function(){
    expect(rampNum(134)).to.equal(true);
  })
  it("works with a lot of numbers", function(){
    expect(rampNum(123456789)).to.equal(true);
  })
  it('returns false if each number in a string is not ascending or equal', function(){
    expect(rampNum(10)).to.equal(false);
  })
  it('returns false with more than 2 numbers', function(){
    expect(rampNum(210)).to.equal(false);
  })
  it('returns false even if it is sometimes ascending', function(){
    expect(rampNum(11231)).to.equal(false);
  })
})
