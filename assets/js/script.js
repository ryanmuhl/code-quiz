
var timer = document.getElementById('countdown');






















// Timer that counts down from 60
function countdown () {
    var timeLeft = 15;

var timeInterval = setInterval(function () {
    if (timeLeft > 1) {

        timer.textContent = timeLeft + ' seconds remaining';

        timeLeft--;
    }else if (timeLeft === 1) {
        timer.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
    }else {
        timer.textcontent = '';

        clearInterval(timeInterval);
        
    }
}, 1000);
}

function displayMessage() {
    var wordCount = 0
}

countdown ();