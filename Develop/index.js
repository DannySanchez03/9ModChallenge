// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter your project title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a brief description of your project: ',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide any installations needed to run the project if needed: ',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter the usage of this project: ',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter the names of the contributers: ',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter any tests that were used for this project: ',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email: ',
  },
  {
    type: 'input',
    name: 'username',
    message: 'Enter your github usaername: ',
  },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        const filename = 'README.md';
        const readmeContent = generateMarkdown(data);
        writeToFile(filename, readmeContent);
    });
}

// Function call to initialize app
init();