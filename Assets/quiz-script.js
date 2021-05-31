var timeDisplay = document.querySelector("#time-clock");
var buttonListen = document.querySelector("#quiz-start");
var questionDisplay = document.querySelector("#question");
var incorrectDisplay = document.querySelector("#incorrectScore");
var correctDisplay = document.querySelector("#correctScore");
var answerA = document.querySelector("#choiceA");
var answerB = document.querySelector("#choiceB");
var answerC = document.querySelector("#choiceC");

var questionARRAY = [ 0 , 1 , 2 , 3];
var timeHost = 60;

var progress = 0;
var correct = 0;
var incorrect = 0;


function grading() {
    if (correct == 1) {
        correct == 0;
        questionSelector();
        return correct;
    } else {
        incorrect++;
        timeHost-5;
        questionSelector();
        return timeHost;
    }
}


function correctUp() {
    correct++;
    progress++;
    questionSelector();
    
    return;
}

function incorrectUp() {
    incorrect++;
    timeHost=timeHost-5;
    
    
    return;
}



function clockDown() {
    
    var timer = setInterval(function() {
        incorrectDisplay.textContent = "Incorrect answers: " + incorrect;
        correctDisplay.textContent = "Correct answers: " + correct;

        timeHost--;
   
        timeDisplay.textContent = timeHost + "seconds";
        console.log( timeHost );
             
        if (timeHost <= 0 || progress == 4) {
        clearInterval(timer);
        return;
        }

        }, 1000);
      
}



function questionSelector() {
    var correctAnswer = answerB;
    var correctAnswer2 = answerA;
    var correctAnswer3 = answerC;
    var correctAnswer4 = answerC;

    if (questionARRAY[progress] == 0) {
        console.log ("Question 1 has been chosen");
     
        

        questionDisplay.textContent = "How does a for loop behave in contrast to a while loop";
        answerA.textContent = "A for loop uses a single condition to justify it's loop.";
        answerB.textContent = "A for loop specifies a variable, a conditional comparison, and a additive loop";
        answerC.textContent = "A for loop cannot branch or have alternate conditions.";

        
        answerA.addEventListener("click", incorrectUp);
        correctAnswer.addEventListener("click", correctUp);
        answerC.addEventListener("click", incorrectUp); 

      


        
        

    } else if (questionARRAY[progress] === 1 ){  
        console.log ("Question 2 has been chosen");
     
        
        questionDisplay.textContent = "Why use local storage instead of a variable defined in a script?";
         answerA.textContent = "The value can be refereced in later iterations of the same browser.";
         answerB.textContent = "The value can be referenced in later instances of any browser.";
         answerC.textContent = "The value can be stored as a number type, and be retrieved as a string.";
        
        
        
        correctAnswer2.addEventListener("click", correctUp);
        answerB.addEventListener("click", incorrectUp);
        answerC.addEventListener("click", incorrectUp);

        

    } else if (questionARRAY[progress] === 2 ){

        console.log ("Question 3 has been chose");
        questionDisplay.textContent = "this is question 3";
        answerA.textContent = "The value returned is for question 3.";
        answerB.textContent = "The value returned is for question 3.";
        answerC.textContent = "The value returned is for question 3";

        


        answerA.addEventListener("click", incorrectUp);
        answerB.addEventListener("click", incorrectUp);
        correctAnswer3.addEventListener("click", correctUp);

        
    } else if (questionARRAY[progress] === 3) {
        console.log ("Question 4 has been chosen");
        questionDisplay.textContent = "Which of the below answers is correctly syntaxed";
        answerA.textContent = "var htmlSelect = querySelector('.class');";
        answerB.textContent = "if ( i = 0, i < numericalValue, i++ ) { }";
        answerC.textContent = "localStorage.setItem( value , value)";

        

        answerA.addEventListener("click", incorrectUp);
        answerB.addEventListener("click", incorrectUp);
        correctAnswer4.addEventListener("click", correctUp);

      
     
    } else if (timeHost <= 0 || correct === 4) {

       
        timeHost == 0;
        answerA.textContent = "";
        answerB.textContent = "";
        answerC.textContent = "";
        finishStatement();
        return;
    }

    
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

function finishStatement() {
    var name = prompt("Enter your name or initials");
    var scoreSubmit = prompt("Enter your score");
    localStorage.setItem("username", JSON.stringify(name));
    localStorage.setItem("highscore", JSON.stringify((scoreSubmit));
    var rosterSubmit = document.getElementById("#roster");
    var usernameSubmit = JSON.parse(localStorage.getItem("username"));
    var scoreSubmit2 = JSON.parse(localStorage.getItem("highscore"));
    rosterSubmit.textContent = usernameSubmit + ", " + scoreSubmit2;

    
}


function start() {
    clockDown();
    
    
    questionSelector();
  


    
    
}

buttonListen.addEventListener("click", start);