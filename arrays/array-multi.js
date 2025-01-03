let table = (n) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} =${n * i}`);
  }
};
myarray = [4, 6, 3, 8, 7];
for (i = 0; i < myarray.length; i++) {
  console.log(`\n~~~~~~~printing tables ~~~~~~~~ \n`);
  table(myarray[i]);
}
myarray;
