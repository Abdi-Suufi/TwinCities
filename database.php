<?php

$servername = "localhost";
$username = "root";
$password = "password";
$dbname = "TwinCities";
$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT name FROM Landmarks WHERE id = 1"; 
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  
  $row = $result->fetch_assoc();
  echo $row["name"];
} else {
  echo "Landmark not found";
}

$conn->close();
?>