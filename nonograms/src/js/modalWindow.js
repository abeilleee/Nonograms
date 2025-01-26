import { createElement } from "./createElementFunction";
import { buttons } from "./app";
import { timer } from "./app";

export class ModalWindow {
    constructor() {
        this.modalWrapper = createElement({ tag: 'div', parent: document.body, classes: ['modal__wrapper'] });
        this.modal = createElement({ tag: 'div', parent: this.modalWrapper, classes: ['modal'] });
        this.modalContent = createElement({
            tag: 'div', text: 'Great! You have solved the nonogram in seconds!',
            parent: this.modal, classes: ['modal__text']
        });
        this.modalCloseBtn = createElement({ tag: 'button', text: 'Close', parent: this.modal, classes: ['modal__btn', 'btn'] });
    }

    viewModal() {
        document.body.classList.add('hidden');
        this.modalWrapper.classList.add('open');
        timer.stop();
        let currentTimeSeconds = timer.getCurrentTimeSeconds();
        this.modalContent.textContent = `Great! You have solved the nonogram in ${currentTimeSeconds} seconds!`
        this.modalCloseBtn.addEventListener(('click'), (event) => {
            document.body.classList.remove('hidden');
            this.modalWrapper.classList.remove('open');
        });
        buttons.saveGameBtn.classList.add('disabledBtn');
        buttons.continueBtn.classList.add('disabledBtn');
        buttons.solutionBtn.classList.add('disabledBtn');
        document.querySelector('.field').classList.add('disabled');
    }

    closeModal() {
        document.body.classList.add('hidden');
        this.modalWrapper.classList.remove('open');
        this.modalCloseBtn.addEventListener(('click'), (event) => {
            document.body.classList.remove('hidden');
            this.modalWrapper.classList.remove('open');
        });
    }
}
