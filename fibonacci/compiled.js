// var fib = [1,1,2,3,5,8,13,21 ];

function fibb(incoming, a = 0, b = 1){
  var newA = b;
  var newB = b + a;
  if (incoming === 1){
    return newB;
  }else{
    return fibb(incoming - 1, newA, newB);
  }
}

// let fibb = (incoming, a = 0, b = 1) => {
//   let newA = b;
//   let newB = b + a;
//   if (incoming === 1) {
//     return newB;
//   } else {
//     return fibb(incoming - 1, newA, newB);
//   }
// };

console.log(fibb(25));


test();
test('Bong');
