import { themeBtn } from "./createElements";

let root = document.querySelector(':root');
let tableItem = document.querySelector('.table');

const themes = {
    default: {
        '--wrapper-bg-color': '#ffffff',
        '--main-color': '#ed0000',
        '--font-color': '#41403e',
        '--body-bg-color': '#ffffff',
        '--body-bg-lines-color': '#d6d6d6',
        '--btn-bg-color': '#ffffff',
        '--btn-text-color': '#41403e',
    },
    dark: {
        '--wrapper-bg-color': '#1d1d1d',
        '--main-color': '#5e0101',
        '--font-color': '#d4d3d3',
        '--body-bg-color': '#2a2a2a',
        '--body-bg-lines-color': '#393939',
        '--btn-bg-color': '#9c9b9b',
        '--btn-text-color': '#41403e',
    }
}

let isDarkTheme = JSON.parse(localStorage.getItem('isDarkTheme'));
changeTheme(isDarkTheme);

if (!localStorage.getItem('isDarkTheme')) {
    localStorage.setItem('isDarkTheme', false);
}

function changeTheme() {
    const theme = isDarkTheme ? 'dark' : 'default';
    const icon = isDarkTheme ? 'url(./dist/assets/sun.svg)' : 'url(./dist/assets/moon.svg)';
    const table = isDarkTheme ? 'url(./dist/assets/tableLight.svg)' : 'url(./dist/assets/tableDark.svg)';
    themeBtn.style.background = icon;
    tableItem.style.background = table;
    Object.entries(themes[theme]).forEach(([key, value]) => {
        root.style.setProperty(key, value);
    })
}

function themeHadler(e) {
    e.preventDefault();
    isDarkTheme = !isDarkTheme;
    localStorage.setItem('isDarkTheme', isDarkTheme);
    
    console.log(isDarkTheme);
    changeTheme(isDarkTheme);
}

themeBtn.addEventListener(('click'), (themeHadler));








