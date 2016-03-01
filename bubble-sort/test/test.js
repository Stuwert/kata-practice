var chai = require('chai');
var expect = chai.expect;
var bubbleSorter = require('../app')


var one = [0, 1, 0];
var answerone = [0, 0, 1];
var two = [0, 1, 2, 3, 4]
var answertwo = [0, 1, 2, 3, 4];
var three = [1, 4, 345, 40, -1]
var answerthree = [-1, 1, 4, 40, 345]
var four = [0, 0, 0, 0, 0, 0];
var answerfour = four;

// describe('Sorts an array from lowest to highest', function(){
//   it('loops through an array step by step', function(){
//     expect(bubbleSorter(one).join("")).to.equal(answerone.join(""));
//   })
//   it('does more complex stuff', function(){
//     expect(bubbleSorter(two).join("")).to.equal(answertwo.join(""));
//   })
//
//   it('does even more complex stuff', function(){
//     expect(bubbleSorter(three).join("")).to.equal(answerthree.join(""));
//   })
//
//   it('can handle an array of 0s', function(){
//     expect(bubbleSorter(four).join("")).to.equal(answerfour.join(""));
//   })
// })

console.log(bubbleSorter(one));
console.log(bubbleSorter(two));
console.log(bubbleSorter(three));
console.log(bubbleSorter(four));
