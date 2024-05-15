import { TextDisplayer } from '../build/modules/TextDisplayer.js';
import { FactoryTextPicker } from '../build/modules/TextRiders/FactoryTextPicker.js';

// get input values from html
function displayText() {
    const language = document.querySelector('input[name="language"]:checked').value;
    const punctuation = document.querySelector('input[name="punctuation"]:checked').value;
    const words = parseInt(document.querySelector('input[name="words"]:checked').value);

//use factory method for displaying text
    let text = new FactoryTextPicker().chooseText(language, punctuation)
    let textDisplayer = new TextDisplayer(text)

    switch (words) {
        case 10:
            textDisplayer.DisplayTenWordsText()
                .then((text) => {
                    document.getElementById('example').innerText = text;
                })
                .catch((error) => {
                    console.error('Error displaying text:', error);
                    document.getElementById('example').innerText = 'Error displaying text';
                });
            break;
        case 30:
            textDisplayer.DisplayThirtyWordsText()
                .then((text) => {
                    document.getElementById('example').innerText = text;
                })
                .catch((error) => {
                    console.error('Error displaying text:', error);
                    document.getElementById('example').innerText = 'Error displaying text';
                });
            break;
        case 60:
            textDisplayer.DisplaySixtyWordsText()
                .then((text) => {
                    document.getElementById('example').innerText = text;
                })
                .catch((error) => {
                    console.error('Error displaying text:', error);
                    document.getElementById('example').innerText = 'Error displaying text';
                });
            break;
        default:
            document.getElementById('example').innerText = '';
    }
}

//call displayText function every time when inputs changing
document.querySelectorAll('input[name="language"]').forEach((radio) => {
    radio.addEventListener('change', displayText);
});

document.querySelectorAll('input[name="punctuation"]').forEach((radio) => {
    radio.addEventListener('change', displayText);
});

document.querySelectorAll('input[name="words"]').forEach((radio) => {
    radio.addEventListener('change', displayText);
});

displayText();
