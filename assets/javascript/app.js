

var timer = 40;
var intervalId;


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
    $("#after-submit").attr("visibility: hidden");

}


