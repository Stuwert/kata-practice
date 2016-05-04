var should = require('chai').should();
var evenFib = require('../app')

describe('evenFibs should return an array of even numbers', function(){
  it('Should return [2, 8] for 13', function(){
    evenFib.fibArray(13).should.deep.equal([2, 8])
  })
  it('Should return [2, 8, 34] for 35', function(){
    evenFib.fibArray(35).should.deep.equal([2, 8, 34])
  })
  it('should return [2, 8, 34] for 34', function(){
    evenFib.fibArray(34).should.deep.equal([2, 8, 34])
  })
})

describe('evenFibSum should return a number', function(){
  describe('that represents the sum of all even fibonacci numbers smaller than the given number', function(){
    it('Should return 10 for 13', function(){
      evenFib.returnFinalSum(13).should.equal(10)
    })
    it('Should return 44 for 35', function(){
      evenFib.returnFinalSum(35).should.equal(44)
    })
    it('should return 44 for 34', function(){
      evenFib.returnFinalSum(34).should.equal(44)
    })
  })
})
