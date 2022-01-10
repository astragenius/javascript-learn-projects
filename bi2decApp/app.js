
const convert = document.getElementById('convert-btn');
const reset = document.getElementById('reset-btn');
const input = document.getElementById('input').value;






function bintoDeci (){
    
    let sum = [];
    const pattern = new RegExp('^[0-1]{1,}$');

    /* converting number to array */
    if(pattern.test(input)) {
        let number = Array.from(String(input), Number);
            
                /* reverse iteration for loop */
                for(let i = number.length -1; i >= 0; i--) {
                    
                    sum.push(number[i] * (Math.pow(2, [i]))); 
                }
                /* Sum array values together */         
                sum = sum.reduce((x, y) => x + y);
                renderDom(sum);   
    }else {
        return;
    }
    
}

function renderDom(value) {
    const output = document.getElementById('output');
    output.innerText = value;  
}

convert.addEventListener('click', bintoDeci);
reset.addEventListener('click', () => {input = "";})
