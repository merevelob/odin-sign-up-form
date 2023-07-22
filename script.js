// Script that validates both passwords are the same

const pwd1 = document.querySelector('#pwd1');
const pwd2 = document.querySelector('#pwd2');
const error = document.querySelector('.errorCont')

function checkPassword(event) {
    if (pwd1.value !== event.target.value) {
        error.textContent = '* Passwords do not match';
        pwd1.classList.add('error');
        pwd2.classList.add('error');
    }
    else {
        error.textContent = '';
        pwd1.classList.remove('error');
        pwd2.classList.remove('error');
    }
}

pwd2.addEventListener('input', checkPassword);