const d = new Date(10, 30, 2022, 21, 0, 0);
//const d = new Date();
const hour = d.getHours();

console.log(hour);

if (hour < 12) {
  console.log('Good Morning');
} else if (hour < 18) {
  console.log('Good Afternoon');
} else {
  console.log('Good Night');
}

//Nested if statements
if (hour < 12) {
  console.log('Good Morning');
  if (hour === 6) {
    console.log('Time to wake up');
  }
} else if (hour < 18) {
  console.log('Good Afternoon');
} else {
  console.log('Good Night');
  if (hour >= 20) {
    console.log('zzzzzzzzz');
  }
}
