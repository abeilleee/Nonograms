import { createElement } from "./createElementFunction";
import { Timer } from "./timer";
import { gameField, timer } from "./app";
import { GameField } from "./createGameField";
import { nonograms } from "./nonograms";

class Score {
    constructor() {
        this.scoreWrapper = createElement({ tag: 'div', parent: document.body, classes: ['score__wrapper'] });
        this.scoreTable = createElement({ tag: 'table', parent: this.scoreWrapper, classes: ['score__table'] });
        this.tableCaption = createElement({ tag: 'caption', text: 'High score table', parent: this.scoreTable, classes: ['score__table-caption'] });
        this.tableHead = createElement({ tag: 'thead', parent: this.scoreTable, classes: ['score__table-head'] });
        this.tableHeadRow = createElement({ tag: 'tr', parent: this.tableHead, classes: ['score__table-row'] });
        this.titleNumber = createElement({ tag: 'th', text: '№', parent: this.tableHeadRow, classes: ['score__table-title'] });
        this.titleTemplate = createElement({ tag: 'th', text: 'Template', parent: this.tableHeadRow, classes: ['score__table-title'] });
        this.titleLevel = createElement({ tag: 'th', text: 'Level', parent: this.tableHeadRow, classes: ['score__table-title'] });
        this.titleTime = createElement({ tag: 'th', text: 'Time', parent: this.tableHeadRow, classes: ['score__table-title'] });
        this.tableBody = createElement({ tag: 'tbody', parent: this.scoreTable, classes: ['score__table-body'] });
        this.tableRow = createElement({ tag: 'tr', parent: this.tableBody, classes: ['score__table-row'] });
        this.tableCell = createElement({ tag: 'td', parent: this.tableRow, classes: ['score__table-cell'] });
    }

    saveResult() {
        let id = gameField.currentGameId()
        let template = nonograms[id].name;
        let time = timer.getCurrentTime();
        let level;
        if (id >= 0 && id <= 4) {
            level = 'Easy';
        } else if (id >= 5 && id <= 9) {
            level = 'Medium';
        } else if (id >= 10 && id <= 14) {
            level = 'Hard';
        }
    }

    viewScore() {
        document.body.classList.add('hidden');
        this.scoreWrapper.classList.add('open');
    }
}

let scoreTable = new Score();
scoreTable.scoreWrapper.classList.add('open');    