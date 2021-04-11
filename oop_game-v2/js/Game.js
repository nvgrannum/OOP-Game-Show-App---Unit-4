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
/*
Begins the game and the 'start' screen visibility is set to 'none'. It gets a random phrase (see getRandomPhrase below) and adds that to the display for the game to begin.
*/
    startGame() {
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        let keyboard = document.querySelectorAll('.keyrow button');
            keyboard.forEach(key => {
                key.disabled = false;
                key.className = 'key'});
    };

//Generates a random number from 0 to the length of the phrases array. Takes that number and uses it as the index in the phrases array to get a random phrase from the array.
    getRandomPhrase() {
        let randNum = Math.floor(Math.random() * this.phrases.length);
        let randPhrase = this.phrases[randNum];
        return randPhrase;
    };

// The 'letter' input is the 'key' button from the keyboard eventlistener in the app.js file.
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

//Finds the first instance of a live heart and replaces it with a lost heart. Each time a heart is replaced with a lost heart, the 'first' live heart will be one further down the list.
    removeLife() {
        let liveHeart = document.querySelector('[src="images/liveHeart.png"]');
        liveHeart.src = 'images/lostHeart.png';

        this.missed += 1;
        if (this.missed >= 5) {
            this.gameOver('lose');
        }
    };
//Checks each list element in a created array for a classList that includes 'hide'. If any element is still 'hidden' the game is not won. When all elements have been shown, game is won and win conditions start.
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

//This is it. Win or lose. Which will it be?
    gameOver(status) {

        if (status === "win") {
            message.innerHTML = "Congratulations! You win!"
            overlay.className = 'win';
            this.reset();
        } else {
            message.innerHTML = "Try again!"
            overlay.className = 'lose';
            this.reset();
        }
    };

/*
Resets the keyboard keys and all lives are regained. LI elements in the phrase section are removed for a clean addition of new elements at the start of a new game
*/    
    reset() {
        let lostHearts = Array.from(document.querySelectorAll('[src="images/lostHeart.png"]'));
            lostHearts.forEach(heart => {heart.src='images/liveHeart.png'});
        this.missed = 0;
        ul.innerHTML = '';
        overlay.style.display = "block";

    };

};