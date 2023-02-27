// ✅ require('fs)
// ✅ require('inquirer)
// ✅ const generateHTML require
// ✅ require(Manager)
// ✅ require(Engineer)
// ✅ require(Intern)
const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./lib/generateHTML");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const teamArray = [];
// add manager info prompt questions
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
        {
            name: 'id',
            type: 'input',
            message: "Please provide the manager's ID.",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter an ID!");
                    return false;
                }
            }
        },
        {
            name: 'email',
            type: 'email',
            message: "Please provide the manager's email address.",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter an email!");
                    return false;
                }
            }
        },
        {
            name: 'officeNumber',
            type: 'input',
            message: "Please provide the manager's office number.",
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log("Please enter an office number!");
                    return false;
                }
            }
        }
    ])
    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id, email, officeNumber);
        teamArray.push(manager);
        console.log(manager);
    })
};
// add employee info prompt questions
const addEmployee = () => {
    console.log(` `);
    return inquirer.prompt ([
        {
            name: 'role',
            type: 'list',
            message: "Please provide your employee's title/role.",
            choices: ['Engineer', 'Intern']
        },
        {
            name: 'name',
            type: 'input',
            message: "Please enter the employees name.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter an employee's name!")
                    return false;
                }
            }
        },
        {
            name: 'id',
            type: 'input',
            message: "Please provide the employee's ID.",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter an ID!");
                    return false;
                }
            }
        },
        {
            name: 'email',
            type: 'email',
            message: "Please provide the employee's email address.",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter an email!");
                    return false;
                }
            }
        },
        {
            name: 'github',
            type: 'input',
            message: "Please provide the employee's Github username.",
            when: (input) =>input.role === "Engineer",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter an github username!");
                    return false;
                }
            }
        },
        {
            name: 'school',
            type: 'input',
            message: "Please enter the school attended by Intern.",
            when: (input) => input.role === "Intern",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter a school name.");
                    return false;
                }
            }
        },
        {
            name: 'confirmAddEmployee',
            type: 'confirm',
            message: "Would you like to add another team member?",
            default: false
        }
    ])
    .then(employeeData => {
        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log(employee);
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }
        teamArray.push(employee);

        if (confirmAddEmployee) {
            return addEmployee(teamArray);
        } else {
            return teamArray;
        }
    })
};

// create function to create HTML page using fs
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Success! Your team profile has been created! Please check out the index.html located in the 'dist' folder.")
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });

