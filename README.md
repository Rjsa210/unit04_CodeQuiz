# unit04_CodeQuiz
The Goal of this project is to create a web based coding quiz. With elements generated through the DOM. My personal goal was to no permanent html elements, and have all the website elements created in the DOM.

The Website Functions as follows.

  1. The User is prompted with a Button to start the quiz. [Figure 1](assets/screenShots/Figure1.jpg)
  1. When the start button is clicked, the first question is displayed and a 50 second counter begins counting down. [Figure 2](assets/screenShots/Figure2.jpg)
  1. A correct answer increases the score count by 1, an incorrect answer decreases the timer by 5 seconds. Both correct, and incorrect answers advance to the next question. 
  1. If all questions are answered or the timer reaches zero, the user is shown a score board and prompted to enter their initials. [Figure 3](assets/screenShots/Figure3.jpg)

### Issues
I wanted the quiz to work with following process
  1. An array composed of question functions is created.
  1. A seperate pullQuestion() function randomly pulls a function from the array, and simultaneously calls said function and splices it from the array.
  1. When each question is answered, the pullQuestion() function is called again until there are no more remaining questions or the timer runs out

However, I was not able to create a function to call and clip the function from the array. resulting in a neverending string of questions that could be called multiple times each.
Instead of this I decided it would be better to have each question function run in sequence and call the next question, eliminating repitition.

The other issue I encountered is the event listeners added to each button for the questions. I learned one event listener does not override another; so when question 1 is answered, its correct and incorrect answers stayed on their assigned buttons. This would result in incorrect scoring. I overcame this by creating functions for each question to clear the appropriate event listeners from the previous question. 
I believe there is a more graceful way to solve this issue, however this was the immediate solution i came up with.

Overall, I am not happy with this website. I feel the code is clunky and if I had a bit more working knowledge I could make something much better.

I do like the way it looks though. Its purple.

the website can be viewed here [Unit 04 Code Quiz](https://rjsa210.github.io/unit04_CodeQuiz/)