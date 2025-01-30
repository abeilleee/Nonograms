import { checkArrays } from "./functions";
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

    if (cellsFilled.length === filledCellsAmount) {
        result = checkArrays(solution, userSolution);
        if (result === true) {
            modal.viewModal();
            results.saveResult();
        }
    }
}

