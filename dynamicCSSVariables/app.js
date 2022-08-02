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

    function setValidated(selector) {
        let color = 'var(--clr-light)';
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
        return userIdInput.value === userID;
        
    }

    function checkPassword() {

        return userPassword.value === password
        
    }

    

    function validation() {

       
        if(checkForSpaces(userIdInput.value)) {
            setWarning('#user-id')
        }else if(checkUserID()){
            setValidated('#user-id')
        } else {
            setError('#user-id')
        }
        
        if(checkForSpaces(userPassword.value)) {
            setWarning('#user-password')
        }else if (checkPassword()) {
            setValidated('#user-password')
        }else {
            setError('#user-password')
        }

    }


    validation();
}


logInBtn.addEventListener('click', validateData);