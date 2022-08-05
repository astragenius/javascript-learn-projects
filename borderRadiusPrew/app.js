const border_radius_tl = document.getElementById('border-radius-tl');
const border_radius_tr = document.getElementById('border-radius-tr');
const border_radius_bl = document.getElementById('border-radius-bl');
const border_radius_br = document.getElementById('border-radius-br');
const preview = document.getElementById('preview');
const br_tl = document.getElementById('br-TL');
const br_tr = document.getElementById('br-TR');
const br_bl = document.getElementById('br-BL');
const br_br = document.getElementById('br-BR');
const copyBtn = document.getElementById('copyBtn');




border_radius_tl.addEventListener('change', () => {
    preview.style.borderTopLeftRadius = `${border_radius_tl.value}px`;
    br_tl.innerText = `${border_radius_tl.value}px,`  
})
border_radius_tr.addEventListener('change', () => {
    preview.style.borderTopRightRadius = `${border_radius_tr.value}px`;
    br_tr.innerText = `${border_radius_tr.value}px,`  
})
border_radius_bl.addEventListener('change', () => {
    preview.style.borderBottomLeftRadius = `${border_radius_bl.value}px`;
    br_bl.innerText = `${border_radius_bl.value}px,`  
})
border_radius_br.addEventListener('change', () => {
    preview.style.borderBottomRightRadius = `${border_radius_br.value}px`;
    br_br.innerText = `${border_radius_br.value}px;`  
})


copyBtn.addEventListener('click', () => {
    const clipboard = document.getElementById('clipboard');
    navigator.clipboard.writeText(clipboard.innerText);

    alert('its copied');


})