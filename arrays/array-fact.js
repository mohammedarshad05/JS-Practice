// factorial Number

// let fact = 1;
// for (let i = 1; i <= 5; i++) {
//   fact = fact *= i;
//   console.log(fact);
// }
// let arrfact = [3, 7, 6, 9, 4];
// for (let i = 1; i <= fact.length; i++) {
// }
// console.log(`factorial of ${i} is ${arrfact}`);
let fact = 1;
for (let i = 1; i <= 5; i++) {
  fact *= i;
  console.log(`Factorial of ${i} is ${fact}`);
}
let arrfact = [3, 7, 6, 9, 4];
for (let i = 0; i < arrfact.length; i++) {
  let factorial = 1;
  for (let j = 1; j <= arrfact[i]; j++) {
    factorial *= j;
  }
  console.log(`Factorial of ${arrfact[i]} is ${factorial}`);
}