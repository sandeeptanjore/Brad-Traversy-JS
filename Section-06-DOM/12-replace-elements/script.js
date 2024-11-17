const replaceFirstItem= () =>{
 const firstItem = document.querySelector('li:first-child');

 const li = document.createElement('li');
 li.textContent = 'Replaced First Item';

 firstItem.replaceWith(li);

}

const replaceSecondItem = () =>{
    const secondItem = document.querySelector('li:nth-child(2)');

     secondItem.outerHTML = '<li>Replaced Second Item</li>';
}

const replaceAllItems=() =>{
    const lis = document.querySelectorAll('li');
    lis.forEach((item,index) =>{
       // item.outerHTML = '<li>Replaced All Items</li>' //this way or
        item.innerHTML = 'Sandeep Sandeep Sandeep.....'; //this way
    })
}

const replaceAllItemsConditionally=() =>{
    const lis = document.querySelectorAll('li');
    lis.forEach((item,index) =>{
      if (index ===1){
          item.innerHTML = 'Sandeep Sandeep Sandeep';
      }else{
        item.innerHTML = 'Soni Soni Soni.....'; //this way

      }
    })
}

replaceFirstItem();
replaceSecondItem();
replaceAllItems();
replaceAllItemsConditionally();