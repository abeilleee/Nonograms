

export let clickSound = () => {
    const clickSound = new Audio();
    clickSound.src = 'assets/audio/click.mp3';
    clickSound.play();
}

export let eraseSound = () => {
    const eraseSound = new Audio();
    eraseSound.src = 'assets/audio/erase.mp3';
    eraseSound.play();
}


export let crossSound = () => {
    const crossSound = new Audio();
    crossSound.src = 'assets/audio/cross.mp3';
    crossSound.play();
}

export const winSound = new Audio();
winSound.src = 'assets/audio/win.mp3';

export let soundOn = (sound) => {
    sound.play();
}

export let soundOff = (sound) => {
    sound.pause();
    sound.currentTime = 0;    
}

