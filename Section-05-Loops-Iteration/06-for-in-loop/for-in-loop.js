const colorObj = {
  color1: 'red',
  color2: 'blue',
  color3: 'Orange',
  color4: 'green',
};

for (const key in colorObj) {
  console.log(key, colorObj[key]);
}

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
