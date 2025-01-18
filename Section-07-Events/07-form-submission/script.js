const form = document.getElementById('item-form');
function onSubmit(e) {
  e.preventDefault();
  console.log('submit');

  const item = document.getElementById('item-input').value;
  const priority = document.getElementById('priority-input').value;

  if (item === '' || priority === '0') {
    alert('Please fill in all fields');
    return;
  }
  console.log(item, priority.value);
}

function onSubmit2(e) {
  e.preventDefault();

  const formData = new FormData(form);

  const item = formData.get('item');
  const priority = formData.get('priority');

  const entries = formData.entries();
  console.log(entries);

  console.log(item, priority);
}
form.addEventListener('submit', onSubmit2);
