const formEl = document.getElementById('form');
const firstNameEl = document.getElementById('firstname');
const lastNameEl = document.getElementById('lastname');
const emailAddressEl = document.getElementById('email');
const passwordEl = document.getElementById('password');


formEl.addEventListener('submit', e => {
    e.preventDefault();


    validateInputs();
})

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = ''
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const validateInputs = () => {
    const firstnameValue = firstNameEl.value.trim();
    const lastnameValue = lastNameEl.value.trim();
    const emailValue = emailAddressEl.value.trim();
    const passwordValue = passwordEl.value.trim();


    if (firstnameValue === '') {
        setError(firstNameEl, 'First Name cannot be empty')
    } else {
        setSuccess(firstNameEl);
    }

    if (lastnameValue === '') {
        setError(lastNameEl, 'Last Name cannot be empty')
    } else {
        setSuccess(lastNameEl);
    }

    if (!isEmailValid(emailValue)) {
        setError(emailAddressEl, 'Looks like this is not an email')
    } else {
        setSuccess(emailAddressEl);
    }

    if (passwordValue === '') {
        setError(passwordEl, 'Password cannot be empty')
    } else {
        setSuccess(passwordEl);
    }
}