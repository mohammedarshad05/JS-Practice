// // arrays = [200, 600, 670, 320, 780];
// // arrays.forEach((vals, i) => {
// //   console.log(`${i + 1} value - ${vals}`);
// // });
// // //``````````````~~~~~~~``````````~~~~~~~````````~~~~~~```````~~~~~~~~`

// // let heroes = ["spiderman", "ironman", "hulk", "superman", "flash", "thor", "arsh"]
// // // for (const i in heroes) {
// // //     console.log(heroes[i]);

// // // const arrays = [200, 600, 670, 320, 780];
// // // for (const i in arrays){
// // //     console.log(arrays[i]);
// // // };

// // let names = ['amar','akbar','birble','usman','hidar','sultang']
// // for (let i = 1; i < names.length; i++) {
// //     console.log(names);

// //     console.log(names.reverse(names.length));
// // }
// // //`````````````````````````````````````````````````````````

// // //for-of
// // let marks = [50, 70, 67, 56, 43]
// // let result = 0;
// // for (const mark of marks) {
// //     result += mark
// // }
// // console.log(`your score is ${result}/300`);

// // //`````````````````~~~~~~~~~~~~~~~~~~
// // let score = [78,87,90,83]
// // let markss = 0;
// // for (const element of score) {
// //     markss += element;
// // }
// // console.log(markss);

// let val1 = 1;
// let val2 = 1;
// let fib = [];
// fib.push(val1, val2);

// for (let i = 2; i <= 8; i++) {
//   let sum = val1 + val2;
//   fib.push(sum);

//   val1 = val2;
//   val2 = sum;
// }
// console.log(fib);

// let first = 1;
// let second = 1;
// let fib2 = [];
// fib2.push(first, second);

// for (let i = 2; i <= 10; i++) {
//   let sum2 = first + second;
//   fib2.push(sum2);
//   first = second;
//   second = sum2;
// }
// console.log(fib2);

// const numbers = [1, 2, 5, 6, 12, 65, 73, 45, 12, 90, 97];
// const total = numbers.filter((n) => n % 2 == 0);
// console.log(total);

// //``````````````````````````````````````````````````
// let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
// let names = ["John", "Mary", "David", "Emily", "James"];

// let fruitsname = fruits.concat(names);
// console.log(fruitsname);

// //`````````````````````````````````````````````````````

// let number1 = [1, 2, 3, 4, 5, 6];
// let ans = number1.map((n) => n * 2);
// console.log(ans);

// let number2 = [1, 2, 3, 4, 5, 6];
// let totals = number2.map((n) => n + 2);
// console.log(totals);
// //```````````````````````````````````````````````````````
// let numbrs = [1, 2, 3, 4, 5, 6];
// const total = numbrs.reduce((sum, n) => sum + n);
// console.log(total);

//`````````````````````````````````````````````````````
// let sales = [3000, 6500, 4350, 12300, 670, 900];
// sales.forEach((total,i) => {
//   console.log(`${i+1} . ${total}`);
// });

//```````````````````````````````````````````````````
//  let sales = [3000, 6500, 4350, 12300, 670, 900];
// for(const i in sales){
//  console.log(sales[i]);
// };

// let sales = [3000, 6500, 4350, 12300, 670, 900];
// let ans = 0;
// for (const element of sales) {
//   ans += element;
// }
// console.log(`total profit from todays sales : ${ans}`);

function patternGenerator(char, num) {
    let patternChar = char;
    let numLines = num;
    let str = '';
    for (let i = 0; i < num; i++) {
        str = patternChar + ' ' + str;
        console.log(str);
    }
}
patternGenerator('*',8)