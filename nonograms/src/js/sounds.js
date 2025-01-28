import { clickSound, eraseSound, crossSound } from "./soundFunctions";
import { soundSwitch } from "./app";

export class Sounds {

    constructor() {
        this.clickSound = new Audio('assets/audio/click.mp3');
        this.eraseSound = new Audio('assets/audio/erase.mp3');
        this.crossSound = new Audio('assets/audio/cross.mp3');
        this.winSound = new Audio('assets/audio/win.mp3');
        this.soundSwitch = true;
    }

    playClick() {
        if (soundSwitch) {
            clickSound(this.clickSound);
        }
    }

    playErase() {
        if (soundSwitch) {
            eraseSound(this.eraseSound);
        }
    }

    playCross() {
        if (soundSwitch) {
            crossSound(this.crossSound);
        }
    }

    playWin() {
        if (soundSwitch) {
            this.winSound.play();
        }
    }

    stopPlayWin() {
        this.winSound.pause();
        this.winSound.currentTime = 0;
    }
}
