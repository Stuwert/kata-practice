module.exports = {
  returnSubArrays : function(arr){
    let i = 1;
    let allSubArrays = []
    while (i <= arr.length){
      for (let j = 0; j <= arr.length - i; j++){
        // console.log(j);
        let holderArr = [];
        for(let k = j; k < j + i; k++){
          holderArr.push(arr[k]);
        }
        allSubArrays.push(holderArr);
      }
      i++
    }
    return allSubArrays;
  },
  reduceSubArrays: function(arr){
    let reduceable = this.returnSubArrays(arr);
    if(reduceable.length > 0){
      return reduceable.map(function(currArr){
        return currArr.reduce(function(prev, curr){
          return prev + curr;
        }, 0)
      })
    } else{
      return [0]
    }
  }
  returnLargestSum: function(arr){
    return this.reduceSubArrays(arr).reduce(function(prev, curr){
      return prev < curr ? curr : prev;
    })
  }

}
