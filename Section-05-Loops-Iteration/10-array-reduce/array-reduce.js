const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const initialValue = 0;
const sumWithInitial = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sumWithInitial);

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

//Using a for loop
const sum3 = () => {
  let acc = 0;
  for (const cur of numbers) {
    acc = acc + cur; //or acc+=cur
  }
  return acc;
};

console.log(sum3());

const cart = [
  { id: 1, name: 'Product 1', price: 200 },
  { id: 2, name: 'Product 3', price: 150 },
  { id: 3, name: 'Product 4', price: 200 },
];

const total = cart.reduce((acc, product) => {
  return acc + product.price;
}, 0);

console.log(total);
