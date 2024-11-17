function removeClearButton(){
    const clear = document.querySelector('#clear');
    clear.remove()
};

const removeFirstItem=() =>{
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');

    ul.removeChild(li);
};

const removeItem=(itemNumber) => {
    const ul = document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${itemNumber})`);
    ul.removeChild(li);
}

removeClearButton()
// removeFirstItem();
// removeItem(1);
// removeItem(1);
// removeItem(1);
removeItem(2);