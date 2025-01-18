const itemInput = document.getElementById('item-input');
const onKeyPress=(e)=>{
    console.log('Keypress');
}

const onKeyUp=(e)=>{
    console.log('keyup');
}

const onKeyDown=(e)=>{
    //key
    //document.querySelector("h1").innerHTML = e.key;
    if(e.key==="Enter"){
        alert("You pressed enter");
    }
 //keyCode
    if(e.key===13){
        alert("You pressed enter");
    }

    //code
    if(e.code==="Digit1"){
        alert("You pressed #1 key");
    }
}

// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);