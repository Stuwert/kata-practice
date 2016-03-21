module.exports = function(numArray, num){
  return numArray.filter(function(item){
    return item > num;
  })
}
