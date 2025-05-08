/*****************************
 Name of task: For loops.
 Author: Angus. 
 Date: Week 2 term 2 2025.   
 purpose: Practice task.
 ****************************/



//Variables
let numberAskA = 0;
var total = 0;
var convert = 0;
/*****************************
Main code
*****************************/
console.log("Running t08_for_loop.js");
for (count = 0; count < 5; count++) {
    let numberAskA = prompt("give me a number!");
    numberAskA = Number(numberAskA);
    convert += numberAskA;
    console.log(convert);
}
alert(convert)


/*****************************
Functions 
*****************************/  