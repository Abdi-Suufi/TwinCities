<!DOCTYPE html>
//HTML page that includes a navigation bar and an empty div element with the id of landmarkName.
<html>
<head>
<link rel="stylesheet" href="css/bootstrap.css">
  <title>Landmarks</title>
</head>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="index.php">Home</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="weather.php">Weather</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="Landmarks.php">Landmarks</a>
      </li>
    </ul>
  </div>
</nav>
<body>
  <div id="landmarkName"></div>
//some styles for HTML elements using CSS
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
//This code is a PHP script that fetches data about landmarks from a database and displays it on an HTML page.
  <?php
  $urlParams = $_SERVER['QUERY_STRING'];
  parse_str($urlParams, $params);
  $landmarkName = $params['name'];

  require 'connect.php';

  if(isset($_GET['name'])) {
    $landmarkName = $_GET['name'];
    $stmt = $pdo->prepare('SELECT * FROM sys.Landmarks WHERE name = :name');
    $stmt->bindParam(':name', $landmarkName);
    $stmt->execute();
} else {
    // If no landmark name is present, select all landmarks
    $stmt = $pdo->query('SELECT * FROM sys.Landmarks');
}

// Check if there are any landmarks to display
if($stmt->rowCount() > 0) {
    while ($row = $stmt->fetch()) {
        echo '<h1>' . $row['name'] . '</h1>'
            . '<h2>' . $row['city'] . ', ' . $row['country'] . '</h2>'
            . '<p>' . $row['description'] . '</p>'
            . '<p><b>Year built:</b> ' . $row['year_built'] . '</p>'
            . '<p><b>Architect:</b> ' . $row['architect'] . '</p>'
            . '<p><b>Style:</b> ' . $row['style'] . '</p>';
    }
}
?>
</body>
</html>
