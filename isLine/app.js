function onLine(points){
  if (arguments.length < 2){
    return false;
  }
  var m = (arguments[0][1] - arguments[1][1]) / (arguments[0][0] - arguments[1][0]);
  var b = arguments[0][1] - m * arguments[0][0]
  for(var i = 2; i < arguments.length; i++){
    if(arguments[i][1] !== (arguments[i][0] * m + b)){
      return false;
    }
  }
  return true;
}


console.log(onLine([1, 2], [-3, -14], [22, 9]));
