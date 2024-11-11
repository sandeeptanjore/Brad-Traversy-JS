let output

//Get child elements
const parent = document.querySelector('.parent');
output= parent.children[1].innerText; //child 2
output= parent.children[2].className;//child
output = parent.children[2].nodeName;//div

parent.children[1].innerText= 'Child Two'
parent.children[1].style.color='tomato'

parent.firstElementChild.innerText= 'Child Numero Uno';
parent.lastElementChild.innerText= 'Child trois';

//Get parent elements from a child
const child = document.querySelector('.child'); //div.parent
output = child.parentElement;
child.parentElement.style.border = '1px solid red';
child.parentElement.style.padding = '10px';

// Sibling elements
const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem
output= secondItem.nextElementSibling.style.color='orange'; //gets child trois

console.log(output);