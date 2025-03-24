const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({ name: 'Sandeep', age: 30 });
    } else {
      reject('Error: something went wrong');
    }
  }, 2000);
});

promise
  .then((user) => {
    console.log(user); // Logs the entire user object: { name: 'Soni', age: 30 }
    return user; // Return the entire user object
  })
  .then((user) => {
    console.log('Users name is: ' + user.name);
    return user;
  })
  .then((user) => {
    console.log('Users age is: ' + user.age); // Logs the age
    return user; // Return the user object again
  })
  .then((user) => {
    console.log('Length of users name is: ' + user.name.length); // Logs the length
  })
  .catch((error) => console.log(error));
