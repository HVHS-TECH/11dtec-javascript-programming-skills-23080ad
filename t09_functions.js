/*****************************
 Name of task: functions.
 Author: Angus. 
 Date: Week 2 term 2 2025.   
 purpose: Practice task.
 ****************************/


//Variables


/*****************************
Main code
*****************************/
console.log("Running t09_functions.js");
askUserAge();
askUserName();
askUserMoney();

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
    userMoney = prompt("how many dollars do you have?");
    if (userMoney >= 6) {
        alert("you could buy a chocolate bar.")
    } else {
        alert("you couldnt buy a chocolate bar")
    }
}