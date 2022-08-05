const btn = document.getElementById('btn');
const color_text = document.getElementById('color-text');
const body = document.getElementsByTagName('body')[0];

function switchColor() {
    
    let color = `rgb(${getNumber()}, ${getNumber()}, ${getNumber()})`;
    body.style.backgroundColor = color;
    color_text.textContent = color;
    
}

function getNumber() {

    return Math.floor(Math.random() * 255) + 1;
}

btn.addEventListener('click', switchColor);

