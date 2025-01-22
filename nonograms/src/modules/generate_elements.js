import { createElement } from "./create_element";

const header = createElement({ tag: 'header', parent: document.body, classes: ['header'] });
const container = createElement({ tag: 'div', parent: header, classes: ['container'] });
const title = createElement({ tag: 'h1', text: 'Nonograms', parent: header, classes: ['header__title'] });