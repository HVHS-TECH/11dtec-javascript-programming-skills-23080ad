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
let userNameIsinvalid = true;

//global error message
var errorMessage = "Hello, ";

//Age variables
var userAge;
let ageIsInvalid = true;
/*****************************
Main code
*****************************/
//asking for name
while (userNameIsInvalid) {
    userName = prompt(errorMessage + "what is youre name?")
    if (!isNaN(userName) || userName == "" || userName == null || userName == " ") {
        errorMessage = "invalid! \n";

    } else {
        userNameIsInvalid = false;
        alert("Welcome, " + userName + "!")
    }
}
//asking for age
while (ageIsInvalid) {
    userAge = prompt(errorMessage + "what is youre name?")
    if (isNaN(userAge) || userAge == "" || userAge == null || userName == " ") {
        errorMessage = "invalid! \n";

    } else {
        ageIsInvalid = false;
        alert("Welcome, " + userName + "!")
    }



/***************************** 
Functions 
*****************************/

