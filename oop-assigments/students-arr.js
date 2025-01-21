class studnet {
  name;
  marks;

  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }
}

let student1 = new studnet("alice", 75);
let student2 = new studnet("bob", 45);
let student3 = new studnet("charlie", 65);
let student4 = new studnet("David", 85);

const students = [];
students.push(student1, student2, student3, student4);
printArray(students);
function printArray(students) {
  for (const Student of students) {
    console.log(`NAME - ${Student.name}`);
    console.log(`MARKS - ${Student.marks}`);
  }
}
const AverageStudents = students.filter(n => n.marks > 60);
console.log(`~~~✦✦PRINTING THE FILTERED ARRAY✦✦~~~`);
printArray(AverageStudents);

let sum = students.reduce((total, n) => total + n.marks,0);
const averagemarks = sum / students.length;
console.log(`~~~✦✦PRINTING THE AVERAGE MARKS✦✦~~~`);
console.log(averagemarks);
