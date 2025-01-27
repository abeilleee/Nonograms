import { GameField } from "./createGameField";
import { Timer } from "./timer";
import { Buttons } from "./buttons";
import { nonograms } from "./nonograms";
import { TemplateList } from "./templatesList";
import { Levels } from "./levels";
import { RandomGame } from "./randomGameBtn";
import { ModalWindow } from "./modalWindow";
import { Sounds } from "./sounds";
import { soundBtn } from "./createElements";
import { isDarkTheme } from "./theme";
import { changeColorSoundSwitcher } from "./theme";

export const timer = new Timer();
timer.initTimer();

//levels
export let levels = new Levels();
levels.levelsBox.addEventListener(('click'), (event) => {
    let target = event.target;
    levels.selectLevel(target);
});

//buttons
export const buttons = new Buttons();
buttons.resetBtn.addEventListener(('click'), (event) => {
    buttons.reset();
    buttons.solutionBtn.classList.remove('selected');
    buttons.solutionBtn.classList.remove('disabledBtn');
    buttons.saveGameBtn.classList.remove('disabledBtn');
    buttons.continueBtn.classList.remove('disabledBtn');
    gameField.field.classList.remove('disabled');
});

buttons.solutionBtn.addEventListener(('click'), (event) => {
    let target = event.target;
    buttons.showSolution(target);
    timer.stop();
    timer.initTimer();
});

//sounds
export const sounds = new Sounds();

soundBtn.addEventListener(('click'), (event) => {
    sounds.soundSwitch = !sounds.soundSwitch;
    const soundColorOn = isDarkTheme ? 'url(assets/images/soundOnLight.svg)' : 'url(assets/images/soundOnDark.svg)';
    const soundColorOff = isDarkTheme ? 'url(assets/images/soundOffLight.svg)' : 'url(assets/images/soundOffDark.svg)';
    sounds.soundSwitch ? soundBtn.style.background = soundColorOn
        : soundBtn.style.background = soundColorOff;
    console.log('sound switch: '+sounds.soundSwitch);
    console.log('isDarkTheme: ' + isDarkTheme);
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

changeColorSoundSwitcher();