module.exports = function (arr){

  var unclean = true;

  while(unclean){
    var counter = 0;
    for(var i = 0; i < arr.length - 1; i++){
      if (arr[i] > arr[i+1]){
        var holder = arr[i];
        arr[i] = arr[i+1]
        arr[i+1] = holder;
      }else{
        counter++;
      }
    }
    if(counter === arr.length - 1){
      unclean = false;
    }
  }
  return arr
}
