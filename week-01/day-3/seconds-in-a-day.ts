'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

var secondsDaily: number = 24*60*60;

console.log(secondsDaily-(currentHours*60*60+currentMinutes*60+currentSeconds));
// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables