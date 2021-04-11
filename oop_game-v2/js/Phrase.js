/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

let ul = document.querySelector('div#phrase ul');
let createLi = document.createElement('li');

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

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
    
    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true;
        }
    }

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
