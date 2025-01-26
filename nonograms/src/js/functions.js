import { nonograms } from "./nonograms";

export const getRandomNumber = (array) => {
    const number = array.length;
    let randomIdx = Math.floor(Math.random() * number);
    return randomIdx;
}

export const checkArrays = (arrSolution, arrUser, result) => {
    for (let i = 0; i < arrSolution.length; i++) {
        if (arrSolution[i] === arrUser[i]) {
            result = true;
        } else {
            result = false;
        }
    }
    return result;
}

