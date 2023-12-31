const fontSizeControl = document.querySelector('#font-size-control');
const textElement = document.querySelector('#text');

fontSizeControl.addEventListener('input', onInput);
textElement.style.fontSize = fontSizeControl.value;

function onInput() {
    const fontSizeValue = this.value + 'px';
    textElement.style.fontSize = fontSizeValue;
};
