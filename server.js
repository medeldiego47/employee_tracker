require('dotenv').config();
const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable= require('console.table');
const { exit } = require('process');

const db = mysql.createConnection( {
    host:"localhost",
    user:"root",
    password: process.env.PASSWORD,
    database:"employee_db"
});
db.connect (function(err){
    (err)? console.log(err):console.log(`connected as ${db.threadId}`);
    
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

function viewDepartments(){
    let query = "SELECT * FROM department";
    db.query(query, function(err,res){
        err? console.log(err):console.table(res);
        init();
    })
};

function viewAllRoles(){
    let query = "SELECT * FROM role";
    db.query(query, function(err,res){
        err? console.log(err):console.table(res);
        init();
    })
};

function viewAllEmployees(){
    let query = "SELECT * FROM employee";
    db.query(query, function(err,res){
        err? console.log(err):console.table(res);
        init();
    })
};

function addDepartment(){
    inquirer.prompt({
        type:"input",
        message: "what is the name of the new department?",
        name:"department"
    }).then((result)=>{ 
        let query = "INSERT INTO department (name) VALUES (?)"
        db.query(query,[result.department],(err,res)=>{
        (err)?console.log(err):console.table(res);
        let query2 = "SELECT * FROM department";
        db.query(query2, function(err,res){
            err? console.log(err):console.table(res);
            init();
        })
        
    })

    })
}