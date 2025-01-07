class Circle {
  radius;

  constructor(r) {
    this.radius = r;
  }
  calculateArea() {
    return Math.floor(Math.PI * this.radius * this.radius);
  }
}
let myCircle = new Circle(9);

console.log(`Area : ${myCircle.calculateArea()}`);
