module.exports = function(numb){
  this.compile = function(){
    //returns compiled string
    return "Bing Bong"
  };
  this.computeNumbers = function(num){
    // returns uncompiled string
    return "Bing Bong"
  };
  this.breakIntoUnits = function(num){
    //returns an array of size 10, with the number of integer values for each set
  };
  this.numOfSets = function(divider, toDivide){
    var i = 0, multiple = 0;
    while(toDivide > multiple){
      i++;
      multiple = divider * i;
    }
    return i;
  }
  this.romanNumer = null;

}

var numArr = [1, 5, 10, 50, 100, 500, 1000];
var romArr = ["I", "V", "X", "L", "C", "D", "M"];
