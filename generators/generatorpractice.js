function* testGenerator(){
  let [prev, curr] = [0, 1];
  for(;;){
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

let test = testGenerator();

console.log(test.next());
console.log(test.next());
console.log(test.next());
console.log(test.next());
console.log(test.next());
console.log(test.next());

function* testYielder(i){
  yield i;
  yield i + 1;
  yield i + 2;
}

let newTest = testYielder(0);

console.log(newTest.next());
console.log(newTest.next());
console.log(newTest.next());
console.log(newTest.next());
