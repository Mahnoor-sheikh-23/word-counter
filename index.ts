#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.magentaBright(`\n\t\t  ~~~~~~~ HEY WELLCOME TO THIS WORD COUNTER ~~~~~~~ \n`));

let user:{sentence : string} = await inquirer.prompt([{
    name : "sentence",
    type : "input",
    message : chalk.rgb(125,199,280)("Write paragraph here ...\n")
}])
let whiteSpace = user.sentence.trim().split(" ")
console.log(whiteSpace);
console.log(chalk.yellowBright
(`\n\t\tThe total word in this sentence is :  ${whiteSpace.length} \n`))




