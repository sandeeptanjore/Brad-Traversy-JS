let x, y;
let xperson;
//creating an object - 1st way
const toDo = {};

toDo.id = 1;
x = toDo;

console.log(x);

//creating an object - 2nd way
const toDo2 = new Object();
toDo2.name = 'Sandeep Tanjore';
toDo2.city = 'Montreal';
y = toDo2;
console.log(y);
console.log(y.city);

const person = {
  address: {
    coords: {
      lat: 42.938,
      long: -72.369,
    },
  },
};

xperson = person.address.coords.lat;
console.log(xperson);

//Spread operator

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 12, d: 23 };
const obj3 = { obj1, obj2 };
console.log(obj3);

console.log('DESTRUCTING THE OBJ1 and OBJ2 USING SPREAD OPS');
const obj4 = { ...obj1, ...obj2 };
console.log(obj4);
