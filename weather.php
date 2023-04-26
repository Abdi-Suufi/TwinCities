<!doctype html>
<!--This code begins with an HTML document that includes a stylesheet and a navigation bar with a link to the home page. The PHP script starts with an include statement that imports the config.php file, which contains the API key and URLs needed to access the OpenWeatherMap API.-->
<html>
<link rel="stylesheet" href="css/bootstrap.css">

<style>
  body {
      background-image: url("https://assets.editorial.aetnd.com/uploads/2015/02/topic-golden-gate-bridge-gettyimages-177770941.jpg");
      object-fit: cover;
      background-attachment: fixed;
      background-color: rgba(0,0,0,0.1);
      background-blend-mode: lighten;
      overflow-x: hidden;
    }
  table {
border-collapse: collapse;
width: 100%;
}

body {
      background-image: url("https://assets.editorial.aetnd.com/uploads/2015/02/topic-golden-gate-bridge-gettyimages-177770941.jpg");
      object-fit: cover;
      background-attachment: fixed;
      background-color: rgba(0,0,0,0.1);
      background-blend-mode: lighten;
      overflow-x: hidden;
    }

th, td {
padding: 8px;
text-align: left;
border-bottom: 1px solid #ddd;
background-color: lightgrey;
}

tr {
  background-color: lightgrey;
}

th {
background-color: #f2f2f2;
color: #333;
}

h1 {
font-size: 24px;
}

p {
margin: 0 0 8px;
}

.navbar {
margin-bottom: 32px;
}

.nav-link {
color: #007bff;
}

.nav-link:hover {
color: #0056b3;
}
</style>

<body>
<!-- Add the Bootstrap navbar component -->
<nav class="navbar navbar-expand-lg navbar-light bg-">
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

<?php
include 'config.php';
function extractWeatherData($weather) {
  $temperature = $weather->main->temp;
  $description = $weather->weather[0]->description;
  $icon = $weather->weather[0]->icon;
  $feelsLike = $weather->main->feels_like;
  $humidity = $weather->main->humidity;
  $windSpeed = $weather->wind->speed;
  return [
    'temperature' => $temperature,
    'description' => $description,
    'icon' => $icon,
    'feelsLike' => $feelsLike,
    'humidity' => $humidity,
    'windSpeed' => $windSpeed,
  ];
}

function displayWeatherData($urlManchester, $urlWuhan) {
  $dataManchester = file_get_contents($urlManchester);
  $weatherManchester = json_decode($dataManchester);

  $dataWuhan = file_get_contents($urlWuhan);
  $weatherWuhan = json_decode($dataWuhan);

  $manchesterData = extractWeatherData($weatherManchester);
  $wuhanData = extractWeatherData($weatherWuhan);

  $html = '<table class="table table-striped table-bordered">'.
    '<thead class="thead-dark"><tr><th>Manchester</th><th>Wuhan</th></tr></thead>'.
    '<tbody>'.
      '<tr>'.
        '<td class="bg-primary text-white"><h1>Current weather in Manchester<img src="http://openweathermap.org/img/w/' . $manchesterData['icon'] . '.png"></h1>'.
        '<p>Temperature: ' . $manchesterData['temperature'] . ' &deg;C</p>'.
        '<p>Description: ' . $manchesterData['description'] . '</p>'.
        '<p>Feels like: ' . $manchesterData['feelsLike'] . ' &deg;C</p>'.
        '<p>Humidity: ' . $manchesterData['humidity'] . ' %</p>'.
        '<p>Wind speed: ' . $manchesterData['windSpeed'] . ' km/h</p></td>'.

        '<td class="bg-success"><h1>Current weather in Wuhan<img src="http://openweathermap.org/img/w/' . $wuhanData['icon'] . '.png"></h1>'.
        '<p>Temperature: ' . $wuhanData['temperature'] . ' &deg;C</p>'.
        '<p>Description: ' . $wuhanData['description'] . '</p>'.
        '<p>Feels like: ' . $wuhanData['feelsLike'] . ' &deg;C</p>'.
        '<p>Humidity: ' . $wuhanData['humidity'] . ' %</p>'.
        '<p>Wind speed: ' . $wuhanData['windSpeed'] . ' km/h</p></td>'.
      '</tr>'.
    '</tbody>'.
  '</table>';


  echo $html;
}

// Example usage
displayWeatherData($urlManchester, $urlWuhan);


function getWeatherData($url, $cityName) {

  $response = file_get_contents($url);
  $json = json_decode($response);
  
  // Extract the relevant weather data for the next 7 days at 3-hour intervals
  $forecastData = array();
  foreach ($json->list as $forecast) {
      $dateTime = new DateTime($forecast->dt_txt);
      if ($dateTime->format('H') == '03' && $dateTime < (new DateTime('+7 days'))) {
          $temperature = round($forecast->main->temp, 1);
          $description = $forecast->weather[0]->description;
          $icon = $forecast->weather[0]->icon;
          $feelsLike = round($forecast->main->feels_like, 1);
          $humidity = $forecast->main->humidity;
          $windSpeed = $forecast->wind->speed;
          $forecastData[] = array(
              'dateTime' => $dateTime->format('d-m-Y'),
              'temperature' => $temperature,
              'description' => $description,
              'icon' => $icon,
              'feelsLike' => $feelsLike,
              'humidity' => $humidity,
              'windSpeed' => $windSpeed,
          );
      }
  }

  // Output the forecast data as HTML
  $html = '<div class="table-responsive">
  <table class="table table-striped">
    <thead>
      <tr>
        <th>' . $cityName . '</th>
        <th></th>
      </tr>
      <tr>
        <th>Date/Time</th>
        <th>Description</th>
        <th>Temperature (&deg;C)</th>
        <th>Feels Like (&deg;C)</th>
        <th>Humidity (%)</th>
        <th>Wind Speed (m/s)</th>
      </tr>
    </thead>
    <tbody>';
  foreach ($forecastData as $forecast) {
    $html .= '<tr>
      <td>' . $forecast['dateTime'] . '</td>
      <td>' . $forecast['description'] . '</td>
      <td>' . $forecast['temperature'] . '</td>
      <td>' . $forecast['feelsLike'] . '</td>
      <td>' . $forecast['humidity'] . '</td>
      <td>' . $forecast['windSpeed'] . '</td>
    </tr>';
  }
  $html .= '</tbody>
    </table>
  </div>';

echo $html;
}

getWeatherData($urlManchesterForecast, "Manchester Forecast");
getWeatherData($urlWuhanForecast, "Wuhan Forecast");
?>
</body>
</html>