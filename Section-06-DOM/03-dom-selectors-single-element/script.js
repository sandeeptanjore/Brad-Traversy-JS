//document.getElementById()

console.log(document.getElementById('app-title'))
console.log(document.getElementById('app-title').getAttribute('id'))

//Set attributes
document.getElementById('app-title').title= 'Sandeeps Shopping List';

document.getElementById('app-title').setAttribute('class', 'title');

const title= document.getElementById('app-title');
console.log(title);

//Get/Set content
console.log(title.textContent)
title.textContent = 'Hi Sandeep'
title.innerText = 'Hi again'
title.innerHTML = '<strong>Shopping List</strong>'

//Change style
title.style.color = 'tomato'
title.style.backgroundColor ='black'
title.style.padding = '10px'
title.style.borderRadius = '10px'

//document.querySelector()

console.log(document.querySelector('h1')) 
console.log(document.querySelector('#app-title')) 
console.log(document.querySelector('.container')) 
console.log(document.querySelector('input[type="text"]')) 
console.log(document.querySelector('li:nth-child(2)')) 
console.log(document.querySelector('li:nth-child(2)').innerText) 
console.log(document.querySelector('li:nth-child(3)'));

const secondItem= document.querySelector('li:nth-child(2)')
secondItem.innerText ='Apple Santra Mosambi'
secondItem.style.color = 'red'

//Use these methods on other elements
const list = document.querySelector('ul');
console.log(list)
const firstItem=list.querySelector('li');
// console.log(firstItem) 
firstItem.style.color ='blue'