// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// const { log } = require("console");

// TODO: Create an array of questions for user input
const questions = [
        {
            type: "input",
            message: "Project title",
            name: "title",
        },
        {
            type: "input",
            message: "Project description",
            name: "description",
        },
        {
            type: "input",
            message: "Project installation",
            name: "installation",
        },
        {
            type: "input",
            message: "Project usage",
            name: "usage",
        },
        {
            type: "input",
            message: "Project contributing",
            name: "contributing",
            default: "Contact me if your intersted in contributing"
        },
        {
            type: "input",
            message: "Project tests",
            name: "tests",
            default: "Section to be added in the near future"
        },
        {
            type: "list",
            message: "Project license",
            name: "license",
            choices: [
                "mit",
                "intel",
                "jam",
                "unlicense",
                "none"
            ],
        },
        {
            type: "input",
            message: "GitHib Username",
            name: "username",
            default: "AZurek17"
        },
        {
            type: "input",
            message: "Email",
            name: "email",
            default: "andyzurek@gmail.com"
        },
    
];
//* add type, name, and message for each question
//* add questions:  added readme sections (description, usage, license, etc)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
//* use FS module to write data and fileName to readme file

fs.writeFile(fileName, data, (err) =>
err ? console.log(err) : console.log('Generated README.md'))  
}

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt (questions)
      .then((response) => {
      console.log(response)
      writeToFile("readme.md", generateMarkdown(response));
     
    })

}

// Function call to initialize app
init();

//* use inquiter to display questios to user
//* call generateMarkdown function on the data collected
//* take what is returned to us, then pass it to the writeToFile funciton
