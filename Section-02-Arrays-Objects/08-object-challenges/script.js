/* Object Challenge
### Step 1
Create an array of objects called `library`. 
Add 3 objects with a property of `title`, `author`, `status`. T
title and author should be strings (whatever value you want) 
and status should be another object with the properties of `own`, 
`reading` and `read`. Which should all be boolean values.
 For all status, set `own` to `true` and `reading` and `read` to false.
 */

let library = [
  {
    title: 'The death of AI flight 182',
    author: 'Salim Jiva',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },

  {
    title: 'Think and Grow Rich',
    author: 'Napoleon Hill',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },

  {
    title: 'Deep Work',
    author: 'Cal Newport',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

console.log(library);
/**
 * ### Step 2

You finished reading all of the books. Set the `read` value for all of them to `true`.
Do not edit the initial object. Set the values using dot notation.
 */

console.log(' ');
console.log('**********************');

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;
console.log(library);

/**
 * ### Step 3

Destructure the title from the first book and rename the variable to `firstBook`
 */

// console.log(library[0].title);

const { title: firstBook } = library[0];
const { author: bookAuthor } = library[0];

console.log(firstBook);
console.log(bookAuthor);

const { title: thirdBook } = library[2];
const { author: thirdAuthor } = library[1];
// console.log(firstBook);
console.log(thirdBook);
console.log(thirdAuthor);

/*
### Step 4
Turn the library object into a JSON string. 
There is a specific function that we looked at in the last section that we can use to do this.
*/

const newLibraryObject = JSON.stringify(library);
console.log(newLibraryObject);
