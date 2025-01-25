import { nonograms } from "./nonograms";

export const getRandomNumber = (array) => {
    const number = array.length - 1;
    const randomIdx = Math.floor(Math.random() * number);
    return randomIdx;
}
