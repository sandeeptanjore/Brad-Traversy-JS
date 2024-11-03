(function () {
  const user = 'John';
  console.log(user);
  const hello = () => console.log('Hello from IIFE');
  hello();
})();

//IFFE syntax
(function (name) {
  console.log('Hello ' + name);
})('Sandeep Soni');
