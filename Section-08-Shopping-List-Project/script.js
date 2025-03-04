const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');

const displayItems = () => {
  const itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.forEach((item) => addItemToDOM(item));
  checkUI();
};

//Adding a new item
const onAddItemSubmit = (e) => {
  e.preventDefault();

  //validate input
  if (itemInput.value === '') {
    itemInput.placeholder = 'Please add an item';
    //alert('Please add an item');
    return;
  }

  if (checkIfItemExists(itemInput.value)) {
    alert('That item already exists');
    return;
  }

  //Create item DOM element
  addItemToDOM(itemInput.value);

  //Add item to local storage
  addItemToStorage(itemInput.value);

  checkUI();

  itemInput.value = '';
};

function getItemsFromStorage() {
  let itemsFromStorage;
  if (localStorage.getItem('items') === null) {
    itemsFromStorage = [];
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem('items'));
  }
  return itemsFromStorage;
}

const onClickItem = (e) => {
  if (e.target.parentElement.classList.contains('remove-item')) {
    removeItem(e.target.parentElement.parentElement);
  }
};

//Checking for duplicate items
const checkIfItemExists = (item) => {
  const itemsFromStorage = getItemsFromStorage();

  // Convert both the input and stored items to lowercase for case-insensitive comparison
  return itemsFromStorage.some(
    (storedItem) => storedItem.toLowerCase() === item.toLowerCase()
  );
};

//Removing an items

const removeItem = (item) => {
  if (confirm('Are you sure?')) {
    // Remove item from DOM
    item.remove();

    //Remove item from storage
    removeItemFromStorage(item.textContent);

    checkUI();
  }
};

const removeItemFromStorage = (item) => {
  let itemsFromStorage = getItemsFromStorage();

  //Filter out item to be removed
  itemsFromStorage = itemsFromStorage.filter((i) => i !== item);

  //Re-set to localstorage
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
};

//Clearing items

const clearItems = () => {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }

  // Clear from localStorage
  localStorage.removeItem('items');
  checkUI();
};

const addItemToDOM = (item) => {
  //Create list item
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));
  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);

  //Add li to the DOM
  itemList.appendChild(li);
};

const createButton = (classes) => {
  const button = document.createElement('button');
  button.className = classes;
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
};

const createIcon = (classes) => {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
};

const addItemToStorage = (item) => {
  const itemsFromStorage = getItemsFromStorage();

  //Add new item to array
  itemsFromStorage.push(item);

  //Convert to JSON string and set to local storage
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
};

const filterItems = (e) => {
  const items = itemList.querySelectorAll('li');
  const text = e.target.value.toLowerCase();

  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();
    if (itemName.indexOf(text) != -1) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
};

const checkUI = () => {
  const items = itemList.querySelectorAll('li');
  if (items.length === 0) {
    clearBtn.style.display = 'none';
    itemFilter.style.display = 'none';
  } else {
    clearBtn.style.display = 'block';
    itemFilter.style.display = 'block';
  }
};

// Initialize app
const init = () => {
  //Event Listeners
  itemForm.addEventListener('submit', onAddItemSubmit);
  itemList.addEventListener('click', onClickItem);
  clearBtn.addEventListener('click', clearItems);
  itemFilter.addEventListener('input', filterItems);
  document.addEventListener('DOMContentLoaded', displayItems);

  checkUI();
};

init();
