let hangman;

class Hangman {
  constructor() {

    this.words = ["Cheese", "Chef", "School", ""];
    this.secretWord = this.getWord();

  }

  getWord() {

    return this.words[Math.floor(Math.random() * this.words.length)];

  }

  checkIfLetter(keyCode) {

   
  }

  checkClickedLetters(key) {

  }

  addCorrectLetter(i) {

  }

  addWrongLetter(letter) {

  }

  checkGameOver() {

  }

  checkWinner() {

  }

}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = (e) => {

};
