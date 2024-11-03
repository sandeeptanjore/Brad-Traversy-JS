let i = 0;

while (i <= 20) {
  console.log('Number ' + i);
  i++;
}

//Loop over arrays
let j = 0;
const arr = [10, 20, 30, 40];
while (j < arr.length) {
  console.log(arr[j]);
  j++;
}

//Nesting while loops
let k = 1;
while (k <= 5) {
  console.log('Number ' + k);
  let m = 1;
  while (m <= 5) {
    console.log(`${k}*${m}= ${k * m}`);
    m++;
  }
  k++;
}
