import { createElement } from "./createElementFunction";
import { selectTemplate } from "./createElements";
import { nonograms } from "./nonograms";

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
                    parent: selectTemplate, classes: ['template'], attributes: { value: `${i + 1}` }
                }));
                this.list.appendChild(option);
            }
        } else if (level === 'medium') {
            for (let i = 5; i < 11; i++) {
                let templateName = nonograms[i].name;
                let option = (createElement({
                    tag: 'option', text: `${templateName}`,
                    parent: selectTemplate, classes: ['template'], attributes: { value: `${i + 1}` }
                }));
                this.list.appendChild(option);
            }
        } else if (level === 'hard') {
            for (let i = 5; i < 11; i++) {
                let templateName = nonograms[i].name;
                let option = (createElement({
                    tag: 'option', text: `${templateName}`,
                    parent: selectTemplate, classes: ['template'], attributes: { value: `${i + 1}` }
                }));
                this.list.appendChild(option);
            }
        }
    }
}