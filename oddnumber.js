let sum = 0;
let result;
str = ' ';
for (i = 1; i <= 10; i++) {
  result = i % 2;
  if (result > 0) {
    // console.log(i);
    sum = sum + i;
    str = "sum" +sum + i + 'is' + sum;
  }
}
console.log(sum);
