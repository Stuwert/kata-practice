module.exports = {
  isSquare: function(arr){
    if (arr.length < 1){
      return false;
    }
    for(var i = 0; i < arr.length; i++){
      if (arr[i] === undefined || arr[i].length !== arr.length){
        return false;
      }
    }
    return true;
  },
  reduceSquare: function(arr){
    if(this.isSquare(arr)){
      return arr.reduce(function(prev, curr, i){
        return prev + curr[i];
      }, 0)
    }else{
      return NaN;
    }
  }
}
