<?php
//This code sets up some variables for making API requests to OpenWeatherMap
$apiKey = 'd439f6429d800a5e1e5491375e19b2af'; 
$apiForecastKey = 'e2030fce7f37c376967b4c1649d22f6d';
$manchesterId = '2643123';
$wuhanId = '1791247';
$urlManchester = 'http://api.openweathermap.org/data/2.5/weather?id='.$manchesterId.'&appid='.$apiKey.'&units=metric';
$urlWuhan = 'http://api.openweathermap.org/data/2.5/weather?id='.$wuhanId.'&appid='.$apiKey.'&units=metric';
$urlManchesterForecast = 'http://api.openweathermap.org/data/2.5/forecast?id=' . $manchesterId . '&appid=' .$apiKey.'&units=metric';
$urlWuhanForecast = 'http://api.openweathermap.org/data/2.5/forecast?id=' . $wuhanId . '&appid=' .$apiKey.'&units=metric';
?>