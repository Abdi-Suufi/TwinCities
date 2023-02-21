<?php
$apiKey = 'd439f6429d800a5e1e5491375e19b2af'; // Replace with your OpenWeatherMap API key
$cityId = '1791247'; // Replace with the ID of the city you want weather information for

// Build the API URL
$url = "http://api.openweathermap.org/data/2.5/weather?id=$cityId&appid=$apiKey&units=metric";

// Fetch the data from the API
$data = file_get_contents($url);
$weather = json_decode($data);

// Extract the relevant information from the API response
$temperature = $weather->main->temp;
$description = $weather->weather[0]->description;
$icon = $weather->weather[0]->icon;

// Build the HTML to display the weather information
$html = "<h1>Current weather in Wuhan</h1>";
$html .= "<p>Temperature: $temperature &deg;C</p>";
$html .= "<p>Description: $description</p>";
$html .= "<img src=\"http://openweathermap.org/img/w/$icon.png\">";

// Output the HTML
echo $html;
?>
