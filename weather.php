<!doctype html>
<!--This code begins with an HTML document that includes a stylesheet and a navigation bar with a link to the home page. The PHP script starts with an include statement that imports the config.php file, which contains the API key and URLs needed to access the OpenWeatherMap API.-->
    <link rel="stylesheet" href="css/bootstrap.css">
    <div class="navbar">
      <a href="index.php">Home</a>
  </div>
<?php
include 'config.php';
 //PHP to retrieve weather data for Manchester and Wuhan
$dataManchester = file_get_contents($urlManchester);
$weatherManchester = json_decode($dataManchester);
$dataWuhan = file_get_contents($urlWuhan);
$weatherWuhan = json_decode($dataWuhan);
// using PHP to extract specific weather data for Manchester 
$temperatureManchester = $weatherManchester->main->temp;
$descriptionManchester = $weatherManchester->weather[0]->description;
$iconManchester = $weatherManchester->weather[0]->icon;
$feelsLikeManchester = $weatherManchester->main->feels_like;
$humidityManchester = $weatherManchester->main->humidity;
$windSpeedManchester = $weatherManchester->wind->speed;
//extract specific weather data for Wuhan
$temperatureWuhan = $weatherWuhan->main->temp;
$descriptionWuhan = $weatherWuhan->weather[0]->description;
$iconWuhan = $weatherWuhan->weather[0]->icon;
$feelsLikeWuhan = $weatherWuhan->main->feels_like;
$humidityWuhan = $weatherWuhan->main->humidity;
$windSpeedWuhan = $weatherWuhan->wind->speed;
//The code builds an HTML string $html that displays the current weather information for Manchester
$html = '<h1>Current weather in Manchester<img src="http://openweathermap.org/img/w/'.$iconManchester.'.png"></h1>';
$html .= '<p>Temperature: '.$temperatureManchester.' &deg;C</p>';
$html .= '<p>Description: '.$descriptionManchester.'</p>';
$html .= '<p>Feels like: '.$feelsLikeManchester.' &deg;C</p>';
$html .= '<p>Humidity: '.$humidityManchester.' %</p>';
$html .= '<p>Wind speed: '.$windSpeedManchester.' km/h</p>';
// builds an HTML string $html that displays the current weather information for Wuhan
$html .= '<h1>Current weather in Wuhan<img src="http://openweathermap.org/img/w/'.$iconWuhan.'.png"></h1>';
$html .= '<p>Temperature: '.$temperatureWuhan.' °C</p>';
$html .= '<p>Description: '.$descriptionWuhan.'</p>';
$html .= '<p>Feels like: '.$feelsLikeWuhan.' °C</p>';
$html .= '<p>Humidity: '.$humidityWuhan.' %</p>';
$html .= '<p>Wind speed: '.$windSpeedWuhan.' km/h</p>';
//The code is the final step of the script and outputs the HTML string $html to the browser
echo $html;
?>
</html>

