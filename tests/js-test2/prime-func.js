function calprime(n){
    let prime=true;
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
          prime = false;
          break;
        }
      }
if (prime == true) {
    console.log(`${n} : is prime a number`);
  } else {
    console.log(`${n} : is not prime a number`);
  }
}
  // console.log(calprime(5));
  calprime(8 );
  
  
