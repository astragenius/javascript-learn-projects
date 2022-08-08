const loremData = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet \n\n';

let test = loremData.split(' ')
console.log(Math.floor(test.length / 12))

//let spaceCount = (loremData.split(' ').length - 1)


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

    function copyText() {

        let text = output
        text.select()
        text.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(text.value);
    }

    function changeState() {
        state = inputSelect.value;
        
    }

    function createWords() {
        let inputValue = getInputFieldValue();
        output.value = "";
       
        if(state === 'words') {
            
            let loremTextData = []
            let newData = loremData.split(' ');

            for(let i = 0; i < inputValue; i++) {
                loremTextData.push(newData[i%newData.length]);
            }
    
            output.value = loremTextData.join(' ');
        }if(state === 'characters') {

            let loremTextData = [];
            let newData = loremData.split('');

            for(let i = 0; i < inputValue; i++) {

                loremTextData.push(newData[i%newData.length])
            }
            output.value = loremTextData.join('');
        }if(state === 'paragraphs') {

            let loremTextData = [];
            let newData = loremData.split(' ');

            for(let i = 0; i < (inputValue * 12); i++) {

                loremTextData.push(newData[i%newData.length])
            }

            output.value = loremTextData.join(' ');
        }

    }


    function init() {
        inputSelect.addEventListener('change', changeState);
        updateBtn.addEventListener('click', createWords);
        copyBtn.addEventListener('click', copyText);
    }


    return { init }

}


const lorem = LoremIpsumGenerator();


lorem.init()