let fact = 1;
function calcfact(n) {
  for (let i = n; i >= 2; i--) {
    fact = fact * i;
    console.log(i);
    
  }
  return fact;
}
let ans = calcfact(4);
console.log(ans);
