const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const path = require("path");
const inquirer = require('inquirer');
const fs = require('fs');

// const OUTPUT_DIR = path.resolve(_dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

const generator = require("index");

const team = [];
addtoTeam();

function addtoTeam(){
    inquirer.prompt([
    {
        type: "list",
        name: "addEmployee",
        message: "Add an employee, or select 'Finish'.",
        choices: [
            "Manager",
            "Engineer",
            "Intern",
            "Finish",
        ]
    }]).then(function(data){
        const employeeRole = data.addEmployee;
        if (employeeRole === "Manager"){
            managerInfo();
        }
        else if (employeeRole === "Engineer") {
            engineerInfo();
        }
        else if (employeeRole === "Intern"){
            internInfo();
        }
        else if (employeeRole === "Finish"){
            renderTeam();
        }
    })
};

function managerInfo(){
    inquirer.prompt([
    {
        type: "input",
        name: "managerName",
        message: "Manager's Name:",
    },
    {
        type: "input",
        name: "managerRole",
        message: "Manager's Role:",
    },
    {
        type: "input",
        name: "managerId",
        message: "Managers's ID:",
    },
    {
        type: "input",
        name: "managerEmail",
        message: "Manager's Email:",
    },
    {
        type: "input",
        name: "managerGithub",
        message: "Manager's Github:",
    },

    ]).then(function(data){
        const manager = new Manager(data.managerName, data.managerRole, data.managerId, data.managerEmail, data.managerGithub);
        team.push(manager);
        addtoTeam();
    });
};

function engineerInfo(){
    inquirer.prompt([
    {
        type: "input",
        name: "engineerName",
        message: "Engineer's Name:",
    },
    {
        type: "input",
        name: "engineerRole",
        message: "Engineer's Role:",
    },
    {
        type: "input",
        name: "engineerId",
        message: "Engineer's ID:",
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "Engineer's Email:",
    },
    {
        type: "input",
        name: "engineerGithub",
        message: "Engineer's Github:",
    },

    ]).then(function(data){
        const engineer = new Engineer(data.engineerName, data.engineerRole, data.engineerId, data.engineerEmail, data.engineerGithub);
        team.push(engineer);
        addtoTeam();
    });
};

function internInfo(){
    inquirer.prompt([
    {
        type: "input",
        name: "internName",
        message: "Intern's Name:",
    },
    {
        type: "input",
        name: "internRole",
        message: "Intern's Role:",
    },
    {
        type: "input",
        name: "internEmail",
        message: "Intern's Email:",
    },
    {
        type: "input",
        name: "internSchool",
        message: "Intern's School:",
    },

    ]).then(function(data){
        const intern = new Intern(data.internName, data.internRole, data.internEmail, data.internSchool);
        team.push(intern);
        addtoTeam();
    });
};