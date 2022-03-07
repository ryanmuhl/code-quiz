//Start Global variables/Elements 
var body = document.body
var currentQuestion;
var timeInterval;
var index = 0;
var timeLeft = 40;

var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var newQuiz = document.querySelector("#new-quiz")
var clearButton = document.querySelector("#clear")
var start = document.querySelector("#start-quiz");

var timer = document.getElementById('countdown');
var questionTitle = document.getElementById("question-title");
var right = document.getElementById('result');
var quesListHide = document.getElementById("question-list")
var formContainer = document.getElementById("form-container")
var inputFormData = document.getElementById("input-form")
var scoreTime = document.getElementById("score-time")
var allScores = document.getElementById("all-scores")
var endQuizButton = document.getElementById("submit")

button1.addEventListener("click", assessAnswers);
button2.addEventListener("click", assessAnswers);
button3.addEventListener("click", assessAnswers);
start.addEventListener("click", startQuiz)

clearButton.textContent = "Clear High Scores"
newQuiz.textContent = "New Quiz"
endQuizButton.textContent = "End Quiz"

//Questions
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
        ques: "Inside which HTML element do we put the JavaScript",
        choices: ["<script>", "<js>", "<javascript"],
        answer: "<script>"
    },

    {
        ques: "What is Ryan Uhl's favorite color:",
        choices: ["green", "orange", "yellow"],
        answer: "green"
    },

];
//End Questions

//End Global variables/Elements 





//Function to start quiz and hide main section/welcome screen
//starts countdown
//starts first quiz question
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

//Function to move to next set of quesitons when answer 
//is selected.  If end of questions then time will stop 
//and user will be taken to input form
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
//End next Question Function


//Function to remove question list div and un-hide form div
//to display input fei
function inputForm() {
    inputFormData.removeAttribute("class", "hide")
    quesListHide.remove()
    scoreTime.append("Score:   " + timeLeft)

}
//End input form Function


//Function to input initials into form
//then get high score and initials from local storage concat/parse data and push to array
//then add data to array
//then append to page
function saveInitials() {
    var inputField = document.getElementById("input-field");
    var inputData = inputField.value
    var array = []

    var allInfo = {
        initials: inputData,
        score: timeLeft,
    }

    if (inputData) {
        var listContent = document.createElement("li")

        array = array.concat(JSON.parse(window.localStorage.getItem('user') || '[]'))
        array.push(allInfo)
        window.localStorage.setItem("user", JSON.stringify(array))

        console.log(array)

        for (i = 0; i < array.length; i++) {

            listContent.textContent = ("User:   " + array[i].initials + "Score:   " + array[i].score)
            list.append(listContent)
        }

    }
    clearInitials()
    newQuizQues()

}
//End Save initials Function


//Function to clear initials/local storage when clear button selected
function clearInitials(event) {
    var clearB = document.getElementById("clear")
    clearB.removeAttribute("class", "hide")
    clearButton.addEventListener("click", clearInitials)

    console.log()


    if (event) {
        window.localStorage.clear()

        var clearAllScores = document.getElementById("list")

        clearAllScores.remove()
        event.preventDefault()
    }
}
//End clear initls Function


//Function to un-hide new quiz question button and make it clickable
//Start New Quiz 
function newQuizQues() {
    var newQ = document.getElementById("new-quiz")
    newQ.removeAttribute("class", "hide");
    newQuiz.addEventListener("click", newQuizQues)

}
//End new quiz question function


//Function to end quiz by inputing initials 
//and selecting end quiz button
function endQuiz(event) {
    event.preventDefault()
    saveInitials()
}
//End of end Quiz function


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
//End Countdown Function

endQuizButton.addEventListener("click", endQuiz);







