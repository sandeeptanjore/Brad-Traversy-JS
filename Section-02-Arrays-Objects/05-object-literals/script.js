const person = {
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 main street',
    city: 'Boston',
    state: 'MA',
  },
  hobbies: ['music', 'sleeping'],
};

console.log(person);
console.log(person.age);
console.log(person.address.city);
console.log(person.hobbies[1]);

person.name = 'Jane Doe';
delete person.age;
console.log(person);
