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
        let phraseLength = phrase.length;
        // let phraseLength = [...phrase].map(letter => {
        //     if(/^[a-z]+$/.test(phraseLength)) {
        //     list.createElement('li.letter')
        //     } else if () {}
        // });

        for (let i=0; i < phraseLength; i++) {
           if (/^[a-z]+$/.test(phrase.charAt(i))) {
            list.appendChild(createLi);
            //li.classList.add(`hide letter at ${phrase.charAt(i)}`);
            
        }  else if (/\s/.test(phrase.charAt(i))) {
            list.appendChild('li.space');
        } else {
            alert('you have no idea what is going on do you');
        }
        
    
         };
    }

    checkLetter() {
        //text here
    }

    showMatchedLetter() {
        //text here
    }
}
const test = new Phrase('How does thIs work');
console.log(test.phrase);
console.log(list);
test.addPhraseToDisplay();

list.appendChild(createLi);