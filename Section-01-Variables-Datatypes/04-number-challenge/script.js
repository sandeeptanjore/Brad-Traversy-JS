// Create a variable called `x` that is a random number
// between 1 and 100 along with a variable called `y` that is a random number between 1 and 50.

let x, y;

x = Math.floor(Math.random() * 100 + 1);
y = Math.floor(Math.random() * 50 + 1);

console.log(x);
console.log(y);

// Create a variable for the sum, difference, product, quotient and
// remainder of `x` and `y`. Log the output in a string that shows the two numbers
// of `x` and `y` along with the operator and result.

// - You can log the output string directly or put them in separate variables and log them like below.
// - You can use string concatenation or template literals for the output.

let sumNumber, diffNumber, prodNumber, quoNumber, remNumber;

sumNumber = x + y;
diffNumber = x - y;
prodNumber = x * y;
quoNumber = x / y;
remNumber = x % y;

console.log(`Sum of ${x} and ${y}: ${sumNumber}`);
console.log(`Difference of ${x} and ${y}: ${diffNumber}`);
console.log(`Product of ${x} and ${y}: ${prodNumber}`);
console.log(`Quotient of ${x} and ${y}: ${quoNumber}`);
console.log(`Remainder of ${x} and ${y}: ${remNumber}`);
