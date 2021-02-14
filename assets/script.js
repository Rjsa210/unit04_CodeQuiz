//create variables secondsLeft, questionArray, and score.
var secondsLeft = 900;

//create an array of questions
//var questionArray = [question1];
var score = 0





// handle on intro block, start button
var body = document.body;

var introBlock = document.createElement('div');
introBlock.className = 'introBlock';

var introHeader = document.createElement('h1');
introHeader.textContent = 'Would you like to take a coding Quiz?';

// handle on timerBlock add event listener to start quiz and timer and move to the next block
var startButton = document.createElement('button');
startButton.textContent = 'Start the quiz'
startButton.addEventListener('click', startGame);

body.appendChild(introBlock);
introBlock.appendChild(introHeader);
introBlock.appendChild(startButton);


//handle create question block and timer block
var timerBlock = document.createElement('div');
timerBlock.className = 'timerBlock';


var questionBlock = document.createElement('div');
questionBlock.className = 'questionBlock';

//create and get handle on answer block
var answerBlock = document.createElement('div');
answerBlock.className = 'answerBlock';

//create and get handle on answerList
var answerList = document.createElement('ul');
answerList.className = 'answerList';

//create and get handle on list items answerText
var answer1Text = document.createElement('li')
answer1Text.className = 'answer1Text';

var answer2Text = document.createElement('li');
answer2Text.className = 'answer2Text';

var answer3Text = document.createElement('li');
answer3Text.className = 'answer3Text';

var answer4Text = document.createElement('li');
answer4Text.className = 'answer4Text';

//create and get handle on answerButtons  
var answer1Button = document.createElement('button');
answer1Button.id = 'answer1Button';

var answer2Button = document.createElement('button');
answer2Button.id = 'answer2Button';

var answer3Button = document.createElement('button');
answer3Button.id = 'answer3Button';

var answer4Button = document.createElement('button');
answer4Button.id = 'answer4Button';


//handle create enterInitials block
var initialsBlock = document.createElement('div');
initialsBlock.className = 'initialsBlock';

//handle create hiScores block
var hiScoreBlock = document.createElement('div');
hiScoreBlock.className = 'hiScoreBlock';




// create a startGame function
function startGame() {
  body.removeChild(introBlock);
  body.appendChild(timerBlock);
  body.appendChild(questionBlock);
  questionBlock.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt elit vel nisl ornare lobortis. Nunc posuere mauris tellus. In.'
  body.appendChild(answerBlock);

  answerBlock.appendChild(answerList);

  answerList.appendChild(answer1Text);
  answer1Text.appendChild(answer1Button);
  answer1Button.textContent = 'A';


  answerList.appendChild(answer2Text);
  answer2Text.appendChild(answer2Button);
  answer2Button.textContent = 'B';
  

  
  answerList.appendChild(answer3Text);
  answer3Text.appendChild(answer3Button);
  answer3Button.textContent = 'C';

  answerList.appendChild(answer4Text);
  answer4Text.appendChild(answer4Button);
  answer4Button.textContent = 'D';
  countDown();

}

function countDown() {
  var timeInterval = setInterval(function () {
    if (secondsLeft > 1) {
      timerBlock.textContent = secondsLeft + ' seconds remaining.';
      secondsLeft--;
    } else if (secondsLeft === 1) {
      timerBlock.textContent = secondsLeft + ' second remaining.';
      secondsLeft--;
    } else {
      timerBlock.textContent = '';
      clearInterval(timeInterval);
      endGame();
    }
  }, 1000);
}


//create a function that randomly selects a value from array[Questions] and calls the function stored in that value
  //value function called should be removed from the array so it is not called again

//create functions for each question and assigne the variable names to values in array

  //questions will be if else statements
    //if answered correctly there is no penalty
    //else var secondsLeft drops by 5 seconds


//create an endgame function
  //function is called when secondsLeft === 0
  //function is called if all questions are answered.
  //function displays score and has an form for initials that saves to local storage.
  //function displays a list of high scores
    //user has the option to clear high scores.
  
  
    
    
function endGame() {
  body.removeChild(timerBlock);
  body.removeChild(questionBlock);
  body.removeChild(answerBlock);
  body.appendChild(initialsBlock);
  body.appendChild(hiScoreBlock);
}