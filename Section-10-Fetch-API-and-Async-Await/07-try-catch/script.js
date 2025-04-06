// try {
//   console.log(x);
// } catch (error) {
//   console.log('Error: ' + error);
// }

const double = (number) => {
  if (isNaN(number)) {
    throw new Error(number + ' is not a number...');
  }
  return number * 2;
};

try {
  const y = double('Hello');
  console.log(y);
} catch (err) {
  console.log(err);
}

try {
  const num = double(5);
  console.log(num);
} catch (err) {
  console.log(err);
}
