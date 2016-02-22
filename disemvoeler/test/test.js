var chai = require('chai');
var expect = chai.expect;
var disemvoweler = require('../app')


describe('Disemvoweler', function(){
  it('should remove all spaces from a string', function(){
    expect(hasNone(/_/, disemvoweler("Bing Bong")[0])).to.equal(true);
  })

  it('should remove all vowels from a string as well', function(){
    expect(hasNone(/[aeiou]/, disemvoweler("Bing Bong")[0])).to.equal(true);
  })

  it('should return an array with a length of two', function(){
    expect(disemvoweler("Bing Bong")).to.have.length(2);
  })

  it('should splits vowels and consonants', function(){
    var input = "Here is some text";
    var consonantOutput = "Hrssmtxt";
    var vowelOutput = "eeioee"
    expect(disemvoweler(input)[0]).to.equal(consonantOutput);
    expect(disemvoweler(input)[1]).to.equal(vowelOutput);
  })

})

function hasNone(rgx, strng){
  for(var i = 0; i <strng.length; i ++){
    if(rgx.exec(strng[i])){
      return false;
    }
  }
  return true;
}
