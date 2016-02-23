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
  this.total = this.total < 0 ? 0 : this.total;
  for (concentrate in this){
    if (this.total === 0){
      this[concentrate].amount = 0
      this[concentrate].concentration = 0;
    } else{
      this[concentrate].amount -= amount / this.types
    }
  }
}

Jar.prototype.getTotalAmount = function(){
  return this.total;
}

Jar.prototype.getConcentration = function(type){
  if(this[type]){
    return this[type].concentration;
  }else{
    return 0;
  }
}

var test = new Jar();

test.add(100, "banana")
test.add(100, "apple")
test.pourOut(100)
console.log(test.getConcentration('banana'));
console.log(test);
