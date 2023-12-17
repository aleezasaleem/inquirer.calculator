import inquirer from "inquirer";
let answer = await inquirer.prompt([{
        type: "number",
        name: "num1",
        message: "Enter the first number"
    },
    {
        type: "number",
        name: "num2",
        message: "Enter the last number"
    }, {
        type: "list",
        name: "operator",
        message: "Enter your operator",
        choices: ["add", "subtract", "multiply", "divide"]
    }]);
let result;
switch (answer.operator) {
    case "add":
        result = answer.num1 + answer.num2;
        console.log(result);
        break;
    case "subtract":
        result = answer.num1 - answer.num2;
        console.log(result);
        break;
    case "multiply":
        result = answer.num1 * answer.num2;
        console.log(result);
        break;
    case "divide":
        result = answer.num1 / answer.num2;
        console.log(result);
        break;
}
