let myprime = (n) => {
  let prime = true;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      prime = false;
      break;
    }
  }
  prime == true? console.log(`${n}: is prime`):console.log(`${n}: is not a prime`);
};
myprime('\n')
myprime(7)
myprime(8)
myprime(9)
myprime(11)
