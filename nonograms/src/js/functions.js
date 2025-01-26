import { nonograms } from "./nonograms";

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

