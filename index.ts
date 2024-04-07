#!/usr/bin/env node

import inquirer from "inquirer"

const answer = await inquirer.prompt([{
    name:"number1",
    type:"number",
    message:"Please Enter your First Number"
},
{
    name:"number2",
    type:"number",
    message:"Please Enter your Second Number"
},{
    name:"operator",
    type:"list",
    message:"Please Select your operator to operate",
    choices:["Addition" , "Substraction", "Multiplication" , "Division"]
},
])

//extract Variables from inquirer
let Number1:number = (answer.number1);
let number2:number = (answer.number2);
let opr:string = (answer.operator);

//Conditional operators
if (opr === "Addition") {
    console.log(`${Number1} + ${number2} = ${Number1+number2}`);
}
else if (opr === "Substraction") {
    console.log(`${Number1} - ${number2} = ${Number1-number2}`);
}
else if (opr === "Multiplication") {
    console.log(`${Number1} x ${number2} = ${Number1*number2}`);
}
else if (opr === "Division") {
    console.log(`${Number1} / ${number2} = ${Number1/number2}`);
}
else("Please Select Valid Operator!");


