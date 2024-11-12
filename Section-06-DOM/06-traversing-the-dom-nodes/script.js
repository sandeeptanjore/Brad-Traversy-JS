let output;

const parent = document.querySelector('.parent');
output = parent.childNodes;
output = parent.childNodes[0].textContent;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].innerHTML; //child1
output = parent.childNodes[3].outerHTML;
output = parent.childNodes[3].innerText = 'Sandeep';
output = parent.childNodes[3].style.color = 'dodgerblue';



console.log(output)