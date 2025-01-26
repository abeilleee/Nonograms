import { createElement } from "./createElementFunction";
import { wrapper } from "./createElements";
import { timer } from "./app";
import { levels } from "./app";
import { nonograms } from "./nonograms";
import { gameField } from "./app";


export class Buttons {
    constructor() {
        this.buttonsBox = createElement({ tag: 'div', parent: wrapper, classes: ['btn__box', 'last'] });
        this.resetBtn = createElement({ tag: 'button', text: 'Reset', parent: this.buttonsBox, classes: ['btn'] });
        this.saveGameBtn = createElement({ tag: 'button', text: 'Save game', parent: this.buttonsBox, classes: ['btn'] });
        this.continueBtn = createElement({ tag: 'button', text: 'Continue last game', parent: this.buttonsBox, classes: ['btn'] });
        this.solutionBtn = createElement({ tag: 'button', text: 'Solution', parent: this.buttonsBox, classes: ['btn'] });
    }

    reset() {
        timer.stop();
        timer.initTimer();
        let clickedCells = document.querySelectorAll('.cell--clicked');
        let crossedCells = document.querySelectorAll('.cell--crossed');
        clickedCells.forEach((cell) => {
            cell.classList.remove('cell--clicked');
        })
        crossedCells.forEach((cell) => {
            cell.classList.remove('cell--crossed');
        });
    }

    showSolution(target) {
        gameField.cleanField();
        if ((target) === this.solutionBtn) {
            this.solutionBtn.classList.add('selected');
            this.saveGameBtn.classList.add('disabledBtn');
            this.continueBtn.classList.add('disabledBtn');
            document.querySelector('.field').classList.add('disabled');
            const solution = nonograms[0].puzzle;
            const cells = document.querySelectorAll('.cell'); //все ячейки на поле
            for (let i = 0; i < solution.length; i++) {
                for (let j = 0; j < solution.length; j++) {
                    if (nonograms[0].puzzle[i][j] === 1) {
                        let cell1 = document.getElementById(`${i}-${j}`);
                        cell1.classList.add('cell--clicked');
                    }
                }
            }
        }
    }

    removeDisabled() {
        this.resetBtn.classList.remove('disabledBtn');
        this.saveGameBtn.classList.remove('disabledBtn');
        this.continueBtn.classList.remove('disabledBtn');
        this.solutionBtn.classList.remove('disabledBtn');
    }



}

