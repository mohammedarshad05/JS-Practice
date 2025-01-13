function calfact(n) {
  let fact = 1;
  for (i = 2; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}
let ans = calfact(6);
console.log(ans);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function oddeven(n) {
  n % 2 == 0 ? console.log("even") : console.log("odd");
}
oddeven(6);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function fib(n) {
  let first = 1;
  let second = 1;
  let sum = 0;
  console.log(first);
  console.log(second);

  for (let i = 0; i <= n; i++) {
    sum = first + second;
    console.log(sum);

    first = second;
    second = sum;
  }
}
fib(5);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function printmultiple(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}
printmultiple(5);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function calcprime(n) {
  let prime = true;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      prime = false;
      break;
    }
  }
  prime == true
    ? console.log(`${n}:is prime`)
    : console.log(`${n}:is not prime`);
}
calcprime(9);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function printfact(n) {
  let fact1 = 1;
  for (let i = 2; i <= n; i++) {
    fact1 = fact1 * i;
  }
  return fact1;
}
let an = printfact(5);
console.log(an);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function squared(n) {
  let square = n * n;
  return square;
}
let a = squared(6);
console.log(a);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function isprime(n) {
  let prime = true;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}
let n = 13;
let result = isprime(n);
result == true ? console.log(`${n} is prime`) : console.log(`${n} sint prime`);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function mystar(n) {
  let star = "@";
  for (let i = 1; i < 8; i++) {
    console.log(star);
    star = star += "@";
  }
  let abs = star("*");
  console.log(abs);
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let Acircle = (r) => {
  const area = 3.142 * r * r;
  console.log(`Area of Circle of radius ${r} cm is ${area} sq.cm`);
};
Acircle(100);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let printfact1 = (n) => {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact = fact * i;
    console.log(`fact of ${n} is ${fact}`);
  }
};
printfact1(5);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let circle = (r) => {
  const area = 3.142 * r * r;
  console.log(`area circl of ${r} cm is ${area}`);
};
circle(100);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let cylinder = (r, h) => {
  const val = 3.142 * r * r * h;
  console.log(`voloum of cyluinder of ${r} cm is ${val}`);
};
cylinder(88, 99);
