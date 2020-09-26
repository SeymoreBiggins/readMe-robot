const inquirer = require('inquirer')

const fs = require('fs');

const generateMarkdown = require("./Develop/utils/generateMarkdown");

// Questions Array
const questions = [
  // Questions go in here
  {
    type:'input',
    name:'title',
    message:'Please enter the name of your project.'
  },
  {
    type:'input',
    name:'email',
    message:'Please enter the email address associated with this application.'
  },
  {
    type:'input',
    name:'userName',
    message:'Please enter your gitHub username.'
  },
  {
    type:'input',
    name:'describe',
    message:'Enter a brief description of ' + questions[0][name] + '.'
  },
  {
    type:'input',
    name:'install',
    message:'Enter a brief description of the installation process for ' + questions[0][name] + '.'
  },
  {
    type:'input',
    name:'usage',
    message:'Provide instructions for and examples of your project.'
  },
  {
    type:'input',
    name:'credit',
    message:'Link and collaborators who helped on this project.'
  },
  {
    type:'list',
    name:'license',
    message:'Select a license to use for your project.',
    choices: [
      'Unlicense',
      'Apache',
      'Boost',
      'Perl',
      'MIT'
    ]
  },
  {
    type:'input',
    name:'future',
    message:'Would you like people to contribute to your project? In what way?'
  },
  {
    type:'input',
    name:'tests',
    message:'Do you have any tests made for your project?'
  }
];

// function to write README file
async function writeToFile(fileName, data) {
  await fs.promises.writeFile(fileName, data, 'utf-8');
}

// function to initialize program
async function init() {
  const answers = await inquirer.prompt(questions);
  const createMarkdown = generateMarkdown(answers);
  await writeToFile('README.md', createMarkdown);
}

// function call to initialize program
init();
