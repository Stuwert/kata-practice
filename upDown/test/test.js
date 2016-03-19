var expect = require('chai').expect;
var upDown = require('../app');

describe('upDown', function(){
  it('returns an array with an equal length', function(){
    expect(upDown([1, 2, 3])).to.have.length(3);
  })
  it('returns an empty array if it is passed an empty array', function(){
    expect(upDown([])).to.have.length(0);
  })
  it('returns an array of strings', function(){
    expect(upDown([1, 2, 3])[0]).to.be.a('string');
    expect(upDown([1, 2, 3])[1]).to.be.a('string');
    expect(upDown([1, 2, 3])[2]).to.be.a('string');
  })
  it('returns up if the value is higher', function(){
    expect(upDown([1, 2])[1]).to.equal('up')
  })
  it('returns down if the value is lower', function(){
    expect(upDown([2, 1])[1]).to.equal('down');
  })
  it('returns down if the previous has no value', function(){
    expect(upDown([2, 1])[0]).to.equal('down');
  })
})
