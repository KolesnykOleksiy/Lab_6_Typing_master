import { Timer } from '../build/modules/Timer.js';
const timer = Timer.getInstance();

const languageForm = document.getElementById('languageForm');
if (languageForm) {
    languageForm.addEventListener('change', function(event) {
        checkIndex = 0;
    });
}

let checkIndex = 0;
document.addEventListener('keypress', function(event) {
    const lastIdNumber = getLastChildIdNumber();

    if (checkIndex === lastIdNumber) {
        showResult();
    }

    const keyPressed = event.key;
    const charElementId = "char_" + checkIndex;
    const charElement = document.getElementById(charElementId);

    if (charElement) {
        charElement.style.color = keyPressed === charElement.textContent ? 'green' : 'red';
        if (keyPressed === charElement.textContent) {
            checkIndex++;
        }
    }
});

function showResult() {
    const elapsedTime = timer.getElapsedTime();
    const totalCharacters = getLastChildIdNumber();
    if (totalCharacters !== null) {
        const speed = ((totalCharacters / elapsedTime) * 60).toFixed(2);
        alert(`Всі символи введено правильно! Ваша швидкість: ${speed} символів/хвилину.`);
        window.location.reload();
    } else {
        alert('Помилка при підрахунку символів.');
    }
}

function getLastChildIdNumber() {
    const container = document.getElementById('output');
    if (container) {
        const lastChild = container.lastElementChild;
        if (lastChild) {
            const lastChildId = lastChild.id;
            const idNumberMatch = lastChildId.match(/\d+/);
            if (idNumberMatch) {
                return parseInt(idNumberMatch[0], 10);
            }
        }
    }
    return null;
}
