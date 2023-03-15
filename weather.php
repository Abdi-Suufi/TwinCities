<!doctype html>
<!--This code begins with an HTML document that includes a stylesheet and a navigation bar with a link to the home page. The PHP script starts with an include statement that imports the config.php file, which contains the API key and URLs needed to access the OpenWeatherMap API.-->
  
<link rel="stylesheet" href="css/bootstrap.css">

<!-- Add the Bootstrap navbar component -->
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

  $html = '<table class="table table-striped">'.
    '<thead><tr><th>Manchester</th><th>Wuhan</th></tr></thead>'.
    '<tbody>'.
      '<tr>'.
        '<td><h1>Current weather in Manchester<img src="http://openweathermap.org/img/w/' . $manchesterData['icon'] . '.png"></h1>'.
        '<p>Temperature: ' . $manchesterData['temperature'] . ' &deg;C</p>'.
        '<p>Description: ' . $manchesterData['description'] . '</p>'.
        '<p>Feels like: ' . $manchesterData['feelsLike'] . ' &deg;C</p>'.
        '<p>Humidity: ' . $manchesterData['humidity'] . ' %</p>'.
        '<p>Wind speed: ' . $manchesterData['windSpeed'] . ' km/h</p></td>'.

        '<td><h1>Current weather in Wuhan<img src="http://openweathermap.org/img/w/' . $wuhanData['icon'] . '.png"></h1>'.
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
              'dateTime' => $dateTime->format('Y-m-d H:i:s'),
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
$html = '<h2>' . $cityName . '</h2>';
$html .= '<div class="table-responsive">';
$html .= '<table class="table table-striped">';
$html .= '<thead>';
$html .= '<tr>';
$html .= '<th>Date/Time</th>';
$html .= '<th>Description</th>';
$html .= '<th>Temperature (&deg;C)</th>';
$html .= '<th>Feels Like (&deg;C)</th>';
$html .= '<th>Humidity (%)</th>';
$html .= '<th>Wind Speed (m/s)</th>';
$html .= '</tr>';
$html .= '</thead>';
$html .= '<tbody>';
foreach ($forecastData as $forecast) {
    $html .= '<tr>';
    $html .= '<td>' . $forecast['dateTime'] . '</td>';
    $html .= '<td>' . $forecast['description'] . '</td>';
    $html .= '<td>' . $forecast['temperature'] . '</td>';
    $html .= '<td>' . $forecast['feelsLike'] . '</td>';
    $html .= '<td>' . $forecast['humidity'] . '</td>';
    $html .= '<td>' . $forecast['windSpeed'] . '</td>';
    $html .= '</tr>';
}
$html .= '</tbody>';
$html .= '</table>';
$html .= '</div>';

echo $html;
}


getWeatherData($urlManchesterForecast, "Manchester Forecast");
getWeatherData($urlWuhanForecast, "Wuhan Forecast");
?>
