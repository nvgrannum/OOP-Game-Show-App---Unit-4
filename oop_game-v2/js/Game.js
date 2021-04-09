/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

const overlay = document.querySelector('#overlay');
const message = document.querySelector('#game-over-message');

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('Tale as old as time'),
            new Phrase('Tune as old as song'),
            new Phrase('Bittersweet and strange'),
            new Phrase('Finding you can change'),
            new Phrase('Learning you were wrong')
        ];
        this.activePhrase = null;
    };

    startGame() {
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };

    getRandomPhrase() {
        let randNum = Math.floor(Math.random() * this.phrases.length);
        let randPhrase = this.phrases[randNum];
        return randPhrase;
    };

    handleInteraction(letter) {
        if (checkLetter(letter)) {
            this.activePhrase.showMatchedLetter(letter);
            letter.classList.add('chosen');

            if (this.checkForWin()) {
                this.gameOver('win');
            };

        } else {
            letter.classList.add('wrong');
            this.removeLife();
        }
    };

    removeLife() {
        missed += 1;
        if (missed >= 5) {
            this.gameOver('lose');
        }
        let lives = querySelectorAll('li.tries');
        let livesArr = Array.from(lives);
        livesArr.shift();
        livesArr.push('images/lostHeart.png');
    };

    checkForWin() {
        for (let i=0; i < this.activePhrase.length; i++) {
            if (this.activePhrase[i].className === 'show') {
                return true;
            }
    }
    };

    gameOver(status) {

        if (status === "win") {
            message.innerHTML = "Congratulations! You win!"
            overlay.classList.add('win');
            this.reset();
        } else {
            message.innerHTML = "Try again!"
            overlay.classList.add('lose');
            this.reset();
        }
    };

    reset() {
        this.missed = 0;
        ul.innerHTML = '';
        livesArr = [
            'images/liveHeart.png',
            'images/liveHeart.png',
            'images/liveHeart.png',
            'images/liveHeart.png',
            'images/liveHeart.png'
        ];
        let shown = document.querySelectorAll('.show');
        for (let i=0; i<shown.length; i++) {
                shown[i].classList.remove('show');
                shown[i].classList.add('hide');
            }
        
    };

};