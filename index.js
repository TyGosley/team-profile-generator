// TODO: const generateHTML require

// ✅ require('fs)
// ✅ require('inquirer)
// ✅ require(Manager)
// ✅ require(Engineer)
// ✅ require(Intern)
const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./main/src/generateHTMLgenerateHTML");
const Manager = require("./main/lib/Manager");
const Engineer = require("./main/lib/Engineer");
const Intern = require("./main/lib/Intern");


const teamArray = [];

const addManager = () => {
    return inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: "To start, please enter the manager's full name;",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("You must enter a full name!");
                    return false;
                }
            }
        },
        
    ])
}

