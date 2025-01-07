const numbers = [3, 5, 7, 9];//3-
const sum = numbers.reduce((total, n) => total + n);
console.log(`sum : ${sum}`);
const product = numbers.reduce((total, n) => total * n);
console.log(`product : ${product}`);
const concactString = numbers.reduce((total, n) => `${total}-${n}`);
console.log(`concactString : ${concactString}`);


