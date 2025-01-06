const numbers = [4, 7, 12, 15, 9];
let oddeven;
let multiple = numbers.map((n) => (n % 2 == 0 ? n * 2 : n + 1));
console.log(multiple);
let result = numbers.map((n) => (n % 2 == 0 ? "even" : "odd"));
console.log(result);
