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

        // for (let i=0; i < phraseLength; i++) {
        //    if (/[a-z]/i.test(this.phrase.charAt(i))) {
        //     list.appendChild(createLi);
        //     createLi.classList.add(`hide_letter_${this.phrase.charAt(i)}`);
        //     createLi.textContent = this.phrase.charAt(i);
            
        // } else if (/\s/.test(this.phrase.charAt(i))) {
        //     list.appendChild(createLi).classList.add('space');
        // } else {
        //     alert('you have no idea what is going on do you');
        // }
        // };
    
        [...this.phrase].forEach(character => {
            if (/[a-z]/.test(character)) {
                //ul.appendChild(createLi);
                ul.innerHTML += (`<li class = "hide letter ${character}">${character}</li>`);
                
            } else if (/\s/.test(character)) {
                ul.appendChild(createLi).classList.add('space');
            } 
            });
        };
    
    checkLetter() {
        //text here
    }

    showMatchedLetter() {
        //text here
    }
}
const test = new Phrase('How does thIs wOrk');

test.addPhraseToDisplay();
console.log([...test.phrase])
//list.appendChild(createLi);