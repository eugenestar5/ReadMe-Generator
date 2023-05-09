// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkDown = require('./utils/generateMarkdown.js')
const path = require("path")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'Title'
    },

    {
        type: 'input',
        message: 'Please describe your project?',
        name: 'Description'
    },

    {
        type: 'input',
        message: 'How can you install this project?',
        name: 'Installation'
    },

    {
        type: 'input',
        message: 'How can this web application be used?',
        name: 'Usage'
    },

    {
        type: 'list',
        message: 'What license would you use?',
        name: 'license',
        choices: ["MIT" , "Apache" , "N/A"]
    },

    {
        type: 'input',
        message: 'Are there any contributers?',
        name: 'Contributing'
    },

    {
        type: 'input',
        message: 'Are there any tests?',
        name: 'Tests'
    },

    {
        type: 'input',
        message: 'Are there any questions?',
        name: 'Questions'
    },

    {
        type: 'input',
        message: 'Are there any organization or people you want to give credit for using their maetrials or resources?',
        name: 'Credits'
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName , data) {

    return fs.writeFile(path.join(process.cwd(), fileName), data, err => console.log(err));

}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then((data) => {
       
        writeToFile('README.md', generateMarkDown({...data}));

});
}

// Function call to initialize app
init();
