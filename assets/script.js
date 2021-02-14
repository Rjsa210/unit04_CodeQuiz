//create variables secondsLeft, questionArray, and score.
var secondsLeft = 20;
var playerScore = 0;
var hiScores = [];
//create an array of questions
//var questionArray = [problem1, problem2, problem3, problem4];






// handle on intro block, start button
var body = document.body;

var introBlock = document.createElement('div');
introBlock.className = 'introBlock';

var introHeader = document.createElement('h1');
introHeader.textContent = 'Would you like to take a coding Quiz?';

// handle on timerBlock add event listener to start quiz and timer and move to the next block
var startButton = document.createElement('button');
startButton.textContent = 'Start the quiz';
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
var answer1Box = document.createElement('li');
answer1Box.className = 'answer1Box';

var answer2Box = document.createElement('li');
answer2Box.className = 'answer2Box';

var answer3Box = document.createElement('li');
answer3Box.className = 'answer3Box';

var answer4Box = document.createElement('li');
answer4Box.className = 'answer4Box';

//create and get handle on answerButtons  
var answer1Button = document.createElement('button');
answer1Button.className = 'answerContent';

var answer2Button = document.createElement('button');
answer2Button.className = 'answerContent';

var answer3Button = document.createElement('button');
answer3Button.className = 'answerContent';

var answer4Button = document.createElement('button');
answer4Button.className = 'answerContent';

var answer1Text = document.createElement('p');
answer1Text.className = 'answerContent';

var answer2Text = document.createElement('p');
answer2Text.className = 'answerContent';

var answer3Text = document.createElement('p');
answer3Text.className = 'answerContent';

var answer4Text = document.createElement('p');
answer4Text.className = 'answerContent';

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
  questionBlock.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt elit vel nisl ornare lobortis. Nunc posuere mauris tellus. In.';
  body.appendChild(answerBlock);

  answerBlock.appendChild(answerList);

  answerList.appendChild(answer1Box);
  answer1Box.appendChild(answer1Button);
  answer1Button.textContent = 'A';
  answer1Box.appendChild(answer1Text);
  answer1Text.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';


  answerList.appendChild(answer2Box);
  answer2Box.appendChild(answer2Button);
  answer2Button.textContent = 'B';
  answer2Box.appendChild(answer2Text);
  answer2Text.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';



  answerList.appendChild(answer3Box);
  answer3Box.appendChild(answer3Button);
  answer3Button.textContent = 'C';
  answer3Box.appendChild(answer3Text);
  answer3Text.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

  answerList.appendChild(answer4Box);
  answer4Box.appendChild(answer4Button);
  answer4Button.textContent = 'D';
  answer4Box.appendChild(answer4Text);
  answer4Text.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  countDown();
  problem1();
  //chooseQuestion();

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

//create functions for each question and assigne the variable names to values in array

//create an endgame function
//function is called when secondsLeft === 0
//function is called if all questions are answered.
//function displays score and has an form for initials that saves to local storage.
//function displays a list of high scores
//user has the option to clear high scores.




function endGame() {

  body.appendChild(initialsBlock);
  initialsBlock.textContent = 'You scored ' + playerScore + ' out of 4. Please enter your initials';
  body.appendChild(hiScoreBlock);
  body.removeChild(timerBlock);
  body.removeChild(questionBlock);
  body.removeChild(answerBlock);
}

function problem1() {
  questionBlock.textContent = 'Which of the following is an example of an .HTML tag';

  answer1Text.textContent = '<head>';
  answer1Button.addEventListener('click', answerCorrect);
  answer1Button.addEventListener('click', problem2);

  answer2Text.textContent = '<shoulders>';
  answer2Button.addEventListener('click', answerWrong);
  answer2Button.addEventListener('click', problem2);

  answer3Text.textContent = '<knees>';
  answer3Button.addEventListener('click', answerWrong);
  answer3Button.addEventListener('click', problem2);

  answer4Text.textContent = '<toes>';
  answer4Button.addEventListener('click', answerWrong);
  answer4Button.addEventListener('click', problem2);

}

function problem2() {
  questionBlock.textContent = 'What is an example of an array';

  answer1Text.textContent = 'var array = ABCDEFG';
  answer1Button.addEventListener('click', answerWrong);
  answer1Button.addEventListener('click', problem3);

  answer2Text.textContent = 'var numbers = $*1 *2 *3 *4 *5 *6$';
  answer2Button.addEventListener('click', answerWrong);
  answer2Button.addEventListener('click', problem3);

  answer3Text.textContent = 'var cars = ["Jaguar", "Ferrari", "Toyota", "Lexus"]';
  answer3Button.addEventListener('click', answerCorrect);
  answer3Button.addEventListener('click', problem3);

  answer4Text.textContent = 'array = function()';
  answer4Button.addEventListener('click', answerWrong);
  answer4Button.addEventListener('click', problem3);

}

function problem3() {
  questionBlock.textContent = 'Who invented the internet';

  answer1Text.textContent = 'Darryl J. Internet';
  answer1Button.addEventListener('click', answerWrong);
  answer1Button.addEventListener('click', problem4);

  answer2Text.textContent = 'Vinton Cerf & Robert Kahn';
  answer2Button.addEventListener('click', answerWrong);
  answer2Button.addEventListener('click', problem4);

  answer3Text.textContent = 'Tim Berners-Lee';
  answer3Button.addEventListener('click', answerWrong);
  answer3Button.addEventListener('click', problem4);

  answer4Text.textContent = 'Al Gore';
  answer4Button.addEventListener('click', answerCorrect);
  answer4Button.addEventListener('click', problem4);

}

function problem4() {
  questionBlock.textContent = 'Which of the following is the most specific CSS selector';

  answer1Text.textContent = 'tag {}';
  answer1Button.addEventListener('click', answerWrong);
  answer1Button.addEventListener('click', endGame);

  answer2Text.textContent = '#id {}';
  answer2Button.addEventListener('click', answerCorrect);
  answer2Button.addEventListener('click', endGame);

  answer3Text.textContent = '<div> {}';
  answer3Button.addEventListener('click', answerWrong);
  answer3Button.addEventListener('click', endGame);

  answer4Text.textContent = '.class {}';
  answer4Button.addEventListener('click', answerWrong);
  answer4Button.addEventListener('click', endGame);

}

function answerWrong() {
  secondsLeft -= 5;
}

function answerCorrect() {
  secondsLeft += 5;


}


/*
function chooseQuestion() {
  if (questionArray.length < 1) {
    endGame();
  } else {
    var chosenProblem = questionArray[Math.floor(Math.random() * questionArray.length)];
    chosenProblem()
    console.log(chosenProblem);
    console.log(chosenProblem);
    questionArray.splice(chosenProblem, 1);

  }
}
*/