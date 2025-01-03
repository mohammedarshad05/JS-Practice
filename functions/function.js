let n = 3;
let fact = 1;
function calcFact(n) {
  for (let i = 2; i < n; i++) {
    fact = fact * i;
    console.log(i);
    
    
  }

  return fact;
}
let result = calcFact(6);
console.log(result);
