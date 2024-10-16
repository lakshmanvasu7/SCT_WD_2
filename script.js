// script.js

// Variables to keep track of time
let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

// Stopwatch running state
let running = false;

// DOM elements
const display = document.getElementById('display');
const lapTimes = document.getElementById('lapTimes');

// Function to format time
function formatTime() {
    let hrs = hours < 10 ? `0${hours}` : hours;
    let mins = minutes < 10 ? `0${minutes}` : minutes;
    let secs = seconds < 10 ? `0${seconds}` : seconds;
    return `${hrs}:${mins}:${secs}`;
}

// Function to start the stopwatch
function startStopwatch() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            display.textContent = formatTime();
        }, 1000);
    }
}

// Function to pause the stopwatch
function pauseStopwatch() {
    running = false;
    clearInterval(timer);
}

// Function to reset the stopwatch
function resetStopwatch() {
    running = false;
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    display.textContent = formatTime();
    lapTimes.innerHTML = '';
}

// Function to record lap times
function recordLap() {
    const lapTime = document.createElement('li');
    lapTime.textContent = formatTime();
    lapTimes.appendChild(lapTime);
}

// Event listeners for buttons
document.getElementById('start').addEventListener('click', startStopwatch);
document.getElementById('pause').addEventListener('click', pauseStopwatch);
document.getElementById('reset').addEventListener('click', resetStopwatch);
document.getElementById('lap').addEventListener('click', recordLap);
