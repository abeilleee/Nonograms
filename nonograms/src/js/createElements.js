import { createElement } from "./createElementFunction";

//header
const header = createElement({ tag: 'header', parent: document.body, classes: ['header'] });
const container = createElement({ tag: 'div', parent: header, classes: ['container'] });
const title = createElement({ tag: 'h1', text: 'Nonograms', parent: container, classes: ['header__title'] });
//main
const main = createElement({ tag: 'main', parent: document.body, classes: ['main'] });
const containerMain = createElement({ tag: 'div', parent: main, classes: ['container'] });
export const wrapper = createElement({ tag: 'div', parent: containerMain, classes: ['wrapper'] });
//upperBox
export const upperBox = createElement({ tag: 'div', parent: wrapper, classes: ['upper-box'] });
//levels box
export const levelsWrapper = createElement({ tag: 'div', parent: upperBox, classes: ['levels__wrapper'] });
export const rightBox = createElement({ tag: 'div', parent: upperBox, classes: ['right-box'] });
export const theme = createElement({ tag: 'div', parent: rightBox, classes: ['theme'] });
// const levels = createElement({ tag: 'div', parent: levelsWrapper, classes: ['levels'] });
// const levelsTitle = createElement({ tag: 'div', text: 'Level:', parent: levels, classes: ['title'] });
// const levelsBox = createElement({ tag: 'div', parent: levels, classes: ['levels__box'] });
// const levelEasy = createElement({
//     tag: 'input',
//     parent: levelsBox,
//     classes: ['radioButton'],
//     id: 'easy',
//     attributes: { type: 'radio', value: 'easy', name: 'level', id: 'easy' }
// });
// const labelEasy = createElement({
//     tag: 'label', text: 'easy', parent: levelsBox, classes: ['label'], attributes: { for: 'easy' }
// });
// const levelMedium = createElement({
//     tag: 'input',
//     parent: levelsBox,
//     classes: ['radioButton'],
//     id: 'medium',
//     attributes: { type: 'radio', value: 'medium', name: 'level', id: 'medium' }
// });
// const labelMedium = createElement({
//     tag: 'label', text: 'medium', parent: levelsBox, classes: ['label'], attributes: { for: 'medium' }
// });
// const levelHard = createElement({
//     tag: 'input',
//     parent: levelsBox,
//     classes: ['radioButton'],
//     id: 'hard',
//     attributes: { type: 'radio', value: 'hard', name: 'level', id: 'hard' }
// });
// const labelHard = createElement({
//     tag: 'label', text: 'hard', parent: levelsBox, classes: ['label'], attributes: { for: 'hard' }
// });

//choose templates
// const templates = createElement({ tag: 'div', parent: levelsWrapper, classes: ['templates'] });
// const templateLabel = createElement({
//     tag: 'label', text: 'Templates:', parent: templates, classes: ['templates__label'], attributes: { for: 'templates' }
// });
// export const selectTemplate = createElement({ tag: 'select', parent: templates, classes: ['templates__select'], id: 'templates' });
// const option1 = createElement({ tag: 'option', text: '1', parent: selectTemplate, classes: ['template'], attributes: { value: '1' } });
// const option2 = createElement({ tag: 'option', text: '2', parent: selectTemplate, classes: ['template'], attributes: { value: '2' } });
// const option3 = createElement({ tag: 'option', text: '3', parent: selectTemplate, classes: ['template'], attributes: { value: '3' } });
// const option4 = createElement({ tag: 'option', text: '4', parent: selectTemplate, classes: ['template'], attributes: { value: '4' } });
// const option5 = createElement({ tag: 'option', text: '5', parent: selectTemplate, classes: ['template'], attributes: { value: '5' } });

//buttonsBox
// const buttonsBox = createElement({ tag: 'div', parent: wrapper, classes: ['btn__box'] });
// const resetBtn = createElement({ tag: 'button', text: 'Reset', parent: buttonsBox, classes: ['btn'] });
// const saveGameBtn = createElement({ tag: 'button', text: 'Save game', parent: buttonsBox, classes: ['btn'] });
// const continueBtn = createElement({ tag: 'button', text: 'Continue last game', parent: buttonsBox, classes: ['btn'] });
// const randomGameBtn = createElement({ tag: 'button', text: 'Random game', parent: buttonsBox, classes: ['btn'] });

//field




//timer
export const timerBox = createElement({ tag: 'div', parent: wrapper, classes: ['timerBox'] });
// const minutes = createElement({ tag: 'div',text: '00', parent: timer, classes: ['minutes'] });
// const separator = createElement({ tag: 'div',text: ':', parent: timer, classes: ['timer__separator'] });
// const seconds = createElement({ tag: 'div',text: '00', parent: timer, classes: ['seconds'] });
