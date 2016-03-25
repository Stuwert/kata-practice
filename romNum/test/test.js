var should = require('chai').should();
var romanNumeral = require('../app');
var testArr = require('./testcaseArr')

describe('romanNumeral', function(){
  testArr.forEach(function(parameters){
    it('should pass the test case', function(){
      romanNumeral(parameters[1]).should.equal(parameters[0]);
    })
  })
})
