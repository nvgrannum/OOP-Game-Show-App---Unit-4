# OOP Game Show App - Unit 4
 
The purpose of this game is a 'hangman' style letter guessing game for a hidden phrase. 
The code has a pre-set list of 5 phrase objects. 
    When the game is started, a random phrase is generated and displayed on the screen. 
The player may either use the keyboard on-screen or the physical one on their computer to guess letters.
If the selected letter is in the phrase, it is revealed in the phrase and the onscreen key changes color. 
    If all letters in the phrase are revealed, the game is won
If the selected letter is not in the phrase, a 'life' is lost and one of the hearts at the bottom of the screen goes away. 
    If there are 5 missed letters, the game is lost.


Changes in CSS from original file:

.header
  font-style: oblique;

.chosen
  background: #88e293;  //light green
  border: 3px solid #248f41; //dark green
  box-shadow: 3px 3px #78CF82; //light green
 
.wrong
  background: #f8b377; //orange
  border: 3px solid #e62121; //red
  
.shown
  background -> #2f86cc //more closely matches heart lives at the bottom
