module.exports = function (arr){

  var unclean = arr.length;

  while(unclean > 0){
    for(var i = 0; i < arr.length - 1; i++){
      if (arr[i] > arr[i+1]){
        var holder = arr[i];
        arr[i] = arr[i+1]
        arr[i+1] = holder;
        unclean++;
      }else{
        unclean--;
      }
    }
  }
  return arr
}
