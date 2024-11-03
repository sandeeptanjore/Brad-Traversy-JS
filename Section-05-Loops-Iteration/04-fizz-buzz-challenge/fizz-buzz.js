/**
 * # FizzBuzz Challenge
 * **Instructions:**

- Print/log the numbers from 1 to 100
- For **multiples of three** print "Fizz" instead of the number
- For **multiples of five** print "Buzz"
- For numbers which are **multiples of both three and five** print "FizzBuzz".

 */

let i = 1;
while (i <= 100) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('Number : ' + i + ' is a Fizz Buzz....');
  } else if (i % 3 === 0) {
    console.log('Fizz....');
  } else if (i % 5 === 0) {
    console.log('Buzz....');
  } else {
    console.log('Number: ' + i);
  }

  i++;
}
