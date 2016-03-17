function order(words){
  if (words.trim() === ""){
    return words;
  }
  var arr = words.split(" ");
  var newArr = [];
  for(var i = 1; i <= 9; i++){
    arr.forEach(function(word){
      for(var j = 0; j < word.length; j++){
        if(+word[j] === i){
          newArr.push(word)
        }
      }
    })
  }
  return newArr.join(" ");
}

order("te1st best");


console.log(order("is2 Thi1s T4est 3a"))
console.log(order("4of Fo1r pe6ople g3ood th5e the2"))
console.log(order(""))
