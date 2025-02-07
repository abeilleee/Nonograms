export const getRandomNumber = (array) => {
    const number = array.length;
    let randomIdx = Math.floor(Math.random() * number);
    return randomIdx;
}

export const checkArrays = (solution, userSolution) => {
    for (let i = 0; i < solution.length; i++) {
        if (solution[i] !== userSolution[i]) {
            return false;
        }
    }
    return true;
}

export const removeChildren = (container) => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

export const getLevelName = (id) => {
    let level;
    if (id >= 0 && id <= 4) {
        level = 'Easy';
    } else if (id >= 5 && id <= 9) {
        level = 'Medium';
    } else if (id >= 10 && id <= 14) {
        level = 'Hard';
    }
    return level;
}
