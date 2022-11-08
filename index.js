const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generatePage = require("./src/generate-html");
const inquirer = require("inquirer");
const fs = require("fs");
const { validate } = require("@babel/types");

function promptManager() {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is your manager's name?",
                validate: function (input) {
                    if (input) {
                        return true;
                    }
                    console.log("Please enter a name!");
                    return false;
                },
            },
            {
                type: "input",
                name: "id",
                message: "What is your manager's employee id?",
                validate: function (input) {
                  if (input) {
                    return true;
                  }
                  console.log("Please enter an ID!");
                  return false;
                },
              },
              {
                type: "input",
                name: "email",
                message: "What is your manager's email?",
                validate: function (input) {
                  if (input.includes("@")) {
                    return true;
                  }
                  console.log("Please enter a valid email!");
                  return false;
                },
              },
              {
                type: "input",
                name: "office",
                message: "what is your manager's office number?",
                validate: function (input) {
                  if (input) {
                    return true;
                  }
                  console.log("Please enter an office number!");
                  return false;
                },
              },
        ])
        .then((answer) => {
            const {name, id, email, office} = answers;
            return [new Manager(name, id, email, office)];
        });
}