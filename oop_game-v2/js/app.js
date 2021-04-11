/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
let screenKeyboard = document.querySelector('#qwerty');
let startButton = document.querySelector('#btn__reset');



startButton.addEventListener('click', (e) => {
    game = new Game;
    game.startGame();
});


/*
listens for an onscreen button or physical keyboard click and calls that value on the handleInteraction method in game.js
*/

screenKeyboard.addEventListener('click', (e) => {
    let key = e.target;
    if (key.tagName === 'BUTTON') {
        game.handleInteraction(key);
    }
});

document.addEventListener('keydown', (e)=> {
    let keys = Array.from(document.querySelectorAll('.keyrow button'));
    keys.forEach(button => {
        if (e.key === button.textContent && button.disabled === false) {
            game.handleInteraction(button)
        }
    })
})