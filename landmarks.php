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

  <style>
  h1 {
    font-size: 36px;
    font-weight: bold;
    text-align: center;
  }
  h2 {
    font-size: 24px;
    text-align: center;
  }
  p {
    font-size: 18px;
    line-height: 1.5;
    margin: 20px 0;
  }
  b {
    font-size: 20px;
    font-weight: bold;
  }
</style>

  <?php
  $urlParams = $_SERVER['QUERY_STRING'];
  parse_str($urlParams, $params);
  $landmarkName = $params['name'];

  require 'connect.php';

  $stmt = $pdo->query('SELECT * FROM sys.Landmarks WHERE name = "' . $landmarkName . '"');

  while ($row = $stmt->fetch()) {
      echo '<h1>' . $row['name'] . '</h1>'
      . '<h2>' . $row['city'] . ', ' . $row['country'] . '</h2>'
      . '<p>' . $row['description'] . '</p>'
      . '<p><b>Year built:</b> ' . $row['year_built'] . '</p>'
      . '<p><b>Architect:</b> ' . $row['architect'] . '</p>'
      . '<p><b>Style:</b> ' . $row['style'] . '</p>';
  }
?>

</body>
</html>
