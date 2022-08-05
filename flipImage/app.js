const input = document.getElementById('search-bar')

const displayBtn = document.getElementById('displayBtn');
const image = document.getElementById('image');

const btnUp = document.getElementById('up')
const btndown = document.getElementById('down')
const btnRight = document.getElementById('right')
const btnLeft = document.getElementById('left')



function rotateLeft() {
    image.style.animation = 'flip-with-scale'
    image.style.animationDuration = '2s'
    image.style.transform = 'scaleX(-1)'

}

function rotateRight() {
    image.style.transform = 'scaleX(1)'
}

function rotateUp() {
    image.style.transform = 'scaleY(-1)'
}

function rotateDown() {
    image.style.transform = 'scaleY(1)';
}


btnLeft.addEventListener('click', rotateLeft);
btnRight.addEventListener('click', rotateRight);
btnUp.addEventListener('click', rotateUp);
btndown.addEventListener('click', rotateDown)