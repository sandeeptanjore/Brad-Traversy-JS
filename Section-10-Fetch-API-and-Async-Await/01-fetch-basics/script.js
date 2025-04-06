//Fetching from a JSON file
fetch('./movies.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

fetch('./actors.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

//Fetching from a text file
fetch('./test.txt')
  .then((response) => response.text())
  .then((data) => console.log(data));

//Fetching from an API
fetch('https://api.github.com/users')
  .then((response) => response.json())
  .then((data) => console.log(data));

//Fetching my personal data from github
fetch('https://api.github.com/users/sandeeptanjore')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

//Fetching my personal data from github
fetch('https://api.github.com/users/sandeeptanjore/repos')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
