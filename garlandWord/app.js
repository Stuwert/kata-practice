module.exports = function(word){
  var i = 1;
  var lastlargest = 0;
  while(i < word.length){
    if (word.substr(0, i) === word.substr(word.length - i, i)){
      lastlargest = i;
    }
    i++;
  }

  return lastlargest;
}
