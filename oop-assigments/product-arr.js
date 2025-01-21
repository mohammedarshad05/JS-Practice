class product {
  name;
  price;
  stock;

  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

let product1 = new product("Laptop", 50000, 15);
let product2 = new product("Mobile", 15000, 8);
let product3 = new product("Headphones", 2000, 20);
let product4 = new product("Keyboard", 1000, 5);

const products = [];
products.push(product1, product2, product3, product4);

printArray(products);

function printArray(Products) {
  for (const item of Products) {
    // console.log(`~~~~~~~✦✦✦PRINTING THE ORIGINAL ARRAY✦✦✦~~~~~~~`);
    console.log(`NAME: ${item.name}`);
    console.log(`PRICE : ${item.price}`);
    console.log(`STOCK : ${item.stock}`);
  }
}

const filterProduct = products.filter((product) => product.stock > 10);
console.log(`~~~✦✦PRINTING THE FILTERED ARRAY✦✦~~~`);
printArray(filterProduct);

let updatedprice = filterProduct.map((n) => {
  n.name, (n.price * 0.15).toFixed(2), n.stock;
});
console.log(updatedprice);

// printArray(updatedprice);
