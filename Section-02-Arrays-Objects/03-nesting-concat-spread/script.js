let x;
const fruits = ['apple', 'pineapple', 'orange'];
const berries = ['strawberries', 'blueberries', 'rasberry'];

//x = fruits.push(berries);
//console.log(x);
//x = fruits[3][2];
const allFruits = [fruits, berries];
// x = allFruits;
x = allFruits[1][1];

x = fruits.concat(berries);
console.log(x);

//Spread operator is as same as concat operator
y = [...fruits, ...berries];
console.log(y);

//Flatten arrays
console.log('An example of flatten arrays');
const arr = [1, 2, [3, 4], 5, [6, 7], 8];
console.log(arr);
//making arr into 1 flat array
console.log(arr.flat());

//Static methods on Array object
x = Array.isArray(fruits);
console.log(x);
x = Array.isArray('sandeep');
console.log(x);

//converts the string to an Array
z = Array.from('sandeep');
console.log(z);

//converting variable values to an Array
const a = 1;
const b = 5;
const c = 3;
let result;
result = Array.of(a, b, c);
console.log(result);
