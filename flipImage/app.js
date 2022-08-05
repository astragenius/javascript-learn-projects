const input = document.getElementById('search-bar')

const displayBtn = document.getElementById('displayBtn');
const image = document.getElementById('image');

const btnUp = document.getElementById('up')
const btndown = document.getElementById('down')
const btnRight = document.getElementById('right')
const btnLeft = document.getElementById('left')



function rotateLeft() {
    image.style.animation = 'flip-left'
    image.style.animationTimingFunction = 'cubic-bezier(0.86, -0.1, 0.27, 1.15)'
    image.style.animationDuration = '1s'
    image.style.transform = 'scaleX(-1)'

}

function rotateRight() {
    image.style.animation = 'flip-right'
    image.style.animationTimingFunction = 'cubic-bezier(0.86, -0.1, 0.27, 1.15)'
    image.style.animationDuration = '1s'
    image.style.transform = 'scaleX(1)'
}

function rotateUp() {
    image.style.animation = 'flip-up'
    image.style.animationTimingFunction = 'cubic-bezier(0.86, -0.1, 0.27, 1.15)'
    image.style.animationDuration = '1s'
    image.style.transform = 'scaleY(-1)'
}

function rotateDown() {
    image.style.animation = 'flip-down'
    image.style.animationTimingFunction = 'cubic-bezier(0.86, -0.1, 0.27, 1.15)'
    image.style.animationDuration = '1s'
    image.style.transform = 'scaleY(1)';
}

function getNewImage() {
    let newImage = input.value
    image.src = "";
    image.src = newImage;

   

}


btnLeft.addEventListener('click', rotateLeft);
btnRight.addEventListener('click', rotateRight);
btnUp.addEventListener('click', rotateUp);
btndown.addEventListener('click', rotateDown)

displayBtn.addEventListener('click', getNewImage);