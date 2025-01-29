import { gameField } from "./app";
import { getLevelName } from "./functions";
import { timer } from "./app";
import { nonograms } from "./nonograms";

export class Result {
    constructor() {
        this.resultsArr;
    }

    saveResult() {
        const results = {
            id: `${gameField.currentGameId}`,
            template: `${nonograms[gameField.currentGameId].name}`,
            level: getLevelName(gameField.currentGameId),
            time: timer.getCurrentTime(),
            seconds: timer.getCurrentTimeSeconds(),
        };

        const emptyResultsArr = [];
        this.resultsArr = JSON.parse(localStorage.getItem('Results')) || emptyResultsArr;
        this.resultsArr.push(results);
        if (this.resultsArr.length > 5) {
            this.resultsArr.shift();
        }
        localStorage.setItem('Results', JSON.stringify(this.resultsArr));
    }

    getResults() {
        const emptyResultsArr = [];
        const lastResults = JSON.parse(localStorage.getItem('Results')) || emptyResultsArr;
        const sortedResults = lastResults.sort((obj1, obj2) => obj1.seconds > obj2.seconds ? 1 : -1);
        return sortedResults;
    }

    saveGame() {
        const savedGameOptions = {
            savedGameId: `${gameField.currentGameId}`,
            template: `${nonograms[gameField.currentGameId].name}`,
            level: getLevelName(gameField.currentGameId),
            time: timer.getCurrentTime(),
            filledCells: Array(document.querySelectorAll('.cell--clicked')),
            crossedCells: Array(document.querySelectorAll('.cell--crossed')),
        };
        localStorage.removeItem('Saved Game');
        const emptyArr = [];
        let savedGame = JSON.parse(localStorage.getItem('Saved Game')) || emptyArr;
        savedGame.push(savedGameOptions);
        localStorage.setItem('Saved Game', JSON.stringify(savedGame));
        savedGame = [];

        console.log(document.querySelectorAll('.cell--clicked'))
    }
}
