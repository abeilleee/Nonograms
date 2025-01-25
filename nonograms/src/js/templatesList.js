import { createElement } from "./createElementFunction";
import { levelsWrapper } from "./createElements";
import { nonograms } from "./nonograms";
import { gameField } from "./app";

export class TemplateList {
    constructor() {
        this.templates = createElement({ tag: 'div', parent: levelsWrapper, classes: ['templates'] });
        this.templateLabel = createElement({
            tag: 'label', text: 'Templates:', parent: this.templates, classes: ['templates__label'], attributes: { for: 'templates' }
        });
        this.selectTemplate = createElement({ tag: 'select', parent: this.templates, classes: ['templates__select'], id: 'templates' });
    }

    fillList(level) {
        while (this.selectTemplate.firstChild) {
            this.selectTemplate.removeChild(this.selectTemplate.firstChild);
        }

        if (level === 'easy') {
            for (let i = 0; i < 5; i++) {
                let templateName = nonograms[i].name;
                let option = (createElement({
                    tag: 'option', text: `${templateName}`,
                    parent: this.selectTemplate, classes: ['template'], attributes: { value: `${i}` }
                }));
                this.selectTemplate.appendChild(option);
            }
        } else if (level === 'medium') {
            for (let i = 5; i < 10; i++) {
                let templateName = nonograms[i].name;
                let option = (createElement({
                    tag: 'option', text: `${templateName}`,
                    parent: this.selectTemplate, classes: ['template'], attributes: { value: `${i}` }
                }));
                this.selectTemplate.appendChild(option);
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

        this.selectTemplate.addEventListener('change', (event) => {
            let puzzle = nonograms[event.target.value];
            gameField.createTopClues(puzzle);
            gameField.createLeftClues(puzzle);
            gameField.createFieldGame(puzzle);
            gameField.fillClues(puzzle);
        });
        
    }
}