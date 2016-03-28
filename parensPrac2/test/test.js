var should = require('chai').should();
var parensChecker = require('../app')

describe('parensChecker', function(){
  describe('checks whether or not a set of parentheses are valid', function(){
    it('returns true if the parens close one another', function(){
      parensChecker("()").should.equal(true)
    })
    it('returns false is the parens do not close one another', function(){
      parensChecker(")(").should.equal(false);
    })
    // xit('returns false if quotes cross parens closures', function(){
    //   parensChecker('(")"').should.equal(false);
    // })
    // xit('but return true if the quotes are inside', function(){
    //   parensChecker('("")').should.equal(true);
    // })
    it('other tests', function(){
      parensChecker("()(((())))").should.equal(true);
    })
    it('more tests', function(){
      parensChecker("())))(").should.equal(false);
    })
  })
})
