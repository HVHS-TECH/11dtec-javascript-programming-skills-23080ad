/*****************************
 Name of task: constants.
 Author: Angus. 
 Date: Week 6 term 2 2025.   
 purpose: Practice task.
 ****************************/
console.log("Running t15_array_sorting");


//Variables

//Name variables
var userName;
var userNameIsInvalid = true;

//global error message
var errorMessage = "Hello, ";

//Age variables
var userAge;
var ageIsInvalid = true;
const MINAGE = 1;
const MAXAGE = 130;

//Money variables
var userCash = 0;
var moneyIsInvalid = true;
const MINCASH = 1;
const MAXCASH = 10;

//Arrays
let chocolatesArray = ["Mars bar", "Moro bar", "King  Size Crunchy", "Dairy Milk Block", "Lindt Block"];

let priceArray = [2, 2.50, 3, 6, 7]

//Menu
let avaliableChoc = "Here is a list of every avaliable chocolate bar and their prices"

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
    if (isNaN(userAge) || userAge == "" || userAge == null || userAge == " " || userAge < MINAGE || userAge > MAXAGE) {
        errorMessage = "invalid! \n";

    } else {
        alert("You are, " + userAge + "!");
        ageIsInvalid = false;
    }
}

//Show avaliable chocolate bars
for (i = 0; i < chocolatesArray.length; i++) {
    avaliableChoc = avaliableChoc + "\nchocolate " + i + " is " + chocolatesArray[i];
}
alert(avaliableChoc)

//ask for pocket money
while (moneyIsInvalid) {
    userCash = prompt(errorMessage + "How much pocket money do you have?");
    if (isNaN(userCash) || userCash == "" || userCash == null || userCash == " " || userCash < MINCASH || userCash > MAXCASH) {
        errorMessage = "invalid! \nYou must have 1-10 dollars! \n";
    } else {
        alert("You have, " + userCash + " dollars!");
        moneyIsInvalid = false;
    }
}

//Calcualte the most expensive chocolate the user can buy
for (i = 0; i < priceArray.length; i++ && userCash <= priceArray[i]) {
    chocolatesArray = priceArray;
}
alert("This is the most exspensive chocolate you can buy is " + chocolatesArray[i] + " This chocolate costs $" + priceArray[i]);

/***************************** 
Functions 
*****************************/

