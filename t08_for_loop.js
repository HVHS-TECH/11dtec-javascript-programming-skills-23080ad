/*****************************
 Name of task: For loops.
 Author: Angus. 
 Date: Week 2 term 2 2025.   
 purpose: Practice task.
 ****************************/



//Variables
let numberAskA = 0;
var total;
var convert;
/*****************************
Main code
*****************************/
console.log("Running t08_for_loop.js");
for (count = 0; count < 6; count++) {
    let numberAskA = prompt("give me a number!");
    numberAskA = Number(numberAskA);
    total = numberAskA + total;
    console.log(total);
    //convert = total;
}
alert(total)


/*****************************
Functions 
*****************************/  