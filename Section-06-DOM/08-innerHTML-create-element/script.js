//Quick and dirty way

const createListItem = (item) =>{
 const li = document.createElement('li');
 li.innerHTML= `${item}
  <button class="remove-item btn-link text-red">
   <i class="fa-solid fa-xmark"></i>
 </button>`;

 document.querySelector('.items').appendChild(li)
}




//Clean and performant way
const createNewItem = (item) =>{
  const li = document.createElement('li');
  const icon = document.createElement('i');
  const button = document.createElement('button');
  const text = li.appendChild(document.createTextNode(item));

  button.className = 'remove-item btn-link text-red';
  icon.className = 'fa-solid fa-xmark';

  button.appendChild(icon);
  li.appendChild(button);

  // console.log(button);
  // console.log(icon);
  // console.log(li);

  document.querySelector('.items').appendChild(li);

}

createListItem('Eggs')
createNewItem('Dosa');
createNewItem('Idili & Chutney');
createListItem('Wada');