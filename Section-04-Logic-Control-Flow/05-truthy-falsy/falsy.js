/** Falsy values:
 * -false
 * -0
 * -"" or ' '(empty string)
 * -null
 * -undefined
 * -NaN
 * All the above will result in falsy values.
 * Other than the above 6 values will result in truthy
 *
 */

const x = false;

if (x) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}

console.log(Boolean(x));
