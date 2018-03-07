

var timer = 40;
var intervalId;

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var correct = 0;

var messages = ["Awesome", "You can do better", ".....Really....."];
var range;





function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
function decrement() {
    timer--;
    $("#timer").html("<h2>" + timer + "</h2>");
    if (timer === 0) {
        stop();
        alert("Time Up!");
    }
}
function stop() {
    clearInterval(intervalId);
}
run();



function check() {
    if (question1 === "breakfast") {
        correct++;
    } if (question2 === "hell") {
        correct++;
    } if (question3 === "tammy") {
        correct++;
    }    
    if (correct < 1) {
        range = 2;
    } if (correct > 0 && correct < 3) {
        score = 1;
    } if (correct > 2) {
        score = 0;
    }


    $("#amount-correct").attr(style = "visible").text("You got " + correct + "correct");
    $("#message").html(messages[range]);
}

check();


