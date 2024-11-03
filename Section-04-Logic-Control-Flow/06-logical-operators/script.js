console.log(10 > 20 && 30 > 15 && 40 > 30);
console.log(30 > 15 && 40 > 30);
//OR operator
console.log(10 > 20 || 30 > 15);

//&& -will return the first falsy value or the last value (which is truthy)
let a;

a = 10 && 20; //return 20
a = 10 && 20 && 30; //return 30
a = 10 && 0 && 30; //return 0 which is a falsy value
a = 10 && '' && 30; //return 0 which is a falsy value

console.log(a);
