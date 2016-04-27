// takes an array of arrays
// turns it into a number of lines
//
// want to use the map function because the dimensions of the initial array don't change
//
//
// map function
//
// convert integer value to string for comparison
// if .includes method does not equal integer, return false
// return arr.length
//
// convert mapped array into lines


function count_Numbers(arr){

  return arr.map(function(set){


    var count = 0;
    for(var currNum=set[0]; currNum <=set[1]; currNum++){
      var itCounts = true;
      for(var splitter = 0; splitter <=9; splitter++){
        var currInd = currNum.toString().split("").indexOf(splitter.toString())
        if(currNum.toString().split("").indexOf(splitter.toString(), currInd+1) !== -1){
          itCounts = false;
          break;
        }
      }
      if(itCounts){
        count++
      }
    }

    return count;


  }).join("\n")


}


var currNum = "123"
console.log(currNum.split("2"))
console.log(currNum)
// console.log(count_Numbers([[1, 20], [9, 19]]))
// console.log(count_Numbers([[7, 8], [52, 80], [34, 84], [57, 64], [74, 78]]))
//
// console.log("11".split('1').join(""))
