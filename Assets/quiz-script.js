var timeDisplay = document.querySelector("#time-clock");
var buttonListen = document.querySelector("#quiz-start");
var questionDisplay = document.querySelector("#question");
var answerA = document.querySelector("#choiceA");
var answerB = document.querySelector("#choiceB");
var answerC = document.querySelector("#choiceC");
var questionARRAY = [ 0 , 1 , 2 ];
var timeHost = 500;
var correct = localStorage.getItem("correct");
var incorrect = 0;

function correctUP() {
    correct++;
    localStorage.setItem("correct" , correct);
    questionSelector();
}

function incorrectUP() {
    incorrect++;
    for (var i = 0; i < 5; i++) {
        timeHost = timeHost - 5;
    }
}




function clockDown() {
    
    var timer = setInterval(function() {
    
        timeHost--;
   
        timeDisplay.textContent = timeHost + "seconds";
        console.log( timeHost );
             
        if (timeHost === 0) {
        clearInterval(timer);
        }

        }, 1000);
      
}

function questionSelector() {
    
    var randCHOICE = Math.floor(Math.random() * 4 );

    if (questionARRAY[0] == randCHOICE) {
        console.log ("Question 1 has been chosen");
        questionDisplay.textContent = "How does a for loop behave in contrast to a while loop";
        answerA.textContent = "A for loop uses a single condition to justify it's loop.";
        answerB.textContent = "A for loop specifies a variable, a conditional comparison, and a additive loop";
        answerC.textContent = "A for loop cannot branch or have alternate conditions.";
        answerA.addEventListener("click", incorrectUP)
        answerB.addEventListener("click", correctUP);
        answerC.addEventListener("click", incorrectUP)
    } else if (questionARRAY[1] == randCHOICE | correct == 1){
        console.log ("Question 2 has been chosen");
        questionDisplay.textContent = "Why use local storage instead of a variable defined in a script?";
        answerA.textContent = "The value can be refereced in later iterations of the same browser.";
        answerB.textContent = "The value can be referenced in later instances of any browser.";
        answerC.textContent = "The value can be stored as a number type, and be retrieved as a string.";
        answerA.addEventListener("click", correctUP);
        answerB.addEventListener("click", incorrectUP)
        answerC.addEventListener("click", incorrectUP)
    } else if (questionARRAY[2] == randCHOICE | correct == 2){
        console.log ("Question 3 has been chose");
        questionDisplay.textContent = "this is question 3";
        answerA.textContent = "The value returned is for question 3.";
        answerB.textContent = "The value returned is for question 3.";
        answerC.textContent = "The value returned is for question 3";
        answerA.addEventListener("click", incorrectUP)
        answerB.addEventListener("click", incorrectUP)
        answerC.addEventListener("click", correctUP);
    }


  /*  if (questionARRAY[0] == randCHOICE) {
        answerA.textContent = "The value returned is a boolean.";
        answerB.textContent = "The value returned is a string.";
        answerC.textContent = "The value returned is a number.";
    } else if (questionARRAY[1] == randCHOICE){
        answerA.textContent = "This is a placeholder answer.";
        answerB.textContent = "This is a placeholder answer to the second question";
        answerC.textContent = "This is a placeholder answer to the second question";
    } else if (questionARRAY[2] == randCHOICE){
        answerA.textContent = "The value returned is for question 3.";
        answerB.textContent = "The value returned is for question 3.";
        answerC.textContent = "The value returned is for question 3";
    }

*/
}

/*
function answerResponse() { 

    
    if (questionARRAY[0] = 0 ) {
        answerB.addEventListener("click", correctUP);
    } else if (questionARRAY[1] = 1) {
        answerC.addEventListener("click", correctUP);
    } else if (questionARRAY[2] = 2) {
        answerB.addEventListener("click", correctUP);
    } else {
        incorrectUP();
    }
    

}
*/

function start() {
    clockDown();

  
    
    questionSelector();
    if (timeHost <= 0) {
        timeHost == 0;
        return;
    }
}

buttonListen.addEventListener("click", start);