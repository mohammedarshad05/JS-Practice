function calcfib(n) {
  let val1 = 1;
  let val2 = 1;
  let val3 = 0;
  console.log(val1);
  console.log(val2);
  console.log(val3);
  for (let i = 2; i <= n; i++) {
    val3 = val1 + val2;
    console.log(val3);
    val1 = val2;
    val2 = val3;
  }
}
calcfib(7);
