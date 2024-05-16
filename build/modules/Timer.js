export class Timer {
    constructor() {
        this.startTime = null;
        this.intervalId = null;
        this.observers = [];
    }
    static getInstance() {
        if (this.instance === null) {
            this.instance = new Timer();
        }
        return this.instance;
    }
    start() {
        if (this.startTime === null) {
            this.startTime = Date.now();
            this.intervalId = setInterval(() => this.update(), 1000);
        }
    }
    stop() {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
    reset() {
        this.stop();
        this.startTime = null;
        this.notifyObservers("00:00");
    }
    update() {
        if (this.startTime !== null) {
            const elapsedTime = Date.now() - this.startTime;
            const minutes = Math.floor(elapsedTime / 60000);
            const seconds = Math.floor((elapsedTime % 60000) / 1000);
            const timeString = `${this.formatTime(minutes)}:${this.formatTime(seconds)}`;
            this.notifyObservers(timeString);
        }
    }
    formatTime(value) {
        return value.toString().padStart(2, '0');
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    notifyObservers(time) {
        this.observers.forEach(observer => observer(time));
    }
    //show result
    getElapsedTime() {
        if (this.startTime !== null) {
            const elapsedTime = (Date.now() - this.startTime) / 1000; // in seconds
            return elapsedTime;
        }
        return 0;
    }
}
Timer.instance = null;
//# sourceMappingURL=Timer.js.map