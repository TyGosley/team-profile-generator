# Team Profile Generator

## Table of Contents

___

* [Description](#description)
* [Languages](#languages)
* [Installation](#installation)
* [Usage](#usage)
* [Demonstration](#demonstration)
* [Screenshot](#screenshot)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)
* [Credits](#credits)

## Description

___

As a manager, you want to generate a webpage that displays your team's basic info so that you can have quick access to their information. Welcome to the team profile generator.  This application will help you create a simple webpage with the corresponding information.

Once you run the proper command in your command line (see usage) you will be given a few prompt questions.  Simply answer the questions about each employee type and continue for all employees needed.

Upon completion of the prompts, an HTML file will generate and it will contain separate cards with all of your employees' info, including:

* name
* role
* employee ID
* email
* office number (manager)
* GitHub profile (engineer)
* school name (intern)

From the created webpage, you can now view the above information.  If you click on the employees email, you will be taken to your email app with their email address already in the recipients field. This also works for the engineer's GitHub name.  Once clicked, it will take you directly to their GitHub page.

You know have all of your employee's information in one place with this simple process.

## Languages

___
This application was built using:

* JavaScript
* HTML
* CSS
* Node/NPM
* Inquirer
* Jest
* OOP (Object Oriented Programming)
* TDD (Test-Driven Development)

## Installation

___

1. **Copy Link:** Within this repository, hit the "Code" button to copy the link.
1. **Clone Code:** Using your terminal or Gitbash, type the following:  "git clone *paste copied URL here*"
1. **Install NPM:** Being in the correct directory of your project, install NPM using the command "npm init -y" in your command line on your terminal or Gitbash.
1. **Intall Inquire:** Being in the correct directory of your project, install inquirer using the command "npm install inquirer@8.2.4" in your command line on your terminal or Gitbash.
1. **Jest:** Use the command "npm install jest --save-dev" (make sure to enter "jest" as the test value in package.json)

## Usage

___

Once software is downloaded and Node packages are initialized, it's time to get started!

Within the directory for this project, start the game by using the command "node index.js". From there, you will be prompted to first enter the information for the manager, and then you'll be taken to the main menu where you can either add an engineer, add an intern, or end the application and generate your HTML file.

Once completed, navigate to the 'dist' subdirectory to find your new team HTML profile!

## Demonstration

___

Click [here](https://drive.google.com/file/d/13ZRr9mMGcIVyYjcc97YfvsTegwQ0tO1r/view) to see the Team Profile Generator in action!

## Screenshot

___

Screenshot of the index.html file created.
!["Team Profile Generated](./main/images/team-assembled-profile-gen.png)

## Contributing

___

I am all about contructive criticsm and learning as I am on a new path, so if you see anything that can be improved, please reach out.

## Tests

___

The Employee test file checks for the creation of a new employee.

The Manager, Engineer, and Intern test files check for the creation of a new employee for its specified role, extended from the Employee file, and that their respective properties and methods work properly.

To run a test, use the command "npm run test *file name*" to test only one file, or "npm run test" to run all tests at once.

## Questions

___

Do you have questions about this project?  
GitHub: https://github.com/TyGosley  
Email: tygosley@gmail.com

## License

___

N/A

## Credits

___

[Markdown Crash Course](https://www.youtube.com/watch?v=HUBNt18RFbo)

[Jest](https://jestjs.io/docs/getting-started)

[NPM Install](https://docs.npmjs.com/cli/v6/commands/npm-init)

[NPM Inquirer](https://www.npmjs.com/package/inquirer)

[Codecademy](https://www.codecademy.com/learn)

[Khan Academy](https://www.khanacademy.org/)

[MDN Docs](https://developer.mozilla.org/en-US/)

[W3Schools](https://www.w3schools.com/js/default.asp)

[JavaScript.info](https://javascript.info/)

[CodeHS](https://codehs.com/)

[CSS Snippet Cheatsheet](https://github.com/TyGosley/css-snippet-cheatsheet)
