"use strict"

// function fibb(incoming, a=0, b=1){
//   if(incoming <= 1){
//     return b + a;
//   }else{
//     return fibb(incoming - 1, b, b+a);
//   }
// }

console.log(fibb(500));

let fibb = (incoming, a = 0, b = 1) => {
  if (incoming <= 1){
    return b + a;
  }else{
    return fibb(incoming - 1, b, b + a);
  }
}

// let fibbNoRecur = (index) => {
//   let fibArray = [0, 1], counter = 0;
//   while(index > counter){
//     fibArray.push(fibArray[counter + 1] + fibArray[counter])
//     counter++;
//   }
//   return fibArray.pop();
// }

// console.log(fibbNoRecur(5));
