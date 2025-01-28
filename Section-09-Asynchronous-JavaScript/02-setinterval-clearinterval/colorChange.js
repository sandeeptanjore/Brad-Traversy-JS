let intervalId;

function startChange() {
  if (!intervalId) {
    intervalId = setInterval(changeColor, 1000);
  }
}

function changeColor() {
  if (document.body.style.backgroundColor !== 'black') {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    //document.body.innerText = 'Hi Sandeep';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
}

function stopChange() {
  clearInterval(intervalId);
}

document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopChange);
