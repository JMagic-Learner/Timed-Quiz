var timeDisplay = document.querySelector("#time-clock");
var buttonListen = document.querySelector("#quiz-start");
var questionDisplay = document.querySelector("#question");
var incorrectDisplay = document.querySelector("#incorrectScore");
var correctDisplay = document.querySelector("#correctScore");

var answerA = document.querySelector("#choiceA");
var answerB = document.querySelector("#choiceB");
var answerC = document.querySelector("#choiceC");

var total = 0;



var questionARRAY = [ 0 , 1 , 2 , 3];
var timeHost = 100;

var progress = 0;
var correct = 0;
var incorrect = total - correct;


function numberOFCLICKS() {
 total++;
 console.log("This is the number of clicks:" + total);
 timeHost-5;
 return false;
}


function correctUp() {
    correct++;
    questionSelector();
    return correct;
}


function test() {
    return true;
}




function clockDown() {

    
    var timer = setInterval(function() {

        incorrectDisplay.textContent = "Total number of clicks:" + total;
        

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
   
    
    var AdjustedCorrect =  correct;
    correctDisplay.textContent = "Correct answers: " + AdjustedCorrect ; 
    
    
         answerA.addEventListener("click" , numberOFCLICKS);
         answerB.addEventListener("click" , numberOFCLICKS);
         answerC.addEventListener("click" , numberOFCLICKS);

    if (correct === 0) {
        console.log ("Question 1 has been chosen");


        var correctAnswer1 = answerB;

        questionDisplay.textContent = "How does a for loop behave in contrast to a while loop";
        answerA.textContent = "A for loop uses a single condition to justify it's loop.";
        correctAnswer1.textContent = "A for loop specifies a variable, a conditional comparison, and a additive loop";
        answerC.textContent = "A for loop cannot branch or have alternate conditions.";

        correctAnswer1.addEventListener("click", correctUp);

        if( answerC.addEventListener("click" , test) == true || answerA.addEventListener("click", test) == true) {
            incorrect++;
        } else if (correct != 1) {
            incorrect++;
        } else if ( correctAnswer1.addEventListener("click", test) == true) {
            correctUp;
        }

        //if( correct = 0 ) {
         //   incorrect++;
        //}

        


    } else if (correct === 1 ){  
        console.log ("Question 2 has been chosen");
        var correctAnswer2 = answerA;
     
     
        
        questionDisplay.textContent = "Why use local storage instead of a variable defined in a script?";
         correctAnswer2.textContent = "The value can be refereced in later iterations of the same browser.";
         answerB.textContent = "The value can be referenced in later instances of any browser.";
         answerC.textContent = "The value can be stored as a number type, and be retrieved as a string.";

         

         if( answerC.addEventListener("click" , test) == true || answerB.addEventListener("click", test) == true) {
            incorrect++;
        } else if (correct != 2) {
            incorrect++;
        } else if ( correctAnswer2.addEventListener("click", test) == true) {
            correctUp;
        }


    } else if (correct === 2 ){
        console.log ("Question 3 has been chose");
        var correctAnswer3 = answerC;

        correctAnswer3.addEventListener("click", correctUp);
        questionDisplay.textContent = "this is question 3";
        answerA.textContent = "The value returned is for question 3.";
        answerB.textContent = "The value returned is for question 3.";
        correctAnswer3.textContent = "The value returned is for question 3";

        if( answerA.addEventListener("click" , test) == true || answerB.addEventListener("click", test) == true) {
            incorrect++;
        } else if (correct != 3) {
            incorrect++;
        } else if ( correctAnswer3.addEventListener("click", test) == true) {
            correctUp;
        }

        
    } else if (correct === 3) {
        var correctAnswer4 = answerC;
       
        correctAnswer4.addEventListener("click", correctUp);
        console.log ("Question 4 has been chosen");
        questionDisplay.textContent = "Which of the below answers is correctly syntaxed";
        answerA.textContent = "var htmlSelect = querySelector('.class');";
        answerB.textContent = "if ( i = 0, i < numericalValue, i++ ) { }";
        correctAnswer4.textContent = "localStorage.setItem( value , value)";

        if( answerA.addEventListener("click" , test) == true || answerB.addEventListener("click", test) == true) {
            incorrect++;
        } else if (correct != 4) {
            incorrect++;
        } else if ( correctAnswer4.addEventListener("click", test) == true) {
            correctUp;
        }


     
    } else if (timeHost <= 0 || correct === 4) {

       
        timeHost == 0;
        answerA.textContent = "";
        answerB.textContent = "";
        answerC.textContent = "";
        finishStatement();
        return;
    }
       
}
    
    

function finishStatement() {
    var name = prompt("Enter your name or initials");
    var scoreSubmit = prompt("Enter your score");
    var rosterSubmit = document.getElementById("#roster").innerHTML(scoreSubmit);
   




    localStorage.setItem("username", JSON.stringify(name));
    localStorage.setItem("highscore", JSON.stringify(scoreSubmit));
    
    var usernameSubmit = JSON.parse(localStorage.getItem("username"));
    var scoreSubmit2 = JSON.parse(localStorage.getItem("highscore"));
    var stringify = scoreSubmit2 + usernameSubmit;
    rosterSubmit.Value = stringify;

    
}


function start() {
    clockDown(); 
    questionSelector(); 
}

buttonListen.addEventListener("click", start);