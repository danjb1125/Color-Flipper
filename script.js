const hex = document.getElementById('color-hex');
const generateButton = document.getElementById('generate-button');
const body = document.body;
const container = document.querySelector('.container');

function generateColor(){
    const hexChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let code ='#';
    for(let i = 0; i < 6; i++){
        index = Math.floor(Math.random() * 16);
        code += hexChar[index];
    }
    console.log(code);
    changeColor(code);
}

function changeColor(hexCode){
    body.style.backgroundColor = hexCode;
    container.style.backgroundColor = hexCode;
    hex.innerHTML = hexCode;
}

generateButton.addEventListener('click', function(){
    hexCode = generateColor();
})

