const onClear =() =>{
 // alert('Clear Items');
 const itemList = document.querySelector('ul');
 const items = itemList.querySelectorAll('li')

 //itemList.innerHTML = '';

 //items.forEach((item) => item.remove());

 while(itemList.firstChild){
itemList.removeChild(itemList.firstChild);
 }
}

const clearBtn = document.querySelector('#clear');


//JavaScript Event Listener
// clearBtn.onclick = () =>{
//   alert('clear items');
// }

//Recommended and Modern way of doing
//addEventListener
//clearBtn.addEventListener('click', ()=>alert('Clear Items: Call back'));
clearBtn.addEventListener('click', onClear);


//setTimeout(() => clearBtn.removeEventListener('click',onClear), 5000);

//setTimeout(() =>clearBtn.click(),25000);