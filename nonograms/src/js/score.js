import { createElement } from "./createElementFunction";
import { Timer } from "./timer";
import { gameField, timer } from "./app";
import { GameField } from "./createGameField";
import { nonograms } from "./nonograms";
import { results } from "./app";
import { removeChildren } from "./functions";

export class Score {
    constructor() {
        this.scoreWrapper = createElement({ tag: 'div', parent: document.body, classes: ['score__wrapper'] });
        this.scoreBox = createElement({ tag: 'div', parent:  this.scoreWrapper, classes: ['score__box'] });
        this.scoreTable = createElement({ tag: 'table', parent: this.scoreBox, classes: ['score__table'] });
        this.tableCaption = createElement({ tag: 'caption', text: 'High score table', parent: this.scoreTable, classes: ['score__table-caption'] });
        this.tableHead = createElement({ tag: 'thead', parent: this.scoreTable, classes: ['score__table-head'] });
        this.tableHeadRow = createElement({ tag: 'tr', parent: this.tableHead, classes: ['score__table-row'] });
        this.titleNumber = createElement({ tag: 'th', text: '№', parent: this.tableHeadRow, classes: ['score__table-title'] });
        this.titleTemplate = createElement({ tag: 'th', text: 'Template', parent: this.tableHeadRow, classes: ['score__table-title'] });
        this.titleLevel = createElement({ tag: 'th', text: 'Level', parent: this.tableHeadRow, classes: ['score__table-title'] });
        this.titleTime = createElement({ tag: 'th', text: 'Time', parent: this.tableHeadRow, classes: ['score__table-title'] });
        this.tableBody = createElement({ tag: 'tbody', parent: this.scoreTable, classes: ['score__table-body'] });
        this.closeTableBtn = createElement({ tag: 'button',text: 'Close', parent: this.scoreBox, classes: ['btn'] });
    }

    viewScore() {
        document.body.classList.add('hidden');
        this.scoreWrapper.classList.add('open');

        let resultsObj = results.getResults();
        removeChildren(this.tableBody);
        for (let i = 0; i < resultsObj.length; i++) {
            let tableRow = createElement({ tag: 'tr', classes: ['score__table-row'] });
            this.tableBody.appendChild(tableRow);
            tableRow.appendChild(createElement({ tag: 'td', text: i+1, classes: ['score__table-cell'] }));
            tableRow.appendChild(createElement({ tag: 'td', text: `${resultsObj[i].template}`, classes: ['score__table-cell'] }));
            tableRow.appendChild(createElement({ tag: 'td', text: `${resultsObj[i].level}`, classes: ['score__table-cell'] }));
            tableRow.appendChild(createElement({ tag: 'td', text: `${resultsObj[i].time}`, classes: ['score__table-cell'] }));

            this.closeTableBtn.addEventListener(('click'), (event) => {
                document.body.classList.remove('hidden');
                this.scoreWrapper.classList.remove('open'); 
            })
        }

    }
}


// scoreTable.scoreWrapper.classList.add('open');    
// scoreTable.viewScore();