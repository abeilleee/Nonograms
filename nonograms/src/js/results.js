import { gameField } from "./app";
import { getLevelName } from "./functions";
import { timer } from "./app";
import { nonograms } from "./nonograms";
import { createElement } from "./createElementFunction";

export class Result {
    constructor() {
        this.resultsArr;
        this.saveGameMessageWrapper = createElement({
            tag: 'div', parent: document.body,
            classes: ['save-message__wrapper']
        });
        this.saveGameMessageContent = createElement({
            tag: 'div', text: 'Game is saved',
            parent: this.saveGameMessageWrapper, classes: ['save-message']
        });
        this.hasSavedGame =  JSON.parse(localStorage.getItem('abeilleee_savedGame')) ? true : false;
    }

    saveResult() {
        const results = {
            id: `${gameField.currentGameId}`,
            template: `${nonograms[gameField.currentGameId].name}`,
            level: getLevelName(gameField.currentGameId),
            // time: `${String(timer.minutes).padStart(2, '0')}:${String(timer.seconds).padStart(2, '0')}`,
            time: timer.getCurrentTime(),
            seconds: timer.getCurrentTimeSeconds(),
        };

        const emptyResultsArr = [];
        this.resultsArr = JSON.parse(localStorage.getItem('abeilleee_results')) || emptyResultsArr;
        this.resultsArr.push(results);
        if (this.resultsArr.length > 5) {
            this.resultsArr.shift();
        }
        localStorage.setItem('abeilleee_results', JSON.stringify(this.resultsArr));
    }

    getResults() {
        const emptyResultsArr = [];
        const lastResults = JSON.parse(localStorage.getItem('abeilleee_results')) || emptyResultsArr;
        const sortedResults = lastResults.sort((obj1, obj2) => obj1.seconds > obj2.seconds ? 1 : -1);
        return sortedResults;
    }

    saveGame() {
        let clickedCells = document.querySelectorAll('.cell--clicked');
        let crossedCells = document.querySelectorAll('.cell--crossed');
        let clickedCellsIndexes = [];
        let crossedCellsIndexes = [];
        clickedCells.forEach((elem) => clickedCellsIndexes.push(elem.getAttribute('id')));
        crossedCells.forEach((elem) => crossedCellsIndexes.push(elem.getAttribute('id')));

        const savedGameOptions = {
            id: `${gameField.currentGameId}`,
            template: `${nonograms[gameField.currentGameId].name}`,
            level: getLevelName(gameField.currentGameId),
            time: `${String(timer.minutes).padStart(2, '0')}:${String(timer.seconds).padStart(2, '0')}`,
            // time: timer.getCurrentTime(),
            filledCells: clickedCellsIndexes,
            crossedCells: crossedCellsIndexes,
        };
        localStorage.removeItem('abeilleee_savedGame');
        const emptyArr = [];
        let savedGame = JSON.parse(localStorage.getItem('abeilleee_savedGame')) || emptyArr;
        savedGame.push(savedGameOptions);
        localStorage.setItem('abeilleee_savedGame', JSON.stringify(savedGame));
        savedGame = [];
        this.saveGameMessageWrapper.classList.add('open');
        setTimeout(() => {
            this.saveGameMessageWrapper.classList.remove('open');
        }, 500);
    }
}
