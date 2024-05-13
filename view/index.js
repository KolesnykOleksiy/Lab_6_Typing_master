import { TextDisplayer } from '../build/modules/TextDisplayer.js';
import { UkrWithPunctuationTextReader } from '../build/modules/TextRiders/UkrWithPunctuationTextReader.js';
import { UkrNoPunctuationTextReader } from '../build/modules/TextRiders/UkrNoPunctuationTextReader.js';
import { EngWithPunctuationTextReader } from '../build/modules/TextRiders/EngWithPunctuationTextReader.js';
import { EngNoPunctuationTextReader } from '../build/modules/TextRiders/EngNoPunctuationTextReader.js';


function createTextDisplayer(language, punctuation) {  //factory method
    let textReader;
    if (language === 'ukrainian' && punctuation === 'withPunctuation') {
        textReader = new UkrWithPunctuationTextReader();
    } else if(language === 'ukrainian' && punctuation === 'withoutPunctuation') {
        textReader = new UkrNoPunctuationTextReader();
    } else if(language === 'english' && punctuation === 'withoutPunctuation'){
        textReader = new EngNoPunctuationTextReader();
    }else {
        textReader = new EngWithPunctuationTextReader();
    }
    return new TextDisplayer(textReader);
}

function displayText() {
    const language = document.querySelector('input[name="language"]:checked').value;
    const punctuation = document.querySelector('input[name="punctuation"]:checked').value;
    const words = parseInt(document.querySelector('input[name="words"]:checked').value);

    const textDisplayer = createTextDisplayer(language, punctuation);

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
