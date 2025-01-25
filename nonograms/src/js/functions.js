import { nonograms } from "./nonograms";

export const getRandomNumber = (array) => {
    const number = array.length;
    let randomIdx = Math.floor(Math.random() * number);    
    return randomIdx;    
}


