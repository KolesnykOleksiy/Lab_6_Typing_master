import { timer } from '../build/modules/Timer.js'; //імпортую вже сам об'єкт

document.addEventListener('DOMContentLoaded', () => {
    const timerElement = document.getElementById('timer');
    const outputElement = document.getElementById('output');
    const languageForm = document.getElementById('languageForm');
    let timerRunning = false;

    if (timerElement) {
        timer.addObserver((time) => {
            timerElement.textContent = time;
        });
    }

    const startTyping = () => {
        if (!timerRunning) {
            timer.start();
            timerRunning = true;
        }
    };

    const stopTyping = () => {
        timer.stop();
        timerRunning = false;
    };

    document.addEventListener('keydown', startTyping);

    // if (outputElement) {
    //     outputElement.addEventListener('input', (event) => {
    //         if (isTypingFinished(event)) {
    //             stopTyping();
    //         }
    //     });
    // }

    if (languageForm) {
        languageForm.addEventListener('change', () => {
            stopTyping();
            timer.reset();
        });
    }

});
