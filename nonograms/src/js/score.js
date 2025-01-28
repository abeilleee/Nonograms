import { createElement } from "./createElementFunction";

class Score {
    constructor() {
        this.scoreWrapper = ({ tag: 'div', parent: document.body, classes: ['score__wrapper'] });
        this.scoreTable = createElement({ tag: 'div', parent: this.modalWrapper, classes: ['score__table'] });
    }

    viewScore() {

    }
}