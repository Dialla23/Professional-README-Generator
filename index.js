// TODO: Include packages needed for this applicationcons
const inquirer= require('inquirer')
// TODO: Create an array of questions for user input
const questions = [

    {
        type:'input',
        message: 'What the projects title',
        name:'title'
    },
    {
        type:'input',
        message: 'description',
        name:'description'
    },

    {
        type:'input',
        message: 'installation',
        name:'installation'
    },

    {
        type:'input',
        message: 'usage',
        name:'usage'
    },

    {
        type:'list',
        message: 'license',
        name:'license',
        choices:['mit','gnu',]
    },

    {
        type:'input',
        message: 'contributing',
        name:'contributing'
    },
        {
            type:'input',
        message: 'tests',
        name:'tests'
        },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(function(data){
        console.log(data)
    })
}

// Function call to initialize app
init();
