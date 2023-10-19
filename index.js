
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    inquirer
    .prompt ([
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
        },
        {
            type: "input",
            message: "Project tests",
            name: "tests",
        },
        {
            type: "list",
            message: "Project license",
            name: "license",
        },
        {
            type: "input",
            message: "GitHib Username",
            name: "username",
        },
    ])
    .then((response) => {
     console.log(response)
    })
    
];
//* add type, name, and message for each question
//* add questions:  added readme sections (description, usage, license, etc)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
//* use FS module to write data and fileName to readme file    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

//* use inquiter to display questios to user
//* call generateMarkdown funcoin on the data collected
//* take what is returned to us, then pass it to the writeToFile funciton
