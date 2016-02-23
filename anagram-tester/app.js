function anagramChecker (string1, string2){
  var sorted1 = string1.split("").sort().join("");
  var sorted2 = string2.split("").sort().join("");
  return sorted1 === sorted2
}

console.log(anagramChecker("acers", "aces"));

function multipleAnagrams(string1, arr){
  var sorted1 = string1.split("").sort().join("");
  return arr.filter(function(item){
    return sorted1 === item.split("").sort().join("")
  })
}

console.log(multipleAnagrams("examples", ["pameesxl", "woamxapl", "emaplsic"]));


console.log("exampes".sort());
