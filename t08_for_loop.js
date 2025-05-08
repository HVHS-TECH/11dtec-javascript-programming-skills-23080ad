/*****************************
 Name of task: For loops.
 Author: Angus. 
 Date: Week 2 term 2 2025.   
 purpose: Practice task.
 ****************************/



//Variables
let numberAskA = 0;
let numberAskB = 0;
var total;
/*****************************
Main code
*****************************/
console.log("Running t08_for_loop.js");
for (count = 0; count < 6; count++) {
    let numberAskA = prompt("give me a number!");
    numberAskA = Number(numberAskA);
    let numberAskB = prompt("give me a number!");
    numberAskB = Number(numberAskB);
    total = numberAskB + numberAskA;
    console.log(total);
}
alert(total)


/*****************************
Functions 
*****************************/