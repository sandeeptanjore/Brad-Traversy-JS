const socials = ['twitter', 'linkedin', 'facebook', 'insta'];
//console.log(socials._proto_);

socials.forEach(function (item) {
  console.log(item);
});

/*The above can be written below as follows: 
This is based on MDN manual
*/
socials.forEach((item, index, arr) => console.log(`${index} : ${item}`, arr));
