'use strict';

// Elements
const addOneBtns = document.querySelectorAll('.btnAddOne');
const addTwoBtns = document.querySelectorAll('.btnAddTwo');
const addThreeBtns = document.querySelectorAll('.btnAddThree');
const minusOneBtns = document.querySelectorAll('.btnMinusOne');
const resetBtn = document.querySelector('.resetBtn');
const scores = document.querySelectorAll('.score');
const timeElement = document.querySelector('.time');
let minutes = 10;
let seconds = 0;

// Functions

// Update score
const updateScore = (team, points) => {
  const scoreElement = document.getElementById(`score${team}`);
  let currentScore = parseInt(scoreElement.textContent);
  currentScore += points;
  scoreElement.textContent = currentScore;
};

// Update time
const updateTimeDisplay = () => {
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(
    seconds
  ).padStart(2, '0')}`;
  timeElement.textContent = formattedTime;
};

// Add event listeners
addOneBtns.forEach((btn, index) => {
  btn.addEventListener('click', function () {
    const team = index === 0 ? 'A' : 'B';
    updateScore(team, 1);
  });
});
addTwoBtns.forEach((btn, index) => {
  btn.addEventListener('click', function () {
    const team = index === 0 ? 'A' : 'B';
    updateScore(team, 2);
  });
});
addThreeBtns.forEach((btn, index) => {
  btn.addEventListener('click', function () {
    const team = index === 0 ? 'A' : 'B';
    updateScore(team, 3);
  });
});
minusOneBtns.forEach((btn, index) => {
  btn.addEventListener('click', function () {
    const team = index === 0 ? 'A' : 'B';
    updateScore(team, -1);
  });
});

scores.forEach(score => {
  resetBtn.addEventListener('click', function () {
    score.textContent = 0;
  });
});
