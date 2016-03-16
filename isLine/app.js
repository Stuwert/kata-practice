function onLine(points){
  if (points.length < 2){
    return false;
  }
  var m = (points[0][1] - points[1][1]) / (points[0][0] - points[1][0]);
  var b = points[0][1] - m * points[0][0]
  for(var i = 2; i < points.length; i++){
    if(b && points[i][1] !== (points[i][0] * m + b)){
      return false;
    }else if(points[i][0] !== points[1][0]){
      return false;
    }
  }
  return true;
}


console.log(onLine([1, 2], [1, 4], [1, 7]));
