module.exports = function(parenString){
  var holderArr = [];
  for(var i =0; i < parenString.length; i++){
    if (parenString[i] === "("){
      holderArr.push(parenString[i])
    }else if(parenString[i] === ")"){
      var test = holderArr.pop();
      if(!test){
        return false;
      }
    }
  }
  return holderArr.length === 0;
}

console.log(["("].pop());
