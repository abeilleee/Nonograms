import { nonograms } from "./nonograms";
import { checkArrays } from "./functions";
import { ModalWindow } from "./modalWindow";
import { modal } from "./app";
import { results } from "./app";

export let checkSolution = (puzzle) => {
    const cells = document.querySelectorAll('.cell'); //все ячейки на поле
    const solution = puzzle.puzzle.flat(); // массив с решением (одномерный)
    const filledCellsAmount = solution.filter((elem) => elem > 0).length; //amount of '1';

    const cellsFilled = document.querySelectorAll('.cell--clicked'); //закрашенные пользователем ячейки
    const userSolution = [];
    let result;
    //
    cells.forEach((elem) => {
        elem.classList.contains('cell--clicked') ? userSolution.push(1) : userSolution.push(0);
    });

    //если количество закрашенных ячеек равно количеству 'единиц в решении'
    if (cellsFilled.length === filledCellsAmount) {
        result = checkArrays(solution, userSolution);
        if (result === true) {
            modal.viewModal();
            results.saveResult();
        }
    }
    // console.log('cellsFilled: ' + cellsFilled.length);
    // console.log('filledCellsAmount: ' + filledCellsAmount);

    // console.log('solution: ' + solution);
    // console.log('userSolution: ' + userSolution);d
    // console.log('RESULT: ' + result);
}

