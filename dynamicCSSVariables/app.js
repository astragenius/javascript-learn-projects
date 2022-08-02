const styleObj = [...document.styleSheets[1].rules];

const logInBtn = document.querySelector('.btn-submit');
const cancelBtn = document.getElementById('btn-cancel');
let password = 'mypassword';
let userID = 'testuser';




function ValidateData() {
    const userIdInput = document.getElementById('user-id')
    const userPassword = document.getElementById('user-password')
    

    function setWarning(id) {
        const message = document.querySelector(`#${id}-error`)
        let color = 'var(--clr-warning)';
        let lightColor = 'var(--clr-warning-light)';
        let findStyle = styleObj.find(el => el.selectorText === `#${id}`)
        findStyle.style["background-color"] = lightColor;
        findStyle.style["outline-color"] = color
        message.style.color = color
        message.textContent = `Your ${id} has whitespace!!`
        
    }

    function setValidated(id) {
        const message = document.querySelector(`#${id}-error`)
        let color = 'var(--clr-white)';
        let validateColor = 'var(--clr-green)'
        let findStyle = styleObj.find(el => el.selectorText === `#${id}`)
        findStyle.style["background-color"] = color
        findStyle.style["outline-color"] = validateColor;
        message.style.color = validateColor;
        message.textContent = `Correct`;
    } 

    function setError(id) {
        const message = document.querySelector(`#${id}-error`)
        let color = 'var(--clr-red)';
        let lightcolor = 'var(--clr-red-light)'
        let findStyle = styleObj.find(el => el.selectorText === `#${id}`)
        findStyle.style["background-color"] = lightcolor;
        findStyle.style["outline-color"] = ' var(--clr-red)';
        message.style.color = color;
        message.textContent = `Your ${id} is incorrect!!`;
    }

    function checkForSpaces(s) { return /\s/g.test(s); }

    function checkUserID() { return userIdInput.value === userID; }

    function checkPassword() { return userPassword.value === password }

    

    function validation() {

       
        if(checkForSpaces(userIdInput.value)) {
            setWarning('user-id')
        }else if(checkUserID()){
            setValidated('user-id')
        } else {
            setError('user-id')
        }
        
        if(checkForSpaces(userPassword.value)) {
            setWarning('user-password')
        }else if (checkPassword()) {
            setValidated('user-password')
        }else {
            setError('user-password')
        }

    }

    function reset(inputUser, inputPassword) {
        const message = [...document.querySelectorAll('.error-box')]
        message.forEach(el => { el.textContent = ''; })
       
        let findInputUser = styleObj.find(el => el.selectorText === inputUser)
        let findInputPassword = styleObj.find(el => el.selectorText === inputPassword)
        let inputArray = [findInputUser, findInputPassword]
        inputArray.forEach(el => {
            el.style['background-color'] = 'var(--clr-white)';
            el.style["outline-color"] = 'var(--clr-dark-blue)'
        })
    }


   return { validation, reset }
}


const dataValidation = ValidateData();

logInBtn.addEventListener('click', () => { dataValidation.validation()});
cancelBtn.addEventListener('click', () => { dataValidation.reset('#user-id', '#user-password') })