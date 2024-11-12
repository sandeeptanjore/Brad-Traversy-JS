const div = document.createElement('div');
div.className='my-element'
div.id = 'my-element';
div.setAttribute('title', 'My Element');
//div.innerText= 'Hello World!';
const text = document.createTextNode('Hello World');
div.appendChild(text); //very important method
//document.body.appendChild(div); //adding the div to the webpage and showing it there on the page

document.querySelector('ul').appendChild(div);
console.log(div);