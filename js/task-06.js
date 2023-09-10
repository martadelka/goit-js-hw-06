document.addEventListener('DOMContentLoaded', function () {
    const inputElem = this.documentElement.querySelector('#validation-input');
    inputElem.addEventListener('blur', function () {
        const inputValue = inputElem.value.trim();
        const expectedLength = parseInt(inputElem.getAttribute('data-length'), 10);
        if (inputValue.length === expectedLength) {
            inputElem.classList.remove('invalid');
            inputElem.classList.add('valid');
        } else {
            inputElem.classList.remove('valid');
            inputElem.classList.add('invalid');
        }
    });
});