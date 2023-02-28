<!DOCTYPE html>
//This code creates an HTML document with a title "Landmarks" and an empty div element with an id of landmarkName
//It also includes JavaScript code that extracts the value of the name parameter from the URL query string and sets it as the content of the div element.
<html>
<head>
  <link rel="stylesheet" href="styles.css">
  <title>Landmarks</title>
</head>
<body>
  <div id="landmarkName"></div>


  <?php
  $urlParams = $_SERVER['QUERY_STRING'];
  parse_str($urlParams, $params);
  $landmarkName = $params['name'];

  require 'connect.php';

  $stmt = $pdo->query('SELECT * FROM sys.Landmarks WHERE name = "' . $landmarkName . '"');

  while ($row = $stmt->fetch()) {
      echo '<h1>' . $row['name'] . '</h1>'
      . '<h2>' . $row['city'] . ', ' . $row['country'] . '</h2>' ;
  }
?>

  
</body>
</html>
