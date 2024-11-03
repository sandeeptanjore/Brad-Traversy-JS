/**
 * ### Challenge 2:

**Instructions:**

Combine `arr1` and `arr2` into a new array called `arr3` with the following elements:

```js
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
````

Notice that both `arr1` and `arr2` include the number 5. You will have to find a way to get rid of the extra 5.

**Expected Result:**

```js
console.log(arr3);
// [1,2,3,4,5,6,7,8,9,10]
 * 
 */

//Solution 1
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
let arr3, arr4;
arr3 = arr1.concat(arr2);
arr3 = [...new Set(arr3)];
console.log(arr3);

//Solution 2
arr4 = arr1.slice(0, 4).concat(arr2);
console.log(arr4);
