/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let keyboard = document.querySelector('#qwerty');
let startButton = document.querySelector('#btn__reset');
console.log(startButton);

startButton.addEventListener('click', (e) => {
    let game = new Game;
    game.startGame();
});




keyboard.addEventListener('click', (e) => {
    let key = e.target;
    if (key.tagName === 'BUTTON') {
        handleInteraction(key.textContent);
    }
});

