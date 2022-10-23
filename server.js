require('dotenv').config();
const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable= require('console.table');
const { exit } = require('process');


const connection = mysql.createConnection( {
    host:"localhost",
    user:"root",
    password: process.env.PASSWORD,
    database:"employee_db"
});
connection.connect (function(err){
    (err)? console.log(err):console.log(`connected as ${connection.threadId}`);
    
    init()
});

function init(){
    inquirer.prompt({
        type:"list",
        choices:[
            "View All Departments",
            "View All Roles",
            "View All Employees",
            "Add a Department",
            "Add a Role",
            "Add an Employee",
            "Update an Employees Role",
            "Exit"

        ],
        message:"Please select an option from the list below",
        name:"menu"
    }).then(function(result){
        console.log(`You have selected to ${result.menu}`);

        switch(result.menu){
            case "View All Departments":
                viewDepartments();
                break;
            case "View All Roles":
                viewAllRoles();
                break;
            case "View All Employees":
                viewAllEmployees();
                break;
            case "Add a Department":
                addDepartment();
                break;
            case "Add a Role":
                addRole();
                break;
            case "Add an Employee":
                addEmployee();
                break;
            case "Update an Employees Role":
                updateEmployee();
                break;
            case "Exit":
                exit();
        } })
};