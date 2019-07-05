'use strict';
var userName = prompt('What is you name?');
var numCorrect = 0;
var sevenCorrect = false;

runGame();
alert('Good game ' + userName + ', you got ' + numCorrect + ' out of 7 questions correct. Refresh to play again!');


function runGame() {
  questionOne();
  questionTwo();
  questionThree();
  questionFour();
  questionFive();
  questionSix();
  questionSeven();
}

function questionOne() {
  var answerOne = prompt('Did I graduate college?').toLowerCase().trim();
  if (answerOne === 'y' || answerOne === 'yes') {
    alert('Yes, I graduated from the University of Northern Iowa in 2016.');
    numCorrect++;
  } else if (answerOne === 'n' || answerOne === 'no') {
    alert('That is incorrect, I graduated from the University of Northern Iowa in 2016.');
  } else {
    alert('Please enter yes or no.');
  }
}

function questionTwo() {
  var answerTwo = prompt('Do I have any pets?').toLowerCase().trim();
  if (answerTwo === 'y' || answerTwo === 'yes') {
    alert('Yes, I have two cats named Titan and Brownie.');
    numCorrect++;
  } else if (answerTwo === 'n' || answerTwo === 'no') {
    alert('That is incorrect, I have two cats named Titan and Brownie.');
  } else {
    alert('Please enter yes or no.');
  }
}

function questionThree() {
  var answerThree = prompt('Are lagers my favorite style of beer?').toLowerCase().trim();
  if (answerThree === 'y' || answerThree === 'yes') {
    alert('That is incorrect, I actually prefer IPAs.');
  } else if (answerThree === 'n' || answerThree === 'no') {
    alert('That is correct, I actually prefer IPAs.');
    numCorrect++;
  } else {
    alert('Please enter yes or no.');
  }
}

function questionFour() {
  var answerFour = prompt('Have I always lived in Iowa?').toLowerCase().trim();
  if (answerFour === 'y' || answerFour === 'yes') {
    alert('Yes, I have travelled outside the state but I have always lived in either Cedar Rapids or Cedar Falls.');
    numCorrect++;
  } else if (answerFour === 'n' || answerFour === 'no') {
    alert('That is incorrect, I have travelled outside the state but I have always lived in either Cedar Rapids or Cedar Falls.');
  } else {
    alert('Please enter yes or no.');
  }
}

function questionFive() {
  var answerFive = prompt('Is my favorite sport soccer?').toLowerCase().trim();
  if (answerFive === 'y' || answerFive === 'yes') {
    alert('Nope, my favorite sport is hockey. I\'m a Colorado Avalanche fan.');
  } else if (answerFive === 'n' || answerFive === 'no') {
    alert('That correct, my favorite sport is hockey. I\'m a Colorado Avalanche fan.');
    numCorrect++;
  } else {
    alert('Please enter yes or no.');
  }
}

function questionSix() {
  for (var i = 4; i > 0; i--) {
    var answerSix = prompt('Guess how old my cats are?').trim();
    answerSix = parseInt(answerSix);
    if (isNaN(answerSix)) {
      alert('Enter a valid number. ' + (i -1) + ' more tries');
    }
    else if (answerSix === 2) {
      alert('You got it! Both my cats are 2 years old and from the same litter.');
      numCorrect++;
      break;
    }
    else if (answerSix < 2) {
      alert('Incorrect, try guessing a higher number. ' + (i - 1) + ' more tries');
    }
    else if (answerSix > 2) {
      alert('Incorrect, try guessing a lower number. ' + (i - 1) + ' more tries');
    }
  }
}

function questionSeven() {
  for (var i = 6; i > 0; i--) {
    var answerArray = ['hyundai', 'subaru', 'volkswagen', 'chrysler'];
    var answerSeven = prompt('I have owned 4 different vehicles. Guess the brand/make for any of my cars?').toLowerCase().trim();
    var checkIfTrue = answerArray.includes(answerSeven);
    if (checkIfTrue) {
      alert('You are correct. I did own a ' + answerSeven + '. Keep guessing for other makes.');
      sevenCorrect = true;
    }
    else {
      alert('Incorrect but keep guessing! You have ' + (i -1) + ' more tries.');
    }
  }
  alert('I have owned a Hyundai, Subaru, Volkswagen, and a Chrysler.');
  if (sevenCorrect) {
    numCorrect++;
  }
}







