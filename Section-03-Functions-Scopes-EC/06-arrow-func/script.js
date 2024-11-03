//Arrow function syntax

const add = (a, b) => {
  return a + b;
};

//Implicit Return statement
const subtract = (a, b) => a - b;

//Can remove the () with a single param
const double = (a) => a * a;

//Return an object
const createObj = () => ({
  name: 'Brad',
});

console.log(add(1, 2));
console.log(subtract(100, 208));

console.log(double(100));
console.log(createObj());
