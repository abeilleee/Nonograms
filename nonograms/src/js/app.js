import { GameField } from "./createGameField";
import { Timer } from "./timer";
import { Buttons } from "./buttons";


export const timer = new Timer();
timer.initTimer();

const gameField = new GameField();
gameField.createTopClues(2, 15);
gameField.createLeftClues(15, 2);
gameField.createFieldGame(15, 15);

const buttons = new Buttons();