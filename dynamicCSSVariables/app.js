const styleObj = [...document.styleSheets[1].rules];
const styleObj1 = document.styleSheets[1].cssRules[2].style;
const logInBtn = document.querySelector('.btn-submit');
let password = 'mypassword';
let userID = 'testuser';

/* console.log(styleObj1)
console.log(styleObj1.getPropertyValue('height'));
console.log(styleObj)
let selector = ':root';

let findStyle = styleObj.find(el => el.selectorText === selector)
let propertyName = '--clr-red'; */
//findStyle.style.setProperty(propertyName, 'blue')


function validateData() {
    const userIdInput = document.getElementById('user-id').value;
    const userPassword = document.getElementById('user-password').value;


    function checkUserID() {
        if(userIdInput === userID) {
            return true
        }else {
            return false;
        }
    }

    function checkPassword() {
        if(userPassword === password) return true

        return false;
    }




}


logInBtn.addEventListener('click', validateData);