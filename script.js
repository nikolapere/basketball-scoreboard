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
let intervalId;
const startBtn = document.querySelector('.startTime');
const stopBtn = document.querySelector('.stopTime');
const nextPeriodBtn = document.querySelector('.btnNextPeriod');
const currentPeriod = document.querySelector('.currentPeriod');
// Functions

// Update score
const updateScore = (team, points) => {
  const scoreElement = document.getElementById(`score${team}`);
  let currentScore = parseInt(scoreElement.textContent);
  currentScore += points;
  scoreElement.textContent = currentScore;
};

// Update time display
const updateTimeDisplay = () => {
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(
    seconds
  ).padStart(2, '0')}`;
  timeElement.textContent = formattedTime;
};

// Timer

// Start time
const startTime = () => {
  intervalId = setInterval(function () {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(intervalId);
        console.log('Timer finished');
      } else {
        minutes--;
        seconds = 59;
      }
    } else {
      seconds--;
    }

    updateTimeDisplay();
  }, 1000);

  return intervalId;
};

// Stop time
stopBtn.addEventListener('click', function () {
  clearInterval(intervalId);
});

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

// Event listener for the start button
startBtn.addEventListener('click', function () {
  startTime();
});

// Initial setup
updateTimeDisplay();

// Change game period
nextPeriodBtn.addEventListener('click', function () {
  const current = parseInt(currentPeriod.textContent);
  if (current <= 3) {
    currentPeriod.textContent = current + 1;
  } else {
    currentPeriod.textContent = 'Extra time';
  }
});

// Reset
scores.forEach(score => {
  resetBtn.addEventListener('click', function () {
    score.textContent = 0;
    currentPeriod.textContent = 1;
    clearInterval(intervalId);
    intervalId = 10;
    minutes = 10;
    seconds = 0;
    updateTimeDisplay();
  });
});
