/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

let list = document.querySelector('div#phrase ul');
let createLi = document.createElement('li');

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }


    addPhraseToDisplay() {
        let phraseLength = this.phrase.length;
        // let phraseLength = [...phrase].map(letter => {
        //     if(/^[a-z]+$/.test(phraseLength)) {
        //     list.createElement('li.letter')
        //     } else if () {}
        // });

        for (let i=0; i < phraseLength; i++) {
           if (/[a-z]/i.test(this.phrase.charAt(i))) {
            list.appendChild(createLi).classList.add(`hide_letter_${this.phrase.charAt(i)}`);
            
        }  else if (/\s/.test(this.phrase.charAt(i))) {
            list.appendChild(createLi).classList.add('space');
        } else {
            alert('you have no idea what is going on do you');
        }
        
    
         };
         console.log(phraseLength);
    }

    checkLetter() {
        //text here
    }

    showMatchedLetter() {
        //text here
    }
}
const test = new Phrase('How does thIs work');

test.addPhraseToDisplay();

//list.appendChild(createLi);