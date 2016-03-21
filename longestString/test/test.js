var expect = require('chai').expect;
var longestString = require('../app');

describe('longestString', function(){
  it('returns an object', function(){
    expect(longestString(["truck", "sidewalk", "book"])).to.be.an('object');
  })
  it('returns an object key of the longest string', function(){
    expect(longestString(["truck", "sidewalk", "book"])).to.have.keys("sidewalk");
    expect(longestString(["truck", "sidewalk", "book"])).to.not.have.keys("truck");
    expect(longestString(["truck", "sidewalk", "book"])).to.not.have.keys("book");
  })
  it('returns a key value of the length of the string', function(){
    expect(longestString(["truck", "sidewalk", "book"])).to.have.deep.property("sidewalk", 8);
  })
})
