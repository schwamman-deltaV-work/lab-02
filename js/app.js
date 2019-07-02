'use strict';

questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();

function questionOne() { 
  //Prompt with question and sets to lowercase
  var questionOne = prompt('Did I graduate college?');
  questionOne.toLowerCase().trim();

  //Validate user input
  if (questionOne === 'y' || questionOne === 'yes') {
    alert('Yes, I graduated from the University of Northern Iowa in 2016.');
  } else if (questionOne === 'n' || questionOne === 'no') {
    alert('That is incorrect, I graduated from the University of Northern Iowa in 2016.');
  } else {
    alert('Please enter yes or no.');
  }
}

function questionTwo() { 
  var questionTwo = prompt('Do I have any pets?');
  questionTwo.toLowerCase().trim();
  
  if (questionTwo === 'y' || questionTwo === 'yes') {
    alert('Yes, I have two cats named Titan and Brownie.');
  } else if (questionTwo === 'n' || questionTwo === 'no') {
    alert('That is incorrect, I have two cats named Titan and Brownie.');
  } else {
    alert('Please enter yes or no.');
  }
}

function questionThree() { 
  var questionThree = prompt('Are lagers my favorite style of beer?');
  questionThree.toLowerCase().trim();
    
  if (questionThree === 'y' || questionThree === 'yes') {
    alert('That is incorrect, I actually prefer IPAs.');
  } else if (questionThree === 'n' || questionThree === 'no') {
    alert('That is correct, I actually prefer IPAs.');
  } else {
    alert('Please enter yes or no.');
  }
}

function questionFour() { 
  var questionFour = prompt('Have I always lived in Iowa?');
  questionFour.toLowerCase().trim();
    
  if (questionFour === 'y' || questionFour === 'yes') {
    alert('Yes, I have travelled outside the state but I have always lived in either Cedar Rapids or Cedar Falls.');
  } else if (questionFour === 'n' || questionFour === 'no') {
    alert('That is incorrect, I have travelled outside the state but I have always lived in either Cedar Rapids or Cedar Falls.');
  } else {
    alert('Please enter yes or no.');
  }
}

function questionFive() { 
  var questionFive = prompt('Is my favorite sport soccer?');
  questionFive.toLowerCase().trim();
    
  if (questionFive === 'y' || questionFive === 'yes') {
    alert('Nope, my favorite sport is hockey. I\'m a Colorado Avalanche fan.');
  } else if (questionFive === 'n' || questionFive === 'no') {
    alert('That correct, my favorite sport is hockey. I\'m a Colorado Avalanche fan.');
  } else {
    alert('Please enter yes or no.');
  }
}









