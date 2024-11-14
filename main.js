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









function menu() {
// Setup the menu
let message = `Hi! Please make a selection:
1 - Play
2 - Options
3 - DLC
4 - Check for Updates
5 - Exit
`
// Prompt with the menu
let selection = Number(prompt(message));
if (selection == 1) {
    alert ("Lets play!")
    
}
else if (selection == 2){
    alert("You selected Options.")

}
else if (selection == 3) {
    alert("No new DLC at this time.")
}
else if (selection == 4) {
    alert("Everything is up to date")
}
else if(selection == 5){
    alert("Bye!")
}
}

function countup(x) {
let n = 1 
while (n <=x) {
    console.log(n)
n = n+1
}
}

function countdown(start, stop){
    let n = start
    while (n>=stop)  {
        console.log(n)
n = n-1

}
}

function random_until(min, max, stop) {
    if (max <= min){
        return -1
    }
    if (stop > max || stop > max) {
return -1 
    }
    let x = randInt(min, max) 
    while (x !=stop) {
        console.log(x)
x = randInt(min, max)
} 
return stop
}

function average(n) {
    let avg = 0
    let count = 1
    avg += +prompt(`Please enter value ${count}/${n}`)
    while(count <=n) {
        count = count +1

    }
avg = round(avg/n, 1)
console.log(`The average is ${avg}`)
}

