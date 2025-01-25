import { nonograms } from "./nonograms";

export class Solution {
    constructor() {

    }

    showSolution() {

    }

    checkSolution(puzzle) {
        const solution = nonograms[puzzle].puzzle.flat(); // удалить поменять на универсальный аргумент
        const filledCellsAmount = solution.filter((elem) => elem > 0).length; //amount of '1';

        const cells = document.querySelectorAll('.cell'); //все ячейки
        const cellsFilled = document.querySelectorAll('.cell--clicked'); //закрашенные ячейки
        const userSolution = []; //массив пользователя
        let result = '';

        cells.forEach((elem) => {
            elem.classList.contains('cell--clicked') ? userSolution.push(1) : userSolution.push(0);
        });
        
        if (cellsFilled.length === filledCellsAmount) {
            for (let i = 0; i < solution.length; i++) {
                if (solution[i] === userSolution[i]) {
                    result =true;
                } else {
                    result = false;
                }
            }
        }       
        console.log('userSolution: '+userSolution);
        console.log('solution: '+solution);
        console.log('result: '+result);
    }
}

