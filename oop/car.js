class car {
  brand;
  model;
  year;

  constructor(br, mo, yr) {
    this.brand = br;
    this.model = mo;
    this.year = yr;
  }
  displayDetails() {
    console.log(`this car is a ${this.brand} ${this.model}${this.year} `);
  }
}

let mycar = new car("toyota", "corolla", "2002");
let car2 = new car("BMW", "X5", "2021");

mycar.displayDetails();
car2.displayDetails();
