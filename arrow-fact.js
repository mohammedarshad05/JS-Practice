let calcfact = (n) => {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact = fact * i;
  }
  console.log(`factorial of : ${n} = ${fact}`);
};
calcfact(5);
