//файл для алгоритму правильно/неправильно введених символів

const languageForm = document.getElementById('languageForm');
languageForm.addEventListener('change', function(event) {
    check = 0;
});

const spans = document.querySelectorAll('[id^="char_"]');
let check = 0;

document.addEventListener('keypress', function(event) {
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

    if (check === spans.length) {
        console.log('Всі символи введено правильно!');
    }
});
