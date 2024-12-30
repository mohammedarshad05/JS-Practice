//>=: greater or equal to
//<=: lessthan or equal to
//==: equal to

let marks = 80;
let result;
let grade;

if (marks >= 90) {
  grade = "A";
  console.log("you scored distinction");
} else if (marks >= 80) {
  grade = "B";
  console.log("you scored first class");
} else if (marks >= 70) {
  grade = "C";
  console.log("you scored second class");
} else if (marks >= 60) {
  grade = "D";
  console.log("you scored third class");
} else {
  grade = "E";
  console.log("you failed");
}
console.log(`${marks}. Your grade is - ${grade}`);
