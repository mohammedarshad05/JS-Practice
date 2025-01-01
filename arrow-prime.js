let myPrime = n => {
  let prime = true;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      prime = false;
      break;
    }
  }
  prime == true ? console.log(`${n}: is prime`): console.log(`${n}: its not a prime`)
};
myPrime(5)