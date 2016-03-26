module.exports = function(arr){
  var start = 0;
  if (arr.length < 1){
    start = NaN;
  }
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === undefined){
      start = NaN;
    }
  }
  return arr.reduce(function(prev, curr, i){
    if(curr.length !== arr.length || curr === undefined){
      return prev + NaN;
    }
    return prev + curr[i];
  }, start)
}
