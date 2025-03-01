import { GameField } from "./createGameField";
import { Timer } from "./timer";
import { Buttons } from "./buttons";
import { nonograms } from "./nonograms";
import { TemplateList } from "./templatesList";
import { Levels } from "./levels";
import { RandomGame } from "./randomGameBtn";
import { ModalWindow } from "./modalWindow";
import { Sounds } from "./sounds";
import { soundBtn, table } from "./createElements";
import { isDarkTheme } from "./theme";
import { changeColorSoundSwitcher } from "./theme";
import { Result } from "./results";
import { Score } from "./score";

export const timer = new Timer();
timer.initTimer();

//levels
export let levels = new Levels();
levels.levelsBox.addEventListener(('click'), (event) => {
    let target = event.target;
    levels.selectLevel(target);
});

//results
export let results = new Result();

let resultsList = results.getResults();
export let hasSavedGame = results.hasSavedGame;

//buttons
export const buttons = new Buttons();
buttons.resetBtn.addEventListener(('click'), (event) => {
    buttons.reset();
    buttons.saveGameBtn.classList.add('disabledBtn');
    buttons.solutionBtn.classList.remove('selected');
    buttons.solutionBtn.classList.remove('disabledBtn');
    if (hasSavedGame === true) {
        buttons.continueBtn.classList.remove('disabledBtn');
    }
    gameField.field.classList.remove('disabled');
});

buttons.solutionBtn.addEventListener(('click'), (event) => {
    let target = event.target;
    buttons.showSolution(target);
    timer.stop();
    timer.initTimer();
    if (hasSavedGame === true) {
        buttons.continueBtn.classList.remove('disabledBtn');
    }
});

buttons.saveGameBtn.addEventListener(('click'), (event) => {
    results.saveGame();
    buttons.saveGameBtn.classList.add('disabledBtn');
    hasSavedGame = true;
    buttons.continueBtn.classList.add('disabledBtn');
});

buttons.continueBtn.addEventListener(('click'), (event) => {
    buttons.continueLastGame();
})

//sounds
export const sounds = new Sounds();
export let soundDisabled = JSON.parse(localStorage.getItem('abeilleee_soundDisabled'));
if (!localStorage.getItem('abeilleee_soundDisabled')) {
    localStorage.setItem('abeilleee_soundDisabled', false);
}
changeColorSoundSwitcher();

soundBtn.addEventListener(('click'), (event) => {
    soundDisabled = !soundDisabled;
    localStorage.setItem('abeilleee_soundDisabled', soundDisabled);
    const soundColorOn = isDarkTheme ? 'url(assets/images/soundOnLight.svg)' : 'url(assets/images/soundOnDark.svg)';
    const soundColorOff = isDarkTheme ? 'url(assets/images/soundOffLight.svg)' : 'url(assets/images/soundOffDark.svg)';
    soundDisabled ? soundBtn.style.background = soundColorOff
        : soundBtn.style.background = soundColorOn;
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

//modal
export const modal = new ModalWindow();
modal.modalCloseBtn.addEventListener(('click'), (event) => {
    modal.closeModal();
});





//score btn
let scoreTable = new Score();
table.addEventListener(('click'), (event) => {
    results.getResults();
    scoreTable.viewScore();
})
scoreTable.closeTableBtn.addEventListener(('click'), (event) => {
    document.body.classList.remove('hidden');
    scoreTable.scoreWrapper.classList.remove('open');
});