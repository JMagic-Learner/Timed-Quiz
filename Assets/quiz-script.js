var timeDisplay = document.querySelector("#time-clock");
var buttonListen = document.querySelector("#quiz-start");
var questionDisplay = document.querySelector("#question");
var answerA = document.querySelector("#choiceA");
var answerB = document.querySelector("#choiceB");
var answerC = document.querySelector("#choiceC");

var timeHost = 500;
var correct = 0;
var incorrect = 0;

function correctUP() {
    correct++;  
}

function incorrectUP() {
    incorrect++;
    for (var i = 0; i < 5; i++) {
        timeHost--;
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
    var questionARRAY = [ 0 , 1 , 2 ];
    var randCHOICE = Math.floor(Math.random() * 4 );

    if (questionARRAY[0] == randCHOICE) {
        console.log ("Question 1 has been chosen");
        questionDisplay.textContent = "This is question 1";
        answerA.textContent = "The value returned is a boolean.";
        answerB.textContent = "The value returned is a string.";
        answerC.textContent = "The value returned is a number.";
    } else if (questionARRAY[1] == randCHOICE){
        console.log ("Question 2 has been chosen");
        questionDisplay.textContent = "This is question 2";
        answerA.textContent = "The value returned is a answer for question 2.";
        answerB.textContent = "The value returned is a answer for question 2.";
        answerC.textContent = "The value returned is a answer for question 3.";
    } else if (questionARRAY[2] == randCHOICE){
        console.log ("Question 3 has been chose");
        questionDisplay.textContent = "this is question 3";
        answerA.textContent = "The value returned is for question 3.";
        answerB.textContent = "The value returned is for question 3.";
        answerC.textContent = "The value returned is for question 3";
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


function answerResponse() { 

    
    if (questionARRAY[0] = 0 ) {
        answerB.addEventListener("click", correctUP );
    }

}


function start() {
    clockDown();
    questionSelector();
}

buttonListen.addEventListener("click", start);