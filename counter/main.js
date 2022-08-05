const count = document.getElementById('count');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');


reset.addEventListener('click', function() {
    count.textContent = 0;
})

increase.addEventListener('click', function() {
    count.textContent = parseInt(count.textContent, 10) + 1;

})

decrease.addEventListener('click', function() {

    if(count.textContent > 0) {

        count.textContent = count.textContent - 1;
    }else {
        return
    }
})