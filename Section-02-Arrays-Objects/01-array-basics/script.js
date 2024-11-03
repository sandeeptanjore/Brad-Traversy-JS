let x;
//Array literal
const numbers = [12, 25, 34, 56];
const mixed = [12, 'Hello', true, null];

//Array constructor
const fruits = new Array('apple', 'grapes', 'pineapple');

x = numbers[0];
x = numbers[0] + numbers[3];

fruits[2] = 'pear';

x = `My favourite fruit is an ${fruits[2]}`;

console.log(x);
