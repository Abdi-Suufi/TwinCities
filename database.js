const mysql = require('mysql');

// create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mySQL'
});

// connect to the database
connection.connect();

// define the SQL query to select all data from a table
const sql = 'SELECT * FROM sys.Landmarks;';

// execute the query
connection.query(sql, function (error, results, fields) {
    if (error) throw error;
    console.table(results); // this will print all the data from the table
});

// close the database connection
connection.end();

