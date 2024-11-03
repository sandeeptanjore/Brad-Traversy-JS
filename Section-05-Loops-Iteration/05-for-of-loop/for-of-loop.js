const items = ['book', 'table', 'chair', 'kite'];
const users = [
  { name: 'Brad' },
  { name: 'Kate' },
  { name: 'Dominic' },
  { name: 'Oliver' },
];

for (let i = 0; i < items.length; i++) {
  console.log(`Item: ${items[i]}`);
}
console.log(' ');

for (const item of items) {
  console.log(`Item: ${item}`);
}

// for (let user in users) {
//   console.log(`User: ${user[name]}`);
// }

for (const user of users) {
  console.log(`Item: ${user.name}`);
}
