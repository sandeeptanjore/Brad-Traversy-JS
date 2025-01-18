const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e) {
  console.log(e.target.value);
  heading.textContent = e.target.value;
}

const onChecked = (e) => {
  const isChecked = e.target.checked;
  heading.textContent = isChecked ? 'Checked' : 'Not checked';
};

const onFocus = () => {
  console.log('Input is focussed');
  itemInput.style.outlineStyle = 'solid';
  itemInput.style.outlineWidth = '1px';
  itemInput.style.outlineColor = 'tomato';
};

const onBlur = () => {
  console.log('Input is not focussed');
  itemInput.style.outlineStyle = 'none';
};

itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('change', onInput);
checkbox.addEventListener('input', onChecked);

itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);
