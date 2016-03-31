"use strict"

// var fib = [1,1,2,3,5,8,13,21 ];

const THING = bing();

function bing(){
  return 5;
}

// function fibb(incoming, a = 0, b = 1){
//   let newA = b;
//   let newB = b + a;
//   if (incoming === 1){
//     return newB;
//   }else{
//     return fibb(incoming - 1, newA, newB);
//   }
// }

let fibb = (incoming, a = 0, b = 1) => {
  let newA = b;
  let newB = b + a;
  if (incoming <= 1){
    return newB;
  }else{
    return fibb(incoming - 1, newA, newB);
  }
}

let fibbNoRecur = (index) => {
  let fibArray = [0, 1];
  while(index > 0){
    fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2])
    index--;
  }
  return fibArray.pop();
}

console.log(fibbNoRecur(304));
console.log(fibb(304));
