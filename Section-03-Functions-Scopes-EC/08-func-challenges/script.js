/**
 * ## Challenge 1

**Instructions:**

Create a function called `getCelsius()` that takes a temperature
in Fahrenheit as an argument and returns the temperature in celsius.

For bonus points, write it as a one line arrow function
 */

const getCelsius = (degrees) => ((degrees - 32) * 5) / 9;

console.log(getCelsius(200));
console.log(getCelsius(32));

/**
 * ## Challenge 2
 * **Instructions:**

Create an arrow function called `minMax()` that takes in an array of numbers
 and returns an object with the minimum and maximum numbers in the array.
 */

let minMax = (numbers) => {
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  return {
    min,
    max,
  };
};

console.log(minMax([1, 2, -34498, 3, 4, 5, 450986]));

/**
 * ## Challenge 3

Create an IIFE (Immediately Invoked Function Expression) that takes in the length and width of a 
rectangle outputs it to the console in a message as soon as the page loads.
 */

(function (length, width) {
  const area = length * width;
  console.log(`The lengh and width of the rectange is: ${area} `);
})(100, 30);
