/*****************************
 Name of task: validation.
 Author: Angus. 
 Date: Week 5 term 2 2025.   
 purpose: Practice task.
 ****************************/
console.log("Running t13_validation");

//Variables
var userName ;
let userNameIsinvalid = true;
let errorMessage = ("invalid! \n");
/*****************************
Main code
*****************************/
//asking for name
while (userNameIsinvalid){
    userName = prompt(errorMessage + "what is youre name?")
        if (!isNaN(userName) || userName == "" || userName == null || userName == " ") {
            
            
        } else {
            userNameIsinvalid = false;
        }
}



/***************************** 
Functions 
*****************************/

   