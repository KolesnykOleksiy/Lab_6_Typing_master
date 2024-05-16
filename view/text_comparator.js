//file for algorithm of correctly/incorrectly typed characters

import { Timer } from '../build/modules/Timer.js';
const timer = Timer.getInstance();

const languageForm = document.getElementById('languageForm');
languageForm.addEventListener('change', function(event) {
    check = 0;
});

let check = 0;
document.addEventListener('keypress', function(event) {
    let idNumber =  getLastChildIdNumber();

    if (check === idNumber) {
        stopTyping();
        showResult();
    }

    const keyPressed = event.key;
    let char = "char_"+check;
    let key = document.getElementById(char)

    if (keyPressed === key.textContent) {
        key.style.color = 'green';
        check++;
    }
    else {
        key.style.color = 'red';
    }

});
function showResult() {
    const elapsedTime = timer.getElapsedTime();
    const totalCharacters = getLastChildIdNumber();
    const speed = ((totalCharacters / elapsedTime) * 60).toFixed(2);
    alert(`Всі символи введено правильно! Ваша швидкість: ${speed} символів/хвилину.`);
    window.location.reload();
}

function getLastChildIdNumber() {
    const container = document.getElementById('output');
    const lastChild = container.lastElementChild;
    if (lastChild) {
        const lastChildId = lastChild.id;
        const idNumberString = lastChildId.match(/\d+/)[0];
        const idNumber = parseInt(idNumberString, 10);
        return idNumber;
    } else {
        return null;
    }
}
