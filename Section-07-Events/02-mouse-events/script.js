const logo = document.querySelector('img');
const onClick = () => console.log('Click Event');

const onDoubleClick = () => {
  if (document.body.style.backgroundColor !== 'tomato') {
    document.body.style.backgroundColor = 'tomato';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
};

const onRightClick = () => console.log('Right Click Event');
const onMouseDown = () => console.log('Mouse Down Event');
const onMouseWheel = () => console.log('Mouse Wheel Event');
const onMouseOver = () => console.log('Mouse Over Event');
const onMouseOut = () => console.log('Mouse Out Event');
const onDragStart = () => console.log('Drag Start');
const onDrag = () => console.log('Drag Event');
const onDragEnd = () => console.log('Drag End Event');

//Event Listeners
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('wheel', onMouseWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);
