class course {
  title;
  instructor;
  duration;
  level;
  constructor(title, instructor, duration, level) {
    this.title = title;
    this.instructor = instructor;
    this.duration = duration;
    this.level = level;
  }
}
const course1 = new course("javascript", "mohammedaeraf", 8, "beginner");
const course2 = new course("html-css", "mohammed", 7, "Intermediate");
const course3 = new course("php", "prakash", 12, "advance");
const course4 = new course("javascript", "mohammedaeraf", 8, "beginner");

const courses = [];
courses.push(course1, course2, course3, course4);
console.log(courses);

const totalduration = courses.reduce(
  (total, Course) => total + Course.duration,
  0
);
console.log(totalduration);

let calclevel = courses.filter(Course => Course.level == "beginner");
console.log(calclevel);
