// let first = 1;
// let second = 1;
// let sum = 0 ;
// console.log(first);
// console.log(second);
// for( let i = 1; i < 10 ; i++){
//     sum = first + second;
//     console.log(sum);
//     if (sum < 1000) {
//         first = second;
//         second = sum;

//     }

// }

// let fact = 1 ;
// for(let i=1 ; i<= 10; i++){
//     fact = fact *+ i;
//     console.log(fact);

// }

// let sum = 100
// while (sum > 70){
//     console.log(sum);
//     sum++;
//     if(sum == 11111)
//         break;
// }

// let mystring = "*";
// for(let i=1; i<7; i++){
//     console.log(mystring);
//     mystring = mystring +="*";
// }

// let n = 6;
// let myprime = true;
// for (let i = 1; i < n; i++) {
//   if (n % 2 == 0)
//     myprime = false;
//   break;
// }
// if (myprime == true) {
//   console.log(`${n} is prime number`);
// } else {
//   console.log(`${n} is not prime number`);
// }

// let j = 8;
// let isprime= true;
// for(let i = 1; i<10; i++){
//     if(j%2==0)
//         isprime = false;
//     break;
// }
// if(isprime==true){
//     console.log(`is a prime`);
// }else{
//     console.log(`is not a primw`);

// }

// let sum = 0;
// let remainder;
// for (i = 0; i <= 10; i++) {
//   remainder = i % 2;
//   if (remainder != 1) {
//     continue;
//   }
//   console.log(i);
//   sum = sum + i;
//   console.log(sum);
// }

//fib
// let val1 = 1;
// let val2 = 1;
// let sum = 0;
// str = " ";
// console.log(val1);
// console.log(val2);
// console.log(sum);
// for (let i = 1; i <= 10; i++) {
//   sum = val1 + val2;
//   val1 = val2;
//   val2 = sum;
//   str = str += val1 + ' ';
//   console.log(str);
// }

// let val1 = 1;
// let val2 = 1;
// let sum = 0;
// str = ' ';
// console.log(val1);
// console.log(val2);
// for(i = 1; i<10; i++){
//     sum = val1 + val2;
//     val1 = val2;
//     val2 = sum;
//     str = str += val1 +' ';
//     console.log(str);
// }

// let n = 15;
// let remainder = n%2;
// if(remainder==0){
//     console.log("even");

// }else{
//     console.log();

// }

// let n = 9;
// let fact = 1;
// for (i = 2; i <= n; i++) {
//   fact = fact * i;
// }
// console.log(`fact is ${n} = ${fact}`);
//  let first = 1;
//  let second= 1;
//  let sum= 0;

//  for(i=0;i<=10;i++){
//     sum = first + second;
//     console.log(sum);
//     first = second;
//     second = sum;

//  }

// let star = '!';
// for(i=0;i<10;i++){
//     star = star += '!';
//     console.log(star);

// }

// let n = 6;
// let ans;
// for(i=0;i<=10;i++){
//     ans = n * i;
//     console.log(`${n}x${i}=${ans}`);

// }

// let n = 6;
// let prime = true;
// for (let i = 2; i < n; i++) {
//   if (n % i == 0) {
//     prime = false;
//     break;
//   }
// }
// if (prime == true) {
//   console.log("is prime");
// } else {
//   console.log(`not`);
// }

// let n=8;
// let res;
// for(i=1;i<=10;i++){
// res = n * i;
// console.log(res);

// }

// let fact = 1;
// let n = 9;

// for(i=2;i<=n; i++){
//     fact = fact * i;
//     console.log(fact);

// }

// let star = "*";
// for (i = 0; i < 10; i++) {
//   star = star += "*";
//   console.log(star);
// }

// let n =1;
// let remainder = n%2;
// if(remainder==0){
//     console.log('even');

//     }else{
//         console.log(`odd`);

//     }

// let prime = true;
// let n = 7;
// for(let i=2; i<n; i++){
//     if(n%2==0){
//         prime=false
//         break;
//     }
// }
// if(prime==true){
//     console.log('yes');

// }else{
//     console.log('no');

// }

// let fact = 1;
// let n = 5;
// for(i=2; i<=n;i++){
//     fact = fact * i;
//     console.log(`facta of ${n} is ${fact}`);

// }

// let first = 1;
// let second = 1;
// let sum = 0;

// console.log(first);
// console.log(second);

// for(i=0; i<=10;i++){
//     sum = first + second;
//     console.log(sum);
//     first = second;
//     second = sum;

// }

// function calfact(n){
//     let fact = 1;
//     for (i=2; i<=n; i++){
//         fact = fact * i
//     }
//     return fact
// }
// // console.log(calfact(5));
// let ans = calfact(6);
// console.log(`FACTORIAL OF ${i} is ${ans}`);

let table = (n) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
};
let multi = [2, 6, 4, 8, 9, 12, 5];
for (let i = 0; i < multi.length; i++) {
  table(multi[i]);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const total1 = numbers.reduce((total, i, n) => total * n, i=0);
console.log(`#${i + 1} - total1:${total1}`);


