function RNG(n){
  var that = this;
  this.n = n;
  this.sequence = [];
  this.randomBuilder = function(){
    for (var i = 0; i < that.n; i++){
      that.sequence = arrayToArray(that.sequence, arrayRandomizer(arrayBuilder(that.n)))
    }
  }
  this.randomBuilder();
}

RNG.prototype.rand = function(){
  return this.sequence.pop();
  // return next random number
}

module.exports = RNG;


// Take an input 2
// Create array [0, 1];
// Use Math.random() * arr.length
// push(arr.splice(num))
// repeat
// repeat that function n times

function arrayBuilder(n){
  var arr = [];
  for (var i = 0; i < n; i++){
    arr.push(i);
  }
  return arr;
}

function arrayRandomizer(arr){
  var newArr = [];
  while (arr.length > 0){
    newArr.push(arr.splice(returnRand(arr.length), 1)[0])
  }
  return newArr;
}

function returnRand(num){
  //Make sure to input arr.length for num.
  return Math.trunc(Math.random() * num);
}

function arrayToArray(arr1, arr2){
  arr2.forEach(function(item){
    arr1.push(item);
  })
  return arr1;
}

var test = new RNG(3);
console.log(test.sequence);
