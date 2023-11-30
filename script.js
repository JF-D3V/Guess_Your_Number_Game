"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess);

  // When there is no number input
  if (!guess) {
    displayMessage(`No Number`);

    // When input is correct
  } else if (guess === secretNumber) {
    displayMessage(`Correct Number!`);

    let highScore = score;
    document.querySelector(`.highscore`).textContent = highScore;

    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    document.querySelector(`.number`).textContent = secretNumber;

    // When input is not the secret number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `Too High!` : `Too Low`);

      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      displayMessage(`You Lose!`);
      document.querySelector(`.score`).textContent = 0;
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  displayMessage(`Start guessing...`);
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`.score`).textContent = score;
});
