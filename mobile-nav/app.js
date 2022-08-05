const btn = document.getElementById('btn');
const menu = document.querySelector('span');
const nav = document.querySelector('.nav[data-visibility]');



btn.addEventListener('click', () => {
    if(menu.textContent == "menu") {

        menu.textContent = "close";
        nav.dataset.visibility = "true";
        
    } else {

        menu.textContent = "menu";
        nav.dataset.visibility = "false";
    }
     

        
    
})