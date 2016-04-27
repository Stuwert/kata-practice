"use strict"

function StairCase(n) {
  let returnString = "";

  //spaces
  //#-entrance: add up to n, at all times

  for(let i = 1; i <= n; i ++){

    let spaceNum = n - i;
    let stringOut = "";
    for (let j = 0; j < spaceNum; j++){
      stringOut += " ";
    }
    for(let k = 0; k < i; k++){
      stringOut+= "#"
    }
    stringOut +="\n"
    returnString += stringOut;
  }

  return returnString
}

console.log(StairCase(3));

function sumOfIntegers(arr){
  arr.reduce(function(prev, curr){
    return prev + curr;
  })
}
