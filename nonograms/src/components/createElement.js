export let createElement = (options) => {
    const { tag = '', text = '', parent, classes = [], id, removeChildren, attributes = {} } = options;

    let element = document.createElement(tag);
    element.textContent = text;

    if (parent != null) {
        if (removeChildren != null) {
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild)
            }
        }
        parent.append(element);
    }

    if (id === 'true') {
        element.setAttribute('id', `${text}`);
    }

    if (classes.length > 0) {
        element.classList.add(...classes);
    }

    for (let attr in attributes) {
        if (attributes.hasOwnProperty(attr)) {
            element.setAttribute(attr, attributes[attr]);
        }
    }
    return element;
}

//header
const header = createElement({ tag: 'header', parent: document.body, classes: ['header'] });
const container = createElement({ tag: 'div', parent: header, classes: ['container'] });
const title = createElement({ tag: 'h1', text: 'Nonograms', parent: header, classes: ['header__title'] });

//main
const main = createElement({ tag: 'main', parent: document.body, classes: ['main'] });
const containerMain = createElement({ tag: 'div', parent: main, classes: ['container'] });
const wrapper = createElement({ tag: 'div', parent: containerMain, classes: ['wrapper'] });
//levels box
const levelsWrapper = createElement({ tag: 'div', parent: wrapper, classes: ['levels__wrapper'] });
const levelsBox = createElement({ tag: 'div', parent: levelsWrapper, classes: ['levels__box'] });
const levelEasy = createElement({
    tag: 'input',
    parent: levelsBox,
    classes: ['radioButton'],
    id: 'easy',
    attributes: { type: 'radio', value: 'easy', name: 'level', id: 'easy' }
});
const labelEasy = createElement({
    tag: 'label', text: 'easy', parent: levelsBox, classes: ['label'], attributes: { for: 'easy' }
});
const levelMedium = createElement({
    tag: 'input',
    parent: levelsBox,
    classes: ['radioButton'],
    id: 'medium',
    attributes: { type: 'radio', value: 'medium', name: 'level', id: 'medium' }
});
const labelMedium = createElement({
    tag: 'label', text: 'medium', parent: levelsBox, classes: ['label'], attributes: { for: 'medium' }
});
const levelHard = createElement({
    tag: 'input',
    parent: levelsBox,
    classes: ['radioButton'],
    id: 'hard',
    attributes: { type: 'radio', value: 'hard', name: 'level', id: 'hard' }
});
const labelHard = createElement({
    tag: 'label', text: 'hard', parent: levelsBox, classes: ['label'], attributes: { for: 'hard' }
});
//choose templates
const templateWrapper = createElement({ tag: 'div', parent: wrapper, classes: ['template__wrapper'] });
const templateLabel = createElement({
    tag: 'label', text: 'Choose template', parent: templateWrapper, classes: ['label'], attributes: { for: 'templates' }
});
const selectTemplate = createElement({ tag: 'select', parent: templateWrapper, classes: ['select'], id: 'templates' });
const option1 = createElement({ tag: 'option', text: '1', parent: selectTemplate, classes: ['option'], attributes: { value: '1' } });
const option2 = createElement({ tag: 'option', text: '2', parent: selectTemplate, classes: ['option'], attributes: { value: '2' } });
const option3 = createElement({ tag: 'option', text: '3', parent: selectTemplate, classes: ['option'], attributes: { value: '3' } });
const option4 = createElement({ tag: 'option', text: '4', parent: selectTemplate, classes: ['option'], attributes: { value: '4' } });
const option5 = createElement({ tag: 'option', text: '5', parent: selectTemplate, classes: ['option'], attributes: { value: '5' } });

//buttonsBox
const buttonsBox = createElement({ tag: 'div', parent: wrapper, classes: ['btn__box'] });
const resetBtn = createElement({ tag: 'button', text: 'Reset', parent: buttonsBox, classes: ['btn'] });
const saveGameBtn = createElement({ tag: 'button', text: 'Save game', parent: buttonsBox, classes: ['btn'] });
const continueBtn = createElement({ tag: 'button', text: 'Continue last game', parent: buttonsBox, classes: ['btn'] });
const randomGameBtn = createElement({ tag: 'button', text: 'Random game', parent: buttonsBox, classes: ['btn'] });

//nonograms
const nonogramsField = createElement({ tag: 'div', parent: wrapper, classes: ['nonograms__field'] });


//timer
const timer = createElement({ tag: 'div',text: 'XX:XX', parent: wrapper, classes: ['timer'] });


