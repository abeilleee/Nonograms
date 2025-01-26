import { nonograms } from "./nonograms";
import { checkArrays } from "./functions";

export class Solution {
    constructor() {

    }

    showSolution() {

    }

    checkSolution(puzzle) {        
        const cells = document.querySelectorAll('.cell'); //все ячейки на поле
        const solution = puzzle.puzzle.flat(); // удалить поменять на универсальный аргумент, массив с решением (одномерный)
        const filledCellsAmount = solution.filter((elem) => elem > 0).length; //amount of '1';
        
        const cellsFilled = document.querySelectorAll('.cell--clicked'); //закрашенные пользователем ячейки
        const userSolution = []; //массив пользователя
        let result
        //
        cells.forEach((elem) => {
            elem.classList.contains('cell--clicked') ? userSolution.push(1) : userSolution.push(0);
        });
        
        //если количество закрашенных ячеек равно количеству 'единиц в решении'
        if (cellsFilled.length === filledCellsAmount) {
            result = checkArrays(solution, userSolution);
        }       
        console.log('cellsFilled: '+cellsFilled.length);
        console.log('filledCellsAmount: '+filledCellsAmount);

        console.log('solution: '+solution);
        console.log('userSolution: '+userSolution);
        console.log('RESULT: ' + result);
    }
}



