function firstRepeatedWord(s){
  var repeatedWord;
  var newArr = s.split(",").join(" ").split(":").join(" ").split(";").join(" ").split("-").join(" ").split(".").join(" ").split(" ")
  console.log(newArr)

for(var i = 0; i < newArr.length; i++){
    if(!repeatedWord && newArr.indexOf(newArr[i]) !== i){
        repeatedWord = newArr[i]
    }
}

return repeatedWord;

}


console.log(firstRepeatedWord("hi test hi test"))

console.log(['test-test'].indexOf('test-test'))
