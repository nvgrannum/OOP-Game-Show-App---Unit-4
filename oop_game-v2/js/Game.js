/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

const overlay = document.querySelector('#overlay');
const message = document.querySelector('#game-over-message');
let lives = document.querySelectorAll('li.tries');
let scoreboard = document.querySelector('#scoreboard ol');



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
        let keyboard = document.querySelectorAll('.keyrow button');
            keyboard.forEach(key => {
                key.disabled = false;
                key.classList.remove('wrong');
                key.classList.remove('chosen');
                key.className = 'key'});
    };

    getRandomPhrase() {
        let randNum = Math.floor(Math.random() * this.phrases.length);
        let randPhrase = this.phrases[randNum];
        return randPhrase;
    };

    handleInteraction(letter) {
        letter.disabled = 'true';
        if (this.activePhrase.checkLetter(letter.textContent)) {
            this.activePhrase.showMatchedLetter(letter.textContent);
            letter.classList.add('chosen');

            if (this.checkForWin()) {
                this.gameOver('win');
            };

        } else {
            this.removeLife();
            letter.classList.add('wrong');
        }
    };

    removeLife() {
        let liveHeart = document.querySelector('[src="images/liveHeart.png"]');
        liveHeart.src = 'images/lostHeart.png';

        this.missed += 1;
        if (this.missed >= 5) {
            this.gameOver('lose');
        }
    };

    checkForWin() {
        let remaining = 0;
        let phraseLi = Array.from(ul.childNodes);
       
        phraseLi.forEach(li => {               
            if (li.classList.contains('hide')) {
                remaining += 1
            }   
        });

        if (remaining === 0) {
                return true;
            }
    };

    gameOver(status) {

        if (status === "win") {
            message.innerHTML = "Congratulations! You win!"
            overlay.className = 'win';
            this.reset();
        } else {
            message.innerHTML = "Try again!"
            //message.style.display = true;
            overlay.className = 'lose';
            this.reset();
        }
    };

    reset() {
        let lostHearts = Array.from(document.querySelectorAll('[src="images/lostHeart.png"]'));
            lostHearts.forEach(heart => {heart.src='images/liveHeart.png'});
        // let keyboard = document.querySelectorAll('.keyrow button');
        //     keyboard.forEach(key => {
        //         key.disabled = false;
        //         key.classList.remove('wrong');
        //         key.classList.remove('chosen');
        //         key.className = 'key'});

        this.missed = 0;
        ul.innerHTML = '';
        let shown = document.querySelectorAll('.show');
        // for (let i=0; i<shown.length; i++) {
        //         shown[i].classList.remove('show');
        //         shown[i].classList.add('hide');
        //     }
        overlay.style.display = "block";

    };

};