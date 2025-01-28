import { gameField } from "./app";
import { getLevelName } from "./functions";
import { timer } from "./app";
import { nonograms } from "./nonograms";

export class Result {
    constructor() {

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
        let resultsArr = JSON.parse(localStorage.getItem('Results')) || emptyResultsArr;
        resultsArr.push(results);
        if (resultsArr.length > 5) {
            resultsArr.shift();
        }
        localStorage.setItem('Results', JSON.stringify(resultsArr));
    }

    getResults() {
        const lastResults = JSON.parse(localStorage.getItem('Results'));
        const sortedResults = lastResults.sort((obj1, obj2) => obj1.seconds > obj2.seconds ? 1 : -1);
        return sortedResults;
    }

    getLastGame() {
        
    }


}
