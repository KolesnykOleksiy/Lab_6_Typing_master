export class Timer {
    private static instance: Timer | null = null;
    private startTime: number | null = null;
    private intervalId: ReturnType<typeof setInterval> | null = null;
    private observers: ((time: string) => void)[] = [];

    private constructor() {}

    public static getInstance(): Timer {
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

    private update() {
        if (this.startTime !== null) {
            const elapsedTime = Date.now() - this.startTime;
            const minutes = Math.floor(elapsedTime / 60000);
            const seconds = Math.floor((elapsedTime % 60000) / 1000);
            const timeString = `${this.formatTime(minutes)}:${this.formatTime(seconds)}`;
            this.notifyObservers(timeString);
        }
    }

    private formatTime(value: number): string {
        return value.toString().padStart(2, '0');
    }

    addObserver(observer: (time: string) => void) {
        this.observers.push(observer);
    }

    removeObserver(observer: (time: string) => void) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    private notifyObservers(time: string) {
        this.observers.forEach(observer => observer(time));
    }

    getElapsedTime(): number {
        if (this.startTime !== null) {
            return (Date.now() - this.startTime) / 1000; // in seconds
        }
        return 0;
    }
}
