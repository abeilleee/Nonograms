import { createElement } from "./createElementFunction";
import { wrapper } from "./createElements";

export class GameField {
    constructor(field) {
        this.field = createElement({ tag: 'div', parent: wrapper, classes: ['field'] });
        this.leftClues = createElement({ tag: 'div', classes: ['field__clues', 'field__clues--left'] });
        this.topClues = createElement({ tag: 'div', classes: ['field__clues', 'field__clues--top'] });
        this.cellsGrid = createElement({ tag: 'div', classes: ['field__cells'] });
    }

    update(level) {
        while (this.field.firstChild) {
            this.field.removeChild(parent.firstChild)
        }

        this.field.appendChild(this.leftClues);
        this.field.appendChild(this.topClues);
        this.field.appendChild(this.cellsGrid);

        if (level === 'easy') {
            for (let i = 0; i < 5; i++) {
                this.row = this.cellsGrid.appendChild(createElement({ tag: 'div', classes: ['row'] }));
                for (let j = 0; j < 5; j++) {
                    this.row.appendChild(createElement({ tag: 'div', classes: ['cell'] }));
                }
                this.leftClues.appendChild(createElement({ tag: 'div', classes: ['clue'] }));
                this.topClues.appendChild(createElement({ tag: 'div', classes: ['clue'] }));
            }

        }

    }
    createGameField(width, height) {
    }

}

const gameField = new GameField();
gameField.update('easy');

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


