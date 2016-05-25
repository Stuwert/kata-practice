var generator = require('./app');
function dummySeq(){
  return function(){
    return "dummy";
  }
}

var test = generator(dummySeq);

console.log(test.next());
