// readyState has 5 possible values
// - 0: request not initialized
// - 1: server connection established
// - 2: request received
// - 3: processing request
// - 4: request finished and response is ready

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/users/sandeeptanjore/repos');

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    //console.log(JSON.parse(this.responseText));
    const data = JSON.parse(this.responseText);
    data.forEach((repo) => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${repo.name}</strong> -${repo.description}`;
      document.querySelector('#results').appendChild(li);
    });
  }
};

xhr.send();
