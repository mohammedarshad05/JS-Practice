function calfunc(n) {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact = fact * i;
    // console.log(i);
  }
  return fact;
}
let n = 6;
console.log(`factorial of ${n} is ${calfunc(n)}`);
