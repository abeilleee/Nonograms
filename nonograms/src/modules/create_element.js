export let createElement = (options) => {
    const { tag = 'div', text = '', parent, classes = [], id, removeChildren } = options;

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

    return element;
}

console.log('HI WORLD!')