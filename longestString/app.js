module.exports = function(stringArray){
  var returnObj = ["", 0];
  stringArray.forEach(function(item, i){
    if(returnObj[1] < item.length){
      returnObj[0] = item;
      returnObj[1] = item.length;
    }
  })
  var obj = {};
  obj[returnObj[0]] = returnObj[1];
  return obj;
}
