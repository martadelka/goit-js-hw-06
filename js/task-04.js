var counterValue = 0;
const valueSpan = document.querySelector(`#value`);
const decrement = document.querySelector(`[data-action="decrement"]`);
const increment = document.querySelector(`[data-action="increment"]`);
function updateContent(newValue) {
    valueSpan.textContent = newValue;
}

decrement.addEventListener(`click`, () => {
    counterValue -= 1;
    updateContent(counterValue)
});

increment.addEventListener(`click`, () => {
    counterValue += 1;
    updateContent(counterValue)
});

updateContent(counterValue);

