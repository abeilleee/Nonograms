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
export const iconsBox = createElement({ tag: 'div', parent: rightBox, classes: ['right-box__icons'] });
export const table = createElement({ tag: 'div', parent: iconsBox, classes: ['table'] });
export const themeBtn = createElement({ tag: 'div', parent: iconsBox, classes: ['theme'] });
export const soundBtn = createElement({ tag: 'div', parent: iconsBox, classes: ['sound'] });

//timer
export const timerBox = createElement({ tag: 'div', parent: wrapper, classes: ['timerBox'] });
