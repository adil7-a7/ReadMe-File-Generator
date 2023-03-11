const fs =  require ('fs');
const inquirer = require('inquirer');
const path = require('path');

let badge;

const questions = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'ProjectName',
      message: 'What is your Project Name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please give a description of your project: ',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please enter usage information :',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please enter the Installation Instructions: ',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please select one from the following : ',
      choices: ['MIT', 'ISC', 'GNUPLv3'],
  
    },
    {
      type: 'input',
      name: 'contributors',
      message: 'Please enter the contributors: ',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please enter the tests: ',
    },
    {
      type: 'input',
      name: 'questionGithub',
      message: 'Please enter your GitHub username: ',
    },
    {
      type: 'input',
      name: 'questionEmail',
      message: 'Please enter your email: ',
    },

])

.then((answers) => {
const generateReadMe = 
`
${renderLicense(answers.license)}
# ${answers.ProjectName}
## Description 
* ${answers.description} 

## Table of Contents
  * [Project Description] (#description)
  * Usage (#usage)
  * Installation (#installation)
  * License (#license)
  * Contributors (#contributors)
  * Tests (#tests)
  * Questions (#questionGuthub) (#questionEmail)
  * 
## Usage
* ${answers.usage}

## Installation Instructions
* ${answers.installation}

## License
* ${answers.license}

## Contributors
* ${answers.contributions} 

## Tests
* ${answers.tests} 

## Questions - Reach out to me on:
* Email: ${answers.questionEmail}
* Github: ${answers.questionGithub} 
`;


fs.writeFile(path.join(process.cwd() + '/dist/', 'README.md'), generateReadMe, (err) =>
{
if (err)
{
  console.log ("ERROR! Could not generate file. Please try again! ");
}

else 
{
  console.log('README file has been generated successfully! ');
})
});

let renderLicense = (license) =>
{
  switch (license)
  {
    case "MIT": 
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;

    case "ISC":
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;

    case "GNPUPLv3":
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/GNPUPLv3)`;
  }
}
promptUser();

