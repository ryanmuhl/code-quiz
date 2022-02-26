
var timer = document.getElementById('countdown');
var start = document.querySelector("#start-quiz");
var body = document.body;
var currentQuestionIndex = 0;

var quizQuestions = [

    {
        title: "What does DOM stand for:",
        choices: ["Domain Object Model", "Document Object Model", "Developer Oriented Model"],
        answer: "Document Object Model"
    },
    
    {
        title: "What does JSON stand for:",
        choices: ["JavaScript Object Nation", "JavaScript Object Number", "JavaScript Object Notation"],
        answer: "JavaScript Object Notation"
      },
    
      {
        title: "Which below is not the proper way of declaring a variable in JavaScript:",
        choices: ["var", "inv", "let", "const"],
        answer: "inv"
      },
    
      {
        title: "Which below is not a valid JavaScript Assignment Operator:",
        choices: ["=", "+=", "x", "|="],
        answer: "x"
      },
    
    ];

function startQuiz() {
    document.getElementById ("section").remove();
    countdown ();
    retrieveQuestions ()

    }

function retrieveQuestions () {
    var questionList = document.getElementById ("question-list")
    questionList.removeAttribute ("class", "hide")
    var currentQuestion = quizQuestions[currentQuestionIndex]
    var questionTitle = document.getElementById ("question-title")

    
    var button1 = document.getElementById ("button1")
    var button1Q1 = document.querySelector ("#button1")
    button1.textContent = currentQuestion.choices[currentQuestionIndex + 0];

    var button2 = document.getElementById ("button2")
    var button1Q1 = document.querySelector ("#button2")
    button2.textContent = currentQuestion.choices[currentQuestionIndex + 1];

    var button3 = document.getElementById ("button3")
    var button1Q1 = document.querySelector ("#button3")
    button3.textContent = currentQuestion.choices[currentQuestionIndex + 2];

    questionTitle.textContent = currentQuestion.title

    if 
    }


}


    console.log (quizQuestions)

    //FUNCTION SELECT BUTTON AND CLEAR <SECTION> CONTAINER
    start.addEventListener("click", startQuiz)
  


  
    
// Timer that counts down from 60
function countdown () {
    var timeLeft = 5;

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

