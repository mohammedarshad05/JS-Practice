let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const modnumbers = numbers.map((n) => (n % 2 == 0 ? n / 2 : n * 5));
console.log(modnumbers);
