function validParentheses(parens){
  var openParen = 0;
  for(var i = 0; i < parens.length; i++){
    if (parens[i] === "("){
      openParen++;
    }else{
      openParen--;
    }
    if (openParen < 0){
      return false;
    }
  }
  return openParen === 0;
}

console.log(validParentheses("()"));
