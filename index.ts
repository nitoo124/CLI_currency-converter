#! /usr/bin/env node

import inquirer from "inquirer";

import chalk  from "chalk";

console.log(chalk.green.bold('\n \t Welcome Everyone! \n'));

let coversion_rate: any = {
    'USD' : 1,
    'CAD' : 1.3,
    'EUR' : 0.9,
    'PKR' : 280,
}

let answers = await inquirer.prompt([
    {
        name : 'FROM',
        type : 'list',
        choices : ['USD', 'CAD', 'EUR', 'PKR'],
        message : 'Select the currency to convert from?'  

    },

    {
        name : 'TO',
        type : 'list',
        choices : ['USD', 'CAD', 'EUR', 'PKR'],
        message : 'Select the currency to convert from?'  

    },

    {
        name : 'amount',
        type : 'number',
        message : 'Entre your amount?'  

    },

])

let from_amount = coversion_rate[answers.FROM]
let to_amount = coversion_rate[answers.TO]
let amount =answers.amount

//formula of currency conversion
let base_amount : number = amount / from_amount
let converted_amount : number = base_amount * to_amount

console.log(chalk.blueBright.bold(`your converted amount is ${converted_amount.toFixed(2)}`));


