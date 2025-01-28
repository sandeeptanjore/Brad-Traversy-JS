const intervalId = setInterval(myCallback, 1000, 'Hello Sandeep');

console.log(intervalId);

function myCallback(a) {
  console.log(a, Date.now());
}

function stopChange() {
  clearInterval(intervalId);
}

document.getElementById('stop').addEventListener('click', stopChange);
