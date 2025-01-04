let val1 = 1;
let val2 = 1;
let fib = [];
fib.push(val1, val2);

for (let i = 2; i <= 8; i++) {
  let sum = val1 + val2;
  fib.push(sum);

  val1 = val2;
  val2 = sum;
}
console.log(fib);
