/**
 * Unit 3 - Conditionals and Loops
 * ICS3 - Mr. Brash 🐿️
 * 
 * For this unit, Mr. Brash is trying something different. Each lesson will
 * be in this one repository, separated in the Lessons folder.
 * 
 * If you run into Git or Github issues, call Mr. Brash over.
 **/ 


'use strict';

/*** Event Listeners ***/



/*** Functions ***/

// A very accurate rounding function
function round(value, decimals) {
    let multiplier = 10**decimals;
    return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
}

// Get a random number from min to max
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startgame() {
let user_name = prompt("please enter your name")
alert(`Welcome ${user_name} to the haunted St. Matts!`)
let choice = prompt("do you want to enter (1) library or (2) autoshop ?")
if (choice == 1) 
    library()

if (choice == 2)
    autoshop()
}



function library() {
let choice = prompt("You see a creepy old book on a dusty table. Do you (1) open it or (2) leave it alone?")
if (choice == 1)
    openit()
if (choice == 2)
    leaveit()
}

function openit() {
    alert("A ghost emerges from the book and scares you to death!")
    alert("The End!")
}

function leaveit() {
    alert("You quietly leave the library and find the exit. You survive!")
    alert("The End!")
}



function autoshop() {
let choice = prompt("You hear strange noises. Do you (1) investigate or (2) run away?")
if (choice == 1)
    investigate()
if (choice == 2)
    run()
}

function investigate() {
    alert("You discover a car trunk filled with candy!")
    alert("The End!")
}

function run() {
    alert("You trip and fall... The ghost catches you!")
    alert("The End!")
}