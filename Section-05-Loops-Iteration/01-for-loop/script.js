//Nested loops - used for multiplication
for (let i = 1; i <= 10; i++) {
  console.log(`Multiplication of ${i} `);

  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

//Loop through an array
const names = ['brad', 'sam', 'john', 'sara', 'tim'];

for (let i = 0; i < names.length; i++) {
  if (i === 3) {
    console.log(names[i] + 'is the best');
  } else {
    console.log(names[i]);
  }
}
