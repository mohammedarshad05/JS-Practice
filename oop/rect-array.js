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
  
  let rectangle1 = new Rectangle(15, 5);
  let rectangle2 = new Rectangle(30, 15);
  let rectangle3 = new Rectangle(20, 8);

  const rectangles = [];
  rectangles.push(rectangle1,rectangle2,rectangle3);
  function printrectangle(rectangle){
  for (const rectangle of rectangles) {
    console.log(`\n~~~~~~~✦✦✦PRINTING RECTANGLE INFORMATION✦✦✦~~~~~~~`);
    console.log(`LENGTH : ${rectangle.length}`);
    console.log(`WIDTH : ${rectangle.width}`);
    console.log(`CALCULATED AREA : ${rectangle.calculateArea()}`);
    console.log(`PERIMETER : ${rectangle.calculatePeri()}`);
    console.log(`----------------------------------------------\n`);
  }
}
printrectangle();









//   console.log(`Area : ${rectangle1.calculateArea()}`);
//   console.log(`perimeters : ${rectangle1.calculatePeri()}`);
//   console.log(`Area : ${rectangle2.calculateArea()}`);
//   console.log(`perimeters : ${rectangle2.calculatePeri()}`); 
//   console.log(`Area : ${rectangle3.calculateArea()}`);
//   console.log(`perimeters : ${rectangle3.calculatePeri()}`);
  