'use strict';

var timer;

function Timer() {
    var self = this;
    this.mins = 4;
    this.seconds = 0,
    this.startPause = function(id) {
        clearInterval(timer);
        timer = setInterval(function() {
            countDown(self);
            writeTime(id, self);
            awardGame();
        }, 1000);
    }
}

var timer1 = new Timer();
var timer2 = new Timer();

function countDown(clock) {
    if (clock.seconds <= 0){
        clock.mins--;
        clock.seconds = 60;
    }
    clock.seconds--;
}

function writeTime(id, clock) {
    if (clock.seconds >= 10) {
        document.getElementById(id).innerHTML = clock.mins + ":" + clock.seconds;
    } else {
        document.getElementById(id).innerHTML = clock.mins + ":" + "0" + clock.seconds;
    }
}

function awardGame() {
    if(timer1.mins == 0 && timer1.seconds == 0) {
        clearInterval(timer);
        reset();
        alert("Player 2 Wins!");
    } else if (timer2.mins == 0 && timer2.seconds == 0) {
        clearInterval(timer);
        reset();
        alert("Player 1 Wins!");
    } else {
        return;
    }
}

function reset() {
    clearInterval(timer);
    timer1.mins = 4;
    timer1.seconds = 0;
    timer2.mins = 4;
    timer2.seconds = 0;
    document.getElementById('time1').innerHTML = "4:00";
    document.getElementById('time2').innerHTML = "4:00";
}
