class Product {
  name;
  price;
  quantity;

  constructor(na, pr, qty) {
    this.name = na;
    this.price = pr;
    this.quantity = qty;

    console.log(`~~~~~BEFORE DISCOUNT~~~~~`);
    console.log(`name : ${this.name}`);
    console.log(`price : ${this.price}`);
    console.log(`quantity: ${this.quantity}`);
    console.log();
  }
  calculateTotalValue() {
    return this.price * this.quantity;
  }
  applyDiscount(discountPercentage) {
    let discount = this.price * (discountPercentage / 100);
    this.price = this.price - discount;
    // console.log(this.price);
    console.log(`~~~~~AFTER DISCOUNT~~~~~`);
    console.log(`discount amount : ${this.price}`);
  }
  restock(newQuantity) {
    this.quantity = this.quantity + newQuantity;
    console.log(`new quantity: ${this.quantity}`);
  }
  display() {
    console.log();
    console.log(`name:${this.name}`);
    console.log(`price:${this.price}`);
    console.log(`quantity:${this.quantity}`);
  }
}

let product = new Product("laptop", 900, 5);

// console.log(`TOTAL VALUE : ${product.calculateTotalValue()}`);
// console.log(`DISCOUNT : ${product.applyDiscount(5)}`);

// console.log(`RESTOCK: ${product.restock(3)}`);

product.applyDiscount(5);
product.restock(3);
