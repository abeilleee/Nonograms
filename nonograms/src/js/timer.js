import { wrapper } from "./createElements";
import { createElement } from "./createElementFunction";
import { timerBox } from "./createElements";

class Timer {
    constructor() {
        this.timer = createElement({ tag: 'div', parent: timerBox, classes: ['timer'] });        
        this.minutes = 0;
        this.seconds = 0;
        this.interval;
        this.currentTime;
    }

    initTimer() {
        this.timer.textContent = `${String(this.minutes).padStart(2, '0')}:${String(this.seconds).padStart(2, '0')}`;
    }

    start() {      
        this.interval = setInterval(() => {
            this.seconds++;     
            if (this.seconds >= 60) {
                this.minutes++;
                this.seconds = 0;
            }
            this.initTimer(); 
            this.currentTime = (this.timer.textContent)
            console.log(this.currentTime)
        }, 1000);        
    }  

    stop() {
        clearInterval(this.interval);
    }

    getCurrentTime() {
        return this.currentTime;
    }

    getTime
}

let timer = new Timer();
timer.initTimer();
timer.start();


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