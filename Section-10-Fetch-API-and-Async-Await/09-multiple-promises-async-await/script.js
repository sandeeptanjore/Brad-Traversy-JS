function getData(endPoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', endPoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject('Something went wrong...');
        }
      }
    };

    //calling setTimeout within the getData function.
    // This is to get data after a random time in milliseconds
    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

//Calling the function
// getData('./movies.json')
//   .then((movies) => {
//     console.log(movies);
//     return getData('./actors.json');
//   })
//   .then((actors) => {
//     console.log(actors);
//     return getData('./directors.json');
//   })
//   .then((directors) => {
//     console.log(directors);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// async function getAllData() {
//   const movies = await getData('./movies.json');
//   const directors = await getData('./directors.json');
//   const actors = await getData('./actors.json');
//   console.log(movies, directors, actors);
//   console.log('Results fetched....');
// }

// getAllData();
// console.log('Fetching Movies, Directors and Actors...');

//Using Fetch API instead of xhr Object

const getAllDataWithFetch = async () => {
  const moviesRes = await fetch('./movies.json');
  const actorsRes = await fetch('./actors.json');
  const directorsRes = await fetch('./directors.json');

  const movies = await moviesRes.json();
  const actors = await actorsRes.json();
  const directors = await directorsRes.json();

  console.log(movies, actors, directors);
};

//getAllDataWithFetch();

//we use Promise.all to chain all the promises and I am doing it using async/await
const getAllDataPromiseAll = async () => {
  const [moviesResponse, actorsResponse, directorsResponse] = await Promise.all(
    [fetch('./movies.json'), fetch('./actors.json'), fetch('./directors.json')]
  );
  const movies = await moviesResponse.json();
  const actors = await actorsResponse.json();
  const directors = await directorsResponse.json();
  console.log(movies, actors, directors);
};

getAllDataPromiseAll();
