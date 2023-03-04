<?php
//PHP code that defines variables used to connect to a MySQL database using the PDO (PHP Data Objects) extension
$host = '127.0.0.1';
$dbname = 'mySQL';
$username = 'root';
$password = 'password';

$dsn = "mysql:host=$host;dbname=$dbname;charset=utf8mb4";
//This is a PHP array that sets some options for the PDO connection
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false,
];
//This is the final part of the PHP code that actually creates a new PDO object and connects to the MySQL database using the DSN, username, password, and options set earlier. 
try {
    $pdo = new PDO($dsn, $username, $password, $options);
} catch (PDOException $e) {
    throw new PDOException($e->getMessage(), (int)$e->getCode());
}

?>
