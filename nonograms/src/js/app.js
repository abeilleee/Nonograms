import { GameField } from "./createGameField";
import { Timer } from "./timer";
import { Buttons } from "./buttons";
import { nonograms } from "./nonograms";
import { TemplateList } from "./templatesList";
import { Levels } from "./levels";
import { RandomGame } from "./randomGameBtn";
import { Solution } from "./solution";


export const timer = new Timer();
timer.initTimer();

//levels
export let levels = new Levels();

levels.levelsBox.addEventListener(('click'), (event) => {
    let target = event.target;
    levels.selectLevel(target);
});

//choose template
export let template = new TemplateList();
template.fillList('easy');

//random game
export const randomBtn = new RandomGame();

randomBtn.randomGameBtn.addEventListener(('click'), (event) => {
    randomBtn.getRandomGame();
});

//field game
export const gameField = new GameField();
let puzzle = nonograms[0];
gameField.createTopClues(puzzle);
gameField.createLeftClues(puzzle);
gameField.createFieldGame(puzzle);
gameField.fillClues(puzzle);

const buttons = new Buttons();
buttons.resetBtn.addEventListener(('click'), (buttons.reset));


//solution
export let solution = new Solution();

// const root = document.querySelector(':root');
// root.style.setProperty('--wrapper-bg-color', 'black');
