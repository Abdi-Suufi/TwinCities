
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Landmarks</title>
<link rel="stylesheet" href="css/bootstrap.css">
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
.flickrimg {
margin: 20px auto;
text-align: center;
}
</style>
</head>
<body>
<?php
function getLandmarkData($pdo, $landmarkName) {
    if(isset($landmarkName)) {
        $stmt = $pdo->prepare('SELECT * FROM sys.Landmarks WHERE name = :name');
        $stmt->bindParam(':name', $landmarkName);
        $stmt->execute();
    } else {
        $stmt = $pdo->query('SELECT * FROM sys.Landmarks');
    }
    return $stmt;
}

function getFlickrPhotoUrl($landmark_tag) {
    $flickrApiKey = '3cb96aaa4b49a42b1f147d5bfcf4d9e2';
    $url_base = 'https://api.flickr.com/services/rest/?method=flickr.photos.search';
    $url_base .= '&api_key=' . $flickrApiKey;
    $url_base .= '&page=1';
    $url_base .= '&per_page=1';
    $url_base .= '&format=json';
    $url_base .= '&nojsoncallback=1';
    $url = $url_base . '&tags=' . $landmark_tag;
    $response = file_get_contents($url);
    $data = json_decode($response, true);
    $photo = $data['photos']['photo'][0];
    $photo_url = 'https://live.staticflickr.com/' . $photo['server'] . '/' . $photo['id'] . '_' . $photo['secret'] . '.jpg';
    return $photo_url;
}

function displayLandmarkCard($row, $photo_url) {
  $photo = array('title' => ''); // Assign a default value to the $photo variable
  echo '<div class="card mb-3">';
  echo '<img class="card-img-top" src="' . $photo_url . '" alt="' . $photo['title'] . '">';
  echo '<div class="card-body">';
  echo '<h1 class="card-title">' . $row['name'] . '</h1>';
  echo '<h2 class="card-subtitle mb-2 text-muted">' . $row['city'] . ', ' . $row['country'] . '</h2>';
  echo '<p class="card-text">' . $row['description'] . '</p>';
  echo '<p class="card-text"><b>Year built:</b> ' . $row['year_built'] . '</p>';
  echo '<p class="card-text"><b>Architect:</b> ' . $row['architect'] . '</p>';
  echo '<p class="card-text"><b>Style:</b> ' . $row['style'] . '</p>';
  echo '</div></div>';
}

?>
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
    <div>
</nav>
<div class="container">
<div class="row">
<div class="col-md-12">
<?php
$urlParams = $_SERVER['QUERY_STRING'];
parse_str($urlParams, $params);
$landmarkName = $params['name'];
require 'connect.php';
$stmt = getLandmarkData($pdo, $landmarkName);
if($stmt->rowCount() > 0) {
    while ($row = $stmt->fetch()) {
        $landmark_tag = str_replace(' ', '+', $row['name']);
        $photo_url = getFlickrPhotoUrl($landmark_tag);
        displayLandmarkCard($row, $photo_url);
    }
}
?>
</body>
</html>