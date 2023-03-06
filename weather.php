<!doctype html>
<!--This code begins with an HTML document that includes a stylesheet and a navigation bar with a link to the home page. The PHP script starts with an include statement that imports the config.php file, which contains the API key and URLs needed to access the OpenWeatherMap API.-->
<link rel="stylesheet" href="css/bootstrap.css">
<div class="navbar">
  <a href="index.php">Home</a>
</div>
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
