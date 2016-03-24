var expect = require('chai').expect;
var garlandWord = require('../app')

describe('garlandWord', function(){
  it('should return 0 if there are no similar words', function(){
    expect(garlandWord('programmer')).to.equal(0);
  })
  it('should return 1 if the first and last letter are the same', function(){
    expect(garlandWord('ceramic')).to.equal(1);
  })
  it('should return 2 if the first 2 and last 2 letters are the same', function(){
    expect(garlandWord('onion')).to.equal(2);
  })
  it('should work if there are more letters than the first and last that are the same', function(){
    expect(garlandWord('alfalfa')).to.equal(4);
  })
  it('should return 4', function(){
    expect(garlandWord('hotshots')).to.equal(4);
  })
  it('should work for complex words', function(){
    expect(garlandWord('abracadabra')).to.equal(4);
  })
  it('should work for foreign words', function(){
    expect(garlandWord('couscous')).to.equal(4);
  })
})
