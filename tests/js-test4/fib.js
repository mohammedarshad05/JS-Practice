let first = 1;
let second = 1;
let fib=[];

fib.push(first,second);
for(let i = 0; i<=100;i++){
    let sum = first + second;
    fib.push(sum);
    first = second;
    second = sum;
    if(sum >= 55){
        break;
    }
}
console.log(fib);
