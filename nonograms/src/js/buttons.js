import { createElement } from "./createElementFunction";
import { wrapper } from "./createElements";
import { timer } from "./app";
import { nonograms } from "./nonograms";
import { gameField } from "./app";
import { levels } from "./app";


export class Buttons {
    constructor() {
        this.buttonsBox = createElement({ tag: 'div', parent: wrapper, classes: ['btn__box', 'last'] });
        this.resetBtn = createElement({ tag: 'button', text: 'Reset', parent: this.buttonsBox, classes: ['btn'] });
        this.saveGameBtn = createElement({
            tag: 'button', text: 'Save game', parent: this.buttonsBox,
            classes: ['btn', 'disabledBtn']
        });
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
        let currentGameId = gameField.currentGameId;
        console.log('currenGameID solution: ' + currentGameId);
        gameField.cleanField();
        if ((target) === this.solutionBtn) {
            this.solutionBtn.classList.add('selected');
            this.saveGameBtn.classList.add('disabledBtn');
            this.continueBtn.classList.add('disabledBtn');
            document.querySelector('.field').classList.add('disabled');
            const solution = nonograms[currentGameId].puzzle;
            const cells = document.querySelectorAll('.cell'); //все ячейки на поле
            for (let i = 0; i < solution.length; i++) {
                for (let j = 0; j < solution.length; j++) {
                    if (nonograms[currentGameId].puzzle[i][j] === 1) {
                        let cell1 = document.getElementById(`${i}-${j}`);
                        cell1.classList.add('cell--clicked');
                    }
                }
            }
        }
    }

    continueLastGame() {
        gameField.cleanField();
        const lastGameOptions = JSON.parse(localStorage.getItem('Saved Game'));       
        let currentGameId = lastGameOptions[0].id;
        let clickedCells = lastGameOptions[0].filledCells;
        let crossedCells = lastGameOptions[0].crossedCells;
        let level = lastGameOptions[0].level.toLowerCase();
        let time = lastGameOptions[0].time;        
        let minutes = time.slice(0,2);
        let seconds = time.slice(3,5);
        levels.selectLevel(currentGameId);
        timer.setTime(minutes, seconds);

        gameField.createTopClues(nonograms[currentGameId]);
        gameField.createLeftClues(nonograms[currentGameId]);
        gameField.createFieldGame(nonograms[currentGameId]);
        gameField.fillClues(nonograms[currentGameId]);
        
        this.continueBtn.classList.add('disabledBtn');
        for (let i = 0; i < clickedCells.length; i++) {
            let id = clickedCells[i];
            document.getElementById(id).classList.add('cell--clicked');
        }
        for (let i = 0; i < crossedCells.length; i++) {
            let id = crossedCells[i];
            document.getElementById(id).classList.add('cell--crossed');
        }      
        document.querySelector('.templates__select').value = `${currentGameId}`;
    }

    removeDisabled() {
        this.resetBtn.classList.remove('disabledBtn');
        this.continueBtn.classList.remove('disabledBtn');
        this.solutionBtn.classList.remove('disabledBtn');
    }
}




