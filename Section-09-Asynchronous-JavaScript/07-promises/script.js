// Create a promise
const promise = new Promise((resolve, reject) => {
  //Do some async task
  setTimeout(() => {
    console.log('Async task complete');
    // resolve(console.log('Promise consumed 1...'));
    resolve();
  }, 1000);
});

// promise.then(() => {
//   console.log('Promise consumed...');
// });

//The above can also be done as follows:
//Just another way of doing it
const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    //let error = true;
    let error = false;

    if (!error) {
      resolve({ name: 'Sandeep', age: 30 });
    } else {
      reject('Error: Something went wrong');
    }
  }, 1000);
});

getUser
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(`This is the error....` + error);
  });

console.log('Hello from global scope');
