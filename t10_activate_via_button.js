/*****************************
 Name of task: activate via buttons.
 Author: Angus. 
 Date: Week 2 term 2 2025.   
 purpose: Practice task.
 ****************************/


//Variables


/*****************************
Main code
*****************************/
console.log("Running t10_activate_via_buttons.js");

/***************************** 
Functions 
*****************************/
function askUserName() {
    userName = prompt("What is your name?");
}
function askUserAge() {
    userAge = prompt("How old are you?");
}
function askUserMoney() {
    userMoney = prompt("How many dollars do you have?");
    if (userMoney >= 6) {
        alert("You could buy a chocolate bar.")
    } else {
        alert("You can't buy a chocolate bar, sorry.")
    }
}
function start() {
    userName = askUserAge();
    userAge = askUserName();
    userMoney = askUserMoney();
}