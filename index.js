const fs = require('fs');
const inquire = require('inquirer');


const questions = [{
        type: "list",
        message: "Choose the role of the employee:",
        choices: ["Manager", "Intern", "Engineer"],
        name: "employee"
    },
    {
        type: "input",
        message: "What is the name of the employee?",
        name: "employeeName"
    },
    {
        type: "input",
        message: "What is the ID for the employee?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the email for the employee?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the office number for the manager?",
        name: "officeNumber",
        when: (answer) => answer.employee === "Manager"
    },
    {
        type: "input",
        message: "What is the github for the engineer?",
        name: "github",
        when: (answer) => answer.employee === "Engineer"
    },
    {
        type: "input",
        message: "What is the school of the intern?",
        name: "school",
        when: (answer) => answer.employee === "Intern"
    }
];


function init() {
    inquire
    .prompt(questions)
    .then((response => {
        console.log(response);
    }));
}

init();