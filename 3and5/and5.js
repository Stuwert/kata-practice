module.exports = {
  sum3 : function(num){
    var pointer = 3;
    var sum = 0;
    while (pointer < num){
      sum += pointer;
      pointer += 3;
    }
    return sum;
  },
  sum5: function(num){
    var pointer = 5;
    var sum = 0;
    while (pointer < num){
      if (pointer % 3 !== 0){
        sum += pointer;
      }
      pointer += 5;
    }
    return sum;
  },
  sumAll: function(num){
    return this.sum3(num) + this.sum5(num)
  }
}
