import { theme } from "./createElements";

let root = document.querySelector(':root');

const themes = {
    default: {
        '--wrapper-bg-color': '#ffffff',
        '--main-color': '#ed0000',
        '--font-color': '#41403e',
        '--body-bg-color': '#ffffff',
        '--body-bg-lines-color': 'd6d6d60',
        '--btn-bg-color': '#ffffff',
        '--btn-text-color': '#41403e',
    },
    dark: {
        '--wrapper-bg-color': '#1d1d1d',
        '--main-color': '#5e0101',
        '--font-color': '#d4d3d3',
        '--body-bg-color': '#2a2a2a',
        '--body-bg-lines-color': ' #393939',
        '--btn-bg-color': '#9c9b9b',
        '--btn-text-color': '#41403e',
    }
}

let isDarkTheme;

const changeTheme = () => {
    const theme = 'dark';
    Object.entries(themes[theme]).forEach(([key, value]) => {
        root.style.setProperty(key, value);
    })
}


theme.addEventListener(('click'), (event) => {
    console.log('hi');
    changeTheme();
});



