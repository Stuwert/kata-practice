'use Strict';

let expect = require('chai').expect;
let maxSum = require('../app')
let subArrays = require('../returnSubArray');


describe('Maximum sum subarray returns the array with the highest sum', function(){
  xit('should return the entire array when there are no negative numbers', function(){
    expect(maxSum([1, 2, 3])).to.equal(6)
  })

  xit('should return the largest number when there are no positive numbers', function(){
    expect(maxSum([-2, -1, -3])).to.equal(-1)
  })

  xit('should return 0 when the array is empty', function(){
    expect(maxSum([])).to.equal(0)
  })

})

describe('Returns All Sub Arrays within an array', function(){
  it('should return [[1]] if the array is [1]', function(){
    expect(subArrays.returnSubArrays([1])).to.deep.equal([[1]]);
  })
  it('should return [[1], [2], [1,2]]', function(){
    expect(subArrays.returnSubArrays([1, 2])).to.deep.equal([[1], [2], [1, 2]])
  })
  it('should return [[1], [2], [3], [1, 2], [2, 3], [1, 2, 3]]', function(){
    expect(subArrays.returnSubArrays([1, 2, 3])).to.deep.equal([[1], [2], [3], [1, 2], [2, 3], [1, 2, 3]])
  })
})


describe('Returns an Array of SubArray sum', function(){
  it('should return [1] from an array [1]', function(){
    expect(subArrays.reduceSubArrays([1])).to.deep.equal([1])
  })
  it('should return [1, 2, 3] from an array [1, 2]', function(){
    expect(subArrays.reduceSubArrays([1, 2])).to.deep.equal([1, 2, 3])
  })
  it('should return [1, 2, 3, 3, 5, 6] from an array [1, 2, 3]', function(){
    expect(subArrays.reduceSubArrays([1, 2, 3])).to.deep.equal([1, 2, 3, 3, 5, 6])
  })
  it('should return [0] from an array []', function(){
    expect(subArrays.reduceSubArrays([])).to.deep.equal([0])
  })
})
