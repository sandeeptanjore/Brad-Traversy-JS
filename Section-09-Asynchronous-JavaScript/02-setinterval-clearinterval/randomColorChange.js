let intervalId;

const h1 = document.querySelector('h1');
const originalText = h1.innerText;

function startChange() {
  console.log(intervalId + 'BEFORE');

  //this means that "if intervalId is not running then invoke changeRandomColor function"
  if (!intervalId) {
    console.log(intervalId + 'AFTER THE IF CONDTION');

    intervalId = setInterval(changeRandomColor, 1000);
    console.log(intervalId + 'AFTER SET INTERVAL');
    h1.innerText = 'Hi Sandeep - Colors are changing now. You see that???';
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
  if (originalText !== h1.innerText) {
    h1.innerText = originalText;
  }
}

document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopChange);
