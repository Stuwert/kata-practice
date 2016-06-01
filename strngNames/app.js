module.exports = function(names){
  let nameArr = names.map(function(name){
    return name.name;
  })
  let returnable;
  switch(nameArr.length){
    case 0:
      returnable = "";
    break;
    case 1:
      returnable = nameArr.join('');
    break;
    case 2:
      returnable = nameArr.join(' & ')
    break;
    default:
      let nextOne = nameArr.pop();
      returnable = nameArr.join(', ')
      returnable += " & " + nextOne;
    break;
  }
  return returnable;
}
