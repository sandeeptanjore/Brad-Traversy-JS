//insertAdjacentElement Example

const insertElement =()=>{
  const filter = document.querySelector('.filter');

  const h1 = document.createElement('h1');
  const h2 = document.createElement('h2');

  h1.textContent = 'insertAdjacentElement - Before Begin';
  h2.textContent = 'insertAdjacentElement - After End';

  filter.insertAdjacentElement('beforebegin', h1);
  filter.insertAdjacentElement('afterend', h2);

}

//insertAdjacentText Example

const insertText =() =>{
    const item = document.querySelector('li:first-child');
    item.insertAdjacentText('afterend' , 'insertAdjacentText');

}

//insertAdjacentHTML Example
const insertHTML =()=>{
    const clearBtn= document.querySelector('#clear');
    clearBtn.insertAdjacentHTML('afterend',' <h2>insertAfterClearButton</h2>');
    clearBtn.insertAdjacentHTML('beforebegin',' <h2>insertAfterMilk</h2>');
}
//insertBefore Example
const insertBeforeItem=() =>{
    const ul = document.querySelector('ul');

    const li = document.createElement('li');
    li.textContent = 'insertBefore';

    const thirdItem = document.querySelector('li:nth-child(3)');
   ul.insertBefore(li, thirdItem);
}

insertElement();
insertText();
insertHTML();
insertBeforeItem();


/**
 * //beforebegin
 * <p>
 *    //afterbegin
 *    //beforeend
 *
 *  </p>
 *  //afterend
 */