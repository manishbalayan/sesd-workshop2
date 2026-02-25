#!/usr/bin/env node
const { Command } = require("commander");
const axios = require("axios");
const program = new Command();
program
    .command("greet <name>")
    .action((name) => {
    console.log(`Hello ${name}`);
});
program
    .command("add <num1> <num2>")
    .action((num1, num2) => {
    console.log(` ${num1} + ${num2} is ${Number(num1) + Number(num2)}`);
});
program
    .command("subtract <num1> <num2>")
    .action((num1, num2) => {
    console.log(`${num1} - ${num2} is ${Number(num1) - Number(num2)}`);
});
program
    .command("multiply <num1> <num2>")
    .action((num1, num2) => {
    console.log(`${num1} X ${num2} = ${Number(num1) * Number(num2)}`);
});
program
    .command("divide <num1> <num2>")
    .action((num1, num2) => {
    if (num2 === 0) {
        console.log("Error: Division by zero is not allowed.");
    }
    else {
        console.log(`${num1} / ${num2} is ${Number(num1) / Number(num2)}`);
    }
});
program
    .command('joke')
    .action(async () => {
    try {
        const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
        console.log(response.data.setup);
        console.log(response.data.punchline);
    }
    catch (error) {
        console.log(error);
    }
});
program.parse();
