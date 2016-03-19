function onLine(points){
  if (points.length < 2){
    return false;
  }
  var m;
  var b;
  for (var = 0; i < points.length -1; i++){
    var xDelta = points[i][0] - points [i+1][0];
    var yDelta = points[i][1] - points [i+1][1];
    if (xDelta === 0){
      if (yDelta === 0){
        continue;
      }else{

        //continue just checking the y statement or invert the freaking thing.
      }
    }else{
      if(!m){
        m = yDelta /xDelta;
        b =
      }
    }
  }

  var m = (points[0][1] - points[1][1]) / (points[0][0] - points[1][0]);
  var b = points[0][1] - m * points[0][0]
  for(var i = 2; i < points.length; i++){
    if (m === Infinity || m === -Infinity){
      if(points[i][0] !== points[1][0]){
        return false;
      }
    }else{
      if(points[i][1] !== (points[i][0] * m + b)){
        return false;
      }
    }
  }
  return true;
}


console.log(onLine([[1,2], [1, 4], [1, 9]]));
