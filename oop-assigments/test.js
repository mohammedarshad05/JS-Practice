class Product {
  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

let product1 = new Product("Laptop", 50000, 15);
let product2 = new Product("Mobile", 15000, 8);
let product3 = new Product("Headphones", 2000, 20);
let product4 = new Product("Keyboard", 1000, 5);

const products = [];
products.push(product1, product2, product3, product4);

printArray(products);

function printArray(products) {
  for (const item of products) {
    console.log(`NAME: ${item.name}`);
    console.log(`PRICE: ${item.price}`);
    console.log(`STOCK: ${item.stock}`);
  }
}

const filterProduct = products.filter((product) => product.stock > 10);
console.log(`~~~✦✦PRINTING THE FILTERED ARRAY✦✦~~~`);
printArray(filterProduct);

const updatedPrices = products.map((product) => {
  return new Product(product.name, product.price * 1.15, product.stock);
});

console.log(`~~~✦✦PRINTING THE UPDATED ARRAY✦✦~~~`);
printArray(updatedPrices);
