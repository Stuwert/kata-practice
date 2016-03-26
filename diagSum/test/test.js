var should = require('chai').should();
var expect = require('chai').expect;
var diagSum = require('../app')

var square1 = [
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1]
];

var square2 = [
  [2, 5, 1, 3, 9],
  [4, 1, 3, 0, 8],
  [1, 0, 9, 7, 6],
  [1, 7, 7, 3, 0],
  [3, 3, 8, 2, 4]
]

var square3 = [
  [-1, 2, 3],
  [2, 4, 5],
  [-2, -2, -2]
]

var square4 =[];

var square5 =[
  [1, 2, 3],
  ,
  [3, 2, 1]
]

var square6 = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5]
]

var square7 = [
  [1, 2, 3, 4],
  [1, 2]
]


describe('diagSum', function(){
  
  it('should sum up all of the diagonals in an array of arrays', function(){
    diagSum.reduceSquare(square1).should.equal(4)
  })
  it('should work with an array of length 5', function(){
    diagSum.reduceSquare(square2).should.equal(19)
  })
  it('should work with negative numbers', function(){
    diagSum.reduceSquare(square3).should.equal(1);
  })
  it('should return false if the array has length 0', function(){
    diagSum.reduceSquare(square4).should.be.NaN;
  })
  it('should return false if an array index is empty', function(){
    diagSum.reduceSquare(square5).should.be.NaN;
  })
  it('should return false if an array in an index has a length smaller than the parent array', function(){
    diagSum.reduceSquare(square6).should.be.NaN;
  })
  it('should return false if an interior array has a longer length than the parent', function(){
    diagSum.reduceSquare(square7).should.be.NaN;
  })
})
