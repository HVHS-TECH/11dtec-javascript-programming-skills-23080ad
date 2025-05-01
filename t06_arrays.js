/*****************************
 Name of task: arrays.
 Author: Angus. 
 Date: Week 1 term 2 2025.   
 purpose: Practice task.
 ****************************/

//Variables

let peopleNames = "Angus";
let year = 2025;
let age = 15;
let money = 0;
let birthYear = 2009;
let futureAge = 26;
let halfMoney = 0;
let chocolateOpinions = ["You loath chocolate", "Chocolate is meh", "Chocolate is pretty good", "Chocolate is the best thing EVER!!!!"];
let choice = prompt("on a scale of 0-3 how much do you like chocolate");

/*****************************
Main code
*****************************/

console.log("Running t01_introduction.js");
prompt("welcome to my first Jscript project \nwhat is youre name?");
prompt("what is your age?");
prompt("how much gold do you have in the vaults?");
alert("hi " + peopleNames +
    " as of " + year + " you are " + age + " years old." +
    " you were born in " + birthYear +
    " in ten years you will be " + futureAge +
    " you have " + money + " dollars " +
    " half of your money is " + halfMoney, " bye");
    alert(chocolateOpinions[choice]);
/*****************************
Functions 
*****************************/