//Clean and performant way
const createNewItem = (item) =>{
    const li = document.createElement('li');
    const button = createButton('remove-item btn-link text-red');

    const text = li.appendChild(document.createTextNode(item));
    li.appendChild(button);
    document.querySelector('.items').appendChild(li);

}

const createButton = (classes)   =>{
    const button = document.createElement('button');
    button.className = classes;

    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);

    return button;
}

const createIcon = (classes)   =>{
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}


createNewItem('Dosa');
createNewItem('Idili & Chutney');
createNewItem('Uttapa');
createNewItem('Akki rotti');