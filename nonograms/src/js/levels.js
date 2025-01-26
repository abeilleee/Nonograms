import { createElement } from "./createElementFunction";
import { wrapper } from "./createElements";
import { levelsWrapper } from "./createElements";
import { template } from "./app";
import { GameField } from "./createGameField";
import { gameField } from "./app";
import { nonograms } from "./nonograms";
import { upperBox } from "./createElements";

export class Levels {
    constructor() {
        this.levels = createElement({ tag: 'div', parent: levelsWrapper, classes: ['levels'] });
        this.levelsTitle = createElement({ tag: 'div', text: 'Level:', parent: this.levels, classes: ['title'] });
        this.levelsBox = createElement({ tag: 'div', parent: this.levels, classes: ['levels__box'] });
        this.levelEasy = createElement({
            tag: 'input',
            parent: this.levelsBox,
            classes: ['radioButton'],
            id: 'easy',
            attributes: { type: 'radio', value: 'easy', name: 'level', id: 'easy', checked: 'true' }
        });
        this.labelEasy = createElement({
            tag: 'label', text: 'easy', parent: this.levelsBox, classes: ['label', 'selected'], attributes: { for: 'easy' }
        });
        this.levelMedium = createElement({
            tag: 'input',
            parent: this.levelsBox,
            classes: ['radioButton'],
            id: 'medium',
            attributes: { type: 'radio', value: 'medium', name: 'level', id: 'medium' }
        });
        this.labelMedium = createElement({
            tag: 'label', text: 'medium', parent: this.levelsBox, classes: ['label'], attributes: { for: 'medium' }
        });
        this.levelHard = createElement({
            tag: 'input',
            parent: this.levelsBox,
            classes: ['radioButton'],
            id: 'hard',
            attributes: { type: 'radio', value: 'hard', name: 'level', id: 'hard' }
        });
        this.labelHard = createElement({
            tag: 'label', text: 'hard', parent: this.levelsBox, classes: ['label'], attributes: { for: 'hard' }
        });
    }

    selectLevel(target) {
        if (target === this.labelEasy || (target >=0 && target <= 4)) {
            this.labelEasy.classList.add('selected');
            this.labelMedium.classList.remove('selected');
            this.labelHard.classList.remove('selected');
            template.fillList('easy');
            gameField.createTopClues(nonograms[0]);
            gameField.createLeftClues(nonograms[0]);
            gameField.createFieldGame(nonograms[0]);
            gameField.fillClues(nonograms[0]);
        } else if (target === this.labelMedium || (target >=5 && target <= 9)) {
            this.labelMedium.classList.add('selected');
            this.labelEasy.classList.remove('selected');
            this.labelHard.classList.remove('selected');
            template.fillList('medium');
            gameField.createTopClues(nonograms[5]);
            gameField.createLeftClues(nonograms[5]);
            gameField.createFieldGame(nonograms[5]);
            gameField.fillClues(nonograms[5]);
        } else if (target === this.labelHard || (target >=10 && target <= 14)) {
            this.labelHard.classList.add('selected');
            this.labelMedium.classList.remove('selected');
            this.labelEasy.classList.remove('selected');
            template.fillList('hard');
            gameField.createTopClues(nonograms[10]);
            gameField.createLeftClues(nonograms[10]);
            gameField.createFieldGame(nonograms[10]);
            gameField.fillClues(nonograms[10]);
        }
    }

}
