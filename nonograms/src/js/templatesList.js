import { createElement } from "./createElementFunction";
import { selectTemplate } from "./createElements";
import { nonograms } from "./nonograms";
import { GameField } from "./createGameField";
import { gameField } from "./app";

export class TemplateList {
    constructor() {
        this.list = selectTemplate;
    }

    fillList(level) {
        while (this.list.firstChild) {
            this.list.removeChild(this.list.firstChild);
        }

        if (level === 'easy') {
            for (let i = 0; i < 5; i++) {
                let templateName = nonograms[i].name;
                let option = (createElement({
                    tag: 'option', text: `${templateName}`,
                    parent: selectTemplate, classes: ['template'], attributes: { value: `${i}` }
                }));
                this.list.appendChild(option);
            }
        } else if (level === 'medium') {
            for (let i = 5; i < 10; i++) {
                let templateName = nonograms[i].name;
                let option = (createElement({
                    tag: 'option', text: `${templateName}`,
                    parent: selectTemplate, classes: ['template'], attributes: { value: `${i}` }
                }));
                this.list.appendChild(option);
            }
        }
        // } else if (level === 'hard') {
        //     for (let i = 10; i < 19; i++) {
        //         let templateName = nonograms[i].name;
        //         let option = (createElement({
        //             tag: 'option', text: `${templateName}`,
        //             parent: selectTemplate, classes: ['template'], attributes: { value: `${i}` }
        //         }));
        //         this.list.appendChild(option);
        //     }
        
        this.list.addEventListener('change', (event) => {
            let puzzle = nonograms[event.target.value];
            gameField.createTopClues(puzzle);
            gameField.createLeftClues(puzzle);
            gameField.createFieldGame(puzzle);
            gameField.fillClues(puzzle);
        });
    }
}