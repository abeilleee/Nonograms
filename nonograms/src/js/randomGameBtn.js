import { upperBox } from "./createElements";
import { createElement } from "./createElementFunction";
export class RandomGame {
    constructor() {
        this.randomGameBtn = createElement({ tag: 'button', text: 'Random game', parent: upperBox, classes: ['btn'] });
    }
}