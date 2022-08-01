const styleObj = [...document.styleSheets[1].rules];
const styleObj1 = document.styleSheets[1].cssRules[2].style;
const logInBtn = document.querySelector('.btn-submit');
let password = 'mypassword';
let userID = 'testuser';

console.log(styleObj)


function validateData() {
    const userIdInput = document.getElementById('user-id')
    const userPassword = document.getElementById('user-password')


    function setWarning(selector) {
        let color = 'var(--clr-warning)';
        let findStyle = styleObj.find(el => el.selectorText === selector)
        findStyle.style["background-color"] = color
        
    }

    function setError(selector) {
        let color = 'var(--clr-red)';
        let findStyle = styleObj.find(el => el.selectorText === selector)
        findStyle.style["background-color"] = color
    }

    function checkForSpaces(s) {
        return /\s/g.test(s);
    }

    function checkUserID() {
        if(userIdInput.value === userID) {
            return true
        }else {
            return false;
        }
    }

    function checkPassword() {
        if(userPassword.value === password) return true

        return false;
    }




}


logInBtn.addEventListener('click', validateData);