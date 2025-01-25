import { GameField } from "./createGameField";
import { Timer } from "./timer";
import { Buttons } from "./buttons";
import { nonograms } from "./nonograms";
import { TemplateList } from "./templatesList";
import { Levels } from "./levels";
import { RandomGame } from "./randomGameBtn";


export const timer = new Timer();
timer.initTimer();

//levels
let levels = new Levels();

levels.levelsBox.addEventListener(('click'), (event) => {
    let target = event.target;
    levels.selectLevel(target);
});

//choose template
export let template = new TemplateList();
template.fillList('easy');

//random game
export const randomGameBtn = new RandomGame();
//field game
export const gameField = new GameField();
let puzzle = nonograms[0];
gameField.createTopClues(puzzle);
gameField.createLeftClues(puzzle);
gameField.createFieldGame(puzzle);
gameField.fillClues(puzzle);

const buttons = new Buttons();
buttons.resetBtn.addEventListener(('click'), (buttons.reset));
