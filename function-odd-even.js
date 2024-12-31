function printoddeven(n) {
  let remainder = n % 2;
  if (remainder == 0) {
    console.log("even number");
  } else {
    console.log("odd number");
  }
}
printoddeven(6);
