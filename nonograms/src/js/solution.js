import { nonograms } from "./nonograms";
import { checkArrays } from "./functions";

export class Solution {
    constructor() {

    }

    showSolution() {

    }

    checkSolution(puzzle) {
        const solution = puzzle.puzzle.flat(); // удалить поменять на универсальный аргумент
        const filledCellsAmount = solution.filter((elem) => elem > 0).length; //amount of '1';

        const cells = document.querySelectorAll('.cell'); //все ячейки
        const cellsFilled = document.querySelectorAll('.cell--clicked'); //закрашенные ячейки
        const userSolution = []; //массив пользователя
        let result = false;


        cells.forEach((elem) => {
            elem.classList.contains('cell--clicked') ? userSolution.push(1) : userSolution.push(0);
        });
        
        if (cellsFilled.length === filledCellsAmount) {
            checkArrays(solution, userSolution, result);
        }       
        console.log('userSolution: '+userSolution);
        console.log('solution: '+solution);
        console.log('result: '+result);
    }
}



