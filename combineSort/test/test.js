var expect = require('chai').expect;
var combineSort = require('../app');

describe('combineSort', function(){
  it('takes two arrays and returns a single array', function(){
    expect(combineSort([1], [2])).to.have.length(2);
  })
  it('takes two arrays and returns a single sorted array', function(){
    expect(combineSort([2], [1])).to.deep.equal([1, 2]);
  })
  it('takes two arrays of strings and returns a single sorted array', function(){
    expect(combineSort(["abacus"], ["bacteria"])).to.deep.equal(["abacus", "bacteria"])
  })
  it('should work with long arrays', function(){
    expect(combineSort([ "cat", "dog", "fish", "zebra" ],  [ "lion", "aardvark", "gorilla" ])).to.deep.equal([ "aardvark", "cat", "dog", "fish", "gorilla", "lion", "zebra" ]);
  })
})
