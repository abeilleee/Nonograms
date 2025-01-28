import { createElement } from "./createElementFunction";
import { timerBox } from "./createElements";
import { levels } from "./app";

export class Timer {
    constructor() {
        this.timer = createElement({ tag: 'div', parent: timerBox, classes: ['timer'] });        
        this.minutes = 0;
        this.seconds = 0;
        this.interval;
        this.currentTime;
        this.currentTimeSeconds;
        this.timerOn = false;
    }

    initTimer() {
        this.timer.textContent = `${String(this.minutes).padStart(2, '0')}:${String(this.seconds).padStart(2, '0')}`;
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
    }

    getCurrentTime() {
        return this.currentTime;
    }

    getCurrentTimeSeconds() {
        return this.currentTimeSeconds;
    }
}





// let timer12 = new Timer();
// timer12.start();
// timer12.add();
// timer12.timer();
// // timer12.start();

// // timer12.timer();

// console.log(timer12)

// const timer = createElement({ tag: 'div', parent: wrapper, classes: ['timer'] });
// let hours = 0;
// let minutes = 0;
// let seconds = 0;
// let interval;

// function start() {
//     seconds++;
//     if (seconds >= 60) {
//         seconds = 0;
//         minutes++;
        
//     }
// }

// function add() {
//     start();
//     if (minutes === 59) {
//         alert('Hey?! Are you here? Time is out!');
//         minutes = 0;
//     }
//     timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//     timer1();
// }

// function timer1() {
//     interval = setTimeout(add, 1000);
// }

// timer1();