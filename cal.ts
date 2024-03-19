#! /usr/bin/env node




import inquirer from "inquirer";

const ans = await inquirer.prompt( [
    {message: "enter a value: ", type: "number", name: "num1"},
    {message: "enter 2nd value: ", type:'number', name: 'num2'},
    {
        message: 'select your desired operator',
        type: 'list',
        name: 'operator',
        choices: ['addition', 'subtraction', 'division', 'multiplication', 'exponent'],
    },
]);

if (ans.operator === "addition") {
    console.log(ans.num1 + ans.num2);
}

else if (ans.operator === "subtraction") {
    console.log(ans.num1 - ans.num2);
}

else if (ans.operator === "division") {
    console.log(ans.num1 / ans.num2);
}

else if (ans.operator === "multiplication") {
    console.log(ans.num1 * ans.num2);
}

else if (ans.operator === "exponent") {
    console.log(ans.num1 ** ans.num2);
}

else { 
    console.log("Error");
}
