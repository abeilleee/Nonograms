import { createElement } from "./createElementFunction";
import { Timer } from "./timer";
class ModalWindow {
    constructor() {
        this.modalWrapper = createElement({ tag: 'div', parent: document.body, classes: ['modal__wrapper'] });
        this.modal = createElement({ tag: 'div', parent: this.modalWrapper, classes: ['modal'] });
        this.modalContent = createElement({ tag: 'div', parent: this.modal, classes: ['modal__text'] });
    }

    viewModal() {
        document.body.classList.add('hidden');
        this.modal.textContent = `Great! You have solved the nonogram in  seconds!`;   
        this.modalWrapper.classList.add('open');
    }

    closeModal() {
        document.body.classList.add('hidden');
        this.modal.textContent = `Great! You have solved the nonogram in  seconds!`;   
        this.modalWrapper.classList.remove('open');
    }
}
