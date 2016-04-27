function Braces(values){
  // input array of strings
  // output boolean
  // given that the use case for this function is of a text editor
  // i'm going to assume that any string value that isn't a brace is ok as long as it is inside of a brace


  //loop through the values
  // if it's an opening brace, add to the stack
  // if it's a closing brace, pop and check
  // if it's not an opening or closing brace check if the stack has a value

  return values.map(function(value){
    if(!(typeof value === "string")){
      // if it's not a string it should be immediately false
      return "NO"
    }
    var holdArray = [];
    var truthy = true;

    value.split("").forEach(function(currValue){
      // if this weren't a test i'd look up the regex for
      if (currValue ==="{" || currValue === "(" || currValue === "["){
        holdArray.push(currValue)
      } else if(currValue ==="}" || currValue === ")" || currValue === "]"){
        var thing = holdArray.pop();
        if (!thing || notAPair(thing, currValue)){
          truthy = false;
        }
      }else{
        if(holdArray.length === 0){
          truthy = false;
        }
      }
    })
    return truthy && holdArray.length === 0 ? "YES" : "NO"
  })



}

function notAPair(thing, currValue){
  if(thing === "(" && currValue === ")" || thing === "{" && currValue === "}" || thing === "[" && currValue === "]"){
    return false;
  }
  return true;
}

console.log(Braces(["[2]","{}[]()","{[}]"]))
