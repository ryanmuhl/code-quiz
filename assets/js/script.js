//Start Global variables/Elements 
var body = document.body
var timer = document.getElementById('countdown');
var start = document.querySelector("#start-quiz");
var index = 0;
var timeLeft = 40;
var questionTitle = document.getElementById("question-title");
var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var right = document.getElementById('result');
button1.addEventListener("click", assessAnswers);
button2.addEventListener("click", assessAnswers);
button3.addEventListener("click", assessAnswers);
start.addEventListener("click", startQuiz)
var currentQuestion;
var timeInterval;
var quesListHide = document.getElementById("question-list")


var endQuizButton = document.getElementById("submit")
endQuizButton.textContent = "End Quiz"


var quizQuestions = [

    {
        ques: "What does DOM stand for:",
        choices: ["Domain Object Model", "Document Object Model", "Developer Oriented Model"],
        answer: "Document Object Model"
    },

    {
        ques: "What does JSON stand for:",
        choices: ["JavaScript Object Nation", "JavaScript Object Number", "JavaScript Object Notation"],
        answer: "JavaScript Object Notation"
    },

    {
        ques: "Which below is not the proper way of declaring a variable in JavaScript:",
        choices: ["var", "inv", "let"],
        answer: "inv"
    },

    {
        ques: "What is Ryan Uhl's favorite color:",
        choices: ["green", "orange", "yellow"],
        answer: "green"
    },

];
//End Global variables/Elements 





//Function to start quiz and hide main section/welcome screen
//also removes hidden display hidden for class hide
//Populate Question function called within startQuiz function

function startQuiz() {
    countdown()
    nextQuestion()

}
//End startQuiz Function


//Function to assess answers
//displays Right or Wrong Answer when button selected
//clears current questions once button selected and starts new set of questions
//adds or removes time based on Right or Wrong answer
function assessAnswers(event) {



    if (event.target.innerHTML === currentQuestion.answer) {
        right.textContent = "Right Answer"
        right.removeAttribute("class", "no-bueno")
        timeLeft = timeLeft + 20;
        index = index + 1
        nextQuestion()

    }



    else {

        right.textContent = "Wrong Answer"
        right.removeAttribute("class", "no-bueno")
        timeLeft = timeLeft - 20;
        index = index + 1
        nextQuestion()


    }

}

function nextQuestion() {

    if (index >= quizQuestions.length) {
        clearInterval(timeInterval);
        inputForm()

    }
    else {



        currentQuestion = quizQuestions[index]
        button1.textContent = currentQuestion.choices[0];
        button2.textContent = currentQuestion.choices[1];
        button3.textContent = currentQuestion.choices[2];
        questionTitle.textContent = currentQuestion.ques;



        var mainHide = document.getElementById("section")
        mainHide.setAttribute("style", "display: none")

        quesListHide.removeAttribute("class", "hide")

    }
}

function inputForm() {

    var inputForm = document.getElementById("input-form")
    inputForm.removeAttribute("class", "hide")


    quesListHide.remove()

    var formContainer = document.getElementById("form-container")

    formContainer.append("Score:   " + timeLeft)

}


function saveInitials() {
    var inputField = document.getElementById("input-field");
    var inputForm = document.getElementById("input-form")

    var inputData = inputField.value
    console.log(inputData)
    console.log(allInfo)

    var allInfo = {

        initials: inputData,
        score: timeLeft,

    }

    window.localStorage.setItem("user", JSON.stringify(allInfo));



    if (allInfo) {






        // var dataAll = document.createElement ('p')
        var dataInitials = (window.localStorage.getItem('user'))



        console.log()


    }

    // window.localStorage.clear ()

}

function endQuiz(event) {





    event.preventDefault()
    saveInitials()

}

//Function that Decrements time by 1 second
function countdown() {



    timeInterval = setInterval(function () {

        if (timeLeft > 0) {

            timer.textContent = timeLeft + ' seconds remaining';

            timeLeft--;
        } else if (timeLeft === 0) {
            timer.textContent = timeLeft + ' seconds remaining';
            timeLeft--;

        } else {

            timer.textContent = '';
            clearInterval(timeInterval);
            inputForm()
        }


    }, 1000);

}
endQuizButton.addEventListener("click", endQuiz);
//End Countdown Function



//variable to represent current question I am within
//variable to represent how many points
//function change question and button option and update points
//change question by update currentquestionindex by increasing +1 call function to
//populate buttons



