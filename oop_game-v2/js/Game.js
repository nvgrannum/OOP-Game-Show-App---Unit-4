/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

const overlay = document.querySelector('#overlay');
const message = document.querySelector('#game-over-message');
let lives = document.querySelectorAll('li.tries');

// let livesArr = new Array(5);
//     for (let i=0; i<livesArr.length; i++) {
//         livesArr[i] = new Image;
//         livesArr[i].src = 'images/liveHeart.png';
//     }
let scoreboard = document.querySelector('#scoreboard ol');
//scoreboard.innerHTML = livesArr;




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
        if (this.activePhrase.checkLetter(letter)) {
            this.activePhrase.showMatchedLetter(letter);

            if (this.checkForWin()) {
                this.gameOver('win');
            };

        } else {
            this.removeLife();
        }
    };

    removeLife() {
        // let liveHeart = document.querySelector('[src="images/liveHeart.png"]');
        // liveHeart.src = 'images/lostHeart.png';

        this.missed += 1;
        if (this.missed >= 5) {
            this.gameOver('lose');
        }
        
        lives.shift();
        lives.push('images/lostHeart.png');
    };

    checkForWin() {
        let remaining = 0;
        let phraseLi = Array.from(ul.childNodes);
        // for (let i=0; i < this.activePhrase.length; i++) {
        //     if (this.activePhrase[i].className != 'hide') {
        //         return true;
        //     }
        //};
        phraseLi.forEach(li => {               
            if (li.className == 'hide') {
                remaining += 1
            }
            if (remaining === 0) {
                return true;
            }
            
        });
    };

    gameOver(status) {

        if (status === "win") {
            message.innerHTML = "Congratulations! You win!"
            overlay.className = 'win';
            this.reset();
        } else {
            message.innerHTML = "Try again!"
            alert(message.textContent);
            message.style.display = true;
            overlay.className = 'lose';
            this.reset();
        }
    };

    reset() {
        // this.missed = 0;
        // ul.innerHTML = '';
        // livesArr = [
        //     'images/liveHeart.png',
        //     'images/liveHeart.png',
        //     'images/liveHeart.png',
        //     'images/liveHeart.png',
        //     'images/liveHeart.png'
        // ];
        // let shown = document.querySelectorAll('.show');
        // for (let i=0; i<shown.length; i++) {
        //         shown[i].classList.remove('show');
        //         shown[i].classList.add('hide');
        //     }

        //location.reload();
    };

};