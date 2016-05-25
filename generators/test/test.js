var expect = require('chai').expect;
var generator = require('../app');


describe('Generator should return an object with the next method', function(){
  it('should return dummy when passed the dummy sequence', function(){
    let test = generator(dummySeq);
    expect(test.next()).to.equal('dummy');
  })
  it('should iterate through a set', function(){
    let seq = generator(iteratorSeq);
    seq.next();
    expect(seq.next()).to.equal(1);
  })
})


function dummySeq(){
  return function(){
    return "dummy";
  }
}
