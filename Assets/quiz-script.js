var timeDisplay = document.querySelector("#time-clock");
var buttonListen = document.querySelector("#quiz-start");
var questionDisplay = document.querySelector("#question");
var incorrectDisplay = document.querySelector("#incorrectScore");
var correctDisplay = document.querySelector("#correctScore");

var timeHost = 60;


var usernameSubmit = localStorage.getItem("username");
var scoreSubmit2 = localStorage.getItem("highscore");
var totalCount = localStorage.getItem("total");



var rosterSubmit = document.querySelector("#current-roster");
var previousScore = document.querySelector("#previous-score");
var previousSubmit = document.querySelector("#previous-roster");
var currentScore = document.querySelector("#current-score");



var incorrect = 0;
var total = 0;
var correct = -1;

function start() {

        previousSubmit.textContent = "Previous User: " + usernameSubmit;
            previousScore.textContent = "Previous Score:  " + scoreSubmit2; 
            clockDown(); 
            firstQuestion();
            
            return;
            
        }

function numberOFCLICKS() {
 total++;
 incorrect++;
 console.log("This is the number of clicks:" + total);
 timeHost = timeHost-5;
 return total;
}




function firstQuestion() {
        var answerA = document.querySelector("#choiceA");
        var answerB = document.querySelector("#choiceB");
        var answerC = document.querySelector("#choiceC");

        answerA.addEventListener("click" , numberOFCLICKS);
        answerB.addEventListener("click" , secondQuestion);
        answerC.addEventListener("click" , numberOFCLICKS);
        console.log ("Question 1 has been chosen");
        
        
        questionDisplay.textContent = "Question 1: How does a for loop behave in contrast to a while loop";
        answerA.textContent = "A for loop uses a single condition to justify it's loop.";
        answerB.textContent = "A for loop specifies a variable, a conditional comparison, and a additive loop";
        answerC.textContent = "A for loop cannot branch or have alternate conditions.";
        
        answerB.addEventListener("click", correct++);
}







function secondQuestion() {
        
        
        document.getElementById('choiceA').id ='question2choiceA';
        document.getElementById('choiceB').id ='question2choiceB';
        document.getElementById('choiceC').id ='question2choiceC';
        

        var secondQuestionA = document.querySelector("#question2choiceA");
        var secondQuestionB = document.querySelector("#question2choiceB");
        var secondQuestionC = document.querySelector("#question2choiceC");
        
        secondQuestionA.addEventListener("click" , thirdQuestion);
        secondQuestionB.addEventListener("click" , numberOFCLICKS);
        secondQuestionC.addEventListener("click" , numberOFCLICKS);

        console.log ("Question 2 has been chosen");      
         questionDisplay.textContent = " Question 2: Why use local storage instead of a variable defined in a script?";
         secondQuestionA.textContent = "The value can be refereced in later iterations of the same browser.";
         secondQuestionB.textContent = "The value can be referenced in later instances of any browser.";
         secondQuestionC.textContent = "The value can be stored as a number type, and be retrieved as a string.";
         
         secondQuestionA.addEventListener("click" , correct++);
}


function thirdQuestion() {
        
       
        console.log ("Question 3 has been chosen.");

        document.getElementById('question2choiceA').id ='question3choiceA';
        document.getElementById('question2choiceB').id ='question3choiceB';
        document.getElementById('question2choiceC').id ='question3choiceC';
        var thirdQuestionA = document.querySelector("#question3choiceA");
        var thirdQuestionB = document.querySelector("#question3choiceB");
        var thirdQuestionC = document.querySelector("#question3choiceC");
        thirdQuestionA.addEventListener("click" , numberOFCLICKS);
        thirdQuestionB.addEventListener("click" , numberOFCLICKS);
        thirdQuestionC.addEventListener("click" , fourthQuestion);
        

        questionDisplay.textContent = "Question 3: What is a good analogy for the relationship between HTML, CSS, and Javascript?";
        thirdQuestionA.textContent = "The value returned is for question 3.";
        thirdQuestionB.textContent = "HTML sets the foundation, CSS defines the dimensions of the walls, while Javascript dictates lighting.";
        thirdQuestionC.textContent = "HTML is the frame of the house, CSS is the paint and interior detailing, while Javascript is the HVAC, dishwasher etc.";
        thirdQuestionC.addEventListener("click" , correct++);
      
             
}

function fourthQuestion() {


        
        
        
        document.getElementById('question3choiceA').id ='question4choiceA';
        document.getElementById('question3choiceB').id ='question4choiceB';
        document.getElementById('question3choiceC').id = 'question4choiceC';
        var fourthQuestionA = document.querySelector("#question4choiceA");
        var fourthQuestionB = document.querySelector("#question4choiceB");
        var fourthQuestionC = document.querySelector("#question4choiceC");
        fourthQuestionA.addEventListener("click" , numberOFCLICKS);
        fourthQuestionB.addEventListener("click" , numberOFCLICKS);
        fourthQuestionC.addEventListener("click" , finishStatement);
        
        console.log ("Question 4 has been chosen");


        questionDisplay.textContent = "Which of the below answers is correctly syntaxed";
        fourthQuestionA.textContent = "var htmlSelect = querySelector('.class');";
        fourthQuestionB.textContent = "if ( i = 0, i < numericalValue, i++ ) { }";
        fourthQuestionC.textContent = "localStorage.setItem( value , value)";
        
        fourthQuestionC.addEventListener("click" , correct++);
        
    
}



function clockDown() {
timeHost == 60;
    
    var timer = setInterval(function() {

        incorrectDisplay.textContent = "Total Answers: " + total;
        
        correctDisplay.textContent = "Correct answers:" + correct ;
        timeHost--;
   
        timeDisplay.textContent = timeHost + "seconds";
        
             
        if (correct >= 4 || timeHost <= 0){
        
        clearInterval(timer);
        finishStatement();
        }

        }, 1000);
        return timeHost;      
}

    
    

function finishStatement() {
    var name = prompt("Enter your name or initials");
   
    

    localStorage.setItem("username", name);
    localStorage.setItem("highscore", correct);
    localStorage.setItem("total", total);




    

     rosterSubmit.textContent = "Name: " + name;
    currentScore.textContent = "Score: " + correct;

     

     return;
    
}




buttonListen.addEventListener("click", start);





