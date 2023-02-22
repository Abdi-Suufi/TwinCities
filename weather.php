<!doctype html>
    <link rel="stylesheet" href="styles.css">
    <div class="navbar">
      <a href="index.php">Home</a>
  </div>
<?php
include 'config.php';
 
$dataManchester = file_get_contents($urlManchester);
$weatherManchester = json_decode($dataManchester);
$dataWuhan = file_get_contents($urlWuhan);
$weatherWuhan = json_decode($dataWuhan);

$temperatureManchester = $weatherManchester->main->temp;
$descriptionManchester = $weatherManchester->weather[0]->description;
$iconManchester = $weatherManchester->weather[0]->icon;
$feelsLikeManchester = $weatherManchester->main->feels_like;
$humidityManchester = $weatherManchester->main->humidity;
$windSpeedManchester = $weatherManchester->wind->speed;

$temperatureWuhan = $weatherWuhan->main->temp;
$descriptionWuhan = $weatherWuhan->weather[0]->description;
$iconWuhan = $weatherWuhan->weather[0]->icon;
$feelsLikeWuhan = $weatherWuhan->main->feels_like;
$humidityWuhan = $weatherWuhan->main->humidity;
$windSpeedWuhan = $weatherWuhan->wind->speed;

$html = '<h1>Current weather in Manchester<img src="http://openweathermap.org/img/w/'.$iconManchester.'.png"></h1>';
$html .= '<p>Temperature: '.$temperatureManchester.' &deg;C</p>';
$html .= '<p>Description: '.$descriptionManchester.'</p>';
$html .= '<p>Feels like: '.$feelsLikeManchester.' &deg;C</p>';
$html .= '<p>Humidity: '.$humidityManchester.' %</p>';
$html .= '<p>Wind speed: '.$windSpeedManchester.' km/h</p>';

$html .= '<h1>Current weather in Wuhan<img src="http://openweathermap.org/img/w/'.$iconWuhan.'.png"></h1>';
$html .= '<p>Temperature: '.$temperatureWuhan.' °C</p>';
$html .= '<p>Description: '.$descriptionWuhan.'</p>';
$html .= '<p>Feels like: '.$feelsLikeWuhan.' °C</p>';
$html .= '<p>Humidity: '.$humidityWuhan.' %</p>';
$html .= '<p>Wind speed: '.$windSpeedWuhan.' km/h</p>';

echo $html;
?>
</html>


