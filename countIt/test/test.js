var expect = require('chai').expect;
var countIt = require('../app');

describe('Count it', function(){
  var stringTest = new countIt('aabb');
  describe('hasKey', function(){
    it("should return false if the value isn't present", function(){
      expect(stringTest.hasKey("c")).to.equal(false);
    })
    it("should return true if the value is present", function(){
      expect(stringTest.hasKey("a")).to.equal(true);
    })
  })

  describe('addValue', function(){
    it("should create a newKey if one isn't present", function(){
      expect(stringTest.addValue("c")).to.equal(1);
    })
    it("should update a key if one is already present", function(){
      expect(stringTest.addValue("b")).to.equal(3);
    })
  })

  describe('obj', function(){
    it("should return a full object", function(){
      expect(stringTest.obj).to.have.property('a').that.deep.equals(2);
      expect(stringTest.obj).to.have.property('b').that.deep.equals(3);
    })
  })
})




//If key exists return true else return false


// If key doesn't exist make new key

// If key does exist increment key


// Return array
