export const removeChildren = (container) => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}