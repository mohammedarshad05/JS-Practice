//prime number
// 2 3 5 7 11 13 17 19 23 29 31 37 41
let n = 7;
let myPrime = true;
for (let i = 1; i <n; i++) {
  if (n % 2 == 0) {
    myPrime = false;
    break;
  }

}

  if (myPrime == true) {
    console.log(`${n} is a prime number`);
  } else {
    console.log(`${n} is not a prime number`);
  }
