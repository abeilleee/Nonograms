import { nonograms } from "./nonograms";

export const getRandomNumber = (array) => {
    const number = array.length - 1;
    let randomIdx = Math.floor(Math.random() * number);    
    return randomIdx;    
}


