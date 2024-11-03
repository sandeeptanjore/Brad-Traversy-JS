const firstName = 'john';
const lastName = 'doe';
const age = 30;
const address = 'Montreal';

const person = {
  firstName,
  lastName,
  age,
  address,
};

console.log(person);
console.log(person.age);

//Destructuring
const toDo = {
  id: 1,
  title: 'take out trash',
  user: {
    name: 'sandeep',
  },
};

const {
  id,
  title,
  user: { name },
} = toDo;

console.log(id, title, name);

// console.log(user);
