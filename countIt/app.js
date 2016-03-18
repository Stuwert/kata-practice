module.exports = function(strng){
  this.obj = {};
  var that = this;
  this.hasKey = function(key){
    var testArr = Object.keys(that.obj);
    return testArr.indexOf(key) !== -1;
  }
  this.addValue = function(key){
    if(that.hasKey(key)){
      that.obj[key]++;
    }else{
      that.obj[key] = 1;
    }
    return that.obj[key];
  }
  strng.split("").forEach(function(char){
    that.addValue(char);
  })
}
