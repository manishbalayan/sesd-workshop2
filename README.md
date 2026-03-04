# MyCLI – Node.js CLI Tool

MyCLI is a command-line interface (CLI) tool built using **Node.js, TypeScript, and Commander.js**.
It demonstrates **Object-Oriented Programming (OOP)** concepts and integrates multiple external APIs.

This project was developed as part of the **SESD Workshop 2 CLI Project**.

---

# Features

* Built with **Node.js + TypeScript**
* Uses **Commander.js** for CLI command handling
* Implements **Object-Oriented Programming (classes and objects)**
* Provides **11 custom CLI commands**
* Integrates **3 external APIs**
* Can be run globally using **npm link**

---

# Installation

Clone the repository:

```bash
git clone <`https://github.com/manishbalayan/sesd-workshop2`>
cd sesd-workshop2
```

Install dependencies:

```bash
npm install
```

Compile TypeScript:

```bash
npx tsc
```

Link the CLI globally:

```bash
npm link
```

Now the CLI command `mycli` will be available globally in your terminal.

---

# Usage

Run the CLI using:

```bash
mycli <command>
```

Show all commands:

```bash
mycli --help
```

Check version:

```bash
mycli --version
```

---

# Available Commands

| Command                        | Description                         |
| ------------------------------ | ----------------------------------- |
| `mycli greet <name>`           | Greets the user                     |
| `mycli add <num1> <num2>`      | Adds two numbers                    |
| `mycli subtract <num1> <num2>` | Subtracts two numbers               |
| `mycli multiply <num1> <num2>` | Multiplies two numbers              |
| `mycli divide <num1> <num2>`   | Divides two numbers                 |
| `mycli square <num>`           | Calculates square of a number       |
| `mycli cube <num>`             | Calculates cube of a number         |
| `mycli time`                   | Shows the current system time       |
| `mycli joke`                   | Fetches a random joke from an API   |
| `mycli quote`                  | Fetches a random motivational quote |
| `mycli github <username>`      | Displays GitHub user information    |

---

# Example Usage

Greet a user:

```bash
mycli greet Manish
```

Add two numbers:

```bash
mycli add 5 3
```

Get a random joke:

```bash
mycli joke
```

Get a quote:

```bash
mycli quote
```

Get GitHub user information:

```bash
mycli github torvalds
```

---

# API Integrations

This CLI integrates the following APIs:

1. **Official Joke API** – Random jokes
2. **Quotable API** – Random quotes
3. **GitHub API** – GitHub user information

---

# Technologies Used

* Node.js
* TypeScript
* Commander.js
* Axios

---

# Project Structure

```
sesd-workshop2
│
├── src
│   └── index.ts
│
├── dist
│   └── index.js
│
├── package.json
├── tsconfig.json
└── README.md
```

---

# Author

Manish
SESD Workshop 2 CLI Project
