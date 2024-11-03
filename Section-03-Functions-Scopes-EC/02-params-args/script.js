//Default params

function registeredUser(user = 'Bot') {
  return user + ' is registered';
}

console.log(registeredUser('Sandeep'));
console.log(registeredUser());

function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6));

//Objects as params
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
  id: 1,
  name: 'John',
};

console.log(loginUser(user));

//Array as params
function getRandom(...arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  console.log(item);
}

getRandom(1, 2, 3, 4, 45, 5);
