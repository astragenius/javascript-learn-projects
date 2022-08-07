const loremData = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet';

let newData = loremData.split(' ')
console.log(newData)
let newData1 = newData.join(' ')
console.log(newData1)

const LoremIpsumGenerator = function() {
    const inputField = document.getElementById('input-lenght')
    const inputSelect = document.getElementById('select-option')
    const updateBtn = document.getElementById('updateBtn')
    const output = document.getElementById('loremText');
   
    const copyBtn = document.getElementById('copyBtn');

    let state = 'words'

    function getInputFieldValue() {

        return inputField.value;
    }

    function changeState() {
        state = inputSelect.value;
    }

    function createWords() {
        let loremTextData = []
        let inputValue = getInputFieldValue();
        output.value = "";
        if(state === 'words') {

            for(let i = 0; i < inputValue; i++) {
                loremTextData.push(newData[i%newData.length]);
            }
    
            output.value = loremTextData.join(' ');
        }

    }


    function init() {
        inputSelect.addEventListener('change', changeState)
        updateBtn.addEventListener('click', createWords);
    }


    return {init}

}


const lorem = LoremIpsumGenerator();


lorem.init()