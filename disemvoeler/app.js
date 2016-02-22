module.exports = function(string){
  var consonants = "";
  var vowels = "";
  var newstring = string.split(" ").join("").split("").forEach(function(item){
    if (/[aeiou]/.exec(item)){
      vowels += item;
    }else{
      consonants += item;
    }
  })
  return [consonants, vowels]
}
