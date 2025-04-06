// fetch('http://httpstat.us/200')
//   .then((response) => {
//     return response;
//   })
//   .then(() => {
//     console.log('success');
//   });

//Test with response.ok
// fetch('http://httpstat.us/404')
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error('Request Failed...');
//     }
//     //console.log(response.status);
//     return response;
//   })
//   .then(() => {
//     console.log('success');
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//Check for specific http code
fetch('http://httpstat.us/200')
  .then((response) => {
    if (response.status === 404) {
      throw new Error('Not Found...');
    } else if (response.status === 500) {
      throw new Error('Sandeep it is a : Server Error');
    } else if (response.status !== 200) {
      throw new Error('Request Failed');
    }
    //console.log(response.status);
    return response;
  })
  .then(() => {
    console.log('success');
  })
  .catch((error) => {
    console.log(error);
  });

// Catch runs on a network error
// fetch('http://hello123.net')
//   .then((response) => {
//     return response;
//   })
//   .then(() => {
//     console.log('success');
//   })
//   .catch((error) => {
//     console.log(error);
//   });
