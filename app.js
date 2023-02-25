const mysql = require('mysql');
const express = require('express');
const path = require('path');
const config = require('./public/config.json');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mySQL'
});

connection.connect();

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const sqlQuery = 'SELECT * FROM sys.Landmarks';

app.get('/', function (req, res) {
    connection.query(sqlQuery, function (error, results, fields) {
        if (error) throw error;
        res.render('index', { landmarks: results }); 
    });
});

app.get('/weather.ejs', function(req, res) {

    res.render('weather');
  });
  

app.listen(3000, function () {
    console.log('Server started on port 3000');
});
