let sales = [600, 700, 890, 120];
let totalSales = 0;

for (let i = 0; i < sales.length; i++) {
  totalSales = totalSales + sales[i];
  console.log(totalSales);
}
console.log(sales);
console.log();
console.log(`the total sale is : ${totalSales}`);
