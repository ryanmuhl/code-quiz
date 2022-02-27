
var timer = document.getElementById('countdown');
var start = document.querySelector("#start-quiz");
var index = 0;
var timeLeft = 60;
var questionTitle = document.getElementById ("question-title");
var button1 = document.querySelector ("#button1");
var button2 = document.querySelector ("#button2");
var button3 = document.querySelector ("#button3");
var right = document.getElementById ('result');
var currentQuestion;
var points;



var quizQuestions = [

    {
        title: "What does DOM stand for:",
        choices: ["1) Domain Object Model", "2) Document Object Model", "3) Developer Oriented Model"],
        answer: "Document Object Model"
    },
    
    {
        title: "What does JSON stand for:",
        choices: ["1) JavaScript Object Nation", "2) JavaScript Object Number", "3) JavaScript Object Notation"],
        answer: "JavaScript Object Notation"
      },
    
      {
        title: "Which below is not the proper way of declaring a variable in JavaScript:",
        choices: ["1) var", "2) inv", "3) let"],
        answer: "inv"
      },
    
    ];

function startQuiz() {
    var mainHide = document.getElementById ("section")
    mainHide.setAttribute ("style", "display: none")
    countdown ();
    var questionList = document.getElementById ("question-list")
    questionList.removeAttribute ("class", "hide")
    currentQuestion = quizQuestions[index]
    populateQuestion ()
    
   
    

    }

    
    function populateQuestion () {

        button1.textContent=currentQuestion.choices[0];
        button2.textContent=currentQuestion.choices[1];
        button3.textContent=currentQuestion.choices[2];
        questionTitle.textContent=currentQuestion.title;
        
    }

    
    
    button1.addEventListener ("click", assessAnswers);
    button2.addEventListener ("click", assessAnswers);
    button3.addEventListener ("click", assessAnswers);

    function assessAnswers (event) {
        
    
     if (event.target === button2) {
        
        right.textContent = "Right Answer"
        right.removeAttribute ("class", "no-bueno")
        index++;
        

    } 
    
    else {
        
        right.textContent = "Wrong Answer"
        right.removeAttribute ("class", "no-bueno")
        index++;
     }
     startQuiz ()
}





//variable to represent current question I am within
//variable to represent how many points
//function change question and button option and update points
//change question by update currentquestionindex by increasing +1 call function to 
//populate buttons


    




  
    
// Timer that counts down from 60
function countdown () {
    

var timeInterval = setInterval(function () {
    
    if (timeLeft > 0) {

        timer.textContent = timeLeft + ' seconds remaining';

        timeLeft--;
    }else if (timeLeft === 0) {
        timer.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
        
    }else {
        timer.textcontent = '';
        alert ("See Quiz Results")
        clearInterval(timeInterval);
    }
}, 1000);
}

function displayMessage() {
    var wordCount = 0
}

displayMessage() 
//FUNCTION SELECT BUTTON AND CLEAR <SECTION> CONTAINER
start.addEventListener("click", startQuiz)
  
