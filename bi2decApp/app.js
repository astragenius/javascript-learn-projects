
const convert = document.getElementById('convert-btn');
const reset = document.getElementById('reset-btn');
const output1 = document.getElementById('output1');
const output2 = document.getElementById('output2');





function bintoDeci (){
    
    const input = document.getElementById('input').value;
    let sum = [];
    const pattern = new RegExp('^[0-1]{1,}$');
    console.log(input);
    /* converting number to array */
    if(pattern.test(input)) {
        resetError();
        let number = Array.from(String(input), Number);
        
        /* reverse iteration for loop */
        for(let i = number.length -1; i >= 0; i--) {
            
            sum.push(number[i] * (Math.pow(2, [i]))); 
        }
        /* Sum array values together */         
        sum = sum.reduce((x, y) => x + y);
        renderDom(sum, input);   
        
    }else {
        error();
    }
    
    
}

function renderDom(value, input) {
    output1.innerText = input;
    output2.innerText = value;
    
}

function error () {
    const section = document.getElementById('form');
    section.classList.toggle('section');
    
}

function resetError() {
    const section = document.getElementById('form');
    section.classList.toggle('section');
}

convert.addEventListener('click', bintoDeci);
reset.addEventListener('click', () => {
   
    output1.innerText = "0";
    output2.innerText = "0";
})
