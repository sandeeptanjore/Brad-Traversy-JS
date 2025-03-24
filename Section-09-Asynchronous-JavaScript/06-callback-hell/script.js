function getData(endPoint, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', endPoint);
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      cb(JSON.parse(this.responseText));
    }
  };

  //calling setTimeout within the getData function. This is to get data after a random time in milliseconds
  setTimeout(() => {
    xhr.send();
  }, Math.floor(Math.random() * 3000) + 1000);
}

getData('./movies.json', (data) => {
  console.log(data);
  getData('./actors.json', (data) => {
    console.log(data);
    getData('./directors.json', (data) => {
      console.log(data);
    });
  });
});

// getData('./actors.json');
// getData('./directors.json');
