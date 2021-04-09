/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

const overlay = document.querySelector('overlay');

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('Tale as old as time'),
            new Phrase('True as it can be'),
            new Phrase('Bittersweet and strange'),
            new Phrase('Finding you can change'),
            new Phrase('Learning you were wrong')
        ];
        this.activePhrase = null;
    }

    startgame() {
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase() {
        let randNum = Math.floor(Math.random() * this.phrases.length);
        let randPhrase = this.phrases[randNum];
        return randPhrase;
    }

    handlInteraction()
    removeLife()
    checkForWin()
    gameOver()
};