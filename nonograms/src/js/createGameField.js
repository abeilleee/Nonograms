import { createElement } from "./createElementFunction";
import { wrapper } from "./createElements";
import { timer } from "./app";
import { removeChildren } from "./functions";
import { checkSolution } from "./checkSolution";
import { buttons } from "./app";
import { sounds } from "./app";
import { hasSavedGame } from "./app";

export class GameField {

    constructor() {
        this.field = createElement({ tag: 'div', parent: wrapper, classes: ['field'] });
        this.leftClues = createElement({ tag: 'div', parent: this.field, classes: ['clues', 'clues-left'] });
        this.topClues = createElement({ tag: 'div', parent: this.field, classes: ['clues', 'clues-top'] });
        this.cellsGrid = createElement({ tag: 'div', classes: ['field__cells'] });
        this.fieldGame = createElement({ tag: 'div', parent: this.field, classes: ['field__game'] });
        this.currentGameId;
    }

    createTopClues(puzzle) {
        let width = puzzle.cluesTop.length;
        let height = puzzle.cluesTop[0].length;
        let clueRowId = 0;
        let clueId = 0;
        removeChildren(this.topClues);

        for (let i = 0; i < width; i++) {
            let clueRow = (createElement({ tag: 'div', classes: ['clue-row', 'clue-row-top'] }));
            clueRow.setAttribute('id', `clueTop${clueRowId}`)
            this.topClues.appendChild(clueRow);
            for (let j = 0; j < height; j++) {
                let clue = createElement({ tag: 'div', classes: ['clue', 'clue-top'] });
                clue.setAttribute('id', `clueTop${clueRowId}-${clueId}`)
                if (height === 5) {
                    clue.classList.add('clue--size60');
                }
                clueId++;
                clueRow.appendChild(clue);
            }
            clueRowId++;
            clueId = 0;

        }
    }

    createLeftClues(puzzle) {
        let width = puzzle.cluesLeft.length;
        let height = puzzle.cluesLeft[0].length;
        let clueRowId = 0;
        let clueId = 0;
        removeChildren(this.leftClues);

        for (let i = 0; i < width; i++) {
            let clueRow = (createElement({ tag: 'div', classes: ['clue-row', 'clue-row-left'] }));
            clueRow.setAttribute('id', `clueLeft${clueRowId}`)
            this.leftClues.appendChild(clueRow);
            for (let j = 0; j < height; j++) {
                let clue = createElement({ tag: 'div', classes: ['clue', 'clue-left'] });
                clue.setAttribute('id', `clueLeft${clueRowId}-${clueId}`)
                if (width === 5) {
                    clue.classList.add('clue--size60');
                }
                clueId++;
                clueRow.appendChild(clue);
            }
            clueRowId++;
            clueId = 0;
        }
    }

    createFieldGame(puzzle) {
        this.currentGameId = arguments[0].id;
        let width = puzzle.width;
        let height = puzzle.height;
        let rowId = 0;
        let cellId = 0;
        removeChildren(this.fieldGame);
        buttons.removeDisabled();
        this.field.classList.remove('disabled');
        buttons.solutionBtn.classList.remove('selected');

        for (let i = 0; i < width; i++) {
            let row = (createElement({ tag: 'div', classes: ['row'] }));
            row.setAttribute('id', rowId);
            this.fieldGame.appendChild(row);
            for (let j = 0; j < height; j++) {
                let cell = createElement({ tag: 'div', classes: ['cell'] });
                if (width === 5) {
                    cell.classList.add('cell--size60');
                }
                cell.setAttribute('id', `${rowId}-${cellId}`);
                row.appendChild(cell);
                cellId++;

                cell.addEventListener(('click'), (event) => {
                    if (event.target === cell) {
                        cell.classList.toggle('cell--clicked');
                        cell.classList.remove('cell--crossed');
                        if (timer.timerOn === false) {
                            timer.start();
                        }
                        buttons.saveGameBtn.classList.remove('disabledBtn');
                        if (hasSavedGame === true) {
                            buttons.continueBtn.classList.remove('disabledBtn');
                        }

                    }
                    checkSolution(puzzle);
                    cell.classList.contains('cell--clicked') ? sounds.playClick() : sounds.playErase();


                });

                cell.addEventListener(('contextmenu'), (event) => {
                    if (event.target === cell) {
                        event.preventDefault();
                        cell.classList.toggle('cell--crossed');
                        cell.classList.remove('cell--clicked');

                        if (timer.timerOn === false) {
                            timer.start();
                        }
                        buttons.saveGameBtn.classList.remove('disabledBtn');
                        if (hasSavedGame === true) {
                            buttons.continueBtn.classList.remove('disabledBtn');
                        }
                    }
                    cell.classList.contains('cell--crossed') ? sounds.playCross() : sounds.playErase();


                });

            }
            rowId++;
            cellId = 0;
        }
    }

    fillClues(puzzle) {
        let arrayTop = puzzle.cluesTop;
        let arrayLeft = puzzle.cluesLeft;

        for (let i = 0; i < arrayTop.length; i++) {
            for (let j = 0; j < arrayTop[0].length; j++) {
                if (arrayTop[i][j] !== 0) {
                    document.getElementById(`clueTop${i}-${j}`).textContent = arrayTop[i][j];
                }
            }
        }
        for (let i = 0; i < arrayLeft.length; i++) {
            for (let j = 0; j < arrayLeft[0].length; j++) {
                if (arrayLeft[i][j] !== 0) {
                    document.getElementById(`clueLeft${i}-${j}`).textContent = arrayLeft[i][j];
                }
            }
        }
    }

    cleanField() {
        const cells = document.querySelectorAll('.cell');
        cells.forEach((elem) => elem.classList.remove('cell--clicked'));
        cells.forEach((elem) => elem.classList.remove('cell--crossed'));
    }
}



