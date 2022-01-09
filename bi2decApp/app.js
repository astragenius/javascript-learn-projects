
const input = document.getElementById('input').value;





function bintoDeci (value){
    
    let sum = [];
    /* converting number to array */
    let number = Array.from(String(value), Number);
    
    /* reverse iteration for loop */
    for(let i = number.length -1; i >= 0; i--) {
    
       sum.push(number[i] * (Math.pow(2, [i])));
        
    }
   
    return sum = sum.reduce((x, y) => x + y);

    
    
}

console.log(bintoDeci(input));

