/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://abeilleee-jsfe2024q4/./src/sass/style.scss?");

/***/ }),

/***/ "./src/assets/audio sync recursive ^\\.\\/.*$":
/*!*****************************************!*\
  !*** ./src/assets/audio/ sync ^\.\/.*$ ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./click.mp3\": \"./src/assets/audio/click.mp3\",\n\t\"./cross.mp3\": \"./src/assets/audio/cross.mp3\",\n\t\"./erase.mp3\": \"./src/assets/audio/erase.mp3\",\n\t\"./win.mp3\": \"./src/assets/audio/win.mp3\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/assets/audio sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack://abeilleee-jsfe2024q4/./src/assets/audio/_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./src/assets/images sync recursive ^\\.\\/.*$":
/*!******************************************!*\
  !*** ./src/assets/images/ sync ^\.\/.*$ ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./cross.svg\": \"./src/assets/images/cross.svg\",\n\t\"./fav_icon.svg\": \"./src/assets/images/fav_icon.svg\",\n\t\"./moon.svg\": \"./src/assets/images/moon.svg\",\n\t\"./soundOffDark.svg\": \"./src/assets/images/soundOffDark.svg\",\n\t\"./soundOffLight.svg\": \"./src/assets/images/soundOffLight.svg\",\n\t\"./soundOnDark.svg\": \"./src/assets/images/soundOnDark.svg\",\n\t\"./soundOnLight.svg\": \"./src/assets/images/soundOnLight.svg\",\n\t\"./sun.svg\": \"./src/assets/images/sun.svg\",\n\t\"./table.svg\": \"./src/assets/images/table.svg\",\n\t\"./tableDark.svg\": \"./src/assets/images/tableDark.svg\",\n\t\"./tableLight.svg\": \"./src/assets/images/tableLight.svg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/assets/images sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack://abeilleee-jsfe2024q4/./src/assets/images/_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buttons: () => (/* binding */ buttons),\n/* harmony export */   gameField: () => (/* binding */ gameField),\n/* harmony export */   hasSavedGame: () => (/* binding */ hasSavedGame),\n/* harmony export */   levels: () => (/* binding */ levels),\n/* harmony export */   modal: () => (/* binding */ modal),\n/* harmony export */   randomBtn: () => (/* binding */ randomBtn),\n/* harmony export */   results: () => (/* binding */ results),\n/* harmony export */   soundDisabled: () => (/* binding */ soundDisabled),\n/* harmony export */   sounds: () => (/* binding */ sounds),\n/* harmony export */   template: () => (/* binding */ template),\n/* harmony export */   timer: () => (/* binding */ timer)\n/* harmony export */ });\n/* harmony import */ var _createGameField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createGameField */ \"./src/js/createGameField.js\");\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer */ \"./src/js/timer.js\");\n/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons */ \"./src/js/buttons.js\");\n/* harmony import */ var _nonograms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonograms */ \"./src/js/nonograms.js\");\n/* harmony import */ var _templatesList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templatesList */ \"./src/js/templatesList.js\");\n/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./levels */ \"./src/js/levels.js\");\n/* harmony import */ var _randomGameBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./randomGameBtn */ \"./src/js/randomGameBtn.js\");\n/* harmony import */ var _modalWindow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modalWindow */ \"./src/js/modalWindow.js\");\n/* harmony import */ var _sounds__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sounds */ \"./src/js/sounds.js\");\n/* harmony import */ var _createElements__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./createElements */ \"./src/js/createElements.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./theme */ \"./src/js/theme.js\");\n/* harmony import */ var _results__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./results */ \"./src/js/results.js\");\n/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./score */ \"./src/js/score.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst timer = new _timer__WEBPACK_IMPORTED_MODULE_1__.Timer();\r\ntimer.initTimer();\r\n\r\n//levels\r\nlet levels = new _levels__WEBPACK_IMPORTED_MODULE_5__.Levels();\r\nlevels.levelsBox.addEventListener(('click'), (event) => {\r\n    let target = event.target;\r\n    levels.selectLevel(target);\r\n});\r\n\r\n//results\r\nlet results = new _results__WEBPACK_IMPORTED_MODULE_11__.Result();\r\n\r\nlet resultsList = results.getResults();\r\nlet hasSavedGame = results.hasSavedGame;\r\n\r\n//buttons\r\nconst buttons = new _buttons__WEBPACK_IMPORTED_MODULE_2__.Buttons();\r\nbuttons.resetBtn.addEventListener(('click'), (event) => {\r\n    buttons.reset();\r\n    buttons.saveGameBtn.classList.add('disabledBtn');\r\n    buttons.solutionBtn.classList.remove('selected');\r\n    buttons.solutionBtn.classList.remove('disabledBtn');\r\n    if (hasSavedGame === true) {\r\n        buttons.continueBtn.classList.remove('disabledBtn');\r\n    }\r\n    gameField.field.classList.remove('disabled');\r\n});\r\n\r\nbuttons.solutionBtn.addEventListener(('click'), (event) => {\r\n    let target = event.target;\r\n    buttons.showSolution(target);\r\n    timer.stop();\r\n    timer.initTimer();\r\n    if (hasSavedGame === true) {\r\n        buttons.continueBtn.classList.remove('disabledBtn');\r\n    }\r\n});\r\n\r\nbuttons.saveGameBtn.addEventListener(('click'), (event) => {\r\n    results.saveGame();\r\n    buttons.saveGameBtn.classList.add('disabledBtn');\r\n    hasSavedGame = true;\r\n    buttons.continueBtn.classList.add('disabledBtn');\r\n});\r\n\r\nbuttons.continueBtn.addEventListener(('click'), (event) => {\r\n    buttons.continueLastGame();\r\n})\r\n\r\n//sounds\r\nconst sounds = new _sounds__WEBPACK_IMPORTED_MODULE_8__.Sounds();\r\nlet soundDisabled = JSON.parse(localStorage.getItem('abeilleee_soundDisabled'));\r\nif (!localStorage.getItem('abeilleee_soundDisabled')) {\r\n    localStorage.setItem('abeilleee_soundDisabled', false);\r\n}\r\n(0,_theme__WEBPACK_IMPORTED_MODULE_10__.changeColorSoundSwitcher)();\r\n\r\n_createElements__WEBPACK_IMPORTED_MODULE_9__.soundBtn.addEventListener(('click'), (event) => {\r\n    soundDisabled = !soundDisabled;\r\n    localStorage.setItem('abeilleee_soundDisabled', soundDisabled);\r\n    const soundColorOn = _theme__WEBPACK_IMPORTED_MODULE_10__.isDarkTheme ? 'url(assets/images/soundOnLight.svg)' : 'url(assets/images/soundOnDark.svg)';\r\n    const soundColorOff = _theme__WEBPACK_IMPORTED_MODULE_10__.isDarkTheme ? 'url(assets/images/soundOffLight.svg)' : 'url(assets/images/soundOffDark.svg)';\r\n    soundDisabled ? _createElements__WEBPACK_IMPORTED_MODULE_9__.soundBtn.style.background = soundColorOff\r\n        : _createElements__WEBPACK_IMPORTED_MODULE_9__.soundBtn.style.background = soundColorOn;\r\n});\r\n\r\n//choose template\r\nlet template = new _templatesList__WEBPACK_IMPORTED_MODULE_4__.TemplateList();\r\ntemplate.fillList('easy');\r\n\r\n//random game\r\nconst randomBtn = new _randomGameBtn__WEBPACK_IMPORTED_MODULE_6__.RandomGame();\r\nrandomBtn.randomGameBtn.addEventListener(('click'), (event) => {\r\n    randomBtn.getRandomGame();\r\n});\r\n\r\n//field game\r\nconst gameField = new _createGameField__WEBPACK_IMPORTED_MODULE_0__.GameField();\r\nlet puzzle = _nonograms__WEBPACK_IMPORTED_MODULE_3__.nonograms[0];\r\ngameField.createTopClues(puzzle);\r\ngameField.createLeftClues(puzzle);\r\ngameField.createFieldGame(puzzle);\r\ngameField.fillClues(puzzle);\r\n\r\n//modal\r\nconst modal = new _modalWindow__WEBPACK_IMPORTED_MODULE_7__.ModalWindow();\r\nmodal.modalCloseBtn.addEventListener(('click'), (event) => {\r\n    modal.closeModal();\r\n});\r\n\r\n\r\n\r\n\r\n\r\n//score btn\r\nlet scoreTable = new _score__WEBPACK_IMPORTED_MODULE_12__.Score();\r\n_createElements__WEBPACK_IMPORTED_MODULE_9__.table.addEventListener(('click'), (event) => {\r\n    results.getResults();\r\n    scoreTable.viewScore();\r\n})\r\nscoreTable.closeTableBtn.addEventListener(('click'), (event) => {\r\n    document.body.classList.remove('hidden');\r\n    scoreTable.scoreWrapper.classList.remove('open');\r\n});\n\n//# sourceURL=webpack://abeilleee-jsfe2024q4/./src/js/app.js?");

/***/ }),

/***/ "./src/js/buttons.js":
/*!***************************!*\
  !*** ./src/js/buttons.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Buttons: () => (/* binding */ Buttons)\n/* harmony export */ });\n/* harmony import */ var _createElementFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElementFunction */ \"./src/js/createElementFunction.js\");\n/* harmony import */ var _createElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElements */ \"./src/js/createElements.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ \"./src/js/app.js\");\n/* harmony import */ var _nonograms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonograms */ \"./src/js/nonograms.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Buttons {\r\n    constructor() {\r\n        this.buttonsBox = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'div', parent: _createElements__WEBPACK_IMPORTED_MODULE_1__.wrapper, classes: ['btn__box', 'last'] });\r\n        this.resetBtn = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'button', text: 'Reset', parent: this.buttonsBox, classes: ['btn'] });\r\n        this.saveGameBtn = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({\r\n            tag: 'button', text: 'Save game', parent: this.buttonsBox,\r\n            classes: ['btn', 'disabledBtn']\r\n        });\r\n        this.continueBtn = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({\r\n            tag: 'button', text: 'Continue last game', parent: this.buttonsBox,\r\n            classes: ['btn', 'disabledBtn']\r\n        });\r\n        this.solutionBtn = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'button', text: 'Solution', parent: this.buttonsBox, classes: ['btn'] });\r\n    }\r\n\r\n    reset() {\r\n        _app__WEBPACK_IMPORTED_MODULE_2__.timer.stop();\r\n        _app__WEBPACK_IMPORTED_MODULE_2__.timer.initTimer();\r\n        let clickedCells = document.querySelectorAll('.cell--clicked');\r\n        let crossedCells = document.querySelectorAll('.cell--crossed');\r\n        clickedCells.forEach((cell) => {\r\n            cell.classList.remove('cell--clicked');\r\n        })\r\n        crossedCells.forEach((cell) => {\r\n            cell.classList.remove('cell--crossed');\r\n        });\r\n    }\r\n\r\n    showSolution(target) {\r\n        let currentGameId = _app__WEBPACK_IMPORTED_MODULE_2__.gameField.currentGameId;\r\n        _app__WEBPACK_IMPORTED_MODULE_2__.gameField.cleanField();\r\n        if ((target) === this.solutionBtn) {\r\n            this.solutionBtn.classList.add('selected');\r\n            this.saveGameBtn.classList.add('disabledBtn');\r\n            this.continueBtn.classList.add('disabledBtn');\r\n            document.querySelector('.field').classList.add('disabled');\r\n            const solution = _nonograms__WEBPACK_IMPORTED_MODULE_3__.nonograms[currentGameId].puzzle;\r\n            const cells = document.querySelectorAll('.cell'); //все ячейки на поле\r\n            for (let i = 0; i < solution.length; i++) {\r\n                for (let j = 0; j < solution.length; j++) {\r\n                    if (_nonograms__WEBPACK_IMPORTED_MODULE_3__.nonograms[currentGameId].puzzle[i][j] === 1) {\r\n                        let cell1 = document.getElementById(`${i}-${j}`);\r\n                        cell1.classList.add('cell--clicked');\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    continueLastGame() {\r\n        _app__WEBPACK_IMPORTED_MODULE_2__.gameField.cleanField();\r\n        const lastGameOptions = JSON.parse(localStorage.getItem('abeilleee_savedGame'));\r\n        let currentGameId = lastGameOptions[0].id;\r\n        let clickedCells = lastGameOptions[0].filledCells;\r\n        let crossedCells = lastGameOptions[0].crossedCells;\r\n        let level = lastGameOptions[0].level.toLowerCase();\r\n        let time = lastGameOptions[0].time;\r\n        let minutes = time.slice(0, 2);\r\n        let seconds = time.slice(3, 5);\r\n        _app__WEBPACK_IMPORTED_MODULE_2__.levels.selectLevel(currentGameId);\r\n        _app__WEBPACK_IMPORTED_MODULE_2__.timer.setTime(minutes, seconds);\r\n\r\n        _app__WEBPACK_IMPORTED_MODULE_2__.gameField.createTopClues(_nonograms__WEBPACK_IMPORTED_MODULE_3__.nonograms[currentGameId]);\r\n        _app__WEBPACK_IMPORTED_MODULE_2__.gameField.createLeftClues(_nonograms__WEBPACK_IMPORTED_MODULE_3__.nonograms[currentGameId]);\r\n        _app__WEBPACK_IMPORTED_MODULE_2__.gameField.createFieldGame(_nonograms__WEBPACK_IMPORTED_MODULE_3__.nonograms[currentGameId]);\r\n        _app__WEBPACK_IMPORTED_MODULE_2__.gameField.fillClues(_nonograms__WEBPACK_IMPORTED_MODULE_3__.nonograms[currentGameId]);\r\n\r\n        this.continueBtn.classList.add('disabledBtn');\r\n        for (let i = 0; i < clickedCells.length; i++) {\r\n            let id = clickedCells[i];\r\n            document.getElementById(id).classList.add('cell--clicked');\r\n        }\r\n        for (let i = 0; i < crossedCells.length; i++) {\r\n            let id = crossedCells[i];\r\n            document.getElementById(id).classList.add('cell--crossed');\r\n        }\r\n        document.querySelector('.templates__select').value = `${currentGameId}`;\r\n    }\r\n\r\n    removeDisabled() {\r\n        this.resetBtn.classList.remove('disabledBtn');\r\n        if (_app__WEBPACK_IMPORTED_MODULE_2__.hasSavedGame === true) {\r\n            this.continueBtn.classList.remove('disabledBtn');\r\n        }\r\n        this.solutionBtn.classList.remove('disabledBtn');\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://abeilleee-jsfe2024q4/./src/js/buttons.js?");

/***/ }),

/***/ "./src/js/checkSolution.js":
/*!*********************************!*\
  !*** ./src/js/checkSolution.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkSolution: () => (/* binding */ checkSolution)\n/* harmony export */ });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./src/js/functions.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ \"./src/js/app.js\");\n\r\n\r\n\r\n\r\n\r\nlet checkSolution = (puzzle) => {\r\n    const cells = document.querySelectorAll('.cell'); //все ячейки на поле\r\n    const solution = puzzle.puzzle.flat(); // массив с решением (одномерный)\r\n    const filledCellsAmount = solution.filter((elem) => elem > 0).length; //amount of '1';\r\n\r\n    const cellsFilled = document.querySelectorAll('.cell--clicked'); //закрашенные пользователем ячейки\r\n    const userSolution = [];\r\n    let result;\r\n    //\r\n    cells.forEach((elem) => {\r\n        elem.classList.contains('cell--clicked') ? userSolution.push(1) : userSolution.push(0);\r\n    });\r\n\r\n    if (cellsFilled.length === filledCellsAmount) {\r\n        result = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.checkArrays)(solution, userSolution);\r\n        if (result === true) {\r\n            _app__WEBPACK_IMPORTED_MODULE_1__.buttons.saveGameBtn.classList.add('disabledBtn'); \r\n            _app__WEBPACK_IMPORTED_MODULE_1__.modal.viewModal();\r\n            _app__WEBPACK_IMPORTED_MODULE_1__.results.saveResult();\r\n            \r\n        }\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://abeilleee-jsfe2024q4/./src/js/checkSolution.js?");

/***/ }),

/***/ "./src/js/createElementFunction.js":
/*!*****************************************!*\
  !*** ./src/js/createElementFunction.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createElement: () => (/* binding */ createElement)\n/* harmony export */ });\nlet createElement = (options) => {\r\n    const { tag = '', text = '', parent, classes = [], id, removeChildren, attributes = {} } = options;\r\n\r\n    let element = document.createElement(tag);\r\n    element.textContent = text;\r\n\r\n    if (parent != null) {\r\n        if (removeChildren != null) {\r\n            while (parent.firstChild) {\r\n                parent.removeChild(parent.firstChild);\r\n            }\r\n        }\r\n        parent.append(element);\r\n    }\r\n\r\n    if (id === 'true') {\r\n        element.setAttribute('id', `${text}`);\r\n    }\r\n\r\n    if (classes.length > 0) {\r\n        element.classList.add(...classes);\r\n    }\r\n\r\n    for (let attr in attributes) {\r\n        if (attributes.hasOwnProperty(attr)) {\r\n            element.setAttribute(attr, attributes[attr]);\r\n        }\r\n    }\r\n    return element;\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://abeilleee-jsfe2024q4/./src/js/createElementFunction.js?");

/***/ }),

/***/ "./src/js/createElements.js":
/*!**********************************!*\
  !*** ./src/js/createElements.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   iconsBox: () => (/* binding */ iconsBox),\n/* harmony export */   levelsWrapper: () => (/* binding */ levelsWrapper),\n/* harmony export */   rightBox: () => (/* binding */ rightBox),\n/* harmony export */   soundBtn: () => (/* binding */ soundBtn),\n/* harmony export */   table: () => (/* binding */ table),\n/* harmony export */   themeBtn: () => (/* binding */ themeBtn),\n/* harmony export */   timerBox: () => (/* binding */ timerBox),\n/* harmony export */   upperBox: () => (/* binding */ upperBox),\n/* harmony export */   wrapper: () => (/* binding */ wrapper)\n/* harmony export */ });\n/* harmony import */ var _createElementFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElementFunction */ \"./src/js/createElementFunction.js\");\n\r\n\r\n//header\r\nconst header = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'header', parent: document.body, classes: ['header'] });\r\nconst container = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'div', parent: header, classes: ['container'] });\r\nconst title = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'h1', text: 'Nonograms', parent: container, classes: ['header__title'] });\r\n//main\r\nconst main = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'main', parent: document.body, classes: ['main'] });\r\nconst containerMain = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'div', parent: main, classes: ['container'] });\r\nconst wrapper = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'div', parent: containerMain, classes: ['wrapper'] });\r\n//upperBox\r\nconst upperBox = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'div', parent: wrapper, classes: ['upper-box'] });\r\n//levels box\r\nconst levelsWrapper = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'div', parent: upperBox, classes: ['levels__wrapper'] });\r\nconst rightBox = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'div', parent: upperBox, classes: ['right-box'] });\r\nconst iconsBox = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'div', parent: rightBox, classes: ['right-box__icons'] });\r\nconst table = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'div', parent: iconsBox, classes: ['table'] });\r\nconst themeBtn = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'div', parent: iconsBox, classes: ['theme'] });\r\nconst soundBtn = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'div', parent: iconsBox, classes: ['sound'] });\r\n\r\n//timer\r\nconst timerBox = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'div', parent: wrapper, classes: ['timerBox'] });\r\n\n\n//# sourceURL=webpack://abeilleee-jsfe2024q4/./src/js/createElements.js?");

/***/ }),

/***/ "./src/js/createGameField.js":
/*!***********************************!*\
  !*** ./src/js/createGameField.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: () => (/* binding */ GameField)\n/* harmony export */ });\n/* harmony import */ var _createElementFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElementFunction */ \"./src/js/createElementFunction.js\");\n/* harmony import */ var _createElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElements */ \"./src/js/createElements.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ \"./src/js/app.js\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions */ \"./src/js/functions.js\");\n/* harmony import */ var _checkSolution__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkSolution */ \"./src/js/checkSolution.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass GameField {\r\n\r\n    constructor() {\r\n        this.field = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'div', parent: _createElements__WEBPACK_IMPORTED_MODULE_1__.wrapper, classes: ['field'] });\r\n        this.leftClues = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'div', parent: this.field, classes: ['clues', 'clues-left'] });\r\n        this.topClues = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'div', parent: this.field, classes: ['clues', 'clues-top'] });\r\n        this.cellsGrid = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'div', classes: ['field__cells'] });\r\n        this.fieldGame = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'div', parent: this.field, classes: ['field__game'] });\r\n        this.currentGameId;\r\n    }\r\n\r\n    createTopClues(puzzle) {\r\n        let width = puzzle.cluesTop.length;\r\n        let height = puzzle.cluesTop[0].length;\r\n        let clueRowId = 0;\r\n        let clueId = 0;\r\n        (0,_functions__WEBPACK_IMPORTED_MODULE_3__.removeChildren)(this.topClues);\r\n\r\n        for (let i = 0; i < width; i++) {\r\n            let clueRow = ((0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'div', classes: ['clue-row', 'clue-row-top'] }));\r\n            clueRow.setAttribute('id', `clueTop${clueRowId}`)\r\n            this.topClues.appendChild(clueRow);\r\n            for (let j = 0; j < height; j++) {\r\n                let clue = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'div', classes: ['clue', 'clue-top'] });\r\n                clue.setAttribute('id', `clueTop${clueRowId}-${clueId}`)\r\n                if (height === 5) {\r\n                    clue.classList.add('clue--size60');\r\n                }\r\n                clueId++;\r\n                clueRow.appendChild(clue);\r\n            }\r\n            clueRowId++;\r\n            clueId = 0;\r\n\r\n        }\r\n    }\r\n\r\n    createLeftClues(puzzle) {\r\n        let width = puzzle.cluesLeft.length;\r\n        let height = puzzle.cluesLeft[0].length;\r\n        let clueRowId = 0;\r\n        let clueId = 0;\r\n        (0,_functions__WEBPACK_IMPORTED_MODULE_3__.removeChildren)(this.leftClues);\r\n\r\n        for (let i = 0; i < width; i++) {\r\n            let clueRow = ((0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'div', classes: ['clue-row', 'clue-row-left'] }));\r\n            clueRow.setAttribute('id', `clueLeft${clueRowId}`)\r\n            this.leftClues.appendChild(clueRow);\r\n            for (let j = 0; j < height; j++) {\r\n                let clue = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'div', classes: ['clue', 'clue-left'] });\r\n                clue.setAttribute('id', `clueLeft${clueRowId}-${clueId}`)\r\n                if (width === 5) {\r\n                    clue.classList.add('clue--size60');\r\n                }\r\n                clueId++;\r\n                clueRow.appendChild(clue);\r\n            }\r\n            clueRowId++;\r\n            clueId = 0;\r\n        }\r\n    }\r\n\r\n    createFieldGame(puzzle) {\r\n        this.currentGameId = arguments[0].id;\r\n        let width = puzzle.width;\r\n        let height = puzzle.height;\r\n        let rowId = 0;\r\n        let cellId = 0;\r\n        (0,_functions__WEBPACK_IMPORTED_MODULE_3__.removeChildren)(this.fieldGame);\r\n        _app__WEBPACK_IMPORTED_MODULE_2__.buttons.removeDisabled();\r\n        this.field.classList.remove('disabled');\r\n        _app__WEBPACK_IMPORTED_MODULE_2__.buttons.solutionBtn.classList.remove('selected');\r\n\r\n        for (let i = 0; i < width; i++) {\r\n            let row = ((0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'div', classes: ['row'] }));\r\n            row.setAttribute('id', rowId);\r\n            this.fieldGame.appendChild(row);\r\n            for (let j = 0; j < height; j++) {\r\n                let cell = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'div', classes: ['cell'] });\r\n                if (width === 5) {\r\n                    cell.classList.add('cell--size60');\r\n                }\r\n                cell.setAttribute('id', `${rowId}-${cellId}`);\r\n                row.appendChild(cell);\r\n                cellId++;\r\n\r\n                cell.addEventListener(('click'), (event) => {\r\n                    if (event.target === cell) {\r\n                        cell.classList.toggle('cell--clicked');\r\n                        cell.classList.remove('cell--crossed');\r\n                        if (_app__WEBPACK_IMPORTED_MODULE_2__.timer.timerOn === false) {\r\n                            _app__WEBPACK_IMPORTED_MODULE_2__.timer.start();                            \r\n                        }\r\n                        _app__WEBPACK_IMPORTED_MODULE_2__.buttons.saveGameBtn.classList.remove('disabledBtn');\r\n                        if (_app__WEBPACK_IMPORTED_MODULE_2__.hasSavedGame === true) {\r\n                            _app__WEBPACK_IMPORTED_MODULE_2__.buttons.continueBtn.classList.remove('disabledBtn');\r\n                        }\r\n\r\n                    }\r\n                    (0,_checkSolution__WEBPACK_IMPORTED_MODULE_4__.checkSolution)(puzzle);\r\n                    cell.classList.contains('cell--clicked') ? _app__WEBPACK_IMPORTED_MODULE_2__.sounds.playClick() : _app__WEBPACK_IMPORTED_MODULE_2__.sounds.playErase();\r\n\r\n\r\n                });\r\n\r\n                cell.addEventListener(('contextmenu'), (event) => {\r\n                    if (event.target === cell) {\r\n                        event.preventDefault();\r\n                        cell.classList.toggle('cell--crossed');\r\n                        cell.classList.remove('cell--clicked');\r\n\r\n                        if (_app__WEBPACK_IMPORTED_MODULE_2__.timer.timerOn === false) {\r\n                            _app__WEBPACK_IMPORTED_MODULE_2__.timer.start();\r\n                        }\r\n                        _app__WEBPACK_IMPORTED_MODULE_2__.buttons.saveGameBtn.classList.remove('disabledBtn');\r\n                        if (_app__WEBPACK_IMPORTED_MODULE_2__.hasSavedGame === true) {\r\n                            _app__WEBPACK_IMPORTED_MODULE_2__.buttons.continueBtn.classList.remove('disabledBtn');\r\n                        }\r\n                    }\r\n                    (0,_checkSolution__WEBPACK_IMPORTED_MODULE_4__.checkSolution)(puzzle);\r\n                    cell.classList.contains('cell--crossed') ? _app__WEBPACK_IMPORTED_MODULE_2__.sounds.playCross() : _app__WEBPACK_IMPORTED_MODULE_2__.sounds.playErase();\r\n\r\n\r\n                });\r\n\r\n            }\r\n            rowId++;\r\n            cellId = 0;\r\n        }\r\n    }\r\n\r\n    fillClues(puzzle) {\r\n        let arrayTop = puzzle.cluesTop;\r\n        let arrayLeft = puzzle.cluesLeft;\r\n\r\n        for (let i = 0; i < arrayTop.length; i++) {\r\n            for (let j = 0; j < arrayTop[0].length; j++) {\r\n                if (arrayTop[i][j] !== 0) {\r\n                    document.getElementById(`clueTop${i}-${j}`).textContent = arrayTop[i][j];\r\n                }\r\n            }\r\n        }\r\n        for (let i = 0; i < arrayLeft.length; i++) {\r\n            for (let j = 0; j < arrayLeft[0].length; j++) {\r\n                if (arrayLeft[i][j] !== 0) {\r\n                    document.getElementById(`clueLeft${i}-${j}`).textContent = arrayLeft[i][j];\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    cleanField() {\r\n        const cells = document.querySelectorAll('.cell');\r\n        cells.forEach((elem) => elem.classList.remove('cell--clicked'));\r\n        cells.forEach((elem) => elem.classList.remove('cell--crossed'));\r\n    }\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://abeilleee-jsfe2024q4/./src/js/createGameField.js?");

/***/ }),

/***/ "./src/js/functions.js":
/*!*****************************!*\
  !*** ./src/js/functions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkArrays: () => (/* binding */ checkArrays),\n/* harmony export */   getLevelName: () => (/* binding */ getLevelName),\n/* harmony export */   getRandomNumber: () => (/* binding */ getRandomNumber),\n/* harmony export */   removeChildren: () => (/* binding */ removeChildren)\n/* harmony export */ });\nconst getRandomNumber = (array) => {\r\n    const number = array.length;\r\n    let randomIdx = Math.floor(Math.random() * number);\r\n    return randomIdx;\r\n}\r\n\r\nconst checkArrays = (solution, userSolution) => {\r\n    for (let i = 0; i < solution.length; i++) {\r\n        if (solution[i] !== userSolution[i]) {\r\n            return false;\r\n        }\r\n    }\r\n    return true;\r\n}\r\n\r\nconst removeChildren = (container) => {\r\n    while (container.firstChild) {\r\n        container.removeChild(container.firstChild);\r\n    }\r\n}\r\n\r\nconst getLevelName = (id) => {\r\n    let level;\r\n    if (id >= 0 && id <= 4) {\r\n        level = 'Easy';\r\n    } else if (id >= 5 && id <= 9) {\r\n        level = 'Medium';\r\n    } else if (id >= 10 && id <= 14) {\r\n        level = 'Hard';\r\n    }\r\n    return level;\r\n}\r\n\n\n//# sourceURL=webpack://abeilleee-jsfe2024q4/./src/js/functions.js?");

/***/ }),

/***/ "./src/js/levels.js":
/*!**************************!*\
  !*** ./src/js/levels.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Levels: () => (/* binding */ Levels)\n/* harmony export */ });\n/* harmony import */ var _createElementFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElementFunction */ \"./src/js/createElementFunction.js\");\n/* harmony import */ var _createElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElements */ \"./src/js/createElements.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ \"./src/js/app.js\");\n/* harmony import */ var _nonograms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonograms */ \"./src/js/nonograms.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Levels {\r\n    constructor() {\r\n        this.levels = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'div', parent: _createElements__WEBPACK_IMPORTED_MODULE_1__.levelsWrapper, classes: ['levels'] });\r\n        this.levelsTitle = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'div', text: 'Level:', parent: this.levels, classes: ['levels__title'] });\r\n        this.levelsBox = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'div', parent: this.levels, classes: ['levels__box'] });\r\n        this.levelEasy = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({\r\n            tag: 'input',\r\n            parent: this.levelsBox,\r\n            classes: ['radioButton'],\r\n            id: 'easy',\r\n            attributes: { type: 'radio', value: 'easy', name: 'level', id: 'easy', checked: 'true' }\r\n        });\r\n        this.labelEasy = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({\r\n            tag: 'label', text: 'easy', parent: this.levelsBox, classes: ['label', 'selected'], attributes: { for: 'easy' }\r\n        });\r\n        this.levelMedium = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({\r\n            tag: 'input',\r\n            parent: this.levelsBox,\r\n            classes: ['radioButton'],\r\n            id: 'medium',\r\n            attributes: { type: 'radio', value: 'medium', name: 'level', id: 'medium' }\r\n        });\r\n        this.labelMedium = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({\r\n            tag: 'label', text: 'medium', parent: this.levelsBox, classes: ['label'], attributes: { for: 'medium' }\r\n        });\r\n        this.levelHard = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({\r\n            tag: 'input',\r\n            parent: this.levelsBox,\r\n            classes: ['radioButton'],\r\n            id: 'hard',\r\n            attributes: { type: 'radio', value: 'hard', name: 'level', id: 'hard' }\r\n        });\r\n        this.labelHard = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({\r\n            tag: 'label', text: 'hard', parent: this.levelsBox, classes: ['label'], attributes: { for: 'hard' }\r\n        });\r\n    }\r\n\r\n    selectLevel(target) {\r\n        if (target === this.labelEasy || (target >=0 && target <= 4)) {\r\n            this.labelEasy.classList.add('selected');\r\n            this.labelMedium.classList.remove('selected');\r\n            this.labelHard.classList.remove('selected');\r\n            _app__WEBPACK_IMPORTED_MODULE_2__.template.fillList('easy');\r\n            _app__WEBPACK_IMPORTED_MODULE_2__.gameField.createTopClues(_nonograms__WEBPACK_IMPORTED_MODULE_3__.nonograms[0]);\r\n            _app__WEBPACK_IMPORTED_MODULE_2__.gameField.createLeftClues(_nonograms__WEBPACK_IMPORTED_MODULE_3__.nonograms[0]);\r\n            _app__WEBPACK_IMPORTED_MODULE_2__.gameField.createFieldGame(_nonograms__WEBPACK_IMPORTED_MODULE_3__.nonograms[0]);\r\n            _app__WEBPACK_IMPORTED_MODULE_2__.gameField.fillClues(_nonograms__WEBPACK_IMPORTED_MODULE_3__.nonograms[0]);\r\n            _app__WEBPACK_IMPORTED_MODULE_2__.timer.stop();\r\n            _app__WEBPACK_IMPORTED_MODULE_2__.timer.initTimer();\r\n        } else if (target === this.labelMedium || (target >=5 && target <= 9)) {\r\n            this.labelMedium.classList.add('selected');\r\n            this.labelEasy.classList.remove('selected');\r\n            this.labelHard.classList.remove('selected');\r\n            _app__WEBPACK_IMPORTED_MODULE_2__.template.fillList('medium');\r\n            _app__WEBPACK_IMPORTED_MODULE_2__.gameField.createTopClues(_nonograms__WEBPACK_IMPORTED_MODULE_3__.nonograms[5]);\r\n            _app__WEBPACK_IMPORTED_MODULE_2__.gameField.createLeftClues(_nonograms__WEBPACK_IMPORTED_MODULE_3__.nonograms[5]);\r\n            _app__WEBPACK_IMPORTED_MODULE_2__.gameField.createFieldGame(_nonograms__WEBPACK_IMPORTED_MODULE_3__.nonograms[5]);\r\n            _app__WEBPACK_IMPORTED_MODULE_2__.gameField.fillClues(_nonograms__WEBPACK_IMPORTED_MODULE_3__.nonograms[5]);\r\n            _app__WEBPACK_IMPORTED_MODULE_2__.timer.stop();\r\n            _app__WEBPACK_IMPORTED_MODULE_2__.timer.initTimer();\r\n        } else if (target === this.labelHard || (target >=10 && target <= 14)) {\r\n            this.labelHard.classList.add('selected');\r\n            this.labelMedium.classList.remove('selected');\r\n            this.labelEasy.classList.remove('selected');\r\n            _app__WEBPACK_IMPORTED_MODULE_2__.template.fillList('hard');\r\n            _app__WEBPACK_IMPORTED_MODULE_2__.gameField.createTopClues(_nonograms__WEBPACK_IMPORTED_MODULE_3__.nonograms[10]);\r\n            _app__WEBPACK_IMPORTED_MODULE_2__.gameField.createLeftClues(_nonograms__WEBPACK_IMPORTED_MODULE_3__.nonograms[10]);\r\n            _app__WEBPACK_IMPORTED_MODULE_2__.gameField.createFieldGame(_nonograms__WEBPACK_IMPORTED_MODULE_3__.nonograms[10]);\r\n            _app__WEBPACK_IMPORTED_MODULE_2__.gameField.fillClues(_nonograms__WEBPACK_IMPORTED_MODULE_3__.nonograms[10]);\r\n            _app__WEBPACK_IMPORTED_MODULE_2__.timer.stop();\r\n            _app__WEBPACK_IMPORTED_MODULE_2__.timer.initTimer();\r\n        }\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://abeilleee-jsfe2024q4/./src/js/levels.js?");

/***/ }),

/***/ "./src/js/modalWindow.js":
/*!*******************************!*\
  !*** ./src/js/modalWindow.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ModalWindow: () => (/* binding */ ModalWindow)\n/* harmony export */ });\n/* harmony import */ var _createElementFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElementFunction */ \"./src/js/createElementFunction.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ \"./src/js/app.js\");\n\r\n\r\n\r\n\r\n\r\nclass ModalWindow {\r\n    constructor() {\r\n        this.modalWrapper = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'div', parent: document.body, classes: ['modal__wrapper'] });\r\n        this.modal = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'div', parent: this.modalWrapper, classes: ['modal'] });\r\n        this.modalContent = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({\r\n            tag: 'div', text: 'Great! You have solved the nonogram in seconds!',\r\n            parent: this.modal, classes: ['modal__text']\r\n        });\r\n        this.modalCloseBtn = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'button', text: 'Close', parent: this.modal, classes: ['modal__btn', 'btn'] });\r\n    }\r\n\r\n    viewModal() {   \r\n            document.body.classList.add('hidden');\r\n            this.modalWrapper.classList.add('open');\r\n            _app__WEBPACK_IMPORTED_MODULE_1__.timer.stop();\r\n            _app__WEBPACK_IMPORTED_MODULE_1__.sounds.playWin();\r\n            let currentTimeSeconds = _app__WEBPACK_IMPORTED_MODULE_1__.timer.getCurrentTimeSeconds();\r\n            this.modalContent.textContent = `Great! You have solved the nonogram in ${currentTimeSeconds} seconds!`;\r\n            _app__WEBPACK_IMPORTED_MODULE_1__.buttons.solutionBtn.classList.add('disabledBtn');\r\n            document.querySelector('.field').classList.add('disabled');\r\n    }\r\n\r\n    closeModal() {\r\n        document.body.classList.remove('hidden');\r\n        this.modalWrapper.classList.remove('open');\r\n        _app__WEBPACK_IMPORTED_MODULE_1__.sounds.stopPlayWin();\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://abeilleee-jsfe2024q4/./src/js/modalWindow.js?");

/***/ }),

/***/ "./src/js/nonograms.js":
/*!*****************************!*\
  !*** ./src/js/nonograms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   nonograms: () => (/* binding */ nonograms)\n/* harmony export */ });\nconst nonograms = [\r\n    {\r\n        id: 0,\r\n        name: 'Candle',\r\n        width: 5,\r\n        height: 5,\r\n        cluesTop: [[0, 1, 0, 0, 0], [1, 3, 1, 2, 1]],\r\n        cluesLeft: [[0, 1], [0, 0], [0, 1], [1, 2], [0, 4]],\r\n        puzzle: [[0, 1, 0, 0, 0],\r\n        [0, 0, 0, 0, 0],\r\n        [0, 1, 0, 0, 0],\r\n        [0, 1, 0, 1, 1],\r\n        [1, 1, 1, 1, 0]],\r\n    },\r\n    {\r\n        id: 1,\r\n        name: 'Camel',\r\n        width: 5,\r\n        height: 5,\r\n        cluesTop: [[4, 3, 4, 1, 1]],\r\n        cluesLeft: [[0, 1], [3, 1], [0, 4], [1, 1], [1, 1]],\r\n        puzzle: [[0, 1, 0, 0, 0],\r\n        [1, 1, 1, 0, 1],\r\n        [1, 1, 1, 1, 0],\r\n        [1, 0, 1, 0, 0],\r\n        [1, 0, 1, 0, 0]],\r\n    },\r\n    {\r\n        id: 2,\r\n        name: 'Rabbit',\r\n        width: 5,\r\n        height: 5,\r\n        cluesTop: [[0, 1, 1, 0, 2], [1, 3, 3, 4, 1]],\r\n        cluesLeft: [[2], [2], [4], [4], [4]],\r\n        puzzle: [[0, 1, 1, 0, 0],\r\n        [0, 0, 0, 1, 1],\r\n        [0, 1, 1, 1, 1],\r\n        [1, 1, 1, 1, 0],\r\n        [0, 1, 1, 1, 1]],\r\n    },\r\n    {\r\n        id: 3,\r\n        name: 'Clock',\r\n        width: 5,\r\n        height: 5,\r\n        cluesTop: [[0, 0, 0, 1, 0], [0, 1, 3, 1, 0], [3, 1, 1, 1, 3]],\r\n        cluesLeft: [[0, 0, 3], [1, 1, 1], [0, 1, 3], [0, 0, 1], [0, 0, 1]],\r\n        puzzle: [[0, 1, 1, 1, 0],\r\n        [1, 0, 1, 0, 1],\r\n        [1, 0, 1, 1, 1],\r\n        [1, 0, 0, 0, 1],\r\n        [0, 1, 1, 1, 0]],\r\n    },\r\n    {\r\n        id: 4,\r\n        name: 'Cat',\r\n        width: 5,\r\n        height: 5,\r\n        cluesTop: [[0, 0, 0, 0, 3], [3, 3, 5, 4, 1]],\r\n        cluesLeft: [[1, 1], [0, 3], [0, 5], [0, 4], [0, 5]],\r\n        puzzle: [[0, 0, 1, 0, 1],\r\n        [0, 0, 1, 1, 1],\r\n        [1, 1, 1, 1, 1],\r\n        [1, 1, 1, 1, 0],\r\n        [1, 1, 1, 1, 1]],\r\n    },\r\n    {\r\n        id: 5,\r\n        name: 'The cat',\r\n        width: 10,\r\n        height: 10,\r\n        cluesTop: [[0, 0, 0, 0, 2, 0, 0, 0, 0, 0], [0, 4, 1, 0, 1, 0, 0, 1, 0, 0], [1, 3, 5, 9, 3, 4, 4, 3, 1, 3]],\r\n        cluesLeft: [[0, 0, 0, 1, 1], [0, 0, 0, 0, 4], [0, 0, 0, 1, 1], [0, 0, 0, 0, 4], [0, 0, 0, 2, 2], [0, 0, 0, 3, 1], [0, 0, 0, 0, 5],\r\n        [0, 0, 0, 0, 10], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]],\r\n        puzzle: \r\n        [[0, 1, 0, 0, 1, 0, 0, 0, 0, 0],\r\n        [0, 1, 1, 1, 1, 0, 0, 0, 0, 0],\r\n        [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],\r\n        [0, 1, 1, 1, 1, 0, 0, 0, 0, 0],\r\n        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],\r\n        [0, 0, 1, 1, 1, 0, 1, 0, 0, 0],\r\n        [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],\r\n        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],\r\n        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],\r\n        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1]]       \r\n    },\r\n    {\r\n        id: 6,\r\n        name: 'Frog',\r\n        width: 10,\r\n        height: 10,\r\n        cluesTop: [[0, 0, 0, 3, 6, 1, 0, 2, 0, 0], [1, 3, 1, 2, 1, 6, 4, 1, 1, 1]],\r\n        cluesLeft: [[0, 1], [0, 1], [1, 2], [0, 4], [6, 1], [1, 6], [2, 3],\r\n        [0, 1], [0, 3], [0, 1]],\r\n        puzzle: [[0, 0, 0, 0, 0, 1, 0, 0, 0, 0],\r\n        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],\r\n        [0, 0, 0, 0, 1, 0, 1, 1, 0, 0],\r\n        [0, 0, 0, 0, 1, 1, 1, 1, 0, 0],\r\n        [0, 1, 1, 1, 1, 1, 1, 0, 0, 1],\r\n        [0, 1, 0, 1, 1, 1, 1, 1, 1, 0],\r\n        [1, 1, 0, 1, 1, 1, 0, 0, 0, 0],\r\n        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],\r\n        [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],\r\n        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0]]\r\n    },\r\n    {\r\n        id: 7,\r\n        name: 'Eagle',\r\n        width: 10,\r\n        height: 10,\r\n        cluesTop: [[0, 0, 0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 1, 0, 1, 0, 0, 0], [2, 1, 2, 1, 2, 1, 1, 4, 0, 0], [5, 3, 4, 3, 4, 8, 2, 1, 3, 3]],\r\n        cluesLeft: [[0, 0, 5], [0, 3, 1], [0, 1, 5], [0, 2, 3], [0, 1, 3], [1, 2, 1], [1, 1, 2],\r\n        [0, 0, 6], [0, 0, 7], [0, 0, 8]],\r\n        puzzle: [[0, 0, 1, 1, 1, 1, 1, 0, 0, 0],\r\n        [1, 1, 1, 0, 0, 0, 0, 1, 0, 0],\r\n        [1, 0, 0, 0, 1, 1, 1, 1, 1, 0],\r\n        [0, 0, 0, 0, 1, 1, 0, 1, 1, 1],\r\n        [0, 0, 0, 0, 0, 1, 0, 1, 1, 1],\r\n        [1, 0, 0, 0, 0, 1, 1, 0, 0, 1],\r\n        [1, 0, 1, 0, 1, 1, 0, 0, 0, 0],\r\n        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0],\r\n        [1, 1, 1, 1, 1, 1, 1, 0, 0, 0],\r\n        [1, 1, 1, 1, 1, 1, 1, 1, 0, 0]]\r\n    },\r\n    {\r\n        id: 8,\r\n        name: 'Bird',\r\n        width: 10,\r\n        height: 10,\r\n        cluesTop: [[0, 0, 0, 0, 0, 0, 1, 0, 0, 0], [1, 4, 5, 0, 3, 2, 2, 2, 0, 0], [1, 1, 1, 5, 1, 1, 1, 1, 10, 10]],\r\n        cluesLeft: [[0, 0, 4], [0, 0, 3], [0, 2, 2], [3, 1, 2], [0, 6, 2], [0, 5, 2], [0, 3, 2],\r\n        [0, 1, 2], [0, 0, 10], [0, 0, 2]],\r\n        puzzle: [[0, 0, 0, 0, 0, 0, 1, 1, 1, 1],\r\n        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],\r\n        [0, 1, 1, 0, 0, 0, 0, 0, 1, 1],\r\n        [1, 1, 1, 0, 0, 0, 1, 0, 1, 1],\r\n        [0, 1, 1, 1, 1, 1, 1, 0, 1, 1],\r\n        [0, 1, 1, 1, 1, 1, 0, 0, 1, 1],\r\n        [0, 0, 1, 1, 1, 0, 0, 0, 1, 1],\r\n        [0, 0, 0, 1, 0, 0, 0, 0, 1, 1],\r\n        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],\r\n        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1]]\r\n    },\r\n    {\r\n        id: 9,\r\n        name: 'Cup',\r\n        width: 10,\r\n        height: 10,\r\n        cluesTop: [[0, 1, 5, 6, 1, 1, 6, 5, 1, 0], [4, 1, 1, 2, 5, 5, 2, 1, 1, 4]],\r\n        cluesLeft: [[0, 0, 0, 10], [1, 2, 2, 1], [1, 2, 2, 1], [1, 2, 2, 1], [0, 0, 3, 3], [0, 0, 0, 4], [0, 0, 0, 2],\r\n        [0, 0, 0, 2], [0, 0, 0, 4], [0, 0, 0, 6]],\r\n        puzzle: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],\r\n        [1, 0, 1, 1, 0, 0, 1, 1, 0, 1],\r\n        [1, 0, 1, 1, 0, 0, 1, 1, 0, 1],\r\n        [1, 0, 1, 1, 0, 0, 1, 1, 0, 1],\r\n        [0, 1, 1, 1, 0, 0, 1, 1, 1, 0],\r\n        [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],\r\n        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],\r\n        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],\r\n        [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],\r\n        [0, 0, 1, 1, 1, 1, 1, 1, 0, 0]]\r\n    },\r\n    {\r\n        id: 10,\r\n        name: 'Apple',\r\n        width: 15,\r\n        height: 15,\r\n        cluesTop: [[0, 0, 0, 1, 2, 3, 2, 0, 0, 3, 2, 3, 2, 2, 0], [6, 8, 10, 11, 11, 11, 11, 12, 14, 11, 11, 6, 4, 4, 6]],\r\n        cluesLeft: [[3, 2], [3, 3], [0, 5], [0, 2], [0, 11], [0, 13], [12, 2],\r\n        [11, 1], [11, 1], [12, 2], [0, 15], [0, 15], [0, 13], [0, 11], [4, 4]],\r\n        puzzle: [[0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0],\r\n        [0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0],\r\n        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],\r\n        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],\r\n        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],\r\n        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],\r\n        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],\r\n        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],\r\n        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],\r\n        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],\r\n        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],\r\n        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],\r\n        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],\r\n        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],\r\n        [0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0]]\r\n    },\r\n    {\r\n        id: 11,\r\n        name: 'Dinosaur',\r\n        width: 15,\r\n        height: 15,\r\n        cluesTop: [[7, 0, 2, 2, 1, 0, 0, 0, 0, 0, 0, 4, 12, 3, 0], [2, 12, 6, 4, 5, 6, 7, 7, 7, 7, 8, 7, 1, 7, 2]],\r\n        cluesLeft: [[0, 0, 2], [0, 2, 4], [0, 2, 4], [0, 2, 2], [0, 2, 3], [0, 2, 2], [2, 4, 2], [2, 6, 2], [0, 3, 10],\r\n        [0, 0, 14], [0, 0, 14], [0, 0, 12], [0, 0, 11], [0, 3, 2], [0, 2, 3]],\r\n        puzzle: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],\r\n        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],\r\n        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],\r\n        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],\r\n        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],\r\n        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],\r\n        [1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0],\r\n        [1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],\r\n        [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],\r\n        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],\r\n        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],\r\n        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],\r\n        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],\r\n        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],\r\n        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0]],\r\n    },\r\n    {\r\n        id: 12,\r\n        name: 'Sheep',\r\n        width: 15,\r\n        height: 15,\r\n        cluesTop: [[0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 6, 2, 1, 2, 0, 0, 0, 5, 0, 0, 0], [2, 3, 7, 9, 1, 9, 5, 4, 4, 4, 4, 1, 9, 5, 5]],\r\n        cluesLeft: [[0, 0, 3], [0, 1, 1], [2, 1, 1], [0, 2, 2], [0, 0, 3], [0, 0, 5], [0, 0, 14], [0, 0, 13], [0, 0, 13], [0, 0, 12],\r\n        [0, 3, 4], [1, 1, 1], [0, 1, 1], [0, 1, 1], [0, 2, 2]],\r\n        puzzle: [[0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],\r\n        [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],\r\n        [0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],\r\n        [0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],\r\n        [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],\r\n        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],\r\n        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],\r\n        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],\r\n        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],\r\n        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],\r\n        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],\r\n        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],\r\n        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0]],\r\n    },\r\n    {\r\n        id: 13,\r\n        name: 'Boat',\r\n        width: 15,\r\n        height: 15,\r\n        cluesTop: [[1, 1, 1, 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0], [1, 2, 3, 3, 15, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 1]],\r\n        cluesLeft: [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10],\r\n        [15], [1], [14], [12], [10]],\r\n        puzzle: [[0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],\r\n        [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],\r\n        [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],\r\n        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],\r\n        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],\r\n        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],\r\n        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],\r\n        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],\r\n        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],\r\n        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],\r\n        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],\r\n        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0]],\r\n    },\r\n    {\r\n        id: 14,\r\n        name: 'Crab',\r\n        width: 15,\r\n        height: 15,\r\n        cluesTop: [[5, 0, 2, 0, 1, 0, 0, 0, 0, 0, 1, 0, 2, 0, 4], [1, 7, 2, 0, 1, 1, 0, 0, 0, 1, 1, 2, 6, 1], [1, 1, 1, 3, 1, 1, 1, 0, 1, 1, 1, 3, 1, 1, 1], [2, 1, 1, 5, 7, 8, 9, 9, 9, 8, 7, 5, 1, 1, 2]],\r\n        cluesLeft: [[0, 0, 0, 0, 4], [0, 0, 0, 2, 4], [0, 0, 0, 5, 2], [0, 0, 0, 2, 5], [0, 0, 0, 2, 2],\r\n        [2, 1, 3, 1, 2], [0, 0, 2, 5, 2], [0, 0, 3, 7, 3],\r\n        [0, 0, 0, 0, 13], [0, 0, 1, 9, 1], [0, 0, 0, 0, 13], [0, 0, 1, 9, 1], [0, 0, 0, 0, 13], [0, 0, 1, 7, 1], [0, 0, 0, 1, 1]],\r\n        puzzle: [[0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],\r\n        [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],\r\n        [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0],\r\n        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],\r\n        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],\r\n        [1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1],\r\n        [1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1],\r\n        [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],\r\n        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],\r\n        [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],\r\n        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],\r\n        [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],\r\n        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],\r\n        [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],\r\n        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]],\r\n    },\r\n\r\n]\n\n//# sourceURL=webpack://abeilleee-jsfe2024q4/./src/js/nonograms.js?");

/***/ }),

/***/ "./src/js/randomGameBtn.js":
/*!*********************************!*\
  !*** ./src/js/randomGameBtn.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RandomGame: () => (/* binding */ RandomGame)\n/* harmony export */ });\n/* harmony import */ var _createElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElements */ \"./src/js/createElements.js\");\n/* harmony import */ var _createElementFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElementFunction */ \"./src/js/createElementFunction.js\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions */ \"./src/js/functions.js\");\n/* harmony import */ var _nonograms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonograms */ \"./src/js/nonograms.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app */ \"./src/js/app.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass RandomGame {\r\n    constructor() {\r\n        this.randomGameBtn = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_1__.createElement)({ tag: 'button', text: 'Random game', parent: _createElements__WEBPACK_IMPORTED_MODULE_0__.rightBox, classes: ['btn'] });\r\n    }\r\n\r\n    getRandomGame() {\r\n        let randomIdx = (0,_functions__WEBPACK_IMPORTED_MODULE_2__.getRandomNumber)(_nonograms__WEBPACK_IMPORTED_MODULE_3__.nonograms);      \r\n        _app__WEBPACK_IMPORTED_MODULE_4__.levels.selectLevel(randomIdx);\r\n        document.querySelector('.templates__select').value = `${randomIdx}`;\r\n        _app__WEBPACK_IMPORTED_MODULE_4__.gameField.createTopClues(_nonograms__WEBPACK_IMPORTED_MODULE_3__.nonograms[randomIdx]);\r\n        _app__WEBPACK_IMPORTED_MODULE_4__.gameField.createLeftClues(_nonograms__WEBPACK_IMPORTED_MODULE_3__.nonograms[randomIdx]);\r\n        _app__WEBPACK_IMPORTED_MODULE_4__.gameField.createFieldGame(_nonograms__WEBPACK_IMPORTED_MODULE_3__.nonograms[randomIdx]);\r\n        _app__WEBPACK_IMPORTED_MODULE_4__.gameField.fillClues(_nonograms__WEBPACK_IMPORTED_MODULE_3__.nonograms[randomIdx]);\r\n        _app__WEBPACK_IMPORTED_MODULE_4__.timer.stop();\r\n        _app__WEBPACK_IMPORTED_MODULE_4__.timer.initTimer();\r\n    }\r\n}\n\n//# sourceURL=webpack://abeilleee-jsfe2024q4/./src/js/randomGameBtn.js?");

/***/ }),

/***/ "./src/js/results.js":
/*!***************************!*\
  !*** ./src/js/results.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Result: () => (/* binding */ Result)\n/* harmony export */ });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/js/app.js\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ \"./src/js/functions.js\");\n/* harmony import */ var _nonograms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonograms */ \"./src/js/nonograms.js\");\n/* harmony import */ var _createElementFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createElementFunction */ \"./src/js/createElementFunction.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass Result {\r\n    constructor() {\r\n        this.resultsArr;\r\n        this.saveGameMessageWrapper = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_3__.createElement)({\r\n            tag: 'div', parent: document.body,\r\n            classes: ['save-message__wrapper']\r\n        });\r\n        this.saveGameMessageContent = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_3__.createElement)({\r\n            tag: 'div', text: 'Game is saved',\r\n            parent: this.saveGameMessageWrapper, classes: ['save-message']\r\n        });\r\n        this.hasSavedGame =  JSON.parse(localStorage.getItem('abeilleee_savedGame')) ? true : false;\r\n    }\r\n\r\n    saveResult() {\r\n        const results = {\r\n            id: `${_app__WEBPACK_IMPORTED_MODULE_0__.gameField.currentGameId}`,\r\n            template: `${_nonograms__WEBPACK_IMPORTED_MODULE_2__.nonograms[_app__WEBPACK_IMPORTED_MODULE_0__.gameField.currentGameId].name}`,\r\n            level: (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getLevelName)(_app__WEBPACK_IMPORTED_MODULE_0__.gameField.currentGameId),\r\n            // time: `${String(timer.minutes).padStart(2, '0')}:${String(timer.seconds).padStart(2, '0')}`,\r\n            time: _app__WEBPACK_IMPORTED_MODULE_0__.timer.getCurrentTime(),\r\n            seconds: _app__WEBPACK_IMPORTED_MODULE_0__.timer.getCurrentTimeSeconds(),\r\n        };\r\n\r\n        const emptyResultsArr = [];\r\n        this.resultsArr = JSON.parse(localStorage.getItem('abeilleee_results')) || emptyResultsArr;\r\n        this.resultsArr.push(results);\r\n        if (this.resultsArr.length > 5) {\r\n            this.resultsArr.shift();\r\n        }\r\n        localStorage.setItem('abeilleee_results', JSON.stringify(this.resultsArr));\r\n    }\r\n\r\n    getResults() {\r\n        const emptyResultsArr = [];\r\n        const lastResults = JSON.parse(localStorage.getItem('abeilleee_results')) || emptyResultsArr;\r\n        const sortedResults = lastResults.sort((obj1, obj2) => obj1.seconds > obj2.seconds ? 1 : -1);\r\n        return sortedResults;\r\n    }\r\n\r\n    saveGame() {\r\n        let clickedCells = document.querySelectorAll('.cell--clicked');\r\n        let crossedCells = document.querySelectorAll('.cell--crossed');\r\n        let clickedCellsIndexes = [];\r\n        let crossedCellsIndexes = [];\r\n        clickedCells.forEach((elem) => clickedCellsIndexes.push(elem.getAttribute('id')));\r\n        crossedCells.forEach((elem) => crossedCellsIndexes.push(elem.getAttribute('id')));\r\n\r\n        const savedGameOptions = {\r\n            id: `${_app__WEBPACK_IMPORTED_MODULE_0__.gameField.currentGameId}`,\r\n            template: `${_nonograms__WEBPACK_IMPORTED_MODULE_2__.nonograms[_app__WEBPACK_IMPORTED_MODULE_0__.gameField.currentGameId].name}`,\r\n            level: (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getLevelName)(_app__WEBPACK_IMPORTED_MODULE_0__.gameField.currentGameId),\r\n            time: `${String(_app__WEBPACK_IMPORTED_MODULE_0__.timer.minutes).padStart(2, '0')}:${String(_app__WEBPACK_IMPORTED_MODULE_0__.timer.seconds).padStart(2, '0')}`,\r\n            // time: timer.getCurrentTime(),\r\n            filledCells: clickedCellsIndexes,\r\n            crossedCells: crossedCellsIndexes,\r\n        };\r\n        localStorage.removeItem('abeilleee_savedGame');\r\n        const emptyArr = [];\r\n        let savedGame = JSON.parse(localStorage.getItem('abeilleee_savedGame')) || emptyArr;\r\n        savedGame.push(savedGameOptions);\r\n        localStorage.setItem('abeilleee_savedGame', JSON.stringify(savedGame));\r\n        savedGame = [];\r\n        this.saveGameMessageWrapper.classList.add('open');\r\n        setTimeout(() => {\r\n            this.saveGameMessageWrapper.classList.remove('open');\r\n        }, 500);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://abeilleee-jsfe2024q4/./src/js/results.js?");

/***/ }),

/***/ "./src/js/score.js":
/*!*************************!*\
  !*** ./src/js/score.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Score: () => (/* binding */ Score)\n/* harmony export */ });\n/* harmony import */ var _createElementFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElementFunction */ \"./src/js/createElementFunction.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ \"./src/js/app.js\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions */ \"./src/js/functions.js\");\n\r\n\r\n\r\n\r\nclass Score {\r\n    constructor() {\r\n        this.scoreWrapper = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'div', parent: document.body, classes: ['score__wrapper'] });\r\n        this.scoreBox = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'div', parent:  this.scoreWrapper, classes: ['score__box'] });\r\n        this.scoreTable = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'table', parent: this.scoreBox, classes: ['score__table'] });\r\n        this.tableCaption = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'caption', text: 'High score table', parent: this.scoreTable, classes: ['score__table-caption'] });\r\n        this.tableHead = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'thead', parent: this.scoreTable, classes: ['score__table-head'] });\r\n        this.tableHeadRow = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'tr', parent: this.tableHead, classes: ['score__table-row'] });\r\n        this.titleNumber = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'th', text: '№', parent: this.tableHeadRow, classes: ['score__table-title'] });\r\n        this.titleTemplate = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'th', text: 'Template', parent: this.tableHeadRow, classes: ['score__table-title'] });\r\n        this.titleLevel = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'th', text: 'Level', parent: this.tableHeadRow, classes: ['score__table-title'] });\r\n        this.titleTime = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'th', text: 'Time', parent: this.tableHeadRow, classes: ['score__table-title'] });\r\n        this.tableBody = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'tbody', parent: this.scoreTable, classes: ['score__table-body'] });\r\n        this.closeTableBtn = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'button',text: 'Close', parent: this.scoreBox, classes: ['btn'] });\r\n    }\r\n\r\n    viewScore() {\r\n        document.body.classList.add('hidden');\r\n        this.scoreWrapper.classList.add('open');\r\n\r\n        let resultsObj = _app__WEBPACK_IMPORTED_MODULE_1__.results.getResults();\r\n        (0,_functions__WEBPACK_IMPORTED_MODULE_2__.removeChildren)(this.tableBody);\r\n        for (let i = 0; i < resultsObj.length; i++) {\r\n            let tableRow = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'tr', classes: ['score__table-row'] });\r\n            this.tableBody.appendChild(tableRow);\r\n            tableRow.appendChild((0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'td', text: i+1, classes: ['score__table-cell'] }));\r\n            tableRow.appendChild((0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'td', text: `${resultsObj[i].template}`, classes: ['score__table-cell'] }));\r\n            tableRow.appendChild((0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'td', text: `${resultsObj[i].level}`, classes: ['score__table-cell'] }));\r\n            tableRow.appendChild((0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'td', text: `${resultsObj[i].time}`, classes: ['score__table-cell'] }));\r\n        }\r\n\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://abeilleee-jsfe2024q4/./src/js/score.js?");

/***/ }),

/***/ "./src/js/soundFunctions.js":
/*!**********************************!*\
  !*** ./src/js/soundFunctions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clickSound: () => (/* binding */ clickSound),\n/* harmony export */   crossSound: () => (/* binding */ crossSound),\n/* harmony export */   eraseSound: () => (/* binding */ eraseSound)\n/* harmony export */ });\nconst clickSound = (sound) => {\r\n    sound.src = 'assets/audio/click.mp3';\r\n    sound.play();\r\n}\r\n\r\nconst eraseSound = (sound) => {\r\n    sound.src = 'assets/audio/erase.mp3';\r\n    sound.play();\r\n}\r\n\r\nconst crossSound = (sound) => {\r\n    sound.src = 'assets/audio/cross.mp3';\r\n    sound.play();\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://abeilleee-jsfe2024q4/./src/js/soundFunctions.js?");

/***/ }),

/***/ "./src/js/sounds.js":
/*!**************************!*\
  !*** ./src/js/sounds.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Sounds: () => (/* binding */ Sounds)\n/* harmony export */ });\n/* harmony import */ var _soundFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./soundFunctions */ \"./src/js/soundFunctions.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ \"./src/js/app.js\");\n\r\n\r\n\r\nclass Sounds {\r\n\r\n    constructor() {\r\n        this.clickSound = new Audio('assets/audio/click.mp3');\r\n        this.eraseSound = new Audio('assets/audio/erase.mp3');\r\n        this.crossSound = new Audio('assets/audio/cross.mp3');\r\n        this.winSound = new Audio('assets/audio/win.mp3');\r\n        this.soundSwitch = true;\r\n    }\r\n\r\n    playClick() {\r\n        if (!_app__WEBPACK_IMPORTED_MODULE_1__.soundDisabled) {\r\n            (0,_soundFunctions__WEBPACK_IMPORTED_MODULE_0__.clickSound)(this.clickSound);\r\n        }\r\n    }\r\n\r\n    playErase() {\r\n        if (!_app__WEBPACK_IMPORTED_MODULE_1__.soundDisabled) {\r\n            (0,_soundFunctions__WEBPACK_IMPORTED_MODULE_0__.eraseSound)(this.eraseSound);\r\n        }\r\n    }\r\n\r\n    playCross() {\r\n        if (!_app__WEBPACK_IMPORTED_MODULE_1__.soundDisabled) {\r\n            (0,_soundFunctions__WEBPACK_IMPORTED_MODULE_0__.crossSound)(this.crossSound);\r\n        }\r\n    }\r\n\r\n    playWin() {\r\n        if (!_app__WEBPACK_IMPORTED_MODULE_1__.soundDisabled) {\r\n            this.winSound.play();\r\n        }\r\n    }\r\n\r\n    stopPlayWin() {\r\n        this.winSound.pause();\r\n        this.winSound.currentTime = 0;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://abeilleee-jsfe2024q4/./src/js/sounds.js?");

/***/ }),

/***/ "./src/js/templatesList.js":
/*!*********************************!*\
  !*** ./src/js/templatesList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TemplateList: () => (/* binding */ TemplateList)\n/* harmony export */ });\n/* harmony import */ var _createElementFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElementFunction */ \"./src/js/createElementFunction.js\");\n/* harmony import */ var _createElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElements */ \"./src/js/createElements.js\");\n/* harmony import */ var _nonograms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonograms */ \"./src/js/nonograms.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app */ \"./src/js/app.js\");\n\r\n\r\n\r\n\r\n\r\nclass TemplateList {\r\n    constructor() {\r\n        this.templates = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'div', parent: _createElements__WEBPACK_IMPORTED_MODULE_1__.levelsWrapper, classes: ['templates'] });\r\n        this.templateLabel = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({\r\n            tag: 'label', text: 'Templates:', parent: this.templates, classes: ['templates__label'], attributes: { for: 'templates' }\r\n        });\r\n        this.selectTemplate = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'select', parent: this.templates, classes: ['templates__select'], id: 'templates' });\r\n    }\r\n\r\n    fillList(level) {\r\n        while (this.selectTemplate.firstChild) {\r\n            this.selectTemplate.removeChild(this.selectTemplate.firstChild);\r\n        }\r\n\r\n        if (level === 'easy') {\r\n            for (let i = 0; i < 5; i++) {\r\n                let templateName = _nonograms__WEBPACK_IMPORTED_MODULE_2__.nonograms[i].name;\r\n                let option = ((0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({\r\n                    tag: 'option', text: `${templateName}`,\r\n                    parent: this.selectTemplate, classes: ['template'], attributes: { value: `${i}` }\r\n                }));\r\n                this.selectTemplate.appendChild(option);\r\n            }\r\n        } else if (level === 'medium') {\r\n            for (let i = 5; i < 10; i++) {\r\n                let templateName = _nonograms__WEBPACK_IMPORTED_MODULE_2__.nonograms[i].name;\r\n                let option = ((0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({\r\n                    tag: 'option', text: `${templateName}`,\r\n                    parent: this.selectTemplate, classes: ['template'], attributes: { value: `${i}` }\r\n                }));\r\n                this.selectTemplate.appendChild(option);\r\n            }\r\n\r\n        } else if (level === 'hard') {\r\n            for (let i = 10; i < 15; i++) {\r\n                let templateName = _nonograms__WEBPACK_IMPORTED_MODULE_2__.nonograms[i].name;\r\n                let option = ((0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({\r\n                    tag: 'option', text: `${templateName}`,\r\n                    parent: this.selectTemplate, classes: ['template'], attributes: { value: `${i}` }\r\n                }));\r\n                this.selectTemplate.appendChild(option);\r\n            }\r\n        }\r\n\r\n        this.selectTemplate.addEventListener('change', (event) => {\r\n            let puzzle = _nonograms__WEBPACK_IMPORTED_MODULE_2__.nonograms[event.target.value];\r\n            _app__WEBPACK_IMPORTED_MODULE_3__.gameField.createTopClues(puzzle);\r\n            _app__WEBPACK_IMPORTED_MODULE_3__.gameField.createLeftClues(puzzle);\r\n            _app__WEBPACK_IMPORTED_MODULE_3__.gameField.createFieldGame(puzzle);\r\n            _app__WEBPACK_IMPORTED_MODULE_3__.gameField.fillClues(puzzle);\r\n            _app__WEBPACK_IMPORTED_MODULE_3__.timer.stop();\r\n            _app__WEBPACK_IMPORTED_MODULE_3__.timer.initTimer();\r\n        });\r\n\r\n    }\r\n}\n\n//# sourceURL=webpack://abeilleee-jsfe2024q4/./src/js/templatesList.js?");

/***/ }),

/***/ "./src/js/theme.js":
/*!*************************!*\
  !*** ./src/js/theme.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changeColorSoundSwitcher: () => (/* binding */ changeColorSoundSwitcher),\n/* harmony export */   isDarkTheme: () => (/* binding */ isDarkTheme)\n/* harmony export */ });\n/* harmony import */ var _createElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElements */ \"./src/js/createElements.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ \"./src/js/app.js\");\n\r\n\r\n\r\n\r\nlet root = document.querySelector(':root');\r\nlet tableItem = document.querySelector('.table');\r\n\r\nconst themes = {\r\n    default: {\r\n        '--wrapper-bg-color': '#ffffff',\r\n        '--main-color': '#ed0000',\r\n        '--font-color': '#41403e',\r\n        '--grid-lines-color': '#989898',\r\n        '--body-bg-color': '#ffffff',\r\n        '--body-bg-lines-color': '#d6d6d6',\r\n        '--btn-bg-color': '#ffffff',\r\n        '--btn-text-color': '#41403e',\r\n        '--font-color-modal': '#41403e',\r\n        '--bg-color-modal': '#ffffff',\r\n    },\r\n    dark: {\r\n        '--wrapper-bg-color': '#1d1d1d',\r\n        '--main-color': '#5e0101',\r\n        '--font-color': '#d4d3d3',\r\n        '--grid-lines-color': '#989898',\r\n        '--body-bg-color': '#2a2a2a',\r\n        '--body-bg-lines-color': '#393939',\r\n        '--btn-bg-color': '#717171',\r\n        '--btn-text-color': '#41403e',\r\n        '--font-color-modal': '#d4d3d3',\r\n        '--bg-color-modal': '#282828',\r\n    }\r\n}\r\n\r\nlet isDarkTheme = JSON.parse(localStorage.getItem('abeilleee_isDarkTheme'));\r\n\r\nif (!localStorage.getItem('abeilleee_isDarkTheme')) {\r\n    localStorage.setItem('abeilleee_isDarkTheme', false);\r\n}\r\n\r\nconst changeTheme = () => {\r\n    const theme = isDarkTheme ? 'dark' : 'default';\r\n    const icon = isDarkTheme ? 'url(assets/images/sun.svg)' : 'url(assets/images/moon.svg)';\r\n    const table = isDarkTheme ? 'url(assets/images/tableLight.svg)' : 'url(assets/images/tableDark.svg)';\r\n    _createElements__WEBPACK_IMPORTED_MODULE_0__.themeBtn.style.background = icon;\r\n    tableItem.style.background = table;\r\n\r\n    Object.entries(themes[theme]).forEach(([key, value]) => {\r\n        root.style.setProperty(key, value);\r\n    });\r\n}\r\n\r\nconst themeHadler = (event) => {\r\n    event.preventDefault();\r\n    isDarkTheme = !isDarkTheme;\r\n    localStorage.setItem('abeilleee_isDarkTheme', isDarkTheme);\r\n\r\n    changeTheme(isDarkTheme);\r\n    changeColorSoundSwitcher();\r\n}\r\n\r\nconst changeColorSoundSwitcher = () => {\r\n    const soundColorOn = isDarkTheme ? 'url(assets/images/soundOnLight.svg)' : 'url(assets/images/soundOnDark.svg)';\r\n    const soundColorOff = isDarkTheme ? 'url(assets/images/soundOffLight.svg)' : 'url(assets/images/soundOffDark.svg)';\r\n    _app__WEBPACK_IMPORTED_MODULE_1__.soundDisabled ? _createElements__WEBPACK_IMPORTED_MODULE_0__.soundBtn.style.background = soundColorOff : _createElements__WEBPACK_IMPORTED_MODULE_0__.soundBtn.style.background = soundColorOn;\r\n}\r\n\r\nchangeTheme(isDarkTheme);\r\n_createElements__WEBPACK_IMPORTED_MODULE_0__.themeBtn.addEventListener(('click'), (themeHadler));\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://abeilleee-jsfe2024q4/./src/js/theme.js?");

/***/ }),

/***/ "./src/js/timer.js":
/*!*************************!*\
  !*** ./src/js/timer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Timer: () => (/* binding */ Timer)\n/* harmony export */ });\n/* harmony import */ var _createElementFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElementFunction */ \"./src/js/createElementFunction.js\");\n/* harmony import */ var _createElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElements */ \"./src/js/createElements.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ \"./src/js/app.js\");\n\r\n\r\n\r\n\r\nclass Timer {\r\n    constructor() {\r\n        this.timer = (0,_createElementFunction__WEBPACK_IMPORTED_MODULE_0__.createElement)({ tag: 'div', parent: _createElements__WEBPACK_IMPORTED_MODULE_1__.timerBox, classes: ['timer'] });        \r\n        this.minutes = 0;\r\n        this.seconds = 0;\r\n        this.interval;\r\n        this.currentTime = '00:00';\r\n        this.currentTimeSeconds = 0;\r\n        this.timerOn = false;\r\n    }\r\n\r\n    initTimer() {\r\n        this.timer.textContent = `${String(this.minutes).padStart(2, '0')}:${String(this.seconds).padStart(2, '0')}`;\r\n        this.currentTimeSeconds = 0;\r\n        this.currentTime = '00:00';\r\n    }\r\n\r\n    start() {      \r\n        this.timerOn = true;\r\n        this.interval = setInterval(() => {\r\n            this.seconds++;     \r\n            if (this.seconds >= 60) {\r\n                this.minutes++;\r\n                this.seconds = 0;\r\n            }\r\n            this.initTimer(); \r\n            this.currentTime = this.timer.textContent;\r\n            this.currentTimeSeconds = +`${this.minutes*60 +this.seconds }`;\r\n        }, 1000);   \r\n    }  \r\n\r\n    stop() {\r\n        clearInterval(this.interval);\r\n        this.timerOn = false;     \r\n        this.minutes = 0;\r\n        this.seconds = 0;   \r\n        _app__WEBPACK_IMPORTED_MODULE_2__.buttons.saveGameBtn.classList.add('disabledBtn');\r\n    }\r\n\r\n    setTime(minutes, seconds) {\r\n        this.minutes = minutes;\r\n        this.seconds = seconds;\r\n        this.timer.textContent = `${String(this.minutes).padStart(2, '0')}:${String(this.seconds).padStart(2, '0')}`;\r\n        this.currentTime = this.timer.textContent;\r\n        this.currentTimeSeconds = +`${this.minutes*60 +this.seconds }`;\r\n    }\r\n\r\n    getCurrentTime() {\r\n        return this.currentTime;\r\n    }\r\n\r\n    getCurrentTimeSeconds() {\r\n        return this.currentTimeSeconds;\r\n    }\r\n}\n\n//# sourceURL=webpack://abeilleee-jsfe2024q4/./src/js/timer.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app */ \"./src/js/app.js\");\n/* harmony import */ var _js_createElementFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/createElementFunction */ \"./src/js/createElementFunction.js\");\n/* harmony import */ var _js_createElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/createElements */ \"./src/js/createElements.js\");\n/* harmony import */ var _js_createGameField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/createGameField */ \"./src/js/createGameField.js\");\n/* harmony import */ var _js_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/timer */ \"./src/js/timer.js\");\n/* harmony import */ var _js_nonograms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/nonograms */ \"./src/js/nonograms.js\");\n/* harmony import */ var _js_levels__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/levels */ \"./src/js/levels.js\");\n/* harmony import */ var _js_templatesList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/templatesList */ \"./src/js/templatesList.js\");\n/* harmony import */ var _js_randomGameBtn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/randomGameBtn */ \"./src/js/randomGameBtn.js\");\n/* harmony import */ var _js_modalWindow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/modalWindow */ \"./src/js/modalWindow.js\");\n/* harmony import */ var _js_sounds__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/sounds */ \"./src/js/sounds.js\");\n/* harmony import */ var _js_functions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./js/functions */ \"./src/js/functions.js\");\n/* harmony import */ var _js_checkSolution__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./js/checkSolution */ \"./src/js/checkSolution.js\");\n/* harmony import */ var _js_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./js/theme */ \"./src/js/theme.js\");\n/* harmony import */ var _js_score__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./js/score */ \"./src/js/score.js\");\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sass/style.scss */ \"./src/sass/style.scss\");\n__webpack_require__(\"./src/assets/images sync recursive ^\\\\.\\\\/.*$\");\r\n__webpack_require__(\"./src/assets/audio sync recursive ^\\\\.\\\\/.*$\");\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://abeilleee-jsfe2024q4/./src/script.js?");

/***/ }),

/***/ "./src/assets/audio/click.mp3":
/*!************************************!*\
  !*** ./src/assets/audio/click.mp3 ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/click.mp3\";\n\n//# sourceURL=webpack://abeilleee-jsfe2024q4/./src/assets/audio/click.mp3?");

/***/ }),

/***/ "./src/assets/audio/cross.mp3":
/*!************************************!*\
  !*** ./src/assets/audio/cross.mp3 ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/cross.mp3\";\n\n//# sourceURL=webpack://abeilleee-jsfe2024q4/./src/assets/audio/cross.mp3?");

/***/ }),

/***/ "./src/assets/audio/erase.mp3":
/*!************************************!*\
  !*** ./src/assets/audio/erase.mp3 ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/erase.mp3\";\n\n//# sourceURL=webpack://abeilleee-jsfe2024q4/./src/assets/audio/erase.mp3?");

/***/ }),

/***/ "./src/assets/audio/win.mp3":
/*!**********************************!*\
  !*** ./src/assets/audio/win.mp3 ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/audio/win.mp3\";\n\n//# sourceURL=webpack://abeilleee-jsfe2024q4/./src/assets/audio/win.mp3?");

/***/ }),

/***/ "./src/assets/images/cross.svg":
/*!*************************************!*\
  !*** ./src/assets/images/cross.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/cross.svg\";\n\n//# sourceURL=webpack://abeilleee-jsfe2024q4/./src/assets/images/cross.svg?");

/***/ }),

/***/ "./src/assets/images/fav_icon.svg":
/*!****************************************!*\
  !*** ./src/assets/images/fav_icon.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/fav_icon.svg\";\n\n//# sourceURL=webpack://abeilleee-jsfe2024q4/./src/assets/images/fav_icon.svg?");

/***/ }),

/***/ "./src/assets/images/moon.svg":
/*!************************************!*\
  !*** ./src/assets/images/moon.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/moon.svg\";\n\n//# sourceURL=webpack://abeilleee-jsfe2024q4/./src/assets/images/moon.svg?");

/***/ }),

/***/ "./src/assets/images/soundOffDark.svg":
/*!********************************************!*\
  !*** ./src/assets/images/soundOffDark.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/soundOffDark.svg\";\n\n//# sourceURL=webpack://abeilleee-jsfe2024q4/./src/assets/images/soundOffDark.svg?");

/***/ }),

/***/ "./src/assets/images/soundOffLight.svg":
/*!*********************************************!*\
  !*** ./src/assets/images/soundOffLight.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/soundOffLight.svg\";\n\n//# sourceURL=webpack://abeilleee-jsfe2024q4/./src/assets/images/soundOffLight.svg?");

/***/ }),

/***/ "./src/assets/images/soundOnDark.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/soundOnDark.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/soundOnDark.svg\";\n\n//# sourceURL=webpack://abeilleee-jsfe2024q4/./src/assets/images/soundOnDark.svg?");

/***/ }),

/***/ "./src/assets/images/soundOnLight.svg":
/*!********************************************!*\
  !*** ./src/assets/images/soundOnLight.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/soundOnLight.svg\";\n\n//# sourceURL=webpack://abeilleee-jsfe2024q4/./src/assets/images/soundOnLight.svg?");

/***/ }),

/***/ "./src/assets/images/sun.svg":
/*!***********************************!*\
  !*** ./src/assets/images/sun.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/sun.svg\";\n\n//# sourceURL=webpack://abeilleee-jsfe2024q4/./src/assets/images/sun.svg?");

/***/ }),

/***/ "./src/assets/images/table.svg":
/*!*************************************!*\
  !*** ./src/assets/images/table.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/table.svg\";\n\n//# sourceURL=webpack://abeilleee-jsfe2024q4/./src/assets/images/table.svg?");

/***/ }),

/***/ "./src/assets/images/tableDark.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/tableDark.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/tableDark.svg\";\n\n//# sourceURL=webpack://abeilleee-jsfe2024q4/./src/assets/images/tableDark.svg?");

/***/ }),

/***/ "./src/assets/images/tableLight.svg":
/*!******************************************!*\
  !*** ./src/assets/images/tableLight.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/tableLight.svg\";\n\n//# sourceURL=webpack://abeilleee-jsfe2024q4/./src/assets/images/tableLight.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;