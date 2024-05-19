import { Timer } from '../build/modules/Timer.js';
const timer = Timer.getInstance();

document.addEventListener('DOMContentLoaded', () => {
    const timerElement = document.getElementById('timer');
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

    if (languageForm) {
        languageForm.addEventListener('change', () => {
            stopTyping();
            timer.reset();
        });
    }
    window.stopTyping = stopTyping;
});
