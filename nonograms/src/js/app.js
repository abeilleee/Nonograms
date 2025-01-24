import { GameField } from "./createGameField";
import { Timer } from "./timer";
import { Buttons } from "./buttons";
import { nonograms } from "./nonograms";


export const timer = new Timer();
timer.initTimer();

const gameField = new GameField();
//
let puzzle = nonograms[9];


gameField.createTopClues(puzzle);
gameField.createLeftClues(puzzle);

gameField.createFieldGame(puzzle);

gameField.fillClues(puzzle);

const buttons = new Buttons();
buttons.resetBtn.addEventListener(('click'), (buttons.reset));