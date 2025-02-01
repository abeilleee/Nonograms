import { createElement } from "./createElementFunction";
import { timerBox } from "./createElements";
import { buttons } from "./app";

export class Timer {
    constructor() {
        this.timer = createElement({ tag: 'div', parent: timerBox, classes: ['timer'] });        
        this.minutes = 0;
        this.seconds = 0;
        this.interval;
        this.currentTime = '00:00';
        this.currentTimeSeconds = 0;
        this.timerOn = false;
    }

    initTimer() {
        this.timer.textContent = `${String(this.minutes).padStart(2, '0')}:${String(this.seconds).padStart(2, '0')}`;
        this.currentTimeSeconds = 0;
        this.currentTime = '00:00';
    }

    start() {      
        this.timerOn = true;
        this.interval = setInterval(() => {
            this.seconds++;     
            if (this.seconds >= 60) {
                this.minutes++;
                this.seconds = 0;
            }
            this.initTimer(); 
            this.currentTime = this.timer.textContent;
            this.currentTimeSeconds = +`${this.minutes*60 +this.seconds }`;
        }, 1000);   
    }  

    stop() {
        clearInterval(this.interval);
        this.timerOn = false;     
        this.minutes = 0;
        this.seconds = 0;   
        buttons.saveGameBtn.classList.add('disabledBtn');
    }

    setTime(minutes, seconds) {
        this.minutes = minutes;
        this.seconds = seconds;
        this.timer.textContent = `${String(this.minutes).padStart(2, '0')}:${String(this.seconds).padStart(2, '0')}`;
        this.currentTime = this.timer.textContent;
        this.currentTimeSeconds = +`${this.minutes*60 +this.seconds }`;
    }

    getCurrentTime() {
        return this.currentTime;
    }

    getCurrentTimeSeconds() {
        return this.currentTimeSeconds;
    }
}