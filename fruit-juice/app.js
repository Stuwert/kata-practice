function Jar(){
  this.total = 0;
  this.types = 0;
}

Jar.prototype.add = function(amount, type){
  if (type in this){
    this[type].amount += amount;
  }else{
    this[type] = {
      amount : amount,
    }
    this.types += 1;
  }
  this.total += amount;
  for (concentrate in this){
    this[concentrate].concentration = this[concentrate].amount / this.total
  }
}

Jar.prototype.pourOut = function(amount){
  this.total -= amount;
  for (concentrate in this){
    this[concentrate].amount -= amount /this.types
  }
}


var test = new Jar();

test.add(100, "banana")
test.add(100, "apple")
test.pourOut(100)
console.log(test);
