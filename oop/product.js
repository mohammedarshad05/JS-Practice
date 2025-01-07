class Product {
  name;
  price;
  quantity;

  constructor(na , pr , qty){
    this.name = na;
    this.price = pr;
    this.quantity= qty;
  }

  calculateTotalValue(){
    return this.price * this.quantity
  }
  applyDiscount(discountPercentage){
    let discount = (discountPercentage / 100) * this.price * this.quantity
    return (this.product * discountPercentage/100);
  }
  restock(newQuantity){
    this.quantity = this.quantity + newQuantity;
}
}

let product = new Product("laptop",900,5);


console.log(`TOTAL VALUE : ${product.calculateTotalValue()}`);
console.log(`DISCOUNT : ${product.applyDiscount(10)}`);

console.log(`RESTOCK: ${product.restock()}`);



