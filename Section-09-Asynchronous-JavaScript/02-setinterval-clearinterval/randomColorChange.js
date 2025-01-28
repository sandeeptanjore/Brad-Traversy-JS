let intervalId;

function startChange() {
  console.log(intervalId + 'BEFORE');
  if (!intervalId) {
    console.log(intervalId + 'AFTER THE IF CONDTION');

    intervalId = setInterval(changeRandomColor, 1000);
    console.log(intervalId + 'AFTER SET INTERVAL');
  }
}

function changeRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
}

function stopChange() {
  console.log(intervalId + 'BEFORE stopChange');
  clearInterval(intervalId);
  intervalId = undefined;
  console.log(intervalId + 'AFTER stopChange');
}

document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopChange);
