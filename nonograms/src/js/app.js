import { GameField } from "./createGameField";
import { Timer } from "./timer";
import { Buttons } from "./buttons";
import { nonograms } from "./nonograms";
import { TemplateList } from "./templatesList";


export const timer = new Timer();
timer.initTimer();

//choose template
let template = new TemplateList();
template.fillList('medium');
//field game
export const gameField = new GameField();
let puzzle = nonograms[5];
gameField.createTopClues(puzzle);
gameField.createLeftClues(puzzle);
gameField.createFieldGame(puzzle);
gameField.fillClues(puzzle);

const buttons = new Buttons();
buttons.resetBtn.addEventListener(('click'), (buttons.reset));
