var romanNumeralsObject = {
  "I" : 1,
  "V" : 5,
  "X" : 10,
  "L" : 50,
  "C" : 100,
  "D" : 500,
  "M" : 1000
}


module.exports = function(romanNumerals){
  var letterArr = romanNumerals.split("");
  var total = 0;
  letterArr.forEach(function(item, i){
    if(romanNumeralsObject[item] < romanNumeralsObject[letterArr[i+1]]){
      total -= romanNumeralsObject[item];
    }else{
      total += romanNumeralsObject[item];
    }
  })
  return total;

}
