module.exports = {
  fibArray: function(num){
    var trailingNum = 1;
    var leadingNum = 2;
    var holder;
    var returnArray = [];
    while(leadingNum <= num){
      if( leadingNum % 2 === 0){
        returnArray.push(leadingNum)
      }
      holder = trailingNum;
      trailingNum = leadingNum;
      leadingNum = leadingNum + holder;
    }
    return returnArray;
  },
  returnFinalSum: function(num){
    return this.fibArray(num).reduce(function(prev, curr){
      return prev + curr;
    })
  }
}
