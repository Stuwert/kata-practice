module.exports = function(numberArray){
  var previous;
  return numberArray.map(function(item){
    if (item > previous){
      previous = item;
      return "up";
    }else{
      previous = item;
      return "down";
    }
  })
}
