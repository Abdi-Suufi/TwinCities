<?php
include 'weather.php';

class weatherTest extends \PHPUnit\Framework\TestCase
{
    public function testExtractWeatherData() {
        $weather = new stdClass();
        $weather->main = new stdClass();
        $weather->weather = array(new stdClass());
        $weather->weather[0]->description = 'sunny';
        $weather->weather[0]->icon = '01d';
        $weather->main->temp = 20;
        $weather->main->feels_like = 22;
        $weather->main->humidity = 60;
        $weather->wind = new stdClass();
        $weather->wind->speed = 10;

        $expected = [
            'temperature' => 20,
            'description' => 'sunny',
            'icon' => '01d',
            'feelsLike' => 22,
            'humidity' => 60,
            'windSpeed' => 10,
        ];

        $this->assertEquals($expected, extractWeatherData($weather));
    }

    public function testDisplayWeatherDataOutput() {
        $urlManchester = "http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&units=metric&appid=d439f6429d800a5e1e5491375e19b2af";
        $urlWuhan = "http://api.openweathermap.org/data/2.5/weather?q=Wuhan,cn&units=metric&appid=d439f6429d800a5e1e5491375e19b2af";
        $this->expectOutputRegex('/Current weather in Manchester/');
        $this->expectOutputRegex('/Current weather in Wuhan/');
        displayWeatherData($urlManchester, $urlWuhan);
      }
}

?>