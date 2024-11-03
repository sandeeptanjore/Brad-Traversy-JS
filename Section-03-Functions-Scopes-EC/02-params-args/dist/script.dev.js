"use strict";

//Default params
function registeredUser() {
  var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Bot';
  return user + ' is registered';
}

console.log(registeredUser('Sandeep'));
console.log(registeredUser());

function sum() {
  var total = 0;

  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  for (var _i = 0, _numbers = numbers; _i < _numbers.length; _i++) {
    var num = _numbers[_i];
    total += num;
  }

  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6)); //Objects as params

function loginUser(user) {
  return "The user ".concat(user.name, " with the id of ").concat(user.id, " is logged in");
}

var user = {
  id: 1,
  name: 'John'
};
console.log(loginUser(user)); //Array as params

function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var item = arr[randomIndex];
  console.log(item);
}

getRandom([1, 2, 3, 4, 45, 5]);