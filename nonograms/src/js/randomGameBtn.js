import { upperBox } from "./createElements";
import { createElement } from "./createElementFunction";
import { getRandomNumber } from "./functions";
import { nonograms } from "./nonograms";
import { gameField } from "./app";
import { levels } from "./app";


export class RandomGame {
    constructor() {
        this.randomGameBtn = createElement({ tag: 'button', text: 'Random game', parent: upperBox, classes: ['btn'] });
    }

    getRandomGame() {
        let randomIdx = getRandomNumber(nonograms);
        console.log('random idx of game: '+ randomIdx)
        gameField.createTopClues(nonograms[randomIdx]);
        gameField.createLeftClues(nonograms[randomIdx]);
        gameField.createFieldGame(nonograms[randomIdx]);
        gameField.fillClues(nonograms[randomIdx]);
        levels.selectLevel(randomIdx);
        document.querySelector('.templates__select').value = `${randomIdx}`
    }
}