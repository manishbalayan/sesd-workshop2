#!/usr/bin/env node

import { Command } from "commander";
import axios from "axios";

class Calculator {

    add(a: number, b: number) {
        return `add of ${a}+${b} is ${a + b}`;
    }

    subtract(a: number, b: number) {
        return `subtract of ${a}-${b} is ${a - b}`;
    }

    multiply(a: number, b: number) {
        return `multiply of ${a}*${b} is ${a * b}`;
    }

    divide(a: number, b: number) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return `divide of ${a}/${b} is ${a / b}`;
    }

    square(a: number) {
        return `square of ${a} is ${a * a}`;
    }

    cube(a: number) {
        return `cube of ${a} is ${a * a * a}`;
    }
}

class ApiService {

    async getJoke() {
        const res = await axios.get("https://official-joke-api.appspot.com/random_joke");
        return res.data;
    }

    async getQuote() {
        const res = await axios.get("https://api.adviceslip.com/advice");
        return res.data.slip;
    }

    async getGithubUser(username: string) {
        const res = await axios.get(`https://api.github.com/users/${username}`);
        return res.data;
    }
}

const calc = new Calculator();
const api = new ApiService();

const program = new Command();

program
    .name("mycli")
    .description("My CLI Tool built with Node + TypeScript")
    .version("1.0.0");

program
    .command("greet <name>")
    .description("Greet a user")
    .action((name: string) => {
        console.log(`Hello ${name}! 👋`);
    });

program
    .command("add <num1> <num2>")
    .description("Add two numbers")
    .action((num1: string, num2: string) => {
        console.log(calc.add(Number(num1), Number(num2)));
    });

program
    .command("subtract <num1> <num2>")
    .description("Subtract two numbers")
    .action((num1: string, num2: string) => {
        console.log(calc.subtract(Number(num1), Number(num2)));
    });

program
    .command("multiply <num1> <num2>")
    .description("Multiply two numbers")
    .action((num1: string, num2: string) => {
        console.log(calc.multiply(Number(num1), Number(num2)));
    });

program
    .command("divide <num1> <num2>")
    .description("Divide two numbers")
    .action((num1: string, num2: string) => {
        try {
            console.log(calc.divide(Number(num1), Number(num2)));
        } catch (err) {
            console.log("Error:", err.message);
        }
    });

program
    .command("square <num>")
    .description("Square of a number")
    .action((num: string) => {
        console.log(calc.square(Number(num)));
    });

program
    .command("cube <num>")
    .description("Cube of a number")
    .action((num: string) => {
        console.log(calc.cube(Number(num)));
    });

program
    .command("time")
    .description("Show current time")
    .action(() => {
        console.log("Current Time:", new Date().toLocaleString());
    });

program
    .command("joke")
    .description("Get a random joke")
    .action(async () => {
        try {
            const joke = await api.getJoke();
            console.log(joke.setup);
            console.log(joke.punchline);
        } catch {
            console.log("Failed to fetch joke");
        }
    });

program
    .command("quote")
    .description("Get a random quote")
    .action(async () => {
        try {
            const quote = await api.getQuote();

            console.log(`"${quote.advice}"`);

        } catch {
            console.log("Failed to fetch quote");
        }
    });

program
    .command("github <username>")
    .description("Get GitHub user info")
    .action(async (username: string) => {
        try {
            const user = await api.getGithubUser(username);
            console.log("Username:", user.login);
            console.log("Followers:", user.followers);
            console.log("Public Repos:", user.public_repos);
        } catch {
            console.log("User not found");
        }
    });

program.parse();
