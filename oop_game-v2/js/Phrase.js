/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

let ul = document.querySelector('div#phrase ul');
let createLi = document.createElement('li');

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

/* 
Takes a spread of the phrase array to make each character its own object.
Tests whether each character is a letter or a space. 
    If it is a letter, it will create a list item with the appropriate hidden class. 
    If it is a space, then there is nothing for the user to guess but will make a space in the phrase on the page.
*/
    addPhraseToDisplay() {
        let phraseLength = this.phrase.length;
    
        [...this.phrase].forEach(character => {
            if (/[a-z]/.test(character)) {
                //ul.appendChild(createLi);
                ul.innerHTML += (`<li class = "hide letter ${character}">${character}</li>`);
                
            } else if (/\s/.test(character)) {
                ul.appendChild(createLi).classList.add('space');
            } 
            });
        };

//Takes the textContent from the user guess buton (letter) from handleInteraction in game.js. 
//If the letter is in the phrase, returns true to handleInteraction and letter is passed to showMatchedLetter.    
    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true;
        }
    }
    
//If checkLetter is true, the letter that is correct has class changed from 'hide' to 'show' so it is revealed to the user on the page.
    showMatchedLetter(letter) {
        let reveal = document.querySelectorAll('#phrase, li');
        for (let i=0; i<reveal.length; i++) {
            if (reveal[i].textContent === letter) {
                reveal[i].classList.add('show');
                reveal[i].classList.remove('hide');
            }
        }
    };
};
