class car {
  brand;
  model;
  year;
  price;

  constructor(brand, model, year, price) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.price = price;
  }
}
const car1 = new car("toyota", 12, 2019, 120000);
const car2 = new car("Honda", 4, 2020, 250000);
const car3 = new car("suzuki", 8, 2021, 900000);
const car4 = new car("honda", 7, 2022, 800000);
const car5 = new car("bajaj", 4, 2023, 150000);
const car6 = new car("bugadi", 3, 2024, 1010000);
const car7 = new car("Honda", 2, 2020, 250000);
const car8 = new car("yamaha", 4, 2020, 250000);
const car9 = new car("Honda", 12, 2020, 250000);

let cars = [];
cars.push(car1, car2, car3, car4, car5, car6);
console.log(cars);

let averagecarprice =
  cars.reduce((total, Car) => Car.price + total, 0) /cars.length.toFixed(2);
console.log(`AVERAGE PRICE=${averagecarprice}`);

let carbrand = cars.filter((Car) => Car.brand == "Honda");
console.log(carbrand);
