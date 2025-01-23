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



