function calcfib(val1, val2, val3) {
  for (let i = 2; i <= 8; i++) {
    let val3 = val1 + val2;
    val1 = val2;
    val2 = val3;
    console.log(i);
  }
  return val3;
}
let ans = calcfib(1, 1, 0);
console.log(ans);
