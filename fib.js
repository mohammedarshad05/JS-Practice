//fibonacci
let val1 = 1;
let val2 = 1;
let val3 = 0;
str =  ' ';
// console.log(val1);
// console.log(val2);

for (let i = 2; i <= 8; i++) {
  val3 = val1 + val2;
  val1 = val2;
  val2 = val3;
  str = str +=val1 + ' ';
  console.log(str);
}

// while condition
// let sum = 0;
// let a = 1;
// let b = 1;
// console.log(a);
// console.log(b);
// while (sum <= 1000) {
//   sum = a + b;
//   if (sum >= 1000) break;
//   console.log(sum);
//   a = b;
//   b = sum;
// }
