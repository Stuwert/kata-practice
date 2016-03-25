var should = require('chai').should();
var romanObj = require('../reverseapp');
var testcaseArr = require('./testcaseArr');

var makeRoman = new romanObj();

describe('makeRoman', function(){
  describe('num of divisions', function(){
    it('5 goes into 12, 2 times', function(){
      makeRoman.numOfSets(5, 12).should.equal(2);
    })
    xit('1 goes into 3, 3 times', function(){
      makeRoman.numOfSets(1, 3).should.equal(3);
    })
  })
  xit('should convert 1 to I', function(){
    makeRoman(1).should.equal("I");
  })
  testcaseArr.forEach(function(parameters, i){
    xit(parameters[0] + " should equal " + parameters[1], function(){
      romanNumeral(parameters[0]).should.equal(parameters[1]);
    })
  })
})
