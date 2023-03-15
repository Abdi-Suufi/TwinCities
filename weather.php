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
    return array(
        'temperature' => $temperature,
        'description' => $description,
        'icon' => $icon,
        'feelsLike' => $feelsLike,
        'humidity' => $humidity,
        'windSpeed' => $windSpeed,
    );
}

function getWeatherData($url, $cityName) {

  $response = file_get_contents($url);
  $json = json_decode($response);
  $data = extractWeatherData($json);

  // Extract the relevant weather data for the next 5 days at 3-hour intervals
  $forecastData = array();
  foreach ($data->list as $forecast) {
      $dateTime = new DateTime($forecast->dt_txt);
      if ($dateTime->format('H') == '03' && $dateTime < (new DateTime('+5 days'))) {
          $temperature = round($forecast->main->temp - 273.15, 1);
          $description = $forecast->weather[0]->description;
          $icon = $forecast->weather[0]->icon;
          $feelsLike = round($forecast->main->feels_like - 273.15, 1);
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
  $html .= '<table>';
  $html .= '<tr><th>Date/Time</th><th>Description</th><th>Temperature</th><th>Feels Like</th><th>Humidity</th><th>Wind Speed</th></tr>';
  foreach ($forecastData as $forecast) {
      $html .= '<tr>';
      $html .= '<td>' . $forecast['dateTime'] . '</td>';
      $html .= '<td>' . $forecast['description'] . '</td>';
      $html .= '<td>' . $forecast['temperature'] . ' &deg;C</td>';
      $html .= '<td>' . $forecast['feelsLike'] . ' &deg;C</td>';
      $html .= '<td>' . $forecast['humidity'] . '%</td>';
      $html .= '<td>' . $forecast['windSpeed'] . ' m/s</td>';
      $html .= '</tr>';
  }
  $html .= '</table>';

  echo $html;
}

getWeatherData($urlManchesterForecast, "Manchester");
getWeatherData($urlWuhanForecast, "Wuhan");

  
// Retrieve weather data for Manchester and Wuhan
$dataManchester = file_get_contents($urlManchester);
$weatherManchester = json_decode($dataManchester);

$dataWuhan = file_get_contents($urlWuhan);
$weatherWuhan = json_decode($dataWuhan);

// Extract specific weather data using the function
$manchesterData = extractWeatherData($weatherManchester);
$wuhanData = extractWeatherData($weatherWuhan);




// Build the HTML string that displays the weather data in a table
$html = '<table class="table table-striped">';
$html .= '<thead><tr><th>Manchester</th><th>Wuhan</th></tr></thead>';
$html .= '<tbody>';
$html .= '<tr>';
$html .= '<td><h1>Current weather in Manchester<img src="http://openweathermap.org/img/w/'.$manchesterData['icon'].'.png"></h1>';
$html .= '<p>Temperature: '.$manchesterData['temperature'].' &deg;C</p>';
$html .= '<p>Description: '.$manchesterData['description'].'</p>';
$html .= '<p>Feels like: '.$manchesterData['feelsLike'].' &deg;C</p>';
$html .= '<p>Humidity: '.$manchesterData['humidity'].' %</p>';
$html .= '<p>Wind speed: '.$manchesterData['windSpeed'].' km/h</p></td>';

$html .= '<td><h1>Current weather in Wuhan<img src="http://openweathermap.org/img/w/'.$wuhanData['icon'].'.png"></h1>';
$html .= '<p>Temperature: '.$wuhanData['temperature'].' °C</p>';
$html .= '<p>Description: '.$wuhanData['description'].'</p>';
$html .= '<p>Feels like: '.$wuhanData['feelsLike'].' °C</p>';
$html .= '<p>Humidity: '.$wuhanData['humidity'].' %</p>';
$html .= '<p>Wind speed: '.$wuhanData['windSpeed'].' km/h</p></td>';
$html .= '</tr>';
$html .= '</tbody>';
$html .= '</table>';

echo $html;
?>
