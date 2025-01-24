import { createElement } from "./createElementFunction";
import { wrapper } from "./createElements";

export class GameField {
    constructor() {
        this.field = createElement({ tag: 'div', parent: wrapper, classes: ['field'] });
        this.leftClues = createElement({ tag: 'div', classes: ['field__clues', 'field__clues--left'] });
        this.topClues = createElement({ tag: 'div', classes: ['field__clues', 'field__clues--top'] });
        this.cellsGrid = createElement({ tag: 'div', classes: ['field__cells'] });
    }

    createTopClues(width, height) {
        let topClues = createElement({ tag: 'div', parent: this.field, classes: ['clues', 'clues-top'] });
        for (let i = 0; i < width; i++) {
            let clueRow = (createElement({ tag: 'div', classes: ['clue-row', 'clue-row-top'] }));
            topClues.appendChild(clueRow);
            for (let j = 0; j < height; j++) {
                let clue = createElement({ tag: 'div', classes: ['clue', 'clue-top'] });
                if (height === 5) {
                    clue.classList.add('clue--size60');
                }
                clueRow.appendChild(clue);
            }

        }
    }

    createLeftClues(width, height) {
        let leftClues = createElement({ tag: 'div', parent: this.field, classes: ['clues', 'clues-left'] });
        for (let i = 0; i < width; i++) {
            let clueRow = (createElement({ tag: 'div', classes: ['clue-row', 'clue-row-left'] }));
            leftClues.appendChild(clueRow);
            for (let j = 0; j < height; j++) {
                let clue = createElement({ tag: 'div', classes: ['clue', 'clue-left'] });
                if (width === 5) {
                    clue.classList.add('clue--size60');
                }
                clueRow.appendChild(clue);
            }

        }
    }

    createFieldGame(width, height) {
        let fieldGame = createElement({ tag: 'div', parent: this.field, classes: ['field__game'] });
        for (let i = 0; i < width; i++) {
            let row = (createElement({ tag: 'div', classes: ['row'] }));
            fieldGame.appendChild(row);
            for (let j = 0; j < height; j++) {
                let cell = createElement({ tag: 'div', classes: ['cell'] });
                if (width === 5) {
                    cell.classList.add('clue--size60');
                }
                row.appendChild(cell);
            }

        }
    }


    // update(level) {
    //     while (this.field.firstChild) {
    //         this.field.removeChild(parent.firstChild)
    //     }
    //     this.field.appendChild(this.topClues);
    //     this.field.appendChild(this.leftClues);        
    //     this.field.appendChild(this.cellsGrid);


    //     if (level === 'easy') {
    //         for (let i = 0; i < 5; i++) {
    //             this.row = this.cellsGrid.appendChild(createElement({ tag: 'div', classes: ['row'] }));
    //             for (let j = 0; j < 5; j++) {
    //                 let cell = createElement({ tag: 'div', classes: ['cell'] });
    //                 this.row.appendChild(cell);

    //                 cell.addEventListener(('click'), (event) => {
    //                     if (event.target === cell) {
    //                         cell.classList.toggle('cell--clicked');
    //                         cell.classList.remove('cell--crossed');
    //                     }
    //                 });

    //                 cell.addEventListener(('contextmenu'), (event) => {
    //                     if (event.target === cell) {
    //                         event.preventDefault();
    //                         cell.classList.toggle('cell--crossed');
    //                         cell.classList.remove('cell--clicked');
    //                     }
    //                 })
    //             }
    //             this.leftClues.appendChild(createElement({ tag: 'div', classes: ['clue', 'clue-left'] }));
    //             this.topClues.appendChild(createElement({ tag: 'div', classes: ['clue', 'clue-top'] }));
    //         }
    //     }

    // }
    fillClues() {

    }

}

const gameField = new GameField();
gameField.createTopClues(2, 5);
gameField.createLeftClues(5, 2);
gameField.createFieldGame(5, 5);



// export let createGameField = () => {
//     let gameField = createElement({ tag: 'div', parent: wrapper, classes: ['field'] });
//     let leftClues = createElement({ tag: 'div', parent: gameField, classes: ['field__clues', 'field__clues--left'] });
//     let topClues = createElement({ tag: 'div', parent: gameField, classes: ['field__clues', 'field__clues--top'] });
//     let cellsGrid = createElement({ tag: 'div', parent: gameField, classes: ['field__cells'] });

//     // if (level === 'easy') {
//     //     gameField.classList.add('easyGame');
//     //     for (let i = 0; i < 25; i++) {
//     //         let div = createElement({ tag: 'div', parent: cellsGrid, classes: ['cell'] });
//     //         cellsGrid.appendChild(div);
//     //     }
//     // }
// }

// createGameField();


