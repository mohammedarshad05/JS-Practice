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



let val1 = 1;
let val2 = 1;
let sum = 0;
str = ' ';
console.log(val1);
console.log(val2);
for(i = 1; i<10; i++){
    sum = val1 + val2;
    val1 = val2;
    val2 = sum;
    str = str += val1 +' ';
    console.log(str);
}
