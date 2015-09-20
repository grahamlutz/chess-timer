
'use strict';

var timer;

// Create timer object, initialized to 4:00 with startPause     //
// function to decrement timer, display current time, and       //
// award the game.                                              //

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

// Instantiate two new Timers                                   //

var timer1 = new Timer();
var timer2 = new Timer();

// Decrement mins and seconds of selected timer                 //

function countDown(clock) {
    if (clock.seconds <= 0){
        clock.mins--;
        clock.seconds = 60;
    }
    clock.seconds--;
}

// Manipulate DOM elements to display correct time              //

function writeTime(id, clock) {
    if (clock.seconds >= 10) {
        document.getElementById(id).innerHTML = clock.mins + ":" + clock.seconds;
    } else {
        document.getElementById(id).innerHTML = clock.mins + ":" + "0" + clock.seconds;
    }
}

// When a timer reaches zero, stop the timer, reset the clocks, //
// and award game to opposing player.                           //

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

// Reset timers by clearing the timer interval,           //
// reinitializing the timers mins and seconds properties       //
// to 4 and 0, rspectively, and reset HTML to display a 4:00   //
// clock.                                                      //

function reset() {
    clearInterval(timer);
    timer1.mins = 4;
    timer1.seconds = 0;
    timer2.mins = 4;
    timer2.seconds = 0;
    document.getElementById('time1').innerHTML = "4:00";
    document.getElementById('time2').innerHTML = "4:00";
}
