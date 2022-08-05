const countBtn = document.getElementById('countBtn');
const saveBtn = document.getElementById('saveBtn');
const countDisplay = document.getElementById('count-el');
let count = 0;




function increment() {
    count = count + 1;
    countDisplay.innerText = count;
}

function createList(number) {
    const countList = document.getElementById('countList');
    let list = document.createElement('li');
    list.textContent = number;
    countList.prepend(list);
}

function save() {
    createList(count);
    count = 0;
    countDisplay.textContent = count;

}


countBtn.addEventListener('click', increment);
saveBtn.addEventListener('click', save);

