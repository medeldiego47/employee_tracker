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
    (err)? console.log(err):console.log(`connected as ${connection.threadId}`)
})