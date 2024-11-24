const logo = document.querySelector('img');

function onClick(e) {
  console.log(e.target);
  console.log(e.currentTarget);
  e.target.style.backgroundColor = 'red';
  console.log(`Type of event: ${e.type}`);
  console.log(`Timestamp: ${e.timeStamp}`);
  console.log(`X axis:(horizontal) Right to Left - ${e.clientX}`);
  console.log(`Y axis:(vertical) Top to Bottom - ${e.clientY}`);
}

logo.addEventListener('click', onClick);

document.body.addEventListener('click', function (e) {
  console.log(e.target);
  console.log(e.currentTarget);
});
