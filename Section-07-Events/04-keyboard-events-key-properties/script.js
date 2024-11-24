const itemInput = document.getElementById('item-input');

const onKeyPress = (e) => {
  console.log('keypress');
};

const onkeyUp = (e) => {
  console.log('Keyup');
};

const onkeyDown = (e) => {
  console.log('Keydown');
};

const gameKey = (e) => {
  //key
  // if (e.key === 'Enter') {
  //   alert('You pressed enter');
  // }

  //keycode
  //https://www.toptal.com/developers/keycode/table

  if (e.keyCode === 13) {
    alert('You pressed enter');
  }

  //code
  if (e.code === 'Digit1') {
    console.log(e.code);
  }
};

// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onkeyUp);
//itemInput.addEventListener('keydown', onkeyDown);

itemInput.addEventListener('keydown', gameKey);
