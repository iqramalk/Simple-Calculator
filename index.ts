import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the opertors to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction" , "Division", "Multiplication", "Modulus","Exponentiation"],
  },
]);
//  conditional statement if-else use
if(answer.operator === "Addition")
{
    console.log( answer.firstNumber + answer.secondNumber);  //Adding two given numbers by a user
}
else if( answer.operator === "Subtraction")
{
    console.log( answer.firstNumber - answer.secondNumber); //Subtracting two given numbers by a user
}
else if( answer.operator === "Division")
{
    console.log( answer.firstNumber  / answer.secondNumber); //Dividing two given numbers by a user
}
else if(answer.operator === "Multiplication")
{
    console.log( answer.firstNumber * answer.secondNumber); //Multiplying two given numbers by a user
}
else if(answer.operator === "Modulus")
{
    console.log( answer.firstNumber % answer.secondNumber); //It will give the remainder of two divided numbers
}
else if(answer.operator === "Exponentiation")
{
    console.log( answer.firstNumber ** answer.secondNumber); //Second number will show the power of a given number
}
else{
    console.log("Invalid operator");
    
}



