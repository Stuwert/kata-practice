var expect = require('chai').expect
var threeAndFive = require('../and5')

describe('should return the sum of 3s below a certain number', function(){
  it('should return 18 for 10', function(){
    expect(threeAndFive.sum3(10)).to.equal(18)
  })
  it('should return 63 for 20', function(){
    expect(threeAndFive.sum3(20)).to.equal(63)
  })
})

describe('should return the sum of 5s below a certain number, without any 5 that\'s also divisible by 3', function(){
  it('should return 15 for 11', function(){
    expect(threeAndFive.sum5(11)).to.equal(15)
  })
  it('should return 35 for 21', function(){
    expect(threeAndFive.sum5(21)).to.equal(35)
  })
})

describe('should return the sum of all 3s and 5s', function(){
  it('should return 101 for 21', function(){
    expect(threeAndFive.sumAll(20)).to.equal(98)
  })
})
