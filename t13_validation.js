/*****************************
 Name of task: validation.
 Author: Angus. 
 Date: Week 5 term 2 2025.   
 purpose: Practice task.
 ****************************/
console.log("Running t13_validation");

//Variables

//Name variables
var userName;
var userNameIsInvalid = true;

//global error message
var errorMessage = "Hello, ";

//Age variables
var userAge;
var ageIsInvalid = true;

//Money variables
var userCash;
var moneyIsInvalid = true;
var minCash = 1;
var maxCash = 5;
/*****************************
Main code
*****************************/
//asking for name
while (userNameIsInvalid) {
    userName = prompt(errorMessage + "what is youre name?");
    if (!isNaN(userName) || userName == "" || userName == null || userName == " ") {
        errorMessage = "invalid! \n";

    } else {
        alert("Welcome, " + userName + "!");
        userNameIsInvalid = false;
    }
}

//asking for age
while (ageIsInvalid) {
    userAge = prompt(errorMessage + "How old are you?");
    if (isNaN(userAge) || userAge == "" || userAge == null || userAge == " "){
        errorMessage = "invalid! \n";

    } else {
        alert("You are, " + userAge + "!");
        ageIsInvalid = false;
    }
}

//ask for pocket money
while (moneyIsInvalid) {
    userCash = prompt(errorMessage + "How much pocket money do you have?");
    if (isNaN(userCash) || userCash == "" || userCash == null || userCash == " " || userCash < minCash || userCash > maxCash) {
        errorMessage = "invalid! \nYou must have 1-5 dollars! \n";
    } else {
        alert("You have, " + userCash + " dollars!");
        moneyIsInvalid = false;
    }
}
/***************************** 
Functions 
*****************************/

