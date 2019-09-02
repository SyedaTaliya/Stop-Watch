// time values.......

let seconds = 0;

let minutes = 0;

let hours = 0;

isRunning = false;

let int;


function timer() {
    seconds++

    //--------------------condition to increase minutes and hours........
    if (seconds === 59) {
        seconds = 0;
        minutes++
    }

    if (minutes === 59) {
        minutes = 0;
        hours++;
    }

    document.querySelector("#time").innerHTML = `${hours}  :  ${minutes}  :  ${seconds}`;

}



function start() {
    if(isRunning === false){
    int = setInterval(timer, 1000);
    isRunning = true;
    }
}



function stopTimer() {

    clearInterval(int);

    isRunning = false;

}


function resetTime() {
    stopTimer();

    document.querySelector("#time").innerHTML = "00:00:00";

    seconds = 0;

    minutes = 0;

    hours = 0;
}