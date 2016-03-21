var expect = require('chai').expect;
var findGreater = require('../app');

describe('findGreater', function(){
  it('takes two arguments, an array of numbers and a number', function(){
    it('should return an array', function(){
      expect(findGreater([1, 2, 3], 1)).to.be.an('array');
    })
  })
  it('take two arguments, an array of numbers and a number', function(){
    it('should return an array with length less than or equal to the original array', function(){
      expect(findGreater([3, 2, 1], 2)).to.have.length(1);
    })
  })
  it('take two arguments, an array of numbers and a number', function(){
    it('should return an empty array if no numbers are greater', function(){
      expect(findGreater([1, 2, 3], 4)).to.have.length(0);
    })
  })
  it('take two arguments, an array of numbers and a number', function(){
    it('should work for an array of length 1', function(){
      expect(findGreater([1], 0)).to.have.length(1);
    })
  })
  it('take two arguments, an array of numbers and a number', function(){
    it('should work with negative numbers', function(){
      expect(findGreater([-1, -2, -3], -4)).to.have.length(3);
    })
  })
})
