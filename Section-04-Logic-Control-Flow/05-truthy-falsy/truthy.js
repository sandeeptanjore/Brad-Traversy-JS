/** Truthy values:
 * -everything else that is not falsy is truthy
 * -true
 * -"0" (0 in a string)
 * -' '(space in a string)
 * -'false' (false in a string)
 * -[] empty array
 * -{} empty object
 * function(){} (empty function)
 */

const x = '0';
const latkaa = 'false';
const space = ' ';
const emptyArray = [];
const emptyObject = {};
const y = function () {};

// console.log(x);
// console.log(latkaa);
// console.log(space);
// console.log(emptyArray);
// console.log(emptyObject);
// console.log(y);

if (x) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}

if (latkaa) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}

if (space) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}

if (emptyArray) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}

if (emptyObject) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}

if (y) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}

//Checking for empty arrays

if (emptyArray.length > 0) {
  console.log('posts to list');
} else {
  console.log('No posts to list');
}

//checking for empty objects
if (Object.keys(emptyObject).length > 0) {
  console.log('No user present');
} else {
  console.log('List users');
}

// const emptyObject = {
//   name:'Brad'
// }
