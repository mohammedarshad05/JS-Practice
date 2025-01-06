let marks = [60, 80, 78, 89, 90, 99, 87];
// let marks2 = marks.filter(n => n >= 80);
console.log(marks);

//2nd
let marks2 = myfilter(marks);
console.log(marks2);

function myfilter(marks) {
  let newMarks = [];
  for (const mark of marks) {
    if (marks >= 80) {
      newMarks.push(mark);
    }
  }
  return newMarks;
}
