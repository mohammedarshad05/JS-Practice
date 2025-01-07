class Rectangle {
  length;
  width;

  constructor(l, w) {
    this.length = l;
    this.width = w;
  }
  calculateArea() {
    return this.length * this.width;
  }
  calculatePeri() {
    return 2 * (this.length + this.width);
  }
}

let rect = new Rectangle(9, 10);
let rect2 = new Rectangle(10, 5);
console.log(`Area : ${rect.calculateArea()}`);
console.log(`perimeters : ${rect.calculatePeri()}`);
console.log(`Area : ${rect2.calculateArea()}`);
console.log(`perimeters : ${rect2.calculatePeri()}`);
