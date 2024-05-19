import { TextDisplayer } from '../build/modules/TextDisplayer.js';
import { FactoryTextPicker } from '../build/modules/TextRiders/FactoryTextPicker.js';

async function displayText() {
    const language = document.querySelector('input[name="language"]:checked').value;
    const punctuation = document.querySelector('input[name="punctuation"]:checked').value;
    const words = parseInt(document.querySelector('input[name="words"]:checked').value, 10);

    const textReader = new FactoryTextPicker().chooseText(language, punctuation);
    const textDisplayer = new TextDisplayer(textReader);

    try {
        let text;
        switch (words) {
            case 10:
                text = await textDisplayer.DisplayTenWordsText();
                break;
            case 30:
                text = await textDisplayer.DisplayThirtyWordsText();
                break;
            case 60:
                text = await textDisplayer.DisplaySixtyWordsText();
                break;
            default:
                text = '';
        }
        document.getElementById('example').innerText = text;
    } catch (error) {
        console.error('Error displaying text:', error);
        document.getElementById('example').innerText = 'Error displaying text';
    }
}

const inputNames = ['language', 'punctuation', 'words'];
inputNames.forEach((name) => {
    document.querySelectorAll(`input[name="${name}"]`).forEach((input) => {
        input.addEventListener('change', displayText);
    });
});

displayText();
