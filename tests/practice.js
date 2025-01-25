// let fact = 1;
// for (let i = 1; i <= 5; i++) {
//   fact = fact * i;
//   // console.log(fact);
// }
// //`````````````````````````````````````````````

// let f = 1;
// let s = 1;
// console.log(f);
// console.log(s);
// for (let i = 2; i <= 8; i++) {
//   let sum = f + s;
//   f = s;
//   s = sum;
//   // console.log(sum);
// }
// //```````````````````````````````````````````````````````
// let n = 9;
// let isprime = true;
// for (let i = 2; i < n; i++) {
//   if (n % i == 0) {
//     isprime = false;
//     break;
//   }
// }
// if (isprime == true) {
//   console.log(`${n} is prime no`);
// } else {
//   console.log(`${n} is not prime no`);
// }
const products = [
  { name: "Laptop", price: 50000, stock: 15 },
  { name: "Mobile", price: 15000, stock: 8 },
  { name: "Headphones", price: 2000, stock: 20 },
  { name: "Keyboard", price: 1000, stock: 5 },
];
const arangeproduct = products.filter((n) => n.stock > 5);
console.log(arangeproduct);

const mapin = products.map(n => {n.name, (n.price * 0.15), n.stock});
console.log(mapin);

