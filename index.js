#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter Your Sentence here to count the words: "
    }
]);
const words = answer.Sentence.trim().split(" ");
console.log(words);
console.log(`Your Sentence has ${words.length} words`);
