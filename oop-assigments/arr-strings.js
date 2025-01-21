let fruits = ["mango","orange","banana","papaya","kiwi","apple","cherry","grapes"];
console.log(`\n- - - - - - - - -ORIGINAL ARRAY- - - - - - - - -`);
console.log(fruits);

let longStrings = fruits.filter((fruit) => fruit.length > 5);
console.log(`\n- - - - - - - - -LONGSTRINGS- - - - - - - - -`);
console.log(longStrings);

let upperCaseStrings=fruits.map((fruit)=>fruit.toUpperCase());
console.log(`\n- - - - - - - - -UPPERCASE- - - - - - - - -`);
console.log(upperCaseStrings);

let containsA=fruits.filter((fruit) => fruit.includes('a'));
console.log(`\n- - - - - - - - -CONTAINS A- - - - - - - - -`);
console.log(containsA);

let processedStrings =fruits.map((fruit) => fruit + "- Processed");
console.log(`\n- - - - - - - - -PROCESSED- - - - - - - - -`);
console.log(processedStrings);

