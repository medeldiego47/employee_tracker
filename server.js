require('dotenv').config();
const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable= require('console.table');


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
    })
}