function anagramChecker (string1, string2){
  return formatString(string1) === formatString(string2);
}

console.log(anagramChecker("acers", "aces"));

function multipleAnagrams(string1, arr){
  var sorted1 = string1.split("").sort().join("");
  return arr.filter(function(item){
    return anagramChecker(string1, item)
  })
}

console.log(multipleAnagrams("examples", ["pameesxl", "woamxapl", "emaplsic"]));



function formatString(strng){
  return strng.split("").sort().join("");
}
