module.exports = function(num){
  var strng = num.toString();
  var prevNum = strng[0];
  for(var i=1; i < strng.length; i++){
    if(+strng[i] >= +prevNum){
      prevNum = strng[i];
    }else{
      return false;
    }
  }
  return true;
}
