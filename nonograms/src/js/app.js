import { GameField } from "./createGameField";
import { Timer } from "./timer";
import { Buttons } from "./buttons";


export const timer = new Timer();
timer.initTimer();

const gameField = new GameField();
gameField.createTopClues(2, 5);
gameField.createLeftClues(5, 2);
gameField.createFieldGame(5, 5);

const buttons = new Buttons();
buttons.resetBtn.addEventListener(('click'), (buttons.reset));