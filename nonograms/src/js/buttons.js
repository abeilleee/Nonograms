import { createElement } from "./createElementFunction";
import { wrapper } from "./createElements";

export class Buttons {
    constructor() {
        this.buttonsBox = createElement({ tag: 'div', parent: wrapper, classes: ['btn__box'] });
        this.resetBtn = createElement({ tag: 'button', text: 'Reset', parent: this.buttonsBox, classes: ['btn'] });
        this.saveGameBtn = createElement({ tag: 'button', text: 'Save game', parent: this.buttonsBox, classes: ['btn'] });
        this.continueBtn = createElement({ tag: 'button', text: 'Continue last game', parent: this.buttonsBox, classes: ['btn'] });
        this.randomGameBtn = createElement({ tag: 'button', text: 'Random game', parent: this.buttonsBox, classes: ['btn'] });
    }


}