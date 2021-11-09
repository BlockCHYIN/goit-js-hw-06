let counterValue = 0;
let valueField = document.querySelector('#value').value;
const removeListenerBtn = document.querySelector('button[data-action = "decrement"]');
const addListenerBtn = document.querySelector('button[data-action = "increment"]');


removeListenerBtn.addEventListener('click', (event) => {
    counterValue -= 1;
    valueField = counterValue;
    console.log(valueField, event);
});

addListenerBtn.addEventListener('click', (event) => {
     counterValue += 1;
    valueField = counterValue;
    console.log(valueField, event);
})