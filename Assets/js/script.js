var timeEl = document.querySelector(".time");

var mainEl = document.getElementById("main");

var minutesLeft = 15;

function setTime() {
    var timerInterval = setInterval(function() {
        minutesLeft--;

        if(minutesLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, )
}